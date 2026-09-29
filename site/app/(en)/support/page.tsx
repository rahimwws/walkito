import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Support URL App Store Connect asks for.
 *
 * It has to answer real questions rather than point at a form: review rejects a
 * support page with no way to reach a person, and a user who found this from
 * the App Store listing is already having a problem.
 *
 * The notification limits are `MAX_PER_DAY`, `MAX_PER_WEEK`,
 * `QUIET_FROM_MINUTES` and the pause in `entities/notifications/model/limits.ts`.
 * The Russian and Spanish pages mirror this one.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Support',
  // Long enough that Google uses it rather than picking arbitrary text off the
  // page. Forty characters is an invitation for it to write your ad copy.
  description:
    'Get help with Walkito: notifications, Apple Health permissions, subscriptions and the 12-week program, refunds, and how to delete your account. Write to us and a person replies.',
  alternates: alternatesFor('support', 'en'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function Support() {
  return (
    <>
      <Masthead />

      <main className="shell prose">
        <h1>Support</h1>

        {/* The app's own words, from the Home Screen quick action. Promising a
            person and then answering with a macro is the fastest way to spend
            the goodwill the promise bought. */}
        <p className="updated">Something off? Tell us. A person replies.</p>

        <p>
          Write to {mail}. A person replies, usually within 12 hours. Tell us
          which day of the plan you are on and what the app did. That is usually
          enough to work out what happened without a back-and-forth.
        </p>

        <h2>The plan runs on dates, not attendance</h2>
        <p>
          Missing days does not put you behind, and there is nothing to make up.
          Day 24 is whatever day 24 is, whether or not you were here for day 23.
          If you have been away, open the app and carry on from today.
        </p>

        <h2>Notifications</h2>
        <p>
          One a day at most, five a week at most, nothing after 21:30. If you
          stop opening them the app sends fewer, and if you keep not opening them
          it pauses them for a month. You can turn them off entirely in iOS
          Settings → Walkito → Notifications; nothing else in the app changes if
          you do.
        </p>

        <h2>Health data</h2>
        <p>
          Walkito reads steps, walking speed, walking asymmetry, flights climbed,
          heart rate, resting heart rate, active energy, sleep and workouts from
          Apple Health, and writes the sessions you finish back. Every one of
          those is optional, and it’s processed on your phone and never uploaded
          as data. Turn any of them
          off in iOS Settings → Health → Data Access &amp; Devices → Walkito and
          the parts that needed it simply go quiet. The plan still works.
        </p>

        <h2>Pain, and when to stop</h2>
        <p>
          Walkito is an exercise program. It does not diagnose, and it cannot
          tell you what is wrong. If pain is sharp, getting worse, or stopping you
          sleeping, see a clinician.
        </p>

        <h2>Purchases</h2>
        <p>
          There are two ways to pay, both through the App Store: a monthly
          subscription that renews automatically, and the 12-week program, paid
          once, which does not renew.
        </p>
        <ul>
          <li>
            <b>Manage or cancel</b> a subscription in iOS Settings → your name →
            Subscriptions. The 12-week program has nothing to cancel.
          </li>
          <li>
            <b>Refunds</b> are handled by Apple. Use Apple’s{' '}
            <a href="https://reportaproblem.apple.com">Report a Problem</a> page.
            We cannot process refunds on Apple’s behalf.
          </li>
          <li>
            <b>New phone?</b> Tap Restore Purchases in the app with the same
            Apple ID. Your plan’s progress is stored on the old phone and does
            not move over.
          </li>
        </ul>

        <h2>Deleting your account</h2>
        <p>
          In the app, go to <b>Profile → Delete account</b>. That removes your
          account from our server and clears everything Walkito stored on your
          phone. Deleting the app alone does not remove your account. You can
          also write to {mail} and we will delete it for you.
        </p>
      </main>

      <Footer page="support" />
    </>
  );
}
