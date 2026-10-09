import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Sindrome del cuscinetto adiposo del tallone (IT) ───────────────────
 *
 * Translated from `articles/heel-fat-pad.ts` (2026-10-08), written around
 * the Italian queries «cuscinetto adiposo del tallone», «atrofia del
 * cuscinetto adiposo», «dolore al centro del tallone». Informal «tu».
 * Figures, grades and qualifiers are identical to the English page;
 * exercise names follow `lib/guides/it.ts`. No new citations.
 */

export const HEEL_FAT_PAD_IT: Guide = {
  lang: 'it',
  page: 'heelFatPad',
  mainSource: CITE.fatPadReview,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Cuscinetto adiposo del tallone: cause e cosa aiuta',
  description:
    'Cuscinetto adiposo del tallone assottigliato: dolore profondo al centro del tallone. Come distinguerlo dalla fascite plantare e cosa aiuta.',
  h1: 'Sindrome del cuscinetto adiposo del tallone: cos’è, in cosa è diversa dalla fascite plantare e cosa dicono gli studi',
  lede:
    'La sindrome del cuscinetto adiposo del tallone è l’assottigliamento o il danno del cuscinetto di grasso sotto l’osso del tallone. Dà un dolore profondo, come un livido, al centro del tallone, soprattutto su superfici dure o a piedi nudi. Potrebbe essere la seconda causa più comune di dolore sotto il tallone dopo la fascite plantare, eppure gli studi su questo problema sono pochi. Una scoping review del 2022 ha trovato solo sette studi originali.',
  intro: [
    'Questa pagina spiega cosa si sa sulla sindrome del cuscinetto adiposo del tallone, come distinguerla dalla fascite plantare e quali misure conservative hanno almeno un po’ di supporto. Se il tuo dolore è più una fitta acuta nella parte interna del tallone ai primi passi del mattino, probabilmente la pagina giusta è [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/). Se è nella parte posteriore del tallone vicino all’Achille, vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/) o [morbo di Haglund](/it/morbo-di-haglund/).',
  ],
  takeaways: [
    'In uno studio su 250\u00A0persone con dolore sotto il tallone, l’atrofia del cuscinetto adiposo spiegava il 14,8% dei casi, cioè era la seconda causa più comune dopo la fascite plantare, al 53,2% (Yi e colleghi, 2011).',
    'Una scoping review del 2022 ha trovato solo 7\u00A0studi originali sulla sindrome del cuscinetto adiposo del tallone e nessuno studio randomizzato controllato che testasse coppette per il tallone o taping proprio per questo problema (Chang e colleghi, 2022).',
    'La differenza clinica chiave: il dolore del cuscinetto adiposo è un dolore profondo al centro del tallone che peggiora su superfici dure e a piedi nudi; il dolore della fascite plantare è una fitta acuta nella parte interna del tallone, peggiore al primo passo, che si calma quando ti scaldi.',
    'Le coppette viscoelastiche per il tallone, le scarpe ammortizzate e il taping low-dye sono molto consigliati, ma non hanno prove da studi randomizzati proprio per la sindrome del cuscinetto adiposo (Chang e colleghi, 2022).',
    'L’atrofia del cuscinetto adiposo non si inverte con l’esercizio. Gli esercizi per la forza di polpaccio e piede possono aiutare il piede a gestire il carico, ma non ricostruiscono il cuscinetto adiposo.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cos’è il cuscinetto adiposo del tallone e cosa si rovina?',
      paragraphs: [
        'Il cuscinetto adiposo del tallone è un’imbottitura specializzata di grasso e tessuto connettivo sotto il calcagno, l’osso del tallone. È fatto a camere separate da pareti fibrose (setti) che assorbono l’urto quando cammini o corri. Un cuscinetto sano è spesso circa 1-2\u00A0centimetri.',
        'Nella sindrome del cuscinetto adiposo del tallone questa imbottitura si assottiglia, si irrigidisce o si rovina. I setti perdono elasticità, il grasso si comprime e l’osso del tallone si ritrova più vicino al suolo. Il risultato è dolore quando appoggi il piede su superfici dure o cammini scalzo, come se camminassi su un sasso.',
        'La scoping review del 2022 di Chang e colleghi ha trovato che gli studi descrivono spesso il problema come «atrofia del cuscinetto adiposo», ma possono esserci anche infiammazione, fibrosi o difetti dei setti senza un vero assottigliamento. All’ecografia, un cuscinetto sotto 1\u00A0centimetro è in genere considerato atrofico.',
      ],
      cites: [CITE.fatPadReview],
    },
    {
      h2: 'Quanto è comune la sindrome del cuscinetto adiposo del tallone?',
      keyFact: 'Uno studio trasversale su 250\u00A0persone con dolore al tallone ha trovato la fascite plantare nel 53,2% dei casi e la sola atrofia del cuscinetto adiposo in circa il 14,8%, con entrambe presenti nel 9,2% (Yi e colleghi, 2011).',
      paragraphs: [
        'In uno studio trasversale su 250\u00A0persone con dolore sotto il tallone, Yi e colleghi hanno trovato un’atrofia del cuscinetto adiposo nel 14,8% dei casi. La fascite plantare era la causa più comune, al 53,2%, e il 9,2% aveva entrambi i problemi insieme. Lo studio ha usato misure ecografiche e criteri clinici per separare i due.',
        'La scoping review del 2022 ha notato che il dato del 14,8% viene da due studi e che la frequenza reale è incerta. La sindrome del cuscinetto adiposo viene spesso scambiata per fascite plantare, perché entrambe danno dolore sotto il tallone e possono esserci insieme. Quando le cure standard per la fascite plantare non aiutano, l’atrofia del cuscinetto adiposo è uno dei problemi da riconsiderare.',
      ],
      cites: [CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'In cosa il dolore del cuscinetto adiposo è diverso dalla fascite plantare?',
      paragraphs: [
        'I due problemi si sovrappongono ma hanno schemi diversi. Il dolore del cuscinetto adiposo è un dolore profondo e sordo, centrato sotto l’osso del tallone. È peggiore su superfici dure, a piedi nudi e dopo tanto tempo in piedi. Di solito non ha la fitta acuta «del primo passo» tipica della fascite plantare e può non calmarsi con il movimento.',
        'Il dolore della fascite plantare è più acuto nella parte interna del tallone, raggiunge il picco al primo passo dopo il riposo e migliora quando cammini. Se premi al centro del tallone e ti sembra di sentire l’osso proprio sotto il dito con pochissima imbottitura, l’atrofia del cuscinetto adiposo è più probabile.',
        'Puoi avere entrambi i problemi nello stesso momento. Lo studio del 2011 li ha trovati insieme nel 9,2% del campione. Anche la fascite plantare può portare a problemi del cuscinetto adiposo: quando la fascia è lesionata cambia il modo in cui distribuisci il peso, e quella pressione in più sul cuscinetto del tallone ne accelera l’usura.',
      ],
      table: {
        caption: 'Sindrome del cuscinetto adiposo del tallone e fascite plantare a confronto',
        head: ['Caratteristica', 'Sindrome del cuscinetto adiposo del tallone', 'Fascite plantare'],
        rows: [
          ['Dove fa male', 'Centro del tallone, proprio sotto l’osso', 'Parte mediale (interna) del tallone, vicino all’arco'],
          ['Peggio quando', 'Superfici dure, piedi nudi, a lungo in piedi', 'Primi passi dopo il riposo, poi si calma'],
          ['Tipo di dolore', 'Profondo, come un livido', 'Acuto, come uno strappo'],
          ['Si calma scaldandosi?', 'Spesso no', 'Di solito migliora dopo qualche minuto di cammino'],
          ['Alla palpazione', 'Imbottitura sottile, il calcagno si sente facilmente', 'Dolente al tubercolo mediale del calcagno'],
        ],
      },
      cites: [CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'Perché il cuscinetto adiposo del tallone si assottiglia?',
      paragraphs: [
        'L’età è il fattore principale. Dopo i 40\u00A0anni circa, il cuscinetto adiposo perde naturalmente acqua, collagene ed elasticità. Anni di attività ad alto impatto, ore in piedi su superfici dure e camminate a piedi nudi accelerano il processo.',
        'Altri fattori di rischio sono un peso corporeo più alto (più forza a ogni passo), infiltrazioni ripetute di corticosteroidi nel tallone (il cortisone può distruggere il tessuto adiposo), il diabete, il piede cavo (che concentra il carico su tallone e avampiede) e una storia familiare di problemi del tessuto connettivo.',
        'A differenza di un muscolo o di un tendine, il cuscinetto adiposo non si ricostruisce con l’esercizio o il riposo. Una volta assottigliato, l’obiettivo pratico è proteggere quello che resta e ridurre l’urto che arriva all’osso del tallone.',
      ],
      cites: [CITE.fatPadReview, CITE.yiFatPad],
    },
    {
      h2: 'Cosa aiuta il dolore del cuscinetto adiposo del tallone?',
      keyFact: 'Un singolo caso clinico ha riportato sollievo dal dolore con coppette in gel di silicone per il tallone a uno e tre mesi, ma nessuno studio randomizzato ha testato coppette o taping per questo problema (Chang e colleghi, 2022).',
      paragraphs: [
        'I primi passi consigliati più spesso per la sindrome del cuscinetto adiposo del tallone sono esterni: coppette viscoelastiche per il tallone, solette ammortizzate e scarpe con suole spesse che assorbono gli urti. Servono a sostituire l’ammortizzazione che il cuscinetto adiposo non dà più.',
        'La scoping review del 2022 ha segnalato una lacuna scomoda: nessuno studio randomizzato controllato ha testato coppette per il tallone o taping proprio per la sindrome del cuscinetto adiposo del tallone. Un singolo caso clinico ha descritto sollievo dal dolore con coppette in gel di silicone dopo uno e tre mesi. Alcuni piccoli studi sul taping low-dye per il dolore sotto il tallone in generale riportano un modesto calo del dolore rispetto a un trattamento finto o a nessun trattamento, ma nessuno separa la sindrome del cuscinetto adiposo dalle altre cause di dolore al tallone, quindi non si sa quanto possa aiutare qui.',
        'Nonostante le prove deboli, la logica è semplice: se l’imbottitura non c’è più, aggiungerne una dall’esterno è un passo ragionevole. Evita di camminare scalzo su superfici dure. Scegli scarpe con il tallone ben ammortizzato ed evita scarpe piatte con la suola sottile. Sono raccomandazioni di consenso, non testate in studi clinici, e questa pagina lo dice chiaramente.',
      ],
      cites: [CITE.fatPadReview],
    },
    {
      h2: 'Gli esercizi aiutano la sindrome del cuscinetto adiposo del tallone?',
      paragraphs: [
        'Gli esercizi non possono ricostruire un cuscinetto adiposo assottigliato. È un cambiamento strutturale, non una debolezza muscolare. Ma l’esercizio può comunque avere un ruolo nel gestire il piede intorno al problema.',
        'La forza del polpaccio conta perché un polpaccio più forte assorbe una parte maggiore della forza dell’atterraggio prima che arrivi al tallone. È la stessa logica di carico dei programmi di sollevamenti sulle punte per la fascite plantare, ma nella sindrome del cuscinetto adiposo l’obiettivo è distribuire il carico, non riparare il tessuto. Il lavoro sui muscoli intrinseci del piede (piede corto, apertura delle dita) può aiutare il piede a gestire il contatto con il suolo.',
        'Le prove su questi esercizi proprio per la sindrome del cuscinetto adiposo mancano. Nessuno studio li ha testati per questo problema. Sono presi in prestito dagli studi più ampi su dolore al tallone e forza del piede. Gli esercizi di Walkito sono pensati per la fascite plantare e la forza del piede. Sono un’aggiunta ragionevole se un professionista sanitario ha confermato l’atrofia del cuscinetto adiposo, ma non sono stati testati specificamente per questo, ed è giusto saperlo.',
      ],
      exercises: [
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'early', why: 'Nessuno studio ha testato i sollevamenti sulle punte per la sindrome del cuscinetto adiposo. Presi in prestito dagli studi sul carico nella fascite plantare come modo per migliorare la capacità del polpaccio e ridurre l’urto sul tallone.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, scendi piano in tre secondi. I due piedi si dividono il carico. Se fa male al tallone, prova prima con scarpe ammortizzate o su una superficie morbida.',
          often: 'Quasi tutti i giorni della settimana',
          feel: 'Lavoro nei polpacci, non un dolore acuto al tallone',
          stop: 'Dolore al tallone sopra 5/10 durante l’esercizio o peggiore la mattina dopo',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali piano, scendi in tre secondi',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Piede corto, da seduto',
          evidence: { level: 'early', why: 'Testato per il sostegno dell’arco nel piede piatto, non per la sindrome del cuscinetto adiposo. Un modo ragionevole per costruire il controllo dei muscoli intrinseci del piede.' },
          dose: '3\u00A0serie da 10, ogni piede',
          how: 'Siediti con i piedi appoggiati a terra. Senza arricciare le dita, prova a tirare l’avampiede verso il tallone, sollevando l’arco. Le dita restano appoggiate a terra. Tieni 5\u00A0secondi.',
          often: 'Ogni giorno, come parte del lavoro sui muscoli del piede',
          feel: 'Una contrazione sotto l’arco, non al tallone',
          stop: 'Dolore al tallone durante la tenuta',
          media: 'short_foot_seated',
          caption: 'Piede corto: tira l’avampiede verso il tallone senza arricciare le dita',
          alt: 'Una figura seduta con le dita appoggiate e l’arco visibilmente sollevato',
        },
      ],
      cites: [CITE.fatPadReview],
    },
    {
      h2: 'E le infiltrazioni o la chirurgia?',
      keyFact: 'Una revisione ha trovato che uno studio con follow-up a lungo termine, in media nove anni, associava l’innesto di grasso nel tallone a un miglioramento funzionale duraturo, anche se lo studio era piccolo (Chang e colleghi, 2022).',
      paragraphs: [
        'Quando l’ammortizzazione esterna non basta, alcuni professionisti parlano di filler iniettabili o di innesto di grasso autologo, in cui il grasso viene prelevato da un’altra parte del corpo e iniettato sotto l’osso del tallone. Uno studio con follow-up a lungo termine (in media 9\u00A0anni) ha trovato che l’innesto di grasso nel tallone era associato a un miglioramento funzionale duraturo, anche se lo studio era piccolo.',
        'Sono procedure specialistiche e non opzioni di prima linea. Hanno i loro rischi e non sono molto diffuse. Questa pagina non le consiglia né le sconsiglia. Se imbottiture esterne, cambio di scarpe e modifiche dell’attività non hanno aiutato dopo diversi mesi, uno specialista di piede e caviglia può valutare se un’infiltrazione o un innesto siano adatti.',
        'Le infiltrazioni di corticosteroidi a volte si usano per il dolore al tallone, ma nella sindrome del cuscinetto adiposo possono essere controproducenti: il cortisone può distruggere ulteriormente il tessuto adiposo e peggiorare l’atrofia.',
      ],
      cites: [CITE.fatPadReview],
    },
    {
      h2: 'Come si diagnostica la sindrome del cuscinetto adiposo del tallone?',
      paragraphs: [
        'Spesso un professionista sanitario può sospettare un’atrofia del cuscinetto adiposo dalla storia e dalla visita. Lo schema del dolore (profondo al centro del tallone, peggiore a piedi nudi su superfici dure, non si calma scaldandosi) insieme a un calcagno sottile e facile da sentire al tatto orientano verso la diagnosi.',
        'L’ecografia può misurare lo spessore del cuscinetto adiposo. Un cuscinetto sotto 1\u00A0centimetro è in genere considerato atrofico. La risonanza magnetica può mostrare cambiamenti nella struttura interna del cuscinetto, come danni ai setti, fibrosi o liquido. La scoping review del 2022 ha notato che i criteri di imaging non sono standardizzati e che la diagnosi è spesso clinica.',
        'La sindrome del cuscinetto adiposo è in parte una diagnosi di esclusione. Se la fascite plantare è stata trattata in modo adeguato e il dolore resta, e le caratteristiche cliniche corrispondono, la diagnosi va riconsiderata. È anche possibile avere entrambi i problemi nello stesso momento.',
      ],
      cites: [CITE.fatPadReview, CITE.yiFatPad],
    },
  ],
  faq: [
    {
      q: 'Che sensazione dà la sindrome del cuscinetto adiposo del tallone?',
      cites: [CITE.fatPadReview],
      a: 'Un dolore profondo, come un livido, al centro del tallone, come se camminassi direttamente sull’osso. È peggiore su superfici dure o a piedi nudi e di solito non migliora dopo qualche minuto di cammino come succede con la fascite plantare. Premendo al centro del tallone puoi avere la sensazione che l’osso sia proprio sotto il dito.',
    },
    {
      q: 'La sindrome del cuscinetto adiposo è la stessa cosa della fascite plantare?',
      cites: [CITE.yiFatPad, CITE.fatPadReview],
      a: 'No. La fascite plantare è un’infiammazione o una degenerazione della fascia plantare, che dà un dolore acuto nella parte interna del tallone, peggiore al primo passo. La sindrome del cuscinetto adiposo è l’assottigliamento dell’imbottitura sotto l’osso del tallone, che dà un dolore profondo al centro su superfici dure. Possono esserci insieme, trovate entrambe nel 9,2% di 250\u00A0pazienti con dolore al tallone in uno studio, ma le cure sono diverse.',
    },
    {
      q: 'Il cuscinetto adiposo del tallone può ricrescere?',
      cites: [CITE.fatPadReview],
      a: 'No. Una volta assottigliato, il cuscinetto adiposo del tallone non si rigenera con l’esercizio o il riposo. La strategia è esterna: coppette ammortizzate per il tallone, scarpe con suole spesse ed evitare le superfici dure a piedi nudi. Nei casi gravi, l’innesto di grasso è un’opzione di cui può parlarti uno specialista.',
    },
    {
      q: 'Quali sono le scarpe migliori per la sindrome del cuscinetto adiposo del tallone?',
      cites: [CITE.fatPadReview],
      a: 'Scarpe con suole spesse e ammortizzate e un’imbottitura integrata al tallone. Evita scarpe piatte con la suola sottile e di andare scalzo su pavimenti duri. Le coppette viscoelastiche per il tallone messe dentro la scarpa aggiungono un altro strato di ammortizzazione. Nessuno studio randomizzato ha testato tipi specifici di scarpe per la sindrome del cuscinetto adiposo, ma il principio di sostituire l’ammortizzazione persa è ampiamente accettato.',
    },
    {
      q: 'Le infiltrazioni di cortisone aiutano la sindrome del cuscinetto adiposo del tallone?',
      cites: [CITE.fatPadReview],
      a: 'In genere le infiltrazioni di cortisone non sono consigliate per la sindrome del cuscinetto adiposo del tallone. I corticosteroidi possono distruggere il tessuto adiposo e peggiorare l’atrofia che causa il problema. Se si parla di infiltrazioni, è un punto da sollevare con il tuo professionista sanitario.',
    },
    {
      q: 'Come si diagnostica la sindrome del cuscinetto adiposo del tallone?',
      cites: [CITE.fatPadReview, CITE.yiFatPad],
      a: 'Un professionista sanitario può sospettarla dallo schema del dolore e dalla visita. L’ecografia misura lo spessore del cuscinetto adiposo, e un cuscinetto sotto 1\u00A0centimetro è in genere considerato atrofico. La risonanza magnetica può mostrare danni interni. I criteri di imaging non sono standardizzati, ed è in parte una diagnosi di esclusione quando la cura per la fascite plantare non ha aiutato.',
    },
    {
      q: 'Quanto ci vuole per migliorare la sindrome del cuscinetto adiposo del tallone?',
      cites: [CITE.fatPadReview],
      a: 'Non ci sono tempi stabiliti, perché l’atrofia del cuscinetto adiposo è un assottigliamento strutturale che esercizio e riposo non invertono. Una scoping review del 2022 non ha trovato studi che misurassero i tempi di recupero per questo problema. Coppette ammortizzate per il tallone, scarpe con la suola più spessa ed evitare di camminare scalzo su pavimenti duri possono alleviare il dolore, ma di solito l’assottigliamento resta.',
    },
    {
      q: 'Come si fa il taping per il cuscinetto adiposo del tallone?',
      cites: [CITE.fatPadReview],
      a: 'Il taping low-dye solleva l’arco e sposta la pressione lontano dal tallone, con strisce che passano sotto la pianta e salgono lungo i lati del piede; di solito il primo lo applica un professionista sanitario o un fisioterapista per mostrarti lo schema. La scoping review del 2022 non ha trovato studi che testassero il taping proprio per la sindrome del cuscinetto adiposo, quindi è una tecnica presa in prestito, non dimostrata.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore al tallone peggiora nonostante l’ammortizzazione e il cambio di scarpe',
      'il dolore c’è a riposo o ti sveglia di notte, il che può far pensare a una frattura da stress, a un nervo compresso o a un’altra causa invece che alla sola atrofia del cuscinetto adiposo',
      'senti bruciore, formicolio o intorpidimento nel tallone o nella pianta',
      'hai fatto infiltrazioni ripetute di corticosteroidi nel tallone e il dolore sta peggiorando',
      'sono colpiti entrambi i talloni e hai una rigidità del mattino che dura più di 30\u00A0minuti',
      'non riesci a caricare il peso sul piede o zoppichi',
      'il tallone è arrossato, caldo o gonfio',
    ],
  },
  program: {
    h2: 'Dove si inserisce un piano di esercizi',
    text: 'Walkito costruisce sessioni quotidiane con sollevamenti sulle punte, lavoro sui muscoli del piede e stretching. Questi esercizi sono pensati per la fascite plantare e la forza del piede. Possono aiutare un piede con atrofia del cuscinetto adiposo a gestire meglio il carico, ma non sono stati testati proprio per questo problema e non ricostruiscono un cuscinetto adiposo assottigliato. Se un professionista sanitario ha confermato la sindrome del cuscinetto adiposo, un piano di esercizi come quello di Walkito è un complemento ragionevole ad ammortizzazione e scarpe, non un sostituto.',
    more: [
      'Le sessioni durano 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni un test controlla resistenza del polpaccio ed equilibrio. Walkito non fa diagnosi. Se non sei sicuro che il tuo dolore al tallone sia atrofia del cuscinetto adiposo o fascite plantare, rivolgiti prima a un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Cuscinetto adiposo del tallone',
  campaign: 'guide-heel-fat-pad-it',
};
