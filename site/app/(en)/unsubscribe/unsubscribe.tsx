'use client';

import { useEffect, useState } from 'react';

/**
 * Posts the token to the unsubscribe function as soon as the page opens.
 *
 * The words are the same as `unsubscribePage` in
 * `supabase/functions/_shared/email/copy.ts` — lowercase, a plain hyphen —
 * repeated here because the site is a separate build. Change one, change both.
 */

const ENDPOINT = 'https://illpzsrzfpllovwslmdx.supabase.co/functions/v1/email-unsubscribe';

const WORDS = {
  en: {
    working: 'one moment…',
    title: "you're unsubscribed",
    done: "walkito won't send you any more emails. you can turn them back on in the app: settings → email.",
    undo: 'turn emails back on',
    resubscribed: 'emails are back on.',
    invalid: "this link doesn't work anymore.",
  },
  ru: {
    working: 'секунду…',
    title: 'вы отписались',
    done: 'walkito больше не будет присылать вам письма. включить их снова можно в приложении: настройки → письма.',
    undo: 'вернуть письма',
    resubscribed: 'письма снова включены.',
    invalid: 'эта ссылка больше не работает.',
  },
  es: {
    working: 'un momento…',
    title: 'te has dado de baja',
    done: 'walkito no te enviará más correos. puedes volver a activarlos en la app: ajustes → correo.',
    undo: 'volver a recibirlos',
    resubscribed: 'los correos vuelven a estar activos.',
    invalid: 'este enlace ya no funciona.',
  },
} as const;

type Lang = keyof typeof WORDS;
type State = 'working' | 'done' | 'resubscribed' | 'invalid';

async function post(t: string, action: 'unsubscribe' | 'resubscribe'): Promise<{ ok: boolean; locale?: string }> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ t, action }),
    });
    return (await res.json()) as { ok: boolean; locale?: string };
  } catch {
    return { ok: false };
  }
}

export function Unsubscribe() {
  const [lang, setLang] = useState<Lang>('en');
  const [state, setState] = useState<State>('working');
  const [token, setToken] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const l = params.get('l');
    if (l === 'ru' || l === 'es') setLang(l);
    const t = params.get('t') ?? '';
    setToken(t);
    if (!t) {
      setState('invalid');
      return;
    }
    void post(t, 'unsubscribe').then((r) => {
      if (r.locale === 'ru' || r.locale === 'es' || r.locale === 'en') setLang(r.locale);
      setState(r.ok ? 'done' : 'invalid');
    });
  }, []);

  const w = WORDS[lang];
  return (
    <div className="handoff-card" lang={lang}>
      <img src="/email/mascot.png" alt="" width={96} height={96} />
      {state === 'working' ? <p className="handoff-title">{w.working}</p> : null}
      {state === 'done' ? (
        <>
          <p className="handoff-title">{w.title}</p>
          <p>{w.done}</p>
          <button
            type="button"
            className="download"
            onClick={() => void post(token, 'resubscribe').then((r) => setState(r.ok ? 'resubscribed' : 'invalid'))}
          >
            {w.undo}
          </button>
        </>
      ) : null}
      {state === 'resubscribed' ? <p className="handoff-title">{w.resubscribed}</p> : null}
      {state === 'invalid' ? <p className="handoff-title">{w.invalid}</p> : null}
    </div>
  );
}
