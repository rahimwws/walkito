import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';
import sharp from 'sharp';

import { anatomyCredit, type AnatomyId } from '@/lib/anatomy';

/**
 * One share image per article, in the three shapes Google asks for on an
 * Article (16:9, 4:3, 1:1). The article's own title next to its anatomy
 * drawing, on the brand gradient of the home card (lib/og-card.tsx), so a
 * shared link or an image result says which guide it is. An article with no
 * drawing gets the app's mascot on its dark check-in card instead.
 *
 * A drawing that comes from InjuryMap carries its credit and licence along the
 * bottom edge, as it does under the figure on the page: the licence asks for
 * the credit wherever the picture goes, and a share card travels without the
 * page around it.
 *
 * Built once into static JPEGs by app/share/g/[file]; the file names come from
 * `guideCard()` in lib/guides/index.ts. English, Spanish and Russian only:
 * the other languages are not indexed yet and keep the language card (K5).
 */

import { CARD_RATIOS, CARD_SIZE, type CardRatio } from '@/lib/card-shapes';

export { CARD_RATIOS, type CardRatio };

/** The picture beside the title: the article's anatomy drawing, else a still
 * from its first exercise clip, else (null) the mascot. */
export type CardPicture = { kind: 'anatomy'; id: AnatomyId } | { kind: 'still'; id: string } | null;
export type CardInput = { lang: 'en' | 'es' | 'ru'; title: string; picture: CardPicture };

const dir = join(process.cwd(), 'og-assets');
let fonts: { anton: Buffer; oswald: Buffer; icon: string; mascot: string } | null = null;
function load() {
  const png = (file: string) => `data:image/png;base64,${readFileSync(join(dir, file)).toString('base64')}`;
  fonts ??= {
    anton: readFileSync(join(dir, 'fonts', 'Anton-Regular.ttf')),
    oswald: readFileSync(join(dir, 'fonts', 'Oswald-Bold.ttf')),
    icon: png('icon.png'),
    mascot: png('mascot-nopain.png'),
  };
  return fonts;
}

/** The drawing as a PNG data URL (satori cannot read WebP), in the page's
 * language when it has its own labels, else the English one. */
const drawings = new Map<string, Promise<{ src: string; w: number; h: number; bg: string }>>();
function drawing(picture: NonNullable<CardPicture>, lang: string) {
  const key = `${picture.kind}:${picture.id}.${lang}`;
  if (!drawings.has(key)) {
    const local = join(process.cwd(), 'public', 'anatomy', `${picture.id}.${lang}.webp`);
    const file =
      picture.kind === 'still'
        ? join(process.cwd(), 'public', 'exercises', `${picture.id}@2x.webp`)
        : existsSync(local)
          ? local
          : join(process.cwd(), 'public', 'anatomy', `${picture.id}.en.webp`);
    drawings.set(
      key,
      sharp(file)
        .resize({ width: 900, withoutEnlargement: true })
        .png()
        .toBuffer({ resolveWithObject: true })
        .then(async ({ data, info }) => {
          // The panel takes the picture's own corner colour, so a still's
          // light grey studio backdrop runs to the panel's edge instead of
          // sitting as a box inside it. The drawings are on white anyway.
          const { data: px } = await sharp(data).extract({ left: 2, top: 2, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
          const bg = `rgb(${px[0]},${px[1]},${px[2]})`;
          return { src: `data:image/png;base64,${data.toString('base64')}`, w: info.width, h: info.height, bg };
        }),
    );
  }
  return drawings.get(key)!;
}

/** The largest title size that fits the box: Anton's capitals average about
 * 0.46em wide, Oswald's Cyrillic about 0.55em; lines at 1.08. */
function titleSize(text: string, lang: CardInput['lang'], width: number, height: number, max: number) {
  const em = lang === 'ru' ? 0.55 : 0.46;
  for (let size = max; size > 30; size -= 2) {
    const perLine = Math.floor(width / (size * em));
    const words = text.split(/\s+/);
    let lines = 1;
    let used = 0;
    for (const w of words) {
      const need = used === 0 ? w.length : used + 1 + w.length;
      if (need > perLine && used > 0) {
        lines += 1;
        used = w.length;
      } else used = need;
    }
    if (lines * size * 1.08 <= height) return size;
  }
  return 32;
}

/** Fit (w, h) inside (bw, bh), keeping its shape. */
function fit(w: number, h: number, bw: number, bh: number) {
  const k = Math.min(bw / w, bh / h);
  return { width: Math.round(w * k), height: Math.round(h * k) };
}

export async function articleImage(input: CardInput, ratio: CardRatio): Promise<Response> {
  const png = Buffer.from(await (await card(input, ratio)).arrayBuffer());
  const jpeg = await sharp(png).jpeg({ quality: 78, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer();
  return new Response(new Uint8Array(jpeg), { headers: { 'Content-Type': 'image/jpeg' } });
}

async function card(input: CardInput, ratio: CardRatio) {
  const { anton, oswald, icon, mascot } = load();
  const { width: W, height: H } = CARD_SIZE[ratio];
  const pad = 56;
  const header = 64;
  const gap = 44;
  const square = ratio === '1x1';

  // The picture panel and the title box share what is left under the header.
  const bodyTop = pad + header + 28;
  const bodyH = H - bodyTop - pad;
  const panel = square
    ? { width: W - pad * 2, height: Math.round(bodyH * 0.58) }
    : { width: ratio === '16x9' ? 440 : 500, height: bodyH };
  const textBox = square
    ? { width: W - pad * 2, height: bodyH - panel.height - gap }
    : { width: W - pad * 2 - panel.width - gap, height: bodyH };

  const display = input.lang === 'ru' ? 'Oswald' : 'Anton';
  const size = titleSize(input.title, input.lang, textBox.width, textBox.height - 50, square ? 92 : 84);

  const art = input.picture ? await drawing(input.picture, input.lang) : null;
  const inset = input.picture?.kind === 'still' ? 0 : 40;
  const inner = art ? fit(art.w, art.h, panel.width - inset, panel.height - inset) : null;
  const mascotSize = Math.round(Math.min(panel.width, panel.height) * 0.6);
  // "Illustration: InjuryMap, CC BY-SA 4.0, labels by Walkito", in the card's
  // language and with the figure's own licence; nothing for Walkito's own art.
  const credit = input.picture?.kind === 'anatomy' ? anatomyCredit(input.picture.id, input.lang) : null;
  const creditLine = credit && 'author' in credit ? `${credit.lead}${credit.author}, ${credit.license}, ${credit.tail}` : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          padding: pad,
          background: 'linear-gradient(160deg, #0b52ff 0%, #3d8bff 30%, #a9c8ff 55%, #e4ddff 78%, #f3eeff 100%)',
        }}
      >
        {/* The hero's cyan glow from the top right. */}
        <div
          style={{
            position: 'absolute',
            right: -180,
            top: -240,
            width: 640,
            height: 640,
            borderRadius: 640,
            background: 'radial-gradient(circle, rgba(24,216,253,0.7) 0%, rgba(24,216,253,0) 70%)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', height: header }}>
          <img src={icon} width={56} height={56} style={{ borderRadius: 15 }} />
          <span style={{ marginLeft: 16, fontFamily: 'Oswald', fontSize: 38, color: '#ffffff' }}>Walkito</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: square ? 'column' : 'row',
            marginTop: 28,
            height: bodyH,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: panel.width,
              height: panel.height,
              borderRadius: 40,
              overflow: 'hidden',
              background: art ? art.bg : '#1c1c1f',
              boxShadow: '0 18px 50px rgba(10,30,120,0.25)',
            }}
          >
            {art && inner ? (
              <img src={art.src} width={inner.width} height={inner.height} />
            ) : (
              <img src={mascot} width={mascotSize} height={mascotSize} />
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: square ? 'flex-start' : 'center',
              width: textBox.width,
              height: textBox.height,
              marginLeft: square ? 0 : gap,
              marginTop: square ? gap : 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                fontFamily: display,
                fontSize: size,
                lineHeight: 1.08,
                textTransform: 'uppercase',
                color: '#111114',
              }}
            >
              {input.title}
            </div>
            <span style={{ marginTop: 22, fontFamily: 'Oswald', fontSize: 30, color: '#1652ff' }}>walkito.site</span>
          </div>
        </div>
        {/* In the bottom padding, under the picture panel, on the light end of
            the gradient. */}
        {creditLine && (
          <div
            style={{
              position: 'absolute',
              left: pad,
              bottom: 16,
              display: 'flex',
              fontFamily: 'Oswald',
              fontSize: 20,
              lineHeight: 1,
              color: 'rgba(17,17,20,0.62)',
            }}
          >
            {creditLine}
          </div>
        )}
      </div>
    ),
    {
      width: W,
      height: H,
      fonts: [
        { name: 'Anton', data: anton, weight: 400, style: 'normal' },
        { name: 'Oswald', data: oswald, weight: 700, style: 'normal' },
      ],
    },
  );
}
