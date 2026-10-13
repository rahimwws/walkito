import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

const KEY = 'session/home-tour';
const STEP_KEY = 'session/home-tour-step';

/**
 * The tour of Home that walks somebody new to their first test.
 *
 * `off` for everyone from before it, so nobody already using the app meets
 * it; `armed` when the setup after a purchase ends (`finishSetup`) or the
 * paywall is skipped (`armHomeTour` from the offer page); `done` once the
 * first test is on record. While `armed`, Home is covered by the tour, and its
 * last step holds until the test is taken: the test is the one thing open.
 *
 * Read at module scope from MMKV, like `onboarded`, so the first paint knows.
 */
export type HomeTourState = 'off' | 'armed' | 'done';

let state: HomeTourState = (kv.getString(KEY) as HomeTourState | undefined) ?? 'off';
/** The step reached, 0 to 2, so a relaunch mid-tour picks it up there. */
let step = kv.getNumber(STEP_KEY) ?? 0;
const subscribers = new Set<() => void>();

function emit(): void {
  for (const listener of subscribers) listener();
}

function subscribe(listener: () => void): () => void {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

export function homeTourState(): HomeTourState {
  return state;
}

export function homeTourStep(): number {
  return step;
}

/** Armed once: a tour already done is never shown again. */
export function armHomeTour(): void {
  if (state !== 'off') return;
  state = 'armed';
  step = 0;
  kv.set(KEY, state);
  kv.set(STEP_KEY, step);
  emit();
}

export function setHomeTourStep(next: number): void {
  if (next === step) return;
  step = next;
  kv.set(STEP_KEY, step);
  emit();
}

export function finishHomeTour(): void {
  if (state === 'done') return;
  state = 'done';
  kv.set(KEY, state);
  emit();
}

/** Development only (`?previewTour`): the tour from its first step. */
export function devRestartHomeTour(): void {
  if (!__DEV__) return;
  state = 'armed';
  step = 0;
  kv.set(KEY, state);
  kv.set(STEP_KEY, step);
  emit();
}

export function useHomeTourState(): HomeTourState {
  return useSyncExternalStore(subscribe, homeTourState, homeTourState);
}

export function useHomeTourStep(): number {
  return useSyncExternalStore(subscribe, homeTourStep, homeTourStep);
}
