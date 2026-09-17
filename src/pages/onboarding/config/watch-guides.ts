import type { VideoSource } from 'expo-video';

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
   * Null until a real recording of this app's settings screen exists.
   *
   * This used to point at the calf-raise exercise clip as a stand-in, which was
   * wrong on its own terms: a foot stretch playing under the words "turn on
   * Health sync" teaches nothing and reads as a bug. The three written steps
   * carry the screen on their own, and an absent card is honest where a
   * borrowed one is not.
   */
  clip: VideoSource | null;
};

export const SYNC_GUIDES: Readonly<Record<WatchBrand, SyncGuide>> = {
  garmin: {
    label: 'Garmin Connect',
    steps: [
      'Open Garmin Connect and go to More.',
      'Tap Settings, then Apple Health.',
      'Turn on the categories you want shared.',
    ],
    url: 'https://apps.apple.com/app/garmin-connect/id583446403',
    clip: null,
  },
  whoop: {
    label: 'Whoop',
    steps: [
      'Open Whoop and go to your profile.',
      'Tap App Settings, then Integrations.',
      'Turn on Apple Health.',
    ],
    url: 'https://apps.apple.com/app/whoop/id1180012238',
    clip: null,
  },
};

/** Running dynamics never arrive through Health — Garmin keeps them in Connect
 * and Whoop does not measure them. Nothing in the app claims otherwise, and
 * this note is here so nobody later writes copy that does. */
