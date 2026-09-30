import { useSyncExternalStore } from 'react';

/**
 * Something outside the tabs asking the program to open — an email button.
 *
 * One-shot and in memory, the same shape as the retest and protocol requests:
 * the asker sets it and routes to Home, `ProgramPage` opens the overlay, acts
 * on it and clears it. It cannot be a call on `useProgram()` because the
 * provider lives in the tabs layout, and the link arrives before the tabs have
 * mounted — or while the user is somewhere else entirely.
 *
 * A request older than two minutes is ignored: a link opened by someone who
 * then met the paywall or onboarding must not start a session the next time
 * the plan happens to mount.
 */

export type ProgramRequest =
  /** Today's session, started. `minutes` preselects a shorter one. */
  | { kind: 'today'; minutes?: 3 | 5 | 10 }
  /** The plan, open, nothing started. */
  | { kind: 'plan' }
  /** Today's test, if today has one; the plan otherwise. */
  | { kind: 'test' };

const FRESH_MS = 2 * 60 * 1000;

let pending: { request: ProgramRequest; at: number } | null = null;
const listeners = new Set<() => void>();

export function requestProgram(request: ProgramRequest): void {
  pending = { request, at: Date.now() };
  for (const listener of listeners) listener();
}

export function clearProgramRequest(): void {
  pending = null;
  for (const listener of listeners) listener();
}

/** The pending request, or null when there is none or it has gone stale. */
export function useProgramRequest(): ProgramRequest | null {
  const current = useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => pending,
    () => null,
  );
  if (current == null || Date.now() - current.at > FRESH_MS) return null;
  return current.request;
}
