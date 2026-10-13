/**
 * The first week as a deck: the moves the first-week screen plays, one tall
 * card each, in the order they come up.
 *
 * Pure, and kept out of the screen for the reason `journey.ts` gives: which
 * moves appear is decided by the pain and toe answers, and that is the part
 * worth a test. Nothing here reaches `@/entities/program` at runtime either —
 * its index pulls storage in, which `bun test` cannot load — so the dose is
 * read by the screen, and whether the toe work is on comes in as a flag rather
 * than through `toeWorkFrom` (`intake.ts` imports that index).
 */

import { firstWeekMoves } from './journey';

/** When a card's move is done: before the first step of every day, or inside
 * the sessions. Decides the chip and the sentence a screen reader hears. */
export type DeckWhen = 'morning' | 'session';

export type DeckMove = {
  /** Catalogue id. Never sent anywhere: it is chosen from the pain and toe
   * answers, so it describes a body. Analytics get the card's position. */
  id: string;
  when: DeckWhen;
};

/**
 * Always three. A deck whose length followed the answers would make its own
 * length, and every index in `first_week_*`, say something about them.
 */
export const DECK_SIZE = 3;

/** The stretch the morning routine plays (`protocols.ts`, `morning`). */
export const MORNING_MOVE = 'fascia_stretch';

/**
 * The deck for these answers.
 *
 * The morning stretch first, because it is the one thing in the plan that
 * happens every day and the first that happens at all: tomorrow, before the
 * first step. Then the week's two session moves. A big toe that will not lift
 * on its own, or a bunion, puts `big_toe_lift` in the second session slot, as
 * the plan does on its strength days (`buildWeek`, `toeWork`); the deck is
 * the week someone will actually get, not the generic one.
 */
export function firstWeekDeck(
  area: string | null,
  toeWork: boolean,
): readonly [DeckMove, DeckMove, DeckMove] {
  const [first, second] = firstWeekMoves(area);
  return [
    { id: MORNING_MOVE, when: 'morning' },
    { id: first, when: 'session' },
    { id: toeWork ? 'big_toe_lift' : second, when: 'session' },
  ];
}
