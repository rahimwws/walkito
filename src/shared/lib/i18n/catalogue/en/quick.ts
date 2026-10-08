/** Quick-tab strings. Filled per domain; see `./core.ts` for the rules. */

import type { SourceEntry } from '../entry';

export const QUICK_EN = {
  // ── The tab itself ────────────────────────────────────────────────────────
  'quick.tab': 'Quick',
  'quick.title': 'Quick',
  'quick.subtitle': 'For when you need it now',
  // The eyebrow over the featured card. Shouted, because it is the one thing
  // on the screen that changes with the hour.
  'quick.featured': 'Right now',

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

  // ── The routine page ──────────────────────────────────────────────────────
  // The kicker over the title in the hero.
  'quick.kicker': 'Routine',
  'quick.whyTitle': 'Why this helps',
  // A short paragraph per routine. What it does and why now, never a promised
  // result and never a diagnosis.
  'quick.flare.why':
    'Three seated moves that ask almost nothing of the sore tissue. Rolling and gentle stretching ease the tension while your weight stays off the foot.',
  'quick.preRun.why':
    'Two minutes that wake up the ankle and the small muscles under the arch, so your foot is ready from the first stride.',
  'quick.postRun.why':
    'Calves and soles tighten after a run. Slow, held stretches while you are still warm help them settle.',
  'quick.atWork.why':
    'Hours on your feet are hard on them. A few quiet moves keep the arch working and the ankle moving, without leaving your spot.',
  'quick.morning.why':
    'The first steps of the day are often the hardest. Stretching the sole before you stand gives it a gentle start.',
  'quick.moves': { one: '{count} move', other: '{count} moves' },
  // One move's line in the list: how long it runs.
  'quick.stepSeconds': { one: '{count} sec', other: '{count} sec' },
  // A move that switches feet halfway, as one line.
  'quick.stepSwitch': {
    one: '{count} sec, switch legs halfway',
    other: '{count} sec, switch legs halfway',
  },
  // The page's one button: what it starts and how long it takes.
  'quick.startMinutes': {
    one: 'Start · {count} min',
    other: 'Start · {count} min',
  },
} satisfies Record<string, SourceEntry>;
