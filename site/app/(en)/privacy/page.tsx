import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Privacy Policy URL App Store Connect asks for.
 *
 * Written from what the code actually does rather than from a template, and
 * checked against it on 27 September 2026:
 *
 * - PostHog: the events in `src/shared/lib/analytics/events.ts`, screen paths,
 *   lifecycle events, and session replay with pain and Health screens masked
 *   (`ReplayMask`). US cloud.
 * - Supabase: the anonymous user, `contact_emails`, `push_tokens`, the referral
 *   tables, `delete_account`, and the public `exercise-clips` bucket.
 * - RevenueCat: its app user id, purchases, `$posthogUserId`, media source.
 * - Expo: the push token (invite pushes go through Expo's push service) and
 *   EAS Update.
 * - HealthKit: `READ_TYPES` in `entities/health/model/health.ts` and
 *   `WRITE_TYPES` in `write-back.ts`. Nothing from HealthKit is sent anywhere.
 *
 * Apple's privacy label has to agree with this page. If the app starts sending
 * something new, this page is wrong from the moment that ships, and nothing
 * will fail to build to tell you. The Russian and Spanish pages mirror this one.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Privacy',
  description:
    'What Walkito collects, where it goes and why. Your plan, pain log and Apple Health data stay on your phone. No ads and no ad tracking.',
  alternates: alternatesFor('privacy', 'en'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function Privacy() {
  return (
    <>
      <Masthead />

      <main className="shell prose">
        <h1>Privacy</h1>

        <p className="updated">Last updated: 27 September 2026</p>

        <h2>The short version</h2>
        <ul>
          <li>
            Walkito creates an account for you the first time you open it. You do
            not have to register.
          </li>
          <li>
            Your plan, your pain log and your Apple Health data stay on your
            phone. <b>Apple Health data is never uploaded as data.</b>
          </li>
          <li>
            A few services receive a small amount of data so the app can work:
            PostHog (usage analytics and session recordings), Supabase (your
            account), RevenueCat (purchases), Expo (notifications and app
            updates) and Apple (sign-in, payments and notifications). We never
            send your pain log or Apple Health data to any service as data.
          </li>
          <li>No ads, no ad tracking, and we never sell your data.</li>
        </ul>

        <h2>Your account</h2>
        <p>
          The first time you open Walkito, the app creates an account on our
          server with a random ID. Nobody has to register. The account holds your
          invite code and, if you give them to us, your email address and your
          notification address.
        </p>
        <p>
          If you use Sign in with Apple, Apple shares your name and your email
          address, or a private relay address if you choose to hide yours. Your
          name stays on your phone. Your email address is stored with your
          account. Signing in with an email and password works only for accounts
          we set up ourselves, for example for App Store review. There is no
          sign-up with email.
        </p>
        <p>
          Your plan and your progress are stored on your phone and are not copied
          to our server, so they do not move to a new phone. Purchases do: tap
          Restore Purchases in the app with the same Apple ID.
        </p>

        <h2>Your email address</h2>
        <p>
          The email we store is the one you share through Sign in with Apple, or
          the one you sign in with. We use it only for sign-in and to answer you
          when you contact support. We never send marketing emails, and we never
          share your address for marketing.
        </p>

        <h2>What stays on your phone</h2>
        <p>
          Everything the plan is built from: your morning check-ins and the pain
          map, the sessions you finish, your retest results, your streak, your
          name, your onboarding answers (including age, weight and shoe size),
          the Apple Health summaries described below, your settings and the
          exercise videos you have downloaded. These are kept in the app’s own
          storage on the device. They are removed when you delete your account in
          the app, or when you delete the app.
        </p>

        <h2>Apple Health</h2>
        <p>
          With your permission, Walkito reads step count, walking speed, walking
          asymmetry, flights climbed, resting heart rate, heart rate, active
          energy, sleep analysis and workouts. It writes the sessions you finish
          back to Apple Health as workouts and mindful minutes.
        </p>
        <p>
          This data is read and summarised on your phone.{' '}
          <b>
            It is never uploaded as data, and never used for advertising,
            marketing or data mining.
          </b>{' '}
          We never sell it.
        </p>
        <p>
          You can withdraw any permission at any time in iOS Settings → Health →
          Data Access &amp; Devices → Walkito. The app keeps working, and the
          parts that relied on that data stop appearing.
        </p>

        <h2>What we collect, how and why</h2>

        <h3>PostHog: analytics and session recordings</h3>
        <p>
          <b>What:</b> events that say something happened in the app, for
          example that an onboarding step was shown, a session was started or
          finished, a morning check-in was logged (never what you reported), or
          the purchase screen was opened. Also the screens you visit, the answers
          to a few onboarding questions that say nothing about your body (where
          you heard about Walkito, your goal, your sport and how often you run),
          your device model, iOS version, app version, language and time zone,
          and an approximate location (country and city) that PostHog works out
          from your IP address. Events are linked to a random ID, the same one
          RevenueCat uses, so a purchase can be matched to the app use that led
          to it.
        </p>
        <p>
          <b>Why:</b> to see where people get stuck and to improve the app.
        </p>

        {/* Worded to be true for build 23 (in review, no masking) and for the
            next build (pain and Health screens masked with `ReplayMask`).
            When the masked build is live, we can add: "Screens showing pain or
            Apple Health data are hidden from recordings." The RU and ES pages
            carry the same sentence. */}
        <p>
          <b>Session recordings:</b> to find bugs and improve the app, PostHog
          records how screens are used. Anything you type is hidden, and
          recordings are kept for up to 12 months.
        </p>

        <h3>Supabase: your account</h3>
        <p>
          <b>What:</b> the random account ID, your email address (if you shared
          one), your notification address (if you turned notifications on), your
          invite code, and which account used which code. Exercise videos are
          downloaded from Supabase storage, which records ordinary request
          details such as your IP address.
        </p>
        <p>
          <b>Why:</b> to run your account, answer support requests, make invites
          work, tell you when someone uses your code, and deliver the exercise
          videos.
        </p>

        <h3>RevenueCat: purchases</h3>
        <p>
          <b>What:</b> a random ID, your App Store purchase and subscription
          history, the analytics ID above, and where you said you heard about
          Walkito.
        </p>
        <p>
          <b>Why:</b> to know what you have bought and unlock it, and to see
          which channels lead to purchases.
        </p>

        <h3>Expo: notifications and app updates</h3>
        <p>
          <b>What:</b> your notification address and, when someone uses your
          invite code, the text of the notification that tells you. Daily
          reminders are scheduled on your phone and do not go through any
          server. The app also checks Expo’s update service for new versions,
          which sends your app version and platform.
        </p>
        <p>
          <b>Why:</b> to deliver invite notifications and keep the app up to
          date.
        </p>

        <h3>Apple: sign-in, payments and notifications</h3>
        <p>
          Sign in with Apple shares the name and email you choose. Payments are
          handled by Apple, and we never see your card details. Notifications are
          delivered through Apple’s push notification service.
        </p>

        <h2>What we do not do</h2>
        <p>
          No advertising, no ad or attribution SDKs, and no advertising
          identifier. We do not track you across other companies’ apps or
          websites. We do not sell your data, and we never send your pain log or
          Apple Health data to anyone as data. The services above may use the data only to
          provide their service to us.
        </p>

        <h2>How long we keep it</h2>
        <ul>
          <li>
            <b>Account and email:</b> until you delete your account.
          </li>
          <li>
            <b>Analytics and session recordings:</b> up to 12 months.
          </li>
          <li>
            <b>Purchase records:</b> kept by Apple and RevenueCat as long as
            billing, accounting and tax law require.
          </li>
          <li>
            <b>Everything on your phone:</b> until you delete your account or the
            app.
          </li>
        </ul>

        <h2>Deleting your account</h2>
        <p>
          In the app, go to <b>Profile → Delete account</b>. This removes your
          account, email address, notification address, invite code and invite
          records from our server, and clears everything Walkito stored on your
          phone. You can also write to {mail} and we will delete it for you. To
          have your analytics or purchase records deleted sooner, write to the
          same address.
        </p>
        <p>
          Deleting your account does not cancel a subscription. Only Apple can
          do that, in iOS Settings → your name → Subscriptions.
        </p>

        <h2>Children</h2>
        <p>
          Walkito is not for children under 13, and we do not knowingly collect
          data from them. If you believe a child under 13 has used the app, write
          to {mail} and we will delete their data.
        </p>

        <h2>Your rights</h2>
        <p>
          If you are in the EU or the UK, data protection law gives you rights
          over your personal data. We rely on these legal bases:
        </p>
        <ul>
          <li>
            <b>Contract:</b> your account, purchases, invites and notifications,
            which we need to provide the app you asked for.
          </li>
          <li>
            <b>Legitimate interest:</b> analytics and session recordings, to
            understand and improve the app. You can object to this.
          </li>
          <li>
            <b>Consent:</b> Apple Health access, which you can withdraw at any
            time in iOS Settings. That data never leaves your phone.
          </li>
        </ul>
        <p>
          You can ask to access, correct, delete or receive a copy of your data,
          and you can object to or ask us to restrict how we use it. Write to{' '}
          {mail}. You can also complain to your local data protection authority.
          Some of the services above process data outside your country,
          including in the United States, under their own safeguards for
          international transfers.
        </p>

        <h2>Not medical advice</h2>
        <p>
          Walkito is an exercise program for heel and foot pain. It does not
          diagnose any condition and it is not a substitute for a clinician.
        </p>

        <h2>Changes</h2>
        <p>
          If what we collect changes, we update this page and the date at the
          top.
        </p>

        <h2>Contact</h2>
        <p>
          Walkito
          <br />
          {mail}
        </p>
      </main>

      <Footer page="privacy" />
    </>
  );
}
