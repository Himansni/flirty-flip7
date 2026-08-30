-- Secure, forward-only foundation for future two-device couple mini-games.
-- REVIEW ONLY: do not apply until a dedicated non-production Supabase project is selected.

begin;

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.couple_game_rooms (
  id uuid primary key default gen_random_uuid(),
  room_code text not null unique check (room_code ~ '^[A-F0-9]{6}$'),
  host_user_id uuid not null references auth.users(id) on delete cascade,
  game_id text not null check (game_id in (
    'tic-tac-toe', 'love-toss', 'couple-wheel', 'rapid-fire',
    'mystery-box', 'reaction-test', 'couple-dice', 'choose-a-door'
  )),
  status text not null default 'waiting' check (status in ('waiting', 'active', 'complete', 'closed', 'expired')),
  state jsonb not null default '{}'::jsonb check (jsonb_typeof(state) = 'object'),
  version bigint not null default 0 check (version >= 0),
  expires_at timestamptz not null default (now() + interval '2 hours'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.couple_game_participants (
  room_id uuid not null references public.couple_game_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  player_number smallint not null check (player_number in (1, 2)),
  is_ready boolean not null default false,
  joined_at timestamptz not null default now(),
  left_at timestamptz,
  primary key (room_id, user_id)
);

create table if not exists public.couple_game_actions (
  id bigint generated always as identity primary key,
  room_id uuid not null references public.couple_game_rooms(id) on delete cascade,
  actor_user_id uuid not null references auth.users(id) on delete cascade,
  idempotency_key uuid not null,
  room_version bigint not null check (room_version >= 1),
  action jsonb not null check (jsonb_typeof(action) = 'object' and octet_length(action::text) <= 4096),
  created_at timestamptz not null default now(),
  unique (room_id, actor_user_id, idempotency_key),
  unique (room_id, room_version)
);

create index if not exists couple_game_rooms_expiry_idx on public.couple_game_rooms (expires_at) where status in ('waiting', 'active');
create index if not exists couple_game_actions_room_created_idx on public.couple_game_actions (room_id, created_at desc);
create unique index if not exists couple_game_participants_active_slot_idx
  on public.couple_game_participants (room_id, player_number)
  where left_at is null;

alter table public.couple_game_rooms enable row level security;
alter table public.couple_game_participants enable row level security;
alter table public.couple_game_actions enable row level security;

revoke all on public.couple_game_rooms from public, anon, authenticated;
revoke all on public.couple_game_participants from public, anon, authenticated;
revoke all on public.couple_game_actions from public, anon, authenticated;
grant select on public.couple_game_rooms to authenticated;
grant select on public.couple_game_participants to authenticated;
grant select on public.couple_game_actions to authenticated;

-- RLS helper avoids recursive participant policies while revealing only current-user membership.
create or replace function public.couple_game_is_participant(p_room_id uuid)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select exists (
    select 1
    from public.couple_game_participants p
    where p.room_id = p_room_id
      and p.user_id = auth.uid()
      and p.left_at is null
  );
$$;

revoke all on function public.couple_game_is_participant(uuid) from public, anon;
grant execute on function public.couple_game_is_participant(uuid) to authenticated;

drop policy if exists couple_game_rooms_participant_read on public.couple_game_rooms;
create policy couple_game_rooms_participant_read
on public.couple_game_rooms for select
to authenticated
using (public.couple_game_is_participant(id));

drop policy if exists couple_game_participants_member_read on public.couple_game_participants;
create policy couple_game_participants_member_read
on public.couple_game_participants for select
to authenticated
using (public.couple_game_is_participant(room_id));

drop policy if exists couple_game_actions_member_read on public.couple_game_actions;
create policy couple_game_actions_member_read
on public.couple_game_actions for select
to authenticated
using (public.couple_game_is_participant(room_id));

-- Create a short-lived room and atomically reserve player one for the authenticated caller.
create or replace function public.couple_game_create_room(p_game_id text)
returns table (room_id uuid, room_code text)
language plpgsql
security definer
set search_path = pg_catalog, public, extensions
as $$
declare
  v_user_id uuid := auth.uid();
  v_room_id uuid;
  v_room_code text;
  v_attempt integer := 0;
begin
  if v_user_id is null then raise exception 'authentication_required' using errcode = '28000'; end if;
  if p_game_id not in ('tic-tac-toe','love-toss','couple-wheel','rapid-fire','mystery-box','reaction-test','couple-dice','choose-a-door') then
    raise exception 'invalid_game' using errcode = '22023';
  end if;

  loop
    v_attempt := v_attempt + 1;
    v_room_code := upper(substr(encode(extensions.gen_random_bytes(4), 'hex'), 1, 6));
    begin
      insert into public.couple_game_rooms (room_code, host_user_id, game_id)
      values (v_room_code, v_user_id, p_game_id)
      returning id into v_room_id;
      exit;
    exception when unique_violation then
      if v_attempt >= 8 then raise exception 'room_code_unavailable' using errcode = 'P0001'; end if;
    end;
  end loop;

  insert into public.couple_game_participants (room_id, user_id, player_number)
  values (v_room_id, v_user_id, 1);
  return query select v_room_id, v_room_code;
end;
$$;

-- Join a waiting, unexpired room under a row lock so concurrent callers cannot exceed two players.
create or replace function public.couple_game_join_room(p_room_code text)
returns table (room_id uuid, player_number smallint)
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_user_id uuid := auth.uid();
  v_room public.couple_game_rooms%rowtype;
  v_existing smallint;
begin
  if v_user_id is null then raise exception 'authentication_required' using errcode = '28000'; end if;
  if coalesce(p_room_code, '') !~ '^[A-Fa-f0-9]{6}$' then raise exception 'invalid_room_code' using errcode = '22023'; end if;

  select * into v_room
  from public.couple_game_rooms
  where room_code = upper(p_room_code)
  for update;
  if not found or v_room.status <> 'waiting' or v_room.expires_at <= now() then
    raise exception 'room_unavailable' using errcode = 'P0001';
  end if;

  select p.player_number into v_existing
  from public.couple_game_participants p
  where p.room_id = v_room.id and p.user_id = v_user_id and p.left_at is null;
  if found then return query select v_room.id, v_existing; return; end if;
  if exists (select 1 from public.couple_game_participants p where p.room_id = v_room.id and p.left_at is null and p.player_number = 2) then
    raise exception 'room_full' using errcode = 'P0001';
  end if;

  insert into public.couple_game_participants (room_id, user_id, player_number)
  values (v_room.id, v_user_id, 2)
  on conflict (room_id, user_id) do update
  set player_number = 2, is_ready = false, joined_at = now(), left_at = null;
  return query select v_room.id, 2::smallint;
end;
$$;

-- Ready-state changes are restricted to the caller's own active participant row.
create or replace function public.couple_game_set_ready(p_room_id uuid, p_ready boolean)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  update public.couple_game_participants
  set is_ready = coalesce(p_ready, false)
  where room_id = p_room_id and user_id = auth.uid() and left_at is null;
  if not found then raise exception 'room_membership_required' using errcode = '42501'; end if;

  update public.couple_game_rooms r
  set status = case when (
        select count(*) = 2 and bool_and(p.is_ready)
        from public.couple_game_participants p
        where p.room_id = r.id and p.left_at is null
      ) then 'active' else 'waiting' end,
      updated_at = now()
  where r.id = p_room_id and r.status in ('waiting', 'active') and r.expires_at > now();
end;
$$;

-- Submit one versioned action. Expected-version locking and idempotency prevent replay/race corruption.
create or replace function public.couple_game_submit_action(
  p_room_id uuid,
  p_expected_version bigint,
  p_idempotency_key uuid,
  p_action jsonb,
  p_next_state jsonb
)
returns bigint
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_user_id uuid := auth.uid();
  v_new_version bigint;
  v_existing_version bigint;
begin
  if v_user_id is null then raise exception 'authentication_required' using errcode = '28000'; end if;
  if p_idempotency_key is null then raise exception 'idempotency_key_required' using errcode = '22023'; end if;
  if jsonb_typeof(p_action) <> 'object' or octet_length(p_action::text) > 4096 then raise exception 'invalid_action' using errcode = '22023'; end if;
  if jsonb_typeof(p_next_state) <> 'object' or octet_length(p_next_state::text) > 16384 then raise exception 'invalid_state' using errcode = '22023'; end if;
  if not public.couple_game_is_participant(p_room_id) then raise exception 'room_membership_required' using errcode = '42501'; end if;

  select a.room_version into v_existing_version
  from public.couple_game_actions a
  where a.room_id = p_room_id and a.actor_user_id = v_user_id and a.idempotency_key = p_idempotency_key;
  if found then return v_existing_version; end if;

  update public.couple_game_rooms
  set state = p_next_state, version = version + 1, updated_at = now()
  where id = p_room_id
    and version = p_expected_version
    and status = 'active'
    and expires_at > now()
  returning version into v_new_version;
  if not found then raise exception 'stale_or_inactive_room' using errcode = '40001'; end if;

  insert into public.couple_game_actions (room_id, actor_user_id, idempotency_key, room_version, action)
  values (p_room_id, v_user_id, p_idempotency_key, v_new_version, p_action);
  return v_new_version;
end;
$$;

-- Leaving invalidates the caller's membership; a host departure closes the room for both players.
create or replace function public.couple_game_leave_room(p_room_id uuid)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_user_id uuid := auth.uid();
begin
  update public.couple_game_participants
  set left_at = now(), is_ready = false
  where room_id = p_room_id and user_id = v_user_id and left_at is null;
  if not found then return; end if;

  update public.couple_game_rooms
  set status = case when host_user_id = v_user_id then 'closed' else 'waiting' end, updated_at = now()
  where id = p_room_id and status in ('waiting', 'active');
end;
$$;

revoke all on function public.couple_game_create_room(text) from public, anon;
revoke all on function public.couple_game_join_room(text) from public, anon;
revoke all on function public.couple_game_set_ready(uuid, boolean) from public, anon;
revoke all on function public.couple_game_submit_action(uuid, bigint, uuid, jsonb, jsonb) from public, anon;
revoke all on function public.couple_game_leave_room(uuid) from public, anon;
grant execute on function public.couple_game_create_room(text) to authenticated;
grant execute on function public.couple_game_join_room(text) to authenticated;
grant execute on function public.couple_game_set_ready(uuid, boolean) to authenticated;
grant execute on function public.couple_game_submit_action(uuid, bigint, uuid, jsonb, jsonb) to authenticated;
grant execute on function public.couple_game_leave_room(uuid) to authenticated;

-- Expiry is callable only by service_role (for a scheduled server job), never by browser roles.
create or replace function public.couple_game_expire_rooms()
returns bigint
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare v_count bigint;
begin
  if coalesce(current_setting('request.jwt.claim.role', true), '') <> 'service_role' then
    raise exception 'service_role_required' using errcode = '42501';
  end if;
  update public.couple_game_rooms set status = 'expired', updated_at = now()
  where expires_at <= now() and status in ('waiting', 'active');
  get diagnostics v_count = row_count;
  return v_count;
end;
$$;

revoke all on function public.couple_game_expire_rooms() from public, anon, authenticated;
grant execute on function public.couple_game_expire_rooms() to service_role;

-- Add only the room/action streams to Supabase Realtime, idempotently when the publication exists.
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'couple_game_rooms'
    ) then alter publication supabase_realtime add table public.couple_game_rooms; end if;
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'couple_game_actions'
    ) then alter publication supabase_realtime add table public.couple_game_actions; end if;
  end if;
end;
$$;

commit;
