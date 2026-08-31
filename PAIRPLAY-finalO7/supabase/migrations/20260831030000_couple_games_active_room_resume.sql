-- Restore only the authenticated user's own active Online Games room after
-- tab-scoped reconnect state is lost. Browser roles retain no direct table access.
create or replace function public.couple_game_resume_room()
returns table (room_id uuid, room_code text, player_number smallint)
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_user_id uuid := auth.uid();
begin
  if v_user_id is null then
    raise exception 'authentication_required' using errcode = '28000';
  end if;

  return query
  select r.id, r.room_code, m.player_number
  from public.couple_game_memberships as m
  join public.couple_game_rooms as r on r.id = m.room_id
  where m.user_id = v_user_id
    and m.left_at is null
    and r.status in ('waiting', 'ready', 'active', 'complete')
    and r.expires_at > now()
  order by m.joined_at desc
  limit 1;
end;
$$;

revoke all on function public.couple_game_resume_room() from public, anon;
grant execute on function public.couple_game_resume_room() to authenticated;
