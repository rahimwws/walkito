import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Original study (plan C.6): the 50 most-watched plantar fasciitis videos on
 * YouTube scored against the 2023 heel pain guideline. Data, rubric,
 * transcripts and both coders' files: walkito-seo/research/youtube-study/.
 * The table below is generated from FINAL-scores.json by a script; do not
 * edit numbers by hand.
 */
export const YT_STUDY_EN: Guide = {
  lang: 'en',
  page: 'ytStudy',
  mainSource: CITE.guideline,
  published: '2026-10-12',
  updated: '2026-10-12',
  title: 'Top 50 Plantar Fasciitis YouTube Videos vs the 2023 Guideline',
  description:
    'We checked the 50 most-watched plantar fasciitis videos on YouTube against the 2023 heel pain guideline. Only 9 teach all three top-rated exercise types.',
  h1: 'We checked the 50 most-watched plantar fasciitis videos on YouTube against the 2023 guideline',
  lede:
    'Only 9 of the 50 most-watched plantar fasciitis videos on YouTube teach all three kinds of home exercise the 2023 heel pain guideline supports: a plantar fascia stretch, a calf stretch and calf or foot strengthening. Together the 50 videos have 75 million views. Only 9 say when to see a doctor, none of them in the top 10, and 17 titles promise a fast or permanent result.',
  intro: [
    'Walkito makes an exercise app for heel pain, so in a way we compete with these videos for your attention. That is why every score is backed by a timestamp and a quote from the video, a second person scored a sample independently, and the full data is free to [download](/downloads/youtube-plantar-fasciitis-study-2026.csv).',
    'This is not a ranking of who is a good clinician. Many of these creators are physical therapists, and no short video can cover everything. It is a check of what the most-watched videos actually show, set against what the evidence supports.',
  ],
  takeaways: [
    'Only 9 of 50 videos (21% of views) include a plantar fascia stretch, a calf stretch and strengthening, the combination the 2023 guideline supports. That falls to 7 if two borderline calf stretches are not counted.',
    '15 of 50 videos (42% of views) include neither a plantar fascia stretch nor any strengthening exercise.',
    'Only 9 of 50 videos say when to see a doctor or name warning signs, and none of the 10 most-watched do.',
    '17 of 50 titles promise a fast or permanent result, and those videos hold 54% of all views. 34 of 50 sell a product, program or course.',
    'The good news: 46 of 50 give a clear dose, such as a 30-second hold or 3 sets of 10.',
  ],
  toc: true,
  sections: [
    {
      h2: 'What does the 2023 guideline recommend for plantar fasciitis?',
      keyFact: 'The 2023 heel pain guideline grades plantar fascia and calf stretching A, its top grade, and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'The 2023 clinical practice guideline for heel pain, published in the Journal of Orthopaedic & Sports Physical Therapy, grades each approach by the strength of the evidence behind it. Three of the recommended approaches are exercises you can do at home, and those are what we looked for in each video:',
        {
          list: [
            '**A plantar fascia stretch** (grade A): the toes, especially the big toe, pulled back toward the shin.',
            '**A calf stretch** (grade A): with the knee straight, the knee bent, or both.',
            '**Strengthening** (grade B): heel raises or foot exercises against resistance. In a 48-person trial, loaded heel raises with a towel under the toes eased pain faster than stretching alone at three months.',
          ],
        },
        'The guideline also grades clinic options such as manual therapy, and it recommends against therapeutic ultrasound added to stretching and against relying on insoles alone. A home video cannot deliver manual therapy, so we did not count it.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'What did the 50 most-watched videos include?',
      keyFact: 'Only 9 of the 50 most-watched plantar fasciitis videos include a plantar fascia stretch, a calf stretch and strengthening; 15 include neither the fascia stretch nor any strengthening (Walkito study, 2026).',
      paragraphs: [
        'Calf stretches were the most common exercise. Plantar fascia stretches appeared in half the videos, and strengthening in fewer than half. The share of views shows what people actually watched, because the top videos have millions of views each.',
      ],
      table: {
        caption: 'The 50 most-watched plantar fasciitis videos on YouTube, October 2026',
        head: ['What the video includes', 'Videos', 'Share of all views'],
        rows: [
          ['A plantar fascia stretch (grade A)', '25\u00A0of\u00A050', '51%'],
          ['Any calf stretch (grade A)', '34\u00A0of\u00A050', '70%'],
          ['Both calf stretches, straight and bent knee', '13\u00A0of\u00A050', '32%'],
          ['Strengthening (grade B)', '21\u00A0of\u00A050', '34%'],
          ['A loaded or single-leg heel raise', '11\u00A0of\u00A050', '18%'],
          ['**All three: fascia stretch, calf stretch and strengthening**', '9\u00A0of\u00A050', '21%'],
          ['Neither a fascia stretch nor strengthening', '15\u00A0of\u00A050', '42%'],
          ['A clear dose (hold time, sets, reps or how often)', '46\u00A0of\u00A050', '85%'],
          ['When to see a doctor, or warning signs', '9\u00A0of\u00A050', '7%'],
          ['Self-massage with a ball or bottle (not graded)', '29\u00A0of\u00A050', '61%'],
          ['Taping or a night splint (grade A)', '8\u00A0of\u00A050', '24%'],
          ['Advice on load, activity or footwear', '24\u00A0of\u00A050', '39%'],
          ['Sells a product, program or course', '34\u00A0of\u00A050', '64%'],
          ['Says in the video it will permanently get rid of the pain', '20\u00A0of\u00A050', '40%'],
          ['Title promises a fast or permanent result', '17\u00A0of\u00A050', '54%'],
        ],
      },
      after: [
        'Self-massage with a ball or a frozen bottle appeared in 29 videos, more often than strengthening, even though the guideline does not grade it. Four videos told viewers not to do what the guideline rates highest: two said the worst thing you can do is stretch the calf, and two argued against stretching the sole of the foot.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Which videos included all three?',
      paragraphs: [
        'These 9 videos include a plantar fascia stretch, a calf stretch and strengthening. Two of them count only because of a borderline calf stretch: in one it is part of an optional warm-up, and in the other it is a hamstring stretch the presenter says also reaches the calf.',
        {
          list: [
            'E3 Rehab: Plantar Fasciitis (Education | Myths | Stretching & Strengthening Exercises) (5.5M views)',
            '[P]rehab: Fix Plantar Fasciitis - Instant Pain Relief (3.8M views)',
            'SpineCare Decompression and Chiropractic Center: How to Relieve HEEL PAIN in Seconds (3.1M views)',
            'Tone and Tighten: Instant Foot Pain Relief! 5 Exercises To Fix Your Plantar Fasciitis (1.5M views)',
            'Tone and Tighten: How To Fix Plantar Fasciitis Pain [You’re Doing It Wrong] (611K views)',
            'AskDoctorJo: Plantar Fasciitis Treatment with Massage, Stretches, & Exercises - Ask Doctor Jo (597K views)',
            'Tone and Tighten: Fix Your Plantar Fasciitis Heel Pain [PERMANENTLY] (361K views)',
            'Dr. Kristie Ennis: 5 Best Plantar Fasciitis Exercises- Stretch AND Strength! (255K views)',
            'JeremySallerMD: Get Rid of Plantar Fasciitis! 5 Best Exercises (224K views)',
          ],
        },
        'Several other good videos cover part of the picture on purpose, for example a single strengthening exercise in two minutes. That is fine if you combine them, and it is why we report each part separately.',
      ],
    },
    {
      h2: 'What were the most common gaps?',
      paragraphs: [
        '**Strengthening was missing more often than not.** 29 of 50 videos had no strengthening exercise at all, including 6 of the 10 most-watched. The guideline grades strengthening B, and the trial behind it used a heel raise that gets harder over time, which only 11 videos showed.',
        '**Almost nobody said when to stop and see a doctor.** Heel pain after an injury, with numbness, swelling or night pain needs a clinician, not a stretch. Only 9 videos mentioned this, and none of the top 10.',
        '**Titles promised more than the evidence does.** 17 titles used words such as instant, in seconds, forever or permanently, and 20 videos said in the video that the pain would go away for good. Plantar fasciitis usually improves over months, not seconds.',
        '**Credentials were often unstated.** 21 of 50 videos never said, in the video or its description, what training the presenter has. Many of these creators are qualified, but a viewer cannot tell from the video.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How do you pick a good plantar fasciitis video?',
      paragraphs: [
        'A good routine has three parts and a dose. Check a video, or a mix of videos, against this list:',
        {
          list: [
            'A [plantar fascia stretch](/exercises/plantar-fascia-stretch/): toes pulled back toward the shin, held, before your first steps in the morning.',
            'A [calf stretch](/exercises/calf-stretch/) with the knee straight and a [soleus stretch](/exercises/soleus-stretch/) with the knee bent.',
            'A heel raise that gets harder over the weeks, for example the [towel heel raise](/exercises/towel-heel-raise/).',
            'A clear dose: how long to hold, how many sets and reps, how often.',
            'When to stop: pain that gets worse, numbness, swelling or night pain means a clinician, not more stretching.',
          ],
        },
        'Be careful with titles that promise an instant or permanent result. The full routine with doses is in our guide to [plantar fasciitis exercises](/plantar-fasciitis-exercises/). We ran the same check on what ChatGPT, Google and Perplexity say in our [AI answers study](/plantar-fasciitis-ai-answers-study/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How we did this study',
      paragraphs: [
        '**Sample.** On October 11, 2026 we searched YouTube (United States, English) for 11 common phrasings, such as plantar fasciitis exercises, plantar fasciitis stretches and heel pain exercises, and took the top 20 results for each. From the 81 unique videos we kept those at least one minute long and not live, and took the 50 with the most views. One video in Hindi was replaced by the next most-viewed video, because the sample is English.',
        '**Scoring.** Before scoring, we wrote a fixed checklist based on the 2023 guideline. Each video was scored from its full transcript, title and description, and every yes needed a timestamp and a quote. One video had no captions and was scored from its title and description. Titles were checked against a fixed word list (instant, in seconds, forever, permanent, fast, quickly, cure, for good, gone, solved).',
        '**Checking.** A second scorer scored 10 of the videos independently without seeing the first scores. The two agreed on 129 of 130 checks (99%), and on every check of stretches, strengthening, doses and seeing a doctor.',
      ],
      bullets: [
        'YouTube results change by place and time; another day or country gives a different top 50.',
        'Views measure reach, not how many people did the exercises.',
        'We only counted credentials a video states; an unstated credential does not mean an unqualified presenter.',
        'Machine captions can miss words; borderline calls are explained in the data file.',
        'Walkito makes an exercise app for heel pain. Walkito\u2019s own routine includes all three parts; you can check it against the same list on our [plantar fasciitis exercises](/plantar-fasciitis-exercises/) page.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'All 50 videos',
      paragraphs: [
        'Ordered by views on October 11, 2026. Fascia means a plantar fascia stretch; Calf shows which calf stretch (straight knee, bent knee or both); Doctor means it says when to see one. Square brackets in titles are shown as round ones. The [data file](/downloads/youtube-plantar-fasciitis-study-2026.csv) has every check with its timestamp and quote.',
      ],
      table: {
        head: ['#', 'Video, channel', 'Views', 'Fascia', 'Calf', 'Strength', 'Doctor'],
        rows: [
          ['1', '[How to Fix Plantar Fasciitis (FOREVER!)](https://www.youtube.com/watch?v=72p58Iy6u7M), ATHLEAN-X™', '10.3M', 'No', 'Both', 'No', 'No'],
          ['2', '[Plantar Fasciitis: Fix it Forever](https://www.youtube.com/watch?v=r8UR_OAPLWU), Dr DeFabio', '8.6M', 'No', 'No', 'No', 'No'],
          ['3', '[Plantar Fasciitis (Education | Myths | Stretching & Strengthening Exercises)](https://www.youtube.com/watch?v=5D86b45yJzU), E3 Rehab', '5.5M', 'Yes', 'Yes', 'Yes', 'No'],
          ['4', '[Fix Plantar Fasciitis - Instant Pain Relief](https://www.youtube.com/watch?v=4sjUusE-7sk), (P)rehab', '3.8M', 'Yes', 'Straight knee', 'Yes', 'No'],
          ['5', '[Plantar Fascia Exercises](https://www.youtube.com/watch?v=kStuJAu0a20), TheProactiveAthlete', '3.5M', 'Yes', 'No', 'Yes', 'No'],
          ['6', '[Fix Plantar Fasciitis Fast - Foot Pain Gone (50+)](https://www.youtube.com/watch?v=Eq0SssY4ZXs), Bob & Brad', '3.2M', 'Yes', 'Both', 'No', 'No'],
          ['7', '[How to Relieve HEEL PAIN in Seconds](https://www.youtube.com/watch?v=JVeNUGCXDV0), SpineCare Decompression and Chiropractic Center', '3.1M', 'Yes', 'Both', 'Yes', 'No'],
          ['8', '[Natural Ways to Treat Plantar Fasciitis | Dr. Josh Axe](https://www.youtube.com/watch?v=vF7HkfcPrU4), Dr. Josh Axe', '2.9M', 'No', 'Yes', 'No', 'No'],
          ['9', '[The 5 Things Anyone With Plantar Fasciitis Should Do Every Morning](https://www.youtube.com/watch?v=75JvDlvGF_s), Bob & Brad', '2.8M', 'Yes', 'Yes', 'No', 'No'],
          ['10', '[How to Fix Plantar Fasciitis in Seconds (This Works)](https://www.youtube.com/watch?v=XM7N-QPnK90), Bob & Brad', '2.4M', 'Yes', 'Both', 'No', 'No'],
          ['11', '[Plantar Fasciitis Stretches & Exercises - Ask Doctor Jo](https://www.youtube.com/watch?v=0PeVmTMdWhk), AskDoctorJo', '1.8M', 'Yes', 'Straight knee', 'No', 'No'],
          ['12', '[Correct Plantar Fasciitis Quickly! (Medically Proven) The Best Exercises & Stretches - Dr Mandell](https://www.youtube.com/watch?v=RMYHwnUIw5A), motivationaldoc', '1.6M', 'Yes', 'Straight knee', 'No', 'No'],
          ['13', '[2 BEST Plantar Fasciitis Exercises (Stretches or Strengthening?)](https://www.youtube.com/watch?v=PVjSq5thUhE), E3 Rehab', '1.6M', 'Yes', 'No', 'Yes', 'No'],
          ['14', '[3 secret exercises for plantar fasciitis foot pain - these totally cured my foot pain!](https://www.youtube.com/watch?v=F7W4s5TbUpQ), Upright Health', '1.6M', 'No', 'No', 'No', 'No'],
          ['15', '[Instant Foot Pain Relief! 5 Exercises To Fix Your Plantar Fasciitis](https://www.youtube.com/watch?v=vNHOj3ubzbs), Tone and Tighten', '1.5M', 'Yes', 'Straight knee', 'Yes', 'No'],
          ['16', '[2 Simple Stretches / Exercises to Fix Plantar Fasciitis – Dr.Berg](https://www.youtube.com/watch?v=gXdlPuKfyXs), Dr. Eric Berg DC', '1.4M', 'No', 'No', 'No', 'No'],
          ['17', '[How To Fix Plantar Fasciitis At Home: The Ultimate Guide](https://www.youtube.com/watch?v=2aXlnFVmIY8), Michigan Foot Doctors', '1.2M', 'Yes', 'Straight knee', 'No', 'Yes'],
          ['18', '[How To Fix Plantar Fasciitis (NO MORE HEEL PAIN!)](https://www.youtube.com/watch?v=NE0GqcRb9f8), ATHLEAN-X™', '1.1M', 'No', 'Yes', 'No', 'No'],
          ['19', '[5 Best Heel Pain & Heel Spur Treatments - Ask Doctor Jo](https://www.youtube.com/watch?v=amXhwGSmxKI), AskDoctorJo', '1.0M', 'No', 'Yes', 'No', 'No'],
          ['20', '[How I Fixed my Plantar Fasciitis for GOOD](https://www.youtube.com/watch?v=gkImPA_R7uI), Chase Mountains', '977K', 'Yes', 'No', 'No', 'No'],
          ['21', '[2 Stretches To Heal Plantar Fasciitis](https://www.youtube.com/watch?v=RRDC8erSNqw), Mark\u2019s Daily Apple', '937K', 'No', 'Both', 'No', 'No'],
          ['22', '[Plantar Fasciitis: Causes and Treatments](https://www.youtube.com/watch?v=i4mEsV4rx68), Talking With Docs', '935K', 'No', 'No', 'No', 'Yes'],
          ['23', '[Plantar Fasciitis Stretches](https://www.youtube.com/watch?v=XINGaYD0Zz0), Cleveland Clinic', '928K', 'No', 'Both', 'No', 'Yes'],
          ['24', '[Physical Therapy Plantar Fasciitis Stretches to Relieve Arch and Heel Pain](https://www.youtube.com/watch?v=FtbKGWfQVCk), Michelle Kenway', '913K', 'Yes', 'Both', 'No', 'No'],
          ['25', '[How to FIX Plantar Fasciitis Permanently! (for 50+)](https://www.youtube.com/watch?v=2k92DGPzVbU), Will Harlow – Over-Fifties Specialist Physio', '810K', 'No', 'Both', 'Yes', 'Yes'],
          ['26', '[How to Actually Fix Plantar Fasciitis (According to Research)](https://www.youtube.com/watch?v=N3iu_RZRVq8), Squat University', '808K', 'No', 'No', 'Yes', 'No'],
          ['27', '[5 Best Plantar Fasciitis Pain Relief Treatments - Ask Doctor Jo](https://www.youtube.com/watch?v=L9qQo3wdSwE), AskDoctorJo', '659K', 'No', 'Yes', 'Yes', 'No'],
          ['28', '[Morning Exercises for Heel Pain & Plantar Fasciitis](https://www.youtube.com/watch?v=t2KkdMlqRZU), HeelThatPain', '634K', 'No', 'Straight knee', 'No', 'No'],
          ['29', '[Your Plantar Fasciitis Treatment Is Wrong (Here\u2019s Why)](https://www.youtube.com/watch?v=TKtfgIC3qzU), Squat University', '621K', 'No', 'No', 'Yes', 'No'],
          ['30', '[How To Fix Plantar Fasciitis Pain (You’re Doing It Wrong)](https://www.youtube.com/watch?v=BQOJa9o-j8g), Tone and Tighten', '611K', 'Yes', 'Straight knee', 'Yes', 'No'],
          ['31', '[INSTANTLY Relieve Plantar Fascia Heel Pain! 5-Minute Morning Routine](https://www.youtube.com/watch?v=uod-dBB11hs), Tone and Tighten', '603K', 'Yes', 'Straight knee', 'No', 'No'],
          ['32', '[Plantar Fasciitis: Treatment by a Physical Therapist](https://www.youtube.com/watch?v=kHWLi_4Qgv0), ChoosePT', '602K', 'Yes', 'Both', 'No', 'No'],
          ['33', '[Plantar Fasciitis Treatment with Massage, Stretches, & Exercises - Ask Doctor Jo](https://www.youtube.com/watch?v=Bb7HyNJHh5k), AskDoctorJo', '597K', 'Yes', 'Straight knee', 'Yes', 'No'],
          ['34', '[INSTANT Plantar Fasciitis Fix](https://www.youtube.com/watch?v=C_-7966jgAQ), Dr. Eric Berg DC', '574K', 'No', 'No', 'No', 'No'],
          ['35', '[Plantar Fasciitis Exercises for Heel Pain Relief](https://www.youtube.com/watch?v=gDwTjo_FXSk), footminders', '511K', 'No', 'Straight knee', 'No', 'Yes'],
          ['36', '[ONE Simple Trick To Fix PLANTAR FASCIITIS Forever](https://www.youtube.com/watch?v=AsSw0Yg6HRw), Body Fix Exercises—for over 50s', '503K', 'No', 'Yes', 'Yes', 'No'],
          ['37', '[SOLVED MY Plantar Fasciitis in 30 Days (For Trail Runners)](https://www.youtube.com/watch?v=NLsovYgb2tk), Performance Place Sports Care & Chiropractic', '454K', 'No', 'Yes', 'Yes', 'Yes'],
          ['38', '[Best Exercise for Plantar Fasciitis | Plantar Fasciitis](https://www.youtube.com/watch?v=U3wbu0l8OZ0), Physiotutors', '400K', 'No', 'No', 'Yes', 'Yes'],
          ['39', '[Plantar Fascia Stretch | Plantar Fasciitis](https://www.youtube.com/watch?v=A6xAC0RGGaQ), Physiotutors', '394K', 'Yes', 'No', 'No', 'No'],
          ['40', '[Top 10 Exercises for Plantar Fasciitis Demonstrated](https://www.youtube.com/watch?v=-uTb31CvMqQ), Sports Injury Physio', '130K', 'No', 'No', 'Yes', 'Yes'],
          ['41', '[Fix Your Plantar Fasciitis Heel Pain (PERMANENTLY)](https://www.youtube.com/watch?v=Hmet9woSPpQ), Tone and Tighten', '361K', 'Yes', 'Yes', 'Yes', 'No'],
          ['42', '[YOGA FOR PLANTAR FASCIITIS | How to Cure Plantar Fasciitis in 1 Week](https://www.youtube.com/watch?v=AyRVlslcjv0), Dr. Melissa Oleson', '360K', 'Yes', 'Both', 'No', 'No'],
          ['43', '[4 Heel Spur Exercises](https://www.youtube.com/watch?v=5k9k_tioGSo), Rehab Science', '312K', 'Yes', 'Both', 'No', 'No'],
          ['44', '[Top 6 Exercises for Healing the Root Problem of Plantar Fasciitis](https://www.youtube.com/watch?v=UUAgMrCna3c), El Paso Manual Physical Therapy', '293K', 'No', 'No', 'Yes', 'Yes'],
          ['45', '[5 Best Plantar Fasciitis Exercises- Stretch AND Strength!](https://www.youtube.com/watch?v=lah3Dy-10FE), Dr. Kristie Ennis', '255K', 'Yes', 'Yes', 'Yes', 'No'],
          ['46', '[15 Min Plantar Fasciitis Foot & Heel Pain Relief - Plantar Fasciitis Treatment, Stretches, Exercises](https://www.youtube.com/watch?v=hSGPSPqycSw), HASfit', '230K', 'Yes', 'Yes', 'No', 'No'],
          ['47', '[Get Rid of Plantar Fasciitis! 5 Best Exercises](https://www.youtube.com/watch?v=uv-poDQedBQ), JeremySallerMD', '224K', 'Yes', 'Both', 'Yes', 'No'],
          ['48', '[Bizarre Fix for Plantar Fasciitis (Relieve Your Foot Pain!)](https://www.youtube.com/watch?v=qn_X-SJPqZs), Upright Health', '210K', 'No', 'No', 'No', 'No'],
          ['49', '[Standing Calf Stretch for Plantar Fasciitis](https://www.youtube.com/watch?v=YfjeXeiREic), Sharp HealthCare', '208K', 'No', 'Both', 'No', 'No'],
          ['50', '[NEVER Stretch This Heel Pain. Do This Instead](https://www.youtube.com/watch?v=_hslYSi8Xfs), Bob & Brad', '179K', 'No', 'No', 'Yes', 'No'],
        ],
      },
    },
  ],
  faq: [
    {
      q: 'Are YouTube videos good for plantar fasciitis?',
      a: 'Many are a fine starting point, but most of the 50 most-watched leave something out. Only 9 of 50 include a plantar fascia stretch, a calf stretch and strengthening together, the combination the 2023 guideline supports, and only 9 say when to see a doctor.',
      cites: [CITE.guideline],
    },
    {
      q: 'What should a plantar fasciitis exercise video include?',
      a: 'A plantar fascia stretch and a calf stretch, both graded A by the 2023 guideline, and a strengthening exercise such as a heel raise, graded B, with a clear dose and a note on when to see a clinician.',
      cites: [CITE.guideline],
    },
    {
      q: 'Which YouTube videos covered all three exercise types?',
      a: 'In our October 2026 sample: videos from E3 Rehab, [P]rehab, SpineCare Decompression and Chiropractic Center, Tone and Tighten (three videos), AskDoctorJo, Dr. Kristie Ennis and JeremySallerMD. The full list with links is in the table above.',
    },
    {
      q: 'Can I use this data?',
      a: 'Yes. The data file is free to download and reuse. Please cite it as: Walkito, The 50 most-watched plantar fasciitis videos on YouTube vs the 2023 guideline, October 2026, walkito.site.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your heel pain followed an injury or a fall',
      'you cannot put weight on the foot or you are limping',
      'the pain comes with numbness, tingling, swelling, redness or warmth',
      'pain wakes you at night or is there at rest',
      'pain is getting worse week over week despite exercise',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'All three parts, in one plan',
    text: '[Walkito](/program/) puts the plantar fascia stretch, both calf stretches and a heel raise that gets harder over time into one short daily plan, with a dose for each exercise.',
    more: [
      'Each morning a one-tap check-in makes a bad day lighter, and every 14 days a short test shows whether your calves, arch and balance are changing. Walkito is an exercise program, not a diagnosis or a substitute for a clinician.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'YouTube video study',
  campaign: 'study-youtube',
};
