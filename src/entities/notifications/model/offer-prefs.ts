import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

/**
 * Whether notifications about offers may be sent: the comeback "last chance",
 * its "ends soon" and the paywall win-back.
 *
 * Apple lets an app send a promotional notification only to someone who
 * agreed to it and can turn it off inside the app (guideline 4.5.4). Up to
 * 1.0.13 the agreement was the line under the notification ask ("Reminders,
 * progress and occasional offers"), and for those installs this is on until
 * turned off. The line no longer mentions offers, so an onboarding finished
 * since leaves it off (`withholdOfferPushes`) until it is turned on in
 * Settings. Reminders, progress and the trial's end reminder are not offers
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

/** An onboarding finished under the ask that names no offers: off, unless
 * already chosen. */
export function withholdOfferPushes(): void {
  if (kv.getBoolean(KEY) == null) setOfferPushes(false);
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
