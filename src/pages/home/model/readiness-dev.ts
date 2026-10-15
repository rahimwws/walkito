import { useSyncExternalStore } from 'react';

import { isLegStateId, type LegStateId } from './readiness';

/**
 * Dev-only overrides for the readiness gauge, set from `walkito.dev://`:
 * `?readinessScore=NN` forces the value for screenshots, and `?legState=<id>`
 * forces what Walkito says about the legs (an id from `LEG_STATES`, e.g.
 * `sore`, `worked`, `fresh`); `=off` lets the real one through for either.
 * Held in memory only; a release build never writes it.
 */
type DevReadiness = { score: number | null; leg: LegStateId | null };

let state: DevReadiness = { score: null, leg: null };
const listeners = new Set<() => void>();

function set(next: Partial<DevReadiness>): void {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
}

export function devSetReadinessScore(score: number | null): void {
  if (__DEV__) set({ score: score == null ? null : Math.max(0, Math.min(100, Math.round(score))) });
}

/** An unknown id is ignored, so a typo keeps the real state. */
export function devSetLegState(id: string | null): void {
  if (!__DEV__) return;
  if (id == null) set({ leg: null });
  else if (isLegStateId(id)) set({ leg: id });
}

export function useDevReadiness(): DevReadiness {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => state,
  );
}
