import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * burnsCavus | Burns J, Crosbie J, Ouvrier R, Hunt A. Effective orthotic therapy for the painful cavus foot: a randomized controlled trial. Journal of the American Podiatric Medical Association. 2006;96(3):205–211. | doi: 10.7547/0960205 | pmid: 16707631 | RCT
 */

export const HIGH_ARCHES_EN: Guide = {
  lang: 'en',
  page: 'highArches',
  mainSource: CITE.burnsCavus,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'High Arches Exercises: What Helps Pes Cavus Foot Pain',
  description:
    'High arches exercises for pes cavus foot pain: calf and plantar fascia stretching, ankle stability, custom orthoses evidence, and neurological red flags.',
  h1: 'High arches exercises: what helps and what needs a clinician',
  lede:
    'A high-arched foot, called pes cavus, is rigid and does not flex enough to absorb shock. Force concentrates at the heel and the ball of the foot, and the plantar fascia is often tight. About 60 percent of people with pes cavus report foot pain. The strongest evidence is for cushioned or custom orthoses. Exercise focuses on stretching the calf and plantar fascia, improving ankle mobility, and building stability.',
  intro: [
    'Pes cavus affects roughly 1 in 10 people (Burns and colleagues, 2007). Many people with high arches never have foot pain. For those who do, the pain is usually under the heel, the ball of the foot, or along the tight plantar fascia. The cause matters: most high arches are idiopathic (no known cause), but a subset is caused by neurological conditions such as Charcot-Marie-Tooth disease. Progressive or one-sided high arches always need a clinician.',
  ],
  takeaways: [
    'In a trial of 154 adults with painful pes cavus, custom foot orthoses improved foot pain 8.3 points more than a sham insert at three months, and function 9.5 points more (Burns and colleagues, 2006).',
    'The same trial found custom orthoses reduced plantar pressure by 26 percent, compared with 9 percent for the sham insert.',
    'About 60 percent of people with pes cavus report foot pain, commonly under the heel, the ball of the foot, or the arch (Burns and colleagues, 2005).',
    'Pes cavus can be the first sign of a neurological condition such as Charcot-Marie-Tooth disease. Progressive or one-sided high arches need a neurological assessment, not exercise alone.',
    'No trial has tested an exercise program specifically for pes cavus foot pain. The exercises on this page target the tight structures and unstable joints common in high-arched feet.',
  ],
  toc: true,
  sections: [
    {
      h2: 'What is pes cavus, and why does it cause foot pain?',
      figure: { id: 'arches', caption: 'The same foot bones with a flat foot, a typical arch and a high arch, seen from the inner side.', alt: 'Three feet seen from the inner side on a flat floor: a flat foot whose arch rests on the floor, a typical arch with a small gap underneath, and a high arch with a large gap under the middle of the foot.' },
      paragraphs: [
        'Pes cavus is a foot with an excessively high medial longitudinal arch. The arch stays high even when the foot is bearing weight. Unlike a flat foot, which collapses under load and spreads impact across a wide area, a high-arched foot is rigid and concentrates force on a smaller surface: the heel and the ball of the foot.',
        'The plantar fascia in a cavus foot is typically short and tight, which holds the arch in its high position but reduces the foot\'s ability to flex and absorb shock. The forefoot often sits lower than the rearfoot (a plantarflexed first metatarsal), and the toes may claw. These changes shift pressure onto the metatarsal heads and the heel, and away from the midfoot.',
        'Foot pain in pes cavus commonly presents as metatarsalgia (pain under the ball of the foot), plantar heel pain, or aching along the tight plantar fascia. Ankle sprains are also more common because the rigid, inverted foot is less stable on uneven ground.',
      ],
      cites: [CITE.burnsCavusCochrane, CITE.burnsCavusPain, CITE.burnsCavus],
    },
    {
      h2: 'What causes high arches?',
      paragraphs: [
        'Most high arches are idiopathic, meaning no specific cause is found. These are usually bilateral (both feet), stable over time, and present from childhood.',
        'A smaller but clinically important group is caused by neurological conditions. The most common is Charcot-Marie-Tooth disease (CMT), a hereditary motor and sensory neuropathy that causes progressive muscle weakness and wasting, starting in the feet and lower legs. The cavovarus foot in CMT develops because certain muscles weaken faster than others, pulling the foot into a high-arched, inverted position.',
        'Other neurological causes include spinal cord abnormalities, poliomyelitis, spina bifida, cerebral palsy, and other peripheral neuropathies. Pes cavus can also follow a stroke or spinal cord injury.',
        'The distinction matters for exercise. Idiopathic pes cavus is usually stable: the foot is shaped that way and stays that way. Neurological pes cavus can be progressive: the arch gets higher, the weakness gets worse, and the foot becomes less stable over time. Exercises can maintain mobility and stability in a neurological cavus foot, but they cannot reverse the underlying condition, and a clinician needs to be involved.',
      ],
    },
    {
      h2: 'When should high arches be checked by a clinician?',
      paragraphs: [
        'Not every high-arched foot needs a neurological workup. But certain patterns should always be assessed.',
        'Progressive high arches, meaning the arch is getting higher over months or years, are a red flag for a neurological cause. One-sided pes cavus, where one foot has a much higher arch than the other, is another. Weakness in the foot or lower leg, difficulty lifting the foot during walking (foot drop), clawing of the toes that is getting worse, or a family history of CMT or other neuropathy are all reasons to see a neurologist or a foot and ankle specialist.',
        'If your high arches are bilateral, stable, and have been that way since childhood, and you have no weakness or sensory changes, the arches are most likely idiopathic. The exercises below and a conversation with a podiatrist about orthoses are a reasonable starting point.',
      ],
    },
    {
      h2: 'Do orthoses help pes cavus foot pain?',
      keyFact: 'A randomized trial of 154 adults with pes cavus foot pain found custom orthoses beat a sham insole by 8.3 points on pain and 9.5 points on function at three months (Burns and colleagues, 2006).',
      paragraphs: [
        'Custom foot orthoses have the strongest evidence for pes cavus foot pain. In the only randomized trial, Burns and colleagues assigned 154 adults with chronic foot pain and bilateral pes cavus to either custom-made polypropylene foot orthoses or a flat sham insole. At three months, the custom orthoses group reported 8.3 points more improvement in foot pain on the Foot Health Status Questionnaire than the sham group. Function scores improved 9.5 points more. Plantar pressure dropped 26 percent with the custom orthoses, compared with 9 percent with the sham.',
        'The trial included people with both idiopathic and neuromuscular pes cavus (133 idiopathic, 21 neuromuscular including 16 with Charcot-Marie-Tooth disease). The orthoses were contoured to the shape of the foot with a full-length cushioned top cover.',
        'Over-the-counter cushioned insoles are a reasonable first step before committing to custom orthoses, which are more expensive. The key feature the trial found effective was contouring the shell to the foot\'s exact shape, not just adding flat cushioning.',
      ],
      sourceNote:
        'Burns 2006: 154 adults, 3-month follow-up, Foot Health Status Questionnaire pain difference 8.3 points (95% CI 1.2-15.3, p=0.022), function difference 9.5 points (95% CI 2.9-16.1, p=0.005).',
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Which exercises help high arches?',
      keyFact: 'The 2023 heel pain guideline grades calf and plantar fascia stretching A and strength training B for plantar heel pain, the most common pain site in pes cavus (Koc and colleagues, 2023).',
      paragraphs: [
        'No trial has tested an exercise program designed specifically for pes cavus foot pain. The exercises below target the structures that are commonly tight or unstable in a high-arched foot: the calf, the plantar fascia, the ankle, and the intrinsic foot muscles. They are borrowed from the evidence for plantar fasciitis, ankle instability, and general foot conditioning, and labeled accordingly.',
        'The 2023 heel pain guideline grades calf and plantar fascia stretching A and strength training B for plantar heel pain, which is one of the most common pain sites in pes cavus. No comparable guideline exists for pes cavus specifically.',
        'If any exercise takes your pain to **6/10 or more**, stop for the day.',
      ],
      exercises: [
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'moderate', why: 'Guideline grade A for plantar heel pain. A tight calf is common in pes cavus and increases heel loading.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. A tight gastrocnemius is common in pes cavus and adds to the load on the rigid arch.',
          often: 'Most sessions',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch (bent knee)',
          evidence: { level: 'moderate', why: 'Same mechanism. Targets the deeper calf muscle.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same wall position, then bend the back knee until you feel the stretch lower, near the heel. The soleus only lets go with the knee bent.',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the lower calf highlighted',
        },
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'moderate', why: 'Guideline grade A for plantar heel pain. The plantar fascia is typically tight in pes cavus.' },
          dose: '2 holds of 30 seconds, each foot',
          how: 'Sit and cross the affected foot over the other knee. Pull the toes back gently until you feel a stretch along the arch. The plantar fascia in a high-arched foot is often short and tight.',
          often: 'Most sessions',
          feel: 'A stretch along the arch',
          stop: 'Pain reaches 6/10',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel the arch',
          alt: 'A figure pulling the toes of one foot back, the arch highlighted',
        },
        {
          name: 'Ankle rocks',
          evidence: { level: 'early', why: 'No pes cavus-specific trial. Targets ankle dorsiflexion, which is commonly limited in high-arched feet.' },
          dose: '2 sets of 15, each leg',
          how: 'Stand facing a wall with one foot forward. Drive the knee over the toes while the heel stays flat. This opens up ankle dorsiflexion, which is often restricted in a cavus foot.',
          often: 'Most sessions',
          feel: 'A stretch at the front of the ankle',
          stop: 'Pain reaches 6/10',
          media: 'ankle_rocks',
          caption: 'Ankle rocks: knee travels over the toes, heel stays flat',
          alt: 'A figure at a wall driving the knee forward over the toes',
        },
        {
          name: 'Single-leg hold',
          evidence: { level: 'early', why: 'No pes cavus trial. Ankle sprains are more common in pes cavus; balance work addresses ankle stability.' },
          dose: '3 holds of 30 seconds, each leg',
          how: 'Stand on one foot and look at a fixed spot. Let the foot wobble. Cavus feet are less stable on uneven ground, and balance work trains the muscles that correct those wobbles. Stand near a wall.',
          often: 'Balance days',
          feel: 'Small corrections in the foot and ankle',
          stop: 'Pain reaches 6/10',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: let the foot make corrections',
          alt: 'A figure balancing on one leg, the ankle highlighted',
        },
        {
          name: 'Foot roll',
          evidence: { level: 'early', why: 'Not tested for pes cavus. A comfort measure for the tight plantar fascia.' },
          dose: '2 minutes, each foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball. Firm pressure, not enough to wince. This is a comfort measure for the tight fascia, not a corrective exercise.',
          often: 'Recovery days',
          feel: 'Firm pressure under the foot',
          stop: 'Pain reaches 6/10',
          media: 'foot_roll',
          caption: 'Foot roll: slow and firm, ease off anything sharp',
          alt: 'A seated figure rolling the sole of one foot over a ball',
        },
      ],
      cites: [CITE.guideline, CITE.burnsCavus],
    },
    {
      h2: 'What about shoes for high arches?',
      paragraphs: [
        'Shoes for pes cavus should cushion rather than control. Unlike flat feet, where a firm medial post prevents collapse, a high-arched foot needs the opposite: a shoe that absorbs impact because the foot itself does not.',
        'Look for a cushioned sole, a roomy toe box (clawed toes need space), and no aggressive arch support. A rigid arch cookie built for a normal foot pushes against a cavus arch in the wrong place. Neutral running shoes with good heel and forefoot cushioning are a common recommendation.',
        'If over-the-counter shoes and insoles are not enough, a podiatrist can assess whether custom orthoses are worth the investment. The Burns 2006 trial found that the key to a successful orthotic for pes cavus was a shell contoured to the foot with cushioned top cover, not a rigid corrective device.',
      ],
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Does Walkito help with high arches?',
      paragraphs: [
        'Walkito is built around plantar heel pain and arch pain in adults. It includes calf stretching, plantar fascia stretching, a foot roll and ankle stability work, all of which are relevant to a cavus foot. When you point at the arch on the app\'s body map, the relief session offers the short foot exercise, the plantar fascia stretch and the foot roll.',
        'What the app does not have is a specific high arches goal or a pes cavus program. The exercises that appear are the same ones prescribed for plantar fasciitis and flat feet. For someone with high arches and plantar heel pain, those exercises overlap with what this page recommends. For someone whose pes cavus pain is mainly under the ball of the foot, or who has a neurological cause, the app is not a good fit and a clinician should direct the exercise plan.',
      ],
    },
  ],
  faq: [
    {
      q: 'What exercises help high arches?',
      cites: [CITE.guideline],
      a: 'No trial has tested exercises specifically for pes cavus. The exercises with the best evidence for the pain patterns common in high arches are calf stretching and plantar fascia stretching, both graded A by the 2023 heel pain guideline for plantar heel pain. Ankle stability work and foot rolling address the instability and fascia tightness common in pes cavus.',
    },
    {
      q: 'Do orthotics help high arch foot pain?',
      cites: [CITE.burnsCavus],
      a: 'In a trial of 154 adults with painful pes cavus, custom foot orthoses improved foot pain 8.3 points and function 9.5 points more than a sham insert at three months (Burns 2006). Plantar pressure dropped 26 percent with the custom orthoses. This is the strongest evidence for any single intervention for pes cavus foot pain.',
    },
    {
      q: 'Can you correct high arches with exercise?',
      a: 'Exercise cannot change the bony shape of a pes cavus foot. What it can do is stretch the tight structures (calf, plantar fascia), improve ankle mobility and build stability to reduce ankle sprains and pain. The arch itself will stay high. The goal is to reduce pain and improve function, not to flatten the arch.',
    },
    {
      q: 'Are high arches a sign of a neurological problem?',
      a: 'They can be. Most high arches are idiopathic and stable. But progressive or one-sided pes cavus can be the first sign of Charcot-Marie-Tooth disease or another neurological condition. If your arches are getting higher, if one foot is affected more than the other, or if you have weakness or sensory changes in the feet, see a neurologist.',
    },
    {
      q: 'What shoes are best for high arches?',
      cites: [CITE.burnsCavus],
      a: 'Cushioned shoes with a roomy toe box and no aggressive arch support. A high arch does not collapse, so it does not need motion control. It needs cushioning to absorb the impact the rigid arch cannot. Neutral running shoes with good heel and forefoot cushioning are a common starting point. Custom orthoses with a contoured shell and cushioned top cover have the best trial evidence.',
    },
    {
      q: 'Is pes cavus the same as high arches?',
      a: 'Yes. Pes cavus is the medical term for a foot with an excessively high arch. It describes a foot shape, not a disease. About 1 in 10 people have pes cavus, and many never have foot pain. When foot pain does develop, it is usually under the heel, the ball of the foot, or along the tight plantar fascia.',
      cites: [CITE.burnsCavusCochrane],
    },
    {
      q: 'Can high arches cause plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'High arches are listed as a risk factor for plantar fasciitis. The rigid foot puts more strain on the plantar fascia with each step, and the fascia is often tight to begin with. If your high-arched foot has pain under the heel that is worst in the morning, that pattern is consistent with plantar fasciitis and the exercises in [plantar fasciitis exercises](/plantar-fasciitis-exercises/) apply.',
    },
    {
      q: 'How do I tell if my arches are too high?',
      a: 'Try a wet footprint test: wet your bare sole and step onto a flat, dry surface. A high arch leaves little or no print along the outer edge, often just the heel and ball of the foot, while a flat foot leaves almost the whole sole. A big difference between your two feet is worth mentioning to a clinician.',
    },
    {
      q: 'Is it better to be flat-footed or have high arches?',
      cites: [CITE.burnsCavusPain],
      a: 'Neither is clearly better. A flat foot spreads load wide but can overstretch the plantar fascia and posterior tibial tendon. A high arch is rigid and concentrates force at the heel and ball of the foot. About 60 percent of people with high arches report foot pain, so foot shape alone does not predict how your feet will feel.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your arches are getting higher over time, which can signal a neurological cause',
      'one foot has a much higher arch than the other',
      'you have weakness in the foot or lower leg, or difficulty lifting the front of the foot',
      'there is numbness, tingling or burning in the feet',
      'the toes are clawing more than they used to',
      'ankle sprains are frequent and getting worse',
      'there is a family history of Charcot-Marie-Tooth disease or other neuropathy',
      'foot pain is not improving after several weeks of stretching, better footwear and cushioned insoles',
      'you have pain at one specific spot that worsens with activity, which can be a stress fracture or sesamoiditis rather than a general pes cavus pattern',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito includes calf stretching, plantar fascia stretching, ankle stability work and a foot roll, all relevant to high arches. When you point at the arch on the body map, the app offers exercises for that area. But the app does not have a specific pes cavus goal or program. If your high arches cause plantar heel pain, the app\'s heel pain goals may fit. If your pain is mainly under the ball of the foot or related to a neurological condition, a clinician should direct your exercise plan.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance, arch hold and balance. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
  },
  crumb: 'High arches exercises',
  campaign: 'guide-high-arches',
};
