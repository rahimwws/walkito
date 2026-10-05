import { kv } from '@/shared/lib/storage';

/**
 * Whether the two screens before the paywall have been seen on this phone.
 *
 * They explain the plan once. The paywall is the gate into the app, so
 * somebody who leaves and comes back meets it again at every launch; the story
 * on the second visit would be the same story a second time, between them and
 * the plans they came back for.
 */
const KEY = 'offer/intro-seen';

export function introSeen(): boolean {
  return kv.getBoolean(KEY) === true;
}

export function markIntroSeen(): void {
  kv.set(KEY, true);
}
