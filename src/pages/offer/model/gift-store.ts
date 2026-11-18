import { kv } from '@/shared/lib/storage';

/** Whether the exit gift has been shown on this phone: it is shown once. */
const KEY = 'paywall/exit-gift-seen';

export function giftSeen(): boolean {
  return kv.getBoolean(KEY) === true;
}

export function markGiftSeen(): void {
  kv.set(KEY, true);
}

/** Development only: the gift can open again. */
export function devForgetGift(): void {
  if (__DEV__) kv.remove(KEY);
}
