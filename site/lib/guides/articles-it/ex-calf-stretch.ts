import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-calf-stretch.ts`, written around the
 * queries «allungamento polpaccio» and «stretching polpacci fascite
 * plantare». Informal «tu». Figures, doses, grades and qualifiers are
 * identical to the English page. Citations as in English (siriphorn).
 */

export const EX_CALF_STRETCH_IT: Guide = {
  lang: 'it',
  page: 'exCalfStretch',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Allungamento del polpaccio per la fascite plantare',
  description:
    'Come fare l’allungamento del polpaccio a ginocchio teso per la fascite plantare e i polpacci rigidi: tecnica, serie, tempi e cosa dicono gli studi.',
  h1: 'Allungamento del polpaccio per la fascite plantare: tecnica, serie e tempi',
  lede:
    'L’allungamento del polpaccio a ginocchio teso lavora sul gastrocnemio, il muscolo più grande e superficiale del polpaccio. Un gastrocnemio rigido limita quanto si piega la caviglia, e in uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100\u00A0controlli, una dorsiflessione della caviglia ridotta era il fattore di rischio indipendente più forte. La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio il grado più alto, A.',
  takeaways: [
    'Una dorsiflessione della caviglia ridotta era il fattore di rischio indipendente più forte per la fascite plantare in uno studio caso-controllo appaiato, con un odds ratio di 23,3 (Riddle e colleghi, 2003).',
    'In un’analisi retrospettiva su 254\u00A0persone con fascite plantare, tra il 52 e il 60% aveva una contrattura limitata al gastrocnemio (Patel e DiGiovanni, 2011).',
    'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio una A, il suo grado più alto (Koc e colleghi, 2023).',
    'Una meta-analisi del 2020 ha trovato un effetto ampio dell’allungamento del polpaccio e della fascia plantare, anche se la qualità delle prove andava da moderata a molto bassa (Siriphorn e Eksakulkla, 2020).',
    'Walkito parte da 3\u00A0tenute da 30\u00A0secondi, ogni gamba.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Come si fa l’allungamento del polpaccio a ginocchio teso?',
      paragraphs: [
        'Mettiti di fronte a un muro con le mani appoggiate più o meno all’altezza delle spalle. Porta un piede indietro di circa 60\u00A0cm. Tieni la gamba dietro tesa, il tallone premuto a terra e le dita rivolte in avanti. Porta i fianchi verso il muro finché senti un allungamento nella parte alta del polpaccio dietro. Tieni 30\u00A0secondi, poi cambia gamba.',
        '**La chiave è tenere il ginocchio dietro bloccato e teso.** Così isoli il gastrocnemio, che passa sia sul ginocchio sia sulla caviglia. Se pieghi il ginocchio, l’allungamento si sposta sul soleo, il muscolo più profondo del polpaccio, ed è un esercizio diverso. Per quella versione vedi [allungamento del soleo](/it/esercizi/allungamento-soleo/).',
      ],
      exercises: [
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: {
            level: 'strong',
            why: 'La linea guida del 2023 dà all’allungamento del polpaccio una A. Il polpaccio rigido era il fattore di rischio più forte per la fascite plantare in uno studio caso-controllo del 2003.',
          },
          dose: 'Walkito parte da 3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Porta un piede indietro, tieni quel ginocchio teso e il tallone giù. Porta i fianchi in avanti finché senti un allungamento nella parte alta del polpaccio. Tieni 30\u00A0secondi.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nella parte alta del polpaccio della gamba dietro',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Perché un polpaccio rigido fa male al tallone?',
      keyFact: 'In un’analisi retrospettiva su 254\u00A0persone con fascite plantare, poco più della metà aveva una contrattura limitata al gastrocnemio, e tra il 23 e il 30% aveva rigidi entrambi i muscoli del polpaccio (Patel e DiGiovanni, 2011).',
      paragraphs: [
        'Il gastrocnemio va da dietro il ginocchio fino al tallone, attraverso il tendine d’Achille. La fascia plantare è collegata al tendine d’Achille attraverso l’osso del tallone: passa sotto il calcagno e corre in avanti fino alle dita. Quando il gastrocnemio è rigido, limita quanto la caviglia può piegarsi verso l’alto. Così la fascia plantare deve assorbire più tensione a ogni passo.',
        'In uno studio caso-controllo appaiato su 50\u00A0persone con fascite plantare e 100\u00A0controlli, una dorsiflessione della caviglia ridotta era associata a un rischio molto più alto di fascite plantare (odds ratio 23,3). Era un fattore più forte dell’IMC, del tempo passato in piedi o di qualsiasi altra variabile dello studio.',
        'A parte, un’analisi retrospettiva su 254\u00A0persone con fascite plantare ha trovato che tra il 52 e il 60% aveva una contrattura limitata al gastrocnemio, e un altro 23-30% una contrattura combinata di gastrocnemio e soleo. In altre parole, **un polpaccio rigido non è un dettaglio.** C’è nella maggior parte delle persone con questo problema.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'L’allungamento del polpaccio aiuta la fascite plantare?',
      paragraphs: [
        'La linea guida del 2023 sul dolore al tallone ha esaminato gli studi disponibili sullo stretching e ha dato all’allungamento della fascia plantare e del polpaccio una **A**, il suo grado più alto. Quel grado vale per l’allungamento della fascia plantare e quello del polpaccio insieme, perché la maggior parte dei protocolli li include entrambi.',
        'Una revisione sistematica con meta-analisi del 2020 ha messo insieme gli studi sullo stretching e ha trovato un effetto ampio sia per l’allungamento del polpaccio sia per quello della fascia plantare. Gli autori hanno giudicato la qualità delle prove da moderata a molto bassa e hanno chiesto studi di qualità più alta. Anche così, l’effetto era ampio e paragonabile ad altri interventi.',
        'Nessuno studio isola l’allungamento del polpaccio a ginocchio teso da solo per la fascite plantare. Viene sempre testato come parte di un programma. La linea guida lo consiglia insieme all’[allungamento della fascia plantare](/it/esercizi/stretching-fascia-plantare/) e al lavoro di forza come i [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/).',
      ],
      cites: [CITE.guideline, CITE.siriphorn],
    },
    {
      h2: 'Quali sono gli errori più comuni nell’allungamento del polpaccio?',
      paragraphs: [
        {
          list: [
            '**Piegare il ginocchio dietro.** Appena il ginocchio si piega, il gastrocnemio si rilassa e l’allungamento passa al soleo. Tieni il ginocchio dietro bloccato e teso per tutta la tenuta.',
            '**Lasciare che il tallone dietro si sollevi.** Se il tallone si stacca da terra, il polpaccio non si sta allungando. Prima premi il tallone a terra, poi porta il peso in avanti finché compare l’allungamento.',
            '**Ruotare in fuori il piede dietro.** Quando il piede ruota verso l’esterno, l’allungamento si concentra sul lato esterno del polpaccio invece di tutto il muscolo. Tieni le dita puntate dritte verso il muro.',
            '**Tenere troppo poco.** Una tenuta da 10\u00A0secondi non basta perché un allungamento prolungato agisca sulla lunghezza del tessuto. Tieni almeno 30\u00A0secondi per ripetizione.',
          ],
        },
      ],
    },
    {
      h2: 'Chi dovrebbe fare questo allungamento e chi dovrebbe saltarlo?',
      paragraphs: [
        'Questo allungamento è utile per chi ha dolore al tallone, fascite plantare, polpacci rigidi per le tante ore in piedi o per uno sport che carica il polpaccio, come la corsa. Fa parte delle pagine [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/), [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) e [dolore al tallone quando corri](/heel-pain-runners/) (in inglese).',
        'Saltalo o modificalo se hai un problema al tendine d’Achille che fa male durante l’allungamento. In quel caso il dolore viene da un’altra struttura, e caricare l’Achille con un allungamento al muro potrebbe non essere il punto di partenza giusto. Vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/) per l’approccio specifico per l’Achille.',
        'Se non riesci ad arrivare al muro o a stare in piedi comodamente, un allungamento da seduto con un asciugamano dà una tensione simile sul polpaccio. Passa un asciugamano intorno all’avampiede, tieni il ginocchio teso e tira le dita verso di te.',
      ],
    },
    {
      h2: 'Come si abbina l’allungamento del polpaccio a quello del soleo',
      paragraphs: [
        'Il gastrocnemio e il soleo insieme formano il polpaccio. La versione a ginocchio teso allunga il gastrocnemio. La versione a ginocchio piegato allunga il soleo. Sono due esercizi, non due versioni dello stesso.',
        'La maggior parte dei programmi per la fascite plantare li include entrambi, perché un polpaccio può essere rigido in uno dei due muscoli o in tutti e due. La linea guida non li separa. Walkito li mette entrambi nella stessa sessione quando nel piano ci sono gli allungamenti.',
        'La pagina sull’[allungamento del soleo](/it/esercizi/allungamento-soleo/) spiega la versione a ginocchio piegato. Per il programma completo di allungamenti e forza, vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Quanto tenere l’allungamento del polpaccio per la fascite plantare?',
      cites: [CITE.guideline],
      a: 'La maggior parte dei protocolli usa tenute da 30\u00A0secondi, ed è da lì che parte Walkito. La linea guida del 2023 consiglia l’allungamento del polpaccio senza indicare una durata unica, ma la maggior parte degli studi su cui si basa usava 30\u00A0secondi per tenuta, ripetuti 2-3 volte per gamba.',
    },
    {
      q: 'Bisogna allungare i polpacci tutti i giorni con la fascite plantare?',
      cites: [CITE.guideline],
      a: 'La linea guida del 2023 consiglia l’allungamento del polpaccio e della fascia plantare come parte della cura di sé quotidiana per la fascite plantare. Walkito mette gli allungamenti del polpaccio in quasi tutte le sessioni. L’allungamento ha poco carico e pochi rischi, quindi farlo ogni giorno è ragionevole finché il dolore resta sotto 6/10.',
    },
    {
      q: 'Che differenza c’è tra allungamento del polpaccio e del soleo?',
      cites: [CITE.patelGastrocnemius],
      a: 'L’allungamento del polpaccio a ginocchio teso lavora sul gastrocnemio, il muscolo più grande e superficiale del polpaccio. L’allungamento del soleo piega il ginocchio dietro, così il gastrocnemio si rilassa e si isola il soleo, più profondo. Più della metà delle persone con fascite plantare aveva rigido solo il gastrocnemio, e tra il 23 e il 30% entrambi i muscoli del polpaccio (Patel e DiGiovanni, 2011).',
    },
    {
      q: 'I polpacci rigidi possono causare la fascite plantare?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Un polpaccio rigido limita la dorsiflessione della caviglia, che era il fattore di rischio indipendente più forte per la fascite plantare in uno studio caso-controllo (odds ratio 23,3). A parte, tra il 52 e il 60% di 254\u00A0persone con fascite plantare aveva una contrattura limitata al gastrocnemio. Un polpaccio rigido non porta per forza alla fascite plantare, ma è un fattore di rischio importante.',
    },
  ],
  redFlags: {
    h2: 'Fermati e rivolgiti a un professionista sanitario se',
    bullets: [
      'il dolore è nel tendine d’Achille, non nel muscolo del polpaccio',
      'senti uno schiocco improvviso o una sensazione di strappo durante l’allungamento',
      'il polpaccio è gonfio, arrossato o caldo da un solo lato',
      'il dolore è iniziato dopo un infortunio o una caduta',
      'la rigidità del polpaccio si accompagna a intorpidimento, formicolio o bruciore',
      'non è migliorato dopo diverse settimane di allungamenti quotidiani',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito mette l’allungamento del polpaccio insieme all’allungamento del soleo e a quello della fascia plantare in quasi tutte le sessioni. Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. L’app passa dagli allungamenti al lavoro di forza al tuo ritmo.',
    more: [
      'Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Allungamento del polpaccio (gastrocnemio, ginocchio teso)',
  campaign: 'ex-calf-stretch-it',
};
