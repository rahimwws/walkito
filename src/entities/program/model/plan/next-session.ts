import { useEffect, useMemo, useState } from 'react';

import { fromDateKey, toDateKey, useLogsVersion, useProgramState } from '../state';
import { planSessionDone, planWeekOf, usePlanVersion } from './store';
import { addDays, weekStartOf, type PlanDay, type WeekPlan } from './week';

/**
 * When the next session opens — the one rule Plan, Home, the widget and the
 * reminders all read.
 *
 * At 00:00, local time, of the next plan day that is not a rest day. Today is
 * that day unless its session is already done. Nothing else: no rest interval
 * after a late session, no countdown to a time of day. The week already puts
 * the rest where it belongs, and a rule the screens each worked out for
 * themselves is how Plan once showed a day as done while Home offered it again.
 */

export type NextSession = {
  /** Epoch ms of the local midnight the session opens at. */
  at: number;
  /** `YYYY-MM-DD`. */
  date: string;
  day: PlanDay;
  /** Whether it has opened: `at` is now or behind it. */
  open: boolean;
};

/** How far ahead to look. Three weeks covers any week shape with a day in it. */
export const NEXT_SESSION_HORIZON_DAYS = 21;

export type NextSessionInput = {
  now: number;
  /** The planned day on a date, or undefined for none. */
  dayOn: (dateKey: string) => PlanDay | undefined;
  /** Whether a date's plan session is done. Only ever asked about today. */
  doneOn: (dateKey: string) => boolean;
};

/**
 * Rule A, over whatever days it is handed. Pure, so the rule is tested on its
 * own; `nextSession` hands it the real plan.
 */
export function findNextSession({ now, dayOn, doneOn }: NextSessionInput): NextSession | null {
  const today = toDateKey(new Date(now));
  for (let i = 0; i < NEXT_SESSION_HORIZON_DAYS; i += 1) {
    const date = addDays(today, i);
    const day = dayOn(date);
    if (day == null || day.type === 'rest') continue;
    // Done today means today is behind us, however much of it is left.
    if (i === 0 && doneOn(date)) continue;
    const at = fromDateKey(date).getTime();
    return { at, date, day, open: at <= now };
  }
  return null;
}

/**
 * The next session from the stored plan.
 *
 * A day in a week not built yet is read from `planWeekOf`'s preview, which is
 * built from the same inputs the real week will be and is not stored — so a
 * Friday finish on a five-day week, with the weekend at rest, points at next
 * Monday without fixing next week early. Each week is built once per call.
 *
 * Null only when three weeks hold nothing but rest.
 */
export function nextSession(now: number = Date.now()): NextSession | null {
  const weeks = new Map<string, WeekPlan>();
  return findNextSession({
    now,
    dayOn: (date) => {
      const start = weekStartOf(date);
      let week = weeks.get(start);
      if (week == null) {
        week = planWeekOf(date, now);
        weeks.set(start, week);
      }
      return week.days.find((day) => day.date === date);
    },
    doneOn: planSessionDone,
  });
}

/** Epoch ms of the next local midnight after `now`. */
function nextMidnight(now: number): number {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).getTime();
}

/**
 * Past the boundary, not on it: a timer can land a hair early, and one that
 * wakes a millisecond before midnight would compute yesterday again.
 */
const WAKE_AFTER_MS = 250;

/**
 * `nextSession`, kept current.
 *
 * Recomputed when the plan, the day log or the program state change — a
 * session finished, a test taken, a setting moved — and at the next local
 * midnight, by one timeout, which is when a waiting session opens or today's
 * session becomes yesterday's. Nothing ticks in between: the answer only ever
 * changes at a midnight or on a write. A screen counting down to `at` runs its
 * own clock (`useCountdown` in `@/shared/lib/clock`).
 */
export function useNextSession(): NextSession | null {
  const planVersion = usePlanVersion();
  const logsVersion = useLogsVersion();
  const state = useProgramState();
  const [midnights, setMidnights] = useState(0);

  // The versions and the midnight count are the inputs; the read itself is off
  // storage, so they are named rather than used.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const next = useMemo(() => nextSession(Date.now()), [planVersion, logsVersion, state, midnights]);

  useEffect(() => {
    const now = Date.now();
    // `at` is always a midnight, so once past it the next thing that can
    // change the answer is the next one.
    const wake = next != null && next.at > now ? Math.min(next.at, nextMidnight(now)) : nextMidnight(now);
    const timer = setTimeout(() => setMidnights((n) => n + 1), wake - now + WAKE_AFTER_MS);
    return () => clearTimeout(timer);
  }, [next]);

  return next;
}
