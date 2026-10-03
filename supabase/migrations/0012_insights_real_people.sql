-- Insights count real people only, from the App Store launch on.
--
-- Walkito went live on the App Store on 2 October 2026. Every account made
-- before that is a founder, a TestFlight tester, App Review or Google's
-- pre-launch robots, and they would sit in every count from now on. They are
-- not deleted — their plans, logs and sends stay exactly where they are — but
-- they are listed here, and the insights views leave them out.
--
-- To leave another account out (a new test phone, a reviewer), add a row:
--   insert into insights.test_accounts (user_id, reason) values ('…', 'founder');
-- To bring one back, delete its row. Nothing else changes.

create table if not exists insights.test_accounts (
  user_id   uuid primary key references auth.users (id) on delete cascade,
  reason    text not null,
  added_at  timestamptz not null default now()
);

revoke all on insights.test_accounts from public, anon, authenticated;

-- Everyone from before the launch.
insert into insights.test_accounts (user_id, reason)
select id, 'before launch'
from auth.users
where created_at < '2026-10-02T00:00:00Z'
on conflict (user_id) do nothing;

-- The founders' own accounts made after it.
insert into insights.test_accounts (user_id, reason)
select id, 'founder'
from auth.users
where email in ('umudyan2014@gmail.com', 'rahimwws.me@gmail.com', 'rahimwwsdesign@gmail.com', 'rahim@nemy.agency')
on conflict (user_id) do nothing;

-- ── The views, with test accounts left out ──────────────────────────────────
-- Same columns as in 0008 and 0009; only the filters are new. `goal_progress`
-- and `outcome_progress` stay per-user building blocks: everything read from
-- them goes through `insights.users`, which does the filtering.

create or replace view insights.users as
select
  u.id as user_id,
  u.email,
  coalesce(u.is_anonymous, false) as is_anonymous,
  u.created_at as signed_up_at,
  p.goal_answer,
  p.sport,
  op.kind as goal,
  p.days_per_week,
  p.default_minutes,
  p.weeks_started_on,
  (current_date - p.weeks_started_on) + 1 as plan_day,
  op.current_step,
  op.step_number,
  op.steps_total,
  round(coalesce(op.fill, 0) * 100) as goal_percent,
  t.tests_taken,
  t.last_test_on,
  t.last_test_day,
  current_date - t.last_test_on as days_since_test,
  coalesce(t.last_test_on, p.weeks_started_on) < current_date - 17 as test_overdue,
  s.sessions_total,
  s.sessions_7d,
  s.last_session_on,
  c.checkins_7d,
  a.minutes_total,
  a.minutes_7d,
  a.opens_7d,
  a.last_seen_on
from auth.users u
left join public.profiles p on p.user_id = u.id
left join insights.outcome_progress op on op.user_id = u.id
left join lateral (
  select count(*)::integer as tests_taken, max(taken_on) as last_test_on, max(day_number) as last_test_day
  from public.tests where user_id = u.id
) t on true
left join lateral (
  select
    count(*)::integer as sessions_total,
    (count(*) filter (where date >= current_date - 6))::integer as sessions_7d,
    max(date) as last_session_on
  from public.sessions where user_id = u.id
) s on true
left join lateral (
  select count(*)::integer as checkins_7d
  from public.checkins where user_id = u.id and date >= current_date - 6
) c on true
left join lateral (
  select
    round(coalesce(sum(seconds), 0) / 60.0, 1) as minutes_total,
    round(coalesce(sum(seconds) filter (where date >= current_date - 6), 0) / 60.0, 1) as minutes_7d,
    coalesce(sum(opens) filter (where date >= current_date - 6), 0)::integer as opens_7d,
    max(date) as last_seen_on
  from public.app_usage where user_id = u.id
) a on true
where not exists (select 1 from insights.test_accounts x where x.user_id = u.id);

create or replace view insights.daily as
with days as (
  select generate_series(current_date - 59, current_date, interval '1 day')::date as date
),
real_users as (
  select id from auth.users u
  where not exists (select 1 from insights.test_accounts x where x.user_id = u.id)
)
select
  d.date,
  (select count(*) from auth.users u where u.created_at::date = d.date and u.id in (select id from real_users))::integer as new_users,
  (select count(*) from public.app_usage a where a.date = d.date and a.user_id in (select id from real_users))::integer as active_users,
  (select round(avg(a.seconds) / 60.0, 1) from public.app_usage a where a.date = d.date and a.user_id in (select id from real_users)) as avg_minutes,
  (select count(*) from public.sessions s where s.date = d.date and s.source <> 'test' and s.user_id in (select id from real_users))::integer as sessions,
  (select count(*) from public.tests t where t.taken_on = d.date and t.user_id in (select id from real_users))::integer as tests,
  (select count(*) from public.checkins c where c.date = d.date and c.user_id in (select id from real_users))::integer as checkins
from days d
order by d.date desc;

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
from public.email_log l
where not exists (select 1 from insights.test_accounts x where x.user_id = l.user_id)
group by email_key
order by sent desc;

create or replace view insights.email_audience as
select
  count(*)::integer as contacts,
  (count(*) filter (where unsubscribed_at is null and not bounced))::integer as reachable,
  (count(*) filter (where unsubscribed_at is not null))::integer as unsubscribed,
  (count(*) filter (where bounced))::integer as bounced,
  (count(*) filter (where source = 'apple_relay'))::integer as apple_relay,
  (count(*) filter (where weekly_opt_in))::integer as weekly_opt_in,
  (count(*) filter (where not lifecycle_opt_in))::integer as lifecycle_off
from public.email_contacts c
where not exists (select 1 from insights.test_accounts x where x.user_id = c.user_id);

revoke all on all tables in schema insights from public, anon, authenticated;
