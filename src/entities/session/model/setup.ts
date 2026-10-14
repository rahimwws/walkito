import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';
import { isAnonymousSession, signedInBefore } from '@/shared/lib/supabase';

import { armHomeTour } from './home-tour';

const KEY = 'session/setup-pending';
const OWED_KEY = 'session/account-owed';

/**
 * Whether the screens after the first purchase are still owed.
 *
 * Armed when onboarding finishes, so only someone who came through the new
 * flow meets them: saving the plan to an account, Health, the watch, the note
 * from the founders and the widget. An install from before has no flag and
 * goes straight to Home. Cleared on the last of those screens, so a crash
 * halfway brings the rest back on the next launch.
 *
 * Read at module scope from MMKV, like `onboarded`, so the first paint mounts
 * the right stack.
 */
let pending = kv.getBoolean(KEY) ?? false;

/**
 * An account still owed: signing in is required after the purchase on
 * Android, and was passed only because it failed for a reason that was not the
 * person's (no network, a server down). Two values, kept apart on purpose:
 *
 * - `owed`, stored: ask again on the next launch, until a sign-in succeeds.
 * - `holding`, this launch only: keeps the save screen in front of the tabs.
 *   It starts as `owed` (a launch after a deferral opens on the save screen)
 *   and drops the moment the person passes it again, so "Continue for now"
 *   always lets them through. Holding the tabs on the stored flag alone kept
 *   them on the setup screens for good once they had deferred.
 */
let owed = kv.getBoolean(OWED_KEY) ?? false;
let holding = owed;
const subscribers = new Set<() => void>();

function emit(): void {
  for (const listener of subscribers) listener();
}

export function armSetup(): void {
  if (pending) return;
  pending = true;
  kv.set(KEY, true);
  emit();
}

export function finishSetup(): void {
  if (!pending) return;
  pending = false;
  kv.set(KEY, false);
  // Home opens on the day-one session, and its short tour after it.
  armHomeTour();
  emit();
}

/** Passed without an account, for now: through to the app this launch,
 * asked again on the next. */
export function deferAccount(): void {
  owed = true;
  kv.set(OWED_KEY, true);
  holding = false;
  emit();
}

/** Signed in: nothing owed. */
export function settleAccount(): void {
  if (!owed && !holding) return;
  owed = false;
  holding = false;
  kv.set(OWED_KEY, false);
  emit();
}

function subscribe(listener: () => void): () => void {
  subscribers.add(listener);
  return () => subscribers.delete(listener);
}

export function useSetupPending(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => pending,
    () => pending,
  );
}

/** Whether the save screen is held in front of the tabs on this launch. */
export function accountHeld(): boolean {
  return holding;
}

export function useAccountOwed(): boolean {
  return useSyncExternalStore(subscribe, accountHeld, accountHeld);
}

/** How long the session read may take before the answer is "not yet". */
const SESSION_WAIT_MS = 4000;

/**
 * Whether this device is signed in to a real account rather than the anonymous
 * one made at first launch. A build with no backend has nothing to save to and
 * answers true, so the "save your plan" screen is skipped there.
 *
 * A sign-in once seen is remembered on the device (`signedInBefore`), so an
 * offline launch with an expired token does not read as anonymous. Otherwise
 * the session is asked for, and an answer slower than a few seconds counts as
 * no account: the screen that follows has a way on when signing in fails.
 */
export async function accountSaved(): Promise<boolean> {
  if (signedInBefore()) return true;
  try {
    const anonymous = await Promise.race([
      isAnonymousSession(),
      new Promise<boolean>((resolve) => setTimeout(() => resolve(true), SESSION_WAIT_MS)),
    ]);
    return !anonymous;
  } catch {
    return false;
  }
}
