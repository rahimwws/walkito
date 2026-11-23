import { useSyncExternalStore } from 'react';
import { Appearance, DevSettings, useColorScheme as useSystemColorScheme } from 'react-native';

import {
  THEME_PREFERENCE_KEY,
  bootScheme,
  followsLive,
  readThemePreference,
  type ThemePreference,
} from '@/shared/lib/appearance';
import { kv } from '@/shared/lib/storage';

export type { ThemePreference };

export const THEME_PREFERENCES: readonly ThemePreference[] = ['system', 'light', 'dark'];

let preference: ThemePreference = readThemePreference();
const listeners = new Set<() => void>();

/**
 * Pushes the choice down to the native appearance rather than only into React
 * state.
 *
 * This is the whole reason the override works everywhere: `useColorScheme()`
 * keeps reporting the effective scheme without any call site knowing a
 * preference exists, and native views follow too. On iOS that includes every
 * token: they are `DynamicColorIOS` colours resolved against the window's
 * trait collection, which this sets. Liquid glass and the SwiftUI host in
 * `AnimatedNumber` are drawn by the system and read the same traits.
 *
 * `'unspecified'` hands control back to the OS — React Native resolves it by
 * reading the device's actual scheme, so it is a genuine reset rather than a
 * third appearance.
 *
 * Guarded because `react-native-web` ships no `setColorScheme`, and this runs
 * at module scope: calling it unconditionally crashes the web build during
 * static rendering.
 */
function applyNative(next: ThemePreference) {
  if (typeof Appearance.setColorScheme !== 'function') return;
  Appearance.setColorScheme(next === 'system' ? 'unspecified' : next);
}

// Applied at module scope so the appearance is already correct on the very
// first render. Safe to do synchronously: MMKV is memory-mapped, which is what
// lets the stored value be read before the tree mounts instead of flashing the
// wrong theme for a frame.
applyNative(preference);

/**
 * Android only: the tokens were resolved at boot (`bootScheme`), so a choice
 * that changes the scheme restarts the JS. A short wait first, for
 * `AppCompatDelegate` to apply the night mode the next boot reads back.
 */
function restartForScheme(next: ThemePreference) {
  if (followsLive || next === bootScheme) return;
  setTimeout(() => {
    if (next === 'system' && Appearance.getColorScheme() === bootScheme) return;
    if (__DEV__) {
      DevSettings.reload();
      return;
    }
    // Lazy: expo-updates is native and the scheme rarely changes.
    const Updates = require('expo-updates') as typeof import('expo-updates');
    void Updates.reloadAsync().catch(() => {});
  }, 300);
}

export function getThemePreference(): ThemePreference {
  return preference;
}

export function setThemePreference(next: ThemePreference): void {
  if (next === preference) return;
  preference = next;
  kv.set(THEME_PREFERENCE_KEY, next);
  applyNative(next);
  listeners.forEach((listener) => listener());
  restartForScheme(next);
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** The stored choice, 'system' included. To render, use `useColorScheme()`
 * below, which resolves it against the device. */
export function useThemePreference(): ThemePreference {
  return useSyncExternalStore(subscribe, getThemePreference, getThemePreference);
}

/**
 * The scheme to render in. **Import this instead of react-native's
 * `useColorScheme`** anywhere in the app.
 *
 * React Native's hook alone is not enough here. `Appearance.setColorScheme()`
 * updates the module's snapshot but never emits a `change` event — that event
 * is only fired by the native `appearanceChanged` listener. Since RN's
 * `useColorScheme` is a `useSyncExternalStore` over exactly that emitter,
 * flipping the preference would repaint native views (every token, glass, the
 * SwiftUI number host) while every JS-picked colour stayed put until some
 * unrelated render happened to come along.
 *
 * Subscribing to the preference store as well closes that gap: our own
 * listeners fire on every change, and the system hook still covers the user
 * changing appearance in iOS Settings while 'system' is selected.
 *
 * On Android it answers the boot scheme until the JS restarts, so what is
 * picked here always matches the tokens resolved at boot.
 *
 * Returns a narrowed scheme, so callers don't have to handle null or
 * 'unspecified'.
 */
export function useColorScheme(): 'light' | 'dark' {
  // Both are subscribed to unconditionally: a hook behind a branch would break
  // the rules of hooks the first time the platform answer differed.
  const current = useThemePreference();
  const system = useSystemColorScheme();

  if (!followsLive) return bootScheme;
  if (current !== 'system') return current;
  return system === 'dark' ? 'dark' : 'light';
}
