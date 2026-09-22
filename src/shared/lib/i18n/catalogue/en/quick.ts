/** Quick-tab strings. Filled per domain; see `./core.ts` for the rules. */

import type { SourceEntry } from '../entry';

export const QUICK_EN = {
  // ── The tab itself ────────────────────────────────────────────────────────
  'quick.tab': 'Quick',
  'quick.title': 'Quick',
  'quick.subtitle': 'For when you need it now',
  // The eyebrow over the featured card. Shouted, because it is the one thing
  // on the screen that changes with the hour.
  'quick.featured': 'RIGHT NOW',

  // ── The five ──────────────────────────────────────────────────────────────
  'quick.flare.title': 'Hurts right now',
  'quick.preRun.title': 'Before a run',
  'quick.postRun.title': 'After a run',
  'quick.atWork.title': 'At work',
  'quick.morning.title': 'Before your first step',

  // ── One line each, shown in the player ────────────────────────────────────
  // These set the intent before the first clip. The flare one matters most: it
  // is the only place the app says out loud that this is not training, which is
  // what stops somebody pushing through it.
  'quick.flare.cue': 'Gentle. This is relief, not training.',
  'quick.preRun.cue': 'Wake the foot up. Don’t stretch it long.',
  'quick.postRun.cue': 'Hold each stretch. Don’t bounce.',
  'quick.atWork.cue': 'Nobody will notice. Keep your shoes on.',
  'quick.morning.cue': 'Before your foot touches the floor.',

  // ── Where you will be ─────────────────────────────────────────────────────
  'quick.seated': 'seated',
  'quick.standing': 'standing',
  'quick.inBed': 'in bed',

  // ── Lengths ───────────────────────────────────────────────────────────────
  // Plural because Russian needs it: 1 минута, 2 минуты, 5 минут. English would
  // survive a single template; the catalogue type would not let the other two.
  'quick.minutes': { one: '{count} min', other: '{count} min' },
  'quick.seconds': { one: '{count} s', other: '{count} s' },

  // ── Running one ───────────────────────────────────────────────────────────
  'quick.stepsLabel': 'Moves',
  'quick.positionLabel': 'Position',

  'quick.start': 'Start',
  'quick.switch': 'Switch legs',
  'quick.done.title': 'Done.',
  'quick.done.body': {
    one: '{count} minute for your feet.',
    other: '{count} minutes for your feet.',
  },
  'quick.close': 'Close',

  // ── After the flare protocol ──────────────────────────────────────────────
  'quick.flare.ask': 'How bad is it right now?',
  'quick.flare.skip': 'Not now',

  // ── Locked ────────────────────────────────────────────────────────────────
  'quick.locked': 'Locked',
  'quick.lockedHint': 'Included with the program',
} satisfies Record<string, SourceEntry>;
