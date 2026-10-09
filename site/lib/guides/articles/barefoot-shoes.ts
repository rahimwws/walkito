import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * ridgeMinimalist | Ridge ST, Olsen MT, Bruening DA, Jurgensmeier K, Griffin D, Davis IS, Johnson AW. Walking in minimalist shoes is effective for strengthening foot muscles. Medicine & Science in Sports & Exercise. 2019;51(1):104–113. | 10.1249/MSS.0000000000001751 | 30113521 | RCT (same key as sibling drafts)
 * taddeiRRI | Taddei UT, Matias AB, Duarte M, Sacco ICN. Foot core training to prevent running-related injuries: a survival analysis of a single-blind, randomized controlled trial. American Journal of Sports Medicine. 2020;48(14):3610–3619. | 10.1177/0363546520969205 | 33156692 | RCT (same key as sibling drafts)
 * petersDickie | Peters-Dickie JL, Detrembleur C, Guallar-Bouloc M, Rastelli M, Lobet S, Hidalgo B, Deschamps K. The effects of foot core exercises and minimalist footwear on foot muscle sizes, foot strength, and biomechanics: a systematic review and meta-analysis. Clinical Biomechanics. 2025;122:106417. | 10.1016/j.clinbiomech.2024.106417 | 39709752 | systematic review and meta-analysis (same key as sibling drafts)
 * curtisMinimal | Curtis R, Willems C, Paoletti P, D'Août K. Daily activity in minimal footwear increases foot strength. Scientific Reports. 2021;11(1):18648. | 10.1038/s41598-021-98070-0 | 34545114 | non-randomized controlled study (22 intervention, 24 controls)
 * holowkaShod | Holowka NB, Wallace IJ, Lieberman DE. Foot strength and stiffness are related to footwear use in a comparison of minimally- vs. conventionally-shod populations. Scientific Reports. 2018;8(1):3679. | 10.1038/s41598-018-21916-7 | 29487321 | cross-sectional comparison (75 vs 26 men)
 * raoFootwear | Rao UB, Joseph B. The influence of footwear on the prevalence of flat foot: a survey of 2300 children. Journal of Bone and Joint Surgery. British Volume. 1992;74(4):525–527. | 10.1302/0301-620X.74B4.1624509 | 1624509 | cross-sectional survey (n=2300) (same key as sibling draft flat-feet-in-kids.ts)
 * ridgeEdema | Ridge ST, Johnson AW, Mitchell UH, Hunter I, Robinson E, Rich BS, Brown SD. Foot bone marrow edema after a 10-wk transition to minimalist running shoes. Medicine & Science in Sports & Exercise. 2013;45(7):1363–1368. | 10.1249/MSS.0b013e3182874769 | 23439417 | controlled MRI study (19 transition vs 17 controls; PubMed indexes it as an RCT)
 * fullerMinimalist | Fuller JT, Thewlis D, Buckley JD, Brown NA, Hamill J, Tsiros MD. Body mass and weekly training distance influence the pain and injuries experienced by runners using minimalist shoes: a randomized controlled trial. American Journal of Sports Medicine. 2017;45(5):1162–1170. | 10.1177/0363546516682497 | 28129518 | RCT (n=61)
 * ryanMinimalist | Ryan M, Elashi M, Newsham-West R, Taunton J. Examining injury risk and pain perception in runners using minimalist footwear. British Journal of Sports Medicine. 2014;48(16):1257–1262. | 10.1136/bjsports-2012-092061 | 24357642 | RCT (n=103, 99 analysed)
 * xuFrames | Xu J, Hertel J, Kuenze C, Jaffri AH, Saliba SA. The effects of performing therapeutic exercises and wearing minimalist shoes on intrinsic foot muscle function and single-leg balance in adults with plantar fasciopathy. Clinical Biomechanics. 2026;137:106869. | 10.1016/j.clinbiomech.2026.106869 | 42155155 | RCT (34 completed)
 * ribeiroShoes | Ribeiro AP, João SMA. The effect of short and long-term therapeutic treatment with insoles and shoes on pain, function, and plantar load parameters of women with plantar fasciitis: a randomized controlled trial. Medicina (Kaunas). 2022;58(11):1546. | 10.3390/medicina58111546 | 36363506 | small RCT (n=36 women with plantar fasciitis: 12 shoes, 14 shoes + insole, 10 usual advice)
 * macgabhannGrass | MacGabhann S, Kearney D, Perrem N, Francis P. Barefoot running on grass as a potential treatment for plantar fasciitis: a prospective case series. International Journal of Environmental Research and Public Health. 2022;19(23):15466. | 10.3390/ijerph192315466 | 36497540 | prospective case series (20 analysed, no control group)
 * landorfFootwear | Landorf KB, Kaminski MR, Munteanu SE, Zammit GV, Menz HB. Activity and footwear characteristics in people with and without plantar heel pain: a matched cross-sectional observational study. Musculoskeletal Care. 2023;21(1):35–44. | 10.1002/msc.1663 | 35678543 | matched cross-sectional study (50 vs 25)
 * busIWGDF | Bus SA, Sacco ICN, Monteiro-Soares M, et al. Guidelines on the prevention of foot ulcers in persons with diabetes (IWGDF 2023 update). Diabetes/Metabolism Research and Reviews. 2024;40(3):e3651. | 10.1002/dmrr.3651 | 37302121 | international clinical guideline (GRADE)
 */

export const BAREFOOT_EN: Guide = {
  lang: 'en',
  page: 'barefoot',
  mainSource: CITE.ridgeMinimalist,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Are Barefoot Shoes Good for Your Feet? The Evidence',
  description:
    'Are barefoot shoes good for your feet? What trials show on foot strength, transition injuries, plantar fasciitis, flat feet and who should avoid them.',
  h1: 'Are barefoot shoes good for your feet? Strength, risks and foot pain',
  lede:
    'Barefoot shoes, also called minimalist shoes, can make your foot muscles stronger. In trials, adults who walked in them gained foot strength over a few months. But switching too fast raises the risk of bone stress and pain, no trial shows they ease plantar fasciitis on their own, and people with diabetes or numb feet need protective shoes.',
  takeaways: [
    'In a 2019 trial of 57 runners, walking in minimalist shoes for about two months made foot muscles bigger and stronger, as much as doing foot exercises (Ridge and colleagues).',
    'Adults who wore minimal shoes for daily life for six months gained 57.4 percent in toe strength on average, in a controlled study of 22 people who switched (Curtis and colleagues, 2021).',
    'In runners who moved to minimalist running shoes over about two and a half months, 10 of 19 showed new or worse bone stress on MRI, more than runners who kept their usual shoes (Ridge and colleagues, 2013).',
    'No trial has shown that barefoot shoes on their own ease plantar fasciitis pain. In one small trial in people with plantar fasciitis, foot exercises raised toe strength whether or not people also wore minimalist shoes (Xu and colleagues, 2026).',
    'The international diabetic foot guideline advises people with diabetes at risk of foot ulcers not to walk without suitable foot protection (IWGDF, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What are barefoot shoes?',
      paragraphs: [
        'Barefoot shoes are shoes built to get in the way of your foot as little as possible. Most share four features: a thin sole you can feel the ground through, a sole that bends and twists easily, zero drop (the heel sits at the same height as the toes), and a wide toe box so the toes can spread. They have no arch support and little cushioning.',
        'Researchers call them minimalist or minimal shoes. The idea is simple: a shoe that supports and cushions the foot does some of the work the small foot muscles would otherwise do. Take that support away and the muscles work harder. For anyone with foot pain, the question is whether that extra work helps or hurts.',
      ],
    },
    {
      h2: 'Do barefoot shoes make your feet stronger?',
      keyFact: 'Adults who wore minimal shoes for daily life for six months gained 57.4 percent in toe strength on average (Curtis and colleagues, 2021).',
      paragraphs: [
        'Yes, in adults without foot pain, the evidence points that way. In a 2019 randomized trial, Ridge and colleagues split 57 runners into three groups: walk in minimalist shoes, do foot strengthening exercises, or change nothing. The walking group slowly increased how many steps a day they took in the new shoes. After about two months, every foot muscle the researchers measured was bigger and stronger in both active groups, and unchanged in the control group. Walking in the shoes worked about as well as the exercises.',
        'Curtis and colleagues ran a longer study in 2021. Twenty-two adults wore minimal shoes for daily life (not for running) for six months, and 24 kept their usual shoes. Toe strength rose by 57.4 percent on average in the people who switched. The study was not randomized and only took people with no recent leg or foot problems.',
        'A 2025 review of 28 trials by Peters-Dickie and colleagues found that minimalist shoes increased the strength of the smaller toes. It rated the certainty of the evidence as low to very low.',
        'Stronger foot muscles are not the same as less foot pain. None of these studies measured pain or included people with a foot condition. For a full set of exercises that build the same muscles, see [foot strengthening exercises](/foot-strengthening-exercises/).',
      ],
      sourceNote:
        'Curtis 2021: foot strength measured as maximum isometric plantarflexion strength at the toe joints, p < 0.001. Peters-Dickie 2025: 28 trials, 1,399 participants.',
      cites: [CITE.ridgeMinimalist, CITE.curtisMinimal, CITE.petersDickie],
    },
    {
      h2: 'Are barefoot shoes bad for you? The risk is in the switch',
      keyFact: 'After about two and a half months of moving to minimalist running shoes, 10 of 19 runners showed new or worse bone stress on MRI (Ridge and colleagues, 2013).',
      paragraphs: [
        'The shoes are not the main risk. The speed of the switch is. Your foot bones, muscles, calf and Achilles tendon have adapted to your current shoes and need time to take more load.',
        'Ridge and colleagues showed this in 2013. They scanned the feet of 36 experienced runners. Nineteen moved gradually to minimalist running shoes over about two and a half months and 17 kept their normal shoes. Afterwards, 10 of the 19 who switched had new or worse bone marrow edema (fluid inside the bone, an early sign of bone stress) in at least one foot bone, significantly more than the runners who did not switch. The authors advised that runners should transition "very slowly and gradually".',
        'Two randomized trials point the same way. In Ryan and colleagues\' trial of 103 runners training for a 10 km race over three months, the partly minimalist shoe group had 12 injuries against 4 in the normal shoe group, and the full minimalist group reported more shin and calf pain. In Fuller and colleagues\' six-month trial of 61 runners, running pain was higher in minimalist shoes, clearly so above about 35 km a week, and injury risk rose with body weight. The overall injury difference (16 of 31 against 11 of 30) could have been chance.',
        'These were runners. Walking loads the foot far less, which is one reason the strength studies used walking. If you run and have [heel pain](/heel-pain-runners/), a sudden shoe change is one more load change your foot does not need.',
      ],
      sourceNote:
        'Ridge 2013: bone marrow edema graded 0 to 4 on MRI, P = 0.009 for the group difference. Fuller 2017: hazard ratio 1.64 (95% CI 0.63 to 4.27, P = .31); for runners weighing 85.7 kg the hazard ratio was 2.00 (95% CI 1.10 to 3.66). Ryan 2014: 99 runners analysed, 23 injuries.',
      cites: [CITE.ridgeEdema, CITE.ryanMinimalist, CITE.fullerMinimalist],
    },
    {
      h2: 'Are barefoot shoes good for plantar fasciitis?',
      keyFact: 'In a 2026 trial in which 34 adults with plantar fasciitis finished, foot exercises raised toe strength with or without minimalist shoes (Xu and colleagues).',
      figure: {
        id: 'plantar-fascia',
        caption: 'The plantar fascia runs from the heel bone to the base of the toes.',
        alt: 'A foot seen from the inner side with the plantar fascia highlighted as a band from the heel to the ball of the foot.',
      },
      paragraphs: [
        'There is no good evidence that barefoot shoes ease plantar fasciitis (pain where the thick band under your foot attaches to the heel). There is also no trial showing they cause it. Strong claims either way online mostly come from shoe and insole sellers.',
        'Here is what has been tested. In a 2026 randomized trial, Xu and colleagues gave adults with plantar fasciitis about two months of foot exercises, and 34 finished. About half also wore minimalist shoes. Toe strength went up in both groups, and adding the shoes did not clearly add to it. Balance did not change in either group. This report did not cover pain, and the shoe maker supplied the shoes.',
        'In a small 2022 trial of 36 women with plantar fasciitis, Ribeiro and colleagues compared flexible minimalist shoes alone, the same shoes plus a custom insole, and usual shoe advice, over six months. Only the insole group had clearly less heel pain than the usual advice group. A 2022 case series of 20 runners reported less pain after about a month and a half of barefoot running on grass, but it had no comparison group and one author is funded by a barefoot shoe brand.',
        'The 2023 US heel pain guideline recommends calf and plantar fascia stretching (grade A) and strength training (grade B). It does not recommend minimalist shoes, and it lists footwear that reduces load as part of advice for patients. If your heel hurts now, start with the [plantar fasciitis exercises](/plantar-fasciitis-exercises/), and see [insoles vs exercises](/insoles-vs-exercises/) for what support under the foot can and cannot do.',
      ],
      cites: [CITE.xuFrames, CITE.ribeiroShoes, CITE.macgabhannGrass, CITE.guideline],
    },
    {
      h2: 'Is walking barefoot at home OK if your heel hurts?',
      paragraphs: [
        'Be careful with hard floors, especially first thing in the morning. No trial has tested barefoot walking at home for heel pain, so this is cautious advice, not a tested rule. Tile or wood gives the heel no cushion, and the first steps after rest are when plantar fasciitis usually hurts most. Our [morning heel pain](/heel-pain-in-the-morning/) page suggests a stretch before you stand and something on your feet for those first steps.',
        'Cushioning under the heel may matter. In a 2023 study, Landorf and colleagues compared 50 people with plantar heel pain to 25 matched people without it. Those with heel pain stood for 3.4 hours a day longer and wore shoes with harder heels. That shows a link, not a cause.',
        'A deep, central heel ache that is worse barefoot on hard ground can also come from the heel fat pad (the cushion of fat under the heel bone). See [heel fat pad syndrome](/heel-fat-pad-syndrome/) for that pattern.',
        'Short spells barefoot on grass or sand are gentler. If they raise your heel pain the next morning, it was too much.',
      ],
      cites: [CITE.landorfFootwear],
    },
    {
      h2: 'Are barefoot shoes good for flat feet?',
      keyFact: 'In a 2018 comparison, 31 percent of 26 conventionally shod US men had low arches, against 1 of 75 Tarahumara men who wear minimal sandals (Holowka and colleagues).',
      figure: {
        id: 'arches',
        caption: 'A flat foot, a typical arch and a high arch, seen from the inner side.',
        alt: 'Three feet seen from the inner side: a flat foot with the arch on the floor, a typical arch with a small gap, and a high arch with a large gap.',
      },
      paragraphs: [
        'There are hints, but no trial. Holowka and colleagues compared 75 Tarahumara men in Mexico, who wear thin sandals most of their lives, with 26 men from the US who wear regular shoes. The sandal wearers had higher, stiffer arches and bigger muscles along the inner and outer edges of the foot. Only one of the 75 had low arches, against 8 of the 26 US men (31 percent).',
        'An older survey of 2,300 children in India, by Rao and Joseph in 1992, found flat feet in 8.6 percent of children who wore shoes and 2.8 percent of those who did not. Flat feet were most common in children who wore closed shoes.',
        'Both studies compare groups who differ in many ways, so they cannot show that shoes cause flat feet, or that new shoes will raise an adult arch. No trial has tested that.',
        'What matters more is the type of flat foot. A flexible flat foot (the arch comes back when you sit or stand on your toes) is usually fine to load and strengthen, and a gradual move to flatter shoes is reasonable if your feet feel good. A rigid flat foot, or one that is painful, getting flatter or worse on one side, needs a clinician first. Our [flat feet](/flat-feet/) page explains the difference.',
      ],
      cites: [CITE.holowkaShod, CITE.raoFootwear],
    },
    {
      h2: 'Who should not wear barefoot shoes?',
      paragraphs: [
        'Some feet need protection more than a challenge.',
      ],
      bullets: [
        '**Diabetes with foot risk, or neuropathy (numb feet).** The 2023 IWGDF guideline says people with diabetes at risk of ulcers should not walk without suitable foot protection, and those at moderate to high risk should wear properly fitting, therapeutic footwear. Numb feet miss small injuries.',
        '**Poor circulation or skin that is slow to mend.** Same reason: small cuts and blisters matter more.',
        '**A painful heel or foot right now.** Settle the pain first, then decide.',
        '**High arches.** A stiff, high-arched foot absorbs shock poorly, so cushioning may suit it better. See [high arches exercises](/high-arches-exercises/).',
        '**Heavier runners, or runners with high weekly distances.** A six-month trial found more pain and injury risk in minimalist shoes for them. A past foot stress fracture is also a reason to ask a clinician first.',
      ],
      after: [
        'Bunions are a mixed case. A wide toe box takes pressure off the big toe joint, but no trial has tested barefoot shoes for bunions. See [bunion exercises](/bunion-exercises/).',
      ],
      cites: [CITE.busIWGDF, CITE.fullerMinimalist],
    },
    {
      h2: 'How do you switch to barefoot shoes safely?',
      paragraphs: [
        'Slowly, and by how your feet respond, not by a calendar. No study has found a timetable that suits everyone. The strength studies built up step counts gradually and kept people from running in the new shoes. The running trials saw more pain and bone stress even with gradual plans.',
      ],
      bullets: [
        'Walk before you run. Start with short spells of everyday walking, in your usual shoes the rest of the day.',
        'Add time only when your feet and calves feel normal the next morning.',
        'Expect tired feet and calves at first. Sharp pain is different.',
        'Stop and get checked if pain sits on one spot of a bone, often on the top of the foot, and gets worse with walking. That is the pattern of a stress fracture.',
        'Keep running in your usual shoes until walking in the new ones feels normal, then add running in small amounts.',
      ],
      cites: [CITE.ridgeMinimalist, CITE.curtisMinimal, CITE.ridgeEdema],
    },
    {
      h2: 'Exercises that strengthen your feet without new shoes',
      keyFact: 'In a 2020 trial of 118 recreational runners, those who did not do foot core training were 2.42 times as likely to get a running injury within a year (Taddei and colleagues).',
      paragraphs: [
        'You can get the strength benefit without changing shoes. In the 2019 Ridge trial, foot exercises worked as well as minimalist shoes. In a 2020 trial of 118 recreational runners, Taddei and colleagues found that runners in the control group were 2.42 times as likely to get a running injury within a year as those who did a foot core training program. That is one trial, in runners.',
        'The four exercises below cover the arch, toes, calf and balance. Walkito starts at 3 sets of 8 for the short foot with a 5 second hold, 3 sets of 10 for toe spreads and heel raises, and 3 holds of 20 seconds on one leg. If an exercise takes your pain to **6/10 or more**, stop for the day. More options are on the [toe strengthening exercises](/toe-strengthening-exercises/) page.',
      ],
      exercises: [
        {
          name: 'Short foot, seated',
          dose: '3 sets of 8, hold each for 5 seconds',
          often: 'Most sessions',
          feel: 'A tightening under the arch, toes relaxed',
          stop: 'Cramping that does not ease, or pain at 6/10',
          how: 'Sit with your foot flat on the floor. Without curling your toes, draw the ball of the foot toward the heel so the arch lifts a little. Hold, then relax. More on the [short foot exercise](/exercises/short-foot-exercise/) page.',
          media: 'short_foot_seated',
          caption: 'Short foot, seated: draw the ball of the foot toward the heel, toes flat',
          alt: 'A seated figure lifting the arch of one foot while the toes stay flat on the floor',
          evidence: { level: 'moderate', why: 'Part of the foot strengthening programs tested in trials, including Taddei 2020, but not tested alone for pain.' },
        },
        {
          name: 'Toe spread',
          dose: '3 sets of 10',
          often: 'Most sessions',
          feel: 'Work along the sides of the foot',
          stop: 'Cramping that does not ease, or pain at 6/10',
          how: 'Sit with your feet flat. Spread all your toes apart as wide as you can, hold for a moment, then relax. This trains the muscle a wide toe box lets you use.',
          media: 'toe_spread',
          caption: 'Toe spread: open the toes wide, then relax',
          alt: 'A bare foot on the floor with the toes spread wide apart',
          evidence: { level: 'early', why: 'Targets the abductor hallucis, one of the muscles larger in minimally shod people (Holowka 2018). Not tested alone for pain.' },
        },
        {
          name: 'Two-foot heel raise',
          dose: '3 sets of 10',
          often: 'Most sessions',
          feel: 'Work in the calves and the balls of the feet',
          stop: 'Pain at the heel or Achilles at 6/10',
          how: 'Hold a wall. Rise onto the balls of both feet over about 3 seconds, then lower over 3 seconds. Barefoot shoes load the calf more, so a stronger calf helps the switch. More on the [calf raises](/exercises/calf-raises/) page.',
          media: 'heel_raise_double',
          caption: 'Two-foot heel raise: slow up, slow down',
          alt: 'A figure holding a wall and rising onto the balls of both feet',
          evidence: { level: 'moderate', why: 'Heel raises are part of strength training, which the 2023 heel pain guideline grades B for plantar fasciitis.' },
        },
        {
          name: 'Single-leg hold',
          dose: '3 holds of 20 seconds, each leg',
          often: 'Balance sessions',
          feel: 'Small corrections in the foot and ankle',
          stop: 'Pain at 6/10, or losing balance without support nearby',
          how: 'Stand on one foot near a wall and keep your eyes on one spot. Let the foot make small corrections. Once it is easy, try it barefoot on a soft mat. More on the [single-leg balance](/exercises/single-leg-balance/) page.',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: let the foot make small corrections',
          alt: 'A figure balancing on one leg, the ankle highlighted',
          evidence: { level: 'early', why: 'Balance work is part of foot core programs. Not tested alone for foot pain or for the switch to minimalist shoes.' },
        },
      ],
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI, CITE.holowkaShod, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Are barefoot shoes good for your feet?',
      cites: [CITE.ridgeMinimalist, CITE.ridgeEdema],
      a: 'They can be, for people without foot pain who switch slowly. In a 2019 trial of 57 runners, walking in minimalist shoes for about two months made foot muscles bigger and stronger. But a fast switch to running in them brought bone stress in 10 of 19 runners in a 2013 MRI study. They are not a good idea with diabetes, numb feet or a current flare of foot pain.',
    },
    {
      q: 'Are barefoot shoes good for plantar fasciitis?',
      cites: [CITE.xuFrames, CITE.guideline],
      a: 'No trial has shown that barefoot shoes on their own ease plantar fasciitis pain. In a small 2026 trial in people with plantar fasciitis, foot exercises raised toe strength with or without minimalist shoes. The 2023 heel pain guideline recommends stretching and strength training and does not recommend minimalist shoes. If your heel hurts now, settle the pain with exercises before you change shoes.',
    },
    {
      q: 'Are barefoot shoes good for flat feet?',
      cites: [CITE.holowkaShod, CITE.raoFootwear],
      a: 'There is no trial. Studies comparing groups found fewer flat feet in people who grew up barefoot or in thin sandals, for example 2.8 percent against 8.6 percent in a survey of 2,300 children in India. That does not show that switching shoes as an adult raises an arch. A painless, flexible flat foot can usually try them slowly. A rigid or painful one needs a clinician first.',
    },
    {
      q: 'Are barefoot shoes good for neuropathy?',
      cites: [CITE.busIWGDF],
      a: 'Usually not. If your feet are numb from neuropathy or diabetes, a thin sole lets cuts, blisters and pressure spots go unnoticed. The 2023 international diabetic foot guideline advises people with diabetes at risk of ulcers not to walk without suitable foot protection, and to wear properly fitting, therapeutic footwear when risk is moderate or high. Ask your foot care team what shoes suit you.',
    },
    {
      q: 'How long does it take to get used to barefoot shoes?',
      cites: [CITE.curtisMinimal, CITE.ridgeEdema],
      a: 'There is no safe timetable that fits everyone. In one study, adults who wore minimal shoes for daily life seemed to reach full foot strength by six months, matching people who had worn them for years. Runners who moved to minimalist running shoes over about two and a half months still showed bone stress on MRI. Build up by how your feet feel the next morning, walk before you run, and keep your old shoes in the rotation.',
    },
    {
      q: 'Is walking barefoot good for you?',
      a: 'Short spells barefoot on soft ground are fine for most people without foot pain, and use the foot muscles more than shoes do. With heel pain, be careful with hard floors, especially for your first steps in the morning, when plantar fasciitis usually hurts most. No trial has tested barefoot walking at home for heel pain. With diabetes or numb feet, avoid going barefoot.',
    },
    {
      q: 'Can I strengthen my feet without barefoot shoes?',
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
      a: 'Yes. In a 2019 trial, foot exercises built foot muscle size and strength as well as walking in minimalist shoes. In a 2020 trial of 118 runners, those who did not do a foot core training program were 2.42 times as likely to get a running injury within a year. The short foot exercise, toe spreads, heel raises and single-leg balance cover most of it.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you have diabetes, numbness, tingling or burning in your feet, or poor circulation',
      'you have a cut, blister or sore on the foot that is not getting better',
      'pain sits on one spot of a foot bone, often on the top of the foot, and gets worse with walking, which can be a stress fracture',
      'the foot is swollen, red or warm, or you cannot put weight on it',
      'your arch is getting flatter, one foot is much flatter than the other, or the flat foot is stiff',
      'heel or foot pain started or got worse after switching shoes and has not settled with a return to your old shoes',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is an exercise program for heel, foot and leg pain. It includes the short foot exercise, toe spreads, heel raises and balance work from this page and builds them up as they get easier. It does not pick your shoes and does not diagnose. A stronger foot and calf is a sensible base whichever shoes you end up in.',
    more: [
      'You choose sessions of 3, 5 or 10 minutes. Every 14 days at first (every 28 once you reach a goal), a short test checks calf endurance, arch hold and balance. Walkito is for adults and is not a substitute for a clinician.',
    ],
    cta: 'Start with a short session and see how your feet respond.',
  },
  crumb: 'Barefoot shoes',
  campaign: 'guide-barefoot',
};
