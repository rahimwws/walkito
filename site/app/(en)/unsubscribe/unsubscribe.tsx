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
  pt: {
    working: 'um momento…',
    title: 'sua inscrição foi cancelada',
    done: 'o walkito não vai mais te enviar e-mails. você pode ativá-los de novo no app: ajustes → e-mail.',
    undo: 'voltar a receber e-mails',
    resubscribed: 'os e-mails estão ativos de novo.',
    invalid: 'este link não funciona mais.',
  },
  fr: {
    working: 'un instant…',
    title: 'désabonnement confirmé',
    done: 'walkito ne t’enverra plus d’e-mails. tu peux les réactiver dans l’app : réglages → e-mail.',
    undo: 'réactiver les e-mails',
    resubscribed: 'les e-mails sont réactivés.',
    invalid: 'ce lien ne fonctionne plus.',
  },
  de: {
    working: 'einen moment…',
    title: 'du bist abgemeldet',
    done: 'walkito schickt dir keine e-mails mehr. du kannst sie in der app wieder einschalten: einstellungen → e-mail.',
    undo: 'e-mails wieder einschalten',
    resubscribed: 'e-mails sind wieder eingeschaltet.',
    invalid: 'dieser link funktioniert nicht mehr.',
  },
  it: {
    working: 'un momento…',
    title: 'iscrizione annullata',
    done: 'walkito non ti manderà più email. puoi riattivarle nell’app: impostazioni → email.',
    undo: 'riattiva le email',
    resubscribed: 'le email sono di nuovo attive.',
    invalid: 'questo link non funziona più.',
  },
} as const;

type Lang = keyof typeof WORDS;

function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && Object.hasOwn(WORDS, value);
}
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
    if (isLang(l)) setLang(l);
    const t = params.get('t') ?? '';
    setToken(t);
    if (!t) {
      setState('invalid');
      return;
    }
    void post(t, 'unsubscribe').then((r) => {
      if (isLang(r.locale)) setLang(r.locale);
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
