import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

/**
 * `VideoObject` for the exercise clips in a guide, so search engines know the
 * page shows each exercise on video and can list the clip in video results.
 *
 * Runs at build time only (static export): the clip length is read from the
 * MP4's own `mvhd` box, so the duration in the schema is the file's, not a
 * number typed by hand.
 */
function clipSeconds(id: string): number | undefined {
  try {
    const buf = readFileSync(join(process.cwd(), 'public', 'exercises', `${id}.mp4`));
    const at = buf.indexOf('mvhd');
    if (at < 0) return undefined;
    const v = buf[at + 4];
    const timescale = v === 1 ? buf.readUInt32BE(at + 24) : buf.readUInt32BE(at + 16);
    const duration = v === 1 ? Number(buf.readBigUInt64BE(at + 28)) : buf.readUInt32BE(at + 20);
    return timescale > 0 ? Math.max(1, Math.round(duration / timescale)) : undefined;
  } catch {
    return undefined;
  }
}

export function videoSchema(
  items: readonly { media?: string; mediaIsStandIn?: boolean; name: string; caption?: string; how: string }[],
  lang: Lang,
  uploadDate: string,
) {
  // One VideoObject per clip per page: a clip shown twice is one video, and a
  // stand-in clip is not described as a video of the block it illustrates.
  const seen = new Set<string>();
  return items
    .filter((e): e is typeof e & { media: string } => Boolean(e.media) && !e.mediaIsStandIn)
    .filter((e) => (seen.has(e.media) ? false : (seen.add(e.media), true)))
    .map((e) => {
      const seconds = clipSeconds(e.media);
      return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: e.name,
        description: (e.caption ?? e.how).replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
        inLanguage: lang,
        thumbnailUrl: `${SITE_URL}/exercises/${e.media}@2x.webp`,
        contentUrl: `${SITE_URL}/exercises/${e.media}.mp4`,
        uploadDate,
        ...(seconds ? { duration: `PT${seconds}S` } : {}),
      };
    });
}
