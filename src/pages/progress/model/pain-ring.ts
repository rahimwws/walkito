import { accents, meterColors } from '@/shared/config';

/**
 * The pain logged on a day, 0–10, as the colour of the ring around its node.
 *
 * This is the one place in the app where colour grades a number, and it is a
 * deliberate exception to the rule in AGENTS.md. Stating it plainly here so it
 * doesn't get cited as precedent: nothing else on the path may take a colour
 * from a value.
 *
 * The rule exists so the palette never punishes a user for their own figures —
 * a low score must not turn red, because that number measures *them*. Pain
 * measures the injury. It is the one figure on this screen the user is not
 * responsible for, and it is the only one that can honestly answer "is this
 * working, or did it just pass on its own".
 *
 * Putting it on the path rather than in a chart is the point. Scrolling back
 * through your own history and watching the rings cool from red to green is
 * the same evidence a report would give, except it lives inside the thing the
 * user already walks every day. A neutral ramp here would say nothing at all.
 */
export function painRing(pain: number, scheme: 'light' | 'dark'): string {
  const tone = accents[scheme];
  if (pain <= 2) return meterColors[scheme].positive;
  if (pain <= 4) return tone.amber.fill;
  if (pain <= 6) return tone.orange.fill;
  return tone.red.fill;
}

/** The three stops the legend shows, once. */
export const PAIN_LEGEND = [
  { pain: 1, label: 'Easy' },
  { pain: 5, label: 'Sore' },
  { pain: 8, label: 'Sharp' },
] as const;
