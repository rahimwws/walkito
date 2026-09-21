import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

const NAME_KEY = 'profile/name';
const EMAIL_KEY = 'profile/email';

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

/**
 * Where to reach them, if Apple told us.
 *
 * Stored for the same reason as the name and with the same urgency: Apple
 * returns an email **only on the very first authorisation** for an Apple ID,
 * and every sign-in after that returns null. Written down there and then or
 * lost for good.
 *
 * Local, and only local. There is no account behind it — nothing syncs, nothing
 * is recoverable on another phone, and no server is told. It exists so support
 * has an address when somebody writes in, and so the app can address them by
 * something other than a device id.
 */
let email = kv.getString(EMAIL_KEY) ?? '';

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

/**
 * Records their email address.
 *
 * Blank is ignored, exactly as the name is: Apple hands back nulls on every
 * authorisation after the first, and letting one through would erase an address
 * already captured.
 */
export function setProfileEmail(next: string): void {
  const trimmed = next.trim();
  if (trimmed.length === 0 || trimmed === email) return;
  email = trimmed;
  kv.set(EMAIL_KEY, trimmed);
  for (const listener of subscribers) listener();
}

export function profileEmail(): string {
  return email;
}

export function useProfileEmail(): string {
  return useSyncExternalStore(subscribe, profileEmail, profileEmail);
}

/** Clears it, for a rerun of the flow. */
export function resetProfile(): void {
  if (name === '' && email === '') return;
  name = '';
  email = '';
  kv.remove(NAME_KEY);
  kv.remove(EMAIL_KEY);
  for (const listener of subscribers) listener();
}
