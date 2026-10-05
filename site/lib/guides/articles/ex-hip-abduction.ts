import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citation (append to CITATIONS[] in lib/citations.ts) ───────────
 *
 * zarali | Zarali A, Raeisi Z, Aminmahalati A. The effects of combined exercises, short foot exercises, and short foot exercises with isometric hip abduction on navicular drop, static parameters, and postural sway in women with flat foot: a randomized trial. BMC Sports Science, Medicine and Rehabilitation. 2024;16:233. | 10.1186/s13102-024-01019-9 | 39587664 | RCT (3-arm)
 *
 * Other references use existing CITE keys: brijwasi, cheng, menz, guideline.
 */

export const EX_HIP_ABDUCTION: Guide = {
  lang: 'en',
  page: 'exHipAbduction',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Hip Abduction for Foot and Arch Support',
  description:
    'How to do hip abduction with a resistance band for better foot and arch control: technique, sets, the hip-to-foot link, and what research shows.',
  h1: 'Hip abduction: how it helps your feet and how to do it',
  lede:
    'Hip abduction is the movement of lifting one leg out to the side, away from the midline of the body. When the hip abductor muscles are weak, the knee drops inward during walking and the foot over-pronates, flattening the arch. Strengthening the gluteus medius with a banded hip abduction can reduce that inward collapse and take strain off the arch, the plantar fascia and the inside of the ankle.',
  takeaways: [
    'A 2023 trial of 52 people with flexible flat feet found that a six-week combined program including hip strengthening, short foot exercises, ankle work and stretching improved two measures of arch shape compared to a control group (Brijwasi and colleagues, 2023).',
    'The gluteus medius controls the pelvis and thigh during single-leg stance. When it is weak, the knee drifts inward and the foot pronates more, loading the medial arch.',
    'A 2013 cross-sectional study of about 1,900 adults in the Framingham Foot Study found no link between flat foot posture and low back pain, but found a small link between a foot that rolls inward while walking and low back pain in women (Menz and colleagues, 2013).',
    'Standing hip abduction with a band is how Walkito delivers this exercise. The standing position forces the stance leg to stabilize while the working leg lifts.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What is hip abduction?',
      paragraphs: [
        'Hip abduction means moving the leg sideways, away from the center of the body. The main muscle responsible is the gluteus medius, which sits on the outer side of the hip. It keeps the pelvis level when you stand on one leg and prevents the opposite hip from dropping.',
        'This exercise appears in foot programs because the hip, knee and foot are linked. When the gluteus medius is weak, the thigh rotates inward during walking and standing, the knee follows, and the foot pronates more than it should. The arch flattens under that inward force. Strengthening the hip reduces that chain reaction.',
      ],
    },
    {
      h2: 'How do you do standing hip abduction with a band?',
      paragraphs: [
        'Stand with a resistance band looped around both ankles or just above the knees. Hold a wall or chair for balance. Shift your weight to the stance leg. Lift the other leg straight out to the side, keeping the toes pointing forward and the body upright. Do not lean to the opposite side. Lower slowly and repeat.',
        'Push through the heel of the working leg, not the toes. The movement is at the hip, not the waist. The lift does not need to be high. About 30 to 45 degrees from the floor is enough if the form stays clean. A higher lift with the body tilting sideways does less for the gluteus medius.',
      ],
      exercises: [
        {
          name: 'Hip abduction, standing, with a band',
          evidence: { level: 'moderate', why: 'Included in the combined program that improved arch shape in a 2023 RCT (Brijwasi 2023). Hip strengthening for foot alignment is supported by biomechanical rationale, though not isolated in its own foot-outcome trial.' },
          dose: 'Walkito starts at 3 sets of 15, each leg',
          how: 'Stand with a band around both ankles. Hold a wall for balance. Lift one leg straight out to the side, keeping the toes forward. Push through the heel. Lower slowly.',
          often: 'Strength days, when the left-and-right goal is in your plan',
          feel: 'Work on the outside of the hip',
          stop: 'Pain reaches 6/10',
          media: 'hip_abduction',
          caption: 'Hip abduction: lift one leg out to the side against the band',
          alt: 'A figure standing with a resistance band around the ankles, lifting one leg out to the side',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'How does the hip affect the foot and arch?',
      paragraphs: [
        'The connection runs through a biomechanical chain: hip, knee, ankle, foot. When the gluteus medius cannot hold the pelvis level during single-leg stance, the thigh rotates inward. The knee follows, collapsing toward the midline. That rotation forces the foot to pronate, rolling the ankle inward and flattening the arch.',
        'This is why many people with flat feet or arch pain also have weak hips. The arch is not failing on its own. It is being overloaded from above. Strengthening the hip reduces that top-down load.',
        'A 2013 cross-sectional study from the Framingham Foot Study looked at about 1,900 community-dwelling adults. Flat foot posture itself was not linked to low back pain, but a foot that rolled inward while walking showed a small link to low back pain in women, hinting that the foot-hip-back chain can run both ways.',
        'The flat-feet trial by Brijwasi and colleagues (2023) included hip strengthening alongside short foot exercises, ankle work and stretching. The combined program improved arch shape over six weeks. The study did not separate how much the hip strengthening contributed on its own, but the inclusion reflects the biomechanical rationale.',
      ],
      cites: [CITE.menz, CITE.brijwasi],
    },
    {
      h2: 'Who benefits from hip abduction for foot pain?',
      paragraphs: [
        'People with flat feet or excessive pronation benefit because the exercise addresses a common upstream cause of arch collapse. If your knees tend to collapse inward when you squat or walk, weak hip abductors are a likely contributor.',
        'Runners benefit because single-leg stance is the default running posture. Every stride lands on one foot. A weak gluteus medius on that side lets the knee and foot roll inward, which can contribute to shin splints, plantar fasciitis and runner\'s knee. See [heel pain for runners](/heel-pain-runners/) and [shin splints exercises](/shin-splints-exercises/) for more.',
        'People who stand for long hours, especially nurses and retail workers, can also benefit. Prolonged standing fatigues the gluteus medius, and by the end of a shift the hip control weakens. See [feet hurt standing all day](/feet-hurt-standing-all-day/) for exercises that pair with hip abduction.',
      ],
    },
    {
      h2: 'Common mistakes with standing hip abduction',
      paragraphs: [
        'Leaning the body to the opposite side is the most common mistake. When you lean away, the body uses momentum and side-bending instead of the gluteus medius. Stay upright. A smaller lift with a straight body is better than a high lift with a lean.',
        'Rotating the foot outward so the toes point to the ceiling is another mistake. This shifts the work to the hip flexors and the tensor fasciae latae instead of the gluteus medius. Keep the toes pointing forward or slightly downward.',
        'Swinging the leg is a third issue. The exercise should be slow and controlled, especially on the way down. The lowering phase (eccentric) is where much of the strengthening happens. If the leg drops fast, the muscle is not doing the work.',
        'Finally, letting the standing hip drop is a sign the band is too strong or the gluteus medius on the stance side is fatiguing. The pelvis should stay level throughout. Use a lighter band or take a rest between sets.',
      ],
    },
    {
      h2: 'What does the research say?',
      paragraphs: [
        'The biomechanical rationale for hip abduction in foot programs is well established: weak hip abductors allow the knee to collapse inward, increasing foot pronation and arch load. Multiple observational studies confirm the link between hip weakness and lower-limb alignment issues.',
        'For clinical outcomes, the strongest evidence comes from combined programs. The 2023 trial by Brijwasi and colleagues included hip strengthening as part of a six-week exercise program for 52 people with flexible flat feet. The program improved arch shape. Hip strengthening has not been isolated in its own flat-feet or plantar-fasciitis trial.',
        'A 2024 randomized trial of 45 women with flexible flat feet compared short foot exercises, a combined exercise program, and short foot exercises plus isometric hip abduction over six weeks. The group that added isometric hip abduction to short foot exercises had a significantly larger drop in navicular height (a measure of arch collapse) than the other two groups (Zarali and colleagues, 2024), supporting the idea that hip work adds something foot exercises alone do not.',
        'The evidence supports hip abduction as part of a broader foot program. It is not a standalone exercise for arch pain, but it fills a gap that foot-only exercises leave open. Related pages: [flat feet exercises](/flat-feet-exercises/), [ankle inversion with a band](/exercises/ankle-inversion-band/), [short foot exercise](/exercises/short-foot-exercise/).',
      ],
      cites: [CITE.zarali, CITE.brijwasi, CITE.cheng],
    },
  ],
  faq: [
    {
      q: 'Does hip abduction help flat feet?',
      cites: [CITE.brijwasi],
      a: 'Hip abduction strengthens the gluteus medius, which controls knee and foot alignment from above. A 2023 trial of 52 people with flexible flat feet used hip strengthening as part of a combined program and found improved arch shape over six weeks (Brijwasi 2023). It is most effective as part of a broader program, not on its own.',
    },
    {
      q: 'How many hip abductions should I do?',
      a: 'Walkito starts at 3 sets of 15 repetitions on each leg, standing with a resistance band around the ankles. This is a higher-rep, lower-load exercise because the gluteus medius needs endurance for walking, not maximum strength.',
    },
    {
      q: 'Can I do hip abduction lying on my side instead?',
      a: 'Side-lying hip abduction works the same muscle. Standing adds the challenge of balancing on the stance leg, which also trains the hip on that side. Walkito uses the standing version because it more closely mimics walking and single-leg stance. If standing is too unstable, side-lying is a reasonable starting point.',
    },
    {
      q: 'What band should I use for hip abduction?',
      a: 'A light to medium resistance loop band works best. Place it around both ankles or just above the knees. The band should create enough resistance that the last few reps of each set feel challenging but do not force you to lean sideways or swing the leg.',
    },
    {
      q: 'Why is hip abduction in a foot exercise program?',
      cites: [CITE.menz],
      a: 'The hip controls what happens at the knee and foot. A weak gluteus medius lets the knee collapse inward, which forces the foot to pronate and flattens the arch. A 2013 study of about 1,900 adults found a small link between a foot that rolls inward while walking and low back pain in women, though flat foot posture alone was not linked to back pain (Menz 2013). Strengthening the hip reduces the top-down overload on the arch.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you have sharp hip pain that limits weight-bearing',
      'the knee collapses inward and you cannot control it despite practice',
      'you have groin pain or a clicking sensation in the hip that worsens with exercise',
      'foot or arch pain is worsening despite regular exercise over several weeks',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito adds hip abduction on strength days once a left-and-right balance goal enters your plan. It sits alongside intrinsic foot exercises and calf work, so the arch gets support from above and below. Sessions are 3, 5 or 10 minutes, and a test every 14 days tracks progress.',
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Hip abduction',
  campaign: 'ex-hip-abduction',
};
