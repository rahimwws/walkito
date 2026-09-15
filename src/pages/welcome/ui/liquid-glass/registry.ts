import type { CookbookMetadata } from './types';

/** Only the "astro" night-sky screen was vendored; upstream's "sky" variant
 * and its 6MB video were left behind. */
export const COOKBOOK_METADATA: readonly CookbookMetadata[] = [
  {
    id: 'astro',
    number: 2,
    displayName: 'Astro',
    background: 'layers',
    returnMode: 'vortex',
  },
] as const;
