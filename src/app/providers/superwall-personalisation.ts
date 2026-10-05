import type { Intake } from '@/entities/profile';
import { translatorFor, type Key, type Language } from '@/shared/lib/i18n';

/**
 * What a Superwall paywall may say about the person reading it.
 *
 * Sent as user attributes (audiences can target them) and with every
 * placement (paywall text reads them as `{{ params.first_name }}` and so on),
 * computed fresh at each call because the plan is rebuilt as onboarding ends,
 * a moment before the first paywall.
 *
 * The plan and the person's own words for what they want, never their body:
 * no pain, zones, side, measurements, age, weight or shoe size, by the same
 * rule as analytics. Goals that name a condition (running pain-free, stronger
 * arches, coming back from an injury) are left out too: this is a paywall,
 * and App Review 5.1.3 keeps health-context data away from third parties for
 * marketing. A missing answer is left out rather than sent as empty, so a
 * paywall's fallback text shows instead of a gap.
 *
 * Pure, so `tests/paywall-personalisation.test.ts` can hold it to that; the
 * provider passes in the live plan.
 */

/** The goals a paywall may name. `painfree`, `flatfeet` and `comeback` are
 * missing on purpose: see above. */
const GOALS = {
  race: 'onboarding.goal.race',
  consistent: 'onboarding.goal.consistent',
  stronger: 'onboarding.goal.stronger',
  injuryfree: 'onboarding.goal.injuryfree',
  ankles: 'onboarding.goal.ankles',
  jump: 'onboarding.goal.jump',
  allday: 'onboarding.goal.allday',
  steady: 'onboarding.goal.steady',
} as const satisfies Record<string, Key>;

const SPORTS = {
  running: 'onboarding.sport.running',
  tennis: 'onboarding.sport.tennis',
  gym: 'onboarding.sport.gym',
  football: 'onboarding.sport.football',
  basketball: 'onboarding.sport.basketball',
  cycling: 'onboarding.sport.cycling',
  hiking: 'onboarding.sport.hiking',
} as const satisfies Record<string, Key>;

export type Personalisation = Record<string, string | number>;

export type PersonalisationInput = {
  name: string;
  intake: Intake | null;
  language: Language;
  /** Days in the plan. */
  planLength: number;
  /** 1-based day of the first retest after the baseline, when there is one. */
  firstRetestDay: number | undefined;
  /** The calendar date, epoch ms, of a 1-based plan day. */
  dateOfDay: (day: number) => number;
};

export function paywallPersonalisation(input: PersonalisationInput): Personalisation {
  const { intake, language } = input;
  const t = translatorFor(language);
  const out: Personalisation = {};

  const first = input.name.trim().split(/\s+/)[0] ?? '';
  if (first !== '') out.first_name = first;

  const goal = intake?.goal;
  if (goal != null && goal in GOALS) {
    out.goal = goal;
    out.goal_label = t(GOALS[goal as keyof typeof GOALS]);
  }
  const sport = intake?.sport;
  if (sport != null && sport in SPORTS) {
    out.sport = sport;
    out.sport_label = t(SPORTS[sport as keyof typeof SPORTS]);
  }
  if (intake?.runner != null) out.runner = intake.runner;

  const date = (day: number) =>
    new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(new Date(input.dateOfDay(day)));
  out.plan_weeks = Math.round(input.planLength / 7);
  out.plan_end_date = date(input.planLength);
  if (input.firstRetestDay != null) out.first_checkpoint_date = date(input.firstRetestDay);

  return out;
}
