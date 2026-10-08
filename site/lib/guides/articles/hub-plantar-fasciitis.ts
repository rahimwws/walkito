import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub: Plantar fasciitis ────────────────────────────────────────────
 *
 * No new citations. Every figure comes from existing CITATIONS[] entries.
 *
 * Integration:
 *   1. Add to EN_ONLY in lib/i18n.ts:
 *        hubPlantarFasciitis: '/plantar-fasciitis/',
 *   2. Add to CITE map and CITATIONS[] if any new keys are listed (none here).
 *   3. Register the guide in articles-en.ts / index.ts.
 */

export const HUB_PLANTAR_FASCIITIS_EN: Guide = {
  lang: 'en',
  page: 'hubPlantarFasciitis' as any,
  mainSource: CITE.guideline,
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Plantar Fasciitis: Symptoms, Causes and What Helps',
  description:
    'What plantar fasciitis is, its symptoms and causes, what the 2023 clinical guideline recommends, how long recovery takes, and exercises that help.',
  h1: 'Plantar fasciitis: symptoms, causes, and what the evidence says helps',
  lede:
    'Plantar fasciitis is pain under the heel caused by overload on the plantar fascia, the thick band of tissue that runs from the heel bone to the toes. It is the most common cause of heel pain under the foot. The 2023 clinical guideline for heel pain gives stretching its top grade and strength training its second-highest, and about 90 percent of people improve with non-surgical care.',
  takeaways: [
    'The 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, A, and strength training a B (Koc and colleagues, 2023).',
    'About 90 percent of people with plantar fasciitis improve with non-surgical care such as stretching, strength work and supportive shoes, often within several months (Latt and colleagues, 2020).',
    'Reduced ankle dorsiflexion, how far the foot bends up toward the shin, was the strongest independent risk factor in a case-control study of 50 cases and 100 controls, with an odds ratio of 23.3 (Riddle and colleagues, 2003).',
    'Morning heel pain on the first steps, easing after a few minutes of walking, is the most recognizable symptom pattern (Koc and colleagues, 2023).',
    'In a long-term follow-up of 174 patients, about half were symptom-free by five years. Among those still symptomatic, most reported only minor pain (Hansen and colleagues, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What is plantar fasciitis?',
      paragraphs: [
        'Plantar fasciitis is an overload condition of the plantar fascia. The plantar fascia is a tough band of connective tissue that stretches along the sole of your foot from the heel bone (the calcaneus) to the base of the toes. It supports the arch and absorbs shock every time you step.',
        'When the fascia is loaded more than it can recover from, the tissue becomes irritated near its attachment at the heel. The name ends in "-itis," which suggests inflammation, but current thinking points toward a degenerative process in the tissue rather than ongoing inflammation. Some clinicians use "plantar fasciopathy" instead. The name does not change the symptoms or the recommended approach.',
        'The 2023 clinical guideline from the Journal of Orthopaedic & Sports Physical Therapy calls it the most commonly recognized cause of plantar heel pain.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'What does plantar fasciitis feel like?',
      paragraphs: [
        'The hallmark symptom is pain under the heel on your first steps in the morning. The guideline describes it as pain "most noticeable with weight bearing first thing in the morning or after a period of rest." It usually eases once you walk for a few minutes, then returns after you sit for a while and stand up again.',
        'The pain is usually at the inside front of the heel, where the fascia attaches to the bone. It may spread along the arch. It tends to be worst after rest, not during activity, which is the opposite of what most people expect.',
        'The pain shows up most clearly the next morning. If the next morning is worse, yesterday asked too much of the foot. That is why tracking morning pain is the most useful way to judge progress. [Heel pain in the morning](/heel-pain-in-the-morning/) covers the morning pattern in detail.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What causes plantar fasciitis, and who gets it?',
      keyFact: 'In a case-control study of 50 people with plantar fasciitis and 100 without, reduced ankle dorsiflexion raised the odds of plantar fasciitis 23.3 times, the strongest risk factor measured (Riddle and colleagues, 2003).',
      paragraphs: [
        'Plantar fasciitis happens when the fascia is loaded beyond what it can handle and recover from. The load can be too much at once (a sudden jump in running mileage) or steady over time (standing on a hard floor all day).',
        'A matched case-control study of 50 people with plantar fasciitis and 100 controls found that reduced ankle dorsiflexion was the strongest independent risk factor, with an odds ratio of 23.3. In a separate series of 254 people with plantar fasciitis, 52 to 60 percent had a contracture isolated to the gastrocnemius, the bigger outer calf muscle. Prolonged standing at work raised the odds 3.6 times. Higher body mass index also raised them.',
        'The guideline names other risk factors: age between 40 and 60, running or jumping activities, and occupations that involve prolonged standing. Flat feet or high arches can shift how load travels through the fascia, but neither guarantees the condition.',
        'Plantar fasciitis usually comes from a combination: a tight calf, a load the foot was not ready for, and not enough recovery time.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: 'How is plantar fasciitis diagnosed?',
      paragraphs: [
        'Plantar fasciitis is usually diagnosed by a clinician based on your history and a physical exam. The key findings are tenderness at the inside front of the heel, pain on the first steps in the morning, and pain that eases with activity and returns after rest.',
        'Imaging is not needed for a typical case. The guideline recommends considering imaging if the pattern does not fit, if symptoms do not improve after several weeks of conservative care, or if another diagnosis needs to be ruled out (a stress fracture or nerve entrapment, for example). Ultrasound and MRI can show fascia thickening, but a thickened fascia on a scan without the matching symptom pattern is not plantar fasciitis.',
        'Walkito does not diagnose. If you are unsure whether your heel pain is plantar fasciitis, a clinician is the right starting point.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What helps plantar fasciitis?',
      keyFact: 'In a trial of 48 people, loaded heel raises with a towel eased pain faster than stretching alone at three months, though by twelve months both groups were even (Rathleff and colleagues, 2015).',
      paragraphs: [
        'The 2023 clinical guideline grades each approach by how strong the evidence behind it is. The strongest recommendations are stretching, taping, manual therapy from a clinician, and night splints for persistent morning pain. Strength training comes next. The table below lists the main options with their guideline grades.',
        'No single option works for everyone. Most people start with stretching and supportive shoes, add strength work once the initial pain settles, and see a clinician about the remaining options if progress stalls. In a trial of 48 people, loaded heel raises with a towel under the toes eased pain faster than stretching alone at three months, though by twelve months both groups were even. The guideline recommends against using orthotics alone as a standalone short-term approach and against adding therapeutic ultrasound to stretching.',
      ],
      table: {
        caption: '2023 guideline grades for plantar heel pain',
        head: ['Approach', 'Grade', 'Notes'],
        rows: [
          ['Plantar fascia and calf stretching', '**A**', 'Top grade. The core of conservative care.'],
          ['Manual therapy (joint and soft-tissue work)', '**A**', 'Top grade. Performed by a clinician for joint and flexibility restrictions.'],
          ['Foot taping (rigid or elastic)', '**A**', 'Top grade for short-term pain and function, used alongside other care.'],
          ['Night splints for 1 to 3 months', '**A**', 'Top grade for persistent morning pain. See [heel pain in the morning](/heel-pain-in-the-morning/).'],
          ['Strength training (loaded heel raises)', '**B**', 'Brought improvement forward in a 48-person trial. See [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).'],
          ['Low-level laser therapy', '**B**', 'Clinic-based procedure.'],
          ['Dry needling', '**B**', 'Clinic-based procedure.'],
          ['Foot orthotics combined with other care', '**C**', 'Weak evidence. May help as part of a broader program.'],
          ['Foot orthotics alone, short-term', '**B against**', 'The guideline recommends **against** this as a standalone approach.'],
          ['Therapeutic ultrasound added to stretching', '**A against**', 'Evidence does not support adding it.'],
        ],
      },
      sourceNote:
        'Grades from Koc and colleagues, 2023, Journal of Orthopaedic & Sports Physical Therapy clinical practice guideline for heel pain.',
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'How long does plantar fasciitis last?',
      keyFact: 'In a cohort of 174 people, about half were symptom-free by five years, and 46 percent still had some pain at ten years, most only minor (Hansen and colleagues, 2018).',
      paragraphs: [
        'A 2020 review reports that about 90 percent of people improve with non-surgical care, often within several months. A longer follow-up of 174 patients gives a more detailed picture: about half were symptom-free by five years, and 46 percent still had some pain at a mean of ten years, though most of those reported only minor symptoms.',
        'Recovery depends on how long you have had it, what you do about it, and some factors you cannot control. The Hansen 2018 cohort found that being female and having bilateral heel pain were significant predictors of slower recovery. BMI, age, fascia thickness, and the presence of a heel spur were not.',
        'The useful question is not "how many weeks until it is over" but "is my morning pain lower this month than last month?" That trend is the real milestone. [How long does plantar fasciitis last?](/how-long-does-plantar-fasciitis-last/) covers the timeline evidence in full.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Which exercises and stretches help plantar fasciitis?',
      paragraphs: [
        'The exercises the guideline supports fall into two groups: stretching (grade A) and strength training (grade B). Stretching targets the plantar fascia and the calf. Strength training builds the calf\'s capacity to handle daily load without overloading the fascia.',
        '[Plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/) has the full list with starting doses, what each should feel like, and when to stop. [Calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) goes deeper on the one exercise behind the main strength-training trial. Individual exercise pages cover each movement:',
      ],
      bullets: [
        '[Plantar fascia stretch](/exercises/plantar-fascia-stretch/) pulls the toes back to load the fascia gently before you stand.',
        '[Calf stretch](/exercises/calf-stretch/) and [soleus stretch](/exercises/soleus-stretch/) address the tight calf that pulls on the heel.',
        '[Towel heel raise](/exercises/towel-heel-raise/) is the loaded calf raise from the Rathleff trial.',
        '[Foot roll](/exercises/foot-roll/) settles the tissue between sessions.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Why are mornings the worst?',
      paragraphs: [
        'The plantar fascia stiffens and shortens while you sleep. Your foot usually points downward at rest. When you stand and flatten the foot under your full weight, the shortened tissue stretches suddenly. That is the sharp pull on the first steps.',
        'The most effective thing you can do happens before your foot hits the floor. Sit on the edge of the bed, cross one ankle over the other knee, and pull the toes back gently for about 10 seconds, 10 times each foot. The guideline gives this stretch its top grade.',
        'Night splints hold the foot at a right angle overnight so the fascia stays gently lengthened. The guideline also gives these an A for people whose first-step pain persists despite stretching. [Heel pain in the morning](/heel-pain-in-the-morning/) covers the morning routine, night splints, and other conditions that share the first-step pattern.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Plantar fasciitis at work and while running',
      paragraphs: [
        'Prolonged standing on hard surfaces is one of the risk factors in the Riddle 2003 study: it raised the odds of plantar fasciitis 3.6 times. A 2015 review of the occupational health literature found prolonged standing at work linked to musculoskeletal discomfort, fatigue and leg pain. If your feet hurt by the end of a shift, the same calf stretches and strength work apply.',
        'For runners, the 2023 guideline advises changing the load instead of stopping altogether. That means reducing mileage or intensity, not going to zero. The recommendation rests on expert opinion (grade E) because no trial has tested it, but it is consistent with how the Achilles and shin-splints guidelines handle overload injuries too.',
      ],
      bullets: [
        '[Feet hurt from standing all day](/feet-hurt-standing-all-day/) covers the exercises and footwear for people on their feet at work.',
        '[Nurses and foot pain](/nurses-foot-pain/) addresses the demands of long shifts on hard floors.',
        '[Standing desk foot pain](/standing-desk-foot-pain/) covers the sit-stand transition.',
        '[Heel pain from running](/heel-pain-runners/) covers how to adjust training when the heel hurts.',
      ],
      cites: [CITE.riddle, CITE.waters, CITE.guideline],
    },
    {
      h2: 'Could the pain be something other than plantar fasciitis?',
      paragraphs: [
        'Several conditions share the same location or the same morning pattern. Where the pain sits and how it behaves help tell them apart.',
        '**Achilles tendonitis.** Pain at the back of the heel or in the tendon above it, not under the foot. First-step stiffness is common, but the pain is higher. See [Achilles tendonitis exercises](/achilles-tendonitis-exercises/).',
        '**Heel fat pad syndrome.** A deep ache in the center of the heel, worse on hard surfaces and barefoot. A 2022 scoping review noted it can be hard to distinguish from plantar fasciitis without imaging. Fat pad pain sits right under the center, while fasciitis pain is at the inside front.',
        '**Heel spur.** A bony growth on the underside of the heel bone. Many people have one with no pain at all. In the Hansen 2018 cohort of 174 patients, a heel spur at baseline had no significant effect on how long symptoms lasted. The spur is often there, but it is not what drives the pain.',
        '**Calcaneal stress fracture.** Pain that builds with activity instead of easing once you warm up. It can hurt at rest or at night. Squeezing the sides of the heel often reproduces it. See a clinician before exercising the foot.',
        '**Inflammatory arthritis.** When both heels hurt, morning stiffness lasts more than 30 minutes, and other joints are stiff or swollen, the pattern moves toward something systemic. A clinician should check.',
        'If you are unsure, a clinician can tell these apart based on location, behavior, and imaging if needed.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.hansen],
    },
    {
      h2: 'Apps for plantar fasciitis',
      paragraphs: [
        'Several apps include exercises for plantar fasciitis. They differ in whether they adjust to pain levels, include progressive loading, and cover both stretching and strength work. [Best app for plantar fasciitis](/best-app-for-plantar-fasciitis/) compares seven of them side by side, including Walkito.',
      ],
    },
    {
      h2: 'All plantar fasciitis guides on this site',
      bullets: [
        '[Plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/) has the full exercise list with doses and evidence grades.',
        '[Calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) covers the heel-raise protocol from the Rathleff trial.',
        '[Heel pain in the morning](/heel-pain-in-the-morning/) covers morning pain, night splints, and other conditions with first-step pain.',
        '[How long does plantar fasciitis last?](/how-long-does-plantar-fasciitis-last/) covers recovery timelines, predictors, and what to do if progress stalls.',
        '[Heel pain from running](/heel-pain-runners/) covers load management and training changes.',
        '[Feet hurt from standing all day](/feet-hurt-standing-all-day/) covers exercises and footwear for prolonged standing.',
        '[Nurses and foot pain](/nurses-foot-pain/) addresses long shifts on hard floors.',
        '[Standing desk foot pain](/standing-desk-foot-pain/) covers the sit-stand transition.',
        '[Best app for plantar fasciitis](/best-app-for-plantar-fasciitis/) compares seven plantar fasciitis apps.',
        'Exercise pages: [plantar fascia stretch](/exercises/plantar-fascia-stretch/), [calf stretch](/exercises/calf-stretch/), [towel heel raise](/exercises/towel-heel-raise/), [foot roll](/exercises/foot-roll/).',
      ],
    },
  ],
  faq: [
    {
      q: 'What is the fastest way to get over plantar fasciitis?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'There is no shortcut, but the evidence points to starting early with stretching (guideline grade A) and adding calf strength work (grade B). In a trial of 48 people, heavy heel raises brought improvement forward at three months (Rathleff and colleagues, 2015). Consistent daily stretching, supportive shoes, and not overloading the foot are the basics.',
    },
    {
      q: 'Can plantar fasciitis go away on its own?',
      cites: [CITE.latt, CITE.hansen],
      a: 'It can, but it usually takes a long time. A 2020 review reports about 90 percent of people improve with conservative care (Latt and colleagues, 2020). In a cohort of 174 patients, about half were symptom-free by five years (Hansen and colleagues, 2018). Active care brings that timeline forward.',
    },
    {
      q: 'Is walking good or bad for plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'Walking in supportive shoes at a comfortable pace is generally fine. The guideline does not say to stop moving. The test is how your heel feels the next morning. If first-step pain the morning after a walk is clearly higher than usual, that walk was too much. Shorten the distance before stopping altogether.',
    },
    {
      q: 'Does a heel spur cause plantar fasciitis?',
      cites: [CITE.hansen],
      a: 'Not in the way most people assume. A heel spur is a bony growth on the underside of the heel bone, and many people have one with no pain. In a follow-up of 174 patients, a heel spur at baseline had no significant effect on symptom duration (Hansen and colleagues, 2018). The fascia overload is the problem, not the spur.',
    },
    {
      q: 'Can I still exercise with plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'Yes, but the type and dose matter. The guideline recommends continuing activity with load modifications, not complete rest. Exercises that load the calf and fascia (stretching, heel raises) are part of the approach, not a contradiction. High-impact activities may need to be scaled back. The test is always the next morning: if it is worse, yesterday was too much.',
    },
    {
      q: 'What shoes help plantar fasciitis?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'The guideline recommends footwear education as part of the approach but does not name specific brands. A shoe with some cushion, arch support, and a small heel-to-toe drop helps compensate for a tight calf. Reduced ankle flexibility is the strongest risk factor for plantar fasciitis (Riddle and colleagues, 2003). Avoid going barefoot on hard surfaces, especially in the morning.',
    },
    {
      q: 'When should I see a doctor about heel pain?',
      a: 'See a clinician if pain followed an injury, if you cannot put weight on the foot, if both heels hurt and other joints are stiff, if there is numbness or tingling, if the heel is red or warm, if it wakes you at night, or if pain is not improving after several months of stretching and calf work. These patterns may point to a different condition.',
    },
    {
      q: 'Why do I have plantar fasciitis in only one foot?',
      a: 'Plantar fasciitis often shows up in one foot first because load rarely splits evenly between legs. A dominant leg, an old limp, a job favoring one side, or a sudden jump in activity on one leg, like starting to run, can overload one fascia more than the other. Both feet can still be affected over time.',
    },
    {
      q: 'Why did I suddenly get plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'Sudden plantar fasciitis usually follows a sudden change in load, not a sudden injury. A fast jump in running mileage, new shoes, a new job that keeps you standing, or weight gain can overload the fascia faster than it can adapt. Prolonged standing at work is one of the recognized risk factors in the 2023 heel pain guideline.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall',
      'you cannot put weight on the foot, or you are limping',
      'it comes with numbness, tingling, burning, swelling or warmth',
      'the heel is red, or you have a fever or feel unwell',
      'it wakes you at night or is present at rest',
      'squeezing the sides of the heel reproduces the pain',
      'both heels hurt and other joints are swollen or stiff',
      'it has not improved after several weeks of exercise and a lighter load',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You do not need to figure out which exercises to do, in what order, or when to progress. Walkito builds a plan one week at a time around one goal. For plantar fasciitis, the first goal is a better morning: pain at or under 1 out of 10 for 14 days in a row.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days a short test checks calf endurance, arch hold and balance. Once the morning goal is met, it moves to maintaining and the next goal takes its place.',
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Plantar fasciitis',
  campaign: 'hub-plantar-fasciitis',
};
