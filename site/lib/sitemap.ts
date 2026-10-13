import type { MetadataRoute } from 'next';

import { ARTICLES_EN, ARTICLES_ES, ARTICLES_NEW, ARTICLES_RU, GUIDES } from '@/lib/guides';
import { NEW_ARTICLE_PATHS, NEW_LANGS, LANGS, CUSTOM_PAGES, EN_ONLY, ES_ARTICLES, RU_ARTICLES, TRANSLATED, type CustomPage, type EnglishPage, type Lang, type TranslatedPage } from '@/lib/i18n';
import { PAGE_UPDATED, SITE_URL } from '@/lib/site';
import { guidePath } from '@/lib/guides';
import { INDEXED_LANGS, indexedLanguages, isIndexedLang, langOfPath } from '@/lib/i18n';
import { clipSeconds, isoDateTime, mainClip } from '@/lib/video';
import { isExercisePage } from '@/lib/nav';

/**
 * Only the pages that exist, each with the date its content last changed.
 *
 * Real dates, not the build time. A sitemap that claims every page changed on
 * every deploy gets its dates ignored altogether, and then a genuine update
 * waits for a crawl like everything else. Guides carry their own date; the
 * other pages take theirs from `PAGE_UPDATED`.
 */

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
    ...Object.fromEntries(LANGS.map((l) => [l, `${SITE_URL}${paths[l]}`])),
    'x-default': `${SITE_URL}${paths.en}`,
  };
  return LANGS.map((lang) => ({
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
 * A custom page that exists in English, Spanish and Russian, with one date for
 * all three or one per language.
 */
function customPage(
  page: CustomPage,
  updated: string | Readonly<Record<'en' | 'es' | 'ru', string>>,
  changeFrequency: 'monthly' | 'yearly',
  priority: number,
): MetadataRoute.Sitemap {
  const paths = CUSTOM_PAGES[page];
  const date = (lang: 'en' | 'es' | 'ru') => (typeof updated === 'string' ? updated : updated[lang]);
  const languages = {
    en: `${SITE_URL}${paths.en}`,
    es: `${SITE_URL}${paths.es}`,
    ru: `${SITE_URL}${paths.ru}`,
    'x-default': `${SITE_URL}${paths.en}`,
  };
  return [
    { url: languages.en, lastModified: date('en'), changeFrequency, priority, alternates: { languages } },
    { url: languages.es, lastModified: date('es'), changeFrequency, priority: priority - 0.1, alternates: { languages } },
    { url: languages.ru, lastModified: date('ru'), changeFrequency, priority: priority - 0.1, alternates: { languages } },
  ];
}

/**
 * An English article, plus its Spanish and/or Russian versions, each
 * carrying alternates like the page head does.
 */
function article(page: EnglishPage, enUpdated: string): MetadataRoute.Sitemap {
  const es = ARTICLES_ES[page];
  const ru = ARTICLES_RU[page];
  const news = NEW_LANGS.filter((l) => ARTICLES_NEW[l][page]);
  if (!es && !ru && news.length === 0) return [single(EN_ONLY[page], enUpdated, 'monthly', 0.9)];
  const languages: Record<string, string> = {
    en: `${SITE_URL}${EN_ONLY[page]}`,
    'x-default': `${SITE_URL}${EN_ONLY[page]}`,
  };
  if (es) languages.es = `${SITE_URL}${ES_ARTICLES[page]}`;
  if (ru) languages.ru = `${SITE_URL}${RU_ARTICLES[page]}`;
  for (const l of news) languages[l] = `${SITE_URL}${NEW_ARTICLE_PATHS[l][page]}`;
  const entries: MetadataRoute.Sitemap = [
    { url: languages.en, lastModified: enUpdated, changeFrequency: 'monthly', priority: 0.9, alternates: { languages } },
  ];
  if (es) entries.push({ url: languages.es, lastModified: es.updated, changeFrequency: 'monthly', priority: 0.8, alternates: { languages } });
  if (ru) entries.push({ url: languages.ru!, lastModified: ru.updated, changeFrequency: 'monthly', priority: 0.8, alternates: { languages } });
  for (const l of news) entries.push({ url: languages[l], lastModified: ARTICLES_NEW[l][page]!.updated, changeFrequency: 'monthly', priority: 0.8, alternates: { languages } });
  return entries;
}

/** Every page, every language, before the indexed-language filter. */
function allEntries(): MetadataRoute.Sitemap {
  return [
    ...translated('home', () => PAGE_UPDATED.home, 'weekly', 1),
    ...translated('heelPain', (lang) => GUIDES.heelPain[lang].updated, 'monthly', 0.9),
    ...translated('flatFeet', (lang) => GUIDES.flatFeet[lang].updated, 'monthly', 0.9),
    ...translated('about', () => PAGE_UPDATED.about, 'monthly', 0.6),
    ...customPage('runners', PAGE_UPDATED.runners, 'monthly', 0.9),
    ...Object.values(ARTICLES_EN).flatMap((g) => article(g.page as EnglishPage, g.updated)),
    ...customPage('exercises', PAGE_UPDATED.exercises, 'monthly', 0.8),
    ...customPage('printables', PAGE_UPDATED.printables, 'monthly', 0.7),
    ...customPage('program', PAGE_UPDATED.program, 'monthly', 0.9),
    ...customPage('science', PAGE_UPDATED.science, 'monthly', 0.9),
    ...customPage('faq', PAGE_UPDATED.faq, 'monthly', 0.8),
    ...customPage('footMap', PAGE_UPDATED.footMap, 'monthly', 0.9),
    ...translated('support', () => PAGE_UPDATED.support, 'monthly', 0.5),
    ...translated('privacy', () => PAGE_UPDATED.privacy, 'yearly', 0.3),
    ...translated('terms', () => PAGE_UPDATED.terms, 'yearly', 0.3),
  ];
}

/* ------------------------------------------------------------------------ *
 * The sitemap files. /sitemap.xml is an index pointing at one sitemap per
 * indexed language plus a video sitemap, so Search Console and Bing report
 * indexing per language. `/sitemap-priority.xml` (not in the index) is the
 * short list of the best English pages, submitted to Bing by hand.
 * ------------------------------------------------------------------------ */

/** Every indexable page: indexed languages only, and hreflang limited to them. */
export function indexedEntries(): MetadataRoute.Sitemap {
  return allEntries()
    .filter((e) => isIndexedLang(langOfPath(e.url)))
    .map((e) => (e.alternates?.languages ? { ...e, alternates: { languages: indexedLanguages(e.alternates.languages as Record<string, string>) } } : e));
}

export function entriesFor(lang: string): MetadataRoute.Sitemap {
  return indexedEntries().filter((e) => langOfPath(e.url) === lang);
}

/** The best English pages for Bing first: guides, tools and hubs, not the
 * exercise pages or the legal and support pages. Highest priority first, then
 * the most recently updated, at most 50. */
export function priorityEntries(max = 50): MetadataRoute.Sitemap {
  const skip = /\/(exercises|privacy|terms|support)\//;
  return entriesFor('en')
    .filter((e) => !skip.test(e.url))
    .map((e, i) => ({ e, i }))
    .sort((a, b) => (b.e.priority ?? 0) - (a.e.priority ?? 0) || String(b.e.lastModified).localeCompare(String(a.e.lastModified)) || a.i - b.i)
    .slice(0, max)
    .map((x) => x.e);
}

type VideoEntry = { page: string; title: string; description: string; thumbnail: string; content: string; seconds?: number; published: string };

/** One video per exercise page in an indexed language: the page's own clip. */
export function videoEntries(): VideoEntry[] {
  const guides = [
    ...Object.values(ARTICLES_EN),
    ...(INDEXED_LANGS.includes('es') ? Object.values(ARTICLES_ES) : []),
    ...(INDEXED_LANGS.includes('ru') ? Object.values(ARTICLES_RU) : []),
  ].filter((g) => g != null && isExercisePage(g.page));
  return guides.flatMap((g) => {
    const clip = mainClip(g!.sections.flatMap((s) => s.exercises ?? []));
    if (!clip) return [];
    return [{
      page: `${SITE_URL}${guidePath(g!)}`,
      title: clip.name,
      description: (clip.caption ?? clip.how).replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      thumbnail: `${SITE_URL}/exercises/${clip.media}@2x.webp`,
      content: `${SITE_URL}/exercises/${clip.media}.mp4`,
      seconds: clipSeconds(clip.media),
      published: isoDateTime(g!.published),
    }];
  });
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const XML = '<?xml version="1.0" encoding="UTF-8"?>\n';

export function urlsetXml(entries: MetadataRoute.Sitemap): string {
  const urls = entries.map((e) => {
    const alts = Object.entries((e.alternates?.languages ?? {}) as Record<string, string>)
      .map(([l, href]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${esc(href)}" />`)
      .join('\n');
    return [
      '<url>',
      `<loc>${esc(e.url)}</loc>`,
      ...(alts ? [alts] : []),
      ...(e.lastModified ? [`<lastmod>${esc(String(e.lastModified))}</lastmod>`] : []),
      ...(e.changeFrequency ? [`<changefreq>${e.changeFrequency}</changefreq>`] : []),
      ...(e.priority != null ? [`<priority>${Math.round(e.priority * 10) / 10}</priority>`] : []),
      '</url>',
    ].join('\n');
  });
  return `${XML}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
}

export function videoXml(videos: VideoEntry[]): string {
  const urls = videos.map((v) =>
    [
      '<url>',
      `<loc>${esc(v.page)}</loc>`,
      '<video:video>',
      `<video:thumbnail_loc>${esc(v.thumbnail)}</video:thumbnail_loc>`,
      `<video:title>${esc(v.title)}</video:title>`,
      `<video:description>${esc(v.description)}</video:description>`,
      `<video:content_loc>${esc(v.content)}</video:content_loc>`,
      ...(v.seconds ? [`<video:duration>${v.seconds}</video:duration>`] : []),
      `<video:publication_date>${esc(v.published)}</video:publication_date>`,
      '<video:family_friendly>yes</video:family_friendly>',
      '</video:video>',
      '</url>',
    ].join('\n'),
  );
  return `${XML}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${urls.join('\n')}\n</urlset>\n`;
}

const newest = (entries: MetadataRoute.Sitemap) =>
  entries.map((e) => String(e.lastModified ?? '')).filter(Boolean).sort().at(-1);

export function indexXml(): string {
  const files = [
    ...INDEXED_LANGS.map((l) => ({ loc: `${SITE_URL}/sitemap-${l}.xml`, lastmod: newest(entriesFor(l)) })),
    { loc: `${SITE_URL}/sitemap-video.xml`, lastmod: undefined as string | undefined },
  ];
  const items = files.map((f) => `<sitemap>\n<loc>${esc(f.loc)}</loc>${f.lastmod ? `\n<lastmod>${esc(f.lastmod)}</lastmod>` : ''}\n</sitemap>`);
  return `${XML}<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join('\n')}\n</sitemapindex>\n`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
