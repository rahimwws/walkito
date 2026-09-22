import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { asLanguage, type Language } from './languages';

const STORAGE_KEY = 'language/preference';

/** `'system'` follows the device; anything else pins the app to that language
 * regardless of what iOS reports. Same three-state shape as the appearance
 * override, for the same reason: "match the device" has to stay expressible
 * after the user has touched the control, or there is no way back to it. */
export type LanguagePreference = 'system' | Language;

/**
 * What the device asks for, narrowed to something we ship.
 *
 * `getLocales()` returns the user's *ordered* preference list, not one locale,
 * and that order is the whole point — someone whose phone is Spanish-first with
 * English second should get Spanish, but someone who is German-first with
 * Russian second should get Russian rather than falling to English. Walking the
 * list honours the second choice the device already knows about instead of
 * throwing it away.
 *
 * Wrapped in a try/catch for the same reason `shared/lib/storage` wraps MMKV:
 * this runs at module scope, and a binary built before `expo-localization` was
 * linked would otherwise throw while the module graph is still evaluating —
 * before any screen exists to show the error. English is a defensible fallback
 * for a crash we cannot see; a white screen is not.
 */
function detect(): Language {
  try {
    const { getLocales } = require('expo-localization') as typeof import('expo-localization');
    for (const locale of getLocales()) {
      const match = asLanguage(locale.languageCode) ?? asLanguage(locale.languageTag);
      if (match != null) return match;
    }
  } catch (error) {
    console.warn('[i18n] locale detection unavailable, falling back to English', error);
  }
  return 'en';
}

/**
 * Read once, at module scope, and never refreshed.
 *
 * Not a shortcut: iOS *terminates* an app when its language is changed in
 * Settings, so there is no running process to notify. Subscribing to
 * `useLocales()` would buy a re-render for an event that cannot reach us, and
 * would make every consumer of `useLanguage()` depend on a native module that
 * has already been established as one that might not be linked.
 */
const deviceLanguage = detect();

function readStored(): LanguagePreference {
  const stored = kv.getString(STORAGE_KEY);
  return asLanguage(stored) ?? 'system';
}

let preference: LanguagePreference = readStored();
const listeners = new Set<() => void>();

/** The device's choice, for the picker's "System" row to name. Shown so the
 * row reads "System — Русский" rather than asking the user to guess what
 * following the device would give them. */
export function getDeviceLanguage(): Language {
  return deviceLanguage;
}

export function getLanguagePreference(): LanguagePreference {
  return preference;
}

/** The language to render in — the preference resolved against the device. */
export function getLanguage(): Language {
  return preference === 'system' ? deviceLanguage : preference;
}

export function setLanguagePreference(next: LanguagePreference): void {
  if (next === preference) return;
  preference = next;
  // Written before the notify so a listener that re-reads storage during its
  // own render sees the value that caused it to run.
  kv.set(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Watch the language from outside React. Returns an unsubscribe.
 *
 * The notification scheduler is why this exists. Notification copy is resolved
 * at **schedule** time — `planWindow` bakes finished text into each item and
 * hands it to iOS, which holds it until the fire date. There is no delivery
 * hook to translate in, so a week of messages keeps whatever language it was
 * laid down in.
 *
 * `refresh()` already cancels and rebuilds the whole window on every foreground,
 * which covers almost everything. What it does not cover is the gap between
 * switching language and the next foreground: a notification due in that window
 * would arrive in the old language. Subscribing here closes it, and does so for
 * *every* place the language can change — the onboarding header badge as well
 * as the settings sheet — rather than relying on each call site to remember.
 */
export function subscribeToLanguage(listener: () => void): () => void {
  return subscribe(listener);
}

/** The stored choice, `'system'` included. To render a string, use
 * `useLanguage()` — or better, `useT()` from the package root. */
export function useLanguagePreference(): LanguagePreference {
  return useSyncExternalStore(subscribe, getLanguagePreference, getLanguagePreference);
}

/**
 * The resolved language, re-rendering the caller when it changes.
 *
 * Every screen reaches this through `useT()` rather than calling it directly.
 * The subscription is what makes the switcher instant: flipping the preference
 * notifies every mounted component holding a `t`, and the whole tree repaints
 * in one commit with no reload and no navigation reset — which matters most in
 * onboarding, where a reload would lose the answers given so far.
 */
export function useLanguage(): Language {
  return useSyncExternalStore(subscribe, getLanguage, getLanguage);
}
