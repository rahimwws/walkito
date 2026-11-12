import { useSyncExternalStore } from 'react';

import { devSeedHealth } from '@/entities/health';

/**
 * Development-only ways to see each state of "Your week on your feet" on a
 * simulator, whose Health is empty. Held in memory; a release build never
 * reads or writes any of it.
 */
export type DevOnFeetWeek = 'connect' | 'waiting' | null;

let forced: DevOnFeetWeek = null;
const listeners = new Set<() => void>();

function set(next: DevOnFeetWeek): void {
  forced = next;
  listeners.forEach((listener) => listener());
}

/**
 * The card with a week in it: thirty believable days of Health written
 * through the same cache the pipeline writes (`devSeedHealth`), yesterday a
 * long day. Overwrites those days.
 */
export function devSeedOnFeetWeek(now: Date = new Date()): void {
  if (!__DEV__) return;
  set(null);
  devSeedHealth(now);
}

/**
 * One of the card's empty states, whatever Health holds: `connect` (Health
 * never asked: the line and the connect button), `waiting` (asked, not two
 * days of readings yet). `off` shows what is really there again.
 */
export function devSetOnFeetWeekState(state: 'connect' | 'waiting' | 'off'): void {
  if (!__DEV__) return;
  set(state === 'off' ? null : state);
}

export function useDevOnFeetWeek(): DevOnFeetWeek {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => forced,
  );
}
