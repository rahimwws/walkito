import { router } from 'expo-router';
import { useEffect } from 'react';
import { Linking } from 'react-native';

import { devPreviewCancel } from '@/pages/settings';
import { previewNotification } from '@/entities/notifications';
import { currentDay, devClearCheckIn } from '@/entities/program';
import { lockBoost } from '@/entities/offer';
import {
  devPreviewComeback,
  devPreviewHomeOffer,
  devPreviewOfferEnded,
  devPreviewPaywall,
  grantDevAccess,
  setSamplePrices,
} from '@/entities/purchase';
import { devPretendUntested, devPreviewOfferWall } from '@/features/home-tour';
import { armSetup, devRestartHomeTour, finishHomeTour, resetOnboarding } from '@/entities/session';

/** `walkito.dev://?resetOnboarding` puts onboarding back in front. */
const RESET_PARAM = /[?&]resetOnboarding\b/;
/** `walkito.dev://?previewSetup` opens the screens after the first purchase,
 * with the simulator's pretend purchase. The setup page answers
 * `?authPreview=<state>` from there. */
const SETUP_PARAM = /[?&]previewSetup\b/;
/** `walkito.dev://?previewPush=<kind>` sends that notification, picture and
 * all, four seconds later: any ladder kind (`session`, `plan`, `checkin`,
 * `streak`, `retest`, `flare`, `load`, `gait`, `block`, `winback`), or
 * `offer`, `expiry`, `steps`. The win-back takes `&name=` and `&percent=`. */
const PUSH_PARAM = /[?&]previewPush=([\w-]+)/;
const NAME_PARAM = /[?&]name=([^&#]*)/;
const PERCENT_PARAM = /[?&]percent=(\d{1,2})\b/;
/** `walkito.dev://?samplePrices` makes every offering answer with sample
 * prices (the products' US prices), so the paywall and the trial offer draw on
 * a simulator before the products exist; buying one grants the pretend
 * purchase. `?samplePrices=off` goes back to the store. */
const SAMPLE_PARAM = /[?&]samplePrices(?:=(\w+))?\b/;
/** `?previewPaywall`: the three-step paywall again (not skipped, the intro
 * unseen, the pretend purchase and the win-back price taken away). */
const PAYWALL_PARAM = /[?&]previewPaywall\b/;
/** `?previewHomeOffer`: the paywall skipped, the offer screen showing the
 * one-time trial (the name is from when it stood over Home). */
const HOME_OFFER_PARAM = /[?&]previewHomeOffer\b/;
/** `?previewComeback`: skipped, the trial missed, a fresh 15 minutes of the
 * comeback price on the offer screen. */
const COMEBACK_PARAM = /[?&]previewComeback\b/;
/** `?previewOfferEnded`: skipped, the comeback's minutes up, the standard
 * plans on the offer screen. */
const OFFER_ENDED_PARAM = /[?&]previewOfferEnded\b/;
/** `walkito.dev://?previewTour` starts the Home tour from its first stop;
 * `?previewTour=untested` as somebody with no test on record meets it;
 * `?previewTour=done` ends it. */
const TOUR_PARAM = /[?&]previewTour(?:=(\w+))?/;
/** `walkito.dev://?resetCheckIn` leaves today's check-in unanswered again. */
const RESET_CHECKIN_PARAM = /[?&]resetCheckIn\b/;
/** `walkito.dev://?previewOfferWall` raises the offer after the first test
 * over Home (`=off` to drop it); add `previewHomeOffer` for the trial stage. */
const WALL_PARAM = /[?&]previewOfferWall(?:=(\w+))?/;
/** `walkito.dev://?previewCancel` opens Settings with the cancel flow over it,
 * as a yearly subscriber with an improvement to show; `?previewCancel=monthly`
 * as a monthly one. Pretend subscription, sample prices, nothing recorded
 * (`pages/settings/model/cancel-preview.ts`). */
const CANCEL_PARAM = /[?&]previewCancel(?:=(\w+))?/;
/** Settings is pushed once the router has acted on the link itself, which
 * sends it to Home: pushed sooner, Home would land on top of it. */
const CANCEL_PUSH_MS = 400;

function previewCancel(url: string): void {
  const match = CANCEL_PARAM.exec(url);
  if (match == null) return;
  devPreviewCancel(match[1] === 'monthly' ? 'monthly' : 'annual');
  setTimeout(() => {
    try {
      router.push('/settings');
    } catch {
      // The navigator is not up yet (a cold start from the link): open
      // Settings by hand and the flow comes up over it.
    }
  }, CANCEL_PUSH_MS);
}

function previewPush(url: string): void {
  const kind = PUSH_PARAM.exec(url)?.[1];
  if (kind == null) return;
  const name = NAME_PARAM.exec(url)?.[1];
  const percent = PERCENT_PARAM.exec(url)?.[1];
  let decoded: string | undefined;
  try {
    decoded = name != null ? decodeURIComponent(name) : undefined;
  } catch {
    decoded = name;
  }
  void previewNotification(kind, {
    name: decoded,
    percent: percent != null ? Number(percent) : undefined,
  });
}

/**
 * Development links for `xcrun simctl openurl`, so a screen can be reached on
 * the simulator without tapping through to it. `?resetOnboarding` brings the
 * flow back with the answers kept, the way Profile's reset row would without
 * wiping storage; `?previewSetup` opens the screens after the purchase;
 * `?previewPush=<kind>` sends a notification with its picture, to be looked at
 * from the home or lock screen; `?samplePrices[=off]`, `?previewPaywall`,
 * `?previewHomeOffer`, `?previewComeback` and `?previewOfferEnded` set up the
 * paywall and the offers after its "Not now" (see each above); `?previewCancel[=monthly]`
 * opens the cancel flow in Settings. The onboarding page answers
 * `?onboardingStep=<key>`, the setup page `?authPreview=<state>`.
 * The whole body folds away in a release bundle.
 */
export function useDevLinks(): void {
  useEffect(() => {
    if (__DEV__) {
      const onUrl = (url: string | null) => {
        if (url == null) return;
        if (RESET_PARAM.test(url)) resetOnboarding();
        if (SETUP_PARAM.test(url)) {
          grantDevAccess();
          armSetup();
        }
        const sample = SAMPLE_PARAM.exec(url);
        if (sample != null) setSamplePrices(sample[1] !== 'off');
        if (PAYWALL_PARAM.test(url)) {
          lockBoost();
          devPreviewPaywall();
        }
        if (HOME_OFFER_PARAM.test(url)) devPreviewHomeOffer();
        if (COMEBACK_PARAM.test(url)) devPreviewComeback();
        if (OFFER_ENDED_PARAM.test(url)) devPreviewOfferEnded();
        if (RESET_CHECKIN_PARAM.test(url)) devClearCheckIn(currentDay());
        const wall = WALL_PARAM.exec(url);
        if (wall != null) devPreviewOfferWall(wall[1] !== 'off');
        const tour = TOUR_PARAM.exec(url);
        if (tour != null) {
          devPretendUntested(tour[1] === 'untested');
          if (tour[1] === 'done') finishHomeTour();
          else devRestartHomeTour();
        }
        previewCancel(url);
        previewPush(url);
      };
      void Linking.getInitialURL()
        .then(onUrl)
        .catch(() => undefined);
      const subscription = Linking.addEventListener('url', ({ url }) => onUrl(url));
      return () => subscription.remove();
    }
    return undefined;
  }, []);
}
