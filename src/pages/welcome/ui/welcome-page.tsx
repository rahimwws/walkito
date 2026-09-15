import { AstroGlassWelcome } from './liquid-glass';

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
 */
export function WelcomePage({ onDone }: WelcomePageProps) {
  return <AstroGlassWelcome onActionPress={onDone} />;
}
