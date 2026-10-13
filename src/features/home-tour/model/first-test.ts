import { useEffect, useRef, useSyncExternalStore } from 'react';

import { useFirstTestDone } from '@/entities/program';

/**
 * The line between the tour and Home's own test sheet.
 *
 * The tour's last stop is the start button; tapping it asks Home to open the
 * test (`requestFirstTest`), and Home's task list, which owns the test sheet,
 * answers (`useFirstTestRequest`) and says while the sheet is up
 * (`setFirstTestOpen`), so the tour steps aside until it closes.
 */

const requests = new Set<() => void>();
const openListeners = new Set<() => void>();
let open = false;
/** Development only (`?previewTour=untested`): the tour as somebody with no
 * test on record meets it, on a simulator that already has one. */
let pretendUntested = false;

export function requestFirstTest(): void {
  for (const listener of requests) listener();
}

export function useFirstTestRequest(onRequest: () => void): void {
  const latest = useRef(onRequest);
  latest.current = onRequest;
  useEffect(() => {
    const listener = () => latest.current();
    requests.add(listener);
    return () => {
      requests.delete(listener);
    };
  }, []);
}

export function setFirstTestOpen(next: boolean): void {
  if (next === open) return;
  open = next;
  for (const listener of openListeners) listener();
}

function subscribeOpen(listener: () => void): () => void {
  openListeners.add(listener);
  return () => {
    openListeners.delete(listener);
  };
}

export function useFirstTestOpen(): boolean {
  return useSyncExternalStore(subscribeOpen, () => open, () => open);
}

export function devPretendUntested(on: boolean): void {
  if (!__DEV__) return;
  pretendUntested = on;
  for (const listener of openListeners) listener();
}

/** The first test is on record, as far as the tour is concerned. */
export function useTourFirstTested(): boolean {
  const tested = useFirstTestDone();
  const pretend = useSyncExternalStore(subscribeOpen, () => pretendUntested, () => pretendUntested);
  return tested && !pretend;
}

/** Development only (`?previewOfferWall`): the offer after the first test,
 * on a simulator that has not taken one. */
let wallPreview = false;

export function devPreviewOfferWall(on: boolean): void {
  if (!__DEV__) return;
  wallPreview = on;
  for (const listener of openListeners) listener();
}

export function useDevOfferWall(): boolean {
  return useSyncExternalStore(subscribeOpen, () => wallPreview, () => wallPreview);
}
