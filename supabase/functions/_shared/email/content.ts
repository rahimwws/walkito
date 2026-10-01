import { copyFor } from './copy.ts';
import { num } from './plural.ts';
import { METRIC_TARGET, type EmailContent, type EmailKey, type GoalType, type Locale, type Metric, type PaywallView } from './types.ts';

/**
 * Turns the facts `rules.ts` settled on into the words of one email.
 *
 * Nothing here decides whether an email goes; every function assumes it does
 * and only chooses between the sentences the copy offers. Numbers are passed
 * in raw and formatted here, per language, so "3,5" and "3.5" are never the
 * caller's problem.
 */

/** Where each email's button lands. Paths are the app's `/open/{path}` routes. */
export const BUTTON_PATH: Readonly<Record<EmailKey, string>> = {
  welcome: 'today',
  day2_morning: 'library/morning',
  day2_focus: 'plan',
  day5_easy: 'plan',
  day5_start: 'today?minutes=3',
  day10_keep: 'today',
  day14_test: 'test',
  test_result: 'progress',
  goal_reached: 'plan',
  pain_up: 'plan',
  winback_7: 'today?minutes=3',
  winback_21: 'today',
  offer: 'paywall?offering=offer',
  offer_final: 'paywall?offering=offer',
  weekly: 'plan',
};

/** A figure the way a sentence shows it. Symmetry is stored with decimals; it is shown whole. */
function shown(locale: Locale, metric: Metric, n: number): string {
  return num(locale, metric === 'symmetry' ? Math.round(n) : n);
}

function value(locale: Locale, metric: Metric, n: number): string {
  return copyFor(locale).value(metric, shown(locale, metric, n));
}

function target(locale: Locale, metric: Metric): string {
  return copyFor(locale).target(metric, num(locale, METRIC_TARGET[metric]));
}

/** Whether a figure has already reached its goal. */
export function reached(metric: Metric, n: number): boolean {
  return metric === 'symmetry' ? n < METRIC_TARGET.symmetry : n >= METRIC_TARGET[metric];
}

function email(
  key: EmailKey,
  subject: string,
  paragraphs: string[],
  button: string,
  extra: { greeting?: string | null; ps?: string | null } = {},
): EmailContent {
  return {
    subject,
    preheader: paragraphs[0] ?? '',
    greeting: extra.greeting ?? null,
    paragraphs,
    button: { label: button, path: BUTTON_PATH[key] },
    ps: extra.ps ?? null,
  };
}

export function welcome(locale: Locale, input: { name: string | null; minutes: number; runner: boolean }): EmailContent {
  const c = copyFor(locale).welcome;
  const first = input.runner ? c.firstRunner(input.minutes) : c.first(input.minutes);
  return email('welcome', c.subject, [c.intro, first], c.button, {
    greeting: copyFor(locale).greeting(input.name),
    ps: c.ps,
  });
}

export function day2Morning(locale: Locale): EmailContent {
  const c = copyFor(locale).day2Morning;
  return email('day2_morning', c.subject, [...c.lines], c.button);
}

export function day2Focus(locale: Locale, input: { goal: GoalType; metric: Metric | null; current: number | null }): EmailContent {
  const copy = copyFor(locale);
  const c = copy.day2Focus;
  const paragraphs =
    input.metric != null && input.current != null
      ? [c.numbers(copy.metricName[input.metric], value(locale, input.metric, input.current), target(locale, input.metric)), c.moves]
      : [c.noNumbers(copy.goalTitle[input.goal])];
  return email('day2_focus', c.subject[input.goal], paragraphs, c.button);
}

export function day5Easy(locale: Locale): EmailContent {
  const c = copyFor(locale).day5Easy;
  return email('day5_easy', c.subject, [...c.lines], c.button);
}

/** Always three minutes: the button opens the three-minute version. */
export function day5Start(locale: Locale): EmailContent {
  const c = copyFor(locale).day5Start;
  return email('day5_start', c.subject(3), [c.line], c.button(3));
}

export function day10Keep(
  locale: Locale,
  input: { days: number; minutes: number; painDrop: { start: number; last: number } | null },
): EmailContent {
  const c = copyFor(locale).day10Keep;
  const first = input.painDrop != null ? c.painDrop(num(locale, input.painDrop.start), num(locale, input.painDrop.last)) : c.notBecause;
  return email('day10_keep', c.subject, [first, c.daysIn(input.days)], c.button(input.minutes));
}

export function day14Test(locale: Locale, input: { metric: Metric | null; before: number | null }): EmailContent {
  const c = copyFor(locale).day14Test;
  const first =
    input.metric != null && input.before != null
      ? c.before(input.metric, input.metric === 'symmetry' ? Math.round(input.before) : input.before, shown(locale, input.metric, input.before))
      : c.generic;
  return email('day14_test', c.subject, [first, c.tests], c.button);
}

export function testResult(locale: Locale, input: { metric: Metric; before: number; now: number; weeks: number }): EmailContent {
  const copy = copyFor(locale);
  const c = copy.testResult;
  const subject = c.subject(copy.resultName[input.metric], value(locale, input.metric, input.before), value(locale, input.metric, input.now));
  const paragraphs = [c.work(input.weeks)];
  if (!reached(input.metric, input.now)) paragraphs.push(c.goal(target(locale, input.metric)));
  return email('test_result', subject, [paragraphs.join(' ')], c.button);
}

const GOAL_TARGET: Readonly<Record<GoalType, number>> = {
  pain_free_mornings: 1,
  arch_hold: METRIC_TARGET.arch,
  calf_raises: METRIC_TARGET.calf,
  balance: METRIC_TARGET.balance,
  symmetry: METRIC_TARGET.symmetry,
};

export function goalReached(locale: Locale, input: { goal: GoalType; next: GoalType | null }): EmailContent {
  const copy = copyFor(locale);
  const c = copy.goalReached;
  const paragraphs = [c.reached(input.goal, GOAL_TARGET[input.goal])];
  if (input.next != null) paragraphs.push(c.next(copy.goalTitle[input.next]));
  return email('goal_reached', c.subject(copy.goalTitle[input.goal]), paragraphs, input.next != null ? c.buttonNext : c.buttonPlan);
}

export function painUp(locale: Locale): EmailContent {
  const c = copyFor(locale).painUp;
  return email('pain_up', c.subject, [...c.lines], c.button);
}

export function winback7(locale: Locale): EmailContent {
  const c = copyFor(locale).winback7;
  return email('winback_7', c.subject, [...c.lines], c.button);
}

export function winback21(locale: Locale, input: { metric: Metric | null; current: number | null }): EmailContent {
  const copy = copyFor(locale);
  const c = copy.winback21;
  const line =
    input.metric != null && input.current != null
      ? c.saved(copy.metricName[input.metric], value(locale, input.metric, input.current))
      : c.savedPlain;
  return email('winback_21', c.subject, [line], c.button);
}

export function offer(
  locale: Locale,
  input: { goal: GoalType | null; metric: Metric | null; current: number | null; paywall: PaywallView | null },
): EmailContent {
  const copy = copyFor(locale);
  const c = copy.offer;
  const pw = input.paywall;
  const percent = pw?.percent != null && pw.percent > 0 && pw.percent < 100 ? pw.percent : null;
  const paragraphs: string[] = [];
  if (input.goal != null) {
    paragraphs.push(
      input.metric != null && input.current != null
        ? c.ready(copy.goalTitle[input.goal], value(locale, input.metric, input.current), target(locale, input.metric))
        : c.readyPlain(copy.goalTitle[input.goal]),
    );
  }
  paragraphs.push(
    pw?.offerPrice != null && pw.standardPrice != null ? c.price(pw.offerPrice, pw.standardPrice) : c.priceUnknown,
  );
  return email('offer', c.subject(percent), paragraphs, c.button(percent));
}

export function offerFinal(locale: Locale, input: { paywall: PaywallView | null }): EmailContent {
  const c = copyFor(locale).offerFinal;
  const price = input.paywall?.offerPrice ?? null;
  return email('offer_final', c.subject, [price != null ? c.price(price) : c.priceUnknown], c.button(price));
}

export function weekly(
  locale: Locale,
  input: { sessions: number; metric: Metric | null; current: number | null; avgPain: number | null; next: GoalType | null },
): EmailContent {
  const copy = copyFor(locale);
  const c = copy.weekly;
  const subject =
    input.metric != null && input.current != null
      ? c.subjectWithMetric(input.sessions, copy.metricName[input.metric], value(locale, input.metric, input.current))
      : c.subject(input.sessions);
  const parts: string[] = [];
  if (input.avgPain != null) parts.push(c.mornings(num(locale, input.avgPain)));
  if (input.next != null) parts.push(c.next(copy.goalTitle[input.next]));
  const paragraphs = parts.length > 0 ? [parts.join(' ')] : [];
  return email('weekly', subject, paragraphs, c.button);
}
