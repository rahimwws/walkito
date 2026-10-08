import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/** Index for amaha citation. Replace after adding to lib/citations.ts. */

export const BALL_OF_FOOT_EN: Guide = {
  lang: 'en',
  page: 'ballOfFoot',
  mainSource: CITE.amaha,
  published: '2026-10-04',
  updated: '2026-10-04',
  title: 'Ball of Foot Pain: Causes, Exercises, and What Helps',
  description:
    'Ball of foot pain causes, metatarsalgia vs. Morton\'s neuroma, toe exercises, calf stretches, metatarsal pads, and when to see a clinician.',
  h1: 'Ball of foot pain: what causes it and what helps',
  lede:
    'You push off the ground and there it is: a sharp ache right behind the toes, like walking on a pebble. The ball of the foot takes your full body weight every time you step, and several different conditions can make it hurt. This page covers what those conditions are, what the evidence says about exercise and footwear, and where the honest gaps in the research are.',
  intro: [
    'The clinical umbrella term is metatarsalgia, which means pain around the metatarsal heads, the bony knuckles behind the toes. But metatarsalgia is a description of where it hurts, not a diagnosis. Several different problems live under that umbrella, and they do not all respond to the same thing.',
  ],
  toc: true,
  takeaways: [
    'In a study of 41 people with primary metatarsalgia, an 8-week toe exercise program improved pain by an average of 2.7 points on a 10-point scale. The study had no control group (Amaha and colleagues, 2020).',
    'A tight gastrocnemius, the bigger outer calf muscle, shifts weight forward onto the forefoot. In a series of 254 people with plantar fasciitis, 52 to 60 percent had an isolated gastrocnemius contracture (Patel and DiGiovanni, 2011).',
    'Metatarsal pads placed just behind the metatarsal heads are the most studied conservative approach for forefoot pain.',
    'Morton\'s neuroma and metatarsalgia overlap in symptoms but differ in location: neuroma pain is typically between the third and fourth toes with tingling, while metatarsalgia is broader.',
  ],
  sections: [
    {
      h2: 'What is the ball of the foot?',
      paragraphs: [
        'The ball of the foot is the padded area on the sole just behind the toes. Under it sit the heads of the five metatarsal bones, long bones that run from the midfoot to the base of each toe. When you walk, the ball of the foot bears roughly twice your body weight during the push-off phase.',
        'The muscles that curl and spread your toes are called the intrinsic foot muscles. They help share that load during push-off. When they weaken, or when the foot\'s structure shifts, more force lands on the metatarsal heads, and that is often where the pain starts.',
      ],
    },
    {
      h2: 'What causes ball of foot pain?',
      paragraphs: [
        '**Metatarsalgia** is the most common label. It describes pain and inflammation around one or more metatarsal heads, usually the second and third. Overuse, a long second metatarsal, high arches, and tight calf muscles can all contribute.',
        '**Morton\'s neuroma** is a thickening of the nerve between the metatarsal heads, most often between the third and fourth toes. It produces burning, tingling, or numbness rather than a pure ache. Narrow or high-heeled shoes compress the nerve and make it worse.',
        '**Sesamoiditis** is inflammation of the two small bones embedded in the tendon under the big toe joint. The pain sits directly under the big toe rather than under the middle of the forefoot.',
        '**Metatarsal stress fracture** is a small crack in one of the metatarsal bones, usually the second or third. The pain is localized, often gets worse through the day, and may hurt at night. Swelling on the top of the foot is common. This one needs imaging and rest.',
        '**Claw toes and hammer toes** bend the toe joints downward, which lifts the toe off the ground and shifts its push-off load back onto the metatarsal head behind it.',
        '**High heels and narrow shoes** tip weight forward onto the forefoot and compress the metatarsal heads together, which is why Morton\'s neuroma is more common in people who wear them.',
        '**High arches** (pes cavus, meaning a foot with a high, rigid arch) reduce the contact area on the sole, concentrating pressure on the heel and the ball of the foot. On the other end, [flat feet](/flat-feet-exercises/) can also contribute to forefoot pain by altering how the foot rolls during push-off.',
        '**Tight calf muscles** are an underappreciated cause. When the gastrocnemius, the bigger outer calf muscle, is tight, the ankle cannot bend far enough during walking. The body lifts the heel early to compensate, which shifts more load onto the forefoot. This is the same mechanism behind [plantar fasciitis](/plantar-fasciitis-exercises/) and [Achilles tendonitis](/achilles-tendonitis-exercises/).',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'How do you tell these conditions apart?',
      paragraphs: [
        'Location is the first clue. Broad pain under the second and third metatarsal heads points toward metatarsalgia. Pain between the third and fourth toes, with tingling, suggests Morton\'s neuroma. Pain directly under the big toe joint is more consistent with sesamoiditis. A localized spot on the top of the foot with swelling raises the question of a stress fracture.',
        'Stress fractures often do not show on a plain X-ray for the first two to three weeks and may need an MRI. A clinician visit is worth it when pain stays beyond two weeks despite rest and shoe changes, or when there is tingling, night pain, or visible swelling.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Does exercise help ball of foot pain?',
      keyFact: 'In a 2020 pre-post study of 41 people with primary metatarsalgia, an 8-week toe exercise program lowered pain by an average of 2.7 points on a 10-point scale, with no control group (Amaha and colleagues, 2020).',
      paragraphs: [
        'The honest answer is that the evidence for exercise in metatarsalgia is early and limited. It is much thinner than the evidence for [plantar fasciitis](/plantar-fasciitis-exercises/) or Achilles tendonitis, where randomized trials exist.',
        'The best study so far is a 2020 pre-post study of 41 people (56 feet) with primary metatarsalgia. An 8-week toe exercise program, mainly towel scrunches and marble pickups, dropped pain scores by an average of 2.7 points on a 10-point scale and improved toe grip strength. But there was no control group, so the improvement could partly reflect natural recovery. The authors called for randomized trials.',
        'The logic is straightforward: during push-off, the toes help share the load with the metatarsal heads. When toe flexor muscles are weak, more force lands on the metatarsals. The 2020 study supports that idea, but one uncontrolled study is not proof. People who had symptoms for more than a year improved less, as did those with a higher BMI.',
      ],
      sourceNote:
        'Amaha 2020: 41 patients, 56 feet, mean age 63.4. Pre-post design. VAS improved from 5.2 to 2.5 (p < 0.01). AOFAS improved, marble pickup test improved, single-leg stance time improved (all p < 0.01). No control group.',
      cites: [CITE.amaha],
    },
    {
      h2: 'Does a tight calf make forefoot pain worse?',
      keyFact: 'In 254 people with plantar fasciitis, 52 to 60 percent had an isolated gastrocnemius contracture, a tight calf that is also linked to forefoot overload (Patel and DiGiovanni, 2011).',
      paragraphs: [
        'Very likely. When the gastrocnemius is tight, the ankle cannot bend enough during walking. The body lifts the heel early, which throws more weight onto the ball of the foot. The clinical term for this is functional equinus, and it is a recognized cause of metatarsalgia.',
        'The numbers come from plantar fasciitis research, but the mechanism is the same. In 254 people with plantar fasciitis, 52 to 60 percent had an isolated gastrocnemius contracture. A case-control study of 50 cases and 100 controls found that reduced ankle dorsiflexion (how far the foot bends up toward the shin) was the strongest independent risk factor, at 23.3 times the odds.',
        'No trial has tested calf stretching for metatarsalgia specifically, but the link is clinically recognized. See [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) for more on the calf-ankle connection.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'What about metatarsal pads, insoles, and shoes?',
      paragraphs: [
        'Metatarsal pads are the most widely used conservative approach. A pad placed just behind the metatarsal heads lifts the shaft slightly, spreading pressure wider. Placement matters. Too far forward, directly under the head, can make pain worse.',
        'Rocker-sole shoes reduce forefoot pressure by letting the foot roll through push-off without bending at the metatarsal joints. A wide toe box stops the heads from being compressed together. Switching away from narrow or heeled shoes is often the simplest first step.',
        'Pads and shoes change how load is distributed. Exercise builds the strength and flexibility to handle that load. When [standing all day](/feet-hurt-standing-all-day/) is part of the picture, both matter.',
      ],
    },
    {
      h2: 'Which exercises help ball of foot pain?',
      paragraphs: [
        'These exercises target two sides of the problem: toe and intrinsic foot strength (to share load during push-off) and calf flexibility (to stop the forefoot from being overloaded). None has been tested in a randomized trial for metatarsalgia specifically. When you tap the ball-of-foot zone on the Walkito pain map during a check-in, the relief session gives toe spreads and a plantar fascia stretch. The toes zone gives toe spreads and seated short foot work.',
      ],
      exercises: [
        {
          name: 'Toe spread',
          dose: '3 sets of 10 spreads',
          how: 'Sit or stand with your foot flat. Spread all five toes apart as wide as you can, hold for 2 to 3 seconds, then relax. This works the small muscles between the metatarsals.',
          feel: 'A stretch between the toes and mild effort in the top of the foot',
          stop: 'Pain in the ball of the foot during the exercise',
          evidence: { level: 'early', why: 'No trial for metatarsalgia. The exercise targets intrinsic foot muscles that help distribute forefoot load.' },
          media: 'toe_spread',
          caption: 'Toe spread: splay all five toes apart, hold, relax',
          alt: 'A foot with all five toes spread wide apart, the muscles between the metatarsals highlighted',
        },
        {
          name: 'Towel scrunch (toe curls)',
          dose: '3 sets of 10 scrunches, each foot',
          how: 'Sit with your foot flat on a towel. Curl your toes to scrunch the towel toward you. Release and repeat. This is closest to what the 2020 study used.',
          feel: 'The muscles under the arch and toes working',
          stop: 'Pain in the ball of the foot during the exercise',
          evidence: { level: 'early', why: 'The Amaha 2020 study used a similar toe exercise program and found pain improvement in 41 people, but had no control group.' },
          media: 'towel_scrunch',
          caption: 'Towel scrunch: curl the toes to pull the towel toward you',
          alt: 'A foot on a towel, toes curled to scrunch the towel, the intrinsic foot muscles highlighted',
        },
        {
          name: 'Short foot (seated)',
          dose: '3 sets of 10, holding each for 5 seconds',
          how: 'Sit with your foot flat on the floor. Without curling the toes, try to shorten the foot by drawing the ball of the foot toward the heel. The arch should rise slightly. This targets the intrinsic foot muscles that support the arch and forefoot from underneath.',
          feel: 'A tightening under the arch',
          stop: 'Pain in the ball of the foot during the exercise',
          evidence: { level: 'moderate', why: 'A 2024 meta-analysis of short-foot training found improvements in foot posture. Not tested for metatarsalgia specifically.' },
          media: 'short_foot_seated',
          caption: 'Short foot: draw the arch up without curling the toes',
          alt: 'A seated figure with one foot on the floor, the arch rising slightly, intrinsic foot muscles highlighted',
        },
        {
          name: 'Big toe lift',
          dose: '3 sets of 10, each foot',
          how: 'Stand or sit with your foot flat. Lift only the big toe while keeping the other four toes on the ground. Then reverse: press the big toe down and lift the other four. When the big toe cannot extend properly, more load shifts onto the adjacent metatarsal heads.',
          feel: 'Difficulty at first, then gradual control',
          stop: 'Pain under the big toe joint that suggests sesamoiditis',
          evidence: { level: 'early', why: 'No direct trial for metatarsalgia. Based on the biomechanical role of the big toe in distributing forefoot load.' },
          media: 'big_toe_lift',
          caption: 'Big toe lift: lift the big toe while keeping the others down',
          alt: 'A foot on the ground with the big toe raised and the other four toes flat, the extensor muscle highlighted',
        },
        {
          name: 'Plantar fascia stretch',
          dose: '2 holds of 30 seconds, each foot',
          how: 'Sit and cross the affected foot over the opposite knee. Pull the toes back gently until you feel a stretch along the arch. The plantar fascia runs from the heel to the base of the toes, passing right through the ball of the foot.',
          feel: 'A stretch along the arch and the underside of the foot',
          stop: 'Sharp pain, not a stretch sensation',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline gives plantar fascia stretching its top grade, A. Not tested for metatarsalgia specifically, but the fascia is part of the same load-bearing structure.' },
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back gently',
          alt: 'A figure pulling the toes of the crossed foot back, the plantar fascia highlighted',
        },
        {
          name: 'Calf stretch (straight knee)',
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall. Back leg straight, heel down, hips forward. Hold until you feel the stretch in the upper calf.',
          feel: 'A stretch in the upper calf',
          stop: 'Pain in the Achilles tendon',
          evidence: { level: 'strong', why: 'Grade A in the 2023 heel pain guideline for calf stretching. Calf tightness is a recognized contributor to forefoot overload.' },
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight and the gastrocnemius highlighted',
        },
        {
          name: 'Calf stretch (bent knee)',
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same position as the straight-knee stretch, then bend the back knee until the stretch moves lower, near the Achilles tendon. This targets the soleus, the deeper calf muscle, which only releases with the knee bent.',
          feel: 'A stretch lower in the calf, near the heel',
          stop: 'Pain in the Achilles tendon',
          evidence: { level: 'strong', why: 'Same guideline grade A. Targets the soleus, which also contributes to ankle stiffness.' },
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the soleus highlighted',
        },
      ],
      cites: [CITE.amaha, CITE.guideline, CITE.cheng],
    },
    {
      h2: 'What the evidence does and does not tell us',
      paragraphs: [
        'The evidence for exercise in ball-of-foot pain is thinner than for [plantar fasciitis](/plantar-fasciitis-exercises/) or Achilles tendonitis, where randomized trials exist. For metatarsalgia, there is one pre-post study with 41 people and no control group. The biomechanical reasoning is sound, and the risk of gentle toe exercises and calf stretches is low, but direct proof from a controlled trial is missing.',
        'Exercise alone may not be enough. Metatarsal pads, shoes with a wide toe box, and reducing time in heels have broader clinical consensus. For Morton\'s neuroma, shoe changes and padding are often more effective than exercise. For a metatarsal stress fracture, exercise is the wrong approach until the bone has recovered. If pain has lasted more than a few weeks, or comes with numbness or swelling, get it checked first. [Heel pain from running](/heel-pain-runners/) covers load management for runners.',
      ],
      cites: [CITE.amaha, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'What is metatarsalgia?',
      cites: [CITE.amaha],
      a: 'Metatarsalgia is pain and inflammation around the metatarsal heads, the bony knuckles at the ball of the foot. It is a description of where it hurts, not a single diagnosis. Common causes include overuse, high arches, tight calf muscles, and weakened toe flexors. In one study of 41 people, toe exercises improved pain by an average of 2.7 points on a 10-point scale (Amaha 2020).',
    },
    {
      q: 'How do you tell metatarsalgia from Morton\'s neuroma?',
      a: 'Metatarsalgia is a dull-to-sharp ache broadly under the ball of the foot. Morton\'s neuroma is more specific: burning, tingling, or numbness between the third and fourth toes, sometimes with a clicking sensation when the forefoot is squeezed. A clinician can distinguish them with a physical exam and ultrasound.',
    },
    {
      q: 'Do toe exercises help ball of foot pain?',
      cites: [CITE.amaha],
      a: 'The evidence is early. One study of 41 people found that 8 weeks of toe exercises improved pain and grip strength, but it had no control group and its authors called for randomized trials (Amaha 2020). The idea makes sense: stronger toes should share more of the push-off load. But direct proof from a controlled trial is missing.',
    },
    {
      q: 'Why does a tight calf cause pain in the ball of the foot?',
      cites: [CITE.patelGastrocnemius, CITE.riddle],
      a: 'When the gastrocnemius, the bigger outer calf muscle, is tight, the ankle cannot bend enough during walking. The body compensates by lifting the heel early, which shifts more weight onto the ball of the foot. In people with plantar fasciitis, 52 to 60 percent had an isolated gastrocnemius contracture (Patel and DiGiovanni, 2011). The same mechanism contributes to forefoot overload.',
    },
    {
      q: 'Do metatarsal pads work for ball of foot pain?',
      a: 'Metatarsal pads are the most widely used conservative approach for forefoot pain. They lift the metatarsal shaft just behind the painful area, spreading pressure across a wider surface. Placement matters: the pad should sit just behind the metatarsal heads, not directly underneath them, or it can increase pain.',
    },
    {
      q: 'Can ball of foot pain be a stress fracture?',
      cites: [CITE.patelStressFracture],
      a: 'Yes. Metatarsal stress fractures, usually in the second or third metatarsal, produce localized pain that gets worse through the day and may hurt at night. Swelling on the top of the foot is common. A stress fracture often does not show on a plain X-ray for the first two to three weeks and may need an MRI. This is one of the reasons to see a clinician if forefoot pain persists.',
    },
    {
      q: 'What shoes are best for ball of foot pain?',
      a: 'Shoes with a wide toe box, a cushioned sole, and a low heel. Rocker-sole shoes help by letting the foot roll through push-off without bending at the metatarsal joints. Narrow shoes and high heels do the opposite. For Morton\'s neuroma especially, switching shoes is often the most effective single step.',
    },
    {
      q: 'How long does a metatarsalgia flare-up last?',
      a: 'There is no set timeline. A mild flare often settles once you reduce the triggering activity, switch to cushioned, wider shoes, and add a metatarsal pad. Flares linked to an ongoing cause, such as high heels, claw toes, or a tight calf, can persist for months, since no single timeline fits every cause.',
    },
    {
      q: 'What are the complications of untreated metatarsalgia?',
      a: 'Left unaddressed, metatarsalgia can change how you walk, since people naturally shift weight off the painful spot and onto other parts of the foot, which can create new areas of pain. Ongoing pressure on the metatarsal heads can also contribute to calluses or, less often, toe deformities like hammer toes. Early shoe changes and metatarsal pads reduce this risk.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'there is tingling, burning, or numbness in the toes, which can point to a nerve problem like Morton\'s neuroma',
      'the pain is localized to one spot and gets worse through the day, which can suggest a stress fracture',
      'there is visible swelling on the top of the foot',
      'the pain followed a sudden increase in activity, a fall, or an impact',
      'the big toe joint is stiff, locked, or will not bend back',
      'pain does not improve after two weeks of rest, shoe changes, and padding',
      'you have diabetes, reduced feeling in your feet, or poor circulation',
      'both feet hurt and other joints are swollen or stiff',
      'it wakes you at night or is present at rest',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You can do the exercises on this page on your own, or you can let Walkito schedule them for you. The app builds a plan one week at a time. When you mark the ball of the foot on the pain map, the check-in session focuses on toe spreads and plantar fascia stretching. The broader program adds calf stretching and strengthening as the weeks go on.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once that goal is met), a short test checks progress so you can see what is changing. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If your forefoot pain comes with numbness, swelling, or a lump, see a clinician first.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Ball of foot pain',
  campaign: 'guide-ball-of-foot',
};
