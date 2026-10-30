import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Hub: Flat feet
 *
 * No new citations needed. Salinas-Torres VM, et al. Prevalence and
 * Clinical Factors Associated With Pes Planus Among Children and Adults:
 * A Population-Based Synthesis and Systematic Review. Journal of Foot
 * and Ankle Surgery. 2023;62(5):899-903. is already in CITATIONS[] as
 * CITE.salinasTorres (index 45). An earlier draft of this file pointed at
 * a stale placeholder index (39, which actually belongs to
 * silbernagelHeelRise). Fixed below to use CITE.salinasTorres directly.
 *
 * Hub role (2026-10-26): give the short answer to "flat feet" /
 * "what are flat feet" / "flat feet causes", then route to
 * /flat-feet-exercises/, /flat-feet-test/, /arch-pain/ and
 * /posterior-tibial-tendon-dysfunction-exercises/ instead of repeating them.
 *
 * Integration:
 *   1. Add to EN_ONLY in lib/i18n.ts:
 *        hubFlatFeet: '/flat-feet/',
 *   2. Register the guide in articles-en.ts / index.ts.
 */

export const HUB_FLAT_FEET_EN: Guide = {
  lang: 'en',
  page: 'hubFlatFeet' as any,
  mainSource: CITE.ling,
  published: '2026-10-05',
  updated: '2026-10-26',
  title: 'Flat Feet: What They Are, Causes and When to Worry',
  description:
    'What flat feet are, what causes them, flexible vs rigid, when they need a clinician, and where to find the test, exercises and arch pain guides.',
  h1: 'Flat feet: what they are, what causes them, and when they need attention',
  lede:
    'Flat feet (pes planus) means the arch on the inside of the foot sits low or touches the ground when you stand. Most flat feet are flexible, lifelong and painless, a normal variation in foot shape. The cases worth attention are a rigid flat foot and an arch that collapses in adulthood, most often because the posterior tibial tendon weakens.',
  takeaways: [
    'A 2023 systematic review of 12 population studies estimated an overall flat foot prevalence of about 15.6 percent, higher in young children and people with obesity (Salinas-Torres and colleagues, 2023).',
    'Most flat feet are flexible: the arch comes back when the foot is off the ground. A rigid flat foot stays flat and will not change with exercise.',
    'The Framingham Foot Study of about 1,900 adults found no link between flat foot posture and low back pain (Menz and colleagues, 2013).',
    'An arch that drops in adulthood, with pain or swelling on the inside of the ankle, is most often posterior tibial tendon dysfunction and should be checked by a clinician (Ling and Lui, 2017).',
    'In a trial of 52 people with flexible flat feet, six weeks of combined exercise changed arch shape more than in a control group. It measured arch shape, not pain (Brijwasi and Borkar, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What are flat feet?',
      figure: { id: 'arches', caption: 'The same foot bones with a flat foot, a typical arch and a high arch, seen from the inner side.', alt: 'Three feet seen from the inner side on a flat floor: a flat foot whose arch rests on the floor, a typical arch with a small gap underneath, and a high arch with a large gap under the middle of the foot.' },
      keyFact: 'A 2023 systematic review pooling 12 population studies of about 16,000 people found flat feet affect roughly 15.6 percent overall, with higher rates in young children, teenagers and people with obesity (Salinas-Torres and colleagues, 2023).',
      paragraphs: [
        'The arch on the inside of the foot, called the medial longitudinal arch, is formed by bones, ligaments and tendons. In a flat foot this arch is lower or absent when you stand. The medical term is pes planus, and "fallen arches" is the common name. Sometimes "fallen arches" is used more narrowly for an arch that has dropped in adulthood.',
        'Flat feet are common. In adults alone, estimates range from about 5 to 27 percent depending on the population and how the arch is measured.',
        '**Having flat feet does not automatically mean something is wrong.** Many people with low arches walk, run and stand without any symptoms. What matters is whether the foot is flexible or rigid, and whether it hurts.',
      ],
      cites: [CITE.salinasTorres],
    },
    {
      h2: 'What causes flat feet?',
      paragraphs: [
        'Flat feet have a few distinct causes, and which one applies decides whether they matter:',
        {
          list: [
            '**How the foot developed.** Most flat feet are lifelong and simply the foot\'s shape. Flat feet are nearly universal in toddlers, and the arch usually develops by about age 6 to 10. See [flat feet in kids](/flat-feet-in-kids/).',
            '**A bony bridge between foot bones.** A tarsal coalition, a bridge between two foot bones, is one cause of a rigid flat foot that stays flat even off the ground (Mehdi and colleagues, 2024).',
            '**A weakening tendon in adulthood.** When the posterior tibial tendon, which holds up the arch from the inside of the ankle, stretches or tears, a previously normal arch can collapse. This is adult-acquired flatfoot, covered below.',
            '**Other causes.** Less often, an arch drops after an injury or alongside another health condition. The warning signs below cover when to get that checked.',
          ],
        },
        'Higher BMI and older age are associated with a higher prevalence of flat feet. Whether they get worse over time is covered in [do flat feet get worse with age](/do-flat-feet-get-worse-with-age/).',
      ],
      cites: [CITE.salinasTorres, CITE.ling, CITE.mehdiCoalition],
    },
    {
      h2: 'How is a flat foot different from a normal foot?',
      keyFact: 'In pooled data from 619 healthy adults, the average foot rested slightly flattened, so a little arch drop when you stand is normal (Redmond and colleagues, 2008).',
      paragraphs: [
        '**There is no sharp line between a flat foot and a normal one.** A normal arch also lowers a little when you stand. In pooled data from 619 healthy adults scored with the Foot Posture Index, a six-part check a clinician does while you stand, the average score was +4 on a scale from -12 (high-arched) to +12 (flat). The authors call that slightly pronated, the normal position at rest, and consider scores below -3 or above +10 clearly outside the normal range.',
        'Navicular drop, how far the bone on the inner side of the arch sinks when you stand up, averages about 3.6 to 8.1 millimetres in healthy adults. Researchers have suggested 10, 13 or 15 millimetres as the upper limit of normal, but none of these cut-offs has been confirmed (Nielsen and colleagues, 2009).',
        'A wet footprint is a rough home check, not a diagnosis: studies disagree on how well a footprint shows the real arch (Hawes and colleagues, 1992; Murley and colleagues, 2009). The [flat feet test](/flat-feet-test/) walks through simple checks you can do at home.',
      ],
      cites: [CITE.redmondFpi, CITE.nielsenNavicular, CITE.hawesFootprint, CITE.murleyArch],
    },
    {
      h2: 'How do you tell if flat feet are flexible or rigid?',
      paragraphs: [
        'Sit down and look at the inside of your foot, then stand up on both feet. If the arch is there when you sit and disappears when you stand, the flat foot is flexible. Another way: stand on your toes. If the arch appears as you rise, it is flexible. Most flat feet are this type.',
        'A rigid flat foot stays flat whether you are standing on it or not. It is structural, exercise will not change its shape, and a rigid flat foot that causes pain usually needs a clinician\'s assessment.',
        '**The difference matters because exercise can influence a flexible arch.** In the trial of 52 people with flexible flat feet, six weeks of short-foot exercises, ankle work, hip strengthening and stretching changed two measures of arch shape more than in a control group (Brijwasi and Borkar, 2023).',
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Are flat feet actually a problem?',
      keyFact: 'The Framingham Foot Study of about 1,900 adults found no link between flat foot posture and back pain, though a pronated walking gait showed a small link in women only (Menz and colleagues, 2013).',
      paragraphs: [
        '**For most people, no.** A flexible flat foot that causes no pain and does not limit what you do is a normal variation, not a condition that needs solving.',
        'The worry people most often raise is [back pain](/flat-feet-back-pain/). In the Framingham Foot Study of about 1,900 adults:',
        {
          list: [
            '**Overall:** no association between flat foot posture and low back pain.',
            '**In women:** a foot that rolled inward while walking (pronated gait) showed a small link to back pain, but the foot posture itself did not.',
            '**In men:** neither posture nor gait was linked to back pain.',
          ],
        },
        'Flat feet can shift how load travels up the leg, and some runners with very pronated feet develop overuse problems at the ankle or [knee](/flat-feet-knee-pain/), but the link between foot posture and injury is weaker than many people assume.',
      ],
      cites: [CITE.menz],
    },
    {
      h2: 'What is adult-acquired flatfoot?',
      paragraphs: [
        'Adult-acquired flatfoot is an arch that was normal and collapses in adulthood, usually because the posterior tibial tendon weakens. The tendon runs behind the inside ankle bone and attaches to the bones of the arch. When it stretches or tears, the arch drops, the heel tilts outward, and the forefoot can start to point away from the midline. The tendon problem is called [posterior tibial tendon dysfunction](/posterior-tibial-tendon-dysfunction-exercises/).',
        'Pain and swelling along the inside of the ankle are common early signs. Standing on one foot and rising onto your toes may be difficult or painful on the affected side. An overview in The Open Orthopaedics Journal describes four stages, from tendon inflammation with no visible deformity (stage I) and a flexible deformity that can still be corrected by hand (stage II), to a rigid deformity (stage III) and ankle joint changes on top of it (stage IV).',
        'A systematic review found limited randomized evidence for exercise, but noted that clinical guidelines recommend non-surgical management including exercise, orthoses and activity modification for stages I and II. Later stages often need a clinician\'s assessment and may involve bracing or surgery.',
        '**If one arch has dropped as an adult, with pain or swelling on the inside of the ankle, see a clinician before starting an exercise program.** This is not the same as a lifelong flexible flat foot.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'What symptoms mean flat feet need attention?',
      paragraphs: [
        'Most flat feet produce no symptoms and need no medical workup. These patterns are worth checking with a clinician:',
      ],
      bullets: [
        'Pain along the inside of the ankle or under the arch that does not settle with rest (see [arch pain](/arch-pain/)).',
        'Swelling on the inside of the ankle, especially if it appeared recently.',
        'One arch that has flattened as an adult when the other has not.',
        'Difficulty standing on one foot and rising onto your toes on the affected side.',
        'Pain in the knee, shin or hip that you suspect is linked to how the foot lands.',
        'A rigid flat foot (the arch stays flat even when the foot is off the ground).',
        'Numbness, tingling or a feeling of instability in the ankle.',
      ],
    },
    {
      h2: 'Do exercises, shoes and insoles help flat feet?',
      paragraphs: [
        'Exercise for a flexible flat foot targets [the small muscles under the arch](/foot-strengthening-exercises/) and the muscles higher up that control how the foot lands (the calf and the hip). The best evidence is the six-week trial above, which combined short-foot work, [ankle exercises](/ankle-strengthening-exercises/), hip strengthening and stretching. A 2024 review of short-foot training on its own found no clear change in foot posture overall, and a change in one arch measure only in programs longer than six weeks. **A combined program works better than one exercise in isolation, and patience matters.**',
        '[Flat feet exercises](/flat-feet-exercises/) has the full list with doses, what each should feel like, and the evidence behind each one, starting with the [short foot exercise](/exercises/short-foot-exercise/) and [ankle inversion with a band](/exercises/ankle-inversion-band/).',
        'Supportive shoes with a firm midsole and some arch support can make standing and walking more comfortable. They do not change the arch over time, but they reduce the work the arch muscles do during the day. The evidence behind orthotics for flat feet specifically is thinner than most people assume: for plantar fasciitis, the 2023 heel pain guideline recommends against orthotics as a standalone short-term approach (grade B against) but gives combined care including orthotics a C. More in [insoles vs exercises](/insoles-vs-exercises/).',
        '**If your flat feet cause no pain, you do not need special shoes.** If the arch or ankle aches on long days, a shoe with a firm sole and mild arch support is a reasonable first step before spending more on custom inserts.',
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.guideline],
    },
    {
      h2: 'More flat feet guides',
      bullets: [
        'Check and train: [flat feet test](/flat-feet-test/), [flat feet exercises](/flat-feet-exercises/), [towel scrunch](/exercises/towel-scrunch/), [toe spread](/exercises/toe-spread/), [toe strengthening](/toe-strengthening-exercises/), [ankle mobility](/ankle-mobility-exercises/) and [tight calves](/tight-calves/).',
        'Flat feet and pain: [arch pain](/arch-pain/), [posterior tibial tendon dysfunction](/posterior-tibial-tendon-dysfunction-exercises/), [knee pain](/flat-feet-knee-pain/), [back pain](/flat-feet-back-pain/) and [ball of foot pain](/ball-of-foot-pain/). Heel pain that is sharpest on the first steps of the morning fits [plantar fasciitis](/plantar-fasciitis/) better.',
        'Long days on your feet: [feet hurt from standing all day](/feet-hurt-standing-all-day/) and [nurses and foot pain](/feet-hurt-standing-all-day/).',
        'Kids and age: [flat feet in kids](/flat-feet-in-kids/) and [whether flat feet get worse with age](/do-flat-feet-get-worse-with-age/).',
        'Other foot shapes: [high arches](/high-arches-exercises/) and [bunions](/bunion-exercises/).',
        'Shoes and apps: [barefoot shoes](/barefoot-shoes/), [insoles vs exercises](/insoles-vs-exercises/) and the [best app for flat feet](/best-app-for-flat-feet/).',
      ],
    },
  ],
  faq: [
    {
      q: 'What is the main cause of flat feet?',
      cites: [CITE.ling],
      a: 'Most flat feet are lifelong and simply how the foot developed. When a previously normal arch collapses in adulthood, the most common cause is posterior tibial tendon dysfunction: the tendon on the inside of the ankle weakens, the arch drops (Ling and Lui, 2017). Less often, an arch drops after an injury or alongside another health condition, which a clinician can check.',
    },
    {
      q: 'Are flat feet something to worry about?',
      cites: [CITE.menz],
      a: 'For most people, no. A flexible flat foot that causes no pain and does not limit activity is a normal shape. The Framingham Foot Study of about 1,900 adults found no link between flat foot posture and low back pain (Menz and colleagues, 2013). Rigid flat feet and arches that collapse in adulthood need attention.',
    },
    {
      q: 'How do I know if I have flat feet?',
      a: 'Look at the inside of your foot while you stand: if the arch sits low or touches the floor, you have a flat foot. Then sit or rise onto your toes. If the arch comes back, the flat foot is flexible, the common and usually harmless type. A wet footprint is a rough home check, not a diagnosis.',
    },
    {
      q: 'Can exercises change flat feet?',
      cites: [CITE.brijwasi, CITE.cheng],
      a: 'They can influence the shape of a flexible arch, though not a rigid one. In a trial of 52 people with flexible flat feet, six weeks of combined short-foot, ankle, hip and stretching exercises changed arch shape more than in a control group. A 2024 review found short-foot training alone changed one arch measure only in programs longer than six weeks.',
    },
    {
      q: 'Do children grow out of flat feet?',
      cites: [CITE.salinasTorres],
      a: 'Most do. Flat feet are nearly universal in toddlers, and the arch usually develops by about age 6 to 10. A 2023 systematic review noted that prevalence is highest in children aged 3 to 5 and declines into adolescence (Salinas-Torres and colleagues, 2023). Painless flexible flat feet that last into the teens are rarely a problem.',
    },
    {
      q: 'What is adult-acquired flatfoot?',
      cites: [CITE.ling, CITE.posteriorTibialReview],
      a: 'Adult-acquired flatfoot is a progressive collapse of the arch, usually from weakening of the posterior tibial tendon (Ling and Lui, 2017). It brings pain and swelling on the inside of the ankle and difficulty rising onto the toes on one foot. Clinical guidelines recommend non-surgical management for early stages, though high-quality trial evidence is limited (Ross and colleagues, 2018).',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'one arch has flattened suddenly as an adult',
      'there is pain or swelling along the inside of the ankle',
      'you cannot stand on one foot and rise onto your toes on the affected side',
      'the arch stays flat even when the foot is off the ground (rigid flat foot)',
      'the pain followed an injury or a fall',
      'you have numbness, tingling or instability in the ankle',
      'both feet hurt and other joints are stiff or swollen',
      'the pain is getting worse week over week despite exercise',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You do not need to decide which arch exercises to do or when to move to a harder version. [Walkito](/program/) builds a plan one week at a time around one goal. For a flexible flat foot, that goal is an arch hold: holding the arch up for 60 seconds. If you also have heel pain, pain-free mornings come first.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once the first goal is met), a short test checks arch hold, calf endurance and balance. The arch-hold goal stays until you reach it, however many weeks that takes.',
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If one arch has dropped as an adult with pain or swelling, see a clinician before starting.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  crumb: 'Flat feet',
  campaign: 'hub-flat-feet',
};
