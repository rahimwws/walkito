import { router } from 'expo-router';
import { useEffect } from 'react';
import { Linking } from 'react-native';

import { devPreviewCancel, devPreviewLimitedOffer } from '@/pages/settings';
import { devSeedCheckins } from '@/pages/today';
import { devSeedOnFeetWeek, devSetOnFeetWeekState } from '@/pages/progress';
import { devPreviewPassSet } from '@/widgets/pass-checkout';
import { devFirstStep, devPreviewOnFeet, previewNotification } from '@/entities/notifications';
import {
  currentDay,
  devClearCheckIn,
  devForgetMilestones,
  devSetStreak,
  devSetWeekGoal,
  programState,
  startProgram,
} from '@/entities/program';
import { devSeedAnkle, devSeedSelfCheck, setFootCheckMeasured } from '@/entities/foot-check';
import { lockBoost } from '@/entities/offer';
import {
  devPreviewHomeOffer,
  devPreviewPass,
  devPreviewPaywall,
  devSetReviewMode,
  devSetTrialAudience,
  grantDevAccess,
  setSampleCurrency,
  setSampleLineup,
  setSampleMonthlyTrial,
  setSamplePrices,
  setSampleSheetCloses,
} from '@/entities/purchase';
import { getIntake, saveIntake } from '@/entities/profile';
import { devForgetCancelQuestion, devForgetGift, devSetFirstSession, devSetPaywallVariant } from '@/pages/offer';
import { devResetFollowOffer } from '@/features/follow';
import { devPreviewOfferWall } from '@/features/home-tour';
import {
  armSetup,
  completeOnboarding,
  devRestartHomeTour,
  finishHomeTour,
  finishSetup,
  resetOnboarding,
} from '@/entities/session';

/** `walkito.dev://?resetOnboarding` puts onboarding back in front;
 * `?finishOnboarding` takes it away again, answers as they are. */
const RESET_PARAM = /[?&]resetOnboarding\b/;
const FINISH_PARAM = /[?&]finishOnboarding\b/;
/** `walkito.dev://?previewSetup` opens the screens after the first purchase,
 * with the simulator's pretend purchase. The setup page answers
 * `?authPreview=<state>` from there. */
const SETUP_PARAM = /[?&]previewSetup\b/;
/** `?skipSetup` ends those screens as if the last were done: Home. */
const SKIP_SETUP_PARAM = /[?&]skipSetup\b/;
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
 * purchase. `?samplePrices=cancel` makes buying one answer as the store's
 * sheet closed without buying ("What stopped you?", asked again after every
 * `?previewPaywall`). `?samplePrices=off` goes back to the store. */
const SAMPLE_PARAM = /[?&]samplePrices(?:=(\w+))?\b/;
/** `?sampleMonthlyTrial`: the sample `trial` offering holds the monthly with
 * a free week (`walkito_monthly_trial`), as it will once it exists;
 * `=off` takes it away. */
const SAMPLE_MONTHLY_TRIAL_PARAM = /[?&]sampleMonthlyTrial(?:=(\w+))?\b/;
/** `?sampleCurrency=eur|inr|usd`: the sample prices in that storefront's
 * currency, at App Store Connect's own figures. */
const SAMPLE_CURRENCY_PARAM = /[?&]sampleCurrency=(\w+)\b/;
/** `?paywallDefault=monthly_trial|yearly|first_year_2999`: the paywall's
 * lineup, as the `paywall_default_plan` flag would set it; `=off` the flag. */
const PAYWALL_DEFAULT_PARAM = /[?&]paywallDefault=(\w+)\b/;
/** `?previewPaywall`: the three-step paywall again (not skipped, the intro
 * unseen, the pretend purchase and the win-back price taken away). */
const PAYWALL_PARAM = /[?&]previewPaywall\b/;
/** `?firstStep=notify|due|ready`: the first-step routine's morning, now
 * (`devFirstStep`). */
const FIRST_STEP_PARAM = /[?&]firstStep=(notify|due|ready)\b/;
/** `?firstSession=offer`: the first session before the paywall offered
 * again, with the plan started over today, as it is for somebody who has just
 * finished the onboarding; `=done` as if it had been done there (the paywall that carries on
 * from it); `=declined` as if passed on. Read as the paywall opens, so send
 * it before `?previewPaywall`. */
const FIRST_SESSION_PARAM = /[?&]firstSession=(offer|done|declined)\b/;
/** `?trialAudience=meta`: answer as somebody a Meta ad brought, so the first
 * paywall sells the free week; `=organic` as anybody else; `=off` the real
 * answer (AppsFlyer, or the onboarding's source question). */
const TRIAL_AUDIENCE_PARAM = /[?&]trialAudience=(meta|organic|off)\b/;
/** `?previewHomeOffer`: the paywall skipped, so the plans stand over Home
 * once the tour is done (`?previewTour=done`). */
const HOME_OFFER_PARAM = /[?&]previewHomeOffer\b/;
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
/** `walkito.dev://?previewOfferWall` raises the plans that follow the tour
 * over Home (`=off` to drop them). */
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
/** `walkito.dev://?ankleHistory=<n>` writes n ankle measurements a fortnight
 * apart for Progress's "Ankle bend" (`=0` none); `?footCheck=<n>` says the
 * onboarding did n of the Foot Check's five, for the paywall's first screen
 * (`=0` none). */
const ANKLE_HISTORY_PARAM = /[?&]ankleHistory=(\d{1,2})\b/;
const FOOT_CHECK_PARAM = /[?&]footCheck=(\d)\b/;
/** `?footCheckHeel=left|right|both|unsure` is the heel answer Progress's
 * "Ankle bend" opens on (`=off` none). */
const FOOT_CHECK_HEEL_PARAM = /[?&]footCheckHeel=(left|right|both|unsure|off)\b/;
/** `?footCheckToe=yes|no|unsure` is the big toe answer the paywall reads back
 * (the saved answers' `miniTest.arch`); `=off` none. */
const FOOT_CHECK_TOE_PARAM = /[?&]footCheckToe=(yes|no|unsure|off)\b/;

/** Development only: the big toe answer in the saved answers, as the
 * onboarding writes it, or none. */
function devSeedToe(arch: 'yes' | 'no' | 'unsure' | 'off'): void {
  const intake = getIntake() ?? {
    pain: [],
    side: null,
    sport: null,
    runner: null,
    goal: null,
    challenge: null,
    load: null,
    sessionsPerWeek: null,
    sex: null,
    age: null,
    weightKg: null,
    shoe: null,
    watch: null,
    completedAt: Date.now(),
  };
  saveIntake({ ...intake, miniTest: arch === 'off' ? null : { arch, balanceLeft: null, balanceRight: null } });
}
/** `?seedCheckins` writes thirteen days of check-ins before today (nine
 * answered), for Progress's counts. `?seedOnFeetWeek` fills "Your week on your feet" with sample
 * Health days; `?onFeetWeek=connect|waiting` forces its empty states
 * (`=off` the real data). */
const SEED_CHECKINS_PARAM = /[?&]seedCheckins\b/;
const SEED_ON_FEET_WEEK_PARAM = /[?&]seedOnFeetWeek\b/;
const ON_FEET_WEEK_PARAM = /[?&]onFeetWeek=(connect|waiting|off)\b/;
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
      const onUrl = (url: string | null | undefined) => {
        if (url == null) return;
        if (RESET_PARAM.test(url)) resetOnboarding();
        if (FINISH_PARAM.test(url)) completeOnboarding();
        if (SETUP_PARAM.test(url)) {
          grantDevAccess();
          armSetup();
        }
        if (SKIP_SETUP_PARAM.test(url)) {
          grantDevAccess();
          finishSetup();
        }
        const sample = SAMPLE_PARAM.exec(url);
        if (sample != null) {
          setSamplePrices(sample[1] !== 'off');
          setSampleSheetCloses(sample[1] === 'cancel' || sample[1] === 'nextcancel');
          setSampleLineup(sample[1] === 'next' || sample[1] === 'nextcancel');
        }
        const monthlyTrial = SAMPLE_MONTHLY_TRIAL_PARAM.exec(url);
        if (monthlyTrial != null) setSampleMonthlyTrial(monthlyTrial[1] !== 'off');
        const currency = SAMPLE_CURRENCY_PARAM.exec(url);
        if (currency != null) setSampleCurrency(currency[1]);
        const lineup = PAYWALL_DEFAULT_PARAM.exec(url);
        if (lineup != null) devSetPaywallVariant(lineup[1]);
        const first = FIRST_SESSION_PARAM.exec(url);
        if (first != null) {
          if (first[1] === 'offer') startProgram(programState());
          devSetFirstSession(first[1] as 'offer' | 'done' | 'declined');
        }
        const audience = TRIAL_AUDIENCE_PARAM.exec(url);
        if (audience != null) devSetTrialAudience(audience[1] as 'meta' | 'organic' | 'off');
        if (PAYWALL_PARAM.test(url)) {
          lockBoost();
          devPreviewPaywall();
          devForgetCancelQuestion();
          devForgetGift();
        }
        const firstStep = FIRST_STEP_PARAM.exec(url);
        if (firstStep != null) void devFirstStep(firstStep[1] as 'notify' | 'due' | 'ready');
        if (HOME_OFFER_PARAM.test(url)) devPreviewHomeOffer();
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
        const ankles = ANKLE_HISTORY_PARAM.exec(url);
        if (ankles != null) devSeedAnkle(Number(ankles[1]));
        const footCheck = FOOT_CHECK_PARAM.exec(url);
        if (footCheck != null) setFootCheckMeasured(Number(footCheck[1]));
        const footCheckHeel = FOOT_CHECK_HEEL_PARAM.exec(url);
        if (footCheckHeel != null) devSeedSelfCheck(footCheckHeel[1] as 'left' | 'right' | 'both' | 'unsure' | 'off');
        const footCheckToe = FOOT_CHECK_TOE_PARAM.exec(url);
        if (footCheckToe != null) devSeedToe(footCheckToe[1] as 'yes' | 'no' | 'unsure' | 'off');
        if (SEED_CHECKINS_PARAM.test(url)) devSeedCheckins();
        if (SEED_ON_FEET_WEEK_PARAM.test(url)) devSeedOnFeetWeek();
        const onFeetWeek = ON_FEET_WEEK_PARAM.exec(url);
        if (onFeetWeek != null) devSetOnFeetWeekState(onFeetWeek[1] as 'connect' | 'waiting' | 'off');
        const pass = PASS_PARAM.exec(url);
        if (pass != null) devPreviewPass(pass[1] as 'ending' | 'ended' | 'off');
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
