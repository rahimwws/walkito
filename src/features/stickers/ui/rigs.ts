import {
  blankSignRig,
  celebrateRig,
  giftRig,
  handsUpRig,
  heartRig,
  idleRig,
  phoneRig,
  pointingRig,
  premiumRig,
  reminderRig,
  sleepingRig,
  surprisedRig,
  thinkingRig,
  thumbsUpRig,
  trophyRig,
  walkingRig,
  waveRig,
  type MascotRig,
} from '@/shared/ui/mascot';

import type { StickerId } from '../model/stickers';

/**
 * Each sticker's pose. Kept out of the model so the rules stay plain data the
 * tests can load without the drawing.
 *
 * Never the sad pose, the sore foot or the runner: the album is for what was
 * done, and none of those is. The peeking poses are cut off at an edge and
 * would read as torn stickers.
 */
export const STICKER_RIGS: Record<StickerId, MascotRig> = {
  'first-checkin': idleRig,
  'first-session': thumbsUpRig,
  'streak-3': celebrateRig,
  'first-rest': sleepingRig,
  'sessions-5': walkingRig,
  'first-week': pointingRig,
  'streak-7': giftRig,
  'first-test': thinkingRig,
  'checkins-10': phoneRig,
  'streak-10': handsUpRig,
  'sessions-10': celebrateRig,
  'own-time': reminderRig,
  // The hello pose: glad to see them, nothing said about where they were.
  comeback: waveRig,
  'rest-5': sleepingRig,
  'sessions-25': thumbsUpRig,
  'care-30': heartRig,
  'checkins-30': surprisedRig,
  'streak-30': trophyRig,
  'sessions-50': blankSignRig,
  'streak-100': premiumRig,
};
