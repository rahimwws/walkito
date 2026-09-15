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
 */
export const SEX_PHOTOS: Record<string, ImageSourcePropType> = {
  female: require('@assets/onboarding/sex-female.jpg'),
  male: require('@assets/onboarding/sex-male.jpg'),
};
