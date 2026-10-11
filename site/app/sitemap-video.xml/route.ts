import { videoEntries, videoXml, xmlResponse } from '@/lib/sitemap';

/** /sitemap-video.xml: one clip per exercise page, the page's own (lib/sitemap.ts). */
export const dynamic = 'force-static';

export function GET() {
  return xmlResponse(videoXml(videoEntries()));
}
