import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * radfordStretch | Radford JA, Burns J, Buchbinder R, Landorf KB, Cook C. Does stretching increase ankle dorsiflexion range of motion? A systematic review. British Journal of Sports Medicine. 2006;40(10):870-875. | doi: 10.1136/bjsm.2006.029348 | pmid: 16926259 | systematic review with meta-analysis of 5 RCTs (n=161). SAME KEY AND TEXT AS THE tight-calves DRAFT: add once.
 * powdenLunge | Powden CJ, Hoch JM, Hoch MC. Reliability and minimal detectable change of the weight-bearing lunge test: a systematic review. Manual Therapy. 2015;20(4):524-532. | doi: 10.1016/j.math.2015.01.004 | pmid: 25704110 | systematic review of 12 reliability studies
 * bennellLunge | Bennell KL, Talbot RC, Wajswelner H, Techovanich W, Kelly DH, Hall AJ. Intra-rater and inter-rater reliability of a weight-bearing lunge measure of ankle dorsiflexion. Australian Journal of Physiotherapy. 1998;44(3):175-180. | doi: 10.1016/s0004-9514(14)60377-9 | pmid: 11676731 | reliability study (n=13)
 * hochInstability | Hoch MC, Staton GS, Medina McKeon JM, Mattacola CG, McKeon PO. Dorsiflexion and dynamic postural control deficits are present in those with chronic ankle instability. Journal of Science and Medicine in Sport. 2012;15(6):574-579. | doi: 10.1016/j.jsams.2012.02.009 | pmid: 22575498 | case-control (30 vs 30)
 * youngDorsiflexion | Young R, Nix S, Wholohan A, Bradhurst R, Reed L. Interventions for increasing ankle joint dorsiflexion: a systematic review and meta-analysis. Journal of Foot and Ankle Research. 2013;6(1):46. | doi: 10.1186/1757-1146-6-46 | pmid: 24225348 | systematic review with meta-analysis (23 studies, n=734)
 * mahieuEccentric | Mahieu NN, McNair P, Cools A, D'Haen C, Vandermeulen K, Witvrouw E. Effect of eccentric training on the plantar flexor muscle-tendon tissue properties. Medicine & Science in Sports & Exercise. 2008;40(1):117-123. | doi: 10.1249/mss.0b013e3181599254 | pmid: 18091014 | RCT (n=74)
 * teradaSprain | Terada M, Pietrosimone BG, Gribble PA. Therapeutic interventions for increasing ankle dorsiflexion after ankle sprain: a systematic review. Journal of Athletic Training. 2013;48(5):696-709. | doi: 10.4085/1062-6050-48.4.11 | pmid: 23914912 | systematic review (9 studies)
 * weerasekaraMobilisation | Weerasekara I, Osmotherly P, Snodgrass S, Marquez J, de Zoete R, Rivett DA. Clinical benefits of joint mobilization on ankle sprains: a systematic review and meta-analysis. Archives of Physical Medicine and Rehabilitation. 2018;99(7):1395-1412.e5. | doi: 10.1016/j.apmr.2017.07.019 | pmid: 28882509 | systematic review with meta-analysis (23 studies)
 * macrumSquat | Macrum E, Bell DR, Boling M, Lewek M, Padua D. Effect of limiting ankle-dorsiflexion range of motion on lower extremity kinematics and muscle-activation patterns during a squat. Journal of Sport Rehabilitation. 2012;21(2):144-150. | doi: 10.1123/jsr.21.2.144 | pmid: 22100617 | cross-sectional lab study (n=30)
 * popeDorsiflexion | Pope R, Herbert R, Kirwan J. Effects of ankle dorsiflexion range and pre-exercise calf muscle stretching on injury risk in Army recruits. Australian Journal of Physiotherapy. 1998;44(3):165-172. | doi: 10.1016/s0004-9514(14)60376-7 | pmid: 11676730 | prospective cohort within a quasi-randomised trial (n=1093)
 *
 * Reused: CITE.riddle
 */

export const ANKLE_MOBILITY_EN: Guide = {
  lang: 'en',
  page: 'ankleMobility',
  mainSource: CITE.radfordStretch,
  published: '2026-10-09',
  updated: '2026-10-26',
  title: 'Ankle Mobility Exercises: 4 Moves and a Home Test',
  description:
    '4 ankle mobility exercises with doses and the evidence for each, plus the knee-to-wall test to measure your ankle bend and spot real change.',
  h1: 'Ankle mobility exercises: 4 moves and a simple home test',
  lede:
    'Ankle mobility exercises aim to increase dorsiflexion, how far your shin tips forward over your foot with the heel down. Calf stretches, straight knee and bent knee (3 holds of 30 seconds each leg), and slow eccentric heel drops can add range, and ankle rocks (2 sets of 15 each leg) work the same movement. Gains are small, about 2 to 3 degrees from stretching in a review of five trials, so measure your start with the knee-to-wall test.',
  intro: [
    'Stiff ankles show up as heels lifting in a squat, one ankle that feels blocked on stairs, or an old sprain that never bent like the other side. If your main problem is a tight or cramping calf, see [tight calves](/tight-calves/). If your ankle keeps rolling, see [ankle strengthening exercises](/ankle-strengthening-exercises/).',
  ],
  takeaways: [
    'In a 2006 review of five randomised trials (161 healthy people), static calf stretching added about 2 to 3 degrees of ankle bend compared with no stretching, and the authors were unsure that change is clinically important.',
    'In a trial of 74 healthy people, ankle bend increased after an eccentric heel drop program, and not in the control group (Mahieu and colleagues, 2008).',
    'The knee-to-wall test is reliable, but a 2015 review of 12 studies found a change has to be about 1.6 to 1.9 cm before you can trust it is real.',
    'After an ankle sprain, home stretching gave the largest dorsiflexion gains two weeks after an acute sprain in a 2013 review of nine studies.',
    'In a matched case-control study, people with 0 degrees of ankle bend or less had 23.3 times the odds of plantar fasciitis compared with those above 10 degrees.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Which ankle mobility exercises work?',
      keyFact: 'A 2013 review of 23 studies in 734 healthy people found the most support for static stretching to increase ankle dorsiflexion (Young and colleagues).',
      paragraphs: [
        'Ankle mobility exercises with research behind them fall into two groups: calf stretches, and calf strength work through full range, like slow heel drops. A 2013 review of 23 studies in 734 healthy people found the most support for static stretching, some support from a single trial for heel raises done with stretching, and little good evidence for most other methods (Young and colleagues). Ankle circles are a fine warm-up, but no trial has shown they increase dorsiflexion on their own.',
        '"Walkito starts at" means the app\'s starting dose. If any exercise takes pain to **6/10 or more**, stop for the day.',
      ],
      exercises: [
        {
          name: 'Ankle rocks',
          evidence: { level: 'early', why: 'No trial of ankle rocks on their own. They work the same weight-bearing range the knee-to-wall test measures.' },
          dose: 'Walkito starts at 2 sets of 15, each leg',
          how: 'Split stance, hands on a wall. Keep the front heel flat and slowly rock the knee forward over the second toe, then back. About two seconds each way, no bouncing. Full technique is on the [ankle rocks](/exercises/ankle-rocks/) page.',
          often: 'Mobility days',
          feel: 'A stretch low in the calf or a firm stop at the front of the ankle',
          stop: 'A sharp pinch at the front of the ankle, or pain reaches 6/10',
          media: 'ankle_rocks',
          caption: 'Ankle rocks: the knee travels over the toes, the heel stays flat',
          alt: 'A figure in a split stance at a wall rocking the front knee forward over the toes with the heel down',
        },
        {
          name: 'Calf stretch, straight knee',
          evidence: { level: 'moderate', why: 'A 2006 review of five trials found about 2 to 3 degrees more ankle bend than no stretching, in healthy people.' },
          dose: 'Walkito starts at 3 holds of 30 seconds, each leg',
          how: 'Hands on a wall, back leg straight, back heel down, hips forward until you feel the upper calf. See [calf stretch](/exercises/calf-stretch/).',
          often: 'Most days',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight and the heel on the floor',
        },
        {
          name: 'Soleus stretch, bent knee',
          evidence: { level: 'moderate', why: 'Calf stretching in general added a small amount of ankle bend in the trials on this page. The bent-knee version was not tested on its own. It targets the muscle that limits the bent-knee position of the knee-to-wall test.' },
          dose: 'Walkito starts at 3 holds of 30 seconds, each leg',
          how: 'Same wall position, then bend the back knee until the stretch moves down toward the heel. Keep the heel down. See [soleus stretch](/exercises/soleus-stretch/).',
          often: 'Most days',
          feel: 'A stretch low in the calf, near the heel',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance at a wall with both knees bent and the back heel down',
        },
        {
          name: 'Eccentric heel drops',
          evidence: { level: 'moderate', why: 'One randomised trial of 74 healthy people found more ankle bend after an eccentric heel drop program. Not tested in people with stiff or painful ankles.' },
          dose: 'In the trial: a heel drop program over about a month and a half. In Walkito, heel drops come later in the calf progression.',
          how: 'Stand on a step with the heels hanging off, rise up on both feet, shift onto one, then lower that heel slowly below the step over about three seconds. Use both feet to come back up. See [eccentric heel drops](/exercises/eccentric-heel-drops/).',
          often: 'Strength days',
          feel: 'Hard work in the calf and a stretch at the bottom',
          stop: 'Pain in the Achilles reaches 6/10, or is worse the next morning',
          media: 'heel_drop_straight',
          caption: 'Heel drop: lower slowly below the step on one leg',
          alt: 'A figure on a step lowering one heel slowly below the step edge',
        },
      ],
      cites: [CITE.youngDorsiflexion, CITE.radfordStretch, CITE.mahieuEccentric],
    },
    {
      h2: 'How do you test ankle mobility at home?',
      keyFact: 'A 2015 review of 12 studies found the knee-to-wall test reliable, with a change of about 1.6 to 1.9 cm needed to be outside measurement error (Powden and colleagues).',
      paragraphs: [
        'The knee-to-wall test, also called the weight-bearing lunge test, measures the longest distance from your big toe to a wall at which your knee can still touch the wall with the heel flat.',
      ],
      bullets: [
        'Take your shoes off and put a ruler or tape measure on the floor, at a right angle to the wall.',
        'Stand facing the wall with one foot forward, the big toe a few centimetres from the wall. The other foot is behind you for balance.',
        'Bend the front knee and try to touch the wall with it. Keep the heel down and the knee in line with your second toe.',
        'If the knee touches, slide the foot back a little and try again. If the heel lifts before the knee touches, move closer.',
        'Your score is the toe-to-wall distance at the last spot where the knee touched with the heel still flat. Do three tries on each side and note the best.',
        'Write down where you felt it stop you: a stretch at the back of the calf, or a pinch at the front of the ankle.',
      ],
      after: [
        'The test is reliable when done the same way each time. In a small 1998 study, 13 healthy people were measured by four raters, and the scores agreed almost perfectly (Bennell and colleagues). A 2015 review of 12 studies agreed, and found a change has to be about 1.6 to 1.9 cm, or roughly 5 degrees, before you can be fairly sure it is real (Powden and colleagues). So **retest every couple of weeks,** and do not chase a few millimetres.',
        '**What is a normal score?** There is no agreed cut-off. In one study, 30 healthy adults averaged 12.47 cm and 30 matched people with chronic ankle instability (ankles that keep giving way after sprains) averaged 10.73 cm (Hoch and colleagues, 2012). Those are averages from two small groups, so a clear gap between your two ankles, or your own change over time, tells you more.',
      ],
      sourceNote:
        'Bennell 1998: intra-rater ICC 0.97-0.98, inter-rater ICC 0.97 (angle) and 0.99 (distance). Powden 2015: inter-clinician ICC 0.80-0.99, intra-clinician 0.65-0.99; minimal detectable change 4.6 degrees or 1.6 cm between clinicians, 4.7 degrees or 1.9 cm for the same clinician.',
      cites: [CITE.bennellLunge, CITE.powdenLunge, CITE.hochInstability],
    },
    {
      h2: 'How much do stretching and strength work improve ankle mobility?',
      keyFact: 'A 2006 review of five randomised trials in 161 healthy people found static calf stretching added about 2 to 3 degrees of ankle bend compared with no stretching (Radford and colleagues).',
      paragraphs: [
        '**Stretching improves ankle mobility, but only by a small amount.** A 2006 review pooled five randomised trials in 161 healthy people and found static calf stretching added about 2 to 3 degrees of dorsiflexion compared with no stretching. The gain was similar whether people stretched for a total of 15 minutes or less or over 30 minutes across the trial, and the authors were unsure a change that size matters to people. None of the trials included people with a lower limb injury, and most measured range right after the last stretch.',
        '**Strength work through full range can help too.** In a randomised trial of 74 healthy people, one group did an eccentric heel drop program (lowering the heel slowly under load) for about a month and a half. Dorsiflexion increased only in that group, and the calf resisted being stretched less than before (Mahieu and colleagues, 2008). It also builds the calf, which is why the calf work in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) and [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) does both jobs.',
        'Stretch for a few weeks, retest, and judge by your own result. If the stop is a pinch at the front of the ankle and nothing changes, the calf may not be what is limiting you.',
      ],
      sourceNote:
        'Radford 2006: weighted mean difference 2.07 degrees for 15 minutes or less of total stretching, 3.03 degrees for over 15 to 30 minutes, 2.49 degrees for over 30 minutes.',
      cites: [CITE.radfordStretch, CITE.mahieuEccentric],
    },
    {
      h2: 'Is it a tight calf or a stiff ankle joint?',
      paragraphs: [
        'Where you feel the stop during the knee-to-wall test is the usual clue, though no trial has tested how accurate that clue is:',
        {
          list: [
            '**Back of the calf:** A stretch near the Achilles or low in the calf points to the calf. The gastrocnemius (the big upper calf muscle) limits you most with the knee straight. The soleus (the deeper calf muscle) limits you with the knee bent, the position of the knee-to-wall test. Stretching and slow heel drops work here.',
            '**Front of the ankle:** A blocked or pinching feeling at the front, with little calf stretch, points more to the joint: the talus (the ankle bone the shin sits on) not gliding back as the shin moves forward. This can happen after sprains. Pushing harder into a front pinch rarely helps. A physiotherapist can check it and use joint mobilisation, gentle hands-on gliding of the joint.',
          ],
        },
        'A 2013 review of sprain studies made the same point: the right approach depends on what is limiting the ankle (Terada and colleagues).',
      ],
      cites: [CITE.teradaSprain],
    },
    {
      h2: 'How do you get ankle mobility back after a sprain?',
      keyFact: 'A 2013 review found home stretching gave the largest dorsiflexion gains two weeks after an acute ankle sprain (Terada and colleagues).',
      paragraphs: [
        'Losing some ankle bend after a sprain is common. A 2013 review of nine studies found static stretching as part of a home exercise program had the largest effect on dorsiflexion two weeks after an acute sprain. Mobilisation with movement, where a clinician glides the ankle while you bend it, had only small effects in people with repeat sprains (Terada and colleagues).',
        'A 2018 review of 23 studies found joint mobilisation improved weight-bearing ankle bend in the short term in people with long-standing sprain problems, but not right after a single session. Long-term effects have not been studied well (Weerasekara and colleagues).',
        'Range is only part of it. In the Hoch 2012 study, people with ankles that kept giving way also had a shorter forward balance reach. **Balance and strength work matter as much as mobility here.** See [ankle strengthening exercises](/ankle-strengthening-exercises/).',
      ],
      sourceNote:
        'Terada 2013: static stretching with home exercise two weeks after acute sprain, Cohen d 1.06 (95% CI 0.12 to 2.42); mobilisation with movement in recurrent sprains, d 0.14 to 0.39. Weerasekara 2018: short-term weight-bearing dorsiflexion P=.003, immediate P=.16. Hoch 2012: 10.73 cm vs 12.47 cm.',
      cites: [CITE.teradaSprain, CITE.weerasekaraMobilisation, CITE.hochInstability],
    },
    {
      h2: 'Why does ankle mobility matter?',
      keyFact: 'In 1,093 army recruits followed through three months of training, ankle dorsiflexion range was a strong predictor of injury (Pope and colleagues, 1998).',
      paragraphs: [
        'You use ankle bend in every step, on every stair and at the bottom of every squat. When there is not enough, the body borrows range elsewhere: the heel lifts early, the foot rolls in, or the knee drifts inward. Low ankle bend is linked with several problems, though linked is not the same as caused:',
        {
          list: [
            '**Plantar fasciitis:** In a matched case-control study of 50 people with [plantar fasciitis](/plantar-fasciitis/) and 100 without, people with 0 degrees of dorsiflexion or less had 23.3 times the odds compared with people above 10 degrees (Riddle and colleagues, 2003).',
            '**Injury in recruits:** In 1,093 male army recruits followed through three months of hard training, ankle range measured at the start was a strong predictor of who got injured (Pope and colleagues, 1998).',
            '**Squats:** When 30 healthy people squatted with a 12 degree wedge under the front of the foot to mimic a stiff ankle, their knees bent less and moved further inward (Macrum and colleagues, 2012). That was one simulated session, so it shows the mechanics only.',
          ],
        },
      ],
      cites: [CITE.riddle, CITE.popeDorsiflexion, CITE.macrumSquat],
    },
    {
      h2: 'How often should you do ankle mobility exercises?',
      paragraphs: [
        'Most people do them a few times a week to most days, in short sessions, and retest every couple of weeks. The 2006 stretching review found little difference between short and long total stretching time, so **longer sessions do not seem to add much.** A warm-up before squats or a run makes sense, but the evidence is thin: in the 2013 review it came from one small study that combined warm-up with stretching.',
        'In Walkito, calf stretches, a knee-to-wall hold and ankle rocks rotate through your sessions, most on mobility days. The app\'s own tests check calf endurance, arch hold and balance, not your knee-to-wall distance, so write that number down yourself.',
      ],
      cites: [CITE.radfordStretch, CITE.youngDorsiflexion],
    },
  ],
  faq: [
    {
      q: 'Can ankle mobility be improved?',
      cites: [CITE.radfordStretch, CITE.mahieuEccentric],
      a: 'Yes, at least in the healthy people studied. A 2006 review of five trials found calf stretching added about 2 to 3 degrees, and a trial of 74 healthy people found eccentric heel drops raised range too. If the limit is a bony block, for example after a fracture or with arthritis, gains may be smaller and a clinician should guide you.',
    },
    {
      q: 'How do I know if I have poor ankle mobility?',
      cites: [CITE.hochInstability, CITE.powdenLunge],
      a: 'Use the knee-to-wall test: find the longest toe-to-wall distance at which your knee still touches the wall with the heel flat. In one study healthy adults averaged 12.47 cm. A clear gap between your two sides, or heels that lift when you squat, can also be signs. Retest every couple of weeks to track change.',
    },
    {
      q: 'How long does it take to improve ankle mobility?',
      cites: [CITE.mahieuEccentric, CITE.powdenLunge],
      a: 'Expect weeks, not days. In one trial, an eccentric heel drop program increased ankle bend over about a month and a half. Gains from stretching are small, so retest with the knee-to-wall test every couple of weeks. A change of about 1.6 to 1.9 cm is needed before you can be fairly sure it is real.',
    },
    {
      q: 'What is a good knee-to-wall test score?',
      cites: [CITE.hochInstability, CITE.powdenLunge],
      a: 'There is no agreed cut-off. In one study, 30 healthy adults averaged 12.47 cm and 30 people with unstable ankles averaged 10.73 cm. Compare your two sides and your own scores over time instead. A 2015 review found a change needs to be about 1.6 to 1.9 cm before you can be sure it is real.',
    },
    {
      q: 'Why do my heels come up when I squat?',
      cites: [CITE.macrumSquat],
      a: 'Heels lifting in a squat often means the ankles run out of dorsiflexion before you reach the bottom. In a lab study of 30 people, mimicking a stiff ankle with a wedge made knees bend less and drift inward. Ankle rocks and calf stretches can help, and a small heel lift under the shoes is a short-term workaround.',
    },
    {
      q: 'Is ankle stiffness after a sprain normal?',
      cites: [CITE.teradaSprain, CITE.weerasekaraMobilisation],
      a: 'Yes, losing some ankle bend after a sprain is common. A 2013 review found home stretching gave the biggest dorsiflexion gains two weeks after an acute sprain. A 2018 review found clinician joint mobilisation helped range in the short term for longer-lasting sprain problems. Stiffness that is not improving, or a front-of-ankle pinch, is worth a physiotherapy check.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you sprained the ankle recently and cannot take four steps on it, or the bone is tender to touch',
      'the ankle is swollen, hot or red, or you have a fever',
      'your calf is swollen, warm and tender, which can be a blood clot and needs same-day care',
      'there is a sharp pinch at the front of the ankle every time you bend it that does not ease with gentle work',
      'you felt a pop or a kick at the back of the ankle and now cannot push off or rise onto your toes, which can be an Achilles tendon tear',
      'the ankle locks, catches or gives way often',
      'you have numbness, tingling or burning in the foot',
      'the stiffness follows a fracture or surgery: follow your surgeon or physiotherapist\'s plan',
      'several joints are stiff and swollen in the morning for more than half an hour',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: '[Walkito](/program/) builds a plan one week at a time around one goal, for heel, foot and leg pain. Ankle mobility is part of it: calf stretches, a knee-to-wall hold and ankle rocks rotate through your sessions, most on mobility days, next to calf strength and balance work. Walkito starts calf stretches at 3 holds of 30 seconds and ankle rocks at 2 sets of 15, each leg.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance, arch hold and balance. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes, 3 days a week',
  },
  crumb: 'Ankle mobility',
  campaign: 'guide-ankle-mobility',
};
