import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/plantar-fasciitis-menopause.ts (2026-10-19),
 * written around «fascite plantare menopausa», «dolore al tallone in
 * menopausa». Informal «tu». Figures, grades, doses, hedges and CITE keys
 * are identical to the English page after its fact-check. Same media ids.
 * HRT is «terapia ormonale sostitutiva (TOS)»; "patient-years" is
 * «anni-paziente». Exercise names follow it.ts. "Clinician" is
 * «professionista sanitario».
 */

export const PF_MENOPAUSE_IT: Guide = {
  lang: 'it',
  page: 'pfMenopause',
  mainSource: CITE.rasenbergIncidence,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fascite plantare e menopausa: perché il tallone fa male',
  description:
    'La fascite plantare raggiunge il picco nelle donne intorno ai 50 anni, circa il doppio che negli uomini. Cosa si sa su menopausa e tallone e cosa aiuta.',
  h1: 'Fascite plantare e menopausa: perché il dolore al tallone inizia spesso tra i 40 e i 60 anni',
  lede:
    'La fascite plantare è più comune nelle donne intorno all’età della menopausa: nei dati dei medici di famiglia olandesi, i nuovi casi nelle donne raggiungevano il picco di 11,23 ogni 1000\u00A0anni-paziente a 50\u00A0anni, contro un picco di 5,54 negli uomini a 55\u00A0anni (Rasenberg e colleghi, 2019). Se a causarla sia il calo degli ormoni non si sa. Il legame è plausibile, ma nessuno studio lo ha dimostrato (Douglas-Harris e colleghi, 2026). Quello che aiuta è lo stesso che a qualsiasi età: gli allungamenti della fascia plantare e del polpaccio, con **grado A** nella linea guida del 2023 sul dolore al tallone, e il lavoro di forza sul polpaccio, con **grado B** (Koc e colleghi, 2023).',
  intro: [
    'Se il tallone ha iniziato a farti male tra i 40 e i 60 anni, fai parte del gruppo colpito più spesso, e non è colpa di qualcosa che hai sbagliato. Questa pagina parla dei numeri per età e sesso, di cosa dice e non dice la ricerca su ormoni e fascia plantare, degli altri cambiamenti della mezza età che caricano il tallone, degli esercizi con le prove migliori, di cosa si sa sulla terapia ormonale sostitutiva e di quando rivolgerti a un professionista sanitario.',
  ],
  takeaways: [
    'Nei dati di circa 1,9\u00A0milioni di pazienti olandesi, i nuovi casi di dolore al tallone nelle donne raggiungevano il picco di 11,23 ogni 1000\u00A0anni-paziente a 50\u00A0anni. Negli uomini il picco era 5,54, a 55\u00A0anni. Il 62% dei 18.004\u00A0casi riguardava donne (Rasenberg e colleghi, 2019).',
    'La linea guida del 2023 sul dolore al tallone dice che la fascite plantare è più comune tra i 40 e i 60\u00A0anni, e indica la corsa e i lavori con molto tempo in piedi come fattori di rischio (Koc e colleghi, 2023).',
    'Un legame tra menopausa e dolore al tallone è plausibile ma non dimostrato: nessuno studio ha misurato la fascia plantare nel corso della menopausa, e in uno studio con focus group del 2026 il 76% delle 17\u00A0donne non aveva collegato le due cose (Douglas-Harris e colleghi, 2026).',
    'Nessuno studio clinico ha testato la terapia ormonale sostitutiva per la fascite plantare. Se la TOS fa per te dipende dai tuoi sintomi della menopausa e dalla tua storia clinica, ed è una decisione da prendere con il tuo medico.',
    'Gli allungamenti della fascia plantare e del polpaccio (**grado A**) e il lavoro di forza sul polpaccio (**grado B**) sono gli esercizi con il grado migliore, a qualsiasi età (Koc e colleghi, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'La fascite plantare è più comune intorno alla menopausa?',
      keyFact: 'I nuovi casi di dolore sotto il tallone raggiungevano il picco di 11,23 ogni 1000\u00A0anni-paziente nelle donne a 50\u00A0anni, contro 5,54 negli uomini a 55\u00A0anni (Rasenberg e colleghi, 2019).',
      paragraphs: [
        '**Sì, i tempi coincidono.** Uno studio olandese ha analizzato le cartelle dei medici di famiglia di circa 1,9\u00A0milioni di pazienti dal 2013 al 2016 e ha trovato 18.004 nuovi casi di dolore plantare al tallone, il termine ombrello che comprende la fascite plantare. Il 62% riguardava donne. Nel complesso, le donne avevano 4,64 nuovi casi ogni 1000\u00A0anni-paziente e gli uomini 2,98 (Rasenberg e colleghi, 2019).',
        'L’andamento per età è la parte più evidente. Nelle donne, i nuovi casi raggiungevano il picco di **11,23 ogni 1000\u00A0anni-paziente a 50\u00A0anni**. Negli uomini il picco era più basso e più tardivo: 5,54 a 55\u00A0anni (Rasenberg e colleghi, 2019). L’età media della menopausa nel Regno Unito è 51\u00A0anni, ed è per questo che i ricercatori hanno iniziato a chiedersi se le due cose siano collegate (Douglas-Harris e colleghi, 2026).',
        'La linea guida del 2023 sul dolore al tallone dice che la fascite plantare è più comune tra i 40 e i 60\u00A0anni (Koc e colleghi, 2023). Le donne tendono anche a tenerla più a lungo: in un follow-up da 5 a 15\u00A0anni di 174\u00A0persone, il rischio di avere ancora la fascite plantare era più alto nelle donne e in chi aveva dolore a entrambi i talloni (Hansen e colleghi, 2018).',
      ],
      table: {
        caption: 'Picco dei nuovi casi di dolore plantare al tallone, medicina di base olandese (Rasenberg e colleghi, 2019)',
        head: ['', 'Donne', 'Uomini'],
        rows: [
          ['Età del picco', '50', '55'],
          ['Picco ogni 1000 anni-paziente', '11,23', '5,54'],
          ['Tasso a tutte le età', '4,64', '2,98'],
        ],
      },
      after: [
        'Questi numeri vengono da persone che sono andate dal medico di famiglia, quindi contano il dolore al tallone che dava abbastanza fastidio da prenotare una visita. Mostrano quando il dolore al tallone è più comune. Non mostrano perché.',
      ],
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'La menopausa causa la fascite plantare?',
      keyFact: 'Delle 17\u00A0donne con dolore al tallone in perimenopausa o postmenopausa, il 76% non lo aveva collegato alla menopausa, e la maggior parte ha detto che il tema non era stato sollevato quando aveva chiesto aiuto (Douglas-Harris e colleghi, 2026).',
      paragraphs: [
        '**Nessuno lo sa ancora.** Gli autori di uno studio del 2026 dedicato a menopausa e dolore al tallone scrivono che non è certo che esista un rapporto di causa (Douglas-Harris e colleghi, 2026). Quello studio era una serie di focus group con 17\u00A0donne, non una misurazione di ormoni o del tessuto del tallone. Molti siti presentano il legame come un fatto. Le prove per ora non lo sostengono.',
        'Ecco cosa si sa e cosa no:',
      ],
      table: {
        head: ['Domanda', 'Cosa mostrano gli studi'],
        rows: [
          ['Il dolore al tallone è più comune nelle donne intorno ai 50 anni?', '**Si sa.** Picco a 50 anni nelle donne (Rasenberg, 2019)'],
          ['Gli ormoni sessuali influiscono sulla fascia plantare?', '**Qualche segnale.** Si allenta intorno all’ovulazione nelle giovani donne (Lee, 2018)'],
          ['La fascia plantare cambia in menopausa?', '**Non si sa.** Nessuno studio l’ha misurata'],
          ['Meno estrogeni causano dolore al tallone?', '**Non si sa.** Plausibile, non dimostrato'],
          ['La TOS allevia il dolore al tallone?', '**Non si sa.** Nessuno studio l’ha testata'],
        ],
      },
      after: [
        'L’ipotesi ormonale è ragionevole. In 15\u00A0giovani donne, la fascia plantare era più lassa intorno all’ovulazione che durante il ciclo, e l’equilibrio era un po’ meno stabile (Lee e Petrofsky, 2018). Una revisione di studi di laboratorio suggerisce che gli estrogeni possano rendere i tendini meno rigidi, un effetto che l’allenamento potrebbe modificare (Hansen e Kjaer, 2014). E il dolore muscoloscheletrico in generale è comune nella transizione menopausale: una revisione di 16\u00A0studi ha trovato che lo riferiva il 71% delle donne in perimenopausa (Lu e colleghi, 2020).',
        'Ma nessuno di questi studi ha esaminato la fascite plantare in donne in menopausa. Alla stessa età succedono molti cambiamenti, e questo rende difficile separare gli ormoni da tutto il resto. La sezione successiva parla di questi altri cambiamenti, perché su alcuni puoi lavorare.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.rasenbergIncidence, CITE.leePetrofskyFascia, CITE.hansenKjaerEstrogen, CITE.luMenopausePain],
    },
    {
      h2: 'Cos’altro cambia tra i 40 e i 60 anni che può affaticare il tallone?',
      keyFact: 'In uno studio caso-controllo, una caviglia rigida si accompagnava a una probabilità di fascite plantare 23,3\u00A0volte maggiore, e passare in piedi la maggior parte della giornata di lavoro a una probabilità 3,6\u00A0volte maggiore (Riddle e colleghi, 2003).',
      paragraphs: [
        'La fascite plantare di solito inizia quando il carico sul tallone supera quello che riesce a reggere e da cui riesce a recuperare. Diverse cose che cambiano spesso nella mezza età aumentano quel carico:',
        {
          list: [
            '**Il peso.** In una revisione di 51\u00A0studi, un BMI sopra 27 si accompagnava a una probabilità di fascite plantare 3,7\u00A0volte maggiore, e il legame era più forte in chi non è un atleta (van Leeuwen e colleghi, 2016). Il peso cambia spesso nella mezza età; [peso e fascite plantare](/it/peso-e-fascite-plantare/) spiega cosa si sa.',
            '**Polpacci e caviglie più rigidi.** In uno studio su 50\u00A0persone con fascite plantare e 100 senza, una caviglia rigida era il fattore più forte tra quelli misurati, con una probabilità 23,3\u00A0volte maggiore (Riddle e colleghi, 2003). In 100\u00A0adulti senza problemi ai piedi, le persone intorno agli 80\u00A0anni avevano caviglie più rigide, piedi più piatti e muscoli delle dita più deboli rispetto a quelle intorno ai 20 (Scott e colleghi, 2007).',
            '**Un cuscinetto del tallone che cede meno.** In uno studio radiografico su 70\u00A0persone con dolore al tallone e 200 senza, il cuscinetto del tallone perdeva elasticità con l’età, e ne aveva persa di più in chi aveva dolore al tallone (Prichasuk, 1994). Un cuscinetto adiposo assottigliato causa un suo tipo di dolore al tallone, spiegato in [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/).',
            '**Un cambiamento nell’attività.** Iniziare un nuovo programma di cammino o di corsa, un nuovo lavoro in piedi o un aumento improvviso dell’esercizio possono aggiungere carico in fretta. Una revisione del 2026 elenca gli aumenti rapidi dell’attività fisica tra le cose che alzano il rischio di lesioni da sovraccarico come la fascite plantare nelle donne di mezza età (Ansari e colleghi, 2026).',
          ],
        },
        'Contano anche le molte ore in piedi: passare in piedi la maggior parte della giornata di lavoro si accompagnava a una probabilità 3,6\u00A0volte maggiore nello stesso studio caso-controllo (Riddle e colleghi, 2003). Con l’età anche i piedi tendono ad appiattirsi un po’; vedi [il piede piatto peggiora con l’età?](/it/piede-piatto-con-l-eta/).',
      ],
      cites: [CITE.vanLeeuwenBmi, CITE.riddle, CITE.scottAgeFoot, CITE.prichasukHeelPad, CITE.ansariMenopause, CITE.fatPadReview],
    },
    {
      h2: 'Quali esercizi aiutano la fascite plantare in menopausa?',
      paragraphs: [
        'Nessuno studio sugli esercizi ha esaminato solo donne in menopausa, quindi la guida migliore è la linea guida sul dolore al tallone per gli adulti in generale. Gli allungamenti della fascia plantare e del polpaccio hanno il grado più alto della linea guida, **A**, e il lavoro di forza sul polpaccio ha una **B** (Koc e colleghi, 2023). Sono le stesse dosi di partenza della guida principale agli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
        'Fai il primo allungamento della fascia plantare seduta sul bordo del letto, prima di alzarti: in uno studio su 82\u00A0persone, allungare prima dei primi passi ha alleviato il dolore del mattino più del solo allungamento del polpaccio (DiGiovanni e colleghi, 2003). In uno studio su 48\u00A0persone, i sollevamenti sulle punte lenti con un asciugamano sotto le dita hanno alleviato il dolore più in fretta dei soli allungamenti a tre mesi, e a dodici mesi i due gruppi erano pari (Rathleff e colleghi, 2015). Se un esercizio porta il dolore al tallone a 6 su 10, fermati per quel giorno.',
        'Nella mezza età il lavoro di forza ha un secondo motivo. La massa muscolare e l’equilibrio tendono a calare dopo la menopausa (Douglas-Harris e colleghi, 2026), e l’allenamento contro resistenza è uno dei passi non ormonali che una revisione del 2026 definisce poco usati (Ansari e colleghi, 2026). Sollevamenti sulle punte ed esercizi di equilibrio sono un inizio piccolo e pratico. [Sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) approfondisce il protocollo dei sollevamenti.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutti i giorni in cui ti alleni',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Fai il primo sul bordo del letto, prima che il piede tocchi il pavimento. Se accavallare la gamba è difficile, passa un asciugamano intorno all’avampiede e tira con delicatezza.',
          stop: 'Dolore acuto al tallone, o un dolore che arriva a 6 su 10',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Allungamento del polpaccio',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutti i giorni in cui ti alleni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti.',
          stop: 'Dolore al polpaccio che resta dopo che hai smesso',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutti i giorni in cui ti alleni',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione al muro, tieni il tallone dietro ben appoggiato a terra e piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          stop: 'Dolore al polpaccio che resta dopo che hai smesso',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo passo non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: '3\u00A0giorni a settimana, mai due di fila',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, il muscolo più profondo del polpaccio. È un primo passo delicato prima dei sollevamenti in piedi.',
          stop: 'Dolore al tallone che arriva a 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte con asciugamano',
          evidence: { level: 'moderate', why: 'È la routine di uno studio su 48\u00A0persone, e la linea guida del 2023 dà al lavoro di forza il grado B.' },
          dose: '4\u00A0serie da 10, ogni gamba, con peso aggiunto',
          often: 'Giorni di forza',
          feel: 'Lavoro intenso nel polpaccio',
          how: 'Stai su un piede su un gradino, con un asciugamano arrotolato sotto le dita. Prendi tre secondi per salire, tieni due secondi in alto e prendi tre secondi per scendere. A questo livello Walkito aggiunge peso, per esempio uno zaino. È l’asciugamano che fa lavorare la fascia plantare e non solo il polpaccio. Tieniti a un corrimano o al muro per l’equilibrio.',
          stop: 'Dolore al tallone che arriva a 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte con asciugamano',
          media: 'heel_raise_towel',
          caption: 'Sollevamenti sulle punte con asciugamano: tre secondi su, due in alto, tre giù',
          alt: 'Una figura che sale sulle punte su un gradino con un asciugamano arrotolato, con i polpacci evidenziati',
        },
        {
          name: 'Equilibrio su una gamba',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. Non faceva parte dei programmi testati per il dolore al tallone.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, ogni gamba',
          often: 'Giorni di equilibrio',
          feel: 'Piccole correzioni nel piede e nella caviglia',
          how: 'Stai su un piede accanto a un piano di lavoro e guarda un punto fisso. Lascia che il piede oscilli. Deve farlo, perché quell’oscillazione è il piede che tiene l’equilibrio. Se ti serve, sfiora il piano con la punta delle dita.',
          stop: 'Dolore al tallone che arriva a 6 su 10, o se non ti senti sicura',
          image: 'Esercizio: equilibrio su una gamba',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: stai su un piede e lascialo fare piccole correzioni',
          alt: 'Una figura in equilibrio su una gamba, con i muscoli della parte bassa della gamba evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff, CITE.douglasHarrisMenopause, CITE.ansariMenopause],
    },
    {
      h2: 'La terapia ormonale sostitutiva aiuta la fascite plantare?',
      keyFact: 'In 85\u00A0donne dopo la menopausa, quelle attive in terapia ormonale sostitutiva avevano tendini d’Achille più sottili delle donne attive senza terapia, senza un effetto chiaro nelle donne non attive (Cook e colleghi, 2007). Né questo né altri studi hanno misurato il dolore al tallone.',
      paragraphs: [
        '**Non esiste uno studio clinico sulla terapia ormonale sostitutiva per la fascite plantare, quindi nessuno può dire se aiuti.** Lo abbiamo cercato e non ne abbiamo trovati. La TOS, chiamata anche terapia ormonale della menopausa, si usa per i sintomi della menopausa. Non è una cura riconosciuta per il dolore al tallone.',
        'Quello che esiste è indiretto. Nei focus group del 2026, alcune donne hanno detto di aver notato meno dolori ai piedi con la TOS (Douglas-Harris e colleghi, 2026). È il racconto di poche persone, non un risultato misurato. Due piccoli studi sul tendine d’Achille hanno trovato che le donne attive in TOS avevano tendini più piccoli delle donne attive senza: uno su 85\u00A0donne (Cook e colleghi, 2007) e uno su 14\u00A0coppie di gemelle identiche, in cui la differenza compariva solo nelle 5\u00A0coppie fisicamente attive (Finni e colleghi, 2009). La dimensione del tendine non è il dolore, e l’Achille non è la fascia plantare.',
        'Una revisione del 2026 nota che la TOS non va bene per tutte, per via delle controindicazioni e dell’equilibrio tra rischi e benefici di ogni persona (Ansari e colleghi, 2026). Se prenderla dipende dai tuoi sintomi della menopausa e dalla tua storia clinica. **È una decisione da prendere con il tuo medico.** Qualunque cosa tu decida, gli allungamenti e il lavoro di forza di questa pagina restano validi.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles, CITE.finniHrtTwins, CITE.ansariMenopause],
    },
    {
      h2: 'Quanto dura la fascite plantare nella mezza età?',
      paragraphs: [
        'Circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche come allungamenti e plantari, anche se spesso servono da 3 a 6\u00A0mesi (Latt e colleghi, 2020). Nessuno studio ha esaminato il recupero in modo specifico nelle donne in menopausa.',
        'Per alcune persone dura di più. In un follow-up di 174\u00A0persone, il 54% non aveva sintomi al controllo, in media circa 9\u00A0anni dopo la diagnosi, e il rischio di averla ancora era più alto nelle donne e in chi aveva dolore a entrambi i talloni (Hansen e colleghi, 2018). È un motivo per iniziare presto gli esercizi e continuarli, non un motivo per aspettarsi il peggio. [Quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/) ha i tempi completi.',
        'Se nella mezza età stai aumentando l’attività, per la salute o per il peso, aumenta un passo alla volta invece di fermarti: la linea guida nota che la fascite plantare di solito inizia dopo un cambiamento dell’attività in piedi (Koc e colleghi, 2023). [Camminare con la fascite plantare](/it/camminare-con-fascite-plantare/) spiega come aumentare di nuovo il cammino un passo alla volta.',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.guideline],
    },
    {
      h2: 'Quando il dolore al tallone o al piede nella mezza età è qualcos’altro?',
      paragraphs: [
        'Un dolore sotto il tallone peggiore ai primi passi del mattino che si attenua camminando è il quadro tipico della fascite plantare. Altri quadri fanno pensare ad altro:',
        {
          list: [
            '**Un dolore profondo, simile a un livido, al centro del tallone, peggiore a piedi nudi su pavimenti duri:** forse il cuscinetto adiposo. Vedi [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/).',
            '**Un arco che si abbassa lentamente da un lato, con dolore o gonfiore alla caviglia interna:** forse il tendine tibiale posteriore. In un’indagine su 582\u00A0donne sopra i 40\u00A0anni, il 3,3% aveva i primi segni di questo problema e a nessuna era stato diagnosticato (Kohls-Gatzoulis e colleghi, 2009). Vale la pena farlo controllare presto.',
            '**Un dolore che cresce con l’attività e fa male quando stringi i lati del tallone:** forse una frattura da stress. Vedi [fascite plantare o frattura da stress](/it/fascite-plantare-o-frattura-da-stress/).',
            '**Bruciore, formicolio o intorpidimento, o dolore di notte:** più probabilmente un problema a un nervo. Vedi [dolore al tallone di notte](/it/dolore-tallone-di-notte/).',
            '**Entrambi i talloni doloranti insieme ad articolazioni rigide e gonfie in altre parti del corpo:** vale la pena verificare una malattia infiammatoria delle articolazioni.',
          ],
        },
        'Se prendi un inibitore dell’aromatasi dopo un tumore al seno, un nuovo dolore alle articolazioni, ai muscoli o ai piedi è qualcosa da segnalare all’équipe che te lo prescrive. Una revisione del 2026 elenca l’uso di inibitori dell’aromatasi tra i fattori che aumentano il rischio di lesioni da sovraccarico nella mezza età (Ansari e colleghi, 2026).',
      ],
      cites: [CITE.kohlsGatzoulisPrevalence, CITE.ansariMenopause],
    },
  ],
  faq: [
    {
      q: 'La menopausa può causare la fascite plantare?',
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause],
      a: 'Potrebbe contribuire, ma nessuno studio l’ha dimostrato. Il dolore sotto il tallone è più comune nelle donne intorno ai 50\u00A0anni, quando di solito arriva la menopausa, e in un grande studio il picco nelle donne era circa il doppio di quello negli uomini. I ricercatori definiscono incerto un legame di causa, e nessuno studio ha misurato la fascia plantare nel corso della menopausa.',
    },
    {
      q: 'Perché la fascite plantare ha un picco nelle donne intorno ai 50 anni?',
      cites: [CITE.rasenbergIncidence, CITE.guideline, CITE.vanLeeuwenBmi, CITE.riddle],
      a: 'Nessuno lo sa con certezza. Nei dati olandesi, i nuovi casi nelle donne raggiungevano il picco di 11,23 ogni 1000\u00A0anni-paziente a 50\u00A0anni. I cambiamenti ormonali possono avere un ruolo, ma anche cose che cambiano spesso alla stessa età: il peso, polpacci e caviglie più rigidi, un cuscinetto del tallone meno elastico e un’attività nuova o più intensa.',
    },
    {
      q: 'La perimenopausa può causare dolore al tallone?',
      cites: [CITE.luMenopausePain, CITE.douglasHarrisMenopause],
      a: 'Forse, ma non è stato dimostrato per il dolore al tallone in particolare. Una revisione di 16\u00A0studi ha trovato che il 71% delle donne in perimenopausa riferisce dolore muscoloscheletrico, più delle donne che non ci sono ancora arrivate. Nessuno studio ha esaminato la fascite plantare in perimenopausa da sola, quindi se il tallone fa male valgono i soliti controlli ed esercizi per il dolore al tallone.',
    },
    {
      q: 'La terapia ormonale sostitutiva aiuta la fascite plantare?',
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles],
      a: 'Non si sa. Nessuno studio clinico ha testato la TOS per la fascite plantare. Alcune donne in uno studio con focus group del 2026 hanno detto di aver notato meno dolori ai piedi con la TOS, e piccoli studi hanno trovato differenze nella dimensione del tendine d’Achille, ma nessuno ha misurato il dolore al tallone. Se la TOS fa per te è una decisione da prendere con il tuo medico, in base ai tuoi sintomi e alla tua salute.',
    },
    {
      q: 'Qual è l’esercizio migliore per la fascite plantare in menopausa?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Gli stessi che a qualsiasi età: gli allungamenti della fascia plantare e del polpaccio, che la linea guida del 2023 sul dolore al tallone classifica con grado A, e il lavoro di forza sul polpaccio, con grado B. I sollevamenti sulle punte lenti con un asciugamano sotto le dita hanno alleviato il dolore più in fretta dei soli allungamenti in uno studio su 48\u00A0persone. Il lavoro di forza sostiene anche muscoli ed equilibrio, che tendono a calare dopo la menopausa.',
    },
    {
      q: 'È fascite plantare o sono solo piedi doloranti per la menopausa?',
      cites: [CITE.guideline],
      a: 'La fascite plantare ha un quadro tipico: dolore sotto il tallone peggiore ai primi passi del mattino o dopo essere stata seduta, che si attenua quando cammini. Dolori diffusi a entrambi i piedi e ad altre articolazioni sono un quadro diverso. Se non sei sicura, o diverse articolazioni sono rigide e gonfie, rivolgiti a un professionista sanitario.',
    },
    {
      q: 'L’aumento di peso in menopausa peggiora la fascite plantare?',
      cites: [CITE.vanLeeuwenBmi, CITE.hansen],
      a: 'Un peso più alto è legato alla fascite plantare. In una revisione di 51\u00A0studi, un BMI sopra 27 si accompagnava a una probabilità 3,7\u00A0volte maggiore, soprattutto in chi non è un atleta. Il peso però è un fattore tra tanti. In un lungo follow-up di 174\u00A0persone, il BMI non permetteva di prevedere chi avesse ancora dolore al tallone anni dopo.',
    },
    {
      q: 'La fascite plantare passa dopo la menopausa?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Nessuno studio ha seguito il dolore al tallone nel corso della menopausa, quindi non c’è un dato. Per la fascite plantare in generale, circa il 90% delle persone migliora con le cure non chirurgiche, spesso in un periodo da 3 a 6\u00A0mesi. In un lungo follow-up, il rischio che durasse era più alto nelle donne e in chi aveva dolore a entrambi i talloni.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo una caduta, un salto o una storta, o non riesci a caricare il peso sul piede',
      'fa male quando stringi i lati del tallone, o il dolore continua a crescere con l’attività (possibile frattura da stress)',
      'un arco si sta abbassando, o la caviglia interna è dolorante o gonfia',
      'il tallone è gonfio, arrossato o caldo, o hai la febbre',
      'il dolore è peggiore di notte o a riposo, o si accompagna a bruciore, formicolio o intorpidimento',
      'fanno male entrambi i talloni insieme ad articolazioni rigide o gonfie in altre parti del corpo',
      'prendi un inibitore dell’aromatasi ed è comparso un nuovo dolore alle articolazioni o ai piedi: dillo all’équipe che te lo prescrive',
      'un polpaccio è dolorante e gonfio (possibile trombosi): fatti vedere in giornata',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede. Non tiene traccia degli ormoni o dei sintomi della menopausa e non dà consigli sulla terapia ormonale sostitutiva. Costruisce un piano con gli allungamenti, il lavoro di forza sul polpaccio e gli esercizi di equilibrio di questa pagina, partendo dalle versioni da seduta nei giorni di dolore.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['heelPain', 'weightPf', 'heelFatPad'],
  crumb: 'Fascite plantare e menopausa',
  campaign: 'guide-plantar-fasciitis-menopause-it',
};
