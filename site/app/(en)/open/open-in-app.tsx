'use client';

import { useEffect, useState } from 'react';

/**
 * Hands the email's path to the app, then offers the stores.
 *
 * `/open/today/?minutes=3&src=email&e=winback_7` becomes
 * `walkito://open/today?minutes=3&src=email&e=winback_7`, which the app's
 * `/open` route reads — the same route a universal link reaches directly.
 *
 * All lowercase, like the emails that link here. The language follows the
 * browser, since this page is reached from an email and not from the site.
 */

const APP_STORE = 'https://apps.apple.com/app/id6813076846';
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.walkito.app';

const WORDS = {
  en: { opening: 'opening walkito…', open: 'open walkito', notInstalled: "don't have the app on this phone?", ios: 'app store', android: 'google play' },
  ru: { opening: 'открываем walkito…', open: 'открыть walkito', notInstalled: 'приложения нет на этом телефоне?', ios: 'app store', android: 'google play' },
  es: { opening: 'abriendo walkito…', open: 'abrir walkito', notInstalled: '¿no tienes la app en este teléfono?', ios: 'app store', android: 'google play' },
} as const;

type Lang = keyof typeof WORDS;

function schemeUrl(): string {
  const path = window.location.pathname.replace(/^\/open\/?/, '').replace(/\/+$/, '');
  return `walkito://open/${path}${window.location.search}`;
}

export function OpenInApp() {
  const [lang, setLang] = useState<Lang>('en');
  const [href, setHref] = useState('walkito://open');
  const [stores, setStores] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'other'>('other');

  useEffect(() => {
    const code = (navigator.language || 'en').slice(0, 2);
    if (code === 'ru' || code === 'es') setLang(code);
    const ua = navigator.userAgent;
    const p = /iPhone|iPad|iPod/.test(ua) ? 'ios' : /Android/.test(ua) ? 'android' : 'other';
    setPlatform(p);
    const url = schemeUrl();
    setHref(url);
    if (p !== 'other') window.location.href = url;
    const t = window.setTimeout(() => setStores(true), p === 'other' ? 0 : 1600);
    return () => window.clearTimeout(t);
  }, []);

  const w = WORDS[lang];
  return (
    <div className="handoff-card" lang={lang}>
      <img src="/email/mascot.png" alt="" width={96} height={96} />
      <p className="handoff-title">{w.opening}</p>
      <a className="download" href={href}>
        {w.open}
      </a>
      {stores ? (
        <div className="handoff-stores">
          <p>{w.notInstalled}</p>
          <p>
            {platform !== 'android' ? <a href={APP_STORE}>{w.ios}</a> : null}
            {platform === 'other' ? ' · ' : null}
            {platform !== 'ios' ? <a href={PLAY_STORE}>{w.android}</a> : null}
          </p>
        </div>
      ) : null}
    </div>
  );
}
