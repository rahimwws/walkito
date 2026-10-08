import { Anton } from 'next/font/google';

/**
 * The same face for the global 404 page, without a preload. The 404 page is
 * attached to every root layout, so a preloading font here would be fetched
 * ahead of the content on every Russian page too, which never uses Anton.
 */
export const antonNoPreload = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'block', // same as lib/font-anton.ts: one @font-face family, one behaviour
  preload: false,
  variable: '--font-display',
});
