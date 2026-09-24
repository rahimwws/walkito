import Activity03Icon from '@hugeicons/core-free-icons/Activity03Icon';
import SmartWatch01Icon from '@hugeicons/core-free-icons/SmartWatch01Icon';
import SmartWatch04Icon from '@hugeicons/core-free-icons/SmartWatch04Icon';
import Award01Icon from '@hugeicons/core-free-icons/Award01Icon';
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
import WorkoutRunIcon from '@hugeicons/core-free-icons/WorkoutRunIcon';
import type { IconSvgElement } from '@hugeicons/react-native';
import type { ImageSourcePropType } from 'react-native';

import { healthAvailable } from '@/entities/health';
import { MAX_ZONES } from '@/entities/leg-zone';

import type { AccentName } from '@/shared/config';
import type { Translate } from '@/shared/lib/i18n';

import { REFERRAL_DISCOUNT_PERCENT } from '@/entities/referral';

/**
 * One line of copy, resolved against whatever language is current.
 *
 * A closure rather than a bare catalogue key, because `t()` reads a key's
 * placeholders off its own template: handed a field typed as the union of every
 * step's title, it would demand the union of every step's placeholders at every
 * call site. Closing over the key keeps each lookup exact, and keeps this table
 * a table — `STEPS` is still a module-level array, so `STEP_COUNT`,
 * `stepAfter` and the page's seeding all work unchanged.
 */
export type Phrase = (t: Translate) => string;

/**
 * The name, held back from `t()` on purpose.
 *
 * Passing the real name here would substitute the empty string for anyone who
 * skipped the name step and leave "Male or female, ?" on screen. `withName`
 * needs the slot intact so it can remove the slot *and* the punctuation
 * stranded around it, which is a decision only it has the name to make.
 */
export const NAME_SLOT = { name: '{name}' } as const;

export type OnboardingOption = {
  /** Stable key, and what the answer is recorded as. */
  value: string;
  label: Phrase;
  /** Second line, for options that need a qualifier. */
  caption?: Phrase;
  /** Cards lead with a glyph on a tinted tile… */
  icon?: IconSvgElement;
  accent?: AccentName;
  /** …or with a photograph, for the few questions where a face reads faster
   * than a symbol. A card takes one or the other, never both. */
  photo?: ImageSourcePropType;
};

/** The same option once the page has resolved its text for this render. The
 * cards take this; only the step table holds lookups. */
export type ResolvedOption = Omit<OnboardingOption, 'label' | 'caption'> & {
  label: string;
  caption?: string;
};

/** One number the user types, with the unit that trails it. */
export type MeasureField = {
  key: string;
  /** Small label riding the number's baseline, e.g. "ft". */
  suffix: Phrase;
  /** Digits the field accepts. */
  maxDigits: number;
  /** Prefilled so the screen never opens on an empty line — the reference
   * shows a plausible figure and lets the user correct it, which is far less
   * work than starting from nothing. */
  initial: string;
};

export type MeasureUnit = {
  value: string;
  label: Phrase;
  fields: readonly MeasureField[];
};

/** One rep-or-seconds micro test. */
type StepBase = {
  key: string;
  title: Phrase;
  blurb: Phrase;
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

/** The two screens that write their own heading and never read these. An empty
 * string rather than a catalogue key: a blank entry is the one thing the
 * catalogue's own tests refuse to hold. */
const UNUSED: Phrase = () => '';

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
    | { kind: 'intro'; cta: Phrase; footnote: Phrase; greeting: Phrase; headline: Phrase }
    | { kind: 'name'; placeholder: Phrase }
    | {
        kind: 'choice';
        options: readonly OnboardingOption[];
        /** Selecting more than one. `max` caps it. */
        multi?: boolean;
        max?: number;
        /** A follow-up row of small chips under the cards. */
        extra?: { key: string; label: Phrase; options: readonly string[] };
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
    /** Where it hurts, on the leg. Up to `MAX_ZONES` zones, or "nothing". */
    | { kind: 'pain-map' }
    /** The marked zones again, beside what the plan changes and when. */
    | { kind: 'outlook' }
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
export const ACTS: readonly Phrase[] = [
  (t) => t('onboarding.act.about'),
  (t) => t('onboarding.act.sport'),
  (t) => t('onboarding.act.health'),
  (t) => t('onboarding.act.plan'),
];

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
    label: (t) => t('onboarding.watch.apple'),
    caption: (t) => t('onboarding.watch.appleCaption'),
    icon: SmartWatch01Icon,
    accent: 'blue',
  },
  {
    value: 'garmin',
    label: (t) => t('onboarding.watch.garmin'),
    caption: (t) => t('onboarding.watch.switchCaption'),
    icon: SmartWatch04Icon,
    accent: 'teal',
  },
  {
    value: 'whoop',
    label: (t) => t('onboarding.watch.whoop'),
    caption: (t) => t('onboarding.watch.switchCaption'),
    icon: Activity03Icon,
    accent: 'violet',
  },
  {
    value: 'none',
    label: (t) => t('onboarding.watch.none'),
    caption: (t) => t('onboarding.watch.noneCaption'),
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
    title: UNUSED,
    blurb: UNUSED,
  },
  {
    kind: 'intro',
    key: 'intro',
    act: 0,
    // `title`/`blurb` stay for the step's own bookkeeping; the welcome screen
    // renders the two lines below instead, in sequence.
    title: (t) => t('onboarding.intro.title'),
    blurb: (t) => t('onboarding.intro.blurb'),
    greeting: (t) => t('onboarding.intro.greeting'),
    headline: (t) => t('onboarding.intro.headline'),
    cta: (t) => t('onboarding.intro.cta'),
    footnote: (t) => t('onboarding.intro.footnote'),
  },
  {
    kind: 'name',
    key: 'name',
    act: 0,
    title: (t) => t('onboarding.name.title'),
    blurb: (t) => t('onboarding.name.blurb'),
    placeholder: (t) => t('onboarding.name.placeholder'),
  },
  {
    kind: 'sex',
    key: 'sex',
    act: 0,
    title: (t) => t('onboarding.sex.title', NAME_SLOT),
    blurb: (t) => t('onboarding.sex.blurb'),
    options: [
      { value: 'female', label: (t) => t('onboarding.sex.female') },
      { value: 'male', label: (t) => t('onboarding.sex.male') },
    ],
  },
  {
    kind: 'choice',
    key: 'runner',
    act: 0,
    title: (t) => t('onboarding.runner.title', NAME_SLOT),
    blurb: (t) => t('onboarding.runner.blurb'),
    options: [
      { value: 'new', label: (t) => t('onboarding.runner.new'), icon: SunriseIcon, accent: 'amber' },
      { value: 'casual', label: (t) => t('onboarding.runner.casual'), icon: FootprintsIcon, accent: 'teal' },
      { value: 'regular', label: (t) => t('onboarding.runner.regular'), icon: WorkoutRunIcon, accent: 'blue' },
      { value: 'racing', label: (t) => t('onboarding.runner.racing'), icon: Award01Icon, accent: 'violet' },
      { value: 'serious', label: (t) => t('onboarding.runner.serious'), icon: FlashIcon, accent: 'orange' },
    ],
  },
  {
    kind: 'measure',
    key: 'age',
    act: 0,
    title: (t) => t('onboarding.age.title'),
    blurb: (t) => t('onboarding.age.blurb'),
    units: [
      {
        value: 'years',
        label: (t) => t('onboarding.age.years'),
        fields: [
          { key: 'years', suffix: (t) => t('onboarding.age.years'), maxDigits: 2, initial: '28' },
        ],
      },
    ],
  },
  {
    kind: 'measure',
    key: 'body',
    act: 0,
    title: (t) => t('onboarding.body.title', NAME_SLOT),
    blurb: (t) => t('onboarding.body.blurb'),
    units: [
      {
        value: 'kg',
        label: (t) => t('onboarding.body.kg'),
        fields: [{ key: 'kg', suffix: (t) => t('onboarding.body.kg'), maxDigits: 3, initial: '72' }],
      },
      {
        value: 'lb',
        label: (t) => t('onboarding.body.lb'),
        fields: [{ key: 'lb', suffix: (t) => t('onboarding.body.lb'), maxDigits: 3, initial: '159' }],
      },
    ],
  },
  {
    kind: 'size',
    key: 'size',
    act: 0,
    title: (t) => t('onboarding.size.title', NAME_SLOT),
    blurb: (t) => t('onboarding.size.blurb'),
  },
  {
    kind: 'choice',
    key: 'goal',
    act: 1,
    title: (t) => t('onboarding.goal.title', NAME_SLOT),
    blurb: (t) => t('onboarding.goal.blurb'),
    options: [
      { value: 'painfree', label: (t) => t('onboarding.goal.painfree'), icon: ShieldEnergyIcon, accent: 'teal' },
      { value: 'race', label: (t) => t('onboarding.goal.race'), icon: Award01Icon, accent: 'violet' },
      { value: 'consistent', label: (t) => t('onboarding.goal.consistent'), icon: ChartIncreaseIcon, accent: 'blue' },
      { value: 'stronger', label: (t) => t('onboarding.goal.stronger'), icon: Dumbbell01Icon, accent: 'orange' },
      { value: 'injuryfree', label: (t) => t('onboarding.goal.injuryfree'), icon: Target01Icon, accent: 'amber' },
    ],
  },
  {
    // Asked on the same leg the daily check-in uses, so the first time the
    // user meets the map is the day they tell us what is wrong — and the
    // outlook near the end can show those very zones recovering.
    kind: 'pain-map',
    key: 'pain',
    act: 1,
    title: (t) => t('onboarding.pain.title', NAME_SLOT),
    blurb: (t) => t('onboarding.pain.blurb', { count: MAX_ZONES }),
  },
  {
    // Which side, because two things downstream depend on it and neither can
    // guess: the retest counts calf raises on the side being rehabilitated
    // against the other one, and a symmetric problem cannot produce an
    // asymmetric gait — so "both" switches the asymmetry signals off rather
    // than leaving them to never fire.
    kind: 'choice',
    key: 'side',
    act: 1,
    title: (t) => t('onboarding.side.title', NAME_SLOT),
    blurb: (t) => t('onboarding.side.blurb'),
    options: [
      { value: 'left', label: (t) => t('onboarding.side.left') },
      { value: 'right', label: (t) => t('onboarding.side.right') },
      { value: 'both', label: (t) => t('onboarding.side.both') },
    ],
    // Nothing hurts, nothing to ask about.
    skipWhen: (answers) => !hurts(answers),
  },
  {
    kind: 'choice',
    key: 'sport',
    act: 1,
    title: (t) => t('onboarding.sport.title', NAME_SLOT),
    blurb: (t) => t('onboarding.sport.blurb'),
    options: [
      { value: 'running', label: (t) => t('onboarding.sport.running') },
      { value: 'tennis', label: (t) => t('onboarding.sport.tennis') },
      { value: 'gym', label: (t) => t('onboarding.sport.gym') },
      { value: 'football', label: (t) => t('onboarding.sport.football') },
      { value: 'basketball', label: (t) => t('onboarding.sport.basketball') },
      { value: 'cycling', label: (t) => t('onboarding.sport.cycling') },
      { value: 'hiking', label: (t) => t('onboarding.sport.hiking') },
    ],
  },
  {
    kind: 'choice',
    key: 'load',
    act: 1,
    // Placeholder copy. `loadQuestionFor` swaps in the wording and the ranges
    // for whichever sport was chosen — a runner is asked about kilometres, a
    // tennis player about hours on court.
    title: (t) => t('onboarding.load.title'),
    blurb: (t) => t('onboarding.load.blurb'),
    options: [],
    extra: {
      key: 'sessionsPerWeek',
      label: (t) => t('onboarding.load.sessionsPerWeek'),
      options: ['1', '2', '3', '4', '5+'],
    },
  },
  {
    kind: 'choice',
    key: 'challenge',
    act: 1,
    title: (t) => t('onboarding.challenge.title', NAME_SLOT),
    blurb: (t) => t('onboarding.challenge.blurb'),
    multi: true,
    max: 2,
    options: [
      { value: 'painfree', label: (t) => t('onboarding.challenge.painfree'), icon: ShieldEnergyIcon, accent: 'teal' },
      { value: 'back', label: (t) => t('onboarding.challenge.back'), icon: WorkoutRunIcon, accent: 'blue' },
      { value: 'distance', label: (t) => t('onboarding.challenge.distance'), icon: ChartIncreaseIcon, accent: 'violet' },
      { value: 'recovery', label: (t) => t('onboarding.challenge.recovery'), icon: Moon02Icon, accent: 'amber' },
      { value: 'strength', label: (t) => t('onboarding.challenge.strength'), icon: Dumbbell01Icon, accent: 'orange' },
      { value: 'injury', label: (t) => t('onboarding.challenge.injury'), icon: Target01Icon, accent: 'teal' },
    ],
  },
  {
    kind: 'health',
    key: 'health',
    act: 2,
    title: (t) => t('onboarding.health.title'),
    blurb: (t) => t('onboarding.health.blurb'),
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
    title: (t) => t('onboarding.watch.title'),
    // Deliberately not a promise. Mobility comes from the phone, so this
    // answer buys the user nothing they would otherwise miss — it only decides
    // whether we owe them a set-up instruction.
    blurb: (t) => t('onboarding.watch.blurb'),
    options: WATCH_OPTIONS,
    skipWhen: () => !healthAvailable(),
  },
  {
    kind: 'watch-sync',
    key: 'watch-sync',
    act: 2,
    title: (t) => t('onboarding.watchSync.title'),
    blurb: (t) => t('onboarding.watchSync.blurb'),
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
    title: (t) => t('onboarding.notify.title'),
    blurb: (t) => t('onboarding.notify.blurb'),
  },
  {
    kind: 'building',
    key: 'building',
    act: 3,
    // Both are bookkeeping only: the screen is a photograph with its own three
    // lines on it, and it goes through neither the shared heading block nor
    // the shared button bar.
    title: (t) => t('onboarding.building.title'),
    blurb: (t) => t('onboarding.building.blurb'),
  },
  {
    kind: 'plan',
    key: 'plan',
    act: 3,
    title: (t) => t('onboarding.plan.title'),
    blurb: (t) => t('onboarding.plan.blurb'),
  },
  {
    kind: 'contract',
    key: 'contract',
    act: 3,
    title: (t) => t('onboarding.contract.title', NAME_SLOT),
    blurb: (t) => t('onboarding.contract.blurb'),
  },
  {
    // Writes its own heading, so the shared title and blurb are unused here.
    kind: 'social',
    key: 'social',
    act: 3,
    title: UNUSED,
    blurb: UNUSED,
  },
  {
    /**
     * What the plan does for the places they marked, after the reviews.
     *
     * Straight after other people's results, so the question "would this work
     * for me?" is answered with their own leg rather than left hanging. The
     * blurb is swapped by the page for someone who said nothing hurts.
     */
    kind: 'outlook',
    key: 'outlook',
    act: 3,
    title: (t) => t('onboarding.outlook.title', NAME_SLOT),
    blurb: (t) => t('onboarding.outlook.blurb'),
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
    title: (t) => t('onboarding.referral.title'),
    blurb: (t) => t('onboarding.referral.blurb', { percent: REFERRAL_DISCOUNT_PERCENT }),
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
/** Whether anything at all was picked on the pain step besides "nothing". */
function hurts(answers: Readonly<Record<string, unknown>>): boolean {
  const pain = answers.pain;
  return Array.isArray(pain) && pain.some((value) => value !== 'none');
}

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
