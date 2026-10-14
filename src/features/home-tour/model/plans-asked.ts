import { useSyncExternalStore } from 'react';

/**
 * "See plans" on the "Day 1" card: somebody who skipped the paywall asked for
 * the offer before finishing the two free minutes.
 *
 * The offer follows the tour for them, and the tour follows the session; with
 * no way past the card but its Start button, somebody who kept closing the
 * session early could never subscribe. This raises the offer wall at once.
 * This launch only: the card offers it again next time.
 */
let asked = false;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function askForPlans(): void {
  if (asked) return;
  asked = true;
  for (const listener of listeners) listener();
}

export function usePlansAsked(): boolean {
  return useSyncExternalStore(subscribe, () => asked, () => asked);
}
