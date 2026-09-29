import * as Updates from 'expo-updates';
import { useCallback, useEffect, useState } from 'react';

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { confirmationFor, parseAppliedFlag } from './decide';

const APPLIED_KEY = 'update/applied';

/** How long after mount the note waits: the native reload screen is still
 * fading out (300ms) and the first screen is still settling. Arriving on top of
 * either reads as part of the restart rather than as news. */
const SETTLE_MS = 700;

/** What the running bundle calls itself. The build's own bundle has no id. */
export function runningUpdateId(): string {
  return Updates.updateId ?? 'embedded';
}

/**
 * Remembers, across the restart, that the person just said yes.
 *
 * Written immediately before `reloadAsync`, which is the last line of this
 * bundle that is guaranteed to run. The next launch compares it against what
 * it is running (see `confirmationFor`) — the only way to know the restart
 * actually delivered something, because expo-updates falls back to the old
 * update when a new one fails to launch.
 */
export function markApplying(): void {
  kv.set(APPLIED_KEY, JSON.stringify({ from: runningUpdateId(), at: Date.now() }));
}

/** expo-updates gave up on the update and fell back to the build's own bundle.
 * Read defensively: a constant, but from a native module. */
function isEmergencyLaunch(): boolean {
  try {
    return Updates.isEmergencyLaunch === true;
  } catch {
    return false;
  }
}

/** The restart did not happen after all. */
export function unmarkApplying(): void {
  kv.remove(APPLIED_KEY);
}

/** Read once per bundle: the flag describes the launch, not a render. */
let decided: ReturnType<typeof confirmationFor> | null = null;
let reported = false;

function decideOnce(): ReturnType<typeof confirmationFor> {
  if (decided == null) {
    decided = confirmationFor(
      parseAppliedFlag(kv.getString(APPLIED_KEY)),
      runningUpdateId(),
      Date.now(),
      isEmergencyLaunch(),
    );
  }
  return decided;
}

export type UpdateConfirmation = {
  /** The "Walkito is up to date" note is up. */
  visible: boolean;
  /** Raise it by hand — the development preview's fake restart. */
  show: () => void;
  /** It went, by timer or by tap. */
  hide: () => void;
};

/**
 * The first launch after an over-the-air restart says that it worked.
 *
 * `enabled` follows onboarding like the sheet does. It is always true on a
 * launch that follows an accepted update — nobody is offered one before
 * finishing onboarding — so a flag seen while it is false is left for the
 * recency check to retire rather than cleared early.
 */
export function useUpdateConfirmation(enabled: boolean): UpdateConfirmation {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;
    const decision = decideOnce();
    if (decision === 'none') return undefined;
    // Cleared whatever the verdict, so a stale or failed flag cannot come back
    // on the launch after this one.
    unmarkApplying();
    if (decision !== 'confirm') return undefined;
    if (!reported) {
      reported = true;
      track('app_update_applied', { kind: 'ota' });
    }
    const id = setTimeout(() => {
      // Spent: a remount later in this bundle must not say it twice.
      decided = 'none';
      setVisible(true);
    }, SETTLE_MS);
    return () => clearTimeout(id);
  }, [enabled]);

  const show = useCallback(() => setVisible(true), []);
  const hide = useCallback(() => setVisible(false), []);

  return { visible, show, hide };
}
