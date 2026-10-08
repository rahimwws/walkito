/**
 * Which complaint speaks for the set when the flow reads the answers back.
 *
 * Ordered by how much the programme can say about each, not by the order they
 * were touched on the map: heel is the most common and the most responsive,
 * so a user who marked the heel *and* the shin is told about the heel. `none`
 * sorts last because it is the absence of the others. The names themselves
 * come from `whereKey` in `entities/leg-zone`.
 */
const PRIMARY_ORDER = ['heel', 'foot', 'achilles', 'calf', 'shin', 'none'] as const;

type PainKey = (typeof PRIMARY_ORDER)[number];

export function primaryPain(pain: readonly string[]): PainKey | null {
  return PRIMARY_ORDER.find((key) => pain.includes(key)) ?? null;
}
