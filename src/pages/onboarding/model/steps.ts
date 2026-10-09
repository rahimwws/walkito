import AppStoreIcon from '@hugeicons/core-free-icons/AppStoreIcon';
import PlayStoreIcon from '@hugeicons/core-free-icons/PlayStoreIcon';
import GoogleIcon from '@hugeicons/core-free-icons/GoogleIcon';
import InstagramIcon from '@hugeicons/core-free-icons/InstagramIcon';
import MoreHorizontalCircle01Icon from '@hugeicons/core-free-icons/MoreHorizontalCircle01Icon';
import TiktokIcon from '@hugeicons/core-free-icons/TiktokIcon';
import UserMultipleIcon from '@hugeicons/core-free-icons/UserMultipleIcon';
import YoutubeIcon from '@hugeicons/core-free-icons/YoutubeIcon';
import type { IconSvgElement } from '@hugeicons/react-native';
import { Platform, type ImageSourcePropType } from 'react-native';

import { MAX_ZONES } from '@/entities/leg-zone';

import type { AccentName } from '@/shared/config';
import type { Translate } from '@/shared/lib/i18n';

import { chose, codeFilled } from './answers';
import { balanceAllowed, miniTestEligible, roleOf, runs, standsAtWork } from './journey';

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
    | { kind: 'intro'; greeting: Phrase; headline: Phrase }
    | { kind: 'name'; placeholder: Phrase }
    | {
        kind: 'choice';
        options: readonly OnboardingOption[];
        /** Selecting more than one. `max` caps it. */
        multi?: boolean;
        max?: number;
      }
    | { kind: 'measure'; units: readonly MeasureUnit[] }
    /** Two full-bleed photo cards. */
    | { kind: 'sex'; options: readonly OnboardingOption[] }
    /** A full-screen answer to the question before it: mascot, a heading, a
     * line, tap anywhere. `of` names the question it reacts to. */
    | { kind: 'reaction'; of: 'role' | 'duration' | 'tried' }
    /** The first steps this morning, 0–10, the daily check-in's own question. */
    | { kind: 'morning-pain' }
    /** Halfway: what the flow knows so far, read back. */
    | { kind: 'midway' }
    /** Why it still hurts: the intro's promise, answered from the answers. */
    | { kind: 'why' }
    /** The notification ask. */
    | { kind: 'notify' }
    /** The moment of the day the session is tied to, and the reminder it sets. */
    | { kind: 'habit'; options: readonly OnboardingOption[] }
    /** The 30-second check, behind a PostHog flag: what it is, the big toe
     * lift, one leg, and the result. */
    | { kind: 'test-intro' }
    | { kind: 'test-toe' }
    | { kind: 'test-balance' }
    | { kind: 'test-result' }
    /** The liquid-glass gate that opens the app. */
    | { kind: 'welcome' }
    /** Signing the commitment contract. */
    | { kind: 'contract' }
    /** The plan being assembled from the answers, line by line. */
    | { kind: 'building' }
    /** The first week: its days and its moves. */
    | { kind: 'first-week' }
    /** Where it hurts, on the leg. Up to `MAX_ZONES` zones, or "nothing". */
    | { kind: 'pain-map' }
    /** The marked zones again, beside what the plan changes and when. */
    | { kind: 'outlook' }
  );

/**
 * The four acts. The progress bar fills continuously; these name its stretches
 * for anything that wants to say where in the flow somebody is.
 */
export const ACTS: readonly Phrase[] = [
  (t) => t('onboarding.act.about'),
  (t) => t('onboarding.act.sport'),
  (t) => t('onboarding.act.health'),
  (t) => t('onboarding.act.plan'),
];

/** Whether anything at all was picked on the pain step besides "nothing". */
export function hurts(answers: Readonly<Record<string, unknown>>): boolean {
  const pain = answers.pain;
  return Array.isArray(pain) && pain.some((value) => value !== 'none');
}

/** In the 30-second check's experiment, and somebody it is for. */
function testing(answers: Readonly<Record<string, unknown>>): boolean {
  return chose(answers, 'miniTest', 'test') && miniTestEligible(answers, !hurts(answers));
}

/**
 * Every screen, in order.
 *
 * A question, then every few questions something said back: a line under the
 * options, or a whole screen when the answer deserves one. The flow should
 * read as a conversation with something that is listening, not a form.
 *
 * Gone from here: weight and shoe size (nothing the user could see used them),
 * the sport list (who they are says it), the challenge (it repeated the goal),
 * the reviews and the referral screen (the paywall has both now). Health, the
 * watch and signing in come after the first purchase, in `pages/setup`.
 */
export const STEPS: readonly OnboardingStep[] = [
  { kind: 'welcome', key: 'welcome', act: 0, title: UNUSED, blurb: UNUSED },
  {
    kind: 'intro',
    key: 'intro',
    act: 0,
    title: (t) => t('onboarding.intro.title'),
    blurb: (t) => t('onboarding.intro.blurb'),
    greeting: (t) => t('onboarding.intro.greeting'),
    headline: (t) => t('onboarding.intro.headline'),
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
    kind: 'measure',
    key: 'age',
    act: 0,
    title: (t) => t('onboarding.age.title'),
    blurb: (t) => t('onboarding.age.blurb'),
    units: [
      {
        value: 'years',
        label: (t) => t('onboarding.age.years'),
        fields: [{ key: 'years', suffix: (t) => t('onboarding.age.years'), maxDigits: 2, initial: '28' }],
      },
    ],
  },
  {
    // Who they are, before anything about running: half the people with
    // heel pain are on their feet at work, and "what kind of athlete are
    // you" lost them on the fifth screen. `role` is an analytics identifier.
    kind: 'choice',
    key: 'role',
    act: 0,
    title: (t) => t('onboarding.role.title', NAME_SLOT),
    blurb: (t) => t('onboarding.role.blurb'),
    options: [
      { value: 'running', label: (t) => t('onboarding.role.running') },
      { value: 'feet', label: (t) => t('onboarding.role.feet') },
      { value: 'both', label: (t) => t('onboarding.role.both') },
      { value: 'walking', label: (t) => t('onboarding.role.walking') },
    ],
  },
  { kind: 'reaction', of: 'role', key: 'role-reaction', act: 0, title: UNUSED, blurb: UNUSED, skipWhen: (a) => roleOf(a) == null },
  {
    // Only for somebody who runs. The values are analytics identifiers.
    kind: 'choice',
    key: 'runner',
    act: 0,
    title: (t) => t('onboarding.runner.titleRunning', NAME_SLOT),
    blurb: (t) => t('onboarding.runner.blurb'),
    options: [
      { value: 'new', label: (t) => t('onboarding.runner.new') },
      { value: 'casual', label: (t) => t('onboarding.runner.casual') },
      { value: 'regular', label: (t) => t('onboarding.runner.regular') },
      { value: 'racing', label: (t) => t('onboarding.runner.racing') },
      { value: 'serious', label: (t) => t('onboarding.runner.serious') },
    ],
    skipWhen: (a) => !runs(a),
  },
  {
    kind: 'pain-map',
    key: 'pain',
    act: 1,
    title: (t) => t('onboarding.pain.title', NAME_SLOT),
    blurb: (t) => t('onboarding.pain.blurb', { count: MAX_ZONES }),
    // A plan code from ChatGPT or Claude names the area (`plan-code.ts`).
    skipWhen: (a) => codeFilled(a, 'pain'),
  },
  {
    // Which side: the retest compares the sore leg with the other, and "both"
    // switches the asymmetry signals off rather than leaving them dead.
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
    skipWhen: (a) => !hurts(a) || codeFilled(a, 'side'),
  },
  {
    kind: 'choice',
    key: 'duration',
    act: 1,
    title: (t) => t('onboarding.duration.title'),
    blurb: (t) => t('onboarding.duration.blurb'),
    options: [
      { value: 'weeks', label: (t) => t('onboarding.duration.weeks') },
      { value: 'months', label: (t) => t('onboarding.duration.months') },
      { value: 'year', label: (t) => t('onboarding.duration.year') },
      { value: 'longer', label: (t) => t('onboarding.duration.longer') },
    ],
    skipWhen: (a) => !hurts(a),
  },
  { kind: 'reaction', of: 'duration', key: 'duration-reaction', act: 1, title: UNUSED, blurb: UNUSED, skipWhen: (a) => !hurts(a) },
  {
    kind: 'morning-pain',
    key: 'morningPain',
    act: 1,
    title: (t) => t('onboarding.morning.title'),
    blurb: (t) => t('onboarding.morning.blurb'),
    skipWhen: (a) => !hurts(a),
  },
  {
    // Changes the plan and nothing else: no refusals. A fall or a foot that
    // will not take weight starts week one seated; numbness is the ordinary
    // plan, watched in the check-ins. See `safetyPlan`.
    kind: 'choice',
    key: 'safety',
    act: 1,
    title: (t) => t('onboarding.safety.title'),
    blurb: (t) => t('onboarding.safety.blurb'),
    multi: true,
    options: [
      { value: 'calf', label: (t) => t('onboarding.safety.calf') },
      { value: 'pop', label: (t) => t('onboarding.safety.pop') },
      { value: 'diabetes', label: (t) => t('onboarding.safety.diabetes') },
      { value: 'fall', label: (t) => t('onboarding.safety.fall') },
      { value: 'numb', label: (t) => t('onboarding.safety.numb') },
      { value: 'none', label: (t) => t('onboarding.safety.none') },
    ],
    skipWhen: (a) => !hurts(a),
  },
  {
    kind: 'choice',
    key: 'tried',
    act: 1,
    title: (t) => t('onboarding.tried.title'),
    blurb: (t) => t('onboarding.tried.blurb'),
    multi: true,
    options: [
      { value: 'insoles', label: (t) => t('onboarding.tried.insoles') },
      { value: 'stretching', label: (t) => t('onboarding.tried.stretching') },
      { value: 'shoes', label: (t) => t('onboarding.tried.shoes') },
      { value: 'rest', label: (t) => t('onboarding.tried.rest') },
      { value: 'physio', label: (t) => t('onboarding.tried.physio') },
      { value: 'none', label: (t) => t('onboarding.tried.none') },
    ],
    skipWhen: (a) => !hurts(a),
  },
  { kind: 'reaction', of: 'tried', key: 'tried-reaction', act: 1, title: UNUSED, blurb: UNUSED, skipWhen: (a) => !hurts(a) },
  {
    // Options swapped in by the page from `goalValuesFor`: five at most, pain
    // first, worded for who they are. Values are analytics identifiers.
    kind: 'choice',
    key: 'goal',
    act: 2,
    title: (t) => t('onboarding.goal.titleShort'),
    blurb: (t) => t('onboarding.goal.blurb'),
    options: [],
  },
  {
    // Placeholder copy: the page swaps in kilometres for a runner and hours
    // on feet for a standing job. Nobody else is asked.
    kind: 'choice',
    key: 'load',
    act: 2,
    title: (t) => t('onboarding.load.title'),
    blurb: (t) => t('onboarding.load.blurb'),
    options: [],
    skipWhen: (a) => !runs(a) && !standsAtWork(a),
  },
  { kind: 'midway', key: 'midway', act: 2, title: UNUSED, blurb: UNUSED },
  {
    /**
     * Where they heard about the app — the only attribution organic TikTok
     * and Instagram have. The values are analytics identifiers (`AcquisitionSource`).
     */
    kind: 'choice',
    key: 'source',
    act: 2,
    title: (t) => t('onboarding.source.title'),
    blurb: (t) => t('onboarding.source.blurb'),
    options: [
      { value: 'tiktok', label: (t) => t('onboarding.source.tiktok'), icon: TiktokIcon, accent: 'violet' },
      { value: 'instagram', label: (t) => t('onboarding.source.instagram'), icon: InstagramIcon, accent: 'orange' },
      { value: 'youtube', label: (t) => t('onboarding.source.youtube'), icon: YoutubeIcon, accent: 'amber' },
      { value: 'friend', label: (t) => t('onboarding.source.friend'), icon: UserMultipleIcon, accent: 'teal' },
      Platform.OS === 'android'
        ? { value: 'play_store', label: (t) => t('onboarding.source.playStore'), icon: PlayStoreIcon, accent: 'blue' }
        : { value: 'app_store', label: (t) => t('onboarding.source.appStore'), icon: AppStoreIcon, accent: 'blue' },
      { value: 'google', label: (t) => t('onboarding.source.google'), icon: GoogleIcon, accent: 'teal' },
      { value: 'other', label: (t) => t('onboarding.source.other'), icon: MoreHorizontalCircle01Icon, accent: 'violet' },
    ],
  },
  { kind: 'why', key: 'why', act: 2, title: UNUSED, blurb: UNUSED, skipWhen: (a) => !hurts(a) },
  {
    kind: 'notify',
    key: 'notify',
    act: 3,
    title: (t) => t('onboarding.notify.title'),
    blurb: (t) => t('onboarding.notify.blurb'),
  },
  {
    kind: 'habit',
    key: 'habit',
    act: 3,
    title: (t) => t('onboarding.habit.title'),
    blurb: (t) => t('onboarding.habit.blurb'),
    options: [
      { value: 'wake', label: (t) => t('onboarding.habit.wake') },
      { value: 'coffee', label: (t) => t('onboarding.habit.coffee') },
      { value: 'shift', label: (t) => t('onboarding.habit.shift') },
      { value: 'bed', label: (t) => t('onboarding.habit.bed') },
    ],
  },
  {
    kind: 'choice',
    key: 'planDays',
    act: 3,
    title: (t) => t('onboarding.days.title', NAME_SLOT),
    blurb: (t) => t('onboarding.days.blurb'),
    options: (['days3', 'days5', 'days7'] as const).map((value) => ({
      value,
      label: (t: Translate) => t(`onboarding.days.${value}`),
      caption: (t: Translate) => t(`onboarding.days.${value}Caption`),
    })),
    skipWhen: (a) => codeFilled(a, 'planDays'),
  },
  {
    kind: 'choice',
    key: 'planMinutes',
    act: 3,
    title: (t) => t('onboarding.minutes.title'),
    blurb: (t) => t('onboarding.minutes.blurb'),
    options: (['min3', 'min5', 'min10'] as const).map((value) => ({
      value,
      label: (t: Translate) => t(`onboarding.minutes.${value}`),
      caption: (t: Translate) => t(`onboarding.minutes.${value}Caption`),
    })),
    skipWhen: (a) => codeFilled(a, 'planMinutes'),
  },
  {
    kind: 'choice',
    key: 'equipment',
    act: 3,
    title: (t) => t('onboarding.equipment.title'),
    blurb: (t) => t('onboarding.equipment.blurb'),
    multi: true,
    options: (['step', 'band', 'towel', 'pillow', 'ball', 'none'] as const).map((value) => ({
      value,
      label: (t: Translate) => t(`onboarding.equipment.${value}`),
    })),
    skipWhen: (a) => codeFilled(a, 'equipment'),
  },
  { kind: 'test-intro', key: 'test-intro', act: 3, title: UNUSED, blurb: UNUSED, skipWhen: (a) => !testing(a) },
  { kind: 'test-toe', key: 'test-toe', act: 3, title: UNUSED, blurb: UNUSED, skipWhen: (a) => !testing(a) },
  {
    kind: 'test-balance',
    key: 'test-balance',
    act: 3,
    title: UNUSED,
    blurb: UNUSED,
    skipWhen: (a) => !testing(a) || !balanceAllowed(a, !hurts(a)),
  },
  { kind: 'test-result', key: 'test-result', act: 3, title: UNUSED, blurb: UNUSED, skipWhen: (a) => !testing(a) },
  { kind: 'building', key: 'building', act: 3, title: UNUSED, blurb: UNUSED },
  { kind: 'first-week', key: 'first-week', act: 3, title: UNUSED, blurb: UNUSED },
  {
    kind: 'contract',
    key: 'contract',
    act: 3,
    title: (t) => t('onboarding.contract.title', NAME_SLOT),
    blurb: (t) => t('onboarding.contract.blurb'),
  },
  {
    kind: 'outlook',
    key: 'outlook',
    act: 3,
    title: (t) => t('onboarding.outlook.title', NAME_SLOT),
    blurb: (t) => t('onboarding.outlook.blurb'),
  },
];

export const STEP_COUNT = STEPS.length;

/**
 * The next step in a direction, stepping over anything that does not apply.
 *
 * A loop rather than a single check: two skippable steps can sit next to each
 * other, and stopping at the first would land the flow on a screen it had just
 * decided to hide. Null when there is nothing left in that direction — the
 * caller's signal that the flow is over.
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

