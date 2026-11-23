import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

import { themes } from '@/shared/config/tokens';

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
    expect(themes.light.colors.surface).toBe(SPLASH_BACKGROUND.light);
    expect(options.backgroundColor).toBe(SPLASH_BACKGROUND.light);
    expect(options.image).toBeUndefined();
  });

  test('is the dark page in dark, and the app follows the appearance', () => {
    const dark = entry?.[1]?.dark as Record<string, unknown> | undefined;
    expect(themes.dark.colors.bg).toBe(SPLASH_BACKGROUND.dark);
    expect(dark?.backgroundColor).toBe(SPLASH_BACKGROUND.dark);
    expect(dark?.image).toBeUndefined();
    expect(config.expo.userInterfaceStyle).toBe('automatic');
  });
});
