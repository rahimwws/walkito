import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * taddeiRRI | Taddei UT, Matias AB, Duarte M, Sacco ICN. Foot core training to prevent running-related injuries: a survival analysis of a single-blind, randomized controlled trial. American Journal of Sports Medicine. 2020;48(14):3610–3619. | 10.1177/0363546520969205 | 33156692 | RCT
 * taddeiMuscle | Taddei UT, Matias AB, Ribeiro FIA, Bus SA, Sacco ICN. Effects of a foot strengthening program on foot muscle morphology and running mechanics: a proof-of-concept, single-blind randomized controlled trial. Physical Therapy in Sport. 2020;42:107–115. | 10.1016/j.ptsp.2020.01.007 | 31962191 | RCT (proof of concept)
 * ridgeMinimalist | Ridge ST, Olsen MT, Bruening DA, Jurgensmeier K, Griffin D, Davis IS, Johnson AW. Walking in minimalist shoes is effective for strengthening foot muscles. Medicine & Science in Sports & Exercise. 2019;51(1):104–113. | 10.1249/MSS.0000000000001751 | 30113521 | RCT
 * petersDickie | Peters-Dickie JL, Detrembleur C, Guallar-Bouloc M, Rastelli M, Lobet S, Hidalgo B, Deschamps K. The effects of foot core exercises and minimalist footwear on foot muscle sizes, foot strength, and biomechanics: a systematic review and meta-analysis. Clinical Biomechanics. 2025;122:106417. | 10.1016/j.clinbiomech.2024.106417 | 39709752 | systematic review and meta-analysis
 * deSouzaIFM | de Souza TMM, de Oliveira Coutinho VG, Tessutti VD, de Oliveira NRC, Yi LC. Effects of intrinsic foot muscle strengthening on the medial longitudinal arch mobility and function: a systematic review. Journal of Bodywork and Movement Therapies. 2023;36:89–99. | 10.1016/j.jbmt.2023.05.010 | 37949605 | systematic review
 * futrellOlder | Futrell EE, Roberts D, Toole E. The effects of intrinsic foot muscle strengthening on functional mobility in older adults: a systematic review. Journal of the American Geriatrics Society. 2022;70(2):531–540. | 10.1111/jgs.17541 | 34716700 | systematic review
 * mickleToe | Mickle KJ, Caputi P, Potter JM, Steele JR. Efficacy of a progressive resistance exercise program to increase toe flexor strength in older people. Clinical Biomechanics. 2016;40:14–19. | 10.1016/j.clinbiomech.2016.10.005 | 27780109 | randomized trial (plus non-randomized control group)
 * kamonseki | Kamonseki DH, Gonçalves GA, Yi LC, Júnior IL. Effect of stretching with and without muscle strengthening exercises for the foot and hip in patients with plantar fasciitis: a randomized controlled single-blind clinical trial. Manual Therapy. 2016;23:76–82. | 10.1016/j.math.2015.10.006 | 26654252 | RCT
 * mulliganCook | Mulligan EP, Cook PG. Effect of plantar intrinsic muscle training on medial longitudinal arch morphology and dynamic function. Manual Therapy. 2013;18(5):425–430. | 10.1016/j.math.2013.02.007 | 23632367 | single-group pre-post study
 */

export const FOOT_STRENGTHENING_EN: Guide = {
  lang: 'en',
  page: 'footStrengthening',
  mainSource: CITE.taddeiRRI,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Foot Strengthening Exercises: A Simple Progression',
  description:
    'Foot strengthening exercises for the small and large foot muscles, from seated to single leg, with starting doses and what trials found on injury.',
  h1: 'Foot strengthening exercises: what to do and how to progress',
  lede:
    'Foot strengthening exercises train the small muscles inside the foot and the larger ones that run down from the calf. Start seated with the short foot exercise, toe spreads and big toe lifts, then move to standing, then to one leg. In trials, foot muscles got bigger and stronger within about two months.',
  intro: [
    'This page is the general guide for the whole foot. For flat feet, toes or barefoot shoes, the more specific pages are linked below.',
  ],
  takeaways: [
    'In a 2020 trial of 118 recreational runners, the group without foot training was 2.42 times more likely to get a running injury over 12 months than the group that did a foot core program (Taddei and colleagues). This is one trial.',
    'In a 2019 trial of 57 runners, about two months of progressive foot exercises, done at least five times a week, made every measured foot muscle bigger and stronger, while the control group did not change (Ridge and colleagues).',
    'A 2025 review of 28 trials with 1,399 people supported foot exercises for building foot strength, but rated the certainty of the evidence low to very low (Peters-Dickie and colleagues).',
    'In older adults aged 60 to 90, a supervised program with gradually heavier loads raised toe strength by up to 36 percent over three months, while a home-based program did not (Mickle and colleagues, 2016).',
    'For plantar fasciitis, adding foot strengthening to stretching did not beat stretching alone in a trial of 83 people (Kamonseki and colleagues, 2016).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What are the foot muscles, and why strengthen them?',
      paragraphs: [
        'The foot has two groups of muscles:',
        {
          list: [
            'The **intrinsic** muscles (the small muscles that start and end inside the foot) sit under the arch and between the bones. They hold the arch up, spread the toes and make the tiny corrections that keep you balanced.',
            'The **extrinsic** muscles (the bigger muscles that start in the lower leg and reach the foot through long tendons) include the calf, which lifts the heel, and the muscles that turn and lift the foot.',
          ],
        },
        'A 2015 paper by McKeon and colleagues called the intrinsic muscles the "foot core". The idea is the same as the deep muscles of your trunk: small stabilizers that keep the larger movers working well.',
        'Their view was that foot care more often supports the foot from the outside than trains these muscles, so many people never train them. That is a model, not an established cause of pain, but it explains why foot programs train the small muscles first and then add the calf and balance.',
        'Good foot strength work covers both groups:',
        {
          list: [
            'The short foot exercise, toe spreads and big toe lifts train the intrinsic muscles.',
            'Heel raises train the calf.',
            'Standing on one leg makes both work together.',
          ],
        },
      ],
      cites: [CITE.mcKeon],
    },
    {
      h2: 'Which foot strengthening exercises should you start with?',
      keyFact: 'A 2023 review of four trials found most foot programs used 5-second holds and moved from sitting to standing (de Souza and colleagues).',
      paragraphs: [
        'Start with the exercises that isolate the small foot muscles, done seated, then add standing and balance work as they get easy. A 2023 review by de Souza and colleagues looked at four randomized trials of intrinsic foot strengthening. Most used the short foot exercise and towel curls, with contractions held for about 5 seconds and a progression from sitting to standing.',
        'The doses below are starting doses. Do them barefoot. If any exercise takes pain to **6/10 or more**, stop for the day. Each exercise has its own page with more detail, linked from the [exercise library](/exercises/).',
      ],
      exercises: [
        {
          name: 'Short foot, seated',
          dose: '3 sets of 8, hold each for 5 seconds',
          often: 'Most sessions',
          feel: 'A tightening under the arch, toes still relaxed',
          stop: 'Cramping that does not ease, or pain at 6/10',
          how: 'Sit with your foot flat. Without curling your toes, pull the ball of the foot toward the heel so the arch lifts a little. Hold, then relax. The movement is small. If your toes grip the floor, ease off and try again. The full technique is on the [short foot exercise](/exercises/short-foot-exercise/) page.',
          media: 'short_foot_seated',
          caption: 'Short foot, seated: draw the ball of the foot toward the heel, toes flat',
          alt: 'A seated figure lifting the arch of one foot while the toes stay flat on the floor',
          evidence: { level: 'moderate', why: 'Used in most trials in the 2023 review of foot strengthening (de Souza), with low-quality evidence for arch and balance changes. Never tested on its own for injury or pain.' },
        },
        {
          name: 'Toe spread',
          dose: '3 sets of 10',
          often: 'Most sessions',
          feel: 'Work along the sides of the foot',
          stop: 'Cramping that does not ease',
          how: 'With your foot flat, spread all five toes as wide as you can, hold for a moment, then relax. Keep the heel and the ball of the foot on the floor.',
          media: 'toe_spread',
          caption: 'Toe spread: spread the toes wide, heel and ball of the foot down',
          alt: 'A bare foot on the floor with the toes spread apart',
          evidence: { level: 'early', why: 'An MRI study shows it activates the small foot muscles (Gooding 2016). Not tested alone in an outcome trial.' },
        },
        {
          name: 'Big toe lift',
          dose: '3 sets of 8, hold each for 5 seconds',
          often: 'Most sessions',
          feel: 'Effort in the top of the foot and under the arch',
          stop: 'Pain at the big toe joint',
          how: 'Keep the four small toes on the floor and lift only the big toe. Then try the reverse: big toe down, small toes up. It is hard at first. A small movement is enough.',
          media: 'big_toe_lift',
          caption: 'Big toe lift: only the big toe comes up',
          alt: 'A bare foot with the big toe lifted and the other toes flat on the floor',
          evidence: { level: 'early', why: 'An MRI study shows it activates the small foot muscles (Gooding 2016). Used in foot programs but not tested alone.' },
        },
        {
          name: 'Towel scrunch',
          dose: '3 sets of 8, hold each for 5 seconds',
          often: 'Most sessions',
          feel: 'Work under the toes and the arch',
          stop: 'Cramping that does not ease',
          how: 'Sit with a towel under your foot. Curl your toes to pull the towel toward you, hold, then let go and flatten it. This trains the long toe muscles as well as the small ones.',
          media: 'towel_scrunch',
          caption: 'Towel scrunch: curl the toes to gather the towel',
          alt: 'A bare foot curling its toes to pull a towel along the floor',
          evidence: { level: 'early', why: 'Used in most of the trials in the 2023 review, usually together with the short foot exercise. Not tested alone for pain or injury.' },
        },
        {
          name: 'Two-foot heel raise',
          dose: '3 sets of 10',
          often: 'Most sessions',
          feel: 'Work in the calves and the balls of the feet',
          stop: 'Pain at the heel or Achilles at 6/10',
          how: 'Hold a wall. Rise onto the balls of both feet over about 3 seconds, then lower over 3 seconds. Try to keep your weight over the big toe side, not rolling out. More on the [calf raises](/exercises/calf-raises/) page.',
          media: 'heel_raise_double',
          caption: 'Two-foot heel raise: slow up, slow down',
          alt: 'A figure holding a wall and rising onto the balls of both feet',
          evidence: { level: 'moderate', why: 'Heel raises have trial support for plantar fasciitis (Rathleff 2015). Here they train the calf, the main extrinsic foot muscle.' },
        },
      ],
      cites: [CITE.deSouzaIFM, CITE.gooding, CITE.rathleff],
    },
    {
      h2: 'How do you progress from seated to standing to single leg?',
      paragraphs: [
        'Progress foot strengthening exercises by putting more body weight through the foot, one step at a time. Seated work teaches the movement. Standing on both feet adds half your body weight. Standing on one foot adds all of it, plus balance. Move up only when the current step feels easy and controlled.',
        'Walkito uses the same three steps for the short foot exercise: seated, then standing on both feet, then on one leg. When the arch is your plan\'s focus, the next weekly plan moves you up one step if you rated your last two sessions with that exercise as easy and your morning pain has not gone up. A session rated hard, or morning pain up by 2 points, moves you back a step. The two later steps are shown below.',
      ],
      bullets: [
        '**Step 1, seated.** Short foot, toe spread, big toe lift and towel scrunch, all sitting down.',
        '**Step 2, standing on both feet.** The short foot hold while standing, and two-foot heel raises.',
        '**Step 3, one leg.** The short foot hold on one leg, then single-leg balance with the arch held up.',
        '**Later.** Single-leg heel raises and, for runners, small hops. These are bigger loads. Add them only when step 3 is easy.',
      ],
      exercises: [
        {
          name: 'Short foot, standing on both feet',
          dose: '3 sets of 8, hold each for 5 seconds',
          often: 'Once the seated version is easy',
          feel: 'The arch lifting under your body weight',
          stop: 'Pain at 6/10, or the toes keep gripping',
          how: 'Stand with your weight even on both feet. Lift the arches the same way as seated, toes relaxed, knees soft. Hold, then relax.',
          media: 'short_foot_double',
          caption: 'Short foot, standing: lift both arches without curling the toes',
          alt: 'A standing figure lifting the arches of both feet',
          evidence: { level: 'moderate', why: 'The sitting-to-standing progression was used in most trials in the 2023 review. Not tested alone for pain or injury.' },
        },
        {
          name: 'Short foot, single leg',
          dose: '3 sets of 10, hold each for 5 seconds',
          often: 'Once the two-foot version is easy',
          feel: 'The whole foot and ankle working to stay steady',
          stop: 'Pain at 6/10, or you cannot keep the arch up',
          how: 'Stand on one foot near a wall. Lift the arch and hold it while you balance. Touch the wall if you need to.',
          media: 'short_foot_single',
          caption: 'Short foot, single leg: hold the arch while balancing',
          alt: 'A figure standing on one foot with the arch lifted, one hand near a wall',
          evidence: { level: 'early', why: 'Used as the last step in foot core programs. Little research on this exact variant.' },
        },
        {
          name: 'Single-leg balance',
          dose: '3 holds of 20 seconds, each leg',
          often: 'Balance days',
          feel: 'Small, constant corrections in the foot',
          stop: 'Pain at 6/10, or dizziness',
          how: 'Stand on one foot and look at one spot ahead of you. Let the foot make small wobbles. That is the work. Stand near a wall or counter. More on the [single-leg balance](/exercises/single-leg-balance/) page.',
          media: 'single_leg_hold',
          caption: 'Single-leg balance: let the foot make the corrections',
          alt: 'A figure balancing on one leg beside a wall',
          evidence: { level: 'moderate', why: 'Balance training lowered ankle sprain rates in a meta-analysis (Bellows 2018). For foot strength itself it was not tested alone.' },
        },
      ],
      cites: [CITE.deSouzaIFM, CITE.bellows],
    },
    {
      h2: 'Do foot strengthening exercises prevent running injuries?',
      keyFact: 'In a 2020 trial of 118 runners, those without foot core training were 2.42 times more likely to be injured over 12 months (Taddei and colleagues).',
      paragraphs: [
        'Foot strengthening exercises **lowered running injuries in one good trial, but only one.** In 2020, Taddei and colleagues randomly split 118 recreational long-distance runners into a foot core group (57 runners) and a control group (61 runners). The foot core group did a supervised course of about two months on the foot and ankle muscles, then kept training with remote supervision.',
        'Over 12 months, the control group was 2.42 times more likely to get a running injury. The authors saw the effect appear after about four to eight months of training.',
        'An earlier, smaller trial from the same team, with 28 runners, found that about two months of foot training increased the size of every foot muscle they measured, compared with the control group. Runners also pushed off the ground with more force.',
        'Both trials come from one research group in Brazil, in recreational runners who were not injured at the start. We do not know yet whether the program helps beginners or people who already have pain. For runners with heel pain now, start with [heel pain in runners](/heel-pain-runners/).',
      ],
      sourceNote: 'Taddei 2020 (Am J Sports Med): control group 2.42 times more likely to be injured (95% CI 1.98 to 3.62), p = 0.035, single-blind RCT, 12-month follow-up. Taddei 2020 (Phys Ther Sport): proof-of-concept single-blind RCT, 28 runners, muscle volume by MRI.',
      cites: [CITE.taddeiRRI, CITE.taddeiMuscle],
    },
    {
      h2: 'How long does it take to strengthen your feet?',
      keyFact: 'In a 2019 trial of 57 runners, foot muscles grew and got stronger over about two months, with some muscles bigger after one month (Ridge and colleagues).',
      paragraphs: [
        'Foot muscles got measurably stronger in **about two months of regular training** in the trials. In 2019, Ridge and colleagues randomly assigned 57 runners to:',
        {
          list: [
            'Foot strengthening exercises.',
            'Walking in minimalist shoes.',
            'No change.',
          ],
        },
        'The exercise group did progressive resistance exercises at least five times a week. After about two months, every foot muscle they measured was bigger and stronger in both active groups, with no change in the control group. Some muscles were already bigger at the one-month check.',
        'Arch shape changes more slowly, and by less. A 2023 review of four trials found that intrinsic foot strengthening did not change how much the arch moves after one month, but did after two months, with low-quality evidence.',
        'In a small study by Mulligan and Cook with 21 people and no control group, navicular drop (how far the inner arch sinks when you stand) fell by an average of 1.8 mm after one month of short foot training. That is a real but small change.',
      ],
      cites: [CITE.ridgeMinimalist, CITE.deSouzaIFM, CITE.mulliganCook],
    },
    {
      h2: 'Do barefoot or minimalist shoes strengthen your feet?',
      paragraphs: [
        'Walking in minimalist shoes strengthened foot muscles about as well as foot exercises in one trial. In the same 2019 study by Ridge and colleagues, runners who gradually increased the number of daily steps they took in minimalist shoes gained similar muscle size and strength to the exercise group over about two months. The authors suggested that changing shoes might be easier to keep up than doing exercises.',
        'Switching too fast has its own risks, especially for running. The [barefoot shoes](/barefoot-shoes/) guide covers how to change over and who should be careful.',
      ],
      cites: [CITE.ridgeMinimalist],
    },
    {
      h2: 'Can older adults strengthen their feet?',
      keyFact: 'In a 2016 trial of adults aged 60 to 90, supervised progressive foot training raised toe strength by up to 36 percent, while a home program did not change it (Mickle and colleagues).',
      paragraphs: [
        'Older adults can strengthen their feet, and in one trial the supervised version with gradually heavier loads was the one that worked. In a 2016 trial, Mickle and colleagues assigned 85 people aged 60 to 90 to either a supervised class with gradually heavier foot exercises or a home exercise program, plus a separate group of 32 controls.',
        'After three months, the supervised group raised their toe strength by up to 36 percent and stood longer on one leg. The home group and the control group showed no change in toe strength.',
        'A 2022 review of nine studies in adults aged 65 and over found that intrinsic foot strengthening helped strength, balance and mobility, and possibly lowered fall risk, with little effect on walking pattern. The authors rated the quality of the evidence fair.',
        'So move up to harder versions as they get easy, and **keep a wall or counter close for balance work.** If falls are a concern, a physical therapist can set up a safe program.',
      ],
      cites: [CITE.mickleToe, CITE.futrellOlder],
    },
    {
      h2: 'Does foot strengthening help plantar fasciitis or flat feet?',
      paragraphs: [
        'For plantar fasciitis, foot strengthening on top of stretching did not do better than stretching alone in a trial that compared them. In 2016, Kamonseki and colleagues split 83 people with plantar fasciitis into three groups for two months:',
        {
          list: [
            'Foot strengthening plus stretching.',
            'Foot and hip strengthening plus stretching.',
            'Stretching alone.',
          ],
        },
        'All three groups improved in pain and function, and no group did better than the others. For heel pain, see [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
        'For flexible flat feet, a 2023 trial of 52 people found that a mixed program including the short foot exercise changed arch shape more than in the control group. The details, and the limits of short foot training alone, are on the [flat feet exercises](/flat-feet-exercises/) page. If your pain is mainly in the toes, the [toe strengthening exercises](/toe-strengthening-exercises/) guide goes deeper, and for the ankle there is [ankle strengthening exercises](/ankle-strengthening-exercises/).',
      ],
      cites: [CITE.kamonseki, CITE.brijwasi],
    },
    {
      h2: 'How strong is the evidence for foot strengthening?',
      paragraphs: [
        'The evidence that foot exercises make foot muscles stronger points the same way, but the studies are small. A 2025 review by Peters-Dickie and colleagues included 28 randomized trials with 1,399 people. It supported foot exercises for increasing foot strength, but rated the certainty low to very low, mostly because there were few studies per question and many had a high risk of bias. Results on muscle size were mixed.',
        'The evidence that stronger feet mean fewer injuries is thinner still and rests mainly on the single runner trial above. **Foot strengthening is low risk and cheap, and it does build strength.** Whether it prevents your next injury is still open. More on how these guides grade research is on the [science](/science/) page.',
      ],
      sourceNote: 'Peters-Dickie 2025: meta-analyses showed minimalist shoes increased strength of toes 2 to 5, and foot exercises reduced arch motion during running; certainty low to very low.',
      cites: [CITE.petersDickie],
    },
  ],
  faq: [
    {
      q: 'How often should you do foot strengthening exercises?',
      cites: [CITE.ridgeMinimalist],
      a: 'Most programs in the research ran several times a week. In a 2019 trial, runners did progressive foot exercises at least five times a week and gained muscle size and strength over about two months. A short session most days is a reasonable start. Muscles need some recovery, so if your feet feel sore the next morning, take a lighter day.',
    },
    {
      q: 'Are towel curls or short foot exercises better?',
      cites: [CITE.jung, CITE.lynn],
      a: 'The short foot exercise targets the arch muscles more directly. In a lab study of 20 people, the main inner arch muscle was clearly more active during the short foot exercise than during towel curls (Jung 2011). In a small trial of 24 people, a month of short foot training improved one balance test more than towel curls (Lynn 2012). Towel curls are still a useful, easy first step.',
    },
    {
      q: 'Should foot strengthening exercises hurt?',
      a: 'No. You should feel effort, and maybe a mild cramp under the arch when you start, which eases when you relax. Sharp pain or pain at 6/10 or more means stop for the day. If the same spot hurts every time, or pain keeps you up at night, see a clinician before you keep going.',
    },
    {
      q: 'Is walking barefoot enough to strengthen your feet?',
      cites: [CITE.ridgeMinimalist],
      a: 'It may help. In a 2019 trial, runners who slowly built up daily steps in minimalist shoes gained foot strength similar to an exercise group over about two months. That was a gradual change, not a sudden switch. Going barefoot too fast can overload the foot, so build up slowly and keep the exercises if you like them.',
    },
    {
      q: 'Can foot strengthening raise a flat arch?',
      cites: [CITE.mulliganCook, CITE.cheng],
      a: 'Only a little, and only in flexible flat feet. In a small study of 21 people without foot pain and with no control group, the arch sank 1.8 mm less after a month of short foot training. A 2024 review found short foot programs changed arch measures only when they ran longer. Expect a stronger, steadier foot, not a new arch shape.',
    },
    {
      q: 'Do you need equipment for foot strengthening?',
      a: 'No. The exercises on this page need a floor, a chair, a towel and a wall to hold for balance. Do them barefoot so you can see and feel the foot move. Later, you can add load with single-leg heel raises or a backpack, but body weight is enough for a long time.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you have numbness, tingling or burning in your feet, or you have diabetes with any skin breaks or sores',
      'one foot is getting weaker, or the front of the foot drags or slaps when you walk',
      'one arch is flattening quickly or the inside of the ankle is swollen and sore',
      'pain sits at one spot on a bone and gets worse with each walk or run, which can be a stress fracture',
      'the foot is red, hot or swollen, or you have a fever',
      'you cannot put weight on the foot',
      'pain keeps getting worse despite rest and easier exercise',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito builds a weekly plan around one goal and includes the foot exercises on this page: the short foot exercise from seated to single leg, toe spreads, big toe lifts, towel scrunches, heel raises and balance work. It starts the arch exercises at 3 sets of 8 with 5-second holds and balance at 3 holds of 20 seconds, and at each new weekly plan moves your focus exercise up a step when you rated your last two sessions with it as easy and your morning pain has not risen.',
    more: [
      'You pick sessions of 3, 5 or 10 minutes. A short test every 14 days at first checks calf endurance, arch hold and balance, so you can see what is changing. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Foot strengthening',
  campaign: 'guide-foot-strength',
};
