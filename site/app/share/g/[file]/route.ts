import { CARD_RATIOS, articleImage, type CardRatio } from '@/lib/article-card';
import { cardGuides, cardSlug, guidePicture } from '@/lib/guides';

/** One share image per guide and shape, at /share/g/<slug>-<shape>.jpg, built
 * once into static JPEGs (lib/article-card.tsx). */
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return cardGuides().flatMap((g) => CARD_RATIOS.map((r) => ({ file: `${cardSlug(g)}-${r}.jpg` })));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const m = file.match(/^(.+)-(16x9|4x3|1x1)\.jpg$/);
  const guide = m ? cardGuides().find((g) => cardSlug(g) === m[1]) : undefined;
  if (!m || !guide) return new Response('Not found', { status: 404 });
  return articleImage(
    { lang: guide.lang as 'en' | 'es' | 'ru', title: guide.title, picture: guidePicture(guide) },
    m[2] as CardRatio,
  );
}
