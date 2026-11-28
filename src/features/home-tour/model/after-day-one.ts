import { sessions } from '@/entities/program';
import { askForPlans, lookingAround } from '@/entities/purchase';
import { homeTourState } from '@/entities/session';

import { takeAfterDayOne } from './after-day-one-rule';

/** Long enough for the session's page sheet to finish sliding away: iOS does
 * not present a modal while another is still leaving. */
const AFTER_SESSION_MS = 900;

/** The plans once more, over Home, headed "Day 1 done", when it is due
 * (`after-day-one-rule.ts`). The same plans at the same prices. */
export function offerAfterDayOne(): boolean {
  return takeAfterDayOne(
    { looking: lookingAround(), dayOneDone: sessions().length > 0, tourDone: homeTourState() === 'done' },
    () => askForPlans('after_day1'),
  );
}

/** After Day 1's session, once its sheet has gone: for a Day 1 done from
 * Home after the tour (its "Later" path). Inside the tour, its end raises it. */
export function offerAfterDayOneSoon(): void {
  setTimeout(offerAfterDayOne, AFTER_SESSION_MS);
}
