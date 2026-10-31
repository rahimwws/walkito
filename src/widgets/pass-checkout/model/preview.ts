import { useSyncExternalStore } from 'react';

/**
 * Development only: "Your 3 months are set" on demand
 * (`walkito.dev://?previewPassSet`), so it can be looked at, and
 * screenshotted, on a simulator that holds no subscription to turn off. The
 * value is when the pretend 3 months start: the end of a pretend yearly
 * period seven months out. Nothing is bought and no store page opens.
 */
let startsAt: number | null = null;
const listeners = new Set<() => void>();

function notify(): void {
  for (const listener of listeners) listener();
}

/** A pretend yearly period has this long left when the preview opens. */
const PERIOD_LEFT_MS = 214 * 24 * 60 * 60 * 1000;

export function devPreviewPassSet(now: number = Date.now()): void {
  if (!__DEV__) return;
  startsAt = now + PERIOD_LEFT_MS;
  notify();
}

export function endPassSetPreview(): void {
  if (startsAt == null) return;
  startsAt = null;
  notify();
}

export function usePassSetPreview(): number | null {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    () => startsAt,
    () => null,
  );
}
