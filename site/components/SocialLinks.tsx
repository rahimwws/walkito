import { CHROME, type Lang } from '@/lib/i18n';
import { INSTAGRAM_URL, LINKEDIN_URL, STRAVA_CLUB_URL, TIKTOK_URL, YOUTUBE_URL } from '@/lib/site';

function TikTokGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function StravaGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.39 17.94l-2.09-4.12h-3.07L15.39 24l5.15-10.18h-3.07M10.39 0L3.5 13.82h4.06l2.83-5.51 2.81 5.51h4.04" />
    </svg>
  );
}

/**
 * Walkito's social profiles as small icon links, in the footer and under the
 * founders' note. A profile whose URL is empty in `lib/site.ts` is left out.
 */
export function SocialLinks({ lang = 'en' }: { lang?: Lang }) {
  const c = CHROME[lang];
  const links = [
    { href: TIKTOK_URL, label: c.socialTikTok, glyph: <TikTokGlyph /> },
    { href: INSTAGRAM_URL, label: c.socialInstagram, glyph: <InstagramGlyph /> },
    { href: YOUTUBE_URL, label: 'Walkito on YouTube', glyph: <YouTubeGlyph /> },
    { href: LINKEDIN_URL, label: 'Walkito on LinkedIn', glyph: <LinkedInGlyph /> },
    { href: STRAVA_CLUB_URL, label: 'Walkito on Strava', glyph: <StravaGlyph /> },
  ].filter((link) => link.href !== '');
  if (links.length === 0) return null;

  return (
    <div className="social">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
          {link.glyph}
        </a>
      ))}
    </div>
  );
}
