-- Website email signups, apart from app users.
--
-- Site visitors who ask for the printable exercise sheets and the 7-day
-- starter plan are not Supabase auth users: they have no account, no plan and
-- no health data. They live in their own table so nothing in the app's email
-- system has to change, and the scheduler's site-lead step is a short loop
-- that only reads this table.
--
-- Double opt-in: the edge function `site-subscribe` inserts a row with a
-- hashed confirm token, sends a confirmation email, and only marks
-- `confirmed_at` when the visitor clicks the link. No email from the 7-day
-- sequence is sent until `confirmed_at` is set.
--
-- The 7-day sequence: `plan_day` starts at 0 (the welcome with the PDF links)
-- and goes to 7. `last_sent_at` is when the last email went out. The
-- scheduler sends the next day's email once ~24 hours have passed and
-- `plan_day < 7`.
--
-- Unsubscribe: the same HMAC token scheme the app emails use, but the id
-- part is the lead's uuid instead of an auth user id. The `email-unsubscribe`
-- function checks `site_leads` when `email_contacts` has no match.

-- ── The leads ───────────────────────────────────────────────────────────────

create table if not exists public.site_leads (
  id                uuid primary key default gen_random_uuid(),
  email             text not null,
  locale            text not null default 'en' check (locale in ('en', 'ru', 'es')),
  -- Which signup form: 'printables' or 'guide'.
  source            text not null check (source in ('printables', 'guide')),
  -- The page path where the form was submitted, e.g. '/plantar-fasciitis-exercises/'.
  page              text not null default '/',

  -- Double opt-in.
  confirm_token_hash text,
  confirmed_at      timestamptz,

  -- Consent and sending.
  lifecycle_opt_in  boolean not null default true,
  unsubscribed_at   timestamptz,
  bounced           boolean not null default false,

  -- 7-day sequence progress.
  -- 0 = welcome with PDFs sent on confirm; 1-7 = daily emails; null = not started.
  plan_day          smallint,
  last_sent_at      timestamptz,

  created_at        timestamptz not null default now()
);

-- One row per email address: a second signup from the same address updates the
-- existing row rather than creating a duplicate. The email column stores the
-- lowercased form (the edge function lowercases before insert), so a plain
-- unique constraint works and the Supabase JS upsert can target it.
create unique index if not exists site_leads_email on public.site_leads (email);

-- The scheduler queries confirmed, opted-in, not-unsubscribed, not-bounced
-- leads that still have days left in the sequence.
create index if not exists site_leads_pending on public.site_leads (confirmed_at, plan_day)
  where confirmed_at is not null
    and unsubscribed_at is null
    and bounced = false
    and (plan_day is null or plan_day < 7);

alter table public.site_leads enable row level security;
-- No public policies: every read and write goes through the service role
-- (the edge functions). No RLS policy means no anonymous or authenticated
-- access at all.

-- ── Send log for site leads ─────────────────────────────────────────────────
-- The app's `email_log` requires a `user_id` referencing `auth.users`, so site
-- leads need their own log. Same shape, minus the fields that only make sense
-- for app users (clicked_at, action_done_at).

create table if not exists public.site_lead_email_log (
  id              uuid primary key default gen_random_uuid(),
  lead_id         uuid not null references public.site_leads (id) on delete cascade,
  email_key       text not null,
  dedupe_key      text not null,
  locale          text,
  status          text not null default 'sending' check (status in ('sending', 'sent', 'failed')),
  sent_at         timestamptz not null default now(),
  resend_id       text,
  delivery        text,
  error           text
);

create unique index if not exists site_lead_email_log_dedupe
  on public.site_lead_email_log (lead_id, dedupe_key);
create index if not exists site_lead_email_log_lead_sent
  on public.site_lead_email_log (lead_id, sent_at desc);

alter table public.site_lead_email_log enable row level security;
-- No public policies: service role only.
