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
