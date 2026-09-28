import type { MetadataRoute } from 'next';

import { TRANSLATED, type TranslatedPage } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

/**
 * Only the pages that exist.
 *
 * `/pricing` is still missing: it needs a price that matches the store, and a
 * wrong one in schema is worse than none. Listing a 404 here is how a site
 * teaches a crawler to trust the file less.
 *
 * `lastModified` is the build time rather than `new Date()` evaluated per
 * request, which for a static export is the same thing — but the distinction
 * matters if this ever moves to a server. A sitemap that claims every page
 * changed today, every day, gets its dates ignored altogether.
 */
const BUILT_AT = new Date();

// Same as robots: emitted once at build time.
export const dynamic = 'force-static';

/**
 * A translated page's three entries, each carrying the full set of alternates.
 *
 * Google accepts hreflang from the sitemap as well as the page head; stating it
 * in both is belt and braces for a new domain whose pages have not been
 * crawled often enough for the head to be trusted yet.
 */
function translated(
  page: TranslatedPage,
  changeFrequency: 'weekly' | 'monthly',
  priority: number,
): MetadataRoute.Sitemap {
  const paths = TRANSLATED[page];
  const languages = {
    en: `${SITE_URL}${paths.en}`,
    ru: `${SITE_URL}${paths.ru}`,
    es: `${SITE_URL}${paths.es}`,
  };
  return (['en', 'ru', 'es'] as const).map((lang) => ({
    url: `${SITE_URL}${paths[lang]}`,
    lastModified: BUILT_AT,
    changeFrequency,
    // English stays the reference version; the translations sit a notch under.
    priority: lang === 'en' ? priority : priority - 0.1,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...translated('home', 'weekly', 1),
    ...translated('heelPain', 'monthly', 0.9),
    ...translated('flatFeet', 'monthly', 0.9),
    { url: `${SITE_URL}/program/`, lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/science/`, lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/faq/`, lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/support/`, lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/privacy/`, lastModified: BUILT_AT, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified: BUILT_AT, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
