import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * These follow the three entries added by draft-standing.ts (indices 17-19).
 *
 * 20 | winters
 *   Winters M, Eskes M, Weir A, Moen MH, Backx FJG, Bakker EWP.
 *   Treatment of medial tibial stress syndrome: a systematic review.
 *   Sports Medicine. 2013;43(12):1315-1333.
 *   doi: 10.1007/s40279-013-0087-0 | PMID: 23979968
 *
 * 21 | moen
 *   Moen MH, Holtslag L, Bakker E, Barten C, Weir A, Tol JL, Backx F.
 *   The treatment of medial tibial stress syndrome in athletes; a
 *   randomized clinical trial. Sports Medicine, Arthroscopy,
 *   Rehabilitation, Therapy & Technology. 2012;4:12.
 *   doi: 10.1186/1758-2555-4-12 | PMID: 22464032
 *
 * 22 | newman
 *   Newman P, Witchalls J, Waddington G, Adams R. Risk factors
 *   associated with medial tibial stress syndrome in runners: a
 *   systematic review and meta-analysis. Open Access Journal of Sports
 *   Medicine. 2013;4:229-241.
 *   doi: 10.2147/OAJSM.S39331 | PMID: 24379729
 *
 * 23 | hamstraWright
 *   Hamstra-Wright KL, Huxel Bliven KC, Bay C. Risk factors for medial
 *   tibial stress syndrome in physically active individuals such as
 *   runners and military personnel: a systematic review and
 *   meta-analysis. British Journal of Sports Medicine.
 *   2015;49(6):362-369.
 *   doi: 10.1136/bjsports-2014-093462 | PMID: 25185588
 *
 * 24 | madeley
 *   Madeley LT, Munteanu SE, Bonanno DR. Endurance of the ankle joint
 *   plantar flexor muscles in athletes with medial tibial stress
 *   syndrome: a case-control study. Journal of Science and Medicine in
 *   Sport. 2007;10(6):356-362.
 *   doi: 10.1016/j.jsams.2006.12.115 | PMID: 17336155
 *
 * 25 | patel
 *   Patel DS, Roth M, Kapil N. Stress fractures: diagnosis, treatment,
 *   and prevention. American Family Physician. 2011;83(1):39-46.
 *   PMID: 21888126 (no DOI listed on PubMed)
 */

/** Indices for citations not yet in CITATIONS[]. Add them first. */

const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const SHIN_SPLINTS_EN: Guide = {
  lang: 'en',
  page: 'shinSplints',
  published: '2026-10-04',
  updated: '2026-10-04',
  title: "Shin Splints Exercises: What Helps and What Doesn't",
  description:
    'Shin splints exercises for runners: what the research shows, starting doses, how to tell shin splints from a stress fracture, and when to see a clinician.',
  h1: "Shin splints exercises: what helps and what doesn't",
  lede:
    'Shin splints is pain along the inner edge of the shinbone, spread over several inches rather than one sore spot. The clinical name is medial tibial stress syndrome, or MTSS. Most pages list exercises as if they are proven to speed recovery. A 2013 systematic review of every treatment trial found that stretching and strengthening exercises have not been shown to shorten it.',
  intro: [
    'That does not mean exercise is useless. The exercises below target calf endurance, shin strength and hip control, the areas where researchers have found differences between people with and without shin splints. A case-control study found runners with shin splints could do fewer calf raises to failure than matched controls without it.',
    'Whether building that endurance back up shortens recovery is still an open question. The surest lever, in every trial so far, is cutting back the running load that caused it.',
    'The heel raise itself, including how many reps and when to add load, is covered in more depth in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/). If you are on your feet all day instead of running, [feet hurt from standing all day](/feet-hurt-standing-all-day/) covers the same calf and arch exercises for that cause.',
  ],
  toc: true,
  takeaways: [
    'A 2013 systematic review of 11 treatment trials found stretching and strengthening exercises have not been proven to speed recovery from medial tibial stress syndrome (Winters and colleagues, 2013).',
    'In the only randomized trial of exercise for shin splints, adding calf stretching and strengthening to a graded running program did not shorten recovery compared with the running program alone, in a study of 74 athletes (Moen and colleagues, 2012).',
    'Runners with shin splints could do fewer calf raises to failure than matched controls, suggesting a calf endurance gap (Madeley and colleagues, 2007).',
    'Focal, pinpoint tenderness over one small spot, rather than diffuse pain along several inches of bone, can be a stress fracture and needs a clinician, not more exercise.',
  ],
  sections: [
    {
      h2: 'What are shin splints, and what exercises actually help?',
      keyFact: 'A 2013 systematic review covering 11 treatment trials for shin splints concluded no stretching or strengthening approach had clear evidence of speeding recovery (Winters and colleagues, 2013).',
      paragraphs: [
        'Shin splints, or medial tibial stress syndrome, is an overuse injury of the shinbone and the tissue around it. The pain is typically diffuse, spread along the inner edge of the tibia over several inches, and it usually starts during or after running. A 2020 review of novice and recreational runners found the clearest links were in how runners move, including more hip rotation and a foot that rolls inward more than usual.',
        'The honest answer about exercises for shin splints is that **no specific exercise program has been shown to speed up recovery in a controlled trial.** A 2013 systematic review looked at 11 treatment studies and concluded that stretching and strengthening "have not been proven to be effective in treating MTSS."',
        'In the only randomized trial with an exercise arm, 74 athletes were split into three groups:',
        {
          list: [
            'A graded running program alone.',
            'The same program plus calf stretching and strengthening.',
            'The same program plus compression stockings.',
          ],
        },
        'All three groups improved at a similar rate.',
        'So the exercises below are not a dedicated shin splints protocol. They are general lower-leg and hip exercises already in the catalogue that target the muscles and joints researchers have studied in shin splints populations. The strongest move is still to reduce the running load and rebuild it slowly.',
      ],
      cites: [CITE.mtssReview, CITE.winters, CITE.moen],
    },
    {
      h2: 'Which exercises help shin splints, and how much should you do?',
      paragraphs: [
        'These are exercises from the app\'s catalogue that overlap with the muscles and risk factors identified in shin splints research. The calf stretches and heel raises are the same ones used in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/), targeting the same tissues. They are starting doses, not a prescription. Every evidence label below is **early**, because no exercise on this list has been proven to shorten shin splint recovery in a trial. [How these guides are written](/about/).',
        'If you mark the shin as sore in the check-in, Walkito gives ankle rocks and foot roll. Toe raises appear in the general plan as an accessory from level 2 onward, rotating with ankle rocks. There is no dedicated shin splints program. If any exercise takes your pain to **6/10 or more**, stop for the day.',
      ],
      table: {
        head: ['Exercise', 'Dose', 'How often', 'What you should feel', 'Stop if'],
        rows: [
          ['Calf stretch', '2 holds of 30 seconds, each leg', 'Most sessions', 'A stretch in the calf of the straight back leg', 'Pain reaches 6/10'],
          ['Soleus stretch', '2 holds of 30 seconds, each leg', 'Most sessions', 'A stretch low in the calf, near the heel', 'Pain reaches 6/10'],
          ['Toe raises', '3 sets of 10, both feet', 'Strength days', 'The shin muscle working as the toes lift', 'Pain reaches 6/10'],
          ['Heel raises, both feet', '3 sets of 10, both feet', 'Strength days', 'The calves working, both feet sharing the load', 'Pain reaches 6/10'],
          ['Hip abduction', '3 sets of 15, each leg', 'Strength days', 'Work on the outside of the hip', 'Pain reaches 6/10'],
          ['Single-leg hold', '3 holds of 30 seconds, each leg', 'Balance days', 'The foot and ankle making small corrections', 'Pain reaches 6/10'],
          ['Ankle rocks', '2 sets of 15, each leg', 'Most sessions', 'The ankle bending further, heel stays down', 'Pain reaches 6/10'],
          ['Foot roll', '2 minutes', 'Recovery days', 'Firm pressure under the foot, never a wince', 'Pain reaches 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Calf stretch',
          evidence: {
            level: 'early',
            why: 'Commonly recommended for shin splints. A 2013 systematic review found stretching has not been proven to speed recovery from shin splints.',
          },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the heel down and the hips forward. The calf and the shin share the job of controlling your foot while you run, so a tight calf shifts more load onto the shin.',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: {
            level: 'early',
            why: 'Same reasoning as the calf stretch. Not tested as a standalone intervention for shin splints.',
          },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          how: 'Take the same wall position, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until you feel it near the heel',
          alt: 'A figure in a wall stretch with the back knee bent, the lower calf highlighted',
        },
        {
          name: 'Toe raises',
          evidence: {
            level: 'early',
            why: 'Targets the tibialis anterior, the muscle on the front of the shin. No shin-splints-specific trial, and shin splints usually hurt along the inner edge of the shinbone, so the link is indirect.',
          },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The shin muscle working as the toes lift',
          how: 'Stand with your back against a wall. Lift the toes and the front of both feet off the floor, keeping the heels down. Lower slowly. This is the muscle along the front of the shin.',
          image: 'Exercise: toe raises',
          media: 'tibialis_raise',
          caption: 'Toe raises: back against the wall, lift the toes, heels stay down',
          alt: 'A figure standing against a wall lifting the toes off the floor, the shin muscles highlighted',
        },
        {
          name: 'Heel raises, both feet',
          evidence: {
            level: 'early',
            why: 'Runners with shin splints had lower calf endurance in a case-control study. Not tested as a treatment for shin splints.',
          },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Calf endurance was lower in runners with shin splints than in matched controls, which is why calf strength is part of this list.',
          image: 'Exercise: heel raises, both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises: rise straight up, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calves highlighted',
        },
        {
          name: 'Hip abduction',
          evidence: {
            level: 'early',
            why: 'Two meta-analyses linked hip rotation range to shin splints. No trial has tested hip strengthening as a treatment for shin splints.',
          },
          dose: '3 sets of 15, each leg',
          often: 'Strength days',
          feel: 'Work on the outside of the hip',
          how: 'Stand with a resistance band around both ankles and lift one leg out to the side against the band. Push through the heel, not the toes. Two meta-analyses found that hip rotation range of motion differs between people with and without shin splints, which is the basis for including hip work.',
          image: 'Exercise: hip abduction',
          media: 'hip_abduction',
          caption: 'Hip abduction: lift one leg out to the side against the band',
          alt: 'A standing figure with a band around the ankles lifting one leg to the side, the outer hip highlighted',
        },
        {
          name: 'Single-leg hold',
          evidence: {
            level: 'early',
            why: 'General balance work. No shin-splints-specific study behind it.',
          },
          dose: '3 holds of 30 seconds, each leg',
          often: 'Balance days',
          feel: 'Small corrections in the foot and ankle',
          how: 'Stand on one foot and look at one fixed spot. Let the foot wobble. The wobble is the foot doing the balancing. Stand near a wall if you need a safety net.',
          image: 'Exercise: single-leg hold',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: stand on one foot and let it make small corrections',
          alt: 'A figure balancing on one leg, the lower leg muscles highlighted',
        },
        {
          name: 'Ankle rocks',
          evidence: {
            level: 'early',
            why: 'What the app gives when you mark the shin as sore. No shin-splints-specific trial.',
          },
          dose: '2 sets of 15, each leg',
          often: 'Most sessions',
          feel: 'The ankle bending further, the heel stays down',
          how: 'Stand in a split stance near a wall. Push the front knee forward over the toes, keeping the heel flat on the floor. An ankle that bends well lets the shin absorb impact more evenly during a run.',
          image: 'Exercise: ankle rocks',
          media: 'ankle_rocks',
          caption: 'Ankle rocks: knee over the toes, heel stays on the floor',
          alt: 'A figure in a split stance pushing the knee forward over the toes, the ankle highlighted',
        },
        {
          name: 'Foot roll',
          evidence: {
            level: 'early',
            why: 'What the app gives when you mark the shin as sore. A comfort measure, not a tested intervention for shin splints.',
          },
          dose: '2 minutes',
          often: 'Recovery days',
          feel: 'Firm pressure under the foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball, with firm pressure. If you are wincing, ease off. The foot roll does not target the shin directly, but it loosens the tissues on the underside that share load with the lower leg.',
          image: 'Exercise: foot roll',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
      ],
      cites: [CITE.winters, CITE.madeley, CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'How is shin splint pain different from a stress fracture?',
      paragraphs: [
        'Telling shin splints from a stress fracture matters because the two need different responses. Medial tibial stress syndrome and tibial stress fractures sit on the same continuum of bone stress injury. Shin splints can progress toward a stress fracture under continued load, which is the main reason to change the training load early instead of continuing to run through diffuse shin pain.',
        'Shin splints typically cause diffuse tenderness spread along several inches of the inner shin. A stress fracture causes focal tenderness at one small spot, often with swelling. Pain that eases as you warm up points more toward shin splints. Pain that keeps building during a run, or shows up at rest or at night, points more toward a stress fracture.',
        'Pain at the back of the heel instead of the shin is a different problem, usually the Achilles tendon; see [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) if that is where yours sits.',
        'A commonly cited home check is a single-leg hop that reproduces sharp, localized pain, suggesting fracture. But a 2011 review in American Family Physician found no recent evidence validating its accuracy, and a positive hop test was also seen in nearly half of confirmed shin splints patients. **So a positive hop is a reason to see a clinician, not a reliable way to rule a fracture in or out on your own.**',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Can you keep running with shin splints?',
      keyFact: 'A 2008 trial of 532 new runners found no difference in injury rates between a 10% weekly mileage increase and a faster progression, leaving that rule unproven (Buist and colleagues, 2008).',
      paragraphs: [
        'There is no trial that tells you exactly how much to cut back. What has some support is the shape of a graded running program: in the only randomized trial, all three study groups followed a progressive return to running, and all three improved at about the same rate. The running program, not the added exercises or compression, was the constant.',
        'Reasons to stop and have it checked instead of running through it:',
        {
          list: [
            'Sharp pain during a run.',
            'Pain that gets worse as you go.',
            'Pain at rest.',
          ],
        },
        'If the pain eases with warm-up and stays manageable, a shorter or easier run at a lower frequency is a reasonable middle ground while the shin adapts. Rest days between runs give the bone time to respond to the load.',
        'The 10% rule, adding no more than 10% to your weekly mileage, is a commonly cited heuristic but not a proven one. A 2008 trial of 532 new runners found no injury-rate difference between a program built on the 10% rule and a faster one.',
        'What a 2014 study of 874 runners did show is that big, sudden jumps in distance come with more injuries. **Gradual is better than sudden, but a specific percentage does not have trial backing.** [Heel pain from running](/heel-pain-runners/) covers the same load-management thinking in more detail.',
      ],
      cites: [CITE.moen, CITE.buist, CITE.nielsen],
    },
    {
      h2: 'What changes to training actually prevent shin splints from coming back?',
      paragraphs: [
        'No single exercise has been shown to prevent shin splints in a trial. The risk factors identified in two independent meta-analyses point toward general training-load management and gradual progression instead of any one stretch or strengthening move. The consistent risk factors across both reviews were:',
        {
          list: [
            'Higher BMI.',
            'Greater navicular drop (how much the arch flattens under load).',
            'Female sex.',
            'Fewer years of running experience.',
            'A previous history of shin splints.',
          ],
        },
        'A general pattern for returning to running:',
        {
          list: [
            'Pain-free walking first.',
            'Then easy jogging on soft surfaces with rest days between.',
            'Then gradually longer runs while mornings stay pain-free.',
          ],
        },
        'Any day that reproduces sharp or focal pain, or pain that builds during the run instead of easing with warm-up, **is a stop signal, not a push-through signal.**',
      ],
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'How long do shin splints take to improve?',
      keyFact: 'In a trial of 74 athletes with shin splints, the mean time to complete the running program was about 105 days across the three groups, though the range was wide (Moen and colleagues, 2012).',
      paragraphs: [
        'Sources vary and none point to a single trial-backed number. General overuse-injury guidance is that mild cases ease within a few weeks of reduced activity, while cases tied to recurring training errors can take longer if the same load returns before the tissue has adapted.',
        'In the randomized trial of 74 athletes with shin splints, the mean time to complete the running program was about 102 to 118 days across the three groups (overall mean 105 days), though the range was wide.',
        'Because shin splints and tibial stress fractures sit on the same continuum, pain that does not improve after a few weeks of lighter running and rest days is a reason to have it looked at instead of waiting longer. **The clearest sign of recovery is pain-free walking and then pain-free easy jogging, in that order, before mileage goes back up.**',
      ],
      cites: [CITE.moen],
    },
  ],
  faq: [
    {
      q: 'What is the fastest way to get rid of shin splints?',
      a: 'No trial has shown that one exercise or stretch speeds up recovery from shin splints. The closest evidence comes from a randomized trial of 74 athletes where adding calf stretching and strengthening to a graded running program did not shorten recovery over the running program alone. Cutting back the running load that caused it is still the main lever, not a specific exercise.',
      cites: [CITE.moen],
    },
    {
      q: 'Do stretches actually help shin splints?',
      a: 'A 2013 systematic review of 11 treatment trials found stretching and strengthening exercises "have not been proven to be effective" for shin splints at the evidence level available. That does not mean stretching is harmful, just that no good-quality trial has shown it changes the course of the condition. Calf stretches are still commonly recommended and are unlikely to make things worse.',
      cites: [CITE.winters],
    },
    {
      q: 'Should you keep running with shin splints?',
      a: 'Nothing in the trial evidence tells you an exact mileage to cut to. What the only randomized trial showed is that a graded, progressive return to running worked about equally well across all three study arms. Sharp pain during a run, pain that gets worse as you go, or pain at rest are reasons to stop and have it checked instead of pushing through it.',
      cites: [CITE.moen],
    },
    {
      q: 'Can shin splints turn into a stress fracture?',
      a: 'Shin splints and tibial stress fractures are generally described as different points on the same continuum of bone stress injury. Unmanaged shin splints can progress toward a stress fracture under continued load. That is the main reason to change the training load early instead of continuing to run through it.',
    },
    {
      q: 'What causes shin splints in runners?',
      a: 'Two independent meta-analyses found a consistent set of risk factors: higher BMI, greater navicular drop (how much the arch flattens under load), female sex, fewer years of running experience, and a previous history of shin splints. A separate case-control study found runners with shin splints had lower calf endurance, suggesting a plantar-flexor deficit may be part of the picture.',
      cites: [CITE.newman, CITE.hamstraWright, CITE.madeley],
    },
    {
      q: 'Does a specific exercise prevent shin splints from coming back?',
      a: 'No single exercise has trial-level evidence for preventing shin splints. The risk factors from two meta-analyses, including BMI, arch drop and running experience, point toward gradual training-load management and general lower-leg conditioning instead of one particular move. That is a less satisfying answer than a named exercise, but it is what the research supports.',
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      q: 'What is commonly mistaken for shin splints?',
      cites: [CITE.mtssReview],
      a: 'A tibial stress fracture, chronic exertional compartment syndrome, and posterior tibial tendinopathy can all cause shin pain and get labeled shin splints. A stress fracture tends to hurt at one specific point on the bone, while compartment syndrome causes tightness and numbness that builds during a run and eases soon after stopping. Both need a clinician rather than more loading.',
    },
    {
      q: 'Should you walk with shin splints?',
      cites: [CITE.mtssReview],
      a: 'Usually yes. Walking is lower-impact than running, and many people with medial tibial stress syndrome can keep walking without a flare, as long as pain stays mild and settles quickly afterward. If walking itself reproduces sharp pain at a single point on the bone, stop and get it checked, since that pattern fits a stress fracture more than shin splints.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'pain is focal and pinpoint, localized to one small spot on the bone rather than spread along several inches',
      'pain builds during a run instead of easing with warm-up',
      'you have pain at rest or at night',
      'the shin is swollen over a specific spot',
      'a single-leg hop reproduces sharp, localized pain',
      'exercise-induced tightness, numbness or tingling in the lower leg or foot that builds during activity and goes away within minutes of stopping, which can be a sign of compartment syndrome',
      'pain that has not eased after several weeks of reduced running and rest days',
      'you cannot put weight on the leg, or you are limping',
      'the lower leg is red, warm, or you have a fever or feel unwell',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: `Walkito has no dedicated shin splints program, and this page explains why: no exercise program has been proven to speed recovery from shin splints in a trial. What Walkito does have is calf, ankle and balance work that targets the same muscles researchers have studied, plus a plan that adapts to how each morning feels.`,
    more: [
      `You pick ${DAYS} days a week and sessions of ${MINUTES} minutes. Every ${PROGRAM.testEveryDays} days (then every ${PROGRAM.testEveryDaysAfterGoal} once your first goal is met), a short test checks calf endurance, arch hold and balance, so you can see whether the lower-leg work is doing anything.`,
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If your shin pain is focal, getting worse, or showing up at rest, see a clinician before loading it further.',
    ],
    cta: `Start with ${PROGRAM.sessionMinutes[0]} minutes a day.`,
  },
  crumb: 'Shin splints exercises',
  campaign: 'guide-shin-splints',
};
