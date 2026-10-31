import { useSyncExternalStore } from 'react';
import { AccessibilityInfo } from 'react-native';

/**
 * Reduce Transparency, read once for the whole app and followed.
 *
 * Every glass surface needs it, and a screen of the raised kit has dozens of
 * them, so the setting is one store with one native listener rather than a
 * query and a listener per component (it began as a private hook in
 * `glass-chip`, which mounted a few at most). Started by the first subscriber
 * and kept for the life of the app.
 */
let current = false;
let started = false;
const listeners = new Set<() => void>();

function emit(next: boolean) {
  if (next === current) return;
  current = next;
  listeners.forEach((listener) => listener());
}

function start() {
  if (started) return;
  started = true;
  void AccessibilityInfo.isReduceTransparencyEnabled().then(emit);
  AccessibilityInfo.addEventListener('reduceTransparencyChanged', emit);
}

function subscribe(listener: () => void): () => void {
  start();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const read = () => current;

export function useReduceTransparency(): boolean {
  return useSyncExternalStore(subscribe, read, read);
}
