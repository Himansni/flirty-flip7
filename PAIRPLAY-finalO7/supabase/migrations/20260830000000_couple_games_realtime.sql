-- Isolated, non-production foundation for authenticated two-device couple games.
-- REVIEW ONLY: do not apply until the target project and anonymous-auth settings are approved.

begin;

create extension if not exists pgcrypto with schema extensions;

-- Rooms expose no auth user identifiers. A monotonically increasing version serializes game actions.
create table if not exists public.couple_game_rooms (
  id uuid primary key default extensions.gen_random_uuid(),
  room_code text not null unique check (room_code ~ '^[A-HJ-NP-Z2-9]{6}$'),
  game_id text check (game_id is null or game_id in (
    'tic-tac-toe', 'love-toss', 'couple-wheel', 'rapid-fire',
    'mystery-box', 'couple-dice', 'choose-a-door'
  )),
  status text not null default 'waiting' check (status in ('waiting', 'ready', 'active', 'complete', 'closed', 'expired')),
  state jsonb not null default '{}'::jsonb check (jsonb_typeof(state) = 'object' and octet_length(state::text) <= 16384),
  version bigint not null default 0 check (version >= 0),
  round_number integer not null default 0 check (round_number >= 0),
  expires_at timestamptz not null default (now() + interval '2 hours'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Private memberships bind auth.uid() to a player slot and are never readable by browser roles.
create table if not exists public.couple_game_memberships (
  room_id uuid not null references public.couple_game_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  player_number smallint not null check (player_number in (1, 2)),
  joined_at timestamptz not null default now(),
  left_at timestamptz,
  primary key (room_id, user_id)
);

-- Realtime participant rows contain only the nickname and connection state needed by the other player.
create table if not exists public.couple_game_participants (
  room_id uuid not null references public.couple_game_rooms(id) on delete cascade,
  player_number smallint not null check (player_number in (1, 2)),
  nickname text not null check (char_length(nickname) between 1 and 24 and nickname !~ '[[:cntrl:]]'),
  is_ready boolean not null default false,
  last_seen_at timestamptz not null default now(),
  left_at timestamptz,
  primary key (room_id, player_number)
);

-- Accepted actions contain normalized server results, never browser-proposed next state.
create table if not exists public.couple_game_actions (
  id bigint generated always as identity primary key,
  room_id uuid not null references public.couple_game_rooms(id) on delete cascade,
  actor_player_number smallint not null check (actor_player_number in (1, 2)),
  idempotency_key uuid not null,
  room_version bigint not null check (room_version >= 1),
  action jsonb not null check (jsonb_typeof(action) = 'object' and octet_length(action::text) <= 2048),
  resulting_state jsonb not null check (jsonb_typeof(resulting_state) = 'object' and octet_length(resulting_state::text) <= 16384),
  created_at timestamptz not null default now(),
  unique (room_id, actor_player_number, idempotency_key),
  unique (room_id, room_version)
);

-- Per-auth-user throttling makes six-character room-code probing expensive and auditable.
create table if not exists public.couple_game_rate_limits (
  user_id uuid not null references auth.users(id) on delete cascade,
  operation text not null check (operation in ('create', 'join')),
  window_started_at timestamptz not null default now(),
  attempts integer not null default 0 check (attempts >= 0),
  blocked_until timestamptz,
  primary key (user_id, operation)
);

create index if not exists couple_game_rooms_expiry_idx
  on public.couple_game_rooms (expires_at) where status in ('waiting', 'ready', 'active', 'complete');
create index if not exists couple_game_actions_room_created_idx
  on public.couple_game_actions (room_id, created_at desc);
create unique index if not exists couple_game_memberships_active_slot_idx
  on public.couple_game_memberships (room_id, player_number) where left_at is null;
create index if not exists couple_game_memberships_active_user_idx
  on public.couple_game_memberships (user_id, joined_at desc) where left_at is null;

alter table public.couple_game_rooms enable row level security;
alter table public.couple_game_memberships enable row level security;
alter table public.couple_game_participants enable row level security;
alter table public.couple_game_actions enable row level security;
alter table public.couple_game_rate_limits enable row level security;

revoke all on public.couple_game_rooms from public, anon, authenticated;
revoke all on public.couple_game_memberships from public, anon, authenticated;
revoke all on public.couple_game_participants from public, anon, authenticated;
revoke all on public.couple_game_actions from public, anon, authenticated;
revoke all on public.couple_game_rate_limits from public, anon, authenticated;
grant select on public.couple_game_rooms to authenticated;
grant select on public.couple_game_participants to authenticated;
grant select on public.couple_game_actions to authenticated;

-- Helper functions are not callable through PostgREST; reviewed RPCs below are the only write surface.
create or replace function public.couple_game_clean_nickname(p_nickname text)
returns text language sql immutable set search_path = pg_catalog
as $$ select nullif(left(regexp_replace(btrim(coalesce(p_nickname, '')), '[[:cntrl:]<>]', '', 'g'), 24), ''); $$;

create or replace function public.couple_game_random_int(p_max_exclusive integer)
returns integer language plpgsql volatile security definer set search_path = pg_catalog, extensions
as $$
declare v_value integer; v_limit integer;
begin
  if p_max_exclusive is null or p_max_exclusive < 1 or p_max_exclusive > 128 then raise exception 'invalid_random_range' using errcode = '22023'; end if;
  v_limit := 256 - (256 % p_max_exclusive);
  loop
    v_value := get_byte(extensions.gen_random_bytes(1), 0);
    if v_value < v_limit then return v_value % p_max_exclusive; end if;
  end loop;
end;
$$;

create or replace function public.couple_game_player_number(p_room_id uuid)
returns smallint language sql stable security definer set search_path = pg_catalog, public
as $$
  select m.player_number from public.couple_game_memberships m
  where m.room_id = p_room_id and m.user_id = auth.uid() and m.left_at is null;
$$;

create or replace function public.couple_game_is_participant(p_room_id uuid)
returns boolean language sql stable security definer set search_path = pg_catalog, public
as $$
  select auth.uid() is not null and exists (
    select 1 from public.couple_game_memberships m
    where m.room_id = p_room_id and m.user_id = auth.uid() and m.left_at is null
  );
$$;

create or replace function public.couple_game_consume_rate_limit(
  p_user_id uuid, p_operation text, p_max_attempts integer, p_window interval, p_block interval
)
returns boolean language plpgsql volatile security definer set search_path = pg_catalog, public
as $$
declare v_limit public.couple_game_rate_limits%rowtype;
begin
  if p_user_id is null or p_operation not in ('create', 'join') then return false; end if;
  insert into public.couple_game_rate_limits (user_id, operation, attempts)
  values (p_user_id, p_operation, 1)
  on conflict (user_id, operation) do update
  set window_started_at = case when public.couple_game_rate_limits.window_started_at + p_window <= now() then now() else public.couple_game_rate_limits.window_started_at end,
      attempts = case when public.couple_game_rate_limits.window_started_at + p_window <= now() then 1 else public.couple_game_rate_limits.attempts + 1 end,
      blocked_until = case
        when public.couple_game_rate_limits.blocked_until > now() then public.couple_game_rate_limits.blocked_until
        when public.couple_game_rate_limits.window_started_at + p_window > now() and public.couple_game_rate_limits.attempts + 1 > p_max_attempts then now() + p_block
        else null end
  returning * into v_limit;
  return coalesce(v_limit.blocked_until <= now(), true) and v_limit.attempts <= p_max_attempts;
end;
$$;

create or replace function public.couple_game_initial_state(p_game_id text, p_turn smallint)
returns jsonb language plpgsql immutable set search_path = pg_catalog
as $$
begin
  if p_turn not in (1, 2) then raise exception 'invalid_turn' using errcode = '22023'; end if;
  if p_game_id = 'tic-tac-toe' then
    return jsonb_build_object('phase','active','turn',p_turn,'board','[0,0,0,0,0,0,0,0,0]'::jsonb,'winner',0,'result',null);
  elsif p_game_id in ('love-toss','couple-wheel','rapid-fire','mystery-box','couple-dice','choose-a-door') then
    return jsonb_build_object('phase','idle','turn',p_turn,'result',null);
  end if;
  raise exception 'invalid_game' using errcode = '22023';
end;
$$;

create or replace function public.couple_game_ttt_winner(p_board jsonb)
returns smallint language plpgsql immutable set search_path = pg_catalog
as $$
declare
  v_lines integer[][] := array[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  v_line integer[]; v_player smallint;
begin
  if jsonb_typeof(p_board) <> 'array' or jsonb_array_length(p_board) <> 9 then return 0; end if;
  foreach v_line slice 1 in array v_lines loop
    v_player := (p_board ->> v_line[1])::smallint;
    if v_player in (1, 2) and (p_board ->> v_line[2])::smallint = v_player and (p_board ->> v_line[3])::smallint = v_player then return v_player; end if;
  end loop;
  return 0;
end;
$$;

revoke all on function public.couple_game_clean_nickname(text) from public, anon, authenticated;
revoke all on function public.couple_game_random_int(integer) from public, anon, authenticated;
revoke all on function public.couple_game_player_number(uuid) from public, anon, authenticated;
revoke all on function public.couple_game_is_participant(uuid) from public, anon;
revoke all on function public.couple_game_consume_rate_limit(uuid, text, integer, interval, interval) from public, anon, authenticated;
revoke all on function public.couple_game_initial_state(text, smallint) from public, anon, authenticated;
revoke all on function public.couple_game_ttt_winner(jsonb) from public, anon, authenticated;
grant execute on function public.couple_game_is_participant(uuid) to authenticated;
grant execute on function public.couple_game_player_number(uuid) to authenticated;

drop policy if exists couple_game_rooms_participant_read on public.couple_game_rooms;
create policy couple_game_rooms_participant_read on public.couple_game_rooms for select to authenticated using (public.couple_game_is_participant(id));
drop policy if exists couple_game_participants_member_read on public.couple_game_participants;
create policy couple_game_participants_member_read on public.couple_game_participants for select to authenticated using (public.couple_game_is_participant(room_id));
drop policy if exists couple_game_actions_member_read on public.couple_game_actions;
create policy couple_game_actions_member_read on public.couple_game_actions for select to authenticated using (public.couple_game_is_participant(room_id));

-- Private Realtime topics authorize only members of the UUID embedded in couple-game:<room-id>.
-- No INSERT policy is created, so browsers cannot broadcast or publish Presence through this channel.
drop policy if exists couple_game_realtime_member_read on realtime.messages;
create policy couple_game_realtime_member_read on realtime.messages
for select to authenticated using (
  public.couple_game_is_participant(
    case
      when (select realtime.topic()) ~ '^couple-game:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
      then split_part((select realtime.topic()), ':', 2)::uuid
      else null::uuid
    end
  )
);

-- Create a lobby and reserve player one. The game is selected only after both players are ready.
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

-- Join errors are generic; rate-limit changes commit because failures return rows instead of raising.
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

create or replace function public.couple_game_set_ready(p_room_id uuid, p_ready boolean)
returns text language plpgsql security definer set search_path = pg_catalog, public
as $$
declare
  v_player smallint := public.couple_game_player_number(p_room_id); v_room public.couple_game_rooms%rowtype; v_both_ready boolean; v_status text;
begin
  if v_player is null then raise exception 'room_membership_required' using errcode = '42501'; end if;
  select * into v_room from public.couple_game_rooms where id = p_room_id for update;
  if not found or v_room.status not in ('waiting','ready','complete') or v_room.expires_at <= now() then raise exception 'room_unavailable' using errcode = 'P0001'; end if;
  update public.couple_game_participants set is_ready = coalesce(p_ready, false), last_seen_at = now()
  where room_id = p_room_id and player_number = v_player and left_at is null;
  select count(*) = 2 and bool_and(p.is_ready) into v_both_ready from public.couple_game_participants p where p.room_id = p_room_id and p.left_at is null;
  v_status := case when v_both_ready then 'ready' when v_room.status = 'complete' then 'complete' else 'waiting' end;
  update public.couple_game_rooms set status = v_status, updated_at = now(), expires_at = least(created_at + interval '4 hours', now() + interval '2 hours') where id = p_room_id;
  return v_status;
end;
$$;

-- Only player one can select one of the seven latency-safe games after both players are ready.
create or replace function public.couple_game_select_game(p_room_id uuid, p_game_id text)
returns table (new_version bigint, state jsonb)
language plpgsql security definer set search_path = pg_catalog, public
as $$
declare
  v_player smallint := public.couple_game_player_number(p_room_id); v_room public.couple_game_rooms%rowtype; v_turn smallint; v_state jsonb;
begin
  if v_player <> 1 then raise exception 'host_required' using errcode = '42501'; end if;
  if p_game_id not in ('tic-tac-toe','love-toss','couple-wheel','rapid-fire','mystery-box','couple-dice','choose-a-door') then raise exception 'invalid_game' using errcode = '22023'; end if;
  select * into v_room from public.couple_game_rooms where id = p_room_id for update;
  if not found or v_room.status <> 'ready' or v_room.expires_at <= now() or not exists (
    select 1 from public.couple_game_participants p where p.room_id = p_room_id and p.left_at is null group by p.room_id having count(*) = 2 and bool_and(p.is_ready)
  ) then raise exception 'room_not_ready' using errcode = 'P0001'; end if;
  v_turn := case when (v_room.round_number + 1) % 2 = 1 then 1 else 2 end;
  v_state := public.couple_game_initial_state(p_game_id, v_turn);
  update public.couple_game_rooms
  set game_id = p_game_id, status = 'active', state = v_state, version = version + 1, round_number = round_number + 1,
      updated_at = now(), expires_at = least(created_at + interval '4 hours', now() + interval '2 hours')
  where id = p_room_id returning version into v_room.version;
  update public.couple_game_participants set is_ready = false where room_id = p_room_id and left_at is null;
  return query select v_room.version, v_state;
end;
$$;

-- The database reduces every action and generates all random outcomes; browsers never submit next state.
create or replace function public.couple_game_submit_action(
  p_room_id uuid, p_expected_version bigint, p_idempotency_key uuid, p_action jsonb
)
returns table (new_version bigint, room_status text, accepted_action jsonb, state jsonb)
language plpgsql security definer set search_path = pg_catalog, public
as $$
declare
  v_player smallint := public.couple_game_player_number(p_room_id); v_room public.couple_game_rooms%rowtype;
  v_existing public.couple_game_actions%rowtype; v_type text; v_state jsonb; v_action jsonb; v_status text := 'active';
  v_index integer; v_value integer; v_winner smallint; v_next_turn smallint; v_starts_at timestamptz; v_ends_at timestamptz;
begin
  if v_player is null then raise exception 'room_membership_required' using errcode = '42501'; end if;
  if p_idempotency_key is null then raise exception 'idempotency_key_required' using errcode = '22023'; end if;
  if jsonb_typeof(p_action) <> 'object' or octet_length(p_action::text) > 1024 then raise exception 'invalid_action' using errcode = '22023'; end if;
  v_type := p_action ->> 'type'; if v_type is null then raise exception 'invalid_action' using errcode = '22023'; end if;
  select * into v_room from public.couple_game_rooms where id = p_room_id for update;
  if not found then raise exception 'room_unavailable' using errcode = 'P0001'; end if;
  select * into v_existing from public.couple_game_actions a
  where a.room_id = p_room_id and a.actor_player_number = v_player and a.idempotency_key = p_idempotency_key;
  if found then return query select v_existing.room_version, v_room.status, v_existing.action, v_existing.resulting_state; return; end if;
  if v_room.status <> 'active' or v_room.expires_at <= now() then raise exception 'inactive_room' using errcode = 'P0001'; end if;
  if v_room.version <> p_expected_version then raise exception 'stale_version' using errcode = '40001'; end if;
  v_state := v_room.state; v_next_turn := case when v_player = 1 then 2 else 1 end;

  if v_room.game_id = 'tic-tac-toe' then
    if v_type <> 'place' or (p_action - array['type','index']) <> '{}'::jsonb or coalesce(p_action->>'index','') !~ '^[0-8]$' then raise exception 'invalid_action' using errcode = '22023'; end if;
    if (v_state->>'turn')::smallint <> v_player then raise exception 'out_of_turn' using errcode = '42501'; end if;
    v_index := (p_action->>'index')::integer;
    if (v_state->'board'->>v_index)::smallint <> 0 then raise exception 'cell_unavailable' using errcode = 'P0001'; end if;
    v_state := jsonb_set(v_state, array['board',v_index::text], to_jsonb(v_player), false);
    v_winner := public.couple_game_ttt_winner(v_state->'board');
    if v_winner in (1,2) then
      v_status := 'complete';
      v_state := v_state || jsonb_build_object('phase','complete','winner',v_winner,'result',jsonb_build_object('category','REWARD','responsibility',v_winner,'text_key','tic_tac_toe_reward'));
    elsif not exists (select 1 from jsonb_array_elements_text(v_state->'board') cell where cell.value = '0') then
      v_status := 'complete';
      v_state := v_state || jsonb_build_object('phase','complete','winner',0,'result',jsonb_build_object('category','ROUND RESULT','responsibility',0,'text_key','tic_tac_toe_draw'));
    else v_state := jsonb_set(v_state, '{turn}', to_jsonb(v_next_turn), false); end if;
    v_action := jsonb_build_object('type','place','index',v_index,'player',v_player);
  elsif v_room.game_id = 'love-toss' then
    if v_type <> 'flip' or (p_action - 'type') <> '{}'::jsonb then raise exception 'invalid_action' using errcode = '22023'; end if;
    if v_state->>'phase' <> 'idle' or (v_state->>'turn')::smallint <> v_player then raise exception 'out_of_turn' using errcode = '42501'; end if;
    v_value := public.couple_game_random_int(2);
    v_action := jsonb_build_object('type','flip','face',case when v_value = 0 then 'heads' else 'tails' end,'player',v_player);
    v_state := v_state || jsonb_build_object('phase','complete','turn',v_next_turn,'result',v_action || jsonb_build_object('category','REWARD','responsibility',v_player)); v_status := 'complete';
  elsif v_room.game_id = 'couple-wheel' then
    if v_type <> 'spin' or (p_action - 'type') <> '{}'::jsonb then raise exception 'invalid_action' using errcode = '22023'; end if;
    if v_state->>'phase' <> 'idle' or (v_state->>'turn')::smallint <> v_player then raise exception 'out_of_turn' using errcode = '42501'; end if;
    v_action := jsonb_build_object('type','spin','category_index',public.couple_game_random_int(6),'outcome_index',public.couple_game_random_int(3),'player',v_player);
    v_state := v_state || jsonb_build_object('phase','complete','turn',v_next_turn,'result',v_action || jsonb_build_object('responsibility',v_player)); v_status := 'complete';
  elsif v_room.game_id = 'rapid-fire' then
    if v_type = 'start' then
      if (p_action - 'type') <> '{}'::jsonb or v_state->>'phase' <> 'idle' or (v_state->>'turn')::smallint <> v_player then raise exception 'invalid_or_out_of_turn' using errcode = '42501'; end if;
      v_starts_at := now() + interval '3 seconds'; v_ends_at := v_starts_at + interval '10 seconds';
      v_action := jsonb_build_object('type','start','prompt_index',public.couple_game_random_int(10),'player',v_player,'starts_at',v_starts_at,'ends_at',v_ends_at);
      v_state := v_state || jsonb_build_object('phase','running','prompt_index',v_action->'prompt_index','starts_at',v_starts_at,'ends_at',v_ends_at);
    elsif v_type = 'finish' then
      if (p_action - 'type') <> '{}'::jsonb or v_state->>'phase' <> 'running' or (v_state->>'turn')::smallint <> v_player then raise exception 'invalid_or_out_of_turn' using errcode = '42501'; end if;
      if now() < (v_state->>'ends_at')::timestamptz then raise exception 'timer_active' using errcode = 'P0001'; end if;
      v_action := jsonb_build_object('type','finish','player',v_player);
      v_state := v_state || jsonb_build_object('phase','complete','turn',v_next_turn,'result',jsonb_build_object('category','ROUND COMPLETE','responsibility',v_player,'text_key','rapid_complete')); v_status := 'complete';
    else raise exception 'invalid_action' using errcode = '22023'; end if;
  elsif v_room.game_id = 'mystery-box' then
    if v_type <> 'open' or (p_action - array['type','index']) <> '{}'::jsonb or coalesce(p_action->>'index','') !~ '^[0-7]$' then raise exception 'invalid_action' using errcode = '22023'; end if;
    if v_state->>'phase' <> 'idle' or (v_state->>'turn')::smallint <> v_player then raise exception 'out_of_turn' using errcode = '42501'; end if;
    v_index := (p_action->>'index')::integer;
    v_action := jsonb_build_object('type','open','box_index',v_index,'outcome_index',public.couple_game_random_int(10),'player',v_player);
    v_state := v_state || jsonb_build_object('phase','complete','turn',v_next_turn,'result',v_action || jsonb_build_object('responsibility',v_player)); v_status := 'complete';
  elsif v_room.game_id = 'couple-dice' then
    if v_type <> 'roll' or (p_action - 'type') <> '{}'::jsonb then raise exception 'invalid_action' using errcode = '22023'; end if;
    if v_state->>'phase' <> 'idle' or (v_state->>'turn')::smallint <> v_player then raise exception 'out_of_turn' using errcode = '42501'; end if;
    v_action := jsonb_build_object('type','roll','value',public.couple_game_random_int(6) + 1,'player',v_player);
    v_state := v_state || jsonb_build_object('phase','complete','turn',v_next_turn,'result',v_action || jsonb_build_object('responsibility',v_player)); v_status := 'complete';
  elsif v_room.game_id = 'choose-a-door' then
    if v_type <> 'open' or (p_action - array['type','index']) <> '{}'::jsonb or coalesce(p_action->>'index','') !~ '^[0-2]$' then raise exception 'invalid_action' using errcode = '22023'; end if;
    if v_state->>'phase' <> 'idle' or (v_state->>'turn')::smallint <> v_player then raise exception 'out_of_turn' using errcode = '42501'; end if;
    v_index := (p_action->>'index')::integer;
    v_action := jsonb_build_object('type','open','door_index',v_index,'outcome_index',public.couple_game_random_int(6),'player',v_player);
    v_state := v_state || jsonb_build_object('phase','complete','turn',v_next_turn,'result',v_action || jsonb_build_object('responsibility',v_player)); v_status := 'complete';
  else raise exception 'invalid_game' using errcode = '22023'; end if;

  update public.couple_game_rooms
  set state = v_state, status = v_status, version = version + 1, updated_at = now(), expires_at = least(created_at + interval '4 hours', now() + interval '2 hours')
  where id = p_room_id and version = p_expected_version returning version into v_room.version;
  if not found then raise exception 'stale_version' using errcode = '40001'; end if;
  insert into public.couple_game_actions (room_id, actor_player_number, idempotency_key, room_version, action, resulting_state)
  values (p_room_id, v_player, p_idempotency_key, v_room.version, v_action, v_state);
  return query select v_room.version, v_status, v_action, v_state;
end;
$$;

-- Heartbeats support reconnect UX without exposing Realtime Presence or storing connection secrets.
create or replace function public.couple_game_touch_room(p_room_id uuid)
returns void language plpgsql security definer set search_path = pg_catalog, public
as $$
declare v_player smallint := public.couple_game_player_number(p_room_id);
begin
  if v_player is null then raise exception 'room_membership_required' using errcode = '42501'; end if;
  update public.couple_game_participants set last_seen_at = now() where room_id = p_room_id and player_number = v_player and left_at is null;
end;
$$;

-- Explicit player-two leave resets the lobby; explicit host leave closes the room.
create or replace function public.couple_game_leave_room(p_room_id uuid)
returns void language plpgsql security definer set search_path = pg_catalog, public
as $$
declare v_user_id uuid := auth.uid(); v_player smallint := public.couple_game_player_number(p_room_id);
begin
  if v_player is null then return; end if;
  perform 1 from public.couple_game_rooms where id = p_room_id for update;
  update public.couple_game_memberships set left_at = now() where room_id = p_room_id and user_id = v_user_id and left_at is null;
  update public.couple_game_participants set left_at = now(), is_ready = false, last_seen_at = now()
  where room_id = p_room_id and player_number = v_player and left_at is null;
  if v_player = 1 then
    update public.couple_game_rooms set status = 'closed', updated_at = now(), version = version + 1 where id = p_room_id and status not in ('closed','expired');
    update public.couple_game_participants set is_ready = false where room_id = p_room_id;
  else
    update public.couple_game_rooms set status = 'waiting', game_id = null, state = '{}'::jsonb, version = version + 1, updated_at = now()
    where id = p_room_id and status not in ('closed','expired');
    update public.couple_game_participants set is_ready = false where room_id = p_room_id and player_number = 1 and left_at is null;
  end if;
end;
$$;

revoke all on function public.couple_game_create_room(text) from public, anon;
revoke all on function public.couple_game_join_room(text, text) from public, anon;
revoke all on function public.couple_game_set_ready(uuid, boolean) from public, anon;
revoke all on function public.couple_game_select_game(uuid, text) from public, anon;
revoke all on function public.couple_game_submit_action(uuid, bigint, uuid, jsonb) from public, anon;
revoke all on function public.couple_game_touch_room(uuid) from public, anon;
revoke all on function public.couple_game_leave_room(uuid) from public, anon;
grant execute on function public.couple_game_create_room(text) to authenticated;
grant execute on function public.couple_game_join_room(text, text) to authenticated;
grant execute on function public.couple_game_set_ready(uuid, boolean) to authenticated;
grant execute on function public.couple_game_select_game(uuid, text) to authenticated;
grant execute on function public.couple_game_submit_action(uuid, bigint, uuid, jsonb) to authenticated;
grant execute on function public.couple_game_touch_room(uuid) to authenticated;
grant execute on function public.couple_game_leave_room(uuid) to authenticated;

-- Only a trusted scheduled service can expire rooms and delete closed/expired data after 24 hours.
create or replace function public.couple_game_expire_rooms()
returns jsonb language plpgsql security definer set search_path = pg_catalog, public
as $$
declare v_expired bigint; v_deleted bigint;
begin
  if session_user <> 'postgres' and coalesce(current_setting('request.jwt.claim.role', true), '') <> 'service_role' then
    raise exception 'trusted_scheduler_required' using errcode = '42501';
  end if;
  update public.couple_game_rooms set status = 'expired', updated_at = now(), version = version + 1
  where expires_at <= now() and status in ('waiting','ready','active','complete');
  get diagnostics v_expired = row_count;
  update public.couple_game_participants set is_ready = false, left_at = coalesce(left_at, now())
  where room_id in (select id from public.couple_game_rooms where status = 'expired');
  delete from public.couple_game_rooms where status in ('closed','expired') and updated_at < now() - interval '24 hours';
  get diagnostics v_deleted = row_count;
  delete from public.couple_game_rate_limits where window_started_at < now() - interval '24 hours';
  return jsonb_build_object('expired',v_expired,'deleted',v_deleted);
end;
$$;

revoke all on function public.couple_game_expire_rooms() from public, anon, authenticated;
grant execute on function public.couple_game_expire_rooms() to service_role;

-- Realtime publishes only sanitized room, participant and accepted-action rows.
alter table public.couple_game_rooms replica identity full;
alter table public.couple_game_participants replica identity full;
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'couple_game_rooms') then alter publication supabase_realtime add table public.couple_game_rooms; end if;
    if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'couple_game_participants') then alter publication supabase_realtime add table public.couple_game_participants; end if;
    if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'couple_game_actions') then alter publication supabase_realtime add table public.couple_game_actions; end if;
  end if;
end;
$$;

commit;
