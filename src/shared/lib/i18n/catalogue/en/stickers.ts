/** The sticker album: stickers earned for showing up, never for a number. Filled per domain; see
 * `./core.ts` for the rules.
 *
 * A sticker's name is short enough to sit under it in a grid of three, and
 * says what it is for, so a locked one is a goal rather than a riddle. None
 * names a pause, a pain figure or a result: "Good to see you" is for coming
 * back, and says nothing about where they were. */

import type { SourceEntry } from '../entry';

export const STICKERS_EN = {
  // ── The cover, on Progress ───────────────────────────────────────────────
  /** On the ribbon over the mascot. */
  'stickers.ribbon': 'Stickers',
  /** Written on the mascot's sign: how many are in, of the whole set. */
  'stickers.sign': '{count} / {total}',
  /** The same, said: the cover's accessibility label and the count in the
   * album. `total` is always twenty, which is what the noun agrees with. */
  'stickers.collected': '{count} of {total} stickers',
  'stickers.cardHint': 'Opens your sticker album',

  // ── The album ────────────────────────────────────────────────────────────
  'stickers.albumTitle': 'Your stickers',
  'stickers.albumBlurb':
    'Each one is for showing up: a check-in, a session, a rest day. A hard day counts the same as an easy one.',
  'stickers.earnedA11y': '{name}, collected',
  'stickers.newA11y': '{name}, new',
  'stickers.lockedA11y': '{name}, not yet',

  // ── The stickers' names ──────────────────────────────────────────────────
  'stickers.firstCheckin': 'First check-in',
  /** Any finished session, one stopped early included. */
  'stickers.firstSession': 'First session',
  /** A rest day the plan gave, with a check-in and no training. */
  'stickers.firstRest': 'First rest day',
  /** Whatever the test measured. */
  'stickers.firstTest': 'First test',
  /** Still showing up on the plan's seventh day. */
  'stickers.firstWeek': 'First week',
  /** Back after a few quiet days. Never mentions them. */
  'stickers.comeback': 'Good to see you',
  /** Five sessions begun near their usual time. */
  'stickers.ownTime': 'Your own time',
  /** 3, 7, 10, 30 and 100. */
  'stickers.streak': { one: '{count} day in a row', other: '{count} days in a row' },
  /** 5, 10, 25 and 50: days with a session, one a day at most. */
  'stickers.sessions': { one: '{count} session', other: '{count} sessions' },
  /** 10 and 30 days with a check-in, whatever was answered. */
  'stickers.checkins': { one: '{count} check-in', other: '{count} check-ins' },
  /** 5 rest days kept. */
  'stickers.restDays': { one: '{count} rest day', other: '{count} rest days' },
  /** 30 counted days in all, the streak sheet's "days so far". */
  'stickers.care': { one: '{count} day of care', other: '{count} days of care' },
} as const satisfies Record<string, SourceEntry>;
