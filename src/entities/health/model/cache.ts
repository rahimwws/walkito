import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { NO_SIGNALS, signalsFrom, type DailyMetric, type HealthSignals } from './metrics';

const KEY = 'health.cache';
/** Ninety days, rolled off at the tail. Enough for a 28-day baseline with room
 * to look back, and small enough to parse on the main thread without being
 * noticed. */
const KEEP_DAYS = 90;

export type HealthCache = {
  /** Anchor per sample type, so each background wake reads only what is new. */
  anchors: Record<string, string>;
  days: DailyMetric[];
  signals: HealthSignals;
  /** Yesterday's answers to "is this running elevated / slow", kept because
   * "just recovered" is a statement about a transition and cannot be read from
   * today alone. */
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
  /** ISO day the signals were last recomputed. Baselines move once a day, not
   * once a read. */
  computedOn: string | null;
  lastRun: string | null;
};

const EMPTY: HealthCache = {
  anchors: {},
  days: [],
  signals: NO_SIGNALS,
  wasElevated: false,
  wasSlow: false,
  bilateral: false,
  computedOn: null,
  lastRun: null,
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
    return {
      ...EMPTY,
      ...parsed,
      // Re-seeded rather than trusted: a cache written by an older build may
      // have a signals shape this one no longer understands, and a missing
      // field there is a crash in a branch nobody tests.
      signals: { ...NO_SIGNALS, ...(parsed.signals ?? {}) },
      days: Array.isArray(parsed.days) ? parsed.days : [],
      anchors: parsed.anchors ?? {},
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

export function anchorFor(type: string): string | undefined {
  return cache.anchors[type];
}

export function rememberAnchor(type: string, anchor: string): void {
  commit({ ...cache, anchors: { ...cache.anchors, [type]: anchor } });
}

/** Drops one type's anchor, for the recovery path after a query throws: the
 * next read re-backfills that type instead of resuming from an anchor the
 * store has rejected. */
export function forgetAnchor(type: string): void {
  const anchors = { ...cache.anchors };
  delete anchors[type];
  commit({ ...cache, anchors });
}

/**
 * Folds a day's readings in, replacing whatever was there for that date.
 *
 * Merged per field rather than overwritten wholesale: the types arrive on
 * different schedules — steps hourly, gait daily — so a step update must not
 * blank the asymmetry that landed this morning.
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
 * Recomputes the signals, at most once a day unless forced.
 *
 * The baselines are a 28-day fold and the thresholds are runs of consecutive
 * days; neither answer can change between two reads an hour apart, so doing
 * this on every background wake would be the same arithmetic for the same
 * result twenty times over.
 */
export function recomputeSignals(
  today: string,
  force = false,
  /** Next-morning pain by day index, for learning the on-feet threshold. The
   * caller supplies it rather than this module importing the programme: the
   * cache has no business knowing how pain is stored, and a test needs to hand
   * it a known history. */
  painNextMorning?: (index: number) => number | null,
): HealthSignals {
  if (!force && cache.computedOn === today) return cache.signals;
  const signals = signalsFrom(cache.days, {
    bilateral: cache.bilateral,
    wasElevated: cache.wasElevated,
    wasSlow: cache.wasSlow,
    painNextMorning,
  });
  commit({
    ...cache,
    signals,
    // Tomorrow's "just recovered" is decided against today's run.
    wasElevated: signals.asymmetryElevatedDays > 0,
    wasSlow: signals.walkingSpeedTrend === 'slower',
    computedOn: today,
    lastRun: today,
  });
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
