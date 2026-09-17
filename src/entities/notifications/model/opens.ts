/**
 * When the user was last actually here.
 *
 * The scheduler needs this for two things, and gets it from nowhere else: the
 * evening check-in must not fire on a day the user already came in, and the
 * unopened counter that drives backoff must be cleared by *any* open rather
 * than only by a tap on a notification.
 *
 * That second rule is the important one. Counting only notification taps means
 * someone who opens the app every morning of their own accord looks, to the
 * backoff logic, exactly like someone ignoring it — and gets silenced for being
 * engaged.
 */

import { kv } from '@/shared/lib/storage';

const LAST_KEY = 'notify/last-open';
const DAYS_KEY = 'notify/open-days';
/** A fortnight is all any rule here looks back over. */
const KEEP = 14;

/** `YYYY-MM-DD` of the most recent open, or null on a first run. */
export function lastOpenedOn(): string | null {
  return kv.getString(LAST_KEY) ?? null;
}

function openDays(): string[] {
  const raw = kv.getString(DAYS_KEY);
  if (raw == null) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((d): d is string => typeof d === 'string') : [];
  } catch {
    // A corrupt blob costs the check-in one day of accuracy, not the app.
    return [];
  }
}

/** Whether the app was opened on a given date key. */
export function openedOn(dateKey: string): boolean {
  return openDays().includes(dateKey);
}

/** Records an open. Idempotent within a day, so it is safe on every foreground. */
export function recordOpen(dateKey: string): void {
  kv.set(LAST_KEY, dateKey);
  const days = openDays();
  if (days.includes(dateKey)) return;
  kv.set(DAYS_KEY, JSON.stringify([...days, dateKey].slice(-KEEP)));
}

/** For tests and for a full reset. */
export function resetOpens(): void {
  kv.remove(LAST_KEY);
  kv.remove(DAYS_KEY);
}
