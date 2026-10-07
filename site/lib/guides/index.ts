import type { Metadata } from 'next';

import { EN_ONLY, ES_ARTICLES, RU_ARTICLES, OG_LOCALE, TRANSLATED, alternatesArticle, alternatesFor, isTranslatedPage, type EnglishPage, type Lang } from '@/lib/i18n';
import { SITE_NAME } from '@/lib/site';

import { groupOf } from '@/lib/nav';

import { ARTICLES_EN } from './articles-en';
import { ARTICLES_ES } from './articles-es';
import { ARTICLES_RU } from './articles-ru';
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

/** Spanish versions of English-only articles, keyed by page. */
export { ARTICLES_ES };

/** Russian versions of English-only articles, keyed by page. */
export { ARTICLES_RU };

/** Does this English-only article have a Spanish version? */
export function hasSpanish(page: EnglishPage): boolean {
  return ARTICLES_ES[page] != null;
}

/** Does this English-only article have a Russian version? */
export function hasRussian(page: EnglishPage): boolean {
  return ARTICLES_RU[page] != null;
}

/** Every language version of a guide's page, for hreflang and the footer
 * switcher: all three for a translated page, en + whichever of es/ru exist
 * for an English article, nothing for an English-only one. */
export function languagesOf(guide: Guide): Partial<Record<Lang, string>> | null {
  if (isTranslatedPage(guide.page)) return TRANSLATED[guide.page];
  const es = hasSpanish(guide.page);
  const ru = hasRussian(guide.page);
  if (!es && !ru) return null;
  const langs: Partial<Record<Lang, string>> = { en: EN_ONLY[guide.page] };
  if (es) langs.es = ES_ARTICLES[guide.page];
  if (ru) langs.ru = RU_ARTICLES[guide.page];
  return langs;
}

/** Where a guide lives, translated or not. */
export function guidePath(guide: Guide): string {
  if (isTranslatedPage(guide.page)) return TRANSLATED[guide.page][guide.lang];
  if (guide.lang === 'es') return ES_ARTICLES[guide.page];
  if (guide.lang === 'ru') return RU_ARTICLES[guide.page];
  return EN_ONLY[guide.page];
}

/** Up to five guides to read next, in the same language: the same topic
 * group first (`lib/nav.ts`), then the two main guides, then the rest. A list
 * of every page on the site is a list nobody reads. */
export function relatedGuides(guide: Guide, max = 5): Guide[] {
  const translated = (Object.keys(GUIDES) as (keyof typeof GUIDES)[]).map((page) => GUIDES[page][guide.lang]);
  const english =
    guide.lang === 'en'
      ? Object.values(ARTICLES_EN)
      : guide.lang === 'es'
        ? (Object.values(ARTICLES_ES) as Guide[])
        : guide.lang === 'ru'
          ? (Object.values(ARTICLES_RU) as Guide[])
          : [];
  const all = [...translated, ...english].filter((g) => g.page !== guide.page);
  const own = groupOf(guide.page);
  const rank = (g: Guide) =>
    own && groupOf(g.page) === own
      ? 0
      : g.page === 'heelPain' || g.page === 'flatFeet'
        ? 1
        : groupOf(g.page) === 'compare' || groupOf(g.page) === 'library'
          ? 3
          : 2;
  return all
    .map((g, i) => ({ g, i }))
    .sort((x, y) => rank(x.g) - rank(y.g) || x.i - y.i)
    .slice(0, max)
    .map((x) => x.g);
}

/** A guide's metadata: title, description, canonical and hreflang together, so
 * no page can ship one without the others. */
export function guideMetadata(guide: Guide): Metadata {
  const url = guidePath(guide);
  return {
    title: guide.title,
    description: guide.description,
    alternates: isTranslatedPage(guide.page)
      ? alternatesFor(guide.page, guide.lang)
      : (hasSpanish(guide.page) || hasRussian(guide.page))
        ? alternatesArticle(guide.page, guide.lang as 'en' | 'es' | 'ru', hasSpanish(guide.page), hasRussian(guide.page))
        : { canonical: url },
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
