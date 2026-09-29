import type { ZoneKey } from '@/entities/program';
import type { Key, Translate } from '@/shared/lib/i18n';

import type { Leg, MeasuredGoal, TestKind } from '../../model/test-day';

/**
 * How each test presents itself: its words, its footage, and the zone whose
 * icon and accent it borrows.
 *
 * The zone is the program's own (`ZONE_META`), so a test here carries the same
 * glyph and colour the retest has everywhere else in the app. The accent says
 * which test a ring or a bar belongs to — never how well it went.
 *
 * Clips by catalogue id. The arch hold and the balance test are the same
 * movements as two catalogue exercises and use their footage; the calf test is
 * single-leg and paced, which no catalogue clip shows, so it has its own.
 */
export const TEST_META = {
  calf: {
    name: 'testday.test.calf.name',
    measures: 'testday.test.calf.measures',
    steps: ['testday.calf.step1', 'testday.calf.step2', 'testday.calf.step3'],
    stopHint: 'testday.calf.stopHint',
    clip: 'retest_calf_raise',
    zone: 'calf',
  },
  arch: {
    name: 'testday.test.arch.name',
    measures: 'testday.test.arch.measures',
    steps: ['testday.arch.step1', 'testday.arch.step2', 'testday.arch.step3'],
    stopHint: 'testday.arch.stopHint',
    clip: 'short_foot_double',
    zone: 'arch',
  },
  balance: {
    name: 'testday.test.balance.name',
    measures: 'testday.test.balance.measures',
    steps: ['testday.balance.step1', 'testday.balance.step2', 'testday.balance.step3'],
    stopHint: 'testday.balance.stopHint',
    clip: 'single_leg_hold',
    zone: 'balance',
  },
} as const satisfies Record<
  TestKind,
  {
    name: Key;
    measures: Key;
    steps: readonly [Key, Key, Key];
    stopHint: Key;
    clip: string;
    zone: ZoneKey;
  }
>;

/** The zone a result row borrows its icon and accent from. */
export const GOAL_ZONE: Readonly<Record<MeasuredGoal, ZoneKey>> = {
  arch_hold: 'arch',
  calf_raises: 'calf',
  balance: 'balance',
  symmetry: 'symmetry',
};

/**
 * A leg, named. "The sore one" only when the user told us which one that is:
 * with both sore, or no answer, calling the left leg the sore one would be
 * inventing a fact.
 */
export function legLabel(t: Translate, leg: Leg, sore: boolean): string {
  if (sore) return leg === 'left' ? t('testday.side.leftSore') : t('testday.side.rightSore');
  return leg === 'left' ? t('testday.side.left') : t('testday.side.right');
}
