'use client';

import { useEffect, useState } from 'react';

/**
 * The confirmation landing page, shown after a site lead clicks the confirm
 * link in their email. Reads `l` and `error` from the query string.
 */

const WORDS = {
  en: {
    title: "you're in",
    body: 'check your inbox for the exercise sheets and the first email of the 7-day starter plan.',
    invalid: 'this confirmation link is not valid. try signing up again.',
  },
  ru: {
    title: 'готово',
    body: 'проверьте почту: там упражнения и первое письмо 7-дневного плана.',
    invalid: 'эта ссылка больше не работает. попробуйте подписаться снова.',
  },
  es: {
    title: 'listo',
    body: 'revisa tu bandeja de entrada: ahi estan los ejercicios y el primer correo del plan de 7 dias.',
    invalid: 'este enlace ya no funciona. intenta suscribirte de nuevo.',
  },
} as const;

type Lang = keyof typeof WORDS;

export function Subscribed() {
  const [lang, setLang] = useState<Lang>('en');
  const [error, setError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const l = params.get('l');
    if (l === 'ru' || l === 'es') setLang(l);
    if (params.has('error')) setError(true);
  }, []);

  const w = WORDS[lang];

  return (
    <div className="handoff-card" lang={lang}>
      <img src="/email/mascot.png" alt="" width={96} height={96} />
      {error ? (
        <p className="handoff-title">{w.invalid}</p>
      ) : (
        <>
          <p className="handoff-title">{w.title}</p>
          <p>{w.body}</p>
        </>
      )}
    </div>
  );
}
