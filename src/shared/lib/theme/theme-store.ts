import { useSyncExternalStore } from 'react';
import { Appearance, useColorScheme as useSystemColorScheme } from 'react-native';

import { kv } from '@/shared/lib/storage';

const STORAGE_KEY = 'theme/preference';

/**
 * The app renders dark, and only dark.
 *
 * Not a preference and not a default — a decision. The light palette exists in
 * `shared/config` and is *mostly* right, but "mostly" is the problem: it was
 * never designed against, so it produced a white app on a light device with
 * contrast faults nobody had looked at. Two appearances is two surfaces to keep
 * correct, and the second one was not being kept.
 *
 * Kept as one flag rather than ripped out. Every `useColorScheme()` call site
 * still asks the same question and still receives an answer it can branch on;
 * the palettes, the accents and the meters all keep both halves. Finishing the
 * light theme means flipping this and reviewing the screens, not restoring
 * deleted code.
 */
const DARK_ONLY = true;

export type ThemePreference = 'system' | 'light' | 'dark';

export const THEME_PREFERENCES: readonly ThemePreference[] = ['system', 'light', 'dark'];

function readStored(): ThemePreference {
  const stored = kv.getString(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'system';
}

let preference: ThemePreference = readStored();
const listeners = new Set<() => void>();

/**
 * Pushes the choice down to the native appearance rather than only into React
 * state.
 *
 * This is the whole reason the override works everywhere: `useColorScheme()`
 * keeps reporting the effective scheme in all ~25 call sites without any of
 * them knowing a preference exists, and — more importantly — native views
 * follow too. iOS liquid glass and the SwiftUI host in `AnimatedNumber` are
 * rendered by the system, so they read the trait collection, not our JS state.
 * Threading a custom scheme through props would leave those rendering in the
 * device's appearance while everything around them flipped.
 *
 * `'unspecified'` hands control back to the OS — React Native resolves it by
 * reading the device's actual scheme, so it is a genuine reset rather than a
 * third appearance.
 *
 * Guarded because `react-native-web` ships no `setColorScheme`, and this runs
 * at module scope: calling it unconditionally crashes the web build during
 * static rendering. Losing it there costs nothing — the web has no native
 * views to keep in sync, and `useColorScheme()` below still resolves the
 * preference on its own.
 */
function applyNative(next: ThemePreference) {
  if (typeof Appearance.setColorScheme !== 'function') return;
  // Pinned while `DARK_ONLY` holds. This is the half that keeps liquid glass and
  // the SwiftUI number host in step: they read the trait collection, so leaving
  // this on 'unspecified' would render them light inside a dark app.
  if (DARK_ONLY) {
    Appearance.setColorScheme('dark');
    return;
  }
  Appearance.setColorScheme(next === 'system' ? 'unspecified' : next);
}

// Applied at module scope so the appearance is already correct on the very
// first render. Safe to do synchronously: MMKV is memory-mapped, which is what
// lets the stored value be read before the tree mounts instead of flashing the
// wrong theme for a frame.
applyNative(preference);

export function getThemePreference(): ThemePreference {
  return preference;
}

export function setThemePreference(next: ThemePreference): void {
  if (next === preference) return;
  preference = next;
  kv.set(STORAGE_KEY, next);
  applyNative(next);
  listeners.forEach((listener) => listener());
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
 * flipping the preference would repaint native views (glass, the SwiftUI
 * number host) while every JS-driven colour stayed put until some unrelated
 * render happened to come along.
 *
 * Subscribing to the preference store as well closes that gap: our own
 * listeners fire on every change, and the system hook still covers the user
 * changing appearance in iOS Settings while 'system' is selected.
 *
 * Returns a narrowed scheme, so callers don't have to handle null or
 * 'unspecified'.
 */
export function useColorScheme(): 'light' | 'dark' {
  // Both are subscribed to unconditionally: a hook behind a branch is a crash
  // the first time `DARK_ONLY` flips at runtime, and the whole point of keeping
  // the flag is that flipping it should be safe.
  const preference = useThemePreference();
  const system = useSystemColorScheme();

  if (DARK_ONLY) return 'dark';
  if (preference !== 'system') return preference;
  return system === 'dark' ? 'dark' : 'light';
}
