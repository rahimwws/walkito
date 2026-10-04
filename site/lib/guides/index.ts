import type { Metadata } from 'next';

import { EN_ONLY, OG_LOCALE, TRANSLATED, alternatesFor, isTranslatedPage } from '@/lib/i18n';
import { SITE_NAME } from '@/lib/site';

import { ARTICLES_EN } from './articles-en';
import { FLAT_FEET_EN, HEEL_PAIN_EN } from './en';
import { FLAT_FEET_ES, HEEL_PAIN_ES } from './es';
import { FLAT_FEET_RU, HEEL_PAIN_RU } from './ru';
import type { Guide } from './types';

export type { Guide } from './types';

export const GUIDES = {
  flatFeet: { en: FLAT_FEET_EN, ru: FLAT_FEET_RU, es: FLAT_FEET_ES },
  heelPain: { en: HEEL_PAIN_EN, ru: HEEL_PAIN_RU, es: HEEL_PAIN_ES },
} as const;

/** English-only articles, keyed by page. */
export { ARTICLES_EN };

/** Where a guide lives, translated or not. */
export function guidePath(guide: Guide): string {
  return isTranslatedPage(guide.page) ? TRANSLATED[guide.page][guide.lang] : EN_ONLY[guide.page];
}

/** Every other guide a reader of this one could go to next, in the same
 * language. English readers also get the English-only articles. */
export function relatedGuides(guide: Guide): Guide[] {
  const translated = (Object.keys(GUIDES) as (keyof typeof GUIDES)[]).map((page) => GUIDES[page][guide.lang]);
  const english = guide.lang === 'en' ? Object.values(ARTICLES_EN) : [];
  return [...translated, ...english].filter((g) => g.page !== guide.page);
}

/** A guide's metadata: title, description, canonical and hreflang together, so
 * no page can ship one without the others. */
export function guideMetadata(guide: Guide): Metadata {
  const url = guidePath(guide);
  return {
    title: guide.title,
    description: guide.description,
    alternates: isTranslatedPage(guide.page) ? alternatesFor(guide.page, guide.lang) : { canonical: url },
    openGraph: {
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[guide.lang],
      type: 'article',
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      // Stated rather than inherited: a page-level `openGraph` replaces the
      // layout's whole object, and the Russian and Spanish roots have no card
      // file of their own.
      images: ['/opengraph-image'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      images: ['/opengraph-image'],
    },
  };
}
