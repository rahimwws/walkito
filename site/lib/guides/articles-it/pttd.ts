import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/pttd.ts`, written around the queries
 * «disfunzione del tendine tibiale posteriore esercizi», «tendinite tibiale
 * posteriore» and «piede piatto acquisito dell’adulto». Informal «tu».
 * Exercise names as in `it.ts`. Figures, doses, grades and qualifiers are
 * identical to the English page. Citations as in English.
 */

export const PTTD_IT: Guide = {
  lang: 'it',
  page: 'pttd',
  mainSource: CITE.posteriorTibialReview,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Disfunzione del tendine tibiale posteriore: esercizi',
  description:
    'Esercizi per la disfunzione del tendine tibiale posteriore: inversione con elastico, sollevamenti sulle punte, piede corto, stadi e quando operare.',
  h1: 'Esercizi per la disfunzione del tendine tibiale posteriore: cosa aiuta e quando',
  lede:
    'La disfunzione del tendine tibiale posteriore, spesso chiamata PTTD, si verifica quando il tendine che sostiene l’arco sul lato interno della caviglia si indebolisce o si infiamma. È la causa più comune di piede piatto acquisito dell’adulto. L’esercizio può aiutare negli stadi iniziali, ma non tutti gli stadi rispondono allo stesso modo, e le prove sono ancora limitate. Questa pagina spiega gli stadi, gli esercizi con il sostegno migliore e quando entrano in gioco un tutore o la chirurgia.',
  intro: [
    'Il tendine tibiale posteriore passa dietro il malleolo interno e si attacca sotto il piede. Tiene su l’arco mentre cammini. Quando degenera, l’arco si abbassa, il tallone si inclina verso l’esterno e il dolore si concentra lungo l’interno della caviglia o l’interno del mesopiede.',
    'Una revisione sistematica del 2018 ha trovato solo tre studi randomizzati o controllati, per un totale di 93\u00A0persone, quindi le prove sull’esercizio qui sono molto più scarse che per problemi come la [fascite plantare](/it/esercizi-fascite-plantare/) o la tendinite d’Achille.',
  ],
  toc: true,
  takeaways: [
    'Una revisione sistematica del 2018 ha trovato effetti moderati (SMD da 0,6 a 1,2) per il rinforzo eccentrico più plantari e stretching rispetto a plantari e stretching da soli, in tre studi con 93\u00A0partecipanti in totale (Ross e colleghi, 2018).',
    'In uno studio randomizzato su 36\u00A0persone, un programma di tre mesi con plantari, stretching ed esercizio eccentrico ha ridotto il dolore e migliorato la funzione più di plantari e stretching da soli. A fine programma il gruppo eccentrico arrivava a carichi 3,3\u00A0volte più alti del gruppo concentrico (Kulig e colleghi, 2009).',
    'La PTTD si classifica in quattro stadi. Esercizio e plantari sono l’approccio principale negli stadi I e II, quando la deformità è ancora flessibile. Gli stadi III e IV comportano una deformità rigida o alterazioni dell’articolazione della caviglia, e di solito richiedono una valutazione chirurgica.',
    'Il tendine tibiale posteriore si attiva durante i sollevamenti sulle punte quando il piede ruota verso l’interno e l’arco si alza, ed è per questo che i sollevamenti sulle punte con attenzione all’arco compaiono nei programmi per la PTTD.',
  ],
  sections: [
    {
      h2: 'Cos’è la disfunzione del tendine tibiale posteriore?',
      paragraphs: [
        'Il tibiale posteriore è un muscolo profondo del polpaccio. Il suo tendine passa dietro l’osso interno della caviglia, il malleolo mediale, e si apre a ventaglio sotto il piede per attaccarsi a diverse ossa del mesopiede. Quando cammini, tira su l’arco e controlla quanto il piede ruota verso l’interno. **Quando il tendine degenera o si lesiona, quel sostegno si perde.**',
        'La PTTD è la causa più comune di piede piatto acquisito dell’adulto. È più frequente nelle donne, sopra i 40\u00A0anni e in chi ha un IMC più alto. Tra i fattori di rischio ci sono ipertensione, diabete e precedenti infiltrazioni di cortisone vicino al tendine. Il dolore di solito si trova dietro o sotto il malleolo interno e peggiora con l’attività, soprattutto camminando in salita o su terreni irregolari.',
        'Il nome clinico che potresti trovare è tendinopatia del tibiale posteriore. Le fonti più vecchie a volte la chiamano tendinite tibiale posteriore quando il problema è soprattutto un’infiammazione, o insufficienza del tendine tibiale posteriore quando il tendine si è allungato e l’arco ha iniziato ad abbassarsi. Tutti e tre i termini descrivono lo stesso spettro.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: 'Quali sono gli stadi della PTTD?',
      paragraphs: [
        'Gli specialisti classificano la PTTD in quattro stadi. Lo stadio decide se esercizio e plantari hanno buone probabilità di aiutare, o se conviene parlare di tutore, ortesi o chirurgia.',
        {
          list: [
            '**Stadio I** vuol dire che il tendine è infiammato ma ancora integro. L’arco sembra normale. C’è dolore e a volte un lieve gonfiore dietro il malleolo interno. La forza nel sollevamento sulle punte su una gamba di solito è ridotta rispetto all’altro lato, ma la forma del piede non è cambiata. Esercizio e plantari di sostegno sono l’approccio principale.',
            '**Stadio II** vuol dire che il tendine si è allungato o si è lesionato in parte. L’arco si è abbassato e il tallone si inclina verso l’esterno, ma la deformità è ancora flessibile, cioè un professionista sanitario riesce a riportare il piede in posizione con le mani. È lo stadio coperto dalla maggior parte della ricerca sull’esercizio. Plantari, stretching e rinforzo progressivo sono il programma conservativo standard.',
            '**Stadio III** vuol dire che la deformità è diventata rigida. Il piede non si riesce più a riportare in una posizione corretta, e spesso ci sono alterazioni artrosiche nelle articolazioni sotto la caviglia. A questo stadio è poco probabile che l’esercizio da solo cambi la forma del piede. Di solito si discute una valutazione chirurgica.',
            '**Stadio IV** aggiunge il coinvolgimento dell’articolazione della caviglia. La caviglia si inclina in valgo, cioè pende verso l’esterno. È lo stadio più avanzato e di solito richiede un intervento chirurgico.',
          ],
        },
        '**La maggior parte delle persone che cercano esercizi per la PTTD è allo stadio I o II.** Se non sai quale stadio ti riguarda, un professionista sanitario può dirtelo con un esame fisico e, se serve, con gli esami di imaging. Il test del sollevamento sulle punte su un solo piede, in cui provi a salire sulle punte di un piede, è un rapido strumento di screening: fatica a salire, dolore durante la salita o un tallone che in cima non si inclina verso l’interno fanno tutti pensare a una debolezza del tibiale posteriore.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Cosa dicono gli studi sull’esercizio?',
      keyFact: 'Mettendo insieme tre piccoli studi con 93\u00A0persone in totale, una revisione del 2018 ha trovato che il rinforzo eccentrico aggiunto a plantari e stretching dava miglioramenti di entità moderata rispetto a plantari e stretching da soli (Ross e colleghi, 2018).',
      paragraphs: [
        'Una revisione sistematica del 2018 ha individuato tre studi randomizzati controllati con 93\u00A0partecipanti in totale. Due testavano il rinforzo in aggiunta a plantari e stretching; il terzo testava rinforzo e allenamento dell’equilibrio contro nessun intervento. La revisione ha trovato effetti di entità moderata (SMD da 0,6 a 1,2) per il rinforzo eccentrico nel ridurre dolore e disabilità rispetto a plantari e stretching da soli.',
        'Il più grande dei tre studi era uno studio randomizzato del 2009 su 36\u00A0persone con PTTD allo stadio I o II. I partecipanti sono stati assegnati per tre mesi a uno di tre gruppi:',
        {
          list: [
            'Solo plantari e stretching.',
            'Plantari più stretching più esercizio concentrico.',
            'Plantari più stretching più esercizio eccentrico.',
          ],
        },
        'Entrambi i gruppi con esercizio sono migliorati più del gruppo con soli plantari. A fine programma il gruppo eccentrico arrivava a carichi 3,3\u00A0volte più alti del gruppo concentrico, anche se entrambi i tipi di esercizio hanno ridotto il dolore.',
        'Un secondo studio randomizzato, pubblicato nel 2015, ha assegnato 39\u00A0persone con PTTD allo stadio II a plantari più stretching oppure a plantari più stretching più rinforzo (con esercizi con elastico e sollevamenti sulle punte). Entrambi i gruppi sono migliorati, ma il gruppo con rinforzo non si è staccato in modo significativo dal gruppo con stretching sull’esito principale. Gli autori hanno ipotizzato che la dose di rinforzo potesse non essere abbastanza alta.',
        'Gli autori della revisione hanno concluso che **le prove sostengono l’aggiunta di esercizio progressivo contro resistenza ai plantari nella PTTD iniziale**, ma hanno chiesto studi più grandi. È un campo in cui la ricerca sta ancora rincorrendo la pratica clinica.',
      ],
      sourceNote:
        'Ross 2018: 3\u00A0studi, n = 93. Kulig 2009: n = 36, 3\u00A0gruppi, 3\u00A0mesi, Foot Function Index, VAS del dolore. Houck 2015: n = 39, 2\u00A0gruppi, 3\u00A0mesi, FAAM.',
      cites: [CITE.posteriorTibialReview, CITE.kuligRCT, CITE.houckPTTD],
    },
    {
      h2: 'Quali esercizi aiutano la disfunzione del tendine tibiale posteriore?',
      paragraphs: [
        'Gli esercizi qui sotto lavorano sul muscolo tibiale posteriore e sui muscoli che sostengono l’arco. L’inversione con elastico allena direttamente il tibiale posteriore. I sollevamenti sulle punte con attenzione a sollevare l’arco caricano il tendine durante un movimento funzionale. Il piede corto rinforza i muscoli intrinseci che aiutano l’arco. L’allungamento del polpaccio lavora su un riscontro frequente in chi ha la PTTD: una dorsiflessione della caviglia ridotta.',
        'Nei programmi di esercizi degli studi c’erano anche l’allungamento del polpaccio e i plantari. In nessuno studio i plantari erano facoltativi. Se hai la PTTD, **un plantare che sostiene l’arco fa parte del programma, non sostituisce l’esercizio, e nemmeno il contrario.**',
      ],
      exercises: [
        {
          name: 'Inversione con elastico (rotazione verso l’interno contro resistenza)',
          dose: '3\u00A0serie da 15, ogni piede. Walkito parte da 3\u00A0serie da 15.',
          how: 'Siediti con le gambe distese davanti a te e un elastico intorno all’avampiede. Fissa l’altra estremità alla gamba di un tavolo, o falla tenere a qualcuno verso l’esterno. Ruota il piede verso l’interno contro l’elastico, tenendo fermo il ginocchio. Il movimento parte dalla caviglia, non dalla gamba.',
          often: 'Giorni di forza',
          feel: 'Lavoro lungo l’interno della caviglia e l’arco',
          stop: 'Dolore acuto dietro il malleolo interno',
          evidence: { level: 'moderate', why: 'L’inversione contro resistenza faceva parte del protocollo di esercizi dello studio randomizzato di Kulig del 2009. Il tibiale posteriore si attiva in modo selettivo durante l’inversione (studio con risonanza magnetica di Kulig del 2004).' },
          media: 'band_inversion',
          caption: 'Inversione con elastico: ruota il piede verso l’interno contro resistenza, il ginocchio resta fermo',
          alt: 'Una figura seduta che ruota il piede verso l’interno contro un elastico, con il muscolo tibiale posteriore evidenziato',
        },
        {
          name: 'Sollevamenti sulle punte (con una pallina tra le caviglie)',
          dose: '3\u00A0serie da 10, entrambi i piedi. Poi passa a una gamba.',
          how: 'Stai su entrambi i piedi con una pallina o un asciugamano arrotolato tra i malleoli interni. Sali sulle punte stringendo la pallina verso l’interno. La stretta aiuta ad attivare il tibiale posteriore. Passa ai sollevamenti su una gamba quando la versione su due piedi ti è risultata comoda per due sessioni di fila.',
          often: 'Giorni di forza',
          feel: 'Lavoro del polpaccio più una trazione lungo l’interno dell’arco',
          stop: 'Dolore dietro il malleolo interno sopra 6/10',
          evidence: { level: 'moderate', why: 'I sollevamenti sulle punte con attivazione dell’arco erano inclusi nello studio randomizzato di Houck del 2015. La risonanza magnetica mostra un’attivazione moderata del tibiale posteriore durante i sollevamenti sulle punte (Kulig, 2004).' },
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte: stringi una pallina tra le caviglie per attivare l’arco',
          alt: 'Una figura che sale sulle punte con una pallina tra i malleoli interni, con il tibiale posteriore evidenziato',
        },
        {
          name: 'Piede corto, da seduto',
          dose: '3\u00A0serie da 10, tenendo ognuna per 5\u00A0secondi',
          how: 'Siediti con il piede appoggiato a terra. Senza arricciare le dita, avvicina la parte anteriore della pianta al tallone. L’arco dovrebbe alzarsi un poco. Così alleni i muscoli intrinseci del piede che lavorano insieme al tibiale posteriore per sostenere l’arco.',
          often: 'Quasi tutte le sessioni',
          feel: 'Una contrazione sotto l’arco',
          stop: 'Dolore nell’arco o all’interno della caviglia',
          evidence: { level: 'moderate', why: 'L’esercizio del piede corto faceva parte del programma combinato negli studi sulla correzione del piede piatto. Una revisione del 2024 ha trovato che migliorava la postura del piede nei programmi più lunghi di sei settimane.' },
          media: 'short_foot_seated',
          caption: 'Piede corto: solleva l’arco senza arricciare le dita',
          alt: 'Una figura seduta con un piede a terra e l’arco che si alza un poco, con i muscoli intrinseci del piede evidenziati',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Tieni finché senti l’allungamento nella parte alta del polpaccio. Una dorsiflessione della caviglia ridotta è frequente nella PTTD e può contribuire a una pronazione di compenso.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Dolore al tendine d’Achille',
          evidence: { level: 'moderate', why: 'L’allungamento del polpaccio era incluso come intervento di base in tutti e tre gli studi sull’esercizio per la PTTD.' },
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
      ],
      cites: [CITE.kuligRCT, CITE.houckPTTD, CITE.kulig, CITE.cheng],
    },
    {
      h2: 'I plantari aiutano, e vanno portati durante gli esercizi?',
      paragraphs: [
        'Tutti gli studi sull’esercizio per la PTTD usavano i plantari come parte dell’intervento di base. **I plantari non sono stati confrontati con l’esercizio; sono stati testati con l’esercizio in aggiunta.** Lo studio randomizzato del 2009 ha trovato che plantari e stretching da soli miglioravano la funzione, e che aggiungere l’esercizio la migliorava ancora di più.',
        'Un plantare rigido o semirigido che sostiene l’arco evita che l’arco ceda quando stai in piedi e cammini. Per gli esercizi di questa pagina, inversione con elastico e piede corto si possono fare senza scarpe, ma i sollevamenti sulle punte vanno fatti con le stesse scarpe di sostegno con cui cammini, perché sotto carico l’arco ha bisogno di sostegno.',
        'Per lo stadio I possono bastare dei supporti per l’arco già pronti. Nello stadio II, dove la deformità è maggiore, sono più comuni i plantari su misura. Un medico o un podologo può aiutarti a capire quale fa al caso tuo.',
      ],
      cites: [CITE.kuligRCT, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quando si parla di tutore o di chirurgia?',
      paragraphs: [
        'A volte, nella PTTD allo stadio I o II, si usa un tutore da camminata o una cavigliera quando il dolore è troppo alto per fare esercizio. Il tutore immobilizza il tendine per lasciar calmare l’infiammazione acuta. **È una misura di breve durata, non un programma a lungo termine.** Quando il dolore scende abbastanza, subentrano esercizio e plantari.',
        'Di solito si parla di chirurgia quando la gestione conservativa non ha migliorato i sintomi dopo diversi mesi, o quando la deformità è progredita allo stadio III o IV. Le opzioni chirurgiche vanno dalla riparazione e dal trasferimento del tendine negli stadi iniziali fino all’artrodesi delle articolazioni negli stadi avanzati. La scelta dipende dallo stadio, dal grado di deformità e dalla persona.',
        'Questa pagina non tratta nel dettaglio le opzioni chirurgiche. Se sei allo stadio III o IV, o se i sintomi dello stadio II non hanno risposto a esercizio e plantari in diversi mesi, uno specialista di piede e caviglia può parlarti dei passi successivi.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: 'Che legame c’è tra PTTD e piede piatto?',
      paragraphs: [
        'La PTTD è la causa più comune di piede piatto acquisito dell’adulto, cioè un piede piatto che compare da adulti invece di esserci fin dall’infanzia. **Se avevi archi normali e da un lato hanno iniziato ad abbassarsi, con dolore dietro il malleolo interno, la PTTD è la spiegazione più probabile.**',
        'Il piede piatto flessibile congenito, quello presente fin dall’infanzia, è una situazione diversa. Può non dare mai sintomi. Gli esercizi si sovrappongono: piede corto, inversione con elastico e sollevamenti sulle punte compaiono sia negli [esercizi per il piede piatto](/it/esercizi-piede-piatto/) sia nei programmi per la PTTD. Ma il contesto clinico è diverso, e la PTTD di solito richiede plantari e un controllo più attento, perché il tendine sta degenerando, non è semplicemente lasso.',
        'Se non sai se il tuo piede piatto c’è da sempre o è nuovo, un professionista sanitario può confrontare i due piedi, controllare il tendine e guardare l’allineamento del tallone quando stai in piedi.',
      ],
      cites: [CITE.ling, CITE.zarali],
    },
    {
      h2: 'Quanto ci vuole per migliorare?',
      keyFact: 'Un piccolo studio pilota su dieci pazienti, con carico eccentrico due volte al giorno per circa due mesi e mezzo, ha trovato un miglioramento dei sintomi insieme ad alcuni cambiamenti del tendine all’ecografia (Kulig e colleghi, 2009).',
      paragraphs: [
        'I due studi randomizzati duravano tre mesi. Entrambi hanno mostrato un miglioramento a fine programma, ma nessuno dei due ha seguito i partecipanti nel lungo periodo. Un piccolo studio pilota su dieci pazienti dello stesso gruppo è durato anch’esso circa due mesi e mezzo di carico eccentrico due volte al giorno, e ha trovato un miglioramento dei sintomi insieme ad alcuni cambiamenti del tendine all’ecografia.',
        'Nella pratica clinica, **il miglioramento della PTTD allo stadio I o II con esercizio e plantari si misura in mesi, non in settimane.** La degenerazione del tendine non regredisce in fretta. Un’aspettativa ragionevole è meno dolore e una funzione migliore in tre-sei mesi, con esercizi di mantenimento anche dopo. Se non c’è miglioramento dopo tre mesi di esercizio e plantari costanti, vale la pena tornare da un professionista sanitario per rivalutare lo stadio.',
      ],
      cites: [CITE.kuligRCT, CITE.kuligEccentric],
    },
  ],
  faq: [
    {
      q: 'Quali esercizi fare per la disfunzione del tendine tibiale posteriore?',
      cites: [CITE.posteriorTibialReview, CITE.kuligRCT],
      a: 'Una revisione sistematica del 2018 su tre studi con 93\u00A0persone ha trovato che gli esercizi di rinforzo eccentrici e concentrici, aggiunti a plantari e stretching, riducevano il dolore e miglioravano la funzione più di plantari e stretching da soli (Ross, 2018). Gli esercizi testati includono l’inversione del piede contro un elastico, sollevamenti sulle punte progressivi e l’allungamento del polpaccio.',
    },
    {
      q: 'La PTTD si può far regredire con gli esercizi?',
      cites: [CITE.ling],
      a: 'Negli stadi I e II, quando il tendine è infiammato o allungato ma il piede è ancora flessibile, esercizio e plantari possono ridurre il dolore e migliorare la funzione. Nessuno studio ha dimostrato che l’esercizio faccia regredire la degenerazione del tendine o riporti un arco abbassato alla sua altezza originale. Negli stadi III e IV, con una deformità rigida, è poco probabile che l’esercizio da solo cambi la forma del piede.',
    },
    {
      q: 'Che differenza c’è tra PTTD e piede piatto?',
      a: 'La PTTD è la causa più comune di piede piatto acquisito dell’adulto, un piede piatto che compare da adulti perché il tendine del tibiale posteriore si indebolisce. Il piede piatto congenito, presente fin dall’infanzia, è una situazione diversa. Può non fare mai male. La PTTD di solito colpisce un solo lato, peggiora nel tempo e si accompagna a dolore dietro il malleolo interno.',
    },
    {
      q: 'Che sensazione dà il dolore al tendine tibiale posteriore?',
      cites: [CITE.ling],
      a: 'Il dolore di solito si trova dietro o sotto il malleolo interno. Può estendersi lungo l’interno dell’arco. Peggiora con l’attività, soprattutto camminando in salita, su terreni irregolari o stando in equilibrio su una gamba. La zona può gonfiarsi. Un segno precoce comune è la difficoltà a fare un sollevamento sulle punte su una gamba dal lato colpito.',
    },
    {
      q: 'Servono i plantari per la PTTD?',
      cites: [CITE.kuligRCT],
      a: 'Tutti gli studi sull’esercizio per la PTTD usavano i plantari come parte del programma di base. I plantari sostengono l’arco e riducono il carico sul tendine mentre cammini. Le prove non sostengono l’esercizio senza plantari nella PTTD. Per i casi lievi possono funzionare dei supporti per l’arco già pronti, mentre nello stadio II sono più comuni i plantari su misura.',
    },
    {
      q: 'La PTTD è la stessa cosa del dolore all’interno della caviglia?',
      a: 'La PTTD è una delle cause più comuni di dolore sul lato interno della caviglia, ma non l’unica. Altre possibilità sono una distorsione del legamento deltoideo, una frattura da stress dello scafoide o la sindrome del tunnel tarsale (compressione di un nervo). Un professionista sanitario può distinguerle con un esame fisico. La PTTD di solito si accompagna a un arco che si abbassa e a difficoltà nei sollevamenti sulle punte su una gamba.',
    },
    {
      q: 'Quando la PTTD va operata?',
      cites: [CITE.ling],
      a: 'Di solito si parla di chirurgia quando la gestione conservativa, cioè esercizio, plantari e a volte un tutore da camminata, non ha migliorato i sintomi dopo diversi mesi, o quando la deformità è progredita allo stadio III o IV, con un piede rigidamente piatto o l’articolazione della caviglia coinvolta. La maggior parte dei casi allo stadio I e II risponde alle cure conservative.',
    },
    {
      q: 'Camminare fa male con la tendinite del tibiale posteriore?',
      a: 'Non per forza, ma camminare troppo può farlo. Ogni passo carica il tendine che tiene su l’arco, quindi tante camminate su un tendine irritato tendono a peggiorare il dolore. All’inizio si riduce il carico che provoca dolore, non si smette del tutto di camminare, insieme a plantari ed esercizi qui sopra. Se una camminata ti porta dolore, riduci.',
    },
    {
      q: 'Cosa peggiora la tendinite del tibiale posteriore?',
      a: 'Tutto ciò che carica il tendine più volte mentre è irritato: tanto tempo in piedi o a camminare, salite, terreni irregolari e scarpe consumate. Il peso corporeo in più aggiunge forza a ogni passo, e un aumento improvviso dell’attività è un fattore scatenante comune. Niente di tutto questo vuol dire riposo completo; vuol dire ridurre il carico e aggiungere plantari ed esercizi qui sopra.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'l’arco da un lato si è abbassato in modo visibile o il tallone si inclina verso l’esterno quando stai in piedi',
      'non riesci a fare un sollevamento sulle punte su una gamba dal lato colpito',
      'l’interno della caviglia è gonfio, arrossato o caldo',
      'il dolore è comparso all’improvviso dopo un trauma o una storta',
      'senti intorpidimento o formicolio lungo l’interno del piede, che può far pensare a una sindrome del tunnel tarsale invece che a una PTTD',
      'il dolore non migliora dopo diverse settimane di esercizi e sostegno per l’arco',
      'sono colpiti entrambi i piedi e altre articolazioni sono gonfie o rigide, il che può indicare un’artrite infiammatoria',
      'hai il diabete, una sensibilità ridotta ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito include inversione con elastico, piede corto e sollevamenti sulle punte nella sua libreria di esercizi, e li mette nei giorni di forza come parte di un programma per arco ed equilibrio. Quando nel check-in segni l’interno della caviglia o l’arco sulla mappa del dolore, la sessione si adatta a quella risposta. L’app è pensata per fascite plantare e piede piatto. La PTTD si sovrappone a entrambi, ma l’app non fa diagnosi di PTTD e non sostituisce i plantari né la stadiazione clinica.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi cosa sta cambiando. Se ti è stata diagnosticata una PTTD, usa l’app insieme ai plantari e chiedi al professionista sanitario che ti segue se lo stadio è adatto all’esercizio.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Esercizi per il tendine tibiale posteriore',
  campaign: 'guide-pttd-it',
};
