import { COMPANY_LINE, DESCRIPTOR, GUARANTEE_DAYS, SITE, SUPPORT_EMAIL, url } from '../config';
import { Page } from '../ui';

const UPDATED = 'November 19, 2026';
const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;
const who = <>{COMPANY_LINE}</>;

/**
 * Written from what the funnel (walkito.site/go) does, not from a template. If the
 * funnel starts collecting or sending something new, these pages are wrong
 * from that moment, and nothing fails to build to say so.
 */
export function Terms() {
  return (
    <Page backTo="/" footer>
      <article className="legal">
        <h1>Terms</h1>
        <p className="caption">Last updated: {UPDATED}</p>

        <h2>Who we are</h2>
        <p>
          Walkito is made by {who}. These terms cover {SITE} and a Walkito plan bought there. The Walkito app has
          its own terms at walkito.site/terms, and they apply when you use the app.
        </p>

        <h2>Not medical care</h2>
        <p>
          Walkito is an exercise program. It is not a diagnosis, a treatment or a replacement for your doctor or physical
          therapist. Move only as far as feels comfortable and stop if anything hurts or you feel unwell. If you have had
          recent surgery or an injury, numbness or swelling, dizziness or a fall, ask your doctor or physical therapist before
          you start.
        </p>

        <h2>Your plan and what it costs</h2>
        <p>
          The price, what you pay today, the date of each later charge and how often it repeats are shown on the checkout page
          before you pay, and you confirm them with a checkbox. The plans are:
        </p>
        <ul>
          <li>
            <b>Monthly:</b> a first month at a lower price (for example $4.99), then the monthly price shown, charged every
            month until you cancel.
          </li>
          <li>
            <b>1 year:</b> the price shown, paid today, then the same price every year until you cancel.
          </li>
        </ul>
        <p>
          Your plan renews automatically. Payments are handled by Stripe through RevenueCat, and they appear on your statement
          as {DESCRIPTOR} (NEMY LLC is the company that makes Walkito). Prices are in US dollars and include any tax shown at
          checkout.
        </p>
        <p>
          The lower first-month price is for new members only. If you have bought a Walkito plan here before, the checkout page
          shows the full monthly price instead, before you pay.
        </p>
        <p>We email you a reminder two days before the first full monthly charge, and two days before every yearly renewal.</p>

        <h2>Cancelling</h2>
        <p>
          Cancel at any time at {SITE}/s/cancel, with the link in any email from us, or by writing to {mail}. It
          takes one step. Your access continues until the end of the period you have paid for, and nothing more is charged.
        </p>

        <h2>Refunds</h2>
        <p>
          Every charge can be refunded in full within {GUARANTEE_DAYS} days of that charge, renewals included. Reply to any
          email from us, or write to {mail}, and we refund it. There is no phone call, no form and no reason needed. Refunds go
          back to the card you paid with. A refunded plan ends when the refund is made.
        </p>

        <h2>Using the app with your plan</h2>
        <p>
          A plan bought here also unlocks the Walkito app on iPhone and Android when you sign in with the same email. It is
          not managed by Apple or Google, so cancel it here, not in your phone’s settings.
        </p>

        <h2>Fair use</h2>
        <p>
          Your plan is for you. Please do not share your account, copy the videos, or use the service in a way that harms it
          or other people. We may change or end features with notice, and if we stop offering a paid plan you have, we refund
          the unused part.
        </p>

        <h2>Our responsibility</h2>
        <p>
          We work to keep Walkito accurate and available, but it is provided as it is. To the extent the law allows, our total
          responsibility to you is limited to what you paid us in the 12 months before a claim. Nothing in these terms limits
          rights you have under consumer law that cannot be limited.
        </p>

        <h2>Contact</h2>
        <p>
          {who}. Email {mail}. A person reads every email.
        </p>
      </article>
    </Page>
  );
}

export function Privacy() {
  return (
    <Page backTo="/" footer>
      <article className="legal">
        <h1>Privacy</h1>
        <p className="caption">Last updated: {UPDATED}</p>

        <h2>The short version</h2>
        <ul>
          <li>Your quiz answers stay in your browser unless you tick the box to save them with your plan.</li>
          <li>We never send your answers or your ratings to Meta, PostHog or any advertiser. Meta gets only a scrambled (hashed) version of your email, to measure our ads.</li>
          <li>We never sell your data.</li>
        </ul>

        <h2>What we collect</h2>
        <p>
          <b>Your quiz answers</b> (age range, what you want help with, when you notice it, how long you have had it, what you
          have tried, including special shoes, insoles, a shot or a night splint, roughly what you have spent on your feet so
          far, your usual day, the lines you ticked about your days, what you want back, how you want to start, anything to
          plan around, minutes a day, and the everyday moment you picked to do them after), <b>your try-it notes</b> (how the
          move felt, and the optional balance seconds) and, after Day 1, <b>your first steps that morning on a 0 to 10 scale</b>,
          if you choose to give it. They are kept in your browser’s storage to build your plan. They are saved to our server
          only if you tick “Save my answers with my plan”. Our <a href={url('/health-data')}>Consumer Health Data Privacy Policy</a>{' '}
          covers them in detail.
        </p>
        <p>
          <b>When you usually get up</b>, as a time of day. It is saved with your email so your first-step routine email
          arrives that morning at that time. It says nothing about your health on its own.
        </p>
        <p>
          <b>Your email address</b>, to send you a sign-in code, save your plan, send your receipt and the emails about your
          plan, and, only if you tick the box, foot tips and news.
        </p>
        <p>
          <b>Your plan and payments:</b> which plan you bought, when, its status and next charge date. We never see your card
          number.
        </p>
        <p>
          <b>Technical data:</b> your IP address, browser and device type, the page you came from and the ad campaign in the
          link, if any.
        </p>
        <p>
          <b>Your choices:</b> each consent you give or refuse, with the exact words shown and the time.
        </p>

        <h2>Who receives data, and what</h2>
        <ul>
          <li>
            <b>Supabase</b> stores your account, email, consents, your plan status and, if you agreed, your answers.
          </li>
          <li>
            <b>Stripe</b> processes your payment and receives your card details and email. <b>RevenueCat</b> runs the checkout
            and records your purchase against a random account ID.
          </li>
          <li>
            <b>PostHog</b> receives events that say a step was viewed or finished, that checkout opened or a purchase was made,
            with a random ID and, after you confirm it, your email. Never your answers or ratings.
          </li>
          <li>
            <b>Meta (Facebook and Instagram)</b>: Meta’s pixel and our server tell Meta that a page
            was viewed, that the quiz was started (not what you answered), that checkout started and that a purchase was made, with its amount.
            Meta receives your IP address, browser details and Meta’s own cookie IDs. Meta never receives your answers or
            anything about your health. Meta uses this to measure and improve its ads.
          </li>
          <li>
            To measure our ads, we send Meta a scrambled (hashed) version of your email and a random account ID. Meta can match
            them to an account but can’t read them. We never send your quiz answers or anything about your health.
          </li>
          <li>
            <b>Google</b>: if you choose “Continue with Google”, Google confirms who you are and gives us your email address
            and name. Google learns that you signed in to Walkito, and nothing about your answers.
          </li>
          <li>
            <b>Resend</b> delivers our emails. <b>Cloudflare</b> and <b>DigitalOcean</b> host and protect this website.
          </li>
        </ul>

        <h2>Cookies and storage</h2>
        <p>
          We use your browser’s storage to keep your answers and progress, and to keep you signed in. PostHog sets a cookie for
          its random ID. Meta’s pixel sets the _fbp cookie and, if you came from a Meta ad, the _fbc cookie.
        </p>

        <h2>How long we keep it</h2>
        <p>
          Your account and answers: until you ask us to delete them. Analytics: up to 12 months. Payment records: as long as
          tax and accounting law requires.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask for a copy of your data, ask us to correct or delete it, and withdraw any consent, by writing to {mail}.
          We answer within 30 days. Depending on where you live, you may have more rights, and we honor them for everyone.
          To opt out of Meta ad measurement, use an ad blocker or your browser’s tracking protection; we do not sell or share
          data for cross-context advertising beyond what is described above.
        </p>

        <h2>Children</h2>
        <p>Walkito is for adults. We do not knowingly collect data from anyone under 18.</p>

        <h2>Contact</h2>
        <p>
          {who}. Email {mail}.
        </p>
      </article>
    </Page>
  );
}

export function HealthData() {
  return (
    <Page backTo="/" footer>
      <article className="legal">
        <h1>Consumer Health Data Privacy Policy</h1>
        <p className="caption">Last updated: {UPDATED}</p>
        <p>
          Some laws, such as Washington’s My Health My Data Act, protect information that could describe your health. This
          page says what of that kind Walkito collects on {SITE} and what we do with it. It applies to everyone,
          wherever you live.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>What you would like help with first, for example heel or arch, or feeling steadier.</li>
          <li>When you notice it most, how long you have had it, and what you have tried: for example stretching, special shoes, insoles, a shot in your foot or a night splint.</li>
          <li>Roughly how much you have spent on your feet so far, if you tried something that costs money.</li>
          <li>The lines you ticked as true for your days, for example holding the wall for your first steps, or cutting walks short, and what you want back.</li>
          <li>Whether you start seated or standing, and anything to plan around: recent surgery or injury, numbness or swelling, dizziness or a fall, or using a cane or walker.</li>
          <li>Your age range.</li>
          <li>How the try-it move felt, the optional balance seconds, how your first session felt, and your first steps that morning on a 0 to 10 scale, if you give it.</li>
        </ul>

        <h2>Where it comes from and why</h2>
        <p>
          Only from you, in the quiz. We use it for one purpose: to build your exercise plan and adjust it. We do not use it
          for advertising, and we do not use it to decide prices.
        </p>

        <h2>Where it is kept</h2>
        <p>
          In your browser, to build your plan as you go. On our server (Supabase) only if you tick “Save my answers with my
          plan”, so the Walkito app can use them when you sign in with the same email.
        </p>

        <h2>Who we share it with</h2>
        <p>
          No one, except Supabase, which stores it for us and may use it for nothing else. We never sell it, and we never send
          it to Meta, PostHog or any advertiser. To measure our ads, Meta receives only a scrambled (hashed) version of your
          email and a random account ID, never anything on this list.
        </p>

        <h2>Your rights</h2>
        <p>
          You can see it, delete it, or withdraw your consent at any time by writing to {mail}. Withdrawing consent deletes
          what we saved. We answer within 30 days, and if we say no you can appeal by replying to that email; if we still say no,
          you can complain to your state attorney general.
        </p>

        <h2>Contact</h2>
        <p>
          {who}. Email {mail}.
        </p>
      </article>
    </Page>
  );
}
