import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

/**
 * Whether notifications about offers may be sent: the comeback "last chance",
 * its "ends soon" and the paywall win-back.
 *
 * Apple lets an app send a promotional notification only to someone who
 * agreed to it and can turn it off inside the app (guideline 4.5.4). The
 * agreement is the line under the notification ask ("Reminders, progress and
 * occasional offers"); this is the way out, a switch in Settings. On until
 * turned off. Reminders, progress and the trial's end reminder are not offers
 * and are never held by it.
 */

const KEY = 'notifications/offers';

const listeners = new Set<() => void>();

export function offerPushesAllowed(): boolean {
  return kv.getBoolean(KEY) ?? true;
}

export function setOfferPushes(on: boolean): void {
  kv.set(KEY, on);
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useOfferPushes(): boolean {
  return useSyncExternalStore(subscribe, offerPushesAllowed, offerPushesAllowed);
}
