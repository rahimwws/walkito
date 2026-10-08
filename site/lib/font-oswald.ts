import { Oswald } from 'next/font/google';

/**
 * The Russian display face.
 *
 * Anton has no Cyrillic, so a Russian headline in it falls back to the body
 * face letter by letter. Oswald is the nearest condensed grotesque that does.
 * One weight, 700: the headline CSS asks for 400 (see `.hero h1`), and with a
 * single heavier face declared the browser uses it as is rather than
 * synthesising anything.
 */
export const oswald = Oswald({
  weight: '700',
  // Only Cyrillic is preloaded; the Latin face (for "Walkito" in a headline)
  // is still declared and loads on demand.
  subsets: ['cyrillic'],
  // 'swap': the hero headline keeps its lines while the face loads because
  // of 'Anton Caps Fallback' in globals.css, so swapping causes no jump.
  display: 'swap',
  variable: '--font-display',
});
