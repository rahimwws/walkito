/**
 * The tour over Home that walks somebody new to their first test: Home
 * blurred but for one place at a time, a handwritten line with an arrow at
 * each. `pages/home` mounts `HomeTour`, marks its places with
 * `useSpotlightAnchor` (`@/shared/lib/spotlight`), and opens the test sheet
 * when the tour asks (`useFirstTestRequest`, `setFirstTestOpen`).
 */
export { HomeTour } from './ui/home-tour';
export {
  devPretendUntested,
  devPreviewOfferWall,
  useDevOfferWall,
  setFirstTestOpen,
  useFirstTestRequest,
} from './model/first-test';
