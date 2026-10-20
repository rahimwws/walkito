/**
 * What Apple shows on its own "Confirm cancellation" page (iOS Settings →
 * Subscriptions → Walkito → Cancel), through the Retention Messaging API.
 *
 * One message per app language, said once and plainly, as the in-app cancel
 * flow's rules ask: what can change instead of leaving, nothing that hurries,
 * guilts or promises a result. Every claim is something the app does today:
 * a lighter plan and shorter sessions are in Settings, and the log stays on
 * the account after access ends.
 *
 * The identifiers are ours (Apple takes a UUID we choose) and are fixed:
 * Apple reviews each message by its id, so changed wording is a new id, and
 * the old one is deleted once the new one is approved and set as default.
 * `scripts/retention-messaging.ts` uploads these and sets them as defaults;
 * `retention-message` answers Apple's real-time request with the same ids.
 *
 * Apple's limits, in characters: header 66, body 144. `tests/retention-
 * messages.test.ts` checks them, and the copy rules (sentence case, a plain
 * hyphen, never a long dash).
 */
export type RetentionLanguage = 'en' | 'ru' | 'es' | 'pt' | 'fr' | 'de' | 'it';

export type RetentionMessage = {
  id: string;
  header: string;
  body: string;
};

export const RETENTION_MESSAGES: Record<RetentionLanguage, RetentionMessage> = {
  en: {
    id: '24e3fec5-7dfa-497f-9397-474fe6ef911a',
    header: 'Before you go: your plan can get lighter',
    body: 'Short on time or still sore? Make your sessions shorter or your plan lighter in Walkito Settings. Your progress stays saved.',
  },
  ru: {
    id: 'bf5f6a94-efc2-4946-8b8c-21087f30c0cd',
    header: 'Перед уходом: план можно сделать легче',
    body: 'Мало времени или всё ещё болит? В настройках Walkito можно сократить занятия или облегчить план. Ваш прогресс сохранится.',
  },
  es: {
    id: 'c68dd765-36ed-40da-93b8-fba1f7f9e15d',
    header: 'Antes de irte: tu plan puede ser más ligero',
    body: '¿Poco tiempo o aún te duele? En los ajustes de Walkito puedes acortar las sesiones o aligerar el plan. Tu progreso se guarda.',
  },
  pt: {
    id: '5933d561-ac9c-418f-aa06-c515cee637b9',
    header: 'Antes de ir: seu plano pode ficar mais leve',
    body: 'Pouco tempo ou ainda dói? Nos ajustes do Walkito você pode encurtar as sessões ou deixar o plano mais leve. Seu progresso fica salvo.',
  },
  fr: {
    id: '4347b8c7-c354-410f-8e10-b9a1edb642ca',
    header: 'Avant de partir : votre plan peut être allégé',
    body: 'Peu de temps ou encore mal ? Dans les réglages de Walkito, raccourcissez les séances ou allégez le plan. Vos progrès sont conservés.',
  },
  de: {
    id: '128d884f-7d17-45e1-b3f4-52085186775b',
    header: 'Bevor du gehst: Dein Plan kann leichter werden',
    body: 'Wenig Zeit oder noch Schmerzen? In den Walkito-Einstellungen kannst du Einheiten kürzen oder den Plan leichter machen. Dein Fortschritt bleibt.',
  },
  it: {
    id: 'd8b80606-3b2f-471e-bc6d-c49c704b92ce',
    header: 'Prima di andare: il tuo piano può essere più leggero',
    body: 'Poco tempo o ancora dolore? Nelle impostazioni di Walkito puoi accorciare le sessioni o alleggerire il piano. I tuoi progressi restano salvati.',
  },
};

/**
 * The App Store locales each language's message is set as the default for.
 * A locale with no default shows no message at all, so every storefront
 * locale a subscriber of ours is likely to have is listed; English covers
 * the rest of the English-speaking ones.
 */
export const RETENTION_LOCALES: Record<RetentionLanguage, readonly string[]> = {
  en: ['en-US', 'en-GB', 'en-AU', 'en-CA'],
  ru: ['ru'],
  es: ['es-ES', 'es-MX'],
  pt: ['pt-BR', 'pt-PT'],
  fr: ['fr-FR', 'fr-CA'],
  de: ['de-DE'],
  it: ['it'],
};

/**
 * Every auto-renewing subscription of the "Walkito Premium" group, the ones on
 * sale and the ones that are not but may still have subscribers. A product
 * with no default shows no message.
 */
export const RETENTION_PRODUCTS = [
  'walkito_annual',
  'walkito_annual_trial',
  'walkito_annual_offer',
  'walkito_monthly',
  'sub_annual_4499',
  'sub_annual_offer',
  'sub_monthly_2499',
  'sub_weekly_799',
] as const;

/** The message for a device locale as Apple sends it ("ru_RU", "pt-BR", "en"),
 * English when the language is not one of ours. */
export function retentionMessageFor(userLocale: string | null | undefined): RetentionMessage {
  const language = (userLocale ?? '').slice(0, 2).toLowerCase();
  return language in RETENTION_MESSAGES
    ? RETENTION_MESSAGES[language as RetentionLanguage]
    : RETENTION_MESSAGES.en;
}
