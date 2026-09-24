import type { Metadata } from 'next';

import { OG_LOCALE, TRANSLATED, alternatesFor } from '@/lib/i18n';
import { SITE_NAME } from '@/lib/site';

import { FLAT_FEET_EN, HEEL_PAIN_EN } from './en';
import { FLAT_FEET_ES, HEEL_PAIN_ES } from './es';
import { FLAT_FEET_RU, HEEL_PAIN_RU } from './ru';
import type { Guide } from './types';

export type { Guide } from './types';

export const GUIDES = {
  flatFeet: { en: FLAT_FEET_EN, ru: FLAT_FEET_RU, es: FLAT_FEET_ES },
  heelPain: { en: HEEL_PAIN_EN, ru: HEEL_PAIN_RU, es: HEEL_PAIN_ES },
} as const;

/** A guide's metadata: title, description, canonical and hreflang together, so
 * no page can ship one without the others. */
export function guideMetadata(guide: Guide): Metadata {
  const url = TRANSLATED[guide.page][guide.lang];
  return {
    title: guide.title,
    description: guide.description,
    alternates: alternatesFor(guide.page, guide.lang),
    openGraph: {
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[guide.lang],
      type: 'article',
      // Stated rather than inherited: a page-level `openGraph` replaces the
      // layout's whole object, and the Russian and Spanish roots have no card
      // file of their own.
      images: ['/opengraph-image'],
    },
  };
}
