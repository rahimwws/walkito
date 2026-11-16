import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import {
  cancelDayOneReminders,
  holdPlanNudgesWhile,
  onDayOneTap,
  refresh,
  scheduleDayOneReminders,
  takeDayOneTap,
  wakeMinutes,
} from '@/entities/notifications';
import { firstName, useProfileName } from '@/entities/profile';
import { planSettings, sessions } from '@/entities/program';
import { accessLapsed, purchases } from '@/entities/purchase';
import { onboardingDone } from '@/entities/session';
import { offerFirstSessionAgain } from '@/pages/offer';
import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

/** Set once the reminder has been laid on this phone, so the event that says
 * so is sent once per person and not at every leaving. */
const TRACKED_KEY = 'notifications/day-one-tracked';

/** Day 1 is still ahead: no session on record, the two free minutes included
 * (`finishDayOne` files them as the plan's first). */
const dayOneAhead = () => sessions().length === 0;

/** Who the Day 1 reminder speaks to: past the onboarding, nothing bought (and
 * nothing that ran out), Day 1 not done. Read as it is needed, never cached. */
const dayOneOwed = () => onboardingDone() && !purchases.entitled() && !accessLapsed() && dayOneAhead();

// For exactly them the plan's own nudges are held: a "session" reminder that
// opens on a price is what the Day 1 reminder is there instead of, and with
// the window laid as well the two would be seven.
holdPlanNudgesWhile(dayOneOwed);

function opened(reminder: 1 | 2): void {
  track('day_one_reminder_opened', { reminder });
  // On the paywall after "Not now" to the first session: the two minutes
  // again, in front of the plans. After "Not now" on the paywall the tabs are
  // open and Home's "Day 1" card is already what she lands on.
  if (dayOneAhead()) offerFirstSessionAgain();
}

/** The tap that launched the app is read once, as the root first renders and
 * before the first screen decides what to show: Day 1 has to be what opens,
 * not the plans and then Day 1. */
let launchRead = false;

/**
 * The Day 1 reminder, for somebody who finished the onboarding, met the
 * paywall and left without buying and without the two free minutes
 * (`entities/notifications`, `day-one.ts`: two at most, ever, the morning
 * after and two days on).
 *
 * Laid as the app goes to the background, with what is still owed, and taken
 * back the moment the app is in front again, so nobody looking at it has one
 * waiting. Closed for good by a purchase or by Day 1 itself. Never asks for
 * permission: without it, or with offers turned off in Settings, nothing is
 * laid.
 *
 * At the root because both places she can leave from are under it: the
 * `offer` route (the first-session invitation and the plans) and, after "Not
 * now", Home with its "Day 1" card.
 */
export function useDayOneReminder(onboarded: boolean, entitled: boolean, lapsed: boolean): void {
  const name = firstName(useProfileName());

  if (!launchRead) {
    launchRead = true;
    const reminder = takeDayOneTap();
    if (reminder != null) opened(reminder);
  }
  useEffect(() => onDayOneTap(opened), []);

  const past = onboarded && !entitled && !lapsed;
  const wasPast = useRef(false);
  useEffect(() => {
    if (!past) {
      // Bought: nothing is owed any more. Still in the onboarding, or access
      // that ended: nothing of this was ever laid, and this clears nothing.
      void cancelDayOneReminders({ forGood: entitled });
      // Bought in this run of the app: the plan's own reminders, held until
      // now, are laid at once rather than at the next open.
      if (wasPast.current && entitled) void refresh();
      wasPast.current = false;
      return undefined;
    }
    wasPast.current = true;
    if (AppState.currentState !== 'background') void cancelDayOneReminders({ forGood: !dayOneAhead() });
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        void cancelDayOneReminders({ forGood: !dayOneAhead() });
        return;
      }
      if (state !== 'background') return;
      if (!dayOneAhead()) {
        void cancelDayOneReminders({ forGood: true });
        return;
      }
      const minutes = planSettings().reminderMinutes ?? wakeMinutes();
      void scheduleDayOneReminders({ minutes, name }).then((reminders) => {
        if (reminders === 0 || kv.getBoolean(TRACKED_KEY) === true) return;
        kv.set(TRACKED_KEY, true);
        track('day_one_reminder_scheduled', { reminders });
      });
    });
    return () => subscription.remove();
  }, [past, entitled, name]);
}
