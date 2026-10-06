import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Privacy Policy URL App Store Connect asks for.
 *
 * Written from what the code actually does rather than from a template, and
 * checked against it on 28 September 2026:
 *
 * - Account: Sign in with Apple linked to a Supabase user (`apple-auth.ts`),
 *   a session key in the Keychain (`shared/lib/supabase`), email sign-in for
 *   existing accounts only (`email-auth.ts`). No Skip in onboarding.
 * - Plan sync: `entities/program/model/plan/sync.ts` into the tables in
 *   `0007_plan.sql` and `0008_insights.sql` (profiles, goals, tests, checkins,
 *   week_plans, sessions, session_exercises, exercise_prefs, app_usage). Every
 *   table cascades from `auth.users`, so `delete_account` removes it all.
 * - PostHog: the events in `src/shared/lib/analytics/events.ts`. Session replay
 *   is off (`enableSessionReplay: false`).
 * - Expo: EAS Update, `expo-insights` and `expo-observe` (timings, errors),
 *   the push token for invite notifications.
 * - RevenueCat: its app user id, purchases, `$posthogUserId`, media source.
 * - Superwall (from 1.0.2, build 31): `src/app/providers/superwall.tsx` and
 *   `superwall-personalisation.ts` — RevenueCat app user id, first name, goal and
 *   sport, the first step of the plan, days a week and minutes, the date
 *   of the next progress check, language, platform, paywall events,
 *   subscription status.
 * - HealthKit: `READ_TYPES` in `entities/health/model/health.ts` and
 *   `WRITE_TYPES` in `write-back.ts`. Nothing from HealthKit is synced or sent.
 *
 * Apple's privacy label has to agree with this page. If the app starts sending
 * something new, this page is wrong from the moment that ships, and nothing
 * will fail to build to tell you. The Russian and Spanish pages mirror this one.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Privacy',
  description:
    'What Walkito collects and why. Your plan and check-ins are saved to your account; Apple Health and Health Connect data stay on your phone. No ads and no ad tracking.',
  alternates: alternatesFor('privacy', 'en'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function Privacy() {
  return (
    <>
      <Masthead />

      <Prose className="shell prose">
        <h1>Privacy</h1>

        <p className="updated">Last updated: 6 October 2026</p>

        <h2>The short version</h2>
        <ul>
          <li>You sign in with Apple on iPhone, or with Google on Android, when you set up Walkito.</li>
          <li>
            Your plan, your answers, your pain check-ins, your test results and
            the sessions you finish are saved to your account, so they come back
            on a new phone or after you reinstall the app.
          </li>
          <li>
            <b>Apple Health and Health Connect data stay on your phone and are never uploaded.</b>
          </li>
          <li>
            A few services receive data so the app can work: Supabase (your
            account and plan), PostHog (usage analytics), RevenueCat (purchases),
            Superwall (subscription screens),
            Expo (notifications, app updates, speed and crash reports), Apple
            (sign-in, payments and notifications) Google (sign-in on Android) and Resend (emails).
          </li>
          <li>No ads, no ad tracking, and we never sell your data.</li>
        </ul>

        <h2>Your account</h2>
        <p>
          Setting up Walkito signs you in with Apple. Apple gives us an
          identifier, your name and your email address, or a private relay
          address if you choose to hide yours. The identifier becomes your
          account on our server. Your first name and your email address are stored with your account.
        </p>
        <p>
          On Android, setup signs you in with Google instead. Google, like
          Apple, gives us an identifier and your email address, and they are
          used the same way.
        </p>
        <p>
          If Sign in with Apple is not available on your device, the app uses an
          anonymous account instead. Signing in with an email and password works
          only for accounts we set up ourselves, for example for App Store
          review. There is no sign-up with email.
        </p>
        <p>
          A sign-in key is kept in your iPhone’s Keychain. It survives deleting
          the app, so a reinstall can find your account again. Delete account
          removes it.
        </p>

        <h2>Your email address</h2>
        <p>
          We use your email address to answer you when you contact support, to recognize your account in our own reports, and to send you emails about your plan: reminders, a weekly summary, your test results and, now and then, an offer on Walkito Premium. The emails are written from your own plan and use your first name. Every email has a link to unsubscribe, and you can also write to us. We never share your address with anyone for their own marketing.
        </p>

        <h2>What is saved to your account</h2>
        <p>
          Everything is saved on your phone first. Then, in the background, it is
          copied to your account on our server, so it comes back when you sign
          in on a new phone or after you reinstall the app. That copy holds:
        </p>
        <ul>
          <li>
            <b>Your answers and settings:</b> which foot and where it hurts, your
            foot type, your goal and sport, days a week, session length,
            reminder time, the equipment you do not have, and your start date.
          </li>
          <li>
            <b>Your goals</b> and your progress on each one.
          </li>
          <li>
            <b>Your pain check-ins:</b> every pain score you log, when you logged
            it and where it hurt, and whether you did the morning stretch.
          </li>
          <li>
            <b>Your test results:</b> calf raises, arch hold and balance, left
            and right.
          </li>
          <li>
            <b>Your sessions:</b> each week’s plan, the sessions you finish,
            which exercises you did, skipped or swapped, how the session felt,
            any pain during it, and exercises you marked as ones you cannot do.
          </li>
          <li>
            <b>Your app use:</b> how many times you opened the app each day and
            for how long.
          </li>
        </ul>
        <p>
          We also use this copy to see how the plan is being used and whether
          people reach their goals, so we can improve it.
        </p>

        <h2>What stays on your phone</h2>
        <p>
          The age, sex, weight and shoe size you give during setup,
          your settings for the app’s look and language, the exercise videos you
          have downloaded, and every Apple Health or Health Connect figure. These are kept only in
          the app’s own storage on the device.
        </p>

        <h2>Apple Health</h2>
        <p>
          With your permission, Walkito reads step count, walking speed, walking
          asymmetry, flights climbed, resting heart rate, heart rate, active
          energy, sleep analysis and workouts. It writes the sessions you finish
          back to Apple Health as workouts and mindful minutes.
        </p>
        <p>
          This data is read and summarized on your phone.{' '}
          <b>
            It is never uploaded, never saved to your account, and never used for
            advertising, marketing or data mining.
          </b>{' '}
          We never sell it.
        </p>
        <p>
          You can withdraw any permission at any time in Settings → Apps →
          Health → Data Access &amp; Devices → Walkito. The app keeps working,
          and the parts that relied on that data stop appearing.
        </p>

        <h2>Health Connect (Android)</h2>
        <p>
          On Android, with your permission, Walkito reads steps, floors
          climbed, resting heart rate, heart rate, sleep sessions, exercise
          sessions, distance and active calories burned from Health Connect. It
          writes the sessions you finish back as exercise sessions.
        </p>
        <p>
          We use this data only to adjust your plan: how much you moved, slept
          and ran shapes the day’s session and the hints you see. It is read and
          summarized on your phone.{' '}
          <b>
            Health Connect data is never uploaded, never sold, never shared with
            third parties and never used for advertising.
          </b>{' '}
          Walkito’s use of information received from Health Connect adheres to
          the Health Connect Permissions policy, including the Limited Use
          requirements.
        </p>
        <p>
          You can withdraw any permission at any time in the Health Connect app,
          or in Android Settings → Security &amp; privacy → Privacy → Health
          Connect → App permissions → Walkito. The app keeps working without it.
        </p>

        <h2>What we collect, how and why</h2>

        <h3>Supabase: your account and plan</h3>
        <p>
          <b>What:</b> your account, your email address, everything listed
          under “What is saved to your account”, your notification address (if
          you turned notifications on), your invite code and which account used
          which code. Exercise videos are downloaded from Supabase storage.
        </p>
        <p>
          <b>Why:</b> to run your account, bring your plan back on a new phone,
          answer support requests, make invites work, and deliver the exercise
          videos.
        </p>

        <h3>PostHog: usage analytics</h3>
        <p>
          <b>What:</b> events that say something happened in the app, for
          example that an onboarding step was shown, a session, check-in or test
          was finished and whether the session felt easy, OK or hard, a goal was
          reached, a plan setting was changed (not what to), or the purchase
          screen was opened. Also the screens you visit, and the answers to a
          few onboarding questions: where you heard about Walkito, your goal,
          your sport and how much you run. Your goal, or the name of a goal you
          reached, can hint at your condition. Your device model, iOS and app
          version, language and time zone are attached, and PostHog works out an
          approximate location (country and city) from your IP address. Events
          are linked to a random ID, the same one RevenueCat uses.
        </p>
        <p>
          <b>Never sent:</b> pain scores, pain areas, test results, Apple Health
          readings, age or weight. Nothing on your screen is recorded.
        </p>
        <p>
          <b>Why:</b> to see where people get stuck and to improve the app.
        </p>

        <h3>RevenueCat: purchases</h3>
        <p>
          <b>What:</b> a random ID, your App Store purchase and subscription
          history, the analytics ID above, and where you said you heard about
          Walkito. On iPhone, also whether you installed Walkito from an Apple
          Ads search ad and, if so, which campaign and search term, from
          Apple's AdServices. That needs no tracking permission and uses no
          advertising identifier.
        </p>
        <p>
          <b>Why:</b> to know what you have bought and unlock it, and to see
          which channels lead to purchases.
        </p>

        <h3>Expo: notifications, updates, speed and crashes</h3>
        <p>
          <b>What:</b> how long the app takes to start and to open each screen,
          errors and crash reports, the same events PostHog gets, and your
          device model, iOS and app version, language and a random installation
          ID. App updates are downloaded from Expo. When someone uses your
          invite code, the notification that tells you goes through Expo’s push
          service. Daily reminders are scheduled on your phone and do not go
          through any server.
        </p>
        <p>
          <b>Why:</b> to keep the app fast and working, keep it up to date, and
          deliver invite notifications.
        </p>

        <h3>Superwall: subscription screens</h3>
        <p>
          <b>What:</b> your account ID, your first name, the goal and sport you
          picked when you set up your plan, the first step of your plan, the days
          and minutes you chose, the date of your next progress check, your
          app language, which subscription screens you saw and what you tapped
          on them, and whether you already subscribe. Never your pain, your
          answers about your body, or anything from Apple Health or Health
          Connect.
        </p>
        <p>
          <b>Why:</b> to show the subscription screen, address it to you and
          your plan, and test which version works best. Payments still go
          through Apple and RevenueCat.
        </p>

        <h3>Resend: emails</h3>
        <p>
          <b>What:</b> your email address, your first name and the content of
          each email we send you, which is written from your plan.
        </p>
        <p>
          <b>Why:</b> to deliver those emails and to tell us whether they
          arrived.
        </p>

        <h3>Apple: sign-in, payments and notifications</h3>
        <p>
          Sign in with Apple shares the name and email you choose. Payments are
          handled by Apple, and we never see your card details. Notifications are
          delivered through Apple’s push notification service.
        </p>

        <p>
          Every service above receives your IP address with each request, as
          any server does.
        </p>

        <h2>What we do not do</h2>
        <p>
          No advertising, no ad or attribution SDKs, and no advertising
          identifier. We do not track you across other companies’ apps or
          websites. We do not sell your data, and we do not share anything you
          log for anyone else’s use. The services above process it only to
          provide their service to us.
        </p>

        <h2>How long we keep it</h2>
        <ul>
          <li>
            <b>Your account and everything saved to it:</b> until you delete
            your account.
          </li>
          <li>
            <b>Analytics, speed and crash data:</b> up to 12 months.
          </li>
          <li>
            <b>Purchase records:</b> kept by Apple and RevenueCat as long as
            billing, accounting and tax law require.
          </li>
          <li>
            <b>What is on your phone:</b> until you delete your account or the
            app.
          </li>
        </ul>

        <h2>Deleting your account</h2>
        <p>
          In the app, go to <b>Profile → Delete account</b>. This deletes your
          account on our server with everything saved to it: your answers and
          settings, goals, pain check-ins, test results, sessions, app use,
          email address, notification address and invite code. It then removes
          the sign-in key and clears the phone. It cannot be undone. You can
          also write to {mail} and we will delete it for you.
        </p>
        <p>
          Deleting the app on its own removes only what is on the phone. Your
          account stays on our server and comes back when you sign in again.
        </p>
        <p>
          Delete account does not remove purchase records at RevenueCat,
          analytics at PostHog, or the speed and crash data Expo holds. To have
          those deleted, write to the same address. Workouts and mindful minutes
          Walkito wrote to Apple Health stay there until you delete them in
          Health. Deleting your account does not cancel a subscription. Only
          Apple can do that, in Settings → your name → Subscriptions.
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
            <b>Contract:</b> your account, your saved plan, purchases, invites
            and notifications, which we need to provide the app you asked for.
          </li>
          <li>
            <b>Legitimate interest:</b> analytics and speed and crash data, to
            understand and improve the app. You can object to this.
          </li>
          <li>
            <b>Consent:</b> Apple Health and Health Connect access, which you can
            withdraw at any time in Settings. That data never leaves your phone.
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
      </Prose>

      <Footer page="privacy" />
    </>
  );
}
