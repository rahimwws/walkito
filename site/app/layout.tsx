import type { Metadata } from 'next';
import { Anton } from 'next/font/google';

import { JsonLd } from '@/components/JsonLd';
import { APPLE_APP_ID, SITE_NAME, SITE_URL } from '@/lib/site';

import './globals.css';

/**
 * The display face: heavy, extremely condensed, one weight.
 *
 * Loaded through `next/font` rather than a stylesheet link, which matters more
 * than it looks. The headline is the largest thing on the page and the first
 * thing painted, so a font arriving over a second connection is a headline that
 * reflows in front of the reader. `next/font` self-hosts the file at build time
 * and inlines the `@font-face`, so there is no third-party request and no
 * layout shift to swap into.
 *
 * `display: swap` regardless: on a slow connection a heavy condensed face is
 * still better arriving late than a blank rectangle where the headline goes.
 */
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

/**
 * `metadataBase` first, because everything downstream depends on it.
 *
 * Without it every relative URL in metadata stays relative: Open Graph images
 * break in every scraper that will not guess a host, and canonicals can come
 * out invalid. It is also the one line that decides which domain the whole
 * site's SEO accrues to, which is why the host lives in `lib/site.ts` and not
 * inline here.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Walkito — Run without second-guessing',
    // Every page supplies its own unique half; this appends the brand.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'A daily plan that changes when your legs do. Five to seven minutes, written for you rather than for runners in general.',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Left at their defaults these truncate the snippet and shrink the
      // thumbnail, which is a quiet loss most sites never notice.
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Walkito — Run without second-guessing',
    description: 'A daily plan that changes when your legs do.',
    url: '/',
    siteName: SITE_NAME,
    // No `images` here on purpose: `app/opengraph-image.tsx` supplies the card
    // and Next wires it up automatically. Naming the phone screenshot again
    // would override a correctly proportioned 1200×630 card with a 538×1100
    // portrait one, which is the bug this replaced.
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walkito — Run without second-guessing',
    description: 'A daily plan that changes when your legs do.',
  },
  // iOS shows a native install strip when this is present. Omitted until there
  // is a listing: a banner pointing at a guessed id is a dead strip on every
  // iPhone that loads the page.
  ...(APPLE_APP_ID != null ? { appleWebApp: { capable: false } } : {}),
};

/** Sitewide, once. Not repeated per page — duplicated Organization blocks are
 * a common way to make Google pick the wrong one. */
const ORGANISATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    'A 12-week exercise program for heel and foot pain in runners, built from published rehabilitation protocols.',
};

export const viewport = {
  themeColor: '#8b5cf6',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={anton.variable}>
      <body>
        <JsonLd data={ORGANISATION} />
        {/* The wash behind the hero. Two soft violet pools rather than a
            gradient bar, so the colour reads as light in the room instead of a
            banner stuck to the top of the page. */}
        <div className="wash" aria-hidden />
        {children}
      </body>
    </html>
  );
}
