import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Heel pain that isn't plantar fasciitis (EN). Research 2026-10-18.
 * Main source: Latt 2020 (differential diagnosis table, classic PF history,
 * about 30% bilateral, stress fracture and fat pad pain activity related,
 * bilateral heels + other joints + stiff spine suggest rheumatologic cause,
 * L5/S1 compression with back and leg pain, tarsal tunnel burning/shocking
 * with numbness, Baxter burning across the heel pad, labs if morning
 * stiffness over 30 minutes). Full text read (fc-full-35097359.txt).
 * Numbers: Yi 2011 (250 people, PF 53.2%, fat pad 14.8%, both 9.2%),
 * Tedeschi 2025 (Baxter up to 20% of chronic heel pain), Sormaala 2006
 * (15% visible on X-ray), Hansen 2018 (bilateral predicts longer duration).
 * New: Alshami 2008 (neural heel pain review), Thomas 2010 (ACFAS CPG:
 * mostly mechanical, but neurologic, arthritic, traumatic, neoplastic,
 * infectious, vascular causes must be considered). No diagnosis tool; the
 * quiz stays on /foot-pain-identifier/. Exercise cards are PF only, doses
 * as in the heel pain guide (en.ts) and pf-vs-stress-fracture.
 */

export const HEEL_NOT_PF_EN: Guide = {
  lang: 'en',
  page: 'heelNotPf',
  mainSource: CITE.latt,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Heel Pain Not Plantar Fasciitis? 9 Look-Alikes Compared',
  description:
    'Heel pain that is not plantar fasciitis: fat pad, nerves, stress fracture, Achilles, Haglund, Sever, PTTD, arthritis and the back, compared in one table.',
  h1: 'Heel pain that isn’t plantar fasciitis: look-alikes and how they differ',
  lede:
    'If your heel pain does not follow the usual pattern of [plantar fasciitis](/plantar-fasciitis/), worst with the first steps in the morning and easing as you warm up, something else may be going on. Under the heel, the common look-alikes are a bruised or thin heel fat pad, an irritated nerve, including one pinched in the lower back, a heel stress fracture and inflammatory arthritis (Latt and colleagues, 2020). Pain at the back of the heel has its own causes, such as the Achilles tendon. In 250 people with pain under the heel, plantar fasciitis explained 53.2% of cases and fat pad atrophy 14.8% (Yi and colleagues, 2011).',
  intro: [
    'This page compares nine look-alikes side by side: where each one hurts, when, what makes it worse and what to do next. It is not a diagnosis. Several of these feel alike, two can be present at once, and only a clinician who examines your foot can tell them apart. If you want a quick sort by where it hurts, the [foot pain identifier](/foot-pain-identifier/) does that; this page explains the differences behind it. If an X-ray showed a spur, see [heel spur exercises](/heel-spur-exercises/).',
  ],
  takeaways: [
    'Typical plantar fasciitis pain sits near the inner heel, is worst with the first step in the morning or after sitting, gets better with activity and then worse as activity goes on (Latt and colleagues, 2020).',
    'In 250 people with plantar heel pain, plantar fasciitis accounted for 53.2%, fat pad atrophy for 14.8%, and both together for 9.2% (Yi and colleagues, 2011).',
    'Burning, electric or tingling heel pain often points to a nerve. One review estimates Baxter’s nerve entrapment may explain up to 20% of chronic heel pain (Tedeschi, 2025).',
    'A heel stress fracture usually aches with activity, not with the first step, and in 30 military recruits it showed on plain X-ray in only 15% (Latt and colleagues, 2020; Sormaala and colleagues, 2006).',
    'Pain in both heels together with other painful or stiff joints, or a stiff back, suggests an inflammatory cause that needs a doctor, not just stretches (Latt and colleagues, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What else can cause heel pain besides plantar fasciitis?',
      keyFact: 'In 250 people with plantar heel pain, plantar fasciitis explained 53.2% of cases, fat pad atrophy alone 14.8%, and both together 9.2% (Yi and colleagues, 2011).',
      paragraphs: [
        '**Plantar fasciitis is the most common cause of heel pain, but it is far from the only one.** A US foot surgeons’ guideline describes heel pain as mostly mechanical, but says nerve, arthritis, injury, tumour, infection and blood vessel causes must also be considered (Thomas and colleagues, 2010). A 2020 review groups the causes of pain under the heel into nerve problems, injuries such as a stress fracture or a torn fascia, inflammatory arthritis, and wear of the fat pad or the fascia itself (Latt and colleagues, 2020).',
        'The table puts the nine most common look-alikes next to plantar fasciitis. Read it as a map of patterns, not a checklist: the cells describe what is typical, and your heel does not have to read the textbook.',
      ],
      table: {
        caption: 'Heel pain look-alikes: typical patterns. Only a clinician can confirm which one you have.',
        head: ['Condition', 'Where it hurts', 'When', 'Worse with', 'Next step'],
        rows: [
          ['[Plantar fasciitis](/plantar-fasciitis/)', 'Inner underside of the heel', 'First steps in the morning, after sitting', 'Long standing, walking on and on', 'Stretches and calf strength'],
          ['[Fat pad syndrome](/heel-fat-pad-syndrome/)', 'Centre of the heel pad, deep bruise', 'During standing and walking', 'Hard floors, barefoot', 'Cushioning, see a clinician'],
          ['Nerve (Baxter’s, tarsal tunnel)', 'Inner heel or sole, can spread', 'Not tied to first steps, can be at rest', 'Burning, tingling, numbness', 'See a clinician'],
          ['[Stress fracture](/plantar-fasciitis-vs-stress-fracture/)', 'Whole heel bone, sides tender', 'Builds with activity', 'Running, jumping, more mileage', 'Offload, see a clinician soon'],
          ['[Insertional Achilles](/plantar-fasciitis-vs-achilles-tendonitis/)', 'Back of the heel, at the bone', 'During and after activity', 'Uphill, stairs, deep calf stretch', 'Load the calf, flat heel drops'],
          ['[Haglund’s](/haglunds-deformity/)', 'Bump at the upper back of the heel', 'In shoes', 'Stiff heel counters', 'Softer heel counter, heel lift'],
          ['[Sever’s (children)](/severs-disease/)', 'Back or sides of the heel', 'During and after sport', 'Running, jumping, growth spurts', 'Less load, see a clinician'],
          ['[PTTD](/posterior-tibial-tendon-dysfunction-exercises/)', 'Inner ankle and arch', 'Walking, standing', 'Uneven ground, uphill', 'See a clinician, then exercise'],
          ['Inflammatory arthritis', 'Both heels, with other joints', 'Morning stiffness over 30 minutes', 'Other stiff joints, stiff back', 'See a doctor'],
          ['Referred from the back', 'Heel or sole, with leg pain', 'Varies, with back pain', 'Back or leg pain, numbness', 'See a doctor'],
        ],
      },
      after: [
        'The rows for nerves, the back and arthritis have no link because we have no page on them: they need a medical assessment, not an exercise guide. Each row is explained in the sections below.',
      ],
      cites: [CITE.yiFatPad, CITE.thomasCpg, CITE.latt],
    },
    {
      h2: 'What does plantar fasciitis usually feel like?',
      paragraphs: [
        '**Knowing the usual pattern is the easiest way to spot when your heel does not fit it.** Typical plantar fasciitis is a dull ache or throbbing around the inner front of the heel, where the fascia attaches. It is worst with the first step in the morning and when you get up after sitting, often gets better once you are moving, and then worsens again as standing or walking goes on (Latt and colleagues, 2020). More on that pattern in [heel pain in the morning](/heel-pain-in-the-morning/).',
        'The same review says that when someone does not describe these classic features, a clinician should look for other causes. It also notes that plantar fasciitis usually affects one foot, though about 30% of people have it in both (Latt and colleagues, 2020). So two sore heels do not rule plantar fasciitis out, but they are one reason to look more widely.',
        'Plantar fasciitis is also the most common cause, so a heel that fits most of the pattern is still most likely to be plantar fasciitis. In the 250 people above, it explained about half of cases on its own and was present in another 9.2% together with fat pad atrophy (Yi and colleagues, 2011).',
      ],
      cites: [CITE.latt, CITE.yiFatPad],
    },
    {
      h2: 'Could it be a nerve, or pain coming from your back?',
      keyFact: 'A 2025 review estimates that Baxter’s nerve entrapment may account for up to 20% of chronic heel pain, and is often mistaken for plantar fasciitis (Tedeschi, 2025).',
      paragraphs: [
        '**Pain described as burning or like an electric shock is often coming from a nerve** (Latt and colleagues, 2020). Three nerve sources are the usual suspects:',
        {
          list: [
            '**Baxter’s nerve**, a small branch that runs under the heel. When it is squeezed, it gives a chronic, burning pain across the heel pad (Latt and colleagues, 2020). One review estimates it may explain up to 20% of chronic heel pain and says it is often mistaken for plantar fasciitis (Tedeschi, 2025), while another calls it uncommon (Latt and colleagues, 2020).',
            '**Tarsal tunnel syndrome**, where the tibial nerve is squeezed behind the inner ankle bone. It usually brings burning or shooting pain along the sole, often with numbness (Latt and colleagues, 2020). More on arch nerve pain in [arch pain](/arch-pain/).',
            '**A pinched nerve in the lower back**, at the L5 or S1 level. It is relatively common and usually comes with back pain, pain down the leg, or numbness in the foot or leg (Latt and colleagues, 2020).',
          ],
        },
        'A review of nerve related heel pain found that nerve entrapment may play a part both early on and in heel pain that does not get better, but that how it works and how best to test for it are still debated (Alshami and colleagues, 2008). Night or rest pain with tingling is covered in [heel pain at night](/heel-pain-at-night/).',
        'This is one group where self-help exercises are not the first step. A clinician examines the foot, for example by tapping along the tibial nerve, and may use ultrasound, nerve tests or MRI (Latt and colleagues, 2020; Tedeschi, 2025).',
      ],
      cites: [CITE.latt, CITE.tedeschiBaxter, CITE.alshami],
    },
    {
      h2: 'Could it be a stress fracture or the fat pad?',
      keyFact: 'In 30 military recruits whose MRI showed a heel stress injury, the injury was visible on plain X-ray in only 15% (Sormaala and colleagues, 2006).',
      paragraphs: [
        '**Both tend to ache with activity rather than with the first step of the morning.** A heel stress fracture typically causes aching across the back part of the heel bone that is tied to activity, not to getting out of bed. It is more likely if you have had low bone density or a stress fracture before (Latt and colleagues, 2020). It usually follows a jump in walking, running or a move to a harder surface (Tu, 2018).',
        'A normal X-ray does not rule it out: in 30 recruits with a heel stress injury on MRI, plain X-rays showed it in only 15% (Sormaala and colleagues, 2006). The side by side comparison is in [plantar fasciitis vs stress fracture](/plantar-fasciitis-vs-stress-fracture/).',
        'Fat pad pain is usually described as a deep, bruise-like ache in the middle of the heel pad, worse on hard floors and barefoot. Like a stress fracture, it tends to be activity related (Latt and colleagues, 2020), and in one clinic it more often affected both heels and was made worse by standing (Yi and colleagues, 2011). It was the second most common cause in the 250 people above, at 14.8% (Yi and colleagues, 2011). A 2022 review found only seven original studies on it, so much of the advice is based on experience, not trials (Chang and colleagues, 2022). More in [heel fat pad syndrome](/heel-fat-pad-syndrome/), and on how a spur fits in, [plantar fasciitis vs heel spur](/heel-spur-exercises/).',
      ],
      cites: [CITE.latt, CITE.tuHeelPain, CITE.sormaalaCalcaneus, CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'What if the pain is at the back of the heel?',
      paragraphs: [
        '**Plantar fasciitis hurts under the heel. Pain at the back of the heel usually comes from the Achilles tendon, the bone where it attaches, or, in children, the growth plate.** Three look-alikes live here:',
        {
          list: [
            '**Insertional Achilles tendinopathy**, pain right where the Achilles tendon meets the heel bone, rather than higher up the tendon (Jonsson and colleagues, 2008). See [plantar fasciitis vs Achilles tendonitis](/plantar-fasciitis-vs-achilles-tendonitis/) and [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
            '**Haglund’s deformity**, a bony bump on the upper back of the heel that shoes rub against, which can irritate the bursa and the tendon (Yuen and colleagues, 2022). See [Haglund’s deformity](/haglunds-deformity/).',
            '**Sever’s disease** in children who are still growing: the growth plate at the back of the heel gets sore with running and jumping. In children, pain when the heel is squeezed from both sides points to it (Tu, 2018). See [Sever’s disease](/severs-disease/).',
          ],
        },
        'Insertional Achilles pain changes how you exercise: heel drops are kept at floor level rather than dropping the heel below the step, because deep stretching can press the tendon against the bone (Jonsson and colleagues, 2008).',
      ],
      cites: [CITE.jonsson, CITE.yuenHaglund, CITE.tuHeelPain],
    },
    {
      h2: 'What if both heels hurt, or other joints are stiff too?',
      paragraphs: [
        '**Pain in both heels, heel pain together with several painful or stiff joints, or a stiff back suggest an inflammatory cause** such as psoriatic arthritis, reactive arthritis or spondyloarthritis (Latt and colleagues, 2020). The spondyloarthritis group is most common in young men, while plantar fasciitis is most common in middle age and more often in women (Latt and colleagues, 2020).',
        'The same review lists the clues that make a doctor order blood tests: symptoms elsewhere in the body, both feet affected, several joints involved, especially small ones, and morning stiffness that lasts more than 30 minutes (Latt and colleagues, 2020).',
        'Both heels can hurt with plantar fasciitis too. In a 5 to 15 year follow-up of 174 people with plantar fasciitis, pain in both heels was linked to symptoms that lasted longer (Hansen and colleagues, 2018). That is why two sore heels are a reason to get checked, not proof of arthritis.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'What if it hurts on the inside of the ankle and arch?',
      paragraphs: [
        '**Pain that sits behind or below the inner ankle bone and along the arch, rather than under the heel, can come from the posterior tibial tendon.** It is the main moving support of the inner arch, and people with a problem here have pain on the inner ankle and a foot that slowly flattens (Deu and colleagues, 2022). In a survey of 582 women over 40 in England, 3.3% had early stage PTTD, and none of them had been diagnosed (Kohls-Gatzoulis and colleagues, 2009).',
        'An arch that is flattening on one side, or trouble rising onto the toes of that foot, is a reason to see a clinician. Exercise has some support in the early stages, but only three small trials with 93 people in total have tested it (Ross and colleagues, 2018). More in [posterior tibial tendon dysfunction exercises](/posterior-tibial-tendon-dysfunction-exercises/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'What should you do next, and when do the exercises fit?',
      paragraphs: [
        '**If your heel fits the plantar fasciitis pattern and none of the warning signs below apply, stretching and calf strength work are the first-line options.** The 2023 heel pain guideline grades plantar fascia and calf stretching **A** and strength work **B** for plantar fasciitis (Koc and colleagues, 2023). These exercises are for plantar fasciitis only. They are not meant for a suspected fracture, a nerve problem or arthritis.',
        'If your pain fits another row of the table, or you are not sure, see a GP, physiotherapist or podiatrist. Bring a short note: where it hurts, when it is worst, what makes it worse, whether one or both feet are affected, and anything that came with it, such as numbness, swelling or back pain. That is what a clinician uses to sort the look-alikes.',
        'If you have been doing plantar fasciitis exercises for several weeks and nothing has changed, that is also worth a visit. Non-surgical care brings full relief for about 90% of people with plantar fasciitis, though it can take three to six months, so pain that does not budge is a reason to check the diagnosis (Latt and colleagues, 2020). See [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/) and the full [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch (plantar fasciitis only)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade, for plantar fasciitis. Not for the look-alikes on this page.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most sessions',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor.',
          stop: 'Burning or tingling, pain in the heel bone itself, or pain that reaches 6 out of 10',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Calf stretch (plantar fasciitis only)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade, for plantar fasciitis. Not for the look-alikes on this page.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the back heel flat on the floor and the hips forward. A tight calf pulls on the heel all day, so this stretch matters even though you feel it higher up.',
          stop: 'Pain at the back of the heel where the Achilles attaches, or pain that reaches 6 out of 10',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch (plantar fasciitis only)',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade, for plantar fasciitis. Not for the look-alikes on this page.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          how: 'Take the same position, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Pain at the back of the heel where the Achilles attaches, or pain that reaches 6 out of 10',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Seated heel raises (plantar fasciitis only)',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B for plantar fasciitis. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: '3 days a week, never two in a row',
          feel: 'Work low in the calf',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, the deeper calf muscle, with almost no load on the heel. The heel raise trial on this site tested a harder standing version (Rathleff and colleagues, 2015).',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'What is commonly mistaken for plantar fasciitis?',
      cites: [CITE.latt, CITE.yiFatPad],
      a: 'The most common look-alikes are heel fat pad syndrome, nerve entrapment such as Baxter’s nerve or tarsal tunnel syndrome, a heel stress fracture, and insertional Achilles pain. It can also be inflammatory arthritis or a nerve pinched in the lower back. In 250 people with pain under the heel, fat pad atrophy explained 14.8% of cases.',
    },
    {
      q: 'How do I know if my heel pain is not plantar fasciitis?',
      cites: [CITE.latt],
      a: 'You cannot know for sure without an examination, but some features do not fit. Plantar fasciitis is usually worst with the first morning steps and eases as you move. Burning or tingling, pain that builds with activity, pain at the back of the heel, or both heels with stiff joints suggest something else. A clinician can sort it out.',
    },
    {
      q: 'Can heel pain come from your back?',
      cites: [CITE.latt],
      a: 'Yes. A nerve pinched in the lower back at the L5 or S1 level can cause pain, numbness or tingling in the heel and sole. It is relatively common and usually comes with back pain or pain running down the leg. Weakness in the foot or numbness that spreads needs a doctor promptly.',
    },
    {
      q: 'What does nerve pain in the heel feel like?',
      cites: [CITE.latt, CITE.tedeschiBaxter],
      a: 'Nerve pain in the heel is often burning, shooting or like an electric shock, sometimes with tingling or numbness in the sole. Baxter’s nerve entrapment gives a burning pain across the heel pad, and one review estimates it may explain up to 20% of chronic heel pain. It needs a clinician’s assessment.',
    },
    {
      q: 'Is heel pain in both feet plantar fasciitis?',
      cites: [CITE.latt],
      a: 'It can be: about 30% of people with plantar fasciitis have it in both feet. But pain in both heels, especially with other painful or stiff joints, a stiff back or morning stiffness that lasts more than 30 minutes, can point to inflammatory arthritis. That combination is a reason to see a doctor.',
    },
    {
      q: 'Can an X-ray show what is causing my heel pain?',
      cites: [CITE.sormaalaCalcaneus, CITE.guideline],
      a: 'Sometimes, but a normal X-ray rules out less than people think. In 30 recruits with a heel stress injury on MRI, plain X-rays showed it in only 15%. For typical plantar fasciitis, the 2023 guideline says imaging is usually not needed. A clinician decides whether ultrasound, MRI or nerve tests are worth doing.',
    },
    {
      q: 'Why is my plantar fasciitis not getting better?',
      cites: [CITE.latt],
      a: 'There are several possible reasons, and one is that it may not be plantar fasciitis. About 90% of people with plantar fasciitis get better with non-surgical care, so pain that has not changed after several weeks of steady stretching and strength work is a good reason to have the diagnosis checked by a clinician.',
    },
    {
      q: 'What causes heel pain in children if not plantar fasciitis?',
      cites: [CITE.tuHeelPain],
      a: 'In children who are still growing, the most common cause is Sever’s disease, an irritated growth plate at the back of the heel bone. It hurts during and after running and jumping sports, and a heel that is sore when squeezed from both sides points to it. A clinician should check heel pain in a child that does not settle.',
    },
    {
      q: 'Can I do plantar fasciitis exercises if I am not sure what it is?',
      cites: [CITE.guideline],
      a: 'The 2023 guideline grades plantar fascia and calf stretches A for plantar fasciitis, and they are gentle. But if you have burning or numbness, swelling, pain that builds with activity, or pain after an injury, see a clinician first. Stop any exercise that makes the heel sharply worse.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'you feel burning, tingling, electric shocks or numbness in the heel or sole',
      'heel pain comes with back pain, pain down the leg, or weakness in the foot',
      'the pain builds the longer you walk or run, or squeezing the sides of the heel bone hurts',
      'the heel is swollen, red, warm or bruised, or you have a fever',
      'both heels hurt and other joints are painful or stiff, or morning stiffness lasts more than 30 minutes',
      'the pain started after a fall, a twist or a sudden pop, or you cannot put weight on the foot',
      'the heel hurts at rest or wakes you at night',
      'a child has heel pain that does not settle with less sport',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is an exercise app for heel and foot pain. Its plan is built for plantar fasciitis type heel pain, not for the look-alikes on this page, so if your pain fits another pattern, see a clinician before you start.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['hubPlantarFasciitis', 'heelFatPad', 'heelPainAtNight'],
  crumb: 'Heel pain that isn’t plantar fasciitis',
  campaign: 'guide-heel-pain-not-plantar-fasciitis',
};
