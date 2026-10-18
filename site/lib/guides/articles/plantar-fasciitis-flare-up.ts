import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Plantar fasciitis flare-up (EN). Research 2026-10-18.
 * No study defines a "flare-up" of plantar fasciitis or tests a 48-hour
 * protocol; the page says so and borrows only tested rules.
 * Triggers: 2023 JOSPT CPG (recent increase in weight-bearing activity as a
 * typical feature; work weight-bearing on poorly shock-absorbing surfaces as a
 * risk factor; load-modification education graded E). Riddle 2003 (PMID
 * 12728038; 50 cases, 100 controls; dorsiflexion <= 0 vs > 10 OR 23.3, BMI
 * > 30 vs <= 25 OR 5.6, majority of workday weight-bearing OR 3.6): risk of
 * getting plantar fasciitis, not of flares. Landorf 2023 (standing 3.4 h/day
 * longer, harder shoe heels). Morrissey 2021 (pain-monitoring strongly
 * recommended; avoid barefoot and flat unsupportive shoes; break up static
 * loading). No study tested new shoes as a trigger: said so.
 * First 48 hours: Silbernagel 2007 pain-monitoring model (38 people,
 * Achilles, borrowed), Riel 2023 advice arm (180 adults), Riel 2020 protocol.
 * Ice: CPG makes no recommendation; Bleakley 2004 (22 RCTs, acute injury, no
 * best way or length). Rebuild: Walkito strength ladder from en.ts, Rathleff
 * 2015 (48 people). Duration: Latt 2020. Red flags: Tu 2018, Patel 2011.
 * No new citations. Doses match the heel pain guide (en.ts).
 */

export const PF_FLARE_UP_EN: Guide = {
  lang: 'en',
  page: 'pfFlareUp',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Plantar Fasciitis Flare-Up: Triggers and First 48 Hours',
  description:
    'Plantar fasciitis flare-up: the usual triggers, what to do in the first 48 hours, how to rebuild your exercises, and signs that it is not a flare at all.',
  h1: 'Plantar fasciitis flare-up: what triggers it and what to do in the first 48 hours',
  lede:
    'A [plantar fasciitis](/plantar-fasciitis/) flare-up usually follows a jump in how much your heel has to carry: a long walk, a day standing on hard floors, or a new routine. The 2023 heel pain guideline lists pain after a recent increase in weight-bearing activity as a typical feature, and it recommends advice on adjusting load and does not advise stopping, advice it grades **E** because it rests on theory, not trials (Koc and colleagues, 2023). For the first 48 hours, cut back the load that set it off, keep your gentle stretches, and let the next morning tell you how it is going.',
  intro: [
    'No study has defined a plantar fasciitis flare-up or tested what to do in the first two days, so this page uses the closest tested rules and says where they come from. It covers the common triggers, a short plan for the first 48 hours, how to step your exercises back and build up again, and the signs that the pain is something other than a flare. If your heel hurts most with the first steps of the day, [heel pain in the morning](/heel-pain-in-the-morning/) covers that pattern on its own.',
  ],
  takeaways: [
    'The 2023 heel pain guideline lists heel pain after a recent increase in weight-bearing activity as a typical feature of plantar fasciitis, and recommends advice on changing load, at grade **E**, without advising complete rest (Koc and colleagues, 2023).',
    'In a study of 50 people with plantar fasciitis and 100 without, a stiff ankle (23.3 times the odds), a BMI over 30 (5.6 times) and standing for most of the workday (3.6 times) were risk factors. That study looked at getting plantar fasciitis, not at flares (Riddle and colleagues, 2003).',
    'One pain-monitoring rule allows pain up to about 5 out of 10 during activity, as long as it settles by the next morning. It was tested in 38 people with Achilles pain, not plantar fasciitis (Silbernagel and colleagues, 2007).',
    'The guideline makes no recommendation on ice or heat, so ice is a comfort tool at most, and no study shows it calms a flare (Koc and colleagues, 2023).',
    'In a trial of 180 adults, advice to cut back on activities that cause flare-ups and then return slowly, plus a heel cup, came with clinically meaningful improvement at about three months (Riel and colleagues, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What is a plantar fasciitis flare-up?',
      paragraphs: [
        '**A flare-up is a stretch of days when your usual heel pain is clearly worse than your normal.** First steps in the morning hurt more, the heel aches sooner on your feet, or pain that had faded comes back. There is no agreed medical definition, and we found no study that counts how often flares happen or how long they last.',
        'The tissue under the heel does not like sudden changes in load. The 2023 guideline describes plantar fasciitis pain as most noticeable with the first steps after rest, and lists a recent increase in weight-bearing activity as a typical part of the history (Koc and colleagues, 2023). A flare is probably the same thing in miniature: the heel was asked to do more than it was ready for.',
        'That is why a flare does not have to mean you are back at square one. About 90% of people with plantar fasciitis get better with non-surgical care, though it often takes months (Latt and colleagues, 2020). See [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/) for what the long follow-ups show.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'What triggers a plantar fasciitis flare-up?',
      keyFact: 'Standing for most of the workday came with 3.6 times the odds of plantar fasciitis, and a stiff ankle with 23.3 times, in a study of 50 cases and 100 controls (Riddle and colleagues, 2003).',
      paragraphs: [
        '**The common thread is a sudden change in load.** No study has tracked what sets off flares in people who already have plantar fasciitis. What exists is research on what makes people get it in the first place, and it points the same way:',
        {
          list: [
            '**A sudden jump in activity.** A holiday with long days of walking, a new running plan, a hike or a busy week at work. The guideline lists a recent increase in weight-bearing activity as typical (Koc and colleagues, 2023). If you run, [heel pain in runners](/heel-pain-runners/) covers mileage changes.',
            '**Long hours standing.** In a study of 50 people with plantar fasciitis and 100 without, standing for most of the workday came with 3.6 times the odds (Riddle and colleagues, 2003). In another, people with heel pain were as active as people without it but stood 3.4 hours a day longer (Landorf and colleagues, 2023). See [feet hurt from standing all day](/feet-hurt-standing-all-day/).',
            '**Barefoot on hard floors.** The guideline lists weight-bearing work on poorly shock-absorbing surfaces as a risk factor (Koc and colleagues, 2023), though one study found people with heel pain were no more likely to stand on hard floors than people without (Landorf and colleagues, 2023). A 2021 best practice guide advises avoiding barefoot walking and flat, unsupportive shoes until symptoms are gone (Morrissey and colleagues, 2021).',
            '**New or different shoes.** We found no study that tested new shoes as a trigger. What is known: people with heel pain wore shoes with harder heels than people without it (Landorf and colleagues, 2023), and the best practice guide favours supportive shoes with the heel a little higher than the toes (Morrissey and colleagues, 2021). Switching to flat, thin or very flexible shoes, or to [barefoot shoes](/barefoot-shoes/), is a change your heel will notice.',
            '**A tight calf.** In the same 2003 study, people with an ankle that bent up 0 degrees or less had 23.3 times the odds of people with more than 10 degrees (Riddle and colleagues, 2003). Skipping your stretches for a while can let that stiffness come back. See [tight calves](/tight-calves/).',
          ],
        },
        'Body weight is a risk factor too: a BMI over 30 came with 5.6 times the odds in the 2003 study. Weight changes slowly, so it is more of a background factor than a trigger for a flare this week. More in [weight and plantar fasciitis](/weight-and-plantar-fasciitis/).',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.landorfFootwear, CITE.morrisseyBestPractice],
    },
    {
      h2: 'What should you do in the first 48 hours of a flare-up?',
      keyFact: 'In a trial of 180 adults, the group given only advice to cut back on activities that cause flare-ups and return slowly, plus a heel cup, improved by a clinically meaningful amount at about three months (Riel and colleagues, 2023).',
      paragraphs: [
        '**Cut back the load, keep moving gently, and judge it by the next morning.** No trial has tested a 48-hour plan for plantar fasciitis. The steps below put the guideline and the closest tested advice into practice:',
        {
          list: [
            '**Find the trigger and reduce it.** Shorter walks, more sitting breaks, a pause from running or hills. The advice tested in a Danish trial was to cut back on activities that cause flare-ups, then slowly return to former activity levels guided by symptoms (Riel and colleagues, 2020).',
            '**Do not stop moving altogether.** The guideline recommends adjusting load and does not advise complete rest (Koc and colleagues, 2023). Walking you need for daily life is fine within the pain rule below.',
            '**Keep the gentle stretches.** Plantar fascia and calf stretches are graded **A** (Koc and colleagues, 2023). Do the first one before your foot touches the floor in the morning.',
            '**Wear shoes indoors.** Supportive shoes or firm slippers from the first step of the day, rather than bare feet on tile or wood (Morrissey and colleagues, 2021).',
            '**Break up standing.** The best practice guide advises breaking up long periods of standing still (Morrissey and colleagues, 2021).',
          ],
        },
        'In that trial, every one of the 180 adults got this kind of advice plus a heel cup, and two of the three groups also got heel raise training or heel raises plus a steroid injection. All three groups in the trial improved by a clinically meaningful amount at about three months, including the group that got only the advice and the heel cup (Riel and colleagues, 2023). The advice was the foundation, not an afterthought.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.rielHeelRaiseAdd, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'How much pain is OK during a flare-up?',
      keyFact: 'In a trial of 38 people with Achilles pain, those who stayed active with pain up to about 5 out of 10, settling by the next morning, did as well at twelve months as those who paused running and jumping (Silbernagel and colleagues, 2007).',
      paragraphs: [
        '**Use the same pain rule as for walking: moderate at most during activity, and back to your normal by the next morning.** The rule comes from a 2007 trial in 38 people with Achilles tendon pain. Pain up to about 5 out of 10 was allowed during activity, as long as it settled by the next morning and did not build from week to week. Staying active this way did not lead to worse results at twelve months than pausing running and jumping for six weeks (Silbernagel and colleagues, 2007). It has not been tested in plantar fasciitis, so use it as a borrowed guide.',
        'For heel pain, the 2021 best practice guide strongly recommends pain-monitoring and teaching people to read their pain response to activity, without giving a number (Morrissey and colleagues, 2021). During exercises, Walkito ends a session if pain reaches 6 out of 10.',
      ],
      table: {
        caption: 'Reading your heel during a flare (0 to 10 pain scale)',
        head: ['What you notice', 'What to do'],
        rows: [
          ['0 to 5 during, normal next morning', 'Keep that load'],
          ['Above 5 during activity', 'Stop or shorten it today'],
          ['Next morning worse than usual', 'Cut back again for a day or two'],
          ['Better each morning', 'Start rebuilding'],
          ['Worse each day despite cutting back', 'See a clinician'],
        ],
      },
      after: [
        'The full version of this rule, with a next-walk column, is on [walking with plantar fasciitis](/walking-with-plantar-fasciitis/). The morning check matters most, because first-step pain shows how your foot coped with yesterday.',
      ],
      sourceNote: 'Silbernagel 2007: 19 people per group, Achilles tendinopathy, not plantar fasciitis.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Should you ice a plantar fasciitis flare-up?',
      paragraphs: [
        '**Ice is fine if it makes the heel feel better, but no study shows it calms a flare.** The 2023 guideline found too little evidence to recommend either superficial heat or cold for plantar fasciitis (Koc and colleagues, 2023).',
        'Even for fresh sports injuries, where ice is used most, a review of 22 trials found no evidence for a best way or best length of time to ice (Bleakley and colleagues, 2004). So there is no tested "ice for X minutes" rule for a sore heel. If you use it, keep a cloth between the ice and your skin, stop if the skin goes numb, and skip it if you have diabetes or poor feeling in your feet.',
        'Use it next to your stretches, not instead of them. [Ice or heat for plantar fasciitis](/ice-or-heat-for-plantar-fasciitis/) covers what the few studies found and how to protect your skin.',
      ],
      cites: [CITE.guideline, CITE.bleakleyIce],
    },
    {
      h2: 'How do you rebuild after a flare-up?',
      keyFact: 'In a trial of 48 people, heavy heel raises eased pain and improved daily function faster than stretching, and by twelve months both groups were about even (Rathleff and colleagues, 2015).',
      paragraphs: [
        '**Step your strength work back one level, then climb again once the mornings settle.** No study has tested how to rebuild after a flare. The 2023 guideline grades calf strength work **B** (Koc and colleagues, 2023), and in a trial of 48 people, heavy heel raises with a towel under the toes helped faster than stretching (Rathleff and colleagues, 2015). Strength work is worth keeping, just at a level your heel can handle this week.',
        'Walkito’s calf work goes up in steps: seated heel raises, then heel raises on both feet, then a held heel raise, and only later the towel heel raise, which loads the plantar fascia the hardest. During a flare:',
        {
          list: [
            'Drop one step down. If you were on the towel heel raise, go back to the held raise or raises on both feet. If you were on both feet, go back to seated.',
            'Keep the stretches going as usual.',
            'Move back up a step once the last two sessions at the lower level felt easy and your mornings are back to normal.',
            'Bring back the activity that set off the flare in small pieces, changing one thing at a time: distance, pace, hills or surface.',
          ],
        },
        'These are Walkito’s starting doses, not a prescription. The full set and table are in [plantar fasciitis exercises](/plantar-fasciitis-exercises/), and the strength ladder is explained in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
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
          often: 'Most sessions',
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
          often: 'Strength days, the step to drop back to during a flare',
          feel: 'Work low in the calf',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, the deeper calf muscle, with almost no load on the heel.',
          stop: 'Heel pain that reaches 6 out of 10, or a worse next morning',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days, once seated raises feel easy again',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load. Hold a wall for balance.',
          stop: 'Heel pain that reaches 6 out of 10, or a worse next morning',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'What is the worst thing you can do during a flare-up?',
      paragraphs: [
        '**No study ranks the worst thing, but two opposite mistakes are the most common: pushing straight through it, and stopping everything.** Here is what the evidence says about each:',
        {
          list: [
            '**Pushing through rising pain.** Keeping the same long walks or runs while the heel gets worse each morning ignores the one signal the tested pain rule relies on (Silbernagel and colleagues, 2007). The experts behind the 2021 best practice guide named a change in overall load as a risk factor for flares, so more load is the wrong direction (Morrissey and colleagues, 2021).',
            '**Stopping all activity and all exercises.** The guideline recommends adjusting load and does not advise complete rest (Koc and colleagues, 2023), and in the Achilles trial staying active within a pain limit did as well as pausing running and jumping for six weeks (Silbernagel and colleagues, 2007). Dropping your stretches and calf work also throws away the options graded **A** and **B**.',
            '**Going barefoot on hard floors,** especially for the first steps of the day (Morrissey and colleagues, 2021).',
            '**Counting on an insole alone.** Insoles used on their own for short-term relief are graded **B against** by the guideline, though they may help combined with exercise (Koc and colleagues, 2023). See [insoles or exercises](/insoles-vs-exercises/).',
          ],
        },
        'A flare is not proof that your plan failed. If flares keep coming back or each one is worse than the last, that is the time to see a clinician, not to try harder.',
      ],
      cites: [CITE.silbernagel, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'When is it not a flare-up?',
      keyFact: 'Plain X-rays often miss early stress fractures: one review put their first-visit sensitivity at about 10%, rising to 30 to 70% after three weeks (Patel and colleagues, 2011).',
      paragraphs: [
        '**If the pain behaves differently from your usual plantar fasciitis, do not assume it is a flare.** Plantar fasciitis pain is worst with the first steps after rest, often eases once you get going, and can return after long periods on your feet (Koc and colleagues, 2023). Other patterns point elsewhere:',
        {
          list: [
            '**Pain that builds the more you walk,** often after a jump in activity, or pain when you squeeze the sides of the heel, can be a stress fracture (Tu, 2018). See [plantar fasciitis or stress fracture](/plantar-fasciitis-vs-stress-fracture/).',
            '**Pain at night or at rest,** or burning, tingling and numbness, suggest something other than the plantar fascia. See [heel pain at night](/heel-pain-at-night/).',
            '**A sudden pop or sharp pain** under the foot during activity, or new bruising or swelling, needs a clinician, not a flare plan.',
            '**A deep ache in the centre of the heel** that is worse on hard ground can come from the heel fat pad. See [heel fat pad syndrome](/heel-fat-pad-syndrome/).',
          ],
        },
        'Not sure where your pain fits? The [foot pain identifier](/foot-pain-identifier/) walks through the common patterns, though it does not diagnose.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'What causes plantar fasciitis to flare up?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Usually a sudden rise in load on the heel: more walking or running than usual, long hours standing, or bare feet on hard floors. The 2023 guideline lists a recent increase in weight-bearing activity as typical. In one study, standing for most of the workday came with 3.6 times the odds of getting plantar fasciitis.',
    },
    {
      q: 'How long does a plantar fasciitis flare-up last?',
      cites: [CITE.latt],
      a: 'No study has measured how long a flare lasts, so any set number of days is a guess. Use your mornings as the guide: if first-step pain eases over a few days once you cut back, you are on track. Plantar fasciitis itself often takes months, and about 90% of people improve with non-surgical care.',
    },
    {
      q: 'What should I do when plantar fasciitis flares up?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Cut back the activity that set it off, keep gentle plantar fascia and calf stretches, wear supportive shoes indoors, and judge it by next-morning pain. The 2023 guideline recommends adjusting load and does not advise complete rest. In a trial of 180 adults, that kind of advice plus a heel cup came with meaningful improvement at about three months.',
    },
    {
      q: 'Should I rest completely during a plantar fasciitis flare-up?',
      cites: [CITE.guideline, CITE.silbernagel],
      a: 'No study shows complete rest is needed. The 2023 guideline recommends adjusting load and does not advise stopping. In an Achilles pain trial, people who stayed active with pain up to about 5 out of 10, settling by morning, did as well at twelve months as those who paused running and jumping for six weeks. If even short walks hurt sharply or make you limp, see a clinician.',
    },
    {
      q: 'What is the worst thing you can do for plantar fasciitis?',
      cites: [CITE.guideline, CITE.morrisseyBestPractice],
      a: 'No study ranks it, but pushing through pain that gets worse each morning is the clearest mistake, since experts in a 2021 best practice guide named changes in load as a risk factor for flares. Stopping all activity and your exercises is the opposite mistake. Going barefoot on hard floors is also best avoided until symptoms settle.',
    },
    {
      q: 'Should I keep doing my exercises during a flare-up?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Yes, at a lighter level. Keep the plantar fascia and calf stretches, which the 2023 guideline grades A, and drop your calf strength work one step, for example from standing to seated heel raises. Strength work is graded B, and heavy heel raises helped faster than stretching in a 48-person trial. Stop if pain reaches 6 out of 10.',
    },
    {
      q: 'Is ice good for a plantar fasciitis flare-up?',
      cites: [CITE.guideline, CITE.bleakleyIce],
      a: 'Ice is fine for comfort, but there is no evidence it calms a flare. The 2023 heel pain guideline makes no recommendation on ice or heat, and a review of 22 trials in fresh injuries found no best way or length of time to ice. Protect your skin, and skip it if your feet have poor feeling.',
    },
    {
      q: 'Can new shoes cause a plantar fasciitis flare-up?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'They can, though no study has tested new shoes as a trigger. People with heel pain wore shoes with harder heels than people without it, and a best practice guide advises supportive shoes with the heel slightly higher than the toes. A switch to flat, thin or very flexible shoes is a change your heel may notice.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain started after a fall, a jump or a twist, or you cannot put weight on the foot',
      'you felt a pop or sudden sharp pain under the foot, or there is new bruising or swelling',
      'pain builds the more you walk, or squeezing the sides of the heel hurts (possible stress fracture)',
      'the heel hurts at night or at rest, not just with your first steps',
      'you have numbness, tingling or burning in the foot',
      'the heel is red, hot or swollen, or you feel unwell or have a fever',
      'you have diabetes or poor circulation and your foot hurts or looks different',
      'the pain keeps getting worse for more than a few days despite cutting back, or flares keep coming back',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app. It reads a flare the way this page does: by how your heel feels in the morning.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it: a bad morning turns the session into a lighter one, and the calf work steps back up as mornings improve. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['walkingPf', 'heelPain', 'pfDuration'],
  crumb: 'Plantar fasciitis flare-up',
  campaign: 'guide-plantar-fasciitis-flare-up',
};
