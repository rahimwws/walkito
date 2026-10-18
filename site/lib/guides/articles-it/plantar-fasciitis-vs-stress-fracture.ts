import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/plantar-fasciitis-vs-stress-fracture.ts
 * (2026-10-18), written around «fascite plantare o frattura da stress»,
 * «frattura da stress calcagno». Informal «tu». Figures, grades, doses,
 * hedges and CITE keys are identical to the English page after its
 * fact-check. Same media ids. The only addition is a km conversion next to
 * the 25 miles (circa 40 km), as in the Spanish version. Link to
 * heel-pain-runners removed (no Italian page), words kept.
 */

export const PF_VS_STRESS_FRACTURE_IT: Guide = {
  lang: 'it',
  page: 'pfVsStressFracture',
  mainSource: CITE.patelStressFracture,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascite plantare o frattura da stress: come distinguerle',
  description:
    'Fascite plantare o frattura da stress del calcagno? Il tipo di dolore, il test della compressione, chi rischia, perché la radiografia sbaglia e cosa fare.',
  h1: 'Fascite plantare o frattura da stress del calcagno: come distinguerle',
  lede:
    'La [fascite plantare](/it/fascite-plantare/) fa più male ai primi passi dopo il riposo e di solito si calma dopo qualche minuto di cammino. Una frattura da stress del calcagno fa il contrario: il dolore cresce più cammini o corri, spesso dopo un aumento brusco dell’attività, e stringere i lati del tallone tende a fare male (Tu, 2018). Una radiografia fatta presto può sembrare normale: in 30\u00A0reclute militari con una lesione da stress del calcagno vista alla risonanza magnetica, la radiografia semplice la mostrava solo nel 15% (Sormaala e colleghi, 2006).',
  intro: [
    'Le due condizioni stanno nello stesso tallone e possono iniziare dopo la stessa cosa: più cammino, più corsa o più ore in piedi. Però richiedono risposte opposte: la fascite plantare risponde bene agli allungamenti e al lavoro di forza, mentre una frattura da stress ha bisogno prima di meno carico. Questa pagina le mette a confronto, spiega cosa può e cosa non può dirti il test della compressione, chi rischia di più una frattura, perché spesso serve una risonanza magnetica e cosa fare mentre aspetti di saperlo.',
  ],
  takeaways: [
    'Il dolore della fascite plantare è «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo» e si attenua camminando (Koc e colleghi, 2023). Il dolore della frattura da stress inizia con l’attività e più avanti può esserci anche a riposo (Tu, 2018).',
    'Il dolore quando si stringono i lati dell’osso del tallone fa pensare a una frattura da stress (Tu, 2018), ma non abbiamo trovato studi che misurino quanto sia accurato il test della compressione per il tallone, ed è doloroso anche nella malattia di Sever nei bambini.',
    'Le radiografie semplici spesso non vedono le fratture da stress all’inizio: una revisione ha stimato la loro sensibilità alla prima visita intorno al 10%, che sale a valori dal 30 al 70% dopo tre settimane (Patel e colleghi, 2011). Nella revisione sistematica del 2016 la risonanza magnetica era l’esame più accurato (Wright e colleghi, 2016).',
    'Un aumento improvviso dell’allenamento è il fattore scatenante classico. Chi corre più di 25\u00A0miglia (circa 40\u00A0km) a settimana in media, le donne e le persone con bassa disponibilità energetica o ossa fragili sono più a rischio (Patel e colleghi, 2011; Mountjoy e colleghi, 2023).',
    'Allungamenti ed esercizi di forza hanno **grado A** e **grado B** per la fascite plantare (Koc e colleghi, 2023). Non sono un piano per una sospetta frattura, che prima ha bisogno di meno carico e di un professionista sanitario.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Come distinguere la fascite plantare da una frattura da stress del calcagno?',
      keyFact: 'Il dolore della frattura da stress del calcagno di solito inizia dopo un aumento delle attività sotto carico o il passaggio a una superficie più dura, compare prima solo con l’attività e più avanti può esserci anche a riposo (Tu, 2018).',
      paragraphs: [
        '**L’indizio più chiaro è cosa succede al dolore quando cammini.** La fascite plantare è peggiore ai primi passi dopo il sonno o dopo essere stato seduto, si calma dopo qualche minuto e può tornare dopo una lunga giornata in piedi (Tu, 2018). La linea guida del 2023 sul dolore al tallone la descrive come un dolore «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo» (Koc e colleghi, 2023).',
        'Una frattura da stress del calcagno è una piccola incrinatura dell’osso del tallone dovuta a un carico ripetuto. Il dolore di solito inizia dopo che hai aumentato cammino, corsa o ore in piedi, o sei passato a una superficie più dura. All’inizio fa male solo durante l’attività e cresce man mano che vai avanti. Più tardi può fare male anche a riposo (Tu, 2018). In una revisione sulle fratture da stress in generale, il dolore camminando era riferito dall’81% dei pazienti, un punto dolente sull’osso dal 65,9 al 100% e il gonfiore dal 18 al 44% (Patel e colleghi, 2011).',
        'La tabella riassume i quadri più comuni. Nessuna riga da sola decide, e alcune persone non rientrano bene in nessuna delle due colonne.',
      ],
      table: {
        caption: 'Quadri tipici, non una diagnosi',
        head: ['', 'Fascite plantare', 'Frattura da stress del calcagno'],
        rows: [
          ['Momento peggiore', 'Primi passi dopo il riposo', 'Durante e dopo l’attività'],
          ['Dopo qualche minuto di cammino', 'Di solito si calma', 'Cresce'],
          ['Dove fa male', 'Sotto il tallone, lato interno', 'In tutto l’osso del tallone, spesso nella metà posteriore'],
          ['Stringendo i lati del tallone', 'Di solito non fa male', 'Spesso fa male'],
          ['Gonfiore', 'Non è un segno tipico', 'A volte'],
          ['Causa tipica', 'Molte ore in piedi, polpacci rigidi', 'Un aumento brusco dell’allenamento o una superficie più dura'],
          ['Radiografia precoce', 'Non serve', 'Spesso normale'],
        ],
      },
      after: [
        'Il dolore che c’è soprattutto di notte o a riposo ha un suo elenco di cause, descritte in [dolore al tallone di notte](/it/dolore-tallone-di-notte/). Il dolore che cresce durante una camminata è spiegato in [dolore al tallone dopo una camminata](/it/dolore-tallone-dopo-camminata/).',
      ],
      sourceNote: 'Sede: in Sormaala 2006, 19 delle 34 lesioni da stress del calcagno erano nella parte posteriore dell’osso, 6 in quella centrale e 9 in quella anteriore. I dati su dolorabilità, dolore camminando e gonfiore di Patel 2011 riguardano le fratture da stress in tutte le sedi, non solo il tallone.',
      cites: [CITE.tuHeelPain, CITE.guideline, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'Cos’è il test della compressione e quanto può dirti?',
      paragraphs: [
        '**Il test della compressione consiste nel premere insieme il lato interno e quello esterno dell’osso del tallone, tra i palmi o tra pollice e dita.** Il professionista lo fa con il piede rilassato. Secondo una revisione del 2018 su American Family Physician, il dolore alla compressione «fa pensare alla diagnosi» di frattura da stress del calcagno (Tu, 2018). La fascite plantare, invece, fa male quando premi sotto la parte interna e anteriore del tallone, dove si attacca la fascia.',
        'I suoi limiti sono reali:',
        {
          list: [
            '**Nessuno ha misurato quanto sia accurato per il tallone.** Non abbiamo trovato studi che dicano quanto spesso il test della compressione è positivo nelle persone con una frattura da stress del calcagno confermata, o quanto spesso è positivo senza frattura. La stessa revisione sulle fratture da stress nota che nemmeno l’hop test, un altro test comune in ambulatorio in cui si saltella su una gamba, è stato validato (Patel e colleghi, 2011).',
            '**Un test negativo non esclude una frattura.** Alcune lesioni da stress del calcagno si trovano verso la parte anteriore o centrale dell’osso: in uno studio con risonanza magnetica, 15 su 34 non erano nella parte posteriore (Sormaala e colleghi, 2006).',
            '**Anche altre cose fanno male alla compressione.** Nei bambini e nei ragazzi, una compressione dolorosa è un segno comune della [malattia di Sever](/it/malattia-di-sever/), un’irritazione della cartilagine di crescita (Tu, 2018). Anche altri problemi dell’osso del tallone possono fare male, quindi serve il controllo di un professionista.',
          ],
        },
        'Se premi i lati del tuo tallone e fa male, prendilo come un motivo per farti controllare, non come una diagnosi. Non saltellare sul piede per provarlo.',
      ],
      cites: [CITE.tuHeelPain, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'Chi rischia di più una frattura da stress del calcagno?',
      keyFact: 'Chi corre per passione più di 25\u00A0miglia (circa 40\u00A0km) a settimana in media ha un rischio maggiore di fratture da stress, e le donne rischiano più degli uomini (Patel e colleghi, 2011).',
      paragraphs: [
        'Una frattura da stress si verifica quando l’osso riceve più carico ripetuto di quanto riesca a riparare. Il rischio sale quando il carico aumenta, quando l’osso è meno capace di reggerlo, o entrambe le cose (Warden e colleghi, 2014).',
        {
          list: [
            '**Un aumento improvviso dell’allenamento.** Un grosso salto in cammino, corsa, marce o ore in piedi, oppure sedute dure ripetute con poco riposo, è la storia classica (Patel e colleghi, 2011). Passare a una superficie più dura su cui camminare è un fattore scatenante comune per il tallone (Tu, 2018).',
            '**Molti chilometri di corsa.** Chi corre per passione più di 25\u00A0miglia (circa 40\u00A0km) a settimana in media è più a rischio, come chi pratica atletica leggera, basket, calcio e danza (Patel e colleghi, 2011).',
            '**Bassa disponibilità energetica.** Mangiare troppo poco rispetto a quanto ti alleni può influire su ormoni e ossa. Il Comitato Olimpico Internazionale elenca la salute ossea compromessa, comprese le lesioni da stress dell’osso, tra gli effetti di questa condizione, chiamata deficit energetico relativo nello sport (REDs), sia nelle donne sia negli uomini (Mountjoy e colleghi, 2023).',
            '**Salute delle ossa.** Le donne con la triade dell’atleta femminile (disturbi alimentari, assenza del ciclo e bassa densità ossea) sono più a rischio, e uno studio ha trovato livelli di vitamina D più bassi nelle reclute con fratture da stress (Patel e colleghi, 2011). Un osso indebolito dall’osteoporosi può incrinarsi sotto carichi normali: si parla di frattura da insufficienza.',
            '**Essere donna.** Le donne rischiano più degli uomini, soprattutto nell’addestramento militare, anche se i dati sulle atlete sono contrastanti (Patel e colleghi, 2011).',
          ],
        },
        'La fascite plantare ha un profilo di rischio diverso. In uno studio su 50\u00A0persone con fascite e 100 senza, chi aveva una flessione della caviglia verso l’alto (dorsiflessione) di 0\u00A0gradi o meno aveva una probabilità 23,3\u00A0volte maggiore rispetto a chi superava i 10\u00A0gradi, e stare in piedi per la maggior parte della giornata di lavoro aumentava la probabilità di 3,6\u00A0volte (Riddle e colleghi, 2003).',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.wardenBSI, CITE.mountjoyREDs, CITE.riddle],
    },
    {
      h2: 'Perché la radiografia può sembrare normale con una frattura da stress?',
      keyFact: 'In 30\u00A0reclute militari con una lesione da stress del calcagno vista alla risonanza magnetica, la lesione era visibile alla radiografia semplice solo nel 15% (Sormaala e colleghi, 2006).',
      paragraphs: [
        '**Una frattura da stress all’inizio è spesso troppo piccola per vedersi in radiografia.** L’osso reagisce prima con un edema al suo interno, che la radiografia non vede. I segni di riparazione compaiono più tardi. Una revisione ha stimato la sensibilità della radiografia alla prima visita intorno al 10%, che sale a valori dal 30 al 70% dopo tre settimane (Patel e colleghi, 2011).',
        'Per il tallone in particolare, uno studio finlandese ha esaminato reclute militari con dolore al tallone o alla caviglia legato all’esercizio che avevano fatto una risonanza magnetica. Su 30\u00A0reclute con lesioni da stress del calcagno, solo il 15% aveva una lesione visibile alle radiografie semplici. In 22 dei 34 talloni lesionati erano coinvolte anche altre ossa del piede vicine (Sormaala e colleghi, 2006).',
        'Una revisione sistematica del 2016 sulle fratture da stress dell’arto inferiore ha trovato una sensibilità della radiografia dal 12 al 56%, contro valori dal 68 al 99% della risonanza magnetica. Gli autori hanno indicato la risonanza come l’esame più sensibile e specifico e hanno avvertito che all’inizio le radiografie danno facilmente falsi negativi (Wright e colleghi, 2016).',
        'Per questo, se sospetta una frattura, il professionista può ripetere la radiografia dopo due o tre settimane oppure passare subito alla risonanza magnetica se serve una risposta rapida (Patel e colleghi, 2011). Per la fascite plantare, la linea guida del 2023 dice che gli esami di imaging «di solito non sono indicati nei pazienti che soddisfano i criteri clinici della fascite plantare finché non falliscono i trattamenti conservativi» (Koc e colleghi, 2023). La pagina sullo [sperone calcaneare](/it/fascite-plantare-o-spina-calcaneare/) spiega perché nemmeno uno sperone visto in radiografia chiude la questione.',
      ],
      sourceNote: 'Wright 2016 ha riunito le fratture da stress dell’arto inferiore, non solo del tallone. Gli intervalli sono la sensibilità più bassa e più alta riportate negli studi inclusi, non stime combinate.',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture, CITE.wrightImaging, CITE.guideline],
    },
    {
      h2: 'Cosa fare mentre aspetti di saperlo?',
      keyFact: 'Modificare l’attività, con poco o nessun carico sul piede per un massimo di sei settimane se il dolore è forte, di solito funziona nelle fratture da stress del calcagno (Tu, 2018).',
      paragraphs: [
        '**Se il tuo dolore corrisponde alla colonna della frattura da stress, togli carico al tallone e prenota una visita.** Non aspettare di vedere se qualche altra corsa lo sistema. Iniziare presto conta: una revisione nota che un ritardo è stato collegato a un ritorno all’attività più lungo (Patel e colleghi, 2011).',
        {
          list: [
            '**Riduci il carico a ciò che non fa male.** Di solito vuol dire smettere per ora di correre, saltare e fare lunghe camminate. Alcune persone hanno bisogno delle stampelle o di un tutore da camminata per un periodo (Patel e colleghi, 2011; Tu, 2018).',
            '**Mantieniti in forma senza caricare il tallone,** per esempio con nuoto o bici, se non fanno male (Patel e colleghi, 2011).',
            '**Chiedi degli antidolorifici.** La stessa revisione dice che gli antinfiammatori vanno usati con cautela in caso di frattura da stress, perché alcuni studi sugli animali suggeriscono che possano rallentare la riparazione dell’osso (Patel e colleghi, 2011).',
            '**Non iniziare ancora un piano di allungamenti o di forza per il tallone.** Aspetta che un professionista abbia escluso una frattura o ti abbia dato il via libera.',
          ],
        },
        'Le fratture da stress del calcagno tendono a risolversi bene nelle persone per il resto in salute (Tu, 2018). Per le fratture da stress in generale, il recupero richiede da quattro settimane a tre mesi o più dal momento in cui si riduce l’attività, che poi si riprende lentamente una volta senza dolore (Patel e colleghi, 2011).',
        'Se invece il tuo dolore corrisponde alla colonna della fascite plantare, di solito non servono esami di imaging per iniziare gli esercizi qui sotto (Koc e colleghi, 2023). Se non sei sicuro di quale colonna ti riguardi, rivolgiti prima a un professionista sanitario.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Perché gli esercizi sono per la fascite plantare e non per una frattura?',
      paragraphs: [
        '**Allungamenti e carico aiutano la fascite plantare perché il tessuto si adatta al carico. Un osso incrinato ha bisogno prima che il carico venga tolto.** Le lesioni da stress dell’osso stanno su una scala: una reazione da stress può evolvere in una frattura da stress e, se il carico continua, in una frattura completa (Warden e colleghi, 2014).',
        'Le prove a favore dell’esercizio riguardano la fascite plantare. La linea guida del 2023 sul dolore al tallone dà agli allungamenti della fascia plantare e del polpaccio un **grado A** e al lavoro di forza un **grado B** per questa condizione (Koc e colleghi, 2023). Il programma di sollevamenti sulle punte dello studio più noto è stato testato su 48\u00A0persone con fascite plantare, non su persone con una frattura (Rathleff e colleghi, 2015).',
        'Per le fratture da stress le prove vanno nella direzione opposta. Due studi randomizzati a grappolo hanno trovato che allungare le gambe durante il riscaldamento non preveniva le fratture da stress (Patel e colleghi, 2011). Quello che conta è ridurre il carico, poi tornare gradualmente all’attività con la guida di un professionista. Una volta superata la frattura, rinforzare i muscoli intorno all’osso diventa parte della prevenzione della successiva (Warden e colleghi, 2014).',
        'Per questo gli esercizi di questa pagina sono solo per la fascite plantare. Se ti hanno detto che hai una frattura da stress, segui invece il piano di ritorno del tuo professionista sanitario.',
      ],
      cites: [CITE.wardenBSI, CITE.guideline, CITE.rathleff, CITE.patelStressFracture],
    },
    {
      h2: 'Solo per la fascite plantare: quali esercizi vanno bene una volta esclusa una frattura?',
      paragraphs: [
        '**Usali solo se il tuo dolore corrisponde alla fascite plantare, o se un professionista ha escluso una frattura.** Se stringere il tallone fa male, il dolore cresce a ogni camminata o il tallone è gonfio, saltali e fatti controllare prima.',
        'Sono i primi passi della nostra guida agli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/): prima gli allungamenti, poi un sollevamento sulle punte da seduto che non carica quasi per niente il tallone. La progressione completa, fino ai sollevamenti sulle punte con asciugamano dello studio, è in quella guida.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare (solo fascite plantare)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto, per la fascite plantare. Non per una sospetta frattura.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Fai il primo sul bordo del letto, prima che il piede tocchi il pavimento.',
          stop: 'Dolore nell’osso del tallone, o un dolore che arriva a 6 su 10',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Allungamento del polpaccio (solo fascite plantare)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto, per la fascite plantare. Non per una sospetta frattura.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Un polpaccio rigido tira sul tallone tutto il giorno, quindi questo allungamento conta anche se lo senti più in alto.',
          stop: 'Dolore nell’osso del tallone, o un dolore che arriva a 6 su 10',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (solo fascite plantare)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto, per la fascite plantare. Non per una sospetta frattura.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione, tieni il tallone dietro ben appoggiato a terra e piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          stop: 'Dolore nell’osso del tallone, o un dolore che arriva a 6 su 10',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto (solo fascite plantare)',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B per la fascite plantare. Questo passo non è stato testato da solo. Non per una sospetta frattura.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: '3\u00A0giorni a settimana, mai due di fila',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, il muscolo più profondo del polpaccio, quasi senza carico sul tallone.',
          stop: 'Dolore al tallone che supera 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Come capisco se il dolore al tallone è una frattura da stress o una fascite plantare?',
      cites: [CITE.tuHeelPain, CITE.guideline],
      a: 'Osserva cosa fa il dolore quando cammini. La fascite plantare fa più male ai primi passi dopo il riposo e si calma dopo qualche minuto. Una frattura da stress del calcagno di solito segue un aumento brusco dell’attività, cresce più a lungo cammini o corri e spesso fa male quando si stringono i lati del tallone. Se il tuo dolore corrisponde al quadro della frattura, rivolgiti a un professionista sanitario.',
    },
    {
      q: 'La radiografia può non vedere una frattura da stress del calcagno?',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture],
      a: 'Sì, spesso. In 30\u00A0reclute militari con una lesione da stress del calcagno vista alla risonanza magnetica, le radiografie semplici la mostravano solo nel 15%. Una revisione ha stimato la sensibilità della radiografia alla prima visita intorno al 10%, che sale a valori dal 30 al 70% dopo tre settimane. Una radiografia normale fatta presto non esclude una frattura da stress.',
    },
    {
      q: 'Serve una risonanza magnetica per il dolore al tallone?',
      cites: [CITE.guideline, CITE.wrightImaging],
      a: 'Non per una fascite plantare tipica: la linea guida del 2023 dice che di solito gli esami di imaging non servono quando la visita è compatibile. Se il professionista sospetta una frattura da stress, la risonanza magnetica è l’esame più accurato. Una revisione sistematica del 2016 ha trovato una sensibilità della risonanza dal 68 al 99%, contro valori dal 12 al 56% delle radiografie semplici.',
    },
    {
      q: 'Cosa significa un test della compressione positivo?',
      cites: [CITE.tuHeelPain],
      a: 'Il dolore quando si premono insieme il lato interno e quello esterno dell’osso del tallone fa pensare a una frattura da stress del calcagno o, nei bambini, alla malattia di Sever. È un motivo per farti vedere da un professionista, non una diagnosi. Non abbiamo trovato studi che misurino quanto sia accurato il test per le fratture da stress del calcagno, quindi una compressione indolore non ne esclude una.',
    },
    {
      q: 'Si può camminare con una frattura da stress del calcagno?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Forse ci riesci, ma di solito non dovresti continuare a caricarla. Il trattamento consiste nel ridurre l’attività a ciò che non fa male e, con un dolore forte, nel caricare poco o niente il piede per un massimo di sei settimane, a volte con stampelle o un tutore. Quanto puoi camminare in sicurezza lo deve stabilire un professionista sanitario.',
    },
    {
      q: 'Quanto ci mette a passare una frattura da stress del calcagno?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'Per le fratture da stress in generale, il recupero richiede da quattro settimane a tre mesi o più dal momento in cui si riduce l’attività. Le fratture da stress del calcagno tendono a risolversi bene nelle persone per il resto in salute. L’attività poi si riprende gradualmente una volta senza dolore. Per i tempi della fascite plantare, vedi [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/).',
    },
    {
      q: 'Devo fare allungamenti se potrei avere una frattura da stress?',
      cites: [CITE.patelStressFracture, CITE.guideline],
      a: 'No, non finché un professionista non l’ha esclusa. Allungamenti e lavoro di forza hanno grado A e grado B per la fascite plantare, ma una sospetta frattura ha bisogno prima di meno carico. Due studi randomizzati a grappolo hanno trovato che allungare le gambe durante il riscaldamento non preveniva le fratture da stress, quindi l’allungamento non è lo strumento giusto per l’osso.',
    },
    {
      q: 'La fascite plantare può diventare una frattura da stress?',
      cites: [CITE.wardenBSI],
      a: 'Nessuno studio mostra una fascite plantare che diventa una frattura. Sono lesioni diverse, una nella fascia e una nell’osso. Possono avere la stessa causa, come un aumento improvviso di cammino o corsa, e una reazione da stress dell’osso può evolvere in frattura se il carico continua. Un dolore che cambia comportamento merita un controllo.',
    },
    {
      q: 'Chi si fa una frattura da stress del calcagno?',
      cites: [CITE.patelStressFracture, CITE.mountjoyREDs],
      a: 'Soprattutto chi all’improvviso si allena di più: runner, reclute militari e atleti. Chi corre più di 25\u00A0miglia (circa 40\u00A0km) a settimana in media è più a rischio, e le donne più degli uomini. La bassa disponibilità energetica, l’assenza del ciclo e la bassa densità ossea aumentano il rischio, e uno studio ha trovato livelli di vitamina D più bassi nelle reclute con fratture da stress.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore al tallone cresce più a lungo cammini o corri invece di calmarsi',
      'stringere i lati dell’osso del tallone fa male',
      'il tallone è gonfio o ha un livido, o un punto dell’osso è molto dolente',
      'il dolore è iniziato dopo un aumento brusco dell’allenamento o il passaggio a una superficie più dura',
      'fa male a riposo o ti sveglia di notte',
      'hai già avuto una frattura da stress, hai saltato il ciclo, hai un disturbo alimentare o una bassa densità ossea',
      'non riesci a caricare tutto il peso sul piede, o il dolore è iniziato dopo una caduta o una storta',
      'senti bruciore, formicolio o intorpidimento al tallone o alla pianta del piede',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per il dolore a tallone e piede. Il suo piano è pensato per il dolore al tallone da fascite plantare, non per una frattura da stress, quindi se il tuo dolore corrisponde al quadro della frattura, rivolgiti a un professionista sanitario prima di iniziare.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['heelPainAtNight', 'hubPlantarFasciitis', 'heelPainAfterWalking'],
  crumb: 'Fascite plantare o frattura da stress',
  campaign: 'guide-plantar-fasciitis-vs-stress-fracture-it',
};
