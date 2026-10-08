import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowUpRight';
import { EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple';
import { QuotesIcon } from '@phosphor-icons/react/dist/ssr/Quotes';
import { StarIcon } from '@phosphor-icons/react/dist/ssr/Star';
import { Fragment, type CSSProperties, type ReactNode } from 'react';

import { InView } from '@/components/InView';
import { Kicker } from '@/components/Kicker';
import { AppleLogo, GooglePlayLogo } from '@/components/StoreLogos';
import type { Lang } from '@/lib/i18n';
import { playHref, storeHref, SUPPORT_EMAIL } from '@/lib/site';
import { STORE_RATINGS, TESTIMONIALS, type StoreRating, type Testimonial } from '@/lib/testimonials';

import './reviews.css';

/**
 * Sample reviews and ratings appear in `next dev` and nowhere else.
 *
 * Everything in `lib/testimonials.ts` is a placeholder today (the store had no
 * ratings when this was written), so a production build, which is what the
 * deploy runs, drops every entry marked `sample`. With none left the section
 * becomes the founders' line, the lead, two plain store buttons and the
 * mascot: still a finished section, and nothing on it is invented. Real
 * entries (`sample: false`) show in both.
 */
const showSamples = process.env.NODE_ENV !== 'production';

type Store = 'appStore' | 'googlePlay';

type ReviewsCopy = {
  /** The chip when reviews are on show, and when only the founders' line is. */
  kicker: string;
  kickerPlain: string;
  /** The founders' line, worded as `components/Founders.tsx` words it. */
  h2: string;
  lead: string;
  listLabel: string;
  starsSr: (n: number) => string;
  ratings: (n: string, raw: number) => string;
  /** The whole chip read aloud, since the visible parts are hidden from screen readers. */
  ratingSr: (store: string, rating: string, count: string | null) => string;
  /** Under the store's name on a plain chip. */
  download: string;
  soon: string;
};

/** A Russian noun for a count: 1 оценка, 2-4 оценки, 5+ оценок, 11-14 оценок. */
function ruPlural(n: number, one: string, few: string, many: string) {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}

const NBSP = ' ';

/**
 * Section 04, per language. The lead is true with or without reviews on the
 * page, so it does not change when the samples go: it says only what the two
 * founders do, never what the app achieves.
 */
const COPY: Record<Lang, ReviewsCopy> = {
  en: {
    kicker: 'Reviews',
    kickerPlain: 'Founders',
    h2: 'Made by Rahman and Rahim',
    lead: 'Just the two of us build Walkito, and a person answers every message. Tell us how your mornings go.',
    listLabel: 'What people say about Walkito',
    starsSr: (n) => `Rated ${n} out of 5`,
    ratings: (n, raw) => `${n}${NBSP}${raw === 1 ? 'rating' : 'ratings'}`,
    ratingSr: (store, rating, count) => `${store}: ${rating} out of 5${count ? `, ${count}` : ''}`,
    download: 'Download Walkito',
    soon: 'Coming soon',
  },
  ru: {
    kicker: 'Отзывы',
    kickerPlain: 'Основатели',
    h2: 'Walkito делают Рахман и Рахим',
    lead: 'Walkito делаем только мы вдвоём. На каждое сообщение отвечает живой человек. Напишите, как у вас проходит утро.',
    listLabel: 'Что говорят о Walkito',
    starsSr: (n) => `Оценка ${n} из${NBSP}5`,
    ratings: (n, raw) => `${n}${NBSP}${ruPlural(raw, 'оценка', 'оценки', 'оценок')}`,
    ratingSr: (store, rating, count) => `${store}: ${rating} из${NBSP}5${count ? `, ${count}` : ''}`,
    download: 'Скачать Walkito',
    soon: 'Скоро',
  },
  es: {
    kicker: 'Reseñas',
    kickerPlain: 'Fundadores',
    h2: 'Hecho por Rahman y Rahim',
    lead: 'Walkito lo hacemos solo nosotros dos, y cada mensaje lo responde una persona. Cuéntanos cómo van tus mañanas.',
    listLabel: 'Lo que dicen de Walkito',
    starsSr: (n) => `${n} de 5 estrellas`,
    ratings: (n, raw) => `${n}${NBSP}${raw === 1 ? 'valoración' : 'valoraciones'}`,
    ratingSr: (store, rating, count) => `${store}: ${rating} de 5${count ? `, ${count}` : ''}`,
    download: 'Descargar Walkito',
    soon: 'Muy pronto',
  },
};

const LOCALE: Record<Lang, string> = { en: 'en-US', ru: 'ru-RU', es: 'es-MX' };

const STORE_NAME: Record<Store, string> = { appStore: 'App Store', googlePlay: 'Google Play' };

/** "Maya C." -> "MC", for the avatar. */
function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

const visible = <T extends { sample: boolean }>(item: T) => !item.sample || showSamples;

/**
 * Section 04: one dark panel on the white page. The founders' line sits in
 * the middle; on a wide screen the reviews are pinned around it like notes on
 * a board, and on a narrower one they become a row to swipe. The collage is
 * drawn for five, so only the first five are used.
 */
export function Reviews({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const suffix = lang === 'en' ? '' : `-${lang}`;
  const reviews = TESTIMONIALS.filter(visible).slice(0, 5);
  const n = reviews.length;
  // Room under the heading for the two bottom notes, which only exist from four on.
  const layout = n === 0 ? 'rev-plain' : n >= 4 ? 'rev-full' : 'rev-few';

  return (
    <InView className="rev">
      <div className={`rev-box ${layout}`}>
        <div className="rev-glow" aria-hidden />

        {n === 0 && (
          // Without reviews the mascot keeps the sides from looking emptied out.
          <div className="rev-mascots" aria-hidden>
            <img className="rev-mascot rev-mascot-l" src="/hero/mascot-nopain.webp" alt="" width={240} height={240} loading="lazy" decoding="async" />
            <img className="rev-mascot rev-mascot-r" src="/hero/mascot-tasks.webp" alt="" width={240} height={240} loading="lazy" decoding="async" />
          </div>
        )}

        <div className="rev-head">
          <Kicker num="04" label={n > 0 ? copy.kicker : copy.kickerPlain} />
          {/* Each word rises out of its own line box, one after another. */}
          <h2 className="rev-title" aria-label={copy.h2}>
            {copy.h2.split(' ').map((word, w) => (
              <Fragment key={w}>
                {w > 0 && ' '}
                <span className="rev-word" aria-hidden>
                  <span style={{ '--w': w } as CSSProperties}>{word}</span>
                </span>
              </Fragment>
            ))}
          </h2>
          <p className="rev-lead rev-rise">{copy.lead}</p>

          <div className="rev-stores rev-rise">
            <StoreChip
              store="appStore"
              href={storeHref(`home-reviews${suffix}`)}
              rating={STORE_RATINGS.appStore}
              lang={lang}
            />
            <StoreChip
              store="googlePlay"
              href={playHref(`home-reviews${suffix}`)}
              rating={STORE_RATINGS.googlePlay}
              lang={lang}
            />
          </div>

          <p className="rev-mail-line rev-rise">
            <a className="rev-mail" href={`mailto:${SUPPORT_EMAIL}`}>
              <EnvelopeSimpleIcon weight="fill" size={18} aria-hidden />
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        {n > 0 && (
          <ul className="rev-cards" role="list" aria-label={copy.listLabel}>
            {reviews.map((t, i) => (
              <li key={t.name} className={`rev-slot rev-slot-${i + 1}`} style={{ '--i': i } as CSSProperties}>
                <ReviewCard t={t} tone={i + 1} lang={lang} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </InView>
  );
}

function ReviewCard({ t, tone, lang }: { t: Testimonial; tone: number; lang: Lang }) {
  const copy = COPY[lang];
  const stars = t.stars ? Math.max(0, Math.min(5, Math.round(t.stars))) : 0;
  return (
    <figure className={`rev-card rev-tone-${tone}`}>
      {stars > 0 && <span className="sr-only">{copy.starsSr(stars)}</span>}
      <div className="rev-card-top" aria-hidden>
        <span className="rev-stars">
          {Array.from({ length: stars }, (_, k) => (
            <StarIcon key={k} weight="fill" size={17} />
          ))}
        </span>
        <span className="rev-q">
          <QuotesIcon weight="fill" size={16} />
        </span>
      </div>
      <blockquote>
        <p>{t.quote[lang]}</p>
      </blockquote>
      <figcaption>
        <span className="rev-avatar" aria-hidden>
          {initials(t.name)}
        </span>
        <span className="rev-who">
          <b>{t.name}</b>
          <span>{t.role[lang]}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * A store's chip: its mark in a dark tile, then its rating where there is one
 * to show, or its name. A link when the listing is live, otherwise a plain
 * box saying it is coming (Google Play, until `PLAY_STORE_URL` is set).
 * Our own layout, name over action, rather than a copy of either store's
 * badge, for the trademark reason in `components/AppStoreBadge.tsx`.
 */
function StoreChip({ store, href, rating, lang }: { store: Store; href: string | null; rating: StoreRating; lang: Lang }) {
  const copy = COPY[lang];
  const name = STORE_NAME[store];
  const rated = rating.rating !== null && visible(rating);
  const locale = LOCALE[lang];

  const tile = <span className="rev-chip-tile">{store === 'appStore' ? <AppleLogo size={24} /> : <GooglePlayLogo size={24} />}</span>;
  const tail = href ? (
    <span className="rev-chip-go" aria-hidden>
      <ArrowUpRightIcon weight="bold" size={16} />
    </span>
  ) : null;

  let body: ReactNode;
  if (rated && rating.rating !== null) {
    const score = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(rating.rating);
    const count = rating.count !== null ? copy.ratings(new Intl.NumberFormat(locale).format(rating.count), rating.count) : null;
    body = (
      <>
        <span className="rev-chip-text" aria-hidden>
          <span className="rev-chip-big">
            <StarIcon weight="fill" size={17} className="rev-chip-star" />
            {score}
            <span className="rev-chip-of">/5</span>
          </span>
          {count && <span className="rev-chip-small">({count})</span>}
        </span>
        <span className="sr-only">{copy.ratingSr(name, score, count)}</span>
        {tail ?? <span className="rev-chip-soon">{copy.soon}</span>}
      </>
    );
  } else {
    body = (
      <>
        <span className="rev-chip-text">
          <span className="rev-chip-big">{name}</span>
          <span className="rev-chip-small">{href ? copy.download : copy.soon}</span>
        </span>
        {tail}
      </>
    );
  }

  return href ? (
    <a className="rev-chip" href={href}>
      {tile}
      {body}
    </a>
  ) : (
    <div className={rated ? 'rev-chip' : 'rev-chip rev-chip-dim'}>
      {tile}
      {body}
    </div>
  );
}
