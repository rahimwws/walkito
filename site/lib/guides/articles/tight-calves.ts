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
  updated: '2026-10-09',
  title: 'Tight Calves: Causes and Stretches That Help',
  description:
    'Tight calves: what causes them, which of your two calf muscles is tight, what stretching really changes, and why calf raises belong in the plan too.',
  h1: 'Tight calves: causes and stretches',
  lede:
    'Tight calves usually mean your calf muscles feel stiff or your ankle does not bend far enough. Common causes: a jump in running or walking, long days on your feet, heeled shoes. Stretching both calf muscles helps a little: in a review of five trials, ankle range grew by about 2 to 3 degrees. Calf raises help too.',
  intro: [
    'You feel it on the first steps out of bed, on a hill, or when you squat and your heels want to lift. The back of the lower leg feels short and hard. This is very common, and most of the time it is not a sign of damage. This page covers why calves get tight, which part of the calf is tight, and what the research says stretching and strength work can and cannot change. For the step-by-step stretches, see [calf stretch](/exercises/calf-stretch/) and [soleus stretch](/exercises/soleus-stretch/).',
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
      h2: 'What does it mean when your calves are tight?',
      figure: { id: 'calf', caption: 'The two calf muscles: the gastrocnemius on top and the soleus underneath, both ending in the Achilles tendon.', alt: 'The back of a lower leg showing the larger gastrocnemius muscle near the knee, the flatter soleus muscle below it, and both joining the Achilles tendon at the heel.' },
      paragraphs: [
        'Tight calves can mean two different things, and it helps to know which one you have. The first is a feeling: the muscle feels stiff, sore or hard, often after a long day or a hard run. The second is something you can measure: your ankle does not bend up far enough. That bend is called dorsiflexion (bringing your shin forward over your foot, or your toes up toward your shin). You can have one without the other.',
        'Your calf is two muscles. The **gastrocnemius** is the big one you can see, and it crosses the knee. The **soleus** is the flatter, deeper muscle under it, and it does not cross the knee. Both join into the Achilles tendon, which pulls on your heel bone.',
        'That difference gives you a simple self-check. Do a wall stretch with the back knee straight, then bend that knee. If the pull is strongest with the knee straight, high in the calf, the gastrocnemius is the tight one. If you mostly feel it with the knee bent, low in the calf near the heel, it is the soleus. Many people feel both.',
        'For a measured check, try the knee-to-wall test from [ankle rocks](/exercises/ankle-rocks/): keep your heel down and see how far from the wall your toes can be while your knee still touches it. Compare sides. A big difference between legs tells you more than any single number.',
      ],
    },
    {
      h2: 'Why are my calves so tight?',
      paragraphs: [
        'Tight calves usually come from what your calves did recently or what they do every day. The most common causes have different levels of evidence behind them.',
      ],
      bullets: [
        '**More load than usual.** A new running plan, more walking, hills, a long day standing, or a new sport. The calf does a lot of work with every step and feels tight when it is near its limit. This is the most common cause and the easiest to adjust.',
        '**Soreness after exercise.** Hard or new exercise causes delayed-onset muscle soreness (the stiff, achy feeling a day or two later). It eases on its own over a few days.',
        '**Heeled shoes.** In a small study, 11 women who regularly wore high heels had calf muscle fibres about 11 percent shorter than 9 women in a control group (49.6 vs 56.0 mm), and stiffer Achilles tendons (Csapo and colleagues, 2010). It was one small study at one point in time, so it shows a link, not proof that heels caused it.',
        '**Long sitting.** Many websites blame sitting. It is a reasonable idea, because the ankle rests pointed down, but we found no study showing that sitting makes calves measurably shorter.',
        '**Cramps.** A cramp is a sudden, hard, painful tightening that you cannot let go of. The calf can feel sore for a day after one.',
        '**Dehydration or low minerals.** Often blamed, weakly supported. See the cramp section below.',
      ],
      cites: [CITE.csapoHeels, CITE.herbertSoreness],
    },
    {
      h2: 'Do tight calves cause foot and heel pain?',
      keyFact: 'In a case-control study of 50 people with plantar fasciitis and 100 without, an ankle that could not bend past 0 degrees came with 23.3 times the odds of plantar fasciitis (Riddle and colleagues, 2003).',
      paragraphs: [
        'Tight calves are linked with plantar fasciitis, the most common cause of heel pain under the foot. When the ankle cannot bend far enough, the foot has to make up for it with each step, and more pull goes through the Achilles tendon, the heel and the plantar fascia (the thick band under the arch).',
        'In a 2003 case-control study, Riddle and colleagues compared 50 people with plantar fasciitis to 100 matched people without it. People whose ankle could not bend past 0 degrees had 23.3 times the odds of plantar fasciitis compared with people who could bend past 10 degrees. Reduced ankle bend was the strongest risk factor they measured, ahead of body weight and standing at work.',
        'In a later study of 254 people with plantar fasciitis, 83 percent had limited ankle bend, and 57 percent of all the patients had a tight gastrocnemius alone (Patel and DiGiovanni, 2011).',
        'Both studies show a link, not that tight calves cause plantar fasciitis. The wide range around the 23.3 figure also means the true number could be much smaller. Still, it is one reason the 2023 heel pain guideline gives calf stretching a grade A, its top grade, for plantar heel pain. If heel pain is your main problem, start at [plantar fasciitis exercises](/plantar-fasciitis-exercises/) or [heel pain in the morning](/heel-pain-in-the-morning/). Tight calves also show up around the Achilles and the shins: see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) and [shin splints exercises](/shin-splints-exercises/).',
      ],
      sourceNote:
        'Riddle 2003: odds ratio 23.3 (95% CI 4.3 to 124.4) for dorsiflexion of 0 degrees or less vs more than 10 degrees, adjusted. Patel 2011: 211 of 254 had limited dorsiflexion, 145 of 254 isolated gastrocnemius contracture, 66 of 254 gastrocnemius-soleus contracture.',
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: 'Does stretching really loosen tight calves?',
      keyFact: 'A 2006 review of five randomised trials found calf stretching increased ankle bend by about 2 to 3 degrees, and the authors were unsure whether that change is clinically important (Radford and colleagues).',
      paragraphs: [
        'Stretching does loosen tight calves, but by less than most people expect. In 2006, Radford and colleagues pooled five randomised trials that compared static calf stretching (holding a stretch still) with no stretching. Ankle bend went up by about 2 degrees after a total of 15 minutes of stretching or less, about 3 degrees after 15 to 30 minutes, and about 2.5 degrees after more than 30 minutes. Those minutes are the total stretch time added up over the trial, not one long hold.',
        'The authors called the gain small and said it was unclear whether it matters to people. Two things follow. First, a short spell of stretching will not transform your ankle. Second, the feeling of looseness after a stretch is real, but part of it may be your tolerance to the stretch going up, not the muscle getting longer.',
        'Stretching also does less than many people hope in other ways. In a trial of 1,538 army recruits over three months of training, a 20-second stretch of six leg muscle groups in every warm-up did not meaningfully cut injuries (Pope and colleagues, 2000). A Cochrane review of 12 studies found stretching before or after exercise reduced next-day soreness by only about half a point to 1 point on a 100-point scale (Herbert and colleagues, 2011).',
        'So stretch because it feels good, because it helps a stiff ankle a little, and because the heel pain guideline supports it for plantar heel pain. Do not expect it to prevent every injury or wipe out soreness.',
      ],
      sourceNote:
        'Radford 2006: weighted mean difference 2.07 degrees (95% CI 0.86 to 3.27) for 15 minutes or less of total stretching, 3.03 degrees (0.31 to 5.75) for more than 15 to 30 minutes, 2.49 degrees (0.16 to 4.82) for more than 30 minutes. Pope 2000: all-injury hazard ratio 0.95 (0.77 to 1.18). Herbert 2011: post-exercise stretching mean difference -1.04 points at one day (95% CI -6.88 to 4.79).',
      cites: [CITE.radfordStretch, CITE.popeStretching, CITE.herbertSoreness],
    },
    {
      h2: 'Should you strengthen tight calves instead of stretching them?',
      keyFact: 'A 2021 review of 11 randomised trials with 452 people found no significant difference in range of motion gains between strength training and stretching (Afonso and colleagues).',
      paragraphs: [
        'Strengthening tight calves is a good idea, and you do not have to pick one or the other. In 2021, Afonso and colleagues pooled 11 randomised trials with 452 people that compared strength training with stretching. Range of motion improved about the same with both. The trials were very different from each other and covered many joints, not just the ankle, so read this as a strong hint, not a final answer.',
        'Strength matters for another reason. A calf that tires early feels tight sooner. Full-range calf raises, where you lower your heels all the way down and rise all the way up, load the muscle through its whole length. If your calves feel tight every time you walk or run more than usual, building their capacity is often the more useful long-term step. You can check your calf endurance with the [calf raise test](/calf-raise-test/).',
        'A sensible mix for most people: stretch both calf muscles, open up the ankle with knee-over-toe rocks, and add calf raises a few times a week. Walkito starts at 2 holds of 30 seconds for each stretch and 3 sets of 10 for two-foot calf raises.',
      ],
      sourceNote:
        'Afonso 2021: pooled effect size -0.22 (95% CI -0.55 to 0.12), no significant difference between strength training and stretching on range of motion.',
      cites: [CITE.afonsoStrength],
    },
    {
      h2: 'Which stretches and exercises help tight calves?',
      paragraphs: [
        'The four moves below cover both calf muscles, the ankle bend and calf strength. Do the stretches and ankle rocks on most days and the calf raises a few times a week. A stretch should feel like a strong pull, never a sharp pain. If any move takes your pain to **6/10 or more**, stop for the day.',
      ],
      exercises: [
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'moderate', why: 'Grade A in the 2023 heel pain guideline for plantar heel pain. A review of five trials found a small gain in ankle bend.' },
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
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
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
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
          dose: 'Walkito starts at 2 rounds of 30 seconds, each leg',
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
      h2: 'Are tight calves caused by dehydration or cramps?',
      paragraphs: [
        'Dehydration is often blamed for tight calves and cramps, but the evidence we found does not back it well. In 2011, Schwellnus and colleagues followed 210 Ironman triathletes. The 43 who cramped had no different changes in body weight or blood salt levels from those who did not. The two things that predicted cramping were racing faster and having cramped before. That points to tired, hard-working muscles, not low water or salt. This was one group of endurance athletes, so it does not settle the question for everyone, but it is stronger than the claims you see on product pages.',
        'Night cramps are a different situation, and the research disagrees with itself. In a 2012 trial of 80 adults over 55, stretching the calves and hamstrings every night before bed for about a month and a half cut cramps by 1.2 per night more than doing nothing, and made them less painful (Hallegraeff and colleagues). An earlier 2005 trial of 191 people already on quinine found stretching advice made no difference to cramps at three months (Coppin and colleagues). A gentle calf stretch before bed is cheap and low-risk, so it is reasonable to try, but it may not work for you.',
        'If cramps are frequent, new, or come with other symptoms, talk to a doctor. Some medicines and some medical conditions can cause them.',
      ],
      sourceNote:
        'Hallegraeff 2012: mean difference 1.2 cramps per night (95% CI 0.6 to 1.8); severity 1.3 cm on a 10 cm scale (0.9 to 1.7). Coppin 2005: cramps in the previous four weeks, exercise effect 1.95 (95% CI -3.01 to 6.90), not significant.',
      cites: [CITE.schwellnusCramp, CITE.hallegraeffCramps, CITE.coppinCramps],
    },
    {
      h2: 'How do you stop calves getting tight from running or standing?',
      paragraphs: [
        'Calves that get tight from running or standing usually need their load changed, not just more stretching. If you run, raise your weekly distance gradually, add hills slowly, and give a new pair of lower-drop shoes time before long runs. The page on [heel pain in runners](/heel-pain-runners/) covers load in more detail.',
        'If you stand all day, shift your weight often, take short walking breaks, and do a few calf raises and a stretch at your break. See [feet hurt from standing all day](/feet-hurt-standing-all-day/).',
        'If you wear heels most days, you do not have to give them up. Mix in flat days and stretch both calf muscles in the evening. Building calf strength over time makes it easier for your calves to handle whatever you ask of them.',
      ],
    },
  ],
  faq: [
    {
      q: 'Why are my calves so tight all the time?',
      cites: [CITE.csapoHeels],
      a: 'Calves that always feel tight usually reflect daily habits or load: lots of standing or walking, a recent jump in running, or heeled shoes. In one small study of 20 women, those who regularly wore high heels had calf muscle fibres about 11 percent shorter than a control group. A sudden change in one leg, or tightness with swelling, needs a doctor.',
    },
    {
      q: 'What is the fastest way to loosen tight calves?',
      cites: [CITE.radfordStretch],
      a: 'The fastest relief is usually gentle movement: a short walk, ankle rocks and a 30-second calf stretch with the knee straight and then bent. That feels looser within minutes. Lasting change is slower and smaller. In a review of five trials, regular calf stretching added only about 2 to 3 degrees of ankle bend, so pair it with calf raises.',
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
      q: 'Does drinking more water help tight calves?',
      cites: [CITE.schwellnusCramp],
      a: 'Drinking more water probably does not loosen tight calves on its own. In a study of 210 Ironman triathletes, those who cramped had no different changes in body weight or blood salt levels from those who did not. Faster racing and past cramps predicted cramping. Stay hydrated for general reasons, but look at training load first.',
    },
    {
      q: 'Does stretching before bed stop calf cramps at night?',
      cites: [CITE.hallegraeffCramps, CITE.coppinCramps],
      a: 'Stretching before bed may reduce night cramps, but the trials disagree. In a trial of 80 adults over 55, nightly calf and hamstring stretches cut cramps by 1.2 per night more than doing nothing. A trial of 191 people already on quinine found no benefit from stretching advice at three months. It is low-risk to try.',
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
    text: 'Walkito is an iPhone app with short exercise sessions for heel, foot and lower leg pain in adults. Calf stretches with the knee straight and bent, ankle rocks and calf raises are all part of it. Walkito starts at 2 holds of 30 seconds for each stretch and 3 sets of 10 for calf raises, and raises the dose as you go.',
    more: [
      'You choose sessions of 3, 5 or 10 minutes. Every two weeks, a short test checks calf endurance, so you can see whether your calves are getting stronger. Walkito is an exercise program. It does not diagnose, and it does not replace a clinician if any of the warning signs above apply.',
    ],
    cta: 'Try the calf routine in Walkito.',
  },
  crumb: 'Tight calves',
  campaign: 'guide-tight-calves',
};
