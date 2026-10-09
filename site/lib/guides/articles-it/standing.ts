import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Italian version of `articles/standing.ts`, written around the queries
 * «piedi doloranti stare in piedi tutto il giorno», «male ai piedi dopo il
 * lavoro in piedi» and «calze a compressione lavoro in piedi». Informal «tu».
 * Exercise names as in `it.ts`. Figures, doses, grades and qualifiers are
 * identical to the English page.
 */

const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} o ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const STANDING_IT: Guide = {
  lang: 'it',
  page: 'standing',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Male ai piedi dopo una giornata in piedi: perché e cosa fare',
  description:
    'Perché i piedi fanno male a stare in piedi tutto il giorno, cosa aiuta (allungamenti, rinforzo del polpaccio, calze a compressione) e quando farsi vedere.',
  h1: 'Perché mi fanno male i piedi dopo una giornata in piedi?',
  lede:
    'A fine turno ti fanno male i piedi. L’arco duole, il tallone è dolorante e le gambe sono pesanti. Stare in piedi per ore su un pavimento duro carica sempre gli stessi tessuti, senza la pompa che la camminata dà ai polpacci e alle vene. Allungare il polpaccio e la fascia plantare, e costruire un po’ di forza nel polpaccio, lavora proprio sui tessuti che si prendono più sforzo.',
  intro: [
    'Non tutto il dolore ai piedi da stazione eretta è fascite plantare, ma le due cose si sovrappongono. Uno studio caso-controllo del 2003 su 50\u00A0persone con fascite plantare e 100\u00A0controlli appaiati ha trovato che stare in piedi per la maggior parte della giornata lavorativa aumentava di 3,6\u00A0volte la probabilità di fascite plantare. Una flessibilità della caviglia ridotta era un fattore di rischio ancora più forte, con una probabilità 23,3\u00A0volte più alta. Gli esercizi che aiutano entrambe le cose sono in gran parte gli stessi: allungamenti del polpaccio e della fascia plantare, più lavoro di forza per il polpaccio.',
  ],
  toc: true,
  takeaways: [
    'Una revisione del 2015 della letteratura di medicina del lavoro ha associato lo stare in piedi a lungo al lavoro a fastidi muscoloscheletrici, stanchezza e dolore alle gambe, con tappetini, calze a compressione e scarpe di sostegno tra gli interventi che hanno prove a favore (Waters e Dick, 2015).',
    'Stare in piedi per la maggior parte della giornata lavorativa aumentava di 3,6\u00A0volte la probabilità di fascite plantare in uno studio caso-controllo con 50\u00A0casi e 100\u00A0controlli. Una flessibilità della caviglia ridotta la aumentava di 23,3\u00A0volte (Riddle e colleghi, 2003).',
    'In uno studio a gruppi paralleli su 40\u00A0guardie giurate assegnate a caso a calze normali o a uno di due gruppi con calze a compressione, sia le calze da 15-20\u00A0mmHg sia quelle da 20-30\u00A0mmHg hanno evitato l’aumento del fastidio a piedi e gambe visto con le calze normali durante turni in piedi di 12\u00A0ore (Garcia e colleghi, 2023).',
    'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio il suo grado più alto, A, e al lavoro di forza una B.',
  ],
  sections: [
    {
      h2: 'Perché i piedi fanno male dopo una giornata in piedi?',
      keyFact: 'In uno studio caso-controllo del 2003, una flessibilità della caviglia ridotta aumentava di 23,3\u00A0volte la probabilità di fascite plantare, il fattore di rischio più forte trovato, e stare in piedi per la maggior parte della giornata lavorativa la aumentava di 3,6\u00A0volte (Riddle e colleghi, 2003).',
      paragraphs: [
        'I piedi fanno male a stare in piedi perché restare fermi carica la fascia plantare, i muscoli del polpaccio e il tallone senza dare loro pausa. Camminando, ogni passo pompa il sangue dalle gambe verso l’alto. Stando fermi in piedi quella pompa si spegne, quindi il sangue ristagna nella parte bassa delle gambe e i tessuti sotto il piede reggono lo stesso carico statico per ore.',
        'Una revisione del 2015 della ricerca di medicina del lavoro ha associato lo stare in piedi a lungo a mal di schiena, dolore alle gambe, fastidio e stanchezza in molti lavori in piedi. La revisione ha anche notato che lo sforzo cardiovascolare e il gonfiore delle gambe aumentano con il tempo passato in piedi. Gli autori hanno chiesto definizioni più chiare di «stare in piedi a lungo» negli studi futuri, perché il confine tra un tempo in piedi sicuro e uno dannoso cambia da persona a persona e da lavoro a lavoro.',
        'Su polpaccio e fascia in particolare, uno studio caso-controllo del 2003 ha trovato due fattori di rischio che spiccavano sugli altri. Una flessibilità della caviglia ridotta, cioè un polpaccio rigido, era il singolo fattore più forte per la fascite plantare, con una probabilità 23,3\u00A0volte più alta. Stare in piedi per la maggior parte della giornata lavorativa aumentava la probabilità di 3,6\u00A0volte. Le due cose sono collegate: un polpaccio rigido tiene il tallone sotto più tensione in ogni minuto passato in piedi.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Quali esercizi aiutano i piedi che fanno male a stare in piedi?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio una A, il suo grado più alto, e al lavoro di resistenza e di forza una B (Koc e colleghi, 2023).',
      paragraphs: [
        'Questi esercizi lavorano sul polpaccio, sulla fascia plantare e sui piccoli muscoli che sostengono l’arco. Sono le dosi di partenza di Walkito, non una prescrizione. Se il dolore è vicino al tallone e segue lo schema del dolore mattutino tipico della fascite plantare, l’elenco più completo è in [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/). [Come sono scritte queste guide](/it/chi-siamo/).',
        'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio il suo grado più alto, A. Al lavoro di resistenza e di forza dà una B. Entrambi i gradi riguardano la fascite plantare in particolare, non la stanchezza generica da stazione eretta, ma i tessuti coinvolti sono gli stessi. Se un esercizio porta il dolore a **6/10 o più**, fermati per oggi.',
      ],
      table: {
        head: ['Esercizio', 'Dose', 'Quanto spesso', 'Cosa dovresti sentire', 'Fermati se'],
        rows: [
          ['Allungamento del polpaccio', '2\u00A0tenute da 30\u00A0secondi, ogni gamba', 'Quasi tutte le sessioni', 'Un allungamento nel polpaccio della gamba dietro tesa', 'Il dolore arriva a 6/10'],
          ['Allungamento del soleo', '2\u00A0tenute da 30\u00A0secondi, ogni gamba', 'Quasi tutte le sessioni', 'Un allungamento in basso nel polpaccio, vicino al tallone', 'Il dolore arriva a 6/10'],
          ['Allungamento della fascia plantare', '2\u00A0tenute da 30\u00A0secondi, ogni piede', 'Quasi tutte le sessioni', 'Un allungamento lungo l’arco, non nel polpaccio', 'Il dolore arriva a 6/10'],
          ['Sollevamenti sulle punte su due piedi', '3\u00A0serie da 10, entrambi i piedi', 'Giorni di forza', 'I polpacci che lavorano, con i due piedi che si dividono il carico', 'Il dolore arriva a 6/10'],
          ['Piede corto, da seduto', '3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede', 'Giorni di forza', 'L’arco che si solleva, dita rilassate', 'Il dolore arriva a 6/10'],
          ['Equilibrio su una gamba', '3\u00A0tenute da 30\u00A0secondi, ogni gamba', 'Giorni di equilibrio', 'Il piede e la caviglia che fanno piccole correzioni', 'Il dolore arriva a 6/10'],
          ['Massaggio con la pallina', '2\u00A0minuti', 'Giorni di recupero', 'Una pressione decisa sotto il piede, mai una smorfia', 'Il dolore arriva a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Allungamento del polpaccio',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio una A per la fascite plantare. Un polpaccio rigido era il fattore di rischio più forte in uno studio caso-controllo del 2003.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Un polpaccio rigido tira il tallone tutto il giorno, quindi questo allungamento lavora sul singolo fattore di rischio più forte trovato dallo studio del 2003.',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa e il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: {
            level: 'moderate',
            why: 'Stesso meccanismo dell’allungamento del polpaccio: lavora sulla flessibilità della caviglia, il fattore di rischio più forte per la fascite plantare nello studio del 2003.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          how: 'Stessa posizione al muro, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura in allungamento al muro con il ginocchio dietro piegato, con la parte bassa del polpaccio evidenziata',
        },
        {
          name: 'Allungamento della fascia plantare',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare una A per la fascite plantare.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sull’altro ginocchio. Tira indietro le dita finché senti l’allungamento lungo l’arco, non nel polpaccio. Se il tallone va peggio appena alzato la mattina, fai questo prima che il piede tocchi terra.',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita finché lo senti nell’arco',
          alt: 'Una figura che tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 sul dolore al tallone dà al lavoro di forza una B per la fascite plantare. Non testato in modo specifico per la stanchezza da stazione eretta.',
          },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico mentre il polpaccio prende forza. Tieniti a un muro o a un corrimano se ti serve equilibrio.',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte: sali dritto sopra gli alluci, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Piede corto, da seduto',
          evidence: {
            level: 'early',
            why: 'Una revisione del 2024 ha trovato che l’allenamento del piede corto cambiava la forma dell’arco ma non il dolore. In uno studio del 2023 faceva parte di un programma che ha migliorato le misure dell’arco.',
          },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede',
          often: 'Giorni di forza',
          feel: 'L’arco che si solleva, dita rilassate',
          how: 'Siediti con il piede appoggiato a terra. Tira l’avampiede verso il tallone così l’arco si solleva, e tieni. Non arricciare le dita. Il piede corto allena il piccolo muscolo dentro l’arco che lo tiene su durante una lunga giornata in piedi.',
          image: 'Esercizio: piede corto, da seduto',
          media: 'short_foot_seated',
          caption: 'Piede corto: tira l’avampiede verso il tallone così l’arco si solleva',
          alt: 'Una gamba seduta con il piede a terra, con l’arco evidenziato mentre si solleva',
        },
        {
          name: 'Equilibrio su una gamba',
          evidence: {
            level: 'early',
            why: 'Nessuno studio specifico sullo stare in piedi. Lavoro generale di equilibrio per piede e caviglia.',
          },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Giorni di equilibrio',
          feel: 'Piccole correzioni nel piede e nella caviglia',
          how: 'Stai su un piede e guarda un punto fisso. Lascia che il piede oscilli. L’oscillazione è il piede che fa il lavoro di equilibrio. Mettiti vicino a un muro se ti serve una rete di sicurezza.',
          image: 'Esercizio: equilibrio su una gamba',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: stai su un piede e lascia che faccia piccole correzioni',
          alt: 'Una figura in equilibrio su una gamba, con i muscoli della parte bassa della gamba evidenziati',
        },
        {
          name: 'Massaggio con la pallina',
          evidence: {
            level: 'early',
            why: 'Non testato negli studi di questa pagina. Una misura di sollievo tra una sessione e l’altra.',
          },
          dose: '2\u00A0minuti',
          often: 'Giorni di recupero',
          feel: 'Una pressione decisa sotto il piede',
          how: 'Siediti e fai rotolare piano la pianta del piede su una pallina da massaggio, con una pressione decisa. Se fai una smorfia, alleggerisci. Farlo dopo un turno lungo calma il tessuto e dà un po’ di sollievo prima del giorno dopo.',
          image: 'Esercizio: massaggio con la pallina',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: fai rotolare piano la pianta su una pallina, con pressione decisa',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina, con la pianta evidenziata',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Plantari o scarpe di sostegno aiutano i piedi che fanno male a stare in piedi?',
      paragraphs: [
        'Scarpe di sostegno e plantari sono consigliati spesso per il dolore ai piedi da stazione eretta, e c’è qualche base, ma le prove sono più scarse rispetto allo stretching e al lavoro di forza. La linea guida del 2023 sul dolore al tallone dà ai plantari da soli una **B contro** per il sollievo dal dolore a breve termine, cioè le prove fanno propendere per non usarli come unica soluzione. I plantari insieme ad altre cure prendono una **C**.',
        'Quello che la revisione di medicina del lavoro sostiene è più ampio: tappetini, scarpe di sostegno e la possibilità di alternare seduto e in piedi compaiono tutti tra gli interventi con qualche prova di ridurre il fastidio nel lavoro in piedi. Nessuno di questi ha dietro un singolo grande studio come ce l’ha l’allungamento del polpaccio. Un approccio ragionevole è usare scarpe di sostegno e un tappetino se il pavimento è duro, e fare lo stretching e il lavoro di forza per i tessuti stessi.',
      ],
      cites: [CITE.guideline, CITE.waters],
    },
    {
      h2: 'Le calze a compressione aiutano il dolore ai piedi da stazione eretta?',
      keyFact: 'In uno studio su 40\u00A0guardie giurate in piedi per turni di 12\u00A0ore, sia le calze a compressione da 15-20\u00A0mmHg sia quelle da 20-30\u00A0mmHg hanno evitato l’aumento del fastidio a piedi e gambe visto con le calze normali (Garcia e colleghi, 2023).',
      paragraphs: [
        'Le calze a compressione hanno uno degli studi meglio controllati proprio sul fastidio da stazione eretta. In uno studio randomizzato su 40\u00A0guardie giurate in piedi per turni di circa 12\u00A0ore, divise in tre gruppi, sia il gruppo con calze da 15-20\u00A0mmHg sia quello con calze da 20-30\u00A0mmHg hanno evitato l’aumento significativo di fastidio, stanchezza e gonfiore a piedi e gambe visto nel gruppo con calze normali. I partecipanti dicevano spesso che la calza a pressione più bassa era più facile da infilare.',
        'Lo studio era piccolo, tutto maschile, e ha testato un solo lavoro. Ma è uno dei pochi interventi per il fastidio da stazione eretta con un disegno randomizzato, ed è per questo che in questa pagina viene prima di consigli più popolari. Le calze a compressione non sostituiscono lo stretching o il lavoro di forza. Aiutano a gestire gonfiore e stanchezza, mentre polpaccio e fascia hanno comunque bisogno del loro lavoro.',
      ],
      sourceNote:
        'Garcia e colleghi (2023): disegno a gruppi paralleli, 40\u00A0guardie giurate maschi assegnate a caso a uno di tre gruppi (calze normali, 15-20\u00A0mmHg o 20-30\u00A0mmHg), ogni condizione indossata per un intero turno di lavoro da un diverso sottogruppo di guardie. Fastidio, stanchezza ed edema misurati prima e dopo il turno.',
      cites: [CITE.garcia],
    },
    {
      h2: 'Il dolore ai piedi da stazione eretta può essere fascite plantare, piede piatto o altro?',
      paragraphs: [
        'Il dolore ai piedi da stazione eretta può essere una stanchezza generica che passa con il riposo, oppure l’inizio di un problema con un nome preciso. Il più comune è la fascite plantare: dolore acuto vicino al tallone, di solito peggiore ai primi passi dopo il riposo. Se il tallone fa più male la mattina e di nuovo dopo che sei stato seduto, quello schema fa pensare alla fascite plantare, e gli esercizi in [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/) sono la guida più completa.',
        'Se a fine giornata senti gli archi piatti o ceduti verso l’interno, gli esercizi per l’arco in [esercizi per il piede piatto](/it/esercizi-piede-piatto/) lavorano sui muscoli che tengono su l’arco. Un piede piatto rigido, che resta piatto anche quando il piede è sollevato da terra, è strutturale e va visto da un professionista sanitario più che trattato con gli esercizi.',
        'Se il dolore è lungo lo stinco e non sotto il piede, fa pensare alla periostite tibiale, e [esercizi per la periostite tibiale](/it/periostite-tibiale-esercizi/) spiega cosa dice la ricerca. Il dolore dietro il tallone, nel tendine d’Achille, è un problema diverso. Il dolore sul lato interno della caviglia può venire dal tendine tibiale posteriore. Entrambi sono trattati dal punto di vista di chi corre in [dolore al tallone nella corsa](/heel-pain-runners/) (in inglese). Se il dolore è dietro il tallone nel tendine d’Achille, vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/); se vuoi più dettagli proprio sull’esercizio dei sollevamenti sulle punte, vedi [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/). Se non sai cosa causa il dolore, senti un professionista sanitario prima di caricarlo con gli esercizi.',
      ],
    },
    {
      h2: 'Quanto ci vuole perché i piedi reggano meglio un turno lungo?',
      paragraphs: [
        'Nessuno studio risponde direttamente a questa domanda per la stanchezza dei piedi da stazione eretta. Il dolore e la stanchezza generici di solito si calmano in un giorno o due di riposo. Se il dolore è diventato fascite plantare, i tempi sono più lunghi: una revisione delle prove cliniche riporta che circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche come stretching e plantari, spesso in 3-6\u00A0mesi.',
        'Quello che puoi misurare prima è se gli esercizi stanno cambiando qualcosa. La flessibilità del polpaccio può iniziare a cambiare in poche settimane di stretching quotidiano. Ripetere i test di resistenza del polpaccio e di equilibrio ogni poche settimane ti dà un numero da guardare invece di un’impressione. Gli esercizi di questa pagina e quelli in [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) lavorano sugli stessi tessuti, quindi farli per lo stare in piedi copre anche la strada più comune verso la fascite plantare.',
      ],
      cites: [CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Perché i piedi fanno più male a fine turno in piedi che all’inizio?',
      a: 'La fascia plantare, i muscoli del polpaccio e le vene della parte bassa della gamba reggono un carico statico e prolungato solo fino a un certo punto, e quella tolleranza si esaurisce in ore di stazione eretta. Stando fermi, la gravità fa ristagnare il sangue nei piedi e nelle gambe, e aumenta il dolore e il gonfiore che crescono durante il turno. Le pause camminando aiutano perché la pompa del polpaccio rimanda il sangue verso l’alto.',
      cites: [CITE.waters],
    },
    {
      q: 'Il male ai piedi a stare in piedi tutto il giorno è fascite plantare?',
      a: 'Non sempre. Dolore e stanchezza generici da stazione eretta sono comuni e di solito passano con il riposo. La fascite plantare è un problema preciso, con dolore acuto al tallone, spesso peggiore ai primi passi dopo il riposo. Stare in piedi per gran parte della giornata lavorativa è un fattore di rischio indipendente per la fascite plantare, con una probabilità 3,6\u00A0volte più alta in uno studio caso-controllo, quindi le due cose sono collegate ma non uguali.',
      cites: [CITE.riddle],
    },
    {
      q: 'Le calze a compressione servono per il male ai piedi da lavoro in piedi?',
      a: 'In uno studio su 40\u00A0guardie giurate in piedi per turni di 12\u00A0ore, assegnate a caso a calze normali o a uno di due gruppi con calze a compressione, sia quelle da 15-20\u00A0mmHg sia quelle da 20-30\u00A0mmHg hanno evitato l’aumento di fastidio, stanchezza e gonfiore a piedi e gambe visto con le calze normali. È uno dei pochi interventi specifici per lo stare in piedi con uno studio controllato, anche se lo studio era piccolo e tutto maschile.',
      cites: [CITE.garcia],
    },
    {
      q: 'È normale avere male ai piedi dopo un turno in piedi di 8 o 12 ore?',
      a: 'Un po’ di stanchezza e dolore dopo un lungo turno in piedi è comune e in linea con quello che riporta la ricerca di medicina del lavoro. Una revisione del 2015 ha legato lo stare in piedi a lungo a fastidi muscoloscheletrici e stanchezza in molti lavori in piedi. Comune non vuol dire da ignorare nel lungo periodo: la stessa revisione nota che tappetini, calze a compressione e scarpe migliori riducono in modo misurabile questi problemi.',
      cites: [CITE.waters],
    },
    {
      q: 'Qual è la prima cosa da provare per il male ai piedi da stazione eretta?',
      a: 'Tra le opzioni di auto-cura viste in questa pagina, l’allungamento del polpaccio e della fascia plantare ha il grado di prova più alto (A) nella linea guida del 2023 sul dolore al tallone, e le calze a compressione hanno lo studio controllato più solido sul fastidio da stazione eretta. Iniziare con allungamenti del polpaccio ogni giorno e provare le calze a compressione nel prossimo turno lungo copre entrambe le cose.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'Quante ore si può stare in piedi senza farsi male?',
      a: 'Non esiste un limite sicuro unico e testato. La ricerca di medicina del lavoro trova che fastidio, stanchezza e gonfiore aumentano quanto più a lungo un turno si passa in piedi, con l’aumento più chiaro nei turni da 8 a 12\u00A0ore. Il benessere dipende più dal movimento che dal numero di ore: brevi pause seduti o camminando più o meno ogni ora aiutano a compensare il carico statico sui piedi.',
      cites: [CITE.waters],
    },
    {
      q: 'Come stare in piedi 10 ore senza male ai piedi?',
      a: 'Nessun singolo trucco elimina il dolore di un turno di 10\u00A0ore, ma mettere insieme più cose aiuta di più: scarpe ammortizzate e di sostegno, un tappetino sui pavimenti duri, brevi pause camminando ogni ora per riattivare la circolazione e allungamenti del polpaccio e della fascia plantare ogni giorno. Le calze a compressione hanno ridotto fastidio e gonfiore in uno studio su guardie giurate con turni lunghi.',
      cites: [CITE.garcia, CITE.waters],
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'si accompagna a intorpidimento, formicolio, bruciore, gonfiore o calore',
      'il tallone o il piede è arrossato, o hai la febbre o non ti senti bene',
      'ti sveglia di notte',
      'è acuto, o peggiora anche se hai ridotto il carico',
      'il dolore è concentrato in un solo punto preciso e peggiora con l’attività, che può essere lo schema di una frattura da stress più che di stanchezza da stazione eretta',
      'una gamba o un piede si è gonfiato all’improvviso ed è dolorante, arrossato o caldo',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
      'il dolore non si è calmato dopo diverse settimane di meno carico, scarpe migliori e gli esercizi di questa pagina',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: `Non devi capire da solo l’ordine, le dosi o quando passare a una versione più dura. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Se il dolore ai piedi da stazione eretta è peggiore la mattina, il primo obiettivo è lo stesso del dolore al tallone: dolore mattutino a 1/10 o meno per ${PROGRAM.painFreeDays}\u00A0giorni di fila. Se hai anche il piede piatto, l’arco ha il suo obiettivo e i suoi esercizi.`,
    more: [
      `Scegli ${DAYS}\u00A0giorni a settimana e sessioni da ${MINUTES}\u00A0minuti. Ogni ${PROGRAM.testEveryDays}\u00A0giorni (poi ogni ${PROGRAM.testEveryDaysAfterGoal} quando hai raggiunto il primo obiettivo), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi se il lavoro sta dando risultati.`,
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se il dolore è acuto, peggiora o ti tiene sveglio di notte, rivolgiti prima a un professionista sanitario.',
    ],
    cta: `Inizia con ${PROGRAM.sessionMinutes[0]}\u00A0minuti al giorno.`,
  },
  crumb: 'Piedi doloranti a stare in piedi',
  campaign: 'guide-standing-it',
};
