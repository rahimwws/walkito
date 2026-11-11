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

/** Development only (`?firstSession=offer|done|declined`): the offer
 * standing again, or answered either way, for the next time the paywall
 * opens. */
export function devSetFirstSession(next: FirstSession | 'offer'): void {
  if (!__DEV__) return;
  if (next === 'offer') kv.remove(KEY);
  else kv.set(KEY, next);
}
