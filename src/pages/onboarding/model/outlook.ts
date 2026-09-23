/**
 * The outlook: three months, told as what changes on the leg they marked.
 *
 * Pure — the step table, the map and the screen all load react-native, and the
 * trajectories below are the part with numbers in them that a test should be
 * able to reach. The only import is type-only and erased.
 */

import type { LegZone } from '@/entities/leg-zone';
import type { Translate } from '@/shared/lib/i18n';

/** Today, then the end of each month. */
export const OUTLOOK_STOPS = 4;

/**
 * What changes in each zone, month by month, as a percentage.
 *
 * For someone in pain it is how much less it hurts; for someone who is not, how
 * much stronger the tissue the plan loads becomes. Grouped by tissue because
 * that is what sets the pace: the fascia and the heel answer the loading work
 * inside the first month — the day 12–16 window the building screen quotes —
 * the calf muscles a little faster still, and a tendon slowest of all, which is
 * why the achilles row trails the others at every stop.
 *
 * These are typical courses for a plan that is followed, not predictions for
 * this user, and the screen says so under the drawing.
 */
const RELIEF: Readonly<Record<'fascia' | 'muscle' | 'tendon' | 'shin', readonly number[]>> = {
  fascia: [0, 35, 65, 85],
  muscle: [0, 40, 70, 90],
  tendon: [0, 20, 45, 70],
  shin: [0, 30, 60, 85],
};

/** Strength gained, for the healthy leg. Modest on purpose: a third stronger in
 * three months is what a loading programme honestly buys. */
const STRENGTH: readonly number[] = [0, 10, 22, 35];

const TISSUE: Readonly<Record<LegZone, keyof typeof RELIEF>> = {
  heel: 'fascia',
  arch: 'fascia',
  ball: 'fascia',
  toes: 'fascia',
  dorsum: 'fascia',
  ankle: 'fascia',
  inner_ankle: 'fascia',
  calf: 'muscle',
  soleus: 'muscle',
  achilles: 'tendon',
  tibia: 'shin',
  tib_ant: 'shin',
};

/**
 * For someone with no pain: what the plan works on. The arch and the calf are
 * what its three phases load, and the soleus is the half of the calf the
 * bent-knee work reaches.
 */
export const STRENGTHENED: readonly LegZone[] = ['calf', 'soleus', 'arch'];

/** The figure a zone's callout shows at a stop, 0 at "Today". */
export function zoneGain(zone: LegZone, stop: number, painless: boolean): number {
  const clamped = Math.max(0, Math.min(OUTLOOK_STOPS - 1, stop));
  return painless ? STRENGTH[clamped] : RELIEF[TISSUE[zone]][clamped];
}

/** The four stops' labels, for the month switcher: "Today", "Month 1"… */
export function outlookMonths(t: Translate): string[] {
  return [
    t('onboarding.outlook.today'),
    ...Array.from({ length: OUTLOOK_STOPS - 1 }, (_, i) => t('onboarding.outlook.month', { n: i + 1 })),
  ];
}
