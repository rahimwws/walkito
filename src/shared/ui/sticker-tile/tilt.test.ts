import { describe, expect, test } from 'bun:test';

import { MAX_TILT_DEG, stickerTilt } from './tilt';

describe('a sticker tilt', () => {
  test('is the same for the same id, every time', () => {
    expect(stickerTilt('first-session')).toBe(stickerTilt('first-session'));
  });

  test('stays within four degrees either way', () => {
    for (const id of ['first-session', 'first-test', 'rest-counts', 'ten-days', 'thirty-days', 'a', '', 'x'.repeat(200)]) {
      const tilt = stickerTilt(id);
      expect(tilt).toBeGreaterThanOrEqual(-MAX_TILT_DEG);
      expect(tilt).toBeLessThanOrEqual(MAX_TILT_DEG);
    }
  });

  test('differs between stickers, so a row does not line up', () => {
    const tilts = new Set(['first-session', 'first-test', 'rest-counts', 'ten-days', 'thirty-days'].map(stickerTilt));
    expect(tilts.size).toBeGreaterThan(3);
  });
});
