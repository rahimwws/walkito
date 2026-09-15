import type { ImageSourcePropType } from 'react-native';

/**
 * The figure standing under the shoe-size ruler, picked by the sex answer.
 *
 * A cut-out on transparency rather than a rectangular photo: the screen wants
 * a person standing in the layout, not a picture pasted into it, and an alpha
 * edge is the only way the raised sneaker can overlap the ruler's whitespace
 * without a frame drawing a box around her.
 *
 * PLACEHOLDER — `male` points at the female cut-out because only one
 * photograph was supplied. It is wired rather than left undefined so the
 * screen renders either way; the fix is to drop `legs-male.png` into
 * `assets/onboarding/` and change the one line below.
 */
export const LEGS_PHOTOS: Record<string, ImageSourcePropType> = {
  female: require('@assets/onboarding/legs-female.png'),
  male: require('@assets/onboarding/legs-female.png'),
};

/** Intrinsic aspect of the cut-outs. The stage sizes the figure by height so
 * she scales with whatever room is left under the ruler, which means the width
 * has to be derived rather than measured. */
export const LEGS_ASPECT = 1240 / 1316;
