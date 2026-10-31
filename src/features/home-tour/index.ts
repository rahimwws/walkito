/**
 * The first minutes on Home for somebody new: the "Day 1" card and its
 * two-minute session, then a three-stop tour (Home blurred but for one place
 * at a time, a handwritten line with an arrow at each). `pages/home` mounts
 * `HomeTour`, marks its places with `useSpotlightAnchor`
 * (`@/shared/lib/spotlight`), and plays the session the card hands it
 * (`onStartDayOne`) in its own sheet, since the player is a widget; it files
 * the finished session through `finishDayOne`.
 */
export { HomeTour, type HomeTourProps } from './ui/home-tour';
export { DAY_ONE_CLIPS, DAY_ONE_MINUTES, finishDayOne, type DayOneRun, type DayOneStep } from './model/day-one';
export { devPreviewOfferWall, useDevOfferWall } from './model/dev-offer-wall';
