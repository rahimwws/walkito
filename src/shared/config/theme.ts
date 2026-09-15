/**
 * The app's color source of truth.
 *
 * `palette` paints surfaces: the navigation theme applies `background` to every
 * screen container, so screens never set their own backgroundColor — that's
 * what keeps tab-switch fades flash-free.
 *
 * `meterColors` covers anything that renders a number or a meter. The color
 * rule is encoded by construction: there is no `bad` entry, so no value can
 * render red. Values are always `ink` — a number is never colored by how good
 * it is. `positive` marks an improving delta only; `flat` covers flat and
 * declining alike, because a dip is information, not an error.
 */

export const palette = {
  light: {
    background: '#F4F4F6',
    foreground: '#111114',
    card: '#FFFFFF',
  },
  dark: {
    // Dark, deliberately not black. Pure #000 makes every surface above it
    // read as a floating rectangle; a few points of lift gives the rows
    // something to sit on, which is what the reference apps do.
    background: '#111113',
    foreground: '#FFFFFF',
    card: '#1C1C1F',
  },
} as const;

/**
 * The brand accent. One hue, spent only where the money is — the primary
 * action, the active state, the selected row. Everything else is neutral.
 */
export const PRIMARY = '#8B5CF6';

/**
 * The one committing action on a screen.
 *
 * A warm near-black rather than the neutral `foreground`: against a cool grey
 * background it reads as ink on paper instead of as a hole in the screen, and
 * it is the difference between a button that looks placed and one that looks
 * cut out.
 *
 * Inverted in dark mode — the same `#262422` on a `#0B0B0D` page would be a
 * button you cannot see. What carries across schemes is the *contrast*, not
 * the hex.
 */
export const primaryButton = {
  // Inverted against the page rather than one fixed hex. White on the dark
  // scheme, ink on the light one — a white pill on a near-white background is
  // a button you cannot see, which is the rule stated above and the one the
  // violet fill sidestepped by being loud against both.
  light: { fill: '#111114', label: '#FFFFFF' },
  dark: { fill: '#FFFFFF', label: '#111114' },
} as const;

export const meterColors = {
  light: {
    ink: '#111114',
    /** Small unit/suffix after a value ("/100", "min"). */
    unit: '#9A9AA0',
    /** Secondary caption under a title. */
    caption: '#9E9EA6',
    /** Eyebrow and counter labels. */
    label: '#77777E',
    positive: '#23A55A',
    positiveBg: '#E7F6EC',
    flat: '#9A9AA0',
    focus: '#A96400',
    focusBg: '#FDEFDC',
    /** Inked portion of a tick meter. */
    tick: '#111114',
    /** Unfilled portion of a tick meter. */
    track: 'rgba(17,17,20,0.10)',
    divider: '#F1F1F4',
    /** Icon tile behind a row's glyph. */
    iconTile: '#F2F2F5',
    glassTint: 'rgba(255,255,255,0.45)',
    solidFallback: 'rgba(255,255,255,0.96)',
  },
  dark: {
    ink: '#FFFFFF',
    unit: '#7C7C84',
    caption: '#9E9EA6',
    label: '#9E9EA6',
    positive: '#2ECC71',
    positiveBg: 'rgba(46,204,113,0.16)',
    flat: '#7C7C84',
    focus: '#F0B458',
    focusBg: 'rgba(240,180,88,0.16)',
    tick: '#FFFFFF',
    track: 'rgba(255,255,255,0.14)',
    divider: 'rgba(255,255,255,0.08)',
    iconTile: 'rgba(255,255,255,0.08)',
    glassTint: 'rgba(10,10,12,0.55)',
    solidFallback: 'rgba(26,26,30,0.96)',
  },
} as const;

/** One scheme's meter colors. Widened to `string` so the light and dark maps
 * stay interchangeable — `as const` above would otherwise pin each key to its
 * own literal hex and make the two incompatible. */
export type MeterColors = {
  readonly [K in keyof (typeof meterColors)['light']]: string;
};

/**
 * Accents for telling metrics apart — one pair per category, `fill` over
 * `track`.
 *
 * This does not contradict the rule above. Colour here marks *which* metric a
 * bar belongs to, never how good its value is; a bar keeps its colour whether
 * it reads 3% or 99%. Assign an accent per metric and keep it stable across
 * screens, so a user learns "amber means calories" once.
 *
 * `red` included: it identifies a metric (a calorie flame), and must never be
 * used to mark a value as bad. That distinction is the whole reason
 * `meterColors` has no red at all.
 */
export const accents = {
  light: {
    blue: { fill: '#0A84FF', track: 'rgba(10,132,255,0.18)' },
    amber: { fill: '#F5A623', track: 'rgba(245,166,35,0.18)' },
    orange: { fill: '#FF7A1A', track: 'rgba(255,122,26,0.18)' },
    red: { fill: '#F0431F', track: 'rgba(240,67,31,0.18)' },
    violet: { fill: '#7C5CFF', track: 'rgba(124,92,255,0.18)' },
    teal: { fill: '#00B4A6', track: 'rgba(0,180,166,0.18)' },
  },
  dark: {
    blue: { fill: '#3B9EFF', track: 'rgba(59,158,255,0.22)' },
    amber: { fill: '#F0B458', track: 'rgba(240,180,88,0.22)' },
    orange: { fill: '#FF9245', track: 'rgba(255,146,69,0.22)' },
    red: { fill: '#FF5C3D', track: 'rgba(255,92,61,0.22)' },
    violet: { fill: '#9B85FF', track: 'rgba(155,133,255,0.22)' },
    teal: { fill: '#2ED3C6', track: 'rgba(46,211,198,0.22)' },
  },
} as const;

export type AccentName = keyof (typeof accents)['light'];
export type Accent = { fill: string; track: string };
