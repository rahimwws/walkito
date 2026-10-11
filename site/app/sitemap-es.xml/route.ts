import { entriesFor, urlsetXml, xmlResponse } from '@/lib/sitemap';

/** /sitemap-es.xml: every indexable page in this language (lib/sitemap.ts). */
export const dynamic = 'force-static';

export function GET() {
  return xmlResponse(urlsetXml(entriesFor('es')));
}
