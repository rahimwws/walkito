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
 * this user. They are never shown as numbers — `zoneStage` turns them into a
 * word — and the screen says under the drawing that it is an illustration.
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

/**
 * The word a zone's callout shows at a stop, in place of the percentage.
 *
 * The percentages below still set the *pace* — a tendon reaches each word later
 * than a muscle does — but the screen no longer prints them: they are a
 * typical course, not data about anyone, and a figure like "90% less pain"
 * reads as a medical promise the app has no evidence for.
 */
export type StageKey =
  | 'onboarding.outlook.pain0'
  | 'onboarding.outlook.pain1'
  | 'onboarding.outlook.pain2'
  | 'onboarding.outlook.pain3'
  | 'onboarding.outlook.strength0'
  | 'onboarding.outlook.strength1'
  | 'onboarding.outlook.strength2'
  | 'onboarding.outlook.strength3';

export function zoneStage(zone: LegZone, stop: number, painless: boolean): StageKey {
  const gain = zoneGain(zone, stop, painless);
  if (painless) {
    if (gain <= 0) return 'onboarding.outlook.strength0';
    if (gain < 15) return 'onboarding.outlook.strength1';
    if (gain < 25) return 'onboarding.outlook.strength2';
    return 'onboarding.outlook.strength3';
  }
  if (gain <= 0) return 'onboarding.outlook.pain0';
  if (gain < 40) return 'onboarding.outlook.pain1';
  if (gain < 70) return 'onboarding.outlook.pain2';
  return 'onboarding.outlook.pain3';
}

/** The four stops' labels, for the month switcher: "Today", "Month 1"… */
export function outlookMonths(t: Translate): string[] {
  return [
    t('onboarding.outlook.today'),
    ...Array.from({ length: OUTLOOK_STOPS - 1 }, (_, i) => t('onboarding.outlook.month', { n: i + 1 })),
  ];
}
