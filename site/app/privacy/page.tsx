import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';

/**
 * The Privacy Policy URL App Store Connect asks for.
 *
 * Written from what the code actually does rather than from a template: the
 * HealthKit scopes below are the ones in `READ_TYPES`, the local store is the
 * app's MMKV instance, and the three things that leave the device are the three
 * services it genuinely talks to. Apple's nutrition labels have to agree with
 * this page, and the cheapest way to make that true is to derive both from the
 * same source.
 *
 * Keep it that way. If the app starts sending something new — an analytics SDK,
 * a crash reporter, a server-side copy of the plan — this page is wrong from the
 * moment that ships, and nothing will fail to build to tell you.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito"; repeating it here produced
  // "Privacy — Walkito | Walkito" in the tab and in every search result.
  title: 'Privacy',
  description: 'What Walkito stores, and where.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <>
      <Masthead />

      <main className="shell prose">
        <h1>Privacy</h1>

        <p className="updated">Last updated: 17 September 2026</p>

        <h2>The short version</h2>
        <p>
          Your plan, your pain log and your history live on your phone. They are
          not uploaded, and there is no account to hold them. Three things leave
          the device, all of them optional, and none of them is your health data.
        </p>

        <h2>What stays on the phone</h2>
        <p>
          Everything the plan is built from: the morning pain you log, the
          sessions you finish, the exercises you did, your name, your answers
          from onboarding, and the health figures summarised below. These are
          kept in the app’s own storage on the device and are removed when you
          delete the app.
        </p>

        <h2>Apple Health</h2>
        <p>
          With your permission Walkito reads walking asymmetry, walking speed,
          step count, resting heart rate and sleep analysis, and writes completed
          sessions back as workouts and mindful minutes.
        </p>
        <p>
          These are read on the device and summarised there.{' '}
          <b>Health data is never uploaded and never leaves your phone.</b> You
          can withdraw any of these permissions at any time in iOS Settings →
          Health → Data Access → Walkito; the app keeps working, and the signals
          that relied on the withdrawn type stop appearing.
        </p>

        <h2>What leaves the device</h2>
        <ul>
          <li>
            <b>Purchases.</b> Handled by the App Store through RevenueCat, which
            receives an anonymous identifier and your subscription status. No
            health data is sent.
          </li>
          <li>
            <b>Notification address.</b> If you turn on notifications, the
            device’s push token is stored so an invite you sent can tell you when
            it is used. The reminders themselves are scheduled on the phone and
            need no server.
          </li>
          <li>
            <b>Sign in with Apple and invite codes.</b> Only if you use them.
            Apple supplies an identifier; you choose whether to share an email
            address with it.
          </li>
        </ul>

        <h2>What we do not do</h2>
        <p>
          No advertising, no advertising identifiers, no third-party analytics on
          your health, and nothing about your body is sold or shared. There is no
          profile of you anywhere but on your own phone.
        </p>

        <h2>Children</h2>
        <p>
          Walkito is not directed at children under 13 and we do not knowingly
          collect anything from them.
        </p>

        <h2>Deleting everything</h2>
        <p>
          Deleting the app removes the plan, the pain log and every stored answer
          with it — none of it is held anywhere else. To remove a purchase record
          or a push token, write to{' '}
          <a href="mailto:hello@walkito.app">hello@walkito.app</a> and we will
          delete them.
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
