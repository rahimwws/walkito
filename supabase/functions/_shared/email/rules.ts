import * as build from './content.ts';
import { addDays, daysBetween, hoursBetween, localTime, type LocalTime } from './time.ts';
import {
  GOAL_ORDER,
  METRIC_OF_GOAL,
  METRICS,
  type Decision,
  type EmailContent,
  type EmailKey,
  type GoalType,
  type Metric,
  type Snapshot,
  type TestRow,
} from './types.ts';

/**
 * Which email, if any, one user gets on this run.
 *
 * Trigger, then conditions, then suppression, for every candidate in priority
 * order; the first that survives wins, and at most one goes per run. Pure: the
 * snapshot and the clock go in, a decision and the reasons for every skip come
 * out, so each rule is testable without a database or a mail server.
 *
 * The rules, restated where they are enforced:
 *
 * - One email per local day. After day 14, one per seven days, the weekly
 *   summary included — though the summary itself and the three emails that
 *   answer something the user did are never held back by that weekly cap.
 * - Lifecycle email goes once, ever (`dedupe_key` is unique in the table too).
 * - Morning email goes 08:00-09:00 local. The welcome and the three answers to
 *   something the user did go at any hour from 08:00 to 21:00, so a welcome
 *   arrives within the hour, or the next morning if onboarding ended late.
 *   The weekly summary goes Sunday 18:00-19:00 local.
 * - Data more than 24 h old skips every email that assumes something was not
 *   done: the user may have done it offline.
 * - A pain reading of 7 or more today lets only `pain_up` through.
 * - A push with the same intent laid for today skips the email.
 * - After `winback_21`, no more lifecycle email at all.
 */

export type Skip = { key: EmailKey; reason: string };

export type Evaluation = {
  decision: Decision | null;
  skipped: Skip[];
  /** Why nothing was even considered, when that is the case. */
  blocked: string | null;
  local: LocalTime;
};

/** Emails that answer something the user did. */
const TRIGGERED: ReadonlySet<EmailKey> = new Set(['pain_up', 'goal_reached', 'test_result']);
/** Emails gated by the "tips & reminders" toggle. */
const LIFECYCLE: ReadonlySet<EmailKey> = new Set([
  'welcome',
  'day2_morning',
  'day2_focus',
  'day5_easy',
  'day5_start',
  'day10_keep',
  'day14_test',
  'winback_7',
  'winback_21',
  'offer',
  'offer_final',
]);
/** Emails that assume something has not been done yet. */
const ASSUMES_NOT_DONE: ReadonlySet<EmailKey> = new Set(['day2_morning', 'day5_start', 'day5_easy', 'day10_keep', 'day14_test', 'weekly']);
/** Emails that only make sense to someone who can use the plan. */
const NEEDS_ACCESS: ReadonlySet<EmailKey> = new Set([
  'day2_morning',
  'day2_focus',
  'day5_easy',
  'day5_start',
  'day10_keep',
  'day14_test',
  'winback_7',
  'winback_21',
  'weekly',
]);

const STALE_HOURS = 24;
const HEAVY_PAIN = 7;

type Candidate = {
  key: EmailKey;
  dedupeKey: string;
  window: 'day' | 'morning' | 'sunday';
  /** The push intent that would say the same thing, if any. */
  intent?: 'session' | 'test';
  /** Keys that, once sent, rule this one out (the other half of a pair). */
  excludes?: EmailKey[];
  /** Why this one is not triggered, or null when it is. */
  trigger: () => string | null;
  content: () => EmailContent;
};

export function evaluate(s: Snapshot, now: Date): Evaluation {
  const local = localTime(now, s.contact.timezone);
  const skipped: Skip[] = [];
  const done = (blocked: string): Evaluation => ({ decision: null, skipped, blocked, local });

  if (s.contact.unsubscribedAt != null) return done('unsubscribed');
  if (s.contact.bounced) return done('bounced');
  const profile = s.profile;
  if (profile == null || profile.weeksStartedOn == null) return done('no plan synced');

  const locale = s.contact.locale;
  const today = local.date;
  const planDay = daysBetween(profile.weeksStartedOn, today) + 1;
  const stale = profile.lastSyncedAt == null || hoursBetween(profile.lastSyncedAt, now) > STALE_HOURS;

  const live = s.log.filter((row) => row.status !== 'failed');
  const sentKeys = new Set(live.map((row) => row.dedupeKey));
  const sentEmailKeys = new Set(live.map((row) => row.emailKey));
  const sentToday = live.some((row) => localTime(new Date(row.sentAt), s.contact.timezone).date === today);
  const sentThisWeek = live.some((row) => hoursBetween(row.sentAt, now) < 7 * 24);
  const afterWinback21 = sentEmailKeys.has('winback_21');

  const checkinToday = s.checkins.find((c) => c.date === today);
  const heavyPainToday = Math.max(checkinToday?.maxPain ?? 0, checkinToday?.painMorning ?? 0) >= HEAVY_PAIN;

  const planSessions = s.sessions.filter((x) => x.source !== 'test');
  const hasAccess = s.subscription === 'active' || (s.subscription == null && s.sessionsTotal > 0);

  const focus = focusGoal(s, today);
  const focusMetric = focus != null ? METRIC_OF_GOAL[focus] : null;
  const tests = [...s.tests].sort((a, b) => a.dayNumber - b.dayNumber);
  const latest = tests.at(-1) ?? null;
  const figure = (metric: Metric | null): number | null => {
    if (metric == null) return null;
    if (latest != null) return latest[metric];
    const goal = s.goals.find((g) => METRIC_OF_GOAL[g.type] === metric);
    return goal?.current ?? null;
  };
  const minutesToday = todayMinutes(s, today) ?? profile.defaultMinutes;
  const lastOpen = profile.lastAppOpenAt ?? profile.lastSyncedAt;
  const daysSinceOpen = lastOpen != null ? daysBetween(localTime(new Date(lastOpen), s.contact.timezone).date, today) : null;
  const lastActive = latestDate([planSessions.at(-1)?.date ?? null, lastOpen?.slice(0, 10) ?? null]);
  const daysInactive = lastActive != null ? daysBetween(lastActive, today) : null;

  const candidates: Candidate[] = [
    {
      key: 'pain_up',
      dedupeKey: `pain_up:${mondayOf(today)}`,
      window: 'day',
      trigger: () => {
        if (live.some((row) => row.emailKey === 'pain_up' && hoursBetween(row.sentAt, now) < 14 * 24)) return 'sent in the last 14 days';
        const recent = painValues(s, addDays(today, -2), today);
        const before = painValues(s, addDays(today, -10), addDays(today, -4));
        if (recent.length < 2 || before.length < 3) return 'not enough readings';
        return avg(recent) - avg(before) >= 2 ? null : 'pain not up by 2';
      },
      content: () => build.painUp(locale),
    },
    ...goalReachedCandidates(),
    ...testResultCandidates(),
    {
      key: 'welcome',
      dedupeKey: 'welcome',
      window: 'day',
      trigger: () => {
        if (planDay > 2) return 'past day 2';
        const since = profile.createdAt ?? s.contact.createdAt;
        return hoursBetween(since, now) > 48 ? 'onboarded more than 48 h ago' : null;
      },
      content: () =>
        build.welcome(locale, {
          name: s.contact.firstName,
          minutes: minutesToday,
          runner: profile.sport === 'running',
        }),
    },
    {
      key: 'day14_test',
      dedupeKey: 'day14_test',
      window: 'morning',
      intent: 'test',
      trigger: () => {
        if (planDay < 14 || planDay > 18) return 'not test day';
        return tests.some((t) => t.dayNumber >= 12) ? 'test already completed' : null;
      },
      content: () => {
        const metric = focusMetric ?? 'calf';
        const first = tests[0] ?? null;
        return build.day14Test(locale, { metric: first != null ? metric : null, before: first != null ? first[metric] : null });
      },
    },
    {
      key: 'day10_keep',
      dedupeKey: 'day10_keep',
      window: 'morning',
      trigger: () => {
        if (planDay < 10 || planDay > 11) return 'not day 10';
        return daysInactive == null || daysInactive >= 4 ? 'inactive 4+ days' : null;
      },
      content: () => build.day10Keep(locale, { days: planDay, minutes: minutesToday, painDrop: painDrop(s) }),
    },
    {
      key: 'day5_easy',
      dedupeKey: 'day5_easy',
      window: 'morning',
      excludes: ['day5_start'],
      trigger: () => {
        if (planDay < 5 || planDay > 6) return 'not day 5';
        return s.sessionsTotal >= 1 ? null : 'no session yet';
      },
      content: () => build.day5Easy(locale),
    },
    {
      key: 'day5_start',
      dedupeKey: 'day5_start',
      window: 'morning',
      intent: 'session',
      excludes: ['day5_easy'],
      trigger: () => {
        if (planDay < 5 || planDay > 6) return 'not day 5';
        return s.sessionsTotal === 0 ? null : 'already has a session';
      },
      content: () => build.day5Start(locale),
    },
    {
      key: 'day2_morning',
      dedupeKey: 'day2_morning',
      window: 'morning',
      excludes: ['day2_focus'],
      trigger: () => {
        if (planDay < 2 || planDay > 3) return 'not day 2';
        if (!morningPain(s)) return 'no heel, arch or morning pain';
        const stretched = s.checkins.some((c) => c.morningStretch && daysBetween(c.date, today) <= 2);
        return stretched ? 'morning stretch logged in the last 2 days' : null;
      },
      content: () => build.day2Morning(locale),
    },
    {
      key: 'day2_focus',
      dedupeKey: 'day2_focus',
      window: 'morning',
      excludes: ['day2_morning'],
      trigger: () => {
        if (planDay < 2 || planDay > 3) return 'not day 2';
        if (focus == null) return 'no goal';
        return morningPain(s) ? 'gets day2_morning' : null;
      },
      content: () => build.day2Focus(locale, { goal: focus as GoalType, metric: focusMetric, current: figure(focusMetric) }),
    },
    {
      key: 'offer_final',
      dedupeKey: 'offer_final',
      window: 'morning',
      trigger: () => {
        if (s.paywall == null) return 'paywall not viewed';
        if (s.subscription === 'active') return 'already paying';
        const days = daysBetween(localTime(new Date(s.paywall.firstAt), s.contact.timezone).date, today);
        return days >= 14 && days <= 18 ? null : 'not 14 days after the paywall';
      },
      content: () => build.offerFinal(locale, { paywall: s.paywall }),
    },
    {
      key: 'offer',
      dedupeKey: 'offer',
      window: 'morning',
      trigger: () => {
        if (s.paywall == null) return 'paywall not viewed';
        if (s.subscription === 'active') return 'already paying';
        const days = daysBetween(localTime(new Date(s.paywall.firstAt), s.contact.timezone).date, today);
        return days >= 4 && days <= 7 ? null : 'not 4-7 days after the paywall';
      },
      content: () => build.offer(locale, { goal: focus, metric: focusMetric, current: figure(focusMetric), paywall: s.paywall }),
    },
    {
      key: 'winback_21',
      dedupeKey: 'winback_21',
      window: 'morning',
      trigger: () => {
        if (daysSinceOpen == null) return 'never opened';
        return daysSinceOpen >= 21 && daysSinceOpen <= 28 ? null : 'not 21 days away';
      },
      content: () => build.winback21(locale, { metric: focusMetric, current: figure(focusMetric) }),
    },
    {
      key: 'winback_7',
      dedupeKey: 'winback_7',
      window: 'morning',
      trigger: () => {
        if (daysSinceOpen == null) return 'never opened';
        return daysSinceOpen >= 7 && daysSinceOpen < 21 ? null : 'not 7 days away';
      },
      content: () => build.winback7(locale),
    },
    {
      key: 'weekly',
      dedupeKey: `weekly:${today}`,
      window: 'sunday',
      trigger: () => {
        if (!s.contact.weeklyOptIn) return 'weekly not opted in';
        return sessionsThisWeek() >= 1 ? null : 'no session this week';
      },
      content: () => {
        const next = s.weeks.find((w) => w.weekStart === addDays(mondayOf(today), 7))?.focus ?? focus;
        return build.weekly(locale, {
          sessions: sessionsThisWeek(),
          metric: focusMetric,
          current: figure(focusMetric),
          avgPain: roundTenth(avgOrNull(painValues(s, mondayOf(today), today))),
          next,
        });
      },
    },
  ];

  for (const c of candidates) {
    const reason = suppressed(c);
    if (reason != null) {
      skipped.push({ key: c.key, reason });
      continue;
    }
    return { decision: { key: c.key, dedupeKey: c.dedupeKey, content: c.content() }, skipped, blocked: null, local };
  }
  return { decision: null, skipped, blocked: null, local };

  function suppressed(c: Candidate): string | null {
    // Window first: outside it, nothing else about the email matters this hour.
    if (c.window === 'morning' && local.hour !== 8) return 'outside 08:00-09:00';
    if (c.window === 'day' && (local.hour < 8 || local.hour >= 21)) return 'outside 08:00-21:00';
    if (c.window === 'sunday' && (local.weekday !== 0 || local.hour !== 18)) return 'not sunday 18:00';

    if (sentKeys.has(c.dedupeKey)) return 'already sent';
    if (c.excludes?.some((k) => sentEmailKeys.has(k))) return 'its pair was sent';

    const why = c.trigger();
    if (why != null) return why;

    if (heavyPainToday && c.key !== 'pain_up') return 'pain 7+ today';
    if (LIFECYCLE.has(c.key) && !s.contact.lifecycleOptIn) return 'tips turned off';
    if (LIFECYCLE.has(c.key) && afterWinback21) return 'after winback_21';
    if (NEEDS_ACCESS.has(c.key) && !hasAccess) return 'no access to the plan';
    if (stale && ASSUMES_NOT_DONE.has(c.key)) return 'data older than 24 h';
    if (c.intent === 'session' && profile!.pushSessionDates.includes(today)) return 'session push today';
    if (c.intent === 'test' && profile!.pushTestDates.includes(today)) return 'test push today';
    if (sentToday) return 'already emailed today';
    if (planDay > 14 && sentThisWeek && !TRIGGERED.has(c.key) && c.key !== 'weekly') return 'weekly cap';
    return null;
  }

  function sessionsThisWeek(): number {
    const monday = mondayOf(today);
    return planSessions.filter((x) => x.date >= monday && x.date <= today).length;
  }

  function goalReachedCandidates(): Candidate[] {
    return s.goals
      .filter((g) => g.status !== 'active' && g.achievedOn != null)
      .map((g) => ({
        key: 'goal_reached' as const,
        dedupeKey: `goal_reached:${g.type}`,
        window: 'day' as const,
        trigger: () => (daysBetween(g.achievedOn as string, today) <= 3 ? null : 'reached more than 3 days ago'),
        content: () => build.goalReached(locale, { goal: g.type, next: nextGoal(s, g.type) }),
      }));
  }

  function testResultCandidates(): Candidate[] {
    if (tests.length < 2) return [];
    const last = tests[tests.length - 1];
    const prev = tests[tests.length - 2];
    return [
      {
        key: 'test_result',
        dedupeKey: `test_result:${last.dayNumber}`,
        window: 'day',
        trigger: () => {
          if (daysBetween(last.takenOn, today) > 3) return 'test more than 3 days ago';
          if (improvedMetric(prev, last, focusMetric) == null) return 'no number improved';
          const reachedRecently = live.some((row) => row.emailKey === 'goal_reached' && hoursBetween(row.sentAt, now) < 4 * 24);
          return reachedRecently ? 'goal_reached covered this test' : null;
        },
        content: () => {
          const metric = improvedMetric(prev, last, focusMetric) as Metric;
          const weeks = Math.max(1, Math.round(daysBetween(prev.takenOn, last.takenOn) / 7));
          return build.testResult(locale, { metric, before: prev[metric], now: last[metric], weeks });
        },
      },
    ];
  }
}

// ── Helpers ─────────────────────────────────────────────────────────────────

/** The week's focus, else the first active goal in the big goal's order. */
export function focusGoal(s: Snapshot, today: string): GoalType | null {
  const monday = mondayOf(today);
  const week = s.weeks.find((w) => w.weekStart === monday);
  if (week?.focus != null) return week.focus;
  const order = [...(s.profile?.steps ?? []), ...GOAL_ORDER];
  const active = s.goals.filter((g) => g.status === 'active').map((g) => g.type);
  return order.find((type) => active.includes(type)) ?? null;
}

/** The goal after `done`: the next not-yet-reached step of the big goal, else the next in the standard order. */
export function nextGoal(s: Snapshot, done: GoalType): GoalType | null {
  const finished = new Set(s.goals.filter((g) => g.status !== 'active').map((g) => g.type));
  finished.add(done);
  const active = s.goals.filter((g) => g.status === 'active').map((g) => g.type);
  const order = [...(s.profile?.steps ?? []), ...GOAL_ORDER];
  return order.find((t) => active.includes(t) && !finished.has(t)) ?? order.find((t) => !finished.has(t)) ?? null;
}

/**
 * The metric to report from a retest: the focus metric if it improved, else
 * the one that improved most, relative to where it was. Null if nothing did.
 */
export function improvedMetric(prev: TestRow, last: TestRow, prefer: Metric | null): Metric | null {
  const gain = (m: Metric): number => {
    const a = prev[m];
    const b = last[m];
    if (m === 'symmetry') return a > 0 ? (a - b) / a : 0;
    return a > 0 ? (b - a) / a : b > 0 ? 1 : 0;
  };
  const improved = METRICS.filter((m) => (m === 'symmetry' ? Math.round(last[m]) < Math.round(prev[m]) : last[m] > prev[m]));
  if (improved.length === 0) return null;
  if (prefer != null && improved.includes(prefer)) return prefer;
  return improved.reduce((best, m) => (gain(m) > gain(best) ? m : best));
}

function todayMinutes(s: Snapshot, today: string): number | null {
  for (const w of s.weeks) {
    const day = w.days.find((d) => d.date === today);
    if (day != null && day.minutes > 0) return day.minutes;
  }
  return null;
}

/** Heel or arch on the leg map, or any morning pain reported so far. */
function morningPain(s: Snapshot): boolean {
  const zones = s.profile?.painZones ?? [];
  if (zones.includes('heel') || zones.includes('arch')) return true;
  return s.checkins.some((c) => (c.painMorning ?? 0) >= 1);
}

/** Morning pain readings between two dates, inclusive. */
function painValues(s: Snapshot, from: string, to: string): number[] {
  return s.checkins.filter((c) => c.date >= from && c.date <= to && c.painMorning != null).map((c) => c.painMorning as number);
}

/** First three mornings against the last three, when the drop is 2 or more. */
function painDrop(s: Snapshot): { start: number; last: number } | null {
  const readings = s.checkins.filter((c) => c.painMorning != null).map((c) => c.painMorning as number);
  if (readings.length < 4) return null;
  const start = Math.round(avg(readings.slice(0, 3)));
  const last = Math.round(avg(readings.slice(-3)));
  return start - last >= 2 ? { start, last } : null;
}

export function mondayOf(date: string): string {
  const [y, m, d] = date.split('-').map(Number);
  const weekday = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0 = Sunday
  return addDays(date, -((weekday + 6) % 7));
}

function avg(xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

function avgOrNull(xs: number[]): number | null {
  return xs.length > 0 ? avg(xs) : null;
}

function roundTenth(n: number | null): number | null {
  return n == null ? null : Math.round(n * 10) / 10;
}

function latestDate(dates: (string | null)[]): string | null {
  const real = dates.filter((d): d is string => d != null).sort();
  return real.at(-1) ?? null;
}
