-- The 3-month pass: a one-time purchase that opens the app for 90 days.
--
-- Two products per store, sold through RevenueCat but attached to no
-- entitlement on purpose: iOS pass_12wk_4999 ($39.99) and pass_12wk_1499 (the
-- $24.99 retention offer), Android pass_3mo and pass_3mo_offer. RevenueCat
-- would treat a one-time product as owned forever, so the 90 days are counted
-- here instead, by the `revenuecat-webhook` function, and the app reads them
-- back (`entities/purchase/model/pass.ts`):
--
--   access = the premium entitlement OR pass_starts_at <= now < pass_expires_at
--
-- A pass bought while something else is still running starts when that ends:
-- start = the latest of now, the premium entitlement's end and the current
-- pass's end. So a pass bought on top of a yearly subscription (or a second
-- pass) adds 90 days rather than overlapping them.

alter table public.profiles
  add column if not exists pass_starts_at           timestamptz,
  add column if not exists pass_expires_at          timestamptz,
  add column if not exists pass_bought_at           timestamptz,
  add column if not exists retention_offer_used_at  timestamptz,
  add column if not exists review_mode              boolean not null default false;

-- ── Only the server writes them ─────────────────────────────────────────────
-- `profiles` is the app's own row ("own rows" lets it insert and update every
-- column), so without this anyone could PATCH a pass_expires_at into the year
-- 3000. Writes made with the anon or a user's key keep the stored values;
-- the service role (the webhook) and direct SQL are unaffected.
create or replace function public.keep_server_profile_fields()
returns trigger
language plpgsql
as $$
begin
  if coalesce(auth.role(), '') in ('anon', 'authenticated') then
    if tg_op = 'INSERT' then
      new.pass_starts_at := null;
      new.pass_expires_at := null;
      new.pass_bought_at := null;
      new.retention_offer_used_at := null;
      new.review_mode := false;
    else
      new.pass_starts_at := old.pass_starts_at;
      new.pass_expires_at := old.pass_expires_at;
      new.pass_bought_at := old.pass_bought_at;
      new.retention_offer_used_at := old.retention_offer_used_at;
      new.review_mode := old.review_mode;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists keep_server_profile_fields on public.profiles;
create trigger keep_server_profile_fields
  before insert or update on public.profiles
  for each row execute function public.keep_server_profile_fields();

-- ── Every pass purchase, once ───────────────────────────────────────────────
-- Keyed by the store's transaction id, so a webhook delivered twice (RevenueCat
-- retries on any error) never adds a second 90 days.
create table if not exists public.pass_grants (
  transaction_id  text primary key,
  user_id         uuid not null references auth.users (id) on delete cascade,
  product_id      text not null,
  rc_app_user_id  text,
  purchased_at    timestamptz not null,
  starts_at       timestamptz not null,
  expires_at      timestamptz not null,
  created_at      timestamptz not null default now()
);
create index if not exists pass_grants_user on public.pass_grants (user_id);
alter table public.pass_grants enable row level security;
-- No policies: written and read by the service role only.

-- ── The grant itself, atomic ────────────────────────────────────────────────
-- Called by the webhook (service role) once it has confirmed the purchase with
-- RevenueCat's API. Returns the profile's pass window after the call, whether
-- or not this call was the one that added the days.
create or replace function public.grant_pass(
  p_user_id        uuid,
  p_transaction_id text,
  p_product_id     text,
  p_rc_app_user_id text,
  p_purchased_at   timestamptz,
  p_premium_until  timestamptz,
  p_retention      boolean,
  p_days           integer default 90
)
returns table (granted boolean, starts_at timestamptz, expires_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  prof        profiles%rowtype;
  v_start     timestamptz;
  v_expiry    timestamptz;
  v_starts_at timestamptz;
begin
  -- A profile row may not exist yet (bought before the plan first synced).
  insert into profiles (user_id) values (p_user_id) on conflict (user_id) do nothing;
  select * into prof from profiles where user_id = p_user_id for update;

  if exists (select 1 from pass_grants where transaction_id = p_transaction_id) then
    return query select false, prof.pass_starts_at, prof.pass_expires_at;
    return;
  end if;

  -- greatest() skips nulls: whichever of the purchase, the subscription's end
  -- and the running pass's end is latest. The purchase rather than now(): the
  -- webhook runs within seconds of it, and a purchase granted later (by
  -- `pass-sync` on another phone, or after a missed webhook) must not gain the
  -- days it waited.
  v_start := greatest(coalesce(p_purchased_at, now()), p_premium_until, prof.pass_expires_at);
  v_expiry := v_start + make_interval(days => p_days);
  -- A pass that runs straight on from a pass still running keeps its start, so
  -- the window stays one piece; otherwise it starts when the days begin.
  v_starts_at := case
    when prof.pass_expires_at is not null
         and prof.pass_expires_at > coalesce(p_purchased_at, now())
         and prof.pass_starts_at is not null
      then prof.pass_starts_at
    else v_start
  end;

  insert into pass_grants (transaction_id, user_id, product_id, rc_app_user_id, purchased_at, starts_at, expires_at)
  values (p_transaction_id, p_user_id, p_product_id, p_rc_app_user_id, coalesce(p_purchased_at, now()), v_start, v_expiry);

  update profiles
  set pass_starts_at = v_starts_at,
      pass_expires_at = v_expiry,
      pass_bought_at = greatest(coalesce(p_purchased_at, now()), coalesce(pass_bought_at, '-infinity'::timestamptz)),
      retention_offer_used_at = case when p_retention then now() else retention_offer_used_at end,
      updated_at = now()
  where user_id = p_user_id;

  return query select true, v_starts_at, v_expiry;
end;
$$;

revoke all on function public.grant_pass(uuid, text, text, text, timestamptz, timestamptz, boolean, integer) from public, anon, authenticated;
grant execute on function public.grant_pass(uuid, text, text, text, timestamptz, timestamptz, boolean, integer) to service_role;

-- ── The App Review account ──────────────────────────────────────────────────
-- review@walkito.app has access granted by `comp_access`, not a store
-- subscription, so the offers that are only for subscribers would never show
-- to a reviewer. In review mode the app shows them anyway: the budget offer in
-- the cancel flow always, and a "Special offers" row in Settings that opens
-- the limited offer.
insert into public.profiles (user_id, review_mode)
select id, true from auth.users where email = 'review@walkito.app'
on conflict (user_id) do update set review_mode = true;
