import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * wiegerinck | Wiegerinck JI, Zwiers R, Sierevelt IN, van Weert HC, van Dijk CN, Struijs PA. Treatment of Calcaneal Apophysitis: Wait and See Versus Orthotic Device Versus Physical Therapy: A Pragmatic Therapeutic Randomized Clinical Trial. Journal of Pediatric Orthopaedics. 2016;36(2):152–157. | doi: 10.1097/BPO.0000000000000417 | pmid: 25985369 | RCT
 *
 * jamesSever | James AM, Williams CM, Haines TP. Effectiveness of footwear and foot orthoses for calcaneal apophysitis: a 12-month factorial randomised trial. British Journal of Sports Medicine. 2016;50(20):1268–1275. | doi: 10.1136/bjsports-2015-094986 | pmid: 26917682 | RCT (factorial)
 *
 * perhamreHeelCup | Perhamre S, Lundin F, Norlin R, Klässbo M. Sever's injury; treat it with a heel cup: a randomized, crossover study with two insole alternatives. Scandinavian Journal of Medicine & Science in Sports. 2011;21(6):e42–e47. | doi: 10.1111/j.1600-0838.2010.01140.x | pmid: 20673253 | RCT (crossover)
 */

export const SEVERS_EN: Guide = {
  lang: 'en',
  page: 'severs',
  mainSource: CITE.wiegerinck,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: "Sever's Disease: Heel Pain in Kids and What Helps",
  description:
    "Sever's disease causes heel pain in children aged 8 to 15. Evidence on heel cups, stretching, load management, and when to see a clinician.",
  h1: "Sever's disease: what it is, what helps, and when to see a clinician",
  lede:
    "Sever's disease, also called calcaneal apophysitis, is the most common cause of heel pain in children. It happens when the growth plate at the back of the heel bone gets irritated by repeated pulling from the Achilles tendon, usually during a growth spurt and a sport that involves running or jumping. It is not a disease in the usual sense. It resolves on its own once the growth plate closes.",
  intro: [
    "This page is written for parents. It covers what is happening in the heel, what the research says about heel cups, stretching, load management, and when the pain needs a clinician instead of rest.",
    "Walkito is an exercise app designed for adults with heel and arch pain. It is not designed for children, and nothing on this page is a recommendation to use it with a child. If your child's heel pain is not improving with the steps below, a paediatric sports medicine clinician or podiatrist is the right next step.",
  ],
  takeaways: [
    "Sever's disease affects children aged 8 to 15, most often during a growth spurt, and resolves once the calcaneal growth plate closes, usually between ages 12 and 17 (StatPearls review, 2024).",
    'In a trial of 101 children, wait-and-see, a heel raise inlay and supervised eccentric exercises each reduced heel pain significantly over three months, with no difference between the three at final follow-up (Wiegerinck and colleagues, 2016).',
    'In a crossover trial of 51 boys, a heel cup reduced pain by about 80 percent compared to a heel wedge, measured on the Borg CR-10 scale (Perhamre and colleagues, 2011).',
    'A 12-month factorial trial of 124 children found a relative advantage for heel raises over prefabricated orthoses at 2 months, but no advantage for any option at 12 months (James and colleagues, 2016).',
    'The growth plate typically appears at age 7 to 9 and fuses between 15 and 17. Until it closes, recurrence is common, especially during growth spurts and sport seasons.',
  ],
  toc: true,
  sections: [
    {
      h2: "What is Sever's disease?",
      paragraphs: [
        "Sever's disease is an inflammation of the calcaneal apophysis, the growth plate at the back of the heel bone where the Achilles tendon attaches. In a growing child, this growth plate is made of cartilage, which is softer and more vulnerable to stress than the surrounding bone. The Achilles tendon and the plantar fascia both pull on this area. When a child runs, jumps or plays sport on hard surfaces, those forces are repeated hundreds of times per session.",
        'During a growth spurt, the heel bone can grow faster than the calf muscles and Achilles tendon, which increases the tension on the growth plate. That combination of rapid bone growth and repeated impact is what causes the irritation.',
        "Sever's disease is not a fracture, and it does not damage the growth plate permanently. It is classified as a traction apophysitis: the growth plate is being pulled on, not broken. Once the growth plate closes and becomes solid bone, the condition cannot come back.",
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'What age does it happen, and who gets it?',
      paragraphs: [
        "Sever's disease affects children between about 8 and 15 years old. The calcaneal apophysis first appears at around age 7 to 9 and usually fuses between 15 and 17. Boys are affected two to three times more often than girls, with a typical onset around age 12 for boys and 11 for girls. About 60 percent of cases involve both heels.",
        "It accounts for 2 to 16 percent of visits to sports clinics by children. The sports most associated with it are soccer, basketball, track, cross-country, gymnastics and tennis. The pattern is predictable: it tends to appear at the start of a sport season or during a growth spurt, when the load on the heel suddenly increases.",
        'Risk factors include:',
        {
          list: [
            'High levels of running and jumping activity.',
            'Tight calf muscles.',
            'Limited ankle flexibility.',
            'A high BMI.',
            'Hard playing surfaces.',
            'Poorly cushioned shoes or cleats.',
          ],
        },
      ],
      cites: [CITE.nietoGilSever, CITE.micheliSever, CITE.wiegerinck, CITE.jamesSever],
    },
    {
      h2: "What does Sever's disease feel like?",
      paragraphs: [
        'The main symptom is pain at the back or sides of the heel, usually during or after activity and especially after running or jumping. The pain is often described as a bruise. There is rarely visible swelling or bruising. **Pressing or squeezing the sides of the heel usually reproduces the pain.** This squeeze test is the standard clinical check.',
        "Unlike plantar fasciitis in adults, which is worst on the first steps after rest, Sever's disease pain tends to get worse with activity and does not improve with walking. Some children start limping or walking on their toes to avoid putting weight on the heel.",
        'The pain can range from mild, only noticeable during sport, to severe enough to stop the child from playing altogether.',
      ],
    },
    {
      h2: "What helps Sever's disease? The evidence",
      keyFact: 'In a trial of 101 children, all three approaches improved pain, and the heel raise group reported more satisfaction at six weeks, though the difference disappeared by three months (Wiegerinck and colleagues, 2016).',
      paragraphs: [
        "The evidence base for Sever's disease is small but growing. The three main options studied are load management (reducing painful activity), heel cups or insoles, and stretching or strengthening exercises. All three have shown benefit, and **no single one has been shown to be clearly better than the others at final follow-up.**",
        "In a 2016 trial of 101 children aged 8 to 15, Wiegerinck and colleagues compared three approaches:",
        {
          list: [
            'Wait-and-see with advice to stop painful activity.',
            'A heel raise inlay.',
            'Supervised eccentric exercises.',
          ],
        },
        "All three groups improved significantly. At six weeks, the heel raise group was more satisfied than the other two groups. At three months, no clinically relevant difference remained between the three.",
        'In a separate 2016 factorial trial of 124 children, James and colleagues compared heel raises against prefabricated orthoses, and footwear replacement against no replacement. Heel raises had a small advantage over prefabricated orthoses at 2 months in the physical domain of the Oxford Ankle Foot Questionnaire. At 6 and 12 months, no difference remained between any combination.',
        'In a crossover trial of 51 boys, Perhamre and colleagues compared a 3 mm heel cup against a 5 mm heel wedge. The heel cup reduced pain by about 80 percent on the Borg CR-10 scale, suggesting that cushioning and impact absorption may matter more than simply lifting the heel.',
      ],
      sourceNote:
        'Wiegerinck 2016: 101 children, VAS-pain improved significantly in all 3 groups (p<0.005), no between-group difference at 3 months. James 2016: 124 children, heel raise main effect p=0.04 at 1-2 months (physical domain only), no effect at 6 or 12 months. Perhamre 2011: 51 boys, crossover, heel cup Borg CR-10 reduced from 7 to 2.',
      cites: [CITE.wiegerinck, CITE.jamesSever, CITE.perhamreHeelCup],
    },
    {
      h2: 'Load management and activity modification',
      paragraphs: [
        "Load management is the foundation of Sever's disease care. **It does not mean stopping all sport.** It means reducing the activities that cause the pain, especially running and jumping on hard surfaces, until the pain settles. Most children can return to sport within two to eight weeks if the load is managed early.",
        'Practical steps include:',
        {
          list: [
            'Cutting back on training sessions instead of stopping completely.',
            'Avoiding cleats on hard ground where possible.',
            'Switching to well-cushioned shoes.',
            'Skipping the parts of practice that involve the most running and jumping.',
          ],
        },
        'Some coaches allow children to participate in skill drills while sitting out sprints and conditioning.',
        "The hardest part of load management is that Sever's disease tends to recur. A child may feel better after two weeks of rest, return to full activity, and have the pain come back. That does not mean the first round of rest failed. It means the growth plate is still open and still vulnerable. Recurrence is common until skeletal maturity.",
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Do heel cups and insoles help Sever\'s disease?',
      keyFact: 'A crossover trial of 51 boys found a heel cup cut pain by about 80 percent versus a heel wedge, suggesting impact absorption matters more than the angle of the heel lift (Perhamre and colleagues, 2011).',
      paragraphs: [
        "Heel cups are among the most practical interventions for Sever's disease. They cushion the heel, absorb impact and reduce the peak forces reaching the growth plate. The Perhamre crossover trial found that a heel cup reduced pain by about 80 percent compared to a heel wedge in 51 boys, which suggests that impact absorption at the heel matters more than simply changing the heel angle.",
        "In the James factorial trial, heel raises (a type of insert that lifts the heel) showed a small short-term advantage over prefabricated orthoses at 2 months, but no advantage at 12 months. Custom orthoses were not tested in either of these trials.",
        '**A reasonable starting point is an inexpensive over-the-counter heel cup, worn in both shoes and during sport.** If that does not help, a clinician can assess whether a custom orthotic is worth the cost.',
      ],
      cites: [CITE.perhamreHeelCup, CITE.jamesSever],
    },
    {
      h2: 'Does calf stretching help Sever\'s disease?',
      paragraphs: [
        'Tight calf muscles increase the pull on the growth plate, and calf tightness is one of the recognized risk factors for calcaneal apophysitis. Stretching the gastrocnemius (the more superficial calf muscle, stretched with the knee straight) and the soleus (the deeper calf muscle, stretched with the knee bent) is a standard recommendation.',
        "In the Wiegerinck trial, the exercise group performed an eccentric calf strengthening program under physiotherapist supervision. This group improved as much as the heel raise and wait-and-see groups. Stretching and gentle strengthening are safe and may help by reducing the traction on the growth plate, but **the evidence does not show them to be superior to heel cups or load management alone.**",
        'Exercises for children with calcaneal apophysitis should be supervised or taught by a clinician or physiotherapist. The dose and progression depend on the child\'s age, pain level, and sport demands. A child with acute pain who is limping needs rest first, not exercises.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: "Is Walkito suitable for a child with Sever's disease?",
      paragraphs: [
        "No. Walkito is an exercise app designed for adults with plantar heel pain and arch pain. Its exercise doses, pain thresholds and progression rules are built for adult bodies. A child's growth plate is a fundamentally different structure from an adult's fused heel bone, and the loading rules are different.",
        "If your child has been cleared by a clinician and you are looking for exercise guidance, a paediatric sports medicine clinician or podiatrist can provide a program suited to the child's age and sport. The adult guides on this site, such as [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) and [plantar fasciitis exercises](/plantar-fasciitis-exercises/), cover the same muscles but at adult doses and thresholds.",
      ],
    },
    {
      h2: 'How long does it last, and does it come back?',
      paragraphs: [
        "Sever's disease usually resolves within weeks to months of load management and supportive care. Most children can return to sport within two to eight weeks. The pain typically settles for good once the growth plate fuses into solid bone, usually between ages 12 and 17 depending on the child's sex and rate of maturity (StatPearls review, 2024).",
        'Recurrence is common and expected. Each growth spurt and each new sport season can bring the pain back. **Recurrence is not a sign of failed care.** It is a sign that the growth plate is still open. Continuing with heel cups, good footwear and calf stretching during sport seasons can reduce the severity and frequency of flare-ups.',
        "No long-term problems have been associated with Sever's disease. It does not damage the growth plate or affect final bone shape.",
      ],
      cites: [CITE.wiegerinck, CITE.jamesSever],
    },
  ],
  faq: [
    {
      q: "What is Sever's disease?",
      a: "Sever's disease, also called calcaneal apophysitis, is an inflammation of the growth plate at the back of the heel bone. It is the most common cause of heel pain in children aged 8 to 15, caused by repeated pulling from the Achilles tendon during running, jumping and growth spurts. It is not a true disease and resolves once the growth plate closes.",
    },
    {
      q: "Do heel cups help Sever's disease?",
      cites: [CITE.perhamreHeelCup],
      a: 'In a crossover trial of 51 boys, a heel cup reduced heel pain by about 80 percent compared to a heel wedge, measured on the Borg CR-10 scale (Perhamre 2011). Heel cups cushion the growth plate and absorb impact. An inexpensive over-the-counter heel cup, worn in both shoes and during sport, is a reasonable first step.',
    },
    {
      q: "Should a child with Sever's disease stop playing sport?",
      cites: [CITE.wiegerinck],
      a: "Not necessarily. In a trial of 101 children, reducing painful activity was as effective as heel insoles or supervised exercises at three months (Wiegerinck 2016). Most clinicians recommend cutting back on running and jumping instead of stopping all sport. Skill drills that avoid repeated heel impact are usually safe. Return to full sport is expected within two to eight weeks.",
    },
    {
      q: "Is Sever's disease permanent?",
      a: "No. Sever's disease resolves completely once the calcaneal growth plate closes, which happens between ages 12 and 17 depending on sex and maturity. No long-term complications have been reported. Recurrence is common while the growth plate is still open, but each episode also resolves.",
    },
    {
      q: "Does stretching help Sever's disease?",
      cites: [CITE.wiegerinck],
      a: "Calf stretching is a standard recommendation because tight calf muscles increase the pull on the growth plate. In the Wiegerinck 2016 trial, supervised eccentric exercises improved pain as much as a heel raise inlay or wait-and-see. Stretching helps, but it is not proven to be faster than load management or heel cups alone.",
    },
    {
      q: "How is Sever's disease different from plantar fasciitis?",
      a: "Sever's disease affects the growth plate at the back of the heel in children, while plantar fasciitis is irritation of the plantar fascia under the foot, mostly in adults. Sever's pain is usually at the back and sides of the heel and worsens with activity. Plantar fasciitis pain is usually under the heel and worst on the first steps after rest. The two conditions have different causes and different care paths.",
    },
    {
      q: "Can Walkito help my child with Sever's disease?",
      a: "Walkito is designed for adults with heel and arch pain. Its exercise doses, pain thresholds and progression rules are built for adult bodies, not for a child's open growth plate. A paediatric sports medicine clinician or podiatrist is the right source for a child's exercise program.",
    },
    {
      q: "What can be mistaken for Sever's disease?",
      cites: [CITE.wiegerinck],
      a: "Achilles tendon irritation, a calcaneal stress fracture, and retrocalcaneal bursitis can all look similar in a growing child. A positive squeeze test (pain when the sides of the heel are pressed together), an age of 8 to 15, and a recent jump in training point toward Sever's disease instead. A single injury, swelling, or pain worsening at one specific spot needs a clinician to rule out a fracture.",
    },
    {
      q: "How do you KT tape Sever's disease?",
      a: "There's no trial testing kinesiology tape for Sever's disease, so no pattern is proven better than heel cups or load management. Some clinicians tape along the Achilles and under the heel to reduce the pull on the growth plate. If you want to try it, have a physiotherapist or athletic trainer apply it and show you the pattern.",
    },
  ],
  redFlags: {
    h2: 'See a clinician if',
    bullets: [
      'the pain is severe enough that the child is limping or refuses to put weight on the heel',
      'the pain followed a single injury or a fall, which could indicate a fracture rather than apophysitis',
      'there is visible swelling, redness or warmth around the heel',
      'the child has a fever or feels unwell alongside heel pain',
      'the pain does not improve after several weeks of load management, heel cups and rest',
      'pain is present at rest or wakes the child at night, which can point to something other than apophysitis',
      'the pain is in one specific spot and worsening, which can suggest a stress fracture rather than growth plate irritation',
      'heel pain is accompanied by joint swelling or stiffness elsewhere',
    ],
  },
  program: {
    h2: 'A note for parents looking for an app',
    text: "Walkito is an exercise program for adults with heel and arch pain. It is not designed for children, and its doses and progression rules assume a fully fused heel bone. If you are an adult reading this page because your own heel hurts, the adult guides may help: [plantar fasciitis exercises](/plantar-fasciitis-exercises/), [heel pain in the morning](/heel-pain-in-the-morning/), or [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/). For a child, a clinician is the right starting point.",
  },
  crumb: "Sever's disease",
  campaign: 'guide-severs',
};
