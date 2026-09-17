/**
 * The streak, which counts attention rather than completion.
 *
 * One rule decides everything here: **a day is attended if the user showed up,
 * not if they trained.** Three things satisfy it —
 *
 *   • they logged their morning pain, or
 *   • they finished a session, or
 *   • the program itself called that day a rest.
 *
 * The third is the one that makes the other two safe to count. A plan that
 * prescribes recovery days and then breaks your streak on them is punishing the
 * user for following it, which is the same failure as marking a missed day red.
 * Rest is assigned by the program, never chosen, so it can never be held
 * against anyone.
 *
 * The first is why this is not a training streak. Opening the app on a bad
 * morning and saying "it hurts today" is attention — arguably more of it than
 * grinding through a session — and the number that greets the user has to agree
 * with that or it will quietly teach them to skip the honest answer.
 */

import { useMemo } from 'react';

import { kv } from '@/shared/lib/storage';

import { PROGRAM, isSystemRest } from './program';
import {
  currentDay,
  dateKeyForDay,
  dayNumberFor,
  daysBetween,
  logFor,
  programState,
  toDateKey,
  useLogsVersion,
} from './state';

export type DayAttendance = {
  /** 1-based program day, or null for a calendar day outside the plan. */
  dayNumber: number | null;
  /** `YYYY-MM-DD`. */
  date: string;
  /** Day of the month, for the boxes with no mark to show. Carried here rather
   * than re-derived by each screen, so nothing has to parse a date key to
   * render a week. */
  dayOfMonth: number;
  attended: boolean;
  /** Attended only because the program prescribed rest — nothing was logged. */
  rest: boolean;
  isToday: boolean;
  /** Later than today. Nothing can be known about it yet. */
  future: boolean;
};

export type Streak = {
  /** Consecutive attended days ending today, or ending yesterday while today
   * is still open. */
  current: number;
  /** The best run so far. Never smaller than `current`. */
  longest: number;
  /** Every attended day since the plan began. */
  total: number;
};

/**
 * Whether one program day counts.
 *
 * Days beyond the plan's length, and days the user has not reached, are not
 * attended — absence of a log in the future is not a missed day, and callers
 * must not walk past today.
 */
export function attended(dayNumber: number): boolean {
  if (dayNumber < 1) return false;

  const day = PROGRAM[dayNumber - 1];
  if (day != null && isSystemRest(day)) return true;

  const log = logFor(dayNumber);
  if (log == null) return false;
  // `painMorning` is nullable and 0 is a real answer — "no pain at all" is a
  // logged morning, so this has to be a null check and not a truthiness one.
  return log.painMorning != null || log.sessionCompleted;
}

/** Attended because the plan said rest, with nothing of the user's own on it. */
function restOnly(dayNumber: number): boolean {
  const day = PROGRAM[dayNumber - 1];
  if (day == null || !isSystemRest(day)) return false;
  const log = logFor(dayNumber);
  return log == null || (log.painMorning == null && !log.sessionCompleted);
}

/**
 * The three figures, in one pass over the plan so far.
 *
 * `today` is passed in rather than read from the clock, so the whole thing
 * stays testable and so every caller on a screen is reading the same day.
 *
 * The subtlety is what today does to the current run. An unattended today does
 * **not** break the streak: it is nine in the morning and the user has not
 * opened anything yet. Counting it as a break would show a streak of zero for
 * most of every day and then repair itself, which reads as a bug and, worse,
 * as a punishment. So a today with nothing on it is skipped, and the run is
 * measured to yesterday; tomorrow, if today stayed empty, it becomes a real
 * break like any other.
 */
export function streakThrough(
  today: number,
  // Injected, with the real reader as the default. The arithmetic below is the
  // part with the awkward rule in it, and a predicate parameter is what lets it
  // be exercised over a made-up fortnight without standing up a storage layer.
  counts: (dayNumber: number) => boolean = attended,
): Streak {
  let longest = 0;
  let run = 0;
  let total = 0;

  for (let day = 1; day <= today; day += 1) {
    if (counts(day)) {
      run += 1;
      total += 1;
      if (run > longest) longest = run;
    } else {
      run = 0;
    }
  }

  // Today is still open, so measure the run that ends yesterday instead.
  const current = counts(today) ? run : trailingRun(today - 1, counts);

  return { current, longest: Math.max(longest, current), total };
}

/** Consecutive attended days ending at `day`, walking backwards. */
function trailingRun(day: number, counts: (dayNumber: number) => boolean): number {
  let run = 0;
  for (let d = day; d >= 1 && counts(d); d -= 1) run += 1;
  return run;
}

const DAY_MS = 86_400_000;

/**
 * The calendar week today falls in, Monday first.
 *
 * Calendar days rather than program days, because this is shown as a week and a
 * week has seven dated boxes whether or not the plan covers them. Days outside
 * the plan come back with a null `dayNumber` and render as inert.
 */
export function weekAttendance(
  now: number = Date.now(),
  /**
   * Which weekday the week opens on, as `Date.getDay()` numbers it — 1 for
   * Monday, 0 for Sunday.
   *
   * A parameter because the two consumers genuinely disagree: the model thinks
   * in Monday-first weeks, and the strip on Home is indexed by `getDay()` and so
   * is Sunday-first. Rotating a Monday-first array into a Sunday-first one does
   * not work — the Sunday at the end of this week is the *next* Sunday, not the
   * one the Sunday-first week began with — so the start day has to be applied
   * when the window is chosen rather than afterwards.
   */
  firstDay: 0 | 1 = 1,
): DayAttendance[] {
  const state = programState();
  const todayKey = toDateKey(new Date(now));
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const offset = (today.getDay() - firstDay + 7) % 7;
  const monday = today.getTime() - offset * DAY_MS;

  return Array.from({ length: 7 }, (_, i): DayAttendance => {
    const date = new Date(monday + i * DAY_MS);
    const key = toDateKey(date);
    const dayNumber = dayNumberFor(state, key);
    const inPlan = dayNumber >= 1 && dayNumber <= PROGRAM.length;
    const future = date.getTime() > today.getTime();

    return {
      dayNumber: inPlan ? dayNumber : null,
      date: key,
      dayOfMonth: date.getDate(),
      // Nothing in the future is attended, whatever the plan says about it —
      // a recovery day next Thursday has not happened yet.
      attended: inPlan && !future && attended(dayNumber),
      rest: inPlan && !future && restOnly(dayNumber),
      isToday: key === todayKey,
      future,
    };
  });
}

export type StreakView = Streak & {
  /** Monday-first, seven entries, for the week today falls in. */
  week: DayAttendance[];
  /**
   * The same week as bare booleans, Sunday-first, for `StreakWeek`.
   *
   * Asked for rather than rotated out of `week`. The Sunday sitting at the end
   * of a Monday-first week is the Sunday still to come, so moving it to the
   * front puts a future day where the Sunday just gone belongs — which renders
   * as a day the user missed. Two windows, both taken from the source.
   */
  strip: boolean[];
};

/**
 * The streak, for any screen that shows it.
 *
 * A hook rather than a constant per screen, because there were two of those and
 * they disagreed: Home said seven, Progress said three, and both were written
 * by hand. One figure derived from the logs is the only way a number that
 * appears in two places stays the same number.
 *
 * Recomputed on every log write. `useLogsVersion` returns a counter rather than
 * the data because the log map is mutated in place — logging a morning pain
 * moves the header immediately instead of on the next cold start.
 */
export function useStreak(): StreakView {
  const version = useLogsVersion();

  return useMemo(() => {
    return {
      ...streakThrough(currentDay()),
      week: weekAttendance(),
      strip: weekAttendance(Date.now(), 0).map((day) => day.attended),
    };
    // The version is the only dependency that can change: the logs are mutated
    // in place, so nothing else here changes identity when one is written.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version]);
}

// ---------------------------------------------------------------------------
// Freezes
// ---------------------------------------------------------------------------

/**
 * The forgiveness built into the streak.
 *
 * A streak that breaks the first time someone has a bad week teaches them the
 * number was never really about their foot, and the honest response to that
 * lesson is to stop opening the app. One earned freeze a week, two banked at
 * most, and a two-day window to put a break back — enough to survive a flu or a
 * work trip, not enough to make the figure meaningless.
 *
 * The hard rule that governs every one of these: **a lost streak is never
 * surfaced as a failure.** There is no copy anywhere that says a streak was
 * broken, no red, no count of what was lost. A restore is offered, and if it is
 * declined the number simply starts again.
 */
export const FREEZE_PER_WEEK = 1;
export const FREEZE_MAX = 2;
export const RESTORE_WINDOW_HOURS = 48;

/**
 * Freezes banked after a number of days on the plan.
 *
 * Accumulating but capped, so someone returning after two months away does not
 * arrive holding eight of them — the point is to absorb a bad week, not to make
 * the streak unbreakable.
 */
export function freezesEarned(daysElapsed: number): number {
  if (daysElapsed < 0) return 0;
  return Math.min(Math.floor(daysElapsed / 7) * FREEZE_PER_WEEK, FREEZE_MAX);
}

/** Whether a break is still close enough behind to be put back. */
export function canRestore(hoursSinceBreak: number): boolean {
  return hoursSinceBreak >= 0 && hoursSinceBreak <= RESTORE_WINDOW_HOURS;
}

const SPENT_KEY = 'program/freezes';
/** Nothing here looks back further than a fortnight. */
const SPENT_KEEP = 21;

/**
 * The days a freeze was actually spent.
 *
 * `freezesEarned` was arithmetic with nothing underneath it — how many a user
 * has banked is knowable from the calendar, but how many are *left* needs a
 * record of what has been used, and there was none. Without it nothing could
 * answer "has this week already been covered", which is one of the conditions
 * the streak notification is not allowed to fire without.
 */
function spentDays(): string[] {
  const raw = kv.getString(SPENT_KEY);
  if (raw == null) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((d): d is string => typeof d === 'string') : [];
  } catch {
    // A corrupt record costs the user a freeze, not the app.
    return [];
  }
}

/** Records a freeze against a date. Idempotent within a day. */
export function spendFreeze(dateKey: string): void {
  const days = spentDays();
  if (days.includes(dateKey)) return;
  kv.set(SPENT_KEY, JSON.stringify([...days, dateKey].slice(-SPENT_KEEP)));
}

/** Whether a freeze has already covered the seven days ending at `dateKey`. */
export function freezeUsedThisWeek(dateKey: string): boolean {
  return spentDays().some((day) => {
    const gap = daysBetween(day, dateKey);
    return gap >= 0 && gap < 7;
  });
}

/** Banked minus spent, never below zero. */
export function freezesLeft(daysElapsed: number): number {
  return Math.max(0, freezesEarned(daysElapsed) - spentDays().length);
}

/** For a full reset. */
export function resetFreezes(): void {
  kv.remove(SPENT_KEY);
}

/** The date a program day falls on. Re-exported so screens reading attendance
 * do not have to reach into the state module for the other half of it. */
export { dateKeyForDay };
