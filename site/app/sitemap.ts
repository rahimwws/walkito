import type { MetadataRoute } from 'next';

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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: BUILT_AT, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/program/`, lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/science/`, lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/faq/`, lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/support/`, lastModified: BUILT_AT, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/privacy/`, lastModified: BUILT_AT, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified: BUILT_AT, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
