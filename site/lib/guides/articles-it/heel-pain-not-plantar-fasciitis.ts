import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/heel-pain-not-plantar-fasciitis.ts
 * (2026-10-19), written around «dolore al tallone ma non è fascite
 * plantare», «cause dolore tallone». Informal «tu». Figures, grades, doses,
 * hedges and CITE keys are identical to the English page after its
 * fact-check. Same media ids. Exercise names follow it.ts and
 * articles-it/plantar-fasciitis-vs-stress-fracture.ts. "Clinician" is
 * «professionista sanitario». Link to the foot pain identifier removed (no
 * Italian page), words kept.
 */

export const HEEL_NOT_PF_IT: Guide = {
  lang: 'it',
  page: 'heelNotPf',
  mainSource: CITE.latt,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Dolore al tallone ma non è fascite plantare? 9 cause',
  description:
    'Dolore al tallone ma non è fascite plantare: cuscinetto adiposo, nervi, frattura da stress, Achille, Haglund, Sever, tibiale posteriore, artrite e schiena.',
  h1: 'Dolore al tallone che non è fascite plantare: le cause simili e come si distinguono',
  lede:
    'Se il tuo dolore al tallone non segue il quadro tipico della [fascite plantare](/it/fascite-plantare/), cioè peggiore ai primi passi del mattino e più leggero man mano che ti scaldi, potrebbe esserci dell’altro. Sotto il tallone, le cause simili più comuni sono un cuscinetto adiposo del tallone contuso o assottigliato, un nervo irritato, anche schiacciato nella zona lombare, una frattura da stress del calcagno e l’artrite infiammatoria (Latt e colleghi, 2020). Il dolore dietro il tallone ha cause sue, come il tendine d’Achille. In 250\u00A0persone con dolore sotto il tallone, la fascite plantare spiegava il 53,2% dei casi e l’atrofia del cuscinetto adiposo il 14,8% (Yi e colleghi, 2011).',
  intro: [
    'Questa pagina mette a confronto nove condizioni simili: dove fa male ciascuna, quando, cosa la peggiora e cosa fare dopo. Non è una diagnosi. Diverse di queste si somigliano, due possono esserci insieme, e solo un professionista sanitario che ti visita il piede può distinguerle. Se vuoi un orientamento rapido in base a dove fa male, c’è lo strumento per identificare il dolore al piede; questa pagina spiega le differenze che ci sono dietro.',
  ],
  takeaways: [
    'Il dolore tipico della fascite plantare sta vicino al lato interno del tallone, è peggiore al primo passo del mattino o dopo essere stato seduto, migliora con l’attività e poi peggiora se l’attività va avanti a lungo (Latt e colleghi, 2020).',
    'In 250\u00A0persone con dolore sotto il tallone, la fascite plantare spiegava il 53,2% dei casi, l’atrofia del cuscinetto adiposo il 14,8% ed entrambe insieme il 9,2% (Yi e colleghi, 2011).',
    'Un dolore al tallone che brucia, dà la scossa o formicola spesso viene da un nervo. Una revisione stima che l’intrappolamento del nervo di Baxter possa spiegare fino al 20% del dolore cronico al tallone (Tedeschi, 2025).',
    'Una frattura da stress del calcagno di solito fa male con l’attività, non al primo passo, e in 30\u00A0reclute militari si vedeva alla radiografia semplice solo nel 15% (Latt e colleghi, 2020; Sormaala e colleghi, 2006).',
    'Dolore a entrambi i talloni insieme ad altre articolazioni doloranti o rigide, o a una schiena rigida, fa pensare a una causa infiammatoria che richiede un medico, non solo allungamenti (Latt e colleghi, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cosa può causare dolore al tallone oltre alla fascite plantare?',
      keyFact: 'In 250\u00A0persone con dolore sotto il tallone, la fascite plantare spiegava il 53,2% dei casi, la sola atrofia del cuscinetto adiposo il 14,8% ed entrambe insieme il 9,2% (Yi e colleghi, 2011).',
      paragraphs: [
        '**La fascite plantare è la causa più comune di dolore al tallone, ma è tutt’altro che l’unica.** Una linea guida dei chirurghi del piede statunitensi descrive il dolore al tallone come per lo più meccanico, ma dice che vanno considerate anche cause nervose, artritiche, traumatiche, tumorali, infettive e vascolari (Thomas e colleghi, 2010). Una revisione del 2020 raggruppa le cause del dolore sotto il tallone in problemi dei nervi, lesioni come una frattura da stress o una rottura della fascia, artrite infiammatoria e usura del cuscinetto adiposo o della fascia stessa (Latt e colleghi, 2020).',
        'La tabella mette le nove condizioni simili più comuni accanto alla fascite plantare. Leggila come una mappa di quadri, non come una lista da spuntare: le caselle descrivono ciò che è tipico, e il tuo tallone non deve per forza seguire il manuale.',
      ],
      table: {
        caption: 'Cause simili del dolore al tallone: quadri tipici. Solo un professionista sanitario può confermare quale hai.',
        head: ['Condizione', 'Dove fa male', 'Quando', 'Peggiora con', 'Cosa fare'],
        rows: [
          ['[Fascite plantare](/it/fascite-plantare/)', 'Sotto il tallone, lato interno', 'Primi passi del mattino, dopo essere stati seduti', 'Stare a lungo in piedi, camminare a lungo', 'Allungamenti e forza del polpaccio'],
          ['[Cuscinetto adiposo](/it/sindrome-cuscinetto-adiposo-tallone/)', 'Centro del tallone, come un livido profondo', 'Stando in piedi e camminando', 'Pavimenti duri, piedi nudi', 'Ammortizzazione, professionista sanitario'],
          ['Nervo (Baxter, tunnel tarsale)', 'Tallone interno o pianta, può irradiarsi', 'Non legato ai primi passi, anche a riposo', 'Bruciore, formicolio, intorpidimento', 'Professionista sanitario'],
          ['[Frattura da stress](/it/fascite-plantare-o-frattura-da-stress/)', 'Tutto l’osso del tallone, lati dolenti', 'Cresce con l’attività', 'Corsa, salti, più chilometri', 'Meno carico, visita a breve'],
          ['[Achille inserzionale](/it/fascite-plantare-o-tendinite-achille/)', 'Dietro il tallone, sull’osso', 'Durante e dopo l’attività', 'Salite, scale, allungamento profondo', 'Carico sul polpaccio, discese a terra'],
          ['[Haglund](/it/morbo-di-haglund/)', 'Bozzo in alto dietro il tallone', 'Con le scarpe', 'Contrafforti rigidi', 'Contrafforte morbido, rialzo'],
          ['[Sever (bambini)](/it/malattia-di-sever/)', 'Dietro o ai lati del tallone', 'Durante e dopo lo sport', 'Corsa, salti, crescita', 'Meno carico, professionista sanitario'],
          ['[Tibiale posteriore](/it/disfunzione-tendine-tibiale-posteriore/)', 'Caviglia interna e arco', 'Camminando, stando in piedi', 'Terreno irregolare, salite', 'Professionista sanitario, poi esercizi'],
          ['Artrite infiammatoria', 'Entrambi i talloni, con altre articolazioni', 'Rigidità mattutina oltre 30\u00A0minuti', 'Altre articolazioni rigide, schiena rigida', 'Medico'],
          ['Dolore dalla schiena', 'Tallone o pianta, con dolore alla gamba', 'Variabile, con mal di schiena', 'Dolore a schiena o gamba, intorpidimento', 'Medico'],
        ],
      },
      after: [
        'Le righe su nervi, schiena e artrite non hanno un link perché non abbiamo una pagina su questi temi: richiedono una valutazione medica, non una guida agli esercizi. Ogni riga è spiegata nelle sezioni qui sotto.',
      ],
      cites: [CITE.yiFatPad, CITE.thomasCpg, CITE.latt],
    },
    {
      h2: 'Che sensazione dà di solito la fascite plantare?',
      paragraphs: [
        '**Conoscere il quadro tipico è il modo più semplice per capire quando il tuo tallone non ci rientra.** La fascite plantare tipica è un dolore sordo o pulsante intorno alla parte interna e anteriore del tallone, dove si attacca la fascia. È peggiore al primo passo del mattino e quando ti alzi dopo essere stato seduto, spesso migliora una volta che ti muovi, e poi peggiora di nuovo se stai in piedi o cammini a lungo (Latt e colleghi, 2020). Altro su questo quadro in [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/).',
        'La stessa revisione dice che, quando una persona non descrive queste caratteristiche classiche, il professionista dovrebbe cercare altre cause. Nota anche che la fascite plantare di solito colpisce un piede solo, anche se circa il 30% delle persone ce l’ha a entrambi (Latt e colleghi, 2020). Quindi due talloni doloranti non escludono la fascite plantare, ma sono un motivo per guardare più a fondo.',
        'La fascite plantare è anche la causa più comune, quindi un tallone che corrisponde a gran parte del quadro resta con ogni probabilità una fascite plantare. Nelle 250\u00A0persone citate sopra, da sola spiegava circa la metà dei casi ed era presente in un altro 9,2% insieme all’atrofia del cuscinetto adiposo (Yi e colleghi, 2011).',
      ],
      cites: [CITE.latt, CITE.yiFatPad],
    },
    {
      h2: 'Potrebbe essere un nervo, o un dolore che arriva dalla schiena?',
      keyFact: 'Una revisione del 2025 stima che l’intrappolamento del nervo di Baxter possa spiegare fino al 20% del dolore cronico al tallone, e che venga spesso scambiato per fascite plantare (Tedeschi, 2025).',
      paragraphs: [
        '**Un dolore descritto come bruciore o come una scossa elettrica spesso viene da un nervo** (Latt e colleghi, 2020). Tre origini nervose sono le solite sospettate:',
        {
          list: [
            '**Il nervo di Baxter**, un piccolo ramo che passa sotto il tallone. Quando è compresso dà un dolore cronico e bruciante sul cuscinetto del tallone (Latt e colleghi, 2020). Una revisione stima che possa spiegare fino al 20% del dolore cronico al tallone e dice che viene spesso scambiato per fascite plantare (Tedeschi, 2025), mentre un’altra lo definisce poco comune (Latt e colleghi, 2020).',
            '**La sindrome del tunnel tarsale**, in cui il nervo tibiale è compresso dietro il malleolo interno. Di solito dà un dolore bruciante o fulminante lungo la pianta, spesso con intorpidimento (Latt e colleghi, 2020). Altro sul dolore nervoso all’arco in [dolore all’arco plantare](/it/dolore-arco-plantare/).',
            '**Un nervo schiacciato nella zona lombare**, a livello di L5 o S1. È relativamente comune e di solito si accompagna a mal di schiena, dolore lungo la gamba o intorpidimento al piede o alla gamba (Latt e colleghi, 2020).',
          ],
        },
        'Una revisione sul dolore al tallone di origine nervosa ha trovato che l’intrappolamento di un nervo può avere un ruolo sia all’inizio sia nel dolore al tallone che non migliora, ma che come funzioni e come sia meglio verificarlo sono ancora oggetto di discussione (Alshami e colleghi, 2008). Il dolore notturno o a riposo con formicolio è trattato in [dolore al tallone di notte](/it/dolore-tallone-di-notte/).',
        'Questo è un gruppo in cui gli esercizi fai da te non sono il primo passo. Un professionista sanitario visita il piede, per esempio picchiettando lungo il nervo tibiale, e può usare l’ecografia, esami dei nervi o la risonanza magnetica (Latt e colleghi, 2020; Tedeschi, 2025).',
      ],
      cites: [CITE.latt, CITE.tedeschiBaxter, CITE.alshami],
    },
    {
      h2: 'Potrebbe essere una frattura da stress o il cuscinetto adiposo?',
      keyFact: 'In 30\u00A0reclute militari con una lesione da stress del calcagno vista alla risonanza magnetica, la lesione era visibile alla radiografia semplice solo nel 15% (Sormaala e colleghi, 2006).',
      paragraphs: [
        '**Entrambi tendono a fare male con l’attività più che al primo passo del mattino.** Una frattura da stress del calcagno di solito dà un dolore diffuso nella parte posteriore dell’osso del tallone, legato all’attività e non al momento in cui scendi dal letto. È più probabile se hai avuto una bassa densità ossea o una frattura da stress in passato (Latt e colleghi, 2020). Di solito arriva dopo un aumento brusco di cammino o corsa, o dopo il passaggio a una superficie più dura (Tu, 2018).',
        'Una radiografia normale non la esclude: in 30\u00A0reclute con una lesione da stress del calcagno vista alla risonanza magnetica, le radiografie semplici la mostravano solo nel 15% (Sormaala e colleghi, 2006). Il confronto completo è in [fascite plantare o frattura da stress](/it/fascite-plantare-o-frattura-da-stress/).',
        'Il dolore del cuscinetto adiposo di solito viene descritto come un dolore profondo, simile a un livido, al centro del cuscinetto del tallone, peggiore sui pavimenti duri e a piedi nudi. Come la frattura da stress, tende a essere legato all’attività (Latt e colleghi, 2020), e in un ambulatorio colpiva più spesso entrambi i talloni e peggiorava stando in piedi (Yi e colleghi, 2011). Era la seconda causa più comune nelle 250\u00A0persone citate sopra, con il 14,8% (Yi e colleghi, 2011). Una revisione del 2022 ha trovato solo sette studi originali su questa condizione, quindi gran parte dei consigli si basa sull’esperienza e non su studi clinici (Chang e colleghi, 2022). Altro in [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/) e, su che ruolo ha lo sperone, in [fascite plantare o spina calcaneare](/it/spina-calcaneare-esercizi/).',
      ],
      cites: [CITE.latt, CITE.tuHeelPain, CITE.sormaalaCalcaneus, CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'E se il dolore è dietro il tallone?',
      paragraphs: [
        '**La fascite plantare fa male sotto il tallone. Il dolore dietro il tallone di solito viene dal tendine d’Achille, dall’osso dove si attacca o, nei bambini, dalla cartilagine di crescita.** Qui ci sono tre condizioni simili:',
        {
          list: [
            '**La tendinopatia inserzionale dell’Achille**, un dolore proprio dove il tendine d’Achille incontra l’osso del tallone, invece che più in alto lungo il tendine (Jonsson e colleghi, 2008). Vedi [fascite plantare o tendinite d’Achille](/it/fascite-plantare-o-tendinite-achille/) e [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
            '**Il morbo di Haglund**, un bozzo osseo nella parte alta posteriore del tallone contro cui sfregano le scarpe, che può irritare la borsa e il tendine (Yuen e colleghi, 2022). Vedi [morbo di Haglund](/it/morbo-di-haglund/).',
            '**La malattia di Sever** nei bambini ancora in crescita: la cartilagine di crescita dietro il tallone diventa dolente con corsa e salti. Nei bambini, il dolore quando si stringe il tallone dai due lati fa pensare a questa condizione (Tu, 2018). Vedi [malattia di Sever](/it/malattia-di-sever/).',
          ],
        },
        'Il dolore inserzionale dell’Achille cambia il modo di fare gli esercizi: le discese del tallone si fanno a livello del pavimento invece di far scendere il tallone sotto il gradino, perché un allungamento profondo può premere il tendine contro l’osso (Jonsson e colleghi, 2008).',
      ],
      cites: [CITE.jonsson, CITE.yuenHaglund, CITE.tuHeelPain],
    },
    {
      h2: 'E se fanno male entrambi i talloni, o anche altre articolazioni sono rigide?',
      paragraphs: [
        '**Dolore a entrambi i talloni, dolore al tallone insieme a diverse articolazioni doloranti o rigide, o una schiena rigida fanno pensare a una causa infiammatoria** come l’artrite psoriasica, l’artrite reattiva o la spondiloartrite (Latt e colleghi, 2020). Il gruppo delle spondiloartriti è più comune nei giovani uomini, mentre la fascite plantare è più comune nella mezza età e più spesso nelle donne (Latt e colleghi, 2020).',
        'La stessa revisione elenca gli indizi che spingono un medico a chiedere gli esami del sangue: sintomi in altre parti del corpo, entrambi i piedi colpiti, più articolazioni coinvolte, soprattutto quelle piccole, e una rigidità mattutina che dura più di 30\u00A0minuti (Latt e colleghi, 2020).',
        'Anche con la fascite plantare possono fare male entrambi i talloni. In un follow-up da 5 a 15\u00A0anni di 174\u00A0persone con fascite plantare, il dolore a entrambi i talloni era legato a sintomi che duravano più a lungo (Hansen e colleghi, 2018). Per questo due talloni doloranti sono un motivo per farti controllare, non una prova di artrite.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'E se fa male all’interno della caviglia e lungo l’arco?',
      paragraphs: [
        '**Un dolore che sta dietro o sotto il malleolo interno e lungo l’arco, invece che sotto il tallone, può venire dal tendine tibiale posteriore.** È il principale sostegno attivo dell’arco interno, e chi ha un problema qui ha dolore alla caviglia interna e un piede che si appiattisce lentamente (Deu e colleghi, 2022). In un’indagine su 582\u00A0donne sopra i 40\u00A0anni in Inghilterra, il 3,3% aveva una disfunzione del tendine tibiale posteriore in fase iniziale, e a nessuna era stata diagnosticata (Kohls-Gatzoulis e colleghi, 2009).',
        'Un arco che si sta appiattendo da un lato, o la fatica a salire sulle punte con quel piede, è un motivo per rivolgerti a un professionista sanitario. L’esercizio ha qualche sostegno nelle fasi iniziali, ma solo tre piccoli studi con 93\u00A0persone in totale lo hanno testato (Ross e colleghi, 2018). Altro in [disfunzione del tendine tibiale posteriore](/it/disfunzione-tendine-tibiale-posteriore/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'Cosa fare adesso, e quando hanno senso gli esercizi?',
      paragraphs: [
        '**Se il tuo tallone corrisponde al quadro della fascite plantare e nessuno dei segnali d’allarme qui sotto ti riguarda, allungamenti e lavoro di forza sul polpaccio sono le opzioni di prima scelta.** La linea guida del 2023 sul dolore al tallone dà agli allungamenti della fascia plantare e del polpaccio un **grado A** e al lavoro di forza un **grado B** per la fascite plantare (Koc e colleghi, 2023). Questi esercizi sono solo per la fascite plantare. Non sono pensati per una sospetta frattura, un problema ai nervi o l’artrite.',
        'Se il tuo dolore corrisponde a un’altra riga della tabella, o non sei sicuro, rivolgiti al medico di base, a un fisioterapista o a un podologo. Porta un breve appunto: dove fa male, quando è peggiore, cosa lo peggiora, se riguarda uno o entrambi i piedi e qualsiasi cosa sia arrivata insieme, come intorpidimento, gonfiore o mal di schiena. È proprio ciò che un professionista usa per distinguere le condizioni simili.',
        'Se fai esercizi per la fascite plantare da diverse settimane e non è cambiato niente, anche questo vale una visita. Le cure non chirurgiche portano un sollievo completo a circa il 90% delle persone con fascite plantare, anche se possono servire da tre a sei mesi, quindi un dolore che non si smuove è un motivo per ricontrollare la diagnosi (Latt e colleghi, 2020). Vedi [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/) e la guida completa agli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare (solo fascite plantare)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto, per la fascite plantare. Non per le condizioni simili di questa pagina.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Fai il primo sul bordo del letto, prima che il piede tocchi il pavimento.',
          stop: 'Bruciore o formicolio, dolore nell’osso del tallone stesso, o un dolore che arriva a 6 su 10',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Allungamento del polpaccio (solo fascite plantare)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto, per la fascite plantare. Non per le condizioni simili di questa pagina.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Un polpaccio rigido tira sul tallone tutto il giorno, quindi questo allungamento conta anche se lo senti più in alto.',
          stop: 'Dolore dietro il tallone dove si attacca l’Achille, o un dolore che arriva a 6 su 10',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (solo fascite plantare)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il suo più alto, per la fascite plantare. Non per le condizioni simili di questa pagina.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione, tieni il tallone dietro ben appoggiato a terra e piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          stop: 'Dolore dietro il tallone dove si attacca l’Achille, o un dolore che arriva a 6 su 10',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto (solo fascite plantare)',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B per la fascite plantare. Questo esercizio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: '3\u00A0giorni a settimana, mai due di fila',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, il muscolo più profondo del polpaccio, quasi senza carico sul tallone. Lo studio sui sollevamenti sulle punte citato in questo sito ha testato una versione più impegnativa in piedi (Rathleff e colleghi, 2015).',
          stop: 'Dolore al tallone che supera 6 su 10, o che è peggiore la mattina dopo',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Cosa viene spesso scambiato per fascite plantare?',
      cites: [CITE.latt, CITE.yiFatPad],
      a: 'Le condizioni simili più comuni sono la sindrome del cuscinetto adiposo del tallone, l’intrappolamento di un nervo come il nervo di Baxter o la sindrome del tunnel tarsale, una frattura da stress del calcagno e il dolore inserzionale dell’Achille. Può essere anche un’artrite infiammatoria o un nervo schiacciato nella zona lombare. In 250\u00A0persone con dolore sotto il tallone, l’atrofia del cuscinetto adiposo spiegava il 14,8% dei casi.',
    },
    {
      q: 'Come capisco se il mio dolore al tallone non è fascite plantare?',
      cites: [CITE.latt],
      a: 'Senza una visita non puoi saperlo con certezza, ma alcune caratteristiche non tornano. La fascite plantare di solito è peggiore ai primi passi del mattino e si attenua quando ti muovi. Bruciore o formicolio, un dolore che cresce con l’attività, un dolore dietro il tallone, o entrambi i talloni con articolazioni rigide fanno pensare ad altro. Un professionista sanitario può fare chiarezza.',
    },
    {
      q: 'Il dolore al tallone può venire dalla schiena?',
      cites: [CITE.latt],
      a: 'Sì. Un nervo schiacciato nella zona lombare a livello di L5 o S1 può dare dolore, intorpidimento o formicolio al tallone e alla pianta. È relativamente comune e di solito si accompagna a mal di schiena o a un dolore che scende lungo la gamba. Debolezza al piede o un intorpidimento che si estende richiedono un medico in tempi brevi.',
    },
    {
      q: 'Che sensazione dà il dolore nervoso al tallone?',
      cites: [CITE.latt, CITE.tedeschiBaxter],
      a: 'Il dolore nervoso al tallone spesso brucia, è fulminante o simile a una scossa elettrica, a volte con formicolio o intorpidimento alla pianta. L’intrappolamento del nervo di Baxter dà un dolore bruciante sul cuscinetto del tallone, e una revisione stima che possa spiegare fino al 20% del dolore cronico al tallone. Richiede la valutazione di un professionista sanitario.',
    },
    {
      q: 'Il dolore a entrambi i talloni è fascite plantare?',
      cites: [CITE.latt],
      a: 'Può esserlo: circa il 30% delle persone con fascite plantare ce l’ha a entrambi i piedi. Ma il dolore a entrambi i talloni, soprattutto con altre articolazioni doloranti o rigide, una schiena rigida o una rigidità mattutina che dura più di 30\u00A0minuti, può far pensare a un’artrite infiammatoria. Questa combinazione è un motivo per andare dal medico.',
    },
    {
      q: 'La radiografia può mostrare cosa causa il mio dolore al tallone?',
      cites: [CITE.sormaalaCalcaneus, CITE.guideline],
      a: 'A volte, ma una radiografia normale esclude meno di quanto si pensi. In 30\u00A0reclute con una lesione da stress del calcagno vista alla risonanza magnetica, le radiografie semplici la mostravano solo nel 15%. Per una fascite plantare tipica, la linea guida del 2023 dice che di solito gli esami di imaging non servono. È il professionista a decidere se valgono la pena ecografia, risonanza o esami dei nervi.',
    },
    {
      q: 'Perché la mia fascite plantare non migliora?',
      cites: [CITE.latt],
      a: 'I motivi possibili sono diversi, e uno è che potrebbe non essere fascite plantare. Circa il 90% delle persone con fascite plantare migliora con le cure non chirurgiche, quindi un dolore che non è cambiato dopo diverse settimane di allungamenti e lavoro di forza costanti è un buon motivo per far ricontrollare la diagnosi da un professionista sanitario.',
    },
    {
      q: 'Cosa causa il dolore al tallone nei bambini, se non è fascite plantare?',
      cites: [CITE.tuHeelPain],
      a: 'Nei bambini ancora in crescita la causa più comune è la malattia di Sever, un’irritazione della cartilagine di crescita dietro l’osso del tallone. Fa male durante e dopo gli sport con corsa e salti, e un tallone dolente quando lo si stringe dai due lati fa pensare a questa condizione. Un dolore al tallone che non si calma in un bambino va fatto vedere a un professionista sanitario.',
    },
    {
      q: 'Posso fare gli esercizi per la fascite plantare se non sono sicuro di cosa sia?',
      cites: [CITE.guideline],
      a: 'La linea guida del 2023 dà agli allungamenti della fascia plantare e del polpaccio il grado A per la fascite plantare, e sono delicati. Ma se hai bruciore o intorpidimento, gonfiore, un dolore che cresce con l’attività o un dolore dopo un trauma, rivolgiti prima a un professionista sanitario. Interrompi qualsiasi esercizio che peggiora bruscamente il tallone.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'senti bruciore, formicolio, scosse elettriche o intorpidimento al tallone o alla pianta',
      'il dolore al tallone si accompagna a mal di schiena, dolore lungo la gamba o debolezza al piede',
      'il dolore aumenta man mano che cammini o corri, o stringere i lati dell’osso del tallone fa male',
      'il tallone è gonfio, arrossato, caldo o ha un livido, o hai la febbre',
      'fanno male entrambi i talloni e altre articolazioni sono doloranti o rigide, o la rigidità mattutina dura più di 30\u00A0minuti',
      'il dolore è iniziato dopo una caduta, una storta o uno schiocco improvviso, o non riesci a caricare il peso sul piede',
      'il tallone fa male a riposo o ti sveglia di notte',
      'un bambino ha un dolore al tallone che non si calma riducendo lo sport',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per il dolore a tallone e piede. Il suo piano è pensato per il dolore al tallone da fascite plantare, non per le condizioni simili di questa pagina, quindi se il tuo dolore corrisponde a un altro quadro, rivolgiti a un professionista sanitario prima di iniziare.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto al dolore al tallone del mattino, e il piano si adatta. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['hubPlantarFasciitis', 'heelFatPad', 'heelPainAtNight'],
  crumb: 'Dolore al tallone che non è fascite plantare',
  campaign: 'guide-heel-pain-not-plantar-fasciitis-it',
};
