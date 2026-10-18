import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Plantar fasciitis vs a heel (calcaneal) stress fracture (EN). Research
 * 2026-10-18. Not a duplicate: heel-pain-at-night.ts covers night and rest
 * pain in general, heel-pain-after-walking.ts the after-walking pattern,
 * hub-plantar-fasciitis.ts the condition. This page is the side-by-side.
 * Numbers: Sormaala 2006 (30 recruits, 34 calcaneal stress injuries on MRI,
 * only 15% visible on plain X-ray, 22 of 34 injuries with other tarsal bones involved,
 * 19 of 34 posterior). Wright 2016 systematic review (X-ray sensitivity 12%
 * to 56%, MRI 68% to 99%). Patel 2011 AFP (initial X-ray sensitivity 10%,
 * 30 to 70% after three weeks; runners over 25 miles a week; pain with
 * walking 81%; focal tenderness 65.9 to 100%; swelling 18 to 44%; two cluster
 * trials: warm-up stretching did not prevent stress fractures; recovery four
 * weeks to three months or longer, written that way because the build rejects
 * the week count). Tu 2018 AFP (squeeze test, pain after more activity or a
 * harder surface, little to no weight bearing for up to six weeks if severe,
 * Sever disease at 8 to 12). Squeeze test accuracy: no study found that
 * measures it for calcaneal stress fractures; the page says so.
 * Low energy availability: IOC REDs consensus 2023 (no number used).
 * Doses match the heel pain guide (en.ts).
 */

export const PF_VS_STRESS_FRACTURE_EN: Guide = {
  lang: 'en',
  page: 'pfVsStressFracture',
  mainSource: CITE.patelStressFracture,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Plantar Fasciitis vs Stress Fracture: How to Tell',
  description:
    'Plantar fasciitis or a heel stress fracture? Compare the pain pattern, the squeeze test, who is at risk, why early X-rays miss fractures, and what to do.',
  h1: 'Plantar fasciitis vs a heel stress fracture: how to tell',
  lede:
    '[Plantar fasciitis](/plantar-fasciitis/) hurts most on your first steps after rest and usually eases once you walk for a few minutes. A heel stress fracture does the opposite: the pain builds the more you walk or run, often after a jump in activity, and squeezing the sides of the heel tends to hurt (Tu, 2018). An early X-ray can look normal: in 30 military recruits with a heel stress injury on MRI, it showed on plain X-ray in only 15% (Sormaala and colleagues, 2006).',
  intro: [
    'Both conditions sit in the same heel and can start after the same thing, more walking, running or standing. They need opposite responses: plantar fasciitis does well with stretching and strength work, while a stress fracture needs less load first. This page compares the two side by side, explains what the squeeze test can and cannot tell you, who is more at risk of a fracture, why imaging often means an MRI, and what to do while you wait to find out.',
  ],
  takeaways: [
    'Plantar fasciitis pain is "most noticeable with weight bearing first thing in the morning or after a period of rest" and eases with walking (Koc and colleagues, 2023). Stress fracture pain starts with activity and can later be there at rest too (Tu, 2018).',
    'Pain when the sides of the heel bone are squeezed suggests a stress fracture (Tu, 2018), but we found no study that measured how accurate the squeeze test is for the heel, and it is also painful in Sever’s disease in children.',
    'Plain X-rays often miss early stress fractures: one review put their first-visit sensitivity at about 10%, rising to 30 to 70% after three weeks (Patel and colleagues, 2011). MRI was the most accurate test in a 2016 systematic review (Wright and colleagues, 2016).',
    'A sudden rise in training is the classic trigger. Runners who average more than 25 miles a week, women, and people with low energy availability or weak bones are at higher risk (Patel and colleagues, 2011; Mountjoy and colleagues, 2023).',
    'Stretching and strength exercises are graded **A** and **B** for plantar fasciitis (Koc and colleagues, 2023). They are not a plan for a suspected fracture, which first needs less load and a clinician.',
  ],
  toc: true,
  sections: [
    {
      h2: 'How can you tell plantar fasciitis from a heel stress fracture?',
      keyFact: 'Calcaneal stress fracture pain usually starts after an increase in weight-bearing activity or a change to a harder surface, occurs first only with activity and can later occur at rest (Tu, 2018).',
      paragraphs: [
        '**The clearest clue is what walking does to the pain.** Plantar fasciitis is worst on the first steps after sleep or sitting, eases after a few minutes, and can come back after a long day on your feet (Tu, 2018). The 2023 heel pain guideline describes it as pain "most noticeable with weight bearing first thing in the morning or after a period of rest" (Koc and colleagues, 2023).',
        'A calcaneal stress fracture is a small crack in the heel bone from repeated load. Its pain usually starts after you increase walking, running or standing, or move to a harder surface. At first it hurts only during activity and builds as you go. Later it can hurt at rest (Tu, 2018). In a review of stress fractures in general, pain with walking was reported by 81% of patients, a sore spot on the bone by 65.9 to 100%, and swelling by 18 to 44% (Patel and colleagues, 2011).',
        'The table sums up the usual patterns. No single row decides it, and some people do not fit either column neatly.',
      ],
      table: {
        caption: 'Typical patterns, not a diagnosis',
        head: ['', 'Plantar fasciitis', 'Heel stress fracture'],
        rows: [
          ['Worst time', 'First steps after rest', 'During and after activity'],
          ['After a few minutes of walking', 'Usually eases', 'Builds'],
          ['Where it hurts', 'Under the heel, inner side', 'Across the heel bone, often the back half'],
          ['Squeezing the sides of the heel', 'Usually not painful', 'Often painful'],
          ['Swelling', 'Not a usual sign', 'Sometimes'],
          ['Usual trigger', 'Long hours standing, tight calves', 'A jump in training or a harder surface'],
          ['Early X-ray', 'Not needed', 'Often normal'],
        ],
      },
      after: [
        'Pain that is mainly at night or at rest has its own list of causes, covered in [heel pain at night](/heel-pain-at-night/). Pain that builds through a walk is covered in [heel pain after walking](/heel-pain-after-walking/).',
      ],
      sourceNote: 'Location: in Sormaala 2006, 19 of 34 calcaneal stress injuries were in the posterior part of the bone, 6 in the middle and 9 in the anterior part. Tenderness, walking pain and swelling figures in Patel 2011 are for stress fractures at all sites, not the heel alone.',
      cites: [CITE.tuHeelPain, CITE.guideline, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'What is the squeeze test, and how much can it tell you?',
      paragraphs: [
        '**The squeeze test means pressing the inside and outside of the heel bone together, between the palms or between a thumb and fingers.** A clinician does it with the foot relaxed. Pain on squeezing "suggests the diagnosis" of a calcaneal stress fracture, according to a 2018 review in American Family Physician (Tu, 2018). Plantar fasciitis, by contrast, is tender when you press under the inside front of the heel, where the fascia attaches.',
        'Its limits are real:',
        {
          list: [
            '**Nobody has measured how accurate it is for the heel.** We found no study that reports how often the squeeze test is positive in people with a confirmed calcaneal stress fracture, or how often it is positive without one. The same review that covers stress fractures notes that the hop test, another common bedside test, has not been validated either (Patel and colleagues, 2011).',
            '**A negative squeeze does not rule out a fracture.** Some heel stress injuries sit toward the front or the middle of the bone: in one MRI study, 15 of 34 were not in the back part (Sormaala and colleagues, 2006).',
            '**Other things hurt on squeezing too.** In children and young teens, a painful squeeze is a common sign of [Sever’s disease](/severs-disease/), an irritated growth plate (Tu, 2018). Other heel bone problems can also hurt, so a clinician needs to check.',
          ],
        },
        'If you press the sides of your own heel and it hurts, take that as a reason to get it checked, not as a diagnosis. Do not hop on the foot to test it.',
      ],
      cites: [CITE.tuHeelPain, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'Who is more at risk of a heel stress fracture?',
      keyFact: 'Recreational runners who average more than 25 miles a week are at increased risk of stress fractures, and women are at higher risk than men (Patel and colleagues, 2011).',
      paragraphs: [
        'A stress fracture happens when bone takes more repeated load than it can repair. Risk goes up when the load rises, when the bone is less able to take it, or both (Warden and colleagues, 2014).',
        {
          list: [
            '**A sudden increase in training.** A big jump in walking, running, marching or standing, or repeated hard sessions with little rest, is the classic story (Patel and colleagues, 2011). A change to a harder walking surface is a common trigger for the heel (Tu, 2018).',
            '**High running volume.** Recreational runners averaging more than 25 miles a week are at higher risk, as are athletes in track and field, basketball, soccer and dance (Patel and colleagues, 2011). More for runners in [heel pain in runners](/heel-pain-runners/).',
            '**Low energy availability.** Eating too little for the amount you train can affect hormones and bone. The International Olympic Committee lists poor bone health, including bone stress injuries, among the effects of this pattern, called relative energy deficiency in sport (REDs), in both women and men (Mountjoy and colleagues, 2023).',
            '**Bone health.** Women with the female athlete triad (disordered eating, missed periods and low bone density) are at higher risk, and one study found lower vitamin D levels in recruits with stress fractures (Patel and colleagues, 2011). Bone weakened by osteoporosis can crack under normal loads, which is called an insufficiency fracture.',
            '**Being a woman.** Women are at higher risk than men, especially in military training, though data in female athletes are mixed (Patel and colleagues, 2011).',
          ],
        },
        'Plantar fasciitis has a different risk profile. In a study of 50 people with it and 100 without, people with 0 degrees of ankle bend (dorsiflexion) or less had 23.3 times the odds of those with more than 10 degrees, and standing for most of the working day raised the odds 3.6 times (Riddle and colleagues, 2003).',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.wardenBSI, CITE.mountjoyREDs, CITE.riddle],
    },
    {
      h2: 'Why can an X-ray look normal with a stress fracture?',
      keyFact: 'In 30 military recruits whose MRI showed a heel stress injury, the injury was visible on plain X-ray in only 15% (Sormaala and colleagues, 2006).',
      paragraphs: [
        '**An early stress fracture is often too small to show on an X-ray.** The bone first reacts with swelling inside it, which an X-ray cannot see. Signs of repair show up later. One review put the sensitivity of X-rays at the first visit at about 10%, rising to 30 to 70% after three weeks (Patel and colleagues, 2011).',
        'For the heel specifically, a Finnish study looked at military recruits with exercise-related heel or ankle pain who had an MRI. Of 30 recruits with heel stress injuries, only 15% had a visible injury on plain X-rays. In 22 of the 34 injured heels, nearby foot bones were also affected (Sormaala and colleagues, 2006).',
        'A 2016 systematic review of stress fractures in the lower limb found X-ray sensitivity ranging from 12% to 56%, against 68% to 99% for MRI. The authors named MRI the most sensitive and specific test and warned that X-rays are likely to give false negatives early on (Wright and colleagues, 2016).',
        'So a clinician who suspects a fracture may repeat the X-ray after two to three weeks or go straight to an MRI if a quick answer matters (Patel and colleagues, 2011). For plantar fasciitis, the 2023 guideline says imaging is "usually not indicated for patients that meet clinical examination criteria for plantar fasciitis until they fail conservative interventions" (Koc and colleagues, 2023). The [heel spur page](/plantar-fasciitis-vs-heel-spur/) explains why a spur on an X-ray does not settle it either.',
      ],
      sourceNote: 'Wright 2016 pooled lower extremity stress fractures, not only the heel. Ranges are the lowest and highest sensitivity reported across the included studies, not pooled estimates.',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture, CITE.wrightImaging, CITE.guideline],
    },
    {
      h2: 'What should you do while you wait to find out?',
      keyFact: 'Activity modification, with little to no weight bearing for up to six weeks if pain is severe, is usually successful for calcaneal stress fractures (Tu, 2018).',
      paragraphs: [
        '**If your pain fits the stress fracture column, take load off the heel and book a clinician.** Do not wait to see whether a few more runs settle it. Starting care early matters: one review notes that a delay has been linked to a longer return to activity (Patel and colleagues, 2011).',
        {
          list: [
            '**Cut the load to what is pain-free.** That usually means stopping running, jumping and long walks for now. Some people need crutches or a walking boot for a while (Patel and colleagues, 2011; Tu, 2018).',
            '**Keep fit without loading the heel,** for example swimming or cycling, if they do not hurt (Patel and colleagues, 2011).',
            '**Ask about painkillers.** The same review says anti-inflammatory drugs should be used with caution with a stress fracture, because some animal studies suggest they may slow bone repair (Patel and colleagues, 2011).',
            '**Do not start a stretching or strength plan for the heel yet.** Wait until a clinician has ruled a fracture out or cleared you.',
          ],
        },
        'Heel stress fractures tend to recover well in otherwise healthy people (Tu, 2018). Across stress fractures in general, recovery takes from four weeks to three months or longer from the point activity is cut back, and activity then builds back up slowly once you are pain-free (Patel and colleagues, 2011).',
        'If your pain fits the plantar fasciitis column instead, you usually do not need imaging to start the exercises below (Koc and colleagues, 2023). If you are not sure which column you are in, see a clinician first.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Why are exercise plans for plantar fasciitis, not a fracture?',
      paragraphs: [
        '**Stretching and loading help plantar fasciitis because the tissue adapts to load. A cracked bone first needs the load taken away.** Bone stress injuries sit on a scale: a stress reaction can progress to a stress fracture and, with continued load, to a complete fracture (Warden and colleagues, 2014).',
        'The evidence for exercise is specific to plantar fasciitis. The 2023 heel pain guideline grades plantar fascia and calf stretching **A** and strength training **B** for it (Koc and colleagues, 2023). The heel raise program in the best-known trial was tested in 48 people with plantar fasciitis, not in people with a fracture (Rathleff and colleagues, 2015).',
        'For stress fractures the evidence points the other way. Two cluster randomised trials found that leg stretching during warm-ups did not prevent stress fractures (Patel and colleagues, 2011). What does matter is cutting load, then a gradual return guided by a clinician. Once a fracture has recovered, strengthening the muscles around the bone becomes part of preventing the next one (Warden and colleagues, 2014).',
        'That is why the exercises on this page are for plantar fasciitis only. If you have been told you have a stress fracture, follow your clinician’s return plan instead.',
      ],
      cites: [CITE.wardenBSI, CITE.guideline, CITE.rathleff, CITE.patelStressFracture],
    },
    {
      h2: 'Plantar fasciitis only: which exercises fit once a fracture is ruled out?',
      paragraphs: [
        '**Use these only if your pain fits plantar fasciitis, or a clinician has ruled out a fracture.** If squeezing the heel hurts, the pain builds with every walk, or the heel is swollen, skip them and get it checked first.',
        'These are the starting steps from our [plantar fasciitis exercises](/plantar-fasciitis-exercises/) guide: stretches first, then a seated heel raise that puts almost no load on the heel. The full progression, up to the towel heel raise from the trial, is in that guide.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch (plantar fasciitis only)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade, for plantar fasciitis. Not for a suspected fracture.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most sessions',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor.',
          stop: 'Pain in the heel bone itself, or pain that reaches 6 out of 10',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Calf stretch (plantar fasciitis only)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade, for plantar fasciitis. Not for a suspected fracture.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward. A tight calf pulls on the heel all day, so this stretch matters even though you feel it higher up.',
          stop: 'Pain in the heel bone itself, or pain that reaches 6 out of 10',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch (plantar fasciitis only)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade, for plantar fasciitis. Not for a suspected fracture.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          how: 'Take the same position, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Pain in the heel bone itself, or pain that reaches 6 out of 10',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Seated heel raises (plantar fasciitis only)',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B for plantar fasciitis. This step was not tested on its own. Not for a suspected fracture.' },
          dose: '3 sets of 10, both feet',
          often: '3 days a week, never two in a row',
          feel: 'Work low in the calf',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, the deeper calf muscle, with almost no load on the heel.',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'How do I know if my heel pain is a stress fracture or plantar fasciitis?',
      cites: [CITE.tuHeelPain, CITE.guideline],
      a: 'Watch what walking does. Plantar fasciitis hurts most on the first steps after rest and eases after a few minutes. A heel stress fracture usually follows a jump in activity, builds the longer you walk or run, and often hurts when the sides of the heel are squeezed. If your pain fits the fracture pattern, see a clinician.',
    },
    {
      q: 'Can an X-ray miss a heel stress fracture?',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture],
      a: 'Yes, often. In 30 military recruits with a heel stress injury seen on MRI, plain X-rays showed it in only 15%. One review put X-ray sensitivity at the first visit at about 10%, rising to 30 to 70% after three weeks. A normal early X-ray does not rule out a stress fracture.',
    },
    {
      q: 'Do I need an MRI for heel pain?',
      cites: [CITE.guideline, CITE.wrightImaging],
      a: 'Not for typical plantar fasciitis: the 2023 guideline says imaging is usually not needed when the exam fits. If a clinician suspects a stress fracture, MRI is the most accurate test. A 2016 systematic review found MRI sensitivity of 68% to 99%, against 12% to 56% for plain X-rays.',
    },
    {
      q: 'What does a positive squeeze test mean?',
      cites: [CITE.tuHeelPain],
      a: 'Pain when the inside and outside of the heel bone are pressed together suggests a calcaneal stress fracture, or in children Sever’s disease. It is a reason to see a clinician, not a diagnosis. We found no study that measured how accurate the squeeze test is for heel stress fractures, so a painless squeeze does not rule one out.',
    },
    {
      q: 'Can you walk on a heel stress fracture?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'You may be able to, but you usually should not keep loading it. Care means cutting activity to what is pain-free, and with severe pain, little to no weight on the foot for up to six weeks, sometimes with crutches or a boot. A clinician should guide how much walking is safe.',
    },
    {
      q: 'How long does a heel stress fracture take to get better?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'Across stress fractures in general, recovery takes from four weeks to three months or longer from the time activity is cut back. Heel stress fractures tend to recover well in otherwise healthy people. Activity then builds back up gradually once you are pain-free. For plantar fasciitis timelines, see [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/).',
    },
    {
      q: 'Should I stretch if I might have a stress fracture?',
      cites: [CITE.patelStressFracture, CITE.guideline],
      a: 'No, not until a clinician has ruled it out. Stretching and strength work are graded A and B for plantar fasciitis, but a suspected fracture first needs less load. Two cluster randomised trials found that leg stretching during warm-ups did not prevent stress fractures, so stretching is not the tool for bone.',
    },
    {
      q: 'Can plantar fasciitis turn into a stress fracture?',
      cites: [CITE.wardenBSI],
      a: 'No study shows plantar fasciitis turning into a fracture. They are different injuries, one in the fascia and one in the bone. They can share a trigger, such as a sudden rise in walking or running, and a bone stress reaction can progress to a fracture if loading continues. Pain that changes pattern is worth checking.',
    },
    {
      q: 'Who gets heel stress fractures?',
      cites: [CITE.patelStressFracture, CITE.mountjoyREDs],
      a: 'Mostly people who suddenly train more: runners, military recruits and athletes. Runners averaging more than 25 miles a week are at higher risk, and women more than men. Low energy availability, missed periods and low bone density raise the risk, and one study found lower vitamin D levels in recruits with stress fractures.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the heel pain builds the longer you walk or run instead of easing',
      'squeezing the sides of the heel bone hurts',
      'the heel is swollen or bruised, or one spot on the bone is very tender',
      'the pain started after a sudden jump in training or a move to a harder surface',
      'it hurts at rest or wakes you at night',
      'you have had a stress fracture before, missed periods, an eating disorder or low bone density',
      'you cannot put full weight on the foot, or the pain followed a fall or a twist',
      'you feel burning, tingling or numbness in the heel or sole',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is an exercise app for heel and foot pain. Its plan is built for plantar fasciitis type heel pain, not for a stress fracture, so if your pain fits the fracture pattern, see a clinician before you start.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['heelPainAtNight', 'hubPlantarFasciitis', 'heelPainAfterWalking'],
  crumb: 'Plantar fasciitis vs stress fracture',
  campaign: 'guide-plantar-fasciitis-vs-stress-fracture',
};
