import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

/**
 * The first session, offered between the onboarding and the paywall: whether
 * this phone has done it there (`done`) or passed on it (`declined`).
 *
 * Null until one or the other, so the offer stands at every launch until it
 * is answered: a launch closed on it has answered nothing. `done` is what
 * turns the paywall into the view that carries on from the session ("Day 1
 * done"), today and on every return after it.
 */
const KEY = 'offer/first-session';

export type FirstSession = 'done' | 'declined';

export function firstSession(): FirstSession | null {
  const raw = kv.getString(KEY);
  return raw === 'done' || raw === 'declined' ? raw : null;
}

export function markFirstSession(next: FirstSession): void {
  kv.set(KEY, next);
}

/**
 * The first session asked for again: a tapped Day 1 reminder
 * (`app/providers/day-one-reminder`) opens the app on the two free minutes,
 * not on the plans, for somebody who passed on them the first time.
 *
 * In memory, for this run of the app: it changes what is in front of her now
 * and leaves the answer on record alone, so a launch she starts herself still
 * opens on the plans. Never once the session is done.
 */
let again = false;
const listeners = new Set<() => void>();

export function offerFirstSessionAgain(): void {
  if (again || firstSession() === 'done') return;
  again = true;
  for (const listener of listeners) listener();
}

/** Shown, and done or passed on: the plans follow as they always did. */
export function firstSessionOfferedAgain(): void {
  if (!again) return;
  again = false;
  for (const listener of listeners) listener();
}

export function firstSessionAgain(): boolean {
  return again;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useFirstSessionAgain(): boolean {
  return useSyncExternalStore(subscribe, firstSessionAgain, firstSessionAgain);
}

/** Development only (`?firstSession=offer|done|declined`): the offer
 * standing again, or answered either way, for the next time the paywall
 * opens. */
export function devSetFirstSession(next: FirstSession | 'offer'): void {
  if (!__DEV__) return;
  if (next === 'offer') kv.remove(KEY);
  else kv.set(KEY, next);
}
