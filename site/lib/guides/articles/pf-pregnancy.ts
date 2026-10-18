import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Plantar fasciitis and heel pain in pregnancy (EN). Research 2026-10-17:
 * no study measures how often plantar fasciitis itself starts in pregnancy,
 * and the 2023 JOSPT heel pain guideline never mentions pregnancy (full text
 * searched for pregnan-, gestation, postpartum, maternal). The page says so.
 * Foot pain figures: Vullo 1996 (107 postpartum vs 91 never pregnant).
 * Foot shape: Segal 2013 (49 completed). Exercise safety: ACOG CO 804 (2020,
 * reaffirmed 2023). Falls: Dunning 2003 (2,847 employed women). NSAIDs: FDA
 * Drug Safety Communication, 15 October 2020 (no DOI, linked in text).
 * Shockwave: ISMST lists "fetus in the shockwave field (not the pregnancy itself)" as a contraindication
 * (linked in text). Red flags: NHS pre-eclampsia and DVT pages (linked).
 * Doses match the heel pain guide (en.ts).
 */

export const PF_PREGNANCY_EN: Guide = {
  lang: 'en',
  page: 'pfPregnancy',
  mainSource: CITE.segalPregnancy,
  published: '2026-10-17',
  updated: '2026-10-17',
  title: 'Plantar Fasciitis in Pregnancy: Safe Exercises and Red Flags',
  description:
    'Heel pain in pregnancy: what changes in the foot, which stretches are safe seated or at a wall, which medicines to avoid from 20 weeks, and warning signs.',
  h1: 'Plantar fasciitis in pregnancy: why your heels hurt and what is safe to do',
  lede:
    'Heel and foot pain are common in pregnancy, and stretches, among the top-graded options for [plantar fasciitis](/plantar-fasciitis/), can be done sitting down or holding a wall. In one study, 31% of women who had given birth reported foot pain, against 22% of women who had never been pregnant (Vullo and colleagues, 1996). The 2023 heel pain guideline gives plantar fascia and calf stretches its top grade, **A**, but it does not cover pregnancy, so check with your doctor or midwife before you start.',
  intro: [
    'No study has measured how often plantar fasciitis itself starts during pregnancy. What studies do show is that feet change: in a group of 49 women, arches dropped and feet got longer, and the change was still there months after birth (Segal and colleagues, 2013). This page covers what is known, the exercises that fit pregnancy, what to avoid, and the leg symptoms that need a doctor the same day.',
  ],
  takeaways: [
    'Foot pain was more common in women who had given birth than in women who had never been pregnant, 31% against 22%, and most leg and foot pain started in the second or third trimester (Vullo and colleagues, 1996).',
    'In 49 women measured in the first trimester and about four and a half months after birth, arch height fell and foot length grew. The first pregnancy drove most of the change (Segal and colleagues, 2013).',
    'The 2023 heel pain guideline grades plantar fascia and calf stretching **A** and strength work **B**, but it does not mention pregnancy (Koc and colleagues, 2023).',
    'After 20 weeks, avoid long periods lying flat on your back during exercise, and stop if you notice warning signs such as bleeding, dizziness or calf pain or swelling (ACOG, 2020).',
    'The US FDA advises avoiding NSAIDs such as ibuprofen from 20 weeks of pregnancy unless your doctor advises them (FDA, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Is heel pain common in pregnancy?',
      keyFact: 'Foot pain was reported by 31% of 107 women who had given birth, against 22% of 91 women who had never been pregnant (Vullo and colleagues, 1996).',
      paragraphs: [
        '**Foot pain is common in pregnancy, but nobody has counted plantar fasciitis on its own.** In a 1996 questionnaire study, 31% of 107 women who had recently given birth reported foot pain, against 22% of 91 women who had never been pregnant. Leg and foot pain overall was reported by 56% against 37%.',
        'Most of that pain started later in pregnancy: 82% began in the second or third trimester. The authors suggested this timing points more to the mechanics of a heavier, changing body than to hormones alone.',
        'In a 2010 study of 100 women interviewed after giving birth, more than half reported swelling of the feet, ankles and legs, an unsteady walk and wider feet (Ponnapula and Boberg, 2010).',
        'If your heel hurts most with your first steps in the morning or after sitting, that is the typical plantar fasciitis pattern. Pain that is worse at night or at rest is a different pattern, covered in [heel pain at night](/heel-pain-at-night/).',
      ],
      cites: [CITE.vulloPregnancy, CITE.ponnapulaPregnancy],
    },
    {
      h2: 'Why can pregnancy make your heels hurt?',
      keyFact: 'In 49 women, 35 had an arch drop and 30 had longer feet by about four and a half months after birth (Segal and colleagues, 2013).',
      paragraphs: [
        '**The clearest finding is that the arch gets lower and the foot gets longer.** A 2013 study measured 49 women in the first trimester and again about four and a half months after birth. Arch height and arch stiffness went down, and foot length and arch drop went up. 35 of the 49 had an arch drop, and 30 had longer feet, most by 2 to 10 millimetres.',
        'The cause is less clear than many websites say. In that study, joint looseness and weight gain during pregnancy were not linked to how much the feet changed. Weight and long hours on your feet are known risk factors for plantar fasciitis in general (Koc and colleagues, 2023), but no study has tested them in pregnancy.',
        'Swelling, a heavier body and a different way of walking all change how load spreads across the foot. The plantar fascia is the band under the foot that holds up the arch, so a lower arch and more load can strain it. More on how a lower arch can last after birth: [do flat feet get worse with age](/do-flat-feet-get-worse-with-age/).',
      ],
      cites: [CITE.segalPregnancy, CITE.guideline, CITE.ponnapulaPregnancy],
    },
    {
      h2: 'Which exercises for heel pain are safe in pregnancy?',
      paragraphs: [
        'The exercises below come from the plantar fasciitis guideline, which was written for adults in general, not for pregnancy. All of them are done sitting or standing with a hand on a wall, and none needs you to lie on your back or jump. **Ask your doctor or midwife first**, especially if you have been told to limit activity.',
        'Stretching is among the 2023 guideline’s top-graded options for heel pain: plantar fascia and calf stretches get an **A**. Strength work for the calf gets a **B**. The heel raise trial on this site tested a standing version (Rathleff and colleagues, 2015); seated heel raises are a lighter starting point.',
        'If you are unsteady, keep a hand on a wall or the back of a chair. In a survey of 2,847 working women, 26.6% fell at least once during pregnancy (Dunning and colleagues, 2003). That is why this page leaves out single-leg balance and hopping until your doctor or midwife says they are fine.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. It was not studied in pregnancy.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most days you exercise',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor. If your bump makes crossing the leg hard, loop a towel around the ball of the foot and pull gently instead.',
          stop: 'Sharp heel pain, or any warning sign in the list below',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. It was not studied in pregnancy.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most days you exercise',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward. Take a shorter step back than usual if your balance feels different.',
          stop: 'Pain in the calf that stays after you stop, or a calf that is swollen',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. It was not studied in pregnancy.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most days you exercise',
          feel: 'A stretch near the heel',
          how: 'Take the same position at the wall, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Pain in the calf that stays after you stop, or a calf that is swollen',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own or in pregnancy.' },
          dose: '3 sets of 10, both feet',
          often: '3 days a week, never two in a row',
          feel: 'Work in the lower calf',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, the deeper calf muscle. It is a lighter starting point than the standing heel raises tested in the trial.',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Towel scrunch',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested programs and was not studied in pregnancy.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Most days you exercise',
          feel: 'The small muscles under the arch working',
          how: 'Sit with a towel flat on the floor under your foot. Pull the towel in with your toes, and keep the heel down.',
          stop: 'Cramp in the foot or calf that does not ease when you stop',
          image: 'Exercise: towel scrunch',
          media: 'towel_scrunch',
          caption: 'Towel scrunch: pull the towel in with your toes, the heel stays down',
          alt: 'A seated figure pulling a towel in with the toes of one foot',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff, CITE.dunningFalls],
    },
    {
      h2: 'What should you avoid with heel pain in pregnancy?',
      keyFact: 'ACOG advises avoiding long periods lying flat on your back during exercise after 20 weeks, because it can lower blood pressure (ACOG, 2020).',
      paragraphs: [
        '**After 20 weeks, avoid long periods lying flat on your back while you exercise.** The American College of Obstetricians and Gynecologists (ACOG) explains that the weight of the womb can press on a large vein and lower blood pressure. ACOG also advises against activities with a high risk of falling.',
        '**Ask before you take a painkiller.** The US Food and Drug Administration [advises avoiding NSAIDs](https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic) such as ibuprofen and naproxen from 20 weeks of pregnancy, because in rare cases they can cause serious kidney problems in the baby and lower the amniotic fluid. The warning does not cover low-dose aspirin your doctor has prescribed.',
        '**Ask before shockwave therapy or an injection.** The International Society for Medical Shockwave Treatment rules it out only when a [fetus is in the treated area](https://shockwavetherapy.org/indications/), not because of pregnancy itself. We found no studies of shockwave therapy for heel pain in pregnancy. For steroid injections there is no pregnancy guidance specific to heel pain. One review says a single local injection is not ruled out by pregnancy itself, so it is a decision for your doctor (Filippini and colleagues, 2023).',
        'Stop exercising and call your doctor or midwife if you notice any of the warning signs ACOG lists, including vaginal bleeding, regular painful contractions, fluid leaking, dizziness, chest pain, or calf pain or swelling.',
      ],
      cites: [CITE.acogExercise, CITE.filippiniInjections],
    },
    {
      h2: 'Do shoes or insoles help heel pain in pregnancy?',
      paragraphs: [
        'No trial has tested insoles or shoes for heel pain in pregnancy. The closest study gave 72 pregnant women custom arch insoles or their usual shoes. It measured arch shape, not pain, and found no difference between the groups (Segal and colleagues, 2018).',
        'For heel pain in general, the 2023 guideline grades insoles on their own **B against**: the evidence says not to rely on them alone. Combined with stretching and strength work, they get a **C** (Koc and colleagues, 2023). [Insoles or exercises](/insoles-vs-exercises/) compares the two.',
        'One practical point is backed by the foot measurements: many women’s feet got longer, most by 2 to 10 millimetres (Segal and colleagues, 2013). If your shoes now feel tight or press on the heel, a pair that fits your feet as they are now is worth checking first.',
      ],
      cites: [CITE.segalInsolesPregnancy, CITE.guideline, CITE.segalPregnancy],
    },
    {
      h2: 'Does heel pain go away after pregnancy?',
      paragraphs: [
        'We found no study that follows heel pain or plantar fasciitis after birth, so there is no figure for how many women recover and how fast.',
        'The foot shape changes did last: about four and a half months after birth, arches were still lower and feet still longer than in the first trimester, mostly after a first pregnancy (Segal and colleagues, 2013). For plantar fasciitis in general, about 90% of people get better with non-surgical care, though it can take three to six months; see [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/).',
        'After birth, ACOG advises building activity back up gradually once your doctor or midwife says it is safe (ACOG, 2020). The same stretches and strength work on this page apply.',
      ],
      cites: [CITE.segalPregnancy, CITE.acogExercise, CITE.latt],
    },
    {
      h2: 'When is foot or leg pain in pregnancy an emergency?',
      keyFact: 'Pain and swelling in one calf can be a blood clot, and sudden swelling of the face, hands or feet can be pre-eclampsia. Both need a doctor the same day (NHS).',
      paragraphs: [
        'Two conditions can look like ordinary sore, swollen feet and need urgent care:',
        {
          list: [
            '**A blood clot in the leg (DVT).** Throbbing pain and swelling in one leg, usually the calf or thigh, sometimes with red, blue or darker skin around the painful area, or swollen veins. The risk is higher in pregnancy and for six weeks after birth. Call an ambulance if you are also short of breath or have chest pain. [NHS: DVT](https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/).',
            '**Pre-eclampsia.** Sudden swelling of the face, hands or feet, a severe headache, blurred vision or flashing lights, or pain just below the ribs. It is most likely after 20 weeks, and symptoms can also continue or start in the first weeks after birth. [NHS: pre-eclampsia](https://www.nhs.uk/conditions/pre-eclampsia/).',
          ],
        },
        'Gradual swelling of both feet at the end of the day is common in pregnancy. Swelling that is sudden, in one leg only, or comes with the symptoms above is not.',
      ],
    },
  ],
  faq: [
    {
      q: 'Can pregnancy cause plantar fasciitis?',
      cites: [CITE.vulloPregnancy, CITE.segalPregnancy],
      a: 'It may make it more likely, but no study has proven it. Foot pain was more common in women who had given birth (31%) than in women who had never been pregnant (22%), and pregnancy lowers the arch and lengthens the foot. No study has counted plantar fasciitis on its own in pregnancy.',
    },
    {
      q: 'Is heel pain a sign of early pregnancy?',
      cites: [CITE.vulloPregnancy],
      a: 'No study links heel pain to early pregnancy. In the 1996 study, 82% of leg and foot pain in pregnancy started in the second or third trimester, not the first. Heel pain in the first weeks is more likely to have the same causes as at any other time.',
    },
    {
      q: 'Is it safe to stretch for plantar fasciitis while pregnant?',
      cites: [CITE.guideline, CITE.acogExercise],
      a: 'Gentle plantar fascia and calf stretches, done seated or with a hand on a wall, fit ACOG’s advice for exercise in pregnancy, and the 2023 heel pain guideline grades them A. That guideline does not cover pregnancy, so ask your doctor or midwife first, and avoid long periods lying flat on your back after 20 weeks.',
    },
    {
      q: 'Can I take ibuprofen for heel pain while pregnant?',
      a: 'Ask your doctor or midwife first. The US FDA advises avoiding NSAIDs, which include ibuprofen and naproxen, from 20 weeks of pregnancy unless a doctor advises them, because in rare cases they can cause serious kidney problems in the baby and lower the amniotic fluid.',
    },
    {
      q: 'Do feet stay bigger after pregnancy?',
      cites: [CITE.segalPregnancy],
      a: 'For many women, yes, at least for months. In 49 women, foot length and arch drop were still higher about four and a half months after birth than in the first trimester. The changes were mostly small, and the first pregnancy drove most of them.',
    },
    {
      q: 'Do night splints help plantar fasciitis in pregnancy?',
      cites: [CITE.guideline],
      a: 'Night splints have not been studied in pregnancy. For plantar fasciitis in general, the 2023 guideline grades them A, worn for one to three months, for people who consistently have pain with their first steps in the morning. Ask your doctor or midwife before you buy one. More in [night splints for plantar fasciitis](/night-splints-plantar-fasciitis/).',
    },
    {
      q: 'Is walking bad for plantar fasciitis in pregnancy?',
      cites: [CITE.acogExercise],
      a: 'Walking is one of the activities ACOG suggests in pregnancy, as part of at least 150 minutes of moderate activity a week. No study has looked at walking with plantar fasciitis in pregnancy, so ask your doctor or midwife how much suits you.',
    },
    {
      q: 'Can I get shockwave therapy or a steroid injection while pregnant?',
      cites: [CITE.filippiniInjections],
      a: 'Ask your doctor. The International Society for Medical Shockwave Treatment rules shockwave out only when a fetus is in the treated area, not because of pregnancy itself, but we found no studies of it for heel pain in pregnancy. For steroid injections there is no heel pain guidance specific to pregnancy, and one review says a single local injection is not ruled out by pregnancy itself.',
    },
  ],
  redFlags: {
    h2: 'See a doctor or midwife the same day if',
    bullets: [
      'one calf or leg is painful and swollen, or the skin there looks red or darker (possible blood clot)',
      'your face, hands or feet swell suddenly, or you have a severe headache, blurred vision or pain below the ribs (possible pre-eclampsia)',
      'you are short of breath or have chest pain: call an ambulance',
      'you have vaginal bleeding, regular painful contractions or fluid leaking',
      'heel pain started after a fall or a twist, or you cannot put weight on the foot',
      'the heel hurts at night or at rest, or you feel burning, tingling or numbness',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app. It is not designed around pregnancy and does not know your trimester, so check with your doctor or midwife before you start, and skip anything that needs hopping, jumping or lying on your back.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['heelPain', 'morningHeelPain', 'flatFeetAge'],
  crumb: 'Heel pain in pregnancy',
  campaign: 'guide-pregnancy',
};
