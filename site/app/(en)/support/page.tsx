import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';

/**
 * The Support URL App Store Connect asks for.
 *
 * It has to answer real questions rather than point at a form: review rejects a
 * support page with no way to reach a person, and a user who found this from
 * the App Store listing is already having a problem.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito"; repeating it here produced
  // "Support — Walkito | Walkito" in the tab and in every search result.
  title: 'Support',
  // Long enough that Google uses it rather than picking arbitrary text off the
  // page. Forty characters is an invitation for it to write your ad copy.
  description:
    'Get help with Walkito: notifications, Apple Health permissions, subscriptions and refunds, and how to delete your data. Write to us and a person replies.',
  alternates: { canonical: '/support' },
};

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
          Write to <a href="mailto:hello@walkito.app">hello@walkito.app</a>. Tell
          us what you were doing and what the app did — that is usually enough
          to work out what happened without a back-and-forth.
        </p>

        <h2>The plan runs on dates, not attendance</h2>
        <p>
          Missing days does not put you behind, and there is nothing to make up.
          The week runs on dates, so a missed session is not moved to tomorrow
          and there is no catch-up screen. If you have been away, open the app
          and carry on from today.
        </p>

        <h2>Signing in and working offline</h2>
        <p>
          Setup signs you in with Apple, or with email and password for an
          existing account, and needs a connection once. After that the daily
          flow works offline, and what you log is copied to your Walkito account
          whenever there is a connection. On a new phone or after a reinstall,
          sign in with the same account and your plan comes back.
        </p>

        <h2>Notifications</h2>
        <p>
          One a day at most, five a week at most, nothing after 21:30. If you
          stop opening them the app sends fewer, and if you keep not opening them
          it stops. You can turn them off entirely in Settings → Notifications →
          Walkito; nothing else in the app changes if you do.
        </p>

        <h2>Health data</h2>
        <p>
          Walkito reads steps, walking speed, walking asymmetry, flights
          climbed, heart rate and resting heart rate, active energy, sleep and
          workouts from Apple Health, and writes completed sessions back as
          workouts and mindful minutes. These readings stay on the phone. Every
          one of them is optional. Turn any of them off in Settings → Apps →
          Health → Data Access &amp; Devices → Walkito and the signals that
          needed it simply stop speaking — the plan still works.
        </p>

        <h2>Pain, and when to stop</h2>
        <p>
          Walkito is an exercise program. It is not a diagnosis and not a
          treatment, and it cannot tell you what is wrong. If pain is
          sharp, getting worse, or stopping you sleeping, see a clinician.
        </p>

        <h2>Subscriptions</h2>
        <p>
          Purchases are handled by the App Store. To cancel or request a refund,
          use iOS Settings → your name → Subscriptions, or Apple’s{' '}
          <a href="https://reportaproblem.apple.com">Report a Problem</a> page —
          we cannot process refunds on Apple’s behalf.
        </p>

        <h2>Deleting your data</h2>
        <p>
          <b>Delete account</b>, at the bottom of your profile in the app,
          deletes your account on Walkito’s server with everything copied there
          — the plan, check-ins and pain log, sessions and test results, push
          token, email and invite code — and then clears the phone. It cannot be
          undone. Deleting the app on its own removes only the copy on the
          phone: the copy on the server stays, and comes back when you sign in
          again. To have it removed without the app, or to remove purchase
          records at RevenueCat and analytics events at PostHog as well, write
          to <a href="mailto:hello@walkito.app">hello@walkito.app</a>.
        </p>
      </main>

      <Footer />
    </>
  );
}
