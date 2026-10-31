/**
 * The streak, which counts attention rather than completion.
 *
 * One rule decides everything here: **a day is attended if the user did
 * something for their feet that day, not only if they trained.** Three things
 * satisfy it:
 *
 *   • they logged their morning pain (0, "no pain at all", counts), or
 *   • they finished a plan session, or
 *   • they finished a Library routine.
 *
 * The first is why this is not a training streak. Opening the app on a bad
 * morning and saying "it hurts today" is attention, arguably more of it than
 * grinding through a session, and the number that greets the user has to agree
 * with that or it will quietly teach them to skip the honest answer. It is also
 * what keeps a rest day safe: the plan's rest is never held against anyone,
 * because a check-in is all a rest day asks for.
 *
 * **A planned rest day used to count on its own.** It no longer does, from the
 * first launch of the build that changed it (`streakCutover`). Days before that
 * keep the old rule, so nobody's run drops on the update: the rest days they
 * already banked stay banked, and only the days from then on ask for a
 * check-in.
 *
 * Two levels, for the week strip (`attendedLevel`): a check-in alone is
 * `checkin`, a plan session or a Library routine is `full`. Both count the same
 * for the run; the level only says which flame the day gets.
 */

import { useEffect, useMemo, useSyncExternalStore } from 'react';

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { plannedRest } from './plan/store';
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
  type DayLog,
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
  /** How it counted: a check-in alone, or a session or routine done. `none`
   * for a day that did not count, and for every day still to come. */
  level: StreakLevel;
  /** Attended only because the program prescribed rest, nothing logged: only
   * ever a day before `streakCutover`. */
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
  /** Freezes still banked after the walk: what the sheet and the header show.
   * Zero when freezes were not asked for. */
  freezes: number;
  /** Program days a freeze covered, oldest first. */
  frozen: readonly number[];
};

export type StreakLevel = 'none' | 'checkin' | 'full';

/** What a day's level is read from. */
export type LevelInput = {
  log: Pick<DayLog, 'painMorning' | 'sessionCompleted' | 'libraryDone'> | null | undefined;
  /** The plan said rest that day. */
  rest: boolean;
  /** The day falls before `streakCutover`, where a rest day still counts on
   * its own. */
  beforeCutover: boolean;
};

/**
 * The rule, as a pure function.
 *
 * `full` for a plan session or a Library routine, `checkin` for a morning
 * check-in alone, `none` otherwise. A rest day with nothing on it is `checkin`
 * only before the cutover (the old rule, kept for the days already banked);
 * from the cutover on it is `none` until somebody checks in.
 */
export function attendanceLevel({ log, rest, beforeCutover }: LevelInput): StreakLevel {
  if (log != null && (log.sessionCompleted || log.libraryDone === true)) return 'full';
  // `painMorning` is nullable and 0 is a real answer, "no pain at all", so
  // this has to be a null check and not a truthiness one.
  if (log?.painMorning != null) return 'checkin';
  if (rest && beforeCutover) return 'checkin';
  return 'none';
}

/** How one program day counted. Days before the plan are `none`. */
export function attendedLevel(dayNumber: number): StreakLevel {
  if (dayNumber < 1) return 'none';
  return attendanceLevel({
    log: logFor(dayNumber),
    rest: restScheduled(dayNumber),
    beforeCutover: dateKeyForDay(dayNumber) < streakCutover(),
  });
}

/**
 * Whether one program day counts.
 *
 * Days beyond the plan's length, and days the user has not reached, are not
 * attended: absence of a log in the future is not a missed day, and callers
 * must not walk past today.
 */
export function attended(dayNumber: number): boolean {
  return attendedLevel(dayNumber) !== 'none';
}

/**
 * Whether the plan said rest that day. The weekly plan answers for the weeks it
 * built; before it existed, the old fixed program's recovery day did.
 */
function restScheduled(dayNumber: number): boolean {
  const weekly = plannedRest(dateKeyForDay(dayNumber));
  if (weekly != null) return weekly;
  const day = PROGRAM[dayNumber - 1];
  return day != null && isSystemRest(day);
}

/** Attended because the plan said rest, with nothing of the user's own on it.
 * Only ever before the cutover. */
function restOnly(dayNumber: number): boolean {
  if (!restScheduled(dayNumber)) return false;
  if (dateKeyForDay(dayNumber) >= streakCutover()) return false;
  const log = logFor(dayNumber);
  return log == null || (log.painMorning == null && !log.sessionCompleted && log.libraryDone !== true);
}

// ---------------------------------------------------------------------------
// The cutover
// ---------------------------------------------------------------------------

/**
 * The first day of the rule without rest-only days: the date this build first
 * asked, written once and never moved. Lazily, from the first read, which is
 * the first launch of a build with this code (Home reads the streak as it
 * mounts, and so does the widget's and the notifications' background work).
 */
const CUTOVER_KEY = 'streak/rest-cutover';
const DATE_KEY = /^\d{4}-\d{2}-\d{2}$/;
let cutover: string | null = null;

export function streakCutover(today: string = toDateKey(new Date())): string {
  if (cutover != null) return cutover;
  const stored = kv.getString(CUTOVER_KEY);
  if (stored != null && DATE_KEY.test(stored)) {
    cutover = stored;
    return stored;
  }
  kv.set(CUTOVER_KEY, today);
  cutover = today;
  return today;
}

/** For the tests, and a full reset: set (or with null, forget) the cutover. */
export function setStreakCutover(dateKey: string | null): void {
  cutover = null;
  if (dateKey == null) kv.remove(CUTOVER_KEY);
  else kv.set(CUTOVER_KEY, dateKey);
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
  /**
   * Spend banked freezes on missed days automatically: one earned per week on
   * the plan, two at most. A frozen day neither breaks the run nor adds to it.
   * Off by default so the plain arithmetic stays testable on its own.
   */
  freezes = false,
): Streak {
  let longest = 0;
  let run = 0;
  let total = 0;
  let bank = 0;
  const bridged = new Set<number>();

  for (let day = 1; day <= today; day += 1) {
    if (freezes && day > 1 && (day - 1) % 7 === 0) bank = Math.min(bank + FREEZE_PER_WEEK, FREEZE_MAX);
    if (counts(day)) {
      run += 1;
      total += 1;
      if (run > longest) longest = run;
    } else if (day === today) {
      // Today is still open; it decides nothing yet.
    } else if (freezes && bank > 0 && run > 0) {
      bank -= 1;
      bridged.add(day);
    } else {
      run = 0;
    }
  }

  // Today is still open, so measure the run that ends yesterday instead.
  const holds = (d: number) => counts(d) || bridged.has(d);
  const current = counts(today) ? run : trailingRun(today - 1, holds, counts);

  return { current, longest: Math.max(longest, current), total, freezes: bank, frozen: [...bridged].sort((a, b) => a - b) };
}

/** Attended days in the unbroken run ending at `day`, walking backwards.
 * `holds` keeps the run going (frozen days included); only `counts` adds to it. */
function trailingRun(
  day: number,
  holds: (dayNumber: number) => boolean,
  counts: (dayNumber: number) => boolean = holds,
): number {
  let run = 0;
  for (let d = day; d >= 1 && holds(d); d -= 1) if (counts(d)) run += 1;
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
  /**
   * The real now, when `now` only picks which week to draw. A past week asked
   * for by a date inside it would otherwise call that date "today" and every
   * day after it in the week "future".
   */
  current: number = now,
): DayAttendance[] {
  const state = programState();
  const todayKey = toDateKey(new Date(current));
  const today = new Date(current);
  today.setHours(0, 0, 0, 0);
  const anchor = new Date(now);
  anchor.setHours(0, 0, 0, 0);

  const offset = (anchor.getDay() - firstDay + 7) % 7;
  const monday = anchor.getTime() - offset * DAY_MS;

  return Array.from({ length: 7 }, (_, i): DayAttendance => {
    const date = new Date(monday + i * DAY_MS);
    const key = toDateKey(date);
    const dayNumber = dayNumberFor(state, key);
    const inPlan = dayNumber >= 1 && dayNumber <= PROGRAM.length;
    const future = date.getTime() > today.getTime();
    // Nothing in the future is attended, whatever the plan says about it.
    const level: StreakLevel = inPlan && !future ? attendedLevel(dayNumber) : 'none';

    return {
      dayNumber: inPlan ? dayNumber : null,
      date: key,
      dayOfMonth: date.getDate(),
      attended: level !== 'none',
      level,
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
   * front puts a future day where the Sunday just gone belongs, which renders
   * as a day the user missed. Two windows, both taken from the source.
   */
  strip: boolean[];
  /** The same Sunday-first week as levels: which flame each day gets. */
  levels: StreakLevel[];
  /** Sunday-first: counted only by the old rule's rest (`DayAttendance.rest`). */
  rest: boolean[];
  /** A freeze covered a day in the seven ending today. Said kindly, never as
   * a day missed. */
  freezeSpentThisWeek: boolean;
  /** A pretend streak from a dev link: nothing may be tracked or recorded
   * from it. Never set in a release build. */
  preview?: boolean;
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
 * the data because the log map is mutated in place: logging a morning pain
 * moves the header immediately instead of on the next cold start.
 *
 * Every freeze the walk spent is written to the ledger (`spendFreeze`) and
 * tracked once (`freeze_spent`), so "has this week been covered", which the
 * streak push asks, reads what really happened.
 */
export function useStreak(): StreakView {
  const version = useLogsVersion();
  const dev = useDevStreak();

  const view = useMemo((): StreakView => {
    const today = currentDay();
    const streak = streakThrough(today, attended, true);
    const sunday = weekAttendance(Date.now(), 0);
    const todayKey = toDateKey(new Date());
    return {
      ...streak,
      week: weekAttendance(),
      strip: sunday.map((day) => day.attended),
      levels: sunday.map((day) => day.level),
      rest: sunday.map((day) => day.rest),
      freezeSpentThisWeek: streak.frozen.some((day) => {
        const gap = daysBetween(dateKeyForDay(day), todayKey);
        return gap >= 0 && gap < 7;
      }),
    };
    // The version is the only dependency that can change: the logs are mutated
    // in place, so nothing else here changes identity when one is written.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version]);

  const frozenKey = view.frozen.join(',');
  useEffect(() => {
    recordSpentFreezes(view.frozen.map((day) => dateKeyForDay(day)));
    // Keyed on the days themselves: a new array on every walk is not news.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frozenKey]);

  return useMemo(() => (__DEV__ ? withDevStreak(view, dev) : view), [view, dev]);
}

const RECORD_WINDOW_DAYS = 14;

/**
 * Writes the days a freeze covered to the ledger, and tracks each one the
 * first time it is seen. Idempotent: several screens read the streak at once.
 */
function recordSpentFreezes(dateKeys: readonly string[]): void {
  const known = spentDays();
  const today = toDateKey(new Date());
  for (const key of dateKeys) {
    // Only the last fortnight, which is all the ledger keeps and all anything
    // asks of it: an older day dropped from the ledger must not come back as
    // a new event.
    const age = daysBetween(key, today);
    if (age < 0 || age >= RECORD_WINDOW_DAYS) continue;
    if (known.includes(key)) continue;
    spendFreeze(key);
    track('freeze_spent');
  }
}

// ---------------------------------------------------------------------------
// Development overrides
// ---------------------------------------------------------------------------

/**
 * `walkito.dev://?streakPreview=<n>`, `?freezes=<n>` and `?longestStreak=<n>`
 * (`=off` for each): a pretend streak for screenshots, held in memory only and
 * never written. The week gets a mix of check-in and full days ending today.
 */
export type DevStreak = { current: number | null; freezes: number | null; longest: number | null };

let devStreak: DevStreak = { current: null, freezes: null, longest: null };
const devListeners = new Set<() => void>();

export function devSetStreak(next: Partial<DevStreak>): void {
  if (!__DEV__) return;
  devStreak = { ...devStreak, ...next };
  devListeners.forEach((listener) => listener());
}

function useDevStreak(): DevStreak {
  return useSyncExternalStore(
    (listener) => {
      devListeners.add(listener);
      return () => devListeners.delete(listener);
    },
    () => devStreak,
    () => devStreak,
  );
}

function withDevStreak(view: StreakView, dev: DevStreak): StreakView {
  let next = view;
  if (dev.current != null) {
    const n = dev.current;
    const todayIndex = new Date().getDay();
    // The last `n` days of this week up to today, a check-in every third day.
    const levels = view.levels.map((_, i): StreakLevel => {
      if (i > todayIndex || todayIndex - i >= n) return 'none';
      return (todayIndex - i) % 3 === 1 ? 'checkin' : 'full';
    });
    next = {
      ...next,
      current: n,
      total: Math.max(view.total, n),
      longest: Math.max(view.longest, n),
      levels,
      strip: levels.map((level) => level !== 'none'),
      rest: levels.map(() => false),
    };
  }
  if (dev.freezes != null) next = { ...next, freezes: dev.freezes };
  if (dev.longest != null) next = { ...next, longest: Math.max(dev.longest, next.current) };
  return next === view ? view : { ...next, preview: true };
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

/**
 * The streak lengths that get a moment. Day 10 gets the biggest one — early
 * enough to arrive, late enough to mean it.
 */
export const STREAK_MILESTONES = [3, 7, 10, 14, 30, 100] as const;
export const BIG_MILESTONE = 10;

/** The milestone `current` has just reached, or null. */
export function milestoneFor(current: number): (typeof STREAK_MILESTONES)[number] | null {
  return (STREAK_MILESTONES as readonly number[]).includes(current)
    ? (current as (typeof STREAK_MILESTONES)[number])
    : null;
}

/** The milestones whose moment Home has shown: each one once, ever. */
const MILESTONES_KEY = 'streak/milestones-seen';

function milestonesSeen(): number[] {
  try {
    const seen: unknown = JSON.parse(kv.getString(MILESTONES_KEY) ?? '[]');
    return Array.isArray(seen) ? seen.filter((n): n is number => typeof n === 'number') : [];
  } catch {
    return [];
  }
}

export function milestoneSeen(days: number): boolean {
  return milestonesSeen().includes(days);
}

export function markMilestoneSeen(days: number): void {
  kv.set(MILESTONES_KEY, JSON.stringify([...new Set([...milestonesSeen(), days])]));
}

/** Development only (`?previewMilestone`): every milestone unseen again, so
 * the one the streak stands on rises on Home. Read at Home's next render. */
export function devForgetMilestones(): void {
  if (!__DEV__) return;
  kv.remove(MILESTONES_KEY);
}

/**
 * Whether the streak stands on a milestone whose moment has not been shown.
 * Read outside Home too: Apple's review prompt waits for the milestone, and
 * at a cold start it is asked before Home has mounted.
 */
export function milestoneOwed(current: number): boolean {
  const milestone = milestoneFor(current);
  return milestone != null && !milestoneSeen(milestone);
}
