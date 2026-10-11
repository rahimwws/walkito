import { indexXml, xmlResponse } from '@/lib/sitemap';

/** /sitemap.xml: the index of the per-language and video sitemaps (lib/sitemap.ts). */
export const dynamic = 'force-static';

export function GET() {
  return xmlResponse(indexXml());
}
