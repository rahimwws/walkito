import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import { CHROME } from '@/lib/i18n';
import { PAIN_GOAL_MAX, PROGRAM, SITE_NAME, SUPPORT_EMAIL } from '@/lib/site';

const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const [DAYS_A, DAYS_B, DAYS_C] = PROGRAM.daysPerWeek;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;

/**
 * The app itself, as schema. Shared with the Russian and Spanish home pages.
 *
 * No `offers` and no `aggregateRating`, both deliberately. The price in the
 * brief was a number nobody checked against the store, and a rating block with
 * no ratings behind it is a manual-action risk rather than a shortcut. These go
 * in when there is a listing and real reviews to point at.
 *
 * No length either. The plan has none: it is built a week at a time and keeps
 * going while the person uses it.
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
    `Sessions of ${MIN_A}, ${MIN_B} or ${MIN_C} minutes, on ${DAYS_A}, ${DAYS_B} or ${DAYS_C} days a week`,
    'Each week built around one measurable focus goal; a goal reached moves to maintaining and the next takes its place',
    'Each day adapts to morning pain, yesterday’s steps and last night’s sleep',
    `Physical tests every ${PROGRAM.testEveryDays} days, then every ${PROGRAM.testEveryDaysAfterGoal} once the first goal is reached`,
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

/**
 * The cards under the plan section. The goal card is Rahym's, from the home
 * page before the redesign; the test card takes its schedule from there too.
 * The evidence card states only what the evidence page says, after the claims
 * there were re-checked against the papers.
 */
const HOW = [
  {
    title: 'A week at a time, around one goal',
    text: `Each week centres on a goal you can measure: morning heel pain at ${PAIN_GOAL_MAX}/10 or less for ${PROGRAM.painFreeDays} days running, a ${archHoldSeconds}-second arch hold, ${calfRaises} single-leg calf raises, ${balanceSeconds} seconds of single-leg balance, or left and right within ${gapPercent}% of each other. Reach one and it moves to maintaining while the next takes its place.`,
    href: '/program/',
    link: 'How the plan works',
  },
  {
    title: `A test every ${PROGRAM.testEveryDays} days, then every ${PROGRAM.testEveryDaysAfterGoal}`,
    text: `${PROGRAM.retestTests} physical tests in about ${PROGRAM.retestMinutes} minutes: calf raises to failure, an arch hold, single-leg balance on both sides. Every ${PROGRAM.testEveryDays} days until your first goal is reached, then every ${PROGRAM.testEveryDaysAfterGoal}. Progress is measured, not guessed from how the week felt.`,
    href: '/program/',
    link: 'What the tests measure',
  },
  {
    title: 'Built on published research',
    text: 'The 2023 clinical guideline for heel pain grades stretching A and strength training B, and a randomised trial found high-load strength work improved pain and function faster than stretching.',
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
 * The equipment answer follows the app: `EQUIPMENT` in
 * `entities/program/model/plan/catalogue-meta.ts` lists a step, band, towel,
 * pillow and ball, onboarding asks which you have, and exercises that need
 * something missing are left out of the plan.
 */
const FAQ = [
  {
    q: 'How long until I feel a difference?',
    a: `It depends on the person and the pain. The plan is built one week at a time around a goal you can measure, and a test every ${PROGRAM.testEveryDays} days shows you what’s actually changing.`,
  },
  {
    q: 'Do I need equipment?',
    a: 'No. Some exercises use a towel, a step or stairs, a resistance band, a pillow or a massage ball, and Walkito asks what you have. Anything that needs something you don’t have is left out of your plan.',
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
            {MIN_A}, {MIN_B} or {MIN_C} minutes a day, at home.
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
              want to get back to. It builds your plan from that, one week at a
              time, not one routine for everyone.
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
