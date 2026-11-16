import type { AnkleRecord, HeelLift } from '@/entities/foot-check';
import type { Translate } from '@/shared/lib/i18n';

/**
 * Her own Foot Check, as the rows the price page reads back to her: what she
 * saw or measured, and nothing she did not.
 *
 * Pure, so the rule can be tested: a row only for an answer she gave or a
 * number she has, in the words the Foot Check itself used. "Not sure" is not
 * a result and makes no row; no row is a promise, a date or a verdict. With
 * nothing done there are no rows, and the screen shows no card at all.
 */

export type FootCheckFacts = {
  /** Which heel lifted first, sitting, in the onboarding. */
  heel: HeelLift | null;
  /** The newest ankle measurement in degrees, from Progress. */
  ankle: Pick<AnkleRecord, 'left' | 'right'> | null;
  /** Whether an arch appeared as the big toe lifted. */
  arch: 'yes' | 'no' | 'unsure' | null;
  /** Seconds on one leg, per side, from an older onboarding that timed it. */
  balance: { left: number | null; right: number | null } | null;
};

export type FootCheckRow = { key: 'ankle' | 'toe' | 'balance'; label: string; value: string; detail?: string };

const HEEL_ROW = {
  left: 'footCheck.heel.leftRow',
  right: 'footCheck.heel.rightRow',
  both: 'footCheck.heel.bothRow',
} as const;

export function footCheckRows(facts: FootCheckFacts, t: Translate): FootCheckRow[] {
  const rows: FootCheckRow[] = [];

  // The degrees, when the phone measured them; else which heel lifted first.
  if (facts.ankle != null) {
    const left = Math.round(facts.ankle.left);
    const right = Math.round(facts.ankle.right);
    const delta = Math.abs(left - right);
    rows.push({
      key: 'ankle',
      label: t('footCheck.card.ankle'),
      value: t('footCheck.paywall.degrees', { left, right }),
      detail:
        delta === 0
          ? t('footCheck.paywall.sameBend')
          : left < right
            ? t('footCheck.paywall.leftLess', { delta })
            : t('footCheck.paywall.rightLess', { delta }),
    });
  } else if (facts.heel != null && facts.heel !== 'unsure') {
    rows.push({ key: 'ankle', label: t('footCheck.card.ankle'), value: t(HEEL_ROW[facts.heel]) });
  }

  if (facts.arch === 'yes' || facts.arch === 'no') {
    rows.push({
      key: 'toe',
      label: t('footCheck.card.toe'),
      value: t(facts.arch === 'yes' ? 'onboarding.result.archYes' : 'onboarding.result.archNo'),
    });
  }

  const left = facts.balance?.left ?? null;
  const right = facts.balance?.right ?? null;
  if (left != null && right != null && left > 0 && right > 0) {
    rows.push({
      key: 'balance',
      label: t('footCheck.card.balance'),
      value: t('footCheck.paywall.balance', { left: Math.round(left), right: Math.round(right) }),
    });
  }

  return rows;
}
