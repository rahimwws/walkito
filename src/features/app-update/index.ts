/**
 * Offering a newer version of the app: an EAS Update downloaded in the
 * background and applied with a seamless restart, or a new build in the App
 * Store. The root layout mounts the host once; nothing else needs to know.
 */
export { AppUpdateHost } from './ui/app-update-host';
export { updateRestartHoldMs } from './model/applied';
export type { UpdateOffer, UpdatePhase } from './model/decide';
