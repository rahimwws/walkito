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
  // 'block', not 'swap': the CSS is inlined (next.config inlineCss), so the
  // page paints before this font arrives. With 'swap' the headline was drawn
  // in the fallback first and then jumped when the condensed face came in
  // (PageSpeed CLS 0.114, 0.087 of it this headline). The file is preloaded
  // and self-hosted, so the wait is short, and nothing else on the page waits.
  display: 'block',
  variable: '--font-display',
});
