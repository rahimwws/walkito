import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder CITE indices for the three new citations above.
 * Replace with the real indices after appending them to CITATIONS[].
 */

export const NURSES_EN: Guide = {
  lang: 'en',
  page: 'nurses',
  mainSource: CITE.reedNurse,
  published: '2026-10-04',
  updated: '2026-10-04',
  title: 'Foot Pain for Nurses: 12-Hour Shifts, Shoes & Exercises',
  description:
    'Why nurses get foot pain on 12-hour shifts: shoes, compression stockings, exercises, and how to fit a routine around rotating shifts.',
  h1: 'Foot pain for nurses: what helps on 12-hour shifts',
  lede:
    'Nurses walk more in a single shift than most people walk in a day, and they do it on hard floors in shoes that may not fit well. Foot and ankle problems are one of the most common musculoskeletal complaints in nursing, reported by more than half of hospital nurses over a 12-month period in one survey. Most of the things that help, calf stretches, arch exercises, compression stockings, can be done in a few minutes before or after a shift.',
  intro: [
    'This page covers foot pain that comes from the demands of nursing work: prolonged standing, long walking distances and rotating shifts. If your pain is sharp and worst on the first steps after rest, that pattern points toward plantar fasciitis, and the exercises in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/) are the fuller guide. If you are not sure, [why do my feet hurt after standing all day](/feet-hurt-standing-all-day/) covers the overlap between general standing pain and named conditions.',
  ],
  toc: true,
  takeaways: [
    'In a survey of 312 paediatric hospital nurses in Australia, 55.3% reported foot or ankle problems in the past 12 months, and the rate was higher among those working 12-hour shifts in intensive care (Reed and colleagues, 2014).',
    'Nurses walked an average of 9,360 steps per shift in a tracker-based study, roughly 5.8 km over a 9.4-hour shift, a workload well above the general adult average (Chang and Cho, 2022).',
    'In a cross-sectional study of 636 Japanese hospital nurses, 51% reported foot pain or disability in the past month, and 17% had pain that interfered with daily activities (Tojo and colleagues, 2018).',
    'Reduced ankle flexibility, meaning a tight calf, was the single strongest predictor of plantar fasciitis in a case-control study of 50 cases and 100 controls, at 23.3 times the odds. Standing for most of the working day raised them 3.6 times (Riddle and colleagues, 2003).',
    'In a trial of 40 security guards standing 12-hour shifts, both 15-20 mmHg and 20-30 mmHg compression stockings prevented the rise in discomfort and swelling seen with regular socks (Garcia and colleagues, 2023).',
  ],
  sections: [
    {
      h2: 'How common is foot pain in nurses?',
      paragraphs: [
        'Foot and ankle pain is one of the top three musculoskeletal complaints in nurses, alongside lower back and neck pain. In a survey of 312 paediatric hospital nurses, 55.3% reported foot or ankle musculoskeletal problems in the past 12 months, and 43.8% had symptoms in the past seven days alone. One in six nurses said the pain limited their physical activity. Working 12-hour shifts in the intensive care unit was the single work-related factor that independently raised the odds of disabling foot problems.',
        'A separate study of 636 hospital nurses in Japan found that 51% reported foot pain or disability in the past month when assessed with a validated questionnaire. The prevalence of pain that prevented normal work was 17%. A tracker-based study of Korean nurses found an average of 5.8 km walked per shift, a physical demand well above the general population.',
        'A cross-sectional study of 411 Finnish nurses found that dry skin, foot pain and calluses were the most common foot complaints, and that foot problems were associated with decreased working ability. The authors called for prevention of foot problems in nurses to be prioritised.',
      ],
      cites: [CITE.changCho, CITE.reedNurse, CITE.tojo, CITE.stoltNurse],
    },
    {
      h2: 'Why do nurses get foot pain on 12-hour shifts?',
      paragraphs: [
        'Three things combine on a nursing shift: prolonged standing, long walking distances and hard floors. Standing still loads the plantar fascia, calf muscles and heel pad without the pumping action that walking provides. Walking helps blood return from the legs, but nurses alternate unpredictably between standing still at a bedside and walking long corridors, so the calf pump never settles into a steady rhythm.',
        'A 2015 review of the occupational health literature found prolonged standing at work associated with musculoskeletal discomfort, fatigue and leg pain across many standing occupations, with nurses cited as one of the highest-risk groups. The review noted that cardiovascular strain and leg swelling increase with standing duration.',
        'On the tissue level, a tight calf is a key piece. A case-control study of 50 people with plantar fasciitis and 100 matched controls found that reduced ankle flexibility, meaning the ankle cannot bend upward as far as it should because the calf is tight, was the single strongest independent risk factor for plantar fasciitis, at 23.3 times the odds. Standing for most of the working day raised the odds 3.6 times. Nurses face both risk factors at once.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'What exercises help nurses with foot pain?',
      paragraphs: [
        'The exercises that help are the same ones that target plantar fasciitis and standing-related foot pain: calf stretches, a plantar fascia stretch, heel raises for calf strength, and an arch exercise called the short foot. The difference for nurses is fitting them in around rotating shifts, not during them. A few minutes before or after a shift is enough to cover the most important ones.',
        'The 2023 heel pain guideline gives calf and plantar fascia stretching its top grade, A, and strength training a B. Both grades are for plantar fasciitis specifically, but the tissues involved are the same ones that take the load during a nursing shift. If any exercise brings your pain to 6 out of 10 or higher, stop for the day.',
      ],
      exercises: [
        {
          name: 'Calf stretch (straight knee)',
          evidence: {
            level: 'moderate',
            why: 'The 2023 heel pain guideline grades calf stretching A for plantar fasciitis. A tight calf was the strongest risk factor in a 2003 case-control study.',
          },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Put your hands on a wall. Keep the back leg straight, the heel down and the hips forward. This targets the gastrocnemius, the bigger outer calf muscle. You can do this in the break room or against any wall.',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning against a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Calf stretch (bent knee)',
          evidence: {
            level: 'moderate',
            why: 'Same guideline support as the straight-knee version. Targets the soleus, the deeper calf muscle.',
          },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same wall position, but bend the back knee until you feel the stretch lower down, closer to the heel. The soleus, the deeper calf muscle, only lets go when the knee is bent.',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee to feel it near the heel',
          alt: 'A figure in a wall stretch with the back knee bent, the lower calf highlighted',
        },
        {
          name: 'Plantar fascia stretch',
          evidence: {
            level: 'moderate',
            why: 'The 2023 heel pain guideline grades plantar fascia stretching A.',
          },
          dose: '2 holds of 30 seconds, each foot',
          how: 'Sit and cross one foot over the other knee. Pull the toes back gently until you feel a stretch along the arch. If your heel is worst on the first steps of the day, do this one before your feet touch the floor in the morning.',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back gently until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back while seated, the arch highlighted',
        },
        {
          name: 'Heel raises, both feet',
          evidence: {
            level: 'moderate',
            why: 'The 2023 heel pain guideline grades strength training B for plantar fasciitis. Builds the calf strength that absorbs impact during a shift.',
          },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes over about three seconds, then lower slowly over three seconds. Hold a wall or rail for balance. The deep detail on this exercise, including how to progress and the towel variation, is in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
          media: 'heel_raise_double',
          caption: 'Heel raises: rise over the big toes, lower slowly',
          alt: 'A standing figure rising onto the toes of both feet with the calves highlighted',
        },
        {
          name: 'Short foot, seated',
          evidence: {
            level: 'early',
            why: 'A 2024 review found short-foot training changed arch shape but not pain. Walkito includes it as part of a broader program.',
          },
          dose: '3 sets of 10, hold 5 seconds, each foot',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts, without curling the toes. This trains the small muscles inside the arch that support it during a long day on your feet.',
          media: 'short_foot_seated',
          caption: 'Short foot: pull the ball of the foot toward the heel so the arch lifts',
          alt: 'A seated leg with the foot on the floor, the arch highlighted as it lifts',
        },
        {
          name: 'Toe spread',
          evidence: {
            level: 'early',
            why: 'Not part of the tested programs on this page. Targets intrinsic foot muscles compressed inside work shoes.',
          },
          dose: '3 sets of 10, hold 5 seconds',
          how: 'Sit or stand and spread all five toes apart as wide as you can, then hold. After a shift in snug shoes, this wakes up the small muscles between the toes.',
          media: 'toe_spread',
          caption: 'Toe spread: spread all five toes apart and hold',
          alt: 'A foot viewed from above with toes spread wide apart',
        },
      ],
      table: {
        caption: 'Starting doses for nurses with foot pain',
        head: ['Exercise', 'Dose', 'When', 'What you should feel'],
        rows: [
          ['Calf stretch (straight knee)', '2 x 30 seconds, each leg', 'Before or after shift', 'A stretch in the upper calf'],
          ['Calf stretch (bent knee)', '2 x 30 seconds, each leg', 'Before or after shift', 'A stretch low in the calf, near the heel'],
          ['Plantar fascia stretch', '2 x 30 seconds, each foot', 'Before shift or on waking', 'A stretch along the arch'],
          ['Heel raises', '3 x 10, both feet', 'Off-shift or after shift', 'The calves working, not sharp pain'],
          ['Short foot', '3 x 10 (5-second hold), each foot', 'Off-shift or after shift', 'The arch lifting, toes relaxed'],
          ['Toe spread', '3 x 10 (5-second hold)', 'After shift', 'Toes spreading, no pain'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'How do you fit exercises around rotating shifts?',
      paragraphs: [
        'A 12-hour shift leaves little time for a separate exercise routine, and rotating between day and night shifts makes scheduling even harder. The stretches on this page take about 3 minutes, so the simplest approach is to do them right before or right after a shift, at the same point in your routine every time. For example, do them after you change into or out of your work shoes.',
        'On days off, add the strength exercises: heel raises and the short foot. These take about 5 to 10 minutes. Doing strength work on off days, rather than after a demanding shift, means the calf and arch have recovery time before the next stint on your feet.',
        'Three sessions a week is a reasonable starting point. If you work three 12-hour shifts with four days off, that fits strength work on each off day. If you rotate between day and night shifts, the time of day does not matter. What matters is consistency, not the clock.',
      ],
    },
    {
      h2: 'Do nursing shoes make a difference: clogs, sneakers or something else?',
      paragraphs: [
        'Footwear is one of the most discussed topics among nurses, but the evidence for one type over another is limited. A 2007 evaluation of three brands of professional nursing shoes found that the shoe with a more cushioned insole and better arch support reduced lower-extremity muscle effort compared to the other two, but the study was small and brand-specific.',
        'What the research does support more broadly is that footwear comfort matters. In a survey of 125 nurses across emergency and outpatient departments, 72% of nurses reporting low footwear comfort also reported foot and heel pain, compared with 28% of those reporting high footwear comfort. The 2023 heel pain guideline grades orthotics on their own B-against for short-term plantar fasciitis relief, meaning evidence leans against using them as a standalone option.',
        'A practical approach: choose a shoe that fits well, has some cushioning and does not pinch the toes. If you already have heel or arch pain, the exercises on this page target the tissues directly. Shoes and inserts can help with comfort during a shift, but they do not replace the stretching and strength work.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Do compression stockings help nurses with foot and leg pain?',
      paragraphs: [
        'Compression stockings have one of the better-controlled studies behind them for standing-related discomfort. In a randomized trial of 40 security guards standing roughly 12-hour shifts, both the 15-20 mmHg and the 20-30 mmHg compression-stocking groups avoided the significant rise in foot and leg discomfort, fatigue and swelling seen in the group that wore regular socks. Participants commonly said the lower-pressure stocking was easier to put on.',
        'A pilot randomized trial of 20 nursing students compared knee-length and thigh-length compression stockings worn during 9-hour clinical training shifts. Both groups reported high satisfaction, though the sample was too small to show clear differences in outcomes between the two lengths.',
        'The Garcia trial was all male security guards, not nurses, and neither study was large. But compression stockings are one of the few standing-specific interventions with randomized evidence behind them. A 2015 occupational health review lists them alongside floor mats and supportive footwear as interventions with some evidence for reducing discomfort during prolonged standing work. They do not replace stretching or strength work. They manage the swelling and fatigue, while the calf and fascia still need their own attention.',
      ],
      sourceNote:
        'Garcia and colleagues (2023): parallel-group design, 40 male security guards randomly assigned to three groups (regular socks, 15-20 mmHg, 20-30 mmHg), each worn for a full work shift. Discomfort, fatigue and edema measured pre- and post-shift.',
      cites: [CITE.garcia, CITE.waters],
    },
    {
      h2: 'What can you do before and after a shift in 3, 5, or 10 minutes?',
      paragraphs: [
        'If you have 3 minutes: do the two calf stretches (straight knee and bent knee, 30 seconds each side). That covers the single strongest modifiable risk factor, a tight calf, and takes the same time as tying your shoes.',
        'If you have 5 minutes: add the plantar fascia stretch (30 seconds each foot). This is the combination the 2023 guideline grades A for plantar fasciitis. If your heel is worst on the first steps of the day, do the fascia stretch before your feet touch the floor.',
        'If you have 10 minutes: add the heel raises (3 sets of 10) and the short foot (3 sets of 10 with a 5-second hold). This covers the strength side, graded B in the guideline. On off days, 10 minutes covers everything on this page.',
        'Consistency matters more than length. Three minutes of calf stretching every shift day, done at the same point in your routine, is more useful than a longer session you skip when the schedule changes.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Could foot pain from a nursing shift be plantar fasciitis or something else?',
      paragraphs: [
        'General ache and tiredness from a long shift is common and usually goes away with rest. Plantar fasciitis is a specific condition: sharp pain near the heel, worst on the first steps after rest (getting out of bed, standing after a long sit). If your pain follows that pattern, the exercises in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/) are the fuller guide, and the calf raise detail is in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
        'If your arches feel flat or rolled in by the end of a shift, the arch exercises in [flat feet exercises for fallen arches](/flat-feet-exercises/) target the muscles that hold the arch up. Pain along the shin could be shin splints. Pain in the Achilles tendon at the back of the heel is a different problem.',
        'If pain from standing is your main question and you are not a nurse, [why do my feet hurt after standing all day](/feet-hurt-standing-all-day/) covers the same exercises with a broader audience. For the standing-desk version of this problem, see [standing desk foot pain](/standing-desk-foot-pain/). If you are not sure what is causing the pain, see a clinician before loading it with exercise.',
      ],
    },
  ],
  faq: [
    {
      q: 'How many steps do nurses walk in a 12-hour shift?',
      a: 'In a tracker-based study of Korean hospital nurses, the average was about 9,360 steps per shift, covering roughly 5.8 km over 9.4 hours. That is well above the average daily step count for the general adult population, and the sustained walking on hard floors is a major contributor to foot pain in nursing.',
      cites: [CITE.changCho, CITE.tojo],
    },
    {
      q: 'Are 12-hour shifts worse for foot pain than 8-hour shifts?',
      a: 'In a survey of paediatric hospital nurses, working 12-hour shifts in the intensive care unit was the single work factor that independently raised the odds of disabling foot and ankle problems. The total load on the foot increases with shift length, and recovery time between shifts is shorter when the shifts themselves are longer. That said, the type of work and the floor surface matter too, not just the hours.',
      cites: [CITE.reedNurse],
    },
    {
      q: 'Should nurses wear clogs or sneakers for foot pain?',
      a: 'There is no large trial comparing nursing clogs to sneakers for foot outcomes. What the evidence does support is that footwear comfort is strongly associated with foot pain: in one survey, 72% of nurses reporting low footwear comfort also reported foot and heel pain. Choose a shoe that fits well, has some cushioning and does not pinch the toes. Shoes alone do not replace the stretching and strength work on this page.',
    },
    {
      q: 'Do compression socks help nurses on long shifts?',
      a: 'In a randomized trial of 40 security guards standing 12-hour shifts, both 15-20 mmHg and 20-30 mmHg compression stockings prevented the rise in discomfort and swelling seen with regular socks. The trial was not in nurses specifically, but the mechanism is the same: compression helps blood return from the lower legs during long periods on your feet. Most participants found the lower-pressure stocking easier to put on.',
      cites: [CITE.garcia],
    },
    {
      q: 'Is foot pain from nursing something you just have to live with?',
      a: 'Foot pain from standing and walking is common in nursing, but "common" does not mean inevitable. The 2023 heel pain guideline grades calf and fascia stretching A and strength training B. Compression stockings have randomized evidence behind them for standing-related discomfort. A few minutes of calf stretching before or after each shift, combined with strength work on off days, targets the tissues that take the most strain.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'Can plantar fasciitis develop from nursing work?',
      a: 'Standing for most of the working day raised the odds of plantar fasciitis 3.6 times in a matched case-control study of 50 cases and 100 controls. Reduced ankle flexibility raised them 23.3 times. Nurses face both risk factors, prolonged standing and limited break time to stretch, which is why the exercises on this page overlap heavily with those in the plantar fasciitis guide.',
      cites: [CITE.riddle],
    },
    {
      q: 'What is the single best thing a nurse can do first for foot pain?',
      a: 'Among the options reviewed on this page, daily calf stretching has the strongest guideline backing (grade A for plantar fasciitis) and targets the single strongest modifiable risk factor, a tight calf. It takes about 2 minutes, needs no equipment and can be done in the break room or at home. Adding compression stockings on shift days covers the swelling and fatigue side.',
      cites: [CITE.guideline, CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed a specific injury or fall at work',
      'you cannot put weight on the foot, or you are limping',
      'the foot is numb, tingling, burning, swollen or warm',
      'the heel or foot is red, or you have a fever or feel unwell',
      'pain wakes you at night',
      'pain is sharp, or getting worse despite easing the load',
      'pain is in one pinpoint spot and gets worse with activity, which can be a stress fracture pattern and not standing fatigue',
      'one leg or foot has swollen suddenly and is painful, red or warm',
      'you have diabetes, reduced feeling in your feet or poor circulation',
      'the pain has not eased after several weeks of lighter shifts, better shoes and the exercises on this page',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text:
      'You do not have to work out the order, the doses or when to move to a harder version. Walkito builds a plan one week at a time around one goal. If your foot pain follows the morning-pain pattern of plantar fasciitis, the first goal is morning pain at 1 out of 10 or less for 14 days in a row.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once your first goal is met), a short test checks calf endurance, arch hold and balance, so you can see whether the work is doing anything. On rotating shifts, the time of day does not matter. What matters is hitting the sessions consistently.',
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If pain is sharp, getting worse or keeping you up at night, see a clinician first.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Foot pain for nurses',
  campaign: 'guide-nurses',
};
