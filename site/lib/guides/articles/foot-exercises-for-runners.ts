import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Foot exercises for runners (EN). Research 2026-10-18.
 * Main evidence: Taddei 2020 AJSM (118 recreational runners, foot core group
 * vs control, control 2.42 times more likely to be injured over 12 months,
 * effect seen at 4 to 8 months). Taddei 2020 PTS (28 runners, muscle volume
 * up after about two months). Ridge 2019 (57 runners, foot muscles bigger and
 * stronger in about two months, exercises at least five times a week).
 * Calf norms: Hebert-Losier 2017 (566 adults), Lunsford and Perry 1995 (25 reps).
 * Shin splints and calf endurance: Madeley 2007.
 * NEW: Toresdahl 2020 (720 first-time marathoners, hip, quad and core program
 * of about three months, no difference in overuse injury, RR 0.97), van Gent
 * 2007 (incidence 19.4% to 79.3%), Schache 2014 (plantar flexors drive push
 * off up to about 7 m/s).
 * No study has compared doing foot exercises after runs vs on easy days; the
 * page says so. No injury-reduction number other than Taddei's 2.42 is used.
 * Doses are the app's starting doses (ex-*.ts).
 */

export const RUNNERS_FOOT_EXERCISES_EN: Guide = {
  lang: 'en',
  page: 'runnersFootExercises',
  mainSource: CITE.taddeiRRI,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Foot Exercises for Runners: Routine, Doses and Evidence',
  description:
    'Foot exercises for runners: a short routine for the foot core, calves, toes and balance, with doses, calf raise norms and what the trials found.',
  h1: 'Foot exercises for runners: a short routine and what the research shows',
  lede:
    'A good foot routine for runners trains four things: the small muscles of the arch (the short foot exercise), calf and soleus endurance (heel raises), toe strength and single-leg balance. It takes about 10 minutes, two to five times a week, after an easy run or on a rest day. In one trial of 118 recreational runners, those who did not do a foot core program were 2.42 times more likely to get a running injury over 12 months (Taddei and colleagues, 2020). That is one trial, so read it as promising, not settled.',
  intro: [
    'This page is for runners who are not injured, or who have a niggle that lets them keep running. If your heel already hurts when you run, start with [heel pain from running](/heel-pain-runners/). For the full progression of every foot exercise, from seated to single leg, see [foot strengthening exercises](/foot-strengthening-exercises/).',
  ],
  toc: true,
  takeaways: [
    'In a 2020 trial of 118 recreational long-distance runners, the group without foot core training was 2.42 times more likely to get a running injury over 12 months. The effect appeared after about four to eight months of training (Taddei and colleagues, 2020).',
    'In a 2019 trial of 57 runners, about two months of foot exercises done at least five times a week made every measured foot muscle bigger and stronger (Ridge and colleagues, 2019).',
    'Healthy adults do a median of about 23 to 24 single-leg calf raises per leg, and 25 has been proposed as a reference for normal (Hebert-Losier and colleagues, 2017; Lunsford and Perry, 1995).',
    'A self-guided hip, thigh and core strength program for 720 first-time marathon runners did not lower the overuse injuries that kept runners from finishing the race: 7.1% against 7.3% (Toresdahl and colleagues, 2020). Strength work alone did not prevent injuries there.',
    'Across studies of long-distance runners, between 19.4% and 79.3% got a leg injury, and a previous injury was one of the clearest risk factors (van Gent and colleagues, 2007).',
  ],
  sections: [
    {
      h2: 'Do foot exercises help runners avoid injury?',
      keyFact: 'In a 2020 trial of 118 recreational runners, those without foot core training were 2.42 times more likely to be injured over 12 months (Taddei and colleagues).',
      paragraphs: [
        '**One good trial says yes, and it is still only one trial.** In 2020, Taddei and colleagues in Brazil randomly split 118 recreational long-distance runners into a foot core group (57 runners) and a control group (61 runners). The foot core group did about two months of supervised training on the foot and ankle muscles, then kept going with remote supervision. Everyone reported their running and any injury each week for a year.',
        'Over 12 months, the control group was 2.42 times more likely to get a running injury. The difference showed up after four to eight months of training, not in the first weeks. Runners whose foot strength went up the most went longer before an injury.',
        'An earlier, smaller trial from the same team, with 28 runners, found that about two months of foot training made the small foot muscles bigger and increased push off force while running (Taddei and colleagues, 2020).',
        'What this does not tell us: both trials come from one research group, in experienced recreational runners who were not injured at the start. The trials did not include beginners or runners who already had pain, so we do not know if the results apply to them.',
      ],
      sourceNote: 'Taddei 2020 (Am J Sports Med): control group 2.42 times more likely to have a running-related injury (95% CI 1.98 to 3.62), p = 0.035, single-blind RCT, 12-month follow-up. Taddei 2020 (Phys Ther Sport): proof-of-concept single-blind RCT, 28 runners, muscle volume by MRI, after about two months.',
      cites: [CITE.taddeiRRI, CITE.taddeiMuscle],
    },
    {
      h2: 'What should a runner’s foot routine include?',
      paragraphs: [
        'Four parts, each with one or two exercises. The doses below are Walkito’s starting doses. Do them barefoot, and stop for the day if pain goes above 6 out of 10.',
        {
          list: [
            '**Foot core:** the [short foot exercise](/exercises/short-foot-exercise/), standing and then on one leg. It trains the small muscles that hold up the arch.',
            '**Calf and soleus:** heel raises with a straight knee for the calf, and with a bent knee for the soleus, the deeper calf muscle.',
            '**Toes:** big toe lifts. The big toe is the last part of the foot to leave the ground when you push off.',
            '**Balance:** standing on one leg, because running is a series of one-leg landings.',
          ],
        },
        'This mirrors the idea behind the Taddei program, which trained the small foot muscles first and then used them in standing and loaded positions. It is not a copy of that program. For more toe work, see [toe strengthening exercises](/toe-strengthening-exercises/).',
      ],
      exercises: [
        {
          name: 'Short foot, standing',
          evidence: { level: 'moderate', why: 'Part of the foot core program in the runner trials (Taddei 2020). Not tested on its own for injury.' },
          dose: '3 sets of 10, hold 5 seconds, both feet',
          often: '2 to 5 days a week',
          feel: 'A tightening under the arch, toes relaxed',
          how: 'Stand with your weight on both feet. Without curling your toes, pull the ball of the foot toward the heel so the arch lifts a little. Hold, then relax. If the toes grip the floor, ease off.',
          stop: 'Cramp that does not ease, or pain above 6 out of 10',
          media: 'short_foot_double',
          caption: 'Short foot, standing: the arch lifts, the toes stay flat',
          alt: 'Two bare feet on the floor with the arches lifting and the toes flat',
        },
        {
          name: 'Short foot, one leg',
          evidence: { level: 'early', why: 'The single-leg step of the short foot progression. Not tested on its own in runners.' },
          dose: '3 sets of 10, hold 5 seconds, each foot',
          often: 'Once standing feels easy',
          feel: 'The arch working while you balance',
          how: 'Stand on one foot, a hand near a wall. Lift the arch as above and hold it while you balance. This is closer to what the foot does when you land.',
          stop: 'Pain above 6 out of 10, or you lose balance on every rep',
          media: 'short_foot_single',
          caption: 'Short foot on one leg: hold the arch while you balance',
          alt: 'A figure standing on one bare foot with the arch lifted',
        },
        {
          name: 'Double-leg calf raises',
          evidence: { level: 'early', why: 'Calf endurance was lower in athletes with shin splints (Madeley 2007). Not tested as injury prevention in runners.' },
          dose: '3 sets of 10, both feet',
          often: '2 to 3 days a week, not two days in a row',
          feel: 'Work in the calves and the balls of the feet',
          how: 'Hold a wall. Rise onto the balls of both feet over about 3 seconds, keeping the weight toward the big toe, then lower over 3 seconds. When this is easy, move to one leg. More on the [calf raises](/exercises/calf-raises/) page.',
          stop: 'Pain at the heel or Achilles above 6 out of 10, or worse the next morning',
          media: 'heel_raise_double',
          caption: 'Calf raises: slow up, slow down, weight over the big toe',
          alt: 'A figure holding a wall and rising onto the balls of both feet',
        },
        {
          name: 'Seated heel raises',
          evidence: { level: 'early', why: 'Works the soleus with the knee bent. Not tested on its own in runners.' },
          dose: '3 sets of 10, both feet',
          often: '2 to 3 days a week',
          feel: 'Work low in the calf',
          how: 'Sit with your feet flat and press up through the balls of the feet. With the knee bent, the soleus does most of the work. A backpack or weights on the knees add load as it gets easy.',
          stop: 'Pain above 6 out of 10',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: knee bent to load the soleus',
          alt: 'A seated figure lifting both heels, the lower calves highlighted',
        },
        {
          name: 'Big toe lift',
          evidence: { level: 'early', why: 'An MRI study shows it activates the small foot muscles (Gooding 2016). Not tested alone in an outcome trial.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: '2 to 5 days a week',
          feel: 'Effort on top of the foot and under the arch',
          how: 'Keep the four small toes on the floor and lift only the big toe. Then try the reverse: big toe down, small toes up. A small movement is enough at first.',
          stop: 'Pain at the big toe joint',
          media: 'big_toe_lift',
          caption: 'Big toe lift: only the big toe comes up',
          alt: 'A bare foot with the big toe lifted and the other toes flat',
        },
        {
          name: 'Single-leg balance hold',
          evidence: { level: 'early', why: 'Part of most foot programs. Not tested on its own as injury prevention in runners.' },
          dose: '3 holds of 30 seconds, each side',
          often: '2 to 5 days a week',
          feel: 'Small corrections in the foot and ankle',
          how: 'Stand on one foot, knee soft, near a wall. When 30 seconds is easy, close your eyes or stand on a pillow. More on the [single-leg balance](/exercises/single-leg-balance/) page.',
          stop: 'You cannot stay up without grabbing the wall',
          media: 'single_leg_hold',
          caption: 'Single-leg balance: knee soft, a wall within reach',
          alt: 'A figure standing on one leg next to a wall',
        },
      ],
      cites: [CITE.taddeiRRI, CITE.madeley, CITE.gooding],
    },
    {
      h2: 'Why do runners need calf and soleus strength?',
      keyFact: 'Up to about 7 metres per second, faster running mostly comes from pushing harder into the ground, and the soleus and gastrocnemius play a key role in that push (Schache and colleagues, 2014).',
      paragraphs: [
        '**The calf muscles do much of the pushing when you run.** A 2014 review of how leg muscles work in running found that at speeds up to about 7 metres per second, which covers nearly all recreational running, runners go faster mainly by pushing harder into the ground for a longer stride. The two calf muscles, the soleus and the gastrocnemius, have a particularly important role in that push (Schache and colleagues, 2014).',
        'The soleus sits under the gastrocnemius and works most when the knee is bent, which is why the routine has a seated, bent-knee heel raise as well as the standing one. If your calves often feel tight after runs, [tight calves](/tight-calves/) covers stretching and the [soleus stretch](/exercises/soleus-stretch/).',
        'Calf endurance also comes up in shin pain. In a case-control study, athletes with shin splints did fewer heel raises to fatigue than athletes without them (Madeley and colleagues, 2007). That shows a link, not that weak calves cause shin splints. More in [shin splints exercises](/shin-splints-exercises/).',
      ],
      cites: [CITE.schache, CITE.madeley],
    },
    {
      h2: 'How many calf raises should a runner be able to do?',
      keyFact: 'In 566 adults aged 20 to 81, the median was 24 single-leg heel raises on the right and 23 on the left (Hebert-Losier and colleagues, 2017).',
      paragraphs: [
        'There is no runner-specific norm, so use the general adult numbers as a floor. In a study of 566 adults, the median was 24 single-leg heel raises on the right leg and 23 on the left, at a pace of one beat up and one beat down at 60 beats per minute. Counts fall with age, and more active people did more (Hebert-Losier and colleagues, 2017). An older study proposed 25 as the reference for normal (Lunsford and Perry, 1995).',
        'Compare your legs too. A gap of more than 10 percent between sides is the usual threshold for a meaningful difference in leg rehabilitation (Silbernagel and colleagues, 2010). The full protocol, a home version and a calculator are on the [calf raise test](/calf-raise-test/) page.',
      ],
      table: {
        caption: 'Median single-leg heel raises by age, moderate activity (Hebert-Losier 2017)',
        head: ['Age', 'Men', 'Women'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
        ],
      },
      after: [
        'These are model estimates for a moderately active adult with a body mass index of 24.2, not pass or fail lines. Retest every few weeks and watch the trend and the left to right gap.',
      ],
      sourceNote: 'Hebert-Losier 2017, Table 4: model estimates for BMI 24.2 and physical activity level 4, average of both legs, rounded. Lunsford and Perry 1995: 203 adults aged 20 to 59.',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry, CITE.silbernagelHeelRise],
    },
    {
      h2: 'When should runners do foot exercises, and how often?',
      paragraphs: [
        '**No study has compared doing foot exercises after a run against doing them on a rest day,** so the timing below is practical, not tested.',
        {
          list: [
            '**After an easy run or on a rest day.** The exercises tire the small foot muscles, so they fit better after a short, easy run than before a hard session or a long run.',
            '**Not right before speed work or a race.** You want fresh calves for those.',
            '**Calf raises 2 to 3 days a week,** with a day off between them, like any strength work.',
            '**Foot core, toes and balance 2 to 5 days a week.** In the 2019 trial, runners did foot exercises at least five times a week and gained strength in about two months (Ridge and colleagues, 2019).',
          ],
        },
        'Give it time. Muscle size changed within about two months in the trials, but the drop in injuries in the Taddei trial only showed after four to eight months. A routine you keep for months matters more than a hard one you drop after three weeks.',
      ],
      table: {
        caption: 'A sample week for a runner',
        head: ['Day', 'Run', 'Foot routine'],
        rows: [
          ['Mon', 'Rest', 'Full routine'],
          ['Tue', 'Speed', 'None'],
          ['Wed', 'Easy', 'Foot core, toes, balance'],
          ['Thu', 'Rest', 'Full routine'],
          ['Fri', 'Easy', 'Foot core, balance'],
          ['Sat', 'Long', 'None'],
          ['Sun', 'Easy or rest', 'Full routine'],
        ],
      },
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
    },
    {
      h2: 'Can you do foot exercises with a niggle?',
      paragraphs: [
        'Usually yes, if the niggle is mild and stable, and if you adjust. Use the same rule as the rest of this site: some discomfort is fine, but stop for the day if pain goes above 6 out of 10, and go lighter if it is worse the next morning.',
        'A few niggles change the plan:',
        {
          list: [
            '**Heel pain on the first steps in the morning** points to plantar fasciitis. Calf raises and stretches matter more there: see [heel pain from running](/heel-pain-runners/) and [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
            '**Pain at the back of the heel or in the Achilles tendon** needs a more gradual calf plan, often with slow heel drops: see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
            '**Pain along the inner shin** may be shin splints: see [shin splints exercises](/shin-splints-exercises/).',
            '**Pain in one spot on a bone** that grows with each run is a stress fracture warning sign. Stop running and get it checked.',
          ],
        },
      ],
    },
    {
      h2: 'What foot exercises do not do',
      paragraphs: [
        '**They do not replace sensible training.** Across studies of long-distance runners, between 19.4% and 79.3% got a leg injury, and a long weekly distance in men and a previous injury were among the clearest risk factors (van Gent and colleagues, 2007). In a Danish study of 874 novice runners, those who raised their weekly distance by more than 30% seemed more prone to some overuse injuries, though the result fell just short of statistical significance (Nielsen and colleagues, 2014).',
        '**Strength work is not automatic protection.** In a trial with 720 first-time New York City Marathon runners, a self-guided 10-minute program for the hips, thighs and core, three times a week for about three months, did not lower the overuse injuries that stopped runners from finishing the marathon: 7.1% in the strength group against 7.3% in the others (Toresdahl and colleagues, 2020). That program did not train the feet, but it is a reminder that a routine on paper is not the same as a result.',
        '**They change arch shape only a little.** In a small study of 21 people without a control group, the arch sank 1.8 mm less after a month of short foot training (Mulligan and Cook, 2013). Expect a stronger, steadier foot, not a new arch. Shoes and barefoot running are a separate question, covered in [barefoot shoes](/barefoot-shoes/).',
      ],
      sourceNote: 'Toresdahl 2020: randomized, 720 enrolled, risk ratio 0.97 (95% CI 0.57 to 1.63), p = 0.90. Program targeted quadriceps, hip abductors and core; written and video instruction.',
      cites: [CITE.vanGent, CITE.nielsen, CITE.toresdahl, CITE.mulliganCook],
    },
  ],
  faq: [
    {
      q: 'What are the best foot exercises for runners?',
      cites: [CITE.taddeiRRI],
      a: 'A short set that covers four things: the short foot exercise for the arch, heel raises with a straight and a bent knee for the calf and soleus, big toe lifts for push off, and single-leg balance. A foot core program built on the same idea lowered running injuries in one trial of 118 runners.',
    },
    {
      q: 'Do foot strengthening exercises prevent running injuries?',
      cites: [CITE.taddeiRRI],
      a: 'They may. In a 2020 trial of 118 recreational runners, the group without foot core training was 2.42 times more likely to be injured over 12 months, with the effect appearing after four to eight months. It is one trial from one research group, so the evidence is promising but not settled.',
    },
    {
      q: 'How often should runners do foot exercises?',
      cites: [CITE.ridgeMinimalist],
      a: 'Two to five days a week for the foot core, toe and balance work, and two to three days a week for calf raises, with a day off between them. In a 2019 trial, runners who did foot exercises at least five times a week gained strength in about two months.',
    },
    {
      q: 'Should I do foot exercises before or after running?',
      a: 'After an easy run or on a rest day is the practical choice, because the exercises tire the small foot muscles. No study has compared timing. Avoid a full routine right before speed work, a long run or a race, when you want fresh feet and calves.',
    },
    {
      q: 'How many single-leg calf raises should a runner do?',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry],
      a: 'There is no runner-specific number. Healthy adults do a median of about 23 to 24 per leg at a set pace, and 25 has been proposed as normal. Many active runners do more. A gap of more than 10 percent between legs is worth tracking. The calf raise test page has the full protocol.',
    },
    {
      q: 'How long until foot exercises make a difference?',
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
      a: 'Foot muscles got bigger and stronger in about two months in the trials. The drop in injuries in the runner trial took longer, showing after four to eight months. Plan to keep a short routine going for months, not weeks.',
    },
    {
      q: 'Can I keep running while I do foot exercises?',
      a: 'Yes. The routine is meant to sit alongside your running. If you have a niggle, stop an exercise for the day if pain goes above 6 out of 10, and keep runs easy if pain is worse the next morning. Pain that grows with each run, or sits on one spot of bone, needs a clinician.',
    },
    {
      q: 'Do barefoot running or minimalist shoes strengthen the feet?',
      cites: [CITE.ridgeMinimalist],
      a: 'Walking in minimalist shoes built foot strength about as well as exercises in a 2019 trial of runners, with a slow, gradual increase. Switching your running shoes quickly is a different matter and carries its own risks, so build up slowly if you try it.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'pain sits on one spot of a bone in the foot or shin and gets worse with each run, which can be a stress fracture',
      'you cannot put weight on the foot, or you limp when you walk',
      'the pain started with a pop, a fall or a twisted ankle',
      'the foot or ankle is swollen, red or hot, or you have a fever',
      'you feel numbness, tingling or burning in the foot',
      'the heel or foot hurts at night or at rest',
      'pain keeps getting worse over two to three weeks despite easier running',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app with the exercises on this page: the short foot from seated to one leg, heel raises, big toe lifts, toe spreads and single-leg balance. It does not plan your running, so keep your own training plan and fit the sessions on easy days.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate how your feet feel, and the plan adjusts to it. A short test every 14 days checks calf raises, arch hold and balance, left against right. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['footStrengthening', 'calfRaiseTest', 'shinSplints'],
  crumb: 'Foot exercises for runners',
  campaign: 'guide-foot-exercises-for-runners',
};
