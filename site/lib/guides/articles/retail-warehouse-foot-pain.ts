import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Foot pain for retail and warehouse workers (EN). Research 2026-10-17.
 * Main search "warehouse foot pain"; also "retail worker feet hurt",
 * "standing on concrete all day feet". Audience page modelled on nurses.ts;
 * the general standing page (/feet-hurt-standing-all-day/) and the nurses page
 * are linked, not repeated. Angle: hard floors, safety footwear, mats vs
 * insoles, the guideline's "work-related weight-bearing" risk factor, and a
 * break-time routine.
 * Honest gaps: no peer-reviewed study we found counts steps per shift for
 * warehouse or retail work (industry blogs quote "up to 12 miles" with no
 * source), and no study isolates concrete itself as a cause of foot pain.
 * NEW citations (placeholders, to add to lib/citations.ts):
 *   NEW_speedCushioning   Speed 2018 Appl Ergon, PMID 29866322
 *   NEW_kingMats          King 2002 Appl Ergon, PMID 12236657
 *   NEW_wiggermannMats    Wiggermann 2013 Hum Factors, PMID 23964416
 *   NEW_arceriSafety      Arceri 2024 (systematic review), PMID 39120225
 *   NEW_mancusoSafety     Mancuso 2017 G Ital Med Lav Ergon, PMID 29916607
 *   NEW_irvingHeelPain    Irving 2006 J Sci Med Sport, PMID 16584917
 * Doses match the heel pain guide (en.ts) and ex-ankle-rocks.ts.
 */

export const RETAIL_WAREHOUSE_EN: Guide = {
  lang: 'en',
  page: 'retailWarehouse',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Warehouse Foot Pain: Concrete Floors, Boots and Exercises',
  description:
    'Foot pain in warehouse and retail jobs: what studies say about concrete floors, safety boots, mats and insoles, plus 3-minute exercises for breaks.',
  h1: 'Foot pain for retail and warehouse workers: what helps on hard floors',
  lede:
    'Warehouse and retail feet hurt because hours of standing and walking on hard floors load the heel, arch and calf with little give underneath. Standing for most of the working day raised the odds of [plantar fasciitis](/plantar-fasciitis/) 3.6 times in one study (Riddle and colleagues, 2003). Calf and plantar fascia stretches carry the top grade, **A**, in the 2023 heel pain guideline, and a short version fits in about 3 minutes on a break. Mats and cushioned insoles help comfort, but the evidence for them is thinner (Speed and colleagues, 2018).',
  intro: [
    'This page is about the job itself: concrete and tile floors, safety boots, long shifts and short breaks. For standing pain in general, see [why do my feet hurt after standing all day](/feet-hurt-standing-all-day/). If you work on a hospital floor, [foot pain for nurses](/nurses-foot-pain/) covers 12-hour shifts and rotating schedules.',
  ],
  toc: true,
  takeaways: [
    'Spending most of the workday on your feet raised the odds of plantar fasciitis 3.6 times in a case-control study of 50 cases and 100 controls. Very limited ankle flexibility, usually from a tight calf, raised them 23.3 times (Riddle and colleagues, 2003).',
    'The 2023 heel pain guideline keeps a grade **B** recommendation: clinicians should check for work-related weight-bearing, particularly on surfaces with poor shock absorption, as a risk factor for heel pain (Koc and colleagues, 2023).',
    'A review of 10 studies found moderate evidence that mats and cushioned insoles reduce discomfort and fatigue in standing workers, and only limited evidence that insoles beat mats (Speed and colleagues, 2018).',
    'In a review of 7 studies of workers in safety footwear, the 4 that measured pain found foot pain in 42.3% to 60.8% of workers, with heat, sweating, weight and stiffness the main complaints (Arceri and colleagues, 2024).',
    'Calf and plantar fascia stretching get the guideline’s top grade, **A**, and strength work a **B**. Insoles on their own get a **B against** for heel pain (Koc and colleagues, 2023).',
  ],
  sections: [
    {
      h2: 'Why do your feet hurt after a warehouse or retail shift?',
      keyFact: 'Spending most of the workday weight-bearing raised the odds of plantar fasciitis 3.6 times in a matched case-control study (Riddle and colleagues, 2003).',
      paragraphs: [
        'Retail and warehouse work mixes two loads. On a till or a packing station you stand still for long stretches. On the floor or picking orders you walk, carry, push carts and turn. Both keep weight on the heel and arch for most of the shift, and break times are set by the rota, not by when your feet need them.',
        'A 2003 case-control study of 50 people with plantar fasciitis and 100 matched controls found that spending most of the workday weight-bearing raised the odds of plantar fasciitis 3.6 times. Reduced ankle flexibility, a [tight calf](/tight-calves/), was the strongest factor, at 23.3 times the odds. **A tight calf is something you can work on. The job usually is not.**',
        'A systematic review of 16 studies on chronic heel pain found some evidence of a link with prolonged standing, alongside higher body weight, age and reduced ankle flexibility. The authors called for studies that follow people over time, so this shows an association, not proof that standing causes heel pain (Irving and colleagues, 2006).',
        'How far do you walk? We found no published study that counts steps per shift for warehouse or retail workers. Figures like "12 miles a shift" appear on industry blogs without a study behind them. The closest measured number is from nurses: an average of 9,360 steps per shift in a tracker study (Chang and Cho, 2022).',
      ],
      cites: [CITE.riddle, CITE.irvingHeelPain, CITE.changCho],
    },
    {
      h2: 'Is concrete really worse for your feet?',
      keyFact: 'The 2023 heel pain guideline names work-related weight-bearing, particularly under conditions with poor shock absorption, as a risk factor (grade B, Koc and colleagues, 2023).',
      paragraphs: [
        'Probably, but nobody has measured concrete on its own. The 2023 heel pain guideline keeps a recommendation from 2014, graded **B**: clinicians should assess work-related weight-bearing activities, particularly under conditions with poor shock absorption, as a risk factor for heel pain and plantar fasciitis. A bare concrete floor is about as low in shock absorption as a work surface gets.',
        'What has been tested is the opposite: adding something soft. In lab and workplace studies, standing on a mat or wearing cushioned insoles reduced discomfort compared with a hard floor (Speed and colleagues, 2018). That fits the idea that the hard surface adds to the load, without proving concrete causes any one condition.',
        'Some heel pain is worse on hard floors for a different reason. If the ache sits deep in the centre of the heel and is clearly worse barefoot on tile or concrete, [heel fat pad syndrome](/heel-fat-pad-syndrome/) is worth reading about.',
      ],
      cites: [CITE.guideline, CITE.speedCushioning],
    },
    {
      h2: 'Do anti-fatigue mats or insoles help more?',
      keyFact: 'A 10-study review found moderate evidence that cushioning reduces discomfort in standing workers, and limited evidence that insoles beat mats (Speed and colleagues, 2018).',
      paragraphs: [
        '**Both help comfort, with no clear winner, and neither has strong evidence.** A 2018 systematic review found 10 studies of mats and cushioned insoles in people who stand for work. It rated the evidence moderate that cushioning reduces discomfort and fatigue, and limited that insoles do better than mats. The studies differed a lot in design, and the authors called for larger trials in real workplaces.',
        'In one workplace study, assembly workers spent one week of 8-hour days in each of four conditions: hard floor, a mat, insoles, and insoles on a mat. The mat, the insoles and the combination were all more comfortable than the hard floor, and there was no clear difference between them (King, 2002).',
        'In a 4-hour lab test, three of four commercial anti-fatigue mats reduced discomfort compared with a hard floor, but no mat beat the others (Wiggermann and Keyserling, 2013). So no one mat has been shown to be better than the others.',
        'The practical split: **a mat only helps where you stand still**, such as a till, a pack bench or a workstation. If you walk the floor or pick orders, the cushioning has to travel with you, in the shoe. For heel pain specifically, the 2023 guideline grades insoles on their own **B against**, so do not rely on them alone. [Insoles or exercises](/insoles-vs-exercises/) compares the two, and [best insoles for plantar fasciitis](/best-insoles-for-plantar-fasciitis/) covers the types.',
      ],
      cites: [CITE.speedCushioning, CITE.kingMats, CITE.wiggermannMats, CITE.guideline],
    },
    {
      h2: 'Do safety boots cause foot pain?',
      keyFact: 'In a review of 7 studies of workers in safety footwear, the 4 that measured pain found foot pain in 42.3% to 60.8% of workers (Arceri and colleagues, 2024).',
      paragraphs: [
        'Safety boots protect your feet, and they also come with complaints. A 2024 systematic review found 7 studies of workers in safety footwear. Every study reported discomfort and pain, and the 4 studies that measured pain found foot pain in 42.3% to 60.8% of workers. The main complaints were heat, sweating, weight and a stiff sole, mostly around the toes and toecap.',
        'In a study of 509 workers in 12 metal-working factories, all wearing safety footwear every day, 81% had at least one foot problem. Their most common complaints about the shoes were hot and wet conditions inside (42%), weight (27.5%) and fit (22.9%) (Mancuso and colleagues, 2017).',
        'These are surveys, so they cannot say the boots cause the pain: long hours on hard floors would hurt in any shoe. The review’s suggestions are practical:',
        {
          list: [
            'Get the right size and width, and check whether your employer’s approved models come in wide fits.',
            'Choose the lightest boot that meets your site’s safety rating.',
            'Look for breathable materials if your feet get hot and wet.',
            'Most safety boots have a removable insole, so a cushioned insert can go in if it does not make the boot too tight.',
          ],
        },
        'Never swap a required safety boot for a trainer because your feet hurt. Talk to your supervisor or safety officer about other approved models.',
      ],
      cites: [CITE.arceriSafety, CITE.mancusoSafety],
    },
    {
      h2: 'What exercises can you do on a break?',
      keyFact: 'The 2023 heel pain guideline grades calf and plantar fascia stretching A, its top grade, and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'The exercises below need no equipment and no floor space beyond a wall, a rack or a counter edge. The first three work standing up in a break room or a stock aisle. The rest are for after the shift, sitting down.',
        'The guideline grades calf and plantar fascia stretching **A** and strength work **B**. Those grades are for plantar fasciitis, but these are the same tissues a shift on hard floors loads. Stop for the day if any exercise pushes your pain to 6 out of 10 or more.',
      ],
      exercises: [
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. A tight calf was the strongest risk factor in a 2003 case-control study.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'On a break or after a shift',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall, a rack upright or a counter. Keep the back leg straight, the back heel flat on the floor and the hips forward. Works in safety boots too.',
          stop: 'Sharp pain in the heel or calf',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'On a break or after a shift',
          feel: 'A stretch near the heel',
          how: 'Take the same position, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Sharp pain in the heel or calf',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Ankle rocks',
          evidence: { level: 'early', why: 'Targets ankle flexibility, the strongest risk factor in a 2003 case-control study. Not tested on its own in a heel pain trial.' },
          dose: '2 sets of 15, each leg',
          often: 'On a break',
          feel: 'A stretch at the front of the ankle and a pull in the lower calf',
          how: 'Split stance, hands on a wall. Rock the front knee forward over the toes while the heel stays flat. Slow, about two seconds each way. More in [ankle rocks](/exercises/ankle-rocks/).',
          stop: 'Pain reaches 6 out of 10',
          image: 'Exercise: ankle rocks',
          media: 'ankle_rocks',
          caption: 'Ankle rocks: knee travels forward over the toes, heel stays flat',
          alt: 'A figure in a split stance rocking the front knee forward over the toes, the ankle highlighted',
        },
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'After a shift, and before your first steps in the morning',
          feel: 'A stretch along the arch',
          how: 'Sit down, boots off, and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. If your first steps out of bed hurt, do one on the edge of the bed before your foot touches the floor.',
          stop: 'Sharp heel pain',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Days off, or after a lighter shift',
          feel: 'The calves working together',
          how: 'Stand on both feet, hold a wall, rise straight up over the big toes, then lower slowly. Strength work fits best on days off, so the calf has time to recover before the next shift. More in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Foot roll',
          evidence: { level: 'early', why: 'Not tested in the studies on this page. It is here for comfort after a shift.' },
          dose: '1 minute',
          often: 'After a shift',
          feel: 'Firm pressure under the foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball, with firm pressure. If you are wincing, ease off.',
          stop: 'Pain that stays after you stop',
          image: 'Exercise: foot roll',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'How do you fit it into a shift: 3, 5 or 10 minutes?',
      paragraphs: [
        'Most retail and warehouse breaks are short and set by the rota. A laboratory review found that symptoms from uninterrupted standing became clinically relevant after about 42 minutes in people prone to standing pain, and its authors suggested not standing still for more than about 40 minutes (Coenen and colleagues, 2017). You often cannot choose when to sit, but you can change position: walk to the end of the aisle, shift your weight, or do one calf stretch at a rack.',
        {
          list: [
            '**3 minutes, on a break:** the calf stretch, 2 holds of 30 seconds each leg, plus one 30-second soleus hold each leg. That targets the tight calf, the strongest risk factor in the 2003 study.',
            '**5 minutes, on a longer break or at the end of the shift:** add ankle rocks, or the plantar fascia stretch once your boots are off.',
            '**10 minutes, on a day off:** add heel raises (3 sets of 10) and the foot roll. That covers the strength side, graded **B**.',
          ],
        },
        '**Doing a short routine on most shifts matters more than a long one you skip.** Tie it to something you already do, such as the first break or taking your boots off.',
      ],
      cites: [CITE.coenen, CITE.riddle, CITE.guideline],
    },
    {
      h2: 'What the evidence says about each option',
      paragraphs: [
        'Most workplace advice mixes strong and weak evidence. This table puts the main options side by side, with the best study we found for each.',
      ],
      table: {
        caption: 'Options for foot pain in standing and walking jobs',
        head: ['Option', 'Best evidence', 'Finding', 'Strength'],
        rows: [
          ['Calf and fascia stretches', '2023 guideline', 'Grade A for heel pain', 'Strong'],
          ['Calf strength work', '2023 guideline', 'Grade B for heel pain', 'Moderate'],
          ['Anti-fatigue mat', 'Review of 10 studies', 'Less discomfort', 'Moderate, comfort only'],
          ['Cushioned insoles', 'Same review', 'Less discomfort, similar to a mat', 'Moderate, comfort only'],
          ['Insoles alone for heel pain', '2023 guideline', 'B against', 'Leans against'],
          ['Compression stockings', 'Trial of 40 guards', 'No rise in discomfort', 'One small trial'],
          ['Better-fitting safety boots', 'Review of 7 studies', 'Fit, weight, heat matter', 'Surveys only'],
        ],
      },
      after: [
        'Compression stockings are covered in detail in [why do my feet hurt after standing all day](/feet-hurt-standing-all-day/). The trial was in male security guards on long standing shifts, not warehouse workers (Garcia and colleagues, 2023).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning, CITE.garcia, CITE.arceriSafety],
    },
    {
      h2: 'Could it be plantar fasciitis or something else?',
      paragraphs: [
        'A general ache and tired feet after a long shift usually settle with a night’s rest. Plantar fasciitis has a clearer pattern: sharp pain near the inside of the heel, worst on the first steps in the morning or after sitting. If that sounds like you, see [heel pain in the morning](/heel-pain-in-the-morning/) and [plantar fasciitis exercises](/plantar-fasciitis-exercises/). About 90% of people with plantar fasciitis get better with non-surgical care, though it can take three to six months (Latt and colleagues, 2020).',
        'Other patterns point elsewhere. A burning ache under the ball of the foot points to [ball of foot pain](/ball-of-foot-pain/). An ache along the arch that gets worse through the shift is covered in [arch pain](/arch-pain/). Pain on top of the foot can come from boots laced or pressing too tightly; see [top of foot pain](/top-of-foot-pain/).',
        'Pain in one small spot on a bone that gets worse the more you walk can be a stress fracture, especially after a jump in hours or a new job with more walking. **That needs a clinician, not more exercise.**',
      ],
      cites: [CITE.latt, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'Why do my feet hurt so much working in a warehouse?',
      cites: [CITE.riddle, CITE.guideline],
      a: 'Long hours of standing and walking on hard floors keep load on the heel, arch and calf for most of the shift. Spending most of the workday on your feet raised the odds of plantar fasciitis 3.6 times in one study, and the 2023 heel pain guideline lists work-related weight-bearing on poorly cushioned surfaces as a risk factor.',
    },
    {
      q: 'How many steps does a warehouse worker walk in a shift?',
      cites: [CITE.changCho],
      a: 'We found no published study that counts steps for warehouse or retail shifts. Figures like 12 miles a shift come from industry blogs without a study behind them. The closest measured figure is from hospital nurses, who averaged 9,360 steps per shift in a tracker study. Your own phone or watch is the best guide to your job.',
    },
    {
      q: 'Do anti-fatigue mats actually work?',
      cites: [CITE.speedCushioning, CITE.wiggermannMats],
      a: 'They reduce discomfort for people who stand in one place, but the evidence is moderate, not strong. A review of 10 studies found cushioning helps standing workers. In a 4-hour lab test, three of four mats beat a hard floor, and no mat beat the others. A mat only helps where you stand still.',
    },
    {
      q: 'Are insoles or a mat better for standing on concrete?',
      cites: [CITE.kingMats, CITE.speedCushioning],
      a: 'About the same for comfort. In a workplace study, assembly workers found a mat, insoles and both together all more comfortable than a hard floor, with no clear difference between them. A review rated the evidence that insoles beat mats as limited. If you walk around, insoles travel with you and a mat does not.',
    },
    {
      q: 'Can safety boots cause plantar fasciitis?',
      cites: [CITE.arceriSafety, CITE.guideline],
      a: 'No study shows safety boots cause plantar fasciitis. A review of 7 studies of workers in safety footwear found foot pain in 42.3% to 60.8% of workers in the 4 that measured it, with heat, weight and stiffness the main complaints. Hours on hard floors matter too, whatever the boot. A good fit and the lightest approved boot are reasonable first steps.',
    },
    {
      q: 'What stretches can I do on a break at work?',
      cites: [CITE.guideline],
      a: 'The calf stretch and the soleus stretch work standing up against a wall or rack, in work boots: two holds of 30 seconds each, each leg, about 4 minutes for both stretches. The 2023 heel pain guideline grades calf stretching A. Save the plantar fascia stretch and heel raises for after the shift or days off.',
    },
    {
      q: 'Is it normal for my feet to hurt after a retail shift?',
      cites: [CITE.waters],
      a: 'Tired, aching feet after a long standing shift are common, and a 2015 review linked prolonged standing at work with discomfort, fatigue and leg pain across many jobs. Common does not mean you should ignore it. Pain that is sharp, lasts into your days off or is worst on your first steps in the morning is worth acting on.',
    },
    {
      q: 'Can I keep working with plantar fasciitis in a standing job?',
      cites: [CITE.latt, CITE.guideline],
      a: 'Many people do, with changes. Short stretches on breaks, better-fitting boots and cushioning where you stand ease the load, and about 90% of people with plantar fasciitis get better with non-surgical care, though it can take three to six months. If pain is getting worse despite this, see a clinician.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain started with a fall, a dropped load or a twist at work',
      'you cannot put weight on the foot, or you are limping',
      'pain sits in one small spot on a bone and gets worse with walking, which can be a stress fracture',
      'the foot is numb, tingling or burning, or feels cold',
      'the foot or heel is red, warm or swollen, or you have a fever',
      'one calf or leg is suddenly painful and swollen',
      'you have diabetes or reduced feeling in your feet, and a boot has rubbed a sore or blister',
      'pain wakes you at night or keeps getting worse after several weeks of the changes on this page',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You do not have to work out the order, the doses or when to move to a harder version. [Walkito](/program/) builds the plan from your answers and adjusts it to how your feet feel each day, so a bad morning after a long shift means a lighter session.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes, so it fits around shifts and days off. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['standing', 'nurses', 'heelPainAfterWalking'],
  crumb: 'Retail and warehouse foot pain',
  campaign: 'guide-retail-warehouse-foot-pain',
};
