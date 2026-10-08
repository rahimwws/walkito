'use client';

import { useEffect, useState } from 'react';

import { detectPlatform } from '@/components/GetApp';
import { playHref, storeHref } from '@/lib/site';

// Campaign "qr": installs from the dialog's QR code show up under that name in
// App Store Connect > Analytics > Campaigns.
const APP_STORE = storeHref('qr') ?? 'https://apps.apple.com/app/id6813076846';
const PLAY_STORE = playHref('qr');

/** Language from the phone, since the code is the same on every page. */
const WORDS = {
  en: { going: 'Opening the store…', appStore: 'App Store', play: 'Google Play', soon: 'Walkito for Android is coming to Google Play soon.' },
  ru: { going: 'Открываем магазин…', appStore: 'App Store', play: 'Google Play', soon: 'Walkito для Android скоро появится в Google Play.' },
  es: { going: 'Abriendo la tienda…', appStore: 'App Store', play: 'Google Play', soon: 'Walkito para Android llegará pronto a Google Play.' },
} as const;

type Lang = keyof typeof WORDS;

export function GetRedirect() {
  const [lang, setLang] = useState<Lang>('en');
  const [waiting, setWaiting] = useState(true);
  const [android, setAndroid] = useState(false);

  useEffect(() => {
    const code = (navigator.language || 'en').slice(0, 2);
    if (code === 'ru' || code === 'es') setLang(code);
    const platform = detectPlatform();
    setAndroid(platform === 'android');
    const target = platform === 'ios' ? APP_STORE : platform === 'android' ? PLAY_STORE : null;
    if (target) window.location.replace(target);
    else setWaiting(false);
  }, []);

  const w = WORDS[lang];
  return (
    <div className="handoff-card" lang={lang}>
      <img src="/icon.png" alt="" width={96} height={96} />
      {waiting ? <p className="handoff-title">{w.going}</p> : null}
      {!waiting && android && !PLAY_STORE ? <p>{w.soon}</p> : null}
      <div className="handoff-stores">
        <p>
          <a href={APP_STORE}>{w.appStore}</a>
          {PLAY_STORE ? (
            <>
              {' · '}
              <a href={PLAY_STORE}>{w.play}</a>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}
