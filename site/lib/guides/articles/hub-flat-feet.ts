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
  updated: '2026-10-05',
  title: 'Flat Feet: Causes, Types and When They Need Attention',
  description:
    'What flat feet are, flexible vs rigid, whether they cause problems, adult-acquired flatfoot, fallen arches, exercises, and when to see a clinician.',
  h1: 'Flat feet: what they are, what causes them, and when they need attention',
  lede:
    'Flat feet mean the arch of the foot sits lower than usual or touches the ground when you stand. Most flat feet are flexible, meaning the arch appears when the foot is off the ground, and most cause no pain at all. A smaller number are rigid or develop in adulthood from a weakening tendon, and those are the cases worth paying closer attention to.',
  takeaways: [
    'A 2023 systematic review of 12 population studies estimated an overall flat foot prevalence of about 15.6 percent, though the figure varies widely by age group, measurement method and population (Salinas-Torres and colleagues, 2023).',
    'Most flat feet are flexible and lifelong. A rigid flat foot, one that stays flat even when the foot is lifted, is structural and will not change with exercise.',
    'The Framingham Foot Study of about 1,900 adults found no link between flat foot posture and low back pain. It found a small link in women between a foot that rolls inward during walking and back pain, and no link in men (Menz and colleagues, 2013).',
    'Adult-acquired flatfoot, most often caused by a weakening posterior tibial tendon, can bring pain and swelling on the inside of the ankle and a progressive arch collapse (Ling and Lui, 2017).',
    'In a trial of 52 people with flexible flat feet, six weeks of combined exercise changed arch shape more than in a control group. The trial measured arch shape, not pain (Brijwasi and Borkar, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What are flat feet?',
      figure: { id: 'arches', caption: 'The same foot bones with a flat foot, a typical arch and a high arch, seen from the inner side.', alt: 'Three feet seen from the inner side on a flat floor: a flat foot whose arch rests on the floor, a typical arch with a small gap underneath, and a high arch with a large gap under the middle of the foot.' },
      keyFact: 'A 2023 systematic review pooling 12 population studies of about 16,000 people found flat feet affect roughly 15.6 percent overall, with higher rates linked to higher BMI and older age (Salinas-Torres and colleagues, 2023).',
      paragraphs: [
        'The arch of the foot, called the medial longitudinal arch, is formed by the bones, ligaments and tendons on the inside of the foot. In a flat foot, this arch is lower or absent when you stand. The medical term is pes planus.',
        'Flat feet are common. A 2023 systematic review pooled 12 population-based studies covering about 16,000 people and reported an overall prevalence of 15.6 percent. In adults alone, estimates range from about 5 to 27 percent depending on the population and the measurement method. Higher BMI and older age are associated with a higher prevalence.',
        '"Fallen arches" is a common name for flat feet. Most of the time the two phrases mean the same thing. Sometimes "fallen arches" is used more specifically for an arch that has dropped in adulthood, which has a different cause covered below.',
        'Having flat feet does not automatically mean something is wrong. Many people with low arches walk, run and stand without any symptoms. The questions that matter are whether the flat foot is flexible or rigid, and whether it is causing pain.',
      ],
      cites: [CITE.salinasTorres],
    },
    {
      h2: 'How do you tell if flat feet are flexible or rigid?',
      keyFact: 'In a trial of 52 people with flexible flat feet, six weeks of short-foot, ankle, hip and stretching exercises improved two measures of arch shape more than a control group (Brijwasi and Borkar, 2023).',
      paragraphs: [
        'A flexible flat foot is one where the arch flattens under your weight but comes back when the foot is off the ground. Most flat feet are this type. A rigid flat foot stays flat whether you are standing on it or not.',
        'A quick check: sit down and look at the inside of your foot. If you can see an arch, stand up on both feet. If the arch disappears when you stand but was there when you sat, the flat foot is flexible. Another way: stand on your toes. If the arch appears when you rise up, it is flexible.',
        'The difference matters because exercise can influence a flexible arch. In a trial of 52 people with flexible flat feet, six weeks of short-foot exercises, ankle work, hip strengthening and stretching changed two measures of arch shape more than in a control group. A rigid flat foot is structural (often from a tarsal coalition, a bony bridge between bones in the foot) and exercise will not change its shape. A rigid flat foot that causes pain usually needs a clinician\'s assessment.',
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Are flat feet actually a problem?',
      keyFact: 'The Framingham Foot Study of about 1,900 adults found no link between flat foot posture and back pain, though a pronated walking gait showed a small link in women only (Menz and colleagues, 2013).',
      paragraphs: [
        'For most people, no. A flexible flat foot that causes no pain and does not limit what you do is a normal variation in foot shape, not a condition that needs solving.',
        'The worry people most often bring up is back pain. The largest study on the question, the Framingham Foot Study, looked at about 1,900 adults. It found no association between flat foot posture and low back pain. In women, a foot that rolled inward while walking (pronated gait) showed a small link to back pain, but the foot posture itself, flat or not, did not. In men, neither posture nor gait was linked to back pain.',
        'Flat feet can shift how load travels through the leg. Some runners with very pronated feet develop overuse injuries at the ankle or knee, but the link between foot posture and injury is weaker than many people assume. A 2024 review of short-foot training on flat feet found no clear change in foot posture overall, and a change in one measure of arch drop only in programs that ran longer than six weeks. Both the trial and the review measured arch shape, not pain or injury rates.',
        'The cases where flat feet do matter are covered below: adult-acquired flatfoot from a weakening tendon, and flat feet that come with pain, swelling, or a sudden change in arch height.',
      ],
      cites: [CITE.menz, CITE.cheng],
    },
    {
      h2: 'What is adult-acquired flatfoot?',
      paragraphs: [
        'Adult-acquired flatfoot deformity is a condition where an arch that was normal collapses in adulthood, usually because the posterior tibial tendon (the tendon that holds up the arch from the inside of the ankle) weakens and can no longer do its job. The clinical name for the tendon problem is posterior tibial tendon dysfunction.',
        'The posterior tibial tendon runs behind the inside ankle bone and attaches to the bones that form the arch. When it stretches or tears, the arch drops, the heel tilts outward, and the forefoot can start to point away from the midline. Pain and swelling along the inside of the ankle are common early signs. A single-heel rise test, where you try to stand on one foot and rise onto your toes, may be difficult or painful on the affected side.',
        'An overview in The Open Orthopaedics Journal describes four stages: stage I has tendon inflammation but no visible deformity, stage II shows a flexible flatfoot deformity that can still be corrected by hand, stage III is a rigid deformity that cannot be corrected manually, and stage IV involves ankle joint changes on top of the rigid deformity.',
        'A systematic review of exercise for posterior tibial tendon dysfunction found limited randomized evidence. The review noted that clinical guidelines recommend non-surgical management including exercise, orthoses and activity modification for early stages (stages I and II), but the number of high-quality trials is small. Later stages often require a clinician\'s assessment and may involve bracing or surgery.',
        'If one arch has dropped as an adult, with pain or swelling on the inside of the ankle, see a clinician before starting an exercise program. This is not the same as a lifelong flexible flat foot.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'What symptoms mean flat feet need attention?',
      paragraphs: [
        'Most flat feet produce no symptoms and need no medical workup. A flexible flat foot that has been there since childhood and causes no pain is a normal variation in foot shape. The following patterns are the ones worth checking with a clinician:',
      ],
      bullets: [
        'Pain along the inside of the ankle or under the arch that does not settle with rest.',
        'Swelling on the inside of the ankle, especially if it appeared recently.',
        'One arch that has flattened as an adult when the other has not.',
        'Difficulty standing on one foot and rising onto your toes on the affected side.',
        'Pain in the knee, shin or hip that you suspect is linked to how the foot lands.',
        'A rigid flat foot (the arch stays flat even when the foot is off the ground).',
        'Numbness, tingling or a feeling of instability in the ankle.',
      ],
    },
    {
      h2: 'Do shoes and insoles help flat feet?',
      paragraphs: [
        'Supportive shoes with a firm midsole and some arch support can make standing and walking more comfortable for people with flat feet. They do not change the arch over time, but they reduce the work the arch muscles have to do during the day.',
        'Off-the-shelf arch insoles are widely available and inexpensive. Custom orthotics, made from a mold of your foot, cost more and are sometimes recommended for posterior tibial tendon dysfunction. The evidence behind orthotics for flat feet specifically is thinner than most people assume. For plantar fasciitis, the 2023 heel pain guideline recommends against using orthotics as a standalone short-term approach (grade B against) but gives combined care including orthotics a C.',
        'If your flat feet cause no pain, you do not need special shoes. If standing or walking makes the arch or ankle ache, a shoe with a firm sole and mild arch support is a reasonable first step, and worth trying before spending more on custom inserts. Shoes with very flat, unsupportive soles (thin sandals, worn-out sneakers) tend to make arch fatigue worse on long days.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Which exercises help flat feet?',
      paragraphs: [
        'Exercise for flat feet focuses on the muscles that support the arch from below (the intrinsic foot muscles) and the muscles higher up that control how the foot lands (the calf, the hip). The best evidence so far comes from a trial of 52 people with flexible flat feet where six weeks of combined exercise changed arch shape more than in a control group. That trial included short-foot work, ankle exercises, hip strengthening and stretching, done together.',
        'A 2024 review of short-foot training on its own was less encouraging: it found no clear change overall, and an improvement in one arch measure only in programs longer than six weeks. The takeaway is that a combined program works better than one exercise in isolation, and patience matters.',
        '[Flat feet exercises](/flat-feet-exercises/) has the full exercise list, doses, what each should feel like, and the evidence behind each one. Walkito builds a weekly plan around an arch-hold goal, progressing from seated short-foot work through standing and single-leg versions, then adding band resistance and hip strengthening. Individual exercise pages go deeper:',
      ],
      bullets: [
        '[Short foot exercise](/exercises/short-foot-exercise/) trains the arch to lift without curling the toes.',
        '[Towel scrunch](/exercises/towel-scrunch/) wakes up the small muscles under the arch.',
        '[Toe spread](/exercises/toe-spread/) works the muscles between the toes that share load with the arch.',
        '[Ankle inversion with a band](/exercises/ankle-inversion-band/) strengthens the posterior tibial muscle, the same one involved in adult-acquired flatfoot.',
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Related conditions',
      paragraphs: [
        'Flat feet can overlap with other foot problems, especially when standing or walking for long periods. If the pain is near the heel and follows the morning pattern (sharp on the first steps, easing after a few minutes), that is more consistent with plantar fasciitis. See [plantar fasciitis](/plantar-fasciitis/) for a full overview.',
      ],
      bullets: [
        '[Ball of foot pain](/ball-of-foot-pain/) can come from excess load on the forefoot when the arch is low. Calf tightness shifts weight forward.',
        '[Feet hurt from standing all day](/feet-hurt-standing-all-day/) covers the exercises and footwear that help when a long day on a hard floor leaves the arch aching.',
        '[Nurses and foot pain](/nurses-foot-pain/) addresses the demands of 12-hour shifts.',
      ],
    },
    {
      h2: 'All flat feet guides on this site',
      bullets: [
        '[Flat feet exercises](/flat-feet-exercises/) has the full exercise list with doses, progression, and evidence grades.',
        '[Short foot exercise](/exercises/short-foot-exercise/) covers the key arch-training movement in detail.',
        '[Towel scrunch](/exercises/towel-scrunch/) covers the towel-pull exercise for intrinsic foot muscles.',
        '[Toe spread](/exercises/toe-spread/) covers spreading the toes to share load with the arch.',
        '[Ankle inversion with a band](/exercises/ankle-inversion-band/) strengthens the posterior tibial muscle.',
        '[Ball of foot pain](/ball-of-foot-pain/) covers forefoot pain, which overlaps with flat feet when load shifts forward.',
        '[Feet hurt from standing all day](/feet-hurt-standing-all-day/) covers the exercises and footwear for long days on your feet.',
        '[Nurses and foot pain](/nurses-foot-pain/) addresses foot pain specific to healthcare workers.',
      ],
    },
  ],
  faq: [
    {
      q: 'Are flat feet something to worry about?',
      cites: [CITE.menz],
      a: 'For most people, no. A flexible flat foot that causes no pain and does not limit activity is a normal shape, not a disorder. The Framingham Foot Study of about 1,900 adults found no link between flat foot posture and low back pain (Menz and colleagues, 2013). The cases that do need attention are rigid flat feet, and arches that have collapsed in adulthood with pain or swelling.',
    },
    {
      q: 'What causes flat feet in adults?',
      cites: [CITE.ling],
      a: 'Most adult flat feet are lifelong and simply how the foot developed. When a previously normal arch collapses in adulthood, the most common cause is posterior tibial tendon dysfunction: the tendon on the inside of the ankle weakens, the arch drops, and pain or swelling can follow (Ling and Lui, 2017). Other causes include injury, inflammatory arthritis, and nerve conditions.',
    },
    {
      q: 'Can flat feet cause knee or hip pain?',
      a: 'A low arch changes how force travels up the leg, and some people with very pronated feet develop overuse symptoms at the knee, shin or hip. But the link is weaker than widely assumed. Many people with flat feet have no knee or hip problems. If you have both flat feet and knee or hip pain, a clinician can check whether the two are related in your case.',
    },
    {
      q: 'Do children grow out of flat feet?',
      cites: [CITE.salinasTorres],
      a: 'Most do. Flat feet are nearly universal in toddlers, and the arch usually develops by about age 6 to 10. A 2023 systematic review noted that prevalence is highest in children aged 3 to 5 and declines into adolescence (Salinas-Torres and colleagues, 2023). A child who still has painless flexible flat feet into their teens is unlikely to have a problem that needs solving.',
    },
    {
      q: 'Should I wear arch supports if I have flat feet?',
      cites: [CITE.guideline],
      a: 'If your flat feet cause no pain, arch supports are optional. If standing or walking makes the arch ache, a shoe with a firm sole and mild arch support is a reasonable first step. Custom orthotics are sometimes used for posterior tibial tendon dysfunction but the evidence for orthotics in flat feet alone is limited. The 2023 heel pain guideline rates orthotics as a standalone approach B against.',
    },
    {
      q: 'What is adult-acquired flatfoot?',
      cites: [CITE.ling, CITE.posteriorTibialReview],
      a: 'Adult-acquired flatfoot is a progressive collapse of the arch, usually from weakening of the posterior tibial tendon (Ling and Lui, 2017). It causes pain and swelling on the inside of the ankle, difficulty rising onto the toes on one foot, and the heel tilting outward. Clinical guidelines recommend non-surgical management for early stages, though high-quality trial evidence is limited (Ross and colleagues, 2018).',
    },
    {
      q: 'Is it safe to run with flat feet?',
      a: 'Many runners have flat feet and run without problems. A low arch may increase pronation, which some runners manage with stability shoes. If running causes pain in the arch, ankle or knee that does not settle between runs, a clinician can check whether the flat foot is contributing. Strengthening the arch and hip muscles is a reasonable approach whether or not you change shoes.',
    },
    {
      q: 'Is a flat foot considered a disability?',
      a: 'Usually not. Most flat feet cause no pain and do not limit activity, so they do not meet disability criteria on their own. Severe or rigid flat feet that cause ongoing pain and limit walking or standing can sometimes support a disability claim, but that depends on the specific program, such as Social Security, and your overall function, not on having flat feet alone.',
    },
    {
      q: 'What ethnicity has flat feet?',
      cites: [CITE.salinasTorres],
      a: 'Flat feet (pes planus) occur more often in some groups, though the research is limited. A 2023 systematic review of population studies found Asian race linked to more than twice the odds of flat feet, and White race linked to roughly half the odds, in separate subgroup comparisons. These are population patterns, not a prediction for any one person\u2019s feet.',
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
    text: 'You do not need to decide which arch exercises to do or when to move to a harder version. Walkito builds a plan one week at a time around one goal. For a flexible flat foot, that goal is an arch hold: holding the arch up for 60 seconds. If you also have heel pain, pain-free mornings come first.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once the first goal is met), a short test checks arch hold, calf endurance and balance. The arch-hold goal stays until you reach it, however many weeks that takes.',
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If one arch has dropped as an adult with pain or swelling, see a clinician before starting.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Flat feet',
  campaign: 'hub-flat-feet',
};
