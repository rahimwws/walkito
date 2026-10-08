import type { ReactNode } from 'react';

import { InstagramLogo, LinkedInLogo, StravaLogo, TikTokLogo, YouTubeLogo } from '@/components/BrandIcons';
import { CHROME, type Lang } from '@/lib/i18n';
import { INSTAGRAM_URL, LINKEDIN_URL, STRAVA_CLUB_URL, TIKTOK_URL, YOUTUBE_URL } from '@/lib/site';

/**
 * Each profile's name read aloud, per language. TikTok and Instagram live in
 * `CHROME` with the rest of the shared strings; these three are only ever
 * said here and in the closing call to action (`components/home/Cta.tsx`).
 */
export const SOCIAL_LABELS: Record<Lang, { youtube: string; linkedin: string; strava: string }> = {
  en: { youtube: 'Walkito on YouTube', linkedin: 'Walkito on LinkedIn', strava: 'Walkito on Strava' },
  ru: { youtube: 'Walkito на\u00a0YouTube', linkedin: 'Walkito в\u00a0LinkedIn', strava: 'Walkito в\u00a0Strava' },
  es: { youtube: 'Walkito en YouTube', linkedin: 'Walkito en LinkedIn', strava: 'Walkito en Strava' },
  pt: { youtube: 'Walkito no YouTube', linkedin: 'Walkito no LinkedIn', strava: 'Walkito no Strava' },
  fr: { youtube: 'Walkito sur YouTube', linkedin: 'Walkito sur LinkedIn', strava: 'Walkito sur Strava' },
  it: { youtube: 'Walkito su YouTube', linkedin: 'Walkito su LinkedIn', strava: 'Walkito su Strava' },
  de: { youtube: 'Walkito auf YouTube', linkedin: 'Walkito auf LinkedIn', strava: 'Walkito auf Strava' },
};

/**
 * The tile's side. A custom property, so a section can size the tiles from
 * its own stylesheet (`.ft .social` in `components/footer.css`); 36px inside
 * the 44px target otherwise.
 */
const TILE = 'var(--social-tile, 36px)';

/**
 * Walkito's social profiles as a row of their real app icons, in the footer
 * and under the founders' note. The marks are the brands' own
 * (`components/BrandIcons.tsx`). A profile whose URL is empty in
 * `lib/site.ts` is left out.
 */
export function SocialLinks({ lang = 'en' }: { lang?: Lang }) {
  const c = CHROME[lang];
  const l = SOCIAL_LABELS[lang];
  const links: { href: string; label: string; icon: ReactNode }[] = [
    { href: TIKTOK_URL, label: c.socialTikTok, icon: <TikTokLogo variant="tile" size={TILE} /> },
    { href: INSTAGRAM_URL, label: c.socialInstagram, icon: <InstagramLogo variant="tile" size={TILE} /> },
    { href: YOUTUBE_URL, label: l.youtube, icon: <YouTubeLogo variant="tile" size={TILE} /> },
    { href: LINKEDIN_URL, label: l.linkedin, icon: <LinkedInLogo variant="tile" size={TILE} /> },
    { href: STRAVA_CLUB_URL, label: l.strava, icon: <StravaLogo variant="tile" size={TILE} /> },
  ].filter((link) => link.href !== '');
  if (links.length === 0) return null;

  return (
    <div className="social">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
          {link.icon}
        </a>
      ))}
    </div>
  );
}
