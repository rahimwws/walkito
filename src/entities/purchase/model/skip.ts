import { useSyncExternalStore } from 'react';

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { revokeDevAccess } from './comp';

/**
 * The paywall, skipped.
 *
 * It is a hard paywall: there is no way into the app without buying. Its
 * "Not now" (`skipPaywall`) opens Home for what is free, the two-minute first
 * session and the tour after it, and from then on the same plans stand over
 * Home (`OfferWall`) until a purchase or a restore.
 *
 * There used to be stages here: a one-time trial, then a lower price against
 * a fifteen-minute countdown, then the standard plans. They are gone. An
 * offer that appears because the first was turned down is what App Review
 * rejects under Guideline 5.6, and the people this app is for read a
 * countdown as a reason to leave. What is offered after "Not now" is what was
 * offered before it.
 */

const SKIPPED_KEY = 'purchase/paywall-skipped';

let skipped = kv.getBoolean(SKIPPED_KEY) === true;

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function set(next: boolean): void {
  skipped = next;
  if (skipped) kv.set(SKIPPED_KEY, true);
  else kv.remove(SKIPPED_KEY);
  for (const listener of listeners) listener();
}

/** Whether this person skipped the paywall. Synchronous and right on the
 * first frame, like `entitled()`. */
export function paywallSkipped(): boolean {
  return skipped;
}

/**
 * The paywall's "Not now". The caller does not navigate: the root layout's
 * guards open the tabs for the free first run. Tracks `paywall_skipped`, once
 * per person, so a screen must not track it as well.
 */
export function skipPaywall(): void {
  if (skipped) return;
  set(true);
  track('paywall_skipped');
}

export function usePaywallSkipped(): boolean {
  return useSyncExternalStore(subscribe, paywallSkipped, () => false);
}

/** Development only (`?previewPaywall`): the paywall again. Not skipped, and
 * the simulator's pretend purchase taken away. */
export function devPreviewPaywall(): void {
  if (!__DEV__) return;
  revokeDevAccess();
  set(false);
}

/** Development only (`?previewHomeOffer`): skipped, so the plans stand over
 * Home once the tour is done. */
export function devPreviewHomeOffer(): void {
  if (!__DEV__) return;
  revokeDevAccess();
  set(true);
}
