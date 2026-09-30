import type { Snapshot } from '../supabase/functions/_shared/email/types.ts';

/**
 * One user for the email tests, at a known point of the plan.
 *
 * `day(n, hour)` is the instant that is plan day `n` at `hour` local time, and
 * `user()` builds a snapshot whose plan started so that `day` lines up. The
 * zone is Europe/Madrid on purpose: an offset from UTC catches any rule that
 * reads the server's hour instead of the user's.
 */

export const ZONE = 'Europe/Madrid';
/** Plan day 1. A Thursday, so day 4 is a Sunday. */
export const START = '2026-10-01';

/** Plan day `n` at `hour`:`minute` in Madrid, daylight saving and all. */
export function day(n: number, hour = 8, minute = 10): Date {
  const [y, m, d] = START.split('-').map(Number);
  const guess = Date.UTC(y, m - 1, d + n - 1, hour, minute);
  // The zone's offset at that moment: its wall clock read back as if it were UTC.
  const parts: Record<string, string> = {};
  const f = new Intl.DateTimeFormat('en-US', { timeZone: ZONE, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
  for (const p of f.formatToParts(new Date(guess))) parts[p.type] = p.value;
  const wall = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute));
  return new Date(guess - (wall - guess));
}

/** `YYYY-MM-DD` of plan day `n`. */
export function date(n: number): string {
  return day(n, 12).toISOString().slice(0, 10);
}

type Overrides = Partial<Omit<Snapshot, 'contact' | 'profile'>> & {
  contact?: Partial<Snapshot['contact']>;
  profile?: Partial<NonNullable<Snapshot['profile']>> | null;
};

export function user(overrides: Overrides = {}): Snapshot {
  const { contact, profile, ...rest } = overrides;
  return {
    userId: '6f1c1d52-3a2b-4c8d-9e0f-1a2b3c4d5e6f',
    contact: {
      email: 'sam@privaterelay.appleid.com',
      locale: 'en',
      timezone: ZONE,
      firstName: 'sam',
      lifecycleOptIn: true,
      weeklyOptIn: false,
      unsubscribedAt: null,
      bounced: false,
      createdAt: day(1, 7).toISOString(),
      ...contact,
    },
    profile:
      profile === null
        ? null
        : {
            weeksStartedOn: START,
            createdAt: day(1, 7).toISOString(),
            lastSyncedAt: day(1, 7).toISOString(),
            lastAppOpenAt: day(1, 7).toISOString(),
            painZones: [],
            sport: null,
            defaultMinutes: 5,
            pushSessionDates: [],
            pushTestDates: [],
            steps: ['calf_raises', 'balance'],
            ...profile,
          },
    goals: [{ type: 'calf_raises', status: 'active', baseline: 8, current: 8, since: START, achievedOn: null }],
    tests: [{ dayNumber: 1, takenOn: START, calf: 8, arch: 20, balance: 12, symmetry: 18 }],
    checkins: [],
    sessions: [],
    sessionsTotal: 0,
    weeks: [],
    paywall: null,
    subscription: 'active',
    log: [],
    ...rest,
  };
}

/** Synced an hour before `at`. */
export function freshAt(at: Date): { lastSyncedAt: string; lastAppOpenAt: string } {
  const t = new Date(at.getTime() - 3_600_000).toISOString();
  return { lastSyncedAt: t, lastAppOpenAt: t };
}

/** `n` finished plan sessions, one a day ending on `lastDay`. */
export function sessions(n: number, lastDay: number): Snapshot['sessions'] {
  return Array.from({ length: n }, (_, i) => {
    const d = lastDay - (n - 1 - i);
    return { date: date(d), source: 'plan' as const, minutes: 5, completedAt: day(d, 9).toISOString() };
  });
}
