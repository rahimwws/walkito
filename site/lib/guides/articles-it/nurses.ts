import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/nurses.ts`, written around the queries
 * «dolore ai piedi infermieri», «turni di 12 ore male ai piedi» and «scarpe
 * per infermieri». Informal «tu». Exercise names as in `it.ts`. Figures,
 * doses, grades and qualifiers are identical to the English page.
 */

export const NURSES_IT: Guide = {
  lang: 'it',
  page: 'nurses',
  mainSource: CITE.reedNurse,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dolore ai piedi per infermieri: turni di 12\u00A0ore',
  description:
    'Perché gli infermieri hanno male ai piedi nei turni di 12\u00A0ore: scarpe, calze a compressione, esercizi e come inserirli tra i turni a rotazione.',
  h1: 'Dolore ai piedi per infermieri: cosa aiuta nei turni di 12\u00A0ore',
  lede:
    'Gli infermieri camminano in un solo turno più di quanto molte persone camminino in un giorno, e lo fanno su pavimenti duri con scarpe che magari non calzano bene. I problemi a piede e caviglia sono tra i disturbi muscoloscheletrici più comuni nell’infermieristica: in un sondaggio li ha riferiti più della metà degli infermieri ospedalieri nell’arco di 12\u00A0mesi. Quasi tutto quello che aiuta, cioè allungamenti del polpaccio, esercizi per l’arco e calze a compressione, si fa in pochi minuti prima o dopo il turno.',
  intro: [
    'Questa pagina parla del dolore ai piedi che nasce dalle richieste del lavoro infermieristico: stare a lungo in piedi, camminare tanto e turni a rotazione. Se il dolore è acuto e peggiore ai primi passi dopo il riposo, quello schema fa pensare alla fascite plantare, e gli esercizi in [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/) sono la guida più completa. Se non sei sicuro, [perché mi fanno male i piedi dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) spiega dove si sovrappongono il dolore generico da stazione eretta e i problemi con un nome preciso.',
  ],
  toc: true,
  takeaways: [
    'In un sondaggio su 312\u00A0infermieri di un ospedale pediatrico in Australia, il 55,3% ha riferito problemi a piede o caviglia negli ultimi 12\u00A0mesi, e la quota era più alta tra chi faceva turni di 12\u00A0ore in terapia intensiva (Reed e colleghi, 2014).',
    'In uno studio con contapassi, gli infermieri hanno fatto in media 9.360\u00A0passi per turno, circa 5,8\u00A0km in un turno di 9,4\u00A0ore, un carico ben sopra la media degli adulti (Chang e Cho, 2022).',
    'In uno studio trasversale su 636\u00A0infermieri ospedalieri giapponesi, il 51% ha riferito dolore o disabilità al piede nell’ultimo mese, e il 17% aveva un dolore che interferiva con le attività quotidiane (Tojo e colleghi, 2018).',
    'Una flessibilità della caviglia ridotta, cioè un polpaccio rigido, era il singolo fattore più forte per la fascite plantare in uno studio caso-controllo con 50\u00A0casi e 100\u00A0controlli, con una probabilità 23,3\u00A0volte più alta. Stare in piedi per la maggior parte della giornata lavorativa la aumentava di 3,6\u00A0volte (Riddle e colleghi, 2003).',
    'In uno studio su 40\u00A0guardie giurate in piedi per turni di 12\u00A0ore, sia le calze a compressione da 15-20\u00A0mmHg sia quelle da 20-30\u00A0mmHg hanno evitato l’aumento di fastidio e gonfiore visto con le calze normali (Garcia e colleghi, 2023).',
  ],
  sections: [
    {
      h2: 'Quanto è comune il dolore ai piedi negli infermieri?',
      paragraphs: [
        'Il dolore a piede e caviglia è tra i tre disturbi muscoloscheletrici più frequenti negli infermieri, insieme a mal di schiena e dolore al collo. In un sondaggio su 312\u00A0infermieri di un ospedale pediatrico, il 55,3% ha riferito problemi muscoloscheletrici a piede o caviglia negli ultimi 12\u00A0mesi, e il 43,8% aveva sintomi solo negli ultimi sette giorni. Un infermiere su sei ha detto che il dolore limitava la sua attività fisica. Fare turni di 12\u00A0ore in terapia intensiva era l’unico fattore legato al lavoro che aumentava in modo indipendente la probabilità di problemi al piede invalidanti.',
        'Un altro studio su 636\u00A0infermieri ospedalieri in Giappone ha trovato che il 51% riferiva dolore o disabilità al piede nell’ultimo mese, misurati con un questionario validato. La quota con un dolore che impediva il normale lavoro era del 17%. Uno studio con contapassi su infermieri coreani ha trovato in media 5,8\u00A0km percorsi per turno, un impegno fisico ben sopra quello della popolazione generale.',
        'Uno studio trasversale su 411\u00A0infermieri finlandesi ha trovato che pelle secca, dolore ai piedi e calli erano i disturbi ai piedi più comuni, e che i problemi ai piedi erano associati a una minore capacità di lavorare. Gli autori hanno chiesto di dare priorità alla prevenzione dei problemi ai piedi negli infermieri.',
      ],
      cites: [CITE.changCho, CITE.reedNurse, CITE.tojo, CITE.stoltNurse],
    },
    {
      h2: 'Perché gli infermieri hanno male ai piedi nei turni di 12\u00A0ore?',
      paragraphs: [
        'In un turno infermieristico si sommano tre cose: tanto tempo in piedi, lunghe distanze a piedi e pavimenti duri. Stare fermi in piedi carica la fascia plantare, i muscoli del polpaccio e il cuscinetto del tallone senza la pompa che dà la camminata. Camminare aiuta il sangue a risalire dalle gambe, ma gli infermieri passano in modo imprevedibile dallo stare fermi accanto a un letto al camminare per lunghi corridoi, quindi la pompa del polpaccio non trova mai un ritmo regolare.',
        'Una revisione del 2015 della letteratura di medicina del lavoro ha associato lo stare in piedi a lungo al lavoro a fastidi muscoloscheletrici, stanchezza e dolore alle gambe in molti lavori in piedi, citando gli infermieri tra i gruppi a rischio più alto. La revisione ha notato che lo sforzo cardiovascolare e il gonfiore delle gambe aumentano con il tempo passato in piedi.',
        'A livello dei tessuti, un polpaccio rigido è un pezzo chiave. Uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100\u00A0controlli appaiati ha trovato che una flessibilità della caviglia ridotta, cioè una caviglia che non si piega verso l’alto quanto dovrebbe perché il polpaccio è rigido, era il singolo fattore di rischio indipendente più forte per la fascite plantare, con una probabilità 23,3\u00A0volte più alta. Stare in piedi per la maggior parte della giornata lavorativa aumentava la probabilità di 3,6\u00A0volte. Gli infermieri hanno entrambi i fattori di rischio insieme.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Quali esercizi aiutano gli infermieri con il dolore ai piedi?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio e della fascia plantare una A, il suo grado più alto, e al lavoro di forza una B (Koc e colleghi, 2023).',
      paragraphs: [
        'Gli esercizi che aiutano sono gli stessi della fascite plantare e del dolore ai piedi da stazione eretta: allungamenti del polpaccio, un allungamento della fascia plantare, sollevamenti sulle punte per la forza del polpaccio e un esercizio per l’arco chiamato piede corto. Per gli infermieri la differenza è farli rientrare tra i turni a rotazione, non durante il turno. Pochi minuti prima o dopo il turno bastano per coprire i più importanti.',
        'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio e della fascia plantare il suo grado più alto, A, e al lavoro di forza una B. Entrambi i gradi riguardano la fascite plantare in particolare, ma i tessuti coinvolti sono gli stessi che prendono il carico durante un turno infermieristico. Se un esercizio porta il dolore a 6 su 10 o più, fermati per oggi.',
      ],
      exercises: [
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio una A per la fascite plantare. Un polpaccio rigido era il fattore di rischio più forte in uno studio caso-controllo del 2003.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Lavora sul gastrocnemio, il muscolo più grande e superficiale del polpaccio. Puoi farlo nella sala pausa o contro qualsiasi muro.',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa e il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: {
            level: 'moderate',
            why: 'Stesso sostegno della linea guida della versione a ginocchio teso. Lavora sul soleo, il muscolo più profondo del polpaccio.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione al muro, ma piega il ginocchio dietro finché senti l’allungamento più in basso, più vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro per sentirlo vicino al tallone',
          alt: 'Una figura in allungamento al muro con il ginocchio dietro piegato, con la parte bassa del polpaccio evidenziata',
        },
        {
          name: 'Allungamento della fascia plantare',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare una A.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla un piede sull’altro ginocchio. Tira indietro le dita con delicatezza finché senti un allungamento lungo l’arco. Se il tallone va peggio ai primi passi della giornata, fai questo la mattina prima che i piedi tocchino terra.',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita con delicatezza finché lo senti nell’arco',
          alt: 'Una figura seduta che tira indietro le dita di un piede, con l’arco evidenziato',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 sul dolore al tallone dà al lavoro di forza una B per la fascite plantare. Costruisce la forza del polpaccio che assorbe gli impatti durante il turno.',
          },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci in circa tre secondi, poi scendi piano in tre secondi. Tieniti a un muro o a un corrimano per l’equilibrio. I dettagli su questo esercizio, compresi come progredire e la variante con l’asciugamano, sono in [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte: sali sopra gli alluci, scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Piede corto, da seduto',
          evidence: {
            level: 'early',
            why: 'Una revisione del 2024 ha trovato che l’allenamento del piede corto cambiava la forma dell’arco ma non il dolore. Walkito lo inserisce come parte di un programma più ampio.',
          },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede',
          how: 'Siediti con il piede appoggiato a terra. Tira l’avampiede verso il tallone così l’arco si solleva, senza arricciare le dita. Allena i piccoli muscoli dentro l’arco che lo sostengono durante una lunga giornata in piedi.',
          media: 'short_foot_seated',
          caption: 'Piede corto: tira l’avampiede verso il tallone così l’arco si solleva',
          alt: 'Una gamba seduta con il piede a terra, con l’arco evidenziato mentre si solleva',
        },
        {
          name: 'Apertura delle dita',
          evidence: {
            level: 'early',
            why: 'Non fa parte dei programmi testati in questa pagina. Lavora sui muscoli intrinseci del piede, compressi dentro le scarpe da lavoro.',
          },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi',
          how: 'Siediti o stai in piedi e apri tutte e cinque le dita il più possibile, poi tieni. Dopo un turno in scarpe strette, risveglia i piccoli muscoli tra le dita.',
          media: 'toe_spread',
          caption: 'Apertura delle dita: apri tutte e cinque le dita e tieni',
          alt: 'Un piede visto dall’alto con le dita ben aperte',
        },
      ],
      table: {
        caption: 'Dosi di partenza per infermieri con dolore ai piedi',
        head: ['Esercizio', 'Dose', 'Quando', 'Cosa dovresti sentire'],
        rows: [
          ['Allungamento del polpaccio (ginocchio teso)', '2 x 30\u00A0secondi, ogni gamba', 'Prima o dopo il turno', 'Un allungamento nella parte alta del polpaccio'],
          ['Allungamento del soleo (ginocchio piegato)', '2 x 30\u00A0secondi, ogni gamba', 'Prima o dopo il turno', 'Un allungamento in basso nel polpaccio, vicino al tallone'],
          ['Allungamento della fascia plantare', '2 x 30\u00A0secondi, ogni piede', 'Prima del turno o al risveglio', 'Un allungamento lungo l’arco'],
          ['Sollevamenti sulle punte', '3 x 10, entrambi i piedi', 'Nei giorni liberi o dopo il turno', 'I polpacci che lavorano, non un dolore acuto'],
          ['Piede corto', '3 x 10 (tenuta di 5\u00A0secondi), ogni piede', 'Nei giorni liberi o dopo il turno', 'L’arco che si solleva, dita rilassate'],
          ['Apertura delle dita', '3 x 10 (tenuta di 5\u00A0secondi)', 'Dopo il turno', 'Le dita che si aprono, nessun dolore'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Come inserire gli esercizi tra i turni a rotazione?',
      paragraphs: [
        'Un turno di 12\u00A0ore lascia poco tempo per una routine di esercizi a parte, e alternare turni di giorno e di notte rende tutto ancora più difficile. Gli allungamenti di questa pagina richiedono circa 3\u00A0minuti, quindi la cosa più semplice è farli subito prima o subito dopo il turno, sempre nello stesso momento della tua routine. Per esempio, falli dopo esserti messo o tolto le scarpe da lavoro.',
        'Nei giorni liberi aggiungi gli esercizi di forza: sollevamenti sulle punte e piede corto. Richiedono circa 5-10\u00A0minuti. Fare il lavoro di forza nei giorni liberi, invece che dopo un turno pesante, dà a polpaccio e arco il tempo di recuperare prima del turno successivo in piedi.',
        'Tre sessioni a settimana sono un punto di partenza ragionevole. Se fai tre turni da 12\u00A0ore con quattro giorni liberi, il lavoro di forza sta in ogni giorno libero. Se alterni turni di giorno e di notte, l’ora del giorno non conta. Conta la costanza, non l’orologio.',
      ],
    },
    {
      h2: 'Le scarpe per infermieri fanno la differenza: zoccoli, sneaker o altro?',
      paragraphs: [
        'Le calzature sono uno degli argomenti più discussi tra gli infermieri, ma le prove a favore di un tipo rispetto a un altro sono limitate. Una valutazione del 2007 di tre marche di scarpe professionali per infermieri ha trovato che la scarpa con un plantare interno più ammortizzato e un miglior sostegno dell’arco riduceva lo sforzo muscolare degli arti inferiori rispetto alle altre due, ma lo studio era piccolo e legato a marche specifiche.',
        'Quello che la ricerca sostiene in modo più ampio è che il comfort delle scarpe conta. In un sondaggio su 125\u00A0infermieri di pronto soccorso e ambulatori, il 72% di chi riferiva scarpe poco comode riferiva anche dolore al piede e al tallone, contro il 28% di chi riferiva scarpe molto comode. La linea guida del 2023 sul dolore al tallone dà ai plantari da soli una B contro per il sollievo a breve termine dalla fascite plantare, cioè le prove fanno propendere per non usarli come unica soluzione.',
        'Un approccio pratico: scegli una scarpa che calzi bene, abbia un po’ di ammortizzazione e non stringa le dita. Se hai già dolore al tallone o all’arco, gli esercizi di questa pagina lavorano direttamente sui tessuti. Scarpe e plantari possono aiutare il comfort durante il turno, ma non sostituiscono lo stretching e il lavoro di forza.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Le calze a compressione aiutano gli infermieri con il dolore a piedi e gambe?',
      keyFact: 'In uno studio su 40\u00A0guardie giurate in piedi per turni di circa 12\u00A0ore, sia le calze a compressione da 15-20\u00A0mmHg sia quelle da 20-30\u00A0mmHg hanno evitato l’aumento del fastidio a piedi e gambe visto con le calze normali (Garcia e colleghi, 2023).',
      paragraphs: [
        'Le calze a compressione hanno uno degli studi meglio controllati sul fastidio da stazione eretta. In uno studio randomizzato su 40\u00A0guardie giurate in piedi per turni di circa 12\u00A0ore, sia il gruppo con calze da 15-20\u00A0mmHg sia quello con calze da 20-30\u00A0mmHg hanno evitato l’aumento significativo di fastidio, stanchezza e gonfiore a piedi e gambe visto nel gruppo con calze normali. I partecipanti dicevano spesso che la calza a pressione più bassa era più facile da infilare.',
        'Uno studio pilota randomizzato su 20\u00A0studenti di infermieristica ha confrontato calze a compressione al ginocchio e alla coscia indossate durante turni di tirocinio clinico di 9\u00A0ore. Entrambi i gruppi si sono detti molto soddisfatti, anche se il campione era troppo piccolo per mostrare differenze chiare di risultato tra le due lunghezze.',
        'Lo studio di Garcia riguardava guardie giurate tutte di sesso maschile, non infermieri, e nessuno dei due studi era grande. Ma le calze a compressione sono uno dei pochi interventi specifici per lo stare in piedi con prove randomizzate. Una revisione di medicina del lavoro del 2015 le elenca insieme a tappetini e scarpe di sostegno tra gli interventi con qualche prova di ridurre il fastidio nel lavoro in piedi prolungato. Non sostituiscono lo stretching o il lavoro di forza. Gestiscono gonfiore e stanchezza, mentre polpaccio e fascia hanno comunque bisogno del loro lavoro.',
      ],
      sourceNote:
        'Garcia e colleghi (2023): disegno a gruppi paralleli, 40\u00A0guardie giurate di sesso maschile assegnate a caso a tre gruppi (calze normali, 15-20\u00A0mmHg, 20-30\u00A0mmHg), ognuna indossata per un intero turno di lavoro. Fastidio, stanchezza ed edema misurati prima e dopo il turno.',
      cites: [CITE.garcia, CITE.waters],
    },
    {
      h2: 'Cosa puoi fare prima e dopo il turno in 3, 5 o 10\u00A0minuti?',
      paragraphs: [
        'Se hai 3\u00A0minuti: fai i due allungamenti del polpaccio (ginocchio teso e ginocchio piegato, 30\u00A0secondi per lato). Coprono il singolo fattore di rischio modificabile più forte, un polpaccio rigido, e richiedono lo stesso tempo che serve per allacciarti le scarpe.',
        'Se hai 5\u00A0minuti: aggiungi l’allungamento della fascia plantare (30\u00A0secondi per piede). È la combinazione a cui la linea guida del 2023 dà una A per la fascite plantare. Se il tallone va peggio ai primi passi della giornata, fai l’allungamento della fascia prima che i piedi tocchino terra.',
        'Se hai 10\u00A0minuti: aggiungi i sollevamenti sulle punte (3\u00A0serie da 10) e il piede corto (3\u00A0serie da 10 con tenuta di 5\u00A0secondi). Coprono il lato della forza, con grado B nella linea guida. Nei giorni liberi, 10\u00A0minuti coprono tutto quello che c’è in questa pagina.',
        'La costanza conta più della durata. Tre minuti di allungamento del polpaccio in ogni giorno di turno, fatti sempre nello stesso momento della routine, servono più di una sessione lunga che salti quando cambiano i turni.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Il dolore ai piedi dopo un turno può essere fascite plantare o altro?',
      paragraphs: [
        'Dolore e stanchezza generici dopo un turno lungo sono comuni e di solito passano con il riposo. La fascite plantare è un problema preciso: dolore acuto vicino al tallone, peggiore ai primi passi dopo il riposo (alzarsi dal letto, alzarsi dopo essere stati seduti a lungo). Se il tuo dolore segue questo schema, gli esercizi in [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/) sono la guida più completa, e i dettagli sui sollevamenti sulle punte sono in [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
        'Se a fine turno senti gli archi piatti o ceduti verso l’interno, gli esercizi per l’arco in [esercizi per il piede piatto](/it/esercizi-piede-piatto/) lavorano sui muscoli che tengono su l’arco. Un dolore lungo lo stinco potrebbe essere periostite tibiale. Un dolore nel tendine d’Achille dietro il tallone è un problema diverso.',
        'Se la tua domanda principale è il dolore da stazione eretta e non sei infermiere, [perché mi fanno male i piedi dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) copre gli stessi esercizi per un pubblico più ampio. Per la versione di questo problema legata alla scrivania in piedi, vedi [dolore ai piedi con la scrivania in piedi](/it/scrivania-in-piedi-dolore-piedi/). Se non sai cosa causa il dolore, senti un professionista sanitario prima di caricare il piede con gli esercizi.',
      ],
    },
  ],
  faq: [
    {
      q: 'Quanti passi fa un infermiere in un turno di 12\u00A0ore?',
      a: 'In uno studio con contapassi su infermieri ospedalieri coreani, la media era di circa 9.360\u00A0passi per turno, circa 5,8\u00A0km in 9,4\u00A0ore. È ben sopra la media di passi giornalieri della popolazione adulta, e camminare a lungo su pavimenti duri contribuisce molto al dolore ai piedi nell’infermieristica.',
      cites: [CITE.changCho, CITE.tojo],
    },
    {
      q: 'I turni di 12\u00A0ore fanno più male ai piedi di quelli di 8\u00A0ore?',
      a: 'In un sondaggio su infermieri di un ospedale pediatrico, fare turni di 12\u00A0ore in terapia intensiva era l’unico fattore di lavoro che aumentava in modo indipendente la probabilità di problemi invalidanti a piede e caviglia. Il carico totale sul piede cresce con la durata del turno, e il recupero tra un turno e l’altro è più breve quando i turni sono più lunghi. Detto questo, contano anche il tipo di lavoro e il pavimento, non solo le ore.',
      cites: [CITE.reedNurse],
    },
    {
      q: 'Meglio zoccoli o sneaker per infermieri con male ai piedi?',
      a: 'Non esiste un grande studio che confronti zoccoli e sneaker per infermieri sui risultati per i piedi. Le prove sostengono invece che il comfort delle scarpe è molto legato al dolore ai piedi: in un sondaggio, il 72% degli infermieri con scarpe poco comode riferiva anche dolore al piede e al tallone. Scegli una scarpa che calzi bene, abbia un po’ di ammortizzazione e non stringa le dita. Le scarpe da sole non sostituiscono lo stretching e il lavoro di forza di questa pagina.',
    },
    {
      q: 'Le calze a compressione aiutano gli infermieri nei turni lunghi?',
      a: 'In uno studio randomizzato su 40\u00A0guardie giurate in piedi per turni di 12\u00A0ore, sia le calze a compressione da 15-20\u00A0mmHg sia quelle da 20-30\u00A0mmHg hanno evitato l’aumento di fastidio e gonfiore visto con le calze normali. Lo studio non era sugli infermieri, ma il meccanismo è lo stesso: la compressione aiuta il sangue a risalire dalle gambe durante lunghi periodi in piedi. La maggior parte dei partecipanti trovava più facile da infilare la calza a pressione più bassa.',
      cites: [CITE.garcia],
    },
    {
      q: 'Il male ai piedi per chi fa l’infermiere va solo sopportato?',
      a: 'Il dolore ai piedi da stazione eretta e camminata è comune nell’infermieristica, ma «comune» non vuol dire inevitabile. La linea guida del 2023 sul dolore al tallone dà all’allungamento di polpaccio e fascia una A e al lavoro di forza una B. Le calze a compressione hanno prove randomizzate sul fastidio da stazione eretta. Qualche minuto di allungamento del polpaccio prima o dopo ogni turno, più il lavoro di forza nei giorni liberi, lavora sui tessuti che si prendono più sforzo.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'Si può avere la fascite plantare per il lavoro da infermiere?',
      a: 'Stare in piedi per la maggior parte della giornata lavorativa aumentava di 3,6\u00A0volte la probabilità di fascite plantare in uno studio caso-controllo appaiato con 50\u00A0casi e 100\u00A0controlli. Una flessibilità della caviglia ridotta la aumentava di 23,3\u00A0volte. Gli infermieri hanno entrambi i fattori di rischio, molto tempo in piedi e poche pause per allungarsi, ed è per questo che gli esercizi di questa pagina si sovrappongono molto a quelli della guida sulla fascite plantare.',
      cites: [CITE.riddle],
    },
    {
      q: 'Qual è la prima cosa che un infermiere può fare per il male ai piedi?',
      a: 'Tra le opzioni viste in questa pagina, l’allungamento quotidiano del polpaccio ha il sostegno più forte della linea guida (grado A per la fascite plantare) e lavora sul singolo fattore di rischio modificabile più forte, un polpaccio rigido. Richiede circa 2\u00A0minuti, non serve attrezzatura e si fa nella sala pausa o a casa. Aggiungere le calze a compressione nei giorni di turno copre il lato di gonfiore e stanchezza.',
      cites: [CITE.guideline, CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio preciso o una caduta al lavoro',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'il piede è intorpidito, formicola, brucia, è gonfio o caldo',
      'il tallone o il piede è arrossato, o hai la febbre o non ti senti bene',
      'il dolore ti sveglia di notte',
      'il dolore è acuto, o peggiora anche se hai ridotto il carico',
      'il dolore è in un solo punto preciso e peggiora con l’attività, che può essere lo schema di una frattura da stress e non di stanchezza da stazione eretta',
      'una gamba o un piede si è gonfiato all’improvviso ed è dolorante, arrossato o caldo',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
      'il dolore non si è calmato dopo diverse settimane di turni più leggeri, scarpe migliori e gli esercizi di questa pagina',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text:
      'Non devi capire da solo l’ordine, le dosi o quando passare a una versione più dura. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Se il dolore ai piedi segue lo schema del dolore mattutino tipico della fascite plantare, il primo obiettivo è un dolore mattutino a 1 su 10 o meno per 14\u00A0giorni di fila.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto il primo obiettivo), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi se il lavoro sta dando risultati. Con i turni a rotazione, l’ora del giorno non conta. Conta fare le sessioni con costanza.',
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se il dolore è acuto, peggiora o ti tiene sveglio di notte, rivolgiti prima a un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Dolore ai piedi per infermieri',
  campaign: 'guide-nurses-it',
};
