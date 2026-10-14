import { useSyncExternalStore } from 'react';

import { sampleRetention, type Subscription } from '@/entities/purchase';

import type { CancelOptions } from './cancel-data';
import type { Change } from './cancel-math';

/**
 * Development only: the cancel flow over a pretend subscription, so every
 * screen of it can be looked at, and screenshotted, on a simulator that holds
 * no subscription and can sign no promotional offer.
 *
 * `walkito.dev://?previewCancel` opens Settings with the flow over it, as a
 * yearly subscriber with an improvement to show; `?previewCancel=monthly` as
 * a monthly one, for "Switch to yearly". The store's answers are the sample
 * prices (`sampleRetention` in the purchase entity), and taking an offer goes
 * through without reaching a store. Nothing the preview does is recorded: no
 * analytics, no plan change, no offer marked as taken.
 */
export type CancelPreview = {
  /** Changes with every link, so a second one opens the flow again. */
  readonly id: number;
  readonly subscription: Subscription;
  readonly options: CancelOptions;
  readonly changes: readonly Change[];
};

/** Pretend numbers, for the "My feet are better" screen. */
const SAMPLE_CHANGES: readonly Change[] = [
  { metric: 'pain', from: 6.4, to: 2.9 },
  { metric: 'calf', from: 9, to: 17 },
];

let preview: CancelPreview | null = null;
const listeners = new Set<() => void>();

function notify(): void {
  for (const listener of listeners) listener();
}

export function devPreviewCancel(period: 'annual' | 'monthly'): void {
  if (!__DEV__) return;
  const sample = sampleRetention(period);
  if (sample == null) return;
  preview = {
    id: Date.now(),
    subscription: sample.subscription,
    options: {
      nextYear: sample.nextYear,
      freeMonth: sample.freeMonth,
      playPause: sample.subscription.store === 'play_store',
      yearly: sample.yearly,
      current: sample.current,
    },
    changes: SAMPLE_CHANGES,
  };
  notify();
}

/** Back to the real subscription, once Settings closes. */
export function endCancelPreview(): void {
  if (preview == null) return;
  preview = null;
  notify();
}

export function useCancelPreview(): CancelPreview | null {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    () => preview,
    () => null,
  );
}
