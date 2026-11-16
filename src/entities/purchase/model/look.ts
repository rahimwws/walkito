import { useSyncExternalStore } from 'react';

import { track } from '@/shared/lib/analytics';

import { accessLapsed } from './lapse';
import { paywallSkipped, subscribeSkipped } from './skip';
import { purchases } from './store';

/**
 * Looking around without buying: somebody who said "Not now" on the paywall
 * and has not bought since.
 *
 * Home, the plan, the exercises (their sheet and clips) and the Foot Check
 * are theirs to look at. Day 1's two minutes are free and can be started at
 * any time. Every other session is locked: a tap on one (the plan's, a task,
 * a routine, relief) raises the plans over Home (`askForPlans`, shown by
 * `OfferWall`), the same plans at the same prices as the paywall, closed
 * back to where they were. Nothing else is offered and nothing rises on its
 * own: what is offered after "Not now" is what was offered before it
 * (Guideline 5.6).
 *
 * Somebody whose paid access ran out is not looking around: they have the
 * expiry screen and its read-only browsing (`lapse.ts`).
 */
export function lookingAround(): boolean {
  return paywallSkipped() && !purchases.entitled() && !accessLapsed();
}

function subscribeLook(listener: () => void): () => void {
  const unskip = subscribeSkipped(listener);
  const unstore = purchases.subscribe(listener);
  return () => {
    unskip();
    unstore();
  };
}

export function useLookingAround(): boolean {
  return useSyncExternalStore(subscribeLook, lookingAround, () => false);
}

/** What was tapped that raised the plans. */
export type PlansAskedFrom = 'session' | 'task' | 'test' | 'routine' | 'relief' | 'player';


let asked = false;
const askedListeners = new Set<() => void>();

function setAsked(next: boolean): void {
  if (next === asked) return;
  asked = next;
  for (const listener of askedListeners) listener();
}

/** A locked tap: the plans, over Home. Only while looking around. */
export function askForPlans(from: PlansAskedFrom): void {
  if (!lookingAround() || asked) return;
  track('locked_plans_opened', { from });
  setAsked(true);
}

/** Closed without buying, or bought: back to where they were. */
export function closePlans(): void {
  setAsked(false);
}

export function plansAsked(): boolean {
  return asked;
}

export function usePlansAsked(): boolean {
  return useSyncExternalStore(
    (listener) => {
      askedListeners.add(listener);
      return () => askedListeners.delete(listener);
    },
    plansAsked,
    () => false,
  );
}
