/**
 * Following Walkito on Instagram. The sheet rises by itself once, on the
 * third day of use (`useFollowOffer`, mounted by Home), and is always one row
 * away in Profile. A feature rather than a page's own because both Home and
 * Profile open it.
 */
export { FollowSheet, type FollowSheetProps } from './ui/follow-sheet';
export { INSTAGRAM } from './config/instagram';
export { useFollowOffer } from './model/use-follow-offer';
export { FOLLOW_DAY, devResetFollowOffer, followOfferDue } from './model/offer';
