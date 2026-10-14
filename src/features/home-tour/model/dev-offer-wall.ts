import { useSyncExternalStore } from 'react';

/**
 * Development only (`?previewOfferWall`): the offer that follows the tour for
 * somebody who skipped the paywall, raised over Home on a simulator that has
 * bought, or has not been through the tour.
 */
let wallPreview = false;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function devPreviewOfferWall(on: boolean): void {
  if (!__DEV__) return;
  wallPreview = on;
  for (const listener of listeners) listener();
}

export function useDevOfferWall(): boolean {
  return useSyncExternalStore(subscribe, () => wallPreview, () => wallPreview);
}
