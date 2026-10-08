import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * kulig | Kulig K, Burnfield JM, Requejo SM, Sperry M, Terk M. Selective activation of tibialis posterior: evaluation by magnetic resonance imaging. Medicine and Science in Sports and Exercise. 2004;36(5):862-867. | 10.1249/01.MSS.0000126385.12402.55 | 15126722 | descriptive laboratory study
 */

export const EX_BAND_INVERSION: Guide = {
  lang: 'en',
  page: 'exBandInversion',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Ankle Inversion with a Band: Tibialis Posterior Exercise',
  description:
    'How to do ankle inversion with a band to strengthen the tibialis posterior: technique, sets and reps, common mistakes, and what research shows.',
  h1: 'Ankle inversion with a band: how to strengthen the tibialis posterior',
  lede:
    'Ankle inversion with a resistance band is an exercise that strengthens the tibialis posterior, the deep calf muscle whose tendon runs under the inner ankle and supports the arch from below. You turn the sole of the foot inward against the resistance of a band. A 2004 MRI study found that a similar movement, closed-chain foot adduction, produced the greatest isolated activation of the tibialis posterior out of three exercises tested.',
  takeaways: [
    'A 2004 MRI study of 5 healthy adults found that foot adduction (turning the foot inward) produced a 50% increase in tibialis posterior signal intensity, with less than 5% increase in surrounding muscles, making it the most selective exercise for that muscle (Kulig and colleagues, 2004).',
    'A 2018 systematic review found that exercise programs including tibialis posterior strengthening improved pain and function in people with posterior tibial tendon dysfunction, though the review noted most studies were small (Ross and colleagues, 2018).',
    'The tibialis posterior is the main dynamic stabilizer of the medial longitudinal arch during standing and walking. When it weakens, the arch can collapse over time.',
    'Walkito adds this exercise only after six sessions of the standing short foot exercise, so the arch\'s intrinsic muscles are working before the band is introduced.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What is the ankle inversion band exercise?',
      paragraphs: [
        'Ankle inversion with a band is a seated exercise where a resistance band is looped around the forefoot and anchored to the other foot or a fixed point. You turn the sole of the foot inward (inversion) against the band\'s pull. The knee stays still. Only the foot and ankle move.',
        'The exercise targets the tibialis posterior, a deep muscle in the back of the lower leg whose tendon wraps behind the inner ankle bone and fans out along the bottom of the foot. It is the most important extrinsic muscle for arch support during walking. When it weakens or its tendon degenerates, the arch flattens and the foot rolls inward. That condition is called posterior tibial tendon dysfunction, or adult-acquired flat foot.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: 'How do you do ankle inversion with a band?',
      paragraphs: [
        'Sit with your legs out in front of you or on the edge of a chair. Loop a resistance band around the inside of the forefoot of the working leg. Anchor the other end under the opposite foot or around a table leg so the band pulls the foot outward.',
        'Start with the foot turned slightly outward (everted). Turn the sole of the foot inward against the band, sliding the forefoot toward the midline. Move the foot, not the whole leg. The knee points straight ahead the entire time. Return slowly and repeat.',
        'Use a light band to start. The movement is small. If the knee twists or the hip rotates, the band is too heavy or the leg is compensating.',
      ],
      exercises: [
        {
          name: 'Ankle inversion with a band',
          evidence: { level: 'moderate', why: 'MRI confirms selective tibialis posterior activation with foot adduction (Kulig 2004). Exercise programs including tibialis posterior work improved outcomes for tendon dysfunction in a 2018 systematic review.' },
          dose: 'Walkito starts at 3 sets of 15, each foot',
          how: 'Sit with a resistance band looped around the forefoot, anchored so it pulls the foot outward. Turn the sole of the foot inward against the band. Move the foot, not the leg. The knee stays still.',
          often: 'Strength days, after six sessions of the standing short foot',
          feel: 'Work along the inside of the foot and ankle',
          stop: 'Pain reaches 6/10',
          media: 'band_inversion',
          caption: 'Band inversion: turn the sole of the foot inward against the band',
          alt: 'A seated figure turning the sole of the foot inward against a resistance band looped around the forefoot',
        },
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
    {
      h2: 'What muscle does this exercise target?',
      keyFact: 'A 2004 MRI study of 5 healthy adults found that turning the foot inward raised tibialis posterior signal by 50 percent, with under 5 percent change in nearby muscles (Kulig and colleagues, 2004).',
      paragraphs: [
        'The primary target is the tibialis posterior. It is the deepest muscle in the back of the lower leg, sitting behind the tibia and fibula. Its tendon runs behind the medial malleolus (the inner ankle bone), then fans out in multiple slips that attach to nearly every bone in the midfoot.',
        'A 2004 MRI study by Kulig and colleagues tested three exercises in 5 healthy adults: foot adduction (turning the foot inward along the floor), a single-leg heel raise, and open-chain foot supination. Foot adduction produced the greatest tibialis posterior activation (50% signal increase) with the least activation in surrounding muscles (under 5%). The single-leg heel raise activated the tibialis posterior too, but also heavily activated the gastrocnemius (99%) and the soleus (39%), making it a much less selective exercise for the tibialis posterior.',
      ],
      cites: [CITE.kulig],
    },
    {
      h2: 'Why does the tibialis posterior matter for the arch?',
      paragraphs: [
        'The tibialis posterior is the primary dynamic stabilizer of the medial longitudinal arch. Every time you take a step, it contracts to hold the arch up during the mid-stance phase when all your weight is on one foot. The intrinsic foot muscles (trained by the [short foot exercise](/exercises/short-foot-exercise/) and [toe spread](/exercises/toe-spread/)) provide local arch support, but the tibialis posterior provides the bigger, extrinsic force from above.',
        'When the tibialis posterior tendon weakens or degenerates, the arch collapses progressively and the foot pronates. A 2017 review by Ling and Lui described this as the most common cause of adult-acquired flat foot. A 2018 systematic review by Ross and colleagues found that exercise programs including tibialis posterior strengthening improved pain and function in early-stage posterior tibial tendon dysfunction.',
        'This is why [flat feet exercise programs](/flat-feet-exercises/) include both intrinsic foot exercises and tibialis posterior work. The intrinsic muscles are the local stabilizers. The tibialis posterior is the main extrinsic stabilizer. Both matter.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'What are the common mistakes with the band inversion exercise?',
      paragraphs: [
        'The most common mistake is rotating the whole leg instead of just the foot. When the hip rotates inward to turn the foot, the tibialis posterior does almost nothing. Keep the knee pointing straight ahead. Only the foot moves at the ankle.',
        'Another mistake is using a band that is too strong. The tibialis posterior is a small, deep muscle. A heavy band forces the larger muscles to take over. Start with a light band and focus on feeling the work along the inner ankle and arch.',
        'Letting the foot snap back between reps is a third issue. Control the return. The eccentric phase, lowering slowly, loads the tendon in a way that helps it adapt. A slow return is more valuable than a fast pull.',
        'Finally, some people place the band too far up the foot, near the ankle joint itself. The band should sit around the forefoot, near the ball of the foot, so the leverage works at the right angle.',
      ],
    },
    {
      h2: 'What does the research say about tibialis posterior strengthening?',
      paragraphs: [
        'The most direct evidence for the movement comes from the 2004 MRI study by Kulig and colleagues. It confirmed that foot adduction selectively activates the tibialis posterior with minimal activation of surrounding muscles. This makes inversion against a band the exercise of choice when the goal is to strengthen that specific muscle.',
        'For clinical outcomes, a 2018 systematic review by Ross and colleagues looked at exercise programs for posterior tibial tendon dysfunction. Most studies were small, but the review concluded that programs including eccentric and concentric tibialis posterior exercises, often combined with calf strengthening and orthotics, improved pain and function.',
        'The exercise has not been tested on its own in a large plantar fasciitis trial. Its role in the Walkito program is to support the arch by strengthening the extrinsic stabilizer that works alongside the intrinsic muscles. Related pages: [flat feet exercises](/flat-feet-exercises/), [short foot exercise](/exercises/short-foot-exercise/), [hip abduction](/exercises/hip-abduction/).',
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
  ],
  faq: [
    {
      q: 'What band strength should I use for ankle inversion?',
      a: 'Start with a light resistance band. The tibialis posterior is a small, deep muscle and does not need heavy load to fatigue. You should feel work along the inner ankle and arch. If the knee twists or the hip rotates to complete the movement, the band is too strong.',
    },
    {
      q: 'Does ankle inversion with a band help flat feet?',
      cites: [CITE.posteriorTibialReview, CITE.ling],
      a: 'The tibialis posterior is the main dynamic stabilizer of the arch. A 2018 systematic review found that exercise programs including tibialis posterior strengthening improved pain and function in people with posterior tibial tendon dysfunction, the most common cause of adult-acquired flat foot (Ross 2018). Strengthening it is part of the standard flat-feet approach.',
    },
    {
      q: 'How is ankle inversion different from ankle eversion?',
      a: 'Inversion turns the sole of the foot inward, training the tibialis posterior on the inner side of the ankle. Eversion turns the sole outward, training the peroneal muscles on the outer side. Both are used in ankle rehabilitation, but for arch support, inversion is the relevant direction.',
    },
    {
      q: 'Can I do this exercise without a band?',
      a: 'Without a band, you can press the inside of the foot against a wall or use your hand to resist the movement. A band is better because it provides consistent resistance through the full range of motion. Any light resistance band will work.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you have pain or swelling along the inner ankle bone that worsens with activity',
      'you cannot stand on your toes on one foot, which can indicate tibialis posterior tendon weakness',
      'the arch has collapsed recently and the foot has become noticeably flatter',
      'you have had an ankle injury and the inner ankle is still tender',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito adds ankle inversion with a band after six sessions of the standing short foot exercise. The progression ensures the intrinsic foot muscles are active before the extrinsic stabilizer is loaded. Sessions are 3, 5 or 10 minutes, and a test every 14 days tracks arch hold time and calf endurance.',
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Ankle inversion with a band (tibialis posterior)',
  campaign: 'ex-band-inversion',
};
