-- Forward-only repair: qualify join upserts with the verified primary-key constraints.
-- This avoids PL/pgSQL output-column ambiguity without changing room behavior or grants.

begin;

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
  on conflict on constraint couple_game_memberships_pkey
  do update set player_number = 2, joined_at = now(), left_at = null;
  insert into public.couple_game_participants (room_id, player_number, nickname) values (v_room.id, 2, v_nickname)
  on conflict on constraint couple_game_participants_pkey
  do update set nickname = excluded.nickname, is_ready = false, last_seen_at = now(), left_at = null;
  update public.couple_game_rooms set updated_at = now(), expires_at = least(created_at + interval '4 hours', now() + interval '2 hours') where id = v_room.id;
  return query select v_room.id, 2::smallint, null::text;
end;
$$;

revoke all on function public.couple_game_join_room(text, text) from public, anon;
grant execute on function public.couple_game_join_room(text, text) to authenticated;

commit;
