import type { ImageSourcePropType } from 'react-native';

/**
 * The photograph above a foot-check question, by step key.
 *
 * Kept out of `steps.ts`, which the tests import and which therefore cannot
 * require an image. Cut-outs, 1200 x 800, so they sit on the page in either
 * scheme: WebP at q90 with lossless alpha, the app's format for cut-outs, and
 * small enough that decoding it is no hitch (the JPEG rule in `plan-photos.ts`
 * is for full-screen photographs). Where the foot runs off the frame the alpha
 * fades it out over the last sixth, so no hard edge shows on a dark page.
 * The arrow and the ring are part of the picture: no text, because the copy
 * around it is in seven languages.
 */
export const QUESTION_PHOTOS: Readonly<Record<string, ImageSourcePropType>> = {
  toe: require('@assets/onboarding/toe-lift.webp'),
  bunion: require('@assets/onboarding/bunion.webp'),
};
