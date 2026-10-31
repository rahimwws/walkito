import { useSyncExternalStore } from 'react';
import { AppState } from 'react-native';

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { revokeDevAccess } from './comp';
import { OFFERINGS } from './purchase';
import { devForgetPaywallTrial } from './trial-audience';

/**
 * The paywall, skipped, and what the offer screen shows instead.
 *
 * It is a hard paywall: there is no way into the app without buying. Its
 * "Not now" (`skipPaywall`) does not open the app; it moves the same `offer`
 * screen on from the plans to the offers below (`usePaywallSkipped`, read by
 * `pages/offer`), for somebody onboarded, not entitled and who has never
 * paid. That screen then carries the offer, in stages:
 *
 * 1. **`trial`**: the annual plan with a one-week free trial (the `trial`
 *    offering), offered once. It stays the offer until the person leaves the
 *    app after it has been shown (`markTrialOfferShown`), or a screen calls
 *    `markTrialMissed()` when it is turned down.
 * 2. **`comeback`**: the comeback price (the `offer` offering), for 15 minutes
 *    from the moment the trial was missed (`comebackEndsAt`). A real deadline:
 *    it is stored, so a countdown on screen counts down to the moment the
 *    stage really ends.
 * 3. **`standard`**: after the deadline, the standard plans, for good.
 *
 * Everything is persisted, so a cold start lands on the same stage. Somebody
 * who never skipped is `standard`: the stages are only for the skip.
 *
 * "One-time" and "15 minutes" are claims on screen, and this is what makes them
 * true: the trial is never offered again once it is missed, and the comeback
 * price is gone from this app when its hours are up.
 */

const SKIPPED_KEY = 'purchase/paywall-skipped';
/** `'comeback'` once the trial was missed; absent before. */
const STAGE_KEY = 'purchase/offer-stage';
const TRIAL_SHOWN_KEY = 'purchase/trial-offer-shown';
const COMEBACK_ENDS_KEY = 'purchase/comeback-ends-at';

/**
 * How long the comeback price is offered for, from the trial being missed.
 *
 * Short on purpose (the founder's call): Apple sets no minimum for how long an
 * in-app offer runs, only that what the screen claims is true, and this
 * deadline is real. The push goes out the moment the trial is missed, so a
 * quarter of an hour is enough to answer it.
 */
export const COMEBACK_MINUTES = 15;
const COMEBACK_MS = COMEBACK_MINUTES * 60_000;

/** What the offer screen offers somebody who skipped the paywall. See the
 * note above. */
export type OfferStage = 'trial' | 'comeback' | 'standard';

function readEnd(): number | null {
  const value = kv.getNumber(COMEBACK_ENDS_KEY);
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

let skipped = kv.getBoolean(SKIPPED_KEY) === true;
let missed = kv.getString(STAGE_KEY) === 'comeback';
let trialShown = kv.getBoolean(TRIAL_SHOWN_KEY) === true;
let endsAt: number | null = readEnd();

/**
 * Store sheets open right now: a purchase, a restore, the offer-code sheet.
 *
 * On Android the Play billing sheet is an activity of its own, and React
 * Native reports the app as `background` while it is up. Without this, tapping
 * the trial's button would count as leaving the app and turn the trial into
 * the comeback before the sheet had even answered. Counted by `store.ts`.
 */
let storeSheets = 0;

export function storeSheetOpened(): void {
  storeSheets += 1;
}

export function storeSheetClosed(): void {
  storeSheets = Math.max(0, storeSheets - 1);
}

/** Until when a trip to the background is not leaving (`expectReturn`). */
let excusedUntil = 0;
const EXCUSE_MS = 5_000;

/**
 * The app is about to open something outside itself that the person comes
 * back from — the Terms or the Privacy Policy in the browser from the trial
 * offer. A trip to the background in the next few seconds does not end the
 * trial. Only a few seconds, so a link that failed to open does not excuse a
 * real departure later.
 */
export function expectReturn(): void {
  excusedUntil = Date.now() + EXCUSE_MS;
}

const listeners = new Set<() => void>();

function emit(): void {
  for (const listener of listeners) listener();
}

function persist(): void {
  if (skipped) kv.set(SKIPPED_KEY, true);
  else kv.remove(SKIPPED_KEY);
  if (missed) kv.set(STAGE_KEY, 'comeback');
  else kv.remove(STAGE_KEY);
  if (trialShown) kv.set(TRIAL_SHOWN_KEY, true);
  else kv.remove(TRIAL_SHOWN_KEY);
  if (endsAt != null) kv.set(COMEBACK_ENDS_KEY, endsAt);
  else kv.remove(COMEBACK_ENDS_KEY);
}

/** The trial, missed: the comeback's 15 minutes start now. */
function miss(now: number): void {
  missed = true;
  endsAt = now + COMEBACK_MS;
  persist();
}

// The trial was shown and the app was left without a `background` event
// reaching us (swiped away from the app switcher, or killed while away): it
// was still left, so on this launch the trial is over.
if (skipped && !missed && trialShown) miss(Date.now());

let expiryTimer: ReturnType<typeof setTimeout> | null = null;

/**
 * Re-reads the stage when the comeback's deadline passes with the app open, so
 * the offer on screen changes at the moment the countdown reaches zero. Timers
 * do not run in the background; coming back to the foreground re-reads it too.
 */
function scheduleExpiry(): void {
  if (expiryTimer != null) clearTimeout(expiryTimer);
  expiryTimer = null;
  if (endsAt == null) return;
  const wait = endsAt - Date.now();
  if (wait <= 0 || wait > 2 ** 31 - 1) return;
  expiryTimer = setTimeout(() => {
    expiryTimer = null;
    emit();
  }, wait + 50);
}

let watching = false;

/** Installed with the first subscriber, once for the life of the app. */
function watch(): void {
  if (watching) return;
  watching = true;
  scheduleExpiry();
  AppState.addEventListener('change', (state) => {
    if (state === 'background') {
      // Left the app with the trial shown: it was a one-time offer, and this
      // was the time. A store sheet does not count (see `storeSheets`).
      const excused = Date.now() < excusedUntil;
      excusedUntil = 0;
      if (skipped && !missed && trialShown && storeSheets === 0 && !excused) {
        miss(Date.now());
        scheduleExpiry();
        emit();
      }
    } else if (state === 'active') {
      // A deadline that passed while the app was away.
      scheduleExpiry();
      emit();
    }
  });
}

/** Subscribe to the skip and the stage: fires when either may have changed. */
export function subscribeOfferStage(listener: () => void): () => void {
  watch();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Whether this person skipped the paywall. Synchronous and right on the
 * first frame, like `entitled()`: the offer screen picks what to show with it. */
export function paywallSkipped(): boolean {
  return skipped;
}

/** What the offer screen offers right now. `standard` for anyone who never
 * skipped. */
export function offerStage(now: number = Date.now()): OfferStage {
  if (!skipped) return 'standard';
  if (!missed) return 'trial';
  return endsAt != null && now < endsAt ? 'comeback' : 'standard';
}

/** When the comeback price ends (ms since epoch), while it runs; else null. */
export function comebackEndsAt(now: number = Date.now()): number | null {
  return offerStage(now) === 'comeback' ? endsAt : null;
}

/** The offering each stage sells from (`OFFERINGS`). */
export function offeringForStage(stage: OfferStage): string {
  if (stage === 'trial') return OFFERINGS.trial;
  if (stage === 'comeback') return OFFERINGS.offer;
  return OFFERINGS.standard;
}

/**
 * The paywall's "Not now". The offer screen puts the one-time trial in place
 * of the plans itself (`pages/offer`); the caller does not navigate, and the
 * app stays shut (the root layout's guards do not read this). Tracks
 * `paywall_skipped`, once per person, so a screen must not track it as well.
 */
export function skipPaywall(): void {
  if (skipped) return;
  skipped = true;
  persist();
  track('paywall_skipped');
  emit();
}

/**
 * The trial offer is on screen. From now on, leaving the app ends it (the
 * comeback starts), whether it is still up or was closed in the app.
 */
export function markTrialOfferShown(): void {
  if (!skipped || missed || trialShown) return;
  trialShown = true;
  persist();
}

/**
 * The trial is over without being taken: the comeback price and its 15 minutes
 * start now. Called on leaving the app with the trial shown (here), or by a
 * screen when the trial offer is turned down for good. Once only.
 */
export function markTrialMissed(): void {
  if (!skipped || missed) return;
  miss(Date.now());
  scheduleExpiry();
  emit();
}

export function usePaywallSkipped(): boolean {
  return useSyncExternalStore(subscribeOfferStage, paywallSkipped, () => false);
}

export function useOfferStage(): OfferStage {
  return useSyncExternalStore(subscribeOfferStage, () => offerStage(), () => 'standard' as const);
}

/** `comebackEndsAt()`, as a hook: null once the deadline has passed. */
export function useComebackEndsAt(): number | null {
  return useSyncExternalStore(subscribeOfferStage, () => comebackEndsAt(), () => null);
}

function set(next: { skipped: boolean; missed: boolean; trialShown: boolean; endsAt: number | null }): void {
  skipped = next.skipped;
  missed = next.missed;
  trialShown = next.trialShown;
  endsAt = next.endsAt;
  persist();
  scheduleExpiry();
  emit();
}

/**
 * Development only (`?previewPaywall`): the three-step paywall again. Not
 * skipped, no stage, the simulator's pretend purchase taken away and the intro
 * steps unseen.
 */
export function devPreviewPaywall(): void {
  if (!__DEV__) return;
  revokeDevAccess();
  devForgetPaywallTrial();
  set({ skipped: false, missed: false, trialShown: false, endsAt: null });
}

/** Development only (`?previewHomeOffer`): skipped, with the trial offer
 * not yet shown. */
export function devPreviewHomeOffer(): void {
  if (!__DEV__) return;
  revokeDevAccess();
  set({ skipped: true, missed: false, trialShown: false, endsAt: null });
}

/** Development only (`?previewComeback`): skipped, the trial missed, and a
 * fresh 15 minutes of the comeback price. */
export function devPreviewComeback(): void {
  if (!__DEV__) return;
  revokeDevAccess();
  set({ skipped: true, missed: true, trialShown: true, endsAt: Date.now() + COMEBACK_MS });
}

/** Development only (`?previewOfferEnded`): skipped, and the comeback's
 * minutes are up: the offer screen shows the standard plans. */
export function devPreviewOfferEnded(): void {
  if (!__DEV__) return;
  revokeDevAccess();
  set({ skipped: true, missed: true, trialShown: true, endsAt: Date.now() - 1000 });
}
