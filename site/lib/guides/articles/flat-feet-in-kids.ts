import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * pfeifferPreschool | Pfeiffer M, Kotz R, Ledl T, Hauser G, Sluga M. Prevalence of flat foot in preschool-aged children. Pediatrics. 2006;118(2):634–639. | doi: 10.1542/peds.2005-2126 | pmid: 16882817 | cross-sectional study (835 children aged 3 to 6)
 * staheliArch | Staheli LT, Chew DE, Corbett M. The longitudinal arch. A survey of eight hundred and eighty-two feet in normal children and adults. Journal of Bone and Joint Surgery (American). 1987;69(3):426–428. | doi: none | pmid: 3818704 | cross-sectional survey (441 people aged 1 to 80)
 * wengerShoes | Wenger DR, Mauldin D, Speck G, Morgan D, Lieber RL. Corrective shoes and inserts as treatment for flexible flatfoot in infants and children. Journal of Bone and Joint Surgery (American). 1989;71(6):800–810. | doi: none | pmid: 2663868 | RCT (129 children, 4 arms, at least 3 years)
 * whitfordOrthoses | Whitford D, Esterman A. A randomized controlled trial of two types of in-shoe orthoses in children with flexible excess pronation of the feet. Foot & Ankle International. 2007;28(6):715–723. | doi: 10.3113/FAI.2007.0715 | pmid: 17592702 | RCT (178 children aged 7 to 11, 12 months)
 * evansCochrane2022 | Evans AM, Rome K, Carroll M, Hawke F. Foot orthoses for treating paediatric flat feet. Cochrane Database of Systematic Reviews. 2022;1(1):CD006311. | doi: 10.1002/14651858.CD006311.pub4 | pmid: 35080267 | Cochrane systematic review (16 RCTs, 1,058 children)
 * linFlatfootNMA | Lin LY, Lin AC, Lai PC, et al. Effects of non-surgical interventions on standing posture and pain in children with flexible flatfoot: a network meta-analysis of randomized controlled trials. Physical Therapy. 2026;106(5):pzag033. | doi: 10.1093/ptj/pzag033 | pmid: 41921007 | systematic review and network meta-analysis (11 RCTs, 761 children)
 * cockayneOstrich | Cockayne S, Baird K, Gates S, et al. OrthoticS for TReatment of symptomatic flat feet In CHildren (OSTRICH): a randomised controlled trial. Health Technology Assessment. 2026;30(62):179–228. | doi: 10.3310/PLKJ4541 | pmid: 40798920 | pragmatic RCT, stopped early (134 randomised of 478 planned) with qualitative study
 * molinaGarciaReeducation | Molina-García C, Banwell G, Álvarez-Salvago F, et al. Efficacy of Functional Re-Education as a Treatment for Infantile Flexible Flatfoot: Systematic Review. Children (Basel). 2024;12(1):8. | doi: 10.3390/children12010008 | pmid: 39857838 | systematic review (11 RCTs, 419 children aged 6 to 14)
 * tuncerKids | Tuncer D, Erekdag A, Senaran H, Uzer G. Intrinsic vs. combined foot muscle strengthening for pes planovalgus in children aged 4-7 years: a randomized controlled trial. European Journal of Pediatrics. 2025;184(10):636. | doi: 10.1007/s00431-025-06480-3 | pmid: 40999032 | RCT (36 children, two exercise programs, no untreated control)
 * raoFootwear | Rao UB, Joseph B. The influence of footwear on the prevalence of flat foot. A survey of 2300 children. Journal of Bone and Joint Surgery (British). 1992;74(4):525–527. | doi: 10.1302/0301-620X.74B4.1624509 | pmid: 1624509 | cross-sectional footprint survey (2,300 children aged 4 to 13)
 * molinaGarciaObesity | Molina-Garcia P, Miranda-Aparicio D, Ubago-Guisado E, Alvarez-Bueno C, Vanrenterghem J, Ortega FB. The Impact of Childhood Obesity on Joint Alignment: A Systematic Review and Meta-Analysis. Physical Therapy. 2021;101(7):pzab066. | doi: 10.1093/ptj/pzab066 | pmid: 33580953 | systematic review and meta-analysis (73 studies, 1,757,107 children)
 * harrisPediatricFlatfoot | Harris EJ, Vanore JV, Thomas JL, et al. Diagnosis and treatment of pediatric flatfoot. Journal of Foot and Ankle Surgery. 2004;43(6):341–373. | doi: 10.1053/j.jfas.2004.09.013 | pmid: 15605048 | clinical practice guideline (ACFAS consensus panel)
 * evansTrafficLight | Evans AM. The flat-footed child: to treat or not to treat. What is the clinician to do? Journal of the American Podiatric Medical Association. 2008;98(5):386–393. | doi: 10.7547/0980386 | pmid: 18820042 | narrative review with care pathway
 *
 * Reused: salinasTorres.
 */

export const FLAT_FEET_KIDS_EN: Guide = {
  lang: 'en',
  page: 'flatFeetKids',
  mainSource: CITE.pfeifferPreschool,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Flat Feet in Kids: What Is Normal and When to Worry',
  description:
    'Flat feet in kids are usually normal and the arch forms with age. The tiptoe check, signs that need a doctor, and what trials found on insoles and shoes.',
  h1: 'Flat feet in kids: what is normal and when to worry',
  lede:
    'Flat feet in kids are usually normal. Most toddlers have them, and the arch forms slowly through childhood. In one study of 835 children, 54 percent of 3-year-olds had flat feet and 24 percent of 6-year-olds did. Worry when the foot hurts, is stiff, or only one side is flat.',
  intro: [
    'This page is written for parents. It covers how the arch develops, a quick check you can do at home, the signs that mean a doctor should look, and what trials found about insoles, special shoes and exercises. If your child has heel pain rather than a flat arch, see [Sever’s disease](/severs-disease/), the most common cause of heel pain in children. For flat feet in adults, see the [flat feet guide](/flat-feet/).',
  ],
  takeaways: [
    'In a 2006 study of 835 children aged 3 to 6 in Austria, 54 percent of 3-year-olds and 24 percent of 6-year-olds had flat feet, and fewer than 1 percent had a flat foot that needed medical attention (Pfeiffer and colleagues, 2006).',
    'A flat foot that gets an arch back when the child stands on tiptoe is called flexible, and most flexible flat feet in children cause no symptoms and need no care, according to the American College of Foot and Ankle Surgeons guideline (Harris and colleagues, 2004).',
    'In a 1989 trial of 129 children, wearing corrective shoes or inserts for at least three years did not change how flexible flat feet developed compared with no inserts; all groups improved, with no real difference between them (Wenger and colleagues, 1989).',
    'A 2022 Cochrane review of 16 trials and 1,058 children found no supporting evidence for costly custom insoles in children whose flat feet do not hurt (Evans and colleagues, 2022).',
    'See a doctor if a child’s flat foot is painful, stiff, on one side only, or comes with limping, frequent falls or weakness.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Is it normal for kids to have flat feet?',
      keyFact: 'In a 2006 study of 835 preschool children, 44 percent had flexible flat feet and fewer than 1 percent had a flat foot that needed medical attention (Pfeiffer and colleagues, 2006).',
      figure: { id: 'arches', caption: 'The same foot bones with a flat foot, a typical arch and a high arch, seen from the inner side.', alt: 'Three feet seen from the inner side on a flat floor: a flat foot whose arch rests on the floor, a typical arch with a small gap underneath, and a high arch with a large gap under the middle of the foot.' },
      paragraphs: [
        'Flat feet are normal in babies and toddlers and common through early childhood. A young child’s foot has a pad of fat under the arch, and the ligaments (the bands that hold bones together) are loose and stretchy. When the child stands, the arch drops toward the floor. That is normal for a young foot.',
        'The numbers are clear on this. In a 2006 study from Vienna, researchers scanned the feet of 835 children aged 3 to 6. Overall, 44 percent had flexible flat feet. Fewer than 1 percent had a flat foot that was a real medical problem.',
        'One in ten children was already wearing arch supports, and the authors judged that more than 90 percent of those were not needed. An older survey of 441 people aged 1 to 80 came to the same view: flat feet are usual in infants, common in children, and still within the normal range in adults.',
        'So if your 2-year-old or 4-year-old has flat feet and runs around happily, **that is the expected picture.**',
      ],
      cites: [CITE.pfeifferPreschool, CITE.staheliArch],
    },
    {
      h2: 'At what age do kids develop arches?',
      keyFact: 'Flat feet fell from 54 percent of 3-year-olds to 24 percent of 6-year-olds in a study of 835 children (Pfeiffer and colleagues, 2006).',
      paragraphs: [
        'Most children develop a visible arch slowly between about age 3 and age 6, and some later. In the Vienna study, 54 percent of 3-year-olds had flat feet, compared with 24 percent of 6-year-olds. Boys were more likely to have flat feet than girls, 52 percent against 36 percent, and their arches tended to develop later. Children who were overweight or obese had flat feet more often too.',
        'Some children never develop much of an arch, and that is often fine. A 2023 review of 12 population studies, about 16,000 people of all ages, found flat feet in 15.6 percent overall. Children aged 3 to 5 and those aged 11 to 17 had about twice the odds of flat feet compared with other age groups.',
        'Many adults with flexible flat feet have no pain at all. Whether flat feet change later in life is covered in [do flat feet get worse with age?](/do-flat-feet-get-worse-with-age/)',
        'There is no exact birthday by which an arch must appear. **What matters more than age is how the foot behaves:**',
        {
          list: [
            'Whether it is flexible.',
            'Whether it hurts.',
            'Whether both feet look alike.',
          ],
        },
      ],
      cites: [CITE.pfeifferPreschool, CITE.salinasTorres],
    },
    {
      h2: 'How can you tell if your child’s flat feet are flexible or rigid?',
      paragraphs: [
        'A flexible flat foot has an arch when the child sits or stands on tiptoe, and the arch flattens only when they stand normally. A rigid flat foot stays flat all the time and the foot feels stiff. The American College of Foot and Ankle Surgeons guideline sorts children’s flat feet into these two groups. Most flexible flat feet are a normal stage of growth. Most rigid flat feet have a cause underneath that a doctor should find.',
        'You can do two quick checks at home. Neither replaces an exam, but they tell you which group your child is likely in.',
      ],
      bullets: [
        '**Tiptoe check.** Ask your child to stand barefoot, then rise up onto their toes. Look at the inside of each foot. If an arch appears and the heel tilts slightly inward, the flat foot is flexible.',
        '**Big toe check (Jack’s test).** With your child standing, gently bend their big toe upward. In a flexible flat foot, the arch lifts as the toe goes up. If the arch does not move, mention it to a doctor.',
        '**Sitting check.** With your child sitting and feet hanging, look for an arch. A flexible flat foot shows one when it is not carrying weight.',
        '**Compare sides.** Both feet should look and move about the same. One flat foot next to a normal one is a reason to get it checked.',
        '**Ankle movement.** With your child sitting, see if the foot can be pulled up toward the shin past a right angle with the knee straight. If it cannot, the calf and Achilles tendon (the heel cord) may be tight, and that is worth showing a doctor.',
      ],
      cites: [CITE.harrisPediatricFlatfoot],
    },
    {
      h2: 'When should you worry about flat feet in a child?',
      paragraphs: [
        'Worry about flat feet in a child when there is pain, stiffness, a difference between the two feet, or a problem with how the child moves. Flat feet on their own, in a child who runs and plays without trouble, are not a reason for concern. A 2008 care pathway by the podiatrist Angela Evans puts it in three groups:',
        {
          list: [
            'Flat feet that hurt need care.',
            'Flat feet that look unusual but do not hurt are watched over time.',
            'Flat feet that are simply part of growing up need only reassurance.',
          ],
        },
        'A few specific causes are worth knowing by name:',
        {
          list: [
            'A **tarsal coalition** is a bridge of bone or tough tissue between two bones at the back of the foot. Children are born with it, but it usually starts to cause pain in the late childhood or teen years, often with a stiff foot and repeated ankle sprains.',
            'A **tight Achilles tendon** can push the foot into a flatter position and cause aching.',
            'Flat feet can be part of a wider condition affecting the nerves, muscles or joints, such as cerebral palsy or juvenile arthritis (arthritis that starts in childhood). Those children need a specialist’s care regardless of the arch.',
          ],
        },
      ],
      cites: [CITE.evansTrafficLight, CITE.harrisPediatricFlatfoot],
    },
    {
      h2: 'Do insoles or special shoes help kids with flat feet?',
      keyFact: 'In a trial of 129 children, corrective shoes or inserts worn for at least three years did not change flexible flat feet compared with no inserts (Wenger and colleagues, 1989).',
      paragraphs: [
        '**Insoles and special shoes do not make a child’s arch develop.** The clearest test is a 1989 trial at a children’s hospital in Dallas. Researchers randomly split 129 children with flexible flat feet into four groups:',
        {
          list: [
            'No inserts.',
            'Corrective orthopaedic shoes.',
            'A heel cup.',
            'A custom-moulded plastic insert.',
          ],
        },
        'Children wore them for at least three years, and 98 finished. X-rays showed that the arches improved in all four groups, including the children with nothing, and there was no real difference between them.',
        'A 2007 Australian trial found the same. The 178 children, aged 7 to 11, were split into three groups:',
        {
          list: [
            'Custom insoles.',
            'Ready-made insoles.',
            'None.',
          ],
        },
        'At three months and at a year, none of the comparisons showed a real difference, including in the children who had pain at the start.',
        'The 2022 Cochrane review gathered the trial evidence: 16 trials with 1,058 children. The certainty of the evidence was low to very low. Its conclusion was direct: in children whose flat feet do not hurt, costly custom insoles have no supporting evidence. In children with juvenile arthritis, insoles may help pain and function.',
        'For flat feet that do hurt, the picture is less settled. A 2026 network meta-analysis (a review that compares many options at once) of 11 trials and 761 children found that ordinary arch-support insoles lowered pain scores more than flat insoles did, but the certainty of that result was very low.',
        'A large UK trial of insoles for children with painful flat feet, called OSTRICH, had to stop early during the COVID-19 pandemic. With 134 of a planned 478 children, it could not answer the question.',
        'For a child with sore feet, a clinician may still suggest a simple ready-made insole for comfort, but it will not build an arch. More on how insoles compare with exercise is in [insoles vs exercises](/insoles-vs-exercises/).',
      ],
      cites: [CITE.wengerShoes, CITE.whitfordOrthoses, CITE.evansCochrane2022, CITE.linFlatfootNMA, CITE.cockayneOstrich],
      sourceNote: 'Lin and colleagues, 2026: traditional insoles versus flat insoles, mean difference −2.92 points (95% CI −3.73 to −2.11), certainty of evidence very low. Pain was not measured in the exercise trials in that review.',
    },
    {
      h2: 'Do exercises help flat feet in children?',
      paragraphs: [
        'Foot exercises may help children whose flat feet hurt or tire easily, but the trials are small and mixed. A 2024 review looked at 11 trials with 419 children aged 6 to 14. It found that exercise programs improved symptoms and foot function, with exercises for the small muscles inside the foot doing best. The trials varied a lot in exercises, tests and length, and the review suggested at least about two months.',
        'A 2025 Turkish trial in 36 children aged 4 to 7 compared two exercise programs over about two months. Both groups improved on arch measures and balance, and the program that added lower leg muscle work did better. There was no group that did no exercise, so we cannot tell how much of the change was normal growth.',
        'In interviews from the OSTRICH trial, hardly any children liked their exercises, and many did not keep them up. **A pain-free child with flexible flat feet needs no exercises at all.** If your child’s feet ache, a physiotherapist or podiatrist can set a program.',
        'The ideas below are gentle, play-style versions of moves used in those trials. The amounts given are cautious starting suggestions for children, not doses tested in the trials, and not the adult doses Walkito uses.',
      ],
      exercises: [
        {
          name: 'Towel and toe pick-up games',
          evidence: { level: 'early', why: 'Small-muscle foot exercises did well in a 2024 review of 11 trials in children, but the trials were small and varied. No trial tested this exact game.' },
          dose: 'A few minutes, as a game',
          often: 'A few times a week, if your child enjoys it',
          feel: 'The toes and the underside of the foot working',
          stop: 'Your child says it hurts, or loses interest',
          how: 'Have your child sit barefoot and scrunch a towel toward them with their toes, or pick up small soft toys or marbles with their toes and drop them in a bowl. Keep the heel on the floor. Make it a race or a count, not a chore.',
          media: 'towel_scrunch',
          caption: 'Towel scrunch: pull the towel in with the toes while the heel stays down',
          alt: 'A seated figure pulling a towel in with the toes of one foot',
        },
        {
          name: 'Tiptoe raises and tiptoe walking',
          evidence: { level: 'early', why: 'Rising onto the toes works the calf and the muscles that lift the arch, and it is part of many children’s programs. It has not been tested on its own in children.' },
          dose: 'About 10 slow raises, or tiptoe walking across a room',
          often: 'A few times a week, as part of play',
          feel: 'The calves working and the arch lifting',
          stop: 'Pain in the foot, heel or ankle',
          how: 'Stand near a wall or table for balance. Rise up onto the toes, pause, and lower slowly. For younger children, “walk like a ballerina” or “sneak like a cat” across the room on tiptoe works just as well.',
          media: 'heel_raise_double',
          caption: 'Tiptoe raise: rise onto both toes, pause, lower slowly',
          alt: 'A figure holding a wall for balance and rising onto the toes of both feet',
        },
        {
          name: 'Calf stretch, if a clinician found a tight calf',
          evidence: { level: 'early', why: 'Stretching is commonly added when the heel cord is tight. Children’s trials used it as part of wider programs, not alone.' },
          dose: '2 holds of about 30 seconds, each leg',
          often: 'Once a day, only if a clinician suggested it',
          feel: 'A gentle stretch in the calf',
          stop: 'Any sharp pain, or pain behind the heel',
          how: 'Stand facing a wall with one foot back, the back knee straight and the heel down. Lean toward the wall until the back calf feels a gentle stretch, and hold.',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back knee straight, back heel on the floor',
          alt: 'A figure leaning into a wall with one leg back, stretching the back calf',
        },
      ],
      cites: [CITE.molinaGarciaReeducation, CITE.tuncerKids, CITE.cockayneOstrich],
    },
    {
      h2: 'Does going barefoot or body weight affect a child’s arch?',
      keyFact: 'In a survey of 2,300 children in India, 8.6 percent of those who wore shoes had flat feet, compared with 2.8 percent of those who did not (Rao and Joseph, 1992).',
      paragraphs: [
        'Barefoot play and a body weight in the usual range both go with fewer flat feet, though neither has been tested as a way to change flat feet. In a 1992 survey of 2,300 children aged 4 to 13 in India, 8.6 percent of children who wore shoes had flat feet, compared with 2.8 percent of those who went barefoot.',
        'Flat feet were most common in children who wore closed-toe shoes and least common in those who wore none. This was a survey at one point in time, so it shows a link, not proof that shoes caused the flat feet.',
        'Weight shows a similar link. A 2021 review of 73 studies covering more than 1.7 million children and teenagers found that those with overweight or obesity were about 1.5 times as likely to have flat feet. Most were also snapshots in time.',
        'Letting a child go barefoot on safe surfaces at home, on grass or on sand gives the foot muscles work to do. Shoes should fit well and bend at the toes. **There is no need for stiff “corrective” shoes.** For more on flexible, thin-soled shoes, see [barefoot shoes](/barefoot-shoes/).',
      ],
      cites: [CITE.raoFootwear, CITE.molinaGarciaObesity],
    },
    {
      h2: 'Will my child have foot problems as an adult?',
      paragraphs: [
        '**Most children with flexible, pain-free flat feet grow into adults without foot problems.** The 2022 Cochrane review went as far as saying that what is known about how children’s feet develop puts most flat foot worries to rest, and that research money should go to children with real foot conditions instead. The 1987 survey of 441 people found the flat feet of adults still sat within the normal range.',
        'There is an honest gap here. No trial has followed a large group of pain-free flat-footed children into middle age to see who later gets pain. Some adults with flat feet do get arch, heel or knee pain, and the [flat feet guide](/flat-feet/) covers what helps them.',
        'Many parents searching this have flat feet themselves. If your own feet ache at the end of the day, that is a separate question from your child’s. Walkito is an exercise app for adults with heel, arch and leg pain, and its flat feet plan is built for grown-up feet, not children’s.',
      ],
      cites: [CITE.evansCochrane2022, CITE.staheliArch],
    },
  ],
  faq: [
    {
      q: 'Is it normal for a toddler to have flat feet?',
      a: 'Yes. Flat feet are normal in toddlers because of a fat pad under the arch and loose, stretchy ligaments. In a 2006 study of 835 children, 54 percent of 3-year-olds had flat feet, falling to 24 percent by age 6. A toddler who walks and plays without pain does not need insoles or special shoes.',
      cites: [CITE.pfeifferPreschool],
    },
    {
      q: 'Can flat feet in kids be corrected?',
      a: 'Flexible flat feet in kids usually change on their own as the child grows, without any device. In a 1989 trial of 129 children, corrective shoes and inserts worn for at least three years made no difference compared with wearing nothing, and all groups improved. Rigid or painful flat feet are different and need a doctor’s exam.',
      cites: [CITE.wengerShoes],
    },
    {
      q: 'Should my child wear arch supports for flat feet?',
      a: 'Not if the flat feet do not hurt. A 2022 Cochrane review of 16 trials and 1,058 children found no supporting evidence for custom insoles in children with pain-free flexible flat feet. For a child with sore feet, a clinician may suggest a simple ready-made insole for comfort, though the evidence for that is very low certainty.',
      cites: [CITE.evansCochrane2022, CITE.linFlatfootNMA],
    },
    {
      q: 'What is the tiptoe test for flat feet?',
      a: 'The tiptoe test checks whether a child’s flat foot is flexible. Ask your child to stand barefoot and rise onto their toes. If an arch appears on the inside of the foot, the flat foot is flexible, which is the common, usually harmless kind. If the foot stays flat and stiff on tiptoe, a doctor should examine it.',
      cites: [CITE.harrisPediatricFlatfoot],
    },
    {
      q: 'Can flat feet cause leg pain in children?',
      a: 'Painful flat feet can cause aching in the foot, ankle or lower leg after activity, but most flat-footed children have no pain at all. If a child has heel pain during a growth spurt, [Sever’s disease](/severs-disease/) is a more likely cause. Pain that wakes a child at night, or comes with swelling or limping, needs a doctor.',
    },
    {
      q: 'Do kids with flat feet need special shoes?',
      a: 'No. Children with flexible flat feet do not need stiff or corrective shoes. Shoes should fit well, hold the heel and bend at the toes. In a 1992 survey of 2,300 children, flat feet were less common in children who went barefoot (2.8 percent) than in those who wore shoes (8.6 percent), though that survey shows a link, not proof.',
      cites: [CITE.raoFootwear],
    },
  ],
  redFlags: {
    h2: 'See a clinician if',
    bullets: [
      'the foot, ankle or leg hurts, especially if the pain stops your child from running or playing',
      'the foot is stiff, or no arch appears when your child stands on tiptoe',
      'only one foot is flat, or one foot looks clearly different from the other',
      'your child limps, trips or falls often, seems weak, or walks on their toes much of the time',
      'the heel cord is tight and the foot will not bend up toward the shin past a right angle',
      'a teenager has a stiff, painful foot or keeps spraining the same ankle',
      'there is swelling, redness or warmth, a fever, or joint pain elsewhere in the body',
      'the flat foot is getting worse over time, or your child was late to walk or has other development worries',
    ],
  },
  program: {
    h2: 'A note for parents looking for an app',
    text: 'Walkito is an exercise program for adults with heel, arch and leg pain. It is not designed for children, and its doses and progressions assume an adult foot. Nothing on this page is a suggestion to use it with a child. For a child whose feet hurt, a GP, paediatrician, physiotherapist or podiatrist is the right first step.',
    more: [
      'If you are reading this because your own flat feet ache, the adult guides may help: [flat feet exercises](/flat-feet-exercises/) and [arch pain](/arch-pain/).',
    ],
  },
  crumb: 'Flat feet in kids',
  campaign: 'guide-flat-feet-kids',
};
