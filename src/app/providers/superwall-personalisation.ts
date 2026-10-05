import type { Intake } from '@/entities/profile';
import type { GoalType, OutcomeKind } from '@/entities/program';
import { translatorFor, type Key, type Language } from '@/shared/lib/i18n';

/**
 * What a Superwall paywall may say about the person reading it.
 *
 * Sent as user attributes (audiences can target them) and with every
 * placement (paywall text reads them as `{{ params.first_name }}` and so on),
 * computed fresh at each call because the plan is set up as onboarding ends,
 * a moment before the first paywall.
 *
 * The plan as it is now: open-ended, one big goal worked one measured step at
 * a time, a new week every Sunday, a test on day one and every two weeks. No
 * plan length or end date, because there is none.
 *
 * The plan and the person's own words for what they want, never their body:
 * no pain, zones, side, measurements, age, weight or shoe size, by the same
 * rule as analytics. Goals that name a condition (pain-free, stronger arches
 * against flat feet, back after an injury, easier mornings) are left out too:
 * this is a paywall, and App Review 5.1.3 keeps health-context data away from
 * third parties for marketing. A missing answer is left out rather than sent
 * as empty, so a paywall's fallback text shows instead of a gap. Every value
 * is a string: the paywall declares its params as text.
 *
 * Pure, so `tests/paywall-personalisation.test.ts` can hold it to that; the
 * provider passes in the live plan.
 */

/** The big goals a paywall may name. `painfree`, `flat_feet` and `comeback`
 * are missing on purpose: see above. */
const GOALS = {
  stronger: 'settings.outcome.stronger',
  injury_free: 'settings.outcome.injury_free',
  stable_ankles: 'settings.outcome.stable_ankles',
  jump_higher: 'settings.outcome.jump_higher',
  race_ready: 'settings.outcome.race_ready',
  all_day: 'settings.outcome.all_day',
  steady: 'settings.outcome.steady',
} as const satisfies Partial<Record<OutcomeKind, Key>>;

/** The measured steps a paywall may name. `pain_free_mornings` is missing on
 * purpose. */
const STEPS = {
  arch_hold: 'pages.week.goal.arch_hold',
  calf_raises: 'pages.week.goal.calf_raises',
  balance: 'pages.week.goal.balance',
  symmetry: 'pages.week.goal.symmetry',
} as const satisfies Partial<Record<GoalType, Key>>;

const SPORTS = {
  running: 'onboarding.sport.running',
  tennis: 'onboarding.sport.tennis',
  gym: 'onboarding.sport.gym',
  football: 'onboarding.sport.football',
  basketball: 'onboarding.sport.basketball',
  cycling: 'onboarding.sport.cycling',
  hiking: 'onboarding.sport.hiking',
} as const satisfies Record<string, Key>;

/** Days from the first test to the next, as `testDue` counts them. */
const FIRST_RETEST_DAYS = 14;

export type Personalisation = Record<string, string>;

export type PersonalisationInput = {
  name: string;
  intake: Intake | null;
  language: Language;
  /** The big goal and the measured steps to it, in the order they are worked. */
  outcome: { kind: OutcomeKind; steps: readonly GoalType[] } | null;
  daysPerWeek: number;
  minutes: number;
  /** Now, epoch ms. */
  now: number;
};

export function paywallPersonalisation(input: PersonalisationInput): Personalisation {
  const { intake, language, outcome } = input;
  const t = translatorFor(language);
  const out: Personalisation = {};

  const first = input.name.trim().split(/\s+/)[0] ?? '';
  if (first !== '') out.first_name = first;

  if (outcome != null && outcome.kind in GOALS) {
    out.goal = outcome.kind;
    out.goal_label = t(GOALS[outcome.kind as keyof typeof GOALS]);
  }
  // The first step only when it can be named: one that names a condition
  // leaves the paywall's general line in place rather than skipping ahead.
  const focus = outcome?.steps[0];
  if (focus != null && focus in STEPS) {
    out.focus = focus;
    out.focus_label = t(STEPS[focus as keyof typeof STEPS]);
  }

  const sport = intake?.sport;
  if (sport != null && sport in SPORTS) {
    out.sport = sport;
    out.sport_label = t(SPORTS[sport as keyof typeof SPORTS]);
  }
  if (intake?.runner != null) out.runner = intake.runner;

  out.days_per_week = String(input.daysPerWeek);
  out.minutes = String(input.minutes);
  // The first test is today, so the first one that can show a change is a
  // fortnight on.
  out.progress_check_date = new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(
    new Date(input.now + FIRST_RETEST_DAYS * 86_400_000),
  );

  return out;
}
