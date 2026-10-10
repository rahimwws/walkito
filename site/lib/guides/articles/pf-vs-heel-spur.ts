import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * menzSpur
 *   Menz HB, Zammit GV, Landorf KB, Munteanu SE. Plantar calcaneal spurs
 *   in older people: longitudinal traction or vertical compression? Journal
 *   of Foot and Ankle Research. 2008;1(1):7.
 *   doi: 10.1186/1757-1146-1-7 | PMID: 18822162 | cross-sectional study
 *
 * menzCoexistence
 *   Menz HB, Thomas MJ, Marshall M, et al. Coexistence of plantar calcaneal
 *   spurs and plantar fascial thickening in individuals with plantar heel
 *   pain. Rheumatology (Oxford). 2019;58(2):237-245.
 *   doi: 10.1093/rheumatology/key266 | PMID: 30204912 | cross-sectional
 *   observational study
 *
 * NOT YET IN citations.ts (flagged for the maintainer, not added here):
 * ehrmannSpur
 *   Ehrmann C, Maier M, Mengiardi B, Pfirrmann CWA, Sutter R. Calcaneal
 *   attachment of the plantar fascia: MR findings in asymptomatic
 *   volunteers. Radiology. 2014;272(3):807-814.
 *   doi: 10.1148/radiol.14131410 | PMID: 24814176 | cross-sectional MRI
 *   study, 77 asymptomatic volunteers. Verified on PubMed: a calcaneal spur
 *   was found in 15 of 77 (19%). Mentioned below in prose only, pending a
 *   CITE key, since this file cannot edit citations.ts.
 */

export const PF_VS_HEEL_SPUR_EN: Guide = {
  lang: 'en',
  page: 'pfVsHeelSpur',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Plantar Fasciitis vs Heel Spur: Are They the Same?',
  description:
    'Plantar fasciitis vs heel spur: how they differ, whether heel spurs cause pain, what the research says about spur prevalence, and when imaging matters.',
  h1: 'Plantar fasciitis vs heel spur: are they the same thing?',
  lede:
    'A heel spur is a bony growth on the bottom of the heel bone. Plantar fasciitis is irritation of the plantar fascia, the thick band of tissue that runs from that bone to your toes. They often show up together, but they are not the same condition, and the spur is usually not what hurts. Many people with spurs on X-ray have no pain at all.',
  intro: [
    'If you have been told you have a heel spur and want to know what to do about it, the exercises are the same ones that help plantar fasciitis. [Heel spur exercises](/heel-spur-exercises/) covers the full routine. This page explains the difference between the two conditions, what the research says about spurs and pain, and when imaging is worth doing.',
  ],
  takeaways: [
    'In a study of 216 older adults aged 62 to 94, 55% had at least one plantar calcaneal spur on X-ray, and spur presence was related to obesity and osteoarthritis but not to foot posture (Menz and colleagues, 2008). This is an older-adult sample, not a general-population figure.',
    'In a study of 530 people aged 50 and over with foot pain, heel spurs and a thickened plantar fascia usually showed up together, and a spur on its own was rare (6% of feet). Heel pain was linked to having both findings together (Menz and colleagues, 2019).',
    'The 2023 heel pain guideline focuses on plantar fasciitis as the most common cause of plantar heel pain and notes that imaging is usually not needed when the clinical exam already points to plantar fasciitis (Koc and colleagues, 2023).',
    'The Menz 2008 study itself notes that earlier research in the general population had put heel spur prevalence at 11 to 16%, well below the 55% found in their own older sample (Menz and colleagues, 2008).',
    'The exercises that help plantar fasciitis pain also address the soft tissue around a heel spur. Exercise does not dissolve a spur, but the spur is rarely what needs attention.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Is a heel spur the same as plantar fasciitis?',
      figure: { id: 'heel-side', caption: 'A heel spur, when there is one, forms on the underside of the heel bone, close to where the plantar fascia attaches.', alt: 'Inner side view of a foot with see-through skin showing the heel bone, the plantar fascia running under the arch, and a red area under the heel where pain usually starts.' },
      paragraphs: [
        '**A heel spur and plantar fasciitis are not the same thing.** Plantar fasciitis is a soft tissue problem: the plantar fascia, the thick band running from the heel bone to the toes, becomes irritated, usually where it attaches to the bone. A heel spur is a bony outgrowth on the underside of the heel bone (the calcaneus). The two often coexist, but they can each appear without the other.',
        'Plantar fasciitis causes the sharp, stabbing pain people describe on the bottom of the heel, especially with the first steps in the morning or after sitting. The 2023 heel pain guideline defines it as pain "most noticeable with weight bearing first thing in the morning or after a period of rest." A heel spur, by contrast, is a structural finding on an X-ray. It may or may not produce symptoms of its own.',
        'The confusion is understandable. For decades, heel spurs were thought to be the cause of plantar heel pain. That view has largely been replaced by evidence showing that spurs are common in people without pain, and that many people with plantar fasciitis have no spur at all.',
      ],
      cites: [CITE.ehrmannSpur, CITE.guideline],
    },
    {
      h2: 'Do heel spurs actually cause pain?',
      keyFact: 'In a study of 530 people with foot pain, a heel spur on X-ray appeared alone in only 6 percent of feet, usually alongside a thickened plantar fascia (Menz and colleagues, 2019).',
      paragraphs: [
        '**Most heel spurs do not cause pain.** The research consistently shows that spurs are found in people with no heel symptoms, and that removing the spur does not reliably stop the pain.',
        'In a study of 530 people aged 50 and over who reported foot pain:',
        {
          list: [
            'X-rays found a heel spur in 26.5% of feet.',
            'Ultrasound found a thickened plantar fascia in 47.3% of feet.',
            'The two usually came together, and a spur on its own was rare (6% of feet).',
            'People with heel pain were about twice as likely to have both findings together (Menz and colleagues, 2019).',
          ],
        },
        'In other words, the spur rarely shows up without the soft tissue change that goes with it.',
        'Separately, in a study of 216 older adults aged 62 to 94, 55% had at least one plantar calcaneal spur on X-ray. Spurs were related to obesity, osteoarthritis and a history of heel pain, but not to foot posture. The authors suggested that spurs may be an adaptive response to vertical compression of the heel, not a result of the plantar fascia pulling on the bone (Menz and colleagues, 2008).',
        'The Menz 2008 study notes that earlier research in the general population had reported heel spur prevalence of 11 to 16%, well below the 55% the authors found in their own sample of older adults. In that same older-adult sample, about 6 in 10 people with a spur had never had heel pain, although heel pain was still more common in people with spurs (40%) than without (12%) (Menz and colleagues, 2008). A spur raises the odds, but it does not decide who ends up with pain.',
      ],
      sourceNote:
        'Menz 2019: 530 participants aged 50 and over with foot pain, cross-sectional. Spurs in 26.5% of feet, plantar fascia thickening in 47.3%, isolated spurs in 6.0%. Heel pain linked to both features combined (OR 2.16, 95% CI 1.24 to 3.77). Menz 2008: 216 participants aged 62 to 94, cross-sectional, spur prevalence 55%, current or previous heel pain OR 4.6 (95% CI 2.3 to 9.4).',
      cites: [CITE.menzCoexistence, CITE.menzSpur],
    },
    {
      h2: 'How common are heel spurs in people without pain?',
      keyFact: 'In an MRI study of 77 people with no symptoms, 19 percent had a calcaneal spur, showing spurs are common even without heel pain (Ehrmann and colleagues, 2014).',
      paragraphs: [
        'Heel spurs are common. Prevalence depends on the age group and the method used to look for them.',
        'The Menz 2008 study of older adults cites earlier research reporting heel spur prevalence of 11 to 16% in the general population, a range well below the 55% the authors found in their own sample of 216 people aged 62 to 94. A separate MRI study of 77 asymptomatic volunteers (mean age 48, range 23 to 83) found a calcaneal spur in 15 of them, 19% (Ehrmann and colleagues, 2014).',
        'The pattern is consistent: a large proportion of people with spurs have no symptoms, and **a spur on its own does not predict whether someone will have heel pain.** This is why the 2023 heel pain guideline does not list a heel spur as a reason to change the exercise approach.',
      ],
      cites: [CITE.ehrmannSpur, CITE.menzSpur],
    },
    {
      h2: 'What does the 2023 heel pain guideline say about heel spurs?',
      paragraphs: [
        'The 2023 clinical practice guideline for heel pain, published in the Journal of Orthopaedic and Sports Physical Therapy, focuses on plantar fasciitis as the most common cause of plantar heel pain. It mentions "heel spur syndrome" as one of several differential diagnoses, alongside:',
        {
          list: [
            'Fat pad syndrome.',
            'Nerve irritation.',
            'Calcaneal stress fracture.',
          ],
        },
        'The guideline does not recommend imaging as a first step when the clinical examination already points to plantar fasciitis. It states that imaging studies "are usually not indicated for patients that meet clinical examination criteria for plantar fasciitis until they fail conservative interventions." When imaging is considered, weight-bearing X-ray is the first choice, followed by ultrasound or MRI if needed.',
        'In practice, this means a clinician who sees the typical pattern, first-step pain in the morning, tenderness at the inside of the heel, and reduced ankle flexibility, can begin stretching and strength work without waiting for an X-ray. **The presence or absence of a spur on a later X-ray does not change the exercise plan.**',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Do you need an X-ray to tell plantar fasciitis from a heel spur?',
      paragraphs: [
        '**You usually do not need an X-ray for plantar fasciitis.** The diagnosis is clinical: it is based on where the pain is, when it happens and what makes it worse. An X-ray can show a heel spur, but finding one does not change what you do about the pain, and not finding one does not rule out plantar fasciitis.',
        'Imaging becomes useful:',
        {
          list: [
            'When the pain does not follow the typical plantar fasciitis pattern.',
            'When it has not improved after several weeks of conservative care.',
            'When a clinician suspects something else, such as a stress fracture, a nerve problem or a plantar fascia tear.',
          ],
        },
        'Ultrasound can measure plantar fascia thickness (a reading above 4 mm is generally considered thickened), and MRI can show soft tissue detail that X-rays miss.',
        'If you have already been told you have a heel spur on an X-ray, the spur itself almost never needs separate attention. The exercises and stretches that help plantar fasciitis also address the soft tissue around the spur. See [heel spur exercises](/heel-spur-exercises/) for the full routine.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'If the spur is not the problem, what is?',
      paragraphs: [
        'The pain usually comes from the plantar fascia and the tissues around it, not from the bone. The plantar fascia attaches to the bottom of the heel bone. When it is overloaded, especially in someone with a tight calf, high BMI or long hours on their feet, that attachment point becomes irritated. That irritation is plantar fasciitis.',
        'A tight calf is one of the strongest risk factors. In a matched case-control study of 50 people with plantar fasciitis and 100 controls:',
        {
          list: [
            'Reduced ankle dorsiflexion, how far the foot bends up toward the shin, had the highest odds ratio of any factor measured.',
            'Standing for most of the working day was also significant, at 3.6 times the odds (Riddle and colleagues, 2003).',
          ],
        },
        'The spur, when it is there, sits nearby. It may have formed over months or years in response to the same mechanical stress that irritated the fascia. But **it is the fascia and the calf that respond to stretching and strengthening, not the bone.** That is why the guideline recommends exercise, not spur removal.',
        'For a full overview of plantar fasciitis, including causes, risk factors and what the guideline recommends, see [plantar fasciitis](/plantar-fasciitis/).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Does a heel spur ever need to be removed?',
      paragraphs: [
        'Surgical removal of a heel spur is rare and is not a first-line option. **The 2023 guideline does not recommend spur removal for plantar fasciitis.** Multiple studies have shown that plantar fasciitis pain can resolve with conservative care even when a spur remains on X-ray. The American Academy of Orthopaedic Surgeons states plainly that "heel spurs do not cause plantar fasciitis pain" and that "plantar fasciitis pain can be treated without removing the spur."',
        'Surgery is sometimes considered when pain has not responded to months of conservative treatment, but the procedure is typically a partial plantar fascia release, not a spur removal. If a spur happens to be taken out during that surgery, the evidence suggests the benefit came from releasing the fascia, not from removing the bone.',
        'The vast majority of people with heel pain and a spur improve with the same stretching, calf work and load management that people without a spur use. See [heel spur exercises](/heel-spur-exercises/) for the practical routine.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'What exercises help when you have a heel spur?',
      paragraphs: [
        'The exercises for heel spur pain are the same ones the guideline recommends for plantar fasciitis: plantar fascia stretching, calf stretching and gradual calf strengthening. Exercise does not dissolve a spur. It addresses the soft tissue that is actually producing the pain.',
        'The guideline gives plantar fascia and calf stretching its top grade, **A**, and strength training a **B**. These grades apply whether or not a spur is present. [Heel spur exercises](/heel-spur-exercises/) covers the full routine with sets, holds and progression. Below are three starting exercises.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 guideline grades plantar fascia stretching A, its top grade.' },
          dose: '10 holds of 10 seconds, each foot',
          how: 'Sit and cross one ankle over the other knee. Pull the toes back gently until you feel a stretch along the arch. Do this before standing in the morning and after long periods of sitting.',
          often: 'Every morning and after sitting',
          feel: 'A stretch along the arch, not pain',
          stop: 'Pain reaches 6/10',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back before your first step',
          alt: 'A seated figure pulling the toes back to stretch the plantar fascia',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'Same guideline grade A. Targets the gastrocnemius, the bigger, more superficial calf muscle.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall. Back leg straight, heel down, hips forward. A tight calf pulls on the heel through the Achilles tendon, adding load to the fascia.',
          often: 'Most sessions',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, lean forward',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Heel raises, both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength training B for plantar fasciitis. A stepping stone to the loaded towel raise.' },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. This builds calf capacity without heavy load on the heel.',
          often: 'Strength days',
          feel: 'The calves working together',
          stop: 'Pain reaches 6/10',
          media: 'heel_raise_double',
          caption: 'Double-leg heel raises: rise straight up, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Is a heel spur the same as plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'No. A heel spur is a bony growth on the underside of the heel bone. Plantar fasciitis is irritation of the plantar fascia, the thick band of tissue that runs from the heel to the toes. They often appear together, but a spur can exist without pain and plantar fasciitis can occur without a spur. The 2023 heel pain guideline treats them as separate findings.',
    },
    {
      q: 'Do heel spurs cause pain?',
      cites: [CITE.menzCoexistence],
      a: 'Most heel spurs do not cause pain. In a study of 530 people aged 50 and over with foot pain, a heel spur on its own was rare, and heel pain was linked to a spur together with a thickened plantar fascia (Menz and colleagues, 2019). In a separate study of 216 older adults, about 6 in 10 of those with a spur had no current or past heel pain (Menz and colleagues, 2008).',
    },
    {
      q: 'Can you have plantar fasciitis without a heel spur?',
      a: 'Yes. Many people with plantar fasciitis have no spur on X-ray. The pain comes from the irritated plantar fascia, not from bone. The 2023 guideline does not require imaging to diagnose plantar fasciitis when the clinical pattern is clear: first-step pain in the morning, tenderness at the heel and a tight calf.',
    },
    {
      q: 'Do heel spur exercises dissolve the spur?',
      cites: [CITE.guideline],
      a: 'No. Stretching and strengthening exercises do not dissolve a heel spur. They address the soft tissue around it, especially the plantar fascia and the calf muscles, which are usually what produces the pain. The spur itself rarely needs attention, and the guideline recommends the same exercises whether or not a spur is present.',
    },
    {
      q: 'Should I get an X-ray if I think I have a heel spur?',
      cites: [CITE.guideline],
      a: 'The 2023 guideline says imaging is usually not needed when the clinical exam points to plantar fasciitis. An X-ray can show a spur, but finding one does not change the exercise plan, and not finding one does not rule out plantar fasciitis. Imaging becomes useful when pain does not improve after several weeks or when a clinician suspects a stress fracture or nerve issue.',
    },
    {
      q: 'How common are heel spurs?',
      cites: [CITE.menzSpur],
      a: 'Prevalence depends on age. Earlier research cited in the Menz 2008 study reported 11 to 16% of the general population with a plantar calcaneal spur on X-ray. In a study of 216 people aged 62 to 94, 55% had at least one plantar spur (Menz and colleagues, 2008). Spurs become more common with age, higher BMI and osteoarthritis.',
    },
    {
      q: 'When does a heel spur need surgery?',
      cites: [CITE.latt],
      a: 'Almost never. The guideline does not recommend spur removal for plantar fasciitis. About 90% of people with plantar fasciitis improve with non-surgical care such as stretching, calf strengthening and load management (Latt and colleagues, 2020). When surgery is considered after months of failed conservative care, it usually involves releasing the plantar fascia, not removing the spur.',
    },
    {
      q: 'What happens if you keep walking on a heel spur?',
      cites: [CITE.menzSpur, CITE.guideline],
      a: 'Walking will not drive the spur into nearby tissue. Pain that flares with walking usually comes from the irritated plantar fascia next to the spur, not the bone itself. The 2023 guideline recommends adjusting load, like distance or pace, rather than stopping, if walking makes the heel worse the next morning.',
    },
    {
      q: 'Is it good to massage heel spurs?',
      cites: [CITE.guideline],
      a: 'Gentle massage around a heel spur can ease soft tissue tightness, but it does not change the bone itself. Rolling the sole with firm, not sharp, pressure may loosen the fascia and calf, the tissues that usually cause the pain. The guideline grades clinician manual therapy an A; self massage is comfort care, not a substitute for stretching.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall, which can indicate a plantar fascia tear rather than fasciitis',
      'you cannot put weight on the foot, or you are limping',
      'squeezing the sides of the heel reproduces the pain, which can point toward a stress fracture rather than a spur or fasciitis',
      'the pain comes with numbness, tingling or burning, which can suggest nerve entrapment',
      'the heel is red, warm or swollen, or you have a fever',
      'both heels hurt and morning stiffness lasts more than 30 minutes, especially if other joints are stiff or swollen',
      'pain keeps you awake at night or is present at rest, not just on weight bearing',
      'it has not improved after several weeks of stretching, calf work and lighter load',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Whether your X-ray shows a spur or not, the exercise approach is the same. Walkito builds a plan one week at a time around one goal. For heel pain, the first goal is morning pain at or under 1 out of 10 for 14 days in a row. Stretching starts on day one. Calf strength work is added once the first goal moves past settling pain into building capacity.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once the goal is met), a short test checks calf endurance, arch hold and balance, so you can track progress instead of guessing.',
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If you are unsure whether your heel pain is plantar fasciitis, a heel spur or something else, see a clinician first.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Plantar fasciitis vs heel spur',
  campaign: 'guide-pf-vs-heel-spur',
};
