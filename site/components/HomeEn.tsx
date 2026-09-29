import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import { CHROME } from '@/lib/i18n';
import { PROGRAM, SITE_NAME, SUPPORT_EMAIL } from '@/lib/site';

/**
 * The app itself, as schema. Shared with the Russian and Spanish home pages.
 *
 * No `offers` and no `aggregateRating`, both deliberately. The price in the
 * brief was a number nobody checked against the store, and a rating block with
 * no ratings behind it is a manual-action risk rather than a shortcut. These go
 * in when there is a listing and real reviews to point at.
 */
export const APP = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS',
  description:
    'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
  availableLanguage: ['en', 'ru', 'es'],
  featureList: [
    `Daily sessions of ${PROGRAM.sessionMinutesMin} to ${PROGRAM.sessionMinutesMax} minutes`,
    'Plan adapts to logged pain and daily load',
    `Retest assessments every ${PROGRAM.blockDays} days`,
  ],
};

/** Who it is for. Each card goes to the page that says more. */
const FOR_WHO = [
  {
    title: 'Heel pain and plantar fasciitis',
    text: 'Sharp first steps in the morning, pain after sitting or a long walk.',
    href: '/plantar-fasciitis-exercises/',
  },
  {
    title: 'Flat feet',
    text: 'Tired, aching arches and feet that roll in.',
    href: '/flat-feet-exercises/',
  },
  {
    title: 'On your feet all day',
    text: 'Nurses, retail, warehouse, hospitality. Feet that hurt by the end of the shift.',
    // No page of its own yet; the program page is the closest honest answer.
    href: '/program/',
  },
  {
    title: 'Runners and athletes',
    text: 'Heel, Achilles or shin pain that keeps coming back when you train.',
    href: '/heel-pain-runners/',
  },
];

/** Two of the original "How it works" cards, kept under the plan section. */
const HOW = [
  {
    title: `A retest every ${PROGRAM.blockDays} days`,
    text: `${PROGRAM.retestTests} physical tests in ${PROGRAM.retestMinutes} minutes: calf raises to failure, an arch hold, single-leg balance on both sides. Progress is measured, not guessed from how the week felt.`,
    href: '/program/',
    link: 'What the retests measure',
  },
  {
    title: 'Built from the trials',
    text: 'High-load calf strength and plantar-specific stretching, at the doses the published trials used and in the order the 2023 clinical guideline for heel pain recommends.',
    href: '/science/',
    link: 'Read the evidence',
  },
];

/** Where each future screenshot goes. Add `src` once the image exists. */
const INSIDE = [
  { label: 'Screenshot: today’s plan', caption: 'Today’s plan' },
  { label: 'Screenshot: exercise video', caption: 'A video for every exercise' },
  { label: 'Screenshot: quick routines', caption: 'Quick routines for any moment' },
  { label: 'Screenshot: retest results', caption: 'Your retests, left vs right' },
] as const;

/**
 * The equipment answer is read from the app's exercise catalogue: heel raises
 * stand on a towel, the stretches and balance work use a wall, `band_inversion`
 * first appears in Block 4 (day 43, week 7), and nothing is done off a step.
 * The foot roll does not name what to roll on; "a ball or bottle" is ours.
 */
const FAQ = [
  {
    q: 'How long until I feel a difference?',
    a: 'It depends on the person and the pain. The plan runs for 12 weeks, and a retest every 14 days shows you what’s actually changing.',
  },
  {
    q: 'Do I need equipment?',
    a: 'Only a towel and a wall to start. From week 7 you’ll also want a resistance band, and a small ball or bottle helps for the foot roll, but you never need a step or weights.',
  },
  {
    q: 'Is it for flat feet?',
    a: 'Yes, for flexible flat feet. If one arch flattened suddenly as an adult, see a clinician first.',
  },
  {
    q: 'Is it medical advice?',
    a: 'No. Walkito is an exercise program. It doesn’t diagnose, and it isn’t a substitute for a clinician.',
  },
  {
    q: 'What languages is it in?',
    a: 'English, Russian and Spanish.',
  },
];

/**
 * The English home page.
 *
 * Written for anyone with heel and foot pain, not only runners: the runner page
 * this used to be now lives at `/heel-pain-runners/`. The Russian and Spanish
 * home pages still use `Home` and its own copy until they are rewritten too.
 */
export function HomeEn() {
  const c = CHROME.en;
  const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

  return (
    <>
      <JsonLd data={APP} />
      <Masthead lang="en" />

      <main>
        <section className="shell hero hero-long">
          <h1>
            Tried everything?
            <span>Try a plan built for your feet.</span>
          </h1>
          <p>
            Walkito is a personal exercise plan for heel, foot and leg pain that
            adjusts to how your feet feel each day.
          </p>
          <AppStoreBadge campaign="home-hero" anchor />
          <p className="hero-small">
            {PROGRAM.sessionMinutesMin} to {PROGRAM.sessionMinutesMax} minutes a day, at home.
          </p>

          {/* A placeholder until the new screenshots exist: app-home.png shows a
              real name. */}
          <div className="shot">
            <ScreenshotSlot label="Screenshot: today’s plan" />
          </div>
        </section>

        <section className="shell story">
          <h2>It’s not your fault.</h2>
          <p>
            Insoles, new shoes, a night splint, fifty videos that all say
            something different. They can make your feet feel supported, but none
            of them train the foot. What’s missing is one clear plan: which
            exercises, how many, in what order, and what to do on a bad day.
          </p>
        </section>

        <section className="shell proof proof-lead">
          <h2>Is this for me?</h2>
          <div className="quotes quotes-four">
            {FOR_WHO.map((card) => (
              <figure key={card.title}>
                <h3>
                  {/* Non-breaking space: the arrow never wraps onto a line of its own. */}
                  <a href={card.href}>{card.title}&nbsp;→</a>
                </h3>
                <p>{card.text}</p>
              </figure>
            ))}
          </div>
        </section>

        <section className="shell split">
          <div>
            <h2>It adjusts to your morning.</h2>
            <p>
              Every morning you log how your feet feel in one tap. On a bad
              morning, today’s session gets shorter and easier. After a long day
              on your feet, the loaded work comes out. It never speeds up on a
              good day.
            </p>
          </div>
          <ScreenshotSlot label="Screenshot: morning check-in" />
        </section>

        <section className="shell split split-flip">
          <div>
            <h2>A plan built from your answers.</h2>
            <p>
              Tell Walkito where it hurts, which side, what you do and what you
              want to get back to. It builds your {PROGRAM.weeks}-week plan from
              that, not one routine for everyone.
            </p>
          </div>
          <ScreenshotSlot label="Screenshot: where does it hurt" />
        </section>

        <section className="shell proof proof-follow">
          <div className="quotes">
            {HOW.map((item) => (
              <figure key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href}>{item.link}&nbsp;→</a>
              </figure>
            ))}
          </div>
        </section>

        <section className="shell proof">
          <h2>Inside the app</h2>
          <div className="gallery">
            {INSIDE.map((item) => (
              <div key={item.caption} className="gallery-item">
                <ScreenshotSlot label={item.label} size="sm" />
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="shell story">
          <h2>Made by Rahman and Rahim</h2>
          <p>
            We make Walkito, just the two of us. It started close to home: family
            with flat feet, friends with heel pain.
          </p>
          <p>
            Insoles, new shoes, ten videos saying different things, and it still
            hurt every morning. It’s not your fault. Nobody gave you a plan: which
            exercises, how many, in what order, and what to do on a bad day.
          </p>
          <p>Now you have one.</p>
          <p className="story-contact">
            Questions? Write to {mail}. A person replies, usually within 12 hours.
          </p>
        </section>

        <section className="shell proof home-faq">
          <h2>Questions</h2>
          <div className="faq">
            {FAQ.map((item) => (
              <section key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="shell proof final">
          <h2>Your feet, your plan.</h2>
          <AppStoreBadge campaign="home-bottom" />
          <p className="notice">{c.notice}</p>
        </section>
      </main>

      <Footer lang="en" page="home" />
    </>
  );
}
