import localFont from 'next/font/local';

/**
 * The same face for the global 404 page, without a preload. The 404 page is
 * attached to every root layout, so its @font-face rule ships in the shared CSS
 * of every page. It is a local copy of Anton (latin) under its own family name:
 * a second next/font/google Anton instance declared the same family "Anton"
 * with a different file, overrode the preloaded face on every page and made
 * the browser download the font twice.
 */
export const antonNoPreload = localFont({
  src: './fonts/anton-latin-404.woff2',
  weight: '400',
  display: 'swap',
  preload: false,
  variable: '--font-display',
  fallback: ['Anton Caps Fallback', 'Arial', 'sans-serif'],
});
