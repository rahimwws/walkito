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
    // Read off the recording rather than from memory. The first step said "go
    // to your profile", and the path in the clip is the More tab — a written
    // step that disagrees with the video playing beside it is worse than no
    // video, because the user trusts the words and then cannot find the screen.
    steps: [
      'Open Whoop and tap More.',
      'Open App Settings, then Integrations.',
      'Tap Apple Health and turn it on.',
    ],
    url: 'https://apps.apple.com/app/whoop/id1180012238',
    clip: require('@assets/guides/whoop-apple-health.mp4'),
  },
};

/** Running dynamics never arrive through Health — Garmin keeps them in Connect
 * and Whoop does not measure them. Nothing in the app claims otherwise, and
 * this note is here so nobody later writes copy that does. */
