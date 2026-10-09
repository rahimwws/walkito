import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * hupperets | Hupperets MD, Verhagen EA, van Mechelen W. Effect of unsupervised home based proprioceptive training on recurrences of ankle sprain: randomised controlled trial. BMJ. 2009;339:b2684. | doi: 10.1136/bmj.b2684 | pmid: 19589822 | RCT
 * schiftan | Schiftan GS, Ross LA, Hahne AJ. The effectiveness of proprioceptive training in preventing ankle sprains in sporting populations: a systematic review and meta-analysis. Journal of Science and Medicine in Sport. 2015;18(3):238–244. | doi: 10.1016/j.jsams.2014.04.005 | pmid: 24831756 | systematic review and meta-analysis of RCTs
 * dohertyOverview | Doherty C, Bleakley C, Delahunt E, Holden S. Treatment and prevention of acute and recurrent ankle sprain: an overview of systematic reviews with meta-analysis. British Journal of Sports Medicine. 2017;51(2):113–125. | doi: 10.1136/bjsports-2016-096178 | pmid: 28053200 | overview of systematic reviews
 * vuurberg | Vuurberg G, Hoorntje A, Wink LM, et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. British Journal of Sports Medicine. 2018;52(15):956. | doi: 10.1136/bjsports-2017-098106 | pmid: 29514819 | clinical practice guideline
 * hallCAI | Hall EA, Docherty CL, Simon J, Kingma JJ, Klossner JC. Strength-training protocols to improve deficits in participants with chronic ankle instability: a randomized controlled trial. Journal of Athletic Training. 2015;50(1):36–44. | doi: 10.4085/1062-6050-49.3.71 | pmid: 25365134 | RCT
 * smithHipCAI | Smith BI, Curtis D, Docherty CL. Effects of hip strengthening on neuromuscular control, hip strength, and self-reported functional deficits in individuals with chronic ankle instability. Journal of Sport Rehabilitation. 2018;27(4):364–370. | doi: 10.1123/jsr.2016-0143 | pmid: 28605235 | RCT
 * spinkFalls | Spink MJ, Menz HB, Fotoohabadi MR, et al. Effectiveness of a multifaceted podiatry intervention to prevent falls in community dwelling older people with disabling foot pain: randomised controlled trial. BMJ. 2011;342:d3411. | doi: 10.1136/bmj.d3411 | pmid: 21680622 | RCT
 * bachmannOttawa | Bachmann LM, Kolb E, Koller MT, Steurer J, ter Riet G. Accuracy of Ottawa ankle rules to exclude fractures of the ankle and mid-foot: systematic review. BMJ. 2003;326(7386):417. | doi: 10.1136/bmj.326.7386.417 | pmid: 12595378 | systematic review (diagnostic accuracy)
 *
 * Reused: CITE.bellows (Bellows and Wong 2018, balance training and bracing meta-analysis).
 */

export const ANKLE_STRENGTHENING_EN: Guide = {
  lang: 'en',
  page: 'ankleStrengthening',
  mainSource: CITE.hupperets,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Ankle Strengthening Exercises: A 4-Stage Progression',
  description:
    'Ankle strengthening exercises in order: band work, calf and tibialis raises, single-leg balance. Doses, re-sprain evidence and when to see a clinician.',
  h1: 'Ankle strengthening exercises: a progression from band to balance',
  lede:
    'The best ankle strengthening exercises combine resistance band work for the muscles that turn the foot in and out, calf and tibialis raises, and single-leg balance. Balance training has the strongest evidence: in a trial of 522 athletes after a sprain, a home balance program cut repeat sprains from 33 to 22 percent over a year.',
  intro: [
    'An ankle that feels unreliable after a sprain, ankles that roll in sport and shaky balance with age all use the same building blocks. What changes is where you start. This page puts the exercises in order and links to the full how-to for each.',
  ],
  takeaways: [
    'In a 2009 trial of 522 athletes who had recently sprained an ankle, a home balance program cut repeat sprains over one year from 33 percent to 22 percent (Hupperets and colleagues).',
    'A 2015 meta-analysis of 7 trials and 3,726 people found balance training lowered the risk of ankle sprains by about a third, with the clearest effect in people who had sprained an ankle before (Schiftan and colleagues).',
    'In a small 2015 trial of 39 people with unstable ankles, band exercises improved ankle strength and eased the feeling of instability, but not balance or hop tests, which suggests band work alone may not be enough.',
    'Strengthening comes after you can walk on the ankle. If you could not take four steps right after the injury or the ankle bones are tender to press, get it checked for a fracture first.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Which exercises strengthen your ankles?',
      paragraphs: [
        'Ankle strengthening exercises work four groups of muscles, plus the balance system that controls them. The peroneals (on the outer side of the lower leg) turn the foot outward and are the main defence against rolling the ankle. The tibialis posterior (deep on the inner side) turns the foot inward and holds up the arch. The calf pushes you up onto your toes, and the tibialis anterior (the shin muscle) lifts the front of the foot.',
        'Strength is only half of it. Ankles also roll because the muscles react a fraction too late. Balance work trains the speed of those reactions, which is why it keeps showing up in the research on repeat sprains.',
        'The table shows the order used on this page. Move to the next stage when the current one feels easy and the ankle does not ache more the next morning.',
      ],
      table: {
        caption: 'Ankle strengthening progression',
        head: ['Stage', 'Exercises', 'Move up when'],
        rows: [
          ['1. Seated band work', 'Band inversion, band eversion', 'Three sets feel easy with a firm band'],
          ['2. Two-foot raises', 'Calf raises, calf raise hold, tibialis raises', 'Three sets of 10 feel easy on both feet'],
          ['3. Balance', 'Single-leg hold, then eyes closed or on a cushion', 'You hold 30 seconds steady on each leg'],
          ['4. Hip and single-leg load', 'Side-lying hip abduction, single-leg calf raises', 'Ongoing: keep two or three sessions a week'],
        ],
      },
    },
    {
      h2: 'Do ankle strengthening exercises prevent another sprain?',
      keyFact: 'In a trial of 522 athletes after an ankle sprain, 22 percent of those given a home balance program sprained again within a year, compared with 33 percent of those who had usual care only (Hupperets and colleagues, 2009).',
      paragraphs: [
        'Yes, and balance training has the best evidence. In a 2009 randomised trial in the Netherlands, 522 athletes aged 12 to 70 who had sprained an ankle in the previous two months got either usual care or usual care plus a home balance board program. Over one year, 22 percent of the balance group sprained again, compared with 33 percent of the usual care group. That is about a 35 percent lower risk. Nine people needed to do the program to prevent one repeat sprain.',
        'The program asked for three sessions a week of up to 30 minutes, for two months, getting harder as it went. People did it at home without supervision.',
        'Pooled studies point the same way. A 2015 meta-analysis of 7 trials with 3,726 people found balance training cut sprain risk by about a third (relative risk 0.65). In people with a past sprain the result held (relative risk 0.64). For people who had never sprained an ankle, the evidence was weaker and the authors called it inconclusive. A 2018 review of trials in competitive athletes (six of its eight trials tested balance training) found balance training lowered sprain risk by 46 percent.',
        'A 2017 overview of 46 reviews rated the evidence for neuromuscular training (balance and coordination work) in preventing repeat sprains as moderate, and for bracing as strong.',
      ],
      sourceNote:
        'Hupperets 2009: relative risk 0.63 (95% CI 0.45 to 0.88) for self-reported recurrence; benefit was clearest in athletes whose first sprain had not been medically managed. Schiftan 2015: RR 0.65 (0.55 to 0.77) overall, 0.64 (0.51 to 0.81) with prior sprain, 0.57 (0.34 to 0.97) without, from two non-significant trials.',
      cites: [CITE.hupperets, CITE.schiftan, CITE.bellows, CITE.dohertyOverview],
    },
    {
      h2: 'The ankle strengthening exercises, in order',
      paragraphs: [
        'Start at stage 1 if your ankle was sprained recently or feels weak walking on uneven ground. If two-foot calf raises are already easy, you can start at stage 2 or 3. Stop any exercise for the day if pain reaches **6/10**, or if the ankle is more swollen or achy the next morning.',
        'The doses below are modest starting points. The trials on this page used their own programs, which are described in each section.',
      ],
      exercises: [
        {
          name: 'Band inversion',
          evidence: { level: 'early', why: 'In one small 2015 trial in unstable ankles, a band program improved inversion and eversion strength and perceived instability (Hall and colleagues).' },
          dose: 'Walkito starts at 3 x 12, each foot',
          how: 'Sit with a resistance band around the forefoot, anchored so it pulls the foot outward. Turn the sole inward against the band, slowly, and return slowly. The knee stays still. Full how-to: [ankle inversion with a band](/exercises/ankle-inversion-band/).',
          often: 'Strength days',
          feel: 'Work along the inner ankle and shin',
          stop: 'Pain reaches 6/10',
          media: 'band_inversion',
          caption: 'Band inversion: turn the sole inward against the band',
          alt: 'A seated figure turning the sole of one foot inward against a resistance band looped around the forefoot',
        },
        {
          name: 'Band eversion',
          evidence: { level: 'early', why: 'Part of the same band program in one small 2015 trial. Eversion is the direction that resists rolling the ankle outward.' },
          dose: '3 x 12, each foot (same as the inversion)',
          how: 'The mirror image of the inversion. Anchor the band so it pulls the foot inward, then turn the sole outward against it, leading with the little toe side. Keep the heel on the floor and the knee pointing up. There is no Walkito clip for this one.',
          often: 'Strength days',
          feel: 'Work along the outer side of the lower leg',
          stop: 'Pain reaches 6/10',
        },
        {
          name: 'Two-foot calf raise',
          evidence: { level: 'early', why: 'Standard in ankle rehab and supports push-off strength, but no trial has tested calf raises on their own for ankle sprains.' },
          dose: 'Walkito starts at 3 x 10',
          how: 'Stand holding a wall or counter. Rise onto the balls of both feet over about two seconds, pause, lower over about two seconds. Keep the weight over the big toe side so the ankle does not roll out. More detail: [calf raises](/exercises/calf-raises/).',
          often: 'Strength days',
          feel: 'Work in both calves',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_double',
          caption: 'Two-foot calf raise: up slowly, down slowly',
          alt: 'A figure holding a wall and rising onto the balls of both feet',
        },
        {
          name: 'Calf raise hold',
          evidence: { level: 'early', why: 'A holding version of the calf raise. Useful when moving reps hurt, but not tested for ankle sprains.' },
          dose: 'Walkito starts at 3 holds of 20 seconds',
          how: 'Rise onto both toes and stay there. Keep the ankles straight, not tipping out. If reps irritate a recently sprained ankle, holds are often easier to tolerate.',
          often: 'Strength days',
          feel: 'A steady burn in the calves',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_hold',
          caption: 'Calf raise hold: rise and stay, ankles straight',
          alt: 'A figure holding a raised heel position on both feet with a hand on the wall',
        },
        {
          name: 'Tibialis raise',
          evidence: { level: 'early', why: 'Targets the shin muscle that lifts the foot. No trial has tested it for ankle stability on its own.' },
          dose: 'Walkito starts at 3 x 10',
          how: 'Lean your back against a wall with your heels a foot or so in front of you. Lift the fronts of both feet toward your shins, then lower slowly. Full how-to: [tibialis raises](/exercises/tibialis-raises/).',
          often: 'Strength days',
          feel: 'Work at the front of the shin',
          stop: 'Pain reaches 6/10',
          media: 'tibialis_raise',
          caption: 'Tibialis raise: lift the fronts of the feet, heels down',
          alt: 'A figure leaning on a wall lifting the fronts of both feet off the floor',
        },
        {
          name: 'Single-leg hold',
          evidence: { level: 'moderate', why: 'Balance training lowered repeat sprains in a large randomised trial and two meta-analyses (Hupperets 2009, Schiftan 2015, Bellows 2018). A 2017 overview rated the evidence moderate.' },
          dose: 'Walkito starts at 3 holds of 20 seconds, each leg',
          how: 'Stand on one foot near a wall, knee soft, eyes on one spot. Let the foot and ankle make small corrections. Once 30 seconds is steady, close your eyes, then try a folded towel or cushion. Full how-to: [single-leg balance](/exercises/single-leg-balance/).',
          often: 'Most sessions',
          feel: 'Small, constant corrections in the foot and ankle',
          stop: 'Pain reaches 6/10, or you cannot stay safe near the wall',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: let the ankle make small corrections',
          alt: 'A figure balancing on one leg with the knee slightly bent',
        },
        {
          name: 'Side-lying hip abduction',
          evidence: { level: 'early', why: 'One small trial in unstable ankles found hip strengthening improved balance scores. Promising, not yet confirmed.' },
          dose: 'Walkito starts at 3 x 10, each side',
          how: 'Lie on your side, bottom knee bent, top leg straight. Lift the top leg toward the ceiling with the toes pointing forward, then lower slowly. More detail: [hip abduction](/exercises/hip-abduction/).',
          often: 'Strength days',
          feel: 'Work in the side of the hip',
          stop: 'Pain reaches 6/10',
          media: 'hip_abduction',
          caption: 'Side-lying hip abduction: lift the top leg, toes forward',
          alt: 'A figure lying on one side lifting the top leg upward',
        },
      ],
      cites: [CITE.hallCAI, CITE.hupperets, CITE.schiftan, CITE.bellows, CITE.smithHipCAI],
    },
    {
      h2: 'When can you start strengthening after an ankle sprain?',
      paragraphs: [
        'You can usually start gentle ankle exercises soon after a sprain, as long as you can put weight on the foot. A 2017 overview of 46 reviews found strong evidence for early mobilisation (getting the ankle moving early) and moderate evidence for exercise after an acute sprain. A 2018 Dutch guideline says people with a torn outer ankle ligament do best with tape or a brace combined with an exercise program, and prefers supervised exercise over passive options.',
        'Begin with pain-free movement and seated band work, add standing raises when walking feels normal, and add balance once you can stand on the injured leg without sharp pain. If the ankle is also stiff, see [ankle mobility exercises](/ankle-mobility-exercises/) for the range of motion side.',
        'Before any of this, rule out a fracture. The Ottawa ankle rules are a short checklist doctors use: an X-ray is advised if you could not take four steps right after the injury and in the clinic, or if there is bone tenderness at the back edge or tip of either ankle bone, the base of the fifth toe bone or the navicular (a bone on the inner midfoot). A 2003 review of 27 studies with 15,581 patients found the rules miss almost no fractures.',
      ],
      cites: [CITE.dohertyOverview, CITE.vuurberg, CITE.bachmannOttawa],
    },
    {
      h2: 'Is band work enough, or do you need balance training?',
      keyFact: 'In a trial of 39 people with unstable ankles, band training improved ankle strength and perceived instability but did not improve balance or hop tests (Hall and colleagues, 2015).',
      paragraphs: [
        'Band work on its own builds strength but may not change how well the ankle copes with a wobble. In a 2015 trial, 39 young adults with chronic ankle instability (an ankle that keeps giving way) were split into a band group, a manual-resistance strength group and a control group. The two strength groups trained three times a week for about a month and a half. Both got stronger and said their ankle felt more stable. Neither improved on a balance reach test or a crossover hop test.',
        'The authors suggested adding exercises that use several directions and joints. The prevention trials used balance, not bands. Do both.',
        'The hip matters too. In a small 2018 trial of 26 people with unstable ankles, after a month of supervised band exercises for the hip, three times a week, the training group made 9.9 errors on average on a standing balance test, against 21.2 in the group that did nothing. This was one small trial, so think of the hip as a useful add-on, not the core of the plan.',
      ],
      sourceNote:
        'Hall 2015: groups of 13; band protocol improved dorsiflexion, inversion and eversion strength and the instability visual analogue scale (p < .05); no change in triple-crossover hop or Y-Balance. Smith 2018: Balance Error Scoring System errors, post-test means.',
      cites: [CITE.hallCAI, CITE.smithHipCAI],
    },
    {
      h2: 'How can you strengthen your ankles at home without a band?',
      paragraphs: [
        'Most of the progression needs only a wall. Just the inversion and eversion moves need a band.',
        'Without a band, you can do the same two directions as isometrics (holds against something that does not move). Sit with the outer edge of your foot against a table leg or door frame and push outward for 5 to 10 seconds without the foot moving. Then do the same with the inner edge pushing inward. This is a common early step after a sprain, though it has not been tested as its own program.',
        'If you only have time for one thing, keep the balance work. It has the strongest evidence and takes a minute a day.',
      ],
    },
    {
      h2: 'Do ankle strengthening exercises help older adults with balance?',
      paragraphs: [
        'Ankle exercises are often part of falls prevention for older adults, but the evidence for ankle work alone is limited. The best trial tested a package. In 2011, 305 people with a mean age of 74, with disabling foot pain and a raised risk of falling, got either routine podiatry care or a bundle of orthoses, footwear advice and a voucher, home foot and ankle exercises and a falls booklet. Over 12 months, the bundle group had 36 percent fewer falls. The number of people who fell at least once was not clearly different.',
        'The bundle group also gained ankle strength, range of motion and balance. Because it was a package, the trial cannot say how much came from the exercises.',
        'If balance is your main worry, do the single-leg hold at a counter with a hand hovering over it. If you have had falls, dizziness or numb feet, get a balance assessment first.',
      ],
      cites: [CITE.spinkFalls],
    },
    {
      h2: 'What about ankle strengthening exercises for runners?',
      paragraphs: [
        'Runners need the same progression, taken further. Once two-foot calf raises are easy, move to single-leg calf raises, since each running stride loads one leg at a time. The [calf raise test](/calf-raise-test/) shows how many single-leg raises you can do compared with typical numbers.',
        'The balance evidence comes mostly from sporting populations, so it applies directly to runners. If you get pain along the shin rather than at the ankle, see [shin splints exercises](/shin-splints-exercises/). If it is at the heel or Achilles, see [heel pain in runners](/heel-pain-runners/).',
      ],
      cites: [CITE.schiftan],
    },
    {
      h2: 'How often should you do ankle strengthening exercises?',
      paragraphs: [
        'Two or three strength sessions a week, with a short balance practice on most days, is a sensible pattern. It matches the prevention trial above, which asked for three sessions a week over two months. Balance work is low load and can be done almost daily.',
        'Move up when an exercise feels easy for two sessions in a row and the ankle is no worse the next morning. Progress by adding a harder version (one leg instead of two, eyes closed instead of open, a firmer band) rather than piling on more sets. Drop back a stage after a flare.',
        'Walkito is built around heel, arch and lower leg pain, and it does not have an ankle sprain rehab program. Its plans can include the band inversion (after some arch work first), tibialis raises, calf raises, side-lying hip work and single-leg balance from this page, with a short test of calf endurance, arch hold and balance every two weeks at first. If you also want to build the small muscles under the arch, see [foot strengthening exercises](/foot-strengthening-exercises/).',
      ],
      cites: [CITE.hupperets],
    },
  ],
  faq: [
    {
      q: 'What is the best exercise to strengthen ankles?',
      cites: [CITE.hupperets, CITE.schiftan],
      a: 'Single-leg balance has the best evidence. In a 2009 trial of 522 athletes after a sprain, a home balance program cut repeat sprains over a year from 33 to 22 percent, and a 2015 meta-analysis of 7 trials found balance training lowered sprain risk by about a third. Pair it with band work and calf raises for strength.',
    },
    {
      q: 'How long does it take to strengthen a weak ankle?',
      cites: [CITE.hallCAI, CITE.hupperets],
      a: 'In trials, strength gains showed up within a month or two. In a 2015 trial, people with unstable ankles gained strength after about a month and a half of band work three times a week. The balance program that reduced repeat sprains ran for two months. How long it takes for you depends on the injury and how often you train.',
    },
    {
      q: 'Can you strengthen your ankles after a sprain?',
      cites: [CITE.dohertyOverview, CITE.vuurberg],
      a: 'Yes. Exercise is a core part of sprain recovery. A 2017 overview of 46 reviews found strong evidence for moving the ankle early and moderate evidence for exercise after an acute sprain, and a 2018 guideline recommends an exercise program, with tape or a brace, after a torn ankle ligament. Start gently once you can bear weight, and get a suspected fracture checked first.',
    },
    {
      q: 'Are calf raises good for your ankles?',
      a: 'Calf raises strengthen the muscles that push you onto your toes and help control the ankle at push-off, so they are a standard part of ankle rehab. No trial has tested calf raises alone for ankle sprains, though. Use them alongside band work and balance training, and keep your weight over the big toe so the ankle does not roll outward.',
    },
    {
      q: 'Why do my ankles keep rolling?',
      cites: [CITE.dohertyOverview],
      a: 'Ankles that keep rolling are often called chronic ankle instability: the ligaments are looser after past sprains and the muscles react a little late. A 2017 overview rated neuromuscular training as moderate evidence and bracing as strong evidence for preventing repeat sprains. If your ankle gives way often despite months of exercise, see a clinician about the ligaments.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you could not take four steps right after the injury, or the ankle bones are tender to press (the Ottawa ankle rules suggest an X-ray)',
      'the ankle gives way again and again, even after a few months of exercise',
      'you have numbness, tingling or burning in the foot or toes',
      'the foot looks pale, cold or blue, or the swelling keeps coming back',
      'you felt a snap at the back of the ankle and cannot rise onto your toes, which can mean an Achilles rupture',
      'the ankle locks, catches or clicks with pain, which can point to cartilage damage',
      'you have diabetes and numb feet, or you have had falls or dizzy spells',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito builds a plan one week at a time around foot and leg pain goals. It includes balance, band inversion, tibialis raises, calf raises and hip work. Each week it can move the exercise for your main goal one step harder (for balance: single-leg hold, then eyes closed, then standing on a pillow), but only when your last two sessions with it felt easy and morning pain did not rise. If a session felt hard or pain went up, it steps back instead. The band inversion and tibialis raises do not move up this way. It does not have an ankle sprain program, and it does not check whether an ankle is broken or torn.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every two weeks at first (every four once you reach a goal), a short test checks calf endurance, arch hold and balance. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Ankle strengthening',
  campaign: 'guide-ankle-strength',
};
