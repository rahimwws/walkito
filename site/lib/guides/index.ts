import type { Metadata } from 'next';

import { NEW_ARTICLE_PATHS, isFullLang, type NewLang } from '@/lib/i18n';
import { EN_ONLY, ES_ARTICLES, RU_ARTICLES, OG_LOCALE, TRANSLATED, alternatesArticle, alternatesFor, isTranslatedPage, type EnglishPage, type Lang } from '@/lib/i18n';
import { SITE_NAME, smartBannerContent, type AppScreen } from '@/lib/site';

import { groupOf } from '@/lib/nav';

import { ARTICLES_EN } from './articles-en';
import { ARTICLES_ES } from './articles-es';
import { ARTICLES_RU } from './articles-ru';
import { ARTICLES_NEW } from './articles-new';
import { FLAT_FEET_EN, HEEL_PAIN_EN } from './en';
import { FLAT_FEET_ES, HEEL_PAIN_ES } from './es';
import { FLAT_FEET_RU, HEEL_PAIN_RU } from './ru';
import { FLAT_FEET_PT, HEEL_PAIN_PT } from './pt';
import { FLAT_FEET_FR, HEEL_PAIN_FR } from './fr';
import { FLAT_FEET_IT, HEEL_PAIN_IT } from './it';
import { FLAT_FEET_DE, HEEL_PAIN_DE } from './de';
import type { Guide } from './types';

export type { Guide } from './types';

export const GUIDES = {
  flatFeet: { en: FLAT_FEET_EN, ru: FLAT_FEET_RU, es: FLAT_FEET_ES, pt: FLAT_FEET_PT, fr: FLAT_FEET_FR, it: FLAT_FEET_IT, de: FLAT_FEET_DE },
  heelPain: { en: HEEL_PAIN_EN, ru: HEEL_PAIN_RU, es: HEEL_PAIN_ES, pt: HEEL_PAIN_PT, fr: HEEL_PAIN_FR, it: HEEL_PAIN_IT, de: HEEL_PAIN_DE },
} as const;

/** English-only articles, keyed by page. */
export { ARTICLES_EN };

/** Spanish versions of English-only articles, keyed by page. */
export { ARTICLES_ES };

/** Russian versions of English-only articles, keyed by page. */
export { ARTICLES_RU };

/** Portuguese, French, Italian and German versions of English articles. */
export { ARTICLES_NEW };

/** Does this English article have a version in this newer language? */
export function hasNew(page: EnglishPage, lang: NewLang): boolean {
  return ARTICLES_NEW[lang][page] != null;
}

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
  const langs: Partial<Record<Lang, string>> = { en: EN_ONLY[guide.page] };
  if (es) langs.es = ES_ARTICLES[guide.page];
  if (ru) langs.ru = RU_ARTICLES[guide.page];
  for (const l of ['pt', 'fr', 'it', 'de'] as const) {
    if (hasNew(guide.page, l)) langs[l] = NEW_ARTICLE_PATHS[l][guide.page]!;
  }
  return Object.keys(langs).length > 1 ? langs : null;
}

/** Where a guide lives, translated or not. */
export function guidePath(guide: Guide): string {
  if (isTranslatedPage(guide.page)) return TRANSLATED[guide.page][guide.lang];
  if (guide.lang === 'es') return ES_ARTICLES[guide.page];
  if (guide.lang === 'ru') return RU_ARTICLES[guide.page];
  if (!isFullLang(guide.lang)) return NEW_ARTICLE_PATHS[guide.lang][guide.page]!;
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
          : (Object.values(ARTICLES_NEW[guide.lang as NewLang]) as Guide[]);
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
/** Which app screen a guide's Smart App Banner opens for people who already
 * have the app: the in-app calf raise test from the test page, the morning
 * routine from the morning heel pain page, today's session from the rest. */
function bannerScreen(guide: Guide): AppScreen {
  if (guide.page === 'calfRaiseTest') return 'test';
  if (guide.page === 'morningHeelPain') return 'library/morning';
  return 'today';
}

export function guideMetadata(guide: Guide): Metadata {
  const url = guidePath(guide);
  const banner = smartBannerContent(guide.lang === 'en' ? 'smart-banner' : `smart-banner-${guide.lang}`, bannerScreen(guide));
  return {
    // Stated per page: a page-level `other` replaces the layout's.
    ...(banner ? { other: { 'apple-itunes-app': banner } } : {}),
    title: guide.title,
    description: guide.description,
    alternates: isTranslatedPage(guide.page)
      ? alternatesFor(guide.page, guide.lang)
      : languagesOf(guide)
        ? { canonical: url, languages: { ...languagesOf(guide)!, 'x-default': EN_ONLY[guide.page] } }
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
      // layout's whole object. Russian and Spanish have a card of their own
      // (lib/og-card.tsx); every other language shares the English one.
      images: [shareCard(guide.lang)],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      images: [shareCard(guide.lang)],
    },
  };
}

/** The share card a page in this language points at. */
function shareCard(lang: Guide['lang']): string {
  return lang === 'ru' || lang === 'es' ? `/${lang}/opengraph-image` : '/opengraph-image';
}
