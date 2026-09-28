import { describe, expect, test } from 'bun:test';

import { chipFace, chipSurface, contrast, selectedLabel, solidFill } from './chip-colour';

// The dark palette's page and the five day-type tones (test and recovery share gold).
const PAGE = '#111113';
const TONES = { strength: '#9B85FF', mobility: '#2ED3C6', balance: '#3B9EFF', recovery: '#F0B458', test: '#F0B458' };

describe('the glass chip', () => {
  test('13 · chip text clears 4.5:1 on every card colour — glass, solid and selected', () => {
    for (const tone of Object.values(TONES)) {
      expect(contrast('#FFFFFF', chipFace(tone, PAGE))).toBeGreaterThanOrEqual(4.5);
      expect(contrast('#FFFFFF', solidFill(tone))).toBeGreaterThanOrEqual(4.5);
      const face = '#FFFFFF';
      expect(contrast(selectedLabel(tone, PAGE), face)).toBeGreaterThanOrEqual(4.4);
    }
  });

  test('12 · Reduce Transparency draws a solid chip, whatever the glass', () => {
    expect(chipSurface(true, true)).toBe('solid');
    expect(chipSurface(false, true)).toBe('solid');
  });

  test('14 · iOS 26 draws Liquid Glass; older iOS draws the blur', () => {
    expect(chipSurface(true, false)).toBe('liquid-glass');
    expect(chipSurface(false, false)).toBe('blur');
  });
});
