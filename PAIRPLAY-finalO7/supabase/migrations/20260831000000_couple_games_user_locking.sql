-- Forward-only repair: serialize room create/join decisions per authenticated user.
-- Transaction-scoped advisory locks release automatically on commit or rollback.

begin;

create or replace function public.couple_game_create_room(p_nickname text)
returns table (room_id uuid, room_code text, player_number smallint)
language plpgsql security definer set search_path = pg_catalog, public, extensions
as $$
declare
  v_user_id uuid := auth.uid(); v_nickname text := public.couple_game_clean_nickname(p_nickname);
  v_room_id uuid; v_room_code text; v_bytes bytea;
  v_alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  v_attempt integer := 0; v_index integer;
begin
  if v_user_id is null then raise exception 'authentication_required' using errcode = '28000'; end if;
  if v_nickname is null then raise exception 'invalid_nickname' using errcode = '22023'; end if;

  -- The 64-bit key is namespaced and derived from auth.uid(), so only this user's
  -- create/join decisions serialize; unrelated users never share a deliberate lock.
  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended('couple-game-user:' || v_user_id::text, 0)
  );

  if not public.couple_game_consume_rate_limit(v_user_id, 'create', 5, interval '10 minutes', interval '30 minutes') then raise exception 'rate_limited' using errcode = 'P0001'; end if;
  if exists (
    select 1 from public.couple_game_memberships m join public.couple_game_rooms r on r.id = m.room_id
    where m.user_id = v_user_id and m.left_at is null and r.status in ('waiting','ready','active','complete') and r.expires_at > now()
  ) then raise exception 'active_room_exists' using errcode = 'P0001'; end if;
  loop
    v_attempt := v_attempt + 1; v_bytes := extensions.gen_random_bytes(6); v_room_code := '';
    for v_index in 0..5 loop v_room_code := v_room_code || substr(v_alphabet, (get_byte(v_bytes, v_index) % 32) + 1, 1); end loop;
    begin
      insert into public.couple_game_rooms (room_code) values (v_room_code) returning id into v_room_id; exit;
    exception when unique_violation then
      if v_attempt >= 8 then raise exception 'room_code_unavailable' using errcode = 'P0001'; end if;
    end;
  end loop;
  insert into public.couple_game_memberships (room_id, user_id, player_number) values (v_room_id, v_user_id, 1);
  insert into public.couple_game_participants (room_id, player_number, nickname) values (v_room_id, 1, v_nickname);
  return query select v_room_id, v_room_code, 1::smallint;
end;
$$;

create or replace function public.couple_game_join_room(p_room_code text, p_nickname text)
returns table (room_id uuid, player_number smallint, error_code text)
language plpgsql security definer set search_path = pg_catalog, public
as $$
declare
  v_user_id uuid := auth.uid(); v_nickname text := public.couple_game_clean_nickname(p_nickname);
  v_room public.couple_game_rooms%rowtype; v_existing smallint;
begin
  if v_user_id is null then return query select null::uuid, null::smallint, 'authentication_required'::text; return; end if;
  if v_nickname is null then return query select null::uuid, null::smallint, 'invalid_nickname'::text; return; end if;

  -- This must use the exact same per-user key as create_room to close the
  -- cross-operation race while leaving different users independent.
  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended('couple-game-user:' || v_user_id::text, 0)
  );

  if not public.couple_game_consume_rate_limit(v_user_id, 'join', 6, interval '5 minutes', interval '15 minutes') then return query select null::uuid, null::smallint, 'rate_limited'::text; return; end if;
  if coalesce(p_room_code, '') !~ '^[A-HJ-NP-Za-hj-np-z2-9]{6}$' then return query select null::uuid, null::smallint, 'room_unavailable'::text; return; end if;
  select * into v_room from public.couple_game_rooms where room_code = upper(p_room_code) for update;
  if not found then return query select null::uuid, null::smallint, 'room_unavailable'::text; return; end if;
  select m.player_number into v_existing from public.couple_game_memberships m where m.room_id = v_room.id and m.user_id = v_user_id and m.left_at is null;
  if found and v_room.status not in ('closed','expired') and v_room.expires_at > now() then
    update public.couple_game_participants set nickname = v_nickname, last_seen_at = now() where room_id = v_room.id and player_number = v_existing and left_at is null;
    return query select v_room.id, v_existing, null::text; return;
  end if;
  if exists (
    select 1 from public.couple_game_memberships m join public.couple_game_rooms r on r.id = m.room_id
    where m.user_id = v_user_id and m.room_id <> v_room.id and m.left_at is null
      and r.status in ('waiting','ready','active','complete') and r.expires_at > now()
  ) then return query select null::uuid, null::smallint, 'room_unavailable'::text; return; end if;
  if v_room.status <> 'waiting' or v_room.expires_at <= now() or exists (
    select 1 from public.couple_game_memberships m where m.room_id = v_room.id and m.left_at is null and m.player_number = 2
  ) then
    if v_room.expires_at <= now() and v_room.status not in ('closed','expired') then update public.couple_game_rooms set status = 'expired', updated_at = now() where id = v_room.id; end if;
    return query select null::uuid, null::smallint, 'room_unavailable'::text; return;
  end if;
  insert into public.couple_game_memberships (room_id, user_id, player_number) values (v_room.id, v_user_id, 2)
  on conflict (room_id, user_id) do update set player_number = 2, joined_at = now(), left_at = null;
  insert into public.couple_game_participants (room_id, player_number, nickname) values (v_room.id, 2, v_nickname)
  on conflict (room_id, player_number) do update set nickname = excluded.nickname, is_ready = false, last_seen_at = now(), left_at = null;
  update public.couple_game_rooms set updated_at = now(), expires_at = least(created_at + interval '4 hours', now() + interval '2 hours') where id = v_room.id;
  return query select v_room.id, 2::smallint, null::text;
end;
$$;

revoke all on function public.couple_game_create_room(text) from public, anon;
revoke all on function public.couple_game_join_room(text, text) from public, anon;
grant execute on function public.couple_game_create_room(text) to authenticated;
grant execute on function public.couple_game_join_room(text, text) to authenticated;

commit;
