import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesFor } from '@/lib/i18n';
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
    'Help with Walkito: notifications, Apple Health, purchases, refunds and deleting your account. Write to us and a person replies.',
  alternates: alternatesFor('support', 'en'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function Support() {
  return (
    <>
      <Masthead />

      <Prose className="shell prose" kicker={{ label: CHROME.en.navSupport, lang: 'en' }}>
        <h1>Support</h1>

        {/* The app's own words, from the Home Screen quick action. Promising a
            person and then answering with a macro is the fastest way to spend
            the goodwill the promise bought. */}
        <p className="updated">Something off? Tell us. A person replies.</p>

        <p>
          Write to {mail}. A person replies, usually within 12 hours. Tell us
          what you were doing and what the app did. That is usually enough to
          work out what happened without a back-and-forth.
        </p>

        <h2>Signing in, and a new phone</h2>
        <p>
          Setup signs you in with Apple and needs a connection once. After that
          the daily flow works offline, and what you log is copied to your
          account whenever there is a connection. On a new phone or after
          reinstalling, sign in with the same Apple ID and your plan, check-ins,
          test results and sessions come back.
        </p>

        <h2>The plan runs on dates, not attendance</h2>
        <p>
          Missing days does not put you behind, and there is nothing to make up.
          The week runs on dates, so a missed session is not moved to tomorrow.
          If you have been away, open the app and carry on from today.
        </p>

        <h2>Notifications</h2>
        <p>
          One a day at most, five a week at most, nothing after 21:30. If you
          stop opening them the app sends fewer, and if you keep not opening them
          it pauses them for a month. You can turn them off entirely in Settings
          → Notifications → Walkito; nothing else in the app changes if you do.
        </p>

        <h2>Health data</h2>
        <p>
          Walkito reads steps, walking speed, walking asymmetry, flights climbed,
          heart rate, resting heart rate, active energy, sleep and workouts from
          Apple Health, and writes the sessions you finish back. Every one of
          those is optional.
        </p>
        <p>
          These readings stay on your phone and are never
          uploaded or saved to your account. Turn any of them off in Settings →
          Apps → Health → Data Access &amp; Devices → Walkito and the parts that
          needed it simply go quiet. The plan still works.
        </p>

        <h2>Pain, and when to stop</h2>
        <p>
          Walkito is an exercise program. It does not diagnose, and it cannot
          tell you what is wrong. If pain is sharp, getting worse, or stopping you
          sleeping, see a clinician.
        </p>

        <h2>Purchases</h2>
        <p>
          Walkito is paid for with a subscription, yearly or weekly, through the
          App Store on iPhone or Google Play on Android. Both renew
          automatically, and the store shows the price in your currency before
          you buy.
        </p>
        <ul>
          <li>
            <b>Manage or cancel</b> on iPhone in Settings → your name →
            Subscriptions. Turn off renewal at least 24 hours before the period
            ends and you are not charged again. On Android, open the Google Play
            app, tap your profile icon, then Payments &amp; subscriptions →
            Subscriptions → Walkito → Cancel subscription. Either way you keep
            access until the end of the period you paid for.
          </li>
          <li>
            <b>Refunds</b> are handled by the store you paid. On iPhone, use
            Apple’s{' '}
            <a href="https://reportaproblem.apple.com">Report a Problem</a> page.
            On Android, request one from your{' '}
            <a href="https://play.google.com/store/account/orderhistory">Google Play order history</a>.
            We cannot process refunds on Apple’s or Google’s behalf.
          </li>
          <li>
            <b>New phone?</b> On iPhone, sign in with the same Apple ID and tap
            Restore Purchases in the app. On Android, use the same Google account
            in Google Play and the subscription comes back. Your plan comes back
            with your account. A subscription bought on iPhone does not carry
            over to Android, or the other way round, because Apple and Google
            bill separately.
          </li>
        </ul>

        <h2>Deleting your account</h2>
        <p>
          In the app, go to <b>Profile → Delete account</b>. That deletes your
          account on our server with everything saved to it (your plan,
          check-ins, test results, sessions, email and invite code) and clears
          the phone. It cannot be undone.
        </p>
        <p>
          Deleting the app on its own removes
          only the copy on the phone: your account stays and comes back when you
          sign in again. You can also write to {mail} and we will delete it for
          you.
        </p>
      </Prose>

      <Footer page="support" />
    </>
  );
}
