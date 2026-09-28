import { expect, test } from 'bun:test';

import { mirroredFor } from '../src/widgets/session-player/model/mirror';

test('16 · a left foot sees every clip mirrored; right, both and unknown do not', () => {
  expect(mirroredFor('left')).toBe(true);
  expect(mirroredFor('right')).toBe(false);
  expect(mirroredFor('both')).toBe(false);
  expect(mirroredFor(null)).toBe(false);
});
