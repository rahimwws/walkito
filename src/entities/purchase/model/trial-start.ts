import { setPersonOnce } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

/**
 * When the free trial began, kept so trial days can be read in PostHog.
 *
 * RevenueCat sends the trial's start server-side, but nothing on the person
 * said which day of the trial an open fell on, so "opened on trial day 2, 3,
 * 7" needed a funnel per day. Now the person carries `trial_started_at`
 * (`$set_once`, ISO), and the app's own trial-day events carry
 * `trial_day` while the trial runs.
 *
 * Written from the store's record (the entitlement in its trial period, dated
 * by its latest purchase), so a trial started on another phone or restored
 * counts too.
 */
const STARTED_KEY = 'purchase/trial-started-at';
const RUNNING_KEY = 'purchase/trial-running';

/** The store's answer: the trial is running and began at `startedAt`, or it is
 * not running (`null`). */
export function noteTrial(startedAt: number | null): void {
  kv.set(RUNNING_KEY, startedAt != null);
  if (startedAt == null || !Number.isFinite(startedAt)) return;
  const known = kv.getNumber(STARTED_KEY);
  if (known === startedAt) return;
  kv.set(STARTED_KEY, startedAt);
  setPersonOnce({ trial_started_at: new Date(startedAt).toISOString() });
}

/** Day of the trial `now` falls on, by calendar days on the phone: the start's
 * own day is 1. */
export function trialDayOf(startedAt: number, now: number): number {
  const start = new Date(startedAt);
  const today = new Date(now);
  const startMidnight = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  return Math.round((todayMidnight - startMidnight) / 86_400_000) + 1;
}

/** Which day of a running trial it is, or null outside one. */
export function trialDay(now: number = Date.now()): number | null {
  if (kv.getBoolean(RUNNING_KEY) !== true) return null;
  const startedAt = kv.getNumber(STARTED_KEY);
  if (startedAt == null) return null;
  const day = trialDayOf(startedAt, now);
  return day >= 1 ? day : null;
}
