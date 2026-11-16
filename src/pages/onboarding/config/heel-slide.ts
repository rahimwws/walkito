import type { ImageSourcePropType } from 'react-native';

/**
 * The picture above "Which heel lifts first?" (`test-heel`).
 *
 * The slot is meant for a 5-second silent loop, feet only: both feet slide
 * back under a chair until one heel lifts a moment before the other. Until it
 * is filmed the still stands in, a drawing in the app's two colours on a
 * transparent ground (`assets-src/onboarding/heel-slide.svg`, rendered to
 * lossless WebP), so it sits on the tile in either scheme. No text in it: the
 * copy around it is in seven languages.
 *
 * The clip, when it exists: `assets/onboarding/heel-slide.mp4`, H.264, cut to
 * the still's shape (`HEEL_SLIDE_SHAPE`), no audio track. Set `clip` to
 * `require('@assets/onboarding/heel-slide.mp4')` and it plays muted and looping
 * over the still; with Reduce Motion on, the still stays. Keep the still as
 * its first frame, so nothing jumps when the video takes over.
 */
export const HEEL_SLIDE: { still: ImageSourcePropType; clip: number | null } = {
  still: require('@assets/onboarding/heel-slide.webp'),
  clip: null,
};

/** Width over height of the still (1120 x 620), and of the clip. */
export const HEEL_SLIDE_SHAPE = 1120 / 620;
