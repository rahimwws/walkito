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
  updated: '2026-10-26',
  title: 'Feet Hurt From Standing All Day? Causes and What Helps',
  description:
    'Why feet hurt from standing all day, and what helps: calf and arch stretches, calf strength, compression socks, shoes and mats, and when to see a doctor.',
  h1: 'Why do my feet hurt from standing all day?',
  lede:
    'Feet hurt from standing all day because hours on a hard floor load the same tissues (the plantar fascia, calf and heel) without the pumping action that walking gives your calves and veins. What helps: calf and plantar fascia stretches, some calf strength work, compression socks on long shifts, and supportive shoes, a floor mat and short walking breaks.',
  intro: [
    'Not all foot pain from standing is [plantar fasciitis](/plantar-fasciitis/), but the two overlap, and the exercises that help both are largely the same. If you are choosing work shoes, our guide to [shoes for nurses with plantar fasciitis](/best-shoes-for-nurses-with-plantar-fasciitis/) sets out what the studies say about footwear for long shifts.',
  ],
  toc: true,
  takeaways: [
    'Standing for most of the workday raised the odds of plantar fasciitis 3.6 times in a case-control study of 50 cases and 100 controls. Reduced ankle flexibility raised them 23.3 times (Riddle and colleagues, 2003).',
    'The 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, A, and strength training a B.',
    'In a trial of 40 security guards on 12-hour standing shifts, both 15-20 mmHg and 20-30 mmHg compression stockings prevented the rise in foot and leg discomfort seen with regular socks (Garcia and colleagues, 2023).',
    'A 2015 review linked prolonged standing at work with discomfort, fatigue and leg pain, and listed floor mats, compression stockings and supportive footwear among the interventions with evidence behind them (Waters and Dick, 2015).',
  ],
  sections: [
    {
      h2: 'What helps feet that hurt from standing all day?',
      paragraphs: [
        'Combine a few things rather than relying on one. In rough order of the evidence behind them:',
        {
          list: [
            '**Calf and plantar fascia stretches.** Graded A, the top grade, in the 2023 heel pain guideline. A tight calf was the strongest risk factor for plantar fasciitis in a 2003 study.',
            '**Calf and arch strength work.** Graded B in the same guideline.',
            '**Compression socks on long shifts.** One of the few standing-specific options with a randomized trial behind it.',
            '**Supportive shoes, a floor mat on hard floors, and short walking breaks.** Floor mats and supportive footwear are among the options the occupational health review lists, though none has a single large trial behind it.',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.garcia, CITE.waters],
    },
    {
      h2: 'Which exercises help feet that hurt from standing?',
      keyFact: 'The 2023 heel pain guideline grades plantar fascia and calf stretching A, its top grade, and resistance and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'These exercises target the calf, the plantar fascia and the small muscles that support the arch. They are Walkito\'s starting doses, not a prescription. The guideline grades are for plantar fasciitis specifically, not general standing fatigue, but the tissues involved are the same. If your pain is near the heel and worst on the first steps in the morning, the fuller set is in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/). If any exercise takes your pain to **6/10 or more**, stop for the day. [How these guides are written](/about/).',
      ],
      table: {
        head: ['Exercise', 'Dose', 'How often', 'What you should feel', 'Stop if'],
        rows: [
          ['Calf stretch', '3 holds of 30 seconds, each leg', 'Most sessions', 'A stretch in the calf of the straight back leg', 'Pain reaches 6/10'],
          ['Soleus stretch', '3 holds of 30 seconds, each leg', 'Most sessions', 'A stretch low in the calf, near the heel', 'Pain reaches 6/10'],
          ['Plantar fascia stretch', '10 holds of 10 seconds, each foot', 'Most sessions', 'A stretch along the arch, not the calf', 'Pain reaches 6/10'],
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
          dose: '3 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the heel down and the hips forward.',
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
          dose: '3 holds of 30 seconds, each leg',
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
          dose: '10 holds of 10 seconds, each foot',
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
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Hold a wall or rail if you need balance.',
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
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts, and hold. Do not curl the toes.',
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
          how: 'Stand on one foot and look at one spot ahead. Let the foot wobble: the wobble is the foot doing the balancing. Stand near a wall if you need a safety net.',
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
          how: 'Sit and roll the sole of your foot slowly over a massage ball, with firm pressure. If you are wincing, ease off.',
          image: 'Exercise: foot roll',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Why do your feet hurt after standing all day?',
      keyFact: 'In a 2003 case-control study, reduced ankle flexibility raised the odds of plantar fasciitis 23.3 times, the strongest risk factor found, and standing most of the working day raised the odds 3.6 times (Riddle and colleagues, 2003).',
      paragraphs: [
        '**Standing still loads the plantar fascia, calf muscles and heel without giving them a break.** Walking pumps blood back up from the legs with each step. Standing takes that pump away, so blood pools in the lower legs and the tissues under the foot carry the same static load for hours.',
        'A 2015 review of the occupational health research found prolonged standing associated with low back pain, leg pain, discomfort and fatigue across many standing jobs, with leg swelling and cardiovascular strain rising with standing time. The authors noted that the threshold between safe and harmful standing time varies across people and jobs.',
        'A 2003 case-control study of 50 people with plantar fasciitis and 100 matched controls found two risk factors that stood out. Reduced ankle flexibility, meaning a [tight calf](/tight-calves/), was the strongest, at 23.3 times the odds. Standing for most of the working day raised the odds 3.6 times. The two are connected: a tight calf keeps the heel under more tension during every minute of standing.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Do compression socks help foot pain from standing?',
      keyFact: 'In a trial of 40 security guards standing 12-hour shifts, both 15-20 mmHg and 20-30 mmHg compression stockings avoided the rise in foot and leg discomfort seen with regular socks (Garcia and colleagues, 2023).',
      paragraphs: [
        'In one small trial, yes, and it is one of the few standing-specific options with a randomized design. Forty security guards on roughly 12-hour shifts were split into three groups: both the 15-20 mmHg and 20-30 mmHg stocking groups avoided the significant rise in foot and leg discomfort, fatigue and swelling seen with regular socks. Participants commonly said the lower-pressure stocking was easier to put on.',
        'The trial was small, all male, and tested one occupation. **Compression stockings do not replace stretching or strength work**: they help with swelling and fatigue, while the calf and fascia still need their own work.',
      ],
      sourceNote:
        'Garcia and colleagues (2023): parallel-group design, 40 male security guards randomly assigned to one of three groups (regular socks, 15-20 mmHg, or 20-30 mmHg), each condition worn for a full work shift by a different subset of guards. Discomfort, fatigue and edema measured pre- and post-shift.',
      cites: [CITE.garcia],
    },
    {
      h2: 'Do insoles or supportive shoes help feet that hurt from standing?',
      paragraphs: [
        'Supportive shoes and [shoe inserts](/insoles-vs-exercises/) are commonly recommended, but the evidence is thinner than for stretching and strength work. The 2023 heel pain guideline grades orthotics on their own **B against** for short-term pain, meaning the evidence leans toward not using them as a standalone option. Orthotics combined with other care get a **C**.',
        'The occupational health review lists floor mats, supportive footwear and sit-stand options among the interventions with some evidence for reducing discomfort in standing work, though none has a single large trial behind it. A reasonable approach: supportive shoes and a mat if your floor is hard, plus the stretching and strength work. Pages for specific jobs: [teachers](/teachers-foot-pain/), [retail and warehouse workers](/retail-warehouse-foot-pain/), [chefs and kitchen staff](/chefs-foot-pain/) and [hairdressers](/hairdressers-foot-pain/).',
      ],
      cites: [CITE.guideline, CITE.waters],
    },
    {
      h2: 'Could foot pain from standing be plantar fasciitis or something else?',
      paragraphs: [
        'Foot pain from standing can be general fatigue that goes away with rest, or the start of a named condition:',
        {
          list: [
            '**Heel pain worst on the first steps in the morning and after sitting** points toward plantar fasciitis: see [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/).',
            '**Arches that feel flat or rolled in by the end of the day:** see [flat feet exercises for fallen arches](/flat-feet-exercises/). A rigid flat foot, one that stays flat even off the ground, needs a clinician rather than exercise.',
            '**Pain along the shin:** see [shin splints exercises](/shin-splints-exercises/).',
            '**Pain at the back of the heel, in the Achilles tendon:** see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/). Pain on the inside of the ankle can come from the posterior tibial tendon; see [heel pain from running](/heel-pain-runners/).',
          ],
        },
        '**If you are not sure what is causing the pain, see a clinician before loading it with exercise.**',
      ],
    },
    {
      h2: 'How long before your feet feel better?',
      paragraphs: [
        'No trial answers this directly for standing-related foot fatigue. General ache and tiredness from standing usually eases within a day or two of rest. If the pain has become plantar fasciitis, it takes longer: a review of the clinical evidence reports that about 90% of people with plantar fasciitis improve with non-surgical care such as stretching and shoe inserts, often within 3 to 6 months.',
      ],
      cites: [CITE.latt],
    },
  ],
  faq: [
    {
      q: 'How do I stop my feet from hurting when I stand all day?',
      a: 'Combine several things: cushioned, supportive shoes, a standing mat on hard floors, short walking breaks every hour to restart circulation, and regular calf and plantar fascia stretching. Calf stretching has the top grade in the 2023 heel pain guideline for heel pain, and compression stockings reduced discomfort and swelling in one trial of security guards on long shifts.',
      cites: [CITE.guideline, CITE.garcia, CITE.waters],
    },
    {
      q: 'Why do my feet hurt more at the end of a standing shift than at the start?',
      a: 'The plantar fascia, calf muscles and lower-leg veins tolerate only so much static loading, and hours of standing use that up. Gravity pools blood in the feet and lower legs while you stand still, adding to the ache and swelling that builds through a shift. Walking breaks help because the calf pump moves blood back up.',
      cites: [CITE.waters],
    },
    {
      q: 'Is foot pain from standing all day the same as plantar fasciitis?',
      a: 'Not always. General ache and tiredness from standing is common and usually goes away with rest. Plantar fasciitis is a specific condition with sharp heel pain, often worst on the first steps after rest. Standing most of the workday raised the odds of plantar fasciitis 3.6 times in one case-control study, so the two are related but not identical.',
      cites: [CITE.riddle],
    },
    {
      q: 'Do compression socks help foot pain from standing?',
      a: 'Compression socks helped in one controlled trial. Among 40 security guards on 12-hour standing shifts, both 15-20 mmHg and 20-30 mmHg stockings avoided the rise in foot and leg discomfort, fatigue and swelling seen with regular socks. It is one of the few standing-specific options with a trial behind it, though the study was small and all male.',
      cites: [CITE.garcia],
    },
    {
      q: 'Is it normal for feet to hurt after an 8 or 12-hour shift?',
      a: 'Some ache after a long standing shift is common and consistent with occupational health research. A 2015 review found prolonged standing linked to musculoskeletal discomfort and fatigue across many standing jobs. Common does not mean it should be ignored long-term: the same review lists floor mats, compression stockings and better shoes among interventions with evidence for reducing it.',
      cites: [CITE.waters],
    },
    {
      q: 'How long is too long to stand on your feet?',
      a: "There's no single tested safe limit. Occupational health research finds that discomfort, fatigue and swelling increase the longer a shift involves standing, with the clearest rise over 8- to 12-hour shifts. Comfort depends more on movement than on an hour count: short seated or walking breaks every hour or so help offset the static load on your feet.",
      cites: [CITE.waters],
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
    cta: `Start with a ${PROGRAM.sessionMinutes[0]}-minute session.`,
  },
  crumb: 'Feet hurt from standing',
  campaign: 'guide-standing',
};
