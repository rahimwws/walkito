import './cta.css';

import type { CSSProperties, ReactNode } from 'react';

import { InstagramLogo, LinkedInLogo, TikTokLogo, YouTubeLogo } from '@/components/BrandIcons';
import { GetAppButton } from '@/components/GetApp';
import { InView } from '@/components/InView';
import { SOCIAL_LABELS } from '@/components/SocialLinks';
import { AppleLogo, GooglePlayLogo } from '@/components/StoreLogos';
import { CHROME, type Lang } from '@/lib/i18n';
import { INSTAGRAM_URL, LINKEDIN_URL, playHref, storeHref, TIKTOK_URL, YOUTUBE_URL } from '@/lib/site';

type CtaCopy = {
  /** Three short phrases, one to a line. Each is a whole phrase, never a piece of one. */
  lines: [string, string, string];
  /** The two lines of each store button, as the stores' own badges word them. */
  appStoreTop: string;
  /** The big line, where a badge folds the article into it (French: «l’App Store»). */
  appStoreName?: string;
  playTop: string;
  playSoon: string;
};

/**
 * The closing call to action, per language. The lines say again what the
 * hero's last heading said ("Your feet, your plan.", `finalH2`), with the
 * daily rhythm the app is built around added as the third. The store lines
 * follow Apple's and Google's localized badges. The profiles' names come from
 * `SOCIAL_LABELS`, shared with the footer.
 */
const COPY: Record<Lang, CtaCopy> = {
  en: {
    lines: ['Your feet.', 'Your plan.', 'Every day.'],
    appStoreTop: 'Download on the',
    playTop: 'Get it on',
    playSoon: 'Coming soon',
  },
  ru: {
    lines: ['Ваши стопы.', 'Ваш план.', 'Каждый день.'],
    appStoreTop: 'Загрузите в',
    playTop: 'Доступно в',
    playSoon: 'Скоро',
  },
  es: {
    lines: ['Tus pies.', 'Tu plan.', 'Cada día.'],
    appStoreTop: 'Descárgalo en el',
    playTop: 'Disponible en',
    playSoon: 'Muy pronto',
  },
  pt: {
    lines: ['Seus pés.', 'Seu plano.', 'Todo dia.'],
    appStoreTop: 'Baixar na',
    playTop: 'Disponível no',
    playSoon: 'Em breve',
  },
  fr: {
    lines: ['Vos pieds.', 'Votre plan.', 'Chaque jour.'],
    appStoreTop: 'Télécharger dans',
    appStoreName: 'l’App Store',
    playTop: 'Disponible sur',
    playSoon: 'Bientôt disponible',
  },
  it: {
    lines: ['I tuoi piedi.', 'Il tuo piano.', 'Ogni giorno.'],
    appStoreTop: 'Scarica su',
    playTop: 'Disponibile su',
    playSoon: 'Prossimamente',
  },
  de: {
    lines: ['Deine Füße.', 'Dein Plan.', 'Jeden Tag.'],
    appStoreTop: 'Laden im',
    playTop: 'Jetzt bei',
    playSoon: 'Demnächst',
  },
};

/**
 * The end of the home page: the hero once more, smaller and on the dark
 * the FAQ band leaves behind. Three lines in the display face, the icon's blue
 * as a card behind their lower half, and the same phone standing in the card
 * in front of them, cropped by its bottom edge, with Walkito's own Dynamic
 * Island over the mockup's. The social profiles float round it as their real
 * tiles; under it, the two stores and the medical notice.
 */
export function Cta({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const c = CHROME[lang];
  const suffix = lang === 'en' ? '' : `-${lang}`;
  const play = playHref(`home-bottom${suffix}`);

  // Every word gets its place in the whole heading, so they rise in reading
  // order across the three lines rather than line by line.
  let n = 0;
  const lines = copy.lines.map((line) => line.split(' ').map((word) => ({ word, w: n++ })));

  // In the order they sit, left to right, which is also the tab order. A
  // profile with an empty URL in `lib/site.ts` is left out, as in the footer.
  // Each is the network's own app icon, mark and ground, from BrandIcons.
  const labels = SOCIAL_LABELS[lang];
  const socials: { key: string; href: string; label: string; tile: ReactNode }[] = [
    { key: 'yt', href: YOUTUBE_URL, label: labels.youtube, tile: <YouTubeLogo variant="tile" size="100%" /> },
    { key: 'ig', href: INSTAGRAM_URL, label: c.socialInstagram, tile: <InstagramLogo variant="tile" size="100%" /> },
    { key: 'tt', href: TIKTOK_URL, label: c.socialTikTok, tile: <TikTokLogo variant="tile" size="100%" /> },
    { key: 'in', href: LINKEDIN_URL, label: labels.linkedin, tile: <LinkedInLogo variant="tile" size="100%" /> },
  ].filter((s) => s.href !== '');

  return (
    <InView className="hcta">
      <div className="hcta-inner">
        <div className="hcta-stage">
          <div className="hcta-card" aria-hidden />

          {/* Each word rises out of its own clip, as in section 01's heading. */}
          <h2 className="hcta-lines" aria-label={copy.lines.join(' ')}>
            {lines.map((words, l) => (
              <span key={l} className="hcta-line" aria-hidden>
                {words.map(({ word, w }) => (
                  <span key={w} className="hcta-word">
                    <span style={{ '--w': w } as CSSProperties}>{word}</span>
                  </span>
                ))}
              </span>
            ))}
          </h2>

          {/* The well is the card's bottom edge for the phone: it clips there,
              so the phone rises out of the card and never past it. */}
          <div className="hcta-well" aria-hidden>
            <div className="hcta-phone">
              <img
                src="/hero/phone-home.webp"
                srcSet="/hero/phone-home.webp 376w, /hero/phone-home@2x.webp 751w"
                sizes="(max-width: 760px) 62vw, 360px"
                width={751}
                height={1550}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="hcta-island">
                <img src="/icon.png" alt="" width={64} height={64} />
                <span className="hcta-island-name">Walkito</span>
                <span className="hcta-island-ring" />
              </span>
            </div>
          </div>

          <div className="hcta-socials">
            {socials.map((s, i) => (
              <a
                key={s.key}
                className={`hcta-social hcta-${s.key}`}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                style={{ '--i': i } as CSSProperties}
              >
                <span className="hcta-face">{s.tile}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hcta-stores">
          {/* On a laptop this opens the QR dialog, on a phone it goes to that
              phone's store (components/GetApp.tsx). */}
          <GetAppButton
            className="hcta-store"
            ios={storeHref(`home-bottom${suffix}`) ?? '#'}
            android={play}
          >
            <AppleLogo size={30} />
            <span className="hcta-store-text">
              <small>{copy.appStoreTop}</small>
              <strong>{copy.appStoreName ?? 'App Store'}</strong>
            </span>
          </GetAppButton>

          {/* No listing yet: the same button, not a link, saying so. It turns
              into one by itself once PLAY_STORE_URL is set. */}
          {play ? (
            <a className="hcta-store" href={play}>
              <GooglePlayLogo size={28} />
              <span className="hcta-store-text">
                <small>{copy.playTop}</small>
                <strong>Google Play</strong>
              </span>
            </a>
          ) : (
            <span className="hcta-store hcta-store-soon" aria-disabled="true">
              <GooglePlayLogo size={28} />
              <span className="hcta-store-text">
                <small>{copy.playSoon}</small>
                <strong>Google Play</strong>
              </span>
            </span>
          )}
        </div>

        <p className="hcta-notice">{c.notice}</p>
      </div>
    </InView>
  );
}
