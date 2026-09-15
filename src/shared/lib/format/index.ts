/** Tiny presentation-time formatters. PURE — no React, deterministic given an
 * explicit `now`, so they run anywhere, including plain node/bun tests. */

const MINUTE = 60_000;
const HOUR = 3_600_000;
const DAY = 86_400_000;
const WEEK = 7 * DAY;

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

function monthDay(ms: number): string {
  const d = new Date(ms);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

/** Inclusive day span, e.g. "Feb 2 – Feb 15", collapsing to "Feb 2" when the
 * range is a single day. */
export function formatDayRange(startMs: number, endMs: number): string {
  const start = monthDay(startMs);
  const end = monthDay(endMs);
  return start === end ? start : `${start} – ${end}`;
}

/** Compact "time since" label, e.g. "just now", "5m ago", "3h ago", "2d ago",
 * "4w ago". Coarsens as the gap grows — good enough for a "last seen" caption
 * where exactness past a few weeks doesn't matter. */
export function timeAgo(ms: number, now: number): string {
  const diff = Math.max(0, now - ms);
  if (diff < MINUTE) return 'just now';
  if (diff < HOUR) return `${Math.floor(diff / MINUTE)}m ago`;
  if (diff < DAY) return `${Math.floor(diff / HOUR)}h ago`;
  if (diff < WEEK) return `${Math.floor(diff / DAY)}d ago`;
  return `${Math.floor(diff / WEEK)}w ago`;
}

/**
 * A count and the noun that agrees with it: `plural(1, 'day')` → "1 day",
 * `plural(3, 'day')` → "3 days".
 *
 * Regular `-s` unless the caller hands over the irregular form
 * (`plural(2, 'entry', 'entries')`). English only, on purpose — an i18n runtime
 * for a one-language app is a dependency and a message catalogue bought to
 * settle a ternary, and the ternary is what keeps getting forgotten at the call
 * site.
 */
export function plural(count: number, one: string, many = `${one}s`): string {
  return `${count} ${count === 1 ? one : many}`;
}

/** `mm:ss`, or `h:mm:ss` past an hour. */
export function formatClock(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const seconds = total % 60;
  const minutes = Math.floor(total / 60) % 60;
  const hours = Math.floor(total / 3600);
  const pad = (n: number) => String(n).padStart(2, '0');
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${minutes}:${pad(seconds)}`;
}
