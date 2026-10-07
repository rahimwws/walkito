import Image from 'next/image';
import Link from 'next/link';

import { CHROME, CUSTOM_EN_ES, TRANSLATED, type Lang } from '@/lib/i18n';
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
        <Image src="/icon.png" alt="" width={36} height={36} priority />
        Walkito
      </Link>

      {/* English and Spanish keep program, evidence and questions in the
          header. Russian has only the guides translated, so its header leads
          with the guides. */}
      <nav className="nav">
        {lang === 'en' ? (
          <>
            <Link href="/program/">{c.navProgram}</Link>
            <Link href="/science/">{c.navEvidence}</Link>
            <Link href="/faq/">{c.navQuestions}</Link>
          </>
        ) : lang === 'es' ? (
          <>
            <Link href={CUSTOM_EN_ES.program.es}>{c.navProgram}</Link>
            <Link href={CUSTOM_EN_ES.science.es}>{c.navEvidence}</Link>
            <Link href={CUSTOM_EN_ES.faq.es}>{c.navQuestions}</Link>
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

      <a className="download" href={href ?? '#'}>
        {c.headerButton}
        <DownloadGlyph />
      </a>
    </header>
  );
}
