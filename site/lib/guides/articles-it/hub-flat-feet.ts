import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub: Piede piatto (IT) ────────────────────────────────────────────
 *
 * Translated from `articles/hub-flat-feet.ts` (2026-10-08), written around
 * the Italian queries «piede piatto», «piede piatto adulto», «piede piatto
 * flessibile», «arco plantare abbassato». Informal «tu». Figures and
 * qualifiers are identical to the English page; terminology and exercise
 * names follow `lib/guides/it.ts`. No new citations.
 *
 * Pages that exist only in English keep their English path, marked
 * «(in inglese)».
 */

export const HUB_FLAT_FEET_IT: Guide = {
  lang: 'it',
  page: 'hubFlatFeet' as any,
  mainSource: CITE.ling,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Piede piatto: cause, tipi e quando preoccuparsi',
  description:
    'Cos’è il piede piatto, flessibile o rigido, se crea problemi, piede piatto acquisito dell’adulto, arco caduto, esercizi e quando andare dal medico.',
  h1: 'Piede piatto: cos’è, da cosa dipende e quando richiede attenzione',
  lede:
    'Avere il piede piatto vuol dire che l’arco del piede è più basso del solito o tocca terra quando sei in piedi. La maggior parte dei piedi piatti è flessibile, cioè l’arco compare quando il piede è sollevato da terra, e quasi sempre non dà alcun dolore. Una parte più piccola è rigida o compare da adulti per un tendine che si indebolisce, e sono questi i casi a cui fare più attenzione.',
  takeaways: [
    'Una revisione sistematica del 2023 su 12\u00A0studi di popolazione ha stimato una frequenza complessiva del piede piatto di circa il 15,6%, anche se il dato cambia molto in base all’età, al metodo di misura e alla popolazione (Salinas-Torres e colleghi, 2023).',
    'La maggior parte dei piedi piatti è flessibile e c’è da sempre. Un piede piatto rigido, che resta piatto anche quando il piede è sollevato, è strutturale e non cambierà con l’esercizio.',
    'Il Framingham Foot Study su circa 1.900\u00A0adulti non ha trovato un legame tra piede piatto e mal di schiena lombare. Ha trovato un piccolo legame nelle donne tra un piede che cede verso l’interno camminando e il mal di schiena, e nessuno negli uomini (Menz e colleghi, 2013).',
    'Il piede piatto acquisito dell’adulto, causato il più delle volte da un indebolimento del tendine tibiale posteriore, può dare dolore e gonfiore all’interno della caviglia e un abbassamento progressivo dell’arco (Ling e Lui, 2017).',
    'In uno studio su 52\u00A0persone con piede piatto flessibile, sei settimane di esercizi combinati hanno cambiato la forma dell’arco più che in un gruppo di controllo. Lo studio ha misurato la forma dell’arco, non il dolore (Brijwasi e Borkar, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Cos’è il piede piatto?',
      figure: { id: 'arches', caption: 'Le stesse ossa del piede con piede piatto, arco normale e arco alto, viste dal lato interno.', alt: 'Tre piedi visti dal lato interno su un pavimento piano: un piede piatto con l’arco appoggiato a terra, un arco normale con un piccolo spazio sotto e un arco alto con un grande spazio sotto la parte centrale del piede.' },
      keyFact: 'Una revisione sistematica del 2023 che ha messo insieme 12\u00A0studi di popolazione su circa 16.000\u00A0persone ha trovato il piede piatto in circa il 15,6% dei casi complessivi, più spesso con un indice di massa corporea più alto e un’età più avanzata (Salinas-Torres e colleghi, 2023).',
      paragraphs: [
        'L’arco del piede, chiamato arco longitudinale mediale, è formato da ossa, legamenti e tendini nella parte interna del piede. Nel piede piatto, questo arco è più basso o assente quando sei in piedi. Il termine medico è pes planus.',
        'Il piede piatto è comune. Una revisione sistematica del 2023 ha messo insieme 12\u00A0studi di popolazione su circa 16.000\u00A0persone e ha riportato una frequenza complessiva del 15,6%. Solo negli adulti, le stime vanno da circa il 5 al 27% in base alla popolazione e al metodo di misura. Un indice di massa corporea più alto e un’età più avanzata sono associati a una frequenza più alta.',
        '«Arco caduto» è un nome comune per il piede piatto. Il più delle volte le due espressioni vogliono dire la stessa cosa. A volte però «arco caduto» si usa in modo più preciso per un arco che si è abbassato da adulti, che ha una causa diversa, spiegata più sotto.',
        'Avere il piede piatto non vuol dire per forza che qualcosa non va. Molte persone con l’arco basso camminano, corrono e stanno in piedi senza alcun sintomo. Le domande che contano sono se il piede piatto è flessibile o rigido, e se dà dolore.',
      ],
      cites: [CITE.salinasTorres],
    },
    {
      h2: 'Come capire se il piede piatto è flessibile o rigido?',
      keyFact: 'In uno studio su 52\u00A0persone con piede piatto flessibile, sei settimane di piede corto, esercizi per caviglia e anca e allungamenti hanno migliorato due misure della forma dell’arco più che in un gruppo di controllo (Brijwasi e Borkar, 2023).',
      paragraphs: [
        'Un piede piatto flessibile è un piede in cui l’arco si appiattisce sotto il tuo peso ma torna quando il piede è sollevato da terra. La maggior parte dei piedi piatti è di questo tipo. Un piede piatto rigido resta piatto sia quando ci stai sopra sia quando non ci stai.',
        'Una verifica veloce: siediti e guarda l’interno del piede. Se vedi un arco, alzati in piedi su entrambi i piedi. Se l’arco sparisce quando sei in piedi ma c’era quando eri seduto, il piede piatto è flessibile. Un altro modo: sali sulle punte. Se l’arco compare quando sali, è flessibile.',
        'La differenza conta perché l’esercizio può influire su un arco flessibile. In uno studio su 52\u00A0persone con piede piatto flessibile, sei settimane di esercizi del piede corto, lavoro sulla caviglia, rinforzo dell’anca e allungamenti hanno cambiato due misure della forma dell’arco più che in un gruppo di controllo. Un piede piatto rigido è strutturale (spesso per una coalizione tarsale, un ponte osseo tra due ossa del piede) e l’esercizio non ne cambierà la forma. Un piede piatto rigido che fa male di solito richiede una valutazione da un professionista sanitario.',
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Il piede piatto è davvero un problema?',
      keyFact: 'Il Framingham Foot Study su circa 1.900\u00A0adulti non ha trovato un legame tra piede piatto e mal di schiena, anche se un passo pronato ha mostrato un piccolo legame solo nelle donne (Menz e colleghi, 2013).',
      paragraphs: [
        'Per la maggior parte delle persone, no. Un piede piatto flessibile che non fa male e non ti limita in quello che fai è una normale variante della forma del piede, non un problema da risolvere.',
        'La preoccupazione più comune è il mal di schiena. Lo studio più grande sul tema, il Framingham Foot Study, ha esaminato circa 1.900\u00A0adulti. Non ha trovato un’associazione tra piede piatto e mal di schiena lombare. Nelle donne, un piede che cedeva verso l’interno camminando (passo pronato) mostrava un piccolo legame con il mal di schiena, ma la forma del piede in sé, piatto o no, non lo mostrava. Negli uomini, né la forma del piede né il modo di camminare erano legati al mal di schiena.',
        'Il piede piatto può cambiare il modo in cui il carico passa attraverso la gamba. Alcuni runner con piedi molto pronati sviluppano lesioni da sovraccarico alla caviglia o al ginocchio, ma il legame tra forma del piede e infortuni è più debole di quanto pensino in molti. Una revisione del 2024 sull’allenamento del piede corto nel piede piatto non ha trovato un cambiamento chiaro nella postura del piede nel complesso, e ha visto un cambiamento in una misura dell’abbassamento dell’arco solo nei programmi più lunghi di sei settimane. Sia lo studio sia la revisione hanno misurato la forma dell’arco, non il dolore o gli infortuni.',
        'I casi in cui il piede piatto conta davvero sono spiegati più sotto: il piede piatto acquisito dell’adulto per un tendine che si indebolisce, e il piede piatto che si accompagna a dolore, gonfiore o a un cambiamento improvviso nell’altezza dell’arco.',
      ],
      cites: [CITE.menz, CITE.cheng],
    },
    {
      h2: 'Cos’è il piede piatto acquisito dell’adulto?',
      paragraphs: [
        'La deformità del piede piatto acquisito dell’adulto è un problema in cui un arco che era normale si abbassa in età adulta, di solito perché il tendine tibiale posteriore (il tendine che sostiene l’arco dall’interno della caviglia) si indebolisce e non riesce più a fare il suo lavoro. Il nome clinico del problema al tendine è disfunzione del tendine tibiale posteriore.',
        'Il tendine tibiale posteriore passa dietro il malleolo interno e si attacca alle ossa che formano l’arco. Quando si allunga o si lesiona, l’arco si abbassa, il tallone si inclina verso l’esterno e l’avampiede può iniziare a puntare verso l’esterno. Dolore e gonfiore lungo l’interno della caviglia sono segni precoci comuni. Il test del sollevamento sulle punte su un solo piede, in cui provi a stare su un piede e a salire sulle punte, può essere difficile o doloroso dal lato colpito.',
        'Una panoramica pubblicata su The Open Orthopaedics Journal descrive quattro stadi: nello stadio I c’è un’infiammazione del tendine senza deformità visibile, nello stadio II c’è una deformità di piede piatto flessibile che si può ancora correggere con le mani, nello stadio III la deformità è rigida e non si corregge con le mani, e nello stadio IV ci sono alterazioni dell’articolazione della caviglia in aggiunta alla deformità rigida.',
        'Una revisione sistematica sull’esercizio nella disfunzione del tendine tibiale posteriore ha trovato poche prove da studi randomizzati. La revisione ha notato che le linee guida cliniche raccomandano una gestione non chirurgica, con esercizi, ortesi e modifiche delle attività, per gli stadi iniziali (stadi I e II), ma gli studi di alta qualità sono pochi. Gli stadi successivi spesso richiedono una valutazione da un professionista sanitario e possono comportare un tutore o la chirurgia.',
        'Se da adulto un arco si è abbassato, con dolore o gonfiore all’interno della caviglia, rivolgiti a un professionista sanitario prima di iniziare un programma di esercizi. Non è la stessa cosa di un piede piatto flessibile che hai da sempre.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quali sintomi indicano che il piede piatto richiede attenzione?',
      paragraphs: [
        'La maggior parte dei piedi piatti non dà sintomi e non richiede accertamenti medici. Un piede piatto flessibile che c’è dall’infanzia e non fa male è una normale variante della forma del piede. Questi sono gli schemi da far controllare a un professionista sanitario:',
      ],
      bullets: [
        'Dolore lungo l’interno della caviglia o sotto l’arco che non si calma con il riposo.',
        'Gonfiore all’interno della caviglia, soprattutto se è comparso da poco.',
        'Un arco che si è abbassato da adulto mentre l’altro no.',
        'Difficoltà a stare su un piede e salire sulle punte dal lato colpito.',
        'Dolore al ginocchio, allo stinco o all’anca che sospetti sia legato a come appoggi il piede.',
        'Un piede piatto rigido (l’arco resta piatto anche quando il piede è sollevato da terra).',
        'Intorpidimento, formicolio o una sensazione di instabilità alla caviglia.',
      ],
    },
    {
      h2: 'Scarpe e plantari aiutano il piede piatto?',
      paragraphs: [
        'Scarpe con un buon sostegno, un’intersuola rigida e un po’ di supporto per l’arco possono rendere più comodo stare in piedi e camminare con il piede piatto. Non cambiano l’arco nel tempo, ma possono ridurre il lavoro che i muscoli dell’arco devono fare durante il giorno.',
        'I plantari per l’arco già pronti si trovano facilmente e costano poco. I plantari su misura, fatti da un calco del piede, costano di più e a volte vengono consigliati per la disfunzione del tendine tibiale posteriore. Le prove sui plantari nel piede piatto in particolare sono più deboli di quanto pensino in molti. Per la fascite plantare, la linea guida del 2023 sul dolore al tallone sconsiglia i plantari come approccio a sé nel breve periodo (grado B contro), ma dà una C alle cure combinate che includono i plantari.',
        'Se il piede piatto non ti fa male, non ti servono scarpe speciali. Se stare in piedi o camminare ti fa dolere l’arco o la caviglia, una scarpa con suola rigida e un leggero supporto per l’arco è un primo passo ragionevole, da provare prima di spendere di più per plantari su misura. Le scarpe con suole molto piatte e senza sostegno (sandali sottili, scarpe da ginnastica consumate) tendono a peggiorare la stanchezza dell’arco nelle giornate lunghe.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quali esercizi aiutano il piede piatto?',
      paragraphs: [
        'Gli esercizi per il piede piatto si concentrano sui muscoli che sostengono l’arco da sotto (i muscoli intrinseci del piede) e sui muscoli più in alto che controllano come appoggi il piede (il polpaccio, l’anca). Le prove migliori finora vengono da uno studio su 52\u00A0persone con piede piatto flessibile, in cui sei settimane di esercizi combinati hanno cambiato la forma dell’arco più che in un gruppo di controllo. Quello studio includeva piede corto, esercizi per la caviglia, rinforzo dell’anca e allungamenti, fatti insieme.',
        'Una revisione del 2024 sull’allenamento del piede corto da solo è stata meno incoraggiante: non ha trovato un cambiamento chiaro nel complesso, e ha visto un miglioramento in una misura dell’arco solo nei programmi più lunghi di sei settimane. Quindi le prove sono più favorevoli a un programma combinato che a un solo esercizio, e serve pazienza.',
        '[Esercizi per il piede piatto](/it/esercizi-piede-piatto/) ha l’elenco completo degli esercizi, le dosi, cosa dovresti sentire e le prove dietro ciascuno. Walkito costruisce un piano settimanale intorno a un obiettivo di tenuta dell’arco, partendo dal piede corto da seduto e salendo alle versioni in piedi e su una gamba, poi aggiungendo la resistenza dell’elastico e il rinforzo dell’anca. Le pagine dei singoli esercizi approfondiscono:',
      ],
      bullets: [
        'Il [piede corto](/it/esercizi/piede-corto/) allena l’arco ad alzarsi senza arricciare le dita.',
        'La [raccolta dell’asciugamano](/it/esercizi/raccolta-asciugamano-dita/) sveglia i piccoli muscoli sotto l’arco.',
        'L’[apertura delle dita](/it/esercizi/apertura-dita-piede/) allena i muscoli tra le dita che si dividono il carico con l’arco.',
        'L’[inversione con elastico](/it/esercizi/inversione-caviglia-elastico/) rinforza il muscolo tibiale posteriore, lo stesso coinvolto nel piede piatto acquisito dell’adulto.',
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Problemi collegati',
      paragraphs: [
        'Il piede piatto può sovrapporsi ad altri problemi del piede, soprattutto quando stai in piedi o cammini a lungo. Se il dolore è vicino al tallone e segue lo schema del mattino (una fitta ai primi passi che si calma dopo qualche minuto), è più compatibile con la fascite plantare. Vedi [fascite plantare](/it/fascite-plantare/) per una panoramica completa.',
      ],
      bullets: [
        'Il [dolore all’avampiede](/it/metatarsalgia-dolore-pianta-piede/) può venire da un carico eccessivo sulla parte anteriore del piede quando l’arco è basso. Un polpaccio rigido può spostare il peso in avanti.',
        '[Piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) spiega gli esercizi e le scarpe che aiutano quando una lunga giornata su un pavimento duro ti lascia l’arco dolorante.',
        '[Infermieri e dolore ai piedi](/it/dolore-piedi-infermieri/) parla dei turni da 12\u00A0ore.',
      ],
    },
    {
      h2: 'Tutte le guide sul piede piatto di questo sito',
      bullets: [
        '[Esercizi per il piede piatto](/it/esercizi-piede-piatto/) ha l’elenco completo degli esercizi con dosi, progressione e gradi di evidenza.',
        '[Piede corto](/it/esercizi/piede-corto/) spiega nel dettaglio il movimento chiave per allenare l’arco.',
        '[Raccolta dell’asciugamano](/it/esercizi/raccolta-asciugamano-dita/) spiega l’esercizio con l’asciugamano per i muscoli intrinseci del piede.',
        '[Apertura delle dita](/it/esercizi/apertura-dita-piede/) spiega come aprire le dita per dividere il carico con l’arco.',
        '[Inversione con elastico](/it/esercizi/inversione-caviglia-elastico/) rinforza il muscolo tibiale posteriore.',
        '[Dolore all’avampiede](/it/metatarsalgia-dolore-pianta-piede/) parla del dolore nella parte anteriore del piede, che si sovrappone al piede piatto quando il carico si sposta in avanti.',
        '[Piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) spiega esercizi e scarpe per le lunghe giornate in piedi.',
        '[Infermieri e dolore ai piedi](/it/dolore-piedi-infermieri/) parla del dolore ai piedi di chi lavora in sanità.',
      ],
    },
  ],
  faq: [
    {
      q: 'Il piede piatto è da considerare un problema?',
      cites: [CITE.menz],
      a: 'Per la maggior parte delle persone, no. Un piede piatto flessibile che non fa male e non limita l’attività è una forma normale, non un disturbo. Il Framingham Foot Study su circa 1.900\u00A0adulti non ha trovato un legame tra piede piatto e mal di schiena lombare (Menz e colleghi, 2013). I casi che richiedono attenzione sono il piede piatto rigido e gli archi che si sono abbassati da adulti con dolore o gonfiore.',
    },
    {
      q: 'Cosa causa il piede piatto negli adulti?',
      cites: [CITE.ling],
      a: 'La maggior parte dei piedi piatti negli adulti c’è da sempre ed è semplicemente il modo in cui il piede si è sviluppato. Quando un arco prima normale si abbassa da adulti, la causa più comune è la disfunzione del tendine tibiale posteriore: il tendine all’interno della caviglia si indebolisce, l’arco si abbassa e possono seguire dolore o gonfiore (Ling e Lui, 2017). Altre cause sono infortuni, artrite infiammatoria e problemi ai nervi.',
    },
    {
      q: 'Il piede piatto può causare dolore al ginocchio o all’anca?',
      a: 'Un arco basso cambia il modo in cui la forza sale lungo la gamba, e alcune persone con piedi molto pronati sviluppano sintomi da sovraccarico al ginocchio, allo stinco o all’anca. Ma il legame è più debole di quanto si pensi. Molte persone con il piede piatto non hanno problemi al ginocchio o all’anca. Se hai sia il piede piatto sia dolore al ginocchio o all’anca, un professionista sanitario può verificare se nel tuo caso sono collegati.',
    },
    {
      q: 'Il piede piatto nei bambini passa crescendo?',
      cites: [CITE.salinasTorres],
      a: 'Nella maggior parte dei casi sì. Il piede piatto è quasi universale nei bambini piccoli, e l’arco di solito si forma tra i 6 e i 10\u00A0anni circa. Una revisione sistematica del 2023 ha notato che la frequenza è più alta tra i 3 e i 5\u00A0anni e cala fino all’adolescenza (Salinas-Torres e colleghi, 2023). Un ragazzo che da adolescente ha ancora un piede piatto flessibile senza dolore difficilmente ha un problema da risolvere.',
    },
    {
      q: 'Devo usare plantari se ho il piede piatto?',
      cites: [CITE.guideline],
      a: 'Se il piede piatto non ti fa male, i plantari sono facoltativi. Se stare in piedi o camminare ti fa dolere l’arco, una scarpa con suola rigida e un leggero supporto per l’arco è un primo passo ragionevole. I plantari su misura a volte si usano per la disfunzione del tendine tibiale posteriore, ma le prove sui plantari per il solo piede piatto sono limitate. La linea guida del 2023 sul dolore al tallone dà ai plantari come approccio a sé un B contro.',
    },
    {
      q: 'Cos’è il piede piatto acquisito dell’adulto?',
      cites: [CITE.ling, CITE.posteriorTibialReview],
      a: 'Il piede piatto acquisito dell’adulto è un abbassamento progressivo dell’arco, di solito per un indebolimento del tendine tibiale posteriore (Ling e Lui, 2017). Dà dolore e gonfiore all’interno della caviglia, difficoltà a salire sulle punte su un piede e un tallone che si inclina verso l’esterno. Le linee guida cliniche raccomandano una gestione non chirurgica negli stadi iniziali, anche se le prove da studi di alta qualità sono limitate (Ross e colleghi, 2018).',
    },
    {
      q: 'Si può correre con il piede piatto?',
      a: 'Molti runner hanno il piede piatto e corrono senza problemi. Un arco basso può aumentare la pronazione, che alcuni runner gestiscono con scarpe stabili. Se correre ti dà dolore all’arco, alla caviglia o al ginocchio che non si calma tra una corsa e l’altra, un professionista sanitario può verificare se il piede piatto c’entra. Rinforzare i muscoli dell’arco e dell’anca è un approccio ragionevole, che tu cambi scarpe o no.',
    },
    {
      q: 'Il piede piatto è considerato una disabilità?',
      a: 'Di solito no. La maggior parte dei piedi piatti non fa male e non limita l’attività, quindi da sola non rientra nei criteri di disabilità. Un piede piatto grave o rigido che dà dolore continuo e limita il camminare o lo stare in piedi a volte può sostenere una richiesta di invalidità, ma dipende dal sistema specifico, come la Social Security negli Stati Uniti, e da come funzioni nel complesso, non dal solo piede piatto.',
    },
    {
      q: 'In quali etnie è più comune il piede piatto?',
      cites: [CITE.salinasTorres],
      a: 'Il piede piatto (pes planus) è più frequente in alcuni gruppi, anche se la ricerca è limitata. Una revisione sistematica del 2023 su studi di popolazione ha trovato che l’origine asiatica era legata a un odds ratio superiore a 2 per il piede piatto, e l’origine bianca a un odds ratio di circa 0,5, in confronti separati tra sottogruppi. Sono schemi di popolazione, non una previsione sui piedi di una singola persona.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'da adulto un arco si è abbassato all’improvviso',
      'c’è dolore o gonfiore lungo l’interno della caviglia',
      'non riesci a stare su un piede e salire sulle punte dal lato colpito',
      'l’arco resta piatto anche quando il piede è sollevato da terra (piede piatto rigido)',
      'il dolore è iniziato dopo un infortunio o una caduta',
      'hai intorpidimento, formicolio o instabilità alla caviglia',
      'ti fanno male entrambi i piedi e altre articolazioni sono rigide o gonfie',
      'il dolore peggiora di settimana in settimana nonostante gli esercizi',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Non devi decidere da solo quali esercizi per l’arco fare o quando passare a una versione più difficile. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per un piede piatto flessibile, quell’obiettivo è la tenuta dell’arco: tenere l’arco alzato per 60\u00A0secondi. Se hai anche dolore al tallone, prima vengono le mattine senza dolore.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto il primo obiettivo), un breve test controlla tenuta dell’arco, resistenza del polpaccio ed equilibrio. L’obiettivo della tenuta dell’arco resta finché non lo raggiungi, per quante settimane servano.',
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se da adulto un arco si è abbassato con dolore o gonfiore, rivolgiti a un professionista sanitario prima di iniziare.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Piede piatto',
  campaign: 'hub-flat-feet-it',
};
