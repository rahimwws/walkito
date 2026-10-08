import Image from 'next/image';
import Link from 'next/link';

import { AppleGlyph } from '@/components/AppStoreBadge';
import { GetAppButton, GetAppDialog } from '@/components/GetApp';
import { MobileMenu } from '@/components/MobileMenu';
import { ScrollState } from '@/components/ScrollState';
import { CHROME, TRANSLATED, customHref, type Lang } from '@/lib/i18n';
import { qrPath } from '@/lib/qr';
import { playHref, SITE_URL, storeHref } from '@/lib/site';

/** What the dialog's QR code opens: `/get/` picks the phone's own store. */
const QR = qrPath(`${SITE_URL}/get/`);

/**
 * The header, identical on every page: the home page's floating one.
 *
 * Fixed over the band at the top of the page (the hero on home, `.pg-head` on
 * every other page, see `components/Prose.tsx`), white over the icon's blue,
 * and drawn together into one capsule once the page scrolls. `ScrollState`
 * does the measuring and sets `html[data-scrolled]`; it is rendered here so no
 * page has to remember it.
 *
 * The button says "Get the app" and goes straight to the listing, tagged
 * `masthead` so App Analytics can tell it apart from the badges in the page
 * body. Until `APP_STORE_URL` is set it points at `#`, like the badges.
 *
 * `current` marks the link of the page being shown (`aria-current`), drawn as
 * the selected item in the nav.
 */
export function Masthead({
  lang = 'en',
  current,
  floating = true,
}: {
  lang?: Lang;
  current?: 'home' | 'program' | 'science' | 'faq';
  /** Fixed over the page's top band, drawn together into one capsule on
   * scroll. On by default; `false` gives the plain header in the flow. */
  floating?: boolean;
}) {
  const suffix = lang === 'en' ? '' : `-${lang}`;
  const href = storeHref(`masthead${suffix}`);
  const c = CHROME[lang];
  const home = TRANSLATED.home[lang];

  // Every language has its program, evidence and questions pages, so the nav
  // is the same everywhere. Support and Privacy, the two URLs an App Store
  // reviewer is sent to, are in the footer of every page.
  const links = [
    { href: home, label: c.navHome, current: current === 'home' },
    { href: customHref('program', lang), label: c.navProgram, current: current === 'program' },
    { href: customHref('science', lang), label: c.navEvidence, current: current === 'science' },
    { href: customHref('faq', lang), label: c.navQuestions, current: current === 'faq' },
  ];

  return (
    <header className={`shell masthead${floating ? ' masthead-float' : ''}`}>
      {floating && <ScrollState />}
      <Link className="brand" href={home} aria-label="Walkito">
        <Image src="/icon-96.webp" alt="" width={36} height={36} priority />
        <span className="brand-name">Walkito</span>
      </Link>

      <nav className="nav">
        {links.map((link) => (
          <Link key={link.href} href={link.href} aria-current={link.current ? 'page' : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>

      <GetAppButton className="download" ios={href ?? '#'} android={playHref(`masthead${suffix}`)}>
        <AppleGlyph />
        {c.headerButton}
      </GetAppButton>

      {/* Phones: a burger in place of the nav and the button. */}
      <MobileMenu
        links={links}
        getApp={{ ios: storeHref(`menu${suffix}`) ?? '#', android: playHref(`menu${suffix}`), label: c.headerButton }}
        labels={{ open: c.menuOpen, close: c.menuClose }}
      />

      <GetAppDialog
        qr={QR}
        ios={storeHref(`get-dialog${suffix}`) ?? '#'}
        android={playHref(`get-dialog${suffix}`)}
        words={{
          title: c.getTitle,
          scan: c.getScan,
          appStore: c.getAppStore,
          play: c.getPlay,
          playSoon: c.getPlaySoon,
          close: c.getClose,
        }}
      />
    </header>
  );
}
