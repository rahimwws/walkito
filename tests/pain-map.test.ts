/**
 * The foot map, and the two rules it must never break.
 *
 * Numbered to match Part 10 of the spec. The ones that need a rendered screen —
 * mirroring, the glow, VoiceOver — are not here and are listed in the report
 * instead of being faked with a shallow render that would prove nothing.
 */

import { describe, expect, test } from 'bun:test';

import {
  OUT_OF_SCOPE_NOTE,
  ZONE_LABEL,
  isOutOfScope,
  latestPainMap,
  painMaps,
  patternFor,
  patternKeyFor,
  primaryZone,
  coversAnswer,
  recordPainMap,
} from '@/entities/pain-map';

describe('1–2 — who is asked', () => {
  test('knee only skips it', () => {
    expect(coversAnswer(['knee'])).toBe(false);
  });

  test('heel shows it', () => {
    expect(coversAnswer(['heel'])).toBe(true);
  });

  test('foot and achilles show it too — the map covers all three', () => {
    expect(coversAnswer(['foot'])).toBe(true);
    expect(coversAnswer(['achilles'])).toBe(true);
  });

  test('"nothing right now", and no answer at all, both skip', () => {
    expect(coversAnswer(['none'])).toBe(false);
    expect(coversAnswer(undefined)).toBe(false);
  });

  test('a knee answer alongside a foot one still shows it', () => {
    expect(coversAnswer(['knee', 'heel'])).toBe(true);
  });
});

describe('7 — priority', () => {
  test('heel and arch together shows the heel line', () => {
    expect(primaryZone(['arch', 'heel'])).toBe('heel');
    expect(patternFor(['arch', 'heel'])).toContain('most common pattern');
  });

  test('the order holds all the way down', () => {
    expect(primaryZone(['achilles', 'inner_ankle'])).toBe('inner_ankle');
    expect(primaryZone(['achilles'])).toBe('achilles');
  });

  test('no line names a condition or promises anything', () => {
    const lines = (['heel', 'arch', 'inner_ankle', 'achilles'] as const)
      .map((zone) => patternFor([zone]) ?? '')
      .join(' ');
    for (const forbidden of ['fasciitis', 'tendinitis', 'tendinopathy', 'cure', 'heal', 'fix']) {
      expect(lines.toLowerCase()).not.toContain(forbidden);
    }
  });
});

describe('8–9 — scope', () => {
  test('ball only is out of scope, and says so', () => {
    expect(isOutOfScope(['ball'])).toBe(true);
    expect(patternFor(['ball'])).toBe(OUT_OF_SCOPE_NOTE);
    expect(patternKeyFor(['ball'])).toBe('none');
  });

  test('toes only, likewise', () => {
    expect(isOutOfScope(['toes'])).toBe(true);
  });

  test('ball alongside heel is in scope, and shows the heel line', () => {
    expect(isOutOfScope(['ball', 'heel'])).toBe(false);
    expect(patternFor(['ball', 'heel'])).toContain('most common pattern');
  });

  test('nothing selected is not "out of scope" — it is unanswered', () => {
    expect(isOutOfScope([])).toBe(false);
    expect(patternFor([])).toBeNull();
  });
});

describe('the pattern key the rest of the app branches on', () => {
  test('arch and inner ankle collapse onto one track', () => {
    expect(patternKeyFor(['arch'])).toBe('arch');
    expect(patternKeyFor(['inner_ankle'])).toBe('arch');
  });

  test('heel and achilles keep their own', () => {
    expect(patternKeyFor(['heel'])).toBe('heel');
    expect(patternKeyFor(['achilles'])).toBe('achilles');
  });
});

describe('10 — what gets stored', () => {
  test('the first map lands as painMaps[0] with its source', () => {
    const before = painMaps().length;
    const entry = recordPainMap({ side: 'left', zones: ['heel', 'arch'], source: 'onboarding' });

    expect(entry.source).toBe('onboarding');
    expect(entry.side).toBe('left');
    expect(entry.outOfScope).toBe(false);
    expect(Date.parse(entry.recordedAt)).not.toBeNaN();

    const all = painMaps();
    expect(all.length).toBe(before + 1);
    expect(latestPainMap()).toEqual(entry);
  });

  test('out of scope is derived from the zones, not taken on trust', () => {
    const entry = recordPainMap({ side: 'right', zones: ['toes'], source: 'onboarding' });
    expect(entry.outOfScope).toBe(true);
  });

  test('a retest appends rather than overwriting — the change is the point', () => {
    const before = painMaps().length;
    recordPainMap({ side: 'right', zones: ['heel'], source: 'retest' });
    expect(painMaps().length).toBe(before + 1);
    expect(painMaps()[0].source).toBe('onboarding');
  });
});

describe('12 — the label the reflection line uses', () => {
  test('every zone has one', () => {
    for (const zone of ['heel', 'achilles', 'inner_ankle', 'arch', 'ball', 'toes'] as const) {
      expect(ZONE_LABEL[zone].length).toBeGreaterThan(0);
    }
  });

  test('the highest-priority zone is the one that speaks', () => {
    const zone = primaryZone(['toes', 'inner_ankle', 'heel']);
    expect(zone).toBe('heel');
    expect(ZONE_LABEL[zone!]).toBe('Heel');
  });
});
