import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

/**
 * The share card: the home page's hero, flattened to 1200 x 630.
 *
 * Three of them and no more: English (every page that is not Russian or
 * Spanish), Russian and Spanish, drawn by `app/opengraph-image.tsx`,
 * `app/ru/opengraph-image.tsx` and `app/es/opengraph-image.tsx`. A card per
 * page was tried and dropped: the hero is the picture people recognise.
 *
 * The icon's blues falling to lilac, the phone with today's screen and our own
 * Dynamic Island, the app's "No pain today" card and streak capsule beside it,
 * and the headline over the fade, as on the page. next/og (satori) cannot read
 * WebP or WOFF2, so the phone, the mascot and the icon are PNGs and the fonts
 * TTFs, all in `og-assets/` (Anton and Oswald from Google Fonts, OFL; licences
 * beside them). Anton has no Cyrillic, so Russian is set in Oswald.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

type CardLang = 'en' | 'ru' | 'es';

/** The hero's two lines (`h1a` / `h1b` in components/Home.tsx), and the app's
 * own words for the check-in card (`home.noPain`). Change them there first. */
const WORDS: Record<CardLang, { a: string; b: string; noPain: string; get: string }> = {
  en: { a: 'Tried everything?', b: 'Try a plan built for your feet.', noPain: 'No pain today', get: 'Get the app' },
  ru: { a: 'Всё перепробовали?', b: 'Попробуйте план, созданный для ваших стоп.', noPain: 'Сегодня не болит', get: 'Скачать приложение' },
  es: { a: '¿Ya probaste de todo?', b: 'Prueba un plan hecho para tus pies.', noPain: 'Hoy no me duele', get: 'Descargar la app' },
};

export const OG_ALT: Record<CardLang, string> = {
  en: 'Walkito: tried everything? Try a plan built for your feet.',
  ru: 'Walkito: всё перепробовали? Попробуйте план, созданный для ваших стоп.',
  es: 'Walkito: ¿ya probaste de todo? Prueba un plan hecho para tus pies.',
};

/** Phosphor's Fire, fill weight: the app's streak flame. */
const FIRE =
  'M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z';

/** Apple's mark, as on the site's "Get the app" button. */
const APPLE =
  'M16.36 12.73c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.2-2.48-.03-.01-2.3-.88-2.33-3.5zM14.2 6.1c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.69-.92 2.68.97.08 1.96-.49 2.58-1.21z';

const dir = join(process.cwd(), 'og-assets');
const png = (file: string) => `data:image/png;base64,${readFileSync(join(dir, file)).toString('base64')}`;

let assets: { anton: Buffer; oswald: Buffer; phone: string; icon: string; mascot: string } | null = null;
function load() {
  assets ??= {
    anton: readFileSync(join(dir, 'fonts', 'Anton-Regular.ttf')),
    oswald: readFileSync(join(dir, 'fonts', 'Oswald-Bold.ttf')),
    phone: png('phone-top.png'),
    icon: png('icon.png'),
    mascot: png('mascot-nopain.png'),
  };
  return assets;
}

/** The fade under the phone: 120 px in 4 px slices. */
const SLICE = 4;
const SLICES = 30;

/** The headline's size: as large as fits the longer line on one row. Anton's
 * capitals average about 0.44em, Oswald's Cyrillic about 0.52em. */
function lineSize(text: string, lang: CardLang, max: number) {
  const em = lang === 'ru' ? 0.52 : 0.44;
  return Math.min(max, Math.floor(1100 / (text.length * em)));
}

export function ogCard(lang: CardLang) {
  const { anton, oswald, phone, icon, mascot } = load();
  const w = WORDS[lang];
  const display = lang === 'ru' ? 'Oswald' : 'Anton';
  const sizeA = lineSize(w.a, lang, 92);
  const sizeB = lineSize(w.b, lang, 72);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background:
            'linear-gradient(180deg, #0234fd 0%, #0b52ff 20%, #3d8bff 42%, #a9c8ff 60%, #e4ddff 76%, #f3eeff 100%)',
        }}
      >
        {/* The hero's glows: cyan from the top right, pink low on the left. */}
        <div
          style={{
            position: 'absolute',
            right: -160,
            top: -220,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: 'radial-gradient(circle, rgba(24,216,253,0.75) 0%, rgba(24,216,253,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -200,
            top: 250,
            width: 600,
            height: 520,
            borderRadius: 600,
            background: 'radial-gradient(circle, rgba(240,191,253,0.85) 0%, rgba(240,191,253,0) 70%)',
          }}
        />

        {/* The header: the icon and the name, the white button. */}
        <div style={{ position: 'absolute', left: 48, top: 36, display: 'flex', alignItems: 'center' }}>
          <img src={icon} width={52} height={52} style={{ borderRadius: 14 }} />
          <span style={{ marginLeft: 14, fontFamily: 'Oswald', fontSize: 34, color: '#ffffff', letterSpacing: 0.5 }}>
            Walkito
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            right: 48,
            top: 38,
            display: 'flex',
            alignItems: 'center',
            padding: '12px 22px',
            borderRadius: 18,
            background: '#ffffff',
            color: '#111114',
            fontFamily: 'Oswald',
            fontSize: 22,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#111114" style={{ marginRight: 10 }}>
            <path d={APPLE} />
          </svg>
          {w.get}
        </div>

        {/* The phone, its top, sinking into the band. satori has no mask, so
            the fade is the phone's lower rows drawn in thin slices of falling
            opacity: no overlay colour to clash with the gradient behind. */}
        <div style={{ position: 'absolute', left: 450, top: 98, width: 300, height: 190, display: 'flex', overflow: 'hidden' }}>
          <img src={phone} width={300} height={400} />
        </div>
        {Array.from({ length: SLICES }, (_, k) => (
          <div
            key={k}
            style={{
              position: 'absolute',
              left: 450,
              top: 98 + 190 + k * SLICE,
              width: 300,
              height: SLICE,
              display: 'flex',
              overflow: 'hidden',
              opacity: 1 - (k + 1) / (SLICES + 1),
            }}
          >
            <img src={phone} width={300} height={400} style={{ marginTop: -(190 + k * SLICE) }} />
          </div>
        ))}

        {/* Our Dynamic Island over the mockup's own, as on the page. */}
        <div
          style={{
            position: 'absolute',
            left: 549,
            top: 115,
            width: 102,
            height: 31,
            borderRadius: 32,
            background: '#000000',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
          }}
        >
          <img src={icon} width={18} height={18} style={{ borderRadius: 18 }} />
          <span style={{ marginLeft: 6, fontFamily: 'Oswald', fontSize: 13, color: '#ffffff' }}>Walkito</span>
          <div
            style={{
              marginLeft: 'auto',
              width: 14,
              height: 14,
              borderRadius: 14,
              border: '2.5px solid #18d8fd',
              borderLeftColor: 'rgba(255,255,255,0.2)',
            }}
          />
        </div>

        {/* The app's check-in card, tipped as the app tips it. */}
        <div
          style={{
            position: 'absolute',
            left: 214,
            top: 128,
            width: 196,
            height: 182,
            borderRadius: 34,
            background: '#1c1c1f',
            border: '1.5px solid rgba(255,255,255,0.16)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 18,
            transform: 'rotate(5deg)',
          }}
        >
          <img src={mascot} width={104} height={104} />
          <span style={{ marginTop: 6, fontFamily: 'Oswald', fontSize: 21, color: '#ffffff' }}>{w.noPain}</span>
        </div>

        {/* The streak capsule from the Home header. */}
        <div
          style={{
            position: 'absolute',
            left: 790,
            top: 168,
            display: 'flex',
            alignItems: 'center',
            padding: '10px 22px 10px 16px',
            borderRadius: 40,
            background: 'rgba(28,28,33,0.9)',
            border: '1.5px solid rgba(255,255,255,0.18)',
            transform: 'rotate(-6deg)',
          }}
        >
          <svg width="34" height="34" viewBox="0 0 256 256" fill="#FF9245">
            <path d={FIRE} />
          </svg>
          <span style={{ marginLeft: 10, fontFamily: 'Oswald', fontSize: 36, color: '#ffffff' }}>12</span>
        </div>

        {/* The headline over the fade, both lines whole. */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 34,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: display,
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: sizeA, color: '#1652ff' }}>{w.a}</span>
          <span style={{ fontSize: sizeB, color: '#111114', marginTop: 4 }}>{w.b}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Anton', data: anton, weight: 400, style: 'normal' },
        { name: 'Oswald', data: oswald, weight: 700, style: 'normal' },
      ],
    },
  );
}
