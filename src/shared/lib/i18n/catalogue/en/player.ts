/** player strings (count-in, post-session feedback). Filled per domain; see `./core.ts` for the rules. */

import type { SourceEntry } from '../entry';

export const PLAYER_EN = {
  // ── The count-in ──────────────────────────────────────────────────────────
  // Three words over a number the size of the screen, read by somebody getting
  // a foot into position with the phone against a wall. The eyebrow says which
  // kind of start this is: the first move of a sitting, or the one after.
  'player.countIn.getReady': 'Get ready',
  'player.countIn.nextUp': 'Next up',
  // Where the three would be, for the instant between one and the clock.
  'player.countIn.go': 'Go',
  'player.countIn.tapToStart': 'Tap to start now',

  // ── How hard was that ─────────────────────────────────────────────────────
  // Asked once, at the end, and optional. The purpose line is there because an
  // unexplained question reads as a survey; this one changes the next session.
  'player.feedback.question': 'Could you have done 2 more good reps?',
  'player.feedback.purpose': 'Your answer tunes the next sessions.',
  'player.feedback.easy': 'Yes, easily',
  'player.feedback.right': 'About right',
  'player.feedback.hard': 'No',
  'player.feedback.hurt': 'It hurt',
  'player.feedback.adjusts': 'Got it. The plan adjusts.',
  // "Adjusts" would be untrue for the one answer that asks it not to.
  'player.feedback.keeps': 'Got it. The plan keeps this pace.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  // The same scale as the mid-session question, with the outcomes said for a
  // session that is already over: nothing here can end it or carry it on.
  'player.afterPain.lowHint':
    'Noted. A little soreness after this work is normal. If it’s still there tomorrow morning, the check-in eases the plan.',
  'player.afterPain.highHint':
    'That’s more than this work should cause. Your next session starts one step back.',
  'player.afterPain.save': 'Save',
  'player.cantDo.button': 'Can’t do this',
  'player.cantDo.title': 'What’s in the way?',
  'player.cantDo.blurb': 'We’ll swap it now and leave it out of your plan.',
  'player.cantDo.noStep': 'No step',
  'player.cantDo.noBand': 'No band',
  'player.cantDo.noTowel': 'No towel',
  'player.cantDo.noPillow': 'No pillow',
  'player.cantDo.noBall': 'No ball',
  'player.cantDo.hurts': 'It hurts',
  'player.cantDo.swapped': 'Swapped for {name}.',
  'player.cantDo.skipped': 'Nothing fits here today, so this one is skipped.',
  'player.load.backpack': 'Add a backpack with about 5-10% of your body weight. If 12 slow reps feel easy, add a little more.',
  'player.painRule.title': 'How much pain is OK?',
  'player.painRule.body': '0-3 is fine. 4-5 is OK if it settles by next morning. 6 or more - stop.',
  'player.painRule.ok': 'Got it',
  'player.painRule.a11y': 'How much pain is OK',
  'player.tempo.on': 'Tempo sounds on',
  'player.tempo.off': 'Tempo sounds off',

  // ── The player's own chrome ───────────────────────────────────────────────
  // The second line of the centred header title, under "Day 1". Both halves
  // arrive already counted (`session.minutes`, `session.moveCount`).
  'player.header.meta': '{minutes} · {moves}',
  // The chip on the demonstration: which move of the session this is.
  'player.chip.position': '{index} of {total}',
  // The one button under the readout. It is an action in every state: pause
  // the move, pick it up again, or close a session that is over.
  'player.cta.pause': 'Pause',
  'player.cta.resume': 'Resume',
  'player.cta.done': 'Done',
} as const satisfies Record<string, SourceEntry>;
