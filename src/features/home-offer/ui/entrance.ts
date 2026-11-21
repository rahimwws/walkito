import { typingDuration } from '@/shared/ui/typed-text';

import { typedEmphasisedDuration } from './typed-emphasised';

/**
 * The offer's entrance as one score: when each part starts and how long it
 * takes, in ms from the moment the panel mounts.
 *
 * Nothing of the offer is visible until the paywall it replaces has faded
 * away (`CONTENT_LEAD_MS`). Then the headline types itself, the line under it
 * types as the headline ends, the plan card rises, the button arrives, and
 * the reminder and the disclosure fade in last: about 2.7 s in all, every move on the UI thread (each part is a shared value on a
 * delay).
 *
 * Each part starts a little before the one above has quite finished
 * (`OVERLAP_MS`): the tail of a typed line is its last few characters still
 * fading, and waiting for them reads as a pause.
 *
 * With Reduce Motion everything fades in together, in `REDUCED_MS`, and
 * nothing types.
 */

/**
 * When the offer's first part starts, from the screen opening: the paywall's
 * plans fade out over the first 300 ms of it (`pages/offer`), so the headline
 * starts typing on a clear screen.
 */
export const CONTENT_LEAD_MS = 500;
/** The same, for a panel that arrives on a screen already open (the store
 * answered late, or the stage moved on while it was up). */
export const RETURN_LEAD_MS = 160;

/** Ceilings on the two typed lines: long copy types faster per character
 * rather than holding the offer back. */
export const TITLE_MAX_MS = 760;
export const BODY_MAX_MS = 900;

/** Each kind of arrival (`Reveal`). */
export const RISE_MS = 380;
export const POP_MS = 340;
export const FADE_MS = 320;
/** Everything, with Reduce Motion: one fade. */
export const REDUCED_MS = 250;

const OVERLAP_MS = 80;
const TABS_TO_CARD_MS = 100;
const CARD_TO_CTA_MS = 180;
const CTA_TO_PROMISE_MS = 160;
const PROMISE_TO_LEGAL_MS = 80;

export type Entrance = {
  /** Whether the two lines type themselves, or fade in whole. */
  typed: boolean;
  title: { at: number; ms: number };
  body: { at: number; ms: number };
  tabs: number;
  card: number;
  cta: number;
  promise: number;
  legal: number;
};

export function entranceOf({
  title,
  body,
  tabs,
  lead,
  reduced,
  typed,
}: {
  title: string;
  /** With its `**…**` marks. */
  body: string;
  /** Whether the plan switch is shown. */
  tabs: boolean;
  /** When the first part may start. */
  lead: number;
  reduced: boolean;
  /** False for Reduce Motion, and for text set larger than the headline may
   * grow (`OfferPanel`), where the lines fade in whole. */
  typed: boolean;
}): Entrance {
  if (reduced) {
    const at = lead;
    return {
      typed: false,
      title: { at, ms: REDUCED_MS },
      body: { at, ms: REDUCED_MS },
      tabs: at,
      card: at,
      cta: at,
      promise: at,
      legal: at,
    };
  }
  const titleMs = typed ? typingDuration(title, TITLE_MAX_MS) : FADE_MS;
  const bodyMs = typed ? typedEmphasisedDuration(body, BODY_MAX_MS) : FADE_MS;
  const titleAt = lead;
  const bodyAt = titleAt + titleMs - OVERLAP_MS;
  const bodyEnd = bodyAt + bodyMs;
  const tabsAt = bodyEnd - OVERLAP_MS;
  const card = tabs ? tabsAt + TABS_TO_CARD_MS : bodyEnd - OVERLAP_MS;
  const cta = card + CARD_TO_CTA_MS;
  const promise = cta + CTA_TO_PROMISE_MS;
  return {
    typed,
    title: { at: titleAt, ms: titleMs },
    body: { at: bodyAt, ms: bodyMs },
    tabs: tabsAt,
    card,
    cta,
    promise,
    legal: promise + PROMISE_TO_LEGAL_MS,
  };
}
