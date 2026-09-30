import type { ImageSourcePropType } from 'react-native';

/**
 * The photograph on each sex card.
 *
 * Runners on a track rather than studio portraits: the question is being asked
 * by a running app, and a picture of someone doing the sport answers "why are
 * you asking" in a way the caption underneath cannot.
 *
 * A map rather than a field on the step data: the questions are content and
 * these are assets, and keeping them apart means rewording an option never
 * risks losing its photograph.
 *
 * At their own 1100 px width: a card on a 440 pt phone is about 1176 px wide
 * at 3x, so they are already at the limit and only the encoding had slack.
 *
 * Baseline JPEG, re-encoded (q91 and q83, luma SSIM >= 0.99 against the
 * originals), and deliberately not WebP. React Native hands a bundled image to
 * UIImageView undecoded, so Core Animation decodes it on the main thread the
 * first time it is drawn, which is the moment this step slides in with both
 * cards at once. WebP was 0.3 MB smaller here and decoded 4-10x slower (about
 * 67 ms for the pair against 10 ms on an M3 Pro, more on a phone), a hitch on
 * the first-run funnel. Keep photographs that arrive with a step as JPEG.
 */
export const SEX_PHOTOS: Record<string, ImageSourcePropType> = {
  female: require('@assets/onboarding/sex-female.jpg'),
  male: require('@assets/onboarding/sex-male.jpg'),
};
