import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';
import { WRITER_IMAGES, type WriterImageId } from '@/lib/writer-images';

/** The writer chart for a tool on an English page, if it has one. */
export function writerImageFor(lang: Lang, tool: string | undefined): WriterImageId | null {
  if (lang !== 'en' || !tool) return null;
  return (Object.keys(WRITER_IMAGES) as WriterImageId[]).find((k) => WRITER_IMAGES[k].tool === tool) ?? null;
}

/**
 * A chart writers can put in their own article, under the tool it comes from:
 * the picture, the terms ("free to use with a link to this page") and a
 * download link. Hosted on walkito.site, so the credit link is the page itself.
 */
export function WriterImage({ id }: { id: WriterImageId }) {
  const img = WRITER_IMAGES[id];
  const src = `/charts/${img.file}`;
  const page = `${SITE_URL}${img.path}`;
  return (
    <figure className="writer-image">
      <img src={src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
      <figcaption>
        <strong>Writing about this?</strong> Free to use this chart in your article with a link to <a href={img.path}>{page}</a>
        <a className="writer-image-download" href={src} download={img.file}>
          Download the image (PNG)
        </a>
      </figcaption>
    </figure>
  );
}
