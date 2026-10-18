import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/hairdressers-foot-pain.ts (2026-10-18), written
 * around «dolore ai piedi parrucchieri», «parrucchiere in piedi tutto il
 * giorno». Informal «tu», plural «parrucchieri» as the general term. Figures,
 * grades, doses, hedges and CITE keys are identical to the English page after
 * its fact-check. Same media ids. Exercise names follow it.ts and the other
 * /it/ pages. Salon terms: chair = «poltrona», station = «postazione», basin =
 * «lavatesta», foils = «meches», stool = «sgabello». "Clinician" is
 * «professionista sanitario» or «medico» where the English is about checks.
 * No /it/ version of foot-pain-identifier or /program/: links removed, words kept.
 */

export const HAIRDRESSERS_IT: Guide = {
  lang: 'it',
  page: 'hairdressers',
  mainSource: CITE.kozakHairdressing,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Parrucchieri e dolore ai piedi: scarpe, tappetini, esercizi',
  description:
    'Perché ai parrucchieri fanno male i piedi a stare fermi alla poltrona, cosa dicono gli studi, scarpe, tappetini, sgabelli ed esercizi tra i clienti.',
  h1: 'Dolore ai piedi nei parrucchieri: cosa aiuta quando stai fermo in piedi tutto il giorno',
  lede:
    'Il dolore ai piedi dei parrucchieri nasce soprattutto dalle ore passate fermi in piedi alla poltrona, non dal camminare, quindi le opzioni con qualche prova a favore puntano proprio sullo stare fermi in piedi: un pavimento o una scarpa ammortizzati, calze a compressione leggera e un minuto di lavoro per il polpaccio tra un cliente e l’altro. In uno studio su 384\u00A0parrucchieri e 384\u00A0persone con altri lavori, il 49,5% dei parrucchieri riferiva dolore al ginocchio o al piede, contro il 38,3% del gruppo di confronto (Mishra e Sarkar, 2021).',
  intro: [
    'Le ricerche sui parrucchieri guardano soprattutto spalle, collo, polsi e schiena. Ai piedi viene dedicata molta meno attenzione, e questa pagina dice dove i dati sono scarsi. Spiega cosa si sa dei piedi e delle gambe dei parrucchieri, quali prove sullo stare in piedi valgono per il lavoro in salone e come inserire gli esercizi nelle pause tra un cliente e l’altro. Per il dolore da stare in piedi in generale, vedi [perché mi fanno male i piedi dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/). Per i turni in cui si cammina molto, vedi [dolore ai piedi per infermieri](/it/dolore-piedi-infermieri/).',
  ],
  toc: true,
  takeaways: [
    'Su 384\u00A0parrucchieri in India, il 49,5% riferiva dolore al ginocchio o al piede negli ultimi 12\u00A0mesi, contro il 38,3% di 384\u00A0persone con altri lavori. Lo studio contava ginocchio e piede insieme (Mishra e Sarkar, 2021).',
    'Una scoping review del 2019 su 44\u00A0studi ne ha trovati solo 5 che riportavano dolore ai piedi nei parrucchieri, con valori dal 10% al 44%. La maggior parte degli studi guardava schiena, collo, spalle e mani, e lo stare in piedi era uno dei fattori di rischio più frequenti (Kozak e colleghi, 2019).',
    'In uno studio randomizzato crossover su 108\u00A0parrucchieri, calze a compressione da 15 a 20\u00A0mmHg riducevano in media del 12% il punteggio di dolore e gonfiore alle gambe e di 19\u00A0mL il volume della parte bassa della gamba (Blazek e colleghi, 2013).',
    'Una revisione del 2018 su 10\u00A0studi ha trovato prove moderate che pavimenti più morbidi e solette ammortizzate riducono fastidio e stanchezza in chi lavora in piedi (Speed e colleghi, 2018).',
    'Un polpaccio rigido era il fattore di rischio più forte per la fascite plantare in uno studio caso-controllo del 2003, con una probabilità 23,3\u00A0volte più alta, e stare in piedi per gran parte della giornata di lavoro la aumentava di 3,6\u00A0volte (Riddle e colleghi, 2003).',
  ],
  sections: [
    {
      h2: 'Quanto è comune il dolore ai piedi nei parrucchieri?',
      keyFact: 'Cinque studi in una scoping review del 2019 riportavano dolore ai piedi nei parrucchieri, dal 10% al 44% (Kozak e colleghi, 2019).',
      paragraphs: [
        '**Il dolore a piedi e gambe è comune nei parrucchieri, ma è studiato molto meno del dolore alle spalle o alla schiena.** Una scoping review del 2019 ha raccolto 44\u00A0studi sui disturbi muscoloscheletrici nel lavoro di parrucchiere. Solo 5 riportavano dolore ai piedi, con valori dal 10% al 44%. La forbice è ampia perché gli studi usavano domande, paesi e periodi di tempo diversi.',
        'Lo studio più ampio con un gruppo di confronto ha interrogato 384\u00A0parrucchieri e 384\u00A0persone con altri lavori in due città indiane. Il dolore al ginocchio o al piede era il disturbo più comune in entrambi i gruppi: il 49,5% dei parrucchieri contro il 38,3% degli altri. Lo studio contava ginocchio e piede come un’unica categoria, quindi non può dire quanta parte riguardasse solo i piedi.',
        'Uno studio britannico su 147\u00A0parrucchieri e 67\u00A0persone con altri lavori ha trovato dolore a gambe o piedi legato al lavoro molto più spesso nei parrucchieri. La probabilità era 31\u00A0volte più alta, ma l’intervallo statistico era molto ampio, da circa 4 a 267\u00A0volte, quindi la vera dimensione della differenza è incerta. In uno studio turco del 2023, dopo la zona lombare, le zone più doloranti erano le gambe sotto il ginocchio: il 36,9% a destra e il 32,5% a sinistra.',
      ],
      sourceNote:
        'Mishra e Sarkar (2021): studio trasversale, 384\u00A0parrucchieri e 384\u00A0controlli, prevalenza a 12\u00A0mesi, ginocchio e piede in un’unica categoria. Bradshaw e colleghi (2011): questionario somministrato da un intervistatore, odds ratio aggiustato 31,0 (IC 95% da 3,8 a 267,4). Ince Parpucu e colleghi (2023): Cornell Musculoskeletal Discomfort Questionnaire, ultima settimana.',
      cites: [CITE.kozakHairdressing, CITE.mishraHairdressers, CITE.bradshawHairdressers, CITE.inceParpucuHairdressers],
    },
    {
      h2: 'Perché stare fermi in piedi fa più male che camminare?',
      paragraphs: [
        'La giornata di un parrucchiere è diversa da quella di un infermiere. Non percorri lunghe distanze. Stai in piedi alla poltrona, ti sposti un poco, ti chini in avanti e torni in piedi. Quando stai fermo in piedi:',
        {
          list: [
            'I muscoli del polpaccio restano nella stessa posizione, quindi smettono di pompare il sangue verso l’alto.',
            'Sangue e liquidi si accumulano nella parte bassa delle gambe e nei piedi, ed è per questo che la sera le scarpe sembrano più strette.',
            'Il cuscinetto del tallone e la fascia plantare, la fascia sotto l’arco, portano un carico costante senza pause.',
          ],
        },
        'Gli studi di laboratorio mostrano quanto in fretta succede. Una revisione del 2017 su 25\u00A0studi di laboratorio ha trovato che i sintomi alla zona lombare diventavano clinicamente rilevanti in media dopo circa 71\u00A0minuti in piedi, e dopo 42\u00A0minuti nelle persone predisposte al dolore da stare in piedi. Un colore o un taglio possono durare di più. Una revisione del 2015 sul lavoro in piedi collegava lo stare in piedi a lungo a dolore lombare e alle gambe, fastidio e stanchezza in molti lavori.',
        'In uno studio del 2023 su parrucchieri turchi, chi riferiva stanchezza alle gambe aveva anche più dolore a ginocchia e gambe e punteggi peggiori per energia e mobilità. **Anche il gonfiore si misura:** in 38\u00A0parrucchieri, la circonferenza della caviglia passava da 21,1\u00A0cm al mattino a 22,1\u00A0cm a fine giornata, senza compressione.',
      ],
      cites: [CITE.coenen, CITE.waters, CITE.inceParpucuHairdressers, CITE.agleHosiery],
    },
    {
      h2: 'La postura alla poltrona conta per i piedi?',
      paragraphs: [
        'Gli studi sulla postura dei parrucchieri guardano la schiena e le braccia, non i piedi. Una scoping review riportava che i parrucchieri spesso si piegano in avanti o ruotano il busto mentre tagliano e lavano i capelli, e che in uno studio di misurazione il taglio teneva la colonna piegata in avanti per il 66% del tempo. Restare chinati a lungo tende a spostare il peso verso la parte anteriore del piede.',
        'Nessuno studio ha misurato come la postura in salone cambi il carico sui piedi dei parrucchieri. Quello che puoi controllare è semplice: alza o abbassa la poltrona del cliente così da non doverti chinare, tieni il peso su entrambi i piedi e cambia posizione ogni pochi minuti. In uno studio di laboratorio con quattro ore in piedi, chi spostava di più il peso riferiva anche più fastidio, quindi spostarsi spesso può essere un segno che il fastidio sta crescendo, e un buon segnale per una breve pausa (Wiggermann e Keyserling, 2013).',
        'Se i piedi fanno male insieme alla schiena, il collegamento vale in entrambe le direzioni. [Piede piatto e mal di schiena](/it/piede-piatto-mal-di-schiena/) spiega cosa dicono le ricerche.',
      ],
      cites: [CITE.kozakHairdressing, CITE.wiggermannMats],
    },
    {
      h2: 'Quali sono le scarpe migliori per i parrucchieri?',
      paragraphs: [
        '**Nessuno studio ha confrontato tipi di scarpe per i parrucchieri.** I consigli sulle scarpe che trovi online vengono da marchi di calzature o da cliniche, non da studi fatti nei saloni. Quello che le ricerche più ampie sullo stare in piedi sostengono è l’ammortizzazione: una revisione del 2018 su 10\u00A0studi ha trovato prove moderate che solette ammortizzate e pavimenti più morbidi riducono fastidio e stanchezza in chi lavora in piedi, e prove limitate che le solette funzionino meglio dei tappetini.',
        'In pratica, cerca:',
        {
          list: [
            'Una suola ammortizzata e un po’ di sostegno all’arco, così tallone e arco non prendono tutto il carico di un pavimento duro.',
            'Una punta chiusa che non stringa le dita. Il dolore tra le dita può essere un [neuroma di Morton](/it/neuroma-di-morton/).',
            'Un tacco basso e stabile. I tacchi alti spostano più peso sulla parte anteriore del piede.',
            'Una suola che fa presa. I pavimenti del salone si bagnano e diventano scivolosi.',
          ],
        },
        'Alcune persone cambiano scarpe a metà di una giornata lunga. Nessuno studio l’ha testato, ma una scarpa diversa distribuisce il carico in modo diverso. Se hai già dolore al tallone o all’arco, i plantari possono rendere la giornata più comoda, ma agiscono sul comfort, non sul polpaccio e sull’arco in sé. [Plantari o esercizi](/it/plantari-o-esercizi/) mette a confronto le due cose.',
      ],
      cites: [CITE.speedCushioning],
    },
    {
      h2: 'I tappetini antifatica aiutano i parrucchieri?',
      keyFact: 'Una revisione del 2018 su 10\u00A0studi ha trovato prove moderate che pavimenti più morbidi e solette ammortizzate riducono fastidio e stanchezza in chi lavora in piedi (Speed e colleghi, 2018).',
      paragraphs: [
        'Un tappetino alla tua postazione è uno dei cambiamenti più semplici con delle prove a favore. In uno studio di laboratorio, alcune persone sono rimaste in piedi per quattro ore su quattro diversi tappetini antifatica e su un pavimento duro. Tre tappetini su quattro riducevano il fastidio rispetto al pavimento duro, ma tra loro non erano molto diversi.',
        'Le prove non sono tutte positive. In un piccolo studio del 1994 su 5\u00A0persone, i tappetini riducevano la fatica muscolare solo nella zona lombare, e solo con il più morbido dei due tappetini. I muscoli delle gambe non mostravano cambiamenti. **Quindi un tappetino aiuta il comfort, ma non sostituisce il movimento e gli allungamenti.**',
        'In salone, metti il tappetino dove stai davvero, dietro la poltrona, e tienilo ben steso così da non inciampare sui bordi. Capelli e acqua possono renderlo scivoloso, quindi spazzalo spesso.',
      ],
      cites: [CITE.speedCushioning, CITE.wiggermannMats, CITE.kimMats],
    },
    {
      h2: 'Meglio usare uno sgabello o una seduta alta?',
      paragraphs: [
        '**Nessuno studio ha verificato se uno sgabello riduca il dolore ai piedi nei parrucchieri.** Stare seduti toglie carico ai piedi, e negli studi in ufficio alternare seduto e in piedi riduceva il fastidio lombare senza calo del rendimento (Karakolis e Callaghan, 2014). È la migliore prova indiretta a favore di un po’ di tempo da seduti.',
        'Lo sgabello ha un rovescio della medaglia. Uno studio tedesco sulla postura, riassunto nella scoping review del 2019, ha trovato che i parrucchieri che usavano uno sgabello con le ruote piegavano di più la zona lombare e alzavano più spesso le mani sopra l’altezza delle spalle. Uno sgabello troppo basso può scambiare il dolore ai piedi con un sovraccarico a schiena e spalle.',
        'Un approccio pratico: usa lo sgabello per i lavori in cui arrivi senza allungarti, come le rifiniture sulla nuca o le meches nelle sezioni basse, e stai in piedi per il resto. Regola lo sgabello abbastanza alto da tenere le braccia sotto il livello delle spalle. Se lavori al lavatesta, siediti quando la postazione lo permette.',
      ],
      cites: [CITE.karakolis, CITE.kozakHairdressing],
    },
    {
      h2: 'Quali esercizi puoi fare tra un cliente e l’altro?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti del polpaccio e della fascia plantare il grado A, il suo grado più alto, e al lavoro di forza il grado B (Koc e colleghi, 2023).',
      paragraphs: [
        'Gli esercizi sono gli stessi usati per la [fascite plantare](/it/fascite-plantare/) e per il dolore da stare in piedi in generale: allungamenti del polpaccio, sollevamenti sulle punte e un allungamento della fascia plantare. Quello che cambia per i parrucchieri è il momento. **Hai brevi pause tra un cliente e l’altro, quindi scegli uno o due esercizi per pausa invece di una routine completa.** Nessuno studio ha testato le pause con esercizi per i piedi dei parrucchieri, quindi le dosi qui vengono dalla guida principale sul dolore al tallone.',
        'Il polpaccio conta più di tutto. In uno studio caso-controllo, un polpaccio rigido aumentava di 23,3\u00A0volte la probabilità di fascite plantare, più di qualsiasi altro fattore. Se un esercizio porta il dolore a 6 su 10 o più, fermati per oggi.',
      ],
      exercises: [
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Appoggia le mani al muro o al retro della tua postazione. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Due tenute per gamba richiedono circa due minuti, quindi stanno in una pausa tra un cliente e l’altro.',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone dietro a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione, tallone dietro a terra, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, è quello che ti tiene dritto quando stai fermo in piedi, e si rilascia solo con il ginocchio piegato.',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo passaggio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai in piedi su entrambi i piedi, sali dritto sopra gli alluci, poi scendi lentamente. Tieniti alla postazione per l’equilibrio. Oltre a costruire forza, fa pompare al polpaccio il sangue verso l’alto, cosa che lo stare fermi in piedi non fa.',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi lentamente',
          alt: 'Una figura in piedi sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo passaggio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Siediti sullo sgabello con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, con un carico quasi nullo sul tallone. Una buona scelta quando i talloni sono già doloranti.',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Oscillazioni della caviglia',
          evidence: { level: 'early', why: 'Lavora sulla flessibilità della caviglia, il fattore di rischio più forte per la fascite plantare in uno studio caso-controllo del 2003. Non è stato testato da solo in uno studio clinico.' },
          dose: '2\u00A0serie da 15, ogni gamba',
          how: 'Un piede avanti e uno indietro, mani al muro. Porta il ginocchio davanti in avanti oltre le dita mentre il tallone resta a terra. Lentamente, circa due secondi per direzione. Muove la caviglia dopo un lungo periodo fermo in piedi.',
          media: 'ankle_rocks',
          caption: 'Oscillazioni della caviglia: il ginocchio va avanti oltre le dita, il tallone resta a terra',
          alt: 'Una figura con un piede avanti e uno indietro porta il ginocchio davanti in avanti oltre le dita, con la caviglia evidenziata',
        },
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare il grado A.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla un piede sul ginocchio opposto. Tira delicatamente le dita indietro finché senti un allungamento lungo l’arco. Fallo in una pausa in cui puoi sederti, e prima dei primi passi del mattino se il tallone fa più male in quel momento.',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira delicatamente le dita indietro finché lo senti nell’arco',
          alt: 'Una figura seduta tira indietro le dita di un piede, con l’arco evidenziato',
        },
      ],
      table: {
        caption: 'Quale esercizio per quale pausa',
        head: ['Pausa', 'Esercizio', 'Dose'],
        rows: [
          ['Mentre agisce il colore', 'Allungamento del polpaccio', '2 x 30 s, ogni gamba'],
          ['Pausa successiva', 'Allungamento del soleo', '2 x 30 s, ogni gamba'],
          ['Cliente al lavatesta', 'Sollevamenti sulle punte', '3 x 10, entrambi i piedi'],
          ['Seduto sullo sgabello', 'Sollevamenti sulle punte da seduto', '3 x 10, entrambi i piedi'],
          ['Prima di un taglio lungo', 'Oscillazioni della caviglia', '2 x 15, ogni gamba'],
          ['Pausa pranzo', 'Allungamento della fascia plantare', '2 x 30 s, ogni piede'],
        ],
      },
      after: [
        'I sollevamenti sulle punte su due piedi e quelli da seduto sono lo stesso lavoro di forza, quindi scegline uno al giorno. Fare forza a giorni alterni lascia al polpaccio il tempo di recuperare.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Le calze a compressione aiutano i parrucchieri?',
      keyFact: 'In uno studio randomizzato crossover su 108\u00A0parrucchieri, calze da 15 a 20\u00A0mmHg riducevano del 12% il punteggio di dolore e gonfiore alle gambe e di 19\u00A0mL il volume della parte bassa della gamba (Blazek e colleghi, 2013).',
      paragraphs: [
        '**Le calze a compressione sono una delle poche cose testate proprio sui parrucchieri.** In uno studio randomizzato crossover svizzero, 108\u00A0parrucchieri hanno portato calze a compressione leggera (da 15 a 20\u00A0mmHg) per un periodo e niente calze per un altro. Con le calze, il punteggio di dolore e sensazione di gonfiore alle gambe scendeva in media del 12%, e il volume della parte bassa della gamba di 19\u00A0mL. Miglioravano anche i punteggi di sonno e umore.',
        'Uno studio brasiliano più piccolo su 38\u00A0parrucchieri ha misurato la caviglia. Senza calze passava da 21,1\u00A0cm al mattino a 22,1\u00A0cm a fine giornata. Con le calze era 21,2\u00A0cm a fine giornata, più o meno come al mattino.',
        'Gli effetti erano modesti, e gli studi misuravano il gonfiore e i sintomi alle gambe, non disturbi del piede come la fascite plantare. Uno studio del 2023 sugli addetti alla sicurezza ha trovato risultati simili per lunghi turni in piedi. **Le calze aiutano con il gonfiore e le gambe pesanti, mentre il polpaccio e l’arco hanno comunque bisogno dei loro esercizi.** Se hai il diabete, una cattiva circolazione o i piedi intorpiditi, chiedi a un medico prima di usare la compressione.',
      ],
      sourceNote:
        'Blazek e colleghi (2013): randomizzato crossover, 108\u00A0parrucchieri, calze a compressione medica da 15 a 20\u00A0mmHg contro nessuna calza, punteggio dei sintomi da 0 a 4 (calo medio 0,22). Agle e colleghi (2020): 38\u00A0parrucchieri senza malattia venosa, circonferenza della caviglia al punto B, mattina e sera, con e senza calze.',
      cites: [CITE.blazekHosiery, CITE.agleHosiery, CITE.garcia],
    },
    {
      h2: 'Potrebbe essere fascite plantare, vene varicose o altro?',
      paragraphs: [
        'Un dolore generale e le gambe pesanti alla fine di una giornata in salone sono comuni e di solito passano durante la notte. Alcuni quadri fanno pensare a qualcosa di più specifico:',
        {
          list: [
            'Un dolore acuto al tallone ai primi passi del mattino o dopo essere stato seduto fa pensare alla [fascite plantare](/it/fascite-plantare/). La routine completa è in [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
            'Bruciore o dolore sotto l’avampiede fa pensare a una [metatarsalgia](/it/metatarsalgia-dolore-pianta-piede/), comune con suole sottili o tacchi.',
            'Un arco che fa male o sembra più basso la sera fa pensare a un [dolore all’arco plantare](/it/dolore-arco-plantare/).',
            'Vene gonfie, tortuose o in rilievo sulle gambe possono essere vene varicose. In un’indagine su 182\u00A0parrucchieri a Taiwan, il 24,2% le aveva, e in chi aveva più di 45\u00A0anni le molte ore al mese passate in piedi erano un fattore di rischio (Chen e Guo, 2014).',
          ],
        },
        'Se non sai bene che dolore sia, un medico può dirtelo con certezza. **Se il dolore cambia, si allarga o non migliora più con il riposo, fallo controllare prima di caricarlo con gli esercizi.**',
      ],
      cites: [CITE.chenVaricose],
    },
  ],
  faq: [
    {
      q: 'Perché ai parrucchieri fanno così male i piedi?',
      a: 'I parrucchieri stanno fermi in piedi nello stesso punto a lungo, e questo carica tallone e arco senza l’effetto pompa del polpaccio che dà la camminata. In uno studio su 384\u00A0parrucchieri, il 49,5% riferiva dolore al ginocchio o al piede in 12\u00A0mesi, contro il 38,3% delle persone con altri lavori. Chinarsi in avanti, pavimenti duri e scarpe senza sostegno aggiungono carico.',
      cites: [CITE.mishraHairdressers, CITE.waters],
    },
    {
      q: 'Quali sono le scarpe migliori per parrucchieri con dolore ai piedi?',
      a: 'Nessuno studio ha confrontato tipi di scarpe per i parrucchieri, quindi non esiste una scarpa migliore dimostrata. Cerca una suola ammortizzata, un po’ di sostegno all’arco, un tacco basso, spazio per le dita e una suola che fa presa. Una revisione del 2018 su 10\u00A0studi ha trovato prove moderate che solette ammortizzate e pavimenti più morbidi riducono il fastidio in chi lavora in piedi.',
      cites: [CITE.speedCushioning],
    },
    {
      q: 'I tappetini antifatica funzionano per i parrucchieri?',
      a: 'Aiutano il comfort. In uno studio di laboratorio con quattro ore in piedi, tre tappetini antifatica su quattro riducevano il fastidio rispetto a un pavimento duro. Un piccolo studio più vecchio ha trovato che i tappetini riducevano la fatica dei muscoli della schiena ma non quella delle gambe. Vale la pena averne uno alla poltrona, ma non sostituisce gli allungamenti e il movimento tra un cliente e l’altro.',
      cites: [CITE.wiggermannMats, CITE.kimMats],
    },
    {
      q: 'I parrucchieri dovrebbero portare calze a compressione?',
      a: 'La compressione leggera è una delle poche opzioni testate sui parrucchieri. In uno studio crossover su 108\u00A0parrucchieri, calze da 15 a 20\u00A0mmHg riducevano del 12% il punteggio di dolore e gonfiore alle gambe e di 19\u00A0mL il volume della parte bassa della gamba. L’effetto era modesto. Se hai il diabete o una cattiva circolazione, chiedi prima a un medico.',
      cites: [CITE.blazekHosiery],
    },
    {
      q: 'Per un parrucchiere è meglio lavorare seduto su uno sgabello?',
      a: 'Stare seduti per una parte della giornata toglie carico ai piedi, ma nessuno studio ha testato gli sgabelli per il dolore ai piedi dei parrucchieri. Uno studio sulla postura ha trovato che chi usava lo sgabello piegava di più la zona lombare e alzava più spesso le mani sopra le spalle. Usa uno sgabello regolato abbastanza alto da tenere le braccia basse, e stai in piedi per il resto.',
      cites: [CITE.kozakHairdressing, CITE.karakolis],
    },
    {
      q: 'Quali allungamenti può fare un parrucchiere tra un cliente e l’altro?',
      a: 'L’allungamento del polpaccio e quello del soleo, 2\u00A0tenute da 30\u00A0secondi per gamba, stanno in una pausa tra un cliente e l’altro. I sollevamenti sulle punte, 3\u00A0serie da 10, rimettono in moto la pompa del polpaccio dopo tanto tempo fermi in piedi. La linea guida del 2023 sul dolore al tallone dà agli allungamenti del polpaccio e della fascia plantare il grado A, il suo grado più alto, per la fascite plantare.',
      cites: [CITE.guideline],
    },
    {
      q: 'Fare il parrucchiere può causare la fascite plantare?',
      a: 'Stare in piedi per gran parte della giornata di lavoro aumentava di 3,6\u00A0volte la probabilità di fascite plantare in uno studio caso-controllo su 50\u00A0casi e 100\u00A0controlli, e un polpaccio rigido la aumentava di 23,3\u00A0volte. Nessuno studio ha misurato la fascite plantare proprio nei parrucchieri, ma il lavoro in salone comporta esattamente questo tipo di stare in piedi a lungo.',
      cites: [CITE.riddle],
    },
    {
      q: 'Quanto può stare in piedi un parrucchiere prima di fare una pausa?',
      a: 'Non esiste un limite testato per i parrucchieri. In una revisione di studi di laboratorio, i sintomi alla zona lombare diventavano clinicamente rilevanti in media dopo circa 71\u00A0minuti in piedi, e dopo 42\u00A0minuti nelle persone predisposte al dolore da stare in piedi. Spezzare i servizi lunghi con un breve allungamento, qualche sollevamento sulle punte o un minuto sullo sgabello è un approccio ragionevole.',
      cites: [CITE.coenen],
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo una caduta, una storta o qualcosa che ti è caduto sul piede',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'il piede è intorpidito, formicola o brucia',
      'una gamba si è gonfiata all’improvviso ed è dolorante, arrossata o calda',
      'il piede è arrossato o caldo, o hai la febbre o ti senti poco bene',
      'il dolore ti sveglia di notte o c’è anche a riposo',
      'hai il diabete, una cattiva circolazione o una sensibilità ridotta ai piedi',
      'il dolore non è migliorato dopo diverse settimane di scarpe migliori, tappetino, pause e gli esercizi di questa pagina',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text:
      'Non devi capire da solo l’ordine, le dosi o quando passare a una versione più difficile. Walkito è un’app di esercizi per tallone e piede che costruisce il tuo piano una settimana alla volta, e le sessioni sono abbastanza brevi da stare prima del lavoro o in una pausa.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone, e il piano si adatta. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['standing', 'nurses', 'standingDesk'],
  crumb: 'Dolore ai piedi nei parrucchieri',
  campaign: 'guide-hairdressers-foot-pain-it',
};
