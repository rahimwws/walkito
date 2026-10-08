import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations ──────────────────────────────────────────────────────
 *
 * No new citations needed. This file uses only existing CITE keys:
 * guideline, rathleff, riddle, latt, hansen, patelGastrocnemius,
 * siriphorn, digiovanni2003, fatPadReview, achillesGuideline,
 * patelStressFracture, waters, hebertLosier.
 */

export const HEEL_PAIN_AFTER_WALKING_EN: Guide = {
  lang: 'en',
  page: 'heelPainAfterWalking',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Heel Pain After Walking: Why It Happens and What Helps',
  description:
    'Heel pain after walking or standing: why your heel hurts after a long walk, what conditions cause it, when to worry, and the exercises that help the most.',
  h1: 'Heel pain after walking: why your heel hurts and what to do about it',
  lede:
    'Your heel felt fine while you were walking, but now that you have stopped it aches. Or it started partway through a long walk and got worse with each step. Both patterns point to the same thing: the tissues under your heel were loaded past what they could handle that day. The most common cause is plantar fasciitis, and the most useful response is stretching and gradual calf strengthening.',
  intro: [
    'This page is about heel pain that comes on during or after walking. If your heel hurts most on the very first steps in the morning, that pattern is covered in [heel pain in the morning](/heel-pain-in-the-morning/). If your feet ache from standing in one place for hours, [feet hurt from standing all day](/feet-hurt-standing-all-day/) covers the static-load side. The three overlap, but each has a different angle.',
  ],
  takeaways: [
    'The 2023 heel pain guideline describes plantar fasciitis pain as "most noticeable with weight bearing first thing in the morning or after a period of rest," but it also lists pain that worsens with prolonged weight-bearing activity as a key feature (Koc and colleagues, 2023).',
    'In a matched case-control study of 50 people with plantar fasciitis and 100 controls, reduced ankle dorsiflexion (how far the foot bends up toward the shin) was the strongest independent risk factor, ahead of a body mass index over 30 and standing for most of the working day (Riddle and colleagues, 2003).',
    'The guideline gives plantar fascia and calf stretching its top grade, **A**, and strength training a **B** (Koc and colleagues, 2023).',
    'About 90% of people with plantar fasciitis improve with non-surgical care such as stretching, calf work and load management (Latt and colleagues, 2020).',
    'Heel pain after walking that builds with every session and does not ease with rest can point to a stress fracture rather than plantar fasciitis. Squeezing the sides of the heel is one clinical sign.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Why does your heel hurt after walking?',
      keyFact: 'In a case-control study of 50 people with plantar fasciitis and 100 without, reduced ankle dorsiflexion was the strongest risk factor, ahead of high body mass index and prolonged standing at work (Riddle and colleagues, 2003).',
      paragraphs: [
        'Walking loads the plantar fascia, the thick band of tissue under the foot, with every step. Each time the heel hits the ground and the foot rolls forward, the fascia stretches and absorbs force. In a healthy foot this is fine. But when the fascia is irritated or the calf is too tight to absorb its share, the load concentrates at the heel attachment.',
        'The result is pain that builds during or after a walk, especially a longer one than usual. The 2023 heel pain guideline lists two hallmark patterns for plantar fasciitis: first-step pain after rest, and pain that increases with prolonged weight-bearing activity. Walking is the most common prolonged weight-bearing activity there is.',
        'A tight calf is a big part of the picture. In a matched case-control study of 50 people with plantar fasciitis and 100 controls, reduced ankle dorsiflexion had the highest odds ratio of any measured risk factor. When the ankle cannot bend enough, every step asks the fascia to make up the difference.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Is heel pain after walking always plantar fasciitis?',
      paragraphs: [
        'Plantar fasciitis is the most common cause, but it is not the only one. The location and timing of the pain help tell them apart.',
        '**Heel fat pad thinning.** The fat pad under the heel bone cushions every step. When it thins or shifts, the bone takes more direct impact. A 2022 scoping review noted that fat pad pain tends to be a deep ache in the center of the heel, worse on hard surfaces and with barefoot walking (Chang and colleagues, 2022). Plantar fasciitis pain usually sits at the inside front of the heel. Fat pad pain sits right under the center. If barefoot walking on tile or concrete is clearly worse than walking in cushioned shoes, fat pad thinning is worth considering. See [heel fat pad syndrome](/heel-fat-pad-syndrome/) for more.',
        '**Achilles tendonitis.** Pain at the back of the heel or in the tendon above it, not under the foot. The Achilles tendon can be sore after a long walk, especially uphill. If your pain is at the back of the heel rather than under it, see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
        '**Calcaneal stress fracture.** Pain that comes on gradually after a jump in walking distance or intensity. Unlike plantar fasciitis, stress fracture pain tends to build with activity and not ease much with rest. Squeezing the sides of the heel can reproduce the pain. If that matches your pattern, see a clinician before exercising the foot.',
        '**Referred pain from the lower back or nerve entrapment.** Heel pain that comes with numbness, tingling or burning can point to a nerve issue, not a tissue-loading problem. This is a reason to see a clinician first.',
      ],
      cites: [CITE.fatPadReview, CITE.achillesGuideline, CITE.patelStressFracture],
    },
    {
      h2: 'What makes heel pain after walking different from morning heel pain?',
      paragraphs: [
        'Morning heel pain and post-walking heel pain are two sides of the same condition in most cases. Morning pain happens because the fascia stiffens and shortens overnight, then gets stretched suddenly when you stand. Post-walking pain happens because the fascia was loaded repetitively during the walk and the tissue is telling you it has had enough.',
        'The difference matters for timing your exercises. Morning pain responds best to a plantar fascia stretch done before your first step. Post-walking pain responds to managing the load: walking a distance the foot can handle, building that distance gradually, and using stretching and calf work to raise the threshold. [Heel pain in the morning](/heel-pain-in-the-morning/) covers the morning stretches and night splints in detail.',
        'If you have both morning pain and pain after walking, that is the typical plantar fasciitis pattern. The exercises overlap. The morning stretch and the calf stretches help both. The calf strengthening raises the capacity of the whole chain so that your daily walking load falls inside what the tissues can handle.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What makes it different from foot pain from standing?',
      paragraphs: [
        'Standing still and walking are different loads. Standing keeps the same tissues under constant, static stress without the calf pump that walking provides. Walking cycles through loading and unloading, which is easier on the veins and the fat pad but harder on the fascia at the heel attachment because of the repeated stretch at push-off.',
        'If your feet ache after standing for hours but feel fine after a walk, the problem is more likely standing-related fatigue. [Feet hurt from standing all day](/feet-hurt-standing-all-day/) covers that pattern, including compression stockings and floor mats, which are less relevant here. If your heel specifically hurts after walking but not after standing, the load issue is at the fascia attachment and the calf exercises below are the starting point.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'Which exercises help heel pain after walking?',
      keyFact: 'A systematic review found that both plantar fascia stretching and calf stretching reduced pain in plantar fasciitis more than no stretching at all (Siriphorn and Eksakulkla, 2020).',
      paragraphs: [
        'The exercises are the same ones the 2023 guideline recommends for plantar fasciitis. The guideline gives stretching its top grade, **A**, and strength training a **B**. Both are recommended. A systematic review found that plantar fascia stretching and calf stretching both reduced pain compared with no stretching (Siriphorn and Eksakulkla, 2020).',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'Guideline grade A. The single most repeated recommendation in the 2023 guideline.' },
          dose: '10 holds of 10 seconds, each foot',
          how: 'Sit and cross one ankle over the other knee. Pull the toes back gently until you feel a stretch along the arch. Do this before standing in the morning, after sitting, and after a long walk.',
          often: 'Every morning and after prolonged activity',
          feel: 'A stretch along the arch, not sharp pain',
          stop: 'Pain reaches 6/10',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back gently',
          alt: 'A seated figure pulling the toes back to stretch the arch',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'Guideline grade A. Addresses the tight calf that was the strongest risk factor in a 2003 case-control study.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall. Back leg straight, heel on the floor, hips forward. Hold until you feel the stretch in the upper calf.',
          often: 'Most sessions and before a long walk',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, lean forward',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Soleus stretch (bent knee)',
          evidence: { level: 'strong', why: 'Guideline grade A. The soleus, the deeper calf muscle, only releases with the knee bent.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same wall position as the calf stretch, then bend the back knee until you feel the stretch shift lower, near the heel.',
          often: 'After the straight-knee stretch',
          feel: 'A stretch lower in the calf, near the heel',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the lower calf highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'Guideline grade B for strength training. A stepping stone to loaded single-leg work.' },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load. Hold a wall or rail for balance.',
          often: 'Strength days, once stretching alone is not enough',
          feel: 'The calves working together',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_double',
          caption: 'Heel raises: rise straight up, then lower slowly',
          alt: 'A standing figure rising onto the toes, calves highlighted',
        },
        {
          name: 'Heel raises with a towel (single-leg)',
          evidence: { level: 'strong', why: 'The exercise from the only PF-specific heel-raise RCT (Rathleff 2015). Guideline grade B.' },
          dose: 'Walkito starts at 3 sets of 12, each leg. Research protocol progresses to 5 sets of 8RM.',
          how: 'Stand on one foot on a step, rolled towel under the toes. Three seconds up, two-second hold, three seconds down. The towel loads the plantar fascia through the windlass mechanism.',
          often: 'Strength days, once double-leg raises feel easy for two sessions',
          feel: 'Hard work in the calf and a pull under the arch',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_towel',
          caption: 'Towel calf raise: slow tempo, towel under the toes',
          alt: 'A figure on a step rising onto the toes with a rolled towel under the foot',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.rathleff, CITE.riddle],
    },
    {
      h2: 'How far should you walk when your heel hurts?',
      paragraphs: [
        'The goal is not to stop walking. It is to find the distance your heel can handle without flaring the next morning, and then build from there.',
        'A practical approach: walk a distance that keeps morning pain the next day at or below its current baseline. If your usual morning score is 4 out of 10 and a 30-minute walk pushes it to 6 the following morning, that walk was too much. Shorten it until the morning score stays stable. Then add five minutes every week or two, as long as morning pain does not spike.',
        'This is load management, not rest. Complete rest is rarely helpful for plantar fasciitis. The guideline recommends activity modification, not inactivity. Walking in supportive shoes on a softer surface is easier on the fascia than walking barefoot on concrete.',
        'If you also run, the same principle applies at a different scale. [Heel pain from running](/heel-pain-runners/) covers load spikes and mileage changes in more detail.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How long before the heel stops hurting after walks?',
      keyFact: 'In normative data on 566 healthy adults, the average single-leg heel raise count was about 23 to 24 repetitions, a benchmark for tracking calf endurance over time (Hebert-Losier and colleagues, 2017).',
      paragraphs: [
        'There is no fixed timeline. A review of the clinical evidence reports that about 90% of people with plantar fasciitis improve with non-surgical care, often within several months (Latt and colleagues, 2020). In a longer follow-up of 174 people, about half still had some symptoms at 5 years, though most were minor by that point (Hansen and colleagues, 2018).',
        'What you can measure sooner is whether the exercises are working. Morning pain on a 0 to 10 scale is the clearest daily signal. Calf endurance, measured by counting single-leg heel raises, tracks strength over weeks. A commonly cited adult benchmark is about 23 to 24 repetitions on average, from normative data on 566 healthy adults (Hebert-Losier and colleagues, 2017). What matters is whether your number is going up, not whether it matches the benchmark.',
        'For more on the overall timeline, see [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/).',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.hebertLosier],
    },
  ],
  faq: [
    {
      q: 'Why does my heel hurt after a long walk?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'The most common cause is plantar fasciitis. Each step loads the plantar fascia where it attaches to the heel bone. A long walk asks more of that tissue than a short one. When the calf is tight or the fascia is already irritated, the load exceeds what the tissue can handle and pain follows. A tight calf is the strongest independent risk factor in a 2003 case-control study.',
    },
    {
      q: 'Should I stop walking if my heel hurts?',
      cites: [CITE.guideline],
      a: 'Complete rest is usually not necessary. The 2023 guideline recommends activity modification, not inactivity. Walk a distance your heel can handle without making the next morning worse. Shorten the distance if needed, then build it back gradually. Supportive shoes and a softer surface help.',
    },
    {
      q: 'Is heel pain after walking plantar fasciitis?',
      cites: [CITE.guideline, CITE.fatPadReview],
      a: 'It is the most common cause, but not the only one. Plantar fasciitis pain sits at the inside front of the heel and is also worse on first steps after rest. Heel fat pad thinning causes a deep central ache worse on hard surfaces. Achilles tendonitis hurts at the back of the heel. A stress fracture builds with activity and may hurt at rest. See a clinician if you are not sure.',
    },
    {
      q: 'What is the best exercise for heel pain after walking?',
      cites: [CITE.guideline, CITE.siriphorn],
      a: 'The plantar fascia stretch and calf stretches carry the highest evidence grade (A) in the 2023 guideline. A meta-analysis found both reduced pain compared with no stretching. Do the plantar fascia stretch after a walk and calf stretches on most days. Calf strengthening (guideline grade B) builds the capacity the chain needs to handle longer walks.',
    },
    {
      q: 'Does heel pain after walking mean I need an X-ray?',
      cites: [CITE.guideline],
      a: 'Usually not. The 2023 guideline says imaging is not needed when the clinical exam points to plantar fasciitis. If pain has not improved after several weeks of stretching and load management, if it is getting worse, or if squeezing the sides of the heel reproduces it (a sign of a possible stress fracture), imaging becomes useful.',
    },
    {
      q: 'Why does my heel hurt after standing but not after walking?',
      cites: [CITE.waters],
      a: 'Standing loads the foot statically without the calf pump that walking provides. Blood pools, the fat pad compresses, and the arch fatigues. Walking cycles through loading and unloading, which is easier on the veins. If standing is your trigger, [feet hurt from standing all day](/feet-hurt-standing-all-day/) covers that pattern, including compression stockings and floor mats.',
    },
    {
      q: 'How can I tell if my heel pain is a stress fracture?',
      cites: [CITE.patelStressFracture],
      a: 'Stress fracture pain typically builds with activity, came on after a sudden increase in walking or running volume, and does not ease much with rest. Squeezing the sides of the heel can reproduce it. Plantar fasciitis pain usually eases once you warm up and is worst on first steps after rest. If the pattern fits a fracture, see a clinician before doing exercises.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall',
      'you cannot put weight on the foot, or you are limping',
      'squeezing the sides of the heel reproduces the pain, which can point toward a stress fracture',
      'heel pain keeps getting worse with every walk despite shortening the distance',
      'it comes with numbness, tingling or burning',
      'the heel is red, warm or swollen, or you have a fever',
      'both heels hurt and morning stiffness lasts more than 30 minutes, especially if other joints are involved',
      'pain keeps you awake at night or is present at rest',
      'it has not improved after several weeks of stretching, calf work and load management',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You do not have to figure out the exercises, the doses or when to move up a level. Walkito builds a plan one week at a time around one goal. For heel pain, the first goal is morning pain at or under 1 out of 10 for 14 days in a row. If yesterday included more walking than usual and the morning score spikes, the session adjusts automatically.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once the morning goal is met), a short test checks calf endurance, arch hold and balance, so you can see whether the work is raising your walking threshold.',
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If heel pain after walking is getting worse despite the exercises, see a clinician first.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Heel pain after walking',
  campaign: 'guide-heel-after-walking',
};
