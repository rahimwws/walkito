import { priorityEntries, urlsetXml, xmlResponse } from '@/lib/sitemap';

/**
 * /sitemap-priority.xml: the ~50 best English pages, for Bing first. Not in the
 * index on purpose: it is submitted by hand in Bing Webmaster Tools, so Bing,
 * which is slow to trust a new domain, starts with the strongest pages.
 */
export const dynamic = 'force-static';

export function GET() {
  return xmlResponse(urlsetXml(priorityEntries()));
}
