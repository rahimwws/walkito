import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const HAGLUNDS_EN: Guide = {
  lang: 'en',
  page: 'haglunds',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: "Haglund's Deformity (Pump Bump): What It Is and What to Do",
  description:
    "Haglund's deformity is a bony bump on the back of the heel linked to bursitis and Achilles pain. Causes, exercises and when surgery is discussed.",
  h1: "Haglund's deformity: the bump on the back of the heel, what causes it and what helps",
  lede:
    "Haglund's deformity is a bony enlargement on the upper back of the heel bone. It sits right where the Achilles tendon attaches, and when shoes press on it, the bursa between the bone and the tendon gets irritated. The result is posterior heel pain, swelling, and sometimes a visible bump that some people call a pump bump. Conservative management is the first-line approach, but the evidence behind it is mostly expert opinion, not trials.",
  intro: [
    "This page covers the anatomy, the relationship to insertional Achilles tendinopathy and retrocalcaneal bursitis, what conservative steps exist, and when surgery enters the conversation. If your pain sits higher on the tendon instead of at the bone, the [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) page is the better starting point. If your pain is under the heel, see [plantar fasciitis exercises](/plantar-fasciitis-exercises/) or [heel pain in the morning](/heel-pain-in-the-morning/).",
  ],
  takeaways: [
    "Haglund's deformity is an abnormal bony prominence at the posterosuperior calcaneus, first described by Patrick Haglund in 1927. It can lead to retrocalcaneal bursitis and insertional Achilles tendinopathy (Yuen and colleagues, 2022).",
    'Conservative management includes shoe modification (avoid rigid heel counters), heel lifts, stretching, and strengthening of the calf. No RCT has tested conservative treatment for Haglund\'s specifically (Choo and colleagues, 2020).',
    "For insertional Achilles pain associated with Haglund's, eccentric heel drops should stay at floor level. Deep dorsiflexion compresses the tendon against the bump (Jonsson and colleagues, 2008).",
    'Surgery is considered after at least six months of conservative management has failed. A 2022 systematic review found both open and endoscopic approaches improved function scores, with endoscopic techniques showing shorter recovery (Yuen and colleagues, 2022).',
    "The 2024 Achilles tendinopathy guideline grades exercise **A** for midportion tendinopathy, but insertional cases, which include Haglund's, need modifications to avoid provocative dorsiflexion (Chimenti and colleagues, 2024).",
  ],
  toc: true,
  sections: [
    {
      h2: "What is Haglund's deformity?",
      figure: { id: 'haglund', caption: 'Haglund\'s deformity is a bony bump on the upper back corner of the heel bone. The bursa between it and the Achilles tendon can get pinched.', alt: 'Side view of an ankle and heel showing the Achilles tendon, a bony bump at the upper back corner of the heel bone, and a small fluid sac between them.' },
      paragraphs: [
        "Haglund's deformity is a bony bump on the posterosuperior part of the calcaneus, the upper back corner of the heel bone. Between this bump and the Achilles tendon sits a small fluid-filled sac called the retrocalcaneal bursa. When the bump is prominent, the bursa gets pinched between the bone and the tendon, causing inflammation (retrocalcaneal bursitis) and pain at the back of the heel.",
        'The bump itself is a structural variation. Some people have a more prominent calcaneus than others. It becomes a problem when shoe pressure, tendon loading, or both irritate the bursa and the tendon insertion. The combination of the bony prominence, bursitis, and insertional Achilles tendinopathy is sometimes called Haglund\'s syndrome.',
        'The term "pump bump" comes from the association with rigid-backed shoes, such as pumps or dress shoes, that press directly on the prominence. But it is not only caused by shoes. Foot mechanics, calf tightness, and tendon loading all play a role.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: "How is Haglund's related to insertional Achilles tendinopathy?",
      paragraphs: [
        "Haglund's deformity and insertional Achilles tendinopathy often appear together, but they are not the same condition. Insertional tendinopathy is pain at the spot where the Achilles tendon attaches to the heel bone, typically from overload. Haglund's deformity is a structural bone shape. The bump can irritate the tendon from behind, and the tendon\'s insertion can be affected by the same compression that inflames the bursa.",
        'The practical link: if you have a Haglund\'s bump and posterior heel pain, the pain may come from the bursa, the tendon insertion, or both. A clinician can differentiate by examining where tenderness is greatest and whether stretching or loading reproduces the pain.',
        'The 2024 Achilles tendinopathy guideline makes a clear split between midportion and insertional disease. For insertional problems, which include cases associated with Haglund\'s, the standard eccentric heel drop protocol needs modification. Deep dorsiflexion, letting the heel drop below the step edge, compresses the tendon against the bone and can flare symptoms.',
      ],
      cites: [CITE.achillesGuideline, CITE.jonsson],
    },
    {
      h2: 'What is retrocalcaneal bursitis?',
      paragraphs: [
        "The retrocalcaneal bursa sits in the space between the calcaneus and the Achilles tendon. Its job is to reduce friction. When Haglund's bump is prominent, the bursa gets squeezed during dorsiflexion (bending the ankle so the foot comes up). The result is swelling, pain, and sometimes redness at the back of the heel.",
        'Retrocalcaneal bursitis can occur without Haglund\'s deformity, for example from sudden increases in running or uphill work. But the bony prominence makes it more likely. Shoes with rigid heel counters that press on the bump are a direct mechanical irritant.',
        'The pain from retrocalcaneal bursitis is at the back of the heel, deep between the tendon and bone. It is different from superficial bursitis (a tender, soft swelling on the skin surface) and from the medial-heel pain of plantar fasciitis.',
      ],
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
    },
    {
      h2: "What are the conservative options for Haglund's deformity?",
      paragraphs: [
        'A 2020 narrative review lists the first-line conservative steps: shoe modification (avoiding shoes with rigid heel counters, using open-backed shoes or padding the heel area), heel lifts to reduce Achilles tension, stretching the gastrocnemius and soleus, strengthening the calf, and activity modification.',
        "No randomised controlled trial has tested any of these interventions specifically for Haglund's deformity. The evidence is expert opinion and case series. The 2022 surgical review noted that most authors recommend at least six months of conservative treatment before considering surgery.",
        'The most immediate change is often the shoe. If a rigid heel counter is pressing on the bump, removing that pressure can reduce symptoms quickly. Backless shoes, shoes with a soft or flexible heel counter, or padding placed inside the shoe around (not over) the bump are practical options.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
    {
      h2: "What exercises help with Haglund's deformity?",
      keyFact: 'In a pilot study of 27 people with insertional Achilles pain, floor-level eccentric loading that avoided deep dorsiflexion gave good results in 67% of cases (Jonsson and colleagues, 2008).',
      paragraphs: [
        "Exercise for Haglund's has two goals: reduce calf tightness that pulls on the heel, and build calf strength that helps the tendon tolerate load. Both are borrowed from the Achilles tendinopathy literature. No trial has tested them for Haglund's specifically.",
        'The key modification is floor level only. For insertional Achilles pain, a 2008 pilot study of 27 people tested eccentric loading without dorsiflexion past neutral, meaning the heel never dropped below the floor. Good results were reported in 67% of cases. Standard heel drops over a step edge, which let the heel sink below the edge and push the ankle into deep dorsiflexion, can compress the tendon against the bump and make symptoms worse.',
        "The [eccentric heel drops](/exercises/eccentric-heel-drops/) page covers the movement in detail. For Haglund's and insertional pain, do every heel raise and drop at floor level. Do not drop below the step edge. Calf stretching should also be gentle, stopping before deep dorsiflexion provokes the back of the heel.",
      ],
      exercises: [
        {
          name: 'Eccentric heel drops (floor level)',
          evidence: { level: 'early', why: "Jonsson 2008 was a small, uncontrolled pilot study (27 patients, no comparison group): floor-level-only eccentric loading, no dorsiflexion past neutral, reported good results in 67% of patients with insertional Achilles pain. No controlled trial has tested this for Haglund's, so the evidence stays early rather than moderate." },
          dose: 'Walkito starts at 3 x 10, each leg. Jonsson protocol: 3 x 15, twice daily, three months',
          how: 'Stand on a flat floor (not a step edge). Rise on both feet, shift to the affected leg, lower slowly over three seconds. The heel returns to floor level, not below it. Both feet to come back up. Straight knee first; add bent-knee sets once straight-knee sets feel manageable.',
          often: 'Strength days. Jonsson protocol: twice daily.',
          feel: 'Work in the calf during the lowering. Some discomfort at the tendon is acceptable if it settles by the next morning.',
          stop: 'Pain at the back of the heel above 5/10, or pain that does not settle overnight',
          media: 'heel_drop_straight',
          caption: 'Floor-level eccentric heel drop: up on both feet, down slowly on one, heel stays at floor level',
          alt: 'A figure lowering one heel slowly from tiptoe back to floor level, the Achilles tendon highlighted',
        },
        {
          name: 'Double-leg heel raises',
          evidence: { level: 'moderate', why: 'Guideline-supported as part of the Achilles loading progression. Not tested for Haglund\'s directly.' },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet on a flat floor. Rise straight up over the big toes, lower slowly over three seconds. Both feet share the load. This is the lower-load starting point before single-leg eccentric work.',
          often: 'Most days of the week, while this level is still challenging',
          feel: 'The calves working together, mild pull at the tendon',
          stop: 'Pain at the back of the heel above 5/10',
          media: 'heel_raise_double',
          caption: 'Double-leg heel raises at floor level',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
        {
          name: 'Calf stretch (straight knee, gentle)',
          evidence: { level: 'early', why: 'Part of conservative management for Haglund\'s per expert recommendation. No RCT for this condition. Avoid deep dorsiflexion.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall. Step one foot back, back leg straight, heel down. Lean forward until you feel a stretch in the upper calf. Stop before the stretch reaches the back of the heel bone. Do not push into deep ankle bend.',
          often: 'Daily, after strength work',
          feel: 'A stretch in the calf, not pain at the Achilles attachment',
          stop: 'Any provocation at the back of the heel bone',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: keep it gentle, stop before the back of the heel is provoked',
          alt: 'A figure leaning on a wall with one leg straight behind, calf muscles highlighted',
        },
        {
          name: 'Soleus stretch (bent knee, gentle)',
          evidence: { level: 'early', why: 'Addresses the deeper calf muscle. Same caution: avoid deep dorsiflexion for insertional pain.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same wall position, bend the back knee until the stretch moves lower. Stop short of the point where the back of the heel is compressed. The soleus only releases with the knee bent.',
          often: 'Daily, after calf stretch',
          feel: 'A stretch near the lower calf, not at the heel bone',
          stop: 'Pain at the Achilles attachment or the bump',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee, stay gentle at the heel',
          alt: 'A figure in a split stance with bent knees, the lower calf highlighted',
        },
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline, CITE.chooRearfoot],
    },
    {
      h2: 'How much pain is okay during exercises?',
      keyFact: 'The pain-monitoring model allows pain up to about 5 out of 10 during loading, as long as it returns to baseline by the next morning and does not worsen week over week (Silbernagel and colleagues, 2007).',
      paragraphs: [
        'The Silbernagel 2007 pain-monitoring model for Achilles tendinopathy allowed pain up to about 5 out of 10 during loading, provided it returned to baseline by the next morning and did not worsen week over week. This model was tested for midportion Achilles pain, not specifically for Haglund\'s or insertional cases, but it is the most cited pain threshold in the Achilles literature.',
        "For insertional problems associated with Haglund's, be more cautious. The bump adds a mechanical element that midportion tendinopathy does not have: compression of the bursa and tendon against the bone. If exercises provoke a sharp pain at the back of the heel that does not settle quickly, step down the load or switch to isometric holds before trying eccentric work again.",
      ],
      cites: [CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: "When is surgery considered for Haglund's deformity?",
      keyFact: 'A 2022 systematic review of 20 studies found both open and endoscopic surgery improved AOFAS function scores, with endoscopic techniques showing shorter recovery (Yuen and colleagues, 2022).',
      paragraphs: [
        'Surgery is discussed after at least six months of conservative management have not provided adequate relief. The 2022 systematic review by Yuen and colleagues included 20 studies and found that both open and endoscopic techniques improved AOFAS (American Orthopaedic Foot and Ankle Society) scores. Endoscopic approaches showed shorter recovery times.',
        "The surgery typically involves removing the bony prominence (calcaneoplasty), excising the inflamed bursa, and in some cases debriding or reattaching the Achilles tendon. Complications can include wound healing problems, nerve injury, and tendon weakening. The decision is between you and your surgeon.",
        'This page does not recommend for or against surgery. The conservative steps above are where most people start, and many respond well enough to avoid an operation. If six months of shoe modification, exercise, and activity changes have not helped, a foot and ankle specialist can discuss surgical options.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: "Can shoes cause Haglund's deformity?",
      paragraphs: [
        'Shoes do not create the bony prominence. The shape of the calcaneus is partly genetic. But shoes with a rigid, unyielding heel counter can irritate a bump that would otherwise be painless. This is the origin of the name "pump bump," from the rigid backs of pump-style shoes.',
        'Shoes to avoid: anything with a stiff, narrow heel counter that presses on the back of the heel. Shoes to look for: soft or padded heel collars, slightly open or flexible backs, and enough room that the heel counter does not dig in. Heel lifts inside the shoe can also shift the Achilles tendon away from the bump slightly.',
        'Shoe modification is the most immediately actionable step and the one most consistently recommended across the expert-opinion literature. If you can remove the pressure, you can often reduce the pain.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
  ],
  faq: [
    {
      q: "What is a pump bump?",
      cites: [CITE.yuenHaglund],
      a: "A pump bump is a colloquial name for Haglund's deformity, a bony enlargement on the upper back of the heel bone. The name comes from rigid-heeled shoes (pumps) that press on the bump and irritate the tissue between the bone and the Achilles tendon, causing pain and swelling.",
    },
    {
      q: "Is Haglund's deformity the same as Achilles tendonitis?",
      cites: [CITE.achillesGuideline, CITE.yuenHaglund],
      a: "No. Haglund's deformity is a bony prominence on the heel bone. Achilles tendonitis is pain in the tendon itself, usually from overload. They often appear together because the bump can irritate the tendon where it attaches. The 2024 guideline treats insertional Achilles tendinopathy, which can involve Haglund's, as distinct from midportion disease.",
    },
    {
      q: "Can Haglund's deformity go away without surgery?",
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
      a: "The bony bump does not go away without surgery. But the pain can. Many people manage symptoms with shoe changes, heel lifts, calf stretching and strengthening, and activity modification. Surgery is discussed after at least six months of conservative management have not provided relief.",
    },
    {
      q: "What exercises should you avoid with Haglund's deformity?",
      cites: [CITE.jonsson],
      a: "Avoid exercises that push the ankle into deep dorsiflexion, meaning the foot bending up toward the shin past neutral. Standard eccentric heel drops over a step edge, where the heel sinks below the step, compress the tendon against the bump. Do heel raises and drops at floor level only. Avoid aggressive calf stretching that provokes the back of the heel.",
    },
    {
      q: "Does Haglund's deformity need surgery?",
      cites: [CITE.yuenHaglund],
      a: "Not always. Conservative treatment is the first-line approach. A 2022 systematic review noted that most authors recommend at least six months of conservative management before considering surgery. Surgery involves removing the bony bump, the inflamed bursa, and sometimes debriding the tendon. Both open and endoscopic approaches improve outcomes.",
    },
    {
      q: "What shoes are best for Haglund's deformity?",
      cites: [CITE.chooRearfoot],
      a: "Shoes with a soft, padded, or flexible heel counter. Avoid rigid-backed shoes that press on the bump. Open-backed shoes, clogs, or shoes with a notched heel collar can reduce direct pressure. Heel lifts inside the shoe can shift the tendon slightly away from the prominence.",
    },
    {
      q: 'What is retrocalcaneal bursitis?',
      cites: [CITE.yuenHaglund],
      a: "Retrocalcaneal bursitis is inflammation of the fluid-filled sac (bursa) between the Achilles tendon and the heel bone. Haglund's deformity makes it more likely because the prominent bone pinches the bursa during ankle movement. The pain is deep, at the back of the heel, and often worsened by shoes and dorsiflexion.",
    },
    {
      q: "What happens if Haglund's deformity is left untreated?",
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
      a: "Without changes, the bump does not shrink and the shoe friction that caused it usually continues, so pain and retrocalcaneal bursitis can keep building. Long-standing irritation also raises the risk of insertional Achilles tendinopathy. The bony growth itself does not reverse with conservative care, though symptoms often ease once footwear and loading are changed.",
    },
    {
      q: "Is walking bad for Haglund's deformity?",
      cites: [CITE.chooRearfoot],
      a: "Walking itself is not harmful, and staying active is usually fine. What matters is the shoe: a rigid or low-cut heel counter that rubs the bump can aggravate pain and bursitis with every step. Switching to shoes with a soft or open heel is usually more useful than resting completely.",
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you felt a sudden pop, snap, or a sensation of being kicked in the back of the leg. This can indicate an Achilles tendon rupture',
      'there is significant swelling, redness, or warmth at the back of the heel, especially with fever',
      'pain is getting steadily worse despite shoe changes and conservative steps over several weeks',
      'you cannot push off on your toes or walk normally',
      'pain is present at rest or wakes you at night, which may indicate a stress fracture or another condition beyond bursitis',
      'numbness or tingling accompanies the heel pain',
      'you have taken fluoroquinolone antibiotics (such as ciprofloxacin) recently and have new tendon pain',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: "Walkito's calf-loading progression runs from seated raises through double-leg raises, a hold, eccentric heel drops and beyond. For Haglund's and insertional Achilles pain, every step stays at floor level instead of dropping below a step edge. Walkito moves you up once two sessions at a level felt easy, rather than on a fixed schedule.",
    more: [
      "Sessions are 3, 5 or 10 minutes. Every 14 days, a test checks calf endurance and balance. Walkito is an exercise program. It does not diagnose. If you have a visible bump on the back of your heel and are not sure what is causing the pain, have a clinician check it before you start loading.",
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: "Haglund's deformity",
  campaign: 'guide-haglunds',
};
