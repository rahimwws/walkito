import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, ogCard } from '@/lib/og-card';

/**
 * The share card for every page that is not Russian or Spanish: the home page's hero, drawn
 * by lib/og-card.tsx. Built once into a static PNG under `output: export`.
 */
export const dynamic = 'force-static';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = OG_ALT.en;

export default function Image() {
  return ogCard('en');
}
