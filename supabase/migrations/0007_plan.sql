-- The weekly plan, as tables the app can sync to.
--
-- Local-first: every one of these is written on the device before anything is
-- sent, and no screen ever waits on a round trip. These tables are where that
-- local record is copied to, so a reinstall or a new phone can get it back.
--
-- What is NOT here, on purpose: anything from Apple Health. Steps, sleep, heart
-- rate and workouts are read on the device and used there; the plan engine
-- never stores them, and neither does this schema. Pain check-ins are the
-- user's own report, not a HealthKit reading, and they are the one piece of
-- health-shaped data that syncs — they are what the plan is built from.
--
-- Every table is readable and writable only by its owner. Unlike the referral
-- tables there is nothing here one user may affect for another, so the rows
-- are written directly rather than through functions.
--
-- NOT APPLIED. Written for review; apply with `supabase db push` once the
-- client sync is in place.

-- ── Profile: the answers the plan is built from ─────────────────────────────
create table if not exists public.profiles (
  user_id            uuid primary key references auth.users (id) on delete cascade,
  days_per_week      smallint not null default 5 check (days_per_week in (3, 5, 7)),
  default_minutes    smallint not null default 5 check (default_minutes in (3, 5, 10)),
  pain_side          text check (pain_side in ('left', 'right', 'both')),
  pain_zones         text[] not null default '{}',
  foot_type          text not null default 'unknown' check (foot_type in ('flexible', 'rigid', 'unknown')),
  equipment_missing  text[] not null default '{}',   -- step, band, towel, pillow, ball
  wake_minutes       smallint check (wake_minutes between 0 and 1439),
  weeks_started_on   date,                            -- for "Week N"
  outcome            jsonb,                           -- the big goal: { kind, sport, area, steps, since }
  updated_at         timestamptz not null default now()
);

-- ── Goals ───────────────────────────────────────────────────────────────────
create table if not exists public.goals (
  user_id      uuid not null references auth.users (id) on delete cascade,
  type         text not null check (type in ('pain_free_mornings', 'arch_hold', 'calf_raises', 'balance', 'symmetry')),
  status       text not null check (status in ('active', 'achieved', 'maintaining')),
  baseline     numeric,
  current      numeric,
  since        date not null,
  achieved_on  date,
  updated_at   timestamptz not null default now(),
  primary key (user_id, type)
);

-- ── Tests: the measurements goals are read from ─────────────────────────────
-- The sore side is always `left`, as on the device; which foot that is lives
-- in `profiles.pain_side`.
create table if not exists public.tests (
  user_id        uuid not null references auth.users (id) on delete cascade,
  day_number     integer not null,
  taken_on       date not null,
  calf_left      smallint not null,
  calf_right     smallint not null,
  balance_left   smallint not null,
  balance_right  smallint not null,
  arch_left      smallint not null,
  arch_right     smallint not null,
  symmetry_pct   numeric not null,
  levels         jsonb not null,
  primary key (user_id, day_number)
);

-- ── Check-ins ───────────────────────────────────────────────────────────────
create table if not exists public.checkins (
  user_id           uuid not null references auth.users (id) on delete cascade,
  date              date not null,
  pain_morning      smallint check (pain_morning between 0 and 10),
  entries           jsonb not null default '[]',      -- every reading that day
  zones             text[] not null default '{}',
  morning_stretch   boolean not null default false,
  primary key (user_id, date)
);

-- ── The week ────────────────────────────────────────────────────────────────
create table if not exists public.week_plans (
  user_id        uuid not null references auth.users (id) on delete cascade,
  week_start     date not null,                       -- Monday
  week_index     integer not null,
  focus          text,
  days           jsonb not null,
  rationale      jsonb not null,
  new_this_week  text[] not null default '{}',        -- exercise ids introduced this week
  levels         jsonb not null,                      -- where each chain stood
  built_at       timestamptz not null default now(),
  primary key (user_id, week_start)
);

-- ── Sessions ────────────────────────────────────────────────────────────────
create table if not exists public.sessions (
  id                text not null,                    -- the device's own id
  user_id           uuid not null references auth.users (id) on delete cascade,
  date              date not null,
  source            text not null check (source in ('plan', 'library', 'quick', 'test')),
  routine_id        text,
  minutes           smallint not null,
  feedback          text check (feedback in ('easy', 'ok', 'hard')),
  in_session_pain   smallint check (in_session_pain between 0 and 10),
  completed_at      timestamptz not null,
  primary key (user_id, id)
);

create table if not exists public.session_exercises (
  user_id      uuid not null references auth.users (id) on delete cascade,
  session_id   text not null,
  exercise_id  text not null,
  status       text not null check (status in ('done', 'skipped', 'swapped')),
  swapped_to   text,
  primary key (user_id, session_id, exercise_id),
  foreign key (user_id, session_id) references public.sessions (user_id, id) on delete cascade
);

-- ── What the user said about each exercise ──────────────────────────────────
create table if not exists public.exercise_prefs (
  user_id      uuid not null references auth.users (id) on delete cascade,
  exercise_id  text not null,
  cant_do      text check (cant_do in ('no_step', 'no_band', 'no_towel', 'no_pillow', 'no_ball', 'hurts')),
  skip_count   integer not null default 0,
  favourite    boolean not null default false,
  primary key (user_id, exercise_id)
);

-- ── Row-level security: your own rows, and nobody else's ────────────────────
do $$
declare
  t text;
begin
  foreach t in array array['profiles', 'goals', 'tests', 'checkins', 'week_plans', 'sessions', 'session_exercises', 'exercise_prefs']
  loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "own rows" on public.%I', t);
    execute format(
      'create policy "own rows" on public.%I for all using (user_id = auth.uid()) with check (user_id = auth.uid())',
      t
    );
  end loop;
end;
$$;

-- `delete_account()` (0003) removes the auth user; every table above cascades
-- from it, so an account deletion takes the plan with it.
