import { useId, type CSSProperties, type ReactNode } from 'react';

/**
 * The social networks' own marks, as inline SVG.
 *
 * The paths are the brands' official glyphs as the simple-icons project
 * publishes them (CC0, https://simpleicons.org, fetched 8 October 2026), not
 * redrawings. Where a mark is two colours (YouTube's play button, LinkedIn's
 * square, Strava's two chevrons), its one path is split into the parts that
 * take each colour; the outlines are unchanged.
 *
 * Three ways to draw each:
 *
 * - `mono`: the glyph in `currentColor`, for a row of quiet links.
 * - `color`: the mark in its brand colours on a clear ground. TikTok's note
 *   keeps `currentColor` for its main shape (black on light, white on dark),
 *   with the cyan and red copies behind it, as TikTok sets it on either.
 * - `tile`: the app icon, a rounded square in the brand's ground with the mark
 *   on it, the way each one sits on a phone's home screen.
 *
 * `size` is a number of pixels or any CSS length, including a `var()`. A tile
 * reads `--brand-radius` (default 23%) and `--brand-ring` (a hairline) from
 * its parent, so a section can round or light it to match without a second
 * stylesheet. Every one is decorative: the link around it carries the name.
 */

export type BrandVariant = 'mono' | 'color' | 'tile';

export type BrandIconProps = {
  variant?: BrandVariant;
  size?: number | string;
  className?: string;
};

// ---- paths (simple-icons, CC0) ---------------------------------------------

const TIKTOK =
  'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z';

const INSTAGRAM =
  'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077';

/** YouTube's frame and its play triangle: one path in simple-icons, split here. */
const YOUTUBE_FRAME =
  'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z';
const YOUTUBE_PLAY = 'M9.545 15.568V8.432L15.818 12l-6.273 3.568z';
const YOUTUBE = `${YOUTUBE_FRAME}M9.545 15.568V8.432L15.818 12l-6.273 3.568z`;

/** LinkedIn's square and the "in" cut out of it. */
const LINKEDIN_IN =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z';
const LINKEDIN_SQUARE =
  'M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';
const LINKEDIN = `${LINKEDIN_IN}${LINKEDIN_SQUARE}`;

const X =
  'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z';

/** Strava's two chevrons: the large one, and the small one under it that the
 * mark sets in a lighter tint. Absolute versions of simple-icons' two subpaths. */
const STRAVA_PEAK = 'M10.463 8.229l2.836 5.598h4.172L10.463 0l-7 13.828h4.169z';
const STRAVA_SMALL = 'M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066z';
const STRAVA = `${STRAVA_SMALL}${STRAVA_PEAK}`;

const FACEBOOK =
  'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z';

// ---- brand colours ---------------------------------------------------------

const TIKTOK_CYAN = '#25F4EE';
const TIKTOK_RED = '#FE2C55';
const YOUTUBE_RED = '#FF0000';
const LINKEDIN_BLUE = '#0A66C2';
const STRAVA_ORANGE = '#FC4C02';
const STRAVA_LIGHT = '#F9B797';
const FACEBOOK_BLUE = '#0866FF';

/**
 * Instagram's app-icon gradient: warm light rising from the bottom-left corner
 * through orange and pink to purple, and a blue-violet wash in the top-left,
 * the two layers of the icon Instagram has shipped since 2016.
 */
const INSTAGRAM_GROUND =
  'radial-gradient(90% 75% at -8% 2%, #3771c8 0%, #3771c8 12%, rgba(102, 0, 255, 0) 100%), radial-gradient(135% 135% at 28% 108%, #fd5 0%, #fd5 10%, #ff543e 50%, #c837ab 100%)';

// ---- shared pieces ---------------------------------------------------------

const length = (size: number | string) => (typeof size === 'number' ? `${size}px` : size);

function Svg({
  size,
  className,
  viewBox = '0 0 24 24',
  fill,
  style,
  children,
}: {
  size: number | string;
  className?: string;
  viewBox?: string;
  fill?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      width={typeof size === 'number' ? size : undefined}
      height={typeof size === 'number' ? size : undefined}
      fill={fill}
      className={className}
      style={typeof size === 'number' ? style : { width: size, height: size, ...style }}
      aria-hidden
      focusable="false"
    >
      {children}
    </svg>
  );
}

/**
 * The app icon: a rounded square of the brand's ground with the mark centred
 * at `glyph` of its width. The inner SVG is sized inline, so a page rule such
 * as `.social svg { width: 20px }` cannot shrink the mark inside its tile.
 */
function Tile({
  size,
  className,
  ground,
  glyph,
  viewBox,
  children,
}: {
  size: number | string;
  className?: string;
  ground: string;
  glyph: string;
  viewBox?: string;
  children: ReactNode;
}) {
  const side = length(size);
  const style = {
    display: 'inline-grid',
    placeItems: 'center',
    flex: 'none',
    width: side,
    height: side,
    overflow: 'hidden',
    borderRadius: 'var(--brand-radius, 23%)',
    cornerShape: 'superellipse(1.2)',
    background: ground,
    boxShadow: 'var(--brand-ring, inset 0 0 0 1px rgba(120, 120, 128, 0.2))',
  } as CSSProperties;
  return (
    <span className={className} style={style} aria-hidden>
      <Svg size={glyph} viewBox={viewBox} style={{ display: 'block' }}>
        {children}
      </Svg>
    </span>
  );
}

function Mono({ d, size, className }: { d: string; size: number | string; className?: string }) {
  return (
    <Svg size={size} className={className} fill="currentColor">
      <path d={d} />
    </Svg>
  );
}

// ---- the marks -------------------------------------------------------------

/** TikTok's note, with its cyan copy up and left and its red copy down and right. */
export function TikTokLogo({ variant = 'mono', size = 24, className }: BrandIconProps) {
  if (variant === 'mono') return <Mono d={TIKTOK} size={size} className={className} />;
  // The copies sit 0.7 of the 24-unit box off the note, so the box grows by a
  // unit on each side to keep them inside it.
  const note = (main: string) => (
    <>
      <path d={TIKTOK} fill={TIKTOK_CYAN} transform="translate(-0.7 -0.7)" />
      <path d={TIKTOK} fill={TIKTOK_RED} transform="translate(0.7 0.7)" />
      <path d={TIKTOK} fill={main} />
    </>
  );
  if (variant === 'color') {
    return (
      <Svg size={size} className={className} viewBox="-1 -1 26 26">
        {note('currentColor')}
      </Svg>
    );
  }
  return (
    <Tile size={size} className={className} ground="#000" glyph="58%" viewBox="-1 -1 26 26">
      {note('#fff')}
    </Tile>
  );
}

/** Instagram's camera, in its gradient, or white on the gradient as the app icon. */
export function InstagramLogo({ variant = 'mono', size = 24, className }: BrandIconProps) {
  // Unique per instance: a gradient referenced by an id another copy also
  // uses can resolve to one inside a hidden menu and paint nothing.
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  if (variant === 'mono') return <Mono d={INSTAGRAM} size={size} className={className} />;
  if (variant === 'color') {
    return (
      <Svg size={size} className={className}>
        <defs>
          <radialGradient id={`${id}-warm`} cx="0.28" cy="1.08" r="1.35">
            <stop offset="0" stopColor="#fd5" />
            <stop offset="0.1" stopColor="#fd5" />
            <stop offset="0.5" stopColor="#ff543e" />
            <stop offset="1" stopColor="#c837ab" />
          </radialGradient>
          <radialGradient id={`${id}-cool`} cx="-0.08" cy="0.02" r="0.9">
            <stop offset="0" stopColor="#3771c8" />
            <stop offset="0.12" stopColor="#3771c8" />
            <stop offset="1" stopColor="#6600ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d={INSTAGRAM} fill={`url(#${id}-warm)`} />
        <path d={INSTAGRAM} fill={`url(#${id}-cool)`} />
      </Svg>
    );
  }
  return (
    <Tile size={size} className={className} ground={INSTAGRAM_GROUND} glyph="64%">
      <path d={INSTAGRAM} fill="#fff" />
    </Tile>
  );
}

/** YouTube's red play button; its app icon is that button on white. */
export function YouTubeLogo({ variant = 'mono', size = 24, className }: BrandIconProps) {
  if (variant === 'mono') return <Mono d={YOUTUBE} size={size} className={className} />;
  const button = (
    <>
      <path d={YOUTUBE_FRAME} fill={YOUTUBE_RED} />
      <path d={YOUTUBE_PLAY} fill="#fff" />
    </>
  );
  if (variant === 'color') {
    return (
      <Svg size={size} className={className}>
        {button}
      </Svg>
    );
  }
  return (
    <Tile size={size} className={className} ground="#fff" glyph="66%">
      {button}
    </Tile>
  );
}

/** LinkedIn's "in": white in the blue square, or the square's blue as a tile. */
export function LinkedInLogo({ variant = 'mono', size = 24, className }: BrandIconProps) {
  if (variant === 'mono') return <Mono d={LINKEDIN} size={size} className={className} />;
  if (variant === 'color') {
    return (
      <Svg size={size} className={className}>
        <path d={LINKEDIN_SQUARE} fill={LINKEDIN_BLUE} />
        <path d={LINKEDIN_IN} fill="#fff" />
      </Svg>
    );
  }
  // The letters keep their place in the square they were drawn for, which
  // leaves the margin LinkedIn's own icon has.
  return (
    <Tile size={size} className={className} ground={LINKEDIN_BLUE} glyph="88%">
      <path d={LINKEDIN_IN} fill="#fff" />
    </Tile>
  );
}

/** X's mark: black on a clear ground, white on black as the app icon. */
export function XLogo({ variant = 'mono', size = 24, className }: BrandIconProps) {
  if (variant === 'mono') return <Mono d={X} size={size} className={className} />;
  if (variant === 'color') {
    return (
      <Svg size={size} className={className} fill="#000">
        <path d={X} />
      </Svg>
    );
  }
  return (
    <Tile size={size} className={className} ground="#000" glyph="50%">
      <path d={X} fill="#fff" />
    </Tile>
  );
}

/** Strava's chevrons in its orange, the small one lighter; white on orange as the app icon. */
export function StravaLogo({ variant = 'mono', size = 24, className }: BrandIconProps) {
  if (variant === 'mono') return <Mono d={STRAVA} size={size} className={className} />;
  if (variant === 'color') {
    return (
      <Svg size={size} className={className}>
        <path d={STRAVA_PEAK} fill={STRAVA_ORANGE} />
        <path d={STRAVA_SMALL} fill={STRAVA_LIGHT} />
      </Svg>
    );
  }
  return (
    <Tile size={size} className={className} ground={STRAVA_ORANGE} glyph="60%">
      <path d={STRAVA_PEAK} fill="#fff" />
      <path d={STRAVA_SMALL} fill="#fff" fillOpacity={0.6} />
    </Tile>
  );
}

/** Facebook's circle with the "f" cut out of it; the tile puts it on white. */
export function FacebookLogo({ variant = 'mono', size = 24, className }: BrandIconProps) {
  if (variant === 'mono') return <Mono d={FACEBOOK} size={size} className={className} />;
  // White under the circle, so the "f" reads white and not as a hole.
  const mark = (
    <>
      <circle cx="12" cy="12.04" r="11.5" fill="#fff" />
      <path d={FACEBOOK} fill={FACEBOOK_BLUE} />
    </>
  );
  if (variant === 'color') {
    return (
      <Svg size={size} className={className}>
        {mark}
      </Svg>
    );
  }
  return (
    <Tile size={size} className={className} ground="#fff" glyph="74%">
      {mark}
    </Tile>
  );
}
