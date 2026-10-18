import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Walking with plantar fasciitis (EN). Research 2026-10-17.
 * No trial gives a daily step number or walking distance for plantar
 * fasciitis; the page says so and sets no step target.
 * Load: 2023 JOSPT CPG summary table, "Patient Education and Counseling" E
 * (theoretical/foundational): strategies to modify weight-bearing loads,
 * footwear options. Orthoses B against alone, C combined (heel cushioning).
 * Pain-monitoring: Silbernagel 2007 (38 people, Achilles, not plantar
 * fasciitis), Morrissey 2021 best practice guide ("pain-monitoring strongly
 * recommended"; avoid barefoot and flat shoes until symptoms resolve).
 * Advice alone: Riel 2023 (180 adults, all groups improved meaningfully at
 * the 12-week endpoint, written here as "about three months"); advice content
 * from the trial protocol (NEW_rielFixHeelProtocol).
 * Activity vs standing: Landorf 2023 (50 vs 25). General-health steps: Paluch
 * 2022 (NEW_paluchSteps), labelled as not about heel pain.
 * Doses match the heel pain guide (en.ts).
 */

export const WALKING_PF_EN: Guide = {
  lang: 'en',
  page: 'walkingPf',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Walking With Plantar Fasciitis: How Much Is OK?',
  description:
    'Walking with plantar fasciitis: a simple pain rule for during and the next morning, the truth about step counts, plus shoes, surfaces and building back up.',
  h1: 'How much walking is OK with plantar fasciitis?',
  lede:
    'You can usually keep walking with [plantar fasciitis](/plantar-fasciitis/), as long as the pain stays moderate while you walk and settles by the next morning. The 2023 heel pain guideline recommends advice on adjusting your weight-bearing load and does not tell people to stop walking, though it grades that advice **E**, meaning it rests on theory, not trials (Koc and colleagues, 2023). No study gives a safe number of steps, so the next-morning check is a better guide than a step target.',
  intro: [
    'This page is about how much to walk while your heel hurts and how to build back up. If your main question is why the heel aches after a walk, see [heel pain after walking](/heel-pain-after-walking/). If your feet hurt from standing in one place, see [feet hurt from standing all day](/feet-hurt-standing-all-day/).',
  ],
  takeaways: [
    'The 2023 heel pain guideline lists advice on changing weight-bearing loads at work, in leisure and in daily life, plus footwear advice, at grade **E**: based on theory, not trials (Koc and colleagues, 2023).',
    'In a trial of 180 adults with plantar fasciopathy, a group given only advice to stay active, cut back on pain-aggravating activities and wear a heel cup improved by a clinically meaningful amount at about three months (Riel and colleagues, 2023).',
    'One pain-monitoring rule allows pain up to about 5 out of 10 during activity, as long as it settles by the next morning and does not build week to week. It was tested in 38 people with Achilles pain, not plantar fasciitis (Silbernagel and colleagues, 2007).',
    'No study gives a daily step count for plantar fasciitis. In 50 people with heel pain and 25 without, activity levels did not differ, but the heel pain group stood 3.4 hours a day longer (Landorf and colleagues, 2023).',
    'A 2021 best practice guide for heel pain advises shoes with a small heel-to-toe drop and avoiding barefoot walking and flat, unsupportive shoes until symptoms are gone (Morrissey and colleagues, 2021).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Is walking good or bad for plantar fasciitis?',
      keyFact: 'In a trial of 180 adults, the group given advice to stay active but cut back on pain-aggravating activities, plus a heel cup, improved by a clinically meaningful amount at about three months (Riel and colleagues, 2023).',
      paragraphs: [
        '**Walking is not the enemy, but too much at once can flare the heel.** The 2023 heel pain guideline does not tell people to stop walking. Its summary lists education on ways to change weight-bearing loads at work, in leisure and in daily life, and on footwear. It grades that advice **E**, which means theory and basic science support it, but no trial has tested it (Koc and colleagues, 2023).',
        'The guideline also lists heel pain that started after a recent increase in weight-bearing activity as a typical feature of plantar fasciitis. So the question is rarely whether to walk. It is how much, and how fast you add more.',
        'A Danish trial compared simple advice with added treatments. 180 adults with plantar fasciopathy (another name for plantar fasciitis) were split into three groups. One got only advice and a heel cup; the other two added heel raise training, and one of those also got a steroid injection. The advice was to cut back on activities that cause flare-ups and then slowly return to former activity levels, guided by symptoms. All three groups improved by a clinically meaningful amount at about three months (Riel and colleagues, 2023).',
        'Walking itself may not be what links to heel pain. In a 2023 study, 50 people with heel pain and 25 matched people without it reported similar physical activity. The difference was standing: the heel pain group stood 3.4 hours a day longer (Landorf and colleagues, 2023). That study shows a link, not a cause. If your day is mostly standing, [feet hurt from standing all day](/feet-hurt-standing-all-day/) covers that side.',
      ],
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.rielFixHeelProtocol, CITE.landorfFootwear],
    },
    {
      h2: 'How much walking is OK? A simple pain rule',
      keyFact: 'In a trial of 38 people with Achilles pain, those who kept up activity with pain held to about 5 out of 10, settling by the next morning, did as well at twelve months as those who paused running and jumping for six weeks (Silbernagel and colleagues, 2007).',
      paragraphs: [
        '**Use your pain as the dose meter, and check it twice: during the walk and the next morning.** No study has tested a walking rule for plantar fasciitis. The closest tested rule comes from tendon rehab, so use it as a borrowed guide, not a proven limit for the heel.',
        'In a 2007 trial, 38 people with Achilles tendon pain were split into two groups. One group kept running and jumping, using a pain-monitoring model: pain up to about 5 out of 10 was allowed during activity, as long as it settled by the next morning and did not build from week to week. The other group stopped those activities for the first six weeks. Both groups improved, and keeping active did not lead to worse results at twelve months (Silbernagel and colleagues, 2007). More on that trial is in [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
        'For heel pain, a 2021 best practice guide, built from a review of 51 trials, interviews with 14 experts and a patient survey, says pain-monitoring was strongly recommended and that people should be taught to read their pain response to activity (Morrissey and colleagues, 2021). It does not give a number. The table below applies the tested rule to walking, scored from 0 (no pain) to 10 (worst pain). The next-walk column is a practical reading of that rule, not a tested protocol.',
      ],
      table: {
        caption: 'Reading your heel after a walk (0 to 10 pain scale)',
        head: ['What you notice', 'What it means', 'Next walk'],
        rows: [
          ['0 to 2 during, normal next morning', 'Well within limits', 'Keep it, or add a little'],
          ['3 to 5 during, settled by next morning', 'Acceptable load', 'Repeat the same walk'],
          ['Above 5 during the walk', 'Too much for today', 'Shorten it or slow down'],
          ['First steps next morning worse than usual', 'Too much yesterday', 'Cut back, then rebuild'],
          ['Worse each week', 'Load is creeping up', 'Step back and see a clinician if it continues'],
        ],
      },
      after: [
        'The morning check matters most. First-step pain is the classic plantar fasciitis symptom, and it is the clearest sign of how your foot coped with yesterday. [Heel pain in the morning](/heel-pain-in-the-morning/) covers that pattern and the stretches to do before you stand.',
        'Sharp pain that makes you limp, pain that is building with every walk and not easing with rest, or pain at night is outside this rule. Check the list at the end of this page.',
      ],
      sourceNote: 'Silbernagel 2007: 19 people per group; VISA-A-S score went from 57 to 85 in the activity group and from 57 to 91 in the rest group at twelve months, with no significant difference in the rate of improvement.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'How many steps a day is OK with plantar fasciitis?',
      keyFact: 'No study gives a daily step count for plantar fasciitis. In a pooled analysis of 47,471 adults, the drop in risk of death levelled off at 6,000 to 8,000 steps a day in people aged 60 or over (Paluch and colleagues, 2022).',
      paragraphs: [
        '**There is no evidence-based step number for plantar fasciitis.** We found no trial that set a step count or walking distance for people with heel pain and measured the result. Any page that gives you a set figure for heel pain is guessing.',
        'The well-known 10,000 steps is a general health target, not a foot research figure, and even there the evidence behind it is thin. A 2022 analysis of 15 studies and 47,471 adults found that more daily steps went with a lower risk of death, but the benefit levelled off at about 6,000 to 8,000 steps a day in adults aged 60 or over, and 8,000 to 10,000 in younger adults (Paluch and colleagues, 2022). That is about long-term health, not about what an irritated heel can handle this week.',
        'A more useful number is your own. Most phones count steps. Look at a normal week before the heel flared and a normal week now. That gives you a starting point, and the pain rule above tells you whether to hold, add or cut back.',
        'Breaking walking up may help more than the total. The 2021 best practice guide advises breaking up long periods of static loading, such as standing (Morrissey and colleagues, 2021). Several short walks spread over the day put the heel through less continuous load than one long one, though no study has compared the two for plantar fasciitis.',
      ],
      cites: [CITE.paluchSteps, CITE.morrisseyBestPractice],
    },
    {
      h2: 'How do you build walking back up?',
      paragraphs: [
        'The advice tested in the Danish trial was to cut back on activities that cause flare-ups, then slowly return to former activity levels guided by symptoms (Riel and colleagues, 2020). It did not set a weekly percentage, and no study has tested one for plantar fasciitis. Here is one way to put that advice into practice:',
        {
          list: [
            'Find a walk that passes the pain rule: moderate pain at most during it, and a normal next morning. If even a short walk fails, start with less.',
            'Repeat that walk for a few days. One good day is not enough to judge.',
            'Add a small amount, such as five more minutes, and keep the rest the same. Change one thing at a time: distance, pace, hills or surface.',
            'If the next morning is worse, go back to the last walk that passed and stay there longer.',
          ],
        },
        'The five minutes is a practical suggestion, not a tested figure. What matters is that each step up is small enough that the next morning tells you clearly whether it worked.',
        'Recovery from plantar fasciitis is usually slow. About 90% of people improve with non-surgical care such as stretching, calf work and load management (Latt and colleagues, 2020), but it can take months. See [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/). If you also run, [heel pain in runners](/heel-pain-runners/) covers mileage and load changes.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.latt],
    },
    {
      h2: 'Which shoes help when you walk with plantar fasciitis?',
      keyFact: 'The 2023 guideline grades insoles used on their own for short-term pain relief B against, and C when combined with other care, including heel cushioning (Koc and colleagues, 2023).',
      paragraphs: [
        '**Comfortable, cushioned shoes with a small heel-to-toe drop are the expert advice, but no trial has tested a specific shoe for walking.** The 2021 best practice guide says shoes should be supportive and comfortable, have a small rearfoot-to-forefoot drop (the heel sits a little higher than the toes), and be something you will actually wear. It also advises avoiding barefoot walking and flat, unsupportive shoes until symptoms have fully gone (Morrissey and colleagues, 2021).',
        'The 2023 guideline includes footwear advice in its grade **E** education recommendation. For insoles it is more specific: do not use them as the only approach (**B** against), but they may help combined with other care (**C**). That includes an over-the-counter heel cushion or shoes that cushion the heel (Koc and colleagues, 2023).',
        'Shoe hardness may matter. In the 2023 study of 50 people with heel pain and 25 without, the heel pain group wore shoes with harder heels and reported more trouble finding suitable shoes (Landorf and colleagues, 2023). Again, a link, not proof that soft shoes help.',
        'For specific products and what the trials show, see [best insoles for plantar fasciitis](/best-insoles-for-plantar-fasciitis/) and [insoles or exercises](/insoles-vs-exercises/). Thinking about minimalist shoes? [Barefoot shoes](/barefoot-shoes/) covers why they are a poor fit while the heel is sore.',
      ],
      cites: [CITE.morrisseyBestPractice, CITE.guideline, CITE.landorfFootwear],
    },
    {
      h2: 'Does the surface you walk on matter?',
      paragraphs: [
        '**Probably, but the evidence is indirect.** The guideline lists work-related weight-bearing activity, particularly under conditions with poor shock absorption, as a risk factor for plantar fasciitis (Koc and colleagues, 2023). That points to hard ground and hard shoes as a load on the heel.',
        'Direct evidence is thin. In the 2023 matched study, people with and without heel pain did not differ in whether they stood on hard floors (Landorf and colleagues, 2023). A case series of 20 runners reported less pain after about a month and a half of barefoot running on grass, but it had no comparison group (MacGabhann and colleagues, 2022). No trial has compared walking surfaces for plantar fasciitis.',
        'Practical options while the heel is sore:',
        {
          list: [
            'Choose grass, a park path or a track over concrete for longer walks, if it feels better.',
            'Keep shoes on at home on tile or wood, especially for the first steps of the day.',
            'Go easy on long downhill stretches and steep hills until the flat walk passes the pain rule.',
          ],
        },
        'A deep ache right in the center of the heel that is clearly worse on hard ground can come from the heel fat pad rather than the plantar fascia. See [heel fat pad syndrome](/heel-fat-pad-syndrome/).',
      ],
      cites: [CITE.guideline, CITE.landorfFootwear, CITE.macgabhannGrass],
    },
    {
      h2: 'Which exercises make walking easier?',
      keyFact: 'The 2023 guideline grades plantar fascia and calf stretching A and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'Exercises may help the heel tolerate more load, so the same walk may pass the pain rule more easily over time, though no study has tested this for walking. The 2023 guideline grades stretching of the plantar fascia and calf **A**, its top grade, and strength training **B**.',
        'A tight calf is part of the picture. In a case-control study of 50 people with plantar fasciitis and 100 without, limited ankle bend was the strongest risk factor, and standing for most of the working day also raised the odds (Riddle and colleagues, 2003). See [tight calves](/tight-calves/).',
        'In a trial of 48 people, heavy heel raises eased pain and improved daily function faster than stretching, and by twelve months both groups were about even (Rathleff and colleagues, 2015). The cards below are Walkito’s starting doses, not a prescription. The full set is in [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most sessions, and before the first steps of the day',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor.',
          stop: 'Sharp heel pain',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions, and before a longer walk',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward. A tight calf pulls on the heel all day, so this stretch matters even though you feel it higher up.',
          stop: 'Pain in the calf that stays after you stop',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          how: 'Take the same position, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Pain in the calf that stays after you stop',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'Work low in the calf',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, with almost no load on the heel, which suits days when walking is already near your limit.',
          stop: 'Heel pain that goes above 6 out of 10, or a worse next morning',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load. Hold a wall for balance.',
          stop: 'Heel pain that goes above 6 out of 10, or a worse next morning',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Heel raises with a towel',
          evidence: { level: 'moderate', why: 'This is the routine from a 48-person trial, and the 2023 guideline grades strength work B.' },
          dose: '4 sets of 10, each leg, with added weight',
          often: 'Strength days, once morning pain has come down',
          feel: 'Hard work in the calf',
          how: 'Stand on one foot on a step, with a rolled towel under your toes. Take three seconds to rise, hold for two at the top, and take three seconds to lower. At this level Walkito adds weight, such as a backpack. The towel is what makes this exercise work the plantar fascia and not just the calf. More on the [towel heel raise](/exercises/towel-heel-raise/).',
          stop: 'Heel pain that goes above 6 out of 10, or a worse next morning',
          image: 'Exercise: heel raises with a towel',
          media: 'heel_raise_towel',
          caption: 'Heel raises with a towel: three seconds up, two at the top, three down',
          alt: 'A figure rising onto the toes on a step with a rolled towel, the calves highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Should I walk with plantar fasciitis?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Usually yes, in amounts your heel can handle. The 2023 heel pain guideline recommends adjusting weight-bearing load and does not advise stopping, though that advice rests on theory (grade E). In a trial of 180 adults, advice to stay active but cut back on pain-aggravating activities, plus a heel cup, came with meaningful improvement at about three months.',
    },
    {
      q: 'Is walking good for plantar fasciitis?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Walking in moderate amounts is generally fine, though no study has tested how much walking is best. In one study, people with heel pain were as active as people without it but stood 3.4 hours a day longer. A best practice guide advises learning to monitor your pain response to activity.',
    },
    {
      q: 'How many steps a day is OK with plantar fasciitis?',
      cites: [CITE.paluchSteps],
      a: 'No study gives a step number for plantar fasciitis. The 10,000 figure is a general health target, and in mortality research the benefit levelled off at 6,000 to 8,000 steps a day in adults 60 or over. For an irritated heel, start from your own usual count and let next-morning pain decide whether to add or cut back.',
    },
    {
      q: 'How much pain is OK when walking with plantar fasciitis?',
      cites: [CITE.silbernagel],
      a: 'One tested rule allows pain up to about 5 out of 10 during activity, as long as it settles by the next morning and does not build week to week. It comes from a trial of 38 people with Achilles pain, not plantar fasciitis, so use it as a guide. Pain above that, or a worse morning, means cut back.',
    },
    {
      q: 'Can walking make plantar fasciitis worse?',
      cites: [CITE.guideline],
      a: 'Yes, if you do much more than your heel is used to. The 2023 guideline lists heel pain after a recent increase in weight-bearing activity as a typical feature of plantar fasciitis. A sudden long walk, a new hilly route or a day on hard floors can flare it. Smaller, steady increases are easier on the heel.',
    },
    {
      q: 'Should I stop walking completely to let plantar fasciitis settle?',
      cites: [CITE.silbernagel, CITE.guideline],
      a: 'No study shows complete rest is needed. The 2023 guideline recommends adjusting load and does not advise stopping. In an Achilles pain trial, people who stayed active within a pain limit did as well at twelve months as people who paused running and jumping for six weeks. If even short walks hurt sharply or make you limp, see a clinician.',
    },
    {
      q: 'What shoes are best for walking with plantar fasciitis?',
      cites: [CITE.morrisseyBestPractice, CITE.guideline],
      a: 'Comfortable, cushioned shoes with the heel slightly higher than the toes are the expert advice. A 2021 best practice guide advises avoiding barefoot walking and flat, unsupportive shoes until symptoms are gone. The 2023 guideline says insoles or heel cushions may help when combined with other care, but not on their own.',
    },
    {
      q: 'Is it better to walk on grass or concrete with plantar fasciitis?',
      cites: [CITE.guideline, CITE.macgabhannGrass],
      a: 'Softer ground may be easier, but no trial has compared surfaces for walking with plantar fasciitis. The 2023 guideline links weight-bearing work on poorly shock-absorbing surfaces to plantar fasciitis risk. A small case series of runners on grass reported less pain but had no comparison group. Go by how your heel feels next morning.',
    },
    {
      q: 'Is walking barefoot at home OK with plantar fasciitis?',
      cites: [CITE.morrisseyBestPractice],
      a: 'It is best avoided while your heel is sore, especially on tile or wood first thing in the morning. A 2021 best practice guide for heel pain advises against barefoot walking and flat, unsupportive footwear until symptoms have fully gone. Supportive shoes or firm slippers for the first steps of the day are the usual advice.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the heel pain started after a fall, a jump or a twist, or you cannot put weight on the foot',
      'pain builds with every walk and does not ease with rest, or squeezing the sides of the heel hurts (possible stress fracture)',
      'the heel hurts at night or at rest, not just with walking',
      'you have numbness, tingling or burning in the foot',
      'the heel is red, hot or swollen, or you feel unwell or have a fever',
      'both heels hurt along with other joints, or you have morning stiffness elsewhere',
      'you have diabetes or poor circulation and your foot hurts or looks different',
      'pain is getting worse week after week despite cutting back',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app. It does not set a step target or plan your walks, but it reads your heel the same way this page does: by how your foot feels the next morning.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it: a big day on your feet turns the next strength session into a lighter one. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['heelPainAfterWalking', 'heelPain', 'standing'],
  crumb: 'Walking with plantar fasciitis',
  campaign: 'guide-walking-with-plantar-fasciitis',
};
