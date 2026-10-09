import type { ImageSourcePropType } from 'react-native';

/**
 * The photograph behind the plan screen, full bleed. One for everybody since
 * onboarding stopped asking for sex: a woman, because the people with heel
 * pain and bunions who find the app are mostly women between 35 and 60.
 *
 * The uncropped portrait, tall enough that `cover` on a 19.5:9 screen only
 * trims the sides and leaves the runner where the photographer put her.
 *
 * At the photographs' own resolution, never downsized. The building step draws
 * them full bleed, and `cover` on a 440×956 pt phone wants 2868 px of height,
 * more than either has. Only the encoding had slack.
 *
 * Baseline JPEG, re-encoded to luma SSIM >= 0.99 against the original,
 * and deliberately not WebP: React Native hands a bundled image to UIImageView
 * undecoded, so it is decoded on the main thread as the building step fades it
 * in, and WebP took about 63 ms per photograph there against 13-15 ms for JPEG.
 */
export const PLAN_PHOTO: ImageSourcePropType = require('@assets/onboarding/plan-female.jpg');

