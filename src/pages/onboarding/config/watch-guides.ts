import type { VideoSource } from 'expo-video';

import type { Translate } from '@/shared/lib/i18n';

/** The two brands with a switch to find. Apple Watch needs nothing, and no
 * watch has nothing to connect. */
export type WatchBrand = 'garmin' | 'whoop';

export type SyncGuide = {
  label: string;
  /** Three lines, because a fourth is a manual. */
  steps: readonly string[];
  /** Deep link into the app that owns the switch, falling back to its store
   * page when it is not installed — which the OS does for us. */
  url: string;
  /**
   * A real recording of that app's own settings, or null.
   *
   * Null rather than a stand-in. This used to point at the calf-raise exercise
   * clip, which was wrong on its own terms: a foot stretch playing under the
   * words "turn on Health sync" teaches nothing and reads as a bug. The written
   * steps carry the screen alone, and an absent card is honest where a borrowed
   * one is not.
   */
  clip: VideoSource | null;
};

/** The clip is the same recording whatever language is reading it — it is a
 * screen capture of Whoop's own English interface, and that is what the user
 * will see when they get there. */
const WHOOP_CLIP = require('@assets/guides/whoop-apple-health.mp4');

/**
 * The guides, resolved for the current language.
 *
 * A function rather than a constant because the steps name menus, and menus are
 * translated by the app that owns them. Garmin Connect ships a Russian and a
 * Spanish interface, so those catalogues name its menus as that build labels
 * them; Whoop's interface is English everywhere, so its steps keep the English
 * names in every language. A step that disagrees with the screen the user is
 * looking at is worse than no step at all.
 */
export function syncGuides(t: Translate): Readonly<Record<WatchBrand, SyncGuide>> {
  return {
    garmin: {
      label: t('onboarding.watchSync.garminApp'),
      steps: [
        t('onboarding.watchSync.garmin1'),
        t('onboarding.watchSync.garmin2'),
        t('onboarding.watchSync.garmin3'),
      ],
      url: 'https://apps.apple.com/app/garmin-connect/id583446403',
      clip: null,
    },
    whoop: {
      label: t('onboarding.watchSync.whoopApp'),
      // Read off the recording rather than from memory. The first step said "go
      // to your profile", and the path in the clip is the More tab — a written
      // step that disagrees with the video playing beside it is worse than no
      // video, because the user trusts the words and then cannot find the screen.
      steps: [
        t('onboarding.watchSync.whoop1'),
        t('onboarding.watchSync.whoop2'),
        t('onboarding.watchSync.whoop3'),
      ],
      url: 'https://apps.apple.com/app/whoop/id1180012238',
      clip: WHOOP_CLIP,
    },
  };
}

/** Running dynamics never arrive through Health — Garmin keeps them in Connect
 * and Whoop does not measure them. Nothing in the app claims otherwise, and
 * this note is here so nobody later writes copy that does. */
