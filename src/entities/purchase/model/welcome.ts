import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

/**
 * "You're in", owed after a purchase or a restore on our own paywalls (the
 * paywall, the offer wall, the expiry screen). Kept on the phone rather than
 * in memory: the first purchase goes through the setup screens before the
 * tabs, and an app closed in between still owes it once.
 */
const KEY = 'purchase/welcome-owed';
const listeners = new Set<() => void>();

export function markWelcomeOwed(): void {
  kv.set(KEY, true);
  for (const listener of listeners) listener();
}

/** Whether it is owed; from this call on it is not. */
export function takeWelcomeOwed(): boolean {
  if (kv.getBoolean(KEY) !== true) return false;
  kv.remove(KEY);
  for (const listener of listeners) listener();
  return true;
}

export function useWelcomeOwed(): boolean {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => kv.getBoolean(KEY) === true,
    () => false,
  );
}
