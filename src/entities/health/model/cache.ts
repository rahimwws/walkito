import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { NO_SIGNALS, signalsFrom, type DailyMetric, type HealthSignals } from './metrics';

const KEY = 'health.cache';
/** Ninety days, rolled off at the tail. Enough for a 28-day baseline with room
 * to look back, and small enough to parse on the main thread without being
 * noticed. */
const KEEP_DAYS = 90;

/**
 * Bumped whenever what a stored day *means* changes.
 *
 * Version 1 was written by the sample-folding pipeline, whose days are wrong in
 * ways no migration can repair — a step total replaced by the last hour's
 * increment, a night of sleep cut to its final stage. Dropping them costs one
 * ninety-day backfill on the next refresh; keeping them would feed wrong
 * baselines into every signal for a month.
 */
const VERSION = 2;

export type HealthCache = {
  version: number;
  days: DailyMetric[];
  signals: HealthSignals;
  /** How the *previous* day ended: running elevated / slow. Kept because "just
   * recovered" is a statement about a transition and cannot be read from today
   * alone — and rolled forward only when the day changes, since signals are now
   * recomputed on every refresh. */
  wasElevated: boolean;
  wasSlow: boolean;
  /**
   * Both heels hurt, as the user answered in onboarding.
   *
   * Lives in the cache rather than being passed in per call so the background
   * recompute — which runs with no React tree and no props — reaches the same
   * verdict the screen would.
   */
  bilateral: boolean;
  /** ISO day the signals were last computed. */
  computedOn: string | null;
};

const EMPTY: HealthCache = {
  version: VERSION,
  days: [],
  signals: NO_SIGNALS,
  wasElevated: false,
  wasSlow: false,
  bilateral: false,
  computedOn: null,
};

/**
 * The cache, parsed once and held.
 *
 * Read at module scope so the very first render of Home already has an answer.
 * The whole point of this file is that the home screen never awaits HealthKit:
 * a cold start that has to round-trip to Health before it can draw its first
 * sentence is a cold start that shows an empty screen for a second.
 */
let cache: HealthCache = load();

function load(): HealthCache {
  const raw = kv.getString(KEY);
  if (raw == null) return EMPTY;
  try {
    const parsed = JSON.parse(raw) as Partial<HealthCache>;
    // An older build's days are not trusted — see `VERSION`. The one answer the
    // user gave is kept.
    if (parsed.version !== VERSION) return { ...EMPTY, bilateral: parsed.bilateral === true };
    return {
      ...EMPTY,
      ...parsed,
      // Re-seeded rather than trusted: a cache written by an older build may
      // have a signals shape this one no longer understands, and a missing
      // field there is a crash in a branch nobody tests.
      signals: { ...NO_SIGNALS, ...(parsed.signals ?? {}) },
      days: Array.isArray(parsed.days) ? parsed.days : [],
    };
  } catch {
    return EMPTY;
  }
}

const listeners = new Set<() => void>();

function commit(next: HealthCache): void {
  cache = next;
  kv.set(KEY, JSON.stringify(next));
  for (const listener of listeners) listener();
}

export function healthCache(): HealthCache {
  return cache;
}

export function healthSignals(): HealthSignals {
  return cache.signals;
}

/** Home subscribes to this and nothing else. */
export function useHealthSignals(): HealthSignals {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    healthSignals,
    healthSignals,
  );
}

/** Whether anything has been stored yet — the pipeline backfills ninety days
 * when not, and re-reads a fortnight when so. */
export function hasDays(): boolean {
  return cache.days.length > 0;
}

/**
 * Folds a day's readings in, replacing whatever was there for that date.
 *
 * Merged per field rather than overwritten wholesale: each query answers for
 * one field, so a step update must not blank the asymmetry that landed this
 * morning. Within a field, replacing is right because every incoming value is a
 * whole day's total — the pipeline never hands this a partial batch.
 */
export function mergeDays(incoming: readonly DailyMetric[]): void {
  if (incoming.length === 0) return;
  const byDate = new Map(cache.days.map((day) => [day.date, day]));
  for (const day of incoming) {
    const existing = byDate.get(day.date);
    byDate.set(day.date, existing == null ? day : { ...existing, ...strip(day) });
  }
  const days = [...byDate.values()]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-KEEP_DAYS);
  commit({ ...cache, days });
}

/** Only the fields that actually carry a reading, so a null never overwrites a
 * number that arrived from another query. */
function strip(day: DailyMetric): Partial<DailyMetric> {
  const out: Partial<DailyMetric> = { date: day.date };
  if (day.steps != null) out.steps = day.steps;
  if (day.asymmetryPct != null) out.asymmetryPct = day.asymmetryPct;
  if (day.walkingSpeed != null) out.walkingSpeed = day.walkingSpeed;
  if (day.sleepMin != null) out.sleepMin = day.sleepMin;
  if (day.restingHR != null) out.restingHR = day.restingHR;
  if (day.flights != null) out.flights = day.flights;
  if (day.longestRunKm != null) out.longestRunKm = day.longestRunKm;
  if (day.hoursOnFeet != null) out.hoursOnFeet = day.hoursOnFeet;
  return out;
}

/**
 * The stored days as an unbroken run ending today.
 *
 * `signalsFrom` reads "today" as the last entry and "yesterday" as the one
 * before it. A gap — no steps yet this morning, a day the phone stayed in a
 * drawer — silently shifted both: the day before yesterday was reported as
 * yesterday. Blank days in the gaps keep every position a real calendar day.
 */
export function contiguous(days: readonly DailyMetric[], today: string): DailyMetric[] {
  // A clock moved backwards past the stored history is not a reason to lose it.
  if (days.length === 0 || days[0].date > today) return [...days];
  const byDate = new Map(days.map((day) => [day.date, day]));
  const out: DailyMetric[] = [];
  const cursor = fromKey(days[0].date);
  const end = fromKey(today);
  while (cursor.getTime() <= end.getTime()) {
    const key = keyOf(cursor);
    out.push(byDate.get(key) ?? blank(key));
    cursor.setDate(cursor.getDate() + 1);
  }
  return out.slice(-KEEP_DAYS);
}

function fromKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function keyOf(date: Date): string {
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function blank(date: string): DailyMetric {
  return {
    date,
    steps: null,
    asymmetryPct: null,
    walkingSpeed: null,
    sleepMin: null,
    wakeMin: null,
    restingHR: null,
    flights: null,
    longestRunKm: null,
    hoursOnFeet: null,
  };
}

/**
 * Recomputes the signals from the stored days.
 *
 * On every refresh, not once a day. The old once-a-day rule ran at the first
 * wake after midnight and then froze: today's steps and hours on foot stayed at
 * their 00:05 values all day, and last night's sleep — which lands in the
 * morning — was never in it. Ninety days of arithmetic is nothing next to a
 * HealthKit read.
 *
 * What does have to happen once a day is the "was" pair: "just recovered" is
 * decided against how *yesterday* ended, so it rolls forward only when the day
 * changes.
 */
export function recomputeSignals(
  today: string,
  /** Next-morning pain for a stored date, for learning the on-feet threshold.
   * The caller supplies it rather than this module importing the programme:
   * the cache has no business knowing how pain is stored, and a test needs to
   * hand it a known history. */
  painNextMorning?: (date: string) => number | null,
): HealthSignals {
  const newDay = cache.computedOn !== today;
  const wasElevated = newDay
    ? cache.computedOn != null && cache.signals.asymmetryElevatedDays > 0
    : cache.wasElevated;
  const wasSlow = newDay
    ? cache.computedOn != null && cache.signals.walkingSpeedTrend === 'slower'
    : cache.wasSlow;

  const days = contiguous(cache.days, today);
  const signals = signalsFrom(days, {
    bilateral: cache.bilateral,
    wasElevated,
    wasSlow,
    painNextMorning:
      painNextMorning == null ? undefined : (index) => painNextMorning(days[index].date),
  });
  commit({ ...cache, days, signals, wasElevated, wasSlow, computedOn: today });
  return signals;
}

/** Records the onboarding answer. Suppresses every asymmetry signal when both
 * heels hurt: a symmetric problem cannot produce an asymmetric gait, so the
 * rung would silently never fire and the user would have no way to know why. */
/**
 * Whether the pain is in both heels, which silences every asymmetry signal.
 *
 * Nothing calls this any more. The onboarding question that fed it — "One foot
 * or both?" — was removed, so the flag sits at its default of false and the
 * asymmetry signals stay switched on for everyone.
 *
 * That default is the permissive one, and it is the wrong one for roughly a
 * third of people with plantar heel pain: a symmetric problem cannot produce
 * asymmetry, so those users get a family of signals that can only ever report
 * nothing. Kept rather than deleted because the fix is to ask again somewhere
 * quieter — a settings row, or inferred from the data — not to lose the
 * mechanism.
 */
export function setBilateral(bilateral: boolean): void {
  if (cache.bilateral === bilateral) return;
  commit({ ...cache, bilateral });
}

export function resetHealthCache(): void {
  kv.remove(KEY);
  cache = EMPTY;
  for (const listener of listeners) listener();
}
