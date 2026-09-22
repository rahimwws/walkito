import { NAME_SLOT, type OnboardingOption, type Phrase } from './steps';

/**
 * Copy that changes with the answers already given.
 *
 * Two jobs, both about making the flow feel like a conversation rather than a
 * form: put the user's name into the questions once we know it, and ask about
 * the sport they actually do instead of assuming everyone runs.
 */

/**
 * Substitutes `{name}` in a line.
 *
 * Falls back to a name-less phrasing rather than printing "Hi, !" — a
 * greeting with an empty slot is worse than no greeting, and the name step is
 * skippable. The catalogue puts the slot wherever the language wants it, which
 * is why the removal has to handle both sides: English and Spanish open the
 * goal question with the name and close the pain question with it, and Russian
 * does something else again.
 *
 * The three passes are ordered and each is anchored, which the first version
 * was not: a single `,?\s*\{name\}` matched the *leading* slot too, took the
 * comma that followed it as ordinary text, and left ", what are you working
 * toward?" on screen for anyone who skipped the name step.
 */
export function withName(text: string, name: string): string {
  const trimmed = name.trim();
  if (!text.includes('{name}')) return text;
  if (trimmed.length === 0) {
    // Drop the slot and any punctuation left stranded around it.
    return capitalise(
      text
        .replace(/\s*,\s*\{name\}/g, '')
        .replace(/\{name\}\s*,\s*/g, '')
        .replace(/\{name\}/g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s+([?!.])/g, '$1')
        .trim(),
    );
  }
  return text.replace(/\{name\}/g, trimmed);
}

/**
 * Puts a capital back on the front of a sentence that just lost its opening
 * word.
 *
 * "{name}, what are you working toward?" with no name is "what are you working
 * toward?", and every language whose catalogue leads with the slot has the same
 * problem. Not always character zero either — Spanish opens a question with
 * "¿", so the first *letter* has to be found rather than assumed.
 *
 * Written with case comparison rather than `\p{Ll}`, because Unicode property
 * escapes depend on how Hermes was compiled and this has to work in Cyrillic.
 */
function capitalise(text: string): string {
  for (let i = 0; i < text.length; i += 1) {
    const character = text[i];
    const upper = character.toUpperCase();
    // Already a capital: the sentence never lost its opening word.
    if (upper === character) {
      if (upper !== character.toLowerCase()) return text;
      continue; // Punctuation or a space — keep looking.
    }
    return text.slice(0, i) + upper + text.slice(i + 1);
  }
  return text;
}

export type SportKey =
  | 'running'
  | 'tennis'
  | 'gym'
  | 'football'
  | 'basketball'
  | 'cycling'
  | 'hiking';

type LoadQuestion = {
  title: Phrase;
  blurb: Phrase;
  options: readonly OnboardingOption[];
  /** Label above the follow-up chips. */
  extraLabel: Phrase;
};

const PER_WEEK: Phrase = (t) => t('onboarding.load.perWeek');

/** Distance-based sports are asked in kilometres; the rest in hours, because
 * nobody knows how many kilometres they covered on a tennis court. */
const KM = (unit: Phrase): readonly OnboardingOption[] => [
  { value: '0-5', label: (t) => t('onboarding.load.km0', { unit: unit(t) }), caption: PER_WEEK },
  { value: '5-15', label: (t) => t('onboarding.load.km1', { unit: unit(t) }), caption: PER_WEEK },
  { value: '15-30', label: (t) => t('onboarding.load.km2', { unit: unit(t) }), caption: PER_WEEK },
  { value: '30-50', label: (t) => t('onboarding.load.km3', { unit: unit(t) }), caption: PER_WEEK },
  { value: '50+', label: (t) => t('onboarding.load.km4', { unit: unit(t) }), caption: PER_WEEK },
];

const UNIT_KM: Phrase = (t) => t('onboarding.load.unitKm');

const HOURS: readonly OnboardingOption[] = [
  { value: '0-5', label: (t) => t('onboarding.load.hours0'), caption: PER_WEEK },
  { value: '5-15', label: (t) => t('onboarding.load.hours1'), caption: PER_WEEK },
  { value: '15-30', label: (t) => t('onboarding.load.hours2'), caption: PER_WEEK },
  { value: '30-50', label: (t) => t('onboarding.load.hours3'), caption: PER_WEEK },
  { value: '50+', label: (t) => t('onboarding.load.hours4'), caption: PER_WEEK },
];

/**
 * The load question, in the language of the chosen sport.
 *
 * Option *values* are identical across every sport on purpose — the scoring
 * model reads `0-5` … `50+` and should not have to know which sport produced
 * them. Only the labels and the question change.
 */
const LOAD: Record<SportKey, LoadQuestion> = {
  running: {
    title: (t) => t('onboarding.load.titleRunning', NAME_SLOT),
    blurb: (t) => t('onboarding.load.blurb'),
    options: KM(UNIT_KM),
    extraLabel: (t) => t('onboarding.load.runsPerWeek'),
  },
  tennis: {
    title: (t) => t('onboarding.load.titleTennis', NAME_SLOT),
    blurb: (t) => t('onboarding.load.blurbTennis'),
    options: HOURS,
    extraLabel: (t) => t('onboarding.load.sessionsPerWeek'),
  },
  gym: {
    title: (t) => t('onboarding.load.titleGym', NAME_SLOT),
    blurb: (t) => t('onboarding.load.blurbGym'),
    options: HOURS,
    extraLabel: (t) => t('onboarding.load.sessionsPerWeek'),
  },
  football: {
    title: (t) => t('onboarding.load.titleFootball', NAME_SLOT),
    blurb: (t) => t('onboarding.load.blurbFootball'),
    options: HOURS,
    extraLabel: (t) => t('onboarding.load.sessionsPerWeek'),
  },
  basketball: {
    title: (t) => t('onboarding.load.titleBasketball', NAME_SLOT),
    blurb: (t) => t('onboarding.load.blurbBasketball'),
    options: HOURS,
    extraLabel: (t) => t('onboarding.load.sessionsPerWeek'),
  },
  cycling: {
    title: (t) => t('onboarding.load.titleCycling', NAME_SLOT),
    blurb: (t) => t('onboarding.load.blurb'),
    options: KM(UNIT_KM),
    extraLabel: (t) => t('onboarding.load.ridesPerWeek'),
  },
  hiking: {
    title: (t) => t('onboarding.load.titleHiking', NAME_SLOT),
    blurb: (t) => t('onboarding.load.blurbMonth'),
    options: HOURS,
    extraLabel: (t) => t('onboarding.load.hikesPerMonth'),
  },
};

export function loadQuestionFor(sport: string | null): LoadQuestion {
  return LOAD[(sport ?? 'running') as SportKey] ?? LOAD.running;
}
