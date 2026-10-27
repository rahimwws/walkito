import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * radfordStretch | Radford JA, Burns J, Buchbinder R, Landorf KB, Cook C. Does stretching increase ankle dorsiflexion range of motion? A systematic review. British Journal of Sports Medicine. 2006;40(10):870–875. | doi: 10.1136/bjsm.2006.029348 | pmid: 16926259 | systematic review with meta-analysis of 5 RCTs
 * afonsoStrength | Afonso J, Ramirez-Campillo R, Moscão J, et al. Strength training versus stretching for improving range of motion: a systematic review and meta-analysis. Healthcare (Basel). 2021;9(4):427. | doi: 10.3390/healthcare9040427 | pmid: 33917036 | systematic review with meta-analysis of 11 RCTs (n=452)
 * csapoHeels | Csapo R, Maganaris CN, Seynnes OR, Narici MV. On muscle, tendon and high heels. Journal of Experimental Biology. 2010;213(15):2582–2588. | doi: 10.1242/jeb.044271 | pmid: 20639419 | cross-sectional comparison (11 high-heel wearers, 9 controls)
 * schwellnusCramp | Schwellnus MP, Drew N, Collins M. Increased running speed and previous cramps rather than dehydration or serum sodium changes predict exercise-associated muscle cramping: a prospective cohort study in 210 Ironman triathletes. British Journal of Sports Medicine. 2011;45(8):650–656. | doi: 10.1136/bjsm.2010.078535 | pmid: 21148567 | prospective cohort (n=210)
 * hallegraeffCramps | Hallegraeff JM, van der Schans CP, de Ruiter R, de Greef MH. Stretching before sleep reduces the frequency and severity of nocturnal leg cramps in older adults: a randomised trial. Journal of Physiotherapy. 2012;58(1):17–22. | doi: 10.1016/S1836-9553(12)70068-1 | pmid: 22341378 | RCT (n=80)
 * coppinCramps | Coppin RJ, Wicke DM, Little PS. Managing nocturnal leg cramps: calf-stretching exercises and cessation of quinine treatment: a factorial randomised controlled trial. British Journal of General Practice. 2005;55(512):186–191. | doi: (none) | pmid: 15808033 | factorial RCT (n=191)
 * popeStretching | Pope RP, Herbert RD, Kirwan JD, Graham BJ. A randomized trial of preexercise stretching for prevention of lower-limb injury. Medicine & Science in Sports & Exercise. 2000;32(2):271–277. | doi: 10.1097/00005768-200002000-00004 | pmid: 10694106 | RCT (n=1538)
 * herbertSoreness | Herbert RD, de Noronha M, Kamper SJ. Stretching to prevent or reduce muscle soreness after exercise. Cochrane Database of Systematic Reviews. 2011;(7):CD004577. | doi: 10.1002/14651858.CD004577.pub3 | pmid: 21735398 | Cochrane systematic review (12 studies)
 *
 * Reused: CITE.riddle, CITE.patelGastrocnemius, CITE.guideline
 */

export const TIGHT_CALVES_EN: Guide = {
  lang: 'en',
  page: 'tightCalves',
  mainSource: CITE.radfordStretch,
  published: '2026-10-09',
  updated: '2026-10-26',
  title: 'Why Are My Calves So Tight? Causes and Stretches',
  description:
    'Why your calves feel tight: more load, long days standing, heels or cramps. Which calf muscle is tight, and the stretches and calf raises that help.',
  h1: 'Why are my calves so tight?',
  lede:
    'Calves usually feel tight because they are doing more than they are used to: a jump in running or walking, long days on your feet, or heeled shoes. Stretch both calf muscles (knee straight and knee bent) and add calf raises. Stretching helps a little: in a review of five trials, ankle bend grew by about 2 to 3 degrees.',
  intro: [
    'Most of the time tight calves are not a sign of damage. One exception is a single swollen, warm or red calf, which can be a blood clot and needs same-day care. Other warning signs are listed below. For the step-by-step stretches, see [calf stretch](/exercises/calf-stretch/) and [soleus stretch](/exercises/soleus-stretch/).',
  ],
  takeaways: [
    'In a 2006 review of five randomised trials, static calf stretching increased ankle bend by only about 2 to 3 degrees, and the authors were not sure the change matters to people (Radford and colleagues).',
    'In a review of 11 trials with 452 people, strength training improved range of motion about as much as stretching did (Afonso and colleagues, 2021).',
    'In a 2003 study of 50 people with plantar fasciitis and 100 without, an ankle that could not bend past 0 degrees came with 23.3 times the odds of plantar fasciitis, compared with an ankle that bent past 10 degrees (Riddle and colleagues).',
    'In 210 Ironman triathletes, the ones who cramped did not lose more body weight and had no different blood salt levels. Faster racing and past cramps predicted cramping (Schwellnus and colleagues, 2011).',
    'Calf pain with swelling, warmth or redness in one leg can be a blood clot and needs same-day care.',
  ],
  toc: true,
  sections: [
    {
      h2: 'What causes tight calves?',
      paragraphs: [
        'Tight calves usually come from what your calves did recently or what they do day to day. The common causes, with how strong the evidence is for each:',
      ],
      bullets: [
        '**More load than usual.** A new running plan, more walking, hills, a long day standing, or a new sport. The calf feels tight when it is working near its limit. This is the most common cause and the easiest to adjust.',
        '**Soreness after exercise.** Hard or new exercise causes delayed-onset muscle soreness, the stiff, achy feeling a day or two later. It eases on its own over a few days.',
        '**Heeled shoes.** In a small study, 11 women who regularly wore high heels had calf muscle fibres about 11 percent shorter than 9 women in a control group (49.6 vs 56.0 mm), and stiffer Achilles tendons (Csapo and colleagues, 2010). One small study at one point in time shows a link, not proof that heels caused it.',
        '**Cramps.** A sudden, hard, painful tightening you cannot let go of. The calf can feel sore for a day after one.',
        '**Long sitting.** Often blamed, because the ankle rests pointed down, but we found no study showing that sitting makes calves measurably shorter.',
        '**Dehydration or low minerals.** Often blamed, weakly supported. See the cramp section below.',
      ],
      cites: [CITE.csapoHeels, CITE.herbertSoreness],
    },
    {
      h2: 'Which stretches and exercises help tight calves?',
      paragraphs: [
        'These four moves cover both calf muscles, the ankle bend and calf strength. A stretch should feel like a strong pull, never a sharp pain. If any move takes your pain to **6/10 or more**, stop for the day.',
      ],
      exercises: [
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'moderate', why: 'Grade A in the 2023 heel pain guideline for plantar heel pain. A review of five trials found a small gain in ankle bend.' },
          dose: 'Walkito starts at 3 holds of 30 seconds, each leg',
          how: 'Hands on a wall, one foot back, back knee straight, heel down, toes pointing forward. Lean your hips toward the wall until you feel a pull high in the calf. Full steps on [calf stretch](/exercises/calf-stretch/).',
          often: 'Most days',
          feel: 'A pull in the upper calf, near the back of the knee',
          stop: 'Pain reaches 6/10, or you feel it in the knee',
          media: 'calf_stretch_straight',
          caption: 'Straight-knee calf stretch: back heel down, hips forward',
          alt: 'A person leaning on a wall with the back leg straight and the heel on the floor',
        },
        {
          name: 'Soleus stretch (bent knee)',
          evidence: { level: 'moderate', why: 'Same guideline support. Bending the knee moves the stretch to the deeper soleus, which the straight-knee stretch misses.' },
          dose: 'Walkito starts at 3 holds of 30 seconds, each leg',
          how: 'Same position, then bend the back knee and sink down a little, keeping the heel on the floor. The pull should move low, toward the heel. Full steps on [soleus stretch](/exercises/soleus-stretch/).',
          often: 'Most days',
          feel: 'A pull in the lower calf, above the heel',
          stop: 'Pain reaches 6/10, or sharp pain in the Achilles',
          media: 'calf_stretch_bent',
          caption: 'Bent-knee stretch: sink the back knee, heel stays down',
          alt: 'A person in a split stance at a wall with the back knee bent and the heel down',
        },
        {
          name: 'Ankle rocks',
          evidence: { level: 'early', why: 'Targets ankle bend directly. Not tested on its own in a trial for tight calves.' },
          dose: 'Walkito starts at 2 sets of 15, each leg',
          how: 'Face a wall with one foot in front. Rock the knee forward over your toes and back, slowly, keeping the heel flat on the floor. More detail on [ankle rocks](/exercises/ankle-rocks/) and [ankle mobility exercises](/ankle-mobility-exercises/).',
          often: 'Most days, and before a walk or run',
          feel: 'A stretch in the lower calf and an easy bend at the front of the ankle',
          stop: 'Pinching pain at the front of the ankle, or pain reaches 6/10',
          media: 'ankle_rocks',
          caption: 'Ankle rocks: knee travels over the toes, heel stays flat',
          alt: 'A person at a wall rocking one knee forward over the toes with the heel down',
        },
        {
          name: 'Calf raises (two feet)',
          evidence: { level: 'moderate', why: 'Strength training improved range about as much as stretching in a review of 11 trials. Not tested specifically for tight calves.' },
          dose: 'Walkito starts at 3 sets of 10',
          how: 'Stand with your feet hip-width apart, fingertips on a wall. Rise onto the balls of your feet for about 2 seconds, then lower for about 3 seconds all the way down. More on [calf raises](/exercises/calf-raises/).',
          often: 'Three to four times a week',
          feel: 'Calf effort and a mild burn by the last few reps',
          stop: 'Pain reaches 6/10, or pain that is worse the next morning',
          media: 'heel_raise_double',
          caption: 'Two-foot calf raises: up slowly, down slower, full range',
          alt: 'A person rising onto the balls of both feet with fingertips on a wall',
        },
      ],
      cites: [CITE.guideline, CITE.radfordStretch, CITE.afonsoStrength],
    },
    {
      h2: 'Which calf muscle is tight?',
      figure: { id: 'calf', caption: 'The two calf muscles: the gastrocnemius on top and the soleus underneath, both ending in the Achilles tendon.', alt: 'The back of a lower leg showing the larger gastrocnemius muscle near the knee, the flatter soleus muscle below it, and both joining the Achilles tendon at the heel.' },
      paragraphs: [
        'Your calf is two muscles. The **gastrocnemius** is the big one you can see, and it crosses the knee. The **soleus** is the flatter, deeper muscle under it, and it does not cross the knee. Both join into the Achilles tendon, which pulls on your heel bone.',
        'Self-check: do a wall stretch with the back knee straight, then bend that knee. A pull strongest with the knee straight, high in the calf, points to the gastrocnemius. A pull mostly with the knee bent, low near the heel, points to the soleus. Many people feel both.',
        'To measure how far the ankle bends up (dorsiflexion), try the knee-to-wall test from [ankle rocks](/exercises/ankle-rocks/) and compare sides. A big difference between legs tells you more than any single number.',
      ],
    },
    {
      h2: 'Does stretching really loosen tight calves?',
      keyFact: 'A 2006 review of five randomised trials found calf stretching increased ankle bend by about 2 to 3 degrees, and the authors were unsure whether that change is clinically important (Radford and colleagues).',
      paragraphs: [
        'Stretching does loosen tight calves, but **by less than most people expect.** In 2006, Radford and colleagues pooled five randomised trials that compared static calf stretching (holding a stretch still) with no stretching. Ankle bend went up by about 2 degrees after a total of 15 minutes of stretching or less, about 3 degrees after 15 to 30 minutes, and about 2.5 degrees after more than 30 minutes. Those minutes are total stretch time over the trial, not one long hold.',
        'The authors called the gain small and unclear in how much it matters. Part of the looseness you feel may be your tolerance to the stretch going up, not the muscle getting longer.',
        'In a trial of 1,538 army recruits over three months of training, a 20-second stretch of six leg muscle groups in every warm-up did not meaningfully cut injuries (Pope and colleagues, 2000). A Cochrane review of 12 studies found stretching before or after exercise reduced next-day soreness by only about half a point to 1 point on a 100-point scale (Herbert and colleagues, 2011).',
      ],
      sourceNote:
        'Radford 2006: weighted mean difference 2.07 degrees (95% CI 0.86 to 3.27) for 15 minutes or less of total stretching, 3.03 degrees (0.31 to 5.75) for more than 15 to 30 minutes, 2.49 degrees (0.16 to 4.82) for more than 30 minutes. Pope 2000: all-injury hazard ratio 0.95 (0.77 to 1.18). Herbert 2011: post-exercise stretching mean difference -1.04 points at one day (95% CI -6.88 to 4.79).',
      cites: [CITE.radfordStretch, CITE.popeStretching, CITE.herbertSoreness],
    },
    {
      h2: 'Should you strengthen tight calves instead of stretching them?',
      keyFact: 'A 2021 review of 11 randomised trials with 452 people found no significant difference in range of motion gains between strength training and stretching (Afonso and colleagues).',
      paragraphs: [
        '**You do not have to pick one.** In 2021, Afonso and colleagues pooled 11 randomised trials with 452 people that compared strength training with stretching. Range of motion improved about the same with both. The trials differed a lot and covered many joints, not just the ankle, so read this as a strong hint, not a final answer.',
        'A calf that tires early also feels tight sooner, so if your calves tighten whenever you walk or run more than usual, building their capacity with full-range calf raises is often the more useful long-term step. Check your calf endurance with the [calf raise test](/calf-raise-test/).',
      ],
      sourceNote:
        'Afonso 2021: pooled effect size -0.22 (95% CI -0.55 to 0.12), no significant difference between strength training and stretching on range of motion.',
      cites: [CITE.afonsoStrength],
    },
    {
      h2: 'Are tight calves caused by dehydration or cramps?',
      paragraphs: [
        'Dehydration is often blamed, but **the evidence we found does not back it well.** In 2011, Schwellnus and colleagues followed 210 Ironman triathletes. The 43 who cramped had no different changes in body weight or blood salt levels from those who did not. Racing faster and having cramped before predicted cramping. That points to tired, hard-working muscles, not low water or salt, though it was one group of endurance athletes.',
        'For night cramps the research disagrees with itself:',
        {
          list: [
            'In a 2012 trial of 80 adults over 55, stretching the calves and hamstrings every night before bed for about a month and a half cut cramps by 1.2 per night more than doing nothing, and made them less painful (Hallegraeff and colleagues).',
            'An earlier 2005 trial of 191 people already on quinine found stretching advice made no difference to cramps at three months (Coppin and colleagues).',
          ],
        },
        'A gentle calf stretch before bed is low-risk to try. If cramps are frequent, new, or come with other symptoms, talk to a doctor: some medicines and medical conditions can cause them.',
      ],
      sourceNote:
        'Hallegraeff 2012: mean difference 1.2 cramps per night (95% CI 0.6 to 1.8); severity 1.3 cm on a 10 cm scale (0.9 to 1.7). Coppin 2005: cramps in the previous four weeks, exercise effect 1.95 (95% CI -3.01 to 6.90), not significant.',
      cites: [CITE.schwellnusCramp, CITE.hallegraeffCramps, CITE.coppinCramps],
    },
    {
      h2: 'Do tight calves cause foot and heel pain?',
      keyFact: 'In a case-control study of 50 people with plantar fasciitis and 100 without, an ankle that could not bend past 0 degrees came with 23.3 times the odds of plantar fasciitis (Riddle and colleagues, 2003).',
      paragraphs: [
        'Tight calves are linked with [plantar fasciitis](/plantar-fasciitis/), the most common cause of heel pain under the foot. When the ankle cannot bend far enough, more pull goes through the Achilles tendon, the heel and the plantar fascia (the thick band under the arch).',
        'In a 2003 case-control study, Riddle and colleagues compared 50 people with plantar fasciitis to 100 matched people without it. An ankle that could not bend past 0 degrees came with 23.3 times the odds of plantar fasciitis compared with one that bent past 10 degrees, the strongest risk factor they measured, ahead of [body weight](/weight-and-plantar-fasciitis/) and standing at work. In a later study of 254 people with plantar fasciitis, 83 percent had limited ankle bend, and 57 percent had a tight gastrocnemius alone (Patel and DiGiovanni, 2011).',
        '**Both studies show a link, not cause**, and the wide range around 23.3 means the true number could be much smaller. Still, it is one reason the 2023 heel pain guideline gives calf stretching a grade A for plantar heel pain. If heel pain is your main problem, start at [plantar fasciitis exercises](/plantar-fasciitis-exercises/). For the Achilles and shins, see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) and [shin splints exercises](/shin-splints-exercises/).',
      ],
      sourceNote:
        'Riddle 2003: odds ratio 23.3 (95% CI 4.3 to 124.4) for dorsiflexion of 0 degrees or less vs more than 10 degrees, adjusted. Patel 2011: 211 of 254 had limited dorsiflexion, 145 of 254 isolated gastrocnemius contracture, 66 of 254 gastrocnemius-soleus contracture.',
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: 'How do you stop calves getting tight from running or standing?',
      paragraphs: [
        'These calves **usually need their load changed, not just more stretching.** Runners: raise weekly distance gradually, add hills slowly, and give new lower-drop shoes time before long runs (see [heel pain in runners](/heel-pain-runners/)). Standing all day: shift your weight, take short walking breaks, and do a few calf raises and a stretch at your break (see [feet hurt from standing all day](/feet-hurt-standing-all-day/)). Heels most days: mix in flat days and stretch both calf muscles in the evening.',
      ],
    },
  ],
  faq: [
    {
      q: 'Why are my calves so tight all the time?',
      cites: [CITE.csapoHeels],
      a: 'Calves that always feel tight usually reflect daily load: lots of standing or walking, a recent jump in running, or heeled shoes. In one small study of 20 women, those who regularly wore high heels had calf muscle fibres about 11 percent shorter than a control group. A sudden change in one leg, or tightness with swelling, needs a doctor.',
    },
    {
      q: 'How do you loosen tight calves fast?',
      cites: [CITE.radfordStretch],
      a: 'The quickest way to loosen tight calves is gentle movement: a short walk, ankle rocks and a 30-second calf stretch with the knee straight and then bent. That feels looser within minutes. Lasting change is slower and smaller. In a review of five trials, regular calf stretching added only about 2 to 3 degrees of ankle bend.',
    },
    {
      q: 'Why do my calves stay tight even when I stretch?',
      cites: [CITE.afonsoStrength],
      a: 'Calves often stay tight because only the straight-knee stretch is used, which misses the deeper soleus muscle, or because the calf is tired, not short. Add a bent-knee stretch and calf raises. In a review of 11 trials with 452 people, strength training improved range of motion about as much as stretching did.',
    },
    {
      q: 'Can tight calves cause plantar fasciitis?',
      cites: [CITE.riddle, CITE.guideline],
      a: 'Tight calves are linked with plantar fasciitis, though a link is not proof of cause. In a study of 50 people with plantar fasciitis and 100 without, an ankle that could not bend past 0 degrees came with 23.3 times the odds. The 2023 heel pain guideline gives calf stretching its top grade for plantar heel pain.',
    },
    {
      q: 'Can dehydration cause tight calves?',
      cites: [CITE.schwellnusCramp],
      a: 'Dehydration is a weak explanation for tight calves. In a study of 210 Ironman triathletes, those who cramped had no different changes in body weight or blood salt levels from those who did not. Faster racing and past cramps predicted cramping. Drink enough for general reasons, but look at how hard your calves have been working first.',
    },
    {
      q: 'When is a tight calf serious?',
      a: 'A tight calf is serious when it comes with swelling, warmth, redness or tenderness in one leg, especially after a flight, surgery or time in bed. That can be a blood clot and needs same-day care. A sudden pop or kick-like pain may be a tear. Calf pain that starts with walking and eases with rest needs a doctor too.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'one calf is swollen, warm, red or tender, especially after a long flight, surgery, bed rest or during pregnancy. This can be a deep vein thrombosis (a blood clot in a deep leg vein) and needs urgent, same-day care',
      'you also have chest pain or sudden shortness of breath: call emergency services',
      'you felt a sudden pop, or a feeling like being kicked or hit in the back of the leg, and now cannot rise onto your toes. This can be a calf muscle tear or an Achilles tendon rupture',
      'your calf cramps or aches every time you walk a certain distance and eases within minutes of resting. This can be claudication (poor blood flow to the leg muscles)',
      'you have numbness, tingling, weakness, or your foot slaps the ground when you walk',
      'the tightness or muscle pain started soon after a new medicine',
      'the tightness is getting worse over months despite stretching and strength work',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: '[Walkito](/program/) is an iPhone and Android app with short exercise sessions for heel, foot and lower leg pain in adults. Calf stretches with the knee straight and bent, ankle rocks and calf raises are all part of it. Walkito starts at 3 holds of 30 seconds for each stretch and 3 sets of 10 for calf raises, and raises the dose as you go.',
    more: [
      'You choose sessions of 3, 5 or 10 minutes. Every two weeks, a short test checks calf endurance, so you can see whether your calves are getting stronger. Walkito is an exercise program. It does not diagnose, and it does not replace a clinician if any of the warning signs above apply.',
    ],
    cta: 'Try the calf routine in Walkito.',
  },
  crumb: 'Tight calves',
  campaign: 'guide-tight-calves',
};
