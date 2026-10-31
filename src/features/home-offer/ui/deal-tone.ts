import { meterColors, palette, primaryButton, raised } from '@/shared/config';

/**
 * The comeback card's colours, and the switch above it: the dark scheme's own
 * tokens in both schemes, so the card stays the reference's dark card on a
 * light page as well as on a dark one.
 *
 * - `face`, `edge`, `lip`: the kit's dark raised surface, a few points lighter
 *   than the dark page, with its border and ledge.
 * - `ink`, `label`, `caption`: white, then the dark scheme's greys (about
 *   6:1 on the face, so the small lines stay legible).
 * - `green`: the dark scheme's `positive`, for the discount and the promise
 *   beside it. A saving is an improving figure, the one thing green marks.
 * - `pill`, `pillInk`: the dark scheme's committing face, white with ink.
 * - `pattern`: the faint "%" drawn across the card.
 */
export const DEAL = {
  face: raised.dark.surface,
  edge: raised.dark.edge,
  lip: raised.dark.lip,
  ink: palette.dark.foreground,
  label: meterColors.dark.label,
  caption: meterColors.dark.caption,
  green: meterColors.dark.positive,
  pill: primaryButton.dark.fill,
  pillInk: primaryButton.dark.label,
  pattern: 'rgba(255,255,255,0.07)',
} as const;
