import type { ImageSourcePropType } from 'react-native';

/**
 * The photograph behind the plan screen, full bleed.
 *
 * Separate assets from `SEX_PHOTOS` even though they are the same shoot. Those
 * are cropped close for a half-height card, and a card crop stretched over a
 * whole phone is a 2× enlargement of somebody's forearm — the runner falls
 * outside the frame entirely. These are the uncropped portraits, tall enough
 * that `cover` on a 19.5:9 screen only trims the sides and leaves the runner
 * where the photographer put her.
 */
export const PLAN_PHOTOS: Record<string, ImageSourcePropType> = {
  female: require('@assets/onboarding/plan-female.jpg'),
  male: require('@assets/onboarding/plan-male.jpg'),
};

/**
 * Where the interesting part of each portrait is, as a fraction from the top.
 *
 * A wide card window over a full-length portrait has to crop hard, and `cover`
 * always crops to the centre — which on these lands squarely on the runner's
 * shorts. One shared offset does not fix it either: the two photographs frame
 * their runner differently. So each names its own focal point and the card
 * positions the window around it.
 */
export const PLAN_ART_FOCUS: Record<string, number> = {
  female: 0.3,
  male: 0.34,
};
