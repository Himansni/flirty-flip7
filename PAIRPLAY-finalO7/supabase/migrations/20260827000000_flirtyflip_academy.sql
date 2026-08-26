-- ========================================
-- FLIRTYFLIP ACADEMY DATA AND ACCESS MODEL
-- Apply this migration to the existing Supabase project before enabling Academy checkout.
-- Prices and paid lesson bodies intentionally remain NULL until real business content is supplied.
-- ========================================

create extension if not exists pgcrypto;

-- Public course records own authoritative availability and pricing in minor currency units.
create table if not exists public.academy_courses (
  slug text primary key check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  audience text not null check (audience in ('for-him', 'for-her', 'for-couples')),
  currency text not null default 'INR' check (currency ~ '^[A-Z]{3}$'),
  price_minor integer check (price_minor is null or price_minor > 0),
  checkout_enabled boolean not null default false,
  published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint academy_checkout_requires_price check (not checkout_enabled or price_minor is not null)
);

-- Public curriculum headings; paid bodies belong only in academy_lessons.body.
create table if not exists public.academy_modules (
  id uuid primary key default gen_random_uuid(),
  course_slug text not null references public.academy_courses(slug) on delete cascade,
  slug text not null check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  sort_order integer not null default 0,
  unique (course_slug, slug)
);

create table if not exists public.academy_lessons (
  id uuid primary key default gen_random_uuid(),
  course_slug text not null references public.academy_courses(slug) on delete cascade,
  module_slug text not null,
  slug text not null check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  preview text,
  body text,
  media_path text,
  sort_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (course_slug, slug),
  foreign key (course_slug, module_slug) references public.academy_modules(course_slug, slug) on delete cascade
);

-- Orders preserve the exact database price used to create each Razorpay order.
create table if not exists public.academy_payment_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete restrict,
  course_slug text not null references public.academy_courses(slug) on delete restrict,
  provider text not null default 'razorpay' check (provider = 'razorpay'),
  provider_order_id text unique,
  provider_payment_id text unique,
  idempotency_key text not null,
  amount_minor integer not null check (amount_minor > 0),
  currency text not null check (currency ~ '^[A-Z]{3}$'),
  status text not null check (status in ('creating', 'created', 'attempted', 'authorized', 'captured', 'failed', 'cancelled', 'refunded')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, idempotency_key)
);

-- Entitlements are the only source of truth for paid access.
create table if not exists public.academy_entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_slug text not null references public.academy_courses(slug) on delete restrict,
  payment_order_id uuid not null references public.academy_payment_orders(id) on delete restrict,
  status text not null default 'active' check (status in ('active', 'revoked', 'expired')),
  granted_at timestamptz not null default now(),
  expires_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (user_id, course_slug)
);

-- Progress is account-owned and cannot be written without an active entitlement.
create table if not exists public.academy_lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_slug text not null,
  lesson_slug text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, course_slug, lesson_slug),
  foreign key (course_slug, lesson_slug) references public.academy_lessons(course_slug, slug) on delete cascade
);

-- Webhook event IDs prevent duplicate provider deliveries from producing duplicate effects.
create table if not exists public.academy_webhook_events (
  event_id text primary key,
  event_type text not null,
  payload_sha256 text not null check (payload_sha256 ~ '^[a-f0-9]{64}$'),
  received_at timestamptz not null default now()
);

create index if not exists academy_orders_user_course_idx on public.academy_payment_orders (user_id, course_slug, created_at desc);
create index if not exists academy_entitlements_user_status_idx on public.academy_entitlements (user_id, status);
create index if not exists academy_lessons_course_order_idx on public.academy_lessons (course_slug, sort_order);

-- Keep modification timestamps consistent when authorized writers update records.
create or replace function public.academy_set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists academy_courses_updated_at on public.academy_courses;
create trigger academy_courses_updated_at before update on public.academy_courses
for each row execute function public.academy_set_updated_at();

drop trigger if exists academy_lessons_updated_at on public.academy_lessons;
create trigger academy_lessons_updated_at before update on public.academy_lessons
for each row execute function public.academy_set_updated_at();

drop trigger if exists academy_orders_updated_at on public.academy_payment_orders;
create trigger academy_orders_updated_at before update on public.academy_payment_orders
for each row execute function public.academy_set_updated_at();

drop trigger if exists academy_entitlements_updated_at on public.academy_entitlements;
create trigger academy_entitlements_updated_at before update on public.academy_entitlements
for each row execute function public.academy_set_updated_at();

-- Seed only verified public metadata already present in the existing FlirtyFlip course catalog.
insert into public.academy_courses (slug, title, audience, published, sort_order)
values
  ('confident-connection', 'Confident Connection', 'for-him', true, 10),
  ('better-communication', 'Better Communication', 'for-him', true, 20),
  ('art-of-romance', 'The Art of Romance', 'for-him', true, 30)
on conflict (slug) do update set
  title = excluded.title,
  audience = excluded.audience,
  published = excluded.published,
  sort_order = excluded.sort_order;

insert into public.academy_modules (course_slug, slug, title, sort_order)
values
  ('confident-connection', 'foundations', 'Foundations', 10),
  ('confident-connection', 'communication-practice', 'Communication and practice', 20),
  ('better-communication', 'communication-core', 'Communication foundations', 10),
  ('better-communication', 'communication-practice', 'Practice', 20),
  ('art-of-romance', 'romance-foundations', 'Romance foundations', 10),
  ('art-of-romance', 'romance-practice', 'Connection practice', 20)
on conflict (course_slug, slug) do update set title = excluded.title, sort_order = excluded.sort_order;

insert into public.academy_lessons (course_slug, module_slug, slug, title, preview, sort_order, published)
values
  ('confident-connection', 'foundations', 'introduction', 'Introduction', 'How presence, attention and self-trust shape connection.', 10, true),
  ('confident-connection', 'foundations', 'presence-confidence', 'Presence and confidence', 'A grounded alternative to performing confidence.', 20, true),
  ('confident-connection', 'foundations', 'reading-emotions', 'Reading emotions', 'Notice words, tone and non-verbal signals without assuming.', 30, true),
  ('confident-connection', 'communication-practice', 'asking-better-questions', 'Asking better questions', 'Invite honest conversation without pressure.', 40, true),
  ('confident-connection', 'communication-practice', 'practical-techniques', 'Practical techniques', 'Apply attention and communication in everyday moments.', 50, true),
  ('confident-connection', 'communication-practice', 'building-comfort', 'Building comfort', 'Use consistency and clear boundaries to reduce pressure.', 60, true),
  ('confident-connection', 'communication-practice', 'practice', 'Practice', 'Repeat the core ideas in low-stakes situations.', 70, true),
  ('confident-connection', 'communication-practice', 'final-challenge', 'Final reflection', 'Create a respectful personal practice to continue learning.', 80, true),
  ('better-communication', 'communication-core', 'intro', 'Introduction', 'Set expectations for respectful communication practice.', 10, true),
  ('better-communication', 'communication-core', 'listening', 'Listening', 'Listen for meaning before preparing a reply.', 20, true),
  ('better-communication', 'communication-core', 'non-defensive-speech', 'Non-defensive speech', 'Express needs without accusation or pressure.', 30, true),
  ('better-communication', 'communication-core', 'asking-vs-accusing', 'Asking versus accusing', 'Turn assumptions into clearer, answerable questions.', 40, true),
  ('better-communication', 'communication-practice', 'practical-exercises', 'Practical exercises', 'Try short, low-pressure communication exercises.', 50, true),
  ('better-communication', 'communication-practice', 'practice', 'Reflection practice', 'Notice what helps both people feel heard.', 60, true),
  ('better-communication', 'communication-practice', 'final-challenge', 'Final reflection', 'Choose one communication habit to keep practicing.', 70, true),
  ('art-of-romance', 'romance-foundations', 'intro', 'Introduction', 'Define romance through attention and personal meaning.', 10, true),
  ('art-of-romance', 'romance-foundations', 'small-rituals', 'Small rituals', 'Create repeatable moments of care in everyday life.', 20, true),
  ('art-of-romance', 'romance-foundations', 'meaningful-gifts', 'Gifts that mean more', 'Choose gestures based on what your partner values.', 30, true),
  ('art-of-romance', 'romance-foundations', 'date-design', 'Date design', 'Plan around comfort, attention and shared preferences.', 40, true),
  ('art-of-romance', 'romance-practice', 'connection-techniques', 'Connection techniques', 'Use small moments to stay attentive and responsive.', 50, true),
  ('art-of-romance', 'romance-practice', 'practice', 'Practice', 'Try a thoughtful action and notice the response.', 60, true),
  ('art-of-romance', 'romance-practice', 'final-challenge', 'Final reflection', 'Plan one personal, low-pressure romantic moment.', 70, true),
  ('art-of-romance', 'romance-practice', 'wrap-up', 'Wrap-up', 'Review the principles and choose what to continue.', 80, true)
on conflict (course_slug, slug) do update set
  module_slug = excluded.module_slug,
  title = excluded.title,
  preview = excluded.preview,
  sort_order = excluded.sort_order,
  published = excluded.published;

-- Create the private academy-private bucket through the Supabase Storage API or Dashboard.
-- Supabase recommends treating its storage schema as read-only; no public object policy is added here.

-- Row-level security protects all account and payment records even if the REST API is queried directly.
alter table public.academy_courses enable row level security;
alter table public.academy_modules enable row level security;
alter table public.academy_lessons enable row level security;
alter table public.academy_payment_orders enable row level security;
alter table public.academy_entitlements enable row level security;
alter table public.academy_lesson_progress enable row level security;
alter table public.academy_webhook_events enable row level security;

drop policy if exists "Published Academy courses are public" on public.academy_courses;
create policy "Published Academy courses are public" on public.academy_courses
for select to anon, authenticated using (published = true);

drop policy if exists "Published Academy modules are public" on public.academy_modules;
create policy "Published Academy modules are public" on public.academy_modules
for select to anon, authenticated using (
  exists (select 1 from public.academy_courses c where c.slug = academy_modules.course_slug and c.published = true)
);

drop policy if exists "Enrolled users can read paid lessons" on public.academy_lessons;
create policy "Enrolled users can read paid lessons" on public.academy_lessons
for select to authenticated using (
  published = true and exists (
    select 1 from public.academy_entitlements e
    where e.user_id = auth.uid()
      and e.course_slug = academy_lessons.course_slug
      and e.status = 'active'
      and (e.expires_at is null or e.expires_at > now())
  )
);

drop policy if exists "Users can read their Academy orders" on public.academy_payment_orders;
create policy "Users can read their Academy orders" on public.academy_payment_orders
for select to authenticated using (user_id = auth.uid());

drop policy if exists "Users can read their Academy entitlements" on public.academy_entitlements;
create policy "Users can read their Academy entitlements" on public.academy_entitlements
for select to authenticated using (user_id = auth.uid());

drop policy if exists "Users can read their Academy progress" on public.academy_lesson_progress;
create policy "Users can read their Academy progress" on public.academy_lesson_progress
for select to authenticated using (user_id = auth.uid());

drop policy if exists "Enrolled users can create their Academy progress" on public.academy_lesson_progress;
create policy "Enrolled users can create their Academy progress" on public.academy_lesson_progress
for insert to authenticated with check (
  user_id = auth.uid() and exists (
    select 1 from public.academy_entitlements e
    where e.user_id = auth.uid()
      and e.course_slug = academy_lesson_progress.course_slug
      and e.status = 'active'
      and (e.expires_at is null or e.expires_at > now())
  )
);

drop policy if exists "Enrolled users can update their Academy progress" on public.academy_lesson_progress;
create policy "Enrolled users can update their Academy progress" on public.academy_lesson_progress
for update to authenticated using (
  user_id = auth.uid() and exists (
    select 1 from public.academy_entitlements e
    where e.user_id = auth.uid()
      and e.course_slug = academy_lesson_progress.course_slug
      and e.status = 'active'
      and (e.expires_at is null or e.expires_at > now())
  )
) with check (
  user_id = auth.uid() and exists (
    select 1 from public.academy_entitlements e
    where e.user_id = auth.uid()
      and e.course_slug = academy_lesson_progress.course_slug
      and e.status = 'active'
      and (e.expires_at is null or e.expires_at > now())
  )
);

-- Atomic fulfillment is callable only by the Supabase service role after Razorpay verification.
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
  on conflict (user_id, course_slug) do update set
    payment_order_id = excluded.payment_order_id,
    status = 'active',
    granted_at = now(),
    expires_at = null,
    updated_at = now();

  return query select v_order.course_slug, v_order.user_id, 'active'::text;
end;
$$;

-- Refund reconciliation revokes the entitlement tied to the refunded payment.
create or replace function public.academy_revoke_refunded_payment(
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
  where provider_payment_id = p_provider_payment_id
  for update;

  if not found then return; end if;
  if v_order.status = 'refunded' then
    return query select v_order.course_slug, v_order.user_id, 'revoked'::text;
    return;
  end if;

  update public.academy_payment_orders set status = 'refunded', updated_at = now() where id = v_order.id;
  update public.academy_entitlements set status = 'revoked', updated_at = now()
  where payment_order_id = v_order.id;

  return query select v_order.course_slug, v_order.user_id, 'revoked'::text;
end;
$$;

revoke all on function public.academy_fulfill_payment(text, text, text) from public, anon, authenticated;
revoke all on function public.academy_revoke_refunded_payment(text, text) from public, anon, authenticated;
grant execute on function public.academy_fulfill_payment(text, text, text) to service_role;
grant execute on function public.academy_revoke_refunded_payment(text, text) to service_role;

revoke all on public.academy_courses, public.academy_modules, public.academy_lessons, public.academy_payment_orders, public.academy_entitlements, public.academy_lesson_progress, public.academy_webhook_events from anon, authenticated;
grant select on public.academy_courses, public.academy_modules to anon, authenticated;
grant select on public.academy_lessons, public.academy_payment_orders, public.academy_entitlements to authenticated;
grant select, insert, update on public.academy_lesson_progress to authenticated;
grant all on public.academy_courses, public.academy_modules, public.academy_lessons, public.academy_payment_orders, public.academy_entitlements, public.academy_lesson_progress, public.academy_webhook_events to service_role;
