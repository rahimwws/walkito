import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

const NAME_KEY = 'profile/name';

/**
 * What the app knows about the person using it.
 *
 * Persisted, and that is the whole point. The name reaches the app through two
 * doors that both shut behind it: the questionnaire keeps its answers in a
 * screen's local state and throws them away when the flow unmounts, and Apple
 * returns `fullName` **only on the very first authorisation** for an Apple ID —
 * every sign-in after that returns nulls. Whichever door it comes through, it
 * has to be written down there and then or it is gone for good.
 *
 * Read at module scope like the onboarding flag, so the first paint already has
 * it and no screen has to greet a blank space and then correct itself.
 */
let name = kv.getString(NAME_KEY) ?? '';

const subscribers = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

function snapshot(): string {
  return name;
}

/**
 * Records what to call them.
 *
 * Blank input is ignored rather than stored: Apple hands back an empty name on
 * every sign-in after the first, and letting that through would erase a name
 * the user typed themselves.
 */
export function setProfileName(next: string): void {
  const trimmed = next.trim();
  if (trimmed.length === 0 || trimmed === name) return;
  name = trimmed;
  kv.set(NAME_KEY, trimmed);
  for (const listener of subscribers) listener();
}

/** Just the first word — a greeting says "Murat", not "Murat Aliyev". */
export function firstName(full: string): string {
  return full.trim().split(/\s+/)[0] ?? '';
}

export function useProfileName(): string {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}

/** Clears it, for a rerun of the flow. */
export function resetProfile(): void {
  if (name === '') return;
  name = '';
  kv.remove(NAME_KEY);
  for (const listener of subscribers) listener();
}
