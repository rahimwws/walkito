import { entriesFor, urlsetXml, xmlResponse } from '@/lib/sitemap';

/** /sitemap-fr.xml: every indexable page in this language (lib/sitemap.ts). */
export const dynamic = 'force-static';

export function GET() {
  return xmlResponse(urlsetXml(entriesFor('fr')));
}
