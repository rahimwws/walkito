import AppStoreIcon from '@hugeicons/core-free-icons/AppStoreIcon';
import PlayStoreIcon from '@hugeicons/core-free-icons/PlayStoreIcon';
import GoogleIcon from '@hugeicons/core-free-icons/GoogleIcon';
import Infinity01Icon from '@hugeicons/core-free-icons/Infinity01Icon';
import Facebook01Icon from '@hugeicons/core-free-icons/Facebook01Icon';
import InstagramIcon from '@hugeicons/core-free-icons/InstagramIcon';
import MoreHorizontalCircle01Icon from '@hugeicons/core-free-icons/MoreHorizontalCircle01Icon';
import Stairs01Icon from '@hugeicons/core-free-icons/Stairs01Icon';
import TiktokIcon from '@hugeicons/core-free-icons/TiktokIcon';
import UserMultipleIcon from '@hugeicons/core-free-icons/UserMultipleIcon';
import YogaMatIcon from '@hugeicons/core-free-icons/YogaMatIcon';
import YoutubeIcon from '@hugeicons/core-free-icons/YoutubeIcon';
import type { IconSvgElement } from '@hugeicons/react-native';
import { Platform } from 'react-native';

import { MAX_ZONES } from '@/entities/leg-zone';

import type { AccentName } from '@/shared/config';
import type { Translate } from '@/shared/lib/i18n';
import type { FluentName } from '@/shared/ui/fluent-icon';

import { chose } from './answers';
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
 * skipped the name step and leave "How many days a week, ?" on screen. `withName`
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
  /** Cards lead with a glyph on a tinted tile. */
  icon?: IconSvgElement;
  accent?: AccentName;
  /** Or with a colourful Fluent emoji, drawn as given (`FLUENT_ICONS`). */
  emoji?: FluentName;
  /** The recommended middle of a time pick: it wears a "Recommended" badge. */
  recommended?: boolean;
};

/** The same option once the page has resolved its text for this render. The
 * cards take this; only the step table holds lookups. */
export type ResolvedOption = Omit<OnboardingOption, 'label' | 'caption'> & {
  label: string;
  caption?: string;
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
        /** What leads each answer in place of its emoji: Walkito peeking up
         * over the card (`peek`), the pair of feet (`side`), or, for an
         * observation about the foot, how full a circle is (`verdict`).
         * `kit` lays the answers out as a grid of coloured tiles instead. */
        art?: 'peek' | 'side' | 'verdict' | 'kit';
        /** A photograph above the answers (`QUESTION_PHOTOS`, by step key),
         * with an optional caption under each half and a line under the list. */
        hero?: { captions?: readonly Phrase[]; note?: Phrase };
        /** What the answer looks like, above the answers: the week with its
         * session days lit (`week`), or a timer ring filled to the minutes
         * (`timer`). */
        gauge?: 'week' | 'timer';
      }
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
     * lift and one leg. No result screen: the plan it changes is shown next. */
    | { kind: 'test-intro' }
    | { kind: 'test-toe' }
    | { kind: 'test-balance' }
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

/** The recommended middle of each time pick: seeded as the answer, and
 * marked with a badge on its card. */
export const RECOMMENDED = { days: 'days5', minutes: 'min5' } as const;

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
 * Gone from here: sex (it chose the photograph on the building screen and
 * nothing else), age (it only started anyone 55 or over a step lighter, which
 * the plan's own settling does after two calm mornings), weight and shoe size
 * (nothing the user could see used them),
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
    // Who they are, before anything about running: half the people with
    // heel pain are on their feet at work, and "what kind of athlete are
    // you" lost them on the fifth screen. `role` is an analytics identifier.
    kind: 'choice',
    key: 'role',
    act: 0,
    title: (t) => t('onboarding.role.title', NAME_SLOT),
    blurb: (t) => t('onboarding.role.blurb'),
    art: 'peek',
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
      { value: 'new', label: (t) => t('onboarding.runner.new'), emoji: 'seedling' },
      { value: 'casual', label: (t) => t('onboarding.runner.casual'), emoji: 'runningShoe' },
      { value: 'regular', label: (t) => t('onboarding.runner.regular'), emoji: 'personRunning' },
      { value: 'racing', label: (t) => t('onboarding.runner.racing'), emoji: 'bullseye' },
      { value: 'serious', label: (t) => t('onboarding.runner.serious'), emoji: 'fire' },
    ],
    skipWhen: (a) => !runs(a),
  },
  {
    // A check to try rather than a field to fill, near the start, where most
    // people leave. "A little" or "No" gives the big toe its own work
    // (`toeWork` in `planSettingsFrom`). The values are analytics identifiers.
    kind: 'choice',
    key: 'toe',
    act: 0,
    title: (t) => t('onboarding.toe.title'),
    blurb: (t) => t('onboarding.toe.blurb'),
    art: 'verdict',
    hero: {},
    options: [
      { value: 'yes', label: (t) => t('onboarding.toe.yes') },
      { value: 'little', label: (t) => t('onboarding.toe.little') },
      { value: 'no', label: (t) => t('onboarding.toe.no') },
    ],
  },
  {
    // The same, with a picture to compare against. "Yes" or "a slight one"
    // adds the big toe and toe-spread work, by the same `toeWork`.
    kind: 'choice',
    key: 'bunion',
    act: 0,
    title: (t) => t('onboarding.bunion.title'),
    blurb: (t) => t('onboarding.bunion.blurb'),
    art: 'verdict',
    hero: {
      captions: [(t) => t('onboarding.bunion.straight'), (t) => t('onboarding.bunion.example')],
      note: (t) => t('onboarding.bunion.note'),
    },
    options: [
      { value: 'no', label: (t) => t('onboarding.bunion.no') },
      { value: 'little', label: (t) => t('onboarding.bunion.little') },
      { value: 'yes', label: (t) => t('onboarding.bunion.yes') },
      { value: 'unsure', label: (t) => t('onboarding.bunion.unsure') },
    ],
  },
  {
    kind: 'pain-map',
    key: 'pain',
    act: 1,
    title: (t) => t('onboarding.pain.title', NAME_SLOT),
    blurb: (t) => t('onboarding.pain.blurb', { count: MAX_ZONES }),
  },
  {
    // Which side: the retest compares the sore leg with the other, and "both"
    // switches the asymmetry signals off rather than leaving them dead.
    kind: 'choice',
    key: 'side',
    act: 1,
    title: (t) => t('onboarding.side.title', NAME_SLOT),
    blurb: (t) => t('onboarding.side.blurb'),
    art: 'side',
    options: [
      { value: 'left', label: (t) => t('onboarding.side.left') },
      { value: 'right', label: (t) => t('onboarding.side.right') },
      { value: 'both', label: (t) => t('onboarding.side.both') },
    ],
    skipWhen: (a) => !hurts(a),
  },
  {
    kind: 'choice',
    key: 'duration',
    act: 1,
    title: (t) => t('onboarding.duration.title'),
    blurb: (t) => t('onboarding.duration.blurb'),
    // Four different things rather than four calendars, so the rows tell
    // apart at a glance: a stopwatch, the calendar, a season, the hourglass.
    options: [
      { value: 'weeks', label: (t) => t('onboarding.duration.weeks'), emoji: 'stopwatch' },
      { value: 'months', label: (t) => t('onboarding.duration.months'), emoji: 'calendar' },
      { value: 'year', label: (t) => t('onboarding.duration.year'), emoji: 'fallenLeaf' },
      { value: 'longer', label: (t) => t('onboarding.duration.longer'), emoji: 'hourglass' },
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
    // Calm pictures of the thing named, never of harm: no blood, no
    // lightning, nothing red that reads as an alarm.
    options: [
      { value: 'calf', label: (t) => t('onboarding.safety.calf'), emoji: 'leg' },
      { value: 'pop', label: (t) => t('onboarding.safety.pop'), emoji: 'foot' },
      { value: 'diabetes', label: (t) => t('onboarding.safety.diabetes'), emoji: 'bandage' },
      { value: 'fall', label: (t) => t('onboarding.safety.fall'), emoji: 'crutch' },
      { value: 'numb', label: (t) => t('onboarding.safety.numb'), emoji: 'feather' },
      { value: 'none', label: (t) => t('onboarding.safety.none'), emoji: 'leafInWind' },
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
      { value: 'insoles', label: (t) => t('onboarding.tried.insoles'), emoji: 'sandal' },
      { value: 'stretching', label: (t) => t('onboarding.tried.stretching'), emoji: 'lotus' },
      { value: 'shoes', label: (t) => t('onboarding.tried.shoes'), emoji: 'runningShoe' },
      { value: 'rest', label: (t) => t('onboarding.tried.rest'), emoji: 'couch' },
      { value: 'physio', label: (t) => t('onboarding.tried.physio'), emoji: 'healthWorker' },
      { value: 'none', label: (t) => t('onboarding.tried.none'), emoji: 'sparkles' },
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
    art: 'peek',
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
      { value: 'facebook', label: (t) => t('onboarding.source.facebook'), icon: Facebook01Icon, accent: 'blue' },
      { value: 'youtube', label: (t) => t('onboarding.source.youtube'), icon: YoutubeIcon, accent: 'amber' },
      { value: 'friend', label: (t) => t('onboarding.source.friend'), icon: UserMultipleIcon, accent: 'teal' },
      Platform.OS === 'android'
        ? { value: 'play_store', label: (t) => t('onboarding.source.playStore'), icon: PlayStoreIcon, accent: 'blue' }
        : { value: 'app_store', label: (t) => t('onboarding.source.appStore'), icon: AppStoreIcon, accent: 'blue' },
      { value: 'google', label: (t) => t('onboarding.source.google'), icon: GoogleIcon, accent: 'teal' },
      { value: 'other', label: (t) => t('onboarding.source.other'), icon: MoreHorizontalCircle01Icon, accent: 'violet' },
    ],
  },
  // Retired by the founder: the flow goes from the source straight on. Kept
  // in the table until its copy and code are removed.
  { kind: 'why', key: 'why', act: 2, title: UNUSED, blurb: UNUSED, skipWhen: () => true },
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
      { value: 'wake', label: (t) => t('onboarding.habit.wake'), emoji: 'sunrise' },
      { value: 'coffee', label: (t) => t('onboarding.habit.coffee'), emoji: 'hotBeverage' },
      { value: 'shift', label: (t) => t('onboarding.habit.shift'), emoji: 'briefcase' },
      { value: 'bed', label: (t) => t('onboarding.habit.bed'), emoji: 'bed' },
    ],
  },
  {
    // The schedule, one question a screen: three questions on one screen
    // read as a form. Days and minutes are picks from three with the
    // recommended middle seeded, so Next is ready on arrival; the answer is
    // drawn above the cards as it is picked. The keys are the ones these
    // questions always had, so the step funnel reads as it did.
    kind: 'choice',
    key: 'planDays',
    act: 3,
    title: (t) => t('onboarding.days.title'),
    // Not drawn; kept for anything that reads a step's blurb.
    blurb: (t) => t('onboarding.minutes.blurb'),
    gauge: 'week',
    options: (['days3', 'days5', 'days7'] as const).map((value) => ({
      value,
      label: (t: Translate) => t(`onboarding.days.${value}`),
      recommended: value === RECOMMENDED.days,
    })),
  },
  {
    kind: 'choice',
    key: 'planMinutes',
    act: 3,
    title: (t) => t('onboarding.minutes.title'),
    blurb: (t) => t('onboarding.minutes.blurb'),
    gauge: 'timer',
    options: (['min3', 'min5', 'min10'] as const).map((value) => ({
      value,
      label: (t: Translate) => t(`onboarding.minutes.${value}`),
      recommended: value === RECOMMENDED.minutes,
    })),
  },
  {
    // What is at home, as tiles: a Fluent emoji where one is the thing (a
    // ball, a bed with its pillow), a glyph where none is. "None of these"
    // is exclusive, and the kit picked so far is listed under the tiles by
    // what it adds to the plan. One answer at least, "none" included.
    kind: 'choice',
    key: 'equipment',
    act: 3,
    title: (t) => t('onboarding.equipment.title'),
    blurb: (t) => t('onboarding.equipment.blurb'),
    multi: true,
    art: 'kit',
    options: [
      { value: 'towel', label: (t) => t('onboarding.equipment.towel'), icon: YogaMatIcon, accent: 'teal' },
      { value: 'step', label: (t) => t('onboarding.equipment.step'), icon: Stairs01Icon, accent: 'orange' },
      { value: 'band', label: (t) => t('onboarding.equipment.band'), icon: Infinity01Icon, accent: 'violet' },
      { value: 'ball', label: (t) => t('onboarding.equipment.ball'), emoji: 'softball', accent: 'blue' },
      { value: 'pillow', label: (t) => t('onboarding.equipment.pillow'), emoji: 'bed', accent: 'amber' },
      { value: 'none', label: (t) => t('onboarding.equipment.none'), emoji: 'sparkles', accent: 'teal' },
    ],
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

