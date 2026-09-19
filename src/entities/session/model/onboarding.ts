import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

const KEY = 'session/onboarded';

/**
 * Force the flow to run on every launch while onboarding is being built.
 *
 * With this on, the stored flag is ignored at startup: completing still swaps
 * to Home for the rest of the session, but the next reload starts back at the
 * first onboarding screen.
 *
 * **Must be `false` in anything that ships.** On, it makes the questionnaire
 * inescapable — a released user would answer it again on every cold start,
 * because the answer is never read back.
 */
const ALWAYS_ONBOARD = false;

/**
 * Whether the questionnaire is behind the user.
 *
 * Read once at module scope, not per render: the very first paint has to know
 * which stack to mount, and an async read would flash Home before swapping to
 * onboarding — the "Login flash before Home" the navigation laws call out.
 * MMKV is synchronous, which is the whole reason it is the store here.
 */
let completed = ALWAYS_ONBOARD ? false : (kv.getBoolean(KEY) ?? false);

const subscribers = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

function snapshot(): boolean {
  return completed;
}

/**
 * Marks the flow done and swaps the stack.
 *
 * This is the one-way door: the guard in the root layout flips, expo-router
 * unmounts the onboarding stack, and there is nothing left for back to return
 * to. Deliberately not a `router.replace` — replacing still leaves onboarding
 * as a route the user could reach again.
 */
export function completeOnboarding(): void {
  if (completed) return;
  completed = true;
  kv.set(KEY, true);
  for (const listener of subscribers) listener();
}

/** Puts the flow back in front of the user. Kept for development and for a
 * future "redo my setup" in settings. */
export function resetOnboarding(): void {
  if (!completed) return;
  completed = false;
  kv.set(KEY, false);
  for (const listener of subscribers) listener();
}

export function useOnboarded(): boolean {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}
