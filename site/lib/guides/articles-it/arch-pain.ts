import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dolore all’arco plantare (IT) ──────────────────────────────────────
 *
 * Translated from `articles/arch-pain.ts` (2026-10-08), written around the
 * Italian queries «dolore arco plantare», «male all’arco del piede»,
 * «dolore arco plantare quando cammino». Informal «tu». Figures, doses,
 * grades and qualifiers are identical to the English page; exercise names
 * follow `lib/guides/it.ts`. No new citations.
 */

export const ARCH_PAIN_IT: Guide = {
  lang: 'it',
  page: 'archPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dolore all’arco plantare: cause, esercizi, cosa fare',
  description:
    'Dolore all’arco plantare quando cammini: fascite plantare, piede piatto, tibiale posteriore, piede cavo o nervi. Come distinguerli ed esercizi utili.',
  h1: 'Dolore all’arco plantare: da cosa dipende e cosa fare',
  lede:
    'Il dolore all’arco del piede di solito viene da uno di pochi problemi: fascite plantare, piede piatto o arco crollato, disfunzione del tendine tibiale posteriore, piede cavo che non assorbe bene gli urti, sovraccarico, oppure un’irritazione dei nervi come la sindrome del tunnel tarsale. La causa cambia quello che conviene fare. Questa pagina mette in fila le cause più comuni, rimanda alle guide complete sugli esercizi dove esistono e spiega gli esercizi che aiutano direttamente l’arco.',
  takeaways: [
    'La fascite plantare è la singola causa più comune di dolore all’arco e al tallone. La linea guida del 2023 sul dolore al tallone dà allo stretching una A e al lavoro di forza una B (Koc e colleghi, 2023).',
    'La disfunzione del tendine tibiale posteriore, un indebolimento del tendine che sostiene l’arco, è la causa più comune del piede piatto acquisito nell’adulto (Ross e colleghi, 2018).',
    'Sia il piede piatto sia il piede cavo cambiano il modo in cui la forza attraversa l’arco durante la camminata, ma gli schemi del dolore e gli esercizi sono diversi.',
    'Una ridotta dorsiflessione della caviglia, cioè un polpaccio rigido, era il fattore di rischio indipendente più forte per la fascite plantare in uno studio caso-controllo con 50\u00A0casi e 100\u00A0controlli (Riddle e colleghi, 2003).',
    'Un dolore all’arco che si accompagna a intorpidimento, formicolio, bruciore o debolezza richiede un professionista sanitario per escludere un nervo compresso o una causa neurologica prima degli esercizi.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Da cosa dipende il dolore all’arco plantare?',
      paragraphs: [
        'L’arco è sostenuto dalla fascia plantare, dal tendine tibiale posteriore, dai muscoli intrinseci del piede e da ossa e legamenti del mesopiede. Il dolore all’arco significa che una o più di queste strutture è sotto uno sforzo maggiore di quello che riesce a reggere. Le cause più comuni si dividono in pochi schemi:',
        {
          list: [
            '**La fascite plantare** è la singola causa principale. La fascia plantare, una banda spessa di tessuto che va dal tallone alla base delle dita, si irrita per il carico ripetuto. Il dolore di solito è più forte vicino al tallone ma spesso si estende all’arco, soprattutto quando è coinvolta la parte della fascia verso l’arco. Il segno tipico è un dolore acuto ai primi passi dopo il riposo. Vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) e la [panoramica sulla fascite plantare](/it/fascite-plantare/) per la guida completa.',
            '**Il piede piatto e l’arco crollato** danno dolore all’arco allungando troppo la fascia plantare e il tendine tibiale posteriore. Quando l’arco crolla stando in piedi e camminando, queste strutture prendono un carico che non sono fatte per reggere a lungo. Vedi [esercizi per il piede piatto](/it/esercizi-piede-piatto/) e la [panoramica sul piede piatto](/it/piede-piatto/).',
            '**La disfunzione del tendine tibiale posteriore** è la causa più comune del piede piatto acquisito nell’adulto. Il tendine tibiale posteriore passa dietro la caviglia, sul lato interno, e sotto l’arco, e lo tiene su. Quando questo tendine si indebolisce o si lesiona, l’arco crolla poco alla volta. Il dolore si sente lungo la parte interna della caviglia e nell’arco, e peggiora con l’attività. Una revisione sistematica del 2018 sugli esercizi per questo problema ha trovato prove limitate ma promettenti per rinforzo e stretching. Vedi [esercizi per la disfunzione del tendine tibiale posteriore](/it/disfunzione-tendine-tibiale-posteriore/).',
            '**Il piede cavo** dà dolore all’arco in un altro modo. Un arco alto e rigido non si flette abbastanza per assorbire l’urto, quindi la forza si concentra sotto il tallone e sotto l’avampiede invece di distribuirsi sul mesopiede. Il dolore sotto l’arco in un piede cavo spesso viene da una fascia plantare rigida. Vedi [esercizi per il piede cavo](/it/piede-cavo-esercizi/).',
            '**Il sovraccarico** senza un problema preciso è comune in chi aumenta all’improvviso camminata, corsa o ore in piedi. I muscoli dell’arco e la fascia plantare non sono ancora abbastanza forti per la nuova richiesta e protestano. Di solito migliora con un ritorno graduale al carico precedente più il rinforzo di polpaccio e arco.',
            '**Un’irritazione dei nervi** come la sindrome del tunnel tarsale può dare bruciore, formicolio o intorpidimento lungo l’arco. Il nervo tibiale posteriore passa dietro il malleolo interno e arriva nella pianta del piede. Se viene compresso, il dolore può somigliare a quello della fascite plantare ma si accompagna a disturbi della sensibilità che la fascite non dà. Serve un professionista sanitario.',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview, CITE.riddle],
    },
    {
      h2: 'Come si distinguono?',
      paragraphs: [
        'Il punto in cui fa male, il momento della giornata in cui è peggio e cosa lo migliora o lo peggiora danno gli indizi più chiari.',
      ],
      table: {
        caption: 'Dolore all’arco plantare: schemi per causa',
        head: ['Causa', 'Dove fa male', 'Quando è peggio', 'Indizio chiave'],
        rows: [
          ['Fascite plantare', 'Sotto il tallone, fino all’arco', 'Primi passi dopo il riposo, soprattutto al mattino', 'Il dolore acuto si calma dopo qualche minuto di cammino'],
          ['Piede piatto / arco crollato', 'Lungo l’arco interno e a volte la parte interna della caviglia', 'Dopo molto tempo in piedi o a camminare', 'L’arco crolla visibilmente in piedi; il dolore si calma senza carico'],
          ['Disfunzione del tibiale posteriore', 'Parte interna della caviglia e arco', 'Durante e dopo l’attività', 'Il sollevamento sulle punte su una gamba è debole o doloroso dal lato colpito'],
          ['Piede cavo', 'Sotto il mesopiede o lungo l’arco esterno', 'Camminando o correndo, soprattutto su superfici dure', 'L’arco resta alto anche in piedi; scarso assorbimento degli urti'],
          ['Sovraccarico', 'Dolore diffuso all’arco', 'Dopo un aumento improvviso del carico', 'Nessuno schema di dolore al mattino; migliora con il riposo'],
          ['Nervo (tunnel tarsale)', 'Lungo l’arco con formicolio o bruciore', 'Variabile, a volte a riposo', 'Intorpidimento, formicolio o bruciore che la fascite plantare non dà'],
        ],
      },
      after: [
        'Se il dolore all’arco segue lo schema del dolore al mattino ed è concentrato vicino al tallone, parti dalla pagina sulla [fascite plantare](/it/fascite-plantare/). Se l’arco crolla quando sei in piedi, vedi [esercizi per il piede piatto](/it/esercizi-piede-piatto/). Se il dolore si accompagna a intorpidimento o bruciore, o se un sollevamento sulle punte su una gamba è debole o impossibile da un lato, rivolgiti a un professionista sanitario prima di iniziare gli esercizi.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quali esercizi aiutano il dolore all’arco plantare?',
      keyFact: 'Nella linea guida del 2023 sul dolore al tallone, l’allungamento della fascia plantare e del polpaccio ottiene il grado di evidenza più alto, A, mentre il lavoro di forza ha un grado più basso, B (Koc e colleghi, 2023).',
      paragraphs: [
        'Gli esercizi qui sotto lavorano sull’arco stesso e sui muscoli del polpaccio che tirano su di esso. Funzionano meglio quando il dolore all’arco è legato a fascite plantare, piede piatto o sovraccarico generico. Per la disfunzione del tibiale posteriore o il dolore all’arco legato ai nervi, il piano di esercizi va guidato da un professionista sanitario. Se un esercizio porta il dolore a **6/10 o più**, fermati per quel giorno.',
        'Queste sono le dosi di partenza di Walkito, non quelle dei protocolli di ricerca. La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio una A e al lavoro di forza una B. L’esercizio del piede corto e il massaggio con la pallina hanno prove più deboli da soli. [Come sono scritte queste guide](/it/chi-siamo/).',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla il piede dolorante sull’altro ginocchio. Tira indietro le dita finché senti un allungamento lungo l’arco, non nel polpaccio. Se l’arco è peggio al mattino, fai questo esercizio prima che il piede tocchi terra.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento sotto l’arco',
          stop: 'Il dolore arriva a 6/10',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita finché senti l’arco',
          alt: 'Una figura che tira indietro le dita di un piede, con l’arco evidenziato',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 dà all’allungamento del polpaccio una A. Un polpaccio rigido è il fattore di rischio più forte per la fascite plantare (Riddle 2003).' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro, gamba dietro tesa, tallone giù, fianchi in avanti. Il gastrocnemio, il muscolo del polpaccio più superficiale, si allunga solo con il ginocchio teso.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: { level: 'strong', why: 'Stesso grado A nella linea guida. Lavora sul soleo, il muscolo più profondo del polpaccio.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione al muro, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa del polpaccio evidenziata',
        },
        {
          name: 'Piede corto, da seduto',
          evidence: { level: 'early', why: 'Una revisione del 2024 ha trovato che l’allenamento del piede corto cambiava la forma dell’arco in alcuni studi, ma le prove sulla riduzione del dolore da solo sono deboli.' },
          dose: '3\u00A0serie da 10\u00A0tenute da 5\u00A0secondi, ogni piede',
          how: 'Siediti con il piede appoggiato a terra. Tira l’avampiede verso il tallone così l’arco si solleva. Non arricciare le dita. L’esercizio del piede corto allena i muscoli intrinseci che tengono su l’arco.',
          often: 'Giorni di forza',
          feel: 'L’arco che si solleva mentre le dita restano appoggiate',
          stop: 'Il dolore arriva a 6/10',
          media: 'short_foot_seated',
          caption: 'Piede corto: tira l’avampiede verso il tallone',
          alt: 'Un piede appoggiato da seduti con l’arco che si solleva, le dita rilassate a terra',
        },
        {
          name: 'Inversione con elastico (tibiale posteriore)',
          evidence: { level: 'moderate', why: 'Attivazione selettiva del tibiale posteriore confermata con la risonanza magnetica (Kulig 2004). Raccomandata per la riabilitazione della disfunzione del tibiale posteriore nella revisione del 2018.' },
          dose: '3\u00A0serie da 15, ogni piede',
          how: 'Siediti con un elastico agganciato intorno all’avampiede e fissato di lato. Gira il piede verso l’interno contro l’elastico. Tieni fermo il ginocchio così il movimento parte dalla caviglia, non dalla gamba. Così lavori sul tendine tibiale posteriore, il tendine che tiene su l’arco.',
          often: 'Giorni di forza',
          feel: 'Lavoro lungo la parte interna della caviglia e sotto l’arco',
          stop: 'Il dolore arriva a 6/10',
          media: 'band_inversion',
          caption: 'Inversione con elastico: muovi il piede, non la gamba',
          alt: 'Una figura seduta che gira il piede verso l’interno contro un elastico, con la parte interna della caviglia evidenziata',
        },
        {
          name: 'Massaggio con la pallina',
          evidence: { level: 'early', why: 'Non testato negli studi di questa pagina. Una misura di sollievo tra una sessione e l’altra.' },
          dose: '2\u00A0minuti, ogni piede',
          how: 'Siediti e fai rotolare piano la pianta del piede su una pallina da massaggio o su una bottiglia d’acqua congelata. Pressione decisa, mai tanto da farti fare una smorfia. Serve a calmare il tessuto dopo che ha lavorato.',
          often: 'Giorni di recupero',
          feel: 'Una pressione decisa sotto il piede',
          stop: 'Il dolore arriva a 6/10',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: lento e deciso, alleggerisci se senti dolore acuto',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.posteriorTibialReview, CITE.kulig, CITE.cheng],
    },
    {
      h2: 'Quando il dolore all’arco è il segno di qualcos’altro?',
      paragraphs: [
        'La maggior parte del dolore all’arco risponde a stretching, adattamento del carico e tempo. Ma alcuni schemi indicano problemi che richiedono un professionista sanitario prima degli esercizi:',
        {
          list: [
            '**Sintomi nervosi:** Un dolore con intorpidimento, formicolio o bruciore può venire dalla sindrome del tunnel tarsale, in cui il nervo tibiale posteriore è compresso dietro la caviglia, sul lato interno. Serve una diagnosi clinica, non solo esercizi.',
            '**Appiattimento da un lato:** Un dolore all’arco che si accompagna a un appiattimento progressivo del piede, soprattutto da un lato, può indicare una disfunzione del tendine tibiale posteriore in fase avanzata. Il test del sollevamento sulle punte su una gamba è un controllo semplice: se non riesci a salire del tutto sulle punte su un piede, o fa molto più male da un lato, un professionista sanitario dovrebbe valutare il tendine prima che tu lo carichi di più.',
            '**Un solo punto dolente:** Un dolore in un punto preciso che peggiora sempre di più con l’attività e non si calma con il normale riposo può essere una frattura da stress di una delle piccole ossa del mesopiede. Servono esami di imaging, non stretching.',
            '**Bambini:** Il dolore all’arco nei bambini tra 8 e 15\u00A0anni può essere un’[apofisite calcaneare (malattia di Sever)](/it/malattia-di-sever/), che riguarda la cartilagine di accrescimento e non la fascia. Quella pagina spiega cosa aiuta nei bambini. Walkito è pensato per gli adulti.',
          ],
        },
      ],
      cites: [CITE.posteriorTibialReview],
    },
    {
      h2: 'La forma del piede influisce sul dolore all’arco?',
      figure: { id: 'arches', caption: 'Le stesse ossa del piede con un piede piatto, un arco tipico e un piede cavo, viste dal lato interno.', alt: 'Tre piedi visti dal lato interno su un pavimento piano: un piede piatto con l’arco appoggiato a terra, un arco tipico con un piccolo spazio sotto e un piede cavo con un grande spazio sotto la parte centrale del piede.' },
      paragraphs: [
        'Sì. Sia il piede piatto sia il piede cavo cambiano il modo in cui la forza attraversa il piede, ma in direzioni opposte.',
        'Un piede piatto lascia crollare l’arco sotto carico, allungando la fascia plantare e il tendine tibiale posteriore oltre il loro raggio comodo. Gli esercizi per il piede piatto puntano a rinforzare i muscoli dell’arco (piede corto, apertura delle dita, inversione con elastico) e l’anca (abduzione dell’anca), perché un’anca che cede in appoggio su una gamba spinge l’arco verso l’interno. Vedi [esercizi per il piede piatto](/it/esercizi-piede-piatto/).',
        'Un piede cavo è rigido e non si flette abbastanza per distribuire l’urto. La forza si concentra sul tallone e sull’avampiede. In un piede cavo la fascia plantare è spesso rigida. Gli esercizi puntano ad allungare polpaccio e fascia plantare, più un lavoro di stabilità della caviglia. Per il dolore da piede cavo, i plantari ammortizzati o su misura hanno le prove migliori. Vedi [esercizi per il piede cavo](/it/piede-cavo-esercizi/).',
        'Un arco normale con un sovraccarico improvviso, per esempio una settimana con molta più camminata del solito, dà un dolore diffuso all’arco che risponde bene agli esercizi di questa pagina più un ritorno graduale al carico normale.',
      ],
    },
    {
      h2: 'E plantari e scarpe per il dolore all’arco?',
      paragraphs: [
        'La linea guida del 2023 sul dolore al tallone dà ai plantari un grado B contro il loro uso da soli per il dolore a breve termine della fascite plantare. I plantari insieme ad altre cure, come lo stretching, ottengono una C a favore. Le scarpe che sostengono il piede sono consigliate spesso e possono ridurre il fastidio, ma nessuno studio ampio le ha mostrate migliori di stretching e lavoro di forza.',
        'Per il piede piatto, un supporto per l’arco interno può ridurre il crollo dell’arco stando in piedi e camminando, e lasciare meno lavoro al tendine tibiale posteriore e alla fascia plantare. Per il piede cavo, un plantare ammortizzato assorbe l’urto che l’arco rigido non assorbe. In uno studio del 2006 su 154\u00A0persone con dolore da piede cavo, i plantari su misura hanno migliorato dolore e funzionalità più di una soletta finta a tre mesi (Burns e colleghi, 2006).',
        '**Scarpe e solette aiutano a gestire i sintomi mentre l’esercizio costruisce la capacità di cui il piede ha bisogno.** Non si sostituiscono a vicenda.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Qual è la causa più comune del dolore all’arco plantare?',
      cites: [CITE.guideline],
      a: 'La fascite plantare è la singola causa più comune. Succede quando la fascia plantare, una banda spessa di tessuto sotto il piede, si irrita per il carico ripetuto. Il dolore di solito è vicino al tallone ma spesso si estende all’arco, soprattutto quando è coinvolta la parte della fascia verso l’arco. La linea guida del 2023 sul dolore al tallone dà allo stretching una A e al lavoro di forza una B.',
    },
    {
      q: 'Perché mi fa male l’arco del piede quando cammino?',
      a: 'Il dolore all’arco quando cammini di solito viene da poche fonti: fascite plantare, piede piatto che lascia crollare l’arco sotto carico, disfunzione del tendine tibiale posteriore, un polpaccio rigido che scarica lo sforzo sull’arco, o semplicemente camminare più di quanto il piede sia allenato a fare. Lo schema del dolore, soprattutto se è peggio al mattino o dopo l’attività, aiuta a capire quale.',
    },
    {
      q: 'Il piede piatto può causare dolore all’arco?',
      a: 'Sì. Quando l’arco crolla stando in piedi e camminando, la fascia plantare e il tendine tibiale posteriore vengono allungati oltre il loro raggio normale. Questo allungamento dà un dolore all’arco, e a volte lungo la parte interna della caviglia. Rinforzare i muscoli intrinseci del piede con esercizi come il piede corto e l’inversione con elastico può aiutare a sostenere l’arco dall’interno.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Il piede cavo può causare dolore all’arco?',
      a: 'Sì, ma per il motivo opposto. Un arco alto è rigido e non assorbe bene gli urti. L’impatto si concentra sul tallone e sull’avampiede, e la fascia plantare rigida di un piede cavo può far male lungo tutta la sua lunghezza. Allungare polpaccio e fascia plantare, più plantari ammortizzati, sono gli approcci principali. Vedi [esercizi per il piede cavo](/it/piede-cavo-esercizi/) per i dettagli.',
    },
    {
      q: 'Quando andare dal medico per il dolore all’arco plantare?',
      a: 'Rivolgiti a un professionista sanitario se il dolore si accompagna a intorpidimento, formicolio o bruciore, che possono indicare un nervo compresso. Fallo anche se l’arco si sta appiattendo da un lato, se un sollevamento sulle punte su una gamba è debole o impossibile su un piede, se il dolore è in un punto preciso e peggiora, o se non è migliorato dopo diverse settimane di stretching e adattamento del carico.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'I plantari aiutano il dolore all’arco plantare?',
      cites: [CITE.guideline],
      a: 'La linea guida del 2023 sul dolore al tallone dà ai plantari un grado B contro il loro uso da soli per la fascite plantare. I plantari insieme a stretching e lavoro di forza possono aiutare a gestire i sintomi mentre il piede costruisce capacità. Per il piede cavo, i plantari ammortizzati o su misura hanno prove migliori, compreso uno studio randomizzato che ha mostrato un miglioramento rispetto a una soletta finta a tre mesi.',
    },
    {
      q: 'Il dolore all’arco plantare è la stessa cosa della fascite plantare?',
      a: 'Non sempre. La fascite plantare è una causa specifica di dolore all’arco, la più comune. Ma il dolore all’arco può venire anche da piede piatto, disfunzione del tendine tibiale posteriore, piede cavo, sovraccarico o irritazione dei nervi. Ogni fascite plantare comporta dolore all’arco o al tallone, ma non ogni dolore all’arco è fascite plantare. Lo schema del dolore, soprattutto il momento in cui arriva, aiuta a distinguerle.',
    },
    {
      q: 'Cosa può causare dolore sul lato esterno dell’arco del piede?',
      a: 'Gli esercizi di questa pagina lavorano sull’arco interno, quindi il dolore all’arco esterno di solito ha una causa diversa. Può venire da un’irritazione dei tendini peronieri (i tendini dietro il malleolo esterno) o dalla sindrome del cuboide, in cui un piccolo osso del mesopiede si sposta leggermente, spesso dopo una distorsione o un sovraccarico. Entrambi richiedono una visita e un piano diversi dall’allungamento della fascia plantare, quindi rivolgiti a un professionista sanitario.',
    },
    {
      q: 'Il dolore all’arco plantare passa da solo?',
      a: 'A volte. Un breve episodio di dolore da sovraccarico spesso si calma nel giro di pochi giorni quando riduci il carico che l’ha causato. Il dolore da fascite plantare, piede piatto o disfunzione del tendine tibiale posteriore tende a restare o a tornare senza stretching e lavoro di forza. Se non è migliorato dopo diverse settimane di riposo e carico più leggero, rivolgiti a un professionista sanitario.',
    },
    {
      q: 'Devo massaggiare l’arco se fa male?',
      a: 'Un rotolamento leggero può aiutare tra una sessione e l’altra, anche se nessuno studio di questa pagina ha testato il solo massaggio. Fai rotolare piano la pianta su una pallina da massaggio o su una bottiglia d’acqua congelata, con una pressione decisa ma mai tanto da farti fare una smorfia. È una misura di sollievo. Non affronta la causa. Se premere un punto preciso riproduce un dolore acuto, fallo controllare invece di premere più forte.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore si accompagna a intorpidimento, formicolio o bruciore, che possono indicare un nervo compresso',
      'l’arco si sta appiattendo visibilmente da un lato, il che può indicare una disfunzione del tibiale posteriore in peggioramento',
      'non riesci a fare un sollevamento sulle punte su una gamba dal lato colpito, o è chiaramente più debole dell’altro',
      'il dolore è in un punto preciso e peggiora con l’attività, il che può essere una frattura da stress',
      'il dolore è iniziato dopo un infortunio o una caduta',
      'c’è gonfiore, arrossamento o calore intorno al piede o alla caviglia',
      'il dolore non migliora dopo diverse settimane di stretching e adattamento del carico',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Se il dolore all’arco segue lo schema della fascite plantare, Walkito costruisce un piano intorno a un obiettivo alla volta. Il primo obiettivo è una mattina migliore: dolore a 1/10 o meno per 14\u00A0giorni di fila. L’arco ha il suo obiettivo e i suoi esercizi. Se il dolore all’arco viene dal piede piatto, l’app può lavorare sia sul dolore sia sull’arco come obiettivi separati.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se non sei sicuro di cosa causi il dolore all’arco, rivolgiti a un professionista sanitario prima di caricarlo con gli esercizi.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Dolore all’arco plantare',
  campaign: 'guide-arch-pain-it',
};
