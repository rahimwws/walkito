/**
 * The shapes the email system works with.
 *
 * Everything under `_shared/email` is plain TypeScript with no Deno globals and
 * no `npm:` specifiers, so the same files run in the edge function and in
 * `bun test`. The edge functions' own `index.ts` files are the only place that
 * touches Deno, Supabase or Resend.
 */

export type Locale = 'en' | 'ru' | 'es' | 'pt' | 'fr' | 'de' | 'it';

export const LOCALES: readonly Locale[] = ['en', 'ru', 'es', 'pt', 'fr', 'de', 'it'];

/** Narrows whatever the phone or a row sent to a language we write emails in,
 * or English. A whole email in one language, never a mix. */
export function asLocale(value: unknown): Locale {
  return (LOCALES as readonly unknown[]).includes(value) ? (value as Locale) : 'en';
}

/** Mirrors `GoalType` in `src/entities/program/model/plan/goals.ts`. */
export type GoalType = 'pain_free_mornings' | 'arch_hold' | 'calf_raises' | 'balance' | 'symmetry';

export type GoalStatus = 'active' | 'achieved' | 'maintaining';

/** The four things a test measures. Pain is never one of them. */
export type Metric = 'calf' | 'arch' | 'balance' | 'symmetry';

export const METRICS: readonly Metric[] = ['calf', 'arch', 'balance', 'symmetry'];

/** Targets from `GOAL_SPECS`. Symmetry is the left/right gap, lower is better. */
export const METRIC_TARGET: Readonly<Record<Metric, number>> = { calf: 25, arch: 60, balance: 30, symmetry: 10 };

export const METRIC_OF_GOAL: Readonly<Record<GoalType, Metric | null>> = {
  pain_free_mornings: null,
  arch_hold: 'arch',
  calf_raises: 'calf',
  balance: 'balance',
  symmetry: 'symmetry',
};

export const GOAL_ORDER: readonly GoalType[] = ['pain_free_mornings', 'arch_hold', 'calf_raises', 'balance', 'symmetry'];

export type EmailKey =
  | 'welcome'
  | 'day2_morning'
  | 'day2_focus'
  | 'day5_easy'
  | 'day5_start'
  | 'day10_keep'
  | 'day14_test'
  | 'test_result'
  | 'goal_reached'
  | 'pain_up'
  | 'winback_7'
  | 'winback_21'
  | 'offer'
  | 'offer_final'
  | 'weekly';

export const EMAIL_KEYS: readonly EmailKey[] = [
  'welcome',
  'day2_morning',
  'day2_focus',
  'day5_easy',
  'day5_start',
  'day10_keep',
  'day14_test',
  'test_result',
  'goal_reached',
  'pain_up',
  'winback_7',
  'winback_21',
  'offer',
  'offer_final',
  'weekly',
];

/** One test, the sore side's figures (the app always stores the sore side as left). */
export type TestRow = {
  dayNumber: number;
  takenOn: string;
  calf: number;
  arch: number;
  balance: number;
  /** Left/right gap, percent. */
  symmetry: number;
};

export type CheckinRow = {
  date: string;
  painMorning: number | null;
  /** The highest reading logged that day, morning included. */
  maxPain: number | null;
  morningStretch: boolean;
};

export type SessionRow = {
  date: string;
  source: 'plan' | 'library' | 'quick' | 'test';
  minutes: number;
  completedAt: string;
};

export type GoalRow = {
  type: GoalType;
  status: GoalStatus;
  baseline: number | null;
  current: number | null;
  since: string;
  achievedOn: string | null;
};

export type WeekRow = {
  weekStart: string;
  focus: GoalType | null;
  /** `PlanDay[]` — only date, type and minutes are read. */
  days: { date: string; type: string; minutes: number }[];
};

export type LogRow = {
  emailKey: EmailKey;
  dedupeKey: string;
  sentAt: string;
  status: 'sending' | 'sent' | 'failed';
};

/**
 * What the app recorded when the paywall was last shown, from RevenueCat.
 *
 * The prices are the annual subscription's: the discounted one the `offer`
 * offering sells and the standard one. Only a view that says so (`plan:
 * 'annual'` in its props) is read for them — see `paywallFrom` in `load.ts`.
 */
export type PaywallView = {
  firstAt: string;
  lastAt: string;
  /** Store-formatted price of the discounted annual subscription, e.g. "$29.99". */
  offerPrice: string | null;
  /** Store-formatted price of the standard annual subscription. */
  standardPrice: string | null;
  /** Rounded discount, computed on the phone from the two store prices. */
  percent: number | null;
};

export type Contact = {
  email: string;
  locale: Locale;
  timezone: string;
  firstName: string | null;
  lifecycleOptIn: boolean;
  weeklyOptIn: boolean;
  unsubscribedAt: string | null;
  bounced: boolean;
  createdAt: string;
};

export type Profile = {
  /** Day 1 of the plan, `YYYY-MM-DD`. */
  weeksStartedOn: string | null;
  createdAt: string | null;
  lastSyncedAt: string | null;
  lastAppOpenAt: string | null;
  painZones: string[];
  sport: string | null;
  defaultMinutes: number;
  /** `YYYY-MM-DD` days the phone has a session push laid for. */
  pushSessionDates: string[];
  /** `YYYY-MM-DD` days the phone has a retest push laid for. */
  pushTestDates: string[];
  /** The big goal's steps in order, from `outcome.steps`. */
  steps: GoalType[];
};

/** Everything the scheduler knows about one user, loaded in one pass. */
export type Snapshot = {
  userId: string;
  contact: Contact;
  profile: Profile | null;
  goals: GoalRow[];
  tests: TestRow[];
  /** The last 30 days or so, oldest first. */
  checkins: CheckinRow[];
  /** The last 30 days or so, oldest first. */
  sessions: SessionRow[];
  sessionsTotal: number;
  /** This week and next, when built. */
  weeks: WeekRow[];
  paywall: PaywallView | null;
  subscription: 'active' | 'expired' | 'none' | null;
  log: LogRow[];
};

/** The words an email is made of, before any HTML. */
export type EmailContent = {
  subject: string;
  /** The line an inbox shows after the subject. */
  preheader: string;
  greeting: string | null;
  paragraphs: string[];
  button: { label: string; path: string };
  ps: string | null;
};

export type Decision = {
  key: EmailKey;
  dedupeKey: string;
  content: EmailContent;
};
