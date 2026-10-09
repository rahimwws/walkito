import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-towel-scrunch.ts`, written around the
 * queries «esercizio asciugamano dita dei piedi» and «raccogliere
 * l’asciugamano con le dita». Informal «tu». Figures, doses, grades and
 * qualifiers are identical to the English page. Citations as in English
 * (lynn, jung, mcKeon, amaha).
 */

export const EX_TOWEL_SCRUNCH_IT: Guide = {
  lang: 'it',
  page: 'exTowelScrunch',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Raccolta dell’asciugamano con le dita: come farla',
  description:
    'Come fare la raccolta dell’asciugamano con le dita dei piedi per piedi più forti: tecnica, serie, cosa allena, errori e confronto con il piede corto.',
  h1: 'Raccolta dell’asciugamano: come farla per la forza del piede',
  lede:
    'La raccolta dell’asciugamano è un esercizio in cui tiri un asciugamano verso di te usando solo le dita dei piedi. Lavora sui piccoli muscoli sotto l’arco e sui flessori delle dita. È uno degli esercizi di rinforzo del piede più vecchi e semplici della riabilitazione, e compare nei programmi per piede piatto, fascite plantare e dolore sotto l’avampiede.',
  takeaways: [
    'La raccolta dell’asciugamano attiva i muscoli intrinseci del piede, ma la ricerca elettromiografica mostra che recluta anche i flessori lunghi delle dita (muscoli estrinseci) più dell’esercizio del piede corto (Jung e colleghi, 2011).',
    'In uno studio randomizzato del 2012 su adulti sani, il gruppo che ha fatto quattro settimane di raccolta dell’asciugamano ha migliorato l’equilibrio meno del gruppo che ha fatto il piede corto, anche se entrambi sono migliorati rispetto all’inizio (Lynn e colleghi, 2012).',
    'Uno studio del 2020 su 41\u00A0persone (56\u00A0piedi) con metatarsalgia primaria ha trovato che, dopo un programma di otto settimane di esercizi per le dita con raccolta dell’asciugamano e raccolta di biglie, il dolore era minore e la forza di presa delle dita maggiore. Lo studio non aveva un gruppo di controllo, quindi il miglioramento non si può attribuire solo agli esercizi (Amaha e colleghi, 2020).',
    'La raccolta dell’asciugamano è più facile da imparare dell’esercizio del piede corto, perché l’asciugamano dà alle dita un obiettivo chiaro da afferrare.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Cos’è l’esercizio della raccolta dell’asciugamano?',
      paragraphs: [
        'La raccolta dell’asciugamano, chiamata anche towel curl, è un esercizio da seduto in cui metti un asciugamano steso a terra sotto il piede e usi le dita per afferrarlo e tirarlo verso di te. Il tallone resta a terra. Il movimento lavora sui muscoli flessori delle dita e sui muscoli intrinseci sotto l’arco.',
        'Si usa in fisioterapia da decenni e compare nei programmi per il [piede piatto](/it/esercizi-piede-piatto/), la [fascite plantare](/it/esercizi-fascite-plantare/) e il [dolore sotto l’avampiede](/it/metatarsalgia-dolore-pianta-piede/). Visto che il movimento è semplice e serve solo un asciugamano, spesso è il primo esercizio di rinforzo del piede che le persone provano.',
      ],
    },
    {
      h2: 'Come si fa la raccolta dell’asciugamano?',
      paragraphs: [
        'Siediti su una sedia con i piedi appoggiati a terra, scalzo. Stendi un asciugamano piccolo a terra sotto un piede. Tieni il tallone ben appoggiato a terra. Usa le dita per afferrare l’asciugamano e tirarlo verso di te, raccogliendolo sotto l’arco. Poi apri le dita per lasciarlo e ripeti.',
        'Ogni tirata è una ripetizione. Tira in modo costante, non con uno scatto veloce. Il tallone non si alza. Se l’asciugamano scivola troppo, prova un asciugamano un po’ più pesante o metti un piccolo peso sull’estremità lontana.',
      ],
      exercises: [
        {
          name: 'Raccolta dell’asciugamano',
          evidence: { level: 'early', why: 'Inclusa in uno studio pre-post a gruppo singolo sulla metatarsalgia (Amaha 2020) e nei programmi per il piede piatto, ma non isolata da sola in uno studio controllato.' },
          dose: 'Walkito parte da 3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede',
          how: 'Siediti con un asciugamano steso a terra sotto il piede. Tira dentro l’asciugamano con le dita. Tieni il tallone giù. Tieni cinque secondi, lascia, poi ripeti.',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'I piccoli muscoli sotto l’arco che lavorano',
          stop: 'Il dolore arriva a 6/10',
          media: 'towel_scrunch',
          caption: 'Raccolta dell’asciugamano: tira dentro l’asciugamano con le dita, il tallone resta giù',
          alt: 'Una figura seduta che tira un asciugamano verso il tallone usando le dita, i muscoli dell’arco evidenziati',
        },
      ],
      cites: [CITE.amaha],
    },
    {
      h2: 'Quali muscoli lavorano nella raccolta dell’asciugamano?',
      paragraphs: [
        'La raccolta dell’asciugamano lavora sui muscoli flessori delle dita: il flessore breve delle dita (il flessore corto delle dita dentro il piede), il flessore breve dell’alluce e il quadrato della pianta. Sono muscoli intrinseci. Ma l’esercizio recluta anche i flessori estrinseci delle dita: il flessore lungo delle dita e il flessore lungo dell’alluce, che vanno dallo stinco attraverso la caviglia fino alle dita.',
        'Uno studio elettromiografico di Jung e colleghi (2011) ha confrontato l’attività muscolare durante la raccolta dell’asciugamano e l’esercizio del piede corto. Ha trovato che l’abduttore dell’alluce, il muscolo che più di tutti tiene su l’arco, era più di quattro volte più attivo durante il piede corto che durante la raccolta dell’asciugamano. La raccolta dell’asciugamano produceva invece più attività nei flessori estrinseci delle dita.',
        'Questo vuol dire che la raccolta dell’asciugamano è un buon esercizio per la forza di presa delle dita, ma è meno specifica per i muscoli intrinseci dell’arco rispetto all’[esercizio del piede corto](/it/esercizi/piede-corto/).',
      ],
      cites: [CITE.jung],
    },
    {
      h2: 'Raccolta dell’asciugamano o piede corto: quale è meglio?',
      paragraphs: [
        'Ogni esercizio ha un suo punto di forza. La raccolta dell’asciugamano è più facile da imparare perché l’asciugamano dà alle dita un obiettivo chiaro. Molte persone all’inizio fanno fatica a sentire la contrazione del piede corto. La raccolta dell’asciugamano costruisce la forza di presa delle dita, che conta per l’equilibrio e per la spinta quando cammini.',
        'L’esercizio del piede corto isola meglio i muscoli intrinseci dell’arco. Una revisione del 2015 di McKeon e colleghi ha notato che l’abduttore dell’alluce si attivava più di quattro volte di più durante il piede corto che durante la raccolta dell’asciugamano, e ha consigliato il piede corto come esercizio principale per allenare i muscoli intrinseci del piede.',
        'Nella pratica, i programmi che li usano entrambi prendono il meglio di ciascuno. Walkito usa la raccolta dell’asciugamano come esercizio iniziale che introduce l’idea di far lavorare i muscoli del piede. Poi arriva l’[esercizio del piede corto](/it/esercizi/piede-corto/), che aggiunge un allenamento più specifico dell’arco. Nessuno dei due sostituisce l’altro.',
      ],
      cites: [CITE.mcKeon, CITE.jung],
    },
    {
      h2: 'A chi serve di più la raccolta dell’asciugamano?',
      keyFact: 'In uno studio del 2020 su 41\u00A0persone (56\u00A0piedi) con metatarsalgia, dopo un programma di otto settimane di esercizi per le dita con raccolta dell’asciugamano e raccolta di biglie il dolore era minore e la presa delle dita migliore, senza gruppo di controllo (Amaha e colleghi, 2020).',
      paragraphs: [
        'La raccolta dell’asciugamano va bene per chi è alle prime armi con gli esercizi per il piede e vuole un punto di partenza semplice. Va bene anche per chi ha una presa debole delle dita, perché l’esercizio allena direttamente la capacità di flettere le dita sotto carico.',
        'Uno studio del 2020 di Amaha e colleghi ha seguito 41\u00A0persone (56\u00A0piedi) con metatarsalgia primaria, cioè dolore sotto l’avampiede, durante un programma di otto settimane di esercizi per le dita che includeva la raccolta dell’asciugamano e la raccolta di biglie. La forza di presa delle dita e i punteggi del dolore sono migliorati dal prima al dopo il programma. Non c’era un gruppo di controllo, quindi parte del cambiamento potrebbe dipendere dal tempo o dall’attenzione ricevuta più che dagli esercizi. La forza di presa delle dita può contare anche per gli anziani a rischio di cadute, perché le dita aiutano l’equilibrio quando stai in piedi e cammini.',
        'Se il tuo obiettivo principale è alzare un arco piatto, l’[esercizio del piede corto](/it/esercizi/piede-corto/) e il [programma di esercizi per il piede piatto](/it/esercizi-piede-piatto/) sono più mirati. Se il tuo obiettivo principale è la presa delle dita e l’attivazione generale dei muscoli del piede, la raccolta dell’asciugamano è una buona scelta.',
      ],
      cites: [CITE.amaha],
    },
    {
      h2: 'Quali sono gli errori più comuni nella raccolta dell’asciugamano?',
      paragraphs: [
        'L’errore più comune è sollevare il tallone da terra. Quando il tallone si alza, prende il comando il polpaccio e i muscoli del piede lavorano meno. Premi il tallone a terra per tutta la ripetizione.',
        'Un altro errore è tirare troppo veloce. Uno strattone veloce all’asciugamano usa lo slancio invece della contrazione muscolare. Tira piano e tieni l’asciugamano raccolto per tutti i cinque secondi prima di lasciare.',
        'Alcune persone afferrano solo con l’alluce e ignorano le dita più piccole. Prova a usare tutte e cinque le dita insieme. Se all’inizio le dita piccole non collaborano, è normale. La coordinazione migliora con la pratica.',
        'Infine, non lasciare che il piede scivoli di lato sull’asciugamano. La tirata deve andare dritta indietro, dalle dita verso il tallone. Se l’asciugamano si sposta da un lato, risistemalo e concentrati sull’usare le dita in modo uniforme.',
      ],
    },
  ],
  faq: [
    {
      q: 'Quante ripetizioni di raccolta dell’asciugamano fare?',
      a: 'Walkito parte da 3\u00A0serie da 8\u00A0ripetizioni per piede, tenendo ogni raccolta per 5\u00A0secondi. Basta per affaticare i piccoli muscoli del piede senza sovraccaricarli. Per aumentare la difficoltà, aggiungi un piccolo peso sull’estremità lontana dell’asciugamano invece di fare più ripetizioni.',
    },
    {
      q: 'La raccolta dell’asciugamano aiuta la fascite plantare?',
      cites: [CITE.guideline],
      a: 'La raccolta dell’asciugamano non fa parte della linea guida principale sulla fascite plantare, che si concentra sull’allungamento del polpaccio e sui sollevamenti sulle punte con carico. Può aiutare a costruire la forza generale dei muscoli del piede come parte di un programma più ampio. Vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) per gli esercizi sostenuti dalla linea guida.',
    },
    {
      q: 'La raccolta dell’asciugamano va bene per il piede piatto?',
      cites: [CITE.brijwasi],
      a: 'La raccolta dell’asciugamano compare nei programmi di esercizi per il piede piatto insieme all’esercizio del piede corto, al rinforzo dell’anca e agli allungamenti. Uno studio del 2023 su 52\u00A0persone ha trovato che un programma combinato migliorava le misure dell’arco in sei settimane (Brijwasi 2023). La raccolta dell’asciugamano da sola non è stata testata per il piede piatto in uno studio controllato.',
    },
    {
      q: 'Posso usare un calzino al posto dell’asciugamano?',
      a: 'Un calzino sottile funziona, ma un asciugamano piccolo dà più resistenza e una superficie migliore da afferrare. L’asciugamano deve stare steso e avere abbastanza lunghezza da poterlo tirare per diverse ripetizioni prima di finire il tessuto. Uno strofinaccio da cucina o un asciugamano da bagno piccolo è l’ideale.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore alle dita o al piede è iniziato dopo un infortunio o uno schiocco improvviso',
      'hai intorpidimento, formicolio o bruciore nelle dita o sotto l’avampiede',
      'un’articolazione di un dito è arrossata, gonfia o calda, il che può indicare gotta o un’infezione',
      'le dita restano bloccate piegate e non si raddrizzano',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito usa la raccolta dell’asciugamano come esercizio iniziale di rinforzo del piede. Quando ti sembra facile per due sessioni di fila, il piano ti porta all’esercizio del piede corto e alla sua progressione da seduto a in piedi. Scegli sessioni da 3, 5 o 10\u00A0minuti, e un test ogni 14\u00A0giorni segue il tempo di tenuta dell’arco e la resistenza del polpaccio.',
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Raccolta dell’asciugamano (towel curl)',
  campaign: 'ex-towel-scrunch-it',
};
