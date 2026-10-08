/**
 * Median single-leg heel-rise repetitions by age and sex, from Table 4 of
 * Hebert-Losier 2017 (n = 566): model estimates for BMI 24.2 and physical
 * activity level 4, average of both legs. The same numbers as the table on
 * the calf raise test page; `scripts/check-tools.mjs` keeps them in step.
 */
export const CALF_NORM_AGES = [20, 30, 40, 50, 60, 70, 80] as const;
export const CALF_NORMS = {
  male: [37, 33, 28, 24, 19, 15, 10],
  female: [30, 27, 25, 22, 19, 16, 14],
} as const;

export type Sex = keyof typeof CALF_NORMS;

/** The study's typical measurement error, in repetitions. A count within this
 * of the median is "around" it. */
export const CALF_ERROR_REPS = 2;

/** Limb symmetry index benchmark used in lower-limb rehabilitation. */
export const LSI_BENCHMARK = 90;

/** Median for an age, linearly between the published ages; ages outside
 * 20 to 80 use the nearest published age. */
export function calfMedian(age: number, sex: Sex): { median: number; clamped: boolean } {
  const ages = CALF_NORM_AGES;
  const rows = CALF_NORMS[sex];
  if (age <= ages[0]) return { median: rows[0], clamped: age < ages[0] };
  if (age >= ages[ages.length - 1]) return { median: rows[rows.length - 1], clamped: age > ages[ages.length - 1] };
  const i = ages.findIndex((a) => a > age) - 1;
  const t = (age - ages[i]) / (ages[i + 1] - ages[i]);
  return { median: Math.round(rows[i] + t * (rows[i + 1] - rows[i])), clamped: false };
}

export function compareToMedian(reps: number, median: number): 'above' | 'around' | 'below' {
  if (reps > median + CALF_ERROR_REPS) return 'above';
  if (reps < median - CALF_ERROR_REPS) return 'below';
  return 'around';
}

/** Weaker side as a percentage of the stronger side, and how many percent
 * fewer raises the weaker side did. Rounded normally, except that a result
 * under the benchmark is never shown as reaching it (89.6 shows as 89). */
export function limbSymmetry(left: number, right: number): { lsi: number; gap: number; meets: boolean } | null {
  const hi = Math.max(left, right);
  if (hi === 0) return null;
  const exact = (Math.min(left, right) / hi) * 100;
  const meets = exact >= LSI_BENCHMARK;
  const lsi = meets ? Math.round(exact) : Math.min(LSI_BENCHMARK - 1, Math.round(exact));
  return { lsi, gap: Math.round(100 - exact), meets };
}
