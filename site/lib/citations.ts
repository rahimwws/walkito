/**
 * The papers the site leans on, in one place.
 *
 * `/science` prints them and every guide cites them by index, so a reference
 * corrected here is corrected everywhere it is quoted. They stay in English on
 * the translated pages: a citation is looked up, not read, and a translated
 * journal title is one nobody can find.
 *
 * Every entry carries a resolvable identifier — a DOI, a PubMed id, or both —
 * so a reader (or an engine deciding whether to trust the page) can check the
 * claim in one click. A figure on this site with no identifier behind it does
 * not belong on this site.
 */
export type Citation = {
  /** Vancouver style, as printed. */
  text: string;
  /** Without the `https://doi.org/` prefix. */
  doi?: string;
  pmid?: string;
};

export const CITATIONS: readonly Citation[] = [
  {
    text: 'Rathleff MS, Mølgaard CM, Fredberg U, et al. High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up. Scandinavian Journal of Medicine & Science in Sports. 2015;25(3):e292–e300.',
    doi: '10.1111/sms.12313',
    pmid: '25145882',
  },
  {
    text: 'Brijwasi T, Borkar P. A comprehensive exercise program improves foot alignment in people with flexible flat foot: a randomised trial. Journal of Physiotherapy. 2023;69(1):42–46.',
    doi: '10.1016/j.jphys.2022.11.011',
    pmid: '36526555',
  },
  {
    text: 'Cheng J, Han D, Qu J, et al. Effects of short foot training on foot posture in patients with flatfeet: a systematic review and meta-analysis. Journal of Back and Musculoskeletal Rehabilitation. 2024;37(4):839–851.',
    doi: '10.3233/BMR-230226',
    pmid: '38517769',
  },
  {
    text: 'Koc TA Jr, Bise CG, Neville C, et al. Heel Pain - Plantar Fasciitis: Revision 2023. Journal of Orthopaedic & Sports Physical Therapy. 2023;53(12):CPG1–CPG39.',
    doi: '10.2519/jospt.2023.0303',
    pmid: '38037331',
  },
  {
    text: 'Alfredson H, Pietilä T, Jonsson P, Lorentzon R. Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis. American Journal of Sports Medicine. 1998;26(3):360–366.',
    doi: '10.1177/03635465980260030301',
    pmid: '9617396',
  },
  {
    text: 'Silbernagel KG, Thomeé R, Eriksson BI, Karlsson J. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy: a randomized controlled study. American Journal of Sports Medicine. 2007;35(6):897–906.',
    doi: '10.1177/0363546506298279',
    pmid: '17307888',
  },
  {
    text: 'Beyer R, Kongsgaard M, Hougs Kjær B, Øhlenschlæger T, Kjær M, Magnusson SP. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. American Journal of Sports Medicine. 2015;43(7):1704–1711.',
    doi: '10.1177/0363546515584760',
    pmid: '26018970',
  },
  {
    text: 'Chimenti RL, Neville C, Houck J, Cuddeford T, Carreira D, Martin RL. Achilles Pain, Stiffness, and Muscle Power Deficits: Midportion Achilles Tendinopathy Revision 2024. Journal of Orthopaedic & Sports Physical Therapy. 2024;54(12):CPG1–CPG32.',
    doi: '10.2519/jospt.2024.0302',
    pmid: '39611662',
  },
  {
    text: 'Menéndez C, Batalla L, Prieto A, Rodríguez MÁ, Crespo I, Olmedillas H. Medial tibial stress syndrome in novice and recreational runners: a systematic review. International Journal of Environmental Research and Public Health. 2020;17(20):E7457.',
    doi: '10.3390/ijerph17207457',
    pmid: '33066291',
  },
  {
    text: 'Chang AH, Rasmussen SZ, Jensen AE, Sørensen T, Rathleff MS. What do we actually know about a common cause of plantar heel pain? A scoping review of heel fat pad syndrome. Journal of Foot and Ankle Research. 2022;15(1):60.',
    doi: '10.1186/s13047-022-00568-x',
    pmid: '35974398',
  },
  {
    text: 'Ross MH, Smith MD, Mellor R, Vicenzino B. Exercise for posterior tibial tendon dysfunction: a systematic review of randomised clinical trials and clinical guidelines. BMJ Open Sport & Exercise Medicine. 2018;4(1):e000430.',
    doi: '10.1136/bmjsem-2018-000430',
    pmid: '30271611',
  },
  {
    text: 'Buist I, Bredeweg SW, van Mechelen W, Lemmink KAPM, Pepping GJ, Diercks RL. No effect of a graded training program on the number of running-related injuries in novice runners: a randomized controlled trial. American Journal of Sports Medicine. 2008;36(1):33–39.',
    doi: '10.1177/0363546507307505',
    pmid: '17940147',
  },
  {
    text: 'Nielsen RØ, Parner ET, Nohr EA, Sørensen H, Lind M, Rasmussen S. Excessive progression in weekly running distance and risk of running-related injuries: an association which varies according to type of injury. Journal of Orthopaedic & Sports Physical Therapy. 2014;44(10):739–747.',
    doi: '10.2519/jospt.2014.5164',
    pmid: '25155475',
  },
  {
    text: 'Malisoux L, Ramesh J, Mann R, Seil R, Urhausen A, Theisen D. Can parallel use of different running shoes decrease running-related injury risk? Scandinavian Journal of Medicine & Science in Sports. 2015;25(1):110–115.',
    doi: '10.1111/sms.12154',
    pmid: '24286345',
  },
  {
    text: 'Latt LD, Jaffe DE, Tang Y, Taljanovic MS. Evaluation and treatment of chronic plantar fasciitis. Foot & Ankle Orthopaedics. 2020;5(1):2473011419896763.',
    doi: '10.1177/2473011419896763',
    pmid: '35097359',
  },
  {
    text: 'Menz HB, Dufour AB, Riskowski JL, Hillstrom HJ, Hannan MT. Foot posture, foot function and low back pain: the Framingham Foot Study. Rheumatology (Oxford). 2013;52(12):2275–2282.',
    doi: '10.1093/rheumatology/ket298',
    pmid: '24049103',
  },
  {
    text: 'Ling SK, Lui TH. Posterior tibial tendon dysfunction: an overview. The Open Orthopaedics Journal. 2017;11:714–723.',
    doi: '10.2174/1874325001711010714',
    pmid: '28979585',
  },
  {
    text: 'Waters TR, Dick RB. Evidence of health risks associated with prolonged standing at work and intervention effectiveness. Rehabilitation Nursing. 2015;40(3):148–165.',
    doi: '10.1002/rnj.166',
    pmid: '25041875',
  },
  {
    text: 'Riddle DL, Pulisic M, Pidcoe P, Johnson RE. Risk factors for plantar fasciitis: a matched case-control study. Journal of Bone and Joint Surgery (American). 2003;85(5):872–877.',
    doi: '10.2106/00004623-200305000-00015',
    pmid: '12728038',
  },
  {
    text: 'Garcia MG, Roman MG, Davila A, Martin BJ. Comparison of physiological effects induced by two compression stockings and regular socks during prolonged standing work. Human Factors. 2023;65(4):562–574.',
    doi: '10.1177/00187208211022126',
    pmid: '34078143',
  },
  {
    text: 'Patel A, DiGiovanni B. Association between plantar fasciitis and isolated contracture of the gastrocnemius. Foot & Ankle International. 2011;32(1):5–8.',
    doi: '10.3113/FAI.2011.0005',
    pmid: '21288428',
  },
  {
    text: 'Hébert-Losier K, Wessman C, Alricsson M, Svantesson U. Updated reliability and normative values for the standing heel-rise test in healthy adults. Physiotherapy. 2017;103(4):446–452.',
    doi: '10.1016/j.physio.2017.03.002',
    pmid: '28886865',
  },
  {
    text: 'Jonsson P, Alfredson H, Sunding K, Fahlström M, Cook J. New regimen for eccentric calf-muscle training in patients with chronic insertional Achilles tendinopathy: results of a pilot study. British Journal of Sports Medicine. 2008;42(9):746–749.',
    doi: '10.1136/bjsm.2007.039545',
    pmid: '18184750',
  },
  {
    text: 'van der Vlist AC, Winters M, Weir A, et al. Which treatment is most effective for patients with Achilles tendinopathy? A living systematic review with network meta-analysis of 29 randomised controlled trials. British Journal of Sports Medicine. 2021;55(5):249–256.',
    doi: '10.1136/bjsports-2019-101872',
    pmid: '32522732',
  },
  {
    text: 'Winters M, Eskes M, Weir A, Moen MH, Backx FJG, Bakker EWP. Treatment of medial tibial stress syndrome: a systematic review. Sports Medicine. 2013;43(12):1315–1333.',
    doi: '10.1007/s40279-013-0087-0',
    pmid: '23979968',
  },
  {
    text: 'Moen MH, Holtslag L, Bakker E, et al. The treatment of medial tibial stress syndrome in athletes; a randomized clinical trial. Sports Medicine, Arthroscopy, Rehabilitation, Therapy & Technology. 2012;4:12.',
    doi: '10.1186/1758-2555-4-12',
    pmid: '22464032',
  },
  {
    text: 'Newman P, Witchalls J, Waddington G, Adams R. Risk factors associated with medial tibial stress syndrome in runners: a systematic review and meta-analysis. Open Access Journal of Sports Medicine. 2013;4:229–241.',
    doi: '10.2147/OAJSM.S39331',
    pmid: '24379729',
  },
  {
    text: 'Hamstra-Wright KL, Huxel Bliven KC, Bay C. Risk factors for medial tibial stress syndrome in physically active individuals such as runners and military personnel: a systematic review and meta-analysis. British Journal of Sports Medicine. 2015;49(6):362–369.',
    doi: '10.1136/bjsports-2014-093462',
    pmid: '25185588',
  },
  {
    text: 'Madeley LT, Munteanu SE, Bonanno DR. Endurance of the ankle joint plantar flexor muscles in athletes with medial tibial stress syndrome: a case-control study. Journal of Science and Medicine in Sport. 2007;10(6):356–362.',
    doi: '10.1016/j.jsams.2006.12.115',
    pmid: '17336155',
  },
  {
    text: 'Patel DS, Roth M, Kapil N. Stress fractures: diagnosis, treatment, and prevention. American Family Physician. 2011;83(1):39–46.',
    pmid: '21888126',
  },
  {
    text: 'Hansen L, Krogh TP, Ellingsen T, Bolvig L, Fredberg U. Long-term prognosis of plantar fasciitis: a 5- to 15-year follow-up study of 174 patients with ultrasound examination. Orthopaedic Journal of Sports Medicine. 2018;6(3):2325967118757983.',
    doi: '10.1177/2325967118757983',
    pmid: '29536022',
  },
  {
    text: 'Amaha K, Arimoto T, Kitamura N. Effect of toe exercises and toe grip strength on the treatment of primary metatarsalgia. Journal of Orthopaedic Surgery and Research. 2020;15(1):580.',
    doi: '10.1186/s13018-020-02113-7',
    pmid: '33267902',
  },
  {
    text: 'Reed LF, Battistutta D, Young J, Newman B. Prevalence and risk factors for foot and ankle musculoskeletal disorders experienced by nurses. BMC Musculoskeletal Disorders. 2014;15:196.',
    doi: '10.1186/1471-2474-15-196',
    pmid: '24902582',
  },
  {
    text: 'Tojo M, Yamaguchi S, Amano N, et al. Prevalence and associated factors of foot and ankle pain among nurses at a university hospital in Japan: a cross-sectional study. Journal of Occupational Health. 2018;60(2):132–139.',
    doi: '10.1539/joh.17-0174-OA',
    pmid: '29151449',
  },
  {
    text: 'Stolt M, Suhonen R, Kielo E, Katajisto J, Leino-Kilpi H. Foot health of nurses: a cross-sectional study. International Journal of Nursing Practice. 2017;23(4):e12560.',
    doi: '10.1111/ijn.12560',
    pmid: '28631438',
  },
  {
    text: 'Buckley JP, Hedge A, Yates T, et al. The sedentary office: an expert statement on the growing case for change towards better health and productivity. British Journal of Sports Medicine. 2015;49(21):1357–1362.',
    doi: '10.1136/bjsports-2015-094618',
    pmid: '26034192',
  },
  {
    text: 'Karakolis T, Callaghan JP. The impact of sit-stand office workstations on worker discomfort and productivity: a review. Applied Ergonomics. 2014;45(3):799–806.',
    doi: '10.1016/j.apergo.2013.10.001',
    pmid: '24157240',
  },
  {
    text: 'Coenen P, Parry S, Willenberg L, et al. Associations of prolonged standing with musculoskeletal symptoms: a systematic review of laboratory studies. Gait & Posture. 2017;58:310–318.',
    doi: '10.1016/j.gaitpost.2017.08.024',
    pmid: '28863296',
  },
  {
    text: 'Chang J, Cho E. Nurses\' steps, distance traveled, and perceived physical demands in a three-shift schedule. Human Resources for Health. 2022;20:72.',
    doi: '10.1186/s12960-022-00768-3',
  },
  {
    text: 'Silbernagel KG, Nilsson-Helander K, Thomeé R, Eriksson BI, Karlsson J. A new measurement of heel-rise endurance with the ability to detect functional deficits in patients with Achilles tendon rupture. Knee Surgery, Sports Traumatology, Arthroscopy. 2010;18(2):258–264.',
    doi: '10.1007/s00167-009-0889-7',
    pmid: '19690833',
  },
  {
    text: 'Siriphorn A, Eksakulkla S. Calf stretching and plantar fascia-specific stretching for plantar fasciitis: a systematic review and meta-analysis. Journal of Bodywork and Movement Therapies. 2020;24(4):222–232.',
    doi: '10.1016/j.jbmt.2020.06.013',
    pmid: '33218515',
  },
  {
    text: 'DiGiovanni BF, Nawoczenski DA, Lintal ME, et al. Tissue-specific plantar fascia-stretching exercise enhances outcomes in patients with chronic heel pain: a prospective, randomized study. Journal of Bone and Joint Surgery (American). 2003;85(7):1270–1277.',
    doi: '10.2106/00004623-200307000-00013',
    pmid: '12851352',
  },
  {
    text: 'DiGiovanni BF, Nawoczenski DA, Malay DP, et al. Plantar fascia-specific stretching exercise improves outcomes in patients with chronic plantar fasciitis: a prospective clinical trial with two-year follow-up. Journal of Bone and Joint Surgery (American). 2006;88(8):1775–1781.',
    doi: '10.2106/JBJS.E.01281',
    pmid: '16882901',
  },
  {
    text: 'Springer BA, Marin R, Cyhan T, Roberts H, Gill NW. Normative values for the unipedal stance test with eyes open and closed. Journal of Geriatric Physical Therapy. 2007;30(1):8–15.',
    doi: '10.1519/00139143-200704000-00003',
    pmid: '19839175',
  },
  {
    text: 'Bellows R, Wong CK. The effect of bracing and balance training on ankle sprain incidence among athletes: a systematic review with meta-analysis. International Journal of Sports Physical Therapy. 2018;13(3):379–388.',
    pmid: '30038824',
  },
  {
    text: 'Salinas-Torres VM, Salinas-Torres RA, Carranza-García LE, Herrera-Orozco J, Tristán-Rodríguez JL. Prevalence and clinical factors associated with pes planus among children and adults: a population-based synthesis and systematic review. Journal of Foot and Ankle Surgery. 2023;62(5):899–903.',
    doi: '10.1053/j.jfas.2023.05.007',
    pmid: '37286098',
  },
  {
    text: 'McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. British Journal of Sports Medicine. 2015;49(5):290.',
    doi: '10.1136/bjsports-2013-092690',
    pmid: '24659509',
  },
  {
    text: 'Gooding TM, Feger MA, Hart JM, Hertel J. Intrinsic foot muscle activation during specific exercises: a T2 time magnetic resonance imaging study. Journal of Athletic Training. 2016;51(8):644–650.',
    doi: '10.4085/1062-6050-51.10.07',
    pmid: '27690528',
  },
  {
    text: 'Kulig K, Burnfield JM, Requejo SM, Sperry M, Terk M. Selective activation of tibialis posterior: evaluation by magnetic resonance imaging. Medicine & Science in Sports & Exercise. 2004;36(5):862–867.',
    doi: '10.1249/01.mss.0000126385.12402.2e',
    pmid: '15126722',
  },
  {
    text: 'Lynn SK, Padilla RA, Tsang KK. Differences in static- and dynamic-balance task performance after 4 weeks of intrinsic-foot-muscle training: the short-foot exercise versus the towel-curl exercise. Journal of Sport Rehabilitation. 2012;21(4):327–333.',
    doi: '10.1123/jsr.21.4.327',
    pmid: '22715143',
  },
  {
    text: 'Jung DY, Kim MH, Koh EK, Kwon OY, Cynn HS, Lee WH. A comparison in the muscle activity of the abductor hallucis and the medial longitudinal arch angle during toe curl and short foot exercises. Physical Therapy in Sport. 2011;12(1):30–35.',
    doi: '10.1016/j.ptsp.2010.08.001',
    pmid: '21256447',
  },
  {
    text: 'Zarali A, Raeisi Z, Aminmahalati A. The effects of combined exercises, short foot exercises, and short foot exercises with isometric hip abduction on navicular drop, static parameters, and postural sway in women with flat foot: a randomized trial. BMC Sports Science, Medicine and Rehabilitation. 2024;16(1):233.',
    doi: '10.1186/s13102-024-01019-9',
    pmid: '39587664',
  },
  {
    text: 'Lunsford BR, Perry J. The standing heel-rise test for ankle plantar flexion: criterion for normal. Physical Therapy. 1995;75(8):694–698.',
    doi: '10.1093/ptj/75.8.694',
    pmid: '7644573',
  },
  {
    text: 'Abdalbary SA. Foot Mobilization and Exercise Program Combined with Toe Separator Improves Outcomes in Women with Moderate Hallux Valgus at 1-Year Follow-up (A Randomized Clinical Trial). Journal of the American Podiatric Medical Association. 2018;108(6):478–486.',
    doi: '10.7547/17-026',
    pmid: '29683337',
  },
  {
    text: 'Biz C, Maccarone MC, Bonso V, et al. Conservative Treatment of Sesamoiditis: A Systematic Literature Review with Individual-Level Pooled Data Analysis. Medicina (Kaunas, Lithuania). 2025;61(7).',
    doi: '10.3390/medicina61071215',
    pmid: '40731844',
  },
  {
    text: 'Burns J, Crosbie J, Ouvrier R, Hunt A. Effective orthotic therapy for the painful cavus foot: a randomized controlled trial. Journal of the American Podiatric Medical Association. 2006;96(3):205–11.',
    doi: '10.7547/0960205',
    pmid: '16707631',
  },
  {
    text: 'Choo YJ, Park CH, Chang MC. Rearfoot disorders and conservative treatment: a narrative review. Annals of Palliative Medicine. 2020;9(5):3546–3552.',
    doi: '10.21037/apm-20-446',
    pmid: '32787369',
  },
  {
    text: 'Formosa C, Grixti C, Gatt A. Conservative Approach in the Management of Lesser Toe Deformities in Older Adults. Journal of the American Podiatric Medical Association. 2022;112(3).',
    doi: '10.7547/20-274',
    pmid: '36074350',
  },
  {
    text: 'Houck J, Neville C, Tome J, Flemister A. Randomized Controlled Trial Comparing Orthosis Augmented by Either Stretching or Stretching and Strengthening for Stage II Tibialis Posterior Tendon Dysfunction. Foot & Ankle International. 2015;36(9):1006–16.',
    doi: '10.1177/1071100715579906',
    pmid: '25857939',
  },
  {
    text: 'James AM, Williams CM, Haines TP. Effectiveness of footwear and foot orthoses for calcaneal apophysitis: a 12-month factorial randomised trial. British Journal of Sports Medicine. 2016;50(20):1268–1275.',
    doi: '10.1136/bjsports-2015-094986',
    pmid: '26917682',
  },
  {
    text: 'Kim MH, Yi CH, Weon JH, Cynn HS, Jung DY, Kwon OY. Effect of toe-spread-out exercise on hallux valgus angle and cross-sectional area of abductor hallucis muscle in subjects with hallux valgus. Journal of Physical Therapy Science. 2015;27(4):1019–22.',
    doi: '10.1589/jpts.27.1019',
    pmid: '25995546',
  },
  {
    text: 'Kulig K, Lederhaus ES, Reischl S, Arya S, Bashford G. Effect of eccentric exercise program for early tibialis posterior tendinopathy. Foot & Ankle International. 2009;30(9):877–85.',
    doi: '10.3113/FAI.2009.0877',
    pmid: '19755073',
  },
  {
    text: 'Kulig K, Reischl SF, Pomrantz AB, et al. Nonsurgical management of posterior tibial tendon dysfunction with orthoses and resistive exercise: a randomized controlled trial. Physical Therapy. 2009;89(1):26–37.',
    doi: '10.2522/ptj.20070242',
    pmid: '19022863',
  },
  {
    text: 'Külünkoğlu BA, Akkubak Y, Çelik D, Alkan A. A comparison of the effectiveness of splinting, exercise and electrotherapy in women patients with hallux valgus: A randomized clinical trial. Foot (Edinburgh, Scotland). 2021;48:101828.',
    doi: '10.1016/j.foot.2021.101828',
    pmid: '34388424',
  },
  {
    text: 'Malhotra K, Davda K, Singh D. The pathology and management of lesser toe deformities. EFORT Open Reviews. 2016;1(11):409–419.',
    doi: '10.1302/2058-5241.1.160017',
    pmid: '28461920',
  },
  {
    text: 'Matthews BG, Thomson CE, Harding MP, McKinley JC, Ware RS. Treatments for Morton\'s neuroma. The Cochrane Database of Systematic Reviews. 2024;2(2):CD014687.',
    doi: '10.1002/14651858.CD014687.pub2',
    pmid: '38334217',
  },
  {
    text: 'Matthews BG, Hurn SE, Harding MP, Henry RA, Ware RS. The effectiveness of non-surgical interventions for common plantar digital compressive neuropathy (Morton\'s neuroma): a systematic review and meta-analysis. Journal of Foot and Ankle Research. 2019;12:12.',
    doi: '10.1186/s13047-019-0320-7',
    pmid: '30809275',
  },
  {
    text: 'Menz HB, Thomas MJ, Marshall M, et al. Coexistence of plantar calcaneal spurs and plantar fascial thickening in individuals with plantar heel pain. Rheumatology (Oxford, England). 2019;58(2):237–245.',
    doi: '10.1093/rheumatology/key266',
    pmid: '30204912',
  },
  {
    text: 'Menz HB, Zammit GV, Landorf KB, Munteanu SE. Plantar calcaneal spurs in older people: longitudinal traction or vertical compression? Journal of Foot and Ankle Research. 2008;1(1):7.',
    doi: '10.1186/1757-1146-1-7',
    pmid: '18822162',
  },
  {
    text: 'Perhamre S, Lundin F, Norlin R, Klässbo M. Sever\'s injury; treat it with a heel cup: a randomized, crossover study with two insole alternatives. Scandinavian Journal of Medicine & Science in Sports. 2011;21(6):e42–7.',
    doi: '10.1111/j.1600-0838.2010.01140.x',
    pmid: '20673253',
  },
  {
    text: 'Tehraninasr A, Saeedi H, Forogh B, Bahramizadeh M, Keyhani MR. Effects of insole with toe-separator and night splint on patients with painful hallux valgus: a comparative study. Prosthetics and Orthotics International. 2008;32(1):79–83.',
    doi: '10.1080/03093640701669074',
    pmid: '18330806',
  },
  {
    text: 'Tu P. Heel Pain: Diagnosis and Management. American Family Physician. 2018;97(2):86–93.',
    pmid: '29365222',
  },
  {
    text: 'Wiegerinck JI, Zwiers R, Sierevelt IN, van Weert HC, van Dijk CN, Struijs PA. Treatment of Calcaneal Apophysitis: Wait and See Versus Orthotic Device Versus Physical Therapy: A Pragmatic Therapeutic Randomized Clinical Trial. Journal of Pediatric Orthopedics. 2016;36(2):152–7.',
    doi: '10.1097/BPO.0000000000000417',
    pmid: '25985369',
  },
  {
    text: 'Yi TI, Lee GE, Seo IS, Huh WS, Yoon TH, Kim BR. Clinical characteristics of the causes of plantar heel pain. Annals of Rehabilitation Medicine. 2011;35(4):507–13.',
    doi: '10.5535/arm.2011.35.4.507',
    pmid: '22506166',
  },
  {
    text: 'Yuen WLP, Tan PT, Kon KKC. Surgical Treatment of Haglund\'s Deformity: A Systematic Review and Meta-Analysis. Cureus. 2022;14(7):e27500.',
    doi: '10.7759/cureus.27500',
    pmid: '36060327',
  },
  {
    text: 'Ehrmann C, Maier M, Mengiardi B, Pfirrmann CW, Sutter R. Calcaneal attachment of the plantar fascia: MR findings in asymptomatic volunteers. Radiology. 2014;272(3):807–814.',
    doi: '10.1148/radiol.14131410',
    pmid: '24814176',
  },
  {
    text: 'Tedeschi R. Baxter\'s nerve: the hidden culprit of chronic heel pain. Neurological Sciences. 2025;46(9):4685–4689.',
    doi: '10.1007/s10072-025-08253-0',
    pmid: '40418415',
  },
  {
    text: 'Micheli LJ, Ireland ML. Prevention and management of calcaneal apophysitis in children: an overuse syndrome. Journal of Pediatric Orthopedics. 1987;7(1):34–8.',
    doi: '10.1097/01241398-198701000-00007',
    pmid: '3793908',
  },
  {
    text: 'Nieto-Gil P, Marco-Lledó J, García-Campos J, Ruiz-Muñoz M, Gijon-Nogueron G, Ramos-Petersen L. Risk factors and associated factors for calcaneal apophysitis (Sever\'s disease): a systematic review. BMJ Open. 2023;13(6):e064903.',
    doi: '10.1136/bmjopen-2022-064903',
    pmid: '37280033',
  },
  {
    text: 'Burns J, Crosbie J, Hunt A, Ouvrier R. The effect of pes cavus on foot pain and plantar pressure. Clinical Biomechanics (Bristol, Avon). 2005;20(9):877–82.',
    doi: '10.1016/j.clinbiomech.2005.03.006',
    pmid: '15882916',
  },
  {
    text: 'Burns J, Landorf KB, Ryan MM, Crosbie J, Ouvrier RA. Interventions for the prevention and treatment of pes cavus. The Cochrane Database of Systematic Reviews. 2007;2007(4):CD006154.',
    doi: '10.1002/14651858.CD006154.pub2',
    pmid: '17943889',
  },
  {
    text: 'Yammine K. The sesamoids of the feet in humans: a systematic review and meta-analysis. Anatomical Science International. 2015;90(3):144–60.',
    doi: '10.1007/s12565-014-0239-9',
    pmid: '24801385',
  },
];

/** Readable names for the indices, so a guide says `CITE.rathleff` rather than `0`. */
export const CITE = {
  rathleff: 0,
  brijwasi: 1,
  cheng: 2,
  guideline: 3,
  alfredson: 4,
  silbernagel: 5,
  beyer: 6,
  achillesGuideline: 7,
  mtssReview: 8,
  fatPadReview: 9,
  posteriorTibialReview: 10,
  buist: 11,
  nielsen: 12,
  malisoux: 13,
  latt: 14,
  menz: 15,
  ling: 16,
  waters: 17,
  riddle: 18,
  garcia: 19,
  patelGastrocnemius: 20,
  hebertLosier: 21,
  jonsson: 22,
  vanDerVlist: 23,
  winters: 24,
  moen: 25,
  newman: 26,
  hamstraWright: 27,
  madeley: 28,
  patelStressFracture: 29,
  hansen: 30,
  amaha: 31,
  reedNurse: 32,
  tojo: 33,
  stoltNurse: 34,
  buckley: 35,
  karakolis: 36,
  coenen: 37,
  changCho: 38,
  silbernagelHeelRise: 39,
  siriphorn: 40,
  digiovanni2003: 41,
  digiovanni2006: 42,
  springer: 43,
  bellows: 44,
  salinasTorres: 45,
  mcKeon: 46,
  gooding: 47,
  kulig: 48,
  lynn: 49,
  jung: 50,
  zarali: 51,
  lunsfordPerry: 52,
  abdalbary: 53,
  bizSesamoiditis: 54,
  burnsCavus: 55,
  chooRearfoot: 56,
  formosa: 57,
  houckPTTD: 58,
  jamesSever: 59,
  kimHV: 60,
  kuligEccentric: 61,
  kuligRCT: 62,
  kulunkoglu: 63,
  malhotra: 64,
  matthewsCochrane: 65,
  matthewsSR: 66,
  menzCoexistence: 67,
  menzSpur: 68,
  perhamreHeelCup: 69,
  tehraninasr: 70,
  tuHeelPain: 71,
  wiegerinck: 72,
  yiFatPad: 73,
  yuenHaglund: 74,
  ehrmannSpur: 75,
  tedeschiBaxter: 76,
  micheliSever: 77,
  nietoGilSever: 78,
  burnsCavusPain: 79,
  burnsCavusCochrane: 80,
  yammineSesamoid: 81,
} as const;

/** Where a citation resolves: the DOI when there is one, else PubMed. */
export function citationUrl(citation: Citation): string | undefined {
  if (citation.doi) return `https://doi.org/${citation.doi}`;
  if (citation.pmid) return `https://pubmed.ncbi.nlm.nih.gov/${citation.pmid}/`;
  return undefined;
}

/** schema.org `ScholarlyArticle` for a citation, for Article `citation`. */
export function citationSchema(citation: Citation) {
  const url = citationUrl(citation);
  return {
    '@type': 'ScholarlyArticle',
    name: citation.text,
    ...(url ? { url } : {}),
    ...(citation.doi ? { identifier: `https://doi.org/${citation.doi}` } : {}),
    ...(citation.pmid ? { sameAs: `https://pubmed.ncbi.nlm.nih.gov/${citation.pmid}/` } : {}),
  };
}
