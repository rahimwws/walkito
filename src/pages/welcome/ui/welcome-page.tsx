import { useMemo } from 'react';

import { useT } from '@/shared/lib/i18n';

import { AstroGlassWelcome, type CookbookCopy } from './liquid-glass';

export type WelcomePageProps = {
  /** Fired when the user takes the screen's one action — the swipe-up gate
   * resolving into "Let's go". */
  onDone: () => void;
};

/**
 * The liquid-glass welcome screen.
 *
 * A thin wrapper over the vendored implementation, so the rest of the app
 * imports one name from `@/pages/welcome` and never reaches into the GPL
 * folder directly. When that folder is replaced — see its README — this file
 * is the only seam that has to change.
 *
 * It is also where the screen's words come from. The vendored theme used to
 * carry them, which put four rotating English phrases on the first thing a new
 * user sees; they are `pages.welcome.*` in the catalogue now and the theme
 * carries only artwork, colour and physics.
 */
export function WelcomePage({ onDone }: WelcomePageProps) {
  const t = useT();

  const copy: CookbookCopy = useMemo(
    () => ({
      hint: t('pages.welcome.hint'),
      a11yHint: t('pages.welcome.a11yHint'),
      // "Train ~~support~~ your feet" — the struck word is the promise the
      // category makes and this one does not. Three keys rather than one,
      // because the rule is drawn over that word's own box.
      headline: t('pages.welcome.headline'),
      struck: t('pages.welcome.struck'),
      kept: t('pages.welcome.kept'),
      // The line under it rotates, so the same claim is aimed at a different
      // reason to care each time round.
      phrases: [
        t('pages.welcome.phrase1'),
        t('pages.welcome.phrase2'),
        t('pages.welcome.phrase3'),
        t('pages.welcome.phrase4'),
      ],
      cta: t('pages.welcome.cta'),
    }),
    // Memoised on the translator, which is itself memoised on the language:
    // `phrases` is a fresh array every time it is built, and the screen keys
    // its rotation off `phrases.length` in an effect.
    [t],
  );

  return <AstroGlassWelcome copy={copy} onActionPress={onDone} />;
}
