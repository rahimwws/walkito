import { kv } from '@/shared/lib/storage';

/**
 * How long the app is open, per day — for the backend's picture of who is
 * engaged, not for anything the user sees.
 *
 * Foreground time only: from the app becoming active to it leaving. A stretch
 * that crosses midnight is credited to the day it started on; that is a few
 * minutes of error once in a while, and splitting it buys nothing.
 */
export type UsageDay = { seconds: number; opens: number };

const KEY = 'usage/days';
/** A stretch longer than this is a phone left on a table, not use. */
const MAX_STRETCH_S = 60 * 60;

let activeSince: number | null = null;

function dateKey(at: number): string {
  const d = new Date(at);
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

export function usageDays(): Record<string, UsageDay> {
  try {
    return JSON.parse(kv.getString(KEY) ?? '{}') as Record<string, UsageDay>;
  } catch {
    return {};
  }
}

function add(date: string, seconds: number, opens: number): void {
  const days = usageDays();
  const day = days[date] ?? { seconds: 0, opens: 0 };
  days[date] = { seconds: day.seconds + seconds, opens: day.opens + opens };
  kv.set(KEY, JSON.stringify(days));
}

/** The app came to the front. */
export function usageStarted(now: number = Date.now()): void {
  if (activeSince != null) return;
  activeSince = now;
  add(dateKey(now), 0, 1);
}

/** The app left the front. Closes the stretch that `usageStarted` opened. */
export function usageStopped(now: number = Date.now()): void {
  if (activeSince == null) return;
  const seconds = Math.min(MAX_STRETCH_S, Math.max(0, Math.round((now - activeSince) / 1000)));
  add(dateKey(activeSince), seconds, 0);
  activeSince = null;
}
