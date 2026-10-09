import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-calf-raises.ts`, written around the
 * queries «sollevamenti sulle punte» and «calf raise come farli».
 * Informal «tu». Figures, doses, grades and qualifiers are identical to the
 * English page. No new citations.
 */

export const EX_CALF_RAISES_IT: Guide = {
  lang: 'it',
  page: 'exCalfRaises',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Sollevamenti sulle punte: come farli nel modo giusto',
  description:
    'Come fare i sollevamenti sulle punte (calf raise): in piedi, da seduto e in tenuta, muscoli coinvolti, serie e ripetizioni, errori comuni e a chi servono.',
  h1: 'Sollevamenti sulle punte: come farli bene, con serie, ripetizioni e varianti',
  lede:
    'Il sollevamento sulle punte è un esercizio in piedi o da seduto in cui spingi fino a salire sugli avampiedi. Rinforza il gastrocnemio (il muscolo più grande e superficiale del polpaccio) e il soleo (quello più profondo), e a ogni ripetizione carica il tendine d’Achille e la fascia plantare. Questa pagina spiega il sollevamento in piedi su due piedi, la versione da seduto e la tenuta isometrica in alto.',
  takeaways: [
    'La linea guida del 2023 sul dolore al tallone dà al rinforzo del polpaccio una B e lo consiglia insieme agli allungamenti, a cui dà una A (Koc e colleghi, 2023).',
    'Uno studio normativo su 566\u00A0adulti sani (tra 20 e 81\u00A0anni) ha trovato una mediana di 24\u00A0sollevamenti su una gamba per gli uomini e 21 per le donne, con variazioni per età, sesso e livello di attività (Hebert-Losier e colleghi, 2017).',
    'Una dorsiflessione della caviglia ridotta, spesso dovuta a un gastrocnemio rigido, era il fattore di rischio indipendente più forte per la fascite plantare in uno studio caso-controllo appaiato su 50\u00A0casi e 100\u00A0controlli (Riddle e colleghi, 2003).',
    'I sollevamenti sulle punte in piedi caricano soprattutto il gastrocnemio. Quelli da seduto spostano il carico sul soleo, perché il ginocchio piegato accorcia il gastrocnemio.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Quali muscoli lavorano nei sollevamenti sulle punte?',
      paragraphs: [
        'I sollevamenti sulle punte in piedi a ginocchio teso lavorano soprattutto sul gastrocnemio, il muscolo a due capi che dà al polpaccio la sua forma visibile. Il gastrocnemio passa sul ginocchio e sulla caviglia, quindi è più attivo quando il ginocchio è teso.',
        'I sollevamenti da seduto spostano il carico sul soleo, il muscolo più profondo del polpaccio che sta sotto. Il soleo passa solo sulla caviglia, quindi piegare il ginocchio a circa 90\u00A0gradi toglie quasi del tutto il gastrocnemio dal movimento e fa lavorare il soleo.',
        'Entrambi i muscoli si attaccano al tallone attraverso il tendine d’Achille. Ogni sollevamento sulle punte carica anche un po’ la fascia plantare, perché il tallone è il punto di ancoraggio comune. Il [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/) aumenta ancora il carico sulla fascia piegando le dita.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Come si fa il sollevamento sulle punte in piedi?',
      paragraphs: [
        'Stai in piedi con entrambi i piedi appoggiati a terra, larghi più o meno come i fianchi. Tieniti a un muro o a una sedia per l’equilibrio. Sali sugli avampiedi spingendo attraverso gli alluci. Fermati un attimo in alto, poi scendi piano in circa tre secondi. I due piedi si dividono il carico.',
        'Se hai un gradino, metti gli avampiedi sul bordo e lascia scendere i talloni un po’ più in basso nella discesa. Quel movimento in più in basso allunga un po’ di più il polpaccio a ogni ripetizione. A terra il movimento è più piccolo, ma l’esercizio funziona lo stesso.',
      ],
      exercises: [
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 dà al lavoro di forza una B. I sollevamenti su due piedi sono un passaggio intermedio nei programmi testati, non testati da soli.',
          },
          dose: 'Walkito parte da 3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. Tieniti a un muro per l’equilibrio.',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto, scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, i polpacci evidenziati',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Come si fa il sollevamento sulle punte da seduto',
      paragraphs: [
        'Siediti su una sedia con i piedi appoggiati a terra e le ginocchia piegate a circa 90\u00A0gradi. Spingi attraverso gli avampiedi e solleva entrambi i talloni da terra. Scendi piano. Se metti le mani sulle ginocchia e premi verso il basso, aggiungi resistenza.',
        'I sollevamenti da seduto sono il punto di ingresso con meno carico della progressione per il polpaccio. Rispetto al lavoro in piedi stressano pochissimo il tallone, quindi sono un buon punto di partenza quando i sollevamenti in piedi fanno troppo male.',
      ],
      exercises: [
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: {
            level: 'moderate',
            why: 'Parte di progressioni riabilitative pubblicate (fase 1 di Silbernagel). Non testato da solo in uno studio randomizzato.',
          },
          dose: 'Walkito parte da 3\u00A0serie da 10, entrambi i piedi',
          how: 'Siediti con i piedi appoggiati. Spingi attraverso gli avampiedi. Le mani sulle ginocchia aggiungono resistenza.',
          often: 'Giorni di forza, finché è il tuo livello',
          feel: 'Lavoro nei polpacci, pochissimo carico sul tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi attraverso gli avampiedi',
          alt: 'Una figura seduta che solleva entrambi i talloni, i polpacci evidenziati',
        },
      ],
      cites: [CITE.silbernagel, CITE.guideline],
    },
    {
      h2: 'Come si fa la tenuta sulle punte (isometrica)',
      paragraphs: [
        'Sali sulle punte con entrambi i piedi, poi resta fermo in alto. Non lasciare che i talloni riscendano. Una tenuta isometrica vuol dire che il muscolo lavora senza muoversi lungo un movimento. Così carichi il tendine d’Achille senza il su e giù che può dare fastidio nelle prime fasi di un dolore al tendine o al tallone.',
        'La linea guida del 2024 sull’Achille indica il carico isometrico come uno dei tipi di carico del tendine efficaci, anche se non è stato pubblicato nessuno studio sull’Achille con solo esercizi isometrici.',
      ],
      exercises: [
        {
          name: 'Tenuta sulle punte',
          evidence: {
            level: 'moderate',
            why: 'Indicata nella linea guida del 2024 sull’Achille come tipo di carico efficace. Nessuno studio randomizzato con solo esercizi isometrici.',
          },
          dose: 'Walkito parte da 3\u00A0tenute da 20\u00A0secondi, entrambi i piedi',
          how: 'Sali sulle punte di entrambi i piedi, resta in alto senza scendere. Tieniti a un muro per l’equilibrio.',
          often: 'Giorni di forza, il passaggio tra i sollevamenti su due piedi e il lavoro su una gamba',
          feel: 'I polpacci che lavorano per restare fermi',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_hold',
          caption: 'Tenuta sulle punte: sali, poi resta fermo in alto',
          alt: 'Una figura che tiene la posizione sulle punte di entrambi i piedi, i polpacci evidenziati',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.guideline],
    },
    {
      h2: 'Quanti sollevamenti sulle punte bisogna fare?',
      keyFact: 'Uno studio normativo su 566\u00A0adulti sani tra 20 e 81\u00A0anni ha trovato che il numero di sollevamenti su una gamba variava con età, sesso e livello di attività, con una mediana di 21\u00A0ripetizioni per le donne (Hebert-Losier e colleghi, 2017).',
      paragraphs: [
        'Dipende da dove sei nella progressione e su cosa stai lavorando. Per la forza generale del polpaccio, 3\u00A0serie da 10-15\u00A0ripetizioni a ritmo lento sono una dose di partenza comune. Nel protocollo per la fascite plantare testato negli studi, il sollevamento con asciugamano parte da 3\u00A0serie a 12RM e arriva a 5\u00A0serie a 8RM in circa cinque settimane.',
        'Un riferimento utile è il test di resistenza dei sollevamenti su una gamba. Uno studio normativo su 566\u00A0adulti sani ha trovato una mediana di 24\u00A0ripetizioni per gli uomini e 21 per le donne, con variazioni per età, sesso e attività. L’obiettivo per il polpaccio nell’app Walkito è di 25\u00A0sollevamenti su una gamba. Raggiungerlo non chiude il lavoro. Si passa al mantenimento.',
        'Per il protocollo specifico per la fascite plantare, vedi il [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/). Per la versione per il tendine d’Achille, vedi le [discese eccentriche del tallone](/it/esercizi/discese-eccentriche-tallone/).',
      ],
      cites: [CITE.hebertLosier, CITE.rathleff],
    },
    {
      h2: 'Quali sono gli errori più comuni nei sollevamenti sulle punte?',
      paragraphs: [
        'Andare troppo veloce. È la discesa lenta (circa tre secondi) che costruisce la forza. Rimbalzare in basso spreca la fase eccentrica, che è la parte che fa la maggior parte del lavoro per l’adattamento del tendine.',
        'Rotolare sul bordo esterno del piede. La spinta deve passare attraverso l’alluce e l’avampiede. Se la caviglia ruota verso l’esterno, il polpaccio non si contrae del tutto e i piccoli muscoli sul lato esterno della caviglia prendono una tensione per cui non sono fatti.',
        'Saltare la versione da seduto. Se i sollevamenti in piedi fanno male, passare subito al lavoro su una gamba sul gradino peggiora le cose. La progressione esiste per un motivo: da seduto, poi in piedi su due piedi, poi la tenuta, poi su una gamba. Ogni passaggio deve sembrare gestibile per due sessioni prima di andare avanti.',
      ],
    },
    {
      h2: 'Sollevamenti sulle punte per la fascite plantare o per la tendinite d’Achille',
      paragraphs: [
        'Per la fascite plantare, le prove indicano il [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/), in cui l’asciugamano sotto le dita carica la fascia insieme al polpaccio. La soglia del dolore è 6/10. La pagina completa sul problema è [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
        'Per la tendinite d’Achille, l’attenzione si sposta sulle [discese eccentriche del tallone](/it/esercizi/discese-eccentriche-tallone/), dove il punto è la fase di discesa e l’asciugamano non si usa. Il modello del dolore di uno studio permette di caricare fino a circa 5/10, purché il dolore passi entro la mattina dopo. La pagina completa è [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
        'Il sollevamento su due piedi, quello da seduto e la tenuta isometrica compaiono in entrambi i percorsi come primi passi. Costruiscono la forza di base che rende possibile l’esercizio specifico con carico.',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
  ],
  faq: [
    {
      q: 'I sollevamenti sulle punte allenano i glutei?',
      a: 'No. I sollevamenti sulle punte lavorano sul gastrocnemio e sul soleo nella parte bassa della gamba. Nelle varianti su una gamba i glutei stabilizzano l’anca, ma non sono il muscolo principale che lavora. Per la forza di anca e glutei, vedi l’[abduzione dell’anca](/it/esercizi/abduzione-anca/).',
    },
    {
      q: 'Meglio i sollevamenti sulle punte da seduto o in piedi?',
      cites: [CITE.patelGastrocnemius],
      a: 'Lavorano su muscoli diversi. Quelli in piedi lavorano soprattutto sul gastrocnemio, il muscolo più grande del polpaccio. Quelli da seduto spostano il carico sul soleo, il più profondo, perché il ginocchio piegato toglie in gran parte il gastrocnemio dal movimento. Servono entrambi, e farli insieme copre tutto il polpaccio.',
    },
    {
      q: 'Quanti sollevamenti sulle punte su una gamba sono normali?',
      cites: [CITE.hebertLosier],
      a: 'Uno studio normativo su 566\u00A0adulti sani ha trovato una mediana di 24\u00A0ripetizioni per gli uomini e 21 per le donne, tenendo conto di età, sesso e livello di attività (Hebert-Losier 2017). Il numero è utile per seguire i cambiamenti nelle settimane e confrontare una gamba con l’altra, non come soglia di promosso o bocciato.',
    },
    {
      q: 'I sollevamenti sulle punte vanno fatti tutti i giorni?',
      cites: [CITE.rathleff],
      a: 'Lo studio di Rathleff sulla fascite plantare usava un giorno sì e uno no. Muscoli e tendini hanno bisogno di recupero tra una sessione con carico e l’altra. Walkito mette i sollevamenti sulle punte nei giorni di forza, con giorni di riposo in mezzo. Caricare ogni giorno senza riposo può bloccare i progressi o aumentare il dolore.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai sentito uno schiocco improvviso nel polpaccio o nell’Achille durante un sollevamento',
      'il polpaccio è gonfio, arrossato, caldo o duro al tatto',
      'da un lato non riesci proprio a salire sulle punte',
      'il dolore non passa durante la notte e peggiora di settimana in settimana',
      'compaiono intorpidimento, formicolio o bruciore nel piede',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito costruisce un piano che parte dal tuo livello e sale quando sei pronto. La progressione per il polpaccio va dai sollevamenti da seduto a quelli in piedi su due piedi, poi alla tenuta, al sollevamento con asciugamano, alle discese eccentriche del tallone e ai saltelli sulle punte. Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti.',
    more: [
      'Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio ed equilibrio. L’obiettivo per il polpaccio è di 25\u00A0sollevamenti su una gamba. Raggiungerlo non chiude il lavoro: al suo posto arriva un nuovo obiettivo. Walkito è un programma di esercizi. Non fa diagnosi.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Sollevamenti sulle punte',
  campaign: 'ex-calf-raises-it',
};
