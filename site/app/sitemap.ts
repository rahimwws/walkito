import type { MetadataRoute } from 'next';

import { GUIDES } from '@/lib/guides';
import { TRANSLATED, type Lang, type TranslatedPage } from '@/lib/i18n';
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
  changeFrequency: 'weekly' | 'monthly',
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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...translated('home', () => PAGE_UPDATED.home, 'weekly', 1),
    ...translated('heelPain', (lang) => GUIDES.heelPain[lang].updated, 'monthly', 0.9),
    ...translated('flatFeet', (lang) => GUIDES.flatFeet[lang].updated, 'monthly', 0.9),
    ...translated('about', () => PAGE_UPDATED.about, 'monthly', 0.6),
    single('/program/', PAGE_UPDATED.program, 'monthly', 0.9),
    single('/science/', PAGE_UPDATED.science, 'monthly', 0.9),
    single('/faq/', PAGE_UPDATED.faq, 'monthly', 0.8),
    single('/support/', PAGE_UPDATED.support, 'monthly', 0.5),
    single('/privacy/', PAGE_UPDATED.privacy, 'yearly', 0.3),
    single('/terms/', PAGE_UPDATED.terms, 'yearly', 0.3),
  ];
}
