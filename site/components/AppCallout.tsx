import type { Lang } from '@/lib/i18n';
import { playHref, storeHref } from '@/lib/site';

/**
 * The app, said once near the top of an article, in a sentence.
 *
 * The guides already end on the App Store badge, but most readers never reach
 * the end of a 3,000-word page: they read the key points and leave. This is
 * the same offer where they are, worded as what the app does with the
 * exercises they are reading about, not as an ad. Each placement carries its
 * own campaign (`<page campaign>-top`) so App Analytics shows whether the top
 * of the page sends installs the bottom does not.
 *
 * Text, not a second badge: one badge per page stays the page's one big
 * button. The Google Play link appears only once `PLAY_STORE_URL` is set.
 */
const COPY: Record<Lang, { lead: string; ios: string; android: string; or: string }> = {
  en: {
    lead: 'Walkito turns these exercises into a short daily plan that adjusts to how your feet felt this morning.',
    ios: 'Get Walkito on the App Store',
    android: 'Google Play',
    or: 'or',
  },
  ru: {
    lead: 'Walkito превращает эти упражнения в короткий план на каждый день, который подстраивается под то, как стопы чувствовали себя утром.',
    ios: 'Скачать Walkito в App Store',
    android: 'Google Play',
    or: 'или',
  },
  es: {
    lead: 'Walkito convierte estos ejercicios en un plan diario corto que se ajusta a cómo amanecieron tus pies.',
    ios: 'Descarga Walkito en el App Store',
    android: 'Google Play',
    or: 'o',
  },
  pt: {
    lead: 'O Walkito transforma estes exercícios em um plano diário curto, que se ajusta a como seus pés acordaram hoje.',
    ios: 'Baixe o Walkito na App Store',
    android: 'Google Play',
    or: 'ou',
  },
  fr: {
    lead: "Walkito transforme ces exercices en un court programme quotidien qui s'adapte à l'état de vos pieds ce matin.",
    ios: "Téléchargez Walkito dans l'App Store",
    android: 'Google Play',
    or: 'ou',
  },
  it: {
    lead: 'Walkito trasforma questi esercizi in un breve piano quotidiano che si adatta a come stavano i tuoi piedi stamattina.',
    ios: "Scarica Walkito sull'App Store",
    android: 'Google Play',
    or: 'o',
  },
  de: {
    lead: 'Walkito macht aus diesen Übungen einen kurzen Tagesplan, der sich danach richtet, wie sich deine Füße heute Morgen angefühlt haben.',
    ios: 'Walkito im App Store laden',
    android: 'Google Play',
    or: 'oder',
  },
};

export function AppCallout({ campaign, lang }: { campaign: string; lang: Lang }) {
  const ios = storeHref(campaign);
  const android = playHref(campaign);
  if (!ios && !android) return null;
  const c = COPY[lang];
  return (
    <p className="app-callout">
      {c.lead}{' '}
      {ios && (
        <a href={ios} className="app-callout-link">
          {c.ios} →
        </a>
      )}
      {ios && android && ` ${c.or} `}
      {android && (
        <a href={android} className="app-callout-link">
          {c.android} →
        </a>
      )}
    </p>
  );
}
