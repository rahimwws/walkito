import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import { getIntake } from '@/entities/profile';
import { useLogsVersion, usePlanVersion } from '@/entities/program';
import { pushPlan, restorePlan } from '@/entities/program/sync';

/** Writes are gathered for this long before one push goes up. */
const DEBOUNCE_MS = 5000;

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
 * On launch, a fresh install first asks for its history back. After that every
 * write — a session, a check-in, a changed setting — schedules one push a few
 * seconds later, and every return to the app pushes again. Nothing waits on it
 * and nothing reports it: the device is the record, the server is the copy.
 */
export function usePlanSync(onboarded: boolean): void {
  const planVersion = usePlanVersion();
  const logsVersion = useLogsVersion();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!onboarded) return;
    void restorePlan().catch(() => false);
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') void pushPlan(facts()).catch(() => 'failed');
    });
    return () => sub.remove();
  }, [onboarded]);

  useEffect(() => {
    if (!onboarded) return;
    if (timer.current != null) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      void pushPlan(facts()).catch(() => 'failed');
    }, DEBOUNCE_MS);
    return () => {
      if (timer.current != null) clearTimeout(timer.current);
    };
  }, [onboarded, planVersion, logsVersion]);
}
