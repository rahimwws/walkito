import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Foot pain from hiking and long walks (EN). Research 2026-10-18.
 * Hiker evidence (all self-report surveys, no trials):
 *   Chrusch and Kavin 2021 WEM (PMID 34301477): 1,295 Appalachian Trail
 *   long-distance hikers, 2018 to 2019 season. 61% any musculoskeletal (MSK)
 *   complaint, knee 37%, foot injury/pain 29% (n=374), Achilles 12%, MSK
 *   complaints made 11% stop. 13% did no training: 80% vs 58% any MSK injury,
 *   foot 38 vs 28%, Achilles 18 vs 11%, lower leg stress fracture 5 vs 2%,
 *   OR 2.82. Shoes: running/trail shoes 58%, boots 24%, poles 70%.
 *   Boulware 2003 Am J Med (PMID 12681456): 280 AT hikers, blisters 64%,
 *   acute joint pain 36%, injury among the main reasons for ending early.
 *   Anderson 2009 WEM (PMID 19737037): 128 AT/PCT hikers; numbness/tingling
 *   35% / 50% / 69% by pack weight; footwear trend lost significance after
 *   adjusting for pack weight; neither linked to other MSK injuries.
 *   Bohne and Abendroth-Smith 2007 MSSE (PMID 17218900): 15 experienced male
 *   hikers, downhill with no pack, 15% and 30% body weight packs; poles cut
 *   joint moments at ankle, knee and hip and peak power absorption at ankle
 *   and knee.
 * No trial compares boots and trail runners for foot pain, and no study tests
 * a weekly distance increase for hikers. The page says so.
 * Doses copied from HEEL_PAIN_EN (en.ts), achilles.ts and ex-ankle-rocks.ts.
 */

export const HIKERS_EN: Guide = {
  lang: 'en',
  page: 'hikers',
  mainSource: CITE.chruschHikers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Foot Pain After Hiking: Causes, Exercises and Red Flags',
  description:
    'Foot pain after hiking: what trail surveys found, heel, Achilles and forefoot causes, pack weight, boots or trail runners, and a short routine with doses.',
  h1: 'Foot pain after hiking: why your feet hurt and what to do about it',
  lede:
    'Sore feet after a long hike are common, and much of it is overload: more distance, more descent or a heavier pack than your feet are used to. In a survey of 1,295 long-distance hikers on the Appalachian Trail, 29% reported foot injury or pain, and 12% reported Achilles pain (Chrusch and Kavin, 2021). Heel pain on the first steps the next morning points to [plantar fasciitis](/plantar-fasciitis/); pain on one spot of a bone that grows with each hike can be a stress fracture and needs a clinician.',
  intro: [
    'This page is about hiking and long walks on trails: what tends to hurt, what the hiker surveys found about packs, shoes and training, and a short routine for before and after a hike. If your heel hurts after everyday walks, start with [heel pain after walking](/heel-pain-after-walking/), and for how much to walk with a sore heel, see [walking with plantar fasciitis](/walking-with-plantar-fasciitis/).',
  ],
  toc: true,
  takeaways: [
    'Of 1,295 Appalachian Trail long-distance hikers, 61% reported a muscle, joint or bone complaint, 37% knee pain, 29% foot pain and 12% Achilles pain, and 11% stopped their hike because of it (Chrusch and Kavin, 2021).',
    'Hikers who did no training before the trail reported foot pain more often, 38% against 28%, and any such injury more often, 80% against 58%. That is a link in a survey, not proof that training prevents injury (Chrusch and Kavin, 2021).',
    'Foot blisters were the most common complaint among 280 Appalachian Trail hikers, reported by 64% (Boulware and colleagues, 2003).',
    'Numbness or tingling rose with pack weight in 128 long-distance hikers, from 35% with 10 to 20 pound packs to 69% above 31 pounds. Shoe type and pack weight were not linked to other muscle and joint injuries (Anderson and colleagues, 2009).',
    'Trekking poles reduced the load on the ankle, knee and hip when 15 experienced hikers walked downhill, with and without a pack (Bohne and Abendroth-Smith, 2007).',
  ],
  sections: [
    {
      h2: 'Why do your feet hurt after a hike?',
      keyFact: 'In a survey of 1,295 Appalachian Trail long-distance hikers, 29% reported foot injury or pain and 37% knee pain (Chrusch and Kavin, 2021).',
      paragraphs: [
        '**Mostly because hiking loads the feet more, and for longer, than everyday walking.** You walk for hours, on uneven ground, up and down, often with a pack. Each of those adds work for the heel, the arch, the calf and the Achilles tendon.',
        'The best numbers come from long-distance hikers. In a 2018 to 2019 survey of 1,295 Appalachian Trail hikers, 61% reported a muscle, joint or bone complaint. Knee pain was the most common at 37%, then foot pain at 29%, ankle sprains at 13%, Achilles pain at 12% and shin pain at 11%. These complaints made 11% of them stop their hike (Chrusch and Kavin, 2021).',
        'Overuse problems, which build up over days of repeated load, were more common than sudden injuries: 28% against 18% in the same survey. That matters for day hikers too. A long first hike of the season, or a weekend with two big days in a row, is the same pattern on a smaller scale.',
        'These are self-reported surveys of people walking hundreds of miles. No study has counted foot pain in ordinary day hikers, so the exact figures will not apply to a weekend walker. The pattern of what hurts is the useful part.',
      ],
      sourceNote: 'Chrusch and Kavin 2021: cross-sectional electronic survey added to the Appalachian Trail Conservancy end-of-season survey, 52% response rate. Overuse/chronic 28% (n=363), acute 18% (n=238).',
      cites: [CITE.chruschHikers],
    },
    {
      h2: 'Where does it hurt, and what is it likely to be?',
      paragraphs: [
        'Where the pain sits is the quickest clue. The table is a starting point, not a diagnosis. The [foot pain identifier](/foot-pain-identifier/) asks a few more questions.',
      ],
      table: {
        caption: 'Foot pain after hiking: where it hurts and the usual first step',
        head: ['Where and when', 'Often', 'First step'],
        rows: [
          ['Under the heel, worst on first steps next morning', 'Plantar fasciitis', 'Calf and arch stretches, heel raises'],
          ['Back of the heel or tendon above it', 'Achilles tendinopathy', 'Shorter hikes, slow heel raises'],
          ['Ball of the foot, behind the toes', 'Metatarsalgia', 'Check fit, calf stretch'],
          ['One spot on a bone, worse each hike', 'Possible stress fracture', 'Stop hiking, see a clinician'],
          ['Burning or tingling toes', 'Pressed nerve', 'Loosen laces, lighter pack'],
          ['Toenails dark or sore after descents', 'Toes hitting the shoe', 'Longer shoe, trim nails'],
        ],
      },
      after: [
        '**Under the heel.** Plantar fasciitis typically hurts most with the first steps after rest. The 2023 heel pain guideline lists pain that started after a recent increase in weight-bearing activity as a typical feature (Koc and colleagues, 2023), which is exactly what a bigger hike is. A tight calf is the strongest known risk factor: in a study of 50 people with plantar fasciitis and 100 without, people with the least ankle bend had 23.3 times the odds (Riddle and colleagues, 2003).',
        '**Back of the heel.** Achilles pain can flare on long climbs, where the calf and tendon push you up every step. See [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
        '**Ball of the foot.** Long descents and a tight calf can both shift load onto the front of the foot. See [ball of foot pain](/ball-of-foot-pain/).',
        '**Blisters and toenails.** Blisters were reported by 64% of 280 Appalachian Trail hikers, more than any other complaint (Boulware and colleagues, 2003). Dark or sore toenails after a day of descents usually mean the toes are hitting the front of the shoe. Both are skin and fit problems, not something exercise changes.',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.boulwareHikers],
    },
    {
      h2: 'Why does downhill hiking hurt your feet more?',
      keyFact: 'In 15 experienced hikers walking downhill with no pack, a day pack and a heavy pack, trekking poles reduced the load at the ankle, knee and hip (Bohne and Abendroth-Smith, 2007).',
      paragraphs: [
        '**Going down, your legs work as brakes.** Each step down, the calf, the front of the shin and the thigh muscles control the drop while they lengthen. The foot also slides forward in the shoe, so the toes and the ball of the foot take more pressure. That is why many people feel fine on the climb and sore after the descent.',
        'In a lab study, 15 experienced male hikers walked downhill with no pack, a day pack of 15% of their body weight and an expedition pack of 30%. Using poles reduced the turning forces at the ankle, knee and hip and the peak braking work at the ankle and knee, with every pack (Bohne and Abendroth-Smith, 2007). In the Appalachian Trail survey, 70% carried poles or a stick, and poles went with fewer complaints (Chrusch and Kavin, 2021). That survey link does not prove that poles prevent injury.',
        'Practical points, none of them tested as foot pain prevention: take shorter steps on steep descents, lace the shoe firmly over the instep so the foot does not slide forward, and keep toenails short.',
      ],
      sourceNote: 'Bohne 2007: 10 trials per condition, sagittal plane joint moments reduced at all three joints with poles; peak power absorption reduced at ankle and knee. Measured forces, not pain or injury.',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
    },
    {
      h2: 'Does a heavier pack make foot pain worse?',
      keyFact: 'In 128 long-distance hikers, numbness or tingling was reported by 35% with 10 to 20 pound packs and 69% with packs over 31 pounds (Anderson and colleagues, 2009).',
      paragraphs: [
        '**A heavier pack means more load on every step, but the studies on hikers only show a clear link with numbness and tingling.** In a 2006 survey of 128 hikers who had walked more than 500 miles on the Appalachian or Pacific Crest Trail, numbness or tingling went up with pack weight: 35% with packs of 10 to 20 pounds, 50% with 21 to 30 pounds and 69% above 31 pounds (Anderson and colleagues, 2009).',
        'The same survey found that pack weight and shoe type were not linked to other muscle and joint injuries, such as sprains, long-lasting pain or muscle injuries. So nobody has shown that a lighter pack means less heel or arch pain. It is still a sensible place to start if your feet hurt only on the days you carry a full pack.',
        'If your toes burn or tingle, loosen the laces over the top of the foot and check the hip belt and shoulder straps, and see a clinician if it does not go away after you take the pack off.',
      ],
      cites: [CITE.andersonPack],
    },
    {
      h2: 'Boots or trail runners: which is better for foot pain?',
      paragraphs: [
        '**No trial has compared boots and trail runners for foot pain, so nobody can say one is better.** What exists are surveys:',
        {
          list: [
            'In the 2006 survey of 128 long-distance hikers, numbness or tingling was reported by 29% in sandals, 36% in running shoes, 42% in hiking shoes and 68% in boots. After allowing for pack weight, the shoe type no longer mattered, which suggests the hikers in boots also carried heavier packs (Anderson and colleagues, 2009).',
            'In the 2018 to 2019 Appalachian Trail survey, 58% wore running or trail shoes and 24% wore boots. Both went with fewer complaints than other footwear such as sandals (Chrusch and Kavin, 2021).',
          ],
        },
        'So pick the shoe that fits, that you have already walked in, and that suits the ground. For heel pain in general, the 2023 guideline recommends against insoles used alone for short-term relief, grade B, and allows them alongside other care, grade C (Koc and colleagues, 2023). More in [insoles or exercises](/insoles-vs-exercises/). If you want to change to lighter or flatter shoes, do it over weeks, not on the first long hike; [barefoot shoes](/barefoot-shoes/) explains why.',
      ],
      cites: [CITE.andersonPack, CITE.chruschHikers, CITE.guideline],
    },
    {
      h2: 'How fast can you build up hiking distance?',
      keyFact: 'Hikers who did no training before the Appalachian Trail reported any muscle, joint or bone injury more often, 80% against 58% (Chrusch and Kavin, 2021).',
      paragraphs: [
        '**No study gives a safe weekly increase for hikers.** The closest evidence is the Appalachian Trail survey: the 13% of hikers who did no training before the trail reported more injuries overall (80% against 58%), more foot pain (38% against 28%), more Achilles pain (18% against 11%) and more lower leg stress fractures (5% against 2%). Strength training, stretching or yoga, and endurance training each went with fewer injuries (Chrusch and Kavin, 2021). It is a survey, so fitter or more careful people may simply have trained more.',
        'A practical way to build up, not a tested one:',
        {
          list: [
            'Add one change at a time: more distance, more climb and descent, or a heavier pack, not all three on the same day.',
            'Use the next morning as your check. Pain that settles by the next morning and is not creeping up week to week is a reasonable sign the load is fine. That rule comes from an Achilles trial, not from hikers (Silbernagel and colleagues, 2007).',
            'After a big day, plan an easy one. The [Appalachian Trail Conservancy](https://appalachiantrail.org/experience/hike-the-trail/essential-skills/health-hygiene/common-injuries/) gives similar advice to long-distance hikers: stop for the day if your feet start to hurt, swell or feel tight after you have hiked further than normal.',
          ],
        },
        'Calf strength is worth building between hikes, because the calf does much of the work on climbs and descents. The heel raises below are the same ones in the [plantar fasciitis exercises](/plantar-fasciitis-exercises/) guide.',
      ],
      cites: [CITE.chruschHikers, CITE.silbernagel],
    },
    {
      h2: 'What is a good routine before and after a hike?',
      paragraphs: [
        'Keep it short. Before the hike, a minute or two to get the ankles moving. After, the stretches that target the heel and calf. On days between hikes, heel raises for strength. The doses are Walkito’s starting doses from the main guides. Stop an exercise for the day if pain goes above 6 out of 10.',
        'Be honest about what stretching before a hike does. In a trial of 1,538 army recruits over three months of training, stretching six leg muscle groups before every session did not meaningfully reduce injuries (Pope and colleagues, 2000). The stretches here are for heel and calf pain, where the 2023 guideline grades stretching **A**, and strength work for the calf gets a **B** (Koc and colleagues, 2023).',
      ],
      exercises: [
        {
          name: 'Ankle rocks (before)',
          evidence: { level: 'early', why: 'Walkito’s own dose. No published protocol for hikers.' },
          dose: '2 sets of 15, each leg',
          often: 'Before the hike',
          feel: 'A stretch at the front of the ankle and a pull in the lower calf',
          how: 'Split stance, hands on a wall, a tree or your poles. Rock the front knee forward over the toes, heel stays flat. Slow, about two seconds each way. Switch legs after each set.',
          stop: 'Pain reaches 6 out of 10',
          media: 'ankle_rocks',
          caption: 'Ankle rocks: knee travels forward over the toes, heel stays flat',
          alt: 'A figure in a split stance rocking the front knee forward over the toes, the ankle highlighted',
        },
        {
          name: 'Calf stretch (after)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. Not studied in hikers.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'After the hike',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward. A tight calf pulls on the heel, so this stretch matters even though you feel it higher up.',
          stop: 'Sharp pain at the heel or the Achilles',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch (after)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. Not studied in hikers.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'After the hike',
          feel: 'A stretch near the heel',
          how: 'Take the same position, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Sharp pain at the heel or the Achilles',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Plantar fascia stretch (after, and next morning)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. Not studied in hikers.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'After the hike and before your first steps the next morning',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. The next morning, do the first one on the edge of the bed, before your foot touches the floor.',
          stop: 'Sharp heel pain',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Foot roll (after)',
          evidence: { level: 'early', why: 'Not tested in the studies on this page. It is here for comfort.' },
          dose: '1 minute, each foot',
          often: 'After the hike or in the evening',
          feel: 'Firm pressure under the foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball, with firm pressure. If you are wincing, ease off. No ball? Firm thumb strokes from heel to toes work too.',
          stop: 'Wincing pain, or a sore spot on a bone',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
        {
          name: 'Heel raises on both feet (between hikes)',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. A heel raise program helped heel pain faster than stretching in a 48-person trial (Rathleff 2015).' },
          dose: '3 sets of 10, both feet',
          often: '2 to 3 days a week, not the day after a big hike',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. When it is easy, move to one leg or the [towel heel raise](/exercises/towel-heel-raise/). For Achilles pain, slow lowering on a step is the main exercise: see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
          stop: 'Heel or Achilles pain above 6 out of 10, or worse the next morning',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
      ],
      cites: [CITE.popeStretching, CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'When should you stop hiking and see a clinician?',
      keyFact: 'In a review of stress fractures, 81% of patients had pain with walking, and an early X-ray found only about 10% of them (Patel and colleagues, 2011).',
      paragraphs: [
        '**Stop and get checked if the pain sits on one spot of a bone and gets worse with each hike.** That is the classic stress fracture pattern, usually in the metatarsals behind the toes or in the heel bone. In a review of stress fractures, 81% of patients had pain with walking, and a sore spot on the bone was found in 65.9 to 100%. An X-ray at the first visit picked up only about 10% of them, so a normal X-ray does not rule one out (Patel and colleagues, 2011). If you are not sure which it is, stop hiking until a clinician has checked it.',
        'Also stop if you cannot put weight on the foot, if pain started with a twist, a fall or a pop, or if the foot is red, hot and swollen. The full list is below.',
        'Most heel pain is less dramatic. For plantar fasciitis, about 90% of people get better with non-surgical care, though it can take months (Latt and colleagues, 2020). See [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/).',
      ],
      sourceNote: 'Patel 2011 figures are for stress fractures at all sites, not hikers. X-ray sensitivity rises to 30 to 70% after about three weeks.',
      cites: [CITE.patelStressFracture, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Is it normal for your feet to hurt after hiking?',
      cites: [CITE.chruschHikers],
      a: 'Some soreness after a long or steep hike is common and often settles within a day or two. In a survey of 1,295 Appalachian Trail hikers, 29% reported foot pain. Pain that is sharp, sits on one spot of a bone, or is still there after a few easy days is worth getting checked.',
    },
    {
      q: 'Why does my heel hurt after hiking?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'The most common cause is plantar fasciitis, which hurts under the heel and is usually worst on the first steps the next morning. The 2023 guideline lists a recent increase in weight-bearing activity as a typical trigger, and a tight calf is the strongest known risk factor. Pain at the back of the heel points to the Achilles.',
    },
    {
      q: 'Can I keep hiking with plantar fasciitis?',
      cites: [CITE.silbernagel],
      a: 'Many people can, on shorter and flatter routes, if the pain stays moderate during the hike and settles by the next morning. That next-morning rule comes from an Achilles trial, not a hiking study. If the heel is worse each morning, cut distance and descent first. Our walking with plantar fasciitis guide explains how to build back up.',
    },
    {
      q: 'Are boots or trail runners better for foot pain?',
      cites: [CITE.andersonPack, CITE.chruschHikers],
      a: 'Nobody knows for sure, because no trial has compared them. In surveys of long-distance hikers, both boots and trail shoes went with fewer complaints than sandals, and a link between boots and numbness disappeared once pack weight was taken into account. Pick the pair that fits and that you have already walked in.',
    },
    {
      q: 'Does a heavy backpack cause foot pain?',
      cites: [CITE.andersonPack],
      a: 'It adds load to every step, but the hiker surveys only show a clear link with numbness and tingling. In 128 long-distance hikers, that went from 35% with 10 to 20 pound packs to 69% above 31 pounds. Pack weight was not linked to other muscle and joint injuries in that survey.',
    },
    {
      q: 'Why do my feet hurt more going downhill?',
      cites: [CITE.bohnePoles],
      a: 'On a descent your leg muscles work as brakes while they lengthen, and the foot slides forward in the shoe, loading the toes and the ball of the foot. In a lab study of 15 hikers walking downhill, trekking poles reduced the load at the ankle, knee and hip, with and without a pack.',
    },
    {
      q: 'Do trekking poles help foot pain?',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
      a: 'They reduce load on the legs. In 15 experienced hikers walking downhill, poles reduced the forces at the ankle, knee and hip, and in a survey of Appalachian Trail hikers poles went with fewer complaints. No trial has tested whether poles prevent foot pain itself, so see them as a sensible extra, not a sure thing.',
    },
    {
      q: 'How long should feet hurt after a long hike?',
      a: 'Ordinary soreness from a big day often fades within a day or two of easy activity. If heel pain on the first steps keeps coming back every morning, or pain is still there after a week of shorter walks, it is more likely an overuse problem such as plantar fasciitis or Achilles pain, and worth a proper check.',
    },
    {
      q: 'Should I stretch before a hike?',
      cites: [CITE.popeStretching, CITE.guideline],
      a: 'A short warm-up such as ankle rocks is fine, but do not expect stretching before a hike to prevent injury. In a trial of 1,538 army recruits, stretching before training did not meaningfully reduce injuries. Calf and arch stretches after the hike are more useful if your heel hurts, where the 2023 guideline grades them A.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'pain sits on one spot of a bone and gets worse with each hike, which can be a stress fracture',
      'you cannot put weight on the foot, or you are limping',
      'pain started with a twist, a fall or a pop, especially at the back of the heel',
      'the foot or ankle is red, hot or swollen, or you have a fever',
      'a blister or toenail looks infected: spreading redness, pus or red streaks',
      'numbness, tingling or burning does not go away after you take off your pack and shoes',
      'the foot hurts at night or at rest',
      'pain keeps getting worse over two to three weeks despite shorter hikes',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app with the stretches and heel raises on this page. It does not plan your hikes, so keep your own route plan and fit the sessions around it, with lighter sessions after a big day.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate how your feet feel, and the plan adjusts to it. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['heelPainAfterWalking', 'achilles', 'ballOfFoot'],
  crumb: 'Foot pain after hiking',
  campaign: 'guide-hiking-foot-pain',
};
