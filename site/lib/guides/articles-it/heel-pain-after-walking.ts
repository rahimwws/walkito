import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dolore al tallone dopo aver camminato (IT) ─────────────────────────
 *
 * Translated from `articles/heel-pain-after-walking.ts` (2026-10-08),
 * written around the Italian queries «dolore al tallone dopo aver
 * camminato», «male al tallone dopo una camminata», «dolore tallone dopo
 * camminata lunga». Informal «tu». Figures, doses, grades and qualifiers
 * are identical to the English page; exercise names follow
 * `lib/guides/it.ts`. No new citations.
 *
 * Pages that exist only in English keep their English path, marked
 * «(in inglese)».
 */

export const HEEL_PAIN_AFTER_WALKING_IT: Guide = {
  lang: 'it',
  page: 'heelPainAfterWalking',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dolore al tallone dopo aver camminato: cause e rimedi',
  description:
    'Dolore al tallone dopo una camminata o dopo ore in piedi: perché succede, quali problemi lo causano, quando preoccuparsi e gli esercizi che aiutano.',
  h1: 'Dolore al tallone dopo aver camminato: perché il tallone fa male e cosa fare',
  lede:
    'Mentre camminavi il tallone stava bene, ma ora che ti sei fermato fa male. Oppure il dolore è iniziato a metà di una camminata lunga ed è peggiorato a ogni passo. Entrambi gli schemi indicano la stessa cosa: quel giorno i tessuti sotto il tallone hanno ricevuto più carico di quanto potessero reggere. La causa più comune è la fascite plantare, e la risposta più utile è lo stretching insieme a un rinforzo graduale del polpaccio.',
  intro: [
    'Questa pagina parla del dolore al tallone che arriva durante o dopo una camminata. Se il tallone fa più male ai primissimi passi del mattino, quello schema è spiegato in [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/). Se i piedi fanno male dopo ore in piedi fermo nello stesso posto, [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) copre il lato del carico statico. I tre si sovrappongono, ma ognuno ha un punto di vista diverso.',
  ],
  takeaways: [
    'La linea guida del 2023 sul dolore al tallone descrive il dolore della fascite plantare come «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo», ma elenca anche il dolore che peggiora con un’attività prolungata in carico come una caratteristica chiave (Koc e colleghi, 2023).',
    'In uno studio caso-controllo appaiato con 50\u00A0persone con fascite plantare e 100\u00A0controlli, una ridotta dorsiflessione della caviglia (quanto il piede si piega verso lo stinco) era il fattore di rischio indipendente più forte, davanti a un indice di massa corporea sopra 30 e allo stare in piedi per gran parte della giornata lavorativa (Riddle e colleghi, 2003).',
    'La linea guida dà all’allungamento della fascia plantare e del polpaccio il grado più alto, **A**, e al lavoro di forza una **B** (Koc e colleghi, 2023).',
    'Circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche come stretching, lavoro sul polpaccio e gestione del carico (Latt e colleghi, 2020).',
    'Un dolore al tallone dopo aver camminato che cresce a ogni uscita e non passa con il riposo può indicare una frattura da stress invece della fascite plantare. Stringere i lati del tallone è uno dei segni clinici.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Perché il tallone fa male dopo aver camminato?',
      paragraphs: [
        'Camminare carica la fascia plantare, la banda spessa di tessuto sotto il piede, a ogni passo. Ogni volta che il tallone tocca terra e il piede rolla in avanti, la fascia si allunga e assorbe la forza. In un piede sano va bene così. Ma quando la fascia è irritata o il polpaccio è troppo rigido per assorbire la sua parte, il carico si concentra nel punto in cui la fascia si attacca al tallone.',
        'Il risultato è un dolore che cresce durante o dopo una camminata, soprattutto se più lunga del solito. La linea guida del 2023 sul dolore al tallone elenca due schemi tipici della fascite plantare: il dolore ai primi passi dopo il riposo e il dolore che aumenta con un’attività prolungata in carico. Camminare è l’attività prolungata in carico più comune che ci sia.',
        'Un polpaccio rigido è una parte importante del quadro. In uno studio caso-controllo appaiato con 50\u00A0persone con fascite plantare e 100\u00A0controlli, una ridotta dorsiflessione della caviglia aveva l’odds ratio più alto tra tutti i fattori di rischio misurati. Quando la caviglia non si piega abbastanza, ogni passo chiede alla fascia di compensare la differenza.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Il dolore al tallone dopo aver camminato è sempre fascite plantare?',
      paragraphs: [
        'La fascite plantare è la causa più comune, ma non è l’unica. La posizione del dolore e il momento in cui arriva aiutano a distinguerle.',
        '**Assottigliamento del cuscinetto adiposo del tallone.** Il cuscinetto di grasso sotto l’osso del tallone ammortizza ogni passo. Quando si assottiglia o si sposta, l’osso riceve colpi più diretti. Una scoping review del 2022 ha notato che il dolore del cuscinetto adiposo tende a essere un dolore profondo al centro del tallone, peggiore su superfici dure e camminando scalzi (Chang e colleghi, 2022). Il dolore della fascite plantare di solito si trova nella parte interna e anteriore del tallone. Quello del cuscinetto adiposo è proprio sotto il centro. Se camminare scalzo su piastrelle o cemento è chiaramente peggio che camminare con scarpe ammortizzate, vale la pena pensare a un assottigliamento del cuscinetto adiposo. Vedi [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/) per saperne di più.',
        '**Tendinite d’Achille.** Dolore nella parte posteriore del tallone o nel tendine sopra, non sotto il piede. Il tendine d’Achille può far male dopo una camminata lunga, soprattutto in salita. Se il tuo dolore è nella parte posteriore del tallone e non sotto, vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
        '**Frattura da stress del calcagno.** Un dolore che arriva piano piano dopo un aumento improvviso della distanza o dell’intensità delle camminate. A differenza della fascite plantare, il dolore da frattura da stress tende a crescere con l’attività e non passa molto con il riposo. Stringere i lati del tallone può riprodurre il dolore. Se questo corrisponde al tuo schema, rivolgiti a un professionista sanitario prima di allenare il piede.',
        '**Dolore riferito dalla zona lombare o nervo compresso.** Un dolore al tallone che si accompagna a intorpidimento, formicolio o bruciore può indicare un problema ai nervi, non un problema di carico sui tessuti. È un motivo per rivolgerti prima a un professionista sanitario.',
      ],
      cites: [CITE.fatPadReview, CITE.achillesGuideline, CITE.patelStressFracture],
    },
    {
      h2: 'In cosa è diverso dal dolore al tallone al mattino?',
      paragraphs: [
        'Nella maggior parte dei casi, il dolore al tallone al mattino e quello dopo aver camminato sono due facce dello stesso problema. Il dolore del mattino arriva perché la fascia si irrigidisce e si accorcia durante la notte, poi viene allungata di colpo quando ti alzi. Il dolore dopo la camminata arriva perché la fascia è stata caricata più e più volte durante la camminata e il tessuto ti sta dicendo che ne ha avuto abbastanza.',
        'La differenza conta per scegliere quando fare gli esercizi. Il dolore del mattino risponde meglio a un allungamento della fascia plantare fatto prima del primo passo. Il dolore dopo la camminata risponde alla gestione del carico: camminare per una distanza che il piede riesce a reggere, aumentarla poco alla volta e usare stretching e lavoro sul polpaccio per alzare la soglia. [Dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) spiega nel dettaglio gli allungamenti del mattino e i tutori notturni.',
        'Se hai sia dolore al mattino sia dolore dopo aver camminato, è lo schema tipico della fascite plantare. Gli esercizi si sovrappongono. L’allungamento del mattino e gli allungamenti del polpaccio aiutano in entrambi i casi. Il rinforzo del polpaccio aumenta la capacità di tutta la catena, così il carico delle tue camminate quotidiane rientra in quello che i tessuti riescono a reggere.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'In cosa è diverso dal dolore ai piedi dopo essere stato in piedi?',
      paragraphs: [
        'Stare fermi in piedi e camminare sono carichi diversi. Stare in piedi tiene gli stessi tessuti sotto uno sforzo costante e statico, senza la pompa del polpaccio che dà la camminata. Camminare alterna carico e scarico, cosa più facile per le vene e per il cuscinetto adiposo ma più dura per la fascia nel punto in cui si attacca al tallone, per via dell’allungamento ripetuto nella fase di spinta.',
        'Se i piedi fanno male dopo ore in piedi ma stanno bene dopo una camminata, il problema è più probabilmente la fatica da stazione eretta. [Piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) spiega quello schema, comprese le calze a compressione e i tappetini, che qui contano meno. Se il tallone fa male proprio dopo aver camminato ma non dopo essere stato in piedi, il problema di carico è nel punto di attacco della fascia, e gli esercizi per il polpaccio qui sotto sono il punto di partenza.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'Quali esercizi aiutano il dolore al tallone dopo aver camminato?',
      keyFact: 'Una revisione sistematica ha trovato che sia l’allungamento della fascia plantare sia l’allungamento del polpaccio riducevano il dolore nella fascite plantare più di nessuno stretching (Siriphorn e Eksakulkla, 2020).',
      paragraphs: [
        'Gli esercizi sono gli stessi che la linea guida del 2023 raccomanda per la fascite plantare. La linea guida dà allo stretching il grado più alto, **A**, e al lavoro di forza una **B**. Sono raccomandati entrambi. Una revisione sistematica ha trovato che l’allungamento della fascia plantare e quello del polpaccio riducevano entrambi il dolore rispetto a nessuno stretching (Siriphorn e Eksakulkla, 2020).',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'Grado A nella linea guida. È la raccomandazione ripetuta più spesso nella linea guida del 2023.' },
          dose: '10\u00A0tenute da 10\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla una caviglia sull’altro ginocchio. Tira indietro le dita con delicatezza finché senti un allungamento lungo l’arco. Fallo prima di alzarti al mattino, dopo essere stato seduto e dopo una camminata lunga.',
          often: 'Ogni mattina e dopo un’attività prolungata',
          feel: 'Un allungamento lungo l’arco, non un dolore acuto',
          stop: 'Il dolore arriva a 6/10',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita con delicatezza',
          alt: 'Una figura seduta che tira indietro le dita per allungare l’arco',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'strong', why: 'Grado A nella linea guida. Lavora sul polpaccio rigido, il fattore di rischio più forte in uno studio caso-controllo del 2003.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone a terra, fianchi in avanti. Tieni finché senti l’allungamento nella parte alta del polpaccio.',
          often: 'Quasi tutte le sessioni e prima di una camminata lunga',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, sporgiti in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: { level: 'strong', why: 'Grado A nella linea guida. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione al muro dell’allungamento del polpaccio, poi piega il ginocchio dietro finché senti l’allungamento scendere, vicino al tallone.',
          often: 'Dopo l’allungamento a ginocchio teso',
          feel: 'Un allungamento più in basso nel polpaccio, vicino al tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa del polpaccio evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'Grado B nella linea guida per il lavoro di forza. Un gradino verso il lavoro su una gamba con carico.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico. Tieniti a un muro o a un corrimano per l’equilibrio.',
          often: 'Giorni di forza, quando il solo stretching non basta più',
          feel: 'I polpacci che lavorano insieme',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte: sali dritto, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte con asciugamano (su una gamba)',
          evidence: { level: 'strong', why: 'È l’esercizio dell’unico studio randomizzato sui sollevamenti sulle punte specifico per la fascite plantare (Rathleff 2015). Grado B nella linea guida.' },
          dose: 'Walkito parte da 3\u00A0serie da 12, ogni gamba. Il protocollo dello studio arriva a 5\u00A0serie da 8RM.',
          how: 'Stai su un piede su un gradino, con un asciugamano arrotolato sotto le dita. Tre secondi per salire, due secondi fermo in alto, tre secondi per scendere. L’asciugamano carica la fascia plantare attraverso il meccanismo a verricello.',
          often: 'Giorni di forza, quando i sollevamenti su due piedi risultano facili per due sessioni',
          feel: 'Lavoro intenso nel polpaccio e una tensione sotto l’arco',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_towel',
          caption: 'Sollevamenti sulle punte con asciugamano: ritmo lento, asciugamano sotto le dita',
          alt: 'Una figura su un gradino che sale sulle punte con un asciugamano arrotolato sotto il piede',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.rathleff, CITE.riddle],
    },
    {
      h2: 'Quanto camminare quando il tallone fa male?',
      paragraphs: [
        'L’obiettivo non è smettere di camminare. È trovare la distanza che il tallone riesce a reggere senza riacutizzarsi la mattina dopo, e poi costruire da lì.',
        'Un approccio pratico: cammina per una distanza che mantenga il dolore del mattino dopo uguale o sotto il tuo livello di base attuale. Se il tuo punteggio abituale del mattino è 4 su 10 e una camminata di 30\u00A0minuti lo porta a 6 la mattina dopo, quella camminata era troppo. Accorciala finché il punteggio del mattino resta stabile. Poi aggiungi cinque minuti ogni una o due settimane, finché il dolore del mattino non sale di colpo.',
        'Questa è gestione del carico, non riposo. Il riposo assoluto raramente aiuta nella fascite plantare. La linea guida raccomanda di modificare l’attività, non di restare inattivi. Camminare con scarpe che sostengono il piede su una superficie più morbida è più facile per la fascia che camminare scalzo sul cemento.',
        'Se corri anche, vale lo stesso principio su un’altra scala. [Dolore al tallone nei runner](/heel-pain-runners/) (in inglese) spiega più nel dettaglio i picchi di carico e i cambi di chilometraggio.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quanto ci vuole perché il tallone smetta di far male dopo le camminate?',
      keyFact: 'Nei dati di riferimento su 566\u00A0adulti sani, il numero medio di sollevamenti sulle punte su una gamba era di circa 23-24\u00A0ripetizioni, un riferimento per seguire nel tempo la resistenza del polpaccio (Hebert-Losier e colleghi, 2017).',
      paragraphs: [
        'Non ci sono tempi fissi. Una revisione delle prove cliniche riporta che circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche, spesso nel giro di alcuni mesi (Latt e colleghi, 2020). In un follow-up più lungo su 174\u00A0persone, circa la metà aveva ancora qualche sintomo a 5\u00A0anni, anche se a quel punto per lo più lieve (Hansen e colleghi, 2018).',
        'Quello che puoi misurare prima è se gli esercizi stanno funzionando. Il dolore del mattino su una scala da 0 a 10 è il segnale quotidiano più chiaro. La resistenza del polpaccio, misurata contando i sollevamenti sulle punte su una gamba, segue la forza nel giro di settimane. Un riferimento comune per gli adulti è di circa 23-24\u00A0ripetizioni in media, dai dati di riferimento su 566\u00A0adulti sani (Hebert-Losier e colleghi, 2017). Quello che conta è se il tuo numero sale, non se coincide con il riferimento.',
        'Per i tempi in generale, vedi [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/).',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.hebertLosier],
    },
  ],
  faq: [
    {
      q: 'Perché mi fa male il tallone dopo una camminata lunga?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La causa più comune è la fascite plantare. Ogni passo carica la fascia plantare nel punto in cui si attacca all’osso del tallone. Una camminata lunga chiede a quel tessuto più di una breve. Quando il polpaccio è rigido o la fascia è già irritata, il carico supera quello che il tessuto riesce a reggere e arriva il dolore. Un polpaccio rigido è il fattore di rischio indipendente più forte in uno studio caso-controllo del 2003.',
    },
    {
      q: 'Devo smettere di camminare se mi fa male il tallone?',
      cites: [CITE.guideline],
      a: 'Di solito il riposo assoluto non serve. La linea guida del 2023 raccomanda di modificare l’attività, non di restare inattivi. Cammina per una distanza che il tallone riesce a reggere senza peggiorare la mattina dopo. Se serve accorcia la distanza, poi aumentala di nuovo poco alla volta. Scarpe che sostengono il piede e una superficie più morbida aiutano.',
    },
    {
      q: 'Il dolore al tallone dopo aver camminato è fascite plantare?',
      cites: [CITE.guideline, CITE.fatPadReview],
      a: 'È la causa più comune, ma non l’unica. Il dolore della fascite plantare si trova nella parte interna e anteriore del tallone ed è peggiore anche ai primi passi dopo il riposo. L’assottigliamento del cuscinetto adiposo del tallone dà un dolore profondo al centro, peggiore su superfici dure. La tendinite d’Achille fa male nella parte posteriore del tallone. Una frattura da stress cresce con l’attività e può fare male a riposo. Se non sei sicuro, rivolgiti a un professionista sanitario.',
    },
    {
      q: 'Qual è l’esercizio migliore per il dolore al tallone dopo aver camminato?',
      cites: [CITE.guideline, CITE.siriphorn],
      a: 'L’allungamento della fascia plantare e gli allungamenti del polpaccio hanno il grado di evidenza più alto (A) nella linea guida del 2023. Una meta-analisi ha trovato che entrambi riducevano il dolore rispetto a nessuno stretching. Fai l’allungamento della fascia plantare dopo una camminata e quelli del polpaccio quasi tutti i giorni. Il rinforzo del polpaccio (grado B nella linea guida) costruisce la capacità di cui la catena ha bisogno per reggere camminate più lunghe.',
    },
    {
      q: 'Per il dolore al tallone dopo aver camminato serve una radiografia?',
      cites: [CITE.guideline],
      a: 'Di solito no. La linea guida del 2023 dice che gli esami di imaging non servono quando la visita clinica indica una fascite plantare. Se il dolore non è migliorato dopo diverse settimane di stretching e gestione del carico, se sta peggiorando, o se stringere i lati del tallone lo riproduce (segno di una possibile frattura da stress), l’imaging diventa utile.',
    },
    {
      q: 'Perché il tallone mi fa male dopo essere stato in piedi ma non dopo aver camminato?',
      cites: [CITE.waters],
      a: 'Stare in piedi carica il piede in modo statico, senza la pompa del polpaccio che dà la camminata. Il sangue ristagna, il cuscinetto adiposo si comprime e l’arco si affatica. Camminare alterna carico e scarico, cosa più facile per le vene. Se il tuo fattore scatenante è stare in piedi, [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) spiega quello schema, comprese le calze a compressione e i tappetini.',
    },
    {
      q: 'Come capisco se il dolore al tallone è una frattura da stress?',
      cites: [CITE.patelStressFracture],
      a: 'Il dolore da frattura da stress di solito cresce con l’attività, è arrivato dopo un aumento improvviso di camminata o corsa e non passa molto con il riposo. Stringere i lati del tallone può riprodurlo. Il dolore della fascite plantare di solito si calma quando ti scaldi ed è peggiore ai primi passi dopo il riposo. Se lo schema fa pensare a una frattura, rivolgiti a un professionista sanitario prima di fare esercizi.',
    },
    {
      q: 'Come far passare il dolore al tallone subito dopo una camminata?',
      a: 'Subito dopo una camminata, fai riposare il piede, metti un po’ di ghiaccio sul punto dolente per poco tempo ed evita di tornare subito a camminare scalzo su un pavimento duro. Così alleggerisci il dolore del momento, ma non cambi la causa di fondo. Sono gli esercizi di questa pagina, allungamento di polpaccio e fascia più un lavoro di forza graduale, a cambiare il modo in cui il tallone regge la camminata successiva.',
    },
    {
      q: 'Perché dopo aver camminato mi fa male il tallone di un solo piede?',
      a: 'Il dolore al tallone dopo aver camminato compare spesso in un solo piede perché durante una camminata il carico raramente si divide in parti uguali tra le gambe. Un passo più lungo da un lato, un vecchio infortunio, scarpe più consumate da un lato o una borsa portata sempre sulla stessa spalla possono spostare più sforzo su un tallone. Col tempo possono comunque diventare dolorosi entrambi i lati.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'stringere i lati del tallone riproduce il dolore, il che può far pensare a una frattura da stress',
      'il dolore al tallone continua a peggiorare a ogni camminata anche se hai accorciato la distanza',
      'si accompagna a intorpidimento, formicolio o bruciore',
      'il tallone è arrossato, caldo o gonfio, o hai la febbre',
      'ti fanno male entrambi i talloni e la rigidità del mattino dura più di 30\u00A0minuti, soprattutto se sono coinvolte altre articolazioni',
      'il dolore ti tiene sveglio di notte o c’è anche a riposo',
      'non è migliorato dopo diverse settimane di stretching, lavoro sul polpaccio e gestione del carico',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Non devi capire da solo gli esercizi, le dosi o quando passare al livello successivo. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per il dolore al tallone, il primo obiettivo è un dolore del mattino a 1 su 10 o meno per 14\u00A0giorni di fila. Se ieri hai camminato più del solito e il punteggio del mattino sale di colpo, la sessione si adatta da sola.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto l’obiettivo del mattino), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi se il lavoro sta alzando la tua soglia di camminata.',
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se il dolore al tallone dopo aver camminato peggiora nonostante gli esercizi, rivolgiti prima a un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Dolore al tallone dopo aver camminato',
  campaign: 'guide-heel-after-walking-it',
};
