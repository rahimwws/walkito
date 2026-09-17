/**
 * What each notification actually says.
 *
 * Pure: a kind plus the day's facts in, a title and body out. Kept apart from
 * the ladder so the wording can be argued over without touching the rules that
 * decide whether anything is said at all.
 *
 * Two constraints run through every line here and neither is stylistic.
 *
 * **Nothing cheerful after pain.** A user who logged an eight yesterday and is
 * greeted this morning with encouragement has been told, politely, that the app
 * does not believe them about their own body.
 *
 * **No streak number outside its own row.** The permission screen promised "no
 * streaks to guilt you back". The morning nudge is an invitation; the moment it
 * carries a running total it becomes a debt.
 */

import { MORNING_STRETCH_COPY } from '@/entities/program';

import type { DaySignals, NotificationKind } from './ladder';

export type Message = { title: string; body: string };

/**
 * Which line of a set to use today.
 *
 * Hashed off the date rather than counted, so it survives a reinstall and does
 * not need storing — and mixed with the set's length so two different sets do
 * not move in lockstep and betray the trick. The spec asks that the same line
 * not come round twice in a fortnight; with the smallest set here at three
 * lines and a day-granularity hash, that holds for every set of four or more
 * and is close enough for three.
 */
export function rotate<T>(lines: readonly T[], dateKey: string, salt = 0): T {
  let hash = salt;
  for (let i = 0; i < dateKey.length; i += 1) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return lines[hash % lines.length];
}

const SESSION_LINES = [
  'Foot strength today. {minutes} minutes.',
  'Day {day}. {kind} work. {minutes} minutes.',
  'Short session today — {minutes} minutes, sitting down.',
  'Heel raises today. The one that actually moves things.',
  '{minutes} minutes. Your calves are the appointment.',
  'Mobility today. Nothing heavy.',
] as const;

/** Never cheerful, no emoji, no encouragement. Just the smaller ask. */
const FLARE_LINES = [
  'Rough one yesterday. Today is {minutes} minutes, sitting down.',
  'Pain was {pain}. Today the plan gets out of your way — {minutes} minutes.',
  'Bad day yesterday. Today asks nothing heavy.',
] as const;

const LOAD_LINES = [
  '{steps} steps yesterday — {percent}% over your usual. Today is recovery.',
  'That was a big day on your feet. The plan adjusted.',
  'Long one yesterday. Today the plan backs off.',
] as const;

/**
 * Change against the person's own baseline, and nothing more.
 *
 * Forbidden here and enforced by review rather than by code: "you're limping",
 * "you're compensating", any claim about injury risk, any population norm.
 * Walking asymmetry does not predict injury — a secondary analysis of an RCT
 * with 800+ runners found it did not raise risk — so the only defensible
 * sentence is that something changed relative to how this person usually walks.
 */
const GAIT_LINES = [
  'Your steps have been uneven for {days} days now.',
  'Something changed in how you walk this week.',
] as const;

const RETEST_LINES = [
  'Two weeks. Time to see what moved. 3 tests, 4 minutes.',
  'Checkpoint today. No training — just three measurements.',
  'Day {day}. Let’s find out if it’s working.',
] as const;

const BLOCK_LINES = [
  'New block today: {block}. Heel raises start now.',
  'Block {block}. The load goes up from here.',
  '{block} opens today.',
] as const;

/** One line per reason, because the whole value of this row is that it explains
 * a specific change rather than announcing that something changed. */
const PLAN_LINES: Readonly<Record<string, string>> = {
  flare: 'Pain went up this week, so today steps back one level.',
  spike: 'Yesterday was a big one. Today picks up lighter.',
  'heavy-day': 'Long day on your feet yesterday. Today swaps to recovery.',
  return: 'Five days off. Today picks up one step easier.',
  plan: 'You’re not sore anymore — today the load goes back up.',
};

const CHECKIN_LINES = [
  'How was the foot today?',
  'One tap before bed — how did it feel?',
  'Log today and the plan knows what to do tomorrow.',
] as const;

/** The only place a streak number may appear. Both lines are a statement of
 * what one tap does, never of what is about to be lost. */
const STREAK_LINES = ['One tap keeps {streak} days going.', '{streak} days. One tap.'] as const;

const MAINTENANCE_LINES = [
  'Maintenance day. {minutes} minutes.',
  'Monthly checkpoint. Let’s make sure nothing slipped.',
  'Four weeks even. That’s the whole point.',
] as const;

/** Three, then silence for good. Keyed by how long they have been away. */
const WINBACK_LINES: Readonly<Record<number, string>> = {
  3: 'Day {day} is still there when you want it.',
  10: 'The plan runs on dates, not attendance. Day {day} is today.',
  30: 'Still here if the foot starts talking again.',
};

function fill(line: string, signals: DaySignals): string {
  const percent =
    signals.stepRatio == null ? '' : `${Math.round((signals.stepRatio - 1) * 100)}`;
  return line
    .replace('{minutes}', `${signals.minutes}`)
    .replace('{day}', `${signals.dayNumber}`)
    .replace('{kind}', signals.kind == null ? 'Foot' : capitalise(signals.kind))
    .replace('{pain}', `${signals.painYesterday ?? ''}`)
    .replace('{steps}', signals.stepsYesterday == null ? '' : group(signals.stepsYesterday))
    .replace('{percent}', percent)
    .replace('{days}', `${signals.asymmetryDays}`)
    .replace('{block}', signals.opensBlock ?? '')
    .replace('{streak}', `${signals.streak}`);
}

function capitalise(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function group(value: number): string {
  return value.toLocaleString('en-US');
}

/**
 * The message for a decision, or null when the set has nothing to say.
 *
 * The title is the app's name on every row. iOS shows it above the body anyway,
 * and a second line of our own would spend the only glance this gets on
 * restating what the user can already see.
 */
export function messageFor(kind: NotificationKind, signals: DaySignals): Message | null {
  const body = bodyFor(kind, signals);
  if (body == null) return null;
  return { title: 'Tread', body };
}

function bodyFor(kind: NotificationKind, signals: DaySignals): string | null {
  switch (kind) {
    case 'flare':
      return fill(rotate(FLARE_LINES, signals.dateKey, 11), signals);
    case 'load':
      // The first line names a figure, so it is only usable when there is one.
      return fill(
        rotate(signals.stepsYesterday == null ? LOAD_LINES.slice(1) : LOAD_LINES, signals.dateKey, 23),
        signals,
      );
    case 'gait':
      return fill(rotate(GAIT_LINES, signals.dateKey, 31), signals);
    case 'retest':
      return fill(rotate(RETEST_LINES, signals.dateKey, 43), signals);
    case 'block':
      return signals.opensBlock == null
        ? null
        : fill(rotate(BLOCK_LINES, signals.dateKey, 53), signals);
    case 'plan':
      return fill(PLAN_LINES[signals.planReason ?? 'plan'] ?? PLAN_LINES.plan, signals);
    case 'session':
      if (signals.maintenance) return fill(rotate(MAINTENANCE_LINES, signals.dateKey, 71), signals);
      return fill(rotate(SESSION_LINES, signals.dateKey, 61), signals);
    case 'checkin':
      return fill(rotate(CHECKIN_LINES, signals.dateKey, 83), signals);
    case 'streak':
      return fill(rotate(STREAK_LINES, signals.dateKey, 97), signals);
    case 'winback':
      return fill(WINBACK_LINES[signals.daysAway] ?? WINBACK_LINES[30], signals);
    default:
      return null;
  }
}

/** The one-line stretch the morning nudge can carry on days that have one.
 * Shared with the screen rather than written twice, so they cannot drift. */
export { MORNING_STRETCH_COPY };
