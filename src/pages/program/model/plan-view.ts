import {
  CHAINS,
  daysBetween,
  focusChainOf,
  outcomeProgress,
  type Outcome,
  type AdjustedDay,
  type Goal,
  type GoalType,
  type PlanDay,
  type Rationale,
  type SessionRecord,
  type WeekPlan,
} from '@/entities/program';
import type { Translate } from '@/shared/lib/i18n';

/**
 * The plan screen, worked out before it is drawn — pure apart from the
 * translator, so every rule in the rework spec can be tested without rendering.
 */

// ── The big goal ─────────────────────────────────────────────────────────────

export type OutcomeView = {
  /** "Tennis [pain-free]" — the lead is the chip. Either side may be empty. */
  headline: { before: string; lead: string; after: string };
  /** The goal being worked, for the colour. Null once every step is done. */
  current: GoalType | null;
};

/**
 * "{sport} [без боли]" → the words around the bracketed lead, which the card
 * sets as a chip. Where the lead sits is each language's call, so the catalogue
 * marks it inside one whole sentence rather than splitting it into fragments.
 */
export function splitLead(sentence: string): { before: string; lead: string; after: string } {
  const match = /^(.*?)\[(.+?)\](.*)$/.exec(sentence);
  if (match == null) return { before: sentence.trim(), lead: '', after: '' };
  return { before: match[1].trim(), lead: match[2].trim(), after: match[3].trim() };
}

/** The outcome's sentence. Three kinds name the sport; the rest stand alone. */
function sentenceFor(t: Translate, kind: Outcome['kind'], sportName: string, sportFor: string): string {
  switch (kind) {
    case 'painfree':
      return t('pages.plan.outcome.painfree', { sport: sportName });
    case 'stronger':
    case 'injury_free':
      return t(`pages.plan.outcome.${kind}`, { sport: sportFor });
    default:
      return t(`pages.plan.outcome.${kind}`);
  }
}

/**
 * The goal's head: what the person came for, and which step is being worked
 * (for the rail's colour). The weeks that work towards it are the rail under
 * it (`weekPath`).
 */
export function outcomeView(t: Translate, outcome: Outcome, goals: readonly Goal[], focus: GoalType | null): OutcomeView {
  const progress = outcomeProgress(outcome, goals, focus);
  // "for running" needs its own form in Russian (для бега) and Spanish (para correr).
  const sportFor = t(`pages.plan.outcome.sportFor.${outcome.sport ?? 'none'}`);
  const sportName = t(`pages.plan.outcome.sport.${outcome.sport ?? 'none'}`);
  return { headline: splitLead(sentenceFor(t, outcome.kind, sportName, sportFor)), current: progress.current };
}

// ── The weeks ahead ──────────────────────────────────────────────────────────

/**
 * What a week is for: its title and its mascot. `settling` is the plan's first
 * week, which only eases in; `keep` is a week with no goal left to work, which
 * keeps the reached ones ticking over.
 */
export type WeekTheme = 'settling' | GoalType | 'keep';

/**
 * What is different about a week, read off the engine rather than written for
 * it: the week against the week before it, as stored.
 *
 * - `settling`: the first week. Nothing that loads the sole, nothing above
 *   level two, and only seated moves after a seated start.
 * - `focus`: the week works a goal the week before did not, or nothing is
 *   known of the week before: what that goal's work is. This week says it too
 *   when nothing else changed.
 * - `down`: the focus move sits a level lower than the week before.
 * - `up`: a level higher, and the move it reached is in the week.
 * - `newMove`: a move the plan has never scheduled before.
 * - `opens`: the second week, the first one allowed to step up.
 * - `same`: none of these, said of next week.
 * - `keep`: no goal left to work.
 */
export type WeekChange =
  | { kind: 'settling'; seated: boolean }
  | { kind: 'focus'; goal: GoalType }
  | { kind: 'down' }
  | { kind: 'up'; exercise: string }
  | { kind: 'newMove'; exercise: string }
  | { kind: 'opens' }
  | { kind: 'same' }
  | { kind: 'keep' };

/** One week on the path: this one, or the one after it. */
export type PathWeek = {
  kind: 'week';
  when: 'this' | 'next';
  /** Monday, `YYYY-MM-DD`. */
  weekStart: string;
  theme: WeekTheme;
  change: WeekChange;
  /** Days with something to do: the sessions, and a test day among them. */
  days: number;
  /** A session's planned minutes. 0 for a week with no session in it. */
  minutes: number;
  /** The week's moves, each once: the focus's first, then the ones on most days. */
  moves: string[];
  /** Those of them the plan has never scheduled before. */
  fresh: string[];
};

/** A test day on the path: the one taken this week, or the next one. */
export type PathTest = {
  kind: 'test';
  state: 'done' | 'next';
  /** `YYYY-MM-DD`. */
  date: string;
};

export type PathNode = PathWeek | PathTest;

export type WeekPathInput = {
  /** This week, as stored. */
  thisWeek: WeekPlan;
  /** The week before it, as stored; null when none was planned. */
  lastWeek: WeekPlan | null;
  /** Next week: stored once Sunday evening has built it, as it would be built today until then. */
  nextWeek: WeekPlan;
  today: string;
  /** The day the last test was taken, or null before the first. */
  lastTest: string | null;
  /** The day of the next test. */
  nextTest: string;
  /** Week one seated only (`PlanSettings.seatedStart`). */
  seatedStart: boolean;
};

/**
 * The plan as weeks: this week and next, each with what it works on, what
 * changes in it, its days, its minutes and its moves, and the test days on the
 * rail where they fall.
 *
 * Two weeks and no more, because two are all the engine can tell truthfully.
 * This week is stored. Next week is the week as it would be built today (and
 * stored from Sunday evening): its shape, its focus and its moves are the
 * engine's own, and only how this week goes can still move them. The week
 * after that would start from levels nothing has decided yet, and from
 * feedback, pain and a test that have not happened, so it is not drawn; the
 * screen says how those weeks get made instead.
 *
 * A test taken this week leads the path, ticked. The next test sits where it
 * falls, so the rail reads in date order: first when it is today, between the
 * two weeks when it comes later this week, after next week's card when it is
 * in next week or further off (a test on next Wednesday drawn above "Next week
 * · from Monday" would read as coming before it). Never a plan length, never
 * "week N of M", never an end.
 */
export function weekPath(input: WeekPathInput): PathNode[] {
  const { thisWeek, lastWeek, nextWeek, today, lastTest, nextTest, seatedStart } = input;
  const test: PathTest = { kind: 'test', state: 'next', date: nextTest };
  const nodes: PathNode[] = [];
  if (lastTest != null && lastTest >= thisWeek.weekStart && lastTest <= today) {
    nodes.push({ kind: 'test', state: 'done', date: lastTest });
  }
  if (nextTest <= today) nodes.push(test);
  nodes.push(weekOf(thisWeek, lastWeek, 'this', seatedStart));
  if (nextTest > today && nextTest < nextWeek.weekStart) nodes.push(test);
  nodes.push(weekOf(nextWeek, thisWeek, 'next', seatedStart));
  if (nextTest >= nextWeek.weekStart) nodes.push(test);
  return nodes;
}

function weekOf(week: WeekPlan, before: WeekPlan | null, when: PathWeek['when'], seatedStart: boolean): PathWeek {
  const work = week.days.filter((day) => day.type !== 'rest');
  const sessions = work.filter((day) => day.type !== 'test');
  const moves = movesOf(sessions);
  return {
    kind: 'week',
    when,
    weekStart: week.weekStart,
    theme: week.weekIndex === 1 ? 'settling' : (week.focus ?? 'keep'),
    change: changeOf(week, before, moves, when, seatedStart),
    days: work.length,
    // The last session's: a setting changed mid-week re-plans the days from
    // then on, so the latest day is the one that holds.
    minutes: sessions.length > 0 ? sessions[sessions.length - 1].minutes : 0,
    moves,
    fresh: week.newThisWeek.filter((id) => moves.includes(id)),
  };
}

/** Every move in the week once: the focus's first, then the ones on most days, then in order. */
function movesOf(days: readonly PlanDay[]): string[] {
  const seen = new Map<string, { focus: boolean; days: number; first: number }>();
  for (const day of days) {
    for (const exercise of day.exercises) {
      const had = seen.get(exercise.id);
      seen.set(
        exercise.id,
        had == null
          ? { focus: exercise.focus, days: 1, first: seen.size }
          : { ...had, focus: had.focus || exercise.focus, days: had.days + 1 },
      );
    }
  }
  return [...seen.entries()]
    .sort(([, a], [, b]) => Number(b.focus) - Number(a.focus) || b.days - a.days || a.first - b.first)
    .map(([id]) => id);
}

function changeOf(
  week: WeekPlan,
  before: WeekPlan | null,
  moves: readonly string[],
  when: PathWeek['when'],
  seatedStart: boolean,
): WeekChange {
  if (week.weekIndex === 1) return { kind: 'settling', seated: seatedStart };
  const focus = week.focus;
  if (focus == null) return { kind: 'keep' };
  if (before == null || before.focus !== focus) return { kind: 'focus', goal: focus };
  const chain = focusChainOf(focus);
  const was = before.levels[chain];
  const now = week.levels[chain];
  if (now < was) return { kind: 'down' };
  const reached = CHAINS[chain][now];
  if (now > was && reached != null && moves.includes(reached)) return { kind: 'up', exercise: reached };
  const fresh = week.newThisWeek.find((id) => moves.includes(id));
  if (fresh != null) return { kind: 'newMove', exercise: fresh };
  if (week.weekIndex === 2) return { kind: 'opens' };
  // Nothing moved. This week says what its work is; next week, that it
  // holds the level, rather than the same sentence twice.
  return when === 'this' ? { kind: 'focus', goal: focus } : { kind: 'same' };
}

/** A node the person has got to: a test taken, or this week. */
export function pathReached(node: PathNode): boolean {
  return node.kind === 'test' ? node.state === 'done' : node.when === 'this';
}

/** "This week", or "Next week · from 19 Oct". `dateLabel` formats the Monday in the reader's language. */
export function weekLabel(t: Translate, week: PathWeek, dateLabel: (date: string) => string): string {
  return week.when === 'this'
    ? t('pages.plan.weeks.this')
    : t('pages.plan.weeks.nextFrom', { date: dateLabel(week.weekStart) });
}

/** "Settle things down", "Build the calves": what the week works on. */
export function weekTitle(t: Translate, week: PathWeek): string {
  return t(`pages.plan.weeks.title.${week.theme}`);
}

/**
 * The one sentence under a week's title: what changes in it. The work, never
 * a result, a promise or a pain figure. `nameOf` gives a move's name in the
 * reader's language.
 */
export function weekLine(t: Translate, change: WeekChange, nameOf: (id: string) => string): string {
  switch (change.kind) {
    case 'settling':
      return t(change.seated ? 'pages.plan.weeks.change.settlingSeated' : 'pages.plan.weeks.change.settling');
    case 'focus':
      return t(`pages.plan.weeks.about.${change.goal}`);
    case 'up':
      return t('pages.plan.weeks.change.up', { exercise: nameOf(change.exercise) });
    case 'newMove':
      return t('pages.plan.weeks.change.newMove', { exercise: nameOf(change.exercise) });
    case 'down':
    case 'opens':
    case 'same':
    case 'keep':
      return t(`pages.plan.weeks.change.${change.kind}`);
  }
}

/**
 * A test day's line on the rail, one whole sentence per case.
 *
 * Taken: "Test day · today", or the day it was taken; the rail draws the tick
 * beside it. The next one: when it is, "Test day · in 12 days". `dateLabel`
 * formats a taken test's day in the reader's language.
 */
export function testLine(t: Translate, test: PathTest, today: string, dateLabel: (date: string) => string): string {
  if (test.state === 'done') {
    return test.date === today ? t('pages.plan.path.testToday') : t('pages.plan.path.testOn', { date: dateLabel(test.date) });
  }
  const days = daysBetween(today, test.date);
  if (days <= 0) return t('pages.plan.path.testToday');
  if (days === 1) return t('pages.plan.path.testTomorrow');
  return t('pages.plan.path.testIn', { count: days });
}

// ── The line under the goal ──────────────────────────────────────────────────

/**
 * The rationale, only when it says something the goal block does not. The
 * default line and the new-focus line only restate the goal, so they are
 * dropped; "new this week" stands in when nothing else qualifies.
 *
 * A calm week says pain stayed low, never at what: no pain figure is shown on
 * the plan screen, so `rationale.n` is not read here.
 */
export function rationaleLine(t: Translate, rationale: Rationale, newExercise: string | null): string | null {
  switch (rationale.kind) {
    case 'first':
    case 'painUp':
    case 'hard':
    case 'easy':
    case 'painLow':
      return t(`pages.week.rationale.${rationale.kind}`);
    case 'default':
    case 'newFocus':
      return newExercise == null ? null : t('pages.week.newThisWeek', { exercise: newExercise });
  }
}

// ── The today card ───────────────────────────────────────────────────────────

const KIND_KEY = {
  strength: 'pages.program.kindStrength',
  mobility: 'pages.program.kindMobility',
  balance: 'pages.program.kindBalance',
  recovery: 'pages.program.kindRecovery',
} as const;

export type TodayVariant = 'session' | 'easy' | 'test' | 'rest' | 'done';

export function todayVariant(day: AdjustedDay, done: boolean): TodayVariant {
  if (done) return 'done';
  if (day.type === 'rest') return 'rest';
  if (day.type === 'test') return 'test';
  return day.reason === 'flare' ? 'easy' : 'session';
}

export function kindName(t: Translate, type: PlanDay['type']): string {
  if (type === 'test') return t('pages.plan.testTitle');
  if (type === 'rest') return t('pages.plan.stripRest');
  return t(KIND_KEY[type]);
}

/** "Strength · arch", "Easy day · seated", "Test day". */
export function todayTitle(t: Translate, day: AdjustedDay, focus: GoalType | null, variant: TodayVariant): string {
  if (variant === 'easy') return t('pages.plan.easyDay');
  if (variant === 'test') return t('pages.plan.testTitle');
  if (day.type === 'rest' || day.type === 'test') return kindName(t, day.type);
  if (focus == null) return kindName(t, day.type);
  return t('pages.plan.todayTitle', { kind: kindName(t, day.type), goal: t(`pages.plan.short.${focus}`) });
}

// ── A finished day ───────────────────────────────────────────────────────────

/**
 * Tomorrow's card title, the way today's is written: "Mobility · calves",
 * "Test day", "Rest day". `focus` is the focus of the week tomorrow falls in,
 * which on a Sunday is next week's.
 */
export function upcomingTitle(t: Translate, type: PlanDay['type'], focus: GoalType | null): string {
  if (type === 'rest') return t('pages.week.rest');
  if (type === 'test' || focus == null) return kindName(t, type);
  return t('pages.plan.todayTitle', { kind: kindName(t, type), goal: t(`pages.plan.short.${focus}`) });
}

/**
 * A finished day's title, on the card that leads it: today's title as it read
 * before the session. A flare day stays "Easy day · seated", and a day the
 * plan had as rest is "Rest day", never the lower-case strip label.
 */
export function doneTitle(t: Translate, day: AdjustedDay, focus: GoalType | null): string {
  if (day.type === 'rest' || day.type === 'test') return upcomingTitle(t, day.type, focus);
  return todayTitle(t, day, focus, day.reason === 'flare' ? 'easy' : 'session');
}

/**
 * What today's records say was done, for the tiles on a finished day.
 *
 * Home's done card's rule, so the two screens never give one day two figures:
 * summed across every session filed for the day (the plan, and a Library
 * routine beside it), each move counted once. A day finished without a record
 * (by ticks alone) falls back to the plan's minutes and the ticked moves. The
 * minutes are each session's planned dose, never the clock, so taking longer
 * cannot raise them. Never a pain figure: the records' pain is not read.
 */
export function earnedToday(
  records: readonly Pick<SessionRecord, 'date' | 'minutes' | 'exercises'>[],
  date: string,
  fallback: { minutes: number; moves: number },
): { minutes: number; moves: number } {
  const today = records.filter((record) => record.date === date);
  const minutes = today.reduce((sum, record) => sum + record.minutes, 0);
  const moves = new Set(
    today.flatMap((record) => record.exercises.filter((e) => e.status === 'done').map((e) => e.id)),
  ).size;
  return {
    minutes: Math.max(1, Math.round(minutes > 0 ? minutes : fallback.minutes)),
    moves: Math.max(1, moves > 0 ? moves : fallback.moves),
  };
}
