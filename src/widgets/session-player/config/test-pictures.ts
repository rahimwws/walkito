import type { ImageSourcePropType } from 'react-native';

import type { TestKind } from '../model/test-day';

/**
 * The picture of each test: the position to take and the one thing to watch,
 * drawn with a violet arrow or ring and no text, because the steps under it
 * are in seven languages.
 *
 * Cut-outs, so they sit on the page in either scheme: WebP at q90 with lossless
 * alpha, the app's format for cut-outs. Where a leg runs off the frame the
 * alpha fades it out over the last sixth, so no hard edge shows on a dark page.
 * The calf test's wall is a faint grey at a fifth of its opacity rather than
 * the white it was drawn in, which on a dark page was a slab.
 *
 * `full` is trimmed to the figure, up to 1400 px on its long side, for the
 * screen before the test, where it is drawn as large as the frame allows;
 * `thumb` is a 330 px square cropped to the part that matters, for the list on
 * the day's intro (104 pt at 3x).
 * Kept out of `test-meta.ts` so nothing a test imports requires an image.
 */
export const TEST_PICTURES: Readonly<Record<TestKind, { full: ImageSourcePropType; thumb: ImageSourcePropType }>> = {
  calf: {
    full: require('@assets/testday/calf.webp'),
    thumb: require('@assets/testday/calf-thumb.webp'),
  },
  arch: {
    full: require('@assets/testday/arch.webp'),
    thumb: require('@assets/testday/arch-thumb.webp'),
  },
  balance: {
    full: require('@assets/testday/balance.webp'),
    thumb: require('@assets/testday/balance-thumb.webp'),
  },
};
