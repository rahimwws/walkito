import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ball-of-foot.ts`, written around the German
 * queries «Schmerzen im Fußballen», «Metatarsalgie», «Vorfußschmerzen».
 * Informal «du». Numbers, doses and evidence levels identical to the
 * English page.
 */

export const BALL_OF_FOOT_DE: Guide = {
  lang: 'de',
  page: 'ballOfFoot',
  mainSource: CITE.amaha,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Schmerzen im Fußballen: Ursachen, Übungen, was hilft',
  description:
    'Schmerzen im Fußballen: Ursachen, Metatarsalgie oder Morton-Neurom, Zehenübungen, Wadendehnung, Pelotten und wann du zu einer Fachperson gehen solltest.',
  h1: 'Schmerzen im Fußballen: woher sie kommen und was hilft',
  lede:
    'Du drückst dich vom Boden ab, und da ist er: ein stechender Schmerz direkt hinter den Zehen, als würdest du auf einem Kieselstein gehen. Der Fußballen trägt bei jedem Schritt dein ganzes Körpergewicht, und mehrere verschiedene Erkrankungen können ihn schmerzen lassen. Diese Seite zeigt, welche das sind, was die Studienlage zu Übungen und Schuhen sagt und wo die ehrlichen Lücken in der Forschung liegen.',
  intro: [
    'Der klinische Oberbegriff ist Metatarsalgie, also Schmerz rund um die Mittelfußköpfchen, die Knochenenden direkt hinter den Zehen. Aber Metatarsalgie beschreibt, wo es wehtut, sie ist keine Diagnose. Unter diesem Begriff stecken mehrere verschiedene Probleme, und nicht alle sprechen auf dasselbe an.',
  ],
  toc: true,
  takeaways: [
    'In einer Studie mit 41\u00A0Personen mit primärer Metatarsalgie verbesserte ein 8-wöchiges Programm mit Zehenübungen den Schmerz im Schnitt um 2,7\u00A0Punkte auf einer 10-Punkte-Skala. Die Studie hatte keine Kontrollgruppe (Amaha und Kollegen, 2020).',
    'Ein verkürzter Gastrocnemius, der größere, oberflächlichere Wadenmuskel, verlagert das Gewicht nach vorn auf den Vorfuß. In einer Fallserie mit 254\u00A0Personen mit Plantarfasziitis hatten 52 bis 60\u00A0% eine Kontraktur nur des Gastrocnemius (Patel und DiGiovanni, 2011).',
    'Mittelfußpolster (Pelotten), die direkt hinter den Mittelfußköpfchen sitzen, sind der am besten untersuchte konservative Ansatz bei Vorfußschmerzen.',
    'Morton-Neurom und Metatarsalgie überschneiden sich in den Beschwerden, unterscheiden sich aber im Ort: Der Schmerz beim Neurom sitzt typischerweise zwischen dem dritten und vierten Zeh, mit Kribbeln, die Metatarsalgie ist breiter.',
  ],
  sections: [
    {
      h2: 'Was ist der Fußballen?',
      figure: { id: 'ball', caption: 'Der Fußballen liegt unter den Enden der Mittelfußknochen. Der Schmerz bei Metatarsalgie sitzt oft unter dem zweiten und dritten.', alt: 'Fußknochen von oben, die Enden des zweiten, dritten und vierten Mittelfußknochens sind rot hervorgehoben.' },
      paragraphs: [
        'Der Fußballen ist der gepolsterte Bereich an der Sohle direkt hinter den Zehen. Darunter liegen die Köpfchen der fünf Mittelfußknochen, lange Knochen, die vom Mittelfuß bis zur Basis jedes Zehs reichen. Beim Gehen trägt der Fußballen in der Abdruckphase ungefähr das Doppelte deines Körpergewichts.',
        'Die Muskeln, die deine Zehen beugen und spreizen, heißen kurze Fußmuskeln. Sie helfen, diese Last beim Abdruck zu verteilen. Wenn sie schwächer werden oder sich der Aufbau des Fußes verändert, landet mehr Kraft auf den Mittelfußköpfchen, und genau dort fängt der Schmerz oft an.',
      ],
    },
    {
      h2: 'Was verursacht Schmerzen im Fußballen?',
      paragraphs: [
        '**Metatarsalgie** ist die häufigste Bezeichnung. Sie beschreibt Schmerz und Entzündung rund um eines oder mehrere Mittelfußköpfchen, meist das zweite und dritte. Überlastung, ein langer zweiter Mittelfußknochen, ein Hohlfuß und verkürzte Wadenmuskeln können alle dazu beitragen.',
        '**Morton-Neurom** ist eine Verdickung des Nervs zwischen den Mittelfußköpfchen, meist zwischen dem dritten und vierten Zeh. Es verursacht eher Brennen, Kribbeln oder Taubheit als einen reinen Schmerz. Enge Schuhe oder hohe Absätze drücken auf den Nerv und machen es schlimmer.',
        '**Sesamoiditis** ist eine Entzündung der zwei kleinen Knochen, die in der Sehne unter dem Großzehengrundgelenk liegen. Der Schmerz sitzt direkt unter dem großen Zeh und nicht unter der Mitte des Vorfußes.',
        '**Ermüdungsbruch eines Mittelfußknochens** ist ein kleiner Riss in einem der Mittelfußknochen, meist im zweiten oder dritten. Der Schmerz ist auf eine Stelle begrenzt, wird oft im Laufe des Tages schlimmer und kann nachts wehtun. Eine Schwellung oben auf dem Fuß ist häufig. Das braucht Bildgebung und Ruhe.',
        '**Krallenzehen und Hammerzehen** beugen die Zehengelenke nach unten, sodass der Zeh vom Boden abhebt und seine Last beim Abdruck auf das Mittelfußköpfchen dahinter verlagert.',
        '**Hohe Absätze und enge Schuhe** kippen das Gewicht nach vorn auf den Vorfuß und drücken die Mittelfußköpfchen zusammen, deshalb ist das Morton-Neurom bei Menschen, die sie tragen, häufiger.',
        '**Ein Hohlfuß** (Pes cavus, ein Fuß mit hohem, steifem Gewölbe) verkleinert die Auflagefläche der Sohle und bündelt den Druck auf Ferse und Fußballen. Am anderen Ende können auch [Plattfüße](/de/plattfuss-uebungen/) zu Vorfußschmerzen beitragen, weil sie verändern, wie der Fuß beim Abdruck abrollt.',
        '**Verkürzte Wadenmuskeln** sind eine unterschätzte Ursache. Wenn der Gastrocnemius, der größere, oberflächlichere Wadenmuskel, verkürzt ist, kann sich das Sprunggelenk beim Gehen nicht weit genug beugen. Der Körper hebt die Ferse zum Ausgleich früher an, was mehr Last auf den Vorfuß verlagert. Es ist derselbe Mechanismus wie bei der [Plantarfasziitis](/de/plantarfasziitis-uebungen/) und der [Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Wie unterscheidest du diese Erkrankungen?',
      paragraphs: [
        'Der Ort ist der erste Hinweis. Ein breiter Schmerz unter dem zweiten und dritten Mittelfußköpfchen deutet auf eine Metatarsalgie hin. Schmerz zwischen dem dritten und vierten Zeh mit Kribbeln spricht für ein Morton-Neurom. Schmerz direkt unter dem Großzehengrundgelenk passt eher zu einer Sesamoiditis. Eine begrenzte Stelle oben auf dem Fuß mit Schwellung wirft die Frage nach einem Ermüdungsbruch auf.',
        'Ermüdungsbrüche sind auf einem normalen Röntgenbild in den ersten zwei bis drei Wochen oft nicht zu sehen und brauchen manchmal ein MRT. Ein Besuch bei einer medizinischen Fachperson lohnt sich, wenn der Schmerz trotz Ruhe und anderer Schuhe länger als zwei Wochen anhält oder wenn Kribbeln, Schmerzen in der Nacht oder eine sichtbare Schwellung dazukommen.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Helfen Übungen bei Schmerzen im Fußballen?',
      keyFact: 'In einer Vorher-nachher-Studie von 2020 mit 41\u00A0Personen mit primärer Metatarsalgie senkte ein 8-wöchiges Programm mit Zehenübungen den Schmerz im Schnitt um 2,7\u00A0Punkte auf einer 10-Punkte-Skala, ohne Kontrollgruppe (Amaha und Kollegen, 2020).',
      paragraphs: [
        'Die ehrliche Antwort: Die Belege für Übungen bei Metatarsalgie sind früh und begrenzt. Sie sind viel dünner als die Belege bei [Plantarfasziitis](/de/plantarfasziitis-uebungen/) oder Achillessehnenentzündung, wo es randomisierte Studien gibt.',
        'Die bisher beste Studie ist eine Vorher-nachher-Studie von 2020 mit 41\u00A0Personen (56\u00A0Füße) mit primärer Metatarsalgie. Ein 8-wöchiges Programm mit Zehenübungen, vor allem Handtuchgreifen und Murmeln aufheben, senkte die Schmerzwerte im Schnitt um 2,7\u00A0Punkte auf einer 10-Punkte-Skala und verbesserte die Greifkraft der Zehen. Aber es gab keine Kontrollgruppe, die Besserung könnte also zum Teil eine natürliche Erholung sein. Die Autoren forderten randomisierte Studien.',
        'Die Logik ist einfach: Beim Abdruck helfen die Zehen, die Last mit den Mittelfußköpfchen zu teilen. Wenn die Zehenbeuger schwach sind, landet mehr Kraft auf den Mittelfußknochen. Die Studie von 2020 stützt diese Idee, aber eine unkontrollierte Studie ist kein Beweis. Wer die Beschwerden schon länger als ein Jahr hatte, besserte sich weniger, ebenso Menschen mit höherem BMI.',
      ],
      sourceNote:
        'Amaha 2020: 41\u00A0Patientinnen und Patienten, 56\u00A0Füße, Durchschnittsalter 63,4. Vorher-nachher-Design. VAS verbesserte sich von 5,2 auf 2,5 (p < 0,01). AOFAS verbessert, Murmeltest verbessert, Standzeit auf einem Bein verbessert (alle p < 0,01). Keine Kontrollgruppe.',
      cites: [CITE.amaha],
    },
    {
      h2: 'Macht eine verkürzte Wade Vorfußschmerzen schlimmer?',
      keyFact: 'Bei 254\u00A0Personen mit Plantarfasziitis hatten 52 bis 60\u00A0% eine Kontraktur nur des Gastrocnemius, eine verkürzte Wade, die auch mit Überlastung des Vorfußes in Verbindung steht (Patel und DiGiovanni, 2011).',
      paragraphs: [
        'Sehr wahrscheinlich. Wenn der Gastrocnemius verkürzt ist, kann sich das Sprunggelenk beim Gehen nicht genug beugen. Der Körper hebt die Ferse früher an, was mehr Gewicht auf den Fußballen bringt. Der Fachbegriff dafür ist funktioneller Spitzfuß (Equinus), und er ist eine anerkannte Ursache der Metatarsalgie.',
        'Die Zahlen stammen aus der Forschung zur Plantarfasziitis, aber der Mechanismus ist derselbe. Bei 254\u00A0Personen mit Plantarfasziitis hatten 52 bis 60\u00A0% eine Kontraktur nur des Gastrocnemius. Eine Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen fand, dass eine eingeschränkte Dorsalflexion im Sprunggelenk (wie weit sich der Fuß Richtung Schienbein beugen lässt) der stärkste unabhängige Risikofaktor war, mit 23,3-fachen Odds.',
        'Keine Studie hat Wadendehnung speziell bei Metatarsalgie getestet, aber der Zusammenhang ist klinisch anerkannt. Mehr zur Verbindung von Wade und Sprunggelenk findest du unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'Was ist mit Pelotten, Einlagen und Schuhen?',
      paragraphs: [
        'Mittelfußpolster, auch Pelotten genannt, sind der am weitesten verbreitete konservative Ansatz. Ein Polster direkt hinter den Mittelfußköpfchen hebt den Knochenschaft leicht an und verteilt den Druck auf eine größere Fläche. Die Position zählt. Zu weit vorn, direkt unter dem Köpfchen, kann es den Schmerz verstärken.',
        'Schuhe mit Abrollsohle verringern den Druck auf den Vorfuß, weil der Fuß beim Abdruck abrollen kann, ohne sich in den Mittelfußgelenken zu beugen. Eine breite Zehenbox verhindert, dass die Köpfchen zusammengedrückt werden. Auf enge Schuhe oder Absätze zu verzichten, ist oft der einfachste erste Schritt.',
        'Polster und Schuhe verändern, wie sich die Last verteilt. Übungen bauen die Kraft und Beweglichkeit auf, um diese Last zu tragen. Wenn [langes Stehen](/de/fussschmerzen-vom-stehen/) mit dazugehört, zählt beides.',
      ],
    },
    {
      h2: 'Welche Übungen helfen bei Schmerzen im Fußballen?',
      paragraphs: [
        'Diese Übungen zielen auf zwei Seiten des Problems: die Kraft der Zehen und kurzen Fußmuskeln (um die Last beim Abdruck zu teilen) und die Beweglichkeit der Wade (damit der Vorfuß nicht überlastet wird). Keine wurde speziell bei Metatarsalgie in einer randomisierten Studie getestet. Wenn du beim Check-in in Walkito auf der Schmerzkarte den Bereich Fußballen antippst, gibt dir die Entlastungseinheit Zehenspreizen und eine Plantarfaszien-Dehnung. Der Bereich Zehen gibt Zehenspreizen und den kurzen Fuß im Sitzen.',
      ],
      exercises: [
        {
          name: 'Zehenspreizen',
          dose: '3\u00A0Sätze à 10-mal spreizen',
          how: 'Setz oder stell dich hin, der Fuß steht flach. Spreiz alle fünf Zehen so weit auseinander, wie du kannst, halte 2 bis 3\u00A0Sekunden und lass dann locker. Das trainiert die kleinen Muskeln zwischen den Mittelfußknochen.',
          feel: 'Eine Dehnung zwischen den Zehen und leichte Anstrengung oben am Fuß',
          stop: 'Schmerz im Fußballen während der Übung',
          evidence: { level: 'early', why: 'Keine Studie bei Metatarsalgie. Die Übung zielt auf die kurzen Fußmuskeln, die helfen, die Last im Vorfuß zu verteilen.' },
          media: 'toe_spread',
          caption: 'Zehenspreizen: alle fünf Zehen auseinanderspreizen, halten, locker lassen',
          alt: 'Ein Fuß mit weit auseinandergespreizten Zehen, die Muskeln zwischen den Mittelfußknochen sind hervorgehoben',
        },
        {
          name: 'Handtuchgreifen (Zehen einrollen)',
          dose: '3\u00A0Sätze à 10-mal greifen, jeder Fuß',
          how: 'Setz dich hin, der Fuß steht flach auf einem Handtuch. Roll die Zehen ein, um das Handtuch zu dir heranzuziehen. Lass los und wiederhole. Das kommt dem am nächsten, was die Studie von 2020 verwendet hat.',
          feel: 'Die Muskeln unter dem Gewölbe und den Zehen arbeiten',
          stop: 'Schmerz im Fußballen während der Übung',
          evidence: { level: 'early', why: 'Die Studie Amaha 2020 nutzte ein ähnliches Programm mit Zehenübungen und fand bei 41\u00A0Personen eine Besserung der Schmerzen, hatte aber keine Kontrollgruppe.' },
          media: 'towel_scrunch',
          caption: 'Handtuchgreifen: Roll die Zehen ein, um das Handtuch heranzuziehen',
          alt: 'Ein Fuß auf einem Handtuch, die Zehen greifen das Handtuch, die kurzen Fußmuskeln sind hervorgehoben',
        },
        {
          name: 'Kurzer Fuß im Sitzen',
          dose: '3\u00A0Sätze à 10, jedes Mal 5\u00A0Sekunden halten',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Versuch, den Fuß zu verkürzen, indem du den Fußballen Richtung Ferse ziehst, ohne die Zehen einzurollen. Das Gewölbe sollte sich leicht heben. Das zielt auf die kurzen Fußmuskeln, die Gewölbe und Vorfuß von unten stützen.',
          feel: 'Eine Anspannung unter dem Gewölbe',
          stop: 'Schmerz im Fußballen während der Übung',
          evidence: { level: 'moderate', why: 'Eine Metaanalyse von 2024 zum Kurzer-Fuß-Training fand Verbesserungen der Fußhaltung. Nicht speziell bei Metatarsalgie getestet.' },
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß: das Gewölbe anheben, ohne die Zehen einzurollen',
          alt: 'Eine sitzende Figur mit einem Fuß auf dem Boden, das Gewölbe hebt sich leicht, die kurzen Fußmuskeln sind hervorgehoben',
        },
        {
          name: 'Großzehenheben',
          dose: '3\u00A0Sätze à 10, jeder Fuß',
          how: 'Stell oder setz dich hin, der Fuß steht flach. Heb nur den großen Zeh an, die anderen vier bleiben am Boden. Dann umgekehrt: Drück den großen Zeh nach unten und heb die anderen vier an. Wenn sich der große Zeh nicht richtig strecken kann, verlagert sich mehr Last auf die benachbarten Mittelfußköpfchen.',
          feel: 'Am Anfang schwierig, dann nach und nach mehr Kontrolle',
          stop: 'Schmerz unter dem Großzehengrundgelenk, der auf eine Sesamoiditis hindeuten kann',
          evidence: { level: 'early', why: 'Keine direkte Studie bei Metatarsalgie. Beruht auf der biomechanischen Rolle des großen Zehs beim Verteilen der Last im Vorfuß.' },
          media: 'big_toe_lift',
          caption: 'Großzehenheben: den großen Zeh anheben, die anderen bleiben unten',
          alt: 'Ein Fuß auf dem Boden, der große Zeh angehoben und die anderen vier flach, der Streckmuskel ist hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung',
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg den betroffenen Fuß über das andere Knie. Zieh die Zehen sanft nach hinten, bis du eine Dehnung entlang des Gewölbes spürst. Die Plantarfaszie verläuft von der Ferse bis zur Basis der Zehen, direkt durch den Fußballen.',
          feel: 'Eine Dehnung entlang des Gewölbes und der Fußunterseite',
          stop: 'Stechender Schmerz statt eines Dehngefühls',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen gibt der Plantarfaszien-Dehnung ihre beste Bewertung, A. Nicht speziell bei Metatarsalgie getestet, aber die Faszie gehört zur selben tragenden Struktur.' },
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen sanft nach hinten',
          alt: 'Eine Figur zieht die Zehen des übergeschlagenen Fußes nach hinten, die Plantarfaszie ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (gestrecktes Knie)',
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn. Halte, bis du die Dehnung in der oberen Wade spürst.',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Schmerz in der Achillessehne',
          evidence: { level: 'strong', why: 'Bewertung A in der Leitlinie von 2023 zu Fersenschmerzen für die Wadendehnung. Eine verkürzte Wade trägt anerkannt zur Überlastung des Vorfußes bei.' },
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, der Gastrocnemius ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (gebeugtes Knie)',
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position wie bei der Dehnung mit gestrecktem Knie, dann beug das hintere Knie, bis die Dehnung nach unten wandert, nahe der Achillessehne. Das zielt auf den Soleus, den tieferen Wadenmuskel, der nur mit gebeugtem Knie loslässt.',
          feel: 'Eine Dehnung weiter unten in der Wade, nahe der Ferse',
          stop: 'Schmerz in der Achillessehne',
          evidence: { level: 'strong', why: 'Dieselbe Bewertung A der Leitlinie. Zielt auf den Soleus, der ebenfalls zur Steifheit im Sprunggelenk beiträgt.' },
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis die Dehnung nach unten wandert',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, der Soleus ist hervorgehoben',
        },
      ],
      cites: [CITE.amaha, CITE.guideline, CITE.cheng],
    },
    {
      h2: 'Was die Studienlage sagt und was nicht',
      paragraphs: [
        'Die Belege für Übungen bei Schmerzen im Fußballen sind dünner als bei [Plantarfasziitis](/de/plantarfasziitis-uebungen/) oder Achillessehnenentzündung, wo es randomisierte Studien gibt. Für die Metatarsalgie gibt es eine Vorher-nachher-Studie mit 41\u00A0Personen und ohne Kontrollgruppe. Die biomechanische Begründung ist schlüssig, und das Risiko sanfter Zehenübungen und Wadendehnungen ist gering, aber der direkte Beweis aus einer kontrollierten Studie fehlt.',
        'Übungen allein reichen vielleicht nicht. Pelotten, Schuhe mit breiter Zehenbox und weniger Zeit in Absätzen haben einen breiteren klinischen Konsens. Beim Morton-Neurom sind andere Schuhe und Polster oft wirksamer als Übungen. Bei einem Ermüdungsbruch eines Mittelfußknochens sind Übungen der falsche Weg, bis der Knochen verheilt ist. Wenn der Schmerz schon mehr als ein paar Wochen anhält oder mit Taubheit oder Schwellung einhergeht, lass es zuerst abklären. [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) erklärt die Belastungssteuerung für Läuferinnen und Läufer.',
      ],
      cites: [CITE.amaha, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Was ist eine Metatarsalgie?',
      cites: [CITE.amaha],
      a: 'Metatarsalgie ist Schmerz und Entzündung rund um die Mittelfußköpfchen, die Knochenenden am Fußballen. Sie beschreibt, wo es wehtut, und ist keine einzelne Diagnose. Häufige Ursachen sind Überlastung, ein Hohlfuß, verkürzte Wadenmuskeln und geschwächte Zehenbeuger. In einer Studie mit 41\u00A0Personen verbesserten Zehenübungen den Schmerz im Schnitt um 2,7\u00A0Punkte auf einer 10-Punkte-Skala (Amaha 2020).',
    },
    {
      q: 'Metatarsalgie oder Morton-Neurom, wie erkenne ich den Unterschied?',
      a: 'Metatarsalgie ist ein dumpfer bis stechender Schmerz breit unter dem Fußballen. Das Morton-Neurom ist genauer: Brennen, Kribbeln oder Taubheit zwischen dem dritten und vierten Zeh, manchmal mit einem Klicken, wenn man den Vorfuß zusammendrückt. Eine medizinische Fachperson kann beides mit einer körperlichen Untersuchung und Ultraschall unterscheiden.',
    },
    {
      q: 'Helfen Zehenübungen bei Schmerzen im Fußballen?',
      cites: [CITE.amaha],
      a: 'Die Belege sind früh. Eine Studie mit 41\u00A0Personen fand, dass 8\u00A0Wochen Zehenübungen Schmerz und Greifkraft verbesserten, aber sie hatte keine Kontrollgruppe, und die Autoren forderten randomisierte Studien (Amaha 2020). Die Idee ist schlüssig: Kräftigere Zehen sollten mehr von der Last beim Abdruck übernehmen. Aber der direkte Beweis aus einer kontrollierten Studie fehlt.',
    },
    {
      q: 'Warum verursacht eine verkürzte Wade Schmerzen im Fußballen?',
      cites: [CITE.patelGastrocnemius, CITE.riddle],
      a: 'Wenn der Gastrocnemius, der größere, oberflächlichere Wadenmuskel, verkürzt ist, kann sich das Sprunggelenk beim Gehen nicht genug beugen. Der Körper gleicht das aus, indem er die Ferse früher anhebt, was mehr Gewicht auf den Fußballen verlagert. Bei Menschen mit Plantarfasziitis hatten 52 bis 60\u00A0% eine Kontraktur nur des Gastrocnemius (Patel und DiGiovanni, 2011). Derselbe Mechanismus trägt zur Überlastung des Vorfußes bei.',
    },
    {
      q: 'Helfen Pelotten bei Schmerzen im Fußballen?',
      a: 'Mittelfußpolster (Pelotten) sind der am weitesten verbreitete konservative Ansatz bei Vorfußschmerzen. Sie heben den Mittelfußknochen direkt hinter der schmerzhaften Stelle an und verteilen den Druck auf eine größere Fläche. Die Position zählt: Das Polster sollte direkt hinter den Mittelfußköpfchen sitzen, nicht direkt darunter, sonst kann es den Schmerz verstärken.',
    },
    {
      q: 'Können Schmerzen im Fußballen ein Ermüdungsbruch sein?',
      cites: [CITE.patelStressFracture],
      a: 'Ja. Ermüdungsbrüche der Mittelfußknochen, meist des zweiten oder dritten, verursachen einen begrenzten Schmerz, der im Laufe des Tages schlimmer wird und nachts wehtun kann. Eine Schwellung oben auf dem Fuß ist häufig. Ein Ermüdungsbruch ist auf einem normalen Röntgenbild in den ersten zwei bis drei Wochen oft nicht zu sehen und braucht manchmal ein MRT. Das ist einer der Gründe, zu einer medizinischen Fachperson zu gehen, wenn Vorfußschmerzen anhalten.',
    },
    {
      q: 'Welche Schuhe sind gut bei Schmerzen im Fußballen?',
      a: 'Schuhe mit breiter Zehenbox, gedämpfter Sohle und niedrigem Absatz. Schuhe mit Abrollsohle helfen, weil der Fuß beim Abdruck abrollen kann, ohne sich in den Mittelfußgelenken zu beugen. Enge Schuhe und hohe Absätze bewirken das Gegenteil. Gerade beim Morton-Neurom ist der Wechsel der Schuhe oft der wirksamste einzelne Schritt.',
    },
    {
      q: 'Wie lange dauert ein Metatarsalgie-Schub?',
      a: 'Eine feste Dauer gibt es nicht. Ein leichter Schub beruhigt sich oft, sobald du die auslösende Aktivität verringerst, auf gedämpfte, breitere Schuhe wechselst und eine Pelotte dazunimmst. Schübe, die mit einer anhaltenden Ursache zusammenhängen, etwa hohen Absätzen, Krallenzehen oder einer verkürzten Wade, können Monate dauern, weil keine einzelne Zeitspanne zu jeder Ursache passt.',
    },
    {
      q: 'Was passiert, wenn eine Metatarsalgie nicht behandelt wird?',
      a: 'Wenn du nichts dagegen tust, kann eine Metatarsalgie verändern, wie du gehst, weil man das Gewicht automatisch von der schmerzhaften Stelle auf andere Teile des Fußes verlagert, was neue Schmerzstellen schaffen kann. Anhaltender Druck auf die Mittelfußköpfchen kann auch zu Hornhaut beitragen oder, seltener, zu Fehlstellungen der Zehen wie Hammerzehen. Früh andere Schuhe und Pelotten verringern dieses Risiko.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'Kribbeln, Brennen oder Taubheit in den Zehen auftreten, was auf ein Nervenproblem wie ein Morton-Neurom hindeuten kann',
      'der Schmerz auf eine Stelle begrenzt ist und im Laufe des Tages schlimmer wird, was auf einen Ermüdungsbruch hindeuten kann',
      'oben auf dem Fuß eine sichtbare Schwellung ist',
      'der Schmerz nach einer plötzlichen Steigerung der Aktivität, einem Sturz oder einem Stoß angefangen hat',
      'das Großzehengrundgelenk steif oder blockiert ist oder sich nicht nach hinten beugen lässt',
      'der Schmerz nach zwei Wochen Ruhe, anderen Schuhen und Polstern nicht besser wird',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
      'beide Füße wehtun und andere Gelenke geschwollen oder steif sind',
      'der Schmerz dich nachts weckt oder auch in Ruhe da ist',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du kannst die Übungen auf dieser Seite allein machen, oder du lässt Walkito sie für dich planen. Die App baut einen Plan, Woche für Woche. Wenn du auf der Schmerzkarte den Fußballen markierst, setzt die Einheit nach dem Check-in auf Zehenspreizen und Plantarfaszien-Dehnung. Das breitere Programm nimmt im Lauf der Wochen Wadendehnung und Wadenkräftigung dazu.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald dieses Ziel erreicht ist) prüft ein kurzer Test deinen Fortschritt, sodass du siehst, was sich verändert. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn deine Vorfußschmerzen mit Taubheit, Schwellung oder einem Knoten einhergehen, geh zuerst zu einer medizinischen Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Schmerzen im Fußballen',
  campaign: 'guide-ball-of-foot-de',
};
