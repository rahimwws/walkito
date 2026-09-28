import { describe, expect, test } from 'bun:test';

import { isNewerVersion } from '../src/features/app-update/model/version';

describe('isNewerVersion', () => {
  test('compares numerically, part by part', () => {
    expect(isNewerVersion('1.10.0', '1.9.3')).toBe(true);
    expect(isNewerVersion('1.9.3', '1.10.0')).toBe(false);
    expect(isNewerVersion('2.0', '1.99.99')).toBe(true);
  });

  test('treats missing parts as zero', () => {
    expect(isNewerVersion('1.2', '1.2.0')).toBe(false);
    expect(isNewerVersion('1.2.1', '1.2')).toBe(true);
  });

  test('never offers a malformed or equal version', () => {
    expect(isNewerVersion('1.0.0', '1.0.0')).toBe(false);
    expect(isNewerVersion('beta', '1.0.0')).toBe(false);
    expect(isNewerVersion('', '1.0.0')).toBe(false);
  });
});
