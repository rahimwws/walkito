import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import { getIntake } from '@/entities/profile';
import { useLogsVersion, usePlanVersion } from '@/entities/program';
import { onPlanPushRequested, pushPlan, restorePlan } from '@/entities/program/sync';

/**
 * Ordinary writes are gathered for this long before one push goes up.
 *
 * A second, down from five. The debounce only has to fold a burst — a session's
 * last few writes, a settings sheet's toggles — into one request; five seconds
 * was long enough for the app to be closed first, and the push used to run only
 * on the way back in.
 */
const DEBOUNCE_MS = 1000;

function facts() {
  const intake = getIntake();
  return {
    painSide: intake?.side ?? null,
    painZones: (intake?.pain ?? []).filter((zone) => zone !== 'none'),
    goalAnswer: intake?.goal ?? null,
    sport: intake?.sport ?? null,
  };
}

/**
 * Keeps the plan copied to Supabase, behind everything else.
 *
 * On launch, a fresh install first asks for its history back, and every push
 * waits for that to finish: a push racing the restore would upload the fresh
 * install's defaults over the profile being restored.
 *
 * After that, three things push:
 *
 * - **A finish or a check-in**, at once — `requestPlanPush` from the entity.
 *   These are the records the server is for.
 * - **The app going away or coming back.** Going away is the last chance
 *   before iOS suspends the app; coming back retries whatever failed while it
 *   was away.
 * - **Any other write**, a second later, gathered.
 *
 * Pushes run one at a time with one queued behind (see `pushPlan`), so these
 * overlapping is cheap. Nothing waits on any of it and nothing reports it: the
 * device is the record, the server is the copy.
 */
export function usePlanSync(onboarded: boolean): void {
  const planVersion = usePlanVersion();
  const logsVersion = useLogsVersion();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restoring = useRef<Promise<unknown>>(Promise.resolve());

  useEffect(() => {
    if (!onboarded) return;
    restoring.current = restorePlan().catch(() => false);
    const pushNow = () => {
      void restoring.current.then(() => pushPlan(facts(), { urgent: true })).catch(() => 'failed');
    };
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active' || state === 'background' || state === 'inactive') pushNow();
    });
    const off = onPlanPushRequested(pushNow);
    return () => {
      sub.remove();
      off();
    };
  }, [onboarded]);

  useEffect(() => {
    if (!onboarded) return;
    if (timer.current != null) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      void restoring.current.then(() => pushPlan(facts())).catch(() => 'failed');
    }, DEBOUNCE_MS);
    return () => {
      if (timer.current != null) clearTimeout(timer.current);
    };
  }, [onboarded, planVersion, logsVersion]);
}
