import { CHROME, type Lang } from '@/lib/i18n';
import { playHref, storeHref } from '@/lib/site';

const PLAY_LABEL: Record<Lang, string> = {
  en: 'Get it on Google Play',
  ru: 'Скачать в Google Play',
  es: 'Disponible en Google Play',
  pt: 'Disponível no Google Play',
  fr: 'Disponible sur Google Play',
  it: 'Disponibile su Google Play',
  de: 'Jetzt bei Google Play',
};

/** Apple's own mark, as a filled glyph. Shared with the "Get the app" buttons. */
export function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.36 12.73c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.08 2.66-2.14.84-1.23 1.19-2.42 1.2-2.48-.03-.01-2.3-.88-2.33-3.5zM14.2 6.1c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.69-.92 2.68.97.08 1.96-.49 2.58-1.21z" />
    </svg>
  );
}

/**
 * The one control the page is built around.
 *
 * A pill with the platform glyph and three words, rather than Apple's official
 * "Download on the App Store" lockup. That lockup is a licensed image with its
 * own clear-space and minimum-size rules, and a hand-drawn imitation of it is a
 * trademark problem rather than a shortcut. This is honestly our own button, so
 * there is nothing to imitate and nothing to get wrong.
 *
 * One glyph, not two. The reference this was drawn from carries an Apple mark
 * and a Google Play mark side by side; Walkito reads HealthKit sleep, steps and
 * walking asymmetry and draws a Live Activity on the Lock Screen, so it is iOS
 * only. A Play glyph here would be advertising a build that does not exist.
 *
 * Russian and Spanish show Apple's own localized badge instead, unaltered, as
 * downloaded from Apple's marketing tools (toolbox.marketingtools.apple.com):
 * «Загрузите в App Store» and the Latin American «Descárgalo en el App Store».
 * A self-made pill in those languages would have been a second translation of
 * a phrase Apple already translates.
 */
/** `anchor` marks the one badge the header's pre-launch link scrolls to; a page
 * with two badges must not give both the same id. */
export function AppStoreBadge({
  campaign,
  anchor = false,
  lang = 'en',
}: {
  campaign: string;
  anchor?: boolean;
  lang?: Lang;
}) {
  const c = CHROME[lang];
  const id = anchor ? 'get' : undefined;

  /*
   * Always the live button, even before launch: the pill reads "Download on
   * the App Store" and points at `#` until `APP_STORE_URL` is set, so launch is
   * one constant and the page does not change shape on the day.
   */
  const href = storeHref(campaign) ?? '#';
  // Google Play, once the Android build is live (`PLAY_STORE_URL`). Our own
  // text pill, for the same trademark reason as the Apple one.
  const play = playHref(campaign);
  const playLink = play ? (
    <a href={play} className="store-play" aria-label={PLAY_LABEL[lang]}>
      {PLAY_LABEL[lang]}
    </a>
  ) : null;

  if (lang !== 'en') {
    return (
      <div className="store store-official" id={id}>
        <a href={href} aria-label={c.getBadgeLabel}>
          {/* Plain <img>: an SVG needs no resizing, and the export has image optimisation off. */}
          <img src={`/badges/app-store-${lang}.svg`} alt="" width={120} height={40} />
        </a>
        {playLink}
      </div>
    );
  }

  return (
    <div className="store" id={id}>
      <a href={href} aria-label={c.getBadgeLabel}>
        <AppleGlyph />
        {c.getBadge}
      </a>
      {playLink}
    </div>
  );
}
