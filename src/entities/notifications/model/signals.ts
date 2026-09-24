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
  blockFor,
  blockName,
  currentDay,
  dateKeyForDay,
  daysSinceLastSession,
  freezeUsedThisWeek,
  hoursBaseline,
  hoursOnFeetOn,
  isMaintenance,
  isRetestDay,
  kindFor,
  logFor,
  painAverage,
  painOn,
  phaseFor,
  programState,
  resolveDay,
  resolveMaintenanceDay,
  streakThrough,
  toDateKey,
  usualSessionMinute,
  type ResolvedDay,
} from '@/entities/program';

import { currentAudience, daysUntil } from './audience';
import { GAIT_PAIN_GATE, sessionAtFor, type DaySignals } from './ladder';
import { lastOpenedOn, openedOn } from './opens';
import { observeWake, wakeMinutes } from './wake';

/** The nudge lands a quarter of an hour after waking — long enough to be out
 * of bed, early enough that the day has not started making other plans. */
export const AFTER_WAKE_MINUTES = 15;

const DAY_MS = 86_400_000;

/** Today's resolved session, through whichever engine owns this phase. */
function resolve(dayNumber: number): ResolvedDay | null {
  const state = programState();
  if (phaseFor(dayNumber) === 'maintenance' || isMaintenance(dayNumber, state.planLength)) {
    return resolveMaintenanceDay({ dayNumber, planLength: state.planLength });
  }
  const block = blockFor(dayNumber, state.planLength);
  if (block == null) return null;
  return resolveDay({
    dayNumber,
    block,
    kind: kindFor(dayNumber),
    painToday: painOn(dayNumber),
    pain7dAvg: painAverage(dayNumber, 7),
    hoursOnFeetYesterday: hoursOnFeetOn(dayNumber - 1),
    hoursBaseline: hoursBaseline(dayNumber),
    daysSinceLastSession: daysSinceLastSession(dayNumber),
    progressionOffset: state.progressionOffset,
    focus: state.focus,
  });
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
  const state = programState();
  const health = healthSignals();
  // Handed over rather than reached for: `wake.ts` knows nothing about the
  // health entity, and decides for itself how often to take a new reading up.
  observeWake(health.wakeMinutes);
  const dateKey = dateKeyForDay(dayNumber);
  const resolved = resolve(dayNumber);
  const block = blockFor(dayNumber, state.planLength);
  const isToday = dayNumber === today;
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
    sessionAt: sessionAtFor(wakeAt, usualSessionMinute(today)),
    raceDaysLeft: audience.raceDate == null ? null : daysUntil(dateKey, audience.raceDate),
    sport: audience.sport,

    painYesterday: painOn(dayNumber - 1),
    painRecently: painRecently(dayNumber),
    stepRatio: live ? health.stepsRatio : null,
    stepsYesterday: live ? health.stepsYesterday : null,
    asymmetryDays: live ? health.asymmetryElevatedDays : 0,

    // A load warning is only honest when the engine actually backed off, which
    // is exactly what these two reasons mean.
    loadAdjusted: resolved?.reason === 'spike' || resolved?.reason === 'heavy-day',
    planChanged: resolved != null && resolved.reason !== 'plan' && resolved.reason !== 'retest',
    planReason: resolved?.reason ?? null,

    isRetest: isRetestDay(dayNumber, state.planLength),
    retestUnstarted: logFor(dayNumber)?.sessionCompleted !== true,
    opensBlock: block != null && block.startDay === dayNumber ? blockName(block.index) : null,

    // A resolved day with no exercises is rest, and rest gets nothing.
    hasSession: resolved != null && resolved.minutes > 0 && resolved.kind !== 'recovery',
    minutes: resolved?.minutes ?? 0,
    kind: resolved?.kind ?? null,
    maintenance: phaseFor(dayNumber) === 'maintenance',

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
