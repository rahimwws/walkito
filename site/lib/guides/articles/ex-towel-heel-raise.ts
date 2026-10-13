import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations needed (append to CITATIONS[] in lib/citations.ts) ──
 *
 * (none - this page uses only existing CITE keys)
 */

export const EX_TOWEL_HEEL_RAISE: Guide = {
  lang: 'en',
  page: 'exTowelHeelRaise',
  mainSource: CITE.rathleff,
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Towel Heel Raise: Rathleff Protocol Step by Step',
  description:
    'How to do the towel heel raise from the Rathleff protocol: sets, reps, tempo, the towel under your toes, common mistakes, and easier or harder versions.',
  h1: 'Towel heel raise: the Rathleff high-load protocol, step by step',
  lede:
    'The towel heel raise is a single-leg calf raise on a step with a rolled towel under the toes. It comes from a 2015 trial of 48 people with plantar fasciitis, where this exercise eased heel pain faster than stretching alone over three months. The towel is what makes it different from a regular calf raise: it engages the plantar fascia through the windlass mechanism.',
  takeaways: [
    'In a trial of 48 people, loaded towel heel raises scored 29 points better on the Foot Function Index than stretching alone at three months, though both groups converged by twelve months (Rathleff and colleagues, 2015).',
    'The 2023 heel pain guideline grades strength training B, one step below stretching at A, and recommends both (Koc and colleagues, 2023).',
    'The towel under the toes bends them upward, activating the windlass mechanism so the plantar fascia shares the load alongside the calf.',
    'Walkito starts at 3 sets of 12, each leg, with a 3-second up, 2-second hold, 3-second down tempo.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What does a towel heel raise work?',
      paragraphs: [
        'A towel heel raise works the gastrocnemius and soleus (the two calf muscles), the Achilles tendon, and the plantar fascia. The rolled towel bends the toes upward at the top of the raise, which pulls on the plantar fascia through the windlass mechanism. Without the towel, the exercise mainly trains the calf. With it, the fascia takes part of the load.',
        'This is why the Rathleff trial used the towel specifically for plantar fasciitis instead of a plain heel raise. The goal is to load the calf-Achilles-fascia chain together. If your pain is in the Achilles tendon rather than under the foot, an [eccentric heel drop](/exercises/eccentric-heel-drops/) without the towel is the better starting point.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'How do you do the towel heel raise?',
      paragraphs: [
        'Roll a small hand towel into a cylinder about the width of your fist. Place it on the edge of a step. Stand on one foot with all five toes on the towel and the ball of the foot on the step. Hold a wall or rail for balance.',
        'Rise up over three seconds, pushing through the big toe. Hold at the top for two seconds. Lower over three seconds, letting the heel sink slightly below the step. That slow tempo is part of the protocol. Fast reps reduce the load on the tendon and fascia.',
        'In the Rathleff trial, participants added weight with a backpack once bodyweight alone was no longer enough to make the last rep hard. "12RM" means the heaviest load you can lift for exactly 12 controlled reps.',
      ],
      exercises: [
        {
          name: 'Towel heel raise',
          evidence: {
            level: 'strong',
            why: 'The exercise from the only plantar-fasciitis heel-raise RCT (Rathleff 2015). Guideline grade B.',
          },
          dose: 'Walkito starts at 3 x 12, each leg. Research protocol: 3 x 12RM, progressing to 5 x 8RM',
          how: 'Stand on one foot on a step, rolled towel under the toes. Three seconds up, two-second hold, three seconds down. Add weight when the last rep is no longer hard.',
          often: 'Every other day in the trial. Walkito schedules it on strength days.',
          feel: 'Hard work in the calf and a pull under the arch',
          stop: 'Pain reaches 6/10 or more',
          media: 'heel_raise_towel',
          caption: 'Towel heel raise: three seconds up, hold, three seconds down',
          alt: 'A figure on a step rising onto the toes with a rolled towel under the foot, the calf and arch highlighted',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Sets, reps, and the Rathleff progression',
      paragraphs: [
        'The trial progressed the load over roughly three months. The tempo stayed the same throughout: three seconds up, two-second hold, three seconds down.',
      ],
      table: {
        caption: 'Rathleff 2015 towel heel-raise progression',
        head: ['Weeks', 'Sets x reps', 'Tempo', 'Frequency'],
        rows: [
          ['1-2', '3 x 12RM', '3s up / 2s hold / 3s down', 'Every other day'],
          ['3-4', '4 x 10RM', '3s up / 2s hold / 3s down', 'Every other day'],
          ['5 onward', '5 x 8RM', '3s up / 2s hold / 3s down', 'Every other day'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: 'What are the common mistakes with the towel heel raise?',
      paragraphs: [
        'Going too fast is the most common mistake. A three-second descent keeps the calf under tension long enough to build strength. Bouncing up and down turns it into a cardio exercise, not a strength one.',
        'Letting the towel slip so only one or two toes sit on it reduces the fascia load. All five toes should be on the towel. If the towel keeps sliding, fold it thicker or use a hand towel instead of a bath towel.',
        'Starting on one leg when both-leg raises are still hard leads to poor form and compensation. If a single-leg raise on a step is too much right now, start with [double-leg calf raises](/exercises/calf-raises/) on the floor and build up.',
      ],
    },
    {
      h2: 'Easier and harder versions',
      paragraphs: [
        'If the full towel heel raise on a step is too hard, work backward through the calf chain. [Seated heel raises](/exercises/calf-raises/) are the lowest load. Double-leg standing raises come next. Then a heel raise hold at the top. Then the single-leg towel raise on a step. Each step should feel manageable for two sessions before moving up.',
        'If bodyweight on one leg is too easy, add load. The Rathleff trial used a backpack with books or water bottles. Gym access opens up a calf raise machine or a weighted vest. The goal is that the last rep of each set is genuinely the last one you can do with good form.',
      ],
    },
    {
      h2: 'What does the research say about towel heel raises?',
      keyFact: 'In a trial of 48 people with confirmed plantar fasciitis, towel heel raises scored better on the Foot Function Index at three months, but outcomes were similar to stretching alone by twelve months (Rathleff and colleagues, 2015).',
      paragraphs: [
        'The Rathleff 2015 trial is the only randomized trial that tested the towel heel raise specifically for plantar fasciitis. In 48 people with ultrasound-confirmed plantar fasciitis, the heel-raise group scored 29 points better on the Foot Function Index at three months than the stretching-only group. By twelve months, both groups had converged.',
        'The 2023 heel pain guideline reviewed this and other evidence and gave strength training a grade of **B** and stretching a grade of **A**. Both are recommended. The guideline does not single out the towel variant, but it is the only strength exercise tested in its own plantar-fasciitis trial.',
        'Nothing in the evidence says this exercise should replace stretching. The strongest approach is both: a [plantar fascia stretch](/exercises/plantar-fascia-stretch/) for morning stiffness and the loaded raise for building capacity. For the full list of exercises and how they fit together, see [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      sourceNote:
        'Rathleff 2015: FFI difference 29 points at 3 months (95% CI 6-52, p = 0.016). At 12 months: 22 vs. 16, no significant difference.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Who is the towel heel raise for?',
      paragraphs: [
        'Anyone with plantar fasciitis who has enough calf strength to do a single-leg raise on a step. The trial enrolled adults whose pain had lasted at least three months and who could tolerate loading.',
        'If your pain is fresh and you cannot stand on one leg comfortably, start lower in the ladder: seated or double-leg raises first. If your pain is in the Achilles tendon rather than the plantar fascia, the loading approach is similar but the towel is not used and the protocol differs. See [eccentric heel drops](/exercises/eccentric-heel-drops/) or [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) for that path.',
      ],
      cites: [CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'What is the towel for in a towel heel raise?',
      cites: [CITE.rathleff],
      a: 'The towel rolls under all five toes so they bend upward at the top of the raise. That activates the windlass mechanism, a link between the big toe and the plantar fascia. Without the towel, the exercise mainly loads the calf. With it, the fascia shares the load, which is why the Rathleff trial used it for plantar fasciitis.',
    },
    {
      q: 'How many towel heel raises should I do?',
      cites: [CITE.rathleff],
      a: 'The Rathleff trial started at 3 sets of 12 repetitions (at the heaviest load manageable for 12 reps), progressing to 5 sets of 8 heavier reps by about week 5, every other day. Walkito starts at 3 sets of 12 per leg and moves up once two sessions at that level feel easy.',
    },
    {
      q: 'Can I do the towel heel raise on the floor instead of a step?',
      a: 'Yes, but you lose the extra range at the bottom where the heel sinks below the step. A floor version still loads the calf and fascia. It is a reasonable starting point if a step feels unstable or too intense, and you can move to a step later.',
    },
    {
      q: 'Should the towel heel raise hurt?',
      cites: [CITE.guideline],
      a: 'Hard work in the calf and a pull under the arch are expected. Stop for the day if pain reaches 6 out of 10 or more, or if the next morning is clearly worse than usual. Mild soreness that settles within a day is normal, especially in the first two weeks.',
    },
    {
      q: 'Is the towel heel raise the same as an eccentric heel drop?',
      cites: [CITE.rathleff, CITE.alfredson],
      a: 'No. The towel heel raise includes both the up and the down phase and uses a towel under the toes to load the plantar fascia. The eccentric heel drop focuses only on the lowering phase, without a towel, and was designed for Achilles tendinopathy. They target different problems with different protocols.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed a sudden pop or injury instead of building up gradually',
      'you cannot put weight on the foot or you are limping',
      'the heel is red, warm or swollen, or you have a fever',
      'pain wakes you at night or is present when you are not standing',
      'it has not improved after several weeks of consistent loading',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'The towel heel raise is one step in a calf chain that Walkito builds into a weekly plan. The chain runs from seated heel raises through double-leg raises, a hold, the towel raise, eccentric heel drops, and eventually pogo hops. Each step opens once two sessions at the current level felt easy.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance and balance. Walkito is an exercise program, not a diagnosis tool.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Towel heel raise',
  campaign: 'ex-towel-heel-raise',
};
