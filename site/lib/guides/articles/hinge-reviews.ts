import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Reviews page for "hinge health reviews". Every fact was checked on
 * October 23, 2026: ratings and counts on the App Store (Apple lookup API and
 * listing), Google Play, Trustpilot and BBB; review themes from keyword
 * tallies of the 250 most recent US App Store reviews (June 18 to October 21,
 * 2026) and the 76 Trustpilot reviews we could load (February 2022 to
 * October 7, 2026), spot-checked by hand; Hinge's replies quoted from its BBB
 * complaint page; privacy lines from Hinge's HIPAA notice and privacy policy
 * and the BCBS of Texas HealthSelect FAQ; Enso from FDA 510(k) K233784 and its
 * summary PDF; studies from PubMed (search "Hinge Health", 49 records, none on
 * the foot); PHTI quotes from its Virtual MSK report v1.3. Notes and raw data:
 * the p5 research folder (hinge-research.md, tp.json, appstore.json, phti.txt).
 * Keep Hinge facts consistent with vs-hinge.ts and hinge-alternatives.ts, and
 * keep the comparison table on /walkito-vs-hinge-health/ only. We did not use
 * Hinge Health ourselves. No Walkito price. No PHTI price: our other Hinge
 * pages do not state one. Recheck ratings before editing.
 */
export const HINGE_REVIEWS_EN: Guide = {
  lang: 'en',
  page: 'hingeReviews',
  mainSource: CITE.hingeBaileyCohort,
  published: '2026-10-23',
  updated: '2026-10-23',
  title: 'Hinge Health Reviews (2026): Ratings, Complaints, Evidence',
  description:
    'Hinge Health reviews, checked October 2026: 4.9 in both app stores, 3.0 on Trustpilot, what members praise and dislike, billing, privacy and the studies.',
  h1: 'Hinge Health reviews: ratings, complaints and evidence',
  lede:
    'Hinge Health is rated 4.9 out of 5 on the App Store from about 172,000 ratings and 4.9 on Google Play from about 33,900 reviews, but 3.0 on Trustpilot from 77 reviews (all checked October 23, 2026). The gap is mostly about who writes where: store ratings come from people using the app, while the much smaller Trustpilot and BBB pages collect more complaints, mainly about insurance billing and marketing mail. Its published studies, almost all run by Hinge, are on back and knee pain; none is on foot or heel pain.',
  intro: [
    'Walkito makes this page, and we are not neutral: we make an exercise app for heel and foot pain. We did not use Hinge Health ourselves. Every rating, count and quote below comes from a public page we checked on October 23, 2026, and every reviewer quote is one person\u2019s report, not a fact we verified. For how Hinge compares with our app, see [Walkito vs Hinge Health](/walkito-vs-hinge-health/); if you cannot get Hinge, see [Hinge Health alternatives](/hinge-health-alternatives/).',
  ],
  takeaways: [
    'Hinge Health is rated 4.9 on the App Store (about 172,000 ratings) and 4.9 on Google Play (about 33,900 reviews), and 3.0 on Trustpilot (77 reviews), checked October 23, 2026.',
    'The most common praise in reviews is having your own physical therapist and coach, and doing the exercises at home. The most common complaints are insurance billing for a program sold as free, and too many mailers, texts and emails.',
    'Hinge says the virtual program is $0 to members. It bills your health plan per use, and its own BBB reply says this does not affect your benefits or deductible.',
    'Hinge\u2019s studies are mostly run by people who work for or consult for Hinge. Its two randomized trials of the exercise program compared it with education articles, not in-person physical therapy.',
    'The independent Peterson Health Technology Institute rated the evidence certainty for this kind of program \u201cLower\u201d, and found that none of the nine Hinge studies it included compared it with in-person physical therapy.',
    'We found no Hinge Health study on foot, heel or ankle pain.',
  ],
  toc: true,
  sections: [
    {
      h2: 'How is Hinge Health rated?',
      table: {
        caption: 'Hinge Health ratings by platform (checked October 23, 2026)',
        head: ['Platform', 'Score', 'How many', 'Who writes there'],
        rows: [
          ['[App Store (US)](https://apps.apple.com/us/app/hinge-health/id1429270372)', '4.9 of 5', 'About 172,000 ratings', 'People who installed the app'],
          ['[Google Play](https://play.google.com/store/apps/details?id=com.hingehealth.phoenix)', '4.9 of 5', 'About 33,900 reviews', 'People who installed the app'],
          ['[Trustpilot](https://www.trustpilot.com/review/hingehealth.com)', '3.0 of 5', '77 reviews', 'Anyone, off the app'],
          ['[BBB](https://www.bbb.org/us/ca/san-francisco/profile/health-consultants/hinge-health-1116-934732/complaints)', 'No star score', '15 complaints in 3 years', 'People with a complaint'],
        ],
      },
      after: [
        'The two kinds of page measure different things. The two stores hold more than 200,000 ratings between them, from people who installed the app. Trustpilot and BBB are much smaller and are written by people who go looking for a review site, which often means someone with a problem.',
        'Trustpilot\u2019s own page shows how split those reviews are: 43% are 5 stars and 38% are 1 star, with little in between. It also labels the profile: \u201cThis company hasn\u2019t invited customers recently, so reviews may not be representative.\u201d BBB lists 6 complaints in the last 12 months. So neither number alone tells you how Hinge will go for you, but the low scores do point at real, repeated problems, covered below.',
      ],
    },
    {
      h2: 'What do Hinge Health reviewers like?',
      paragraphs: [
        'We read the 250 most recent US App Store reviews (June 18 to October 21, 2026) and the 76 Trustpilot reviews we could load (February 2022 to October 7, 2026) on October 23, 2026, and grouped them by theme using keyword counts, then spot-checked them. The reviews are public on the [App Store](https://apps.apple.com/us/app/hinge-health/id1429270372) and [Trustpilot](https://www.trustpilot.com/review/hingehealth.com). Read the counts as approximate. Of the 250 App Store reviews, 229 gave 5 stars.',
        {
          list: [
            '**Having your own physical therapist and coach.** About 76 of the 250 App Store reviews mention them, nearly all positively. On Trustpilot, about 51 of 76 mention them, in good and bad reviews alike.',
            '**Doing it at home, on your own time.** About 65 App Store reviews praise the convenience.',
            '**Actually keeping up with exercises.** One App Store reviewer writes: \u201cI\u2019ve done a lot of PT but never succeeded in doing my exercises regularly at home. This solves that.\u201d (5 stars, October 21, 2026).',
            '**Free equipment and the Enso device**, for members who get them. Of about 21 Trustpilot reviews that mention Enso, about 12 are positive.',
          ],
        },
        'Many happy reviewers use it for back and knee pain, which is also where Hinge\u2019s studies are.',
      ],
    },
    {
      h2: 'What are the most common Hinge Health complaints?',
      paragraphs: [
        'The complaints cluster on Trustpilot and BBB. Approximate counts from the 76 Trustpilot reviews:',
        {
          list: [
            '**Billing to insurance** (about 25 reviews, 17 of them 1 or 2 stars). Reviewers say they expected \u201cfree\u201d and then saw claims on their insurance statements. One App Store reviewer says it \u201cbilled my insurance for $250. I was never prompted to purchase anything.\u201d (2 stars, October 18, 2026). That is one member\u2019s report, not a published price. See the next section for how Hinge explains it.',
            '**Too much marketing** (about 20 reviews). Mailers, texts and emails, and trouble opting out. One Trustpilot reviewer says the company \u201cwill nag you worse than the IRS\u201d.',
            '**App bugs and program changes** (about 17 reviews). One App Store reviewer says \u201cApple health integration is broken, video tracking is finicky\u201d (3 stars, October 8, 2026). Long-time members on Trustpilot say sessions and programs changed and got shorter.',
            '**Enso problems** (about 9 negative reviews). Reports include a unit that holds a charge for one session, and no way to get gel pads after coverage ends.',
            '**Generic exercises or more pain** (about 7 reviews). One Trustpilot reviewer says it \u201cmade my pain worse\u201d; a wheelchair user says exercises kept being changed to standing ones.',
          ],
        },
        'In the 250 recent App Store reviews, billing comes up in about 8 and marketing complaints in about 2. Most of the few non-5-star App Store reviews are about bugs or app changes.',
      ],
    },
    {
      h2: 'Is Hinge Health really free? Why it shows up on insurance',
      paragraphs: [
        'For most members the virtual program costs nothing out of pocket. Hinge\u2019s [App Store listing](https://apps.apple.com/us/app/hinge-health/id1429270372) says \u201cvirtual physical therapy and virtual specialist visits are available at no cost to the member\u201d, through 2,800+ employers and health plans. In-person care can have a cost share on a high deductible plan or outside Hinge\u2019s network. Hinge does not publish what employers or plans pay.',
        'It is free to you, but it is not free to your plan, and that is the source of most billing complaints. In a reply on [BBB](https://www.bbb.org/us/ca/san-francisco/profile/health-consultants/hinge-health-1116-934732/complaints) (May 9, 2025), Hinge explained: \u201cOur claims are submitted based on engagement\u201d. It said it submits claims to your insurance company, that \u201cThis does not affect your insurance benefits or deductible\u201d, and that \u201cyour employer reimburses the insurance company in bulk for all paid claims.\u201d In that case the member\u2019s claim had been denied; Hinge said the insurer \u201cmay have mis-processed\u201d it and that the member was \u201cnot responsible for any out-of-pocket costs\u201d.',
        'Some reviewers still object to how much their plan is charged, or worry about plan limits; those are individual reports we could not verify. If it matters to you, ask your plan how Hinge claims are billed before you start. Who can get Hinge, and what happens when you change jobs, is on [Walkito vs Hinge Health](/walkito-vs-hinge-health/).',
      ],
    },
    {
      h2: 'Why does Hinge Health send so much mail, and how do you stop it?',
      paragraphs: [
        'Of the 10 complaints shown in full on Hinge\u2019s [BBB page](https://www.bbb.org/us/ca/san-francisco/profile/health-consultants/hinge-health-1116-934732/complaints) on October 23, 2026, 6 are about mailers, texts or emails. One person reports \u201c4 texts a day, 6 emails, and mailings twice a week\u201d; another says a mailer looked as if it came from their employer\u2019s HR department.',
        'Hinge\u2019s replies say mailers are \u201capproved and sent upon the request of employer health plans\u201d, that it adds people to a do-not-contact list when asked, and that \u201c1-2 additional pieces may still arrive\u201d because mail is printed weeks ahead. One April 2025 complaint also says \u201cThere is no one-click opt-out/delete account\u201d; Hinge replied that it processed the opt-out and sent the deletion request to its compliance team.',
      ],
    },
    {
      h2: 'What does Hinge Health do with your health data?',
      paragraphs: [
        'Hinge\u2019s [HIPAA notice](https://www.hingehealth.com/about/hipaa/) says, in its own words:',
        {
          list: [
            '\u201cWe can use and share your health information to bill and get payment from health plans or other entities.\u201d',
            'It may get information about \u201cyour current employer and your group health plan coverage\u201d to check that you are eligible.',
            '\u201cWe use aggregated, de-identified outcomes data to provide our customers with insight into the outcomes of their employees following their use of our services.\u201d Its customers are the employers and plans.',
          ],
        },
        'One health plan\u2019s member FAQ ([BCBS of Texas HealthSelect](https://healthselect.bcbstx.com/pdf/hinge-health-faq.pdf)) says: \u201cYour individual health information is protected and not shared with your employer(s).\u201d Hinge\u2019s website [privacy policy](https://www.hingehealth.com/about/privacy) says it uses cookies and pixels and works with other companies to serve advertising across the web and in mobile apps, and that giving your phone number means you agree to informational and promotional messages. On [Google Play](https://play.google.com/store/apps/details?id=com.hingehealth.phoenix), Hinge says data is encrypted in transit and that you can request deletion.',
        'A few Trustpilot reviewers raise privacy worries, and one says part of their access was locked after they declined to share with their primary care doctor. We could not verify that, and we found no privacy lawsuit or regulator action in a quick search.',
      ],
    },
    {
      h2: 'What is the Enso device, and is it FDA cleared?',
      paragraphs: [
        'Enso is a small wearable nerve stimulator that Hinge sends to some members \u201cif appropriate\u201d. The FDA\u2019s [510(k) record K233784](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K233784) lists \u201cENSO (Model 2)\u201d from Hinge Health, Inc., decided \u201cSubstantially Equivalent\u201d on February 23, 2024, in the over-the-counter transcutaneous nerve stimulator class. That is a clearance, not an approval.',
        'Its [510(k) summary](https://www.accessdata.fda.gov/cdrh_docs/pdf23/K233784.pdf) lists uses including \u201ctemporary relief of pain associated with sore and aching muscles in the shoulder, waist, back, neck, upper extremities (arm) and lower extremities (leg)\u201d. It does not name the foot or heel.',
        'Hinge\u2019s own trial of Enso compared it with a standard TENS unit and usual care in 325 Hinge members with chronic back or knee pain over 4 weeks, and reported no adverse events. When your coverage ends, Hinge told one former member on BBB (August 13, 2026) that \u201cwe do not have a separate process that allows former members to purchase replacement gel pads\u201d.',
      ],
      cites: [CITE.hingeHongEnsoRCT],
    },
    {
      h2: 'Does Hinge Health work? What the studies show',
      keyFact: 'In Hinge\u2019s largest study, 10,264 people with chronic back or knee pain reported an average 68% drop in pain after three months, with no control group (Bailey and colleagues, 2020).',
      paragraphs: [
        'Hinge publishes its research in peer-reviewed journals, so anyone can check it. Two things matter when you read it: who ran the studies, and what Hinge was compared with.',
      ],
      table: {
        caption: 'Hinge Health studies most often cited (all list Hinge employees or paid consultants as authors)',
        head: ['Study', 'Pain', 'People', 'Compared with'],
        rows: [
          ['Mecklenburg 2018, trial', 'Chronic knee', '162', 'Education articles'],
          ['Shebib 2019, trial', 'Chronic low back', '177', 'Education articles'],
          ['Bailey 2020', 'Chronic back or knee', '10,264', 'No control group'],
          ['Wang 2022', 'Recent muscle or joint pain', '262 vs 675', 'People not yet started'],
          ['Hong 2024, trial', 'Chronic back or knee', '325', 'TENS unit or usual care (Enso)'],
        ],
      },
      after: [
        'The 68% figure Hinge shows in its app listings comes from Bailey 2020, a cohort with no comparison group; about 73% of people were still taking part in the final month. In the knee trial, people who finished saw their pain score fall 61%, against 21% in the education group. In the 2022 study of recent pain, pain fell 73% in members against 46.7% in people who had registered but not yet started.',
        'These results are consistent and point the same way. But a program compared with reading articles, or with people who have not started, is a lower bar than a program compared with seeing a physical therapist in person. The conflict-of-interest statements in each paper list Hinge employees, equity holders or paid consultants among the authors. The Shebib group size is as reported by PHTI (below).',
      ],
      cites: [CITE.hingeMecklenburgRCT, CITE.hingeShebibRCT, CITE.hingeBaileyCohort, CITE.hingeWangAcute, CITE.hingeHongEnsoRCT],
    },
    {
      h2: 'What did the independent PHTI review find?',
      paragraphs: [
        'The [Peterson Health Technology Institute](https://www.phti.org/assessment/virtual-msk-solutions) (PHTI) reviewed virtual muscle and joint programs in June 2024. It is funded entirely by the Peter G. Peterson Foundation and says it \u201cdoes not accept financial contributions\u201d. It did not test the products itself: it read the published studies and data the companies sent in.',
        'It put Hinge in its physical therapist-guided group with Omada, RecoveryOne, Sword and Vori. For that group it found: \u201cImproves both pain and function; comparable to in-person PT\u201d, with \u201cEvidence Certainty: Lower\u201d.',
        'On Hinge specifically, the [report](https://www.phti.org/wp-content/uploads/2024/10/PHTI-Virtual-MSK-Solutions-Assessment-Report-v1.3.pdf) says \u201cEvidence for Hinge included 12 clinical references, nine of which met inclusion criteria\u201d, and \u201cNone of the nine citations compared Hinge data with an in-person PT comparator group.\u201d Its verdict: \u201cthe direction of evidence for the Hinge solution supports it as superior to no intervention and standard of care, though the evidence is inconclusive relative to in-person PT, as no direct comparison study exists.\u201d',
      ],
    },
    {
      h2: 'Is there a Hinge Health study on foot or heel pain?',
      paragraphs: [
        'No. A PubMed search for \u201cHinge Health\u201d on October 23, 2026 returned 49 records, and none is on the foot, heel, ankle or plantar fasciitis. Hinge does cover foot and ankle pain in its program, and its plantar fasciitis exercises match what the 2023 heel pain guideline recommends, as we note on [Walkito vs Hinge Health](/walkito-vs-hinge-health/).',
        'Foot reviews are rare: 3 of the 250 recent App Store reviews mention the foot, heel or plantar fasciitis, all 5 stars. One says: \u201cWhen my plantar fasciitis was really bad, these exercises really helped!\u201d (August 11, 2026). That is a good sign for those members, but it is not a study.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Who is Hinge Health a good fit for?',
      paragraphs: [
        '**It tends to suit you if:**',
        {
          list: [
            'your employer or health plan covers it, so the virtual program is $0 to you;',
            'you want a physical therapist and coach to message, without travelling to a clinic;',
            'your pain is in your back or knee, where the studies are, or in more than one place;',
            'you find it hard to keep up home exercises and like reminders and streaks.',
          ],
        },
        '**It may not suit you if:**',
        {
          list: [
            'you do not have it through work or a plan, or expect to change jobs soon; we found no way to buy it yourself;',
            'you want to know or limit what is billed to your plan; ask your plan first;',
            'you want hands-on care, or have had surgery or an injury in the painful area in the last three months, which the regulatory note on Hinge\u2019s [Google Play](https://play.google.com/store/apps/details?id=com.hingehealth.phoenix) listing names as a reason not to use it;',
            'you dislike frequent texts, emails and mail.',
          ],
        },
      ],
    },
    {
      h2: 'If you have heel or foot pain',
      paragraphs: [
        'If your employer or plan offers Hinge Health, it is a sensible place to start: it costs you nothing and you get a physical therapist. If you cannot get it, our [Hinge Health alternatives](/hinge-health-alternatives/) page lists options you can get through your plan or book yourself, and [Walkito vs Hinge Health](/walkito-vs-hinge-health/) compares the two directly.',
        'To start at home today, our free [plantar fasciitis exercises](/plantar-fasciitis-exercises/) page has the stretches and strength work the 2023 guideline supports. Walkito is our app: an exercise app for iPhone and Android for heel pain, plantar fasciitis and flat feet. It is not a medical device, does not diagnose and has no physical therapist. It was released on October 2, 2026 and has few ratings so far.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Is Hinge Health legit?',
      a: 'Yes. Hinge Health is a real virtual physical therapy company offered through employers and health plans, rated 4.9 on the App Store and Google Play as of October 23, 2026. Its Trustpilot score is 3.0 from 77 reviews, with complaints mostly about insurance billing and marketing mail, and fewer about the care itself.',
    },
    {
      q: 'Is Hinge Health actually free?',
      a: 'The virtual program is $0 to members whose employer or health plan covers it, according to Hinge. Hinge still bills your health plan when you use it, and says this does not affect your benefits or deductible. In-person care can have a cost share on some plans. Ask your plan if billing matters to you.',
    },
    {
      q: 'Why did Hinge Health bill my insurance?',
      a: 'Hinge submits claims to your insurer based on use, such as a completed exercise session, and says your employer then reimburses the insurer in bulk. In a 2025 BBB reply it told a member with a denied claim that the insurer may have mis-processed it and the member owed nothing.',
    },
    {
      q: 'Does Hinge Health really work?',
      a: 'For back and knee pain, its studies show pain falling more than with education articles or no program, but nearly all were run by Hinge. The independent PHTI review in 2024 rated the evidence certainty lower and called the evidence inconclusive against in-person physical therapy, as no direct comparison exists.',
    },
    {
      q: 'Is Hinge Health good for plantar fasciitis?',
      a: 'It may be. Hinge covers foot and ankle pain, and a few reviewers say it helped their plantar fasciitis. But we found no Hinge study on foot or heel pain among its 49 PubMed records, and its Enso device clearance names the leg, not the foot.',
    },
    {
      q: 'How do I stop Hinge Health mailers and texts?',
      a: 'Contact Hinge Health support and ask to be added to its do-not-contact list. In its BBB replies, Hinge says it processes these requests but that 1 or 2 more mailers may arrive, because they are printed weeks in advance. In one BBB case, Hinge asked for the mailing address the mail goes to.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your pain followed an injury or a fall',
      'you cannot put weight on the foot or you are limping',
      'the pain comes with numbness, tingling, swelling, redness or warmth',
      'pain wakes you at night or is there at rest',
      'pain is getting worse week over week despite exercise',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'If you cannot get Hinge Health and your pain is in the heel or foot, [Walkito](/program/) is our exercise app. It builds a short plan from where it hurts, on 3, 5 or 7 days a week, with sessions of 3, 5 or 10 minutes, and adjusts each session to a morning pain check-in.',
    more: [
      'Every 14 days, then every 28 after your first goal, a short test of calf raises, an arch hold and single-leg balance compares your left and right sides. It is a weekly or yearly subscription, with the price shown in the store.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  crumb: 'Hinge Health reviews',
  campaign: 'compare-hinge-reviews',
  related: ['vsHinge', 'hingeAlt', 'heelPain'],
};
