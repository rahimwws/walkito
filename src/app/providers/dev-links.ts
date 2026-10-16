import { router } from 'expo-router';
import { useEffect } from 'react';
import { Linking } from 'react-native';

import { devPreviewCancel, devPreviewLimitedOffer } from '@/pages/settings';
import { devOpenReadinessInfo, devSetLegState, devSetReadinessScore } from '@/pages/home';
import { devPreviewPassSet } from '@/widgets/pass-checkout';
import { devPreviewOnFeet, previewNotification } from '@/entities/notifications';
import { currentDay, devClearCheckIn, devForgetMilestones, devSetStreak, devSetWeekGoal } from '@/entities/program';
import { lockBoost } from '@/entities/offer';
import {
  devPreviewComeback,
  devPreviewHomeOffer,
  devPreviewOfferEnded,
  devPreviewPass,
  devPreviewPaywall,
  devSetReviewMode,
  grantDevAccess,
  setSamplePrices,
} from '@/entities/purchase';
import { devResetFollowOffer } from '@/features/follow';
import { devPreviewOfferWall } from '@/features/home-tour';
import { armSetup, completeOnboarding, devRestartHomeTour, finishHomeTour, resetOnboarding } from '@/entities/session';

/** `walkito.dev://?resetOnboarding` puts onboarding back in front;
 * `?finishOnboarding` takes it away again, answers as they are. */
const RESET_PARAM = /[?&]resetOnboarding\b/;
const FINISH_PARAM = /[?&]finishOnboarding\b/;
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
/** `walkito.dev://?previewTour` arms the first run again from the "Day 1"
 * card; `?previewTour=tour` from the tour's first stop, past the session;
 * `?previewTour=done` ends it. */
const TOUR_PARAM = /[?&]previewTour(?:=(\w+))?/;
/** `walkito.dev://?previewMilestone` forgets the streak milestones already
 * shown, so the one the streak stands on rises on Home again (with a streak of
 * 3, 7, 10, 30 or 100). */
const MILESTONE_PARAM = /[?&]previewMilestone\b/;
/** `walkito.dev://?resetCheckIn` leaves today's check-in unanswered again. */
const RESET_CHECKIN_PARAM = /[?&]resetCheckIn\b/;
/** `walkito.dev://?previewOfferWall` raises the offer that follows the tour
 * over Home (`=off` to drop it); add `previewHomeOffer` for the trial stage. */
const WALL_PARAM = /[?&]previewOfferWall(?:=(\w+))?/;
/** `walkito.dev://?previewCancel` opens Settings with the cancel flow over it,
 * as a yearly subscriber with an improvement to show; `?previewCancel=monthly`
 * as a monthly one; `?previewCancel=budget` straight on the budget answer's
 * 3-month pass. Pretend subscription, sample prices, nothing recorded
 * (`pages/settings/model/cancel-preview.ts`). */
const CANCEL_PARAM = /[?&]previewCancel(?:=(\w+))?/;
/** `walkito.dev://?previewLimitedOffer` opens Settings with the review
 * account's "Special offers" sheet over it: the limited offer's three cards,
 * with the sample prices turned on. */
const LIMITED_OFFER_PARAM = /[?&]previewLimitedOffer\b/;
/** `walkito.dev://?previewPassSet` raises the pass checkout's "Your 3 months
 * are set", as a yearly subscriber would see it after buying a pass. */
const PASS_SET_PARAM = /[?&]previewPassSet\b/;
/** `walkito.dev://?previewReviewMode` turns review mode on on this phone, as
 * the server sets it on the App Review account (`=off` to stop): "Manage
 * subscription" over a stand-in, and "Special offers", in Settings. */
const REVIEW_MODE_PARAM = /[?&]previewReviewMode(?:=(\w+))?/;
/** `walkito.dev://?previewPass=ending` a pretend 3-month pass ending in five
 * days (Home's card); `=ended` one that ended yesterday, with the pretend
 * purchase taken away (the expiry screen); `=off` none. */
const PASS_PARAM = /[?&]previewPass=(ending|ended|off)\b/;
/** `walkito.dev://?previewFollow` counts three days of use and forgets that
 * the Instagram sheet was offered: Home raises it 2.5 s later. */
const FOLLOW_PARAM = /[?&]previewFollow\b/;
/** `walkito.dev://?previewOnFeet` sends the four-hours-on-your-feet push in
 * five seconds; leave the app to see it arrive, tap it to open the routine. */
const ON_FEET_PARAM = /[?&]previewOnFeet\b/;
/** `walkito.dev://?readinessScore=NN` forces Home's readiness value for
 * screenshots, `=off` lets the real one through. `?legState=<id>` forces what
 * Walkito says about the legs (an id from `LEG_STATES`, e.g. `sore`,
 * `worked`, `fresh`), `=off` back to the real one. */
const READINESS_SCORE_PARAM = /[?&]readinessScore=(\d{1,3}|off)\b/;
const LEG_STATE_PARAM = /[?&]legState=([a-z]+)/;
/** `walkito.dev://?readinessInfo=pain|sleep|steps|score` opens the small
 * sheet for that part of Home's readiness score, or for the score, for
 * screenshots. */
const READINESS_INFO_PARAM = /[?&]readinessInfo=(pain|sleep|steps|score)\b/;
/** Streak and weekly goal screenshots, in memory only (`=off` for each):
 * `?streakPreview=<n>` a streak of n with this week's days up to today a mix
 * of check-in and full days; `?freezes=<n>` the banked freezes (the header
 * chip and the sheet); `?longestStreak=<n>` the longest run, which picks
 * Walkito's accessories (7 shoe, 14 medal, 30 trophy, 100 crown);
 * `?weekGoal=<done>/<goal>[/<weeks in a row>]` the line under the week. */
const STREAK_PREVIEW_PARAM = /[?&]streakPreview=(\d{1,4}|off)\b/;
const FREEZES_PARAM = /[?&]freezes=(\d{1,2}|off)\b/;
const LONGEST_PARAM = /[?&]longestStreak=(\d{1,4}|off)\b/;
const WEEK_GOAL_PARAM = /[?&]weekGoal=(?:(\d{1,2})\/(\d{1,2})(?:\/(\d{1,3}))?|(off)\b)/;
/** Settings is pushed once the router has acted on the link itself, which
 * sends it to Home: pushed sooner, Home would land on top of it. */
const CANCEL_PUSH_MS = 400;

/** Settings, pushed once the router has acted on the link (see above). */
function pushSettings(): void {
  setTimeout(() => {
    try {
      router.push('/settings');
    } catch {
      // The navigator is not up yet (a cold start from the link): open
      // Settings by hand and the sheet comes up over it.
    }
  }, CANCEL_PUSH_MS);
}

function previewCancel(url: string): void {
  const match = CANCEL_PARAM.exec(url);
  if (match == null) return;
  const budget = match[1] === 'budget';
  devPreviewCancel(match[1] === 'monthly' ? 'monthly' : 'annual', budget ? 'budget' : null);
  pushSettings();
}

function previewLimitedOffer(url: string): void {
  if (!LIMITED_OFFER_PARAM.test(url)) return;
  setSamplePrices(true);
  devPreviewLimitedOffer();
  pushSettings();
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

/** `?streakPreview`, `?freezes`, `?longestStreak` and `?weekGoal` (see above). */
function previewStreak(url: string): void {
  const count = (match: RegExpExecArray | null) =>
    match == null ? undefined : match[1] === 'off' ? null : Number(match[1]);
  const current = count(STREAK_PREVIEW_PARAM.exec(url));
  const freezes = count(FREEZES_PARAM.exec(url));
  const longest = count(LONGEST_PARAM.exec(url));
  if (current !== undefined || freezes !== undefined || longest !== undefined) {
    devSetStreak({
      ...(current !== undefined ? { current } : {}),
      ...(freezes !== undefined ? { freezes } : {}),
      ...(longest !== undefined ? { longest } : {}),
    });
  }
  const goal = WEEK_GOAL_PARAM.exec(url);
  if (goal != null) {
    devSetWeekGoal(
      goal[4] === 'off'
        ? null
        : {
            done: Number(goal[1]),
            goal: Number(goal[2]),
            ...(goal[3] != null ? { weeksInARow: Number(goal[3]) } : {}),
          },
    );
  }
}

/**
 * Development links for `xcrun simctl openurl`, so a screen can be reached on
 * the simulator without tapping through to it. `?resetOnboarding` brings the
 * flow back with the answers kept, the way Profile's reset row would without
 * wiping storage; `?previewSetup` opens the screens after the purchase;
 * `?previewPush=<kind>` sends a notification with its picture, to be looked at
 * from the home or lock screen; `?samplePrices[=off]`, `?previewPaywall`,
 * `?previewHomeOffer`, `?previewComeback` and `?previewOfferEnded` set up the
 * paywall and the offers after its "Not now" (see each above); `?previewCancel[=monthly|budget]`
 * opens the cancel flow in Settings; `?previewLimitedOffer`, `?previewPassSet`,
 * `?previewPass=ending|ended|off` and `?previewReviewMode[=off]` the 3-month
 * pass's screens; `?streakPreview=<n>`, `?freezes=<n>`, `?longestStreak=<n>`
 * and `?weekGoal=<done>/<goal>[/<weeks>]` the streak and the weekly goal. The onboarding page answers
 * `?onboardingStep=<key>`, the setup page `?authPreview=<state>`.
 * The whole body folds away in a release bundle.
 */
export function useDevLinks(): void {
  useEffect(() => {
    if (__DEV__) {
      const onUrl = (url: string | null) => {
        if (url == null) return;
        if (RESET_PARAM.test(url)) resetOnboarding();
        if (FINISH_PARAM.test(url)) completeOnboarding();
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
        if (MILESTONE_PARAM.test(url)) devForgetMilestones();
        const wall = WALL_PARAM.exec(url);
        if (wall != null) devPreviewOfferWall(wall[1] !== 'off');
        const tour = TOUR_PARAM.exec(url);
        if (tour != null) {
          if (tour[1] === 'done') finishHomeTour();
          else devRestartHomeTour(tour[1] === 'tour' ? 'tour' : 'day1');
        }
        const review = REVIEW_MODE_PARAM.exec(url);
        if (review != null) devSetReviewMode(review[1] !== 'off');
        if (PASS_SET_PARAM.test(url)) devPreviewPassSet();
        if (FOLLOW_PARAM.test(url)) devResetFollowOffer();
        if (ON_FEET_PARAM.test(url)) void devPreviewOnFeet();
        const pass = PASS_PARAM.exec(url);
        if (pass != null) devPreviewPass(pass[1] as 'ending' | 'ended' | 'off');
        const forced = READINESS_SCORE_PARAM.exec(url);
        if (forced != null) devSetReadinessScore(forced[1] === 'off' ? null : Number(forced[1]));
        const leg = LEG_STATE_PARAM.exec(url);
        if (leg != null) devSetLegState(leg[1] === 'off' ? null : leg[1]);
        const info = READINESS_INFO_PARAM.exec(url);
        if (info != null) devOpenReadinessInfo(info[1]);
        previewStreak(url);
        previewLimitedOffer(url);
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
