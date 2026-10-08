import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-plantar-fascia-stretch.ts`, written around
 * the queries «allungamento fascia plantare» and «stretching fascite
 * plantare». Informal «tu». Figures, doses, grades and qualifiers are
 * identical to the English page. Citations as in English (digiovanni2003,
 * digiovanni2006).
 */

export const EX_PLANTAR_FASCIA_STRETCH_IT: Guide = {
  lang: 'it',
  page: 'exPlantarFasciaStretch',
  mainSource: CITE.digiovanni2003,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Allungamento della fascia plantare: come farlo e quanto',
  description:
    'Come fare l’allungamento della fascia plantare per la fascite plantare: tecnica, quando farlo, quanto tenerlo e cosa dicono gli studi.',
  h1: 'Allungamento della fascia plantare: come farlo, serie e ripetizioni',
  lede:
    'L’allungamento della fascia plantare è l’unico allungamento messo a confronto diretto con l’allungamento del tendine d’Achille per la fascite plantare. In uno studio su 82\u00A0persone con dolore al tallone cronico, chi faceva l’allungamento della fascia plantare aveva punteggi di dolore e funzionalità migliori a otto settimane rispetto a chi allungava il tendine d’Achille. Questa pagina spiega la tecnica, la dose e quando l’allungamento conta di più.',
  takeaways: [
    'In uno studio su 82\u00A0persone con fascite plantare cronica, l’allungamento della fascia plantare ha dato punteggi di dolore e funzionalità migliori a otto settimane rispetto a un allungamento del tendine d’Achille (DiGiovanni e colleghi, 2003).',
    'Al controllo a due anni, dopo che tutti i partecipanti erano passati all’allungamento della fascia plantare, il 92% si diceva soddisfatto del risultato (DiGiovanni e colleghi, 2006).',
    'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio il grado più alto, A (Koc e colleghi, 2023).',
    'Il momento più importante per farlo è prima del primo passo del mattino e dopo essere stato seduto a lungo.',
    'Walkito parte da 10\u00A0tenute da 10\u00A0secondi, ogni piede. Il protocollo dello studio era 10\u00A0tenute da 10\u00A0secondi, tre volte al giorno.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Come si fa l’allungamento della fascia plantare?',
      paragraphs: [
        'Siediti e accavalla il piede con il dolore al tallone sul ginocchio opposto. Con la mano dello stesso lato, tira indietro le dita verso lo stinco finché senti un allungamento lungo l’arco. Tieni 10\u00A0secondi, poi lascia. Ripeti 10 volte.',
        'Per controllare la posizione, premi il pollice lungo l’arco mentre tieni l’allungamento. La fascia plantare, la spessa banda di tessuto sotto il piede, deve sembrare tesa e soda. Se lo senti solo nel polpaccio, stai tirando troppo o troppo in fretta. Alleggerisci finché l’allungamento resta sotto l’arco.',
        'È un allungamento da seduto, senza carico. Non devi alzarti né appoggiarti al muro. Lavora direttamente sulla fascia plantare, ed è per questo che lo studio lo ha testato separatamente dagli allungamenti del polpaccio.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: {
            level: 'strong',
            why: 'Messo a confronto diretto in uno studio randomizzato su 82\u00A0persone (DiGiovanni 2003). Grado A nella linea guida.',
          },
          dose: 'Walkito parte da 10\u00A0tenute da 10\u00A0secondi, ogni piede. Protocollo dello studio: 10\u00A0tenute da 10\u00A0secondi, 3 volte al giorno',
          how: 'Siediti e accavalla il piede dolorante sul ginocchio opposto. Tira indietro le dita verso lo stinco finché senti un allungamento lungo l’arco, non nel polpaccio. Tieni 10\u00A0secondi, lascia, ripeti.',
          often: 'Quasi tutte le sessioni. Il momento più importante è prima del primo passo del mattino.',
          feel: 'Un allungamento lungo l’arco del piede',
          stop: 'Il dolore arriva a 6/10',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita finché lo senti nell’arco',
          alt: 'Una figura seduta che tira indietro le dita di un piede verso lo stinco, con l’arco evidenziato',
        },
      ],
      cites: [CITE.digiovanni2003, CITE.guideline],
    },
    {
      h2: 'Quando fare l’allungamento della fascia plantare?',
      paragraphs: [
        'Prima del primo passo del mattino. È l’indicazione più ripetuta sia nello studio sia nella linea guida del 2023. La fascia plantare si accorcia durante la notte mentre il piede è rilassato. I primi passi della giornata la tirano di colpo e con forza, ed è per questo che il dolore al tallone del mattino è il segno tipico della fascite plantare.',
        'Il secondo momento più importante è prima di alzarti dopo essere stato seduto a lungo. Lo stesso accorciamento avviene a riposo. Allungare la fascia prima di caricarla riduce quello strappo.',
        'Nello studio, ai partecipanti si chiedeva di fare 10\u00A0tenute da 10\u00A0secondi, tre volte al giorno, per almeno otto settimane. Le sessioni più importanti erano quella del mattino e quella dopo essere stati seduti a lungo. Se possibile, si incoraggiavano altre sessioni durante la giornata.',
      ],
      cites: [CITE.digiovanni2003, CITE.guideline],
    },
    {
      h2: 'L’allungamento della fascia plantare aiuta davvero la fascite plantare?',
      keyFact: 'In uno studio su 82\u00A0persone con fascite plantare cronica, i punteggi del dolore erano significativamente migliori nel gruppo dell’allungamento della fascia plantare a otto settimane, sia per il dolore peggiore sia per i primi passi del mattino (DiGiovanni e colleghi, 2003).',
      paragraphs: [
        'Nello studio originale del 2003, 82\u00A0persone con fascite plantare cronica da più di dieci mesi sono state assegnate a caso a un allungamento della fascia plantare o a un allungamento standard del tendine d’Achille. A otto settimane, il gruppo della fascia plantare aveva punteggi significativamente migliori nel Foot Function Index, che misura dolore e limitazioni nelle attività. Gli autori l’hanno definita una differenza clinicamente rilevante.',
        'Uno studio successivo ha seguito gli stessi pazienti per due anni. Alla fine delle otto settimane, tutti i partecipanti sono passati all’allungamento della fascia plantare. A due anni, il 92% di tutti i pazienti si diceva soddisfatto del risultato, e il gruppo che all’inizio allungava l’Achille è migliorato nettamente una volta iniziato l’allungamento della fascia plantare.',
        'La linea guida del 2023 sul dolore al tallone ha esaminato le prove sullo stretching e ha dato all’allungamento della fascia plantare e del polpaccio il grado più alto, **A**. Non vuol dire che lo stretching da solo basti a tutti. La linea guida dà al lavoro di forza una **B** e consiglia entrambi. Per la parte di forza, vedi [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
      ],
      sourceNote:
        'DiGiovanni 2003: sottoscala del dolore del Foot Function Index significativamente migliore nel gruppo dell’allungamento della fascia plantare a 8\u00A0settimane per il dolore peggiore (p = 0,02) e per i primi passi del mattino (p = 0,006). DiGiovanni 2006: a 2\u00A0anni, 92% di soddisfazione complessiva; il gruppo che all’inizio allungava l’Achille è migliorato nettamente dopo il cambio.',
      cites: [CITE.digiovanni2003, CITE.digiovanni2006, CITE.guideline],
    },
    {
      h2: 'Che differenza c’è tra allungamento della fascia plantare e del polpaccio?',
      paragraphs: [
        'Lavorano su strutture diverse. L’[allungamento del polpaccio](/it/esercizi/stretching-polpaccio/) allunga il gastrocnemio, il grande muscolo esterno del polpaccio, attraverso il tendine d’Achille. L’allungamento della fascia plantare tira indietro le dita per caricare direttamente la fascia sotto l’arco. I due sono collegati attraverso l’osso del tallone, ma rispondono a posizioni diverse.',
        'Un polpaccio rigido è di per sé un fattore di rischio per la fascite plantare. In uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100\u00A0controlli, una dorsiflessione della caviglia ridotta, cioè quanto il piede si piega verso lo stinco, era il fattore di rischio indipendente più forte. Per questo la linea guida consiglia entrambi gli allungamenti, non uno o l’altro.',
        'Per il muscolo più profondo del polpaccio, il soleo, l’allungamento cambia: pieghi il ginocchio dietro per spostare il carico dal gastrocnemio al soleo. È un esercizio diverso. Vedi [allungamento del soleo](/exercises/soleus-stretch/) (in inglese).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Quali sono gli errori più comuni nell’allungamento della fascia plantare?',
      paragraphs: [
        'Tirare le dita troppo forte. L’allungamento deve essere deciso sotto l’arco, non doloroso. Se fai smorfie, sei oltre il punto utile. Torna indietro finché senti una tensione senza una fitta.',
        'Sentirlo nel polpaccio invece che nell’arco. Se l’allungamento è soprattutto nel polpaccio, il ginocchio è troppo teso o stai tirando troppo. Accavalla il piede più in alto sul ginocchio opposto così la caviglia si rilassa, e concentrati sulle dita che si piegano indietro più che su tutto il piede.',
        'Saltare l’allungamento del mattino. È la sessione che incide di più sul momento peggiore della giornata. Lascia un biglietto sul comodino o metti un promemoria. L’allungamento richiede circa due minuti, e vale la pena farlo prima che il piede tocchi terra.',
        'Molleggiare. Resta fermo per tutti i 10\u00A0secondi. Molleggiare non dà alla fascia il tempo di allungarsi e può irritare ancora di più il tessuto.',
      ],
    },
    {
      h2: 'Versioni più facili e più difficili',
      paragraphs: [
        'Se accavallare la gamba è scomodo, tieni entrambi i piedi a terra e usa un asciugamano o una cintura passata intorno all’avampiede. Tira l’asciugamano verso di te così le dita si piegano indietro. L’allungamento è lo stesso, solo da un’altra angolazione.',
        'Una versione più difficile è l’allungamento della fascia plantare in piedi: appoggia l’avampiede contro il muro con il tallone a terra e sporgiti piano in avanti. Così aggiungi il peso del corpo all’allungamento ed è più difficile dosarlo con precisione. Va bene quando la versione da seduto ti sembra facile e non provoca dolore.',
        'La versione da seduto dello studio è quella sostenuta dalle prove. Inizia da lì. Tutti gli allungamenti e gli esercizi di forza per il dolore al tallone sono in [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/). Per far rotolare la pianta del piede dopo gli allungamenti, vedi [massaggio con la pallina](/exercises/foot-roll/) (in inglese).',
      ],
    },
  ],
  faq: [
    {
      q: 'Quanto tenere l’allungamento della fascia plantare?',
      cites: [CITE.digiovanni2003],
      a: 'Lo studio che ha testato questo allungamento usava tenute da 10\u00A0secondi, ripetute 10 volte, almeno tre volte al giorno (DiGiovanni 2003). Quindi ogni sessione dura circa due minuti. Walkito parte da 10\u00A0tenute da 10\u00A0secondi per piede. Tenere più a lungo non è per forza meglio. Conta di più la costanza durante la giornata che una sola tenuta lunga.',
    },
    {
      q: 'Bisogna fare stretching per la fascite plantare prima di alzarsi dal letto?',
      cites: [CITE.digiovanni2003, CITE.guideline],
      a: 'Sì. Prima del primo passo della giornata è il momento più importante. La fascia plantare si accorcia durante la notte, e i primi passi la tirano con forza. Allungarla mentre sei ancora seduto sul letto riduce quello strappo. Sia lo studio sia la linea guida del 2023 indicano questo momento come quello chiave.',
    },
    {
      q: 'Lo stretching può peggiorare la fascite plantare?',
      cites: [CITE.digiovanni2006],
      a: 'Nello studio di DiGiovanni, lo stretching ha migliorato i risultati, non li ha peggiorati. Se un allungamento porta il dolore oltre 6/10, alleggerisci. Troppa forza o i molleggi possono irritare il tessuto. L’allungamento deve essere deciso sotto l’arco, mai una fitta. Se lo stretching peggiora il dolore ogni volta, rivolgiti a un professionista sanitario prima di continuare.',
    },
    {
      q: 'Meglio l’allungamento della fascia plantare o del polpaccio per la fascite plantare?',
      cites: [CITE.guideline],
      a: 'La linea guida del 2023 sul dolore al tallone dà sia all’allungamento della fascia plantare sia a quello del polpaccio una A, il suo grado più alto, e consiglia entrambi. L’allungamento della fascia plantare lavora direttamente sull’arco. Quelli del polpaccio lavorano su un polpaccio rigido, che è un fattore di rischio separato. Farli entrambi copre più cose che sceglierne uno.',
    },
    {
      q: 'Quante volte al giorno fare stretching per la fascite plantare?',
      cites: [CITE.digiovanni2003],
      a: 'Lo studio di DiGiovanni chiedeva ai partecipanti di allungare tre volte al giorno: prima del primo passo del mattino, prima di alzarsi dopo essere stati seduti a lungo, e almeno un’altra volta. Ogni sessione era di 10\u00A0tenute da 10\u00A0secondi. Se possibile, si incoraggiavano altre sessioni.',
    },
  ],
  redFlags: {
    h2: 'Fermati e rivolgiti a un professionista sanitario se',
    bullets: [
      'il dolore è così acuto che non riesci a caricare il peso sul piede',
      'il dolore è iniziato dopo un infortunio, una caduta o uno schiocco improvviso nell’arco',
      'si accompagna a intorpidimento, formicolio o bruciore, che possono indicare un nervo compresso',
      'il tallone è arrossato, caldo o gonfio',
      'ti sveglia di notte o c’è anche a riposo',
      'lo stretching peggiora il dolore ogni volta invece di migliorarlo',
      'non è migliorato dopo diverse settimane di allungamenti quotidiani e meno carico',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito mette l’allungamento della fascia plantare in quasi tutte le sessioni e te lo ricorda prima del primo passo ogni mattina. Non devi ricordarti i tempi né contare. L’app costruisce un piano una settimana alla volta, partendo dagli allungamenti e aggiungendo il lavoro di forza quando il dolore si calma.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi cosa sta cambiando. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Allungamento della fascia plantare',
  campaign: 'ex-plantar-fascia-stretch-it',
};
