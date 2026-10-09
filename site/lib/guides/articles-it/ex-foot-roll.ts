import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-foot-roll.ts`, written around the queries
 * «pallina sotto il piede fascite plantare» and «bottiglia ghiacciata
 * fascite plantare». Informal «tu». Figures, doses, grades and qualifiers
 * are identical to the English page. No new citations.
 *
 * Note: no RCT has tested foot rolling as an isolated intervention for
 * plantar fasciitis. Evidence level is 'early'. The page says this honestly.
 */

export const EX_FOOT_ROLL_IT: Guide = {
  lang: 'it',
  page: 'exFootRoll',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Massaggio con la pallina per la fascite plantare',
  description:
    'Come fare il massaggio con la pallina o con la bottiglia ghiacciata per la fascite plantare: tecnica, per quanto tempo, cosa fa e cosa non fa.',
  h1: 'Massaggio con la pallina per la fascite plantare: pallina, bottiglia e tecnica',
  lede:
    'Far rotolare la pianta del piede su una pallina o una bottiglia è una delle cose più comuni che si fanno da soli per la fascite plantare. È piacevole, e i professionisti lo consigliano per calmare il tessuto tra una sessione e l’altra. Però nessuno studio randomizzato ha testato il massaggio con la pallina da solo per la fascite plantare. Questa pagina spiega cosa fa, cosa non fa e dove si colloca onestamente la bottiglia ghiacciata.',
  takeaways: [
    'Nessuno studio randomizzato ha testato il massaggio con la pallina come intervento a sé per la fascite plantare. È molto consigliato come gesto di sollievo e recupero, non come intervento principale.',
    'La linea guida del 2023 sul dolore al tallone indica allungamenti (grado A) e allenamento di forza (grado B) come pilastri dell’esercizio. Il massaggio con la pallina non ha un grado a parte.',
    'Una bottiglia d’acqua ghiacciata aggiunge il freddo al massaggio. Il freddo può ridurre il fastidio dopo una riacutizzazione, ma nessuno studio mostra che acceleri il recupero dalla fascite plantare più del solo massaggio.',
    'Walkito usa il massaggio con la pallina come esercizio di recupero a fine sessione, per 2\u00A0minuti.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Come si fa il massaggio con la pallina?',
      paragraphs: [
        'Siediti su una sedia con un piede sopra una pallina. Va bene una pallina da tennis, una da lacrosse o una pallina da massaggio. Metti la pallina sotto l’arco e falla rotolare piano dall’avampiede verso il tallone e poi di nuovo in avanti. Usa una pressione decisa, non leggera. La pallina deve premere nel tessuto abbastanza da farti sentire una pressione profonda e continua.',
        'Fai rotolare per circa 2\u00A0minuti per piede. Tieni la pressione costante ed evita i punti che danno una fitta. Se un punto ti fa fare una smorfia, alleggerisci o saltalo. L’obiettivo è un massaggio deciso, non il dolore.',
      ],
      exercises: [
        {
          name: 'Massaggio con la pallina',
          evidence: {
            level: 'early',
            why: 'Molto consigliato ma non testato come intervento a sé in uno studio sulla fascite plantare.',
          },
          dose: 'Walkito parte da 2\u00A0minuti',
          how: 'Siediti con una pallina sotto l’arco. Falla rotolare piano dall’avampiede al tallone, con una pressione decisa. Se fai una smorfia, alleggerisci.',
          often: 'Giorni di recupero, o dopo qualsiasi sessione come defaticamento',
          feel: 'Una pressione decisa e continua sotto il piede',
          stop: 'Il dolore arriva a 6/10',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: fai rotolare piano la pianta del piede su una pallina con pressione decisa',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina, la pianta del piede evidenziata',
        },
      ],
    },
    {
      h2: 'La pallina sotto il piede aiuta la fascite plantare?',
      paragraphs: [
        'Fisioterapisti e podologi consigliano spesso il massaggio con la pallina come parte della cura della fascite plantare. L’idea è che funzioni come un automassaggio: mette pressione lungo la fascia, può aumentare il flusso di sangue nella zona e può ridurre la sensazione di rigidità. Spesso le persone riferiscono un sollievo di breve durata dopo il massaggio.',
        'Detto questo, nessuno studio randomizzato ha testato il massaggio con la pallina come intervento a sé per la fascite plantare. Compare nei protocolli insieme ad allungamenti e rinforzo, ma non è mai la variabile misurata. La linea guida del 2023 non gli dà un grado a parte. Le prove stanno sugli allungamenti e sull’allenamento di forza.',
        'Il massaggio con la pallina rientra nel recupero. È utile dopo una lunga giornata in piedi, dopo una sessione di sollevamenti sulle punte o ogni volta che la pianta del piede è rigida e dolorante. Non sostituisce l’[allungamento della fascia plantare](/it/esercizi/stretching-fascia-plantare/), l’[allungamento del polpaccio](/it/esercizi/stretching-polpaccio/) o i [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/), che hanno i gradi della linea guida.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Conviene usare una bottiglia d’acqua ghiacciata?',
      paragraphs: [
        'La bottiglia d’acqua ghiacciata è uno dei rimedi casalinghi più diffusi per la fascite plantare. La forma ti permette di far rotolare tutta la pianta del piede, e intanto il freddo intorpidisce la zona. I professionisti la consigliano spesso, e in effetti dà sollievo.',
        'Ecco cosa dicono davvero le prove. Il freddo (ghiaccio, bottiglie ghiacciate) è uno strumento generico contro il dolore. Riduce il fastidio intorpidendo le terminazioni nervose e può ridurre per un po’ il gonfiore. Ma nessuno studio randomizzato ha confrontato una bottiglia ghiacciata con una a temperatura ambiente per la fascite plantare. Il beneficio che senti è probabilmente un mix del massaggio (pressione sulla fascia) e dell’intorpidimento (freddo sulle terminazioni nervose). Se il freddo acceleri il recupero più del solo massaggio è una domanda ancora aperta.',
        'Se la bottiglia ghiacciata ti dà sollievo, usala. Solo non contare sul freddo come sostituto degli allungamenti e del lavoro di forza. Ed evita di tenere il ghiaccio per più di 15-20\u00A0minuti di fila. Il freddo prolungato può irritare la pelle.',
      ],
    },
    {
      h2: 'Che tipo di pallina usare?',
      paragraphs: [
        'La pallina da tennis è il punto di partenza più comune. È abbastanza morbida da premere nell’arco senza dare fitte. La pallina da lacrosse è più dura e dà più pressione. La pallina da golf è piccola e molto dura, e può essere troppo per un tallone dolorante.',
        'Parti da quello che hai. Se dopo qualche sessione la pallina da tennis ti sembra troppo morbida, prova quella da lacrosse. Se fai una smorfia con qualsiasi pallina, è troppo dura o stai premendo troppo. L’esercizio deve sembrare un massaggio profondo, mai come se stessi schiacciando una lesione.',
        'Una bottiglia d’acqua ghiacciata funziona al posto della pallina e aggiunge il freddo. Un rullo di gommapiuma sotto il piede è ancora più delicato. Un rullo per piedi specifico da negozio sportivo fa lo stesso lavoro. Per nessuno di questi è dimostrato che funzioni meglio degli altri.',
      ],
    },
    {
      h2: 'Quali sono gli errori più comuni nel massaggio con la pallina?',
      paragraphs: [
        'Premere troppo. Più forte non vuol dire meglio. Se spingi finché il dolore arriva a 6/10 o fai smorfie, rischi di irritare la fascia invece di calmarla. Torna a una pressione decisa e costante.',
        'Andare troppo veloce. Un avanti e indietro rapido salta il tessuto. Fai rotolare piano, circa un passaggio completo al secondo, così ogni punto riceve una pressione continua.',
        'Usarlo come unico esercizio. Il massaggio con la pallina dà l’idea di fare qualcosa, ed è facile da fare alla scrivania. Ma non rinforza il polpaccio e non allunga la fascia come fanno gli esercizi con un grado della linea guida. Abbinalo all’[allungamento della fascia plantare](/it/esercizi/stretching-fascia-plantare/) e ai [sollevamenti sulle punte](/it/sollevamenti-tallone-fascite-plantare/) per avere il quadro completo.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quando fare il massaggio con la pallina e quando saltarlo?',
      paragraphs: [
        'Fallo dopo una lunga giornata in piedi, dopo una sessione di sollevamenti sulle punte o ogni volta che la pianta del piede è rigida. In Walkito, il massaggio con la pallina compare nei giorni di recupero e a fine sessione come defaticamento.',
        'Saltalo se il tallone è gonfio, arrossato o caldo in modo acuto. Questi segni possono indicare qualcosa di diverso dalla fascite plantare, e premere su una zona infiammata può peggiorarla. Prima rivolgiti a un professionista sanitario. Per tutti gli esercizi consigliati dalla linea guida, vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) o [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/).',
      ],
    },
  ],
  faq: [
    {
      q: 'La bottiglia ghiacciata sotto il piede aiuta la fascite plantare?',
      a: 'Una bottiglia d’acqua ghiacciata unisce il massaggio (pressione sulla fascia) e il freddo (che intorpidisce le terminazioni nervose). Entrambi possono ridurre il fastidio nel breve periodo. Nessuno studio ha confrontato una bottiglia ghiacciata con una a temperatura ambiente per la fascite plantare, quindi non si sa se il freddo aggiunga un beneficio sul recupero oltre al massaggio. Si può provare in sicurezza e molte persone la trovano piacevole.',
    },
    {
      q: 'Per quanto tempo far rotolare il piede sulla pallina?',
      a: 'Circa 2\u00A0minuti per piede è una dose iniziale ragionevole. È quella che usa Walkito. Puoi ripeterlo qualche volta al giorno se ti dà sollievo. Non esiste una dose precisa dagli studi, perché il massaggio con la pallina non è stato testato come intervento a sé.',
    },
    {
      q: 'Meglio la pallina da tennis o da lacrosse per la fascite plantare?',
      a: 'Parti dalla pallina da tennis. È più morbida e dà meno facilmente fitte su un tallone dolorante. La pallina da lacrosse dà una pressione più decisa e può andare meglio quando il dolore acuto si è calmato. Non è dimostrato che una delle due sia superiore. Usa quella che ti dà una pressione decisa senza farti fare smorfie.',
    },
    {
      q: 'La pallina sotto il piede può peggiorare la fascite plantare?',
      a: 'Sì, se premi troppo. Schiacciare con forza su una fascia dolorante può aumentare l’infiammazione invece di calmarla. La pressione deve sembrare un massaggio profondo, decisa ma senza fitte. Se il dolore arriva a 6/10 o la pianta del piede fa più male la mattina dopo, alleggerisci.',
    },
    {
      q: 'Il massaggio con la pallina sostituisce lo stretching?',
      cites: [CITE.guideline],
      a: 'No. La linea guida del 2023 dà agli allungamenti una A e all’allenamento di forza una B. Il massaggio con la pallina non ha nessun grado. Funziona come passo di recupero insieme agli esercizi che hanno le prove, come l’allungamento della fascia plantare e i sollevamenti sulle punte. Il massaggio da solo non ti darà lo stesso beneficio.',
    },
  ],
  redFlags: {
    h2: 'Fermati e rivolgiti a un professionista sanitario se',
    bullets: [
      'la pianta del piede è gonfia, arrossata o calda in modo acuto',
      'il massaggio peggiora regolarmente il dolore la mattina dopo',
      'il dolore è acuto e concentrato in un punto preciso che peggiora con la pressione',
      'senti intorpidimento, formicolio o bruciore sotto il piede',
      'il dolore è iniziato dopo un infortunio, una caduta o uno schiocco improvviso nell’arco',
      'non è migliorato dopo diverse settimane nonostante il programma completo di esercizi',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito mette il massaggio con la pallina a fine sessione e nei giorni di recupero. L’app gestisce tempi e ordine, così non devi ricordarti in quali giorni fare il massaggio e in quali allungare o rinforzare.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Massaggio con la pallina',
  campaign: 'ex-foot-roll-it',
};
