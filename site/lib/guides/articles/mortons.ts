import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const MORTONS_EN: Guide = {
  lang: 'en',
  page: 'mortons',
  mainSource: CITE.matthewsCochrane,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: "Morton's Neuroma: Causes, Footwear, Pads, and What Helps",
  description:
    "Morton's neuroma causes burning between the toes. Metatarsal pads, shoe changes, injections, exercises for comfort, and how it differs from metatarsalgia.",
  h1: "Morton's neuroma: what it is, what helps, and what the evidence says",
  lede:
    "Morton's neuroma is a thickening of the nerve between the metatarsal heads, most often between the third and fourth toes. It produces burning, tingling, or the feeling of walking on a pebble. It is not a true tumour. Shoe changes and metatarsal pads are the usual first steps, and a 2024 Cochrane review found that the overall evidence for any single intervention is still limited. This page covers what works, what does not, and where exercise fits in.",
  intro: [
    "The nerve runs between the metatarsal bones on the sole of the foot. When the metatarsal heads compress together, the nerve can become irritated, swollen, and eventually thickened. Narrow shoes, high heels, and high-impact activity all increase the compression. The clinical term is interdigital neuralgia or intermetatarsal neuroma. Morton's neuroma is the name most people search for.",
  ],
  toc: true,
  takeaways: [
    "A 2024 Cochrane review of six RCTs with 373 participants found low-to-moderate-certainty evidence for most Morton's neuroma interventions. No single treatment had strong, high-certainty support (Matthews and colleagues, 2024).",
    "Wider shoes with a low heel and a metatarsal pad placed just behind the metatarsal heads are the most commonly recommended conservative first step. About 32 percent of people managed this way report significant improvement.",
    "Corticosteroid injection provides short-term pain relief, but the 2024 Cochrane review found low-certainty evidence that adding a corticosteroid to a local anaesthetic may result in little to no difference in pain or function compared with local anaesthetic alone.",
    "Exercise does not target the nerve directly. Toe and foot exercises may help with general forefoot comfort and load distribution, but no trial has tested exercise for Morton's neuroma specifically.",
  ],
  sections: [
    {
      h2: "What is Morton's neuroma?",
      figure: { id: 'mortons', caption: 'Morton\'s neuroma is a thickened nerve between the metatarsal heads, most often between the third and fourth toes.', alt: 'Top view of the foot bones with yellow nerves running to the toes and a swollen oval on the nerve between the third and fourth toes.' },
      paragraphs: [
        "Morton's neuroma is a benign thickening of the common plantar digital nerve, usually in the third intermetatarsal space (between the third and fourth toes). Less often, it occurs in the second space. **It is not cancer and it is not a growth on the bone.**",
        'The nerve runs under the transverse metatarsal ligament, a band of tissue that holds the metatarsal heads together. When the heads compress, the nerve gets pinched. Over time, the nerve sheath thickens, and the nerve itself can become enlarged. The result is pain, burning, tingling, or numbness in the webspace that radiates into the affected toes.',
        'It is more common in women, partly because of shoe choice. Narrow-toed shoes and high heels push the metatarsal heads together and increase pressure on the nerve. Running, court sports, and occupations that involve prolonged standing in tight footwear are also risk factors.',
      ],
    },
    {
      h2: "How is Morton's neuroma different from metatarsalgia?",
      paragraphs: [
        "Metatarsalgia is a broader term that means pain around the metatarsal heads, the bony knuckles at the [ball of the foot](/ball-of-foot-pain/). Morton's neuroma is one specific cause of forefoot pain, and it sits under the metatarsalgia umbrella.",
        'The key difference is what hurts and how:',
        {
          list: [
            '**Metatarsalgia** is typically a dull-to-sharp ache under the ball of the foot, often under the second and third metatarsal heads.',
            "**Morton's neuroma** produces burning, tingling, or numbness between the toes, most often the third and fourth. Squeezing the forefoot together, called Mulder's click test, can reproduce the neuroma symptoms and sometimes produces an audible click as the nerve snaps between the metatarsals.",
          ],
        },
        "The distinction matters because the approaches differ. Metatarsalgia responds to offloading the metatarsal heads and strengthening the toes. Morton's neuroma responds to decompressing the nerve, which means wider shoes, pads, and sometimes injections or surgery.",
        "Exercises help forefoot comfort in both, but neither condition has strong exercise-specific trial evidence. See [ball of foot pain](/ball-of-foot-pain/) for more on the broader metatarsalgia picture.",
      ],
    },
    {
      h2: 'Do metatarsal pads and shoe changes help?',
      keyFact: 'Combining two studies in a 2019 review, wider shoes and a metatarsal pad helped about 32 percent of people at an average follow-up of four and a half months (Matthews and colleagues, 2019).',
      paragraphs: [
        "Wider shoes with a low heel and a metatarsal pad are the most commonly recommended first step for Morton's neuroma. The pad is placed just behind the metatarsal heads, not directly under them, to lift the shaft of the metatarsals and spread them apart, reducing compression on the nerve.",
        'Properly fitted footwear with a wide toe box, low heel, and metatarsal pad was assessed in two studies included in a 2019 systematic review. Combining those two studies, footwear and padding were successful in about 32 percent of people at a follow-up averaging four and a half months. However, an RCT comparing footwear and padding with corticosteroid injection found the injection group had six times greater odds of success at six months.',
        'The practical takeaway: **shoe changes and pads are low-risk and worth trying first.** They work for some people and not others. If they have not helped after four to six weeks, the next step is usually a clinician visit to discuss injections or further imaging.',
        "Placement matters. A pad too far forward, directly under the metatarsal head, can increase pressure rather than relieve it. Stick-on metatarsal pads from a pharmacy are cheap enough to try, but positioning takes some experimenting. A podiatrist can fit a custom orthosis if off-the-shelf pads are not working.",
      ],
      cites: [CITE.matthewsSR],
    },
    {
      h2: 'What does the injection evidence say?',
      keyFact: 'In the 2024 Cochrane review, ultrasound-guided corticosteroid injection probably improved pain more than unguided injection, with moderate-certainty evidence at 2, 6 and 12 months (Matthews and colleagues, 2024).',
      paragraphs: [
        "Corticosteroid injection is the most studied non-surgical invasive approach for Morton's neuroma.",
        "The 2024 Cochrane review included six RCTs with 373 participants. It found low-certainty evidence that adding a corticosteroid to a local anaesthetic may result in little to no difference in pain or function at three to six months compared with local anaesthetic injection alone. The Cochrane authors noted that adding a corticosteroid may increase adverse events, including fat pad atrophy and skin changes.",
        'Ultrasound-guided injection probably improves pain compared with unguided injection, with clinically meaningful differences at 2, 6, and 12 months in the included studies. The evidence was graded moderate-certainty.',
        'Other injection types have been studied, including:',
        {
          list: [
            'Alcohol sclerosing injections.',
            'Radiofrequency ablation.',
            'Cryotherapy.',
          ],
        },
        "The 2019 systematic review found corticosteroid injection and manipulation had the strongest evidence for short-term pain reduction, but called for more high-quality RCTs. The 2024 Cochrane review concluded the same: after 20 additional years of research since the first Cochrane review in 2004, **there is still insufficient high-quality evidence to reach firm conclusions about any single intervention.**",
        "This does not mean injections are useless. It means the evidence is not strong enough to declare one approach clearly better than another. A clinician can discuss the options, risks, and what to expect. Corticosteroid injection provides good short-term relief for many people, but repeated injections carry risks to the surrounding tissue.",
      ],
      cites: [CITE.matthewsCochrane, CITE.matthewsSR],
    },
    {
      h2: 'When is surgery discussed?',
      paragraphs: [
        "Surgery is usually considered when conservative management, meaning shoe changes, padding, and one or two rounds of injection, has not provided lasting relief. The most common procedure is neurectomy, surgical removal of the thickened nerve segment. It is effective for many people but leaves permanent numbness between the affected toes, because the nerve that carried sensation there is gone.",
        "Other surgical options include nerve decompression (releasing the transverse metatarsal ligament without removing the nerve) and metatarsal osteotomy (reshaping the bone to give the nerve more space). The 2024 Cochrane review found low-certainty evidence for surgical comparisons, with no clear winner between plantar and dorsal incision neurectomy for patient satisfaction or adverse events.",
        "**Surgery is not a first-line approach.** Most clinicians recommend a structured trial of conservative management for several months before considering it. If you are at that point, a foot and ankle specialist can walk you through the surgical options and what to expect for recovery.",
      ],
      cites: [CITE.matthewsCochrane],
    },
    {
      h2: "Do exercises help Morton's neuroma?",
      paragraphs: [
        "The honest answer is that **no trial has tested exercise for Morton's neuroma.** Exercise does not act on the nerve directly. It cannot shrink a neuroma or decompress the intermetatarsal space the way a wider shoe or a metatarsal pad can.",
        "What exercise can do is improve general forefoot comfort and load distribution. Strengthening the intrinsic foot muscles, the small muscles between and under the metatarsals, may help the metatarsal heads sit in a more spread position during walking. Calf stretching reduces forefoot overload by improving ankle dorsiflexion.",
        "These are comfort and load-management exercises, not neuroma-specific interventions. We say so plainly because overstating the role of exercise here would not be honest.",
        "If your forefoot pain is broader than the neuroma, meaning you also have general metatarsalgia or calf tightness, the exercises on the [ball of foot pain](/ball-of-foot-pain/) page are relevant. The exercises below are drawn from the same pool but listed here for convenience.",
      ],
      exercises: [
        {
          name: 'Toe spread',
          dose: '3 sets of 10 spreads',
          how: 'Sit or stand with your foot flat. Spread all five toes apart as wide as you can, hold for 2 to 3 seconds, then relax. This works the small muscles between the metatarsals and may help the metatarsal heads sit wider.',
          feel: 'A stretch between the toes and mild effort in the top of the foot',
          stop: 'Sharp pain or burning between the toes during the exercise',
          evidence: { level: 'early', why: "No trial for Morton's neuroma. The exercise targets intrinsic muscles that help spread the metatarsal heads." },
          media: 'toe_spread',
          caption: 'Toe spread: splay all five toes apart, hold, relax',
          alt: 'A foot with all five toes spread wide apart, the muscles between the metatarsals highlighted',
        },
        {
          name: 'Towel scrunch (toe curls)',
          dose: '3 sets of 10 scrunches, each foot',
          how: 'Sit with your foot flat on a towel. Curl your toes to scrunch the towel toward you. Release and repeat. This strengthens the toe flexors, which help distribute forefoot load during push-off.',
          feel: 'The muscles under the arch and toes working',
          stop: 'Pain between the toes or in the ball of the foot',
          evidence: { level: 'early', why: 'No trial for neuroma. In a study of 41 people with metatarsalgia, a similar toe exercise program improved pain (Amaha 2020), but there was no control group.' },
          media: 'towel_scrunch',
          caption: 'Towel scrunch: curl the toes to pull the towel toward you',
          alt: 'A foot on a towel, toes curled to scrunch the towel, intrinsic foot muscles highlighted',
        },
        {
          name: 'Calf stretch (straight knee)',
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall. Back leg straight, heel down, hips forward. A tight calf shifts weight forward onto the forefoot, which increases compression on the nerve.',
          feel: 'A stretch in the upper calf',
          stop: 'Pain in the Achilles tendon',
          evidence: { level: 'strong', why: 'Calf stretching has guideline-grade A support for related conditions. Not tested for neuroma specifically, but the forefoot-overload mechanism is recognized.' },
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Calf stretch (bent knee)',
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same position as the straight-knee stretch, then bend the back knee until the stretch moves lower, near the Achilles tendon. This targets the soleus, the deeper calf muscle.',
          feel: 'A stretch lower in the calf, near the heel',
          stop: 'Pain in the Achilles tendon',
          evidence: { level: 'strong', why: 'Same guideline grade A for calf stretching. Targets the soleus, which also contributes to ankle stiffness and forefoot loading.' },
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the soleus highlighted',
        },
      ],
      cites: [CITE.amaha, CITE.guideline],
    },
    {
      h2: 'What the evidence does and does not tell us',
      paragraphs: [
        "The 2024 Cochrane review is the most rigorous summary available. It included six RCTs with 373 participants. Its conclusions: there is low-to-moderate-certainty evidence for most Morton's neuroma interventions, and no single treatment has strong, high-certainty support. After 20 years of additional research since the original 2004 Cochrane review, the authors reached the same basic conclusion.",
        'That does not mean nothing works:',
        {
          list: [
            'Shoe changes and metatarsal pads help about 3 in 10 people.',
            'Ultrasound-guided corticosteroid injection probably improves pain compared with unguided injection.',
            'Neurectomy relieves pain for many people but carries the trade-off of permanent numbness.',
          ],
        },
        '**What is missing is a clear first-line treatment backed by strong evidence.**',
        "For exercise, the gap is even wider. No trial has tested exercise for Morton's neuroma. The exercises on this page are comfort and load-management measures, not neuroma-specific interventions. If exercise is part of your plan, it should sit alongside shoe changes and clinical advice, not replace them.",
      ],
      cites: [CITE.matthewsCochrane, CITE.matthewsSR],
    },
  ],
  faq: [
    {
      q: "What does Morton's neuroma feel like?",
      a: "Morton's neuroma typically causes burning, tingling, or numbness between the third and fourth toes, or the sensation of walking on a pebble or a bunched-up sock. The pain gets worse in tight shoes and during walking. Removing the shoe and rubbing the forefoot often provides temporary relief. Unlike general metatarsalgia, the pain is nerve-like, not a dull ache.",
    },
    {
      q: "What is the difference between Morton's neuroma and metatarsalgia?",
      a: "Metatarsalgia is a broad term for pain under the ball of the foot. Morton's neuroma is one specific cause within that umbrella. Metatarsalgia tends to be a dull-to-sharp ache under the metatarsal heads. Morton's neuroma produces burning or tingling between the toes, usually the third and fourth, and may cause numbness. A clinician can distinguish them with a physical exam.",
    },
    {
      q: "Do metatarsal pads work for Morton's neuroma?",
      cites: [CITE.matthewsSR],
      a: 'Metatarsal pads placed just behind the metatarsal heads spread the bones apart and reduce compression on the nerve. About 32 percent of people treated conservatively with wider shoes and padding report significant improvement (Matthews 2019). The pad must sit behind the metatarsal heads, not under them. Placement too far forward can increase pain.',
    },
    {
      q: "Do exercises help Morton's neuroma?",
      a: "No trial has tested exercise for Morton's neuroma. Exercise does not act on the nerve directly. Toe spreads and intrinsic foot strengthening may help distribute forefoot load more evenly, and calf stretching reduces forefoot overload from a tight calf. These are comfort measures, not neuroma-specific interventions. Shoe changes and pads should come first.",
    },
    {
      q: "Does Morton's neuroma go away on its own?",
      a: "Some people find that switching to wider shoes with a low heel is enough for symptoms to settle over weeks to months. In others, the nerve thickening persists and symptoms return whenever the forefoot is compressed. The condition itself does not reverse, but symptoms can be managed. If conservative steps have not helped after several weeks, a clinician can discuss injection or other options.",
    },
    {
      q: "Do corticosteroid injections work for Morton's neuroma?",
      cites: [CITE.matthewsCochrane],
      a: "A 2024 Cochrane review of six RCTs found low-certainty evidence that adding a corticosteroid to a local anaesthetic may not improve pain or function compared with local anaesthetic alone (Matthews 2024). Ultrasound-guided injection probably works better than unguided injection. Corticosteroid provides short-term relief for many people, but repeated injections carry risks including fat pad atrophy.",
    },
    {
      q: "When does Morton's neuroma need surgery?",
      cites: [CITE.matthewsCochrane],
      a: "Surgery is usually considered after several months of conservative management, including shoe changes, padding, and one or two rounds of injection, have not provided lasting relief. Neurectomy, removal of the thickened nerve segment, is the most common procedure. It relieves pain in many people but leaves permanent numbness between the affected toes.",
    },
    {
      q: "What triggers Morton's neuroma?",
      a: "Morton's neuroma is triggered by anything that compresses the nerve between the metatarsal bones. Common triggers include narrow or pointed-toe shoes, high heels, repetitive impact activities like running, and foot shapes such as flat feet or high arches that shift extra pressure forward. It is more common in women and in middle age.",
    },
    {
      q: "What is the pinch test for Morton's neuroma?",
      a: "The pinch test, sometimes called Mulder's click, is a physical exam a clinician uses to help diagnose Morton's neuroma. They squeeze the forefoot from side to side while pressing between the metatarsal heads. A palpable click or pop, along with reproduced burning pain, supports the diagnosis, though a clinician still needs to rule out other causes.",
    },
    {
      q: 'Is walking good for foot neuroma?',
      a: "Walking itself does not harm the nerve, but tight or thin-soled shoes during walking can increase forefoot compression and worsen symptoms. Short walks in wide, cushioned shoes are usually fine. Longer walks on hard surfaces or in narrow shoes often increase burning or tingling between the toes. If walking consistently triggers symptoms, switching shoes before cutting activity usually helps more.",
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'pain is constant and present at rest, not only during walking or in shoes',
      'there is numbness that does not go away between episodes',
      'the pain has spread beyond the third and fourth toes to involve more of the forefoot',
      'there is visible swelling on the top of the foot, which suggests something other than a neuroma',
      'symptoms have not improved after two to three weeks of wider shoes and metatarsal padding',
      'you also have burning or tingling in both feet or further up the leg, which can suggest peripheral neuropathy rather than a localized neuroma',
      'you have diabetes, reduced feeling in your feet, or poor circulation',
      'pain followed a sudden injury or impact to the forefoot',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: "Walkito is built around plantar fasciitis and flat feet, not Morton's neuroma. But the forefoot exercises in the app, including toe spreads and calf stretching, address the same forefoot load distribution that contributes to neuroma symptoms. Marking the ball of the foot on the pain map during a check-in lets the app include toe spreads and plantar fascia stretching in your session.",
    more: [
      "You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance, arch hold, and balance. Walkito does not diagnose Morton's neuroma. The exercises it includes are comfort and load measures. Wider shoes, metatarsal pads, and clinical assessment should come first.",
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: "Morton's neuroma",
  campaign: 'guide-mortons',
};
