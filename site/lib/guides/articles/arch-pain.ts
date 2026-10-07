import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * None. This page reuses existing citation keys only.
 */

export const ARCH_PAIN_EN: Guide = {
  lang: 'en',
  page: 'archPain',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Arch Pain: Causes, Exercises and When to See a Doctor',
  description:
    'Arch pain when walking: plantar fasciitis, flat feet, PTTD, high arches or nerve causes. How to tell them apart, exercises and when to see a clinician.',
  h1: 'Arch pain: what causes it and what to do about it',
  lede:
    'Pain in the arch of the foot usually comes from one of a handful of conditions: plantar fasciitis, flat feet or fallen arches, posterior tibial tendon dysfunction, high arches that do not absorb shock well, overuse, or nerve irritation such as tarsal tunnel syndrome. The cause changes what to do about it. This page maps the most common ones, links to the full exercise guides where they exist, and covers the exercises that help the arch directly.',
  takeaways: [
    'Plantar fasciitis is the most common single cause of arch and heel pain. The 2023 heel pain guideline grades stretching A and strength training B (Koc and colleagues, 2023).',
    'Posterior tibial tendon dysfunction (PTTD), a weakening of the tendon that supports the arch, is the most common cause of adult-acquired flat foot (Ross and colleagues, 2018).',
    'Both flat feet and high arches alter how force travels through the arch during walking, but the pain patterns and the exercises differ.',
    'Reduced ankle dorsiflexion, meaning a tight calf, was the strongest independent risk factor for plantar fasciitis in a case-control study of 50 cases and 100 controls (Riddle and colleagues, 2003).',
    'Arch pain that comes with numbness, tingling, burning or weakness needs a clinician to rule out nerve entrapment or a neurological cause before exercise.',
  ],
  toc: true,
  sections: [
    {
      h2: 'What causes arch pain?',
      paragraphs: [
        'The arch is supported by the plantar fascia, the posterior tibial tendon, the intrinsic foot muscles, and the bones and ligaments of the midfoot. Pain in the arch means one or more of these structures is under more stress than it can handle. The most common causes break down into a few patterns.',
        '**Plantar fasciitis** is the leading single cause. The plantar fascia, a thick band of tissue running from the heel to the base of the toes, gets irritated by repeated loading. Pain is usually worst near the heel but often extends into the arch, especially when the arch side of the fascia is involved. The hallmark is sharp pain on the first steps after rest. See [plantar fasciitis exercises](/plantar-fasciitis-exercises/) and [plantar fasciitis overview](/plantar-fasciitis/) for the full guide.',
        '**Flat feet and fallen arches** cause arch pain by overstretching the plantar fascia and the posterior tibial tendon. When the arch collapses during standing and walking, those structures take on a load they are not shaped to carry for long periods. See [flat feet exercises](/flat-feet-exercises/) and [flat feet overview](/flat-feet/).',
        '**Posterior tibial tendon dysfunction (PTTD)** is the most common cause of adult-acquired flat foot. The posterior tibial tendon runs behind the inner ankle and under the arch, holding it up. When this tendon weakens or tears, the arch gradually collapses. Pain is felt along the inner ankle and into the arch, and it worsens with activity. A 2018 systematic review of exercise for PTTD found limited but promising evidence for strengthening and stretching. See [posterior tibial tendon dysfunction exercises](/posterior-tibial-tendon-dysfunction-exercises/).',
        '**High arches (pes cavus)** cause arch pain differently. A rigid, high arch does not flex enough to absorb shock, so the force concentrates under the heel and the ball of the foot rather than spreading across the midfoot. Pain under the arch in a high-arched foot often comes from a tight plantar fascia. See [high arches exercises](/high-arches-exercises/).',
        '**Overuse** without a named condition is common in people who suddenly increase their walking, running or standing load. The arch muscles and plantar fascia are not yet strong enough for the new demand, and they protest. This usually improves with a gradual return to the previous load plus calf and arch strengthening.',
        '**Nerve irritation** such as tarsal tunnel syndrome can cause burning, tingling or numbness along the arch. The posterior tibial nerve runs behind the inner ankle bone and into the sole of the foot. If it gets compressed, the pain can mimic plantar fasciitis but comes with sensory symptoms that fasciitis does not. This needs a clinician.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview, CITE.riddle],
    },
    {
      h2: 'How do you tell these apart?',
      paragraphs: [
        'The location of the pain, the time of day it is worst, and what makes it better or worse give the clearest clues.',
      ],
      table: {
        caption: 'Arch pain: patterns by cause',
        head: ['Cause', 'Where it hurts', 'When it is worst', 'Key clue'],
        rows: [
          ['Plantar fasciitis', 'Under the heel, extending into the arch', 'First steps after rest, especially morning', 'Sharp pain eases after a few minutes of walking'],
          ['Flat feet / fallen arches', 'Along the inner arch and sometimes the inner ankle', 'After long standing or walking', 'Arch visibly collapses when standing; pain eases off weight'],
          ['PTTD', 'Inner ankle and arch', 'During and after activity', 'Single-leg heel raise is weak or painful on the affected side'],
          ['High arches', 'Under the midfoot or along the outer arch', 'During walking or running, especially on hard surfaces', 'Arch stays high even when standing; poor shock absorption'],
          ['Overuse', 'General arch ache', 'After a sudden increase in load', 'No morning pain pattern; improves with rest'],
          ['Nerve (tarsal tunnel)', 'Along the arch with tingling or burning', 'Variable, sometimes at rest', 'Numbness, tingling or burning that plantar fasciitis does not cause'],
        ],
      },
      after: [
        'If your arch pain follows the morning-pain pattern and is centered near the heel, start with the [plantar fasciitis](/plantar-fasciitis/) page. If the arch collapses when you stand, see [flat feet exercises](/flat-feet-exercises/). If the pain comes with numbness or burning, or if a single-leg heel raise is weak or impossible on one side, see a clinician before starting exercises.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview],
    },
    {
      h2: 'Exercises that help arch pain',
      paragraphs: [
        'The exercises below target the arch itself and the calf muscles that pull on it. They apply best when arch pain is related to plantar fasciitis, flat feet, or general overuse. For PTTD or nerve-related arch pain, a clinician should direct the exercise plan. If any exercise takes your pain to **6/10 or more**, stop for the day.',
        'These are Walkito\'s starting doses, not research protocol doses. The 2023 heel pain guideline grades plantar fascia and calf stretching A, and strength training B. The short foot exercise and foot roll have thinner evidence on their own. [How these guides are written](/about/).',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades plantar fascia stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each foot',
          how: 'Sit and cross the affected foot over the other knee. Pull the toes back until you feel a stretch along the arch, not the calf. If your arch is worst in the morning, do this one before your foot touches the floor.',
          often: 'Most sessions',
          feel: 'A stretch along the underside of the arch',
          stop: 'Pain reaches 6/10',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel the arch',
          alt: 'A figure pulling the toes of one foot back, the arch highlighted',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'The 2023 guideline grades calf stretching A. A tight calf is the strongest risk factor for plantar fasciitis (Riddle 2003).' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. The gastrocnemius, the outer calf muscle, only stretches with the knee straight.',
          often: 'Most sessions',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Soleus stretch (bent knee)',
          evidence: { level: 'strong', why: 'Same guideline grade A. Targets the soleus, the deeper calf muscle.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same wall position, then bend the back knee until you feel the stretch lower, near the heel. The soleus, the deeper calf muscle, only stretches with the knee bent.',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the lower calf highlighted',
        },
        {
          name: 'Short foot, seated',
          evidence: { level: 'early', why: 'A 2024 review found short-foot training changed arch shape in some studies but evidence for pain reduction on its own is thin.' },
          dose: '3 sets of 10 holds of 5 seconds, each foot',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts. Do not curl the toes. The short foot exercise trains the intrinsic muscles that hold the arch up.',
          often: 'Strength days',
          feel: 'The arch lifting while the toes stay flat',
          stop: 'Pain reaches 6/10',
          media: 'short_foot_seated',
          caption: 'Short foot: pull the ball of the foot toward the heel',
          alt: 'A seated foot with the arch lifting, toes relaxed on the floor',
        },
        {
          name: 'Band turn-in (tibialis posterior)',
          evidence: { level: 'moderate', why: 'Selective activation of tibialis posterior confirmed by MRI (Kulig 2004). Recommended for PTTD rehab in the 2018 review.' },
          dose: '3 sets of 15, each foot',
          how: 'Sit with a resistance band looped around the forefoot, anchored to the side. Turn the foot inward against the band. Keep the knee still so the movement comes from the ankle, not the leg. This targets the posterior tibial tendon, the tendon that holds the arch up.',
          often: 'Strength days',
          feel: 'Work along the inner ankle and under the arch',
          stop: 'Pain reaches 6/10',
          media: 'band_inversion',
          caption: 'Band turn-in: move the foot, not the leg',
          alt: 'A seated figure turning the foot inward against a band, the inner ankle highlighted',
        },
        {
          name: 'Foot roll',
          evidence: { level: 'early', why: 'Not tested in the studies on this page. A comfort measure between sessions.' },
          dose: '2 minutes, each foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball or frozen water bottle. Firm pressure, never enough to make you wince. This settles the tissue after it has worked.',
          often: 'Recovery days',
          feel: 'Firm pressure under the foot',
          stop: 'Pain reaches 6/10',
          media: 'foot_roll',
          caption: 'Foot roll: slow and firm, ease off anything sharp',
          alt: 'A seated figure rolling the sole of one foot over a ball',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.posteriorTibialReview, CITE.kulig, CITE.cheng],
    },
    {
      h2: 'When is arch pain a sign of something else?',
      paragraphs: [
        'Most arch pain responds to stretching, load adjustment and time. But some patterns point to conditions that need a clinician before exercise.',
        'Pain with numbness, tingling or burning can come from tarsal tunnel syndrome, where the posterior tibial nerve is compressed behind the inner ankle. This needs a clinical diagnosis, not exercise alone.',
        'Arch pain that comes with progressive flattening of the foot, especially on one side, can signal posterior tibial tendon dysfunction in a later stage. A single-leg heel raise test is a simple check: if you cannot rise fully onto your toes on one foot, or it hurts significantly more on one side, a clinician should assess the tendon before you load it further.',
        'Pain at one specific spot that worsens steadily with activity and does not ease with normal rest can be a stress fracture of one of the small bones in the midfoot. This needs imaging, not stretching.',
        'Arch pain in children aged 8 to 15 can be [calcaneal apophysitis (Sever\'s disease)](/severs-disease/), which involves the growth plate rather than the fascia. That page covers what helps for children. Walkito is designed for adults.',
      ],
      cites: [CITE.posteriorTibialReview],
    },
    {
      h2: 'Does foot type affect arch pain?',
      paragraphs: [
        'Yes. Both flat feet and high arches change how force travels through the foot, but in opposite ways.',
        'A flat foot lets the arch collapse under load, stretching the plantar fascia and the posterior tibial tendon beyond their comfortable range. The exercises for flat feet focus on strengthening the arch muscles (short foot, toe spread, band turn-in) and the hip (hip abduction), because a hip that gives way during single-leg stance pushes the arch inward. See [flat feet exercises](/flat-feet-exercises/).',
        'A high-arched foot (pes cavus) is rigid and does not flex enough to spread the impact. Force concentrates at the heel and the ball of the foot. The plantar fascia in a high-arched foot is often tight. Exercises focus on stretching the calf and plantar fascia, plus ankle stability work. Cushioned or custom orthoses have the best evidence for pes cavus pain. See [high arches exercises](/high-arches-exercises/).',
        'A normal arch with sudden overuse, for instance a week of much more walking than usual, causes generalized arch ache that responds well to the exercises on this page plus a gradual return to normal load.',
      ],
    },
    {
      h2: 'What about orthotics and shoes for arch pain?',
      paragraphs: [
        'The 2023 heel pain guideline grades orthotics as a standalone option B against for short-term plantar fasciitis pain. Orthotics combined with other care get a C. Supportive shoes are commonly recommended and can reduce discomfort, but no large trial has shown them to be better than stretching and strength work.',
        'For flat feet, a medial arch support can reduce the collapse of the arch during standing and walking, giving the posterior tibial tendon and plantar fascia less work to do. For high arches, a cushioned orthotic absorbs the shock that the rigid arch does not. In a 2006 trial of 154 people with pes cavus foot pain, custom foot orthoses improved pain and function more than a sham insert at three months (Burns and colleagues, 2006).',
        'Shoes and inserts help manage symptoms while exercise builds the capacity the foot needs. They are not a substitute for each other.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'What is the most common cause of arch pain?',
      cites: [CITE.guideline],
      a: 'Plantar fasciitis is the most common single cause. It happens when the plantar fascia, a thick band of tissue under the foot, gets irritated by repeated loading. Pain is usually near the heel but often extends into the arch, especially when the arch side of the fascia is involved. The 2023 heel pain guideline grades stretching A and strength training B.',
    },
    {
      q: 'Why does the arch of my foot hurt when I walk?',
      a: 'Arch pain when walking usually comes from one of a few sources: plantar fasciitis, flat feet that let the arch collapse under load, posterior tibial tendon dysfunction, a tight calf that transfers stress to the arch, or simply doing more walking than your foot is conditioned for. The pattern of pain, especially whether it is worst in the morning or after activity, helps narrow down which one.',
    },
    {
      q: 'Can flat feet cause arch pain?',
      a: 'Yes. When the arch collapses during standing and walking, the plantar fascia and the posterior tibial tendon are stretched beyond their normal range. That stretch produces aching in the arch, and sometimes along the inner ankle. Strengthening the intrinsic foot muscles with exercises like the short foot and band turn-in can help support the arch from the inside.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Can high arches cause arch pain?',
      a: 'Yes, but for the opposite reason. A high arch is rigid and does not absorb shock well. Impact concentrates at the heel and ball of the foot, and the tight plantar fascia in a high-arched foot can ache along its length. Stretching the calf and plantar fascia, plus cushioned orthoses, are the main approaches. See [high arches exercises](/high-arches-exercises/) for more detail.',
    },
    {
      q: 'When should I see a doctor for arch pain?',
      a: 'See a clinician if the pain comes with numbness, tingling or burning, which can point to nerve entrapment. Also see one if the arch is flattening on one side, if a single-leg heel raise is weak or impossible on one foot, if pain is at one pinpoint spot and worsening, or if it has not improved after several weeks of stretching and load adjustment.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Do orthotics help arch pain?',
      cites: [CITE.guideline],
      a: 'The 2023 heel pain guideline grades orthotics as a standalone option B against for plantar fasciitis. Orthotics combined with stretching and strength work can help manage symptoms while the foot builds capacity. For high arches, cushioned or custom orthoses have better evidence, including one RCT showing improvement over a sham insert at three months.',
    },
    {
      q: 'Is arch pain the same as plantar fasciitis?',
      a: 'Not always. Plantar fasciitis is one specific cause of arch pain, the most common one. But arch pain can also come from flat feet, posterior tibial tendon dysfunction, high arches, overuse, or nerve irritation. All plantar fasciitis involves arch or heel pain, but not all arch pain is plantar fasciitis. The pattern of pain, especially its timing, helps tell them apart.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain comes with numbness, tingling or burning, which can point to nerve entrapment',
      'the arch is visibly flattening on one side, which can signal progressive PTTD',
      'you cannot do a single-leg heel raise on the affected side, or it is clearly weaker than the other',
      'the pain is at one pinpoint spot and worsening with activity, which can be a stress fracture',
      'the pain followed an injury or a fall',
      'there is swelling, redness or warmth around the foot or ankle',
      'the pain does not improve after several weeks of stretching and load adjustment',
      'you have diabetes, reduced feeling in your feet, or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'If your arch pain follows the plantar fasciitis pattern, Walkito builds a plan around one goal at a time. The first goal is a better morning: pain at 1/10 or less for 14 days in a row. The arch gets its own goal and exercises. If your arch pain comes from flat feet, the app can work on both the pain and the arch as separate goals.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance, arch hold and balance. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If you are not sure what is causing your arch pain, see a clinician before loading it with exercise.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Arch pain',
  campaign: 'guide-arch-pain',
};
