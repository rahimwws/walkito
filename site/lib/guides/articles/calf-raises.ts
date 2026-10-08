import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder indices for citations not yet in CITATIONS[].
 * Replace with actual indices after adding them to lib/citations.ts.
 */

export const CALF_RAISES_EN: Guide = {
  lang: 'en',
  page: 'calfRaises',
  mainSource: CITE.rathleff,
  published: '2026-10-04',
  updated: '2026-10-04',
  title: 'Calf Raises for Plantar Fasciitis: How & How Many',
  description:
    'Calf raises for plantar fasciitis: the Rathleff protocol dose, towel calf raise technique, how many reps, when to progress, and what Walkito starts you on.',
  h1: 'Calf raises for plantar fasciitis: how to do them and how many',
  lede:
    'Calf raises are one of the exercises in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/), and it is the exercise behind the one randomized trial built specifically to test strength training against stretching for plantar fasciitis. In a study of 48 people, heavy heel raises eased pain faster than stretching alone over three months. This page is the deep dive on that exercise: the exact protocol, the towel, the progression, and where it sits next to stretching.',
  intro: [
    'The 2023 heel pain guideline gives strength training a grade of **B**, one step below stretching at **A**. Both are recommended. The calf raise is the strength side of that pair. If your pain is fresh and you are looking for the full list of exercises, start at [plantar fasciitis exercises](/plantar-fasciitis-exercises/). This page assumes you want the details on the raise itself.',
  ],
  takeaways: [
    'In a trial of 48 people, loaded heel raises with a towel under the toes eased plantar fasciitis pain faster than stretching alone at three months, though both groups were even by twelve months (Rathleff and colleagues, 2015).',
    'The 2023 heel pain guideline grades strength training B, its second-highest grade, and grades stretching A (Koc and colleagues, 2023).',
    'Reduced ankle dorsiflexion, meaning how far the foot bends up toward the shin, often caused by a tight gastrocnemius, the bigger outer calf muscle, is an independent risk factor for plantar fasciitis (Riddle and colleagues, 2003).',
    'The towel under the toes engages the windlass mechanism, loading the plantar fascia along with the calf.',
    'A single-leg heel-raise count in the low-to-mid 20s, about 23-24 on average, is a commonly cited adult benchmark, useful for tracking progress over weeks (Hebert-Losier and colleagues, 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Do calf raises actually help plantar fasciitis?',
      keyFact: 'In a trial of 48 people, the heel-raise group scored 29 points better on the Foot Function Index at three months, though both groups had converged by twelve months (Rathleff and colleagues, 2015).',
      paragraphs: [
        'Calf raises help plantar fasciitis by strengthening the calf-Achilles-fascia chain that absorbs load every time the heel hits the ground.',
        'The only randomized trial to test this exercise for plantar fasciitis directly is Rathleff 2015. In that trial, 48 people with ultrasound-confirmed plantar fasciitis were split into two groups. Both wore shoe inserts. One group did a loaded, slow heel raise with a towel rolled under the toes. The other stretched the plantar fascia. At three months, the heel-raise group scored 29 points better on the Foot Function Index. At twelve months, both groups had converged.',
        'So calf raises brought the improvement forward. They did not produce a bigger improvement in the long run. The 2023 clinical guideline grades strength training B and stretching A. It recommends both. Nothing in the evidence suggests you should pick one and skip the other.',
      ],
      sourceNote:
        'Rathleff 2015: Foot Function Index 29 points lower in the heel-raise group at 3 months (95% CI 6-52, p = 0.016). At 12 months, 22 vs. 16, no significant difference.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'How do you do a towel calf raise for plantar fasciitis?',
      paragraphs: [
        'The towel calf raise is the exercise from the Rathleff trial. It is a single-leg heel raise on a step, with a rolled towel under the toes. The towel pulls the toes upward at the top of the raise, which engages the windlass mechanism: the way the plantar fascia tightens when the big toe bends back. Without the towel, you are training the calf but loading the fascia much less.',
        'Stand on one foot on the edge of a step, with a rolled hand towel under all five toes. The ball of the foot stays on the step. Hold a wall or rail for balance. Rise up over three seconds, hold at the top for two, and lower over three seconds. Let the heel sink slightly below the step on the way down. In the trial, participants added weight with a backpack once bodyweight became too easy.',
        'Start on both feet if single-leg raises are too hard right now. Both-leg raises on the floor, without a step, are where the calf chain begins. The towel and the step come in later, once standing heel raises feel easy for two sessions in a row.',
      ],
      exercises: [
        {
          name: 'Heel raises with a towel (single-leg)',
          evidence: { level: 'strong', why: 'This is the exercise from the only plantar-fasciitis heel-raise RCT (Rathleff 2015). Guideline grade B.' },
          dose: 'Research protocol: 12RM (the heaviest load you can lift for 12 controlled reps) x 3 sets, progressing to 8RM x 5 sets. Starting dose: 3 sets of 12, each leg',
          how: 'Stand on one foot on a step, rolled towel under the toes. Three seconds up, two-second hold, three seconds down. Add weight with a backpack when the last rep stops being hard.',
          often: 'Every other day in the trial. Walkito schedules it on strength days, never two in a row.',
          feel: 'Hard work in the calf and a pull under the arch',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_towel',
          caption: 'Towel calf raise: three seconds up, hold at the top, three seconds down',
          alt: 'A figure on a step rising onto the toes with a rolled towel under the foot, the calf highlighted',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'The 2023 guideline grades plantar fascia and calf stretching A, its top grade.' },
          dose: '3 sets of 30-second holds, each leg',
          how: 'Hands on a wall. Back leg straight, heel down, hips forward. Hold until you feel the stretch in the upper calf.',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Soleus stretch (bent knee)',
          evidence: { level: 'strong', why: 'Same guideline grade A. Targets the soleus, the deeper calf muscle.' },
          dose: '3 sets of 30-second holds, each leg',
          how: 'Same position as the calf stretch, then bend the back knee until you feel it lower down, near the heel. The soleus, the deeper calf muscle, only releases with the knee bent.',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the lower calf highlighted',
        },
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'Guideline grade B covers strength work generally. This gentler step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          how: 'Sit with your feet flat on the floor. Press up through the balls of both feet. Hands on the knees add resistance. This is a low-load way to start loading the calf when standing raises are too much.',
          often: 'Strength days, while this is your level',
          feel: 'Easy work in the calves, almost no load on the heel',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'Guideline grade B. A stepping stone to single-leg loaded work.' },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load.',
          often: 'Strength days, once seated raises feel easy for two sessions',
          feel: 'The calves working together',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_double',
          caption: 'Double-leg heel raises: rise straight up, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
        {
          name: 'Heel raise hold',
          evidence: { level: 'moderate', why: 'Guideline grade B. Isometric hold at end-range; not tested in an isolated plantar-fasciitis trial.' },
          dose: '3 holds of 20 seconds, both feet',
          how: 'Rise onto your toes on both feet, then hold still at the top. Do not sink back down. Holding loads the tendon without the bounce of a full rep.',
          often: 'Strength days, the step after double-leg raises',
          feel: 'The calves working to stay still',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay still at the top',
          alt: 'A figure holding a raised position on both feet, the calves highlighted',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'How many calf raises should you do, and how do you add load?',
      paragraphs: [
        'The Rathleff protocol uses a repetition maximum (RM) system rather than a fixed rep count. "12RM" means the heaviest load you can lift for exactly 12 controlled reps. The twelfth rep should be the last one you can do with good form. For most people starting out, bodyweight on one leg is enough. When it is not, a backpack with books or water bottles adds weight.',
      ],
      table: {
        caption: 'Rathleff 2015 heel-raise progression',
        head: ['Weeks', 'Sets x reps', 'Tempo', 'Frequency'],
        rows: [
          ['1-2', '3 x 12RM', '3s up / 2s hold / 3s down', 'Every other day'],
          ['3-4', '4 x 10RM', '3s up / 2s hold / 3s down', 'Every other day'],
          ['5-12', '5 x 8RM', '3s up / 2s hold / 3s down', 'Every other day'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: 'What does Walkito start you on?',
      paragraphs: [
        'Walkito does not drop you into the Rathleff protocol on day one. The app starts with seated heel raises (3 sets of 10, both feet), then moves to double-leg standing raises, then a heel raise hold, and only then the towel-loaded single-leg raise. Each step opens once two sessions at the current level felt easy. That ladder is the app\'s own pacing, not a published protocol, and it exists because most people starting an exercise plan for heel pain are not ready for a weighted single-leg raise on the first session.',
        'The calf chain in the app runs: seated heel raises, double-leg heel raises, heel raise hold, heel raises with a towel, heel drops (an eccentric lowering off a step), and pogo hops. The towel raise is level 4 of 6. Reaching the calf goal of 25 single-leg heel raises does not end the calf work. It moves to maintaining, and a new goal takes its place.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Why does a tight calf matter for heel pain?',
      figure: { id: 'calf', caption: 'The two calf muscles, the gastrocnemius and the soleus, join into the Achilles tendon, which attaches to the heel bone.', alt: 'Side and back views of a lower leg showing the gastrocnemius and soleus muscles narrowing into the Achilles tendon above the heel.' },
      keyFact: 'In a series of 254 people with plantar fasciitis, 52 to 60% had a contracture limited to the gastrocnemius, and another 23 to 30% had a combined gastrocnemius-soleus contracture (Patel and colleagues, 2011).',
      paragraphs: [
        'A tight calf pulls on the heel through the Achilles tendon, and the plantar fascia shares the load at the other end. When the ankle cannot bend enough, every step puts more strain on the fascia.',
        'In a series of 254 people with plantar fasciitis, 52 to 60 percent had a contracture isolated to the gastrocnemius, the outer calf muscle, and another 23 to 30 percent had a combined gastrocnemius-soleus contracture. Separately, a matched case-control study of 50 cases and 100 controls found that reduced ankle dorsiflexion, how far the foot bends up toward the shin, was the strongest independent risk factor for plantar fasciitis.',
        'This is why calf stretching and calf strengthening both appear on the list. Stretching gives the ankle more range. Strengthening gives the calf enough capacity that it does not tighten under normal daily load. The guideline recommends both. The same tight-calf mechanism shows up in other lower-leg pain too: see [shin splints exercises](/shin-splints-exercises/) and [feet hurt from standing all day](/feet-hurt-standing-all-day/) if your pain pattern looks more like either of those.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle, CITE.guideline],
    },
    {
      h2: 'How is a calf raise for plantar fasciitis different from one for Achilles tendonitis?',
      paragraphs: [
        'The movement is nearly the same, but the intent, the towel, and the pain rule differ. For plantar fasciitis, the towel under the toes loads the fascia through the windlass mechanism. The tempo is 3 seconds up, 2-second hold, 3 down, every other day. The pain rule on this page is: stop if pain reaches 6/10 or more.',
        'For Achilles tendonitis, the classic protocol is an eccentric heel drop (lowering only, with the rise done on both feet), originally done twice a day, seven days a week, and into pain up to about 5/10 as long as it settles by the next morning. The towel is not used because loading the fascia is not the goal. And for insertional Achilles pain, right at the back of the heel bone, heel drops should stay at floor level rather than going below the step edge, because deep dorsiflexion compresses the tendon against the bone.',
        'The two exercises are close relatives. If your pain is at the back of the heel or in the tendon above it rather than under the foot, see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
    {
      h2: 'How many single-leg calf raises should you be able to do?',
      keyFact: 'A normative study of 566 healthy adults found a single-leg heel-raise count in the low-to-mid 20s, about 23 to 24 repetitions on average (Hebert-Losier and colleagues, 2017).',
      paragraphs: [
        'A common adult benchmark for the single-leg heel-raise endurance test is in the low-to-mid 20s, about 23-24 repetitions on average, based on normative data from 566 healthy adults. That number shifts with age, sex, BMI and activity level, so it is a reference point rather than a pass-fail line. What matters more for tracking plantar fasciitis progress is whether the number goes up week to week, and whether the two sides are roughly even.',
        'The calf goal in the app is 25 single-leg calf raises. The test is repeated every 14 days while the calf goal is active, then every 28 days after it is reached, so you can see the trend without guessing.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'What should it feel like, and when should you stop?',
      paragraphs: [
        'A calf raise for plantar fasciitis should feel like hard work in the calf. The towel version will also produce a pull under the arch. That is the fascia loading, and it is the point of the exercise.',
        'Stop for the day if pain reaches **6/10 or more** during the exercise, or if your first steps the next morning are clearly worse than usual. That is the same threshold the app uses to end a session. It is not an Achilles-specific pain model (which uses 5/10 from a different trial). This is the plantar fasciitis stop rule.',
        'Mild soreness that settles within a day is expected, especially in the first two weeks. Pain that stays elevated for days or gets worse week over week is a reason to step back one level or see a clinician.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Should you stretch or strengthen first for plantar fasciitis?',
      paragraphs: [
        'The 2023 heel pain guideline gives plantar fascia and calf stretching a grade of **A** and strength training a grade of **B**. That means both are recommended, and the stretching evidence is slightly broader. In the Rathleff trial, the strength group improved faster in the first three months, but by twelve months both groups were even.',
        'Nothing in the evidence says you need to finish one before starting the other. The app starts stretching on day one and adds the first calf strengthening exercise once the goal moves past settling pain into building capacity. Doing the plantar fascia stretch before your first steps each morning is the single most repeated piece of advice in the guideline.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'How many calf raises should I do for plantar fasciitis?',
      cites: [CITE.rathleff],
      a: 'The only trial that tested a specific heel-raise protocol for plantar fasciitis started at a 12-repetition maximum for 3 sets, progressed to 10RM for 4 sets at week 2, and to 8RM for 5 sets at week 4, done every other day for up to 3 months (Rathleff 2015). "12RM" means the heaviest load you can lift for 12 controlled reps, not a fixed count for everyone.',
    },
    {
      q: 'Do calf raises make plantar fasciitis worse?',
      cites: [CITE.rathleff],
      a: 'In the Rathleff 2015 trial, the group doing loaded heel raises improved faster than the group that only stretched. Loading made things better, not worse, in that study. Any single exercise that pushes pain to 6/10 or more should be backed off for the day, but the exercise itself is not the problem when dosed correctly.',
    },
    {
      q: 'What is the towel for in a towel calf raise?',
      cites: [CITE.rathleff],
      a: 'The towel rolls under the toes so they bend upward at the top of the raise. That activates the windlass mechanism, the link between the Achilles tendon and the plantar fascia. Without the towel, the exercise mainly trains the calf. With it, the fascia takes part of the load, which is why the trial used it.',
    },
    {
      q: 'Should I stretch or strengthen first for plantar fasciitis?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'The 2023 heel pain guideline gives stretching its top grade, A, and strength training a B, so both are recommended. In the Rathleff trial, strengthening moved pain scores faster in the first 3 months, but by 12 months both groups were even. Nothing in the evidence says you must finish one before starting the other.',
    },
    {
      q: 'How soon do calf raises help plantar fasciitis pain?',
      cites: [CITE.rathleff],
      a: 'In the Rathleff 2015 trial of 48 people, the loaded heel-raise group was significantly ahead of the stretching-only group by the 3-month mark. By 12 months the two groups had converged. No trial has shown a guaranteed number of weeks for any one person. Recovery is measured in months.',
    },
    {
      q: 'How many single-leg calf raises is normal?',
      cites: [CITE.hebertLosier],
      a: 'A normative study of 566 healthy adults found a median of about 23-24 repetitions as a typical adult count, which shifts with age, sex and activity level (Hebert-Losier 2017). The number is useful for comparing one leg to the other or for tracking change over weeks, not as a strict pass-fail line.',
    },
    {
      q: 'Is it normal to feel the exercise in the calf and not the heel?',
      a: 'Yes. Seated and double-leg heel raises are designed to feel like calf work with little load on the heel, which is why they come before the single-leg towel version. The towel-loaded raise is the version that also puts load through the arch, so a pull near the heel at that stage is expected, as long as it stays below 6/10.',
    },
    {
      q: 'Do weak calves cause plantar fasciitis?',
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.rathleff],
      a: 'The strongest evidence links a tight calf, not weak calves, to plantar fasciitis. A case-control study found reduced ankle flexibility was the top risk factor, and over half of one patient series had a calf contracture. Strength training still helps: in a 48-person trial, heel raises eased pain faster than stretching alone over the first three months.',
    },
    {
      q: 'What is the one best exercise for plantar fasciitis?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'There is no single best exercise; the 2023 guideline grades stretching (A) and strength training (B) as separate, complementary approaches. The plantar fascia stretch targets first-step pain directly, while heel raises build the calf\'s long-term capacity. In a 48-person trial, the heel-raise group improved faster than the stretching group at three months, though both were similar by twelve months.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall, which can indicate a plantar fascia tear rather than fasciitis',
      'you cannot put weight on the foot, or you are limping',
      'it comes with numbness, tingling or burning, which can point to nerve entrapment rather than plantar fasciitis',
      'the heel is red, or you have a fever or feel unwell',
      'it wakes you at night or is present at rest, which can be more consistent with a stress fracture',
      'squeezing the sides of the heel hurts, or the pain builds during runs after you increased your mileage',
      'both heels hurt and other joints are swollen or stiff, which can point toward inflammatory arthritis',
      'it has not improved after several weeks of exercise and a lighter load',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You don\'t have to work out the sets, the weight or when to move to the next step. Walkito builds a plan one week at a time around one goal. For heel pain, the first goal is a better morning: pain at or under 1/10 for 14 days in a row. The calf raise ladder (seated, double-leg, hold, towel, heel drops) moves at your pace, not on a fixed calendar.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once that goal is met), a short test checks calf endurance, arch hold and balance, so you can see what is changing. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Calf raises for plantar fasciitis',
  campaign: 'guide-calf-raises',
};
