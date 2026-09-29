/** The update sheet and the note after the restart. Filled per domain; see
 * `./core.ts` for the rules.
 *
 * The mascot is on screen for all of it, so these are in his voice: short,
 * warm, and never a threat. "Later" is always a fine answer, and the ready
 * blurb says why — a downloaded update installs itself on the next start. */

import type { SourceEntry } from '../entry';

export const UPDATE_EN = {
  // ── The sheet: an update over the air, already downloaded ────────────────
  'update.readyTitle': 'Walkito got better',
  'update.readyBlurb':
    'The update is already downloaded, so this takes a second. Not now? It installs itself the next time Walkito starts.',
  'update.updateNow': 'Update now',
  /** On the button while the restart plays out, over a progress bar. */
  'update.updating': 'Updating…',
  'update.failedBlurb': 'That didn’t finish. Check your connection and try again.',
  'update.tryAgain': 'Try again',

  // ── The sheet: a new build in the App Store ──────────────────────────────
  'update.storeReadyTitle': 'A new version is out',
  'update.storeReadyBlurb':
    'Walkito {version} is in the App Store, with fixes and a few nice touches.',
  'update.openAppStore': 'Open the App Store',

  // ── Either ───────────────────────────────────────────────────────────────
  'update.maybeLater': 'Later',
  /** Accessibility label for tapping the dimmed app behind the sheet. */
  'update.close': 'Close',

  // ── After the restart ────────────────────────────────────────────────────
  'update.appliedNote': 'Walkito is up to date',
} as const satisfies Record<string, SourceEntry>;
