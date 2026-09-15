import type { OnboardingOption } from './steps';

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
 * skippable. Each string carries its own fallback because "…, {name}?" and
 * "{name}, how…" cannot be repaired by the same rule.
 */
export function withName(text: string, name: string, sport?: string | null): string {
  const trimmed = name.trim();
  // `{activity}` is filled first and unconditionally — it always has a value,
  // and it must resolve even in the name-less branch below.
  if (text.includes('{activity}')) {
    text = text.replace(/\{activity\}/g, activityFor(sport ?? null));
  }
  if (!text.includes('{name}')) return text;
  if (trimmed.length === 0) {
    // Drop the slot and any punctuation left stranded around it.
    return text
      .replace(/,?\s*\{name\}/g, '')
      .replace(/\{name\},?\s*/g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s+([?!.])/g, '$1')
      .trim();
  }
  return text.replace(/\{name\}/g, trimmed);
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
  title: string;
  blurb: string;
  options: readonly OnboardingOption[];
  /** Label above the follow-up chips. */
  extraLabel: string;
};

/** Distance-based sports are asked in kilometres; the rest in hours, because
 * nobody knows how many kilometres they covered on a tennis court. */
const KM = (unit: string): readonly OnboardingOption[] => [
  { value: '0-5', label: `0–5 ${unit}`, caption: 'per week' },
  { value: '5-15', label: `5–15 ${unit}`, caption: 'per week' },
  { value: '15-30', label: `15–30 ${unit}`, caption: 'per week' },
  { value: '30-50', label: `30–50 ${unit}`, caption: 'per week' },
  { value: '50+', label: `50+ ${unit}`, caption: 'per week' },
];

const HOURS: readonly OnboardingOption[] = [
  { value: '0-5', label: 'Under 1 hour', caption: 'per week' },
  { value: '5-15', label: '1–3 hours', caption: 'per week' },
  { value: '15-30', label: '3–5 hours', caption: 'per week' },
  { value: '30-50', label: '5–8 hours', caption: 'per week' },
  { value: '50+', label: '8+ hours', caption: 'per week' },
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
    title: 'How much are you running now, {name}?',
    blurb: 'Your honest current week, not your best one.',
    options: KM('km'),
    extraLabel: 'Runs per week',
  },
  tennis: {
    title: 'How much are you on court, {name}?',
    blurb: 'Matches and practice together — the honest week.',
    options: HOURS,
    extraLabel: 'Sessions per week',
  },
  gym: {
    title: 'How much are you training, {name}?',
    blurb: 'Time under load, not time in the building.',
    options: HOURS,
    extraLabel: 'Sessions per week',
  },
  football: {
    title: 'How much are you playing, {name}?',
    blurb: 'Matches and training together — the honest week.',
    options: HOURS,
    extraLabel: 'Sessions per week',
  },
  basketball: {
    title: 'How much are you playing, {name}?',
    blurb: 'Games and practice together — the honest week.',
    options: HOURS,
    extraLabel: 'Sessions per week',
  },
  cycling: {
    title: 'How much are you riding, {name}?',
    blurb: 'Your honest current week, not your best one.',
    options: KM('km'),
    extraLabel: 'Rides per week',
  },
  hiking: {
    title: 'How much are you hiking, {name}?',
    blurb: 'Your honest current month, not your best one.',
    options: HOURS,
    extraLabel: 'Hikes per month',
  },
};

export function loadQuestionFor(sport: string | null): LoadQuestion {
  return LOAD[(sport ?? 'running') as SportKey] ?? LOAD.running;
}

/** How the sport is referred to mid-sentence, e.g. "during a run". */
const ACTIVITY: Record<SportKey, string> = {
  running: 'a run',
  tennis: 'a match',
  gym: 'a session',
  football: 'a match',
  basketball: 'a game',
  cycling: 'a ride',
  hiking: 'a hike',
};

export function activityFor(sport: string | null): string {
  return ACTIVITY[(sport ?? 'running') as SportKey] ?? ACTIVITY.running;
}
