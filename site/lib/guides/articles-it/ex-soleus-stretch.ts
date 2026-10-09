import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-soleus-stretch.ts`, written around the
 * queries «allungamento soleo» and «stretching soleo ginocchio piegato».
 * Informal «tu». Figures, doses, grades and qualifiers are identical to the
 * English page. No new citations.
 */

export const EX_SOLEUS_STRETCH_IT: Guide = {
  lang: 'it',
  page: 'exSoleusStretch',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Allungamento del soleo (ginocchio piegato): come farlo',
  description:
    'Come fare l’allungamento del soleo a ginocchio piegato per la fascite plantare e i polpacci rigidi: tecnica, perché serve a parte, serie e tempi.',
  h1: 'Allungamento del soleo (ginocchio piegato): tecnica, serie e perché conta',
  lede:
    'Il soleo è il muscolo più profondo del polpaccio, che sta sotto il gastrocnemio. Si allunga solo con il ginocchio piegato, perché piegare il ginocchio toglie di mezzo il gastrocnemio. In un’analisi su 254\u00A0persone con fascite plantare, tra il 23 e il 30% aveva una contrattura combinata di gastrocnemio e soleo. Se fai solo l’allungamento a ginocchio teso, questo muscolo lo salti del tutto.',
  takeaways: [
    'Il soleo passa solo sulla caviglia. Il gastrocnemio passa sul ginocchio e sulla caviglia. Piegando il ginocchio il gastrocnemio si rilassa e l’allungamento va sul soleo.',
    'Su 254\u00A0persone con fascite plantare, tra il 23 e il 30% aveva una contrattura sia del gastrocnemio sia del soleo (Patel e DiGiovanni, 2011).',
    'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio una A, il suo grado più alto, senza separare i due muscoli del polpaccio (Koc e colleghi, 2023).',
    'Walkito parte da 3\u00A0tenute da 30\u00A0secondi, ogni gamba, con il ginocchio dietro piegato.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Come si fa l’allungamento del soleo?',
      paragraphs: [
        'Parti dalla stessa posizione al muro dell’[allungamento del polpaccio](/it/esercizi/stretching-polpaccio/): mani al muro, un piede indietro, tallone a terra. Poi piega il ginocchio dietro. Continua a piegarlo finché senti l’allungamento scendere più in basso nel polpaccio, vicino al tendine d’Achille e al tallone. Quella tensione più bassa è il soleo.',
        'Il tallone resta a terra per tutto il tempo. Se il tallone si alza, l’allungamento sparisce. Questo non lo senti in alto nel polpaccio come la versione a ginocchio teso. La sensazione è più vicina al tallone, a volte appena sopra la parte dietro della caviglia. Tieni 30\u00A0secondi, poi cambia.',
      ],
      exercises: [
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: {
            level: 'strong',
            why: 'La linea guida del 2023 dà all’allungamento del polpaccio una A. Lavora sul muscolo più profondo che l’allungamento a ginocchio teso non raggiunge.',
          },
          dose: 'Walkito parte da 3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro, un piede indietro, tallone giù. Piega il ginocchio dietro finché senti un allungamento in basso nel polpaccio, vicino al tallone. Tieni 30\u00A0secondi.',
          often: 'Quasi tutte le sessioni, insieme all’allungamento del polpaccio a ginocchio teso',
          feel: 'Un allungamento in basso nel polpaccio, vicino al tendine d’Achille',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura a gambe divaricate appoggiata al muro con il ginocchio dietro piegato, la parte bassa del polpaccio evidenziata',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Perché il soleo ha bisogno di un allungamento tutto suo?',
      keyFact: 'In un’analisi su 254\u00A0persone con fascite plantare, circa un quarto aveva rigidi entrambi i muscoli del polpaccio, il gastrocnemio e il soleo (Patel e DiGiovanni, 2011).',
      paragraphs: [
        'Il gastrocnemio, il muscolo più superficiale del polpaccio, passa sia sul ginocchio sia sulla caviglia. Quando tieni il ginocchio teso e ti sporgi in avanti, l’allungamento va su di lui. Il soleo sta più in profondità e passa solo sulla caviglia. Con il ginocchio teso, il gastrocnemio fa tutto il lavoro e il soleo si muove appena.',
        'Piegare il ginocchio rilassa il gastrocnemio, che smette di fare resistenza. A quel punto la dorsiflessione della caviglia tira sul soleo. È proprio questo il senso della versione a ginocchio piegato. Non è una variante. È un esercizio diverso per un muscolo diverso.',
        'In un’analisi su 254\u00A0persone con fascite plantare, circa un quarto aveva entrambi i muscoli rigidi. L’allungamento a ginocchio teso da solo non avrebbe raggiunto la parte di rigidità che riguardava il soleo.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Come capire se l’allungamento è nel punto giusto?',
      paragraphs: [
        'Se senti l’allungamento in alto nel polpaccio, dietro il ginocchio, il ginocchio è troppo teso e sta lavorando il gastrocnemio. Piega di più il ginocchio. L’allungamento dovrebbe scendere al terzo inferiore del polpaccio o appena sopra il tallone.',
        'Se non senti niente, prova ad avvicinare al muro il piede dietro e a piegare di più il ginocchio. Ad alcune persone serve un passo più corto per caricare il soleo.',
        'Se l’allungamento è proprio nel tendine d’Achille e lo senti come una fitta più che come una tensione, alleggerisci. Un allungamento deve essere deciso e continuo, non doloroso. Il dolore al tendine durante l’allungamento è diverso dalla rigidità del polpaccio e può far pensare a una [tendinite d’Achille](/it/tendinite-achille-esercizi/).',
      ],
    },
    {
      h2: 'Quali sono gli errori più comuni nell’allungamento del soleo?',
      paragraphs: [
        'Non piegare abbastanza il ginocchio. Una piccola flessione non basta a rilassare il gastrocnemio. Serve una flessione vera, tanto da vedere il ginocchio dietro che avanza sopra le dita.',
        'Lasciare che il tallone si alzi. Appena il tallone si stacca da terra, l’allungamento sparisce. Premi il tallone a terra e lascia che il ginocchio vada avanti sopra il piede.',
        'Andare di fretta. Una tenuta da 5\u00A0secondi è troppo breve perché un allungamento prolungato agisca sulla lunghezza del tessuto. Tieni 30\u00A0secondi e prova a rilassarti nell’allungamento invece di spingere più forte.',
        'Saltarlo perché l’allungamento a ginocchio teso sembrava sufficiente. Sono muscoli diversi. Se sono rigidi entrambi, ti servono entrambi gli allungamenti.',
      ],
    },
    {
      h2: 'Come si inserisce l’allungamento del soleo in un programma',
      paragraphs: [
        'Walkito abbina l’allungamento del soleo all’[allungamento del polpaccio](/it/esercizi/stretching-polpaccio/) e all’[allungamento della fascia plantare](/it/esercizi/stretching-fascia-plantare/) in quasi tutte le sessioni. Insieme, i tre allungamenti coprono le strutture principali che tirano sul tallone. L’ordine conta poco, ma fare l’allungamento della fascia plantare per primo, prima del primo passo della giornata, è l’indicazione che si ripete più spesso.',
        'Per la parte di forza del polpaccio, vedi [sollevamenti sui talloni per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/) o la pagina dedicata ai [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/). La linea guida del 2023 consiglia forza e allungamenti insieme.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Cosa si sente con l’allungamento del soleo?',
      a: 'Una tensione in basso nel polpaccio, vicino al tendine d’Achille, a volte appena sopra la parte dietro della caviglia. È diversa dall’allungamento del polpaccio a ginocchio teso, che si sente più in alto. Se l’allungamento è in alto, il ginocchio non è piegato abbastanza e sta ancora lavorando il gastrocnemio.',
    },
    {
      q: 'Allungamento del soleo e allungamento del polpaccio a ginocchio piegato sono la stessa cosa?',
      a: 'Sì. «Allungamento del soleo» e «allungamento del polpaccio a ginocchio piegato» sono due nomi dello stesso esercizio. Piegare il ginocchio toglie il gastrocnemio dall’allungamento, così il carico va sul soleo, il muscolo più profondo del polpaccio. La tecnica è identica.',
    },
    {
      q: 'Con la fascite plantare bisogna allungare tutti e due i muscoli del polpaccio?',
      cites: [CITE.patelGastrocnemius, CITE.guideline],
      a: 'Su 254\u00A0persone con fascite plantare, un quarto aveva rigidi entrambi i muscoli del polpaccio (Patel e DiGiovanni, 2011). La linea guida dà all’allungamento del polpaccio una A senza separare i due. La maggior parte dei programmi per la fascite plantare include sia la versione a ginocchio teso sia quella a ginocchio piegato, perché saltarne una lascia fuori metà del polpaccio.',
    },
    {
      q: 'Ogni quanto fare l’allungamento del soleo?',
      cites: [CITE.guideline],
      a: 'Walkito lo mette in quasi tutte le sessioni, insieme all’allungamento del polpaccio. La linea guida del 2023 consiglia l’allungamento del polpaccio come parte della cura di sé quotidiana per la fascite plantare. Tre tenute da 30\u00A0secondi per gamba richiedono circa tre minuti. Ha poco carico ed è sicuro ripeterlo ogni giorno.',
    },
  ],
  redFlags: {
    h2: 'Fermati e rivolgiti a un professionista sanitario se',
    bullets: [
      'il dolore è acuto e localizzato nel tendine d’Achille, non una tensione nel muscolo',
      'senti uno schiocco improvviso o uno strappo durante l’allungamento',
      'il polpaccio o la caviglia sono gonfi, arrossati o caldi da un lato',
      'il dolore è iniziato dopo un infortunio o un aumento improvviso dell’attività',
      'intorpidimento o formicolio scendono lungo la parte dietro della gamba',
      'non è migliorato dopo diverse settimane di allungamenti quotidiani',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito mette l’allungamento del soleo insieme all’allungamento del polpaccio e a quello della fascia plantare in quasi tutte le sessioni. Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. L’app passa dagli allungamenti alla forza al tuo ritmo, non secondo un calendario fisso.',
    more: [
      'Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Un movimento della caviglia che migliora nel giro di settimane mostra che gli allungamenti stanno servendo. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Allungamento del soleo (ginocchio piegato)',
  campaign: 'ex-soleus-stretch-it',
};
