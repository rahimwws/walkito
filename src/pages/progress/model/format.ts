/**
 * Numbers and dates as the user's language writes them: "3,4" in Russian and
 * German, "3.4" in English; "12 окт." rather than "Oct 12".
 *
 * Formatters are built once per language and shape — `Intl` constructors are
 * the slow part, and the chart asks for thirty labels a render.
 */

const numberCache = new Map<string, Intl.NumberFormat>();
const dateCache = new Map<string, Intl.DateTimeFormat>();

export function formatNumber(value: number, language: string, digits = 1): string {
  const id = `${language}|${digits}`;
  let format = numberCache.get(id);
  if (format == null) {
    format = new Intl.NumberFormat(language, { maximumFractionDigits: digits, minimumFractionDigits: 0 });
    numberCache.set(id, format);
  }
  return format.format(value);
}

/**
 * A change with its sign spelled out: "+4", "-1,2". A plain hyphen for minus,
 * the app's one dash. Never called with zero — that is "no change", a word.
 */
export function formatSigned(value: number, language: string, digits = 1): string {
  return `${value > 0 ? '+' : '-'}${formatNumber(Math.abs(value), language, digits)}`;
}

export type DateShape = 'weekday' | 'dayMonth' | 'full';

const SHAPES: Record<DateShape, Intl.DateTimeFormatOptions> = {
  /** The letter under a bar: "M", "П". */
  weekday: { weekday: 'narrow' },
  /** A tick or a range end: "Oct 12", "12 окт.". */
  dayMonth: { day: 'numeric', month: 'short' },
  /** A tooltip: "Mon, Oct 12". */
  full: { weekday: 'short', day: 'numeric', month: 'short' },
};

/** A `YYYY-MM-DD` key, read in local time like every key in the app. */
export function formatDateKey(key: string, language: string, shape: DateShape): string {
  const id = `${language}|${shape}`;
  let format = dateCache.get(id);
  if (format == null) {
    format = new Intl.DateTimeFormat(language, SHAPES[shape]);
    dateCache.set(id, format);
  }
  const [y, m, d] = key.split('-').map(Number);
  return format.format(new Date(y, m - 1, d, 12));
}
