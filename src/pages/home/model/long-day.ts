import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

/**
 * What Home remembers about its card for the morning after a long day on the
 * feet: the day it was closed or its routine opened (so it shows at most once
 * a day), and the day its view was last counted.
 *
 * Whether yesterday was long is not decided here: that is
 * `longDayYesterday` in `@/entities/health`, a pure function of the Health
 * signals.
 */
const HIDDEN_KEY = 'home/long-day-hidden';
const SEEN_KEY = 'home/long-day-seen';

type LongDayState = {
  /** The local day (`YYYY-MM-DD`) the card was last closed or used. */
  hiddenOn: string | null;
  /** Development only: hours to show whatever Health holds. In memory. */
  devHours: number | null;
};

let state: LongDayState = { hiddenOn: kv.getString(HIDDEN_KEY) ?? null, devHours: null };
const listeners = new Set<() => void>();

function set(next: Partial<LongDayState>): void {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
}

/** Closed, or its routine opened: gone until tomorrow. */
export function hideLongDay(today: string): void {
  kv.set(HIDDEN_KEY, today);
  set({ hiddenOn: today, devHours: null });
}

/** True the first time it is asked on a day, for counting one view a day. */
export function firstLongDayViewOn(today: string): boolean {
  if (kv.getString(SEEN_KEY) === today) return false;
  kv.set(SEEN_KEY, today);
  return true;
}

export function useLongDayState(): LongDayState {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => state,
  );
}

/**
 * Development only: Home's long-day card with these hours, whatever Health
 * holds and whether or not it was closed today. `null` lets the real rule
 * through again. A release build never shows it.
 */
export function devShowOnFeetCard(hours: number | null = 9): void {
  if (!__DEV__) return;
  kv.remove(HIDDEN_KEY);
  kv.remove(SEEN_KEY);
  set({ hiddenOn: null, devHours: hours == null ? null : Math.max(1, Math.min(24, Math.round(hours))) });
}
