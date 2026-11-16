import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import { scheduledPushDates } from '@/entities/notifications';
import { getIntake, syncEmailContext } from '@/entities/profile';
import { useLogsVersion, usePlanVersion } from '@/entities/program';
import { onPlanPushRequested, pushPlan, restorePlan, type SyncOutcome } from '@/entities/program/sync';

/**
 * Ordinary writes are gathered for this long before one push goes up.
 *
 * A second, down from five. The debounce only has to fold a burst — a session's
 * last few writes, a settings sheet's toggles — into one request; five seconds
 * was long enough for the app to be closed first, and the push used to run only
 * on the way back in.
 */
const DEBOUNCE_MS = 1000;

/** When the app last came forward: the launch, then every return to the
 * foreground. Null for a launch iOS made in the background until somebody
 * brings it forward: that is not an open, and the server's stamp (which the
 * email scheduler reads as "last seen") is then left as it was. */
let lastOpenAt: number | null = AppState.currentState === 'background' ? null : Date.now();

/**
 * Whether somebody has had the app in front in this run of it. Looks at the
 * state again each time: the first `active` can come before anything here
 * listens.
 */
function opened(): boolean {
  if (lastOpenAt == null && AppState.currentState !== 'background') lastOpenAt = Date.now();
  return lastOpenAt != null;
}

function facts() {
  const intake = getIntake();
  const pushes = scheduledPushDates();
  return {
    painSide: intake?.side ?? null,
    painZones: (intake?.pain ?? []).filter((zone) => zone !== 'none'),
    goalAnswer: intake?.goal ?? null,
    sport: intake?.sport ?? null,
    lastOpenAt,
    pushSessionDates: pushes.session,
    pushTestDates: pushes.test,
  };
}

/**
 * After a push that went through, the email contact's language, time zone
 * and name go up too if any of them changed — the scheduler writes in that
 * language at that zone's morning. Cheap when nothing changed.
 */
function afterPush(outcome: SyncOutcome): SyncOutcome {
  if (outcome === 'pushed') void syncEmailContext();
  return outcome;
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
 *
 * None of it on a launch iOS made in the background (HealthKit's delivery,
 * the on-feet task): nobody was there to write anything, and the restore and
 * the push went up at every such wake, failing for some (`plan_sync_failed`,
 * several times a night). Both wait for the app to be brought forward, where
 * the return to the foreground pushes anyway.
 */
export function usePlanSync(onboarded: boolean): void {
  const planVersion = usePlanVersion();
  const logsVersion = useLogsVersion();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restoring = useRef<Promise<unknown> | null>(null);
  /** The restore, started once, by the first sync somebody is there for. */
  const restored = () => (restoring.current ??= restorePlan().catch(() => false));

  useEffect(() => {
    if (!onboarded) return;
    restoring.current = null;
    if (opened()) void restored();
    const pushNow = () => {
      if (!opened()) return;
      void restored()
        .then(() => pushPlan(facts(), { urgent: true }))
        .then(afterPush)
        .catch(() => 'failed');
    };
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') lastOpenAt = Date.now();
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
      if (!opened()) return;
      void restored()
        .then(() => pushPlan(facts()))
        .then(afterPush)
        .catch(() => 'failed');
    }, DEBOUNCE_MS);
    return () => {
      if (timer.current != null) clearTimeout(timer.current);
    };
  }, [onboarded, planVersion, logsVersion]);
}
