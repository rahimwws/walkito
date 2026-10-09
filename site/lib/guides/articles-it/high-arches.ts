import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Piede cavo: esercizi (IT) ──────────────────────────────────────────
 *
 * Translated from `articles/high-arches.ts` (2026-10-08), written around
 * the Italian queries «piede cavo esercizi», «piede cavo dolore», «arco
 * plantare alto», «plantari piede cavo». Informal «tu». Figures, doses,
 * grades and qualifiers are identical to the English page; exercise names
 * follow `lib/guides/it.ts`. No new citations.
 */

export const HIGH_ARCHES_IT: Guide = {
  lang: 'it',
  page: 'highArches',
  mainSource: CITE.burnsCavus,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Piede cavo: esercizi e cosa aiuta il dolore',
  description:
    'Esercizi per il piede cavo doloroso: allungamenti di polpaccio e fascia plantare, stabilità della caviglia, prove sui plantari e segnali neurologici.',
  h1: 'Esercizi per il piede cavo: cosa aiuta e cosa richiede un professionista sanitario',
  lede:
    'Il piede cavo è un piede con l’arco alto, rigido, che non si flette abbastanza per assorbire gli urti. La forza si concentra sul tallone e sull’avampiede, e la fascia plantare è spesso rigida. Circa il 60% delle persone con piede cavo riferisce dolore al piede. Le prove più forti riguardano i plantari ammortizzati o su misura. L’esercizio punta ad allungare polpaccio e fascia plantare, migliorare la mobilità della caviglia e costruire stabilità.',
  intro: [
    'Il piede cavo riguarda circa 1\u00A0persona su 10 (Burns e colleghi, 2007). Molte persone con l’arco alto non hanno mai dolore ai piedi. Per chi ce l’ha, il dolore di solito è sotto il tallone, sotto l’avampiede o lungo la fascia plantare rigida. La causa conta: la maggior parte dei piedi cavi è idiopatica (senza una causa nota), ma una parte è causata da problemi neurologici come la malattia di Charcot-Marie-Tooth. Un piede cavo che peggiora o che riguarda un solo lato richiede sempre un professionista sanitario.',
  ],
  takeaways: [
    'In uno studio su 154\u00A0adulti con piede cavo doloroso, i plantari su misura hanno migliorato il dolore al piede di 8,3\u00A0punti in più rispetto a una soletta finta a tre mesi, e la funzionalità di 9,5\u00A0punti in più (Burns e colleghi, 2006).',
    'Lo stesso studio ha trovato che i plantari su misura riducevano la pressione plantare del 26%, contro il 9% della soletta finta.',
    'Circa il 60% delle persone con piede cavo riferisce dolore al piede, di solito sotto il tallone, sotto l’avampiede o all’arco (Burns e colleghi, 2005).',
    'Il piede cavo può essere il primo segno di un problema neurologico come la malattia di Charcot-Marie-Tooth. Un piede cavo che peggiora o che riguarda un solo lato richiede una valutazione neurologica, non solo esercizi.',
    'Nessuno studio ha testato un programma di esercizi proprio per il dolore da piede cavo. Gli esercizi di questa pagina lavorano sulle strutture rigide e sulle articolazioni instabili comuni nei piedi con l’arco alto.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cos’è il piede cavo e perché fa male?',
      figure: { id: 'arches', caption: 'Le stesse ossa del piede con un piede piatto, un arco tipico e un piede cavo, viste dal lato interno.', alt: 'Tre piedi visti dal lato interno su un pavimento piano: un piede piatto con l’arco appoggiato a terra, un arco tipico con un piccolo spazio sotto e un piede cavo con un grande spazio sotto la parte centrale del piede.' },
      paragraphs: [
        'Il piede cavo è un piede con un arco longitudinale interno troppo alto. L’arco resta alto anche quando il piede è sotto carico. A differenza del piede piatto, che crolla sotto carico e distribuisce l’urto su un’area ampia, il piede cavo è rigido e concentra la forza su una superficie più piccola: il tallone e l’avampiede.',
        'Nel piede cavo la fascia plantare di solito è corta e rigida, cosa che tiene l’arco in alto ma riduce la capacità del piede di flettersi e assorbire gli urti. L’avampiede spesso sta più in basso del retropiede (primo metatarso flesso verso il basso), e le dita possono mettersi ad artiglio. Questi cambiamenti spostano la pressione sulle teste metatarsali e sul tallone, togliendola al mesopiede.',
        'Il dolore al piede nel piede cavo si presenta spesso come metatarsalgia (dolore sotto l’avampiede), dolore sotto il tallone o dolore lungo la fascia plantare rigida. Anche le distorsioni della caviglia sono più comuni, perché il piede rigido e girato verso l’interno è meno stabile su terreni irregolari.',
      ],
      cites: [CITE.burnsCavusCochrane, CITE.burnsCavusPain, CITE.burnsCavus],
    },
    {
      h2: 'Da cosa dipende il piede cavo?',
      paragraphs: [
        'La maggior parte dei piedi cavi è idiopatica, cioè non si trova una causa precisa. Di solito riguardano entrambi i piedi, restano stabili nel tempo e ci sono fin dall’infanzia.',
        'Un gruppo più piccolo ma clinicamente importante è causato da problemi neurologici. Il più comune è la malattia di Charcot-Marie-Tooth (CMT), una neuropatia ereditaria motoria e sensitiva che causa una debolezza e una perdita muscolare progressive, a partire da piedi e gambe. Il piede cavo-varo nella CMT si sviluppa perché alcuni muscoli si indeboliscono più in fretta di altri e tirano il piede in una posizione con l’arco alto e girata verso l’interno.',
        'Altre cause neurologiche comprendono anomalie del midollo spinale, poliomielite, spina bifida, paralisi cerebrale e altre neuropatie periferiche. Il piede cavo può comparire anche dopo un ictus o una lesione del midollo spinale.',
        'La distinzione conta per gli esercizi. Il piede cavo idiopatico di solito è stabile: il piede ha quella forma e la mantiene. Il piede cavo neurologico può peggiorare: l’arco si alza, la debolezza aumenta e il piede diventa meno stabile nel tempo. Gli esercizi possono mantenere mobilità e stabilità in un piede cavo neurologico, ma non possono invertire il problema di fondo, e deve essere coinvolto un professionista sanitario.',
      ],
    },
    {
      h2: 'Quando il piede cavo va controllato da un professionista sanitario?',
      paragraphs: [
        'Non ogni piede cavo ha bisogno di accertamenti neurologici. Ma alcuni schemi vanno sempre valutati.',
        'Un piede cavo che peggiora, cioè un arco che si alza nel corso di mesi o anni, è un campanello d’allarme per una causa neurologica. Un altro è il piede cavo da un solo lato, quando un piede ha l’arco molto più alto dell’altro. Debolezza nel piede o nella gamba, difficoltà a sollevare la punta del piede camminando (piede cadente), dita ad artiglio che peggiorano o una storia familiare di CMT o di altre neuropatie sono tutti motivi per rivolgerti a un neurologo o a uno specialista di piede e caviglia.',
        'Se il piede cavo riguarda entrambi i piedi, è stabile ed è così fin dall’infanzia, e non hai debolezza né cambiamenti della sensibilità, molto probabilmente è idiopatico. Gli esercizi qui sotto e una chiacchierata con un podologo sui plantari sono un punto di partenza ragionevole.',
      ],
    },
    {
      h2: 'I plantari aiutano il dolore da piede cavo?',
      keyFact: 'Uno studio randomizzato su 154\u00A0adulti con dolore da piede cavo ha trovato che i plantari su misura battevano una soletta finta di 8,3\u00A0punti sul dolore e di 9,5\u00A0punti sulla funzionalità a tre mesi (Burns e colleghi, 2006).',
      paragraphs: [
        'I plantari su misura hanno le prove più forti per il dolore da piede cavo. Nell’unico studio randomizzato, Burns e colleghi hanno assegnato 154\u00A0adulti con dolore cronico al piede e piede cavo su entrambi i lati a plantari su misura in polipropilene oppure a una soletta piatta finta. A tre mesi, il gruppo con i plantari su misura ha riportato un miglioramento del dolore al piede di 8,3\u00A0punti in più sul Foot Health Status Questionnaire rispetto al gruppo con la soletta finta. I punteggi di funzionalità sono migliorati di 9,5\u00A0punti in più. La pressione plantare è scesa del 26% con i plantari su misura, contro il 9% con la soletta finta.',
        'Lo studio comprendeva persone con piede cavo sia idiopatico sia neuromuscolare (133 idiopatici, 21 neuromuscolari, di cui 16 con malattia di Charcot-Marie-Tooth). I plantari erano modellati sulla forma del piede, con un rivestimento superiore ammortizzato per tutta la lunghezza.',
        'Le solette ammortizzate da banco sono un primo passo ragionevole prima di investire in plantari su misura, che costano di più. La caratteristica che lo studio ha trovato efficace era una base modellata sulla forma esatta del piede, non la semplice aggiunta di un’imbottitura piatta.',
      ],
      sourceNote:
        'Burns 2006: 154\u00A0adulti, follow-up a 3\u00A0mesi, differenza sul dolore al Foot Health Status Questionnaire 8,3\u00A0punti (IC 95% 1,2-15,3, p=0,022), differenza sulla funzionalità 9,5\u00A0punti (IC 95% 2,9-16,1, p=0,005).',
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Quali esercizi aiutano il piede cavo?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento di polpaccio e fascia plantare una A e al lavoro di forza una B per il dolore sotto il tallone, la sede di dolore più comune nel piede cavo (Koc e colleghi, 2023).',
      paragraphs: [
        'Nessuno studio ha testato un programma di esercizi pensato proprio per il dolore da piede cavo. Gli esercizi qui sotto lavorano sulle strutture che di solito sono rigide o instabili in un piede con l’arco alto: polpaccio, fascia plantare, caviglia e muscoli intrinseci del piede. Sono presi in prestito dalle prove su fascite plantare, instabilità della caviglia e condizionamento generale del piede, e sono indicati come tali.',
        'La linea guida del 2023 sul dolore al tallone dà all’allungamento di polpaccio e fascia plantare una A e al lavoro di forza una B per il dolore sotto il tallone, che è una delle sedi di dolore più comuni nel piede cavo. Non esiste una linea guida simile proprio per il piede cavo.',
        'Se un esercizio porta il dolore a **6/10 o più**, fermati per quel giorno.',
      ],
      exercises: [
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'moderate', why: 'Grado A nella linea guida per il dolore sotto il tallone. Un polpaccio rigido è comune nel piede cavo e aumenta il carico sul tallone.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro, gamba dietro tesa, tallone giù, fianchi in avanti. Un gastrocnemio rigido è comune nel piede cavo e aumenta il carico sull’arco rigido.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: { level: 'moderate', why: 'Stesso meccanismo. Lavora sul muscolo più profondo del polpaccio.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione al muro, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo si rilascia solo con il ginocchio piegato.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa del polpaccio evidenziata',
        },
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'moderate', why: 'Grado A nella linea guida per il dolore sotto il tallone. Nel piede cavo la fascia plantare di solito è rigida.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla il piede dolorante sull’altro ginocchio. Tira indietro le dita con delicatezza finché senti un allungamento lungo l’arco. In un piede cavo la fascia plantare è spesso corta e rigida.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento lungo l’arco',
          stop: 'Il dolore arriva a 6/10',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita finché senti l’arco',
          alt: 'Una figura che tira indietro le dita di un piede, con l’arco evidenziato',
        },
        {
          name: 'Oscillazioni della caviglia',
          evidence: { level: 'early', why: 'Nessuno studio specifico per il piede cavo. Lavora sulla dorsiflessione della caviglia, spesso limitata nei piedi con l’arco alto.' },
          dose: '2\u00A0serie da 15, ogni gamba',
          how: 'Mettiti di fronte a un muro con un piede avanti. Porta il ginocchio oltre le dita mentre il tallone resta a terra. Così apri la dorsiflessione della caviglia, che spesso è limitata in un piede cavo.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nella parte anteriore della caviglia',
          stop: 'Il dolore arriva a 6/10',
          media: 'ankle_rocks',
          caption: 'Oscillazioni della caviglia: il ginocchio va oltre le dita, il tallone resta a terra',
          alt: 'Una figura al muro che porta il ginocchio in avanti oltre le dita',
        },
        {
          name: 'Equilibrio su una gamba',
          evidence: { level: 'early', why: 'Nessuno studio sul piede cavo. Le distorsioni della caviglia sono più comuni nel piede cavo; il lavoro di equilibrio lavora sulla stabilità della caviglia.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stai su un piede e guarda un punto fisso. Lascia che il piede oscilli. I piedi cavi sono meno stabili su terreni irregolari, e il lavoro di equilibrio allena i muscoli che correggono quelle oscillazioni. Stai vicino a un muro.',
          often: 'Giorni di equilibrio',
          feel: 'Piccole correzioni nel piede e nella caviglia',
          stop: 'Il dolore arriva a 6/10',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: lascia che il piede faccia le sue correzioni',
          alt: 'Una figura in equilibrio su una gamba, con la caviglia evidenziata',
        },
        {
          name: 'Massaggio con la pallina',
          evidence: { level: 'early', why: 'Non testato per il piede cavo. Una misura di sollievo per la fascia plantare rigida.' },
          dose: '2\u00A0minuti, ogni piede',
          how: 'Siediti e fai rotolare piano la pianta del piede su una pallina da massaggio. Pressione decisa, non tanto da farti fare una smorfia. È una misura di sollievo per la fascia rigida, non un esercizio correttivo.',
          often: 'Giorni di recupero',
          feel: 'Una pressione decisa sotto il piede',
          stop: 'Il dolore arriva a 6/10',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: lento e deciso, alleggerisci se senti dolore acuto',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina',
        },
      ],
      cites: [CITE.guideline, CITE.burnsCavus],
    },
    {
      h2: 'E le scarpe per il piede cavo?',
      paragraphs: [
        'Le scarpe per il piede cavo devono ammortizzare più che controllare. A differenza del piede piatto, dove un supporto mediale rigido evita il crollo, un piede con l’arco alto ha bisogno del contrario: una scarpa che assorba l’urto perché il piede da solo non lo fa.',
        'Cerca una suola ammortizzata, una punta ampia (le dita ad artiglio hanno bisogno di spazio) e nessun supporto dell’arco aggressivo. Un rialzo dell’arco rigido pensato per un piede normale preme contro un arco cavo nel punto sbagliato. Le scarpe da corsa neutre con una buona ammortizzazione su tallone e avampiede sono un consiglio comune.',
        'Se scarpe e solette da banco non bastano, un podologo può valutare se valga la pena investire in plantari su misura. Lo studio di Burns del 2006 ha trovato che la chiave di un plantare efficace per il piede cavo era una base modellata sul piede con un rivestimento superiore ammortizzato, non un dispositivo correttivo rigido.',
      ],
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Walkito aiuta con il piede cavo?',
      paragraphs: [
        'Walkito è costruito intorno al dolore sotto il tallone e al dolore all’arco negli adulti. Comprende allungamento del polpaccio, allungamento della fascia plantare, massaggio con la pallina e lavoro sulla stabilità della caviglia, tutte cose rilevanti per un piede cavo. Quando indichi l’arco sulla mappa del corpo dell’app, la sessione di sollievo propone l’esercizio del piede corto, l’allungamento della fascia plantare e il massaggio con la pallina.',
        'Quello che l’app non ha è un obiettivo specifico per il piede cavo o un programma per il piede cavo. Gli esercizi che compaiono sono gli stessi prescritti per la fascite plantare e il piede piatto. Per chi ha il piede cavo e dolore sotto il tallone, quegli esercizi si sovrappongono a quello che consiglia questa pagina. Per chi ha un dolore da piede cavo soprattutto sotto l’avampiede, o una causa neurologica, l’app non è adatta e il piano di esercizi va guidato da un professionista sanitario.',
      ],
    },
  ],
  faq: [
    {
      q: 'Quali esercizi aiutano il piede cavo?',
      cites: [CITE.guideline],
      a: 'Nessuno studio ha testato esercizi proprio per il piede cavo. Gli esercizi con le prove migliori per gli schemi di dolore comuni nel piede cavo sono l’allungamento del polpaccio e della fascia plantare, entrambi con una A nella linea guida del 2023 sul dolore al tallone per il dolore sotto il tallone. Il lavoro sulla stabilità della caviglia e il massaggio con la pallina affrontano l’instabilità e la rigidità della fascia comuni nel piede cavo.',
    },
    {
      q: 'I plantari aiutano il dolore da piede cavo?',
      cites: [CITE.burnsCavus],
      a: 'In uno studio su 154\u00A0adulti con piede cavo doloroso, i plantari su misura hanno migliorato il dolore al piede di 8,3\u00A0punti e la funzionalità di 9,5\u00A0punti in più rispetto a una soletta finta a tre mesi (Burns 2006). La pressione plantare è scesa del 26% con i plantari su misura. Sono le prove più forti per un singolo intervento sul dolore da piede cavo.',
    },
    {
      q: 'Il piede cavo si può correggere con gli esercizi?',
      a: 'L’esercizio non può cambiare la forma ossea di un piede cavo. Quello che può fare è allungare le strutture rigide (polpaccio, fascia plantare), migliorare la mobilità della caviglia e costruire stabilità per ridurre distorsioni della caviglia e dolore. L’arco resterà alto. L’obiettivo è ridurre il dolore e migliorare la funzionalità, non appiattire l’arco.',
    },
    {
      q: 'Il piede cavo è segno di un problema neurologico?',
      a: 'Può esserlo. La maggior parte dei piedi cavi è idiopatica e stabile. Ma un piede cavo che peggiora o che riguarda un solo lato può essere il primo segno della malattia di Charcot-Marie-Tooth o di un altro problema neurologico. Se l’arco si sta alzando, se un piede è più colpito dell’altro, o se hai debolezza o cambiamenti della sensibilità ai piedi, rivolgiti a un neurologo.',
    },
    {
      q: 'Quali sono le scarpe migliori per il piede cavo?',
      cites: [CITE.burnsCavus],
      a: 'Scarpe ammortizzate con una punta ampia e nessun supporto dell’arco aggressivo. Un arco alto non crolla, quindi non ha bisogno del controllo del movimento. Ha bisogno di ammortizzazione per assorbire l’urto che l’arco rigido non assorbe. Le scarpe da corsa neutre con una buona ammortizzazione su tallone e avampiede sono un punto di partenza comune. I plantari su misura con una base modellata e un rivestimento superiore ammortizzato hanno le prove migliori dagli studi.',
    },
    {
      q: 'Piede cavo e arco plantare alto sono la stessa cosa?',
      a: 'Sì. Piede cavo è il termine medico per un piede con l’arco troppo alto. Descrive una forma del piede, non una malattia. Circa 1\u00A0persona su 10 ha il piede cavo, e molte non hanno mai dolore ai piedi. Quando il dolore arriva, di solito è sotto il tallone, sotto l’avampiede o lungo la fascia plantare rigida.',
      cites: [CITE.burnsCavusCochrane],
    },
    {
      q: 'Il piede cavo può causare la fascite plantare?',
      cites: [CITE.guideline],
      a: 'Il piede cavo è elencato tra i fattori di rischio della fascite plantare. Il piede rigido mette più tensione sulla fascia plantare a ogni passo, e la fascia spesso è già rigida di partenza. Se hai il piede cavo e un dolore sotto il tallone che è peggio al mattino, quello schema è compatibile con la fascite plantare e valgono gli esercizi della pagina [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
    },
    {
      q: 'Come capisco se ho l’arco plantare troppo alto?',
      a: 'Prova il test dell’impronta bagnata: bagna la pianta del piede nudo e appoggiala su una superficie piana e asciutta. Un arco alto lascia poca o nessuna impronta lungo il bordo esterno, spesso solo il tallone e l’avampiede, mentre un piede piatto lascia quasi tutta la pianta. Una grande differenza tra i due piedi è da segnalare a un professionista sanitario.',
    },
    {
      q: 'È meglio avere il piede piatto o il piede cavo?',
      cites: [CITE.burnsCavusPain],
      a: 'Nessuno dei due è chiaramente meglio. Un piede piatto distribuisce il carico su un’area ampia ma può allungare troppo la fascia plantare e il tendine tibiale posteriore. Un piede cavo è rigido e concentra la forza sul tallone e sull’avampiede. Circa il 60% delle persone con piede cavo riferisce dolore al piede, quindi la sola forma del piede non dice come staranno i tuoi piedi.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'l’arco si alza con il tempo, il che può indicare una causa neurologica',
      'un piede ha l’arco molto più alto dell’altro',
      'hai debolezza nel piede o nella gamba, o fai fatica a sollevare la punta del piede',
      'c’è intorpidimento, formicolio o bruciore ai piedi',
      'le dita si mettono ad artiglio più di prima',
      'le distorsioni della caviglia sono frequenti e stanno peggiorando',
      'c’è una storia familiare di malattia di Charcot-Marie-Tooth o di altre neuropatie',
      'il dolore al piede non migliora dopo diverse settimane di stretching, scarpe migliori e solette ammortizzate',
      'hai un dolore in un punto preciso che peggiora con l’attività, il che può essere una frattura da stress o una sesamoidite invece di un dolore generico da piede cavo',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito comprende allungamento del polpaccio, allungamento della fascia plantare, lavoro sulla stabilità della caviglia e massaggio con la pallina, tutti rilevanti per il piede cavo. Quando indichi l’arco sulla mappa del corpo, l’app propone esercizi per quella zona. Ma l’app non ha un obiettivo o un programma specifico per il piede cavo. Se il piede cavo ti dà dolore sotto il tallone, gli obiettivi dell’app per il dolore al tallone possono andare bene. Se il dolore è soprattutto sotto l’avampiede o legato a un problema neurologico, il piano di esercizi va guidato da un professionista sanitario.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
  },
  crumb: 'Piede cavo: esercizi',
  campaign: 'guide-high-arches-it',
};
