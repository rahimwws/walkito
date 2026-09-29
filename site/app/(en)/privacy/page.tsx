import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { formatDate } from '@/lib/schema';
import { PAGE_UPDATED } from '@/lib/site';

/**
 * The Privacy Policy URL App Store Connect asks for.
 *
 * Written from what the code actually does rather than from a template, and
 * every sentence below has a source in the app:
 *
 * - the HealthKit scopes are `READ_TYPES` and `WRITE_TYPES` in
 *   `src/entities/health`, and nothing in that entity talks to a server;
 * - the server copy is `pushPlan` in `src/entities/program/model/plan/sync.ts`
 *   (the tables in `supabase/migrations/0007_plan.sql` and `app_usage` in
 *   `0008`), plus the push token, contact email and invite code;
 * - the account is `signInWithApple` in `src/entities/session` (required on
 *   the onboarding intro screen; email and password as the other way in), and
 *   the refresh token copied to the Keychain in `src/shared/lib/supabase`;
 * - the email is `contact_emails` (0004) and `auth.users.email`, and it is
 *   selected into `insights.users` (0008) next to plan progress;
 * - analytics is `src/shared/lib/analytics` — the events in `events.ts`, no
 *   session replay (`enableSessionReplay: false`), identified as the
 *   RevenueCat app user id. The `goal` answer, `goal_reached` and
 *   `library_routine_completed` values can name a condition, and the page says
 *   so; the device fields are what `posthog-react-native`'s `native-deps`
 *   attaches;
 * - performance metrics are `expo-insights` and `src/shared/lib/observe`, and
 *   crash reports come from `expo-app-metrics`, which `expo-observe` imports and
 *   which installs a global handler for unhandled errors on import;
 * - deletion is `deleteAccount` in `src/entities/session`, which removes the
 *   auth user and lets every table cascade, then signs out (which removes the
 *   Keychain token). It does not reset the PostHog or RevenueCat identifiers.
 *
 * Apple's nutrition labels have to agree with this page, and the cheapest way
 * to make that true is to derive both from the same source.
 *
 * Keep it that way. If the app starts sending something new — another SDK, a
 * crash reporter, a new column in the sync — this page is wrong from the moment
 * that ships, and nothing will fail to build to tell you. Bump
 * `PAGE_UPDATED.privacy` in `lib/site.ts` whenever it changes; the date below
 * and the sitemap both read it.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito"; repeating it here produced
  // "Privacy — Walkito | Walkito" in the tab and in every search result.
  title: 'Privacy',
  description:
    'What Walkito stores and where: Apple Health and Health Connect data stay on your phone; your plan and check-ins are stored under your account on our server. What leaves, how to delete it.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <>
      <Masthead />

      <main className="shell prose">
        <h1>Privacy</h1>

        <p className="updated">
          Last updated:{' '}
          <time dateTime={PAGE_UPDATED.privacy}>{formatDate(PAGE_UPDATED.privacy, 'en')}</time>
        </p>

        <h2>The short version</h2>
        <p>
          Apple Health data is read and summarised on your phone and never
          leaves it. Setting up the app signs you in with Apple (or with an
          email address), and what you enter yourself — the plan, your
          check-ins and pain scores, where it hurts, your sessions and test
          results — is stored on Walkito’s server under that account, so your
          plan can be restored on a reinstall or a new phone. The app also
          sends usage events, which include the goal you chose but no pain
          scores, pain areas, test results or Apple Health readings, along with
          crash reports and measurements of how fast it runs. There is no
          advertising, and nothing is sold.
        </p>

        <h2>What stays on the phone</h2>
        <p>
          Everything the plan is built from is kept first in the app’s own
          storage on the device: the morning pain you log, the sessions you
          finish, the exercises you did, your name, your answers from
          onboarding, and the health figures summarised below. Some of it is
          then copied to our server, as listed under “What leaves the device”.
          Your name, the age, sex, weight and shoe size you give in onboarding,
          and every Apple Health figure stay on the device only. Deleting the
          app removes this storage from the phone. One thing outlives it: a
          sign-in key kept in the iOS Keychain, which survives deleting the app
          so that a reinstall can find your account again.{' '}
          <b>Delete account</b> removes it.
        </p>

        <h2>Apple Health</h2>
        <p>
          With your permission Walkito reads walking asymmetry, walking speed,
          step count, flights climbed, resting heart rate, heart rate, active
          energy, sleep analysis and workouts, and writes completed sessions
          back as workouts and mindful minutes.
        </p>
        <p>
          These are read on the device and summarised there.{' '}
          <b>Apple Health data is never uploaded and never leaves your phone.</b>{' '}
          You can withdraw any of these permissions at any time in Settings →
          Apps → Health → Data Access &amp; Devices → Walkito; the app keeps
          working, and the signals that relied on the withdrawn type stop
          appearing.
        </p>

        <h2>Health Connect (Android)</h2>
        <p>
          On Android, with your permission, Walkito reads steps, floors
          climbed, resting heart rate, heart rate, sleep sessions, exercise
          sessions, distance and active calories burned from Health Connect,
          and writes completed sessions back as exercise sessions.
        </p>
        <p>
          We use this data only to adjust your plan: how much you moved, slept
          and ran shapes the day's session and the hints you see. It is read
          and summarised on the device.{' '}
          <b>Health Connect data is never uploaded, never sold, never shared
          with third parties and never used for advertising.</b> Walkito's use
          of information received from Health Connect adheres to the Health
          Connect Permissions policy, including the Limited Use requirements.
          You can withdraw any permission at any time in the Health Connect
          app or in Android Settings → Security &amp; privacy → Privacy →
          Health Connect → App permissions → Walkito; the app keeps working
          without it.
        </p>

        <h2>What leaves the device</h2>
        <ul>
          <li>
            <b>Your account.</b> Setup signs you in with Apple (on iPhone),
            with Google (on Android), or with an email address and password.
            Google, like Apple, supplies an identifier and your email address. Apple supplies an identifier and the
            email address you choose to share with it — your own or Apple’s
            private relay address. The identifier becomes your account on our
            server, and the email is stored as your account’s address: we use
            it to answer you when you write to support, and we see it alongside
            your plan progress in our internal reports. Your name, if Apple
            shares it, stays on the phone. Until you sign in, the app uses an
            anonymous ID, which is linked to your account when you do; if Sign
            in with Apple is not available on your device and you do not use an
            email address, it stays anonymous.
          </li>
          <li>
            <b>Your plan, stored under your account.</b> Walkito’s server is
            hosted by Supabase. Under your account it stores what you enter:
            your plan settings (days a week, session length, reminder time,
            foot type, missing equipment, start date), the goals you are
            working towards and your progress on them, each week’s plan, which
            foot and where it hurts, your answers about your goal and sport,
            your morning check-ins and every pain reading you log, with its
            time and where it hurt, whether you did the morning stretch, the
            sessions you finish — which exercises you did, skipped or swapped,
            how the session felt and any pain during it — the results of your
            self-tests, the exercises you marked as ones you cannot do and how
            often you skipped each exercise, and how many times the app was
            opened and for how long each day. The plan, check-ins and sessions
            are kept so a reinstall or a new phone can restore them; all of it,
            test results and app time included, is also used to see how the
            plan is being used and whether people reach their goals.
          </li>
          <li>
            <b>Product analytics.</b> Sent to PostHog: which screens you open;
            that you started or finished onboarding; sign-in, paywall and
            purchase steps; that a session, check-in, morning stretch or test
            was completed and whether the session felt easy, OK or hard; which
            goal was reached; which Library routine you finished; which plan
            setting you changed, but not what to; that a sync to our server
            failed; update prompts; and the app being installed, opened,
            updated or sent to the background. PostHog attaches the device
            model and manufacturer, the iOS version, the app version and build,
            your locale, time zone and screen size, and — if you allow
            notifications — the device’s push notification token and whether a
            notification was opened. A few onboarding answers go
            with them: where you heard about Walkito, your goal, your sport and
            how much you run.{' '}
            <b>Some of these can reveal a condition.</b> Your chosen goal is
            sent, and it may be to run pain-free, to fix flat feet or to come
            back after an injury; so are the name of a goal you reached, such as
            pain-free mornings, and of a routine you finished, such as the one
            for when it hurts right now. What is not sent: pain scores, pain
            areas, test results, Apple Health readings, age or weight. Nothing
            on screen is recorded. These events are tied to the same anonymous
            identifier RevenueCat uses.
          </li>
          <li>
            <b>Performance and crashes.</b> Expo, which builds and updates the
            app, receives how long it takes to start and to open each screen,
            crash reports and unhandled errors with their stack traces, and the
            same events PostHog gets, with the device model, iOS version, app
            version, language and a random installation ID. App updates are
            downloaded from Expo too.
          </li>
          <li>
            <b>Purchases.</b> Handled by the App Store through RevenueCat, which
            receives an anonymous identifier, the App Store’s record of your
            Walkito purchases and renewals, your subscription status and your
            answer to where you heard about Walkito. RevenueCat passes purchase
            and renewal events to PostHog under the same identifier. No health
            data is sent.
          </li>
          <li>
            <b>Notification address and invite codes.</b> If you turn on
            notifications, the device’s push token is stored on our server so an
            invite you sent can tell you when it is used; that message is
            delivered through Expo’s push service. Your invite code, and any code
            you redeem, are stored there too. The reminders themselves are
            scheduled on the phone and need no server.
          </li>
        </ul>
        <p>
          Like any server the app connects to, each of these services —
          Supabase, PostHog, Expo and RevenueCat — receives your IP address
          with every request. PostHog may use it to work out roughly where an
          event came from, to the country and city.
        </p>

        <h2>What we do not do</h2>
        <p>
          No advertising, no advertising identifiers, no pain scores, pain
          areas, test results or Apple Health readings in analytics, and
          nothing you log is sold or shared for anyone else’s use. The services above process it on our behalf and for the reasons
          given.
        </p>

        <h2>Children</h2>
        <p>
          Walkito is not directed at children under 13 and we do not knowingly
          collect anything from them.
        </p>

        <h2>Deleting everything</h2>
        <p>
          Deleting the app removes what is on the phone, except the sign-in key
          in the Keychain, and it does not touch your account on our server —
          together those are what let a reinstall bring your plan back. To
          remove everything, use <b>Delete account</b> in Profile: it deletes
          your account on our server with everything stored under it — the
          plan, the check-ins and pain log, the sessions and test results, the
          push token, the email and the invite code — then removes the sign-in
          key and clears the phone. It cannot be undone.
        </p>
        <p>
          Delete account does not remove purchase records at RevenueCat,
          analytics events at PostHog, or the events, timings and crash reports
          Expo holds under your installation ID. To remove those, write to{' '}
          <a href="mailto:hello@walkito.app">hello@walkito.app</a> and we will
          delete them. The analytics identifier on the phone is not reset
          either, so events sent later from the same install are tied to it
          until you delete the app. Workouts and mindful minutes Walkito wrote
          to Apple Health stay in Health until you delete them there.
        </p>

        <h2>Not medical advice</h2>
        <p>
          Walkito is a screening and exercise program. It does not diagnose, it
          does not treat, and it is not a substitute for a clinician.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@walkito.app">hello@walkito.app</a>
        </p>
      </main>

      <Footer />
    </>
  );
}
