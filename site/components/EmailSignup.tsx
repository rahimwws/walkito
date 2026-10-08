'use client';

import { useState } from 'react';

import { TRANSLATED } from '@/lib/i18n';
import { SITE_SUBSCRIBE_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * Email signup form for the printable exercise sheets and 7-day starter plan.
 *
 * Works without JavaScript: the form's `action` is a `mailto:` fallback.
 * With JavaScript, it posts to the site-subscribe edge function and shows
 * inline success/error states.
 *
 * The hidden `website` field is a honeypot for bots.
 */

type Lang = 'en' | 'ru' | 'es';

const COPY = {
  en: {
    heading: 'Get the exercise sheets by email',
    description: "We'll email you the three printable sheets and a free 7-day starter plan. One short email a day, then we stop. Unsubscribe anytime.",
    placeholder: 'your email',
    submit: 'send me the sheets',
    privacy: 'Privacy policy',
    success: 'Check your inbox for a confirmation email.',
    already: 'You are already signed up. Check your inbox.',
    error: 'Something went wrong. Try again, or email us at ',
    tooMany: 'Too many attempts. Try again tomorrow.',
  },
  ru: {
    heading: 'Получите упражнения на email',
    description: 'Мы отправим три PDF с упражнениями и бесплатный 7-дневный план. Одно письмо в день, потом остановимся. Отписаться можно в любой момент.',
    placeholder: 'ваш email',
    submit: 'отправить мне упражнения',
    privacy: 'Политика конфиденциальности',
    success: 'Проверьте почту и подтвердите подписку.',
    already: 'Вы уже подписаны. Проверьте почту.',
    error: 'Что-то пошло не так. Попробуйте снова или напишите нам: ',
    tooMany: 'Слишком много попыток. Попробуйте завтра.',
  },
  es: {
    heading: 'Recibe los ejercicios por email',
    description: 'Te enviaremos tres PDF con ejercicios y un plan gratuito de 7 días. Un correo al día, luego paramos. Puedes darte de baja en cualquier momento.',
    placeholder: 'tu email',
    submit: 'enviarme los ejercicios',
    privacy: 'Política de privacidad',
    success: 'Revisa tu bandeja de entrada y confirma tu correo.',
    already: 'Ya estás suscrito. Revisa tu bandeja de entrada.',
    error: 'Algo salió mal. Inténtalo de nuevo o escríbenos a ',
    tooMany: 'Demasiados intentos. Inténtalo mañana.',
  },
} as const;

type State = 'idle' | 'sending' | 'success' | 'already' | 'error' | 'too-many';

export function EmailSignup({
  lang = 'en',
  source = 'printables',
  page = '/',
}: {
  lang?: Lang;
  source?: 'printables' | 'guide';
  page?: string;
}) {
  const [state, setState] = useState<State>('idle');
  const c = COPY[lang];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = (data.get('email') as string)?.trim();
    const website = (data.get('website') as string)?.trim();
    if (!email) return;

    setState('sending');
    try {
      const res = await fetch(SITE_SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale: lang, source, page, website }),
      });
      const body = (await res.json()) as { ok: boolean; already?: boolean; error?: string };
      if (res.status === 429) {
        setState('too-many');
      } else if (body.ok) {
        setState(body.already ? 'already' : 'success');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success' || state === 'already') {
    return (
      <div className="email-signup email-signup-done">
        <p>{state === 'already' ? c.already : c.success}</p>
      </div>
    );
  }

  return (
    <div className="email-signup">
      <p className="email-signup-heading">{c.heading}</p>
      <p className="email-signup-description">{c.description}</p>
      <form
        onSubmit={handleSubmit}
        action={`mailto:${SUPPORT_EMAIL}?subject=Exercise%20sheets%20request`}
        method="GET"
      >
        {/* Honeypot: hidden from real users, filled by bots. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="email-signup-row">
          <input
            type="email"
            name="email"
            placeholder={c.placeholder}
            required
            autoComplete="email"
            disabled={state === 'sending'}
          />
          <button type="submit" disabled={state === 'sending'}>
            {c.submit}
          </button>
        </div>
        {state === 'error' && (
          <p className="email-signup-error">
            {c.error}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        )}
        {state === 'too-many' && <p className="email-signup-error">{c.tooMany}</p>}
      </form>
      <p className="email-signup-consent">
        {/* The policy in the form's own language, from the one table every
            translated page's address lives in. */}
        <a href={TRANSLATED.privacy[lang]}>{c.privacy}</a>
      </p>
    </div>
  );
}
