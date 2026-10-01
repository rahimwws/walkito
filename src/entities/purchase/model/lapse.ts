import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { purchases } from './store';

/**
 * The state between "paid" and "never paid": access held once, and ended.
 *
 * This exists because those two are not the same person and must not meet the
 * same screen. Someone who has never paid is looking at a pitch. Someone whose
 * subscription ended has their own measurements in the app, and the honest
 * thing to show them is what those measurements say — which is the expiry
 * screen, not the paywall.
 *
 * It also softens the wall, deliberately and narrowly. The app is otherwise
 * fully paid: no entitlement, no app. But locking a lapsed user out of history
 * they generated would be taking their data hostage over a renewal, so they
 * keep read access and lose only the thing that costs us something to provide —
 * new sessions. That is the whole of the concession, and `sessionsLocked` below
 * is where it is enforced.
 */

/**
 * Whether paid access was held at some point and is not held now.
 *
 * Both halves are required. `hadAccess` is what tells a subscription that
 * ended, or a legacy pass that ran out, from an account that never bought
 * anything — which correctly falls through to the ordinary paywall.
 *
 * Reads `entitled` first, so subscribing again — from the expiry screen or
 * anywhere else — clears this without any flag needing to be reset.
 */
export function accessLapsed(): boolean {
  if (purchases.entitled()) return false;
  return purchases.hadAccess();
}

const BROWSE_KEY = 'purchase/browsing-lapsed';
const browseListeners = new Set<() => void>();

/**
 * Whether the user chose "Not now" and is browsing their history unpaid.
 *
 * Persisted, because the alternative is a screen that reappears on every cold
 * launch after the user has already answered it — which is not a paywall, it is
 * nagging. A locked session or routine brings the expiry screen back on demand
 * through `clearBrowsingLapsed`.
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
 * Clear the concession, so the expiry screen is the door again.
 *
 * Called on purchase, so a *second* lapse is met by the expiry screen rather
 * than by the read-only mode the first one was answered with; and from a locked
 * session or routine, where it is how the user asks to see their options.
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
  return accessLapsed() && browsingLapsed();
}

export function useSessionsLocked(): boolean {
  return useSyncExternalStore(subscribe, sessionsLocked, () => false);
}

/** Whether the expiry screen is the right door for this launch. */
export function useAccessLapsed(): boolean {
  return useSyncExternalStore(subscribe, accessLapsed, () => false);
}

export function useBrowsingLapsed(): boolean {
  return useSyncExternalStore(subscribe, browsingLapsed, () => false);
}
