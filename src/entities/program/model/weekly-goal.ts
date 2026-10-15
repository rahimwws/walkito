/**
 * The weekly goal: this week's plan sessions against the days the plan set.
 *
 * The streak counts attention, a day at a time; this counts the plan, a week at
 * a time. "2 of 3 sessions this week" is a count and nothing else: a week that
 * ends short is not called missed, it just shows what was done, and the
 * weeks-in-a-row figure appears only once there is a run to show.
 *
 * The goal is the week's own plan, not a setting read on its own: the days that
 * are not rest (a test day is a session too), from the day the plan began. A
 * first week that started on a Thursday asks for the sessions left in it, not
 * for a whole week's worth. Only plan and test sessions count; a Library
 * routine keeps the streak and leaves the plan's sessions open, as everywhere.
 */

import { useEffect, useMemo, useSyncExternalStore } from 'react';

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { sessions, storedWeeks, usePlanVersion, weekPlan } from './plan/store';
import { addDays, type PlanDay } from './plan/week';
import { dayNumberFor, logFor, programState, useLogsVersion } from './state';

/** Sessions the plan set for a week: its days that are not rest, from the day
 * the plan began. */
export function goalOfWeek(days: readonly Pick<PlanDay, 'date' | 'type'>[], planStart: string): number {
  return days.filter((day) => day.type !== 'rest' && day.date >= planStart).length;
}

/** Days among `dates` with a plan session done. One a day at most, so a second
 * session on a day never makes the figure bigger. */
export function sessionsDoneIn(dates: readonly string[], done: (date: string) => boolean): number {
  return dates.filter((date) => done(date)).length;
}

export type WeekGoalRecord = {
  done: number;
  goal: number;
  /** The week today is in: still open, so falling short of it breaks nothing. */
  current: boolean;
};

/**
 * Fully met weeks in a row, ending with the newest. `weeks` is oldest first.
 *
 * The rule the streak has for today, at the scale of a week: the current week
 * counts once it is met and is skipped while it is not, so the figure does not
 * drop on a Monday morning. A past week short of its goal ends the run. A week
 * that asked for nothing (a first week begun on its Sunday rest) neither adds
 * nor breaks.
 */
export function weeksInARow(weeks: readonly WeekGoalRecord[]): number {
  let run = 0;
  for (let i = weeks.length - 1; i >= 0; i -= 1) {
    const week = weeks[i];
    if (week.goal <= 0) continue;
    if (week.done >= week.goal) run += 1;
    else if (week.current) continue;
    else break;
  }
  return run;
}

export type WeeklyGoal = {
  /** Plan sessions done this week. */
  done: number;
  /** Sessions the plan set this week. */
  goal: number;
  met: boolean;
  /** Fully met weeks in a row, this one included once it is met. */
  weeksInARow: number;
  /** This week's Monday, `YYYY-MM-DD`. */
  weekStart: string;
};

/** The furthest back the run is looked for: two years of weeks. */
const MAX_WEEKS = 104;

/** The weekly goal, from the stored weeks and the session record. */
export function weeklyGoal(now: number = Date.now()): WeeklyGoal {
  const state = programState();
  const planStart = state.startDate;
  const plan = weekPlan(now);
  // `planSessionDone`'s answer, with the session list read once rather than
  // once a day for every week looked back over.
  const sessionDates = new Set(
    sessions()
      .filter((s) => s.source === 'plan' || s.source === 'test')
      .map((s) => s.date),
  );
  const done = (date: string): boolean => {
    if (sessionDates.has(date)) return true;
    const n = dayNumberFor(state, date);
    return n >= 1 && logFor(n)?.sessionCompleted === true;
  };
  const record = (days: readonly PlanDay[], current: boolean): WeekGoalRecord => ({
    done: sessionsDoneIn(
      days.map((day) => day.date),
      done,
    ),
    goal: goalOfWeek(days, planStart),
    current,
  });
  const thisWeek = record(plan.days, true);

  // Back from last week while each week was built: a week the app never built
  // was a week away from it, and the run stops there.
  const stored = storedWeeks();
  const past: WeekGoalRecord[] = [];
  for (let start = addDays(plan.weekStart, -7), n = 0; n < MAX_WEEKS; start = addDays(start, -7), n += 1) {
    const week = stored[start];
    if (week == null) break;
    past.unshift(record(week.days, false));
  }

  return {
    done: thisWeek.done,
    goal: thisWeek.goal,
    met: thisWeek.goal > 0 && thisWeek.done >= thisWeek.goal,
    weeksInARow: weeksInARow([...past, thisWeek]),
    weekStart: plan.weekStart,
  };
}

/** The weeks whose goal was tracked as met, by Monday: `weekly_goal_met` once each. */
const MET_KEY = 'plan/goal-met-weeks';
const MET_KEEP = 12;

function noteGoalMet(weekStart: string, goal: WeeklyGoal): void {
  let seen: string[] = [];
  try {
    const parsed: unknown = JSON.parse(kv.getString(MET_KEY) ?? '[]');
    if (Array.isArray(parsed)) seen = parsed.filter((d): d is string => typeof d === 'string');
  } catch {
    // A corrupt record sends one event twice at most.
  }
  if (seen.includes(weekStart)) return;
  kv.set(MET_KEY, JSON.stringify([...seen, weekStart].slice(-MET_KEEP)));
  track('weekly_goal_met', { week_sessions: goal.done, goal: goal.goal });
}

/**
 * The weekly goal, for Home. Recomputed when a log or the plan changes; tracks
 * `weekly_goal_met` the first time this week's goal is seen met.
 */
export function useWeeklyGoal(): WeeklyGoal {
  const logs = useLogsVersion();
  const plan = usePlanVersion();
  const dev = useDevWeekGoal();

  const goal = useMemo(
    () => weeklyGoal(),
    // The versions are what change: the stores are read in place.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [logs, plan],
  );

  useEffect(() => {
    if (goal.met) noteGoalMet(goal.weekStart, goal);
  }, [goal]);

  return __DEV__ && dev != null ? dev : goal;
}

// ---------------------------------------------------------------------------
// Development override
// ---------------------------------------------------------------------------

/**
 * `walkito.dev://?weekGoal=<done>/<goal>[/<weeks in a row>]` (`=off` to stop):
 * a pretend weekly goal for screenshots, in memory only, never tracked.
 */
let devGoal: WeeklyGoal | null = null;
const devListeners = new Set<() => void>();

export function devSetWeekGoal(next: { done: number; goal: number; weeksInARow?: number } | null): void {
  if (!__DEV__) return;
  devGoal =
    next == null
      ? null
      : {
          done: next.done,
          goal: next.goal,
          met: next.goal > 0 && next.done >= next.goal,
          weeksInARow: next.weeksInARow ?? (next.goal > 0 && next.done >= next.goal ? 1 : 0),
          weekStart: '',
        };
  devListeners.forEach((listener) => listener());
}

function useDevWeekGoal(): WeeklyGoal | null {
  return useSyncExternalStore(
    (listener) => {
      devListeners.add(listener);
      return () => devListeners.delete(listener);
    },
    () => devGoal,
    () => devGoal,
  );
}
