import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-hip-abduction.ts`, written around the
 * queries «abduzione anca elastico» and «esercizi anca piede piatto».
 * Informal «tu». Figures, doses, grades and qualifiers are identical to the
 * English page. Citations as in English (zarali, brijwasi, cheng, menz).
 */

export const EX_HIP_ABDUCTION_IT: Guide = {
  lang: 'it',
  page: 'exHipAbduction',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Abduzione dell’anca con elastico per piede e arco',
  description:
    'Come fare l’abduzione dell’anca con l’elastico per controllare meglio piede e arco: tecnica, serie, legame anca-piede e cosa dicono gli studi.',
  h1: 'Abduzione dell’anca: come aiuta i piedi e come farla',
  lede:
    'L’abduzione dell’anca è il movimento con cui sollevi una gamba di lato, lontano dalla linea centrale del corpo. Quando i muscoli abduttori dell’anca sono deboli, il ginocchio cade verso l’interno quando cammini e il piede va in iperpronazione, appiattendo l’arco. Rinforzare il medio gluteo con l’abduzione dell’anca con elastico può ridurre questo cedimento verso l’interno e togliere tensione all’arco, alla fascia plantare e al lato interno della caviglia.',
  takeaways: [
    'Uno studio del 2023 su 52\u00A0persone con piede piatto flessibile ha trovato che un programma combinato di sei settimane, con rinforzo dell’anca, esercizi del piede corto, lavoro sulla caviglia e allungamenti, migliorava due misure della forma dell’arco rispetto a un gruppo di controllo (Brijwasi e colleghi, 2023).',
    'Il medio gluteo controlla bacino e coscia quando stai su una gamba. Quando è debole, il ginocchio scivola verso l’interno e il piede prona di più, caricando l’arco mediale.',
    'Uno studio trasversale del 2013 su circa 1.900\u00A0adulti del Framingham Foot Study non ha trovato un legame tra piede piatto e mal di schiena, ma ha trovato un piccolo legame tra un piede che ruota verso l’interno durante il cammino e il mal di schiena nelle donne (Menz e colleghi, 2013).',
    'Walkito propone questo esercizio come abduzione dell’anca in piedi con elastico. La posizione in piedi obbliga la gamba d’appoggio a stabilizzarsi mentre la gamba che lavora si solleva.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Cos’è l’abduzione dell’anca?',
      paragraphs: [
        'Abduzione dell’anca vuol dire muovere la gamba di lato, lontano dal centro del corpo. Il muscolo principale è il medio gluteo, che sta sul lato esterno dell’anca. Tiene il bacino orizzontale quando stai su una gamba e impedisce all’anca opposta di abbassarsi.',
        'Questo esercizio compare nei programmi per il piede perché anca, ginocchio e piede sono collegati. Quando il medio gluteo è debole, la coscia ruota verso l’interno quando cammini e stai in piedi, il ginocchio la segue e il piede prona più del dovuto. Sotto questa spinta verso l’interno l’arco si appiattisce. Rinforzare l’anca riduce questa reazione a catena.',
      ],
    },
    {
      h2: 'Come si fa l’abduzione dell’anca in piedi con l’elastico?',
      paragraphs: [
        'Stai in piedi con un elastico ad anello intorno a entrambe le caviglie o appena sopra le ginocchia. Tieniti a un muro o a una sedia per l’equilibrio. Sposta il peso sulla gamba d’appoggio. Solleva l’altra gamba dritta di lato, tenendo le dita puntate in avanti e il busto dritto. Non inclinarti dal lato opposto. Scendi piano e ripeti.',
        'Spingi attraverso il tallone della gamba che lavora, non attraverso le dita. Il movimento avviene all’anca, non in vita. Non serve sollevare molto. Circa 30-45\u00A0gradi da terra bastano se la tecnica resta pulita. Un sollevamento più alto con il busto che si inclina di lato fa lavorare meno il medio gluteo.',
      ],
      exercises: [
        {
          name: 'Abduzione dell’anca, in piedi, con elastico',
          evidence: { level: 'moderate', why: 'Inclusa nel programma combinato che ha migliorato la forma dell’arco in uno studio randomizzato del 2023 (Brijwasi 2023). Il rinforzo dell’anca per l’allineamento del piede è sostenuto da un ragionamento biomeccanico, anche se non è stato isolato in un suo studio sugli esiti per il piede.' },
          dose: 'Walkito parte da 3\u00A0serie da 15, ogni gamba',
          how: 'Stai in piedi con un elastico intorno a entrambe le caviglie. Tieniti a un muro per l’equilibrio. Solleva una gamba dritta di lato, con le dita in avanti. Spingi attraverso il tallone. Scendi piano.',
          often: 'Giorni di forza, quando nel piano c’è l’obiettivo sinistra-destra',
          feel: 'Lavoro sul lato esterno dell’anca',
          stop: 'Il dolore arriva a 6/10',
          media: 'hip_abduction',
          caption: 'Abduzione dell’anca: solleva una gamba di lato contro l’elastico',
          alt: 'Una figura in piedi con un elastico intorno alle caviglie che solleva una gamba di lato',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Come influisce l’anca sul piede e sull’arco?',
      keyFact: 'Uno studio del 2013 su circa 1.900\u00A0adulti del Framingham Foot Study non ha trovato un legame tra piede piatto e mal di schiena, ma un piccolo legame tra la rotazione del piede verso l’interno e il mal di schiena nelle donne (Menz e colleghi, 2013).',
      paragraphs: [
        'Il legame passa per una catena biomeccanica: anca, ginocchio, caviglia, piede. Quando il medio gluteo non riesce a tenere il bacino orizzontale mentre stai su una gamba, la coscia ruota verso l’interno. Il ginocchio la segue e cede verso la linea centrale. Questa rotazione costringe il piede a pronare, ruotando la caviglia verso l’interno e appiattendo l’arco.',
        'Per questo molte persone con piede piatto o dolore all’arco hanno anche le anche deboli. L’arco non sta cedendo da solo. Viene sovraccaricato dall’alto. Rinforzare l’anca riduce questo carico che arriva dall’alto.',
        'Uno studio trasversale del 2013 del Framingham Foot Study ha esaminato circa 1.900\u00A0adulti della popolazione generale. La postura a piede piatto in sé non era legata al mal di schiena, ma un piede che ruotava verso l’interno durante il cammino mostrava un piccolo legame con il mal di schiena nelle donne, segno che la catena piede-anca-schiena può funzionare in entrambe le direzioni.',
        'Lo studio sul piede piatto di Brijwasi e colleghi (2023) includeva il rinforzo dell’anca insieme agli esercizi del piede corto, al lavoro sulla caviglia e agli allungamenti. Il programma combinato ha migliorato la forma dell’arco in sei settimane. Lo studio non ha separato quanto abbia contribuito da solo il rinforzo dell’anca, ma la sua inclusione riflette il ragionamento biomeccanico.',
      ],
      cites: [CITE.menz, CITE.brijwasi],
    },
    {
      h2: 'A chi serve l’abduzione dell’anca per il dolore al piede?',
      paragraphs: [
        'Chi ha il piede piatto o una pronazione eccessiva ne trae beneficio, perché l’esercizio affronta una causa comune, a monte, del cedimento dell’arco. Se le ginocchia tendono a cadere verso l’interno quando ti accovacci o cammini, è probabile che gli abduttori dell’anca deboli contribuiscano.',
        'Chi corre ne trae beneficio perché la corsa si fa sempre in appoggio su una gamba. Ogni falcata atterra su un piede. Un medio gluteo debole da quel lato lascia ruotare verso l’interno ginocchio e piede, e questo può contribuire a periostite tibiale, fascite plantare e dolore al ginocchio del corridore. Per approfondire, vedi [dolore al tallone quando corri](/heel-pain-runners/) (in inglese) e [esercizi per la periostite tibiale](/it/periostite-tibiale-esercizi/).',
        'Anche chi sta in piedi per tante ore, soprattutto infermieri e commessi, può trarne beneficio. Stare a lungo in piedi affatica il medio gluteo, e a fine turno il controllo dell’anca si indebolisce. Vedi [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) per gli esercizi da abbinare all’abduzione dell’anca.',
      ],
    },
    {
      h2: 'Quali sono gli errori più comuni nell’abduzione dell’anca in piedi?',
      paragraphs: [
        'Inclinare il busto dal lato opposto è l’errore più comune. Quando ti inclini, il corpo usa lo slancio e la flessione laterale invece del medio gluteo. Resta dritto. Un sollevamento più piccolo con il busto dritto è meglio di uno alto con il busto inclinato.',
        'Ruotare il piede verso l’esterno, con le dita che puntano al soffitto, è un altro errore. Così il lavoro passa ai flessori dell’anca e al tensore della fascia lata invece che al medio gluteo. Tieni le dita puntate in avanti o un po’ verso il basso.',
        'Far oscillare la gamba è un terzo problema. L’esercizio deve essere lento e controllato, soprattutto in discesa. La fase di discesa (eccentrica) è quella in cui avviene buona parte del rinforzo. Se la gamba cade veloce, il muscolo non sta lavorando.',
        'Infine, se l’anca della gamba d’appoggio si abbassa, vuol dire che l’elastico è troppo duro o che il medio gluteo dal lato d’appoggio si sta affaticando. Il bacino deve restare orizzontale per tutto il tempo. Usa un elastico più leggero o riposa tra una serie e l’altra.',
      ],
    },
    {
      h2: 'Cosa dicono gli studi?',
      paragraphs: [
        'Il ragionamento biomeccanico a favore dell’abduzione dell’anca nei programmi per il piede è ben consolidato: abduttori dell’anca deboli lasciano cedere il ginocchio verso l’interno, aumentando la pronazione del piede e il carico sull’arco. Diversi studi osservazionali confermano il legame tra debolezza dell’anca e problemi di allineamento dell’arto inferiore.',
        'Per gli esiti clinici, le prove più forti vengono dai programmi combinati. Lo studio del 2023 di Brijwasi e colleghi includeva il rinforzo dell’anca in un programma di esercizi di sei settimane per 52\u00A0persone con piede piatto flessibile. Il programma ha migliorato la forma dell’arco. Il rinforzo dell’anca non è stato isolato in un suo studio sul piede piatto o sulla fascite plantare.',
        'Uno studio randomizzato del 2024 su 45\u00A0donne con piede piatto flessibile ha confrontato per sei settimane gli esercizi del piede corto, un programma di esercizi combinato e il piede corto più l’abduzione isometrica dell’anca. Tutti e tre i gruppi hanno migliorato il navicular drop (quanto l’arco cede sotto il peso del corpo). Il gruppo che aggiungeva l’abduzione isometrica dell’anca è migliorato di più, ma il suo navicular drop non era significativamente migliore rispetto al programma combinato; l’oscillazione laterale sì (Zarali e colleghi, 2024). Questo suggerisce che il lavoro sull’anca possa aggiungere qualcosa agli esercizi per il piede, in base a un solo piccolo studio.',
        'Le prove sostengono l’abduzione dell’anca come parte di un programma più ampio per il piede. Non è un esercizio a sé per il dolore all’arco, ma copre un vuoto che gli esercizi solo per il piede lasciano aperto. Pagine collegate: [esercizi per il piede piatto](/it/esercizi-piede-piatto/), [inversione della caviglia con elastico](/it/esercizi/inversione-caviglia-elastico/), [esercizio del piede corto](/it/esercizi/piede-corto/).',
      ],
      cites: [CITE.zarali, CITE.brijwasi, CITE.cheng],
    },
  ],
  faq: [
    {
      q: 'L’abduzione dell’anca aiuta il piede piatto?',
      cites: [CITE.brijwasi],
      a: 'L’abduzione dell’anca rinforza il medio gluteo, che controlla dall’alto l’allineamento di ginocchio e piede. Uno studio del 2023 su 52\u00A0persone con piede piatto flessibile ha usato il rinforzo dell’anca come parte di un programma combinato e ha trovato un miglioramento della forma dell’arco in sei settimane (Brijwasi 2023). Funziona meglio come parte di un programma più ampio, non da sola.',
    },
    {
      q: 'Quante abduzioni dell’anca devo fare?',
      a: 'Walkito parte da 3\u00A0serie da 15\u00A0ripetizioni per gamba, in piedi con un elastico intorno alle caviglie. È un esercizio con più ripetizioni e meno carico, perché al medio gluteo serve resistenza per camminare, non la forza massima.',
    },
    {
      q: 'Posso fare l’abduzione dell’anca sdraiato su un fianco?',
      a: 'L’abduzione dell’anca su un fianco lavora sullo stesso muscolo. In piedi si aggiunge la sfida dell’equilibrio sulla gamba d’appoggio, che allena anche l’anca da quel lato. Walkito usa la versione in piedi perché assomiglia di più al cammino e all’appoggio su una gamba. Se in piedi sei troppo instabile, su un fianco è un punto di partenza ragionevole.',
    },
    {
      q: 'Che elastico usare per l’abduzione dell’anca?',
      a: 'Funziona meglio un elastico ad anello a resistenza leggera o media. Mettilo intorno a entrambe le caviglie o appena sopra le ginocchia. L’elastico deve dare abbastanza resistenza da rendere impegnative le ultime ripetizioni di ogni serie, ma senza costringerti a inclinarti di lato o a far oscillare la gamba.',
    },
    {
      q: 'Perché l’abduzione dell’anca è in un programma di esercizi per il piede?',
      cites: [CITE.menz],
      a: 'L’anca controlla quello che succede a ginocchio e piede. Un medio gluteo debole lascia cedere il ginocchio verso l’interno, e questo costringe il piede a pronare e appiattisce l’arco. Uno studio del 2013 su circa 1.900\u00A0adulti ha trovato un piccolo legame tra un piede che ruota verso l’interno durante il cammino e il mal di schiena nelle donne, anche se la postura a piede piatto da sola non era legata al mal di schiena (Menz 2013). Rinforzare l’anca riduce il sovraccarico che arriva dall’alto sull’arco.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai un dolore acuto all’anca che ti impedisce di caricare il peso',
      'il ginocchio cede verso l’interno e non riesci a controllarlo nonostante la pratica',
      'hai dolore all’inguine o una sensazione di scatto nell’anca che peggiora con l’esercizio',
      'il dolore al piede o all’arco peggiora nonostante esercizi regolari da diverse settimane',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito aggiunge l’abduzione dell’anca nei giorni di forza quando nel tuo piano entra un obiettivo di equilibrio tra sinistra e destra. Sta insieme agli esercizi per i muscoli intrinseci del piede e al lavoro sul polpaccio, così l’arco riceve sostegno dall’alto e dal basso. Le sessioni durano 3, 5 o 10\u00A0minuti, e un test ogni 14\u00A0giorni segue i progressi.',
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Abduzione dell’anca',
  campaign: 'ex-hip-abduction-it',
};
