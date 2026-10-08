import Image from 'next/image';
import Link from 'next/link';

import { AppleGlyph } from '@/components/AppStoreBadge';
import { GetAppButton, GetAppDialog } from '@/components/GetApp';
import { MobileMenu } from '@/components/MobileMenu';
import { CHROME, TRANSLATED, customHref, type Lang } from '@/lib/i18n';
import { qrPath } from '@/lib/qr';
import { playHref, SITE_URL, storeHref } from '@/lib/site';

/** What the dialog's QR code opens: `/get/` picks the phone's own store. */
const QR = qrPath(`${SITE_URL}/get/`);

/**
 * The header, identical on every page.
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
  floating = false,
}: {
  lang?: Lang;
  current?: 'home';
  /** Home only: fixed over the hero, drawn together into one capsule on scroll. */
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
    { href: customHref('program', lang), label: c.navProgram, current: false },
    { href: customHref('science', lang), label: c.navEvidence, current: false },
    { href: customHref('faq', lang), label: c.navQuestions, current: false },
  ];

  return (
    <header className={`shell masthead${floating ? ' masthead-float' : ''}`}>
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
