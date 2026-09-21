import { ImageResponse } from 'next/og';

import { SITE_NAME } from '@/lib/site';

/**
 * The card every share, every DM and every AI answer preview shows.
 *
 * Generated rather than photographed, because the only image the site owned was
 * the phone mock — 538×1100, a portrait screenshot. Handed to a scraper
 * expecting 1.91:1 it is cropped to a horizontal band through the middle of a
 * phone, which reads as a broken image rather than as a product.
 *
 * Drawn at build time by `next/og` and emitted as a static PNG, so this costs a
 * runtime nothing and works under `output: export`.
 */
// Same reason as robots and sitemap: under `output: export` there is no server
// to render this per request, and Next will not assume.
export const dynamic = 'force-static';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Walkito — Run without second-guessing';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 84px',
          // The page's own wash, flattened to two stops — `next/og` supports a
          // subset of CSS and will not render the radial gradients the site
          // uses, so this is the closest honest approximation rather than a
          // silent mismatch.
          background: 'linear-gradient(135deg, #efe9fe 0%, #ffffff 52%, #e9e4fb 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 92,
            lineHeight: 1.02,
            letterSpacing: -2,
            fontWeight: 800,
            color: '#111114',
            textTransform: 'uppercase',
            flexDirection: 'column',
          }}
        >
          <span>Run without</span>
          <span>second-guessing</span>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 30,
            fontSize: 30,
            color: '#5b5b64',
            maxWidth: 900,
          }}
        >
          A daily plan that changes when your legs do.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 42,
            alignItems: 'center',
            fontSize: 26,
            fontWeight: 600,
            color: '#111114',
          }}
        >
          {SITE_NAME}
        </div>
      </div>
    ),
    size,
  );
}
