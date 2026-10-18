import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Flat feet test at home (EN). Research 2026-10-18.
 * Footprint validity: Hawes 1992 (115 men, footprints did not predict arch
 * height), Murley 2009 (91 young adults, arch index moderately matched X-ray),
 * Menz and Munteanu 2005 (95 people aged 62 to 94: navicular height r = 0.79
 * with X-ray, arch index r = 0.52 to 0.71, FPI r = 0.36 to 0.59),
 * Paecharoen 2023 (198 patients, 274 feet, footprint indices "fair" for flat
 * foot), Wearing 2004 (24 adults, arch index linked to body fat, r = 0.67).
 * Clinician measures: Redmond 2008 (FPI norms, 619 adults), Nielsen 2009
 * (navicular drop 3.6 to 8.1 mm), Evans 2003 (FPI moderate reliability, none
 * adequate in young children), Picciano 1993 (15 people, inexperienced testers,
 * navicular drop poor between testers), Zuil-Escobar 2018 (86 adults, trained
 * testers, ICC above 0.88).
 * Jack's test: named after Jack 1953. We found no study of its reliability in
 * adults; the page says so. Coalition: Mehdi 2024 (expert review, 1 to 13%).
 * Tibialis posterior: Deu 2022 (AFP review), Kohls-Gatzoulis 2009 (582 women,
 * 3.3%), Ross 2018. Heel raise counts live on /calf-raise-test/, not repeated.
 * Doses match the flat feet guide (en.ts, FLAT_FEET_EN / HEEL_PAIN_EN).
 */

export const FLAT_FEET_TEST_EN: Guide = {
  lang: 'en',
  page: 'flatFeetTest',
  mainSource: CITE.menzMunteanu,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Flat Feet Test at Home: 4 Simple Checks',
  description:
    'Four flat feet checks for home: wet footprint, sitting vs standing, tiptoe and big toe tests, single-leg heel raise, and what each can and cannot show.',
  h1: 'Flat feet test at home: 4 simple checks, and what they can and cannot tell you',
  lede:
    'You can check for flat feet at home in about five minutes: look at a wet footprint, compare your arch sitting and standing, rise on tiptoe or lift your big toe to see if the arch comes back, and try a single-leg heel raise. The footprint is the least exact of the four: in 95 older adults checked against X-rays, a footprint score matched the real arch height only moderately (Menz and Munteanu, 2005). The checks that matter most are whether the arch comes back and whether one side behaves differently.',
  intro: [
    'None of these checks is a diagnosis, and a low arch on its own is usually not a problem. This page shows how to do each check, what the research says about how far you can trust it, what a clinician measures instead, and the results that mean you should get your foot looked at. For what flat feet are and when they matter, start with [flat feet](/flat-feet/).',
  ],
  takeaways: [
    'A wet footprint is a rough guide. In 95 people aged 62 to 94, the footprint arch index matched X-ray arch height only moderately, while a ruler measure of the arch bone matched it closely (Menz and Munteanu, 2005).',
    'Body fat under the sole can fill in a footprint: in 24 adults with overweight or obesity, the footprint arch index rose with body fat percentage (Wearing and colleagues, 2004).',
    'If the arch comes back when you sit, rise on tiptoe or lift your big toe, the flat foot is flexible, the common kind that the exercise trials studied (Brijwasi and Borkar, 2023).',
    'Trouble rising onto one foot, pain behind the inner ankle and one arch that is getting flatter are signs of posterior tibial tendon dysfunction. In 582 women over 40, 3.3% had early-stage (stage I or II) symptoms and none had been diagnosed (Kohls-Gatzoulis and colleagues, 2009).',
    'Even clinicians’ measures vary: when two inexperienced testers measured navicular drop, they agreed poorly (Picciano and colleagues, 1993). In a later study of 86 young adults, the same measure was highly repeatable (Zuil-Escobar and colleagues, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'How can you tell if you have flat feet at home?',
      paragraphs: [
        '**Do four checks, in this order, barefoot on a hard floor.** The first two tell you how low your arch sits. The last two tell you whether it is flexible and whether the tendon that holds it up is doing its job. You need a towel, some water, a piece of brown paper or card, and a wall to hold.',
        'Do both feet every time. A difference between your left and right foot tells you more than either foot on its own, because most people’s feet are roughly alike, and a single flat foot is one of the warning signs at the end of this page.',
      ],
      table: {
        caption: 'The four home checks at a glance',
        head: ['Check', 'What you look at', 'What it can show', 'What it cannot show'],
        rows: [
          ['Wet footprint', 'How much of the sole prints', 'A low arch, roughly', 'Arch height exactly, or pain'],
          ['Sitting vs standing', 'Arch with and without weight', 'How much the arch drops', 'Why it drops'],
          ['Tiptoe and big toe', 'Whether the arch comes back', 'Flexible or stiff', 'The cause of a stiff foot'],
          ['Single-leg heel raise', 'Rising onto one foot', 'Weakness on one side', 'Which tendon is involved'],
        ],
      },
      after: [
        'Write down what you see, or take a photo of each foot from the inside and from behind. Repeating the same checks in a few months shows you whether anything has changed, which matters more than a single result.',
      ],
    },
    {
      h2: 'How do you do the wet foot test, and how accurate is it?',
      keyFact: 'In 95 people aged 62 to 94, the footprint arch index matched X-ray arch height only moderately (r = 0.52), against r = 0.79 for a measure of the arch bone’s height (Menz and Munteanu, 2005).',
      paragraphs: [
        '**How to do it:** wet the sole of one foot, step onto brown paper or dry card with your full weight, stand normally for a second, then step off. Do the other foot. Look at the middle of the print, the part between the heel and the ball of the foot:',
        {
          list: [
            '**A clear curve on the inner side**, with the middle band about half as wide as the front of the foot or less: a typical arch.',
            '**A wide middle band with little or no curve**, so the print looks like a slipper: a low arch.',
            '**Only the heel and the ball print**, joined by a thin band or not at all: a high arch. See [high arches](/high-arches-exercises/).',
          ],
        },
        '**What it can tell you:** roughly how much of your sole touches the ground. Researchers turn the same print into a number, the arch index, by comparing the middle third of the print with the whole print (Cavanagh and Rodgers, 1987).',
        '**What it cannot tell you:** your real arch height. In 95 people aged 62 to 94 checked against X-rays, the footprint index matched the height of the arch bone only moderately (Menz and Munteanu, 2005). A 1992 study of 115 men found footprints could not predict arch height (Hawes and colleagues, 1992), while a 2009 study of 91 young adults found a weak to moderate match with X-rays (Murley and colleagues, 2009). In 198 clinic patients, three footprint scores picked out a flat foot on X-ray with what the authors called fair accuracy (Paecharoen and colleagues, 2023).',
        'One reason is soft tissue. In a small pilot study of 24 adults with overweight or obesity, the walking footprint index rose with body fat percentage, so a fuller print can mean more padding under the arch, not a lower arch (Wearing and colleagues, 2004). A print also says nothing about pain, which is what decides whether a flat foot needs any attention.',
      ],
      cites: [CITE.menzMunteanu, CITE.cavanaghArchIndex, CITE.hawesFootprint, CITE.murleyArch, CITE.paecharoen, CITE.wearing],
    },
    {
      h2: 'Does your arch look different sitting and standing?',
      paragraphs: [
        '**Sit on a chair with your feet flat and relaxed, and look at the inner side of each foot.** Note the gap under the arch. Then stand up with your weight on both feet and look again, or have someone take a photo from the side at floor level.',
        'Some drop is normal: every arch lowers a little under your weight. In pooled data from 619 healthy adults, the average foot rested slightly rolled in, which the authors call the normal position (Redmond and colleagues, 2008). What you are looking for is a big change, an arch that is clearly there when you sit and gone when you stand.',
        '**Then look from behind.** Stand normally and have someone look at your heels at floor level. A heel that tilts outward, with the inner ankle bone bulging in, goes with a low arch. If one heel tilts more than the other, note it.',
        'This check tells you how much the arch drops, which is what a clinician measures more exactly as navicular drop (covered below). It does not tell you why: a lax foot you were born with and a tendon that is weakening can look the same standing still. The next two checks start to tell them apart.',
      ],
      cites: [CITE.redmondFpi],
    },
    {
      h2: 'How do you test for a flexible flat foot?',
      keyFact: 'Tarsal coalition, a bony or fibrous bridge between foot bones often linked to a stiff, painful flat foot in young adults, is reported in 1 to 13% of people (Mehdi and colleagues, 2024).',
      paragraphs: [
        'A flexible flat foot flattens under your weight but gets its arch back when the load changes. Two quick checks show it:',
        {
          list: [
            '**Tiptoe check.** Stand holding a wall and rise up onto the balls of both feet. Watch the inner side of each foot, or the heels from behind. In a flexible foot, an arch appears and the heels tilt slightly inward as you rise.',
            '**Big toe check (Jack’s test).** Stand normally. Lift your big toe up as far as it goes, or have someone lift it for you, while the heel stays down. In a flexible foot, the arch lifts as the toe goes up. The test is named after Jack, who described it in 1953 (Jack, 1953).',
          ],
        },
        '**If the arch comes back, the flat foot is flexible.** That is the common kind, and the one studied in the exercise trials: in 52 people with flexible flat feet, six weeks of short-foot, ankle, hip and stretching exercises improved two measures of arch shape more than in a control group (Brijwasi and Borkar, 2023).',
        '**If the arch stays flat and the foot feels stiff**, the flat foot may be rigid. One cause is tarsal coalition, a bridge of bone, cartilage or fibrous tissue between two foot bones, often found in young adults with a stiff, painful flat foot (Mehdi and colleagues, 2024). A rigid flat foot needs a clinician to find the cause before you start any exercise program.',
        'Be honest about what these checks are. We found no study that measured how reliable the tiptoe check or Jack’s test is in adults when people do them at home. They are simple to do and the result is usually clear, but take a stiff result as a reason to get checked, not as a diagnosis.',
      ],
      cites: [CITE.jack1953, CITE.brijwasi, CITE.mehdiCoalition],
    },
    {
      h2: 'What does the single-leg heel raise show about flat feet?',
      keyFact: 'In a survey of 582 women over 40 in England, 3.3% had early posterior tibial tendon dysfunction, and none had been diagnosed before (Kohls-Gatzoulis and colleagues, 2009).',
      paragraphs: [
        'The tibialis posterior is the muscle whose tendon runs behind the inner ankle bone and holds up the arch. When the tendon weakens, the arch can slowly drop on that side. This is posterior tibial tendon dysfunction, a common reason an adult’s arch flattens over time. A typical picture is pain on the inner side of the ankle, a flattening foot, and the heel turning out (Deu and colleagues, 2022).',
        '**How to check:** stand on one foot next to a wall, fingertips on the wall for balance only. Rise up as high as you can onto the ball of the foot, then lower. Do a few, then switch feet. Watch for three things:',
        {
          list: [
            'you can rise onto one foot as easily as onto the other',
            'the heel turns inward at the top of the rise, the same way on both sides',
            'there is no pain behind or below the inner ankle bone',
          ],
        },
        'Struggling to rise on one side, a heel that does not turn in, or pain at the inner ankle are the signs that point to the tendon. A clinician uses the same movement as a screening check, and the full picture is in [posterior tibial tendon dysfunction exercises](/posterior-tibial-tendon-dysfunction-exercises/).',
        'This check is about the shape and side-to-side feel of one rise, not about how many you can do. If you want a number for calf endurance, with the research pace and the counts healthy adults reach, use the [calf raise test](/calf-raise-test/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'What does a clinician measure for flat feet?',
      keyFact: 'In 619 healthy adults scored with the Foot Posture Index, the average was +4 on a scale from -12 to +12, which the authors call slightly pronated and normal (Redmond and colleagues, 2008).',
      paragraphs: [
        'A clinician looks at the same things you did, but scores them in a set way. The two most common measures:',
        {
          list: [
            '**Foot Posture Index (FPI).** Six checks of the standing foot, each scored from -2 to +2, including the heel angle, the bulge of the inner ankle and the shape of the arch. The total runs from -12 (high-arched) to +12 (flat). In pooled data from 619 healthy adults, the average was +4, and the authors consider scores below -3 or above +10 clearly outside the normal range (Redmond and colleagues, 2008).',
            '**Navicular drop.** The clinician marks the bone on the inner side of the arch, measures its height sitting with the foot in a set position, then standing, and records how far it sinks. Healthy adults average about 3.6 to 8.1 millimetres in studies, and no cut-off for "too much" has been confirmed (Nielsen and colleagues, 2009).',
          ],
        },
        '**These measures are better than a footprint, but not perfect.** In older adults, a ruler measure of the arch bone’s height matched X-rays closely (r = 0.79), while the FPI matched less well (r = 0.36 to 0.59), because it scores the whole foot, not just the arch (Menz and Munteanu, 2005). The FPI total showed moderate reliability overall, navicular height was the most reliable single measure in adults, and none of the measures tested was reliable enough in young children (Evans and colleagues, 2003).',
        'Practice matters. When two inexperienced testers measured navicular drop in 15 people, their results agreed poorly (Picciano and colleagues, 1993). In 86 young adults in a later study, navicular drop and footprint scores were highly repeatable (Zuil-Escobar and colleagues, 2018). If your arch is being tracked over time, the same person measuring helps.',
        'If a clinician suspects a rigid foot, a coalition or tendon damage, they may order a standing X-ray, a CT scan or an MRI, which no home check can replace (Mehdi and colleagues, 2024).',
      ],
      sourceNote:
        'Menz and Munteanu 2005: Pearson r against radiographic navicular height, calcaneal inclination and calcaneal first metatarsal angle; arch index r = 0.52 to 0.71, FPI r = 0.36 to 0.59. Picciano 1993: navicular drop intertester ICC 0.57, intratester 0.61 and 0.79. Zuil-Escobar 2018: ICC above 0.88.',
      cites: [CITE.redmondFpi, CITE.nielsenNavicular, CITE.menzMunteanu, CITE.evansFpiReliability, CITE.picciano, CITE.zuilEscobar, CITE.mehdiCoalition],
    },
    {
      h2: 'What should you do with your result?',
      paragraphs: [
        'Put the four checks together:',
        {
          list: [
            '**Low arch, comes back on tiptoe, no pain, both feet alike:** a flexible flat foot, a normal variation. Nothing needs doing. Exercise is optional.',
            '**Low arch that comes back, with tired or aching arches after long days:** foot and ankle exercises are a reasonable start. See [flat feet exercises](/flat-feet-exercises/) for the full program.',
            '**Arch that stays flat, one foot flatter than the other, or pain at the inner ankle:** see a clinician before you start exercises. The list below has the details.',
          ],
        },
        '**What exercise can and cannot do.** In 52 people with flexible flat feet, six weeks of short-foot, ankle, hip and stretching work improved arch shape more than ankle up-and-down movements alone (Brijwasi and Borkar, 2023). A 2024 review of short-foot training found no clear change in overall foot posture, and a change in one arch measure only in programs longer than six weeks (Cheng and colleagues, 2024). Both measured shape, not pain.',
        'The cards below are a starting point taken from [flat feet exercises](/flat-feet-exercises/), with the same doses.',
      ],
      exercises: [
        {
          name: 'Short foot, seated',
          evidence: { level: 'moderate', why: 'Part of the program that improved arch shape in a 2023 trial. On its own, short foot work has weaker results.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'The arch lifting',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts, and hold. Keep the outside of the foot on the ground and lift the arch to make a small cave under the foot. Don’t curl the toes. Curling them is the most common way to get this exercise wrong.',
          stop: 'Cramp in the arch that does not ease, or pain at the inner ankle',
          image: 'Exercise: short foot, seated',
          media: 'short_foot_seated',
          caption: 'Short foot, seated: pull the ball of the foot toward the heel so the arch lifts',
          alt: 'A seated leg with the foot flat on the floor, the arch muscles highlighted as the arch lifts',
        },
        {
          name: 'Big toe lift',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested program in the studies on this page.' },
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'The big toe moving on its own',
          how: 'Sit with your feet flat. Lift only the big toe and hold. The other four toes stay flat on the floor. The big toe lift teaches the big toe to move on its own, which is the arch’s first switch.',
          stop: 'Pain at the base of the big toe',
          image: 'Exercise: big toe lift',
          media: 'big_toe_lift',
          caption: 'Big toe lift: lift only the big toe while the other four stay flat',
          alt: 'A foot on the floor lifting only the big toe, the arch highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load while the calf wakes up.',
          stop: 'Pain behind the inner ankle, or one side that cannot keep up',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Band turn-in',
          evidence: { level: 'early', why: 'Walkito’s own addition. It was not part of the tested program in the studies on this page.' },
          dose: '3 sets of 12, each foot',
          often: 'Strength days',
          feel: 'Work along the inside of the foot and ankle',
          how: 'Sit with a resistance band around the foot and turn the foot in against it. Move the foot, not the leg. The knee stays still. Walkito adds the band turn-in only after six sessions of the standing short foot, so the arch’s own muscles come first.',
          stop: 'Pain behind the inner ankle that stays after the set',
          image: 'Exercise: band turn-in',
          media: 'band_inversion',
          caption: 'Band turn-in: turn the foot in against the band, the knee stays still',
          alt: 'A leg with a resistance band around the foot, turning the foot inward, the lower leg highlighted',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'How do I know if I have flat feet?',
      cites: [CITE.menzMunteanu, CITE.brijwasi],
      a: 'Look at a wet footprint, then compare your arch sitting and standing. A print with no curve on the inner side and an arch that disappears when you stand suggest a low arch. Then rise on tiptoe: if the arch comes back, the flat foot is flexible, the common kind. A footprint alone matches real arch height only moderately.',
    },
    {
      q: 'Is the wet foot test accurate?',
      cites: [CITE.menzMunteanu, CITE.hawesFootprint, CITE.wearing],
      a: 'Only roughly. In 95 older adults checked against X-rays, the footprint score matched arch height moderately, and a 1992 study of 115 men found footprints could not predict arch height. Body fat under the sole can also fill in the print. Use it as a first look, not as a diagnosis.',
    },
    {
      q: 'What is the flexible flat foot test?',
      cites: [CITE.jack1953],
      a: 'It checks whether the arch comes back. Stand on tiptoe, or lift your big toe while the heel stays down (Jack’s test, described in 1953). If an arch appears, the flat foot is flexible. If it stays flat and stiff, a clinician should look for the cause. We found no study of how reliable either check is at home.',
    },
    {
      q: 'How do I know if my flat feet are rigid?',
      cites: [CITE.mehdiCoalition],
      a: 'A rigid flat foot has no arch when you sit, stand on tiptoe or lift your big toe, and it often feels stiff. One cause is tarsal coalition, a bridge between foot bones reported in 1 to 13% of people. A rigid flat foot that hurts needs a clinician and usually imaging.',
    },
    {
      q: 'Can you have one flat foot?',
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence],
      a: 'Yes, and it is worth checking. An arch that is getting flatter on one side, especially with pain behind the inner ankle or trouble rising onto that foot, is a typical sign of posterior tibial tendon dysfunction. In 582 women over 40, 3.3% had early signs of it and none had been diagnosed. See a clinician.',
    },
    {
      q: 'What is a normal navicular drop?',
      cites: [CITE.nielsenNavicular, CITE.picciano],
      a: 'In studies, healthy adults average about 3.6 to 8.1 millimetres of navicular drop, the distance the arch bone sinks when you stand. Cut-offs of 10, 13 or 15 millimetres have been suggested for too much, but none is confirmed, and results vary between testers, especially inexperienced ones. It is hard to measure accurately on yourself.',
    },
    {
      q: 'What is the Foot Posture Index?',
      cites: [CITE.redmondFpi, CITE.evansFpiReliability],
      a: 'It is a six-part check a clinician does while you stand, scoring the heel, ankle and arch from -2 to +2 each, for a total from -12 (high-arched) to +12 (flat). In 619 healthy adults the average was +4, which is normal. It showed moderate reliability overall, and no foot posture measure tested was reliable enough in young children.',
    },
    {
      q: 'Do flat feet need treatment if they do not hurt?',
      cites: [CITE.menz],
      a: 'Usually not. A flexible flat foot that causes no pain and does not limit what you do is a normal variation. The Framingham Foot Study of about 1,900 adults found no link between flat foot posture and low back pain. Pain, stiffness or a change on one side are the reasons to get it checked.',
    },
    {
      q: 'Can I test my child for flat feet the same way?',
      cites: [CITE.harrisPediatricFlatfoot, CITE.evansFpiReliability],
      a: 'The tiptoe and big toe checks work for children too, but most young children have low arches that form with age, and foot posture measures were not reliable enough in young children in one study. A stiff foot, pain or a limp are reasons to see a doctor. More in [flat feet in kids](/flat-feet-in-kids/).',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the arch stays flat when you sit, stand on tiptoe or lift your big toe, and the foot feels stiff',
      'one foot has become flatter than the other over months, or you notice it suddenly',
      'you have pain or swelling behind or below the inner ankle bone',
      'you cannot rise onto one foot, or rising on that side hurts',
      'a flat foot started after a fall, a twist or an injury',
      'you have diabetes and the foot is warm, red or swollen, or its shape is changing',
      'you feel numbness, burning or tingling in the foot',
      'a child’s flat foot is stiff, painful or comes with a limp',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is an exercise app for heel and foot pain, on iPhone and Android. It builds a plan from your answers, including where it hurts and which side, and repeats a simple test every 14 days: calf raises, an arch hold, single-leg balance, and left against right.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate how your feet feel, and the plan adjusts to it. Walkito does not diagnose, so get a stiff, one-sided or painful flat foot checked first.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['hubFlatFeet', 'flatFeet', 'pttd'],
  crumb: 'Flat feet test',
  campaign: 'guide-flat-feet-test',
};
