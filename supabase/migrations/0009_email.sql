-- Personalised email, decided by the user's own synced data.
--
-- One sending path: `pg_cron` calls the `email-scheduler` edge function every
-- hour, the function reads the tables below and the plan tables from 0007,
-- picks at most one email per user, renders it with React Email and sends it
-- through Resend. Everything it needs to decide lives here.
--
-- Four new tables, each kept to one job:
--
--   email_contacts  the address and the consent, apart from any health data
--   email_log       every send, for dedupe, caps and attribution
--   app_events      the few app facts the plan tables do not hold
--   subscriptions   RevenueCat's word on who pays, written by its webhook
--
-- Health tables never hold the address, and this file never copies a health
-- value anywhere: the scheduler reads pain and test numbers where they already
-- are and only ever puts them in an email body.

-- ── Contact and consent ─────────────────────────────────────────────────────
create table if not exists public.email_contacts (
  user_id           uuid primary key references auth.users (id) on delete cascade,
  email             text not null,
  -- apple_relay: an @privaterelay.appleid.com address; apple: the real address
  -- Apple shared; google: Android sign-in; onboarding: typed in the app.
  source            text not null check (source in ('apple_relay', 'apple', 'google', 'onboarding', 'site_quiz')),
  locale            text not null default 'en' check (locale in ('en', 'ru', 'es')),
  timezone          text not null default 'UTC',
  -- What the welcome greets them by. Optional; no name means no name, never "hi ,".
  first_name        text,
  lifecycle_opt_in  boolean not null default true,   -- tips and lifecycle
  weekly_opt_in     boolean not null default false,  -- the weekly summary, opt-in only
  unsubscribed_at   timestamptz,
  bounced           boolean not null default false,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

alter table public.email_contacts enable row level security;
drop policy if exists "read own contact" on public.email_contacts;
create policy "read own contact" on public.email_contacts
  for select using (user_id = auth.uid());
-- No write policy: the app writes through the functions below, which only
-- touch the columns a user may change. `bounced` is the webhook's alone.

-- ── Every send ──────────────────────────────────────────────────────────────
-- `email_key` names the template. `dedupe_key` is what may happen only once:
-- the key itself for lifecycle email, the key and the week for the weekly
-- summary, the key and the test for a result. A unique index on it is what
-- makes "each lifecycle email once, ever" true even if two runs overlap.
create table if not exists public.email_log (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users (id) on delete cascade,
  email_key       text not null,
  dedupe_key      text not null,
  locale          text,
  status          text not null default 'sending' check (status in ('sending', 'sent', 'failed')),
  sent_at         timestamptz not null default now(),
  clicked_at      timestamptz,
  action_done_at  timestamptz,  -- the thing the email asked for happened, after a click
  resend_id       text,
  -- Resend's last event for the message: delivered, bounced, complained … The
  -- scheduler reads it back for a few days after each send, which is how a
  -- bounce reaches `email_contacts.bounced` without a webhook secret.
  delivery        text,
  error           text
);
create unique index if not exists email_log_dedupe on public.email_log (user_id, dedupe_key);
create index if not exists email_log_user_sent on public.email_log (user_id, sent_at desc);
create index if not exists email_log_key on public.email_log (email_key, sent_at);

alter table public.email_log enable row level security;
drop policy if exists "read own log" on public.email_log;
create policy "read own log" on public.email_log
  for select using (user_id = auth.uid());
-- Written by the service role only (the scheduler, and the two functions below).

-- ── App events the scheduler needs ──────────────────────────────────────────
create table if not exists public.app_events (
  id       uuid primary key default gen_random_uuid(),
  user_id  uuid not null references auth.users (id) on delete cascade,
  name     text not null check (name in ('paywall_viewed', 'app_opened', 'email_link_opened')),
  props    jsonb,
  at       timestamptz not null default now()
);
create index if not exists app_events_user_name on public.app_events (user_id, name, at desc);

alter table public.app_events enable row level security;
drop policy if exists "own events" on public.app_events;
create policy "own events" on public.app_events
  for select using (user_id = auth.uid());
drop policy if exists "add own events" on public.app_events;
create policy "add own events" on public.app_events
  for insert with check (user_id = auth.uid());

-- ── Subscription status, from RevenueCat ────────────────────────────────────
create table if not exists public.subscriptions (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  status      text not null check (status in ('active', 'expired', 'none')),
  product_id  text,
  updated_at  timestamptz not null default now()
);

alter table public.subscriptions enable row level security;
drop policy if exists "read own subscription" on public.subscriptions;
create policy "read own subscription" on public.subscriptions
  for select using (user_id = auth.uid());

-- RevenueCat knows a buyer by its own anonymous id, not by ours: the SDK is
-- configured without an app user id, and PostHog is identified with the same
-- RevenueCat id, so switching it would split every funnel. The app reports
-- which RevenueCat id it is running as, and the webhook looks the user up here.
create table if not exists public.revenuecat_links (
  rc_app_user_id  text primary key,
  user_id         uuid not null references auth.users (id) on delete cascade,
  updated_at      timestamptz not null default now()
);
create index if not exists revenuecat_links_user on public.revenuecat_links (user_id);
alter table public.revenuecat_links enable row level security;
-- No policies: written through `link_revenuecat`, read by the service role.

create or replace function public.link_revenuecat(p_app_user_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null or p_app_user_id is null or btrim(p_app_user_id) = '' then
    return;
  end if;
  insert into revenuecat_links (rc_app_user_id, user_id, updated_at)
  values (left(btrim(p_app_user_id), 200), uid, now())
  on conflict (rc_app_user_id) do update set user_id = excluded.user_id, updated_at = now();
end;
$$;

grant execute on function public.link_revenuecat(text) to authenticated;

-- ── Profile additions ───────────────────────────────────────────────────────
-- Both set by the app after every successful sync. `last_synced_at` is how
-- fresh everything else is: an email that assumes something was not done is
-- skipped when it is more than a day old, because the user may have done it
-- offline. `push_session_dates` / `push_test_dates` are the days the phone has
-- a session or retest push laid for (its seven-day window), so an email never
-- says what a push already says that day.
alter table public.profiles
  add column if not exists last_synced_at      timestamptz,
  add column if not exists last_app_open_at    timestamptz,
  add column if not exists push_session_dates  date[] not null default '{}',
  add column if not exists push_test_dates     date[] not null default '{}';

-- ── What the app may write ──────────────────────────────────────────────────

/**
 * Stores the caller's address, language, time zone and first name.
 *
 * Idempotent, called whenever the app learns any of them. A blank email keeps
 * the stored one and only refreshes the rest, so a launch can keep locale and
 * time zone current without knowing the address. A new address clears
 * `bounced`: it is a different mailbox.
 */
create or replace function public.save_email_contact(
  p_email       text,
  p_source      text,
  p_locale      text,
  p_timezone    text,
  p_first_name  text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid     uuid := auth.uid();
  address text := lower(btrim(coalesce(p_email, '')));
  loc     text := case when p_locale in ('en', 'ru', 'es') then p_locale else null end;
  tz      text := nullif(btrim(coalesce(p_timezone, '')), '');
  fname   text := nullif(btrim(coalesce(p_first_name, '')), '');
  src     text;
begin
  if uid is null then
    raise exception 'not signed in';
  end if;
  -- A zone Postgres does not know would break every local-hour check later.
  if tz is not null and not exists (select 1 from pg_timezone_names where name = tz) then
    tz := null;
  end if;

  if address = '' then
    update email_contacts
      set locale = coalesce(loc, locale),
          timezone = coalesce(tz, timezone),
          first_name = coalesce(fname, first_name),
          updated_at = now()
      where user_id = uid;
    return;
  end if;

  src := case
    when address like '%@privaterelay.appleid.com' then 'apple_relay'
    when p_source in ('apple', 'google', 'onboarding', 'site_quiz') then p_source
    else 'onboarding'
  end;

  insert into email_contacts (user_id, email, source, locale, timezone, first_name)
  values (uid, address, src, coalesce(loc, 'en'), coalesce(tz, 'UTC'), fname)
  on conflict (user_id) do update
    set bounced = case when email_contacts.email = excluded.email then email_contacts.bounced else false end,
        source = case when email_contacts.email = excluded.email then email_contacts.source else excluded.source end,
        email = excluded.email,
        locale = coalesce(loc, email_contacts.locale),
        timezone = coalesce(tz, email_contacts.timezone),
        first_name = coalesce(fname, email_contacts.first_name),
        updated_at = now();

  -- The older table support reads, kept in step.
  insert into contact_emails (user_id, email, updated_at)
  values (uid, address, now())
  on conflict (user_id) do update set email = excluded.email, updated_at = now();
end;
$$;

grant execute on function public.save_email_contact(text, text, text, text, text) to anon, authenticated;

/**
 * The 0004 entry point, kept for builds already in people's hands. It now
 * writes the contact too, with nothing but the address.
 */
create or replace function public.save_contact_email(p_email text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_email is null or btrim(p_email) = '' then
    return;
  end if;
  perform public.save_email_contact(p_email, 'apple', null, null, null);
end;
$$;

grant execute on function public.save_contact_email(text) to anon, authenticated;

/**
 * The two toggles in Settings → Email. Null leaves a toggle as it is. Turning
 * either on again is a fresh yes, so it lifts an earlier "unsubscribe from all".
 */
create or replace function public.set_email_prefs(p_lifecycle boolean, p_weekly boolean)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not signed in';
  end if;
  update email_contacts
    set lifecycle_opt_in = coalesce(p_lifecycle, lifecycle_opt_in),
        weekly_opt_in = coalesce(p_weekly, weekly_opt_in),
        unsubscribed_at = case when coalesce(p_lifecycle, false) or coalesce(p_weekly, false) then null else unsubscribed_at end,
        updated_at = now()
    where user_id = uid;
end;
$$;

grant execute on function public.set_email_prefs(boolean, boolean) to authenticated;

/** "Unsubscribe from all", from inside the app. The email footer has its own. */
create or replace function public.unsubscribe_all_emails()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not signed in';
  end if;
  update email_contacts
    set unsubscribed_at = coalesce(unsubscribed_at, now()),
        lifecycle_opt_in = false,
        weekly_opt_in = false,
        updated_at = now()
    where user_id = uid;
end;
$$;

grant execute on function public.unsubscribe_all_emails() to authenticated;

/**
 * The app was opened from an email button. Logs the event and marks the send
 * as clicked — the latest send of that key, since the weekly summary repeats.
 */
create or replace function public.email_link_opened(p_email_key text, p_path text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null or p_email_key is null or btrim(p_email_key) = '' then
    return;
  end if;
  insert into app_events (user_id, name, props)
  values (uid, 'email_link_opened', jsonb_build_object('e', left(p_email_key, 64), 'path', left(coalesce(p_path, ''), 128)));

  update email_log
    set clicked_at = now()
    where id = (
      select id from email_log
      where user_id = uid and email_key = p_email_key and status = 'sent'
      order by sent_at desc
      limit 1
    )
    and clicked_at is null;
end;
$$;

grant execute on function public.email_link_opened(text, text) to authenticated;

-- ── Attribution: did the email cause the action ─────────────────────────────
-- Run by the scheduler each hour. A clicked send counts as done when the thing
-- it asked for happened within three days of the click:
--   offer, offer_final   a subscription turned active
--   day14_test           a test was taken
--   day2_morning         a morning stretch was logged
--   everything else      a session was finished
-- Done here rather than on the phone so it holds across devices and for
-- purchases that land through the RevenueCat webhook.
create or replace function public.attribute_email_actions()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  touched integer;
begin
  with pending as (
    select id, user_id, email_key, clicked_at
    from email_log
    where clicked_at is not null
      and action_done_at is null
      and clicked_at > now() - interval '4 days'
  ),
  done as (
    select p.id,
      case
        when p.email_key in ('offer', 'offer_final') then (
          select s.updated_at from subscriptions s
          where s.user_id = p.user_id and s.status = 'active'
            and s.updated_at between p.clicked_at and p.clicked_at + interval '3 days')
        when p.email_key = 'day14_test' then (
          select min(t.taken_on)::timestamptz from tests t
          where t.user_id = p.user_id and t.taken_on between p.clicked_at::date and (p.clicked_at + interval '3 days')::date)
        when p.email_key = 'day2_morning' then (
          select min(c.date)::timestamptz from checkins c
          where c.user_id = p.user_id and c.morning_stretch
            and c.date between p.clicked_at::date and (p.clicked_at + interval '3 days')::date)
        else (
          select min(x.completed_at) from sessions x
          where x.user_id = p.user_id and x.source <> 'test'
            and x.completed_at between p.clicked_at and p.clicked_at + interval '3 days')
      end as done_at
    from pending p
  )
  update email_log l
    set action_done_at = greatest(d.done_at, l.clicked_at)
    from done d
    where l.id = d.id and d.done_at is not null;
  get diagnostics touched = row_count;
  return touched;
end;
$$;

revoke all on function public.attribute_email_actions() from public, anon, authenticated;

/** Finished sessions per user, tests left out — "has done at least one" without paging every row. */
create or replace function public.email_session_totals(p_users uuid[])
returns table (user_id uuid, total integer)
language sql
stable
security definer
set search_path = public
as $$
  select s.user_id, count(*)::integer
  from sessions s
  where s.user_id = any (p_users) and s.source <> 'test'
  group by s.user_id;
$$;

revoke all on function public.email_session_totals(uuid[]) from public, anon, authenticated;

-- ── Existing addresses carry over ───────────────────────────────────────────
insert into public.email_contacts (user_id, email, source)
select c.user_id, c.email,
  case when c.email like '%@privaterelay.appleid.com' then 'apple_relay' else 'apple' end
from public.contact_emails c
on conflict (user_id) do nothing;

-- ── What the email did: the first-week report ───────────────────────────────
-- Sent, clicked, action done, per email key. Opens are not counted: Apple Mail
-- Privacy Protection opens every message on delivery, so they mean nothing.
create or replace view insights.email_metrics as
select
  email_key,
  count(*) filter (where status = 'sent')::integer as sent,
  count(clicked_at)::integer as clicked,
  count(action_done_at)::integer as action_done,
  round(100.0 * count(clicked_at) / nullif(count(*) filter (where status = 'sent'), 0), 1) as click_pct,
  round(100.0 * count(action_done_at) / nullif(count(*) filter (where status = 'sent'), 0), 1) as action_pct,
  count(*) filter (where status = 'failed')::integer as failed,
  min(sent_at) as first_sent,
  max(sent_at) as last_sent
from public.email_log
group by email_key
order by sent desc;

-- Who can be emailed at all, and why the rest cannot.
create or replace view insights.email_audience as
select
  count(*)::integer as contacts,
  (count(*) filter (where unsubscribed_at is null and not bounced))::integer as reachable,
  (count(*) filter (where unsubscribed_at is not null))::integer as unsubscribed,
  (count(*) filter (where bounced))::integer as bounced,
  (count(*) filter (where source = 'apple_relay'))::integer as apple_relay,
  (count(*) filter (where weekly_opt_in))::integer as weekly_opt_in,
  (count(*) filter (where not lifecycle_opt_in))::integer as lifecycle_off
from public.email_contacts;

revoke all on all tables in schema insights from public, anon, authenticated;

-- ── The hourly run ──────────────────────────────────────────────────────────
-- pg_cron calls the edge function at five past every hour. The project URL and
-- the shared secret are read from Vault at run time, so neither is in this
-- file: create them once with
--   select vault.create_secret('https://<ref>.supabase.co', 'project_url');
--   select vault.create_secret('<random>', 'email_cron_secret');
-- and set the same secret on the function as EMAIL_CRON_SECRET.
create extension if not exists pg_cron with schema pg_catalog;
create extension if not exists pg_net with schema extensions;

do $$
begin
  if exists (select 1 from cron.job where jobname = 'email-scheduler') then
    perform cron.unschedule('email-scheduler');
  end if;
end;
$$;

select cron.schedule(
  'email-scheduler',
  '5 * * * *',
  $cron$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'project_url') || '/functions/v1/email-scheduler',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || (select decrypted_secret from vault.decrypted_secrets where name = 'email_cron_secret')
    ),
    body := '{}'::jsonb,
    timeout_milliseconds := 120000
  );
  $cron$
);
