import Image from 'next/image';
import Link from 'next/link';

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
 * The header, identical on all three pages.
 *
 * `href` on the button points at the badge further down rather than straight at
 * the App Store. Until there is a listing there is no URL, and a button that
 * silently does nothing is worse than one that moves you to the thing you came
 * for — see the note on the badge itself.
 */
export function Masthead() {
  return (
    <header className="shell masthead">
      <Link className="brand" href="/">
        <Image src="/icon.png" alt="" width={36} height={36} priority />
        Walkito
      </Link>

      <nav className="nav">
        <Link href="/program/">Program</Link>
        <Link href="/science/">Evidence</Link>
        <Link href="/faq/">Questions</Link>
        <Link href="/support/">Support</Link>
        <Link href="/privacy/">Privacy</Link>
      </nav>

      <Link className="download" href="/#get">
        Download App
        <DownloadGlyph />
      </Link>
    </header>
  );
}
