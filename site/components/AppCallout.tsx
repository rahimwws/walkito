import { AppleGlyph } from '@/components/AppStoreBadge';
import { GetAppButton } from '@/components/GetApp';
import { InView } from '@/components/InView';
import { typeset } from '@/components/Prose';
import { CHROME, type Lang } from '@/lib/i18n';
import { playHref, storeHref } from '@/lib/site';

/**
 * The app, said once near the top of an article.
 *
 * The guides already end on the App Store badge, but most readers never reach
 * the end of a 3,000-word page: they read the key points and leave. This is
 * the same offer where they are, worded as what the app does with the
 * exercises they are reading about, not as an ad. Each placement carries its
 * own campaign (`<page campaign>-top`) so App Analytics shows whether the top
 * of the page sends installs the bottom does not.
 *
 * Drawn as the home page's closing card, made small (app/pages.css,
 * `.pg-app`): the app's dark surface, the icon's blues lighting the phone from
 * below, the same phone with today's screen rising out of the card's bottom
 * edge, and "Get the app" as the app's own primary button on a dark screen
 * (white, ink label; `primaryButton.dark` in src/shared/config/theme.ts). On a
 * laptop the button opens the QR dialog, on a phone it goes to that phone's
 * store (components/GetApp.tsx).
 */
const LEAD: Record<Lang, string> = {
  en: 'Walkito turns these exercises into a short daily plan that adjusts to how your feet felt this morning.',
  ru: 'Walkito превращает эти упражнения в короткий план на каждый день, который подстраивается под то, как стопы чувствовали себя утром.',
  es: 'Walkito convierte estos ejercicios en un plan diario corto que se ajusta a cómo amanecieron tus pies.',
  pt: 'O Walkito transforma estes exercícios em um plano diário curto, que se ajusta a como seus pés acordaram hoje.',
  fr: "Walkito transforme ces exercices en un court programme quotidien qui s'adapte à l'état de vos pieds ce matin.",
  it: 'Walkito trasforma questi esercizi in un breve piano quotidiano che si adatta a come stavano i tuoi piedi stamattina.',
  de: 'Walkito macht aus diesen Übungen einen kurzen Tagesplan, der sich danach richtet, wie sich deine Füße heute Morgen angefühlt haben.',
};

export function AppCallout({ campaign, lang }: { campaign: string; lang: Lang }) {
  const ios = storeHref(campaign);
  const android = playHref(campaign);
  if (!ios && !android) return null;
  return (
    <InView className="pg-app">
      <div className="pg-app-copy">
        <p className="pg-app-brand">
          <img src="/icon-96.webp" alt="" width={28} height={28} />
          Walkito
        </p>
        <p className="pg-app-lead">{typeset(LEAD[lang])}</p>
        <GetAppButton className="pg-app-get" ios={ios ?? android ?? '#'} android={android}>
          <AppleGlyph />
          {CHROME[lang].headerButton}
        </GetAppButton>
      </div>

      {/* The well is the card's bottom edge for the phone: it clips there, so
          the phone rises out of the card and never past it. */}
      <div className="pg-app-well" aria-hidden>
        <div className="pg-app-phone">
          <img
            src="/hero/phone-home.webp"
            srcSet="/hero/phone-home.webp 376w, /hero/phone-home@2x.webp 751w"
            sizes="(max-width: 640px) 200px, 230px"
            width={751}
            height={1550}
            alt=""
            loading="lazy"
            decoding="async"
          />
          {/* Walkito's own Dynamic Island over the mockup's, as on home. */}
          <span className="pg-app-island">
            <img src="/icon.png" alt="" width={64} height={64} />
            <span className="pg-app-island-name">Walkito</span>
            <span className="pg-app-island-ring" />
          </span>
        </div>
      </div>
    </InView>
  );
}
