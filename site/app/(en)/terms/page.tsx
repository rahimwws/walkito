import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Terms of Use App Store Connect asks for alongside the privacy policy.
 *
 * Written from what the app and the store actually do, the same way the privacy
 * page was: billing is Apple's (`PRODUCTS` in `entities/purchase`), the plan is
 * saved to the account the user signs in with and restored from it, the health
 * scopes are the ones in `READ_TYPES`. Nothing here describes a mechanism that does not exist.
 *
 * Payments name today's two subscriptions, yearly and weekly, and put every
 * rule under subscriptions in general, so a new period or a free trial can be
 * added without a rewrite. Earlier versions also listed a pass paid for once
 * and a monthly subscription. Both were withdrawn in October 2026 and must not
 * come back here. The Russian and Spanish pages mirror this one.
 *
 * Invites promise only a discount. The code's owner used to be promised free
 * weeks, which only ever lengthened the one-time pass: an App Store
 * subscription cannot be lengthened from the device, so a subscriber would have
 * been promised time that never arrived. Do not promise free time again until
 * a server-side grant delivers it. The app's gift sheet says the same.
 *
 * Two clauses a template would have supplied are deliberately absent.
 *
 * **Governing law and venue.** These need a real jurisdiction, and nobody has
 * said which one. A named country picked to fill the gap is not a neutral
 * placeholder — it decides which consumer-protection regime applies and where a
 * dispute would be heard, and being wrong about that is worse than being
 * silent. Add it when the company's seat is known.
 *
 * **Prices.** The app's own `PRODUCTS` map, the RevenueCat log and the tier
 * table handed over all describe different products. Printing any of them would
 * put a number on a legal page that the store would contradict at checkout, so
 * this page points at the store instead, which is where the authoritative price
 * is shown anyway.
 *
 * This is still a legal document and has not been through legal review.
 */
export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms for using Walkito: what the app is and is not, your account, subscriptions, invites, health and safety.',
  alternates: alternatesFor('terms', 'en'),
  openGraph: {
    locale: 'en_US',
    title: `Terms of Use | ${SITE_NAME}`,
    description: 'What the app is, how payments work, and the limits of what it claims.',
    url: '/terms',
    images: ['/share/en.jpg'],
    type: 'website',
  },
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Terms of Use', item: `${SITE_URL}/terms/` },
  ],
};

export default function Terms() {
  return (
    <>
      <JsonLd data={BREADCRUMBS} />
      <Masthead />

      <Prose className="shell prose">
        <h1>Terms of use</h1>

        <p className="updated">Last updated: 9 October 2026</p>

        <p className="lede">
          These terms cover your use of the Walkito app, which is run by Walkito
          (“we”). Using the app means you accept them. If you do not, stop using
          it and delete your account in Profile → Delete account.
        </p>

        <h2>What Walkito is</h2>
        <p>
          Walkito is an exercise program for heel and foot pain. It builds your
          plan one week at a time around goals you can measure, with sessions of
          3, 5 or 10 minutes, adjusts each day from what you log, and measures
          your progress with physical tests every 14 days, then every 28 once
          your first goal is reached.
        </p>
        <p>
          <b>It is not a medical device, a diagnosis or a treatment.</b> It
          cannot tell you what is wrong with your foot, and nothing in it is a
          substitute for advice from a clinician who has examined you.
        </p>

        <h2>Health and safety</h2>
        <p>
          Exercise carries risk, and you take that risk on yourself. You are
          responsible for deciding whether any session is right for you on any
          given day, and for stopping when something hurts in a way the app has
          no way of knowing about.
        </p>
        <p className="notice">
          See a clinician before starting, and stop and seek advice, if your pain
          followed an injury or fall, comes with numbness, tingling, burning,
          swelling or warmth, wakes you at night, or if one arch has flattened
          suddenly as an adult.
        </p>

        <h2>Who can use it</h2>
        <p>
          You need to be 13 or older. If you are under 18, use Walkito with a
          parent or guardian who has read these terms.
        </p>

        <h2>Your account</h2>
        <p>
          You sign in with Apple when you set up Walkito, and that account is
          where your plan is saved. Signing in with an email and password works
          only for accounts we set up ourselves; there is no sign-up with email.
          Keep your phone and your Apple ID secure, because anyone using them can
          use your account.
        </p>
        <p>
          Your plan, answers, check-ins, test results and sessions are saved on
          your phone and copied to your account. Sign in with the same account on
          a new phone or after reinstalling and they come back. Purchases come
          back with Restore Purchases on the same Apple ID on iPhone, or with the
          same Google account in Google Play on Android.
        </p>

        <h2>Your license</h2>
        <p>
          You get a personal, non-exclusive, non-transferable license to use
          Walkito on devices you own or control, for your own non-commercial use.
          You may not resell access, redistribute the program, reverse-engineer
          the app, or use its content to build a competing product.
        </p>
        <p>
          The program, the exercise catalog, the copy and the software are
          ours. Everything you log (your pain entries, your sessions, your
          history) is yours. It is saved on your device and copied to your
          account so it can be restored.
        </p>

        <h2>Payments</h2>
        <p>
          Walkito is paid for through the App Store on iPhone, run by Apple, or
          Google Play on Android, run by Google LLC. The store takes the payment,
          holds the receipt, and shows the options, the price and the term before
          you buy. That price is the one that applies, not any figure quoted
          elsewhere. Today there are two subscriptions, and both renew
          automatically:
        </p>
        <ul>
          <li>
            <b>A yearly subscription</b>, charged once a year.
          </li>
          <li>
            <b>A weekly subscription</b>, charged once a week.
          </li>
        </ul>

        <h3>Subscriptions</h3>
        <ul>
          <li>
            A subscription renews automatically at the end of each period, and
            your Apple ID or Google account is charged, unless you turn off renewal at least 24
            hours before the period ends.
          </li>
          <li>
            Manage or cancel it on iPhone in{' '}
            <b>Settings → your name → Subscriptions</b>, or on Android in the
            Google Play app under{' '}
            <b>
              profile icon → Payments &amp; subscriptions → Subscriptions →
              Walkito → Cancel subscription
            </b>
            . Canceling stops the next renewal; you keep access until the end of
            the period you have paid for.
          </li>
          <li>
            If a free trial or introductory price is offered, it turns into the
            standard price when it ends, unless you cancel at least 24 hours
            before it ends.
          </li>
          <li>
            Deleting the app or your account does not cancel a subscription. Only
            the store can do that, Apple or Google, from the screens above.
          </li>
        </ul>

        <h3>Refunds</h3>
        <p>
          Refunds are handled only by the store you paid, under its own policy.
          For the App Store, use{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          For Google Play, request one from your{' '}
          <a href="https://play.google.com/store/account/orderhistory">Google Play order history</a>.
          We cannot issue or reverse a charge on Apple’s or Google’s behalf.
        </p>

        <h2>Invites</h2>
        <p>
          You can share your invite code. A friend who uses it gets a discount on
          the yearly subscription. Once someone has used your code, the same
          discount is open to you if you subscribe to the yearly plan later.
          Sharing a code does not give you free time or any other reward.
        </p>
        <p>
          Each person can use one code, once, and not their own. Invite
          discounts have no cash value.
        </p>
        <p>
          We can change or end the invite program at any time. A discount you
          have already subscribed at stays yours.
        </p>

        <h2>Apple Health</h2>
        <p>
          If you allow it, Walkito reads step count, walking speed, walking
          asymmetry, flights climbed, resting heart rate, heart rate, active
          energy, sleep analysis and workouts, and writes the sessions you finish
          back as workouts and mindful minutes. Every permission is optional and
          can be withdrawn at any time in Settings. Apple Health data stays on
          your phone and is never uploaded or saved to your account. See the{' '}
          <a href="/privacy/">privacy page</a> for what does leave it.
        </p>

        <h2>Changes</h2>
        <p>
          The program and the app will change: exercises get revised, the plan
          gets tuned, features come and go. We may also change these terms. When
          a change is material we will say so in the app or by updating the date
          at the top of this page, and continuing to use Walkito after that means
          you accept the new version.
        </p>

        <h2>Ending it</h2>
        <p>
          You can stop at any time by deleting your account in Profile → Delete
          account, which removes what you logged from the phone and from our
          server, and cancel any subscription through Apple or Google as above. Deleting
          the app on its own removes only the copy on the phone. We may
          suspend access if the app is being used in a way these terms forbid. In
          practice that means resale or tampering, not anything you could do by
          using it normally.
        </p>

        <h2>What we do not promise</h2>
        <p>
          Walkito is provided as it is. We do not promise that following the
          program will reduce your pain, change your arch, or produce any
          particular result. The <a href="/science/">evidence page</a> sets out
          what the research it follows found, including where that evidence
          stops.
        </p>
        <p>
          We do not promise the app will be uninterrupted or error-free, and we
          are not liable for indirect or consequential loss, or for injury
          arising from exercise you chose to do. Nothing here limits rights you
          have under consumer law that cannot be limited by agreement.
        </p>

        <h2>Contact</h2>
        <p>
          Walkito
          <br />
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </Prose>

      <Footer page="terms" />
    </>
  );
}
