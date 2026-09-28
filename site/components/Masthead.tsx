import Image from 'next/image';
import Link from 'next/link';

import { CHROME, TRANSLATED, type Lang } from '@/lib/i18n';
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
 * Once there is a listing the button goes straight to it, tagged `masthead` so
 * App Analytics can tell it apart from the badges in the page body. Until then
 * it moves you to the badge further down, which says plainly that the app is
 * not out yet — see the note on the badge itself.
 */
export function Masthead({ lang = 'en' }: { lang?: Lang }) {
  const href = storeHref(lang === 'en' ? 'masthead' : `masthead-${lang}`);
  const c = CHROME[lang];
  const home = TRANSLATED.home[lang];

  return (
    <header className="shell masthead">
      <Link className="brand" href={home}>
        <Image src="/icon.png" alt="" width={36} height={36} priority />
        Walkito
      </Link>

      {/* English keeps the program pages in the header. Russian and Spanish
          have only the home page and the guides translated, so their header
          leads with the guides and keeps Support and Privacy — the two URLs an
          App Store reviewer is sent to — reachable from every page. */}
      <nav className="nav">
        {lang === 'en' ? (
          <>
            <Link href="/program/">{c.navProgram}</Link>
            <Link href="/science/">{c.navEvidence}</Link>
            <Link href="/faq/">{c.navQuestions}</Link>
          </>
        ) : (
          <>
            <Link href={TRANSLATED.flatFeet[lang]}>{c.navFlatFeet}</Link>
            <Link href={TRANSLATED.heelPain[lang]}>{c.navHeelPain}</Link>
          </>
        )}
        <Link href={TRANSLATED.support[lang]}>{c.navSupport}</Link>
        <Link href={TRANSLATED.privacy[lang]}>{c.navPrivacy}</Link>
      </nav>

      {href ? (
        <a className="download" href={href}>
          {c.downloadHeader}
          <DownloadGlyph />
        </a>
      ) : (
        <Link className="download" href={`${home}#get`}>
          {c.soonHeader}
          <DownloadGlyph />
        </Link>
      )}
    </header>
  );
}
