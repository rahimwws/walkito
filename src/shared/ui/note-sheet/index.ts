/**
 * The founder's note, beside the app's other sheets.
 *
 * It began in `pages/onboarding`, which is the flow that shows it. It moved
 * here when the profile screen needed to open it too: page-to-page is a
 * sideways import the layer rules forbid, and `StreakSheet`, `GiftSheet` and
 * `CelebrationSheet` all already live at this level.
 *
 * Its catalogue keys stay `onboarding.note.*`. The component is shared; the
 * copy still belongs to the onboarding experience, and renaming eight keys
 * across three languages to record a file move would be churn.
 */
export { NoteSheet } from './note-sheet';
