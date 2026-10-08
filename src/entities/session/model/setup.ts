import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';
import { isAnonymousSession } from '@/shared/lib/supabase';

const KEY = 'session/setup-pending';

/**
 * Whether the screens after the first purchase are still owed.
 *
 * Armed when onboarding finishes, so only someone who came through the new
 * flow meets them: saving the plan to an account, Health, the watch, the note
 * from the founders and the widget. An install from before has no flag and
 * goes straight to Home. Cleared on the last of those screens, or on any way
 * out of them, so a crash halfway never traps anyone in front of the app.
 *
 * Read at module scope from MMKV, like `onboarded`, so the first paint mounts
 * the right stack.
 */
let pending = kv.getBoolean(KEY) ?? false;
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
  emit();
}

export function useSetupPending(): boolean {
  return useSyncExternalStore(
    (listener) => {
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
    () => pending,
    () => pending,
  );
}

/**
 * Whether this device is signed in to a real account rather than the anonymous
 * one made at first launch. A build with no backend has nothing to save to and
 * answers true, so the "save your plan" screen is skipped there.
 */
export async function accountSaved(): Promise<boolean> {
  try {
    return !(await isAnonymousSession());
  } catch {
    return false;
  }
}
