-- ========================================
-- ACADEMY FULFILLMENT CONSTRAINT REPAIR
-- Replace the already-deployed fulfillment RPC without changing the original migration.
-- Keep this function service-role-only; payment verification remains in the Vercel API.
-- ========================================

-- The function's TABLE return field named course_slug is a PL/pgSQL variable.
-- Naming the verified unique constraint avoids the ambiguous bare course_slug conflict target.
create or replace function public.academy_fulfill_payment(
  p_provider_order_id text,
  p_provider_payment_id text,
  p_event_id text default null
)
returns table (course_slug text, account_user_id uuid, entitlement_status text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_order public.academy_payment_orders%rowtype;
begin
  select * into v_order
  from public.academy_payment_orders
  where provider_order_id = p_provider_order_id
  for update;

  if not found then raise exception 'Academy order not found'; end if;
  if v_order.status = 'refunded' then raise exception 'Refunded order cannot be fulfilled'; end if;
  if v_order.provider_payment_id is not null and v_order.provider_payment_id <> p_provider_payment_id then
    raise exception 'Academy payment ID mismatch';
  end if;
  if v_order.status = 'captured' and v_order.provider_payment_id = p_provider_payment_id then
    return query select v_order.course_slug, v_order.user_id, 'active'::text;
    return;
  end if;

  update public.academy_payment_orders
  set provider_payment_id = p_provider_payment_id, status = 'captured', updated_at = now()
  where id = v_order.id;

  insert into public.academy_entitlements (user_id, course_slug, payment_order_id, status, granted_at, expires_at)
  values (v_order.user_id, v_order.course_slug, v_order.id, 'active', now(), null)
  on conflict on constraint academy_entitlements_user_id_course_slug_key do update set
    payment_order_id = excluded.payment_order_id,
    status = 'active',
    granted_at = now(),
    expires_at = null,
    updated_at = now();

  return query select v_order.course_slug, v_order.user_id, 'active'::text;
end;
$$;

revoke all on function public.academy_fulfill_payment(text, text, text) from public, anon, authenticated;
grant execute on function public.academy_fulfill_payment(text, text, text) to service_role;
