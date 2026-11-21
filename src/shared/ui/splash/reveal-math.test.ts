import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

import { colors } from '@/shared/config/tokens';

import { REVEAL_BY_MS, REVEAL_MS, SPLASH_BACKGROUND, UNMOUNT_GRACE_MS } from './reveal-math';

describe('timing', () => {
  test('the fade is short and the hard stop comes after it', () => {
    expect(REVEAL_MS).toBeLessThanOrEqual(400);
    expect(REVEAL_BY_MS).toBeGreaterThan(REVEAL_MS);
    expect(REVEAL_BY_MS).toBeLessThanOrEqual(2500);
    expect(UNMOUNT_GRACE_MS).toBeGreaterThan(0);
  });
});

describe('native splash in app.json', () => {
  type Plugin = string | [string, Record<string, unknown>];
  const config = JSON.parse(readFileSync(new URL('../../../../app.json', import.meta.url), 'utf8'));
  const entry = (config.expo.plugins as Plugin[]).find(
    (plugin): plugin is [string, Record<string, unknown>] =>
      Array.isArray(plugin) && plugin[0] === 'expo-splash-screen',
  );

  test('is configured', () => {
    expect(entry).toBeDefined();
  });

  test('is plain white, the colour of the first JS frame, with no picture', () => {
    const options = entry?.[1] ?? {};
    expect(SPLASH_BACKGROUND).toBe(colors.surface);
    expect(options.backgroundColor).toBe(SPLASH_BACKGROUND);
    expect(options.image).toBeUndefined();
  });

  test('has no dark variant, and the app is light only', () => {
    // The plugin writes UIUserInterfaceStyle = Automatic whenever a `dark`
    // block is present, overriding app.json's "light".
    expect(entry?.[1]?.dark).toBeUndefined();
    expect(config.expo.userInterfaceStyle).toBe('light');
  });
});
