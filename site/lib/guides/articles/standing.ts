import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * 17 | waters
 *   Waters TR, Dick RB. Evidence of health risks associated with
 *   prolonged standing at work and intervention effectiveness.
 *   Rehabilitation Nursing. 2015;40(3):148-165.
 *   doi: 10.1002/rnj.166 | PMID: 25041875
 *
 * 18 | riddle
 *   Riddle DL, Pulisic M, Pidcoe P, Johnson RE. Risk factors for
 *   Plantar fasciitis: a matched case-control study. Journal of Bone
 *   and Joint Surgery (American). 2003;85(5):872-877.
 *   doi: 10.2106/00004623-200305000-00015 | PMID: 12728038
 *
 * 19 | garcia
 *   Garcia MG, Roman MG, Davila A, Martin BJ. Comparison of
 *   physiological effects induced by two compression stockings and
 *   regular socks during prolonged standing work. Human Factors.
 *   2023;65(4):562-574.
 *   doi: 10.1177/00187208211022126 | PMID: 34078143
 */

/** Indices for citations not yet in CITATIONS[]. Add them first. */

const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const STANDING_EN: Guide = {
  lang: 'en',
  page: 'standing',
  published: '2026-10-04',
  updated: '2026-10-04',
  title: 'Why Do My Feet Hurt After Standing All Day?',
  description:
    'Why feet hurt from standing all day, what helps (calf stretches, strength work, compression socks), and when standing-related foot pain needs a clinician.',
  h1: 'Why do my feet hurt after standing all day?',
  lede:
    'Your feet hurt by the end of a long shift. The arch aches, the heel is sore, and your legs feel heavy. Standing on a hard floor for hours loads the same tissues over and over, without the pumping action that walking gives your calves and veins. Stretching the calf and plantar fascia, and building some calf strength, targets the tissues that take the most strain.',
  intro: [
    'Not all foot pain from standing is plantar fasciitis, but the two overlap. A 2003 case-control study of 50 people with plantar fasciitis and 100 matched controls found that standing for most of the working day raised the odds of plantar fasciitis 3.6 times. Reduced ankle flexibility was an even stronger risk factor, at 23.3 times the odds. The exercises that help both are largely the same: calf and plantar fascia stretches, plus strength work for the calf.',
  ],
  toc: true,
  takeaways: [
    'A 2015 review of the occupational health literature found prolonged standing at work associated with musculoskeletal discomfort, fatigue and leg pain, with floor mats, compression stockings and supportive footwear among the interventions with evidence behind them (Waters and Dick, 2015).',
    'Standing for most of the workday raised the odds of plantar fasciitis 3.6 times in a case-control study of 50 cases and 100 controls. Reduced ankle flexibility raised them 23.3 times (Riddle and colleagues, 2003).',
    'In a parallel-group trial of 40 security guards randomly assigned to regular socks or one of two compression-stocking groups, both 15-20 mmHg and 20-30 mmHg stockings prevented the rise in foot and leg discomfort seen with regular socks during 12-hour standing shifts (Garcia and colleagues, 2023).',
    'The 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, A, and strength training a B.',
  ],
  sections: [
    {
      h2: 'Why do your feet hurt after standing all day?',
      keyFact: 'In a 2003 case-control study, reduced ankle flexibility raised the odds of plantar fasciitis 23.3 times, the strongest risk factor found, and standing most of the working day raised the odds 3.6 times (Riddle and colleagues, 2003).',
      paragraphs: [
        'Feet hurt from standing because **standing still loads the plantar fascia, calf muscles and heel without giving them a break.** Walking pumps blood back up from the legs with each step. Standing takes that pump away, so blood pools in the lower legs and the tissues under the foot carry the same static load for hours.',
        'A 2015 review of the occupational health research found prolonged standing associated with low back pain, leg pain, discomfort and fatigue across many standing occupations. The review also noted that cardiovascular strain and leg swelling increase with standing duration. The authors called for clearer definitions of "prolonged standing" in future studies, since the threshold between safe and harmful standing time varies across people and jobs.',
        'On the calf and fascia specifically, a 2003 case-control study found two risk factors that stood out above the rest. Reduced ankle flexibility, meaning a tight calf, was the single strongest predictor of plantar fasciitis, at 23.3 times the odds. Standing for most of the working day raised the odds 3.6 times. The two are connected: a tight calf keeps the heel under more tension during every minute of standing.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Which exercises help feet that hurt from standing?',
      keyFact: 'The 2023 heel pain guideline grades plantar fascia and calf stretching A, its top grade, and resistance and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'These exercises target the calf, the plantar fascia and the small muscles that support the arch. They are Walkito\'s starting doses, not a prescription. If your pain is near the heel and follows the morning-pain pattern of plantar fasciitis, the fuller set of exercises is in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/). [How these guides are written](/about/).',
        'The 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, A. It gives resistance and strength training a B. Both grades are for plantar fasciitis specifically, not for general standing fatigue, but the tissues involved are the same. If any exercise takes your pain to **6/10 or more**, stop for the day.',
      ],
      table: {
        head: ['Exercise', 'Dose', 'How often', 'What you should feel', 'Stop if'],
        rows: [
          ['Calf stretch', '2 holds of 30 seconds, each leg', 'Most sessions', 'A stretch in the calf of the straight back leg', 'Pain reaches 6/10'],
          ['Soleus stretch', '2 holds of 30 seconds, each leg', 'Most sessions', 'A stretch low in the calf, near the heel', 'Pain reaches 6/10'],
          ['Plantar fascia stretch', '2 holds of 30 seconds, each foot', 'Most sessions', 'A stretch along the arch, not the calf', 'Pain reaches 6/10'],
          ['Heel raises, both feet', '3 sets of 10, both feet', 'Strength days', 'The calves working, both feet sharing the load', 'Pain reaches 6/10'],
          ['Short foot, seated', '3 sets of 10, hold 5 seconds, each foot', 'Strength days', 'The arch lifting, toes relaxed', 'Pain reaches 6/10'],
          ['Single-leg hold', '3 holds of 30 seconds, each leg', 'Balance days', 'The foot and ankle making small corrections', 'Pain reaches 6/10'],
          ['Foot roll', '2 minutes', 'Recovery days', 'Firm pressure under the foot, never a wince', 'Pain reaches 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Calf stretch',
          evidence: {
            level: 'moderate',
            why: 'The 2023 heel pain guideline grades calf stretching A for plantar fasciitis. A tight calf was the strongest risk factor in a 2003 case-control study.',
          },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the heel down and the hips forward. A tight calf pulls on the heel all day, so this stretch targets the single strongest risk factor the 2003 study found.',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: {
            level: 'moderate',
            why: 'Same mechanism as the calf stretch: targets ankle flexibility, the strongest risk factor for plantar fasciitis in the 2003 study.',
          },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          how: 'Take the same wall position, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until you feel it near the heel',
          alt: 'A figure in a wall stretch with the back knee bent, the lower calf highlighted',
        },
        {
          name: 'Plantar fascia stretch',
          evidence: {
            level: 'moderate',
            why: 'The 2023 heel pain guideline grades plantar fascia stretching A for plantar fasciitis.',
          },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most sessions',
          feel: 'A stretch along the arch',
          how: 'Sit and cross the foot over the other knee. Pull the toes back until you feel the stretch along the arch, not the calf. If your heel is worst first thing in the morning, do this one before your foot touches the floor.',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Heel raises, both feet',
          evidence: {
            level: 'moderate',
            why: 'The 2023 heel pain guideline grades strength training B for plantar fasciitis. Not tested for standing fatigue specifically.',
          },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load while the calf builds strength. Hold a wall or rail if you need balance.',
          image: 'Exercise: heel raises, both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
        {
          name: 'Short foot, seated',
          evidence: {
            level: 'early',
            why: 'A 2024 review found short-foot training changed arch shape but not pain. In a 2023 trial it was part of a program that improved arch measures.',
          },
          dose: '3 sets of 10, hold 5 seconds, each foot',
          often: 'Strength days',
          feel: 'The arch lifting, toes relaxed',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts, and hold. Do not curl the toes. The short foot trains the small muscle inside the arch that holds it up during a long day on your feet.',
          image: 'Exercise: short foot, seated',
          media: 'short_foot_seated',
          caption: 'Short foot: pull the ball of the foot toward the heel so the arch lifts',
          alt: 'A seated leg with the foot on the floor, the arch highlighted as it lifts',
        },
        {
          name: 'Single-leg hold',
          evidence: {
            level: 'early',
            why: 'No standing-specific study. General balance work for the foot and ankle.',
          },
          dose: '3 holds of 30 seconds, each leg',
          often: 'Balance days',
          feel: 'Small corrections in the foot and ankle',
          how: 'Stand on one foot and look at one fixed spot. Let the foot wobble. The wobble is the foot doing the balancing. Stand near a wall if you need a safety net.',
          image: 'Exercise: single-leg hold',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: stand on one foot and let it make small corrections',
          alt: 'A figure balancing on one leg, the lower leg muscles highlighted',
        },
        {
          name: 'Foot roll',
          evidence: {
            level: 'early',
            why: 'Not tested in the studies on this page. A comfort measure between sessions.',
          },
          dose: '2 minutes',
          often: 'Recovery days',
          feel: 'Firm pressure under the foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball, with firm pressure. If you are wincing, ease off. Rolling after a long shift settles the tissue and brings some relief before the next day.',
          image: 'Exercise: foot roll',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Do insoles or supportive shoes help feet that hurt from standing?',
      paragraphs: [
        'Supportive shoes and shoe inserts are commonly recommended for foot pain from standing, and there is some basis for it, but the evidence is thinner than for stretching and strength work. The 2023 heel pain guideline grades orthotics on their own **B against** for short-term pain relief, meaning the evidence leans toward not using them as a standalone option. Orthotics combined with other care get a **C**.',
        'What the occupational health review supports is broader: floor mats, supportive footwear and sit-stand options all appear in the list of interventions with some evidence for reducing discomfort during standing work. None of them has a single large trial behind it in the same way calf stretching does. A reasonable approach is to use supportive shoes and a mat if your floor is hard, and do the stretching and strength work for the tissues themselves.',
      ],
      cites: [CITE.guideline, CITE.waters],
    },
    {
      h2: 'Do compression socks help foot pain from standing?',
      keyFact: 'In a trial of 40 security guards standing 12-hour shifts, both 15-20 mmHg and 20-30 mmHg compression stockings avoided the rise in foot and leg discomfort seen with regular socks (Garcia and colleagues, 2023).',
      paragraphs: [
        'Compression stockings have one of the better-controlled studies behind them for standing-related discomfort specifically. In a randomized trial of 40 security guards standing roughly 12-hour shifts, split into three groups, both the 15-20 mmHg and 20-30 mmHg compression-stocking groups avoided the significant rise in foot and leg discomfort, fatigue and swelling seen in the group that wore regular socks. Participants commonly said the lower-pressure stocking was easier to put on.',
        'The trial was small, all male, and tested one occupation. But it is one of the few interventions for standing-related discomfort with a randomized design, which is why it appears ahead of some more popular advice on this page. **Compression stockings do not replace stretching or strength work.** They help manage the swelling and fatigue while the calf and fascia still need their own attention.',
      ],
      sourceNote:
        'Garcia and colleagues (2023): parallel-group design, 40 male security guards randomly assigned to one of three groups (regular socks, 15-20 mmHg, or 20-30 mmHg), each condition worn for a full work shift by a different subset of guards. Discomfort, fatigue and edema measured pre- and post-shift.',
      cites: [CITE.garcia],
    },
    {
      h2: 'Could foot pain from standing be plantar fasciitis, flat feet, or something else?',
      paragraphs: [
        'Foot pain from standing can be general fatigue that goes away with rest, or it can be the beginning of a named condition. The most common one is plantar fasciitis: sharp pain near the heel, usually worst on the first steps after rest. If your heel hurts most in the morning and again after you sit, that pattern points toward plantar fasciitis and the exercises in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/) are the fuller guide.',
        'If your arches feel flat or rolled in by the end of the day, the arch exercises in [flat feet exercises for fallen arches](/flat-feet-exercises/) target the muscles that hold the arch up. A rigid flat foot, one that stays flat even when the foot is off the ground, is structural and needs a clinician rather than exercise.',
        'If the pain is along the shin rather than under the foot, that points toward shin splints, and [shin splints exercises](/shin-splints-exercises/) covers what the research says about it.',
        'Pain at the back of the heel, in the Achilles tendon, is a different problem. Pain on the inside of the ankle can come from the posterior tibial tendon. Both are covered from a runner\'s perspective in [heel pain from running](/heel-pain-runners/). If the pain is at the back of the heel in the Achilles tendon, see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/); if it is the heel-raise exercise itself you want more detail on, see [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
        '**If you are not sure what is causing the pain, see a clinician before loading it with exercise.**',
      ],
    },
    {
      h2: 'How long before your feet feel better on a long shift?',
      paragraphs: [
        'There is no trial that answers this directly for standing-related foot fatigue. General ache and tiredness from standing usually eases within a day or two of rest. If the pain has crossed into plantar fasciitis, the timeline is longer: a review of the clinical evidence reports that about 90% of people with plantar fasciitis improve with non-surgical care such as stretching and shoe inserts, often within 3 to 6 months.',
        'What you can measure sooner is whether the exercises are changing anything. Calf flexibility can start to shift within a few weeks of daily stretching. Retesting calf endurance and balance every few weeks gives a number to look at rather than a guess about whether things feel different. The exercises on this page and the ones in [plantar fasciitis exercises](/plantar-fasciitis-exercises/) are the same tissues, so doing them for standing also covers the most common path toward PF.',
      ],
      cites: [CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Why do my feet hurt more at the end of a standing shift than at the start?',
      a: 'The plantar fascia, calf muscles and veins in the lower leg have a limited tolerance for sustained, static loading, and that tolerance is used up over hours of standing. Gravity pools blood in the feet and lower legs during static standing, adding to the ache and swelling that builds through a shift. Walking breaks help because the calf pump moves blood back up.',
      cites: [CITE.waters],
    },
    {
      q: 'Is foot pain from standing all day the same thing as plantar fasciitis?',
      a: 'Not always. General ache and tiredness from standing is common and usually goes away with rest. Plantar fasciitis is a specific condition with sharp heel pain, often worst on the first steps after rest. Standing most of the workday is an independent risk factor for developing plantar fasciitis, at 3.6 times the odds in one case-control study, so the two are related but not identical.',
      cites: [CITE.riddle],
    },
    {
      q: 'Do compression socks help foot pain from standing?',
      a: 'In a trial of 40 security guards standing 12-hour shifts, randomly assigned to regular socks or one of two compression-stocking groups, both 15-20 mmHg and 20-30 mmHg avoided the rise in foot and leg discomfort, fatigue and swelling seen with regular socks. This is one of the few standing-specific interventions with a controlled trial behind it, though the study was small and all male.',
      cites: [CITE.garcia],
    },
    {
      q: 'Is it normal for feet to hurt after an 8 or 12-hour standing shift?',
      a: 'Some fatigue and ache after a long standing shift is common and consistent with what occupational health research reports. A 2015 review found prolonged standing linked to musculoskeletal discomfort and fatigue across many standing jobs. Common does not mean it should be ignored long-term: the same review notes that floor mats, compression stockings and better shoes measurably reduce these outcomes.',
      cites: [CITE.waters],
    },
    {
      q: 'What is the single best thing to try first for foot pain from standing?',
      a: 'Among the self-care options reviewed on this page, calf and plantar fascia stretching carry the top evidence grade (A) in the 2023 heel pain guideline for heel pain specifically, and compression stockings have the strongest controlled trial behind them for standing-related discomfort. Starting with daily calf stretches and trying compression stockings on your next long shift covers both.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'How long is too long to stand on your feet?',
      a: "There's no single tested safe limit. Occupational health research finds that discomfort, fatigue, and swelling increase the longer a shift involves standing, with the clearest rise over 8- to 12-hour shifts. Comfort depends more on movement than on an hour count: short seated or walking breaks every hour or so help offset the static load standing puts on your feet.",
      cites: [CITE.waters],
    },
    {
      q: 'How can I stand for 10 hours without pain?',
      a: 'No single trick removes pain from a 10-hour shift, but combining approaches helps most: wear cushioned, supportive shoes, add a standing mat on hard floors, take short walking breaks every hour to restart circulation, and do daily calf and plantar fascia stretching. Compression stockings reduced discomfort and swelling in one trial of security guards on long shifts.',
      cites: [CITE.garcia, CITE.waters],
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall',
      'you cannot put weight on the foot, or you are limping',
      'it comes with numbness, tingling, burning, swelling or warmth',
      'the heel or foot is red, or you have a fever or feel unwell',
      'it wakes you at night',
      'it is sharp, or getting worse despite easing the load',
      'pain is localized to one pinpoint spot and worsens with activity, which can be a stress fracture pattern rather than standing fatigue',
      'one leg or foot has swollen suddenly and is painful, red or warm',
      'you have diabetes, reduced feeling in your feet or poor circulation',
      'the pain has not eased after several weeks of lighter load, better footwear and the exercises on this page',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: `You don't have to work out the order, the doses or when to move to a harder version. Walkito builds a plan one week at a time around one goal. If your standing-related foot pain is worst in the morning, the first goal is the same as for heel pain: morning pain at 1/10 or less for ${PROGRAM.painFreeDays} days in a row. If your arches are flat as well, the arch has its own goal and exercises.`,
    more: [
      `You pick ${DAYS} days a week and sessions of ${MINUTES} minutes. Every ${PROGRAM.testEveryDays} days (then every ${PROGRAM.testEveryDaysAfterGoal} once your first goal is met), a short test checks calf endurance, arch hold and balance, so you can see whether the work is doing anything.`,
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If pain is sharp, getting worse or keeping you up at night, see a clinician first.',
    ],
    cta: `Start with ${PROGRAM.sessionMinutes[0]} minutes a day.`,
  },
  crumb: 'Feet hurt from standing',
  campaign: 'guide-standing',
};
