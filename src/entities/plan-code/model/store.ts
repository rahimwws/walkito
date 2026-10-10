import { useSyncExternalStore } from 'react';

import { decodePlanCode, type PlanCodeParams } from '@/shared/lib/plan-code';
import { kv } from '@/shared/lib/storage';

/**
 * The plan code from ChatGPT or Claude this phone has been handed, and where
 * it is in its life.
 *
 * - `pending`: it arrived by link before onboarding was done. Onboarding takes
 *   it up as soon as it is on screen, prefills from it and marks it redeemed.
 * - `redeemed`: onboarding was prefilled from it. The paywall reads it for its
 *   one personal line.
 *
 * On disk, so a link that cold-starts the app survives the splash and the
 * first render, and the paywall can still say "your plan" after a relaunch.
 * Only the code is kept; it holds the plan's settings and nothing about the
 * person (see `shared/lib/plan-code`).
 */

export type PlanCodeStatus = 'pending' | 'redeemed';

export type HeldPlanCode = {
  code: string;
  status: PlanCodeStatus;
  params: PlanCodeParams;
};

const KEY = 'planCode/held';

function read(): HeldPlanCode | null {
  try {
    const raw = kv.getString(KEY);
    if (raw == null) return null;
    const parsed = JSON.parse(raw) as { code?: unknown; status?: unknown };
    if (typeof parsed.code !== 'string') return null;
    if (parsed.status !== 'pending' && parsed.status !== 'redeemed') return null;
    const params = decodePlanCode(parsed.code);
    return params == null ? null : { code: parsed.code, status: parsed.status, params };
  } catch {
    return null;
  }
}

let held: HeldPlanCode | null = read();
const listeners = new Set<() => void>();

function write(next: HeldPlanCode): void {
  held = next;
  kv.set(KEY, JSON.stringify({ code: next.code, status: next.status }));
  for (const listener of listeners) listener();
}

export function subscribePlanCode(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** A code waiting for onboarding, or null. */
export function pendingPlanCode(): HeldPlanCode | null {
  return held?.status === 'pending' ? held : null;
}

/** The code onboarding was prefilled from, or null. */
export function redeemedPlanCode(): HeldPlanCode | null {
  return held?.status === 'redeemed' ? held : null;
}

/** Keeps a valid code for onboarding to take up. False for anything that is
 * not one, which is never stored. */
export function holdPlanCode(code: string): boolean {
  const params = decodePlanCode(code);
  if (params == null) return false;
  write({ code, status: 'pending', params });
  return true;
}

/** Records that onboarding was prefilled from this code. Returns its
 * parameters, or null when it is not a valid code. */
export function markPlanCodeRedeemed(code: string): PlanCodeParams | null {
  const params = decodePlanCode(code);
  if (params == null) return null;
  write({ code, status: 'redeemed', params });
  return params;
}

function snapshot(): HeldPlanCode | null {
  return held;
}

export function useHeldPlanCode(): HeldPlanCode | null {
  return useSyncExternalStore(subscribePlanCode, snapshot, snapshot);
}
