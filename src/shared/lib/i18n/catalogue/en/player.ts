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
  'player.feedback.question': 'How hard was that?',
  'player.feedback.purpose': 'Your answer tunes the next sessions.',
  'player.feedback.easy': 'Too easy',
  'player.feedback.right': 'Just right',
  'player.feedback.hard': 'Too hard',
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
} as const satisfies Record<string, SourceEntry>;
