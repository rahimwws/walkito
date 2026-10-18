import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Can plantar fasciitis cause knee, hip or back pain? (EN). Research 2026-10-18.
 * No study has followed people with plantar fasciitis to see whether knee, hip
 * or back pain starts later, so the page says the link is plausible but
 * unproven. Direct data:
 *   Levins 1998 (18 people, painful bead under the heel: less single-leg time)
 *   Phillips 2017 (systematic review, 19 studies of gait in plantar heel pain)
 *   Miladi 2023 (40 people with knee osteoarthritis, heel ultrasound, no control group)
 *   Kongtong 2025 (15 runners with plantar fasciitis vs 15 without: hip muscle activity, pelvic drop)
 *   Pohl 2009 (25 female runners with a history of plantar fasciitis vs 25 matched)
 *   Kamonseki 2016 (existing key: RCT, 83 people, 8 weeks, foot vs foot + hip vs stretching)
 * Existing keys reused: kamonseki, guideline, riddle, patelGastrocnemius,
 * steccoPfAchilles, menz, hartvigsen, haydenExercise, finucaneRedFlags,
 * willyPfpGuideline.
 * New keys (placeholders): NEW_levinsGait, NEW_phillipsGait, NEW_miladiKneeOa,
 * NEW_kongtongHip, NEW_pohlRunners.
 * Doses match the heel pain guide and the flat feet guide (en.ts).
 */

export const PF_KNEE_HIP_BACK_EN: Guide = {
  lang: 'en',
  page: 'pfKneeHipBack',
  mainSource: CITE.kamonseki,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Can Plantar Fasciitis Cause Knee Pain? Hip and Back Too',
  description:
    'Can plantar fasciitis cause knee, hip or back pain? What gait studies show, what is still unproven, hip and calf exercises with doses, and red flags.',
  h1: 'Can plantar fasciitis cause knee, hip or back pain?',
  lede:
    'It can contribute, but nobody has proven it. A sore heel changes how you walk: studies of [plantar fasciitis](/plantar-fasciitis/) show people put less weight through the heel and more through the front of the foot (Phillips and McClinton, 2017), and that shift can load the knee, hip and back differently. No study has followed people with heel pain to see whether knee, hip or back pain starts later, so the evidence is associations, not proof of cause.',
  intro: [
    'This page goes through the knee, hip, back, calf and ankle one by one, says what studies found and how big they were, explains what the one trial of hip strengthening in plantar fasciitis means (Kamonseki and colleagues, 2016), and gives the exercises and doses that fit. If your knee or back pain came first, or you have flat feet, see [flat feet and knee pain](/flat-feet-knee-pain/) and [flat feet and back pain](/flat-feet-back-pain/) instead.',
  ],
  takeaways: [
    'In a review of 19 gait studies, people with plantar heel pain put less load through the heel and more through the midfoot and forefoot, while time on each foot stayed about the same (Phillips and McClinton, 2017).',
    'In 18 people with no foot pain, a painful bead under the heel was enough to shorten the time they stood on that leg with each step (Levins and colleagues, 1998).',
    'Among 40 people with knee osteoarthritis, 52% had heel pain and 62% had a thickened plantar fascia on ultrasound. The study had no comparison group, so it cannot show which caused which (Miladi and colleagues, 2023).',
    'In a trial of 83 people with plantar fasciitis, adding foot and hip strengthening to stretching did not reduce heel pain more than stretching alone over eight weeks. All three groups improved (Kamonseki and colleagues, 2016).',
    'A tight calf is the best-studied link: people with 0 degrees of ankle bend or less had 23.3 times the odds of plantar fasciitis compared with people above 10 degrees (Riddle and colleagues, 2003).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Can plantar fasciitis cause pain in other parts of the leg?',
      keyFact: 'A review of 19 gait studies found people with plantar heel pain shift load away from the heel toward the midfoot and forefoot (Phillips and McClinton, 2017).',
      paragraphs: [
        '**Probably sometimes, through the way you walk.** Plantar fasciitis does not spread up the leg. What changes is your walking. When the heel hurts, you land more softly on it, push off less firmly and lean on the front of the foot. A 2017 review of 19 studies found exactly that pattern: less load through the heel at first contact, and more time and load on the midfoot and forefoot.',
        'The change can be small enough that you do not notice it. In that review, the total time each foot spent on the ground was about the same as in people without heel pain. In a lab study, 18 people with no foot pain walked with a bead under the heel, and with the larger beads they spent less time standing on that leg (Levins and colleagues, 1998). That is a mild limp, at least in a short lab test with a sudden pain.',
        'Here is where the evidence stands for each area:',
      ],
      table: {
        caption: 'Plantar fasciitis and pain elsewhere: what studies show',
        head: ['Area', 'Direct studies', 'Strength'],
        rows: [
          ['Calf', 'Tight calf linked to plantar fasciitis', 'Moderate'],
          ['Ankle and Achilles', 'Thicker fascia with Achilles changes', 'Low'],
          ['Knee', 'Heel pain common in knee arthritis', 'Low'],
          ['Hip', 'Different hip control in runners', 'Low'],
          ['Back', 'No study in plantar fasciitis', 'None'],
        ],
      },
      after: [
        '"Low" means small studies that measured both things at one time. They show the two problems often go together. They cannot show that the heel caused the other pain, or the other way round.',
      ],
      cites: [CITE.phillipsGait, CITE.levinsGait],
    },
    {
      h2: 'Can plantar fasciitis cause knee pain?',
      keyFact: 'Among 40 people with knee osteoarthritis, 52% had heel pain and 62% had a thickened plantar fascia on ultrasound (Miladi and colleagues, 2023).',
      paragraphs: [
        '**The two often show up together, but no study shows the heel causes the knee pain.** The closest study looked at 40 people with knee osteoarthritis. 21 of them (52%) had heel pain, and an ultrasound showed a thickened plantar fascia in 25 (62%). People with plantar fasciitis more often had a stiff ankle that did not bend up well (Miladi and colleagues, 2023).',
        'That study had no comparison group of people without knee arthritis, so it cannot say heel pain is more common than usual. The authors point out that both problems share risk factors: getting older, weight, the kind of work you do and poorly fitting shoes. A stiff ankle may be the shared link rather than one joint causing the other.',
        'If your knee started to ache on the same side after the heel pain began, and it eases as the heel settles, a changed walk is a reasonable guess. If the knee swells, locks, catches or gives way, it has its own problem and needs its own check.',
        'For pain around the kneecap, the 2019 patellofemoral pain guideline recommends exercise that combines the hip and the knee (Willy and colleagues, 2019). If you also have flat feet, the foot side of the knee story is on [flat feet and knee pain](/flat-feet-knee-pain/).',
      ],
      cites: [CITE.miladiKneeOa, CITE.willyPfpGuideline],
    },
    {
      h2: 'Can plantar fasciitis cause hip pain?',
      keyFact: 'Runners with plantar fasciitis showed lower gluteus medius activity and more pelvic drop than runners without it, in a study of 15 against 15 (Kongtong and Khongprasert, 2025).',
      paragraphs: [
        '**There is a hip link, but which comes first is unknown.** A 2025 lab study compared 15 long-distance runners with plantar fasciitis and 15 without. The runners with heel pain used their gluteus medius and gluteus maximus, the side and back hip muscles, less at certain points of the stride. Their pelvis dropped more on the other side, and their knee and heel tilted inward more (Kongtong and Khongprasert, 2025).',
        'That fits two stories, and the study cannot pick between them. Weak hip control may let the leg roll inward and load the arch more. Or heel pain may change how you run, and the hip follows. No study has measured hip pain in people with plantar fasciitis.',
        'A 2009 study of 25 female runners with a history of plantar fasciitis and 25 matched runners found the plantar fasciitis group landed with a faster rise in force and had lower arches, but no difference in rearfoot motion and, unlike the calf studies, more ankle bend (Pohl and colleagues, 2009). Runners can find more on [foot exercises for runners](/foot-exercises-for-runners/).',
      ],
      cites: [CITE.kongtongHip, CITE.pohlRunners],
    },
    {
      h2: 'Can plantar fasciitis cause back pain?',
      keyFact: 'No study has measured whether plantar fasciitis leads to low back pain. For flat feet, the Framingham Foot Study of 1,930 adults found no link with standing foot posture (Menz and colleagues, 2013).',
      paragraphs: [
        '**We found no study that tests whether plantar fasciitis leads to back pain.** Some clinic pages say a limp from heel pain "commonly" causes back pain. That is a possible chain, not a measured one.',
        'The nearest evidence is about foot shape, not heel pain. In the Framingham Foot Study, flat foot posture was not linked to low back pain, and only a foot that rolled inward while walking showed a small link, in women (Menz and colleagues, 2013). The details are on [flat feet and back pain](/flat-feet-back-pain/), so we do not repeat them here.',
        'Low back pain is very common, and for most people no single cause can be found (Hartvigsen and colleagues, 2018). So if your back hurts, the heel is one possible contributor among many. Exercise is the best-supported approach for long-lasting back pain: a 2021 Cochrane review of 249 trials found it lowered pain by about 15 points on a 100-point scale (Hayden and colleagues, 2021).',
      ],
      cites: [CITE.menz, CITE.hartvigsen, CITE.haydenExercise],
    },
    {
      h2: 'Can plantar fasciitis cause calf or ankle pain?',
      keyFact: 'In 254 people with plantar fasciitis, 52 to 60 percent had an isolated tight gastrocnemius, the bigger calf muscle (Patel and DiGiovanni, 2011).',
      paragraphs: [
        '**The calf is the best-studied link, and it may run from the calf to the heel.** A tight calf limits how far the ankle bends. In a case-control study of 50 people with plantar fasciitis and 100 without, people with 0 degrees of ankle bend or less had 23.3 times the odds of plantar fasciitis compared with people above 10 degrees (Riddle and colleagues, 2003). In 254 people with plantar fasciitis, 52 to 60 percent had an isolated tight gastrocnemius (Patel and DiGiovanni, 2011).',
        'So a tight calf with heel pain is common, and stretching it is part of the heel pain plan. More on that in [tight calves](/tight-calves/).',
        'The plantar fascia and the Achilles tendon are also linked. In 52 MRI scans, people with Achilles changes had a thicker plantar fascia, 3.43 mm on average against 2.09 mm (Stecco and colleagues, 2013). If the pain sits at the back of the heel rather than underneath, read [plantar fasciitis vs Achilles tendonitis](/plantar-fasciitis-vs-achilles-tendonitis/).',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.steccoPfAchilles],
    },
    {
      h2: 'Does hip strengthening help plantar fasciitis?',
      keyFact: 'In 83 people with plantar fasciitis, stretching alone, stretching plus foot strengthening, and stretching plus foot and hip strengthening all improved pain and function over eight weeks, with no difference between them (Kamonseki and colleagues, 2016).',
      paragraphs: [
        '**For the heel itself, adding hip work did not do better than stretching in the one trial that tested it.** In 2016, Kamonseki and colleagues split 83 people with plantar fasciitis into three groups for eight weeks:',
        {
          list: [
            'Stretching alone.',
            'Stretching plus foot strengthening.',
            'Stretching plus foot strengthening and hip strengthening (the muscles that lift the leg out to the side and turn it out).',
          ],
        },
        'All three groups improved in heel pain, daily function and a reach-and-balance test, and no group did better than the others.',
        'What this means in practice:',
        {
          list: [
            'Stretching stays the base. The 2023 heel pain guideline grades plantar fascia and calf stretching **A**, its top grade, and strength work **B** (Koc and colleagues, 2023).',
            'Hip work is not a shortcut for the heel. One trial, eight weeks and 83 people is not enough to rule out a benefit, but it did not show one.',
            'The trial did not measure knee, hip or back pain. If those hurt, hip strengthening is still a sensible addition, and for kneecap pain the guideline for that condition supports hip and knee exercise (Willy and colleagues, 2019).',
          ],
        },
      ],
      cites: [CITE.kamonseki, CITE.guideline, CITE.willyPfpGuideline],
    },
    {
      h2: 'Which exercises help when heel pain spreads up the leg?',
      paragraphs: [
        'Start with the heel: the stretches and calf work from the [plantar fasciitis exercises](/plantar-fasciitis-exercises/) guide. Then add hip and balance work for the leg above it. Doses below are Walkito’s starting doses from the heel pain and flat feet guides.',
        'Keep it to a level where the heel is no worse the next morning. If walking itself is the trigger, [walking with plantar fasciitis](/walking-with-plantar-fasciitis/) covers how to keep moving without a flare.',
      ],
      exercises: [
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward. A tight calf pulls on the heel all day, so this stretch matters even though you feel it higher up.',
          stop: 'Sharp heel pain, or calf pain that stays after you stop',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          how: 'Take the same position, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Sharp heel pain, or calf pain that stays after you stop',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load while the calf wakes up.',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Hip abduction',
          evidence: { level: 'early', why: 'Hip strengthening was part of one plantar fasciitis trial (Kamonseki 2016) but did not add to stretching for heel pain over eight weeks.' },
          dose: '3 sets of 10, each leg',
          often: 'Strength days',
          feel: 'Work on the outside of the hip',
          how: 'Stand with a resistance band and lift one leg out to the side against it. Push through the heel, not the toes. Keep the body upright and do not lean away. A hip that gives way lands the load on the arch.',
          stop: 'Sharp pain in the hip or groin',
          image: 'Exercise: hip abduction',
          media: 'hip_abduction',
          caption: 'Hip abduction: lift one leg out to the side against the band',
          alt: 'A standing figure with a band around both legs lifting one leg out to the side, the outer hip highlighted',
        },
        {
          name: 'Single-leg hold',
          evidence: { level: 'early', why: 'Walkito’s own addition. Balance improved in all groups of the 2016 trial, but this hold was not tested on its own.' },
          dose: '3 holds of 20 seconds, each leg',
          often: 'Balance days',
          feel: 'Small corrections in the foot, ankle and hip',
          how: 'Stand on one foot and look at one spot ahead. Let the foot wobble. It is meant to, because that wobble is the foot doing the balancing. Keep the pelvis level, so the hip on the standing side works too. Lightly touch a counter or wall with your fingertips if you need to. More on [single-leg balance](/exercises/single-leg-balance/).',
          stop: 'Sharp pain in the foot or ankle, not just wobble',
          image: 'Exercise: single-leg hold',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: stand on one foot and let it make small corrections',
          alt: 'A figure balancing on one leg, the lower leg muscles highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.kamonseki],
    },
    {
      h2: 'How can you tell if the knee, hip or back pain is not from the heel?',
      keyFact: 'Serious causes of back pain are rare, and an international framework lists the warning signs clinicians screen for first (Finucane and colleagues, 2020).',
      paragraphs: [
        'A changed walk is only one explanation. These signs point to a separate problem that needs its own check:',
        {
          list: [
            '**The other pain came first,** or it has nothing to do with how much you walk.',
            '**The knee swells, locks, catches or gives way.** Those are signs of a problem inside the knee.',
            '**The pain is in the groin,** or the hip is stiff when you put on socks or shoes.',
            '**Pain runs down the leg below the knee, with numbness, tingling or weakness.** That can come from a nerve in the back, and heel pain with burning or tingling may be nerve pain too.',
            '**Pain at night or at rest** that does not ease when you change position. See also [heel pain at night](/heel-pain-at-night/).',
          ],
        },
        'Clinicians use a short list of warning signs to rule out rare serious spine problems (Finucane and colleagues, 2020). They are in the list below.',
      ],
      cites: [CITE.finucaneRedFlags],
    },
  ],
  faq: [
    {
      q: 'Can plantar fasciitis cause knee pain?',
      cites: [CITE.phillipsGait, CITE.miladiKneeOa],
      a: 'It may contribute, but it is not proven. Heel pain shifts load toward the front of the foot as you walk, which changes how the knee is loaded. Among 40 people with knee arthritis, 52% had heel pain, but with no comparison group the study cannot show that one caused the other.',
    },
    {
      q: 'Can plantar fasciitis cause hip pain?',
      cites: [CITE.kongtongHip],
      a: 'Possibly, but no study has measured hip pain in people with plantar fasciitis. A 2025 study of 15 runners with plantar fasciitis and 15 without found lower activity in the side hip muscles and more pelvic drop in the heel pain group. It could not tell which came first.',
    },
    {
      q: 'Can plantar fasciitis cause lower back pain?',
      cites: [CITE.menz, CITE.hartvigsen],
      a: 'There is no study testing it. A limp from heel pain could add strain, but that chain has not been measured. For most people with low back pain no single cause is found, and in the Framingham Foot Study, flat foot posture was not linked to back pain.',
    },
    {
      q: 'Can plantar fasciitis cause calf pain?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'A tight calf often goes with plantar fasciitis, and the link may run from the calf to the heel. The studies measured tightness, not calf pain. People with 0 degrees of ankle bend or less had 23.3 times the odds of plantar fasciitis, and 52 to 60 percent of 254 people with it had a tight gastrocnemius.',
    },
    {
      q: 'Can heel pain cause pain on the other leg?',
      cites: [CITE.levinsGait],
      a: 'It can, in theory. When one heel hurts, you may spend less time standing on that leg, as a short lab test in 18 people with a painful bead under the heel showed. No study has measured pain in the other leg in people with plantar fasciitis.',
    },
    {
      q: 'Will hip exercises help my plantar fasciitis?',
      cites: [CITE.kamonseki],
      a: 'Not for the heel itself, as far as the one trial shows. In 83 people over eight weeks, adding foot and hip strengthening to stretching did not reduce heel pain more than stretching alone, and all groups improved. Hip work can still make sense if your knee or hip also hurts.',
    },
    {
      q: 'Should I work on the heel or the knee first?',
      cites: [CITE.guideline, CITE.willyPfpGuideline],
      a: 'You can work on both at once. Heel stretches and calf strength are graded A and B in the 2023 heel pain guideline, and hip and knee exercise is recommended for kneecap pain. If the knee swells, locks or gives way, get it checked rather than waiting for the heel to settle.',
    },
    {
      q: 'Can plantar fasciitis cause ankle pain?',
      cites: [CITE.steccoPfAchilles],
      a: 'Pain at the back of the heel or around the Achilles tendon can go with plantar fasciitis. In 52 MRI scans, people with Achilles changes had a thicker plantar fascia, 3.43 mm on average against 2.09 mm. Pain on the sides of the ankle after a twist is a different problem.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the knee, hip or back pain came first, or does not change with how much you walk',
      'the knee swells, locks, catches or gives way, or you cannot fully bend or straighten it',
      'pain runs down the leg below the knee, or you have numbness, tingling, burning or weakness in the leg or foot',
      'pain wakes you at night or is there at rest and does not ease with a change of position',
      'you have back pain with fever, unexplained weight loss, or a history of cancer',
      'you have numbness around the groin or buttocks, or new trouble controlling your bladder or bowels: go to an emergency department',
      'pain started after a fall, a twist or a crack, or you cannot put weight on the leg',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app with the exercises on this page: calf and soleus stretches, heel raises, hip abduction and single-leg balance. It works on the heel and the leg above it. It does not assess your knee, hip or back, so get those checked if they have their own warning signs.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it. A test every 14 days compares your left and right sides. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['heelPain', 'flatFeetKneePain', 'flatFeetBackPain'],
  crumb: 'Plantar fasciitis and knee, hip or back pain',
  campaign: 'guide-can-plantar-fasciitis-cause-knee-pain',
};
