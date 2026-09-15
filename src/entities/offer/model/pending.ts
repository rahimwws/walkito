import { useSyncExternalStore } from 'react';

/** What the offer needs to know about the plan the user just chose. */
export type PendingOffer = {
  weeks: string;
  name: string;
};

/**
 * An offer that is owed but not yet shown.
 *
 * The flow arms this on its last screen and finishes onboarding immediately, so
 * Home is what the user actually arrives at. A moment later the offer rises
 * over it.
 *
 * That ordering is the whole point. Presenting the offer as the final step of
 * onboarding meant closing it had to unwind a stack that was being torn down at
 * the same moment — which is where "GO_BACK was not handled" and the frozen
 * paywall both came from. Over Home there is nothing to unwind: the sheet opens
 * on top of a screen that is already there, and closing it is just a dismissal.
 *
 * In memory only. If the app is killed between finishing the flow and the offer
 * appearing, the user simply lands on Home — which is a better failure than a
 * paywall ambushing them on a later launch.
 */
let pending: PendingOffer | null = null;

const subscribers = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

function snapshot(): PendingOffer | null {
  return pending;
}

function emit(): void {
  for (const listener of subscribers) listener();
}

/** Called by the flow as it hands over to Home. */
export function armOffer(next: PendingOffer): void {
  pending = next;
  emit();
}

/** Called once the offer has actually been presented, so it is owed only once. */
export function disarmOffer(): void {
  if (pending == null) return;
  pending = null;
  emit();
}

export function usePendingOffer(): PendingOffer | null {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}
