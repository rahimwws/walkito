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
 * back to where they were. They rise on their own once only, after Day 1
 * (`after_day1`, `offerAfterDayOne` in `features/home-tour`). Nothing else
 * is offered: what is offered after "Not now" is what was offered before it,
 * at the same prices (Guideline 5.6).
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

/** What raised the plans: a locked tap on one of these, or `after_day1`,
 * the once-only offer after Day 1. */
export type PlansAskedFrom = 'session' | 'task' | 'test' | 'routine' | 'relief' | 'player' | 'first_step' | 'after_day1';

let asked = false;
let askedFrom: PlansAskedFrom | null = null;
const askedListeners = new Set<() => void>();

function setAsked(next: boolean, from: PlansAskedFrom | null = null): void {
  if (next === asked) return;
  asked = next;
  askedFrom = next ? from : null;
  for (const listener of askedListeners) listener();
}

/** The plans, over Home. Only while looking around. */
export function askForPlans(from: PlansAskedFrom): void {
  if (!lookingAround() || asked) return;
  track('locked_plans_opened', { from });
  setAsked(true, from);
}

/** Closed without buying, or bought: back to where they were. */
export function closePlans(): void {
  setAsked(false);
}

export function plansAsked(): boolean {
  return asked;
}

/** What raised the plans that are up, or null when none are. */
export function plansAskedFrom(): PlansAskedFrom | null {
  return askedFrom;
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
