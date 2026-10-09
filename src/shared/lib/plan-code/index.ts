/**
 * The plan code that carries a starter plan from ChatGPT or Claude into the
 * app: `WK-` and six Crockford base32 characters.
 *
 * It holds the plan's parameters and nothing about the person: the area, the
 * minutes, the days, the kit, the side, and which assistant made it. No pain
 * value, no name, nothing that would need storing, which is why there is no
 * database behind it. The AI assistant server (`ai-assistant/`) encodes; the
 * app decodes and prefills onboarding. Both import this one file, so the two
 * can never read the bits differently.
 *
 * Layout, most significant bit first (26 bits, padded to 30 with zeros):
 *   version 4 · source 2 · area 3 · minutes 2 · days 2 · equipment 5 · side 2 · checksum 6
 */

export const PLAN_CODE_VERSION = 1;

export const PLAN_AREAS = ['heel_arch', 'achilles', 'flat_feet', 'shin', 'general_plus'] as const;
export type PlanArea = (typeof PLAN_AREAS)[number];

export const PLAN_SOURCES = ['chatgpt', 'claude', 'other'] as const;
export type PlanSource = (typeof PLAN_SOURCES)[number];

export const PLAN_MINUTES = [3, 5, 10] as const;
export type PlanMinutes = (typeof PLAN_MINUTES)[number];

export const PLAN_DAYS = [3, 5, 7] as const;
export type PlanDays = (typeof PLAN_DAYS)[number];

/** Bit order of the equipment flags. */
export const PLAN_EQUIPMENT = ['step', 'towel', 'band', 'ball', 'backpack'] as const;
export type PlanEquipment = (typeof PLAN_EQUIPMENT)[number];

export const PLAN_SIDES = ['left', 'right', 'both'] as const;
export type PlanSide = (typeof PLAN_SIDES)[number];

export type PlanCodeParams = {
  source: PlanSource;
  area: PlanArea;
  minutes: PlanMinutes;
  days: PlanDays;
  equipment: readonly PlanEquipment[];
  side: PlanSide;
};

/** Crockford's base32: no I, L, O or U, so a code read aloud or typed survives. */
const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
const PREFIX = 'WK-';
const DATA_BITS = 20;
const CHARS = 6;

/** Six bits from the twenty data bits: a multiplicative hash, so one typo in
 * any character changes it. */
function checksum(data: number): number {
  return (Math.imul(data ^ 0x5a5a5, 0x9e3779b1) >>> 26) & 0x3f;
}

export function encodePlanCode(params: PlanCodeParams): string {
  const field = <T>(list: readonly T[], value: T, name: string) => {
    const index = list.indexOf(value);
    if (index < 0) throw new Error(`plan code: unknown ${name} ${String(value)}`);
    return index;
  };
  let flags = 0;
  for (const item of params.equipment) flags |= 1 << field(PLAN_EQUIPMENT, item, 'equipment');
  const data =
    (PLAN_CODE_VERSION << 16) |
    ((field(PLAN_SOURCES, params.source, 'source') + 1) << 14) |
    (field(PLAN_AREAS, params.area, 'area') << 11) |
    (field(PLAN_MINUTES, params.minutes, 'minutes') << 9) |
    (field(PLAN_DAYS, params.days, 'days') << 7) |
    (flags << 2) |
    field(PLAN_SIDES, params.side, 'side');
  // 20 data bits, 6 checksum bits, 4 zero bits of padding: 30 bits, 6 characters.
  const packed = ((data << 6) | checksum(data)) * 16;
  let out = '';
  for (let i = CHARS - 1; i >= 0; i--) out += ALPHABET[Math.floor(packed / 32 ** i) % 32];
  return PREFIX + out;
}

/** The parameters, or null for anything that is not a valid code. Lenient
 * about case, spaces, dashes and the letters Crockford reads as digits. */
export function decodePlanCode(input: string): PlanCodeParams | null {
  const body = input
    .trim()
    .toUpperCase()
    .replace(/^WK[-\s]?/, '')
    .replace(/[\s-]/g, '')
    .replace(/[IL]/g, '1')
    .replace(/O/g, '0');
  if (body.length !== CHARS) return null;
  let packed = 0;
  for (const char of body) {
    const value = ALPHABET.indexOf(char);
    if (value < 0) return null;
    packed = packed * 32 + value;
  }
  if (packed % 16 !== 0) return null;
  const bits = packed / 16;
  const data = Math.floor(bits / 64);
  if (checksum(data) !== bits % 64) return null;
  if (data >>> 16 !== PLAN_CODE_VERSION) return null;
  const source = PLAN_SOURCES[((data >>> 14) & 3) - 1];
  const area = PLAN_AREAS[(data >>> 11) & 7];
  const minutes = PLAN_MINUTES[(data >>> 9) & 3];
  const days = PLAN_DAYS[(data >>> 7) & 3];
  const side = PLAN_SIDES[data & 3];
  if (!source || !area || !minutes || !days || !side) return null;
  const flags = (data >>> 2) & 0x1f;
  const equipment = PLAN_EQUIPMENT.filter((_, i) => (flags & (1 << i)) !== 0);
  return { source, area, minutes, days, equipment, side };
}

/** Bits allotted to data, for tests. */
export const PLAN_CODE_DATA_BITS = DATA_BITS;
