import { InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr/InstagramLogo';
import { TiktokLogoIcon } from '@phosphor-icons/react/dist/ssr/TiktokLogo';

import { CHROME, type Lang } from '@/lib/i18n';
import { INSTAGRAM_URL, TIKTOK_URL } from '@/lib/site';

/**
 * Walkito's social profiles as small icon links, in the footer and under the
 * founders' note. A profile whose URL is empty in `lib/site.ts` is left out.
 *
 * The marks are Phosphor's, filled, the same family and weight the app draws
 * its icons in, so the site's few glyphs read as one set with the app's.
 */
export function SocialLinks({ lang = 'en' }: { lang?: Lang }) {
  const c = CHROME[lang];
  const links = [
    { href: TIKTOK_URL, label: c.socialTikTok, glyph: <TiktokLogoIcon weight="fill" aria-hidden /> },
    { href: INSTAGRAM_URL, label: c.socialInstagram, glyph: <InstagramLogoIcon weight="fill" aria-hidden /> },
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
