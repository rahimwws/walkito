import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * radfordStretch | Radford JA, Burns J, Buchbinder R, Landorf KB, Cook C. Does stretching increase ankle dorsiflexion range of motion? A systematic review. British Journal of Sports Medicine. 2006;40(10):870–875. | doi: 10.1136/bjsm.2006.029348 | pmid: 16926259 | systematic review with meta-analysis of 5 RCTs (n=161). SAME KEY AND TEXT AS THE tight-calves DRAFT: add once.
 * powdenLunge | Powden CJ, Hoch JM, Hoch MC. Reliability and minimal detectable change of the weight-bearing lunge test: a systematic review. Manual Therapy. 2015;20(4):524–532. | doi: 10.1016/j.math.2015.01.004 | pmid: 25704110 | systematic review of 12 reliability studies
 * bennellLunge | Bennell KL, Talbot RC, Wajswelner H, Techovanich W, Kelly DH, Hall AJ. Intra-rater and inter-rater reliability of a weight-bearing lunge measure of ankle dorsiflexion. Australian Journal of Physiotherapy. 1998;44(3):175–180. | doi: 10.1016/s0004-9514(14)60377-9 | pmid: 11676731 | reliability study (n=13)
 * hochInstability | Hoch MC, Staton GS, Medina McKeon JM, Mattacola CG, McKeon PO. Dorsiflexion and dynamic postural control deficits are present in those with chronic ankle instability. Journal of Science and Medicine in Sport. 2012;15(6):574–579. | doi: 10.1016/j.jsams.2012.02.009 | pmid: 22575498 | case-control (30 vs 30)
 * youngDorsiflexion | Young R, Nix S, Wholohan A, Bradhurst R, Reed L. Interventions for increasing ankle joint dorsiflexion: a systematic review and meta-analysis. Journal of Foot and Ankle Research. 2013;6(1):46. | doi: 10.1186/1757-1146-6-46 | pmid: 24225348 | systematic review with meta-analysis (23 studies, n=734)
 * mahieuEccentric | Mahieu NN, McNair P, Cools A, D'Haen C, Vandermeulen K, Witvrouw E. Effect of eccentric training on the plantar flexor muscle-tendon tissue properties. Medicine & Science in Sports & Exercise. 2008;40(1):117–123. | doi: 10.1249/mss.0b013e3181599254 | pmid: 18091014 | RCT (n=74)
 * teradaSprain | Terada M, Pietrosimone BG, Gribble PA. Therapeutic interventions for increasing ankle dorsiflexion after ankle sprain: a systematic review. Journal of Athletic Training. 2013;48(5):696–709. | doi: 10.4085/1062-6050-48.4.11 | pmid: 23914912 | systematic review (9 studies)
 * weerasekaraMobilisation | Weerasekara I, Osmotherly P, Snodgrass S, Marquez J, de Zoete R, Rivett DA. Clinical benefits of joint mobilization on ankle sprains: a systematic review and meta-analysis. Archives of Physical Medicine and Rehabilitation. 2018;99(7):1395–1412.e5. | doi: 10.1016/j.apmr.2017.07.019 | pmid: 28882509 | systematic review with meta-analysis (23 studies)
 * macrumSquat | Macrum E, Bell DR, Boling M, Lewek M, Padua D. Effect of limiting ankle-dorsiflexion range of motion on lower extremity kinematics and muscle-activation patterns during a squat. Journal of Sport Rehabilitation. 2012;21(2):144–150. | doi: 10.1123/jsr.21.2.144 | pmid: 22100617 | cross-sectional lab study (n=30)
 * popeDorsiflexion | Pope R, Herbert R, Kirwan J. Effects of ankle dorsiflexion range and pre-exercise calf muscle stretching on injury risk in Army recruits. Australian Journal of Physiotherapy. 1998;44(3):165–172. | doi: 10.1016/s0004-9514(14)60376-7 | pmid: 11676730 | prospective cohort within a quasi-randomised trial (n=1093)
 *
 * Reused: CITE.riddle
 */

export const ANKLE_MOBILITY_EN: Guide = {
  lang: 'en',
  page: 'ankleMobility',
  mainSource: CITE.radfordStretch,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Ankle Mobility Exercises: Test and Improve It',
  description:
    'Ankle mobility exercises with doses, the knee-to-wall test and what counts as real change, plus what research shows about stretching, strength and sprains.',
  h1: 'Ankle mobility exercises: how to test and improve your ankle bend',
  lede:
    'Ankle mobility exercises aim to increase dorsiflexion, how far your shin can tip forward over your foot with the heel down. Calf stretches and slow heel drops can add range, and ankle rocks work the same movement. A 2006 review of five trials found stretching added about 2 to 3 degrees. Check your starting point first with the knee-to-wall test.',
  intro: [
    'You notice a stiff ankle in small moments. Your heels lift when you squat. One ankle feels blocked on stairs or hills. Or an old sprain never quite let the ankle bend the way the other one does. This is common, and you can measure it at home with a wall and a ruler.',
    'This page is about the ankle joint and its range. If your main problem is a calf that feels tight or cramps, start with [tight calves](/tight-calves/). If your ankle keeps rolling, [ankle strengthening exercises](/ankle-strengthening-exercises/) covers that side.',
  ],
  takeaways: [
    'In a 2006 review of five randomised trials (161 healthy people), static calf stretching added about 2 to 3 degrees of ankle bend compared with no stretching, and the authors were unsure that change is clinically important.',
    'The knee-to-wall test is reliable at home and in clinic, but a 2015 review of 12 studies found a change has to be about 1.6 to 1.9 cm before you can trust it is real.',
    'In a trial of 74 healthy people, ankle bend increased after an eccentric heel drop program, and not in the control group (Mahieu and colleagues, 2008).',
    'After an ankle sprain, joint mobilisation by a clinician improved weight-bearing ankle bend in the short term in a 2018 review, and long-term effects have not been studied well.',
    'In a matched case-control study of 50 people with plantar fasciitis and 100 without, those with 0 degrees of ankle bend or less had 23.3 times the odds of plantar fasciitis compared with those above 10 degrees.',
  ],
  toc: true,
  sections: [
    {
      h2: 'What is ankle mobility, and why does it matter?',
      keyFact: 'In 1,093 army recruits followed through three months of training, ankle dorsiflexion range was a strong predictor of injury (Pope and colleagues, 1998).',
      paragraphs: [
        'Ankle mobility usually means ankle dorsiflexion: how far the shin can travel forward over the foot while the heel stays on the ground. You use it in every step, on every stair and at the bottom of every squat. When there is not enough of it, the body borrows range from somewhere else. The heel lifts early, the foot rolls in, or the knee drifts inward.',
        'Low ankle bend is linked with several problems, though linked is not the same as caused. In a matched case-control study of 50 people with plantar fasciitis and 100 without, people with 0 degrees of dorsiflexion or less had 23.3 times the odds of plantar fasciitis compared with people above 10 degrees (Riddle and colleagues, 2003). In 1,093 male army recruits followed through three months of hard training, ankle range measured at the start was a strong predictor of who got injured, from 48 injuries in total (Pope and colleagues, 1998).',
        'Squats show the effect clearly. In a lab study, 30 healthy people squatted with a 12 degree wedge under the front of the foot to mimic a stiff ankle. Their knees bent less and moved further inward than when they squatted flat (Macrum and colleagues, 2012). That was a simulated restriction in one session, so it shows the mechanics, not what happens to people with stiff ankles over years.',
      ],
      cites: [CITE.riddle, CITE.popeDorsiflexion, CITE.macrumSquat],
    },
    {
      h2: 'How do you test ankle mobility at home?',
      keyFact: 'A 2015 review of 12 studies found the knee-to-wall test reliable, with a change of about 1.6 to 1.9 cm needed to be outside measurement error (Powden and colleagues).',
      paragraphs: [
        'The knee-to-wall test, also called the weight-bearing lunge test, is the simplest home check for ankle mobility. You measure the longest distance from your big toe to a wall at which your knee can still touch the wall with the heel flat.',
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
        'The test is reliable when done the same way each time. In a small 1998 study, 13 healthy people were measured by four raters, and the scores agreed almost perfectly between raters and when two of them repeated it a week later (Bennell and colleagues). A 2015 review of 12 reliability studies agreed the test is good, and added the useful part: a change has to be about 1.6 to 1.9 cm, or roughly 5 degrees, before you can be fairly sure it is real and not measurement noise (Powden and colleagues).',
        'So retest every couple of weeks, not daily, and do not chase a few millimetres.',
      ],
      sourceNote:
        'Bennell 1998: intra-rater ICC 0.97-0.98, inter-rater ICC 0.97 (angle) and 0.99 (distance). Powden 2015: inter-clinician ICC 0.80-0.99, intra-clinician 0.65-0.99; minimal detectable change 4.6 degrees or 1.6 cm between clinicians, 4.7 degrees or 1.9 cm for the same clinician.',
      cites: [CITE.bennellLunge, CITE.powdenLunge],
    },
    {
      h2: 'What is a normal knee-to-wall distance?',
      keyFact: 'In one case-control study, 30 healthy adults averaged 12.47 cm on the knee-to-wall test and 30 people with unstable ankles averaged 10.73 cm (Hoch and colleagues, 2012).',
      paragraphs: [
        'There is no single agreed normal score for the knee-to-wall test. Websites quote 10 cm, 14 cm or 4 inches as the target, usually with no source. Use any one number as a rough guide only.',
        'One study gives a sense of typical values. Hoch and colleagues measured 30 healthy adults and 30 matched people with chronic ankle instability (ankles that keep giving way after sprains). The healthy group averaged 12.47 cm and the unstable group 10.73 cm. Those are averages from two small groups, so plenty of healthy people score above or below them.',
        'The more useful comparison is with yourself. A clear gap between your two ankles, especially on the side of an old sprain, tells you more than a number from a chart. So does your own score over time, using the 1.6 to 1.9 cm rule from the section above.',
      ],
      cites: [CITE.hochInstability, CITE.powdenLunge],
    },
    {
      h2: 'Is it a tight calf or a stiff ankle joint?',
      paragraphs: [
        'Ankle bend can be limited by the calf muscles at the back, or by the joint itself at the front. Where you feel the stop during the knee-to-wall test is the usual clue, though no trial has tested how accurate that clue is.',
        'A stretch or pull at the back of the calf, near the Achilles or lower down near the heel, points to the calf. The gastrocnemius (the big upper calf muscle) limits you most with the knee straight. The soleus (the deeper calf muscle) limits you with the knee bent, which is the position of the knee-to-wall test. Stretching and slow heel drops work here.',
        'A blocked or pinching feeling at the front of the ankle, with little stretch in the calf, points more to the joint: the talus (the ankle bone the shin sits on) not gliding back as the shin moves forward. This can happen after sprains. Pushing harder into a front pinch rarely helps. A physiotherapist can check it and use joint mobilisation, gentle hands-on gliding of the joint, which has some short-term evidence after sprains (see below).',
        'A 2013 review of sprain studies made the same point: the right approach depends on what is limiting the ankle (Terada and colleagues).',
      ],
      cites: [CITE.teradaSprain],
    },
    {
      h2: 'Which ankle mobility exercises work?',
      keyFact: 'A 2013 review of 23 studies in 734 healthy people found the most support for static stretching to increase ankle dorsiflexion (Young and colleagues).',
      paragraphs: [
        'Ankle mobility exercises with research behind them fall into two groups: calf stretches, and calf strength work done through full range, like heel raises and slow heel drops. A 2013 review of 23 studies in 734 healthy people found the most support for static stretching, some support from a single trial for heel raises done together with stretching, and little good evidence for most other methods (Young and colleagues). The strongest strength-only result comes from a separate heel drop trial (below). Ankle rocks have no trial of their own, but they load the same range.',
        'Below, "Walkito starts at" means the app\'s starting dose. Research doses are labelled as research. If any exercise takes pain to **6/10 or more**, stop for the day.',
      ],
      exercises: [
        {
          name: 'Ankle rocks',
          evidence: { level: 'early', why: 'No trial of ankle rocks on their own. They work the same weight-bearing range the knee-to-wall test measures.' },
          dose: 'Walkito starts at 2 sets of 30 seconds, each leg',
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
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
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
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
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
      h2: 'How much does stretching improve ankle mobility?',
      keyFact: 'A 2006 review of five randomised trials in 161 healthy people found static calf stretching added about 2 to 3 degrees of ankle bend compared with no stretching (Radford and colleagues).',
      paragraphs: [
        'Stretching improves ankle mobility, but only by a small amount. A 2006 review pooled five randomised trials in 161 healthy people and found static calf stretching added about 2 to 3 degrees of dorsiflexion compared with no stretching. The gain was similar whether people stretched for a total of 15 minutes or less or over 30 minutes across the trial. The authors said it was unclear whether a change that size matters to people.',
        'None of those trials included people with a lower limb injury, and most measured range right after the last stretch, so the numbers may not carry over to a stiff ankle after a sprain.',
        'Stretch for a few weeks, retest with the knee-to-wall test, and judge by your own result. If the stop is a pinch at the front of the ankle and nothing changes, the calf may not be what is limiting you.',
      ],
      sourceNote:
        'Radford 2006: weighted mean difference 2.07 degrees for 15 minutes or less of total stretching, 3.03 degrees for over 15 to 30 minutes, 2.49 degrees for over 30 minutes.',
      cites: [CITE.radfordStretch],
    },
    {
      h2: 'Does strength training improve ankle mobility?',
      paragraphs: [
        'Strength training through full range can improve ankle mobility, not only stretching. In a randomised trial of 74 healthy people, one group did an eccentric heel drop program (lowering the heel slowly under load) for about a month and a half and the other group did not. Dorsiflexion range increased only in the heel drop group, and the calf resisted being stretched less than before (Mahieu and colleagues, 2008).',
        'The 2013 review of 23 studies also included one trial where heel raises done together with static stretching increased ankle bend compared with no exercise (Young and colleagues). Both the review and the heel drop trial studied healthy people, not people with stiff or painful ankles.',
        'Strength work has a second benefit: it builds the calf at the same time. If you also have heel or Achilles pain, the calf work in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) and [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) does both jobs.',
      ],
      cites: [CITE.mahieuEccentric, CITE.youngDorsiflexion],
    },
    {
      h2: 'How do you get ankle mobility back after a sprain?',
      keyFact: 'A 2013 review found home stretching gave the largest dorsiflexion gains two weeks after an acute ankle sprain (Terada and colleagues).',
      paragraphs: [
        'After an ankle sprain, the ankle often loses bend, and getting it back is a normal part of rehab. A 2013 review of nine studies found that static stretching as part of a home exercise program had the largest effect on dorsiflexion two weeks after an acute sprain. Mobilisation with movement, a hands-on technique where a clinician glides the ankle while you bend it, had only small effects in people with repeat sprains (Terada and colleagues).',
        'A larger 2018 review of 23 studies found joint mobilisation improved weight-bearing ankle bend in the short term in people with long-standing sprain problems, but not right after a single session. Long-term effects have not been studied well (Weerasekara and colleagues).',
        'Range is only part of sprain recovery. In the Hoch 2012 study, people with ankles that kept giving way had about 1.7 cm less knee-to-wall range on average than healthy people, and their forward balance reach was also shorter. Balance and strength work matter as much as mobility here. See [ankle strengthening exercises](/ankle-strengthening-exercises/).',
      ],
      sourceNote:
        'Terada 2013: static stretching with home exercise two weeks after acute sprain, Cohen d 1.06 (95% CI 0.12 to 2.42); mobilisation with movement in recurrent sprains, d 0.14 to 0.39. Weerasekara 2018: short-term weight-bearing dorsiflexion P=.003, immediate P=.16. Hoch 2012: 10.73 cm vs 12.47 cm.',
      cites: [CITE.teradaSprain, CITE.weerasekaraMobilisation, CITE.hochInstability],
    },
    {
      h2: 'How often should you do ankle mobility exercises?',
      paragraphs: [
        'Most people do ankle mobility exercises a few times a week to most days, in short sessions, and judge progress by a retest every couple of weeks. The trials used very different schedules, and the 2006 stretching review found little difference between short and long total stretching time, so longer sessions do not seem to add much.',
        'In Walkito, the calf stretches, a knee-to-wall hold and ankle rocks rotate through your sessions: usually one on a strength day, more on mobility days, and ankle rocks also turn up on balance days. The app\'s own tests every 14 days at first (every 28 once you reach a goal) check calf endurance, arch hold and balance. It does not measure your knee-to-wall distance, so if you want that number, write it down yourself.',
        'A warm-up before a squat session or a run makes sense too, but the evidence is thin. In the 2013 review, the warm-up result came from one small study where warm-up was combined with stretching.',
      ],
      cites: [CITE.radfordStretch, CITE.youngDorsiflexion],
    },
  ],
  faq: [
    {
      q: 'How can I improve my ankle mobility fast?',
      cites: [CITE.youngDorsiflexion, CITE.radfordStretch],
      a: 'A warm-up and a few minutes of calf stretching can loosen the ankle before exercise, but lasting change takes regular work over weeks. A 2013 review of 23 studies in healthy people found the most support for static stretching. Stretching trials found gains of about 2 to 3 degrees, so expect small steps and retest with the knee-to-wall test.',
    },
    {
      q: 'What is a good knee-to-wall test score?',
      cites: [CITE.hochInstability, CITE.powdenLunge],
      a: 'There is no agreed cut-off. In one study, 30 healthy adults averaged 12.47 cm and 30 people with unstable ankles averaged 10.73 cm. Compare your two sides and your own scores over time instead. A 2015 review found a change needs to be about 1.6 to 1.9 cm before you can be sure it is real.',
    },
    {
      q: 'Can ankle mobility be improved?',
      cites: [CITE.radfordStretch, CITE.mahieuEccentric],
      a: 'Yes, at least in the healthy people studied. A 2006 review of five trials found calf stretching added about 2 to 3 degrees, and a trial of 74 healthy people found eccentric heel drops raised range too. If the limit is a bony block, for example after a fracture or with arthritis, gains may be smaller and a clinician should guide you.',
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
    {
      q: 'Do ankle circles improve ankle mobility?',
      a: 'Ankle circles are a fine warm-up, but no trial has shown they increase ankle dorsiflexion on their own. They move the ankle without weight on it and without holding the end of the range. For more bend, the exercises with evidence are calf stretches and calf strength work through full range, such as slow heel drops, done regularly and checked with the knee-to-wall test.',
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
    text: 'Walkito builds a plan one week at a time around one goal, for heel, foot and leg pain. Ankle mobility is part of it: calf stretches, a knee-to-wall hold and ankle rocks rotate through your sessions, most on mobility days, next to calf strength and balance work. Walkito starts stretches and ankle rocks at 2 sets of 30 seconds each leg.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance, arch hold and balance. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day',
  },
  crumb: 'Ankle mobility',
  campaign: 'guide-ankle-mobility',
};
