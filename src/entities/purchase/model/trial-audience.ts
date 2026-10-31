import { useSyncExternalStore } from 'react';

import type { ConversionData } from '@/shared/lib/appsflyer';
import { kv } from '@/shared/lib/storage';

/**
 * Who the first paywall sells the free week to.
 *
 * Somebody who came from a Meta ad (Facebook or Instagram) is shown the annual
 * with its one-week free trial (the `trial` offering); everybody else the
 * annual at its full price from the first day (the `default` offering), as
 * before. Two ways to know it, either is enough:
 *
 * - **AppsFlyer** reports the install as non-organic with a Meta media source.
 *   Reliable on Android (the Play Install Referrer), and on iPhone only for
 *   somebody who allowed tracking: without it AppsFlyer reports a Meta install
 *   as organic, and Meta hears of it only in Apple's aggregate.
 * - **The onboarding's "where did you hear about us"**, answered Instagram or
 *   Facebook. Self-reported, and there for the iPhones AppsFlyer cannot see.
 *
 * Both are kept, so a later launch decides the same way. AppsFlyer starts only
 * once App Tracking Transparency is answered, just before the paywall, so its
 * report may come during the paywall's first steps; the paywall settles on its
 * answer when the plans step shows (`pages/offer`), never after.
 *
 * Whether the first paywall did sell the trial is kept apart from who it is
 * for (`paywallSoldTrial`): the offer screen after a skip offers the trial
 * only to somebody the paywall did not, and an AppsFlyer report arriving
 * after the paywall must not change what it already showed.
 */

const META_INSTALL_KEY = 'purchase/meta-install';
const SOURCE_ANSWER_KEY = 'purchase/source-answer';
const PAYWALL_TRIAL_KEY = 'purchase/paywall-sold-trial';

/** The survey answers that mean a Meta app (`AcquisitionSource` values). */
const META_ANSWERS = new Set(['instagram', 'facebook']);

/** AppsFlyer's media source for Meta is "Facebook Ads"; the rest cover
 * Instagram-named and Meta-named sources set by hand on a link. */
const META_SOURCE = /facebook|instagram|^meta/i;

/** Whether AppsFlyer's conversion data says a Meta ad brought this install:
 * its `is_fb` flag, which AppsFlyer sets on Meta installs only, or a Meta media
 * source. */
export function isMetaInstall(data: ConversionData): boolean {
  if (data.af_status !== 'Non-organic') return false;
  if (data.is_fb === true || data.is_fb === 'true') return true;
  return [data.media_source, data.pid].some((value) => typeof value === 'string' && META_SOURCE.test(value));
}

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

/** Development only (`?trialAudience=meta|organic`): forced, in memory. */
let devForced: boolean | null = null;

/** AppsFlyer's report, kept once it names Meta. Any launch's report will do:
 * a later one describes the same install. */
export function noteInstall(data: ConversionData): void {
  if (!isMetaInstall(data) || kv.getBoolean(META_INSTALL_KEY) === true) return;
  kv.set(META_INSTALL_KEY, true);
  emit();
}

/** The onboarding's "where did you hear about us" answer. */
export function noteSourceAnswer(source: string): void {
  kv.set(SOURCE_ANSWER_KEY, source);
  emit();
}

/** Whether the first paywall sells the annual with its free week. */
export function trialOnFirstPaywall(): boolean {
  if (devForced != null) return devForced;
  if (kv.getBoolean(META_INSTALL_KEY) === true) return true;
  const answer = kv.getString(SOURCE_ANSWER_KEY);
  return answer != null && META_ANSWERS.has(answer);
}

export function useTrialOnFirstPaywall(): boolean {
  return useSyncExternalStore(subscribe, trialOnFirstPaywall, () => false);
}

/** The first paywall's plans showed the trial. */
export function markPaywallSoldTrial(): void {
  kv.set(PAYWALL_TRIAL_KEY, true);
}

/** Whether the first paywall's plans showed the trial, so the offer after a
 * skip goes past it. */
export function paywallSoldTrial(): boolean {
  return kv.getBoolean(PAYWALL_TRIAL_KEY) === true;
}

/** Development only: forget what the paywall showed (`?previewPaywall`). */
export function devForgetPaywallTrial(): void {
  if (!__DEV__) return;
  kv.remove(PAYWALL_TRIAL_KEY);
}

/** Development only (`?trialAudience=meta|organic|off`): answer as somebody
 * from a Meta ad, or as organic; `off` goes back to the real answer. */
export function devSetTrialAudience(kind: 'meta' | 'organic' | 'off'): void {
  if (!__DEV__) return;
  devForced = kind === 'off' ? null : kind === 'meta';
  emit();
}
