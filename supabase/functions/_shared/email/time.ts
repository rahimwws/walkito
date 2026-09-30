/**
 * Local time for a user, from an IANA zone.
 *
 * Intl is in both runtimes the scheduler meets (Deno and Bun), and it is the
 * only thing that knows daylight saving. An unknown zone falls back to UTC
 * rather than throwing, so one bad row cannot stop a run.
 */

export type LocalTime = {
  /** `YYYY-MM-DD` in the user's zone. */
  date: string;
  hour: number;
  /** 0 = Sunday … 6 = Saturday. */
  weekday: number;
};

const formatters = new Map<string, Intl.DateTimeFormat>();

function formatter(zone: string): Intl.DateTimeFormat {
  let f = formatters.get(zone);
  if (f == null) {
    try {
      f = new Intl.DateTimeFormat('en-US', {
        timeZone: zone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        hourCycle: 'h23',
        weekday: 'short',
      });
    } catch {
      f = formatter('UTC');
    }
    formatters.set(zone, f);
  }
  return f;
}

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function localTime(now: Date, zone: string): LocalTime {
  const parts: Record<string, string> = {};
  for (const p of formatter(zone).formatToParts(now)) parts[p.type] = p.value;
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    hour: Number(parts.hour) % 24,
    weekday: WEEKDAYS[parts.weekday] ?? 0,
  };
}

/** Whole days from `a` to `b`, both `YYYY-MM-DD`. */
export function daysBetween(a: string, b: string): number {
  const [y1, m1, d1] = a.split('-').map(Number);
  const [y2, m2, d2] = b.split('-').map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86_400_000);
}

/** `YYYY-MM-DD` shifted by `n` days. */
export function addDays(date: string, n: number): string {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}

/** Hours between two instants, `b` after `a`. */
export function hoursBetween(a: string | Date, b: Date): number {
  return (b.getTime() - new Date(a).getTime()) / 3_600_000;
}
