import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesCustom, type FullLang } from '@/lib/i18n';
import { shareCard } from '@/lib/share';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { FOOT_MAP, FOOT_MAP_PATH, HOTSPOTS, REGION_ORDER, guideHref, type MapView } from '@/lib/tools/foot-map';

/**
 * "Where does your foot hurt?" Two pictures with tap points; every tap point
 * is a plain link to the card for that area further down, so the page works
 * without script and every card is in the HTML for search engines and
 * screen readers. The tapped card is highlighted with :target.
 */

const IMAGE = {
  side: { w: 1200, h: 1706 },
  sole: { w: 1200, h: 2212 },
} as const;
const LOCALE = { en: 'en_US', es: 'es_MX', ru: 'ru_RU' } as const;

export function footMapMetadata(lang: FullLang): Metadata {
  const c = FOOT_MAP[lang];
  return {
    title: c.title,
    description: c.description,
    alternates: alternatesCustom('footMap', lang),
    openGraph: {
      title: `${c.title} | ${SITE_NAME}`,
      description: c.description,
      url: FOOT_MAP_PATH[lang],
      siteName: SITE_NAME,
      locale: LOCALE[lang],
      type: 'website',
      // Russian and Spanish have a share card of their own (lib/og-card.tsx).
      images: [shareCard(lang)],
    },
  };
}

export function FootMapPage({ lang }: { lang: FullLang }) {
  const c = FOOT_MAP[lang];
  const url = `${SITE_URL}${FOOT_MAP_PATH[lang]}`;
  const home = lang === 'en' ? '/' : `/${lang}/`;

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: c.title,
    description: c.description,
    url,
    inLanguage: lang,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    primaryImageOfPage: `${SITE_URL}/anatomy/map-side.webp`,
    hasPart: REGION_ORDER.map((id) => ({
      '@type': 'WebPageElement',
      name: c.regions[id].h2,
      url: `${url}#${id}`,
    })),
  };
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: c.home,
        item: `${SITE_URL}${home}`,
      },
      { '@type': 'ListItem', position: 2, name: c.crumb, item: url },
    ],
  };
  const images = (['side', 'sole'] as const).map((v) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE_URL}/anatomy/map-${v}.webp`,
    url,
    name: c.views[v],
    caption: c.imageAlt[v],
    inLanguage: lang,
    width: IMAGE[v].w,
    height: IMAGE[v].h,
    creator: { '@type': 'Organization', name: 'Walkito', url: SITE_URL },
    creditText: 'Walkito',
    copyrightNotice: '© Walkito',
  }));

  const view = (v: MapView) => (
    <figure className={`foot-map-view foot-map-${v}`}>
      <div className="foot-map-img">
        <div className="foot-map-stage">
          <img
            src={`/anatomy/map-${v}.webp`}
            srcSet={`/anatomy/map-${v}@600w.webp 600w, /anatomy/map-${v}.webp 1200w`}
            sizes="(max-width: 640px) 90vw, 340px"
            width={IMAGE[v].w}
            height={IMAGE[v].h}
            alt={c.imageAlt[v]}
            fetchPriority={v === 'side' ? 'high' : undefined}
          />
          {HOTSPOTS.filter((h) => h.view === v).map((h) => (
            <a
              key={`${h.region}-${v}`}
              className={`foot-map-dot foot-map-dot-${h.side}`}
              href={`#${h.region}`}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span>{c.regions[h.region].label}</span>
            </a>
          ))}
        </div>
      </div>
      <figcaption>{c.views[v]}</figcaption>
    </figure>
  );

  return (
    <>
      <JsonLd data={webPage} />
      <JsonLd data={breadcrumbs} />
      {images.map((img) => (
        <JsonLd key={img.contentUrl} data={img} />
      ))}
      <Masthead lang={lang} />
      <Prose className="shell prose">
        <h1>{c.h1}</h1>
        <p className="lede">{c.lede}</p>

        <div className="foot-map">
          <div className="foot-map-views">
            {view('side')}
            {view('sole')}
          </div>
          <p className="foot-map-credit">{c.credit}</p>
          <p className="foot-map-pick">{c.pick}</p>
          <ul className="foot-map-chips">
            {REGION_ORDER.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{c.regions[id].label}</a>
              </li>
            ))}
          </ul>
        </div>

        {REGION_ORDER.map((id) => {
          const r = c.regions[id];
          return (
            <section key={id} id={id} className="foot-map-region">
              <h2>{r.h2}</h2>
              <ul className="foot-map-conditions">
                {r.conditions.map((cond) => (
                  <li key={cond.page + cond.name}>
                    <a href={guideHref(cond.page, lang)}>{cond.name}</a>
                    <span>{cond.line}</span>
                  </li>
                ))}
              </ul>
              {r.more && (
                <p className="foot-map-more">
                  {r.moreLead}{' '}
                  {r.more.map((m, i) => (
                    <span key={m.page}>
                      <a href={guideHref(m.page, lang)}>{m.text}</a>
                      {i < r.more!.length - 1 ? ', ' : '.'}
                    </span>
                  ))}
                </p>
              )}
            </section>
          );
        })}

        <section id="see-a-clinician">
          <h2>{c.redFlags.h2}</h2>
          <ul>
            {c.redFlags.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <p>{c.appText}</p>
        <AppStoreBadge campaign="tool-foot-map" lang={lang} />
        <p className="notice">{CHROME[lang].notice}</p>
      </Prose>
      <Footer lang={lang} languages={FOOT_MAP_PATH} />
    </>
  );
}
