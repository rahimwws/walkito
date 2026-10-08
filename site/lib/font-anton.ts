import { Anton } from 'next/font/google';

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
  // Only `latin` is preloaded: it covers English and Spanish headlines,
  // including ñ and the accented vowels. The latin-ext face is still declared
  // in the CSS (next/font includes every subset) and loads only if a headline
  // actually uses one of its letters.
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

