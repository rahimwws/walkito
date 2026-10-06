import { useSyncExternalStore } from 'react';

import { track } from '@/shared/lib/analytics';
import { getLanguage } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';
import { accountEmail } from '@/shared/lib/supabase';

import { deviceTimeZone, saveEmailContact, type EmailSource } from './email';

const NAME_KEY = 'profile/name';
const EMAIL_KEY = 'profile/email';
const EMAIL_SOURCE_KEY = 'profile/email-source';
/** What the server last took, so an unchanged context is not sent on every sync. */
const CONTEXT_SENT_KEY = 'profile/email-context-sent';

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
let emailSource = (kv.getString(EMAIL_SOURCE_KEY) ?? null) as EmailSource | null;

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
export function setProfileEmail(next: string, source: EmailSource = 'apple'): void {
  const trimmed = next.trim();
  if (trimmed.length === 0 || trimmed === email) return;
  email = trimmed;
  emailSource = source;
  kv.set(EMAIL_KEY, trimmed);
  kv.set(EMAIL_SOURCE_KEY, source);
  for (const listener of subscribers) listener();
  track('email_captured', { source });
  // Server copy, alongside the local one. Never awaited: the address is stored
  // on the device either way, and a screen should not wait on a round trip to
  // finish a sign-in that has already succeeded.
  void syncEmailContext();
}

/**
 * Puts the address beside the anonymous id the server already has, with the
 * language, time zone and first name the emails are written with.
 *
 * Not an account — there is no password and no session to sign into. It is one
 * row keyed to the identity this device already owns. Built as the push token
 * is: a `security definer` function, idempotent, blank input ignored.
 *
 * Called on every successful plan sync, and cheap when nothing changed: what
 * the server last took is remembered, and an identical context is not sent
 * again. A language switched in Settings or a flight across time zones goes up
 * with the next sync.
 *
 * Silent on failure, like the push token. The local copy is the one the app
 * reads, and an offline launch should not put an error in front of somebody
 * who has just signed in successfully.
 */
export async function syncEmailContext(): Promise<void> {
  const context = JSON.stringify([email, emailSource, getLanguage(), deviceTimeZone(), firstName(name)]);
  if (context === kv.getString(CONTEXT_SENT_KEY)) return;
  const ok = await saveEmailContact({ email, source: emailSource, firstName: firstName(name) });
  if (ok) kv.set(CONTEXT_SENT_KEY, context);
}

/**
 * At launch: the server copy, and the account's address when this phone has
 * none.
 *
 * A phone that signed in again — a reinstall, a second device — got null from
 * Apple, so onboarding asked for an address the account already had. The
 * account is asked first now, and the email step only appears for somebody
 * with no address anywhere.
 */
export async function syncStoredEmail(): Promise<void> {
  if (email === '') {
    const account = await accountEmail().catch(() => null);
    if (account != null) {
      const source: EmailSource =
        account.provider === 'google' ? 'google' : account.provider === 'apple' ? 'apple' : 'onboarding';
      // Sends the server copy itself.
      setProfileEmail(account.email, source);
      return;
    }
  }
  await syncEmailContext();
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
  emailSource = null;
  kv.remove(NAME_KEY);
  kv.remove(EMAIL_KEY);
  kv.remove(EMAIL_SOURCE_KEY);
  kv.remove(CONTEXT_SENT_KEY);
  for (const listener of subscribers) listener();
}
