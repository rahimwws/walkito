import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Plantar fasciitis vs Achilles tendonitis (EN). Research 2026-10-18.
 * Main search: "plantar fasciitis vs achilles tendonitis"; secondary: "heel pain or achilles".
 * Top results (treatmyachilles.com, princetonmedicine.com, straitspodiatry.com) share: anatomy of
 * both, where it hurts, when it hurts, a short self-check, treatment in general terms, "what if you
 * have both". None gives a side-by-side table with study numbers or exercise doses per condition.
 * This page adds both. No study counts how often the two occur together in the general population;
 * the page says so and uses Stecco 2013 (MRI, 52 people) as the only direct data.
 * Existing keys reused: guideline, achillesGuideline, riddle, digiovanni2003, rathleff, jonsson,
 * silbernagel, latt, chooRearfoot, tuHeelPain.
 * NEW (placeholders, to be added to lib/citations.ts):
 *   NEW_steccoPfAchilles  Stecco 2013, J Anat, doi 10.1111/joa.12111, PMID 24028383
 *   NEW_carlsonWindlass   Carlson 2000, Foot Ankle Int, doi 10.1177/107110070002100104, PMID 10710257
 *   NEW_deJongeIncidence  de Jonge 2011, Br J Sports Med, doi 10.1136/bjsports-2011-090342, PMID 21926076
 * Doses match the heel pain guide (en.ts) and the Achilles guide (achilles.ts).
 */

export const PF_VS_ACHILLES_EN: Guide = {
  lang: 'en',
  page: 'pfVsAchilles',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Plantar Fasciitis vs Achilles Tendonitis: How to Tell',
  description:
    'Plantar fasciitis or Achilles tendonitis? Where it hurts, when it hurts, a side-by-side table, which exercises suit each, and what to do if you have both.',
  h1: 'Plantar fasciitis vs Achilles tendonitis: how to tell them apart',
  lede:
    'The quickest way to tell them apart is where it hurts. [Plantar fasciitis](/plantar-fasciitis/) hurts under the heel, worst with the first steps in the morning (Koc and colleagues, 2023). Achilles tendonitis hurts at the back of the heel or in the tendon above it, usually 2 to 6 centimetres above the heel bone (Chimenti and colleagues, 2024). Both respond to exercise, but the exercises are not the same.',
  intro: [
    'This page is the side-by-side comparison. It does not diagnose you, and some heel pain is neither of the two. For the full exercise programs, see [plantar fasciitis exercises](/plantar-fasciitis-exercises/) and [Achilles tendonitis exercises](/achilles-tendonitis-exercises/). If a bony bump at the back of the heel is part of the picture, see [Haglund’s deformity](/haglunds-deformity/).',
  ],
  takeaways: [
    'Plantar fasciitis pain sits under the heel, on the inner side, and is typically worst with the first steps after sleep or sitting (Koc and colleagues, 2023).',
    'Midportion Achilles tendinopathy hurts in the tendon itself, usually 2 to 6 centimetres above the heel bone. Pain right where the tendon meets the bone is the insertional type (Chimenti and colleagues, 2024).',
    'The 2023 heel pain guideline grades plantar fascia and calf stretching **A** and strength work **B**. The 2024 Achilles guideline grades tendon-loading exercise **A** (Koc and colleagues, 2023; Chimenti and colleagues, 2024).',
    'In a trial of 101 people with chronic heel pain, a plantar fascia stretch beat a calf stretch alone at 8 weeks (DiGiovanni and colleagues, 2003). For the Achilles, the guideline’s top grade goes to loading the tendon, not to stretching (Chimenti and colleagues, 2024).',
    'The two are connected: in 52 MRI scans, people with Achilles changes had a thicker plantar fascia, and 5 of 27 passed the usual threshold for plantar fasciitis (Stecco and colleagues, 2013).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Where does it hurt: under the heel or at the back?',
      figure: { id: 'heel-side', caption: 'Plantar fasciitis hurts under the heel. Achilles pain sits at the back of the heel or in the tendon above it.', alt: 'Inner side view of a foot showing the heel bone, the plantar fascia under the arch and the Achilles tendon at the back, with a red area under the heel.' },
      keyFact: 'Midportion Achilles pain is usually felt 2 to 6 centimetres above the heel bone, while plantar fasciitis pain sits under the inner heel (Chimenti and colleagues, 2024; Koc and colleagues, 2023).',
      paragraphs: [
        '**Location is the clearest difference.** The plantar fascia is the thick band under your foot that runs from the heel bone to the toes. Plantar fasciitis hurts where that band attaches, under the heel and toward the inner side. Pressing there with a thumb is usually sore (Koc and colleagues, 2023).',
        'The Achilles tendon joins the calf muscles to the back of the heel bone. There are two types of Achilles pain, and the spot tells them apart (Chimenti and colleagues, 2024; Jonsson and colleagues, 2008):',
        {
          list: [
            '**Midportion:** pain and often a thicker, tender tendon 2 to 6 centimetres above the heel bone. You can usually pinch the sore spot between finger and thumb.',
            '**Insertional:** pain right where the tendon meets the back of the heel bone, often worse when shoes press there.',
          ],
        },
        'Pain under the heel that spreads to the sides, burns or tingles, or comes with numbness points to other causes, such as a nerve, a stress fracture or the heel fat pad (Tu, 2018). [Heel pain at night](/heel-pain-at-night/) covers those.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.jonsson, CITE.tuHeelPain],
    },
    {
      h2: 'When does it hurt: first steps or during activity?',
      paragraphs: [
        '**Plantar fasciitis is a first-steps pain.** The guideline describes heel pain that is most noticeable with the first steps in the morning or after sitting, often easing as you walk, and coming back after long periods on your feet (Koc and colleagues, 2023). [Heel pain in the morning](/heel-pain-in-the-morning/) explains that pattern.',
        '**Achilles tendinopathy is a loading pain.** The tendon can be stiff in the morning too, which is why the two get mixed up. The difference is what makes it worse during the day: loading activities such as running and jumping, and the pain tends to follow how much you did (Chimenti and colleagues, 2024). Hills and fast push-offs load the tendon harder still.',
        'So both can hurt in the morning. Ask yourself where, not only when: a stiff, sore band at the back of the ankle points to the Achilles, a stab under the heel points to the plantar fascia.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Plantar fasciitis vs Achilles tendonitis: the side-by-side table',
      paragraphs: [
        'The table sums up the typical picture. Many people do not fit one column neatly, and only a clinician’s exam can tell you which you have.',
      ],
      table: {
        caption: 'Plantar fasciitis vs Achilles tendinopathy at a glance',
        head: ['', 'Plantar fasciitis', 'Achilles tendinopathy'],
        rows: [
          ['Where', 'Under the heel, inner side', 'Back of the heel or 2 to 6 cm above it'],
          ['Worst', 'First steps after rest', 'Push-off, running, hills'],
          ['Sore to press', 'Under the heel', 'Tendon pinched at the back'],
          ['Linked to', 'Stiff ankle, weight, standing', 'Sport in 35% of cases'],
          ['Top-graded exercise', 'Stretching, grade A', 'Tendon loading, grade A'],
          ['Stretch the calf?', 'Yes', 'Gently, if at all'],
          ['Guideline', 'Koc 2023', 'Chimenti 2024'],
        ],
      },
      after: [
        'The risk factors come from different studies. In plantar fasciitis, people with 0 degrees of ankle bend or less had 23.3 times the odds of the condition, and a body mass index over 30 and standing most of the workday also raised the odds (Riddle and colleagues, 2003). In a Dutch study of 57,725 people registered with a family doctor, midportion Achilles tendinopathy was diagnosed in 2.35 per 1,000 adults aged 21 to 60 in one year, and 35% of cases were linked to sport (de Jonge and colleagues, 2011).',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.riddle, CITE.deJongeIncidence],
    },
    {
      h2: 'Which exercises suit plantar fasciitis?',
      keyFact: 'In a trial of 101 people with chronic heel pain, a plantar fascia stretch gave better results at 8 weeks than calf stretching alone (DiGiovanni and colleagues, 2003).',
      paragraphs: [
        '**For plantar fasciitis, stretching comes first.** The 2023 guideline grades plantar fascia and calf stretches **A**, its top grade, and strength work **B** (Koc and colleagues, 2023).',
        'The stretch that targets the arch matters. In a trial of 101 people, the group doing the plantar fascia stretch reported better outcomes at 8 weeks than the group doing calf stretching alone (DiGiovanni and colleagues, 2003). For strength, a 2015 trial of 48 people used slow heel raises with a towel under the toes, which eased pain faster than stretching alone at three months, though by twelve months both groups were about even (Rathleff and colleagues, 2015).',
        'These are the starting doses from the [plantar fasciitis exercises](/plantar-fasciitis-exercises/) guide.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most sessions',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor.',
          stop: 'Sharp heel pain that does not ease when you let go',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward. A tight calf pulls on the heel all day, so this stretch matters even though you feel it higher up.',
          stop: 'A sharp pull at the back of the heel bone',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Heel raises with a towel',
          evidence: { level: 'moderate', why: 'This is the routine from a 48-person trial, and the 2023 guideline grades strength work B.' },
          dose: '4 sets of 10, each leg, with added weight',
          often: 'Strength days',
          feel: 'Hard work in the calf',
          how: 'Stand on one foot on a step, with a rolled towel under your toes. Take three seconds to rise, hold for two at the top, and take three seconds to lower. At this level Walkito adds weight, such as a backpack. The towel is what makes this exercise work the plantar fascia and not just the calf.',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: heel raises with a towel',
          media: 'heel_raise_towel',
          caption: 'Heel raises with a towel: three seconds up, two at the top, three down',
          alt: 'A figure rising onto the toes on a step with a rolled towel, the calves highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Which exercises suit Achilles tendonitis?',
      keyFact: 'In a pilot study of 27 people with insertional Achilles pain, heel drops kept at floor level gave good results in 67% (Jonsson and colleagues, 2008).',
      paragraphs: [
        '**For the Achilles, loading comes first, not stretching.** The 2024 guideline grades tendon-loading exercise **A**: heel raises, holds and slow lowering that make the tendon work (Chimenti and colleagues, 2024). Stretching was not the core of any of the tested programs.',
        'Some pain is allowed. In a trial of 38 people, pain up to about 5 out of 10 during loading was fine as long as it settled by the next morning and did not build week to week, and that group did as well at twelve months as the group that rested first (Silbernagel and colleagues, 2007).',
        'If the pain is right at the heel bone (insertional), keep every heel raise and heel drop at floor level, and go easy on calf stretches. Dropping the heel below a step presses the tendon against the bone. In a pilot study of 27 people, floor-level heel drops gave good results in 67% (Jonsson and colleagues, 2008). More detail in [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
      ],
      exercises: [
        {
          name: 'Heel raise hold',
          evidence: { level: 'moderate', why: 'The 2024 Achilles guideline includes isometric loading. No Achilles trial has tested holds on their own.' },
          dose: '3 holds of 20 seconds, both feet',
          often: 'Strength days, or most days while the tendon is irritable',
          feel: 'The calves working to stay still',
          how: 'Rise onto your toes on both feet, then stay still at the top. Don’t sink back down. Holding at the top loads the tendon without the bounce.',
          stop: 'Pain above 5 out of 10 that does not settle by the next morning',
          image: 'Exercise: heel raise hold',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay still at the top',
          alt: 'A figure holding a raised position on the toes of both feet, the calves highlighted',
        },
        {
          name: 'Eccentric heel drops (straight knee)',
          evidence: { level: 'strong', why: 'The original Alfredson protocol for midportion pain; the 2024 guideline grades exercise A.' },
          dose: '3 sets of 10, each leg',
          often: 'Strength days',
          feel: 'Hard work in the calf during the lowering, not a stretch at the bottom',
          how: 'Stand on a step edge. Rise on both feet, shift to the painful leg, and lower slowly over three seconds. Use both feet to come back up. For pain right at the heel bone, do this on the flat floor and do not let the heel sink below the step.',
          stop: 'Pain above 5 out of 10 that does not settle by the next morning, or worse week to week',
          image: 'Exercise: eccentric heel drops',
          media: 'heel_drop_straight',
          caption: 'Eccentric heel drop: up on both feet, down slowly on one',
          alt: 'A figure on a step lowering one heel below the step edge with a straight knee, the calf and Achilles highlighted',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Can you have plantar fasciitis and Achilles tendonitis at the same time?',
      keyFact: 'In 52 MRI scans, the plantar fascia was 3.43 mm thick in people with Achilles changes against 2.09 mm in people without (Stecco and colleagues, 2013).',
      paragraphs: [
        '**Yes, and the two are linked.** In a study of 52 MRI scans of people with foot or ankle pain, the 27 with Achilles changes had a thicker plantar fascia, 3.43 mm on average against 2.09 mm. Five of the 27 had a plantar fascia over 4.5 mm, a common threshold for plantar fasciitis. None of the other 25 went over 4 mm (Stecco and colleagues, 2013).',
        'The same study found the plantar fascia connects to the sheath around the Achilles through the covering of the heel bone. A cadaver study showed that pulling on the Achilles strains the plantar fascia, and more so when the toes are bent up (Carlson and colleagues, 2000). A tight or overloaded calf can therefore pull on both.',
        'No study has counted how often people have both conditions together, so there is no reliable figure. No guideline covers having both. An approach that fits both guidelines: calf strength work that suits the tendon, plus the plantar fascia stretch, which works the arch, not the Achilles. Keep heel drops at floor level if the back of the heel bone hurts.',
      ],
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass, CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'What else causes heel pain that looks like these two?',
      paragraphs: [
        'Several problems sit close by and can feel similar (Choo and colleagues, 2020; Tu, 2018):',
        {
          list: [
            'A bony bump at the back of the heel with a sore, swollen area at the shoe line: [Haglund’s deformity](/haglunds-deformity/) or retrocalcaneal bursitis, often together with insertional Achilles pain.',
            'A heel spur on an X-ray: common, and usually not the cause of the pain. See [plantar fasciitis vs heel spur](/plantar-fasciitis-vs-heel-spur/).',
            'A deep bruise-like ache in the middle of the heel pad, worse on hard floors: [heel fat pad syndrome](/heel-fat-pad-syndrome/).',
            'Pain on both sides of the heel when you squeeze it, after a jump in walking or running: possible stress fracture, which needs a clinician.',
            'Burning, tingling or numbness: possibly a trapped nerve.',
          ],
        },
      ],
      cites: [CITE.chooRearfoot, CITE.tuHeelPain],
    },
    {
      h2: 'How long does each take to get better?',
      paragraphs: [
        'For plantar fasciitis, about 90% of people get better with non-surgical care, though it often takes months (Latt and colleagues, 2020). [How long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/) has the detail.',
        'For Achilles tendinopathy, the core loading trials ran for about three months and followed people to twelve months. The 2024 guideline notes function can start to improve within 2 weeks, but fuller recovery takes longer (Chimenti and colleagues, 2024). Insertional pain tends to take longer than midportion pain.',
        'No study has compared recovery time for the two head to head.',
      ],
      cites: [CITE.latt, CITE.achillesGuideline],
    },
  ],
  faq: [
    {
      q: 'How do I know if my heel pain is plantar fasciitis or Achilles tendonitis?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Start with where it hurts. Plantar fasciitis hurts under the heel, toward the inner side, and is worst with the first steps after rest. Achilles tendonitis hurts at the back of the heel or in the tendon 2 to 6 centimetres above it, and gets worse with push-off, running and hills. A clinician can confirm which it is.',
    },
    {
      q: 'Can plantar fasciitis cause Achilles pain?',
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass],
      a: 'They are linked, but no study shows one causes the other. In 52 MRI scans, people with Achilles changes had a thicker plantar fascia, 3.43 mm against 2.09 mm. A cadaver study showed that tension in the Achilles strains the plantar fascia. A tight, overloaded calf may load both.',
    },
    {
      q: 'Is Achilles tendonitis worse in the morning like plantar fasciitis?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'It can be. Both can feel stiff and sore with the first steps of the day, which is why they get mixed up. Plantar fasciitis is a stab under the heel that eases as you walk. Achilles pain is at the back of the ankle and tends to build with running, jumping, hills and stairs.',
    },
    {
      q: 'Should I stretch my calf for Achilles tendonitis?',
      cites: [CITE.achillesGuideline, CITE.jonsson],
      a: 'Gently, if at all. The 2024 Achilles guideline puts tendon-loading exercise first, graded A, and stretching was not the core of the tested programs. If your pain is right at the heel bone, deep calf stretches and heel drops below a step press the tendon against the bone, so keep them gentle and at floor level.',
    },
    {
      q: 'Are the exercises for plantar fasciitis and Achilles tendonitis the same?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'They overlap but are not the same. Plantar fasciitis starts with plantar fascia and calf stretches, graded A, plus heel raises, graded B. Achilles tendonitis starts with loading: heel raise holds, heel raises and slow heel drops, graded A. Calf strength work fits both.',
    },
    {
      q: 'Can you have plantar fasciitis and Achilles tendonitis together?',
      cites: [CITE.steccoPfAchilles],
      a: 'Yes. In one MRI study of 52 people with foot or ankle pain, 5 of the 27 with Achilles changes also had a plantar fascia thick enough to meet a common threshold for plantar fasciitis. No study has counted how often the two happen together in the general population.',
    },
    {
      q: 'Is pain at the back of the heel plantar fasciitis?',
      cites: [CITE.guideline, CITE.chooRearfoot],
      a: 'Usually not. Plantar fasciitis hurts under the heel. Pain at the back of the heel is more often Achilles tendinopathy, retrocalcaneal bursitis or Haglund’s deformity, a bony bump where the tendon attaches. A sudden pop at the back of the heel needs a clinician the same day.',
    },
    {
      q: 'Does a heel spur mean plantar fasciitis or Achilles tendonitis?',
      cites: [CITE.chooRearfoot],
      a: 'Neither on its own. A spur under the heel sits near the plantar fascia, and a spur at the back sits where the Achilles attaches, but spurs are common in people with no pain. The exam, not the X-ray alone, decides what is causing the pain.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you felt a sudden pop or snap at the back of the ankle, or it felt like being kicked there, and pushing off is now hard',
      'you cannot rise onto your toes on the painful side, or you feel a gap in the tendon',
      'you are taking or recently took a fluoroquinolone antibiotic, such as ciprofloxacin, and have new tendon pain',
      'the heel is red, hot and swollen, or you have a fever',
      'the heel hurts on both sides when squeezed, or hurts at night or at rest',
      'you feel burning, tingling or numbness in the heel or sole',
      'pain started after a fall or injury, or you cannot put weight on the foot',
      'pain keeps getting worse over weeks despite steady exercise',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app. You tell it where it hurts, under the heel or at the back, and it builds the plan from your answer: plantar fascia stretches and towel heel raises for heel pain, calf loading from holds to slow heel drops for Achilles pain.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it. Walkito does not diagnose, so if you are not sure which one you have, have a clinician check first.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['achilles', 'hubPlantarFasciitis', 'pfVsHeelSpur'],
  crumb: 'Plantar fasciitis vs Achilles',
  campaign: 'guide-plantar-fasciitis-vs-achilles-tendonitis',
};
