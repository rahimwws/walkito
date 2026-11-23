import { describe, expect, test } from 'bun:test';

import { contrast } from '@/shared/lib/color';

import { themes } from './tokens';

describe.each(['light', 'dark'] as const)('%s tokens', (scheme) => {
  const c = themes[scheme].colors;

  test.each(['text', 'text2', 'accent'] as const)('%s reads 4.5:1 on the card and the page', (key) => {
    expect(contrast(c[key], c.surface)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(c[key], c.bg)).toBeGreaterThanOrEqual(4.5);
  });

  test('text3, for 17pt and up only, reads 3:1 on the card and the page', () => {
    expect(contrast(c.text3, c.surface)).toBeGreaterThanOrEqual(3);
    expect(contrast(c.text3, c.bg)).toBeGreaterThanOrEqual(3);
  });

  test('the primary button and the accent fill carry their labels', () => {
    expect(contrast(c.onInk, c.ink)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(c.onAccent, c.accent)).toBeGreaterThanOrEqual(4.5);
  });

  test('the primary button stands off the page', () => {
    expect(contrast(c.ink, c.bg)).toBeGreaterThanOrEqual(3);
  });
});
