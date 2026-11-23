/**
 * The design system's values in one place (v1.1.0 redesign, spec §3), in both
 * schemes.
 *
 * These are plain strings, one table per scheme. Screens import the native
 * colours built from them (`colors`, `parts`, `bitepal`, `bodyColors` in
 * `dynamic-colors.ts`), which follow the appearance by themselves; this file
 * is for code that needs the hex: an SVG, a gradient, Skia, an animated colour.
 * `useTokens()` from `@/shared/lib/theme` hands back the current scheme's.
 *
 * Every text colour is checked against its scheme's card and page in
 * `tokens.test.ts`: 4.5:1 or more, and `text3` for 17pt and up only. The old
 * violet (#8B5CF6) is 4.2:1 on white and never carries text.
 */
const lightColors = {
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
  /** The primary button's fill. Inverted in dark: a black pill on a black page
   * is a button you cannot see. */
  ink: '#111114',
  /** The label on `ink`. */
  onInk: '#FFFFFF',
  /** A glyph or label on a vivid fill (a part colour, the accent's fill). White
   * in both schemes, where `onInk` flips. */
  onTone: '#FFFFFF',
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
};

/**
 * BitePal in dark, on iOS's own grouped values: a black page, #1C1C1E cards,
 * #2C2C2E wells, a white primary button with a black label, and the violet
 * lifted until it reads on the card.
 */
const darkColors: typeof lightColors = {
  bg: '#000000',
  surface: '#1C1C1E',
  surface2: '#2C2C2E',
  separator: '#38383A',
  text: '#F5F5F7',
  text2: '#AEAEB2',
  text3: '#98989F',
  ink: '#FFFFFF',
  onInk: '#111114',
  onTone: '#FFFFFF',
  accent: '#A78BFA',
  accentSoft: '#2F2944',
  good: '#30D158',
  warn: '#FF9F0A',
  sport: '#FF6A33',
  photoOverlay: 'rgba(0,0,0,0.55)',
  glassFallback: 'rgba(28,28,30,0.96)',
};

/**
 * Which part of the foot or leg a move works, as BitePal colours its food
 * categories. A colour names the part, never how it is doing. The fills stay
 * vivid in dark; the soft backgrounds become a 22% tint of the fill on the card.
 */
const lightParts = {
  heel: { fill: '#FF8A3D', soft: '#FFE9DA' },
  arch: { fill: '#3B82F6', soft: '#DFEBFE' },
  calf: { fill: '#2FB566', soft: '#DCF4E6' },
  ankle: { fill: '#8B5CF6', soft: '#ECE4FE' },
  toes: { fill: '#F5B700', soft: '#FFF3C9' },
};

const darkParts: typeof lightParts = {
  heel: { fill: '#FF8A3D', soft: '#4E3425' },
  arch: { fill: '#4C8DF8', soft: '#23324E' },
  calf: { fill: '#34C26E', soft: '#203E2E' },
  ankle: { fill: '#9B72F8', soft: '#342A4E' },
  toes: { fill: '#F5B700', soft: '#4C3E17' },
};

/**
 * BitePal's look (spec addendum v3), for the screens rebuilt after it: a cool
 * grey page, white cards with a 24pt corner and no shadow, a small grey label
 * over a big bold number, round grey buttons inside a card, black primary
 * buttons, and one light track under every thin bar and ring. Brand violet
 * stays for what is selected.
 */
const lightBitepal = {
  page: lightColors.bg,
  card: lightColors.surface,
  /** A round button inside a white card. */
  well: '#F2F2F5',
  /** The track under a bar or ring. */
  track: '#E9E9EE',
  primary: lightColors.ink,
  onPrimary: lightColors.onInk,
  selected: lightColors.accent,
  selectedSoft: lightColors.accentSoft,
  cardRadius: 24,
};

const darkBitepal: typeof lightBitepal = {
  page: darkColors.bg,
  card: darkColors.surface,
  well: '#2C2C2E',
  track: '#38383A',
  primary: darkColors.ink,
  onPrimary: darkColors.onInk,
  selected: darkColors.accent,
  selectedSoft: darkColors.accentSoft,
  cardRadius: 24,
};

const bodyOf = (p: typeof lightParts) => ({
  heel: p.heel.fill,
  arch: p.arch.fill,
  calf: p.calf.fill,
  ankle: p.ankle.fill,
  toes: p.toes.fill,
});

export type ColorScheme = 'light' | 'dark';

/** One scheme's tokens, as strings. */
export type Tokens = {
  colors: typeof lightColors;
  parts: typeof lightParts;
  bitepal: typeof lightBitepal;
  /** The part of the foot or leg a move or a test works. It names the part and
   * never rates it: a calf move is green on its first set and on its last. */
  bodyColors: ReturnType<typeof bodyOf>;
};

export const themes: Record<ColorScheme, Tokens> = {
  light: { colors: lightColors, parts: lightParts, bitepal: lightBitepal, bodyColors: bodyOf(lightParts) },
  dark: { colors: darkColors, parts: darkParts, bitepal: darkBitepal, bodyColors: bodyOf(darkParts) },
};

export type PartName = keyof typeof lightParts;
export type BodyPart = PartName;

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

/** Tab labels and chips stop growing here; body text is never capped. */
export const CHROME_MAX_FONT_SCALE = 1.4;
