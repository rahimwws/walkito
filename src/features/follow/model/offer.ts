import { kv } from '@/shared/lib/storage';

/**
 * When the Instagram sheet rises by itself: once ever, on the third day the
 * app is used, the way Apple's review prompt waits for the third open.
 *
 * A day of use is a local calendar day the app was in front, counted from the
 * first launch of a build that has this. Three of them is somebody who came
 * back twice of their own accord, which is who following an account is for;
 * the first day is the paywall and the first session.
 */
const DAYS_KEY = 'follow/days-used';
const LAST_DAY_KEY = 'follow/last-day';
const OFFERED_KEY = 'follow/offered';

export const FOLLOW_DAY = 3;

/** The local date, as YYYY-MM-DD: a day of use is the person's day. */
function localDay(now: number): string {
  const date = new Date(now);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** Counts today as a day of use, once. Returns the count. */
export function noteDayUsed(now: number = Date.now()): number {
  const today = localDay(now);
  const days = kv.getNumber(DAYS_KEY) ?? 0;
  if (kv.getString(LAST_DAY_KEY) === today) return days;
  kv.set(LAST_DAY_KEY, today);
  kv.set(DAYS_KEY, days + 1);
  return days + 1;
}

export function daysUsed(): number {
  return kv.getNumber(DAYS_KEY) ?? 0;
}

export function followOffered(): boolean {
  return kv.getBoolean(OFFERED_KEY) === true;
}

/** Marked as the sheet rises, not when it is answered: an app killed with it
 * open has still asked, and asking twice is the thing not to do. */
export function markFollowOffered(): void {
  kv.set(OFFERED_KEY, true);
}

/** Pure: the sheet is owed today. */
export function followOfferDue(input: { days: number; offered: boolean }): boolean {
  return !input.offered && input.days >= FOLLOW_DAY;
}

/** Told when the development preview changes the count, so a mounted Home
 * re-reads it without waiting for the next open. */
const listeners = new Set<() => void>();

export function subscribeFollowOffer(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Development only (`?previewFollow`): forget that it was offered and count
 * three days of use. */
export function devResetFollowOffer(): void {
  if (!__DEV__) return;
  kv.set(OFFERED_KEY, false);
  kv.set(DAYS_KEY, FOLLOW_DAY);
  for (const listener of listeners) listener();
}
