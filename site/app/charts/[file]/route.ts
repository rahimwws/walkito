import { WRITER_IMAGES, writerImage, type WriterImageId } from '@/lib/writer-images';

/** The writer charts as static PNGs at /charts/<file>.png (lib/writer-images.tsx). */
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(WRITER_IMAGES).map((img) => ({ file: img.file }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const id = (Object.keys(WRITER_IMAGES) as WriterImageId[]).find((k) => WRITER_IMAGES[k].file === file);
  if (!id) return new Response('Not found', { status: 404 });
  return writerImage(id);
}
