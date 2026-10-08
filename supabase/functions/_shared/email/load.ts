import { addDays } from './time.ts';
import { asLocale } from './types.ts';
import type {
  CheckinRow,
  Contact,
  EmailKey,
  GoalRow,
  GoalType,
  LogRow,
  PaywallView,
  Profile,
  SessionRow,
  Snapshot,
  TestRow,
  WeekRow,
} from './types.ts';

/**
 * Reads everything `rules.ts` needs, for a batch of users at once.
 *
 * One query per table for the whole batch rather than one per user: a run
 * covers every contact every hour, and N round trips per user would be the
 * slowest part of it by far. The client is typed loosely on purpose — this
 * file has to compile under Bun, where the Deno build of supabase-js is not
 * what gets installed.
 */

// deno-lint-ignore no-explicit-any
type Db = { from: (table: string) => any; rpc: (fn: string, args?: Record<string, unknown>) => any };

type Row = Record<string, unknown>;

const DAYS_BACK = 35;

async function all(query: PromiseLike<{ data: Row[] | null; error: { message: string } | null }>, what: string): Promise<Row[]> {
  const { data, error } = await query;
  if (error != null) throw new Error(`[email] could not read ${what}: ${error.message}`);
  return data ?? [];
}

function byUser(rows: Row[]): Map<string, Row[]> {
  const out = new Map<string, Row[]>();
  for (const row of rows) {
    const id = String(row.user_id);
    const list = out.get(id);
    if (list == null) out.set(id, [row]);
    else list.push(row);
  }
  return out;
}

const n = (v: unknown): number | null => (v == null ? null : Number(v));
const s = (v: unknown): string | null => (v == null ? null : String(v));

export function contactFromRow(row: Row): Contact {
  const locale = asLocale(row.locale);
  return {
    email: String(row.email),
    locale,
    timezone: s(row.timezone) ?? 'UTC',
    firstName: s(row.first_name),
    lifecycleOptIn: row.lifecycle_opt_in !== false,
    weeklyOptIn: row.weekly_opt_in === true,
    unsubscribedAt: s(row.unsubscribed_at),
    bounced: row.bounced === true,
    createdAt: String(row.created_at),
  };
}

function profileFromRow(row: Row): Profile {
  const outcome = (row.outcome ?? null) as { steps?: unknown; sport?: unknown } | null;
  const steps = Array.isArray(outcome?.steps) ? (outcome.steps as GoalType[]) : [];
  return {
    weeksStartedOn: s(row.weeks_started_on),
    createdAt: s(row.created_at),
    lastSyncedAt: s(row.last_synced_at),
    lastAppOpenAt: s(row.last_app_open_at),
    painZones: Array.isArray(row.pain_zones) ? (row.pain_zones as string[]) : [],
    sport: s(row.sport) ?? (typeof outcome?.sport === 'string' ? outcome.sport : null),
    defaultMinutes: n(row.default_minutes) ?? 5,
    pushSessionDates: Array.isArray(row.push_session_dates) ? (row.push_session_dates as string[]) : [],
    pushTestDates: Array.isArray(row.push_test_dates) ? (row.push_test_dates as string[]) : [],
    steps,
  };
}

function maxPainOf(row: Row): number | null {
  const entries = Array.isArray(row.entries) ? (row.entries as { score?: unknown }[]) : [];
  const scores = entries.map((e) => Number(e.score)).filter((x) => Number.isFinite(x));
  const morning = n(row.pain_morning);
  if (morning != null) scores.push(morning);
  return scores.length > 0 ? Math.max(...scores) : null;
}

/**
 * The paywall views, as the offer emails need them.
 *
 * Prices come from the latest view that carried them, since the store figure
 * can change — and only from a view that says they are the annual
 * subscription's (`plan: 'annual'`). Views recorded before the annual existed
 * carry the old one-time pass's prices; quoted as the annual price, they would
 * be a number the store does not charge. Without a marked view the emails say
 * "costs less" and print no figure, which is never wrong.
 */
export function paywallFrom(rows: Row[]): PaywallView | null {
  if (rows.length === 0) return null;
  const sorted = [...rows].sort((a, b) => String(a.at).localeCompare(String(b.at)));
  const last = sorted[sorted.length - 1];
  const priced = [...sorted].reverse().find((r) => {
    const props = r.props as Row | null;
    return props?.offer_price != null && props.plan === 'annual';
  });
  const props = (priced?.props ?? {}) as Row;
  return {
    firstAt: String(sorted[0].at),
    lastAt: String(last.at),
    offerPrice: s(props.offer_price),
    standardPrice: s(props.standard_price),
    percent: n(props.percent),
  };
}

/**
 * Snapshots for these contacts. `today` is a UTC date: the look-back window is
 * wide enough that a user's own local day is always inside it.
 */
export async function loadSnapshots(db: Db, contacts: Row[], today: string): Promise<Snapshot[]> {
  if (contacts.length === 0) return [];
  const ids = contacts.map((c) => String(c.user_id));
  const since = addDays(today, -DAYS_BACK);

  const [profiles, goals, tests, checkins, sessions, totals, weeks, paywall, subs, log] = await Promise.all([
    all(
      db
        .from('profiles')
        .select('user_id, weeks_started_on, created_at, last_synced_at, last_app_open_at, pain_zones, sport, default_minutes, push_session_dates, push_test_dates, outcome')
        .in('user_id', ids),
      'profiles',
    ),
    all(db.from('goals').select('user_id, type, status, baseline, current, since, achieved_on').in('user_id', ids), 'goals'),
    all(
      db.from('tests').select('user_id, day_number, taken_on, calf_left, arch_left, balance_left, symmetry_pct').in('user_id', ids),
      'tests',
    ),
    all(
      db.from('checkins').select('user_id, date, pain_morning, entries, morning_stretch').in('user_id', ids).gte('date', since).order('date'),
      'checkins',
    ),
    all(
      db.from('sessions').select('user_id, date, source, minutes, completed_at').in('user_id', ids).gte('date', since).order('completed_at'),
      'sessions',
    ),
    all(db.rpc('email_session_totals', { p_users: ids }), 'session totals'),
    all(db.from('week_plans').select('user_id, week_start, focus, days').in('user_id', ids).gte('week_start', addDays(today, -14)), 'week plans'),
    all(db.from('app_events').select('user_id, props, at').in('user_id', ids).eq('name', 'paywall_viewed'), 'paywall views'),
    all(db.from('subscriptions').select('user_id, status').in('user_id', ids), 'subscriptions'),
    all(db.from('email_log').select('user_id, email_key, dedupe_key, sent_at, status').in('user_id', ids), 'email log'),
  ]);

  const P = new Map(profiles.map((r) => [String(r.user_id), r]));
  const G = byUser(goals);
  const T = byUser(tests);
  const C = byUser(checkins);
  const S = byUser(sessions);
  const TOT = new Map(totals.map((r) => [String(r.user_id), Number(r.total)]));
  const W = byUser(weeks);
  const PW = byUser(paywall);
  const SUB = new Map(subs.map((r) => [String(r.user_id), String(r.status)]));
  const L = byUser(log);

  return contacts.map((row): Snapshot => {
    const id = String(row.user_id);
    const profile = P.get(id);
    const sub = SUB.get(id);
    return {
      userId: id,
      contact: contactFromRow(row),
      profile: profile != null ? profileFromRow(profile) : null,
      goals: (G.get(id) ?? []).map(
        (g): GoalRow => ({
          type: g.type as GoalType,
          status: g.status as GoalRow['status'],
          baseline: n(g.baseline),
          current: n(g.current),
          since: String(g.since),
          achievedOn: s(g.achieved_on),
        }),
      ),
      tests: (T.get(id) ?? []).map(
        (t): TestRow => ({
          dayNumber: Number(t.day_number),
          takenOn: String(t.taken_on),
          calf: Number(t.calf_left),
          arch: Number(t.arch_left),
          balance: Number(t.balance_left),
          symmetry: Number(t.symmetry_pct),
        }),
      ),
      checkins: (C.get(id) ?? []).map(
        (c): CheckinRow => ({
          date: String(c.date),
          painMorning: n(c.pain_morning),
          maxPain: maxPainOf(c),
          morningStretch: c.morning_stretch === true,
        }),
      ),
      sessions: (S.get(id) ?? []).map(
        (x): SessionRow => ({
          date: String(x.date),
          source: x.source as SessionRow['source'],
          minutes: Number(x.minutes),
          completedAt: String(x.completed_at),
        }),
      ),
      sessionsTotal: TOT.get(id) ?? 0,
      weeks: (W.get(id) ?? []).map(
        (w): WeekRow => ({
          weekStart: String(w.week_start),
          focus: (w.focus ?? null) as GoalType | null,
          days: Array.isArray(w.days) ? (w.days as WeekRow['days']) : [],
        }),
      ),
      paywall: paywallFrom(PW.get(id) ?? []),
      subscription: sub === 'active' || sub === 'expired' || sub === 'none' ? sub : null,
      log: (L.get(id) ?? []).map(
        (l): LogRow => ({
          emailKey: l.email_key as EmailKey,
          dedupeKey: String(l.dedupe_key),
          sentAt: String(l.sent_at),
          status: l.status as LogRow['status'],
        }),
      ),
    };
  });
}
