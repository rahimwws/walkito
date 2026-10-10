import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const HAMMER_TOE_EN: Guide = {
  lang: 'en',
  page: 'hammerToe',
  mainSource: CITE.malhotra,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Hammer Toe Exercises: Flexible vs Rigid and What Helps',
  description:
    'Hammer toe exercises for flexible deformities, how it differs from claw toe, footwear tips, and when surgery may be discussed.',
  h1: 'Hammer toe exercises: what they can do and where the evidence stands',
  lede:
    'A hammer toe is a lesser toe that bends downward at the middle joint. If it still straightens when you press on it, it is flexible, and exercises, wider shoes, and padding may help keep it that way. If it is rigid, exercise will not change the position, and the goal shifts to managing pressure and preventing skin problems. This page covers the difference, what exercises are commonly recommended, and how thin the evidence actually is.',
  toc: true,
  takeaways: [
    'A flexible hammer toe can be straightened manually and may respond to exercises that maintain mobility and strengthen the toe muscles. A rigid hammer toe is fixed in position and will not change with exercise.',
    'No randomized controlled trial has tested an exercise program for hammer toes specifically. The exercises recommended on this page are based on the biomechanical logic of intrinsic foot muscle strengthening, not on direct trial evidence.',
    'Footwear with a wide, tall toe box is the most consistently recommended conservative measure for hammer toes. It reduces friction, pressure on the bent joint, and the risk of corns and calluses.',
    'Surgery is considered when pain and skin problems persist despite conservative care and the deformity is rigid. The decision depends on symptoms, not appearance alone.',
  ],
  sections: [
    {
      h2: 'What is a hammer toe?',
      paragraphs: [
        'A hammer toe is a flexion deformity at the proximal interphalangeal joint (the middle joint) of one of the lesser toes, most often the second. The toe bends downward at that joint while the tip may point down or slightly up. It is one of the most common forefoot deformities.',
        'The deformity develops from an imbalance between the muscles that flex and extend the toe. The extrinsic muscles, the long flexors and extensors that run from the leg through the foot, overpower the smaller intrinsic muscles inside the foot. When the intrinsics weaken, the flexors pull the middle joint down, and the extensors pull the base of the toe up at the metatarsophalangeal joint.',
        'Common contributors include:',
        {
          list: [
            'Shoes that crowd the toes (narrow toe boxes, high heels).',
            'A second toe that is longer than the big toe.',
            'Conditions like hallux valgus (bunions) where the big toe pushes the second toe out of position.',
          ],
        },
        'Neuromuscular conditions can also cause it.',
      ],
      cites: [CITE.malhotra],
    },
    {
      h2: 'How is hammer toe different from claw toe and mallet toe?',
      paragraphs: [
        'The three names describe which joints are bent:',
        {
          list: [
            'A hammer toe bends at the middle joint (proximal interphalangeal joint).',
            'A mallet toe bends at the end joint (distal interphalangeal joint), near the tip of the toe.',
            'A claw toe bends at both the middle and end joints while the base of the toe (metatarsophalangeal joint) extends upward.',
          ],
        },
        'Claw toes tend to be more severe, often affect multiple toes on both feet, and are more commonly linked to neuromuscular conditions. Hammer toes usually affect a single toe, most often the second, and are more commonly related to footwear and foot structure.',
        'In practice, the treatments overlap. Wider shoes, padding, and exercises that target intrinsic foot muscles apply to all three. The distinction matters most when surgery is considered, because the surgical approach depends on which joints are involved.',
      ],
      cites: [CITE.malhotra],
    },
    {
      h2: 'What is the difference between flexible and rigid hammer toes?',
      keyFact: 'A 2022 study of 20 older adults with hammer or claw toe found custom-molded silicone toe props significantly reduced peak pressure at the tip of the second toe in both flexible and rigid cases (Formosa and colleagues, 2022).',
      paragraphs: [
        'A flexible hammer toe still has motion at the middle joint. You can straighten it with your hand. The muscles and tendons are tight, but the joint has not developed a fixed contracture. **This is the stage where conservative measures have the most to offer.**',
        'A rigid hammer toe has a fixed contracture at the middle joint. The joint no longer straightens. At this point, exercise cannot change the position. The goals shift to reducing friction (wider shoes, toe pads) and preventing corns, calluses, and skin breakdown.',
        'A 2022 quasi-experimental study of 20 older adults with hammer or claw toe deformities found that custom-molded silicone toe props significantly reduced peak pressure at the tip of the second toe in both flexible and rigid cases. At the metatarsophalangeal joint, pressure reduction was significant only in the rigid group.',
      ],
      cites: [CITE.formosa],
    },
    {
      h2: 'Does exercise help hammer toes?',
      paragraphs: [
        'The honest answer is that **there are no randomized controlled trials testing exercises specifically for hammer toes.** The exercises commonly recommended, such as towel scrunches, toe spreads, and manual stretching, are based on the idea that strengthening intrinsic foot muscles and maintaining joint flexibility can help keep a flexible deformity from becoming rigid.',
        'That logic is reasonable. The deformity comes from a muscle imbalance: weak intrinsics and relatively stronger extrinsics. Exercises that target the intrinsics may restore some of that balance. But without direct trials, we do not know how much difference they make or whether they can actually prevent progression.',
        'What we do know from studies on other forefoot conditions is that intrinsic foot exercises like short foot work, toe spreads, and towel scrunches activate the right muscles. An MRI study by Gooding and colleagues (2016) confirmed that the short foot exercise and toe-spread-out exercise selectively activate intrinsic foot muscles. Whether that activation translates into better outcomes for hammer toes specifically has not been tested.',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Which exercises help hammer toes?',
      paragraphs: [
        'These exercises target the intrinsic foot muscles and aim to maintain flexibility in a toe that is still flexible. If your hammer toe is rigid, these exercises will not change the position, but gentle stretching may help with stiffness and discomfort. All evidence labels below are honest: no exercise here has been tested in a hammer toe trial.',
      ],
      exercises: [
        {
          name: 'Towel scrunch',
          dose: 'Walkito starts at 3 sets of 8, each foot',
          how: 'Sit with your foot flat on a towel. Curl your toes to scrunch the towel toward you, then release. This works the intrinsic toe flexors, the muscles that are overpowered in hammer toe. Strengthening them may help rebalance the pull across the toe joints.',
          feel: 'The muscles under the arch and toes working',
          stop: 'Pain at the bent joint or at the tip of the toe',
          evidence: {
            level: 'early',
            why: 'No trial for hammer toes. Commonly recommended in clinical guidelines for lesser toe deformities based on biomechanical reasoning.',
          },
          media: 'towel_scrunch',
          caption: 'Towel scrunch: curl the toes to pull the towel in',
          alt: 'A foot on a towel with toes curled, pulling the towel toward the heel',
        },
        {
          name: 'Toe spread',
          dose: 'Walkito starts at 3 sets of 10, holding each spread for 5 seconds',
          how: 'Sit or stand with your foot flat. Spread all five toes apart as wide as you can, hold, then relax. This works the muscles between the metatarsals and the abductor hallucis along the inner arch.',
          feel: 'A stretch between the toes and effort in the top of the foot',
          stop: 'Pain at the hammer toe joint',
          evidence: {
            level: 'early',
            why: 'No trial for hammer toes. An MRI study confirmed toe-spread-out exercises activate intrinsic foot muscles, which are the muscles weakened in hammer toe.',
          },
          media: 'toe_spread',
          caption: 'Toe spread: splay all five toes apart, hold, relax',
          alt: 'A foot with all five toes spread wide apart',
        },
        {
          name: 'Big toe lift (toe yoga)',
          dose: 'Walkito starts at 3 sets of 8, holding 5 seconds, each foot',
          how: 'Sit or stand with your foot flat. Lift only the big toe while keeping the other four toes on the ground. Then reverse: press the big toe down and lift the other four. This trains independent toe control, which is often lost in people with hammer toes.',
          feel: 'Difficulty coordinating at first, then gradual control',
          stop: 'Pain at the hammer toe joint',
          evidence: {
            level: 'early',
            why: 'No trial for hammer toes. Based on the principle that independent toe control helps rebalance flexor and extensor forces across the toe joints.',
          },
          media: 'big_toe_lift',
          caption: 'Big toe lift: lift the big toe while the others stay flat',
          alt: 'A foot with the big toe raised and the other four toes flat on the floor',
        },
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Does footwear make a difference?',
      paragraphs: [
        '**Footwear is the single most recommended conservative approach for hammer toes.** A review of lesser toe deformity management in the EFORT Open Reviews (Malhotra and colleagues, 2016) put footwear modification first in the conservative treatment list:',
        {
          list: [
            'A wide toe box to give toes room.',
            'A tall toe box to prevent friction on the bent joint.',
            'Avoidance of high heels.',
          ],
        },
        'Narrow shoes compress the toes together and push the bent joint against the top of the shoe, causing corns and calluses. High heels slide the foot forward, cramming the toes into the front. Switching shoes will not straighten a rigid hammer toe, but it reduces the daily friction and pressure that cause most of the pain.',
        'Toe pads, gel sleeves, and silicone props can cushion the bent joint and redistribute pressure at the tip of the toe. The Formosa 2022 study showed that molded silicone toe props reduced peak pressure at the tip of the second toe in both flexible and rigid deformities.',
      ],
      cites: [CITE.malhotra, CITE.formosa],
    },
    {
      h2: 'Can hammer toes be reversed without surgery?',
      paragraphs: [
        'If the hammer toe is still flexible, conservative measures, including exercises, stretching, wider shoes, and toe taping, may keep it from progressing and may improve comfort. Taping the affected toe to its neighbor can gently hold it in a more neutral position throughout the day. **But none of these measures has been shown to permanently correct the deformity.**',
        'Once a hammer toe becomes rigid, the joint is contracted and cannot be straightened. At that point, exercise and stretching will not change the shape. The focus shifts to protecting the skin from friction and managing pressure with pads and footwear.',
        'How quickly a flexible hammer toe becomes rigid varies. In some people it stays flexible for years. Wearing shoes with a wide toe box and maintaining toe mobility with daily stretching and exercises are the most commonly recommended strategies for slowing progression.',
      ],
    },
    {
      h2: 'When is surgery discussed?',
      keyFact: 'A 2016 review cited Swedish registry data showing lesser toe procedures, including hammer and claw toe surgery, made up almost a quarter of all forefoot operations (Malhotra and colleagues, 2016).',
      paragraphs: [
        'Surgery is considered when a rigid hammer toe causes persistent pain, skin breakdown, or difficulty wearing shoes despite conservative care. The decision is based on symptoms and functional limitation, not on the appearance of the toe.',
        'Common procedures include:',
        {
          list: [
            'Proximal interphalangeal joint arthroplasty (removing a small piece of bone to straighten the joint).',
            'Arthrodesis (fusing the joint in a straight position).',
          ],
        },
        'Newer minimally invasive techniques exist but long-term outcome data are still being collected.',
        'Recovery from hammer toe surgery typically takes three to six weeks in a postoperative shoe. Some stiffness in the toe is expected. A 2016 review cited Swedish registry data showing that lesser toe procedures, which include hammer toe, claw toe, and related deformities, made up almost a quarter of all forefoot surgeries.',
      ],
      cites: [CITE.malhotra],
    },
  ],
  faq: [
    {
      q: 'Can hammer toes be reversed?',
      a: 'If a hammer toe is still flexible, meaning you can straighten it with your hand, conservative care may improve comfort and slow progression. If it is rigid, exercise cannot change the position. No study has shown that exercises permanently reverse a hammer toe deformity.',
    },
    {
      q: 'What is the difference between a hammer toe and a claw toe?',
      a: 'A hammer toe bends at the middle joint of the toe. A claw toe bends at both the middle and end joints, and the base of the toe extends upward at the metatarsophalangeal joint. Claw toes are more often associated with neuromuscular conditions, while hammer toes are more commonly linked to footwear and foot structure.',
      cites: [CITE.malhotra],
    },
    {
      q: 'Do hammer toe stretches actually work?',
      a: 'No randomized trial has tested stretches or exercises for hammer toes. Manual stretching of a flexible hammer toe may help maintain range of motion and prevent it from becoming rigid. Intrinsic foot muscle exercises are recommended based on biomechanical logic, not direct trial evidence for this condition.',
    },
    {
      q: 'What shoes are best for hammer toes?',
      a: 'Shoes with a wide, tall toe box give the bent toe room and reduce friction on the top of the joint. Avoid narrow, pointed, or high-heeled shoes. The most consistently recommended conservative measure in clinical reviews is footwear modification.',
      cites: [CITE.malhotra],
    },
    {
      q: 'Are toe splints helpful for hammer toes?',
      a: 'Toe splints and strapping can hold a flexible hammer toe in a more neutral position during the day. They are not a permanent correction, but they may slow progression and reduce irritation. A 2022 study found silicone toe props reduced pressure at the tip of the toe in both flexible and rigid cases.',
      cites: [CITE.formosa],
    },
    {
      q: 'How do I know if my hammer toe needs surgery?',
      a: 'Surgery is usually considered when pain, corns, calluses, or skin problems persist despite shoe changes, pads, and conservative care, and the deformity is rigid. If you can still manage symptoms with wider shoes and daily stretching, surgery is not urgent.',
    },
    {
      q: 'Can bunions cause hammer toes?',
      a: 'Yes. When the big toe angles outward in hallux valgus, it can push the second toe upward and out of position, contributing to a hammer toe. Addressing the bunion with wider shoes and [bunion exercises](/bunion-exercises/) may help reduce pressure on the second toe.',
    },
    {
      q: 'Can you massage out a hammer toe?',
      a: 'No. Massage cannot straighten a hammer toe, flexible or rigid, because the bend is a joint position, not a soft tissue knot. Gentle massage and stretching of the toe top can ease soreness and tendon tightness, and help a flexible toe keep moving. It will not undo the deformity, so pair it with wider shoes instead of expecting it to change shape.',
    },
    {
      q: 'Is walking barefoot good for hammer toe?',
      a: 'No trial has tested this directly. Walking barefoot removes the pressure and friction of a narrow shoe on the bent joint, which can ease irritation for some people. It will not straighten a hammer toe. On hard or uneven ground, going barefoot can also load the toes differently, so introduce it gradually rather than switching all at once.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'You have an open sore, blister, or wound on the toe, especially if you have diabetes or reduced sensation',
      'The toe is red, warm, and swollen, which could indicate infection or inflammatory arthritis',
      'The hammer toe appeared suddenly after an injury',
      'You notice numbness or tingling in the toe',
      'The deformity is progressing rapidly despite wider shoes',
      'You have difficulty walking because of the deformity',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text:
      'Walkito includes [towel scrunches](/exercises/towel-scrunch/), [toe spreads](/exercises/toe-spread/), and [big toe lifts](/exercises/big-toe-lift/) as part of its intrinsic foot strengthening track. The app is built for plantar fasciitis and flat feet, not specifically for hammer toes, but the exercises overlap. If you have a flexible hammer toe and want a structured way to do daily toe work, the 3-minute or 5-minute sessions keep the exercises consistent without needing to remember a separate routine.',
    more: [
      'For related forefoot problems, see [ball of foot pain](/ball-of-foot-pain/) and [bunion exercises](/bunion-exercises/).',
    ],
  },
  crumb: 'Hammer toe exercises',
  campaign: 'guide-hammer-toe',
};
