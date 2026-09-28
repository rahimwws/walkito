/**
 * Offering a newer version of the app: an EAS Update applied in place, or a
 * new build in the App Store. The root layout mounts the hook and the sheet
 * once; nothing else needs to know.
 */
export { useAppUpdates, type AppUpdates, type UpdateOffer } from './model/use-app-updates';
export { UpdateSheet } from './ui/update-sheet';
