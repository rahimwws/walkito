/**
 * Hansen and colleagues, 2018 (174 people, ultrasound-confirmed plantar
 * fasciitis): Kaplan-Meier share still with symptoms at each time point from
 * symptom onset. Copied from the pf-duration guide's study notes;
 * scripts/check-tools.mjs checks the guide text still carries these numbers.
 */
export type HansenYear = 1 | 5 | 10 | 15;

export const HANSEN_POINTS: readonly { year: HansenYear; pct: number }[] = [
  { year: 1, pct: 80.5 },
  { year: 5, pct: 50.0 },
  { year: 10, pct: 45.6 },
  { year: 15, pct: 44.0 },
];
