/**
 * What time the morning message lands.
 *
 * Three sources, in order: the 28-day wake time HealthKit sleep analysis gives
 * us, an explicit override if anything ever sets one, and 07:30 — the fallback
 * the spec names for a device with no sleep data at all.
 *
 * The HealthKit half used to be missing. `pullSleep` summed asleep *minutes*
 * and discarded the sample timestamps, so there was nothing to average; it now
 * keeps the end of the night as `DailyMetric.wakeMin`, and the median over 28
 * days reaches this module through `observeWake`. No new permission was
 * involved — the sleep scope was already granted, and this was a change to what
 * the query kept rather than to what it was allowed to ask for.
 *
 * The observation is *pushed in* rather than read. This module deliberately
 * knows nothing about the health entity: reaching sideways for it would both
 * break the layering rule and drag React Native into a file that is otherwise
 * plain arithmetic over a key-value store.
 */

import { kv } from '@/shared/lib/storage';

const OVERRIDE_KEY = 'notify/wake-minutes';
/** The most recent median handed over by the health pipeline. */
const LATEST_KEY = 'notify/wake-latest';
const CACHE_KEY = 'notify/wake-observed';
const CACHE_ON_KEY = 'notify/wake-observed-on';

/** 07:30, the fallback the spec names. */
export const DEFAULT_WAKE_MINUTES = 7 * 60 + 30;

/**
 * Bounds, applied to every source including HealthKit's own.
 *
 * A 3am nudge loses the permission permanently, and no amount of confidence in
 * a median is worth that. Anything outside this is treated as a reading about
 * something other than getting up.
 */
const EARLIEST = 5 * 60;
const LATEST = 11 * 60;

/**
 * How long an observed wake time is held before a new one is taken.
 *
 * The spec is explicit: recompute weekly, never more often, because a wake time
 * that drifts every morning makes the notification feel random. The median
 * underneath moves daily; this is what stops that reaching the user.
 */
const RECOMPUTE_DAYS = 7;

const DAY_MS = 86_400_000;

function clamp(minutes: number): number {
  return Math.min(Math.max(Math.round(minutes), EARLIEST), LATEST);
}

function daysSince(key: string | undefined, now: number): number {
  if (key == null) return Infinity;
  const then = new Date(`${key}T00:00:00`).getTime();
  if (!Number.isFinite(then)) return Infinity;
  return Math.floor((now - then) / DAY_MS);
}

function todayKey(now: number): string {
  const d = new Date(now);
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

/**
 * Minutes past midnight the user usually wakes.
 *
 * An explicit override wins outright — if a settings screen ever lets someone
 * say when they get up, the app must not quietly disagree with them. Otherwise
 * the observed median is used, refreshed at most weekly and remembered in
 * between so a day HealthKit happens to return nothing does not swing the time.
 */
export function wakeMinutes(now: number = Date.now()): number {
  const override = kv.getNumber(OVERRIDE_KEY);
  if (override != null && Number.isFinite(override)) return clamp(override);

  const cached = kv.getNumber(CACHE_KEY);
  const fresh = daysSince(kv.getString(CACHE_ON_KEY), now) < RECOMPUTE_DAYS;
  if (cached != null && Number.isFinite(cached) && fresh) return clamp(cached);

  const observed = kv.getNumber(LATEST_KEY);
  if (observed == null || !Number.isFinite(observed)) {
    // Keep whatever was last observed rather than snapping back to the default
    // the moment a median goes null — a quiet week should not move the alarm.
    return cached != null && Number.isFinite(cached) ? clamp(cached) : DEFAULT_WAKE_MINUTES;
  }

  kv.set(CACHE_KEY, Math.round(observed));
  kv.set(CACHE_ON_KEY, todayKey(now));
  return clamp(observed);
}

/**
 * The 28-day median, handed over by whatever is reading the health cache.
 *
 * Stored rather than acted on: `wakeMinutes` decides when it is due to be
 * taken up, which is at most weekly. Calling this every launch is free and is
 * what keeps the reading current without letting it move the alarm daily.
 */
export function observeWake(minutes: number | null): void {
  if (minutes == null || !Number.isFinite(minutes)) return;
  kv.set(LATEST_KEY, Math.round(minutes));
}

/** An explicit answer from the user. Wins over anything HealthKit says. */
export function setWakeMinutes(minutes: number): void {
  kv.set(OVERRIDE_KEY, clamp(minutes));
}

/** Drops the override and the cached observation. */
export function resetWakeMinutes(): void {
  kv.remove(OVERRIDE_KEY);
  kv.remove(CACHE_KEY);
  kv.remove(CACHE_ON_KEY);
  kv.remove(LATEST_KEY);
}
