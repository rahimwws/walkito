import type { VideoSource } from 'expo-video';

/** The two brands with a switch to find. Apple Watch needs nothing, and no
 * watch has nothing to connect. */
export type WatchBrand = 'garmin' | 'whoop';

/**
 * Placeholder footage, and knowingly so.
 *
 * The exercise clip stands in until the real screen recordings exist. It is the
 * one asset already bundled, and a card that plays the wrong loop is a visibly
 * wrong thing somebody will replace — where a blank square reads as a bug and
 * gets shipped.
 */
const PLACEHOLDER: VideoSource = require('@assets/exercises/calf-raise.mp4');

export type SyncGuide = {
  label: string;
  /** Three lines, because a fourth is a manual. */
  steps: readonly string[];
  /** Deep link into the app that owns the switch, falling back to its store
   * page when it is not installed — which the OS does for us. */
  url: string;
  clip: VideoSource;
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
    clip: PLACEHOLDER,
  },
  whoop: {
    label: 'Whoop',
    steps: [
      'Open Whoop and go to your profile.',
      'Tap App Settings, then Integrations.',
      'Turn on Apple Health.',
    ],
    url: 'https://apps.apple.com/app/whoop/id1180012238',
    clip: PLACEHOLDER,
  },
};

/** Running dynamics never arrive through Health — Garmin keeps them in Connect
 * and Whoop does not measure them. Nothing in the app claims otherwise, and
 * this note is here so nobody later writes copy that does. */
