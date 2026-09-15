import { useSyncExternalStore } from 'react';

/**
 * Whether the better price has been unlocked.
 *
 * In memory only, and deliberately so: this is a win-back offer earned by
 * coming back through the notification, not a discount the app owes forever.
 * Persisting it would mean every future launch quietly showed the reduced
 * price, which turns a limited offer into the real one.
 *
 * A store rather than a route param because the sheet is usually already
 * mounted when the offer lands — the user left with it open and tapped the
 * notification to come back. Pushing `/offer` again to carry a param would
 * stack a second sheet on top of the first; this just flips a value the
 * mounted screen is already watching, and it animates in place.
 */
let unlocked = false;

const subscribers = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

function snapshot(): boolean {
  return unlocked;
}

export function unlockBoost(): void {
  if (unlocked) return;
  unlocked = true;
  for (const listener of subscribers) listener();
}

export function isBoostUnlocked(): boolean {
  return unlocked;
}

/** Reset between runs of the flow, so a rerun starts from the full price. */
export function lockBoost(): void {
  if (!unlocked) return;
  unlocked = false;
  for (const listener of subscribers) listener();
}

export function useBoost(): boolean {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}
