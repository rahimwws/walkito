import type { MetadataRoute } from 'next';

import { ARTICLES_EN, ARTICLES_ES, GUIDES } from '@/lib/guides';
import { CUSTOM_EN_ES, EN_ONLY, ES_ARTICLES, TRANSLATED, type CustomEnEsPage, type EnglishPage, type Lang, type TranslatedPage } from '@/lib/i18n';
import { PAGE_UPDATED, SITE_URL } from '@/lib/site';

/**
 * Only the pages that exist, each with the date its content last changed.
 *
 * Real dates, not the build time. A sitemap that claims every page changed on
 * every deploy gets its dates ignored altogether, and then a genuine update
 * waits for a crawl like everything else. Guides carry their own date; the
 * other pages take theirs from `PAGE_UPDATED`.
 */

// Same as robots: emitted once at build time.
export const dynamic = 'force-static';

/**
 * A translated page's three entries, each carrying the full set of alternates.
 *
 * Google accepts hreflang from the sitemap as well as the page head; stating it
 * in both is belt and braces for a new domain whose pages have not been
 * crawled often enough for the head to be trusted yet. The two must agree, so
 * this carries the same `x-default` → English that `alternatesFor` puts in the
 * head.
 */
function translated(
  page: TranslatedPage,
  updated: (lang: Lang) => string,
  changeFrequency: 'weekly' | 'monthly' | 'yearly',
  priority: number,
): MetadataRoute.Sitemap {
  const paths = TRANSLATED[page];
  const languages = {
    en: `${SITE_URL}${paths.en}`,
    ru: `${SITE_URL}${paths.ru}`,
    es: `${SITE_URL}${paths.es}`,
    'x-default': `${SITE_URL}${paths.en}`,
  };
  return (['en', 'ru', 'es'] as const).map((lang) => ({
    url: `${SITE_URL}${paths[lang]}`,
    lastModified: updated(lang),
    changeFrequency,
    // English stays the reference version; the translations sit a notch under.
    priority: lang === 'en' ? priority : priority - 0.1,
    alternates: { languages },
  }));
}

const single = (
  path: string,
  updated: string,
  changeFrequency: 'monthly' | 'yearly',
  priority: number,
): MetadataRoute.Sitemap[number] => ({ url: `${SITE_URL}${path}`, lastModified: updated, changeFrequency, priority });

/**
 * A custom page that exists in English and Spanish only (not a Guide, not a
 * three-language translated page). Same belt-and-braces hreflang as `enEs`.
 */
function customEnEs(
  page: CustomEnEsPage,
  updated: string,
  changeFrequency: 'monthly' | 'yearly',
  priority: number,
): MetadataRoute.Sitemap {
  const paths = CUSTOM_EN_ES[page];
  const languages = {
    en: `${SITE_URL}${paths.en}`,
    es: `${SITE_URL}${paths.es}`,
    'x-default': `${SITE_URL}${paths.en}`,
  };
  return [
    { url: languages.en, lastModified: updated, changeFrequency, priority, alternates: { languages } },
    { url: languages.es, lastModified: updated, changeFrequency, priority: priority - 0.1, alternates: { languages } },
  ];
}

/**
 * An English article, plus its Spanish version when there is one, each
 * carrying en/es/x-default alternates like the page head does.
 */
function enEs(page: EnglishPage, enUpdated: string): MetadataRoute.Sitemap {
  const es = ARTICLES_ES[page];
  if (!es) return [single(EN_ONLY[page], enUpdated, 'monthly', 0.9)];
  const languages = {
    en: `${SITE_URL}${EN_ONLY[page]}`,
    es: `${SITE_URL}${ES_ARTICLES[page]}`,
    'x-default': `${SITE_URL}${EN_ONLY[page]}`,
  };
  return [
    { url: languages.en, lastModified: enUpdated, changeFrequency: 'monthly', priority: 0.9, alternates: { languages } },
    { url: languages.es, lastModified: es.updated, changeFrequency: 'monthly', priority: 0.8, alternates: { languages } },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...translated('home', () => PAGE_UPDATED.home, 'weekly', 1),
    ...translated('heelPain', (lang) => GUIDES.heelPain[lang].updated, 'monthly', 0.9),
    ...translated('flatFeet', (lang) => GUIDES.flatFeet[lang].updated, 'monthly', 0.9),
    ...translated('about', () => PAGE_UPDATED.about, 'monthly', 0.6),
    ...customEnEs('runners', PAGE_UPDATED.runners, 'monthly', 0.9),
    ...Object.values(ARTICLES_EN).flatMap((g) => enEs(g.page as EnglishPage, g.updated)),
    ...customEnEs('exercises', '2026-10-05', 'monthly', 0.8),
    ...customEnEs('printables', '2026-10-05', 'monthly', 0.7),
    ...customEnEs('program', PAGE_UPDATED.program, 'monthly', 0.9),
    ...customEnEs('science', PAGE_UPDATED.science, 'monthly', 0.9),
    ...customEnEs('faq', PAGE_UPDATED.faq, 'monthly', 0.8),
    ...translated('support', () => PAGE_UPDATED.support, 'monthly', 0.5),
    ...translated('privacy', () => PAGE_UPDATED.privacy, 'yearly', 0.3),
    ...translated('terms', () => PAGE_UPDATED.terms, 'yearly', 0.3),
  ];
}
