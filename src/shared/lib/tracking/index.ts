import { requireOptionalNativeModule } from 'expo';
import { Platform } from 'react-native';

import { kv } from '@/shared/lib/storage';

/**
 * App Tracking Transparency: the system's "Allow Walkito to track your
 * activity…" question, asked once, on iOS, early in the first onboarding.
 *
 * Why it is asked at all: with permission, AppsFlyer and RevenueCat receive
 * the advertising identifier, and Meta and other networks can match an
 * install to the ad behind it at the person level, not only through SKAN.
 * Without it everything still works the way it did: SKAN, Apple Ads
 * (AdServices) and the Play Install Referrer.
 *
 * Only the system sheet, never a screen of ours in front of it: App Review
 * rejected 1.0 for a screen before HealthKit with nothing but "Continue".
 * Nothing is offered for saying yes, and nothing changes for saying no.
 *
 * The answer gates AppsFlyer's start (`trackingGate`): AppsFlyer v7 has no
 * "wait for ATT" option any more ("request ATT yourself before init()"), so
 * an install sent before the answer would go without the identifier. The
 * gate is held only for a first launch that will ask, and only so long.
 *
 * Lazily required, like every module added after a dev client was built: a
 * binary without it answers `unavailable` and holds nothing.
 */
export type TrackingStatus = 'granted' | 'denied' | 'undetermined' | 'unavailable';

type Module = typeof import('expo-tracking-transparency');

function native(): Module | null {
  if (Platform.OS !== 'ios') return null;
  if (requireOptionalNativeModule('ExpoTrackingTransparency') == null) return null;
  try {
    return require('expo-tracking-transparency') as Module;
  } catch {
    return null;
  }
}

/** Where the question stands, without asking it. */
export async function trackingStatus(): Promise<TrackingStatus> {
  const att = native();
  if (att == null) return 'unavailable';
  try {
    const { status } = await att.getTrackingPermissionsAsync();
    return status === 'granted' ? 'granted' : status === 'denied' ? 'denied' : 'undetermined';
  } catch {
    return 'unavailable';
  }
}

// ── The gate AppsFlyer waits on ─────────────────────────────────────────────

/** How long a first launch holds AppsFlyer for the answer at most: past
 * this, it starts without the identifier rather than not at all. */
export const TRACKING_WAIT_MS = 120_000;

let gate: Promise<void> = Promise.resolve();
let open: (() => void) | null = null;

/** Resolves once AppsFlyer may start: at once, unless a first launch that
 * will ask is waiting for the answer. */
export function trackingGate(): Promise<void> {
  return gate;
}

function release(): void {
  open?.();
  open = null;
}

/**
 * Holds AppsFlyer's start for the answer, on a launch that will ask: iOS, the
 * module linked, onboarding not finished, and the question never answered.
 * Called once by the app layer before AppsFlyer starts. Anything else opens
 * the gate straight away; so does the timeout.
 */
export function holdForTracking(willAsk: boolean): void {
  if (!willAsk || native() == null) return;
  gate = new Promise<void>((resolve) => {
    open = resolve;
    setTimeout(resolve, TRACKING_WAIT_MS);
  });
  // Already answered (a reinstall keeps the answer): nothing to wait for.
  void trackingStatus().then((status) => {
    if (status !== 'undetermined') release();
  });
}

// ── Asking ──────────────────────────────────────────────────────────────────

const ASKED_KEY = 'tracking/asked';

/**
 * Shows the system question, once in the life of the install, and opens the
 * gate with the answer. Returns the answer, or the status as it stood when
 * there was nothing to ask.
 */
export async function requestTracking(): Promise<TrackingStatus> {
  const att = native();
  if (att == null) {
    release();
    return 'unavailable';
  }
  try {
    const before = await trackingStatus();
    if (before !== 'undetermined' || kv.getBoolean(ASKED_KEY) === true) return before;
    kv.set(ASKED_KEY, true);
    const { status } = await att.requestTrackingPermissionsAsync();
    return status === 'granted' ? 'granted' : 'denied';
  } catch {
    return 'unavailable';
  } finally {
    release();
  }
}
