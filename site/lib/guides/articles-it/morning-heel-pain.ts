import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dolore al tallone al mattino (IT) ─────────────────────────────────
 *
 * Translated from `articles/morning-heel-pain.ts` (2026-10-08), written
 * around the Italian queries «dolore al tallone al mattino», «dolore al
 * tallone appena sveglio», «male al tallone primi passi». Informal «tu».
 * Figures, doses, grades and qualifiers are identical to the English page;
 * exercise names follow `lib/guides/it.ts`. No new citations.
 *
 * Pages that exist only in English keep their English path, marked
 * «(in inglese)».
 */

export const MORNING_HEEL_PAIN_IT: Guide = {
  lang: 'it',
  page: 'morningHeelPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dolore al tallone al mattino: perché e cosa fare',
  description:
    'Perché il tallone fa male appena sveglio, le altre cause del dolore ai primi passi oltre alla fascite plantare e cosa fare prima di alzarti ogni mattina.',
  h1: 'Dolore al tallone al mattino: perché succede e cosa fare prima del primo passo',
  lede:
    'I primi passi appena sceso dal letto sono il momento peggiore della giornata. Quella fitta al tallone, prima ancora di esserti raddrizzato, è lo schema che la maggior parte delle persone descrive quando cerca informazioni sul dolore al tallone. La causa più comune è la fascite plantare, ma non è l’unica, e il mattino è il momento più utile per fare qualcosa.',
  intro: [
    'La pagina degli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) ha l’elenco completo degli esercizi, le prove dietro ciascuno e i gradi della linea guida. Questa pagina approfondisce il mattino: perché il primo passo fa male, quali altri problemi hanno lo stesso schema, cosa fare prima che il piede tocchi terra, e come seguire il dolore del mattino ti dice se le cose stanno migliorando.',
  ],
  takeaways: [
    'Il dolore al tallone al mattino è il segno tipico della fascite plantare: la linea guida del 2023 sul dolore al tallone lo descrive come un dolore «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo» (Koc e colleghi, 2023).',
    'Allungare la fascia plantare prima di alzarti ha il grado **A**, il più alto della linea guida. Anche i tutori notturni, portati per 1-3\u00A0mesi, hanno una **A** per il dolore ai primi passi che non passa (Koc e colleghi, 2023).',
    'Altri problemi che fanno male al mattino sono la tendinite d’Achille (parte posteriore del tallone), l’assottigliamento del cuscinetto adiposo del tallone (dolore profondo al centro), la frattura da stress del calcagno (aumenta con l’attività, può fare male a riposo) e l’artrite infiammatoria (entrambi i talloni più una rigidità del mattino prolungata in altre articolazioni).',
    'In una coorte di 174\u00A0persone con fascite plantare, il dolore a entrambi i talloni era un predittore significativo di sintomi più lunghi, e gli autori hanno notato che una malattia infiammatoria sistemica non riconosciuta potrebbe spiegare in parte questo risultato (Hansen e colleghi, 2018).',
    'Il dolore del mattino su una scala da 0 a 10 è il segnale quotidiano più chiaro per capire se il piede sta migliorando o no.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Perché il dolore al tallone è peggio al mattino?',
      paragraphs: [
        'La fascia plantare, la banda spessa di tessuto che va dall’osso del tallone alle dita, si irrigidisce mentre dormi. A riposo il piede di solito punta verso il basso, e questo lascia accorciare la fascia. Quando ti alzi e appoggi il piede sotto tutto il tuo peso, quel tessuto accorciato si allunga all’improvviso. Il risultato è una fitta nella parte interna del tallone.',
        'La linea guida del 2023 sul dolore al tallone lo descrive come un dolore «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo». Lo stesso schema si ripete quando sei stato seduto un po’ e poi ti alzi, per lo stesso motivo: il tessuto si accorcia a riposo, poi viene caricato di colpo.',
        'Non è un nuovo danno che si forma ogni mattina. Il tessuto è rigido, non si sta strappando. Dopo qualche passo, quando la fascia si scalda, il dolore di solito si calma. Questo effetto di riscaldamento è una delle cose che distinguono la fascite plantare da alcune delle altre cause qui sotto.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Cos’altro causa dolore al tallone al mattino?',
      keyFact: 'In una coorte di 174\u00A0persone con fascite plantare seguite in media per 9,7\u00A0anni, il dolore a entrambi i talloni prediceva un risultato peggiore a lungo termine, che secondo gli autori poteva riflettere una malattia infiammatoria sistemica non riconosciuta (Hansen e colleghi, 2018).',
      paragraphs: [
        'La fascite plantare è la causa più comune del dolore al tallone al mattino, ma non è l’unica. La posizione e il comportamento del dolore aiutano a distinguerle.',
        '**Tendinite d’Achille.** Dolore nella parte posteriore del tallone o nel tendine sopra, non sotto il piede. Il tendine d’Achille si irrigidisce durante la notte proprio come la fascia plantare, quindi la rigidità ai primi passi è comune. Di solito migliora camminando e poi peggiora di nuovo con un’attività prolungata. Se il tuo dolore è nella parte posteriore del tallone e non sotto, vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
        '**Assottigliamento del cuscinetto adiposo del tallone.** Il cuscinetto di grasso sotto l’osso del tallone fa da ammortizzatore. Quando si assottiglia o si sposta, l’osso prende più urti direttamente.',
        'Una scoping review del 2022 ha notato che il dolore del cuscinetto adiposo tende a essere un dolore profondo al centro del tallone, peggiora su superfici dure e camminando scalzi, e può essere difficile da distinguere dalla fascite plantare senza esami di imaging (Chang e colleghi, 2022). La differenza chiave: il dolore della fascite plantare di solito è più acuto nella parte interna e anteriore del tallone, mentre quello del cuscinetto adiposo è proprio sotto il centro.',
        '**Frattura da stress del calcagno.** Un dolore che arriva piano piano, di solito dopo un aumento improvviso dell’attività. A differenza della fascite plantare, il dolore da frattura da stress tende ad aumentare con l’attività invece di calmarsi quando ti scaldi, e può fare male a riposo o di notte. Se stringere i lati del tallone riproduce il dolore, rivolgiti a un professionista sanitario prima di allenare il piede. [Dolore al tallone nei runner](/heel-pain-runners/) (in inglese) spiega come i cambi improvvisi di carico colpiscono il tallone.',
        '**Artrite infiammatoria (un campanello d’allarme).** Quando al mattino fanno male entrambi i talloni, la rigidità dura più di 30\u00A0minuti e anche altre articolazioni sono rigide o gonfie, lo schema si allontana dalla fascite plantare e va verso qualcosa che deve controllare un professionista sanitario. Problemi come l’artrite psoriasica o la spondilite anchilosante possono dare dolore nei punti in cui i tendini si attaccano all’osso, compreso il tallone.',
        'In una coorte di 174\u00A0persone con fascite plantare seguite in media per 9,7\u00A0anni, il dolore a entrambi i talloni era un predittore significativo di una prognosi peggiore a lungo termine, e gli autori hanno notato che una malattia infiammatoria sistemica non riconosciuta potrebbe spiegare in parte questo risultato (Hansen e colleghi, 2018). Se fanno male entrambi i talloni e sono coinvolte altre articolazioni, rivolgiti prima a un professionista sanitario.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.patelStressFracture, CITE.hansen],
    },
    {
      h2: 'Cosa puoi fare prima del primo passo?',
      paragraphs: [
        'La cosa più utile che puoi fare per il dolore al tallone al mattino succede prima che il piede tocchi terra. La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio il grado più alto, **A**, e il mattino è il momento che cita più spesso quando raccomanda lo stretching.',
        'Siediti sul bordo del letto. Accavalla una caviglia sul ginocchio opposto e tira indietro le dita con una mano, con delicatezza, finché senti un allungamento lungo l’arco. Tieni per circa 10\u00A0secondi, poi rilascia. Fallo 10\u00A0volte per piede. Così carichi la fascia piano, in modo controllato, prima di chiederle di reggere tutto il tuo peso.',
        'Poi fai un allungamento del polpaccio. Mettiti vicino al letto o a un muro, un piede dietro l’altro, il tallone dietro a terra, e sporgiti in avanti finché senti l’allungamento nella parte alta del polpaccio. Tieni 30\u00A0secondi per lato.',
        'Un polpaccio rigido tira il tallone attraverso il tendine d’Achille, e una caviglia meno flessibile è uno dei fattori di rischio indipendenti più forti per la fascite plantare: in uno studio caso-controllo appaiato con 50\u00A0casi e 100\u00A0controlli, aveva l’odds ratio più alto tra tutti i fattori misurati (Riddle e colleghi, 2003).',
        'Poi metti scarpe che sostengono il piede o pantofole con la suola rigida prima di andare in cucina. Scalzo su un pavimento duro è la combinazione peggiore per una fascia rigida. Questi allungamenti del mattino sono il punto di partenza. Il piano a lungo termine aggiunge il lavoro di forza: i [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) sono l’esercizio con le prove più dirette da studi clinici.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare (da seduto, prima di alzarti)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 dà all’allungamento della fascia plantare e del polpaccio una A, il suo grado più alto.' },
          dose: '10\u00A0tenute da 10\u00A0secondi, ogni piede',
          how: 'Siediti sul letto. Accavalla una caviglia sull’altro ginocchio. Tira indietro le dita con delicatezza finché senti un allungamento lungo l’arco. Tieni, poi rilascia.',
          often: 'Ogni mattina prima di alzarti, e dopo essere stato seduto a lungo',
          feel: 'Un allungamento lungo l’arco, non dolore',
          stop: 'Il dolore arriva a 6/10',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita con delicatezza prima che il piede tocchi terra',
          alt: 'Una figura seduta che tira indietro le dita per allungare l’arco, con la fascia plantare evidenziata',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'strong', why: 'Stesso grado A nella linea guida. Lavora sul gastrocnemio, il muscolo del polpaccio più grande e più esterno.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Tieni finché senti l’allungamento nella parte alta del polpaccio.',
          often: 'Dopo l’allungamento della fascia, quasi tutte le mattine',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, sporgiti in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: { level: 'strong', why: 'Stesso grado A nella linea guida. Lavora sul soleo, il muscolo più profondo del polpaccio.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione dell’allungamento del polpaccio, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si rilascia solo con il ginocchio piegato.',
          often: 'Dopo l’allungamento a ginocchio teso',
          feel: 'Un allungamento più in basso nel polpaccio, vicino al tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa del polpaccio evidenziata',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'I tutori notturni aiutano il dolore al tallone del mattino?',
      keyFact: 'La linea guida del 2023 dà ai tutori notturni, portati da uno a tre mesi, il grado più alto, A, per chi continua ad avere dolore ai primi passi del mattino nonostante lo stretching (Koc e colleghi, 2023).',
      paragraphs: [
        'I tutori notturni tengono il piede ad angolo retto mentre dormi, così la fascia plantare e il polpaccio restano leggermente allungati invece di accorciarsi durante la notte. L’idea è semplice: se il dolore del mattino viene dalla fascia che si irrigidisce a riposo, tenerla allungata dovrebbe togliere una parte di quel colpo ai primi passi.',
        'La linea guida del 2023 sul dolore al tallone dà ai tutori notturni un grado **A** per chi continua ad avere dolore ai primi passi del mattino nonostante lo stretching e le altre cure conservative. La durata raccomandata è di 1-3\u00A0mesi. La maggior parte dei tutori notturni è uno stivaletto rigido o semirigido che tiene il piede sollevato.',
        'Alcune persone trovano scomodo dormirci, e la linea guida non li propone come primo passo per tutti. Sono per chi fa già stretching e si sveglia ancora con il dolore.',
        'I tutori notturni sono da valutare con un professionista sanitario. Non sono un esercizio, e nessuna app può fornirli. Ma vale la pena conoscerli, perché hanno uno dei gradi di evidenza più forti della linea guida, proprio per il problema di cui parla questa pagina: il dolore ai primi passi che non si calma.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Devi portare le scarpe in casa se ti fanno male i talloni?',
      paragraphs: [
        'Camminare scalzo su un pavimento duro mette la fascia plantare sotto il massimo allungamento senza niente che ammortizzi. Per chi ha già la fascia irritata è la combinazione peggiore, e di solito succede subito dopo l’allungamento del mattino, quando il tessuto si sta ancora scaldando.',
        'Scarpe che sostengono il piede o pantofole con la suola rigida in casa tengono l’arco leggermente sollevato e ammortizzano il tallone. La linea guida del 2023 consiglia di informarsi sulle calzature come parte dell’approccio generale, e una caviglia meno flessibile, cioè quanto il piede si piega verso lo stinco, è uno dei fattori di rischio più forti per la fascite plantare. Una scarpa con un piccolo dislivello tra tallone e punta aiuta a compensare un polpaccio rigido.',
        'Non serve una scarpa speciale. Qualsiasi scarpa da ginnastica o pantofola con la suola rigida e un po’ di supporto per l’arco è meglio dei piedi nudi su piastrelle o parquet. Se il dolore è peggio in casa che fuori, spesso il motivo è questo. Stare in piedi tutto il giorno su superfici dure dà un problema simile: [piedi doloranti dopo una giornata in piedi](/feet-hurt-standing-all-day/) (in inglese) spiega esercizi e scarpe per quel caso.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Come fa il dolore del mattino a dirti se stai migliorando?',
      paragraphs: [
        'Il dolore del mattino è il segnale quotidiano più chiaro di come sta il piede. Una corsa può sembrare andata bene ma lasciare la fascia sovraccarica, e non lo saprai fino alla mattina dopo. Un lungo turno in piedi può sembrare sopportabile, ma è la mattina dopo a dirti se era troppo. Lo schema è semplice: se la mattina dopo i primi passi vanno peggio del solito, il giorno prima hai chiesto al piede più di quanto potesse reggere.',
        'Per questo un punteggio quotidiano del dolore del mattino, da 0 a 10, è più utile che controllare il dolore durante il giorno. Il dolore di giorno sale e scende con l’attività, la postura e le scarpe. Il dolore del mattino misura la stessa cosa, nello stesso modo, più o meno alla stessa ora ogni giorno. Quando il numero scende nel corso delle settimane, il piede sta guadagnando terreno. Quando sale di colpo, qualcosa negli ultimi uno o due giorni ha spinto troppo.',
        'Walkito ti chiede un punteggio del dolore del mattino prima di ogni sessione. Se il punteggio è 7 o più, la giornata diventa una sessione leggera: solo esercizi da seduto e a basso carico che non sforzano la fascia, al massimo 3\u00A0minuti. Se il punteggio è di 3 o più punti sopra la media degli ultimi 7\u00A0giorni, l’app abbassa ogni esercizio di un livello. Se ieri hai passato più ore del solito in piedi, una sessione di forza diventa una sessione di recupero più leggera.',
        'L’obiettivo è un dolore del mattino a 1 su 10 o meno per 14\u00A0giorni di fila. È quella tendenza, non una singola misura, a dirti che il piede è pronto per la fase successiva.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Perché il tallone mi fa male solo al mattino?',
      cites: [CITE.guideline],
      a: 'La fascia plantare, la banda spessa di tessuto sotto il piede, si irrigidisce e si accorcia mentre dormi. I primi passi la allungano sotto tutto il tuo peso. La linea guida del 2023 sul dolore al tallone lo descrive come un dolore «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo». Dopo qualche minuto di cammino il tessuto si scalda e il dolore di solito si calma.',
    },
    {
      q: 'Devo fare stretching prima di scendere dal letto?',
      cites: [CITE.guideline],
      a: 'Sì. La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio il grado più alto, A, e il mattino è il momento che cita più spesso. Siediti sul bordo del letto, accavalla una caviglia sull’altro ginocchio e tira indietro le dita con delicatezza per circa 10\u00A0secondi, 10\u00A0volte per piede. Così carichi la fascia piano prima di chiederle di reggere tutto il tuo peso.',
    },
    {
      q: 'Il dolore al tallone al mattino è sempre fascite plantare?',
      cites: [CITE.fatPadReview, CITE.achillesGuideline],
      a: 'Non sempre. La tendinite d’Achille (dolore nella parte posteriore del tallone), l’assottigliamento del cuscinetto adiposo del tallone (dolore profondo al centro, peggiore scalzi su superfici dure), la frattura da stress del calcagno (aumenta con l’attività, può fare male a riposo) e l’artrite infiammatoria (entrambi i talloni, rigidità prolungata, altre articolazioni coinvolte) possono tutte dare dolore al mattino. Posizione e comportamento aiutano a distinguerle, ma decide un professionista sanitario.',
    },
    {
      q: 'I tutori notturni funzionano per il dolore al tallone del mattino?',
      cites: [CITE.guideline],
      a: 'La linea guida del 2023 sul dolore al tallone dà ai tutori notturni un grado A, il suo grado più alto, per chi continua ad avere dolore ai primi passi nonostante lo stretching. I tutori notturni tengono il piede ad angolo retto durante la notte, così la fascia resta leggermente allungata invece di accorciarsi. La durata raccomandata è di 1-3\u00A0mesi. Vale la pena parlarne con un professionista sanitario se il solo stretching non basta.',
    },
    {
      q: 'Perché il tallone mi fa di nuovo male dopo essere stato seduto?',
      cites: [CITE.guideline],
      a: 'Per lo stesso motivo per cui fa male al mattino. La fascia plantare si accorcia e si irrigidisce quando il piede è senza carico, che tu stia dormendo o solo seduto alla scrivania. Quando ti alzi, si allunga di colpo. La linea guida lo chiama «dolore ai primi passi dopo un periodo di riposo». Un breve allungamento della fascia prima di alzarti può aiutare.',
    },
    {
      q: 'Quando andare dal medico per il dolore al tallone al mattino?',
      a: 'Rivolgiti a un professionista sanitario se fanno male entrambi i talloni e la rigidità del mattino dura più di 30\u00A0minuti, se il dolore è iniziato dopo un infortunio, se peggiora di settimana in settimana, se ti tiene sveglio di notte, se stringere i lati del tallone lo riproduce, o se si accompagna a intorpidimento, gonfiore o calore. Questi schemi possono indicare qualcosa di diverso dalla fascite plantare.',
    },
    {
      q: 'Quanto ci mette a migliorare il dolore ai primi passi?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Una revisione del 2020 riporta che circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche, spesso nel giro di alcuni mesi (Latt e colleghi, 2020). In un follow-up più lungo su 174\u00A0pazienti, circa la metà aveva ancora sintomi a 5\u00A0anni, anche se a quel punto la maggior parte aveva solo un dolore lieve (Hansen e colleghi, 2018). Nessun programma di esercizi può promettere dei tempi. [Quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/) approfondisce le prove.',
    },
    {
      q: 'Cosa evitare quando il tallone fa male al mattino?',
      cites: [CITE.guideline],
      a: 'Evita di camminare scalzo su un pavimento duro appena sveglio, ed evita di saltare l’allungamento prima di alzarti. In quel momento la fascia è più rigida che mai, quindi mettere il piede su piastrelle o parquet senza niente che ammortizzi è un fattore scatenante comune della fitta ai primi passi. Metti scarpe che sostengono il piede o pantofole rigide prima di uscire dalla camera, e allunga mentre sei ancora seduto sul letto.',
    },
    {
      q: 'Quali sono i rimedi casalinghi per il dolore al tallone al mattino?',
      cites: [CITE.guideline],
      a: 'I rimedi casalinghi per il dolore al tallone al mattino sono stretching, ghiaccio e scarpe che sostengono il piede, ogni giorno e non una volta sola. Allunga fascia e polpaccio prima di alzarti, poi metti scarpe con un buon sostegno prima di camminare su pavimenti duri. Far rotolare la pianta su una bottiglia d’acqua ghiacciata per qualche minuto riduce la rigidità, ma non sostituisce un professionista sanitario se il dolore non migliora.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'ti fanno male entrambi i talloni e la rigidità del mattino dura più di 30\u00A0minuti, soprattutto se altre articolazioni sono rigide o gonfie',
      'il dolore è iniziato dopo un infortunio o una caduta, che può indicare una rottura della fascia plantare',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'stringere i lati del tallone riproduce il dolore, il che può far pensare a una frattura da stress',
      'si accompagna a intorpidimento, formicolio o bruciore, che possono far pensare a un nervo compresso',
      'il tallone è arrossato, caldo al tatto, o hai la febbre',
      'ti sveglia di notte o c’è anche a riposo, non solo ai primi passi',
      'non è migliorato dopo diverse settimane di stretching quotidiano e meno carico',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Non devi ricordarti gli allungamenti, le dosi o quando passare a qualcosa di più difficile. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per il dolore al tallone, il primo obiettivo è una mattina migliore: dolore a 1 su 10 o meno per 14\u00A0giorni di fila. Ogni mattina segni il dolore prima del primo passo, e la sessione del giorno si adatta a quel punteggio.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto l’obiettivo del mattino), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi cosa sta cambiando.',
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se il dolore del mattino è acuto, peggiora o colpisce entrambi i talloni con altre articolazioni coinvolte, rivolgiti prima a un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Dolore al tallone al mattino',
  campaign: 'guide-morning-heel-it',
};
