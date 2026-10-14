import { useEffect, useState } from 'react';

import { OFFERINGS, purchases, type Offering } from '@/entities/purchase';

import { limitedContent, standardContent, type OfferContent } from './content';

/**
 * Which plans a sheet shows: the limited offer's cards (the comeback's year
 * and lifetime, and the 3-month pass, with no deadline), or the standard
 * plans.
 */
export type OfferSheetKind = 'limited' | 'standard';

export type OfferSheetStatus = 'loading' | 'ready' | 'unavailable';

type Answer = { found: Offering | null; ok: boolean };

/**
 * The plans for an offer sheet, asked of the store each time it opens.
 *
 * Outside the offer screen's stages: nothing here moves a stage, starts a
 * deadline or sends a push. A missing comeback offering shows the standard
 * plans; a store that could not be reached says so and can be asked again.
 */
export function useOfferSheet(
  kind: OfferSheetKind,
  open: boolean,
  sellsPass: boolean,
): { content: OfferContent | null; status: OfferSheetStatus; retry: () => void } {
  const [shelf, setShelf] = useState<{ offer: Offering | null; standard: Offering | null } | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!open) return undefined;
    let live = true;
    setFailed(false);
    // Each asked on its own: a missing offering is a fact about the dashboard
    // (null), a failed fetch is worth asking again (`ok: false`).
    const ask = (id: string): Promise<Answer> =>
      purchases.offering(id).then(
        (found): Answer => ({ found, ok: true }),
        (): Answer => ({ found: null, ok: false }),
      );
    const none: Answer = { found: null, ok: true };
    void Promise.all([kind === 'limited' ? ask(OFFERINGS.offer) : Promise.resolve(none), ask(OFFERINGS.standard)]).then(
      ([offer, standard]) => {
        if (!live) return;
        if (!offer.ok && !standard.ok) {
          setFailed(true);
          return;
        }
        setShelf({ offer: offer.found, standard: standard.found });
      },
    );
    return () => {
      live = false;
    };
  }, [open, kind, attempt]);

  const retry = () => {
    setFailed(false);
    setShelf(null);
    setAttempt((n) => n + 1);
  };

  const content =
    shelf == null ? null : kind === 'limited' ? limitedContent(shelf, sellsPass) : standardContent(shelf.standard);
  const status: OfferSheetStatus =
    content != null ? 'ready' : failed || shelf != null ? 'unavailable' : 'loading';
  return { content, status, retry };
}
