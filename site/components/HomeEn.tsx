import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { Founders } from '@/components/Founders';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import BodyPartLegIcon from '@hugeicons/core-free-icons/BodyPartLegIcon';
import ChartIncreaseIcon from '@hugeicons/core-free-icons/ChartIncreaseIcon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import RunningShoesIcon from '@hugeicons/core-free-icons/RunningShoesIcon';
import SunriseIcon from '@hugeicons/core-free-icons/SunriseIcon';
import Timer01Icon from '@hugeicons/core-free-icons/Timer01Icon';

import { Icon } from '@/components/Icon';
import { CHROME } from '@/lib/i18n';
import { PAIN_GOAL_MAX, PROGRAM, SITE_NAME } from '@/lib/site';

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

/**
 * Who it is for. Each card is one link to the page that says more, tinted with
 * one of the app's accent colours (`accents` in src/shared/config/theme.ts).
 * The goal tag is shown only where it is one of the app's five goals.
 */
const FOR_WHO = [
  {
    title: 'Heel pain and plantar fasciitis',
    text: 'Sharp first steps in the morning, pain after sitting or a long walk.',
    href: '/plantar-fasciitis-exercises/',
    icon: FootprintsIcon,
    accent: 'teal',
    goal: 'Goal: pain-free mornings',
  },
  {
    title: 'Flat feet',
    text: 'Tired, aching arches and feet that roll in.',
    href: '/flat-feet-exercises/',
    icon: BodyPartLegIcon,
    accent: 'violet',
    goal: `Goal: ${archHoldSeconds}-second arch hold`,
  },
  {
    title: 'On your feet all day',
    text: 'Nurses, retail, warehouse, hospitality. Feet that hurt by the end of the shift.',
    // No page of its own yet; the program page is the closest honest answer.
    href: '/program/',
    icon: Clock01Icon,
    accent: 'amber',
    goal: null,
  },
  {
    title: 'Runners and athletes',
    text: 'Heel, Achilles or shin pain that keeps coming back when you train.',
    href: '/heel-pain-runners/',
    icon: RunningShoesIcon,
    accent: 'blue',
    goal: `Goal: ${calfRaises} single-leg calf raises`,
  },
] as const;

/** Small notes around the hero phones, on wide screens only. */
const CHIPS = [
  { text: 'Bad morning? Today gets lighter', icon: SunriseIcon, place: 'chip-a' },
  { text: `A test every ${PROGRAM.testEveryDays} days`, icon: ChartIncreaseIcon, place: 'chip-b' },
  { text: `${MIN_A}, ${MIN_B} or ${MIN_C} min`, icon: Timer01Icon, place: 'chip-c' },
] as const;

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

/** The app, a screen at a time. Images come from scripts/export-screenshots.mjs. */
const INSIDE = [
  {
    src: '/app/05-week.webp',
    label: 'Walkito: this week’s plan, Monday to Sunday with rest days, and next week',
    caption: 'Your week, rest days included',
  },
  {
    src: '/app/06-exercise.webp',
    label: 'Walkito: a plantar stretch playing as a video with a timer',
    caption: 'A video for every exercise',
  },
  {
    src: '/app/07-quick.webp',
    label: 'Walkito: quick routines for work, before and after a run, and when it hurts',
    caption: 'Quick routines for any moment',
  },
  {
    src: '/app/progress-results.webp',
    label: 'Walkito: test results, arch hold up 11 seconds and calf raises up 4, with the left leg at 19 and the right at 22',
    caption: 'Your retests, left vs right',
  },
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

  return (
    <>
      <JsonLd data={APP} />
      <Masthead lang="en" />

      <main className="home">
        <section className="shell hero hero-long hero-split">
          <div className="hero-text">
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
          </div>

          {/* Three phones: today in front, a bad morning on the left, an
              exercise playing on the right. Only the front one loads eagerly. */}
          <div className="hero-phones">
            <div className="hero-phone hero-phone-left">
              <ScreenshotSlot
                src="/app/hero-checkin-bad.webp"
                label="Walkito after a bad morning is logged: today's session gets lighter"
                sizes="(max-width: 1023px) 34vw, 230px"
              />
            </div>
            <div className="hero-phone hero-phone-center">
              <ScreenshotSlot
                src="/app/hero-home.webp"
                label="Walkito's Today screen: a greeting, the morning check-in and today's session"
                sizes="(max-width: 1023px) 44vw, 270px"
                priority
              />
            </div>
            <div className="hero-phone hero-phone-right">
              <ScreenshotSlot
                src="/app/hero-exercise.webp"
                label="Walkito playing an exercise video with its cue"
                sizes="(max-width: 1023px) 34vw, 230px"
              />
            </div>
            {CHIPS.map((chip) => (
              <span key={chip.text} className={`hero-chip ${chip.place}`} aria-hidden>
                <Icon icon={chip.icon} size={18} />
                {chip.text}
              </span>
            ))}
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
          <div className="who-grid">
            {FOR_WHO.map((card) => (
              <a key={card.title} href={card.href} className={`who-card who-${card.accent}`}>
                <span className="who-icon">
                  <Icon icon={card.icon} size={26} />
                </span>
                {card.goal && <span className="who-goal">{card.goal}</span>}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className="who-more">
                  Read the guide
                  <span className="who-arrow">
                    <Icon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                  </span>
                </span>
              </a>
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
          <ScreenshotSlot
            src="/app/02-checkin.webp"
            label="Walkito: after a sore morning, today is three minutes of seated exercises"
          />
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
          <div className="phone-pair">
            <ScreenshotSlot
              src="/app/03-where-it-hurts.webp"
              label="Walkito: where does it usually hurt, with the heel and arch marked on a leg"
            />
            <ScreenshotSlot
              src="/app/choose-goal.webp"
              label="Walkito: choosing a goal, with stay on my feet all day selected"
            />
          </div>
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
                <ScreenshotSlot src={item.src} label={item.label} size="sm" />
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="shell story">
          <Founders lang="en" />
        </section>

        <section className="shell proof home-faq">
          <h2>Questions</h2>
          {/* Native details/summary: the answer stays in the HTML for search
              engines and assistants, and opens on tap. */}
          <div className="faq faq-details">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>
                  <h3>{item.q}</h3>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="shell final">
          <div className="final-card">
            <h2>Your feet, your plan.</h2>
            <AppStoreBadge campaign="home-bottom" />
            <p className="final-small">
              {MIN_A}, {MIN_B} or {MIN_C} minutes a day, at home.
            </p>
          </div>
          <p className="final-notice">{c.notice}</p>
        </section>
      </main>

      <Footer lang="en" page="home" />
    </>
  );
}
