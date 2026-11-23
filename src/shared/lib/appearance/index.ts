import { Appearance, Platform } from 'react-native';

import { kv } from '@/shared/lib/storage';

/**
 * The stored appearance choice and the scheme this run of the JS started in.
 *
 * Its own module, below both `@/shared/config` and `@/shared/lib/theme`,
 * because the native colours in `shared/config` are built from it at import
 * time and the theme hooks import `shared/config`.
 */
export type ThemePreference = 'system' | 'light' | 'dark';

export const THEME_PREFERENCE_KEY = 'theme/preference';

export function readThemePreference(): ThemePreference {
  const stored = kv.getString(THEME_PREFERENCE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'system';
}

/**
 * The scheme the bundle started in.
 *
 * On iOS the colours are `DynamicColorIOS` and follow the trait collection,
 * so this is only the first answer. Android has no colour a mounted view
 * re-resolves on its own: a `PlatformColor` is read when its prop is applied
 * and never again. So there the tokens are resolved once, from this, and the
 * scheme holds until the JS restarts; the picker restarts it.
 */
export const bootScheme: 'light' | 'dark' = (() => {
  const preference = readThemePreference();
  if (preference !== 'system') return preference;
  return Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
})();

/** Whether the colours follow a scheme change without the JS restarting. */
export const followsLive = Platform.OS === 'ios' || Platform.OS === 'web';
