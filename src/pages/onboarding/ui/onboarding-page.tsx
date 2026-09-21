import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Keyboard, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import Animated, {
  Easing,
  FadeIn,
  ReduceMotion,
  SlideInDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { QUESTION_LINE_MS, TypedText } from '@/shared/ui/typed-text';
import { type HealthSummary } from '@/entities/health';
import { armOffer } from '@/entities/offer';
import {
  REFERRAL_CODE_LENGTH,
  REFERRAL_DISCOUNT_PERCENT,
  normalise,
  redeem,
  type RedeemResult,
} from '@/entities/referral';
import { firstName, setProfileEmail, setProfileName } from '@/entities/profile';
import { completeOnboarding, signInWithApple } from '@/entities/session';
import { Glow } from '@/shared/ui/glow';
import { PRIMARY_BUTTON_HEIGHT, PrimaryButton } from '@/shared/ui/primary-button';

import { TESTIMONIALS } from '../config/testimonials';
import { activityFor, loadQuestionFor, withName, type SportKey } from '../model/personalise';
import { recordPainMap, type FootSide, type FootZone } from '@/entities/pain-map';

import { planSummary } from '../model/plan-summary';
import { PLANS, recommendedIndex } from '../model/plans';
import { STEPS, STEP_COUNT, stepAfter, type OnboardingStep } from '../model/steps';
import { buildingLines } from '../model/reflection';
import { BuildingStep } from './building-step';
import { WatchSyncStep } from './watch-sync-step';
import { ChoiceStep } from './choice-step';
import { ContractStep } from './contract-step';
import { PainMapStep } from './pain-map-step';
import { PlanStep } from './plan-step';
import { SexStep } from './sex-step';
import { ReferralStep } from './referral-step';
import { SocialProofStep } from './social-proof-step';
import { SizeStep, type SizeUnit } from './size-step';
import { HealthStep } from './health-step';
import { IntroStep } from './intro-step';
import { MeasureStep } from './measure-step';
import { NameStep } from './name-step';
import { NotifyStep } from './notify-step';
import { WelcomePage } from '@/pages/welcome';
import { StepProgress } from './step-progress';

/** Where the foot map sits, so the progress bar can leave it out of the count. */
const PAIN_MAP_INDEX = STEPS.findIndex((step) => step.kind === 'pain-map');

const SIDE_PAD = 24;
/** Square, matching the primary button's height so the pair reads as one bar. */
const BACK_SIZE = 76;

/** The two halves of a step change. The exit is quicker than the entrance —
 * exits should get out of the way, entrances should feel like arriving. */
const EXIT_MS = 130;
const ENTER_MS = 240;
/** How far a question slides. Enough to read as direction, not as a page. */
const SLIDE = 28;
/** The sub-line trails the question rather than landing with it, so the eye
 * has somewhere to go once the heading has typed. Short of the full typing
 * sweep on purpose — waiting for the whole question would stall the screen. */
const BLURB_DELAY_MS = 220;
/** How many presses the social screen costs before it hands over to the offer. */
const TESTIMONIAL_COUNT = TESTIMONIALS.length;

type MeasureAnswer = { unit: string; fields: Record<string, string> };
type Answer = string | string[] | MeasureAnswer;
type Answers = Record<string, Answer>;

function seedMeasure(step: Extract<OnboardingStep, { kind: 'measure' }>): MeasureAnswer {
  const unit = step.units[0];
  const fields: Record<string, string> = {};
  for (const field of unit.fields) fields[field.key] = field.initial;
  return { unit: unit.value, fields };
}

function initialAnswers(): Answers {
  const seed: Answers = {};
  for (const step of STEPS) {
    if (step.kind === 'measure') seed[step.key] = seedMeasure(step);
  }
  return seed;
}

/**
 * The onboarding flow: fifteen screens, one surface.
 *
 * The whole thing is a single screen that swaps its contents rather than a
 * stack of routes. The progress bar, the button bar, and the safe-area padding
 * are the same objects the whole way through, so they hold perfectly still
 * while only the question moves — which is what makes fifteen screens feel
 * like one continuous conversation instead of a form with fifteen pages. It
 * also puts the transition under our control rather than the navigator's.
 *
 * The order is deliberate and is the point of the flow: every screen either
 * tells the user something about themselves or shows what the app will do for
 * them. It ends on the plan being built — a photograph, a line that fills, and
 * one button into the app — so the last thing the flow does is hand over
 * something made out of the answers rather than ask for anything.
 */
export function OnboardingPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  /** Seeded at the middle of the EU range — the ruler has to start somewhere,
   * and an unset ruler would have nothing under the needle. */
  const [sizeUnit, setSizeUnit] = useState<SizeUnit>('eu');
  const [size, setSize] = useState(42);
  /** Null until the Health sheet has been answered; nulls inside it mean the
   * user declined that particular type, which is a valid outcome. */
  const [health, setHealth] = useState<HealthSummary | null>(null);
  /** Null until the notification sheet has been answered; false means the user
   * declined, which the flow carries on from exactly as it does for Health. */
  const [notify, setNotify] = useState<boolean | null>(null);
  /** The welcome screen introduces itself before it asks for anything, so its
   * CTA stays out until the sequence has played. */
  const [introReady, setIntroReady] = useState(false);
  /** Which of the two plan lengths is showing. Null until the screen is
   * reached, so it can open on whatever the answers recommend by then rather
   * than on a choice made before the questions were asked. */
  /** Which review the social screen is showing. Lives here rather than inside
   * that step because the shared button bar is what pages it. */
  const [review, setReview] = useState(0);
  /**
   * The foot map. Right by default — most people never change it, and an
   * unselected control reads as one more thing being asked of them.
   */
  const [side, setSide] = useState<FootSide>('right');
  const [zones, setZones] = useState<readonly FootZone[]>([]);
  const [zoneError, setZoneError] = useState<string | null>(null);
  /** Peaks each time the welcome character lands on the button. Owned here
   * because the button is the page's; the intro step only drives it. */
  const ctaSquash = useSharedValue(0);
  /** True while Apple's sheet is up, so a second tap cannot open a second one. */
  const [authing, setAuthing] = useState(false);
  /** Apple came back with a real failure — not a cancel, and not a device that
   * cannot offer it. The intro screen says so and the flow holds, because
   * advancing silently would look exactly like a sign-in that worked. */
  const [signInFailed, setSignInFailed] = useState(false);
  /** The invite code as typed, and what came of trying it. Held here rather
   * than in the step so a failed attempt survives the step's own re-renders. */
  const [referralCode, setReferralCode] = useState('');
  const [referralNote, setReferralNote] = useState<string | null>(null);
  const [referralGood, setReferralGood] = useState(false);
  const [redeeming, setRedeeming] = useState(false);

  /** Whether the contract has been signed, and how far its stamp has come down. */
  const [signed, setSigned] = useState(false);
  const [drawing, setDrawing] = useState(false);
  /** True from the moment the contract's button is pressed until its ceremony
   * has played out. The step itself says when that is. */
  const [sealing, setSealing] = useState(false);
  const stamp = useSharedValue(0);

  const step = STEPS[index];
  const answer = answers[step.key];

  /** Everything after the name step addresses the user directly, and the
   * questions after the sport step are phrased in that sport's language. */
  const name = typeof answers.name === 'string' ? answers.name : '';
  const sport = Array.isArray(answers.sport) ? (answers.sport[0] ?? null) : null;
  const sex = Array.isArray(answers.sex) ? (answers.sex[0] ?? null) : null;
  const load = loadQuestionFor(sport);
  const isLast = index === STEP_COUNT - 1;

  const pain = Array.isArray(answers.pain) ? answers.pain : [];
  const loadAnswer = Array.isArray(answers.load) ? answers.load : [];

  const runner = Array.isArray(answers.runner) ? (answers.runner[0] ?? null) : null;
  // Decided from what they said about themselves, not offered. See
  // `plan-summary.ts` for why the choice went away.
  const plan = PLANS[recommendedIndex(runner)];


  /** Screens that own their whole canvas, with no header over them. The plan
   * screen is a full-bleed photograph, and a back arrow on it would offer a
   * retreat from something that is already running. */
  const bare =
    step.kind === 'intro' || step.kind === 'building' || step.kind === 'welcome';
  /** Screens the shared button bar stays out of. Health supplies its own
   * single button — rendering the shared bar underneath it put a second,
   * equally loud primary next to "Connect to Health", which reads as Skip and
   * competes with the only action that matters. The plan screen has no action
   * at all: it advances itself, and a button there would only offer a way to
   * hurry work the screen claims to be doing. */
  const noSharedCta =
    step.kind === 'health' ||
    step.kind === 'notify' ||
    step.kind === 'building' ||
    step.kind === 'welcome';

  const canAdvance = (() => {
    switch (step.kind) {
      case 'choice':
      case 'sex':
      case 'watch':
        return Array.isArray(answer) && answer.length > 0;
      // Seeded with a plausible size, so it is always advanceable.
      case 'size':
        return true;
      // A contract you have not signed is not a contract.
      // Locked once the ceremony starts, so a second press cannot restart it.
      case 'contract':
        return signed && !sealing;
      // Seeded, so always advanceable.
      // Health is skippable by design: a user who declines the sheet must
      // still be able to finish, and refusing to let them past would be the
      // one screen in the flow that holds them hostage.
      case 'measure':
      case 'intro':
      case 'health':
      // Nothing here can be verified: HealthKit will not say which read scopes
      // are receiving data, so the screen never claims to know whether the
      // switch was flipped and never blocks on it.
      case 'watch-sync':
      case 'notify':
      case 'building':
      case 'welcome':
      // Opens on the recommendation, so there is always an answer.
      case 'plan':
        return true;
      default:
        return true;
    }
  })();

  const settled = useSharedValue(1);
  const direction = useSharedValue(1);

  const ctaSquashStyle = useAnimatedStyle(() => ({
    transform: [
      { scaleY: 1 - ctaSquash.value * 0.11 },
      { scaleX: 1 + ctaSquash.value * 0.025 },
    ],
  }));

  const questionStyle = useAnimatedStyle(() => ({
    opacity: settled.value,
    transform: [{ translateX: (1 - settled.value) * SLIDE * direction.value }],
  }));

  /** Which side the *incoming* screen enters from. A ref, not state: it is
   * read inside an effect and must never itself cause a render. */
  const enterFrom = useRef(1);
  const mounted = useRef(false);

  /**
   * The last screen's answer, and the end of the flow.
   *
   * An empty field is a skip and finishes immediately. A filled one is checked
   * first, and a code that does not work keeps the user on the screen with the
   * reason under the field — leaving for Home on a failed code would be the app
   * quietly deciding the question did not matter after asking it.
   *
   * On success the confirmation is held on screen for a beat before the flow
   * moves, so the one thing the user came to this screen for is actually seen.
   */
  const finishWithReferral = useCallback(async () => {
    const finish = () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Keyboard.dismiss();
      armOffer({ weeks: String(plan.weeks), name });
      completeOnboarding();
    };

    const code = normalise(referralCode);
    if (code.length !== REFERRAL_CODE_LENGTH) {
      finish();
      return;
    }
    if (redeeming) return;

    setRedeeming(true);
    const result = await redeem(code);
    setRedeeming(false);

    if (result !== 'ok') {
      setReferralGood(false);
      setReferralNote(REDEEM_MESSAGE[result]);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      return;
    }

    setReferralGood(true);
    setReferralNote(`${REFERRAL_DISCOUNT_PERCENT}% off applied.`);
    setTimeout(finish, CONFIRM_MS);
  }, [referralCode, redeeming, plan.weeks, name]);

  /**
   * Exit, then swap, then enter — in that order.
   *
   * The swap has to happen at the trough, inside the animation callback.
   * Calling `setIndex` alongside `withTiming` (as this did) renders the new
   * screen immediately, at whatever opacity the *outgoing* animation happens
   * to be at — so the next question appeared at full strength, faded out with
   * the tail of the exit, and faded back in. That double-take was the blink.
   */
  const go = useCallback(
    (next: number, forward: boolean) => {
      // Only drop the keyboard when the arriving screen has nothing to type
      // into. Dismissing between two typed steps would bounce it down and
      // straight back up, which is the jankiest thing in the flow.
      if (STEPS[next].kind !== 'name' && STEPS[next].kind !== 'measure') Keyboard.dismiss();
      enterFrom.current = forward ? 1 : -1;
      direction.value = forward ? -1 : 1;
      settled.value = withTiming(
        0,
        {
          duration: EXIT_MS,
          easing: Easing.in(Easing.quad),
          reduceMotion: ReduceMotion.System,
        },
        (finished) => {
          'worklet';
          if (finished) runOnJS(setIndex)(next);
        },
      );
    },
    [direction, settled],
  );

  // The entrance runs only once the new step has actually rendered, which is
  // what guarantees nothing is ever visible mid-swap.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    direction.value = enterFrom.current;
    settled.value = withTiming(1, {
      duration: ENTER_MS,
      easing: Easing.bezier(0.23, 1, 0.32, 1),
      reduceMotion: ReduceMotion.System,
    });
  }, [index, direction, settled]);

  const onNext = useCallback(() => {
    if (!canAdvance || authing) return;

    // The stamp is the acknowledgement, so it plays before the screen leaves —
    // advancing underneath it would throw away the one beat the whole screen
    // exists for.
    if (step.kind === 'contract') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      // The stamp lands here; everything after it belongs to the step, which
      // owns the animation and therefore knows when it has finished. Advancing
      // on a timer from this side would be guessing at its length.
      setSealing(true);
      stamp.value = withTiming(1, {
        duration: 260,
        easing: Easing.out(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      });
      return;
    }

    // The intro screen's button signs the user in before it advances. A cancel
    // leaves them exactly where they were and says nothing — they know what
    // they just tapped. A device that cannot offer Apple sign-in at all falls
    // through, because refusing to let those users past would strand them at
    // the front door. A genuine failure does neither: it holds the screen and
    // says so, since a flow that advances on a failed sign-in has just told the
    // user it worked.
    if (step.kind === 'intro') {
      setAuthing(true);
      // Cleared on the retry rather than on the failure, so the message
      // survives until the user does something about it.
      setSignInFailed(false);
      void signInWithApple()
        .then((result) => {
          if (result.status === 'cancelled') return;
          if (result.status === 'failed') {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            setSignInFailed(true);
            return;
          }
          // Apple returns the name and the email only on the **very first**
          // authorisation for this Apple ID; every later sign-in is nulls. So
          // both are written down here or lost for good.
          //
          // That is the whole of what this button does. There is no session
          // behind it and no account on any server — the app needs a way to
          // greet somebody and an address for support to answer on, and this is
          // where it gets them.
          if (result.status === 'signed-in') {
            if (result.fullName != null) setProfileName(firstName(result.fullName));
            if (result.email != null) setProfileEmail(result.email);
          }
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          step1(true);
        })
        .finally(() => setAuthing(false));
      return;
    }
    // The social screen spends the button on itself before spending it on the
    // flow: each press pages to the next review, and only from the last one
    // does the same press present the offer. One tap past three cards would
    // make them scenery.
    if (step.kind === 'social' && review < TESTIMONIAL_COUNT - 1) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setReview((n) => n + 1);
      return;
    }
    // The last screen of the flow hands straight over to Home and *arms* the
    // offer; the sheet follows a couple of seconds later, over Home.
    //
    // It used to present the offer here and let that sheet finish onboarding,
    // which put the paywall on top of a stack that was being torn down the
    // moment it closed — the source of both "GO_BACK was not handled" and the
    // frozen sheet with a dead button. Over Home there is nothing to unwind.
    // The reviews now hand over to the invite question rather than to Home.
    // It is asked last on purpose: a code is worth most to someone who has just
    // decided they want the thing.
    if (step.kind === 'social') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      step1(true);
      return;
    }

    // Not disabled, answered. A greyed-out button explains nothing; this says
    // what is missing and leaves the way out visible.
    if (step.kind === 'pain-map') {
      if (zones.length === 0) {
        setZoneError('Tap where it hurts — or go back and choose “Nothing right now”.');
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        return;
      }
      // First entry of the history the retests will append to.
      recordPainMap({ side, zones: [...zones], source: 'onboarding' });
      step1(true);
      return;
    }

    if (step.kind === 'referral') {
      void finishWithReferral();
      return;
    }
    if (isLast) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Keyboard.dismiss();
      completeOnboarding();
      return;
    }
    step1(true);
    // `finishWithReferral` closes over the typed code, so it has to be a
    // dependency: without it this callback keeps the version made on the first
    // render, which closes over an empty field and would skip every code.
  }, [canAdvance, isLast, go, index, router, step.kind, plan.weeks, name, review, finishWithReferral]);

  /**
 * What to say about a code that did not work.
 *
 * Every one of these is an ordinary thing a person can do, so none of them is
 * phrased as an error the user caused — the screen says what happened and
 * leaves the field alone so they can try again.
 */
const REDEEM_MESSAGE: Readonly<Record<Exclude<RedeemResult, 'ok'>, string>> = {
  unknown: 'We don’t know that code. Check it and try again.',
  own: 'That one is yours. Send it to someone else.',
  already: 'You have already used a code.',
  unavailable: 'Invites are not available in this build.',
  failed: 'Could not reach the server. Try again in a moment.',
};

/** Long enough for the confirmation to be read before the screen leaves. */
const CONFIRM_MS = 900;

/** The header's close is Skip: it leaves the whole flow, not one step, and
   * it counts as finishing. Onboarding is the app's front door — a close that
   * dumped the user back into an app they had not set up would strand them. */
  const onExit = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Keyboard.dismiss();
    completeOnboarding();
  }, []);

  /**
   * Move one step, over anything that does not apply to this user.
   *
   * Every caller goes through here rather than through `go(index ± 1)`: a step
   * that is hidden has to be hidden from both directions, and a back button
   * that lands on the screen the forward pass skipped is worse than no skipping
   * at all.
   */
  const step1 = (forward: boolean) => {
    const next = stepAfter(index, forward, answers);
    if (next != null) go(next, forward);
  };

  const onBack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // Step 0 is the front door; there is nothing behind it to go back to.
    if (index === 0) return;
    step1(false);
  };

  const setAnswer = (value: Answer) => {
    setAnswers((prev) => ({ ...prev, [step.key]: value }));
  };

  const ctaLabel = (() => {
    switch (step.kind) {
      case 'intro':
        return step.cta;
      case 'health':
        return health != null ? 'Next' : 'Skip for now';
      case 'watch-sync':
        return 'Done';
      case 'plan':
        return 'Start my plan';
      // The label is the tell that there is more behind the button: it asks
      // for the next review until there are none left, then asks for the offer.
      case 'social':
        return review < TESTIMONIAL_COUNT - 1 ? 'Continue' : 'See my offer';
      case 'contract':
        return 'Continue';
      // The one screen whose button changes meaning with the field: nothing
      // typed is a skip, and saying so is what makes it obvious the question is
      // optional without a second control to explain it.
      case 'referral':
        if (redeeming) return 'Checking…';
        return referralCode.length === REFERRAL_CODE_LENGTH ? 'Apply code' : 'Skip';
      default:
        return 'Next';
    }
  })();

  // The welcome gate replaces the whole surface instead of sitting inside it.
  // Rendered as a child it inherited the root's horizontal gutter and safe-area
  // padding, and the Glow painted over its sky — a full-bleed screen with its
  // own status bar and its own gesture cannot live inside the padded frame the
  // questions share. Absolute positioning does not rescue it either: in Yoga an
  // absolute child is laid out against its parent's *padding* box, so `left: 0`
  // still lands 24pt in.
  //
  // Every hook has run by this point, so the early return is safe.
  if (step.kind === 'welcome') {
    return <WelcomePage onDone={onNext} />;
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={0}
      style={[styles.root, { paddingTop: insets.top + 12 }]}>
      {/* Sits behind everything and never moves between steps — it is the
          surface the flow happens on, not part of any one screen. */}
      <Glow />
      {/* Back, progress, close on one row — the running apps all put the
          retreat controls in the header and leave the bottom bar to the single
          forward action. A square Back button beside the CTA competes with it
          for the thumb and makes going back look as important as going on. */}
      {!bare && (
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            onPress={onBack}
            hitSlop={12}
            style={({ pressed }) => pressed && { opacity: 0.5 }}>
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              size={26}
              color={colors.foreground}
              strokeWidth={2}
            />
          </Pressable>
          {/* The foot map is part of the question before it, not a step of its
              own: it is conditional, and a bar that jumped forward for some
              users and not others would be measuring the wrong thing. */}
          <StepProgress
            index={index > PAIN_MAP_INDEX ? index - 1 : Math.min(index, PAIN_MAP_INDEX - 1)}
            count={STEP_COUNT - 1}
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close"
            onPress={onExit}
            hitSlop={12}
            style={({ pressed }) => pressed && { opacity: 0.5 }}>
            <HugeiconsIcon
              icon={Cancel01Icon}
              size={24}
              color={meter.unit}
              strokeWidth={2}
            />
          </Pressable>
        </View>
      )}

      <Animated.View style={[styles.body, questionStyle]}>
        {/* The intro owns its whole canvas; every other screen shares the
            same heading block so the eye never has to re-find the question. */}
        {step.kind === 'intro' ? (
          <IntroStep
            squash={ctaSquash}
            greeting={step.greeting}
            headline={step.headline}
            signInFailed={signInFailed}
            onReady={() => setIntroReady(true)}
          />
        ) : (
          <>
            {/* The health and plan screens write their own headings: on one
                the title and its explanatory copy are a single block with the
                permission card rather than a question above a list, and on the
                other they sit on a photograph rather than on the page. */}
            {step.kind !== 'health' &&
              step.kind !== 'notify' &&
              step.kind !== 'building' &&
              step.kind !== 'social' && (
              <>
                {/* Typed in, the same way the welcome screen introduces
                    itself — so the app reads as speaking each question rather
                    than paging through a form. Keyed on the step so it
                    retypes on every arrival, including the two steps whose
                    wording only differs by the sport it was rewritten for. */}
                <TypedText
                  key={step.key}
                  text={withName(
                    step.kind === 'choice' && step.key === 'load' ? load.title : step.title,
                    name,
                    sport,
                  )}
                  style={[styles.title, { color: colors.foreground }]}
                  maxDuration={QUESTION_LINE_MS}
                />
                {/* Size keeps its question but drops the sub-line: two lines
                    of explanation there were two lines the photograph wanted,
                    and a ruler under a shoe-size question needs no gloss. */}
                {step.kind !== 'size' && (
                  // Fades in under the question rather than typing too: two
                  // lines typing in sequence is the welcome screen's trick,
                  // and repeating it on every question would make the sub-line
                  // something you wait for instead of something you glance at.
                  <Animated.Text
                    key={`${step.key}-blurb`}
                    entering={FadeIn.duration(320)
                      .delay(BLURB_DELAY_MS)
                      .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
                      .reduceMotion(ReduceMotion.System)}
                    style={[styles.blurb, { color: meter.caption }]}>
                    {withName(
                      step.kind === 'choice' && step.key === 'load' ? load.blurb : step.blurb,
                      name,
                      sport,
                    )}
                  </Animated.Text>
                )}
              </>
            )}

            {step.kind === 'name' && (
              <NameStep
                value={typeof answer === 'string' ? answer : ''}
                placeholder={step.placeholder}
                onChange={(next) => {
                  setAnswer(next);
                  // Written as it is typed rather than on leaving the screen:
                  // the answers live in this component's state and go with it,
                  // and the flow can be left from any step.
                  setProfileName(next);
                }}
                onSubmit={onNext}
              />
            )}

            {step.kind === 'measure' && (
              <MeasureStep
                key={step.key}
                units={step.units}
                unit={
                  answer != null && !Array.isArray(answer) && typeof answer === 'object'
                    ? answer.unit
                    : step.units[0].value
                }
                values={
                  answer != null && !Array.isArray(answer) && typeof answer === 'object'
                    ? answer.fields
                    : {}
                }
                onChangeUnit={(next) => {
                  const unit = step.units.find((u) => u.value === next);
                  if (unit == null) return;
                  const fields: Record<string, string> = {};
                  for (const field of unit.fields) fields[field.key] = field.initial;
                  Haptics.selectionAsync();
                  setAnswer({ unit: next, fields });
                }}
                onChangeField={(fieldKey, next) => {
                  if (answer == null || Array.isArray(answer) || typeof answer !== 'object') return;
                  setAnswer({ ...answer, fields: { ...answer.fields, [fieldKey]: next } });
                }}
              />
            )}

            {step.kind === 'choice' && (
              // Top-down from under the question. Bottom-aligning it was the
              // single biggest thing making these screens look home-made: no
              // shipping onboarding parks its options against the CTA.
              <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
                <ChoiceStep
                  art={step.key === 'sport' ? 'sport' : 'option'}
                  options={
                    step.key === 'load'
                      ? load.options
                      : // Option labels carry tokens too — "During {activity}"
                        // becomes "During a match" for a tennis player.
                        step.options.map((o) => ({
                          ...o,
                          label: withName(o.label, name, sport),
                        }))
                  }
                  selected={Array.isArray(answer) ? answer : []}
                  multi={step.multi ?? false}
                  max={step.max}
                  onChange={setAnswer}
                />
              </ScrollView>
            )}

            {step.kind === 'sex' && (
              <SexStep
                options={step.options}
                selected={Array.isArray(answer) ? (answer[0] ?? null) : null}
                onChange={(next) => setAnswer([next])}
              />
            )}

            {step.kind === 'size' && (
              <SizeStep
                unit={sizeUnit}
                value={size}
                sex={sex}
                onChangeUnit={(next) => {
                  // Each unit owns its own scale, so switching reseeds to that
                  // scale's middle rather than converting — a converted 42 EU
                  // landing on 9.5 US mid-drag reads as the ruler jumping.
                  setSizeUnit(next);
                  setSize(next === 'eu' ? 42 : 9);
                }}
                onChangeValue={setSize}
              />
            )}

            {step.kind === 'social' && (
              <SocialProofStep name={name} index={review} onChange={setReview} />
            )}

            {step.kind === 'referral' && (
              <ReferralStep
                value={referralCode}
                onChange={(next) => {
                  setReferralCode(next);
                  // A note describes the last attempt. Typing starts a new one.
                  setReferralNote(null);
                }}
                onSubmit={onNext}
                note={referralNote}
                noteGood={referralGood}
              />
            )}

            {step.kind === 'pain-map' && (
              <PainMapStep
                side={side}
                onSide={setSide}
                zones={zones}
                onToggle={(zone) => {
                  setZoneError(null);
                  setZones((current) =>
                    current.includes(zone)
                      ? current.filter((z) => z !== zone)
                      : [...current, zone],
                  );
                }}
                error={zoneError}
              />
            )}

            {step.kind === 'plan' && (
              <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
                <PlanStep
                  summary={planSummary({
                    runner,
                    // `load` in this scope is the *question*; the answer is
                    // `loadAnswer`, which is what the reflection line reads too.
                    sport: sport as SportKey | null,
                    pain,
                    load: loadAnswer,
                  })}
                />
              </ScrollView>
            )}

            {step.kind === 'watch' && (
              <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
                {/* The same component every other question uses. This one has
                    no bespoke anything: it is a four-option single-select, and
                    building it a second time would be two lists to keep in
                    visual step for no gain. */}
                <ChoiceStep
                  art="option"
                  options={step.options}
                  selected={Array.isArray(answer) ? answer : []}
                  multi={false}
                  onChange={setAnswer}
                />
              </ScrollView>
            )}

            {step.kind === 'watch-sync' && (
              <WatchSyncStep brand={answers.watch === 'whoop' ? 'whoop' : 'garmin'} />
            )}

            {step.kind === 'notify' && (
              <NotifyStep
                name={name}
                granted={notify}
                onAnswered={setNotify}
                onNext={onNext}
                onSkip={onNext}
              />
            )}

            {step.kind === 'contract' && (
              <View style={styles.scroll}>
                <ContractStep
                  name={name}
                  onSignedChange={setSigned}
                  onDrawingChange={setDrawing}
                  stamp={stamp}
                  sealing={sealing}
                  onSealed={() => step1(true)}
                />
              </View>
            )}

            {step.kind === 'health' && (
              <HealthStep
                name={name}
                summary={health}
                onConnected={setHealth}
                onNext={onNext}
                onSkip={onNext}
              />
            )}

          </>
        )}
      </Animated.View>

      {/* Pinned over the whole page rather than placed in the sliding body: a
          full-screen photograph carried by the step transition would drag a
          28pt strip of empty page behind it. It fades in over the trough
          instead, once the outgoing question has left. */}
      {step.kind === 'building' && (
        <BuildingStep
          sex={sex}
          lines={buildingLines({ sport: sport as SportKey | null, pain, load: loadAnswer })}
          onDone={onNext}
          insets={insets}
        />
      )}


      {/* On the welcome screen the CTA is the last beat of the introduction,
          so the button itself arrives only once the sequence finishes and
          rises in. Its *space*, though, is held from the first frame: mounting
          the whole bar late shortened the body mid-sequence, and the welcome
          screen's character — which sits at the bottom of that body — visibly
          jumped as the button appeared under it. */}
      {!noSharedCta && (
        <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 16) }]}>
          {/* Squashed, not moved. Origin at the bottom so the base stays put
              on the safe-area line and the top edge dips towards it — the
              button gives under the weight instead of sliding down the page.
              Widening slightly as it flattens is what keeps the volume
              believable rather than reading as a scale-down. */}
          <Animated.View style={[styles.ctaSlot, ctaSquashStyle]}>
            {(!bare || introReady) && (
              <Animated.View
                entering={
                  bare
                    ? SlideInDown.duration(420)
                        .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
                        .reduceMotion(ReduceMotion.System)
                    : undefined
                }>
                <PrimaryButton label={ctaLabel} onPress={onNext} disabled={!canAdvance} />
              </Animated.View>
            )}
          </Animated.View>
        </View>
      )}

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: SIDE_PAD,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    // Room for the bar to breathe between the two controls, which is what
    // keeps it reading as a progress hint rather than as a divider.
    paddingHorizontal: 2,
    marginBottom: 26,
  },
  body: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    fontFamily: fonts.bold,
    letterSpacing: -0.8,
  },
  blurb: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.regular,
  },
  rail: {
    marginTop: 36,
  },
  scroll: {
    flex: 1,
    marginTop: 26,
  },
  scrollContent: {
    paddingBottom: 8,
  },
  freeContent: {
    flexGrow: 1,
    paddingBottom: 8,
  },
  bar: {
    paddingTop: 16,
  },
  /** Reserves the button's height so the body never changes size when the
   * welcome screen's CTA arrives. */
  ctaSlot: {
    height: PRIMARY_BUTTON_HEIGHT,
    transformOrigin: 'bottom',
  },
});
