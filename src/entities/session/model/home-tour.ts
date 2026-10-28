import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

const KEY = 'session/home-tour';
const STEP_KEY = 'session/home-tour-step';
const STAGE_KEY = 'session/home-tour-stage';

/**
 * The first minutes on Home for somebody new: a two-minute first session,
 * then a short tour of the screen.
 *
 * `off` for everyone from before it, so nobody already using the app meets
 * it; `armed` when the setup after a purchase ends (`finishSetup`) or the
 * paywall is skipped (`armHomeTour` from the offer page); `done` once the
 * tour's last stop is tapped. While `armed`, Home is covered: by the "Day 1"
 * card until its session is finished (stage `day1`), then by the tour (stage
 * `tour`). The first test is not part of it any more: it is due the day after
 * (see `keepTestOffToday` in `entities/program`).
 *
 * Read at module scope from MMKV, like `onboarded`, so the first paint knows.
 */
export type HomeTourState = 'off' | 'armed' | 'done';

/**
 * Which half of an armed tour is up: the day-one session's card, or the
 * tour's stops after it.
 */
export type HomeTourStage = 'day1' | 'tour';

let state: HomeTourState = (kv.getString(KEY) as HomeTourState | undefined) ?? 'off';
/** The step reached, 0 to 2, so a relaunch mid-tour picks it up there. */
let step = kv.getNumber(STEP_KEY) ?? 0;
/**
 * Null for a tour armed by the build before the day-one session, which
 * stored no stage. The tour feature settles it from whether today's session
 * is done; this slice cannot read the plan, which is another entity.
 */
let stage: HomeTourStage | null = readStage();
const subscribers = new Set<() => void>();

function readStage(): HomeTourStage | null {
  const raw = kv.getString(STAGE_KEY);
  return raw === 'day1' || raw === 'tour' ? raw : null;
}

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

export function homeTourStage(): HomeTourStage | null {
  return stage;
}

/** Armed once: a tour already done is never shown again. It starts on the
 * day-one session. */
export function armHomeTour(): void {
  if (state !== 'off') return;
  state = 'armed';
  stage = 'day1';
  step = 0;
  kv.set(KEY, state);
  kv.set(STAGE_KEY, stage);
  kv.set(STEP_KEY, step);
  emit();
}

export function setHomeTourStep(next: number): void {
  if (next === step) return;
  step = next;
  kv.set(STEP_KEY, step);
  emit();
}

/** On to the other half. A new stage starts from its first step. */
export function setHomeTourStage(next: HomeTourStage): void {
  if (next === stage) return;
  stage = next;
  step = 0;
  kv.set(STAGE_KEY, stage);
  kv.set(STEP_KEY, step);
  emit();
}

export function finishHomeTour(): void {
  if (state === 'done') return;
  state = 'done';
  kv.set(KEY, state);
  emit();
}

/** Set by `?previewTour` in development: the card is shown even on a phone
 * with history, which a real first run skips. This launch only. */
let devForced = false;

/** Development only: the day-one card was asked for by `?previewTour`. */
export function homeTourForced(): boolean {
  return devForced;
}

/** Development only (`?previewTour`, `?previewTour=tour`): armed again, from
 * the day-one card or from the tour's first stop. */
export function devRestartHomeTour(at: HomeTourStage = 'day1'): void {
  if (!__DEV__) return;
  devForced = true;
  state = 'armed';
  stage = at;
  step = 0;
  kv.set(KEY, state);
  kv.set(STAGE_KEY, stage);
  kv.set(STEP_KEY, step);
  emit();
}

export function useHomeTourState(): HomeTourState {
  return useSyncExternalStore(subscribe, homeTourState, homeTourState);
}

export function useHomeTourStep(): number {
  return useSyncExternalStore(subscribe, homeTourStep, homeTourStep);
}

export function useHomeTourStage(): HomeTourStage | null {
  return useSyncExternalStore(subscribe, homeTourStage, homeTourStage);
}
