import Activity03Icon from '@hugeicons/core-free-icons/Activity03Icon';
import SmartWatch01Icon from '@hugeicons/core-free-icons/SmartWatch01Icon';
import SmartWatch04Icon from '@hugeicons/core-free-icons/SmartWatch04Icon';
import Award01Icon from '@hugeicons/core-free-icons/Award01Icon';
import BalanceScaleIcon from '@hugeicons/core-free-icons/BalanceScaleIcon';
import BodyPartLegIcon from '@hugeicons/core-free-icons/BodyPartLegIcon';
import ChartIncreaseIcon from '@hugeicons/core-free-icons/ChartIncreaseIcon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import FlashIcon from '@hugeicons/core-free-icons/FlashIcon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';

import { chose } from './answers';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import Route02Icon from '@hugeicons/core-free-icons/Route02Icon';
import ShieldEnergyIcon from '@hugeicons/core-free-icons/ShieldEnergyIcon';
import SunriseIcon from '@hugeicons/core-free-icons/SunriseIcon';
import Target01Icon from '@hugeicons/core-free-icons/Target01Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import WorkoutRunIcon from '@hugeicons/core-free-icons/WorkoutRunIcon';
import Yoga01Icon from '@hugeicons/core-free-icons/Yoga01Icon';
import type { IconSvgElement } from '@hugeicons/react-native';
import type { ImageSourcePropType } from 'react-native';

import { healthAvailable } from '@/entities/health';

import type { AccentName } from '@/shared/config';

import { REFERRAL_DISCOUNT_PERCENT } from '@/entities/referral';

export type OnboardingOption = {
  /** Stable key, and what the answer is recorded as. */
  value: string;
  label: string;
  /** Second line, for options that need a qualifier. */
  caption?: string;
  /** Cards lead with a glyph on a tinted tile… */
  icon?: IconSvgElement;
  accent?: AccentName;
  /** …or with a photograph, for the few questions where a face reads faster
   * than a symbol. A card takes one or the other, never both. */
  photo?: ImageSourcePropType;
};

/** One number the user types, with the unit that trails it. */
export type MeasureField = {
  key: string;
  /** Small label riding the number's baseline, e.g. "ft". */
  suffix: string;
  /** Digits the field accepts. */
  maxDigits: number;
  /** Prefilled so the screen never opens on an empty line — the reference
   * shows a plausible figure and lets the user correct it, which is far less
   * work than starting from nothing. */
  initial: string;
};

export type MeasureUnit = {
  value: string;
  label: string;
  fields: readonly MeasureField[];
};

/** One rep-or-seconds micro test. */
type StepBase = {
  key: string;
  title: string;
  blurb: string;
  /** Which of the four acts this belongs to. Drives the progress indicator. */
  act: number;
  /**
   * Steps that do not apply to this user, stepped over in both directions.
   *
   * A predicate rather than a filtered array, because the flow is indexed: the
   * page holds a position in `STEPS` and a filtered list would renumber every
   * step behind it whenever an answer changed. Skipping at the moment of
   * movement leaves the indices stable and keeps the rule beside the step it
   * is about.
   */
  skipWhen?: (answers: Readonly<Record<string, unknown>>) => boolean;
};


/**
 * The shapes a screen can take.
 *
 * A discriminated union rather than one struct with everything optional: the
 * page switches on `kind` and TypeScript guarantees each branch has the fields
 * it reads. Adding a question is one entry in `STEPS`, not a new route plus
 * three edits.
 */
export type OnboardingStep = StepBase &
  (
    | { kind: 'intro'; cta: string; footnote: string; greeting: string; headline: string }
    | { kind: 'name'; placeholder: string }
    | {
        kind: 'choice';
        options: readonly OnboardingOption[];
        /** Selecting more than one. `max` caps it. */
        multi?: boolean;
        max?: number;
        /** A follow-up row of small chips under the cards. */
        extra?: { key: string; label: string; options: readonly string[] };
      }
    | { kind: 'measure'; units: readonly MeasureUnit[] }
    /** Two full-bleed photo cards. Asked early because the shoe-size screen
     * reads the answer to decide whose legs it shows. */
    | { kind: 'sex'; options: readonly OnboardingOption[] }
    /** Shoe size on a draggable ruler, in EU or US. */
    | { kind: 'size' }
    | { kind: 'health' }
    /** Which watch, if any. Only asked to decide whether the next screen has
     * anything to teach — the gait metrics come from the iPhone, so the answer
     * changes nothing about the plan itself. */
    | { kind: 'watch'; options: readonly OnboardingOption[] }
    /** How to turn on Health sync in the third-party app, as a loop of video.
     * Skipped entirely unless the watch answer is one that needs it. */
    | { kind: 'watch-sync' }
    /** The notification ask, straight after Health — the two permissions the
     * app needs, asked back to back while the reason for both is fresh. */
    | { kind: 'notify' }
    /** The plan being assembled: a photograph, a line that fills, and the
     * button on. Owns the whole screen. */
    /** The liquid-glass gate that opens the app. */
    | { kind: 'welcome' }
    /** Signing the commitment contract, after the plan is chosen. */
    | { kind: 'contract' }
    | { kind: 'building' }
    /** Choosing between the two lengths the plan can take. */
    | { kind: 'plan' }
    /** Three reviews, handed over one per press, ahead of the offer. */
    | { kind: 'social' }
    | { kind: 'referral' }
  );

/**
 * The four acts.
 *
 * Fifteen segments would read as a long form — which is exactly the feeling
 * this flow is trying to avoid. Four named acts say "you are a quarter of the
 * way through something with a shape", and the current act fills continuously
 * as its questions are answered.
 */
export const ACTS = ['About you', 'Your sport', 'Your health', 'Your plan'] as const;

/**
 * Every screen, in order.
 *
 * Deliberately not "name → sex → age → weight → …". Each screen either tells
 * the user something about themselves or explains what the app will do *for
 * them*; the demographic questions that survive are the ones that visibly feed
 * the plan. That is why there is no sex question and no BMI anywhere — a body
 * stat the product cannot justify reads as a data grab and buys friction for
 * nothing.
 */
/**
 * The watch answers, and what each one actually buys.
 *
 * "Nothing" is deliberately last and deliberately not framed as a lesser tier.
 * Mobility metrics — the whole gait feature — come from the iPhone, not the
 * watch, so a person with no watch is missing nothing this app is built on.
 * A list that implied otherwise would be selling an upgrade the product does
 * not need.
 */
const WATCH_OPTIONS: readonly OnboardingOption[] = [
  {
    value: 'apple',
    label: 'Apple Watch',
    caption: 'Everything works already',
    icon: SmartWatch01Icon,
    accent: 'blue',
  },
  {
    value: 'garmin',
    label: 'Garmin',
    caption: 'One switch to flip',
    icon: SmartWatch04Icon,
    accent: 'teal',
  },
  {
    value: 'whoop',
    label: 'Whoop',
    caption: 'One switch to flip',
    icon: Activity03Icon,
    accent: 'violet',
  },
  {
    value: 'none',
    label: 'No watch',
    caption: 'Your phone in your pocket is enough',
    icon: FootprintsIcon,
    accent: 'amber',
  },
];

export const STEPS: readonly OnboardingStep[] = [
  {
    // Ahead of the intro: this is the front door, and the intro is Walkito
    // introducing itself once the door is open.
    kind: 'welcome',
    key: 'welcome',
    act: 0,
    title: '',
    blurb: '',
  },
  {
    kind: 'intro',
    key: 'intro',
    act: 0,
    // `title`/`blurb` stay for the step's own bookkeeping; the welcome screen
    // renders the two lines below instead, in sequence.
    title: 'Run without second-guessing',
    blurb: 'A daily plan that changes when your legs do.',
    greeting: 'Hi, I\u2019m Walkito',
    headline: 'Let\u2019s find out why it still hurts.',
    cta: 'Continue with Apple',
    footnote: '~2 min setup',
  },
  {
    kind: 'name',
    key: 'name',
    act: 0,
    title: 'What should we\ncall you?',
    blurb: 'Everything after this gets written for you, not for runners in general.',
    placeholder: 'e.g. Alex',
  },
  {
    kind: 'sex',
    key: 'sex',
    act: 0,
    title: 'Male or female, {name}?',
    blurb: 'Load tolerance and injury patterns differ, so the plan does too.',
    options: [
      { value: 'female', label: 'Female' },
      { value: 'male', label: 'Male' },
    ],
  },
  {
    kind: 'choice',
    key: 'runner',
    act: 0,
    title: 'What kind of athlete are you, {name}?',
    blurb:
      'This is where your plan starts from. Under-selling here just makes week one too easy.',
    options: [
      { value: 'new', label: 'Just getting started', icon: SunriseIcon, accent: 'amber' },
      { value: 'casual', label: 'Casual', icon: FootprintsIcon, accent: 'teal' },
      { value: 'regular', label: 'Regular', icon: WorkoutRunIcon, accent: 'blue' },
      { value: 'racing', label: 'Training for something', icon: Award01Icon, accent: 'violet' },
      { value: 'serious', label: 'Serious about it', icon: FlashIcon, accent: 'orange' },
    ],
  },
  {
    kind: 'measure',
    key: 'age',
    act: 0,
    title: 'How old are you?',
    blurb: 'Tendons adapt more slowly with age. This paces how fast the plan builds.',
    units: [
      {
        value: 'years',
        label: 'years',
        fields: [{ key: 'years', suffix: 'years', maxDigits: 2, initial: '28' }],
      },
    ],
  },
  {
    kind: 'measure',
    key: 'body',
    act: 0,
    title: 'A little more about you, {name}',
    blurb: 'Tendons carry what you weigh. This sets your starting load.',
    units: [
      {
        value: 'kg',
        label: 'kg',
        fields: [{ key: 'kg', suffix: 'kg', maxDigits: 3, initial: '72' }],
      },
      {
        value: 'lb',
        label: 'lb',
        fields: [{ key: 'lb', suffix: 'lb', maxDigits: 3, initial: '159' }],
      },
    ],
  },
  {
    kind: 'size',
    key: 'size',
    act: 0,
    title: 'What size do you run in, {name}?',
    blurb: 'Shoe size stands in for the length of the lever your calf has to move.',
  },
  {
    kind: 'choice',
    key: 'goal',
    act: 1,
    title: '{name}, what are you working toward?',
    blurb: 'Pick the one that matters most right now. You can change it later.',
    options: [
      { value: 'painfree', label: 'Run pain-free', icon: ShieldEnergyIcon, accent: 'teal' },
      { value: 'race', label: 'Train for a race', icon: Award01Icon, accent: 'violet' },
      { value: 'consistent', label: 'Run more consistently', icon: ChartIncreaseIcon, accent: 'blue' },
      { value: 'stronger', label: 'Build stronger legs', icon: Dumbbell01Icon, accent: 'orange' },
      { value: 'injuryfree', label: 'Stay injury-free', icon: Target01Icon, accent: 'amber' },
    ],
  },
  {
    kind: 'choice',
    key: 'pain',
    act: 1,
    title: 'What’s getting in the way, {name}?',
    blurb: 'Choose any that apply. Most people pick more than one.',
    multi: true,
    options: [
      { value: 'foot', label: 'Foot', icon: FootprintsIcon, accent: 'violet' },
      { value: 'heel', label: 'Heel', icon: BodyPartLegIcon, accent: 'orange' },
      { value: 'achilles', label: 'Achilles', icon: Activity03Icon, accent: 'amber' },
      { value: 'shin', label: 'Shin', icon: BodyPartLegIcon, accent: 'blue' },
      { value: 'knee', label: 'Knee', icon: BalanceScaleIcon, accent: 'teal' },
      { value: 'hip', label: 'Hip', icon: Yoga01Icon, accent: 'violet' },
      // Load-bearing: the product is prevention and performance as much as
      // rehab, and a flow that assumes an injury tells healthy runners they
      // are in the wrong app.
      { value: 'none', label: 'Nothing right now', icon: Tick02Icon, accent: 'teal' },
    ],
  },
  {
    kind: 'choice',
    key: 'sport',
    act: 1,
    title: 'What puts the load on your legs, {name}?',
    blurb: 'This decides how the next questions are framed.',
    options: [
      { value: 'running', label: 'Running' },
      { value: 'tennis', label: 'Tennis' },
      { value: 'gym', label: 'Gym' },
      { value: 'football', label: 'Football' },
      { value: 'basketball', label: 'Basketball' },
      { value: 'cycling', label: 'Cycling' },
      { value: 'hiking', label: 'Hiking' },
    ],
  },
  {
    kind: 'choice',
    key: 'load',
    act: 1,
    // Placeholder copy. `loadQuestionFor` swaps in the wording and the ranges
    // for whichever sport was chosen — a runner is asked about kilometres, a
    // tennis player about hours on court.
    title: 'How much are you doing right now?',
    blurb: 'Your honest current week, not your best one.',
    options: [],
    extra: { key: 'sessionsPerWeek', label: 'Sessions per week', options: ['1', '2', '3', '4', '5+'] },
  },
  {
    kind: 'choice',
    key: 'challenge',
    act: 1,
    title: 'What’s hardest right now, {name}?',
    blurb: 'Up to two. The plan leans toward whatever you pick.',
    multi: true,
    max: 2,
    options: [
      { value: 'painfree', label: 'Staying pain-free', icon: ShieldEnergyIcon, accent: 'teal' },
      { value: 'back', label: 'Getting back to running', icon: WorkoutRunIcon, accent: 'blue' },
      { value: 'distance', label: 'Increasing distance', icon: ChartIncreaseIcon, accent: 'violet' },
      { value: 'recovery', label: 'Recovering faster', icon: Moon02Icon, accent: 'amber' },
      { value: 'strength', label: 'Getting stronger', icon: Dumbbell01Icon, accent: 'orange' },
      { value: 'injury', label: 'Avoiding another injury', icon: Target01Icon, accent: 'teal' },
    ],
  },
  {
    kind: 'health',
    key: 'health',
    act: 2,
    title: 'Connect your Health data',
    blurb: 'So your plan starts from what you have actually been doing.',
    // Gone entirely on a device with no HealthKit — iPad, and the older
    // simulator runtimes. The screen used to appear and explain that it could
    // not work, which is a step the user has to read and dismiss to learn
    // nothing. The watch question goes with it: it exists only to set up a
    // Health sync there is no Health to sync to.
    skipWhen: () => !healthAvailable(),
  },
  {
    kind: 'watch',
    key: 'watch',
    act: 2,
    title: 'Do you wear a watch?',
    // Deliberately not a promise. Mobility comes from the phone, so this
    // answer buys the user nothing they would otherwise miss — it only decides
    // whether we owe them a set-up instruction.
    blurb: 'Only so we know whether anything needs connecting.',
    options: WATCH_OPTIONS,
    skipWhen: () => !healthAvailable(),
  },
  {
    kind: 'watch-sync',
    key: 'watch-sync',
    act: 2,
    title: 'Turn on Health sync',
    blurb: 'One switch inside the app you already use.',
    // The only two answers with a switch to find. Apple Watch is already
    // wired, and someone with no watch has nothing to set up — showing either
    // of them a how-to for an app they do not have is a screen that reads as
    // the flow not having listened.
    skipWhen: (answers) => !chose(answers, 'watch', 'garmin', 'whoop'),
  },
  {
    kind: 'notify',
    key: 'notify',
    act: 2,
    title: 'Turn on notifications',
    blurb: 'So your plan can tell you when it needs you.',
  },
  {
    kind: 'building',
    key: 'building',
    act: 3,
    // Both are bookkeeping only: the screen is a photograph with its own three
    // lines on it, and it goes through neither the shared heading block nor
    // the shared button bar.
    title: 'Building your plan',
    blurb: 'Folding everything you told me into week one.',
  },
  {
    kind: 'plan',
    key: 'plan',
    act: 3,
    title: 'Your plan',
    blurb: 'Built from your answers.',
  },
  {
    kind: 'contract',
    key: 'contract',
    act: 3,
    title: 'Let’s make a contract, {name}',
    blurb: 'Not with me. With yourself.',
  },
  {
    // Writes its own heading, so the shared title and blurb are unused here.
    kind: 'social',
    key: 'social',
    act: 3,
    title: '',
    blurb: '',
  },
  {
    /**
     * The last thing asked, and the only optional one.
     *
     * After the reviews rather than before them: a code is worth more to
     * someone who has just decided they want the thing. And last rather than
     * anywhere else because it is the one question whose answer is usually
     * "no" — a screen most people skip belongs at the end, where skipping it
     * costs them nothing they were in the middle of.
     */
    kind: 'referral',
    key: 'referral',
    act: 3,
    title: 'Have a referral code?',
    blurb: `Enter it and you both get ${REFERRAL_DISCOUNT_PERCENT}% off your plan.`,
  },
];

export const STEP_COUNT = STEPS.length;

/** Where each act starts and ends, so the bar can fill within the current one
 * rather than counting fifteen segments. */
export function actBounds(act: number): { start: number; end: number } {
  const first = STEPS.findIndex((s) => s.act === act);
  const last = STEPS.map((s) => s.act).lastIndexOf(act);
  return { start: first, end: last };
}

/**
 * The next step in a direction, stepping over anything that does not apply.
 *
 * A loop rather than a single check: two skippable steps can sit next to each
 * other — on an iPad both Health and the watch question go — and stopping at
 * the first one would land the flow on a screen it had just decided to hide.
 *
 * Returns null when there is nothing left in that direction, which is the
 * caller's signal that the flow is over rather than an index to move to.
 */
export function stepAfter(
  from: number,
  forward: boolean,
  answers: Readonly<Record<string, unknown>>,
): number | null {
  const step = forward ? 1 : -1;
  for (let i = from + step; i >= 0 && i < STEPS.length; i += step) {
    if (STEPS[i].skipWhen?.(answers) !== true) return i;
  }
  return null;
}
