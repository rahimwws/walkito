import { useSyncExternalStore } from 'react';

import { isLegStateId, isReadinessFocus, type LegStateId, type ReadinessFocus } from './readiness';

/**
 * Dev-only overrides for the readiness gauge, set from `walkito.dev://`:
 * `?readinessScore=NN` forces the value for screenshots, and `?legState=<id>`
 * forces what Walkito says about the legs (an id from `LEG_STATES`, e.g.
 * `sore`, `worked`, `fresh`); `=off` lets the real one through for either.
 * `?readinessInfo=pain|sleep|steps|score` opens that part's sheet, or the
 * score's. Held in memory only; a release build never writes it.
 */
type DevReadiness = { score: number | null; leg: LegStateId | null; info: ReadinessFocus | null };

let state: DevReadiness = { score: null, leg: null, info: null };
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

/** Asks the gauge to open the sheet for `part` (or `score`); the gauge
 * clears it once opened. Anything else is ignored. */
export function devOpenReadinessInfo(part: string | null): void {
  if (!__DEV__) return;
  if (part == null) set({ info: null });
  else if (isReadinessFocus(part)) set({ info: part });
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
