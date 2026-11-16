import type { ImageSourcePropType } from 'react-native';

/**
 * The picture above "Which heel lifts first?" (`test-heel`).
 *
 * A 6-second silent loop, feet only, seen from behind the chair: both feet
 * slide back until the heels lift, then return. AI-generated (Kling v3 on
 * Atlas Cloud, from a generated still), no face and no person to identify.
 * It plays forward and then backward, so the loop has no seam. No text in it:
 * the copy around it is in seven languages.
 *
 * `clip` is `assets/onboarding/heel-slide.mp4`, H.264, 1120 x 620, no audio
 * track. It plays muted and looping over the still; with Reduce Motion on,
 * the still stays. The still is the clip's first frame, so nothing jumps when
 * the video takes over. The earlier drawing is kept in
 * `assets-src/onboarding/heel-slide.svg`.
 */
export const HEEL_SLIDE: { still: ImageSourcePropType; clip: number | null } = {
  still: require('@assets/onboarding/heel-slide.webp'),
  clip: require('@assets/onboarding/heel-slide.mp4'),
};

/** Width over height of the still (1120 x 620), and of the clip. */
export const HEEL_SLIDE_SHAPE = 1120 / 620;
