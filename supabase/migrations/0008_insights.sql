-- Insights: who is using the plan, how far along they are, and how long they stay.
--
-- Two parts.
--
-- 1. `app_usage` — foreground time per user per day, sent by the app with the
--    rest of the plan (see `shared/lib/usage`). The one thing the plan tables
--    did not already hold.
--
-- 2. The `insights` schema — read-only views over the synced tables, for the
--    SQL editor and the dashboard's Reports. Deliberately *not* in `public`:
--    `public` is what the API exposes, and these views join `auth.users` and
--    read every user's rows. Nothing here is granted to `anon` or
--    `authenticated`, so the app cannot reach it; the dashboard, which runs as
--    `postgres`, can.
--
-- The goal arithmetic mirrors `goalProgress` and `outcomeProgress` in
-- `src/entities/program/model/plan/` — change one, change both.

-- ── Time in the app ─────────────────────────────────────────────────────────
create table if not exists public.app_usage (
  user_id  uuid not null references auth.users (id) on delete cascade,
  date     date not null,
  seconds  integer not null default 0 check (seconds >= 0),
  opens    integer not null default 0 check (opens >= 0),
  primary key (user_id, date)
);

alter table public.app_usage enable row level security;
drop policy if exists "own rows" on public.app_usage;
create policy "own rows" on public.app_usage
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- What onboarding was told, for slicing the views: the goal answer and the sport.
alter table public.profiles
  add column if not exists goal_answer text,
  add column if not exists sport       text,
  add column if not exists created_at  timestamptz not null default now();

-- ── The insights schema ─────────────────────────────────────────────────────
create schema if not exists insights;
revoke all on schema insights from public, anon, authenticated;

-- Each measured goal, 0–1. Reached goals count as 1.
create or replace view insights.goal_progress as
select
  g.user_id,
  g.type,
  g.status,
  g.baseline,
  g.current,
  t.target,
  case
    when g.status <> 'active' then 1
    when g.current is null then 0
    when t.lower_is_better then
      case
        when g.current <= t.target then 1
        when coalesce(g.baseline, g.current) <= t.target then 1
        else greatest(0, least(1,
          (coalesce(g.baseline, g.current) - g.current)
          / nullif(coalesce(g.baseline, g.current) - t.target, 0)))
      end
    else greatest(0, least(1, g.current / t.target))
  end::numeric as progress,
  g.since,
  g.achieved_on
from public.goals g
join (values
  ('pain_free_mornings', 1::numeric,  true),
  ('arch_hold',          60::numeric, false),
  ('calf_raises',        25::numeric, false),
  ('balance',            30::numeric, false),
  ('symmetry',           10::numeric, true)
) as t (type, target, lower_is_better) using (type);

-- The big goal: which step each user is on and how far along the whole path.
-- Steps before the current one count whole; the current one its part.
create or replace view insights.outcome_progress as
with steps as (
  select
    p.user_id,
    p.outcome ->> 'kind' as kind,
    s.step,
    s.ord::integer as ord,
    count(*) over (partition by p.user_id)::integer as total
  from public.profiles p
  cross join lateral jsonb_array_elements_text(coalesce(p.outcome -> 'steps', '[]'::jsonb))
    with ordinality as s (step, ord)
),
joined as (
  select st.*, coalesce(gp.status, 'active') as status, coalesce(gp.progress, 0) as progress
  from steps st
  left join insights.goal_progress gp on gp.user_id = st.user_id and gp.type = st.step
),
current_step as (
  select distinct on (user_id) user_id, step, ord, progress
  from joined
  where status = 'active'
  order by user_id, ord
)
select
  p.user_id,
  p.outcome ->> 'kind' as kind,
  c.step as current_step,
  coalesce(c.ord, jsonb_array_length(p.outcome -> 'steps')) as step_number,
  jsonb_array_length(p.outcome -> 'steps') as steps_total,
  case
    when c.user_id is null then 1
    else round(((c.ord - 1) + c.progress) / nullif(jsonb_array_length(p.outcome -> 'steps'), 0), 3)
  end as fill
from public.profiles p
left join current_step c on c.user_id = p.user_id
where p.outcome is not null;

-- One row per user: where they are, what they have done, how engaged they are.
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
  -- A test is due every 14 days; overdue past that with a few days' grace.
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
) a on true;

-- The test checkpoints: of the users who have reached day N of their plan,
-- how many took a test around it (within six days either side).
create or replace view insights.retest_funnel as
with checkpoints (day) as (values (14), (28), (42), (56), (70), (84)),
reached as (
  select u.user_id, u.plan_day, c.day as checkpoint
  from insights.users u
  join checkpoints c on u.plan_day >= c.day + 3
)
select
  r.checkpoint,
  count(*)::integer as users_reached,
  (count(*) filter (where exists (
    select 1 from public.tests t
    where t.user_id = r.user_id and t.day_number between r.checkpoint - 6 and r.checkpoint + 6
  )))::integer as users_tested,
  round(100.0 * count(*) filter (where exists (
    select 1 from public.tests t
    where t.user_id = r.user_id and t.day_number between r.checkpoint - 6 and r.checkpoint + 6
  )) / nullif(count(*), 0)) as percent_tested
from reached r
group by r.checkpoint
order by r.checkpoint;

-- How close to their goal users are, by week of the plan.
create or replace view insights.progress_by_week as
select
  ((plan_day - 1) / 7) + 1 as plan_week,
  count(*)::integer as users,
  round(avg(goal_percent)) as avg_goal_percent,
  round(avg(sessions_7d), 1) as avg_sessions_7d,
  round(avg(minutes_7d), 1) as avg_minutes_7d
from insights.users
where plan_day >= 1
group by 1
order by 1;

-- The last 60 days, one row each.
create or replace view insights.daily as
with days as (
  select generate_series(current_date - 59, current_date, interval '1 day')::date as date
)
select
  d.date,
  (select count(*) from auth.users u where u.created_at::date = d.date)::integer as new_users,
  (select count(*) from public.app_usage a where a.date = d.date)::integer as active_users,
  (select round(avg(a.seconds) / 60.0, 1) from public.app_usage a where a.date = d.date) as avg_minutes,
  (select count(*) from public.sessions s where s.date = d.date and s.source <> 'test')::integer as sessions,
  (select count(*) from public.tests t where t.taken_on = d.date)::integer as tests,
  (select count(*) from public.checkins c where c.date = d.date)::integer as checkins
from days d
order by d.date desc;

-- The whole picture in one row.
create or replace view insights.summary as
select
  count(*)::integer as users,
  (count(*) filter (where not is_anonymous))::integer as signed_in,
  (count(*) filter (where last_seen_on >= current_date - 6))::integer as active_7d,
  (count(*) filter (where last_seen_on = current_date))::integer as active_today,
  (count(*) filter (where tests_taken > 0))::integer as took_a_test,
  (count(*) filter (where test_overdue))::integer as test_overdue,
  round(avg(goal_percent) filter (where goal is not null)) as avg_goal_percent,
  round(avg(minutes_7d) filter (where last_seen_on >= current_date - 6), 1) as avg_minutes_7d_active
from insights.users;

revoke all on all tables in schema insights from public, anon, authenticated;
