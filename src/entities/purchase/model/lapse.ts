import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { purchases } from './store';

/**
 * The state between "paid" and "never paid": twelve weeks bought, and finished.
 *
 * This exists because those two are not the same person and must not meet the
 * same screen. Someone who has never paid is looking at a pitch. Someone whose
 * programme just ran out has twelve weeks of their own measurements in the app,
 * and the honest thing to show them is what those measurements say — which is
 * the expiry screen, not the paywall.
 *
 * It also softens the wall, deliberately and narrowly. The app is otherwise
 * fully paid: no entitlement, no app. But locking a lapsed user out of history
 * they generated would be taking their data hostage over a renewal, so they
 * keep read access and lose only the thing that costs us something to provide —
 * new sessions. That is the whole of the concession, and `sessionsLocked` below
 * is where it is enforced.
 */

/**
 * Whether a programme was bought and its access window has closed.
 *
 * Both halves are required. `programEndsAt` returning a date means a programme
 * was bought at some point — a monthly subscriber has no such date, so a lapsed
 * subscription is *not* a lapse in this sense and correctly falls through to the
 * ordinary paywall, which is what it has always been.
 *
 * Reads `entitled` too, so buying again — or a monthly subscription started from
 * the expiry screen — clears this without any flag needing to be reset.
 */
export function programLapsed(): boolean {
  if (purchases.entitled()) return false;
  const ends = purchases.programEndsAt();
  return ends != null && ends.getTime() <= Date.now();
}

const BROWSE_KEY = 'purchase/browsing-lapsed';
const browseListeners = new Set<() => void>();

/**
 * Whether the user chose "Not now" and is browsing their history unpaid.
 *
 * Persisted, because the alternative is a screen that reappears on every cold
 * launch after the user has already answered it — which is not a paywall, it is
 * nagging. They can still reach both prices from the profile at any time.
 */
export function browsingLapsed(): boolean {
  return kv.getBoolean(BROWSE_KEY) ?? false;
}

function setBrowsing(next: boolean): void {
  kv.set(BROWSE_KEY, next);
  browseListeners.forEach((fire) => fire());
}

/** "Not now" — let them into their own history. */
export function startBrowsingLapsed(): void {
  setBrowsing(true);
}

/**
 * Clear the concession, so a *second* expiry is met by the expiry screen again
 * rather than by the read-only mode the first one was answered with.
 *
 * Called on purchase, not on lapse: the flag is only meaningful while lapsed,
 * and clearing it the moment somebody pays is what re-arms it for next time.
 */
export function clearBrowsingLapsed(): void {
  if (browsingLapsed()) setBrowsing(false);
}

function subscribe(listener: () => void): () => void {
  // Both sources. The flag changes when the user taps "Not now"; the lapse
  // itself changes when the store speaks, and a purchase has to take the
  // read-only banner away without waiting for a remount.
  browseListeners.add(listener);
  const unstore = purchases.subscribe(listener);
  return () => {
    browseListeners.delete(listener);
    unstore();
  };
}

/**
 * Whether starting a new session is blocked right now.
 *
 * The single gate. Read inside the session player rather than at the three
 * screens that open one, so there is no fourth entry point to forget — and so
 * the answer cannot differ between them.
 */
export function sessionsLocked(): boolean {
  return programLapsed() && browsingLapsed();
}

export function useSessionsLocked(): boolean {
  return useSyncExternalStore(subscribe, sessionsLocked, () => false);
}

/** Whether the expiry screen is the right door for this launch. */
export function useProgramLapsed(): boolean {
  return useSyncExternalStore(subscribe, programLapsed, () => false);
}

export function useBrowsingLapsed(): boolean {
  return useSyncExternalStore(subscribe, browsingLapsed, () => false);
}
