import { describe, expect, test } from 'bun:test';

import {
  PLAN_AREAS,
  PLAN_DAYS,
  PLAN_EQUIPMENT,
  PLAN_MINUTES,
  PLAN_SIDES,
  PLAN_SOURCES,
  decodePlanCode,
  encodePlanCode,
  type PlanCodeParams,
} from '../src/shared/lib/plan-code';

function* every(): Generator<PlanCodeParams> {
  for (const source of PLAN_SOURCES)
    for (const area of PLAN_AREAS)
      for (const minutes of PLAN_MINUTES)
        for (const days of PLAN_DAYS)
          for (const side of PLAN_SIDES)
            for (let flags = 0; flags < 32; flags++)
              yield { source, area, minutes, days, side, equipment: PLAN_EQUIPMENT.filter((_, i) => flags & (1 << i)) };
}

describe('plan code', () => {
  test('round-trips every combination, and every code is distinct', () => {
    const seen = new Set<string>();
    let n = 0;
    for (const params of every()) {
      const code = encodePlanCode(params);
      expect(code).toMatch(/^WK-[0-9A-HJKMNP-TV-Z]{6}$/);
      expect(decodePlanCode(code)).toEqual({ ...params, equipment: [...params.equipment] });
      seen.add(code);
      n++;
    }
    expect(seen.size).toBe(n);
  });

  test('rejects a code with any single character changed', () => {
    const code = encodePlanCode({ source: 'chatgpt', area: 'heel_arch', minutes: 5, days: 5, equipment: ['towel'], side: 'both' });
    const alphabet = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
    let accepted = 0;
    for (let i = 3; i < code.length; i++) {
      for (const c of alphabet) {
        if (c === code[i]) continue;
        if (decodePlanCode(code.slice(0, i) + c + code.slice(i + 1))) accepted++;
      }
    }
    // A 6-bit checksum lets about 1 in 64 random edits through; a single typo
    // should almost never decode.
    expect(accepted).toBeLessThan(8);
  });

  test('is lenient about how it is typed', () => {
    const code = encodePlanCode({ source: 'claude', area: 'achilles', minutes: 10, days: 3, equipment: ['step'], side: 'left' });
    const body = code.slice(3);
    expect(decodePlanCode(body.toLowerCase())).not.toBeNull();
    expect(decodePlanCode(` wk ${body.slice(0, 3)} ${body.slice(3)} `)).not.toBeNull();
  });

  test('rejects garbage', () => {
    for (const bad of ['', 'WK-', 'WK-12345', 'WK-1234567', 'hello world', 'WK-UUUUUU', 'WK-000000']) {
      expect(decodePlanCode(bad)).toBeNull();
    }
  });
});
