import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations ──────────────────────────────────────────────────────
 *
 * powellSplint | Powell M, Post WR, Keener J, Wearden S. Effective treatment of chronic plantar fasciitis with dorsiflexion night splints: a crossover prospective randomized outcome study. Foot & Ankle International. 1998;19(1):10–18. | 10.1177/107110079801900103 | 9462907 | randomized crossover trial
 * probeSplint | Probe RA, Baca M, Adams R, Preece C. Night splint treatment for plantar fasciitis. A prospective randomized study. Clinical Orthopaedics and Related Research. 1999;(368):190–195. | (none) | 10613168 | randomized controlled trial
 * battSplint | Batt ME, Tanji JL, Skattum N. Plantar fasciitis: a prospective randomized clinical trial of the tension night splint. Clinical Journal of Sport Medicine. 1996;6(3):158–162. | (none) | 8792046 | randomized controlled trial
 * roosOrthoses | Roos E, Engström M, Söderberg B. Foot orthoses for the treatment of plantar fasciitis. Foot & Ankle International. 2006;27(8):606–611. | 10.1177/107110070602700807 | 16919213 | randomized controlled trial
 * martinMechanical | Martin JE, Hosch JC, Goforth WP, Murff RT, Lynch DM, Odom RD. Mechanical treatment of plantar fasciitis. A prospective study. Journal of the American Podiatric Medical Association. 2001;91(2):55–62. | 10.7547/87507315-91-2-55 | 11266478 | randomized controlled trial
 * leeSplint | Lee WC, Wong WY, Kung E, Leung AK. Effectiveness of adjustable dorsiflexion night splint in combination with accommodative foot orthosis on plantar fasciitis. Journal of Rehabilitation Research and Development. 2012;49(10):1557–1564. | 10.1682/jrrd.2011.09.0181 | 23516059 | controlled trial (two groups, small)
 * attardSplint | Attard J, Singh D. A comparison of two night ankle-foot orthoses used in the treatment of inferior heel pain: a preliminary investigation. Foot and Ankle Surgery. 2012;18(2):108–110. | 10.1016/j.fas.2011.03.011 | 22443996 | preliminary comparative questionnaire study
 * schuitemaMechanical | Schuitema D, Greve C, Postema K, Dekker R, Hijmans JM. Effectiveness of mechanical treatment for plantar fasciitis: a systematic review. Journal of Sport Rehabilitation. 2020;29(5):657–674. | 10.1123/jsr.2019-0036 | 31629333 | systematic review
 * bendoSplintReview | Bendo AJP, Barros MIG, Bertolini GRF, de Carvalho AR, Donin CB, Azevedo MRB. Night splints in plantar fasciitis: a systematic review. Muscles, Ligaments and Tendons Journal. 2023;13(2):283–289. | 10.32098/mltj.02.2023.12 | (not indexed in PubMed; checked full text) | systematic review of 3 RCTs
 *
 * Existing keys reused: guideline, digiovanni2003, siriphorn.
 */

export const NIGHT_SPLINTS_EN: Guide = {
  lang: 'en',
  page: 'nightSplints',
  mainSource: CITE.guideline,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Night Splints for Plantar Fasciitis: Do They Work?',
  description:
    'Night splints for plantar fasciitis: what the 2023 guideline and the trials show, boot vs sock, how long to wear one, and why so many people stop.',
  h1: 'Night splints for plantar fasciitis: what they do, what the trials show, and how to wear one',
  lede:
    'A night splint for plantar fasciitis holds your ankle at about a right angle while you sleep, so the plantar fascia and calf do not shorten overnight. The 2023 heel pain guideline grades it **A** for one to three months when first steps keep hurting. The trials are small and mixed, and many find splints hard to sleep in.',
  intro: [
    'This page is about the splint itself: what the studies found, which type to pick, and how to live with one. For the full morning routine, see [heel pain in the morning](/heel-pain-in-the-morning/).',
  ],
  takeaways: [
    'The 2023 heel pain guideline gives night splints its top grade, **A**, for a one to three month program in people who consistently have pain on their first steps in the morning (Koc and colleagues, 2023).',
    'That grade was carried over from the 2014 guideline: the 2023 review found no new studies on night splints, so the evidence is older and small (Koc and colleagues, 2023).',
    'In a randomized trial of 116 people, adding a night splint for three months to anti-inflammatory pills, stretching and shoe advice made no clear difference: 68% improved overall, with or without a splint (Probe and colleagues, 1999).',
    'Adherence is the weak point: in a 43-person trial, only 1 of 28 people given a night splint was still using it at one year, against 19 of 23 still using their insoles (Roos and colleagues, 2006).',
    'Morning stretching of the plantar fascia and calf has the same **A** grade and costs nothing, so it is the usual first step before a splint (Koc and colleagues, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What does a night splint do for plantar fasciitis?',
      figure: {
        id: 'plantar-fascia',
        caption: 'The plantar fascia runs from the heel to the base of the toes. A night splint keeps it from resting in a shortened position.',
        alt: 'Side view of a foot with the plantar fascia highlighted from the heel bone to the toes',
      },
      paragraphs: [
        'A night splint for plantar fasciitis is a brace you wear in bed that **stops your foot from pointing down while you sleep.** When you lie still, the foot usually drifts into plantarflexion (toes pointing away from you). In that position the plantar fascia, the thick band of tissue under your foot, and the calf rest in a shortened state for hours.',
        'The splint holds the ankle in neutral or slight dorsiflexion (toes pulled a little toward the shin). The idea is that the tissue stays at a gentle length overnight, so your first steps are not a sudden stretch on a stiff, shortened fascia. That sudden stretch is the usual explanation for the sharp first-step pain that makes plantar fasciitis so recognizable.',
        'The 2023 heel pain guideline defines night splints as "prefabricated plastic orthoses that are used to prevent ankle plantar flexion while sleeping." Softer versions, like straps and socks, aim at the same position with less hardware.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Do night splints work for plantar fasciitis?',
      keyFact: 'The 2023 heel pain guideline grades a one to three month night splint program **A** for people with consistent first-step morning pain, but its evidence update found no new studies since 2014 (Koc and colleagues, 2023).',
      paragraphs: [
        'Night splints work for some people with plantar fasciitis, mainly for first-step morning pain, but the research behind them is thinner than their grade suggests. The 2023 heel pain guideline from the American Physical Therapy Association says clinicians "should prescribe a 1- to 3-month program of night splints" for people who consistently have pain with the first step in the morning. That is grade **A**, the guideline\'s top grade.',
        'Read the small print, though. The guideline\'s evidence update says no new studies on night splints were found since 2014, so the recommendation was carried over unchanged. The grade rests on a handful of trials from the 1990s and 2000s.',
        'Two reviews give a more cautious picture:',
        {
          list: [
            '**A 2023 systematic review** found only three randomized trials that met its criteria, and judged all three at high risk of bias, meaning their design could tilt the results. It concluded that splints seem to improve pain and function but that more studies are needed.',
            '**A 2020 review of mechanical options** found that splints combined with insoles did better than either one alone.',
          ],
        },
        'So a fair summary is this: night splints are a reasonable option if your mornings stay bad despite stretching, but they are not a sure thing, and the trials that exist are small.',
      ],
      cites: [CITE.guideline, CITE.bendoSplintReview, CITE.schuitemaMechanical],
    },
    {
      h2: 'What do the night splint trials actually show?',
      keyFact: 'In the largest night splint trial, 116 people, adding a splint for three months made no clear difference: 68% improved overall either way (Probe and colleagues, 1999).',
      paragraphs: [
        'The night splint trials for plantar fasciitis point in different directions, and most are small. The table below lists the main ones in plain words. None of them had a fake (sham) splint, and in several, people also did other things at the same time, so it is hard to isolate what the splint added.',
      ],
      table: {
        caption: 'Main night splint studies for plantar fasciitis',
        head: ['Study', 'Who and what', 'What happened'],
        rows: [
          ['Batt and colleagues, 1996 (randomized)', '40 people entered, 32 finished. Pills, heel cushion and calf stretching, with or without a custom splint', 'All 16 feet in the splint group reached the study\'s goal (back to normal activities with little or no discomfort), in about three months on average. 6 of 17 in the no-splint group did.'],
          ['Powell and colleagues, 1998 (randomized crossover)', '37 people with long-lasting plantar fasciitis. One month of splint wear, nothing else', '88% of those who finished improved, and the gains held for the rest of the six-month study.'],
          ['Probe and colleagues, 1999 (randomized)', '116 people. Pills, Achilles stretching and shoe advice, with or without a splint for three months', '68% improved overall. No clear difference with or without the splint.'],
          ['Martin and colleagues, 2001 (randomized)', '255 people. Custom insoles vs shop-bought arch supports vs night splints, three months', 'No clear difference in first-step pain. More people dropped out early in some groups, partly from not tolerating the device.'],
          ['Roos and colleagues, 2006 (randomized)', '43 people. Insoles, insoles plus splint, or splint alone', 'All groups improved. At one year, pain was down 62% in the insole groups and 48% with the splint alone.'],
          ['Lee and colleagues, 2012 (small, two groups)', '28 people. Insoles alone vs insoles plus a soft adjustable splint', 'Pain dropped in the insoles-plus-splint group. The insoles-only group showed no clear change.'],
        ],
      },
      after: [
        'Look at who was in each study. Powell and Batt saw clear benefits, and Powell\'s group had stubborn, long-lasting heel pain. Probe, the biggest trial, set out to study more recent (acute) symptoms and found that the splint added nothing beyond the basics. One reading, not tested directly, is that splints help most when the usual first steps have not been enough.',
      ],
      sourceNote: 'Batt 1996: the splint group took about three months on average to reach the end point, the 6 control patients who reached it about two months; 8 of 11 control patients who crossed over to a splint then reached it. Probe 1999: blinded review up to three months, SF-36 at an average of 19 months. Roos 2006: 34 of 43 had data at three months and 38 at one year; the splint was an anterior (front) splint. Lee 2012: Foot Function Index at two months, p < 0.001 in the combined group.',
      cites: [CITE.battSplint, CITE.powellSplint, CITE.probeSplint, CITE.martinMechanical, CITE.roosOrthoses, CITE.leeSplint],
    },
    {
      h2: 'Boot, dorsal splint or Strassburg sock: which night splint is best?',
      keyFact: 'In a preliminary comparison, two-thirds of people said morning pain and stiffness were less with a night splint, but the rigid back-of-leg type was less comfortable and disrupted sleep (Attard and Singh, 2012).',
      paragraphs: [
        'There are three common kinds of night splint for plantar fasciitis, and no good trial shows one is clearly better for pain. They differ mostly in comfort, which matters a lot, because a splint only does anything while it is on.',
      ],
      bullets: [
        '**Boot (posterior) splint.** A rigid shell behind the calf and under the foot, held with straps. It gives the firmest hold and is often adjustable. It is also the bulkiest and the hardest to sleep in, especially on your side.',
        '**Dorsal (anterior) splint.** A smaller shell over the front of the shin and top of the foot, which leaves the sole and heel free. It usually holds the foot at about a right angle rather than pulling it further up.',
        '**Sock style, like the Strassburg sock.** A long sock with a strap from the toes to the shin that keeps the foot from pointing down. It is light and easy to sleep in. We could not find a randomized trial testing it for plantar fasciitis.',
      ],
      after: [
        'The only head-to-head comparison we found is a small preliminary study from 2012. Two-thirds of the people in it said morning pain and stiffness were less after wearing a splint. The boot type was more uncomfortable and disrupted sleep, and the front-of-shin type reduced heel pain more on average. The authors called night splints "poorly tolerated" overall.',
        'If you are choosing for yourself, **the one you will actually keep on through the night is probably the right one.** A clinician or physical therapist can help with fit.',
      ],
      cites: [CITE.attardSplint, CITE.guideline],
    },
    {
      h2: 'How long should you wear a night splint for plantar fasciitis?',
      keyFact: 'The 2023 heel pain guideline recommends a night splint program of one to three months (Koc and colleagues, 2023).',
      paragraphs: [
        '**The 2023 guideline recommends wearing a night splint for one to three months.** In the trials, people wore them at night for one month (Powell) or three months (Probe, Martin).',
        'How many hours a night is less clear. No trial we found compared hours of wear. Brace makers and clinics often suggest starting with a few hours and building up to the whole night, which is sensible but untested. If you wake up and the splint is unbearable, taking it off and putting it back on the next night is better than giving up on night one.',
      ],
      bullets: [
        'Fit it snug enough to hold the foot, never so tight that your toes tingle, go numb or change color.',
        'Start at a gentle angle. Holding the foot at about a right angle is the usual target. More stretch is not clearly better and is harder to sleep in.',
        'Keep a light sock under a rigid splint and check your skin each morning for red marks or rubbing.',
        'Take it off before you walk. Splints are not made for standing, and the shells can be slippery.',
        'Track your first steps. Rate the pain of your first steps each morning from 0 to 10. After a month or so, you will know whether the splint is changing anything.',
      ],
      cites: [CITE.guideline, CITE.powellSplint, CITE.probeSplint, CITE.martinMechanical],
    },
    {
      h2: 'Why do people stop wearing night splints, and what helps you sleep in one?',
      keyFact: 'At one year, 1 of 28 people given a night splint was still using it, against 19 of 23 still using insoles (Roos and colleagues, 2006).',
      paragraphs: [
        'Most people stop wearing night splints because they are uncomfortable to sleep in. In Roos and colleagues\' 2006 trial, only 1 of 28 people given a splint was still using it at one year, while 19 of 23 were still using their insoles. That trial also found fewer side effects and better adherence with insoles. In Martin\'s 2001 trial of 255 people, some dropped out early because they could not tolerate their device or kept having severe pain.',
        '**Low adherence is normal, not a personal failing.** The splint is meant for one to three months, not forever. A few practical things make it easier:',
      ],
      bullets: [
        'If you sleep on your side or stomach, a sock style or small dorsal splint usually fits that better than a boot.',
        'If one foot hurts, wear it on that foot only.',
        'If the splint keeps you awake, wear it for the first part of the night and take it off when you wake up, then try a little longer the next night.',
        'If you feel hot, a thin moisture-wicking sock under the straps helps.',
        'If it still wrecks your sleep after a week or two, stop. Poor sleep is a real cost, and morning stretches are a free alternative with the same guideline grade.',
      ],
      cites: [CITE.roosOrthoses, CITE.martinMechanical],
    },
    {
      h2: 'Night splint, insoles or stretching: which should you try first?',
      keyFact: 'In a 43-person trial, pain was down 62% at one year in the insole groups and 48% with a night splint alone (Roos and colleagues, 2006).',
      paragraphs: [
        '**Morning stretching usually comes first**, because it has the same grade **A** as night splints, costs nothing and does not disturb sleep. The 2023 guideline grades plantar fascia and calf stretching **A**, and strength work for the foot and ankle muscles **B**. A 2020 meta-analysis of eight trials found that stretching eased pain, with moderate-quality evidence that the plantar fascia stretch eased it more than a calf stretch.',
        'Night splints and insoles seem to work better together than apart:',
        {
          list: [
            'In Roos\' trial, both groups with insoles had more pain relief at one year than the splint-only group.',
            'Lee\'s small 2012 study found insoles plus a splint did better than insoles alone.',
            'The 2020 review of mechanical options reached the same conclusion.',
          ],
        },
        'The guideline also advises against insoles as the only thing you do for short-term pain relief. For more on that question, see [insoles vs exercises](/insoles-vs-exercises/).',
        'A common order is stretching and calf work first. If your first steps are still bad after a month or so of that, add a splint for one to three months. Many people use insoles alongside. That order is a reasonable reading of the guideline, not something a trial has tested.',
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.roosOrthoses, CITE.leeSplint, CITE.schuitemaMechanical],
    },
    {
      h2: 'Which morning stretches go with a night splint?',
      paragraphs: [
        'The two stretches that fit best with a night splint are the plantar fascia stretch, done on the edge of the bed before your first step, and a straight-knee calf stretch once you are up. The splint keeps the tissue lengthened overnight, and the stretches keep doing that when you take it off. The full routine, with strength work and how to progress, is in [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
        'Walkito starts these stretches at 2 holds of 30 seconds and can build them into a short session on the days you choose. It does not use or provide splints.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'Guideline grade A for stretching. In a 2003 trial of 101 people with long-lasting heel pain, this stretch did better than a standing calf stretch for first-step pain at two months.' },
          dose: 'Walkito starts at 2 holds of 30 seconds, each foot',
          how: 'Sit on the edge of the bed after you take the splint off. Cross the sore foot over the other knee, hold the toes and pull them back toward the shin until you feel a stretch along the arch. Hold, release, repeat. Then stand.',
          often: 'Every morning before your first step, and after long sitting',
          feel: 'A stretch along the arch, not sharp pain',
          stop: 'Pain reaches 6/10, or the next morning is clearly worse',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: toes pulled back, before your first step',
          alt: 'A seated figure pulling the toes back to stretch the arch, the plantar fascia highlighted',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'Guideline grade A for calf stretching. A 2020 meta-analysis found stretching eased pain, though the evidence for calf stretching against a sham stretch was of very low quality.' },
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
          how: 'Hands on a wall, sore leg back and straight, heel on the floor. Lean your hips forward until you feel the stretch in the upper calf. Keep the back knee straight.',
          often: 'Once you are up, and in most sessions',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, lean forward',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.siriphorn],
    },
    {
      h2: 'Who might a night splint suit, and who should skip it?',
      paragraphs: [
        '**A night splint fits best if your plantar fasciitis follows the classic pattern**: the first steps out of bed are the worst of the day, and that has kept happening despite regular stretching. That is exactly the group the guideline names. In Powell\'s trial, response to the splint did not depend on foot type, body weight or whether a heel spur showed on X-ray.',
        'A splint makes less sense if your heel hurts mostly while you are lying in bed, or wakes you up. That is a different pattern, and [heel pain at night](/heel-pain-at-night/) explains the causes worth ruling out. A splint is also a poor fit if you have poor feeling or circulation in your feet, since straps and shells can rub skin you cannot feel.',
        'Plantar fasciitis often settles over months whatever you use, which is one reason splint trials are hard to read. For realistic timelines, see [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/).',
      ],
      cites: [CITE.guideline, CITE.powellSplint],
    },
  ],
  faq: [
    {
      q: 'Do night splints really work for plantar fasciitis?',
      cites: [CITE.guideline, CITE.probeSplint, CITE.powellSplint],
      a: 'Night splints help some people with plantar fasciitis, mostly with first-step morning pain. The 2023 heel pain guideline grades them A for one to three months when first steps keep hurting. But the trials are small and mixed: a 37-person trial found clear gains, while a 116-person trial found adding a splint to stretching and pills made no clear difference.',
    },
    {
      q: 'How many hours a night should I wear a night splint?',
      cites: [CITE.guideline],
      a: 'No trial has compared hours of wear, so there is no tested number. The trials used splints at night for one to three months, which matches the 2023 guideline. Many people start with a few hours and build up to the whole night. Take it off if your toes tingle, go numb or change color.',
    },
    {
      q: 'Is a Strassburg sock as good as a night splint boot?',
      cites: [CITE.attardSplint],
      a: 'Nobody knows for sure, because we could not find a randomized trial testing the Strassburg sock for plantar fasciitis. A small 2012 study comparing two rigid splint types found the boot style less comfortable and more disruptive to sleep. Since a splint only helps while it is on, a sock you keep wearing may beat a boot you take off.',
    },
    {
      q: 'Why is my heel still sore in the morning even with a night splint?',
      cites: [CITE.probeSplint, CITE.guideline],
      a: 'A splint does not suit everyone, and in the largest trial, 116 people, it added no clear benefit to stretching and other basics. Check that it holds your foot at about a right angle and stays on most of the night. Keep doing the plantar fascia stretch before your first step. If nothing changes after one to three months, see a clinician.',
    },
    {
      q: 'Can I walk in a night splint?',
      a: 'No. Night splints are made for lying down, not for standing or walking. The shells and soles can be slippery and the locked ankle angle throws off your balance, which makes a fall more likely, especially at night. Take the splint off before you get up, do the plantar fascia stretch on the edge of the bed, then stand.',
    },
    {
      q: 'Are night splints better than insoles for plantar fasciitis?',
      cites: [CITE.roosOrthoses, CITE.schuitemaMechanical],
      a: 'Not on their own. In a 43-person trial, pain was down 62% at one year in the groups using insoles and 48% with a splint alone, and people kept using insoles far longer. A 2020 review found that splints and insoles together did better than either alone. Many clinicians use both, alongside daily stretching.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall, or you cannot put weight on the foot',
      'heel pain wakes you up or is there while you rest in bed',
      'you have numbness, tingling or burning in the foot or heel',
      'the heel is red, warm or swollen, or you have a fever',
      'you have diabetes, reduced feeling in your feet or poor circulation, before using any splint or strap',
      'a splint leaves red marks, blisters or sore spots that do not fade within an hour of taking it off',
      'both heels hurt and morning stiffness lasts more than 30 minutes, especially with other stiff or swollen joints',
      'nothing has changed after one to three months of stretching and a splint',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'A splint works on the night. The day is where the exercise happens. Walkito builds a plan one week at a time around one goal. For heel pain, the first goal is a better morning: first-step pain at or under 1 out of 10 for 14 days in a row. Stretches like these are in the plan from the first week, and calf strength work moves up at your pace.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once the morning goal is met), a short test checks calf endurance, arch hold and balance, so you can see what is changing. Walkito is an exercise program for adults. It does not diagnose, does not provide splints and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Night splints',
  campaign: 'guide-night-splints',
};
