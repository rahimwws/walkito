/**
 * The design system's values in one place (v1.1.0 redesign, spec §3).
 *
 * Light only. Every text colour here is checked against `surface` (white) and
 * `bg`: `text` 17:1, `text2` 7:1, `accent` 7.1:1, `text3` 4.6:1 and so for
 * 17pt and up only. The old violet (#8B5CF6) is 4.2:1 and never carries text.
 */
export const colors = {
  /** Screen background, BitePal's light grey (Addendum v3). */
  bg: '#F2F2F5',
  /** Cards and rows. Opaque: glass never reaches the content layer. */
  surface: '#FFFFFF',
  /** Inputs, segmented tracks, chips. */
  surface2: '#EFEFF2',
  separator: '#E3E3E8',
  text: '#111114',
  text2: '#55555E',
  /** Tertiary text, 17pt and up only. */
  text3: '#7A7A84',
  /** The primary button's fill, with a white label. */
  ink: '#111114',
  onInk: '#FFFFFF',
  /** Brand violet: links, selected states, progress. */
  accent: '#6D28D9',
  /** Behind a selected row or chip. */
  accentSoft: '#EFE8FD',
  /** Done ticks and an improving trend. Never a judgement of a value. */
  good: '#1F7A3D',
  warn: '#B45309',
  /** The runner plan's badge only, never text. */
  sport: '#FF5A1F',
  /** The dark end of the gradient that carries text over a photo. */
  photoOverlay: 'rgba(0,0,0,0.45)',
  /** What stands in for glass: iOS < 26, Reduce Transparency, Android. */
  glassFallback: 'rgba(255,255,255,0.96)',
} as const;

/**
 * Which part of the foot or leg a move works, as BitePal colours its food
 * categories. A colour names the part, never how it is doing.
 */
export const parts = {
  heel: { fill: '#FF8A3D', soft: '#FFE9DA' },
  arch: { fill: '#3B82F6', soft: '#DFEBFE' },
  calf: { fill: '#2FB566', soft: '#DCF4E6' },
  ankle: { fill: '#8B5CF6', soft: '#ECE4FE' },
  toes: { fill: '#F5B700', soft: '#FFF3C9' },
} as const;

export type PartName = keyof typeof parts;

/**
 * The type scale, as [size, weight] for `fonts.*`. Body is 19 and nothing a
 * person has to read is set below 17.
 */
export const type = {
  largeTitle: { size: 34, weight: 'bold' },
  title: { size: 28, weight: 'bold' },
  headline: { size: 20, weight: 'semibold' },
  body: { size: 19, weight: 'regular' },
  callout: { size: 17, weight: 'medium' },
  footnote: { size: 15, weight: 'regular' },
  numeral: { size: 96, weight: 'bold' },
} as const;

/** The 4-pt grid. */
export const space = {
  screen: 20,
  card: 20,
  gap: 12,
  section: 32,
} as const;

export const radius = {
  card: 20,
  button: 16,
  photo: 16,
} as const;

/** Touch targets for 50+ (spec §5). */
export const target = {
  min: 48,
  primary: 56,
} as const;

/**
 * BitePal's look (spec addendum v3), for the screens rebuilt after it: a cool
 * grey page, white cards with a 24pt corner and no shadow, a small grey label
 * over a big bold number, round grey buttons inside a card, black primary
 * buttons, and one light track under every thin bar and ring. Brand violet
 * stays for what is selected.
 */
export const bitepal = {
  page: '#F2F2F5',
  card: '#FFFFFF',
  cardRadius: 24,
  /** A round button inside a white card, and the track under a bar or ring. */
  well: '#F2F2F5',
  track: '#E9E9EE',
  primary: '#111114',
  onPrimary: '#FFFFFF',
  selected: colors.accent,
  selectedSoft: colors.accentSoft,
} as const;

/**
 * The part of the foot or leg a move or a test works, as BitePal colours its
 * food groups. It names the part and never rates it: a calf move is green on
 * its first set and on its last.
 */
export const bodyColors = {
  heel: parts.heel.fill,
  arch: parts.arch.fill,
  calf: parts.calf.fill,
  ankle: parts.ankle.fill,
  toes: parts.toes.fill,
} as const;

export type BodyPart = keyof typeof bodyColors;

/** Tab labels and chips stop growing here; body text is never capped. */
export const CHROME_MAX_FONT_SCALE = 1.4;
