import { readFileSync } from 'node:fs';
import { WIDE_MEDIA } from '@/lib/exercise-media';
import { join } from 'node:path';
import type { Lang } from '@/lib/i18n';
import { ORG_REF, OWN_IMAGE_LICENSE, SITE_URL, isoDateTime } from '@/lib/site';

export { isoDateTime };

/**
 * `VideoObject` for the exercise clips in a guide, so search engines know the
 * page shows each exercise on video and can list the clip in video results.
 *
 * Runs at build time only (static export): the clip length is read from the
 * MP4's own `mvhd` box, so the duration in the schema is the file's, not a
 * number typed by hand.
 */
export function clipSeconds(id: string): number | undefined {
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

/**
 * The clip a page is about, for the video schema and the video sitemap: the
 * first real (not stand-in) clip. Google only lists a video when it is the
 * main content of its page ("Video isn't on a watch page" on every guide, 0 of
 * 11 indexed), so only exercise pages describe a video, and only this one.
 */
export function mainClip<T extends { media?: string; mediaIsStandIn?: boolean }>(items: readonly T[]): (T & { media: string }) | undefined {
  return items.find((e): e is T & { media: string } => Boolean(e.media) && !e.mediaIsStandIn);
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
        uploadDate: isoDateTime(uploadDate),
        ...(seconds ? { duration: `PT${seconds}S` } : {}),
        // The clips are Walkito's own, made for the app.
        creator: ORG_REF,
      };
    });
}

/**
 * `ImageObject` for each exercise still a guide shows, so image search can
 * list it with its name and credit it to Walkito (the stills are frames from
 * the app's own clips). Only stills that are on the page: the caller passes
 * the exercises it renders with media. One object per still per page.
 *
 * Not a still that only stands in for the block (`mediaIsStandIn`): it is
 * another exercise's picture, so the card's name would describe an image that
 * does not show it, the same reason `videoSchema` skips it.
 */
export function imageSchema(
  items: readonly { media?: string; mediaIsStandIn?: boolean; name: string; alt?: string }[],
  lang: Lang,
  pageUrl: string,
) {
  const seen = new Set<string>();
  return items
    .filter((e): e is typeof e & { media: string } => Boolean(e.media) && !e.mediaIsStandIn)
    .filter((e) => (seen.has(e.media) ? false : (seen.add(e.media), true)))
    .map((e) => ({
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}/exercises/${e.media}@2x.webp`,
      url: pageUrl,
      name: e.name,
      ...(e.alt ? { caption: e.alt } : {}),
      inLanguage: lang,
      width: WIDE_MEDIA.has(e.media) ? 1280 : 720,
      height: WIDE_MEDIA.has(e.media) ? 720 : 900,
      creator: ORG_REF,
      creditText: 'Walkito',
      copyrightNotice: '© Walkito',
      ...OWN_IMAGE_LICENSE,
    }));
}
