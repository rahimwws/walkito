import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Terms of Use App Store Connect asks for alongside the privacy policy.
 *
 * Written from what the app and the store actually do, the same way the privacy
 * page was: billing is Apple's, the plan is local, the health scopes are the
 * ones in `READ_TYPES`. Nothing here describes a mechanism that does not exist.
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
    'The terms for using Walkito: what the app is and is not, how subscriptions and cancellations work through the App Store, health and safety, and the limits of what it claims.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: `Terms of Use | ${SITE_NAME}`,
    description: 'What the app is, how billing works, and the limits of what it claims.',
    url: '/terms',
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

      <main className="shell prose">
        <h1>Terms of use</h1>

        <p className="updated">Last updated: 21 September 2026</p>

        <p className="lede">
          These terms cover your use of the Walkito app. Using the app means you
          accept them. If you do not, delete the app — there is no account to
          close, because there was never one to open.
        </p>

        <h2>What Walkito is</h2>
        <p>
          Walkito is a screening and exercise program for heel and foot pain in
          runners. It gives you a daily plan, adjusts that plan from what you
          log, and measures your progress with physical tests.
        </p>
        <p>
          <b>It is not a medical device, a diagnosis, or a treatment.</b> It
          cannot tell you what is wrong with your foot, and nothing in it is a
          substitute for advice from a clinician who has examined you.
        </p>

        <h2>Health and safety</h2>
        <p>
          Exercise carries risk, and you take that risk on yourself. You are
          responsible for deciding whether any session is appropriate for you on
          any given day, and for stopping when something hurts in a way the app
          has no way of knowing about.
        </p>
        <p className="notice">
          See a clinician before starting, and stop and seek advice, if your pain
          followed an injury or fall, comes with numbness, tingling, burning,
          swelling or warmth, wakes you at night, or if one arch has flattened
          suddenly as an adult.
        </p>

        <h2>Who can use it</h2>
        <p>
          You need to be 13 or older. If you are under 18, use it with a parent
          or guardian who has read these terms.
        </p>

        <h2>Your licence</h2>
        <p>
          You get a personal, non-exclusive, non-transferable licence to use
          Walkito on devices you own or control, for your own non-commercial use.
          You may not resell access, redistribute the program, reverse-engineer
          the app, or use its content to build a competing product.
        </p>
        <p>
          The program, the exercise catalogue, the copy and the software are
          ours. Everything you log — your pain entries, your sessions, your
          history — is yours, and it lives on your device.
        </p>

        <h2>Subscriptions and billing</h2>
        <p>
          Walkito is sold as an auto-renewing subscription through the App Store.
          Apple takes the payment, holds the receipt, and shows the current price
          and term at the point of purchase — that price is the authoritative
          one, not any figure quoted elsewhere.
        </p>
        <ul>
          <li>
            A subscription renews automatically at the end of each period unless
            you turn renewal off at least 24 hours before it ends.
          </li>
          <li>
            Manage or cancel it in <b>iOS Settings → your name → Subscriptions</b>.
            Cancelling stops the next renewal; it does not shorten the period you
            have already paid for.
          </li>
          <li>
            Deleting the app does not cancel a subscription. Only Apple can do
            that, from the screen above.
          </li>
          <li>
            Refunds are Apple’s to give. Use{' '}
            <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>{' '}
            — we cannot issue or reverse a charge on Apple’s behalf.
          </li>
          <li>
            Any free trial or introductory offer converts to the standard price
            when it ends, on the terms Apple shows you at purchase.
          </li>
        </ul>

        <h2>Apple Health</h2>
        <p>
          If you grant them, Walkito reads walking asymmetry, walking speed, step
          count, resting heart rate and sleep analysis, and writes completed
          sessions back. Every one is optional and can be withdrawn at any time
          in iOS Settings. Health data is summarised on the device and is never
          uploaded — see the{' '}
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
          You can stop at any time by deleting the app, and cancel billing
          through Apple as above. We may suspend access if the app is being used
          in a way these terms forbid — in practice that means resale or
          tampering, not anything you could do by using it normally.
        </p>

        <h2>What we do not promise</h2>
        <p>
          Walkito is provided as it is. We do not promise that following the
          program will reduce your pain, change your arch, or produce any
          particular result — the{' '}
          <a href="/science/">evidence page</a> sets out what the research it
          follows found, including where that evidence stops.
        </p>
        <p>
          We do not promise the app will be uninterrupted or error-free, and we
          are not liable for indirect or consequential loss, or for injury
          arising from exercise you chose to do. Nothing here limits rights you
          have under consumer law that cannot be limited by agreement.
        </p>

        <h2>Contact</h2>
        <p>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </main>

      <Footer />
    </>
  );
}
