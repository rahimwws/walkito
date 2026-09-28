import { Anton, Oswald } from 'next/font/google';

/**
 * The display face: heavy, extremely condensed, one weight.
 *
 * Loaded through `next/font` rather than a stylesheet link, which matters more
 * than it looks. The headline is the largest thing on the page and the first
 * thing painted, so a font arriving over a second connection is a headline that
 * reflows in front of the reader. `next/font` self-hosts the file at build time
 * and inlines the `@font-face`, so there is no third-party request and no
 * layout shift to swap into.
 *
 * `display: swap` regardless: on a slow connection a heavy condensed face is
 * still better arriving late than a blank rectangle where the headline goes.
 */
export const anton = Anton({
  weight: '400',
  // latin-ext for Spanish: ñ and the accented vowels are in `latin`, but
  // `latin-ext` is what keeps a stray ü or ç from falling back mid-word.
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-display',
});

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
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-display',
});
