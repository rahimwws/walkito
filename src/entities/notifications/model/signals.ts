/**
 * The bridge between what the app knows and what the ladder needs.
 *
 * This is the only impure half of the scheduler: it reads the program, the
 * pain log and the health cache, and hands the rules a flat record they can be
 * tested against. Everything it reads is synchronous — the health pipeline
 * writes into an MMKV cache and every consumer reads that, so assembling a
 * week costs no HealthKit round trips.
 */

import { healthSignals } from '@/entities/health';
import {
  currentDay,
  dateKeyForDay,
  freezeUsedThisWeek,
  logFor,
  painOn,
  planDayOn,
  planWeekOf,
  streakThrough,
  toDateKey,
  todayPlan,
  reminderOverride,
  usualStartMinute,
  weekStartOf,
  type PlanDay,
} from '@/entities/program';

import { currentAudience } from './audience';
import { GAIT_PAIN_GATE, sessionAtFor, type DaySignals } from './ladder';
import { lastOpenedOn, openedOn } from './opens';
import { observeWake, wakeMinutes } from './wake';

/** The nudge lands a quarter of an hour after waking — long enough to be out
 * of bed, early enough that the day has not started making other plans. */
export const AFTER_WAKE_MINUTES = 15;

const DAY_MS = 86_400_000;

/**
 * A day of the weekly plan, as the ladder reads it: today adjusted to this
 * morning (so a flare or a heavy day is what the notification explains),
 * every later day as planned.
 */
function planned(dateKey: string, isToday: boolean): { day: PlanDay | undefined; reason: string | null } {
  if (!isToday) return { day: planDayOn(dateKey), reason: null };
  const health = healthSignals();
  const adjusted = todayPlan(
    {
      stepsYesterday: health.stepsYesterday,
      steps28Avg: health.stepsBaseline,
      sleepHours: health.sleepLastNightMin == null ? null : health.sleepLastNightMin / 60,
    },
    null,
  );
  // Short sleep steps a level down quietly; only the reasons with a sentence
  // of their own become a plan notification.
  const reason = adjusted.reason === 'short-sleep' ? null : adjusted.reason;
  return { day: adjusted, reason };
}

/** Pain at or above the gate in the three days ending yesterday. */
function painRecently(dayNumber: number): boolean {
  for (let d = dayNumber - 3; d < dayNumber; d += 1) {
    const pain = painOn(d);
    if (pain != null && pain >= GAIT_PAIN_GATE) return true;
  }
  return false;
}

/**
 * Everything the ladder needs about one day.
 *
 * Health signals are read once and reused across the window rather than per
 * day: they describe *now* — yesterday's steps, the current asymmetry run — and
 * re-reading them for a day three days out would be pretending the cache knows
 * something about the future. That is also why rows 2 and 3 only ever fire for
 * the first day of a planned window; see `planWindow`.
 */
export function signalsFor(dayNumber: number, now: number, today: number): DaySignals {
  const health = healthSignals();
  // Handed over rather than reached for: `wake.ts` knows nothing about the
  // health entity, and decides for itself how often to take a new reading up.
  observeWake(health.wakeMinutes);
  const dateKey = dateKeyForDay(dayNumber);
  const isToday = dayNumber === today;
  const { day, reason } = planned(dateKey, isToday);
  const week = planWeekOf(dateKey);
  const streak = streakThrough(today);
  const wakeAt = wakeMinutes() + AFTER_WAKE_MINUTES;
  const audience = currentAudience();

  // Only the day being scheduled *now* may use live health readings. Beyond
  // that they are stale by construction.
  const live = isToday;

  return {
    dateKey,
    dayNumber,
    wakeAt,
    // The reminder: when this person usually starts — the median of their last
    // ten session starts — or the time they set in Settings.
    sessionAt: reminderOverride() ?? sessionAtFor(wakeAt, usualStartMinute()),
    sport: audience.sport,

    painYesterday: painOn(dayNumber - 1),
    painRecently: painRecently(dayNumber),
    stepRatio: live ? health.stepsRatio : null,
    stepsYesterday: live ? health.stepsYesterday : null,
    asymmetryDays: live ? health.asymmetryElevatedDays : 0,

    // A load warning is only honest when the plan actually backed off, which
    // is exactly what these two reasons mean.
    loadAdjusted: reason === 'spike' || reason === 'heavy-day',
    planChanged: reason != null,
    planReason: reason,

    isRetest: day?.type === 'test',
    retestUnstarted: logFor(dayNumber)?.sessionCompleted !== true,
    // Monday opens a week, and says what it is for. The notification copy
    // still calls the slot `block`; what it names is the week's focus goal.
    opensBlock: weekStartOf(dateKey) === dateKey && week.focus != null ? week.focus : null,

    // A planned rest gets nothing; every other day with exercises is a session.
    hasSession: day != null && day.type !== 'rest' && day.type !== 'test' && day.exercises.length > 0,
    minutes: day?.minutes ?? 0,
    kind: day == null || day.type === 'rest' || day.type === 'test' ? null : day.type,
    // There is no maintenance phase any more: a reached goal keeps ticking over
    // inside the ordinary week.
    maintenance: false,

    painLoggedToday: isToday ? painOn(dayNumber) != null : false,
    openedAppToday: isToday ? openedOn(toDateKey(new Date(now))) : false,
    streak: streak.current,
    // A week already covered by a freeze has nothing left for a notification to
    // protect, so the row that would mention the streak stands down. This used
    // to be hard-coded false because nothing recorded a freeze being spent —
    // `freezesEarned` was arithmetic over the calendar with no ledger under it.
    freezeUsedThisWeek: freezeUsedThisWeek(dateKey),
    daysAway: daysAway(now),
  };
}

/** Whole days since the app was last opened. Zero when it is open now. */
export function daysAway(now: number): number {
  const last = lastOpenedOn();
  if (last == null) return 0;
  const from = new Date(`${last}T00:00:00`).getTime();
  const today = new Date(toDateKey(new Date(now)));
  return Math.max(0, Math.round((today.getTime() - from) / DAY_MS));
}

/** The next `days` program days, starting today. */
export function windowDays(now: number, days: number): number[] {
  const today = currentDay(now);
  return Array.from({ length: days }, (_, i) => today + i);
}
