import Image from 'next/image';
import Link from 'next/link';

import { CHROME, TRANSLATED, customHref, type Lang } from '@/lib/i18n';
import { storeHref } from '@/lib/site';

/** The arrow inside the header button. Inline rather than an icon package: one
 * glyph is not worth a dependency, and an SVG in the markup cannot arrive late. */
function DownloadGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.25v9.5m0 0 3.25-3.25M12 16.75 8.75 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The header, identical on every page.
 *
 * The button says "Get the app" and goes straight to the listing, tagged
 * `masthead` so App Analytics can tell it apart from the badges in the page
 * body. Until `APP_STORE_URL` is set it points at `#`, like the badges.
 */
export function Masthead({ lang = 'en' }: { lang?: Lang }) {
  const href = storeHref(lang === 'en' ? 'masthead' : `masthead-${lang}`);
  const c = CHROME[lang];
  const home = TRANSLATED.home[lang];

  return (
    <header className="shell masthead">
      <Link className="brand" href={home}>
        <Image src="/icon-96.webp" alt="" width={36} height={36} priority />
        Walkito
      </Link>

      {/* Every language now has program, evidence and questions pages, so the
          header is the same in all three. */}
      <nav className="nav">
        <Link href={customHref('program', lang)}>{c.navProgram}</Link>
        <Link href={customHref('science', lang)}>{c.navEvidence}</Link>
        <Link href={customHref('faq', lang)}>{c.navQuestions}</Link>
        <Link href={TRANSLATED.support[lang]}>{c.navSupport}</Link>
        <Link href={TRANSLATED.privacy[lang]}>{c.navPrivacy}</Link>
      </nav>

      <a className="download" href={href ?? '#'}>
        {c.headerButton}
        <DownloadGlyph />
      </a>
    </header>
  );
}
