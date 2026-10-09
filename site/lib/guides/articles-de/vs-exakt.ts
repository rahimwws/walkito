import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/vs-exakt.ts`, written around the German queries
 * «Walkito oder Exakt Health», «Exakt Health Erfahrungen», «Exakt Health
 * Kosten». Informal «du». Prices stay in US dollars as listed on the US App
 * Store, with German decimal commas. Every fact, rating and the October 2026
 * check date is identical to the English page.
 */

export const VS_EXAKT_DE: Guide = {
  lang: 'de',
  page: 'vsExakt',
  published: '2026-10-08',
  updated: '2026-10-09',
  title: 'Walkito vs Exakt Health: direkter Vergleich (2026)',
  description:
    'Walkito und Exakt Health im Vergleich: Beschwerden, Preise, Plattformen, wie dein Plan entsteht, Studienlage, Sprachen, Datenschutz. Stand Oktober 2026.',
  h1: 'Walkito vs Exakt Health: welche App passt zu dir?',
  lede:
    'Walkito und Exakt Health bieten beide Übungspläne bei Plantarfasziitis an, sind aber für unterschiedliche Menschen gebaut. Exakt ist eine App für Läuferinnen und Läufer mit über 15\u00A0Reha-Plänen für Verletzungen und einem Programm für den Wiedereinstieg ins Laufen. Walkito ist eine schmalere App, die sich auf Fersenschmerzen, Plattfüße und die tägliche Anpassung an den Schmerz konzentriert. Diese Seite vergleicht beide ehrlich, sagt, wo Exakt die bessere Wahl ist, und erklärt, was Walkito anders macht.',
  intro: [
    'Diese Seite stammt von Walkito. Deshalb solltest du die Fakten zu Exakt lesen (sie stammen aus dem App-Store-Eintrag, dem Google-Play-Eintrag und der offiziellen Website, alle im Oktober 2026 geprüft) und selbst entscheiden. Links zu allen Quellen stehen unter der Vergleichstabelle.',
  ],
  takeaways: [
    'Exakt Health deckt über 15\u00A0Laufverletzungen ab und enthält Trainingspläne für das Laufen von 5\u00A0km bis Marathon. Walkito deckt nur Fersenschmerzen, Plattfüße und Schienbeinschmerzen ab.',
    'Exakt und Walkito gibt es beide für iOS und Android.',
    'Exakt Health ist in der EU als Medizinprodukt zertifiziert. Walkito ist kein Medizinprodukt.',
    'Walkito passt jede Einheit nach einem Schmerz-Check-in am Morgen an und testet alle 14\u00A0Tage den Unterschied zwischen links und rechts. Exakt passt den Plan nach dem Feedback am Ende jeder Einheit an.',
    'Exakt kostet 19,99\u00A0$/Monat oder 59,99\u00A0$ für sechs Monate. Walkito kostet 44,99\u00A0$/Jahr oder 7,99\u00A0$/Woche.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Direkter Vergleich',
      paragraphs: [
        'Jeder Fakt zu Exakt unten wurde im Oktober 2026 mit dem App-Store-Eintrag, dem Google-Play-Eintrag und exakthealth.com abgeglichen. Jeder Fakt zu Walkito stammt aus den Einträgen von Walkito im App Store und bei Google Play, von walkito.site und aus dem Quellcode der App.',
      ],
      table: {
        caption: 'Walkito vs Exakt Health (Stand: Oktober 2026)',
        head: ['', 'Walkito', 'Exakt Health'],
        rows: [
          [
            'Schwerpunkt',
            'Fersenschmerzen, Plattfüße, Schienbeinschmerzen, den ganzen Tag stehen',
            'Laufverletzungen (über 15) und Lauftraining (5\u00A0km bis Marathon)',
          ],
          [
            'Plattformen',
            'iOS und Android',
            'iOS und Android',
          ],
          [
            'Preise',
            '44,99\u00A0$/Jahr oder 7,99\u00A0$/Woche',
            '19,99\u00A0$/Monat, 39,99\u00A0$/3\u00A0Monate oder 59,99\u00A0$/6\u00A0Monate (Reha); Laufpläne bis 99,99\u00A0$/Jahr',
          ],
          [
            'Kostenlose Testphase',
            'Im App Store nicht angegeben (die Nutzungsbedingungen erlauben Einführungsangebote)',
            '7\u00A0Tage kostenlos testen',
          ],
          [
            'Dauer einer Einheit',
            '3, 5 oder 10\u00A0Minuten',
            'Je nach Plan (meist 15-30\u00A0Minuten)',
          ],
          [
            'Anpassung an den Schmerz',
            'Check-in am Morgen passt jede Einheit an; 7/10 oder mehr wechselt zu leichter Arbeit im Sitzen',
            'Feedback am Ende der Einheit steuert den Fortschritt durch die Level',
          ],
          [
            'Fortschrittstests',
            'Alle 14\u00A0Tage: Fersenheben, Gewölbehalten, Gleichgewicht, Vergleich links und rechts',
            'Dynamische Fortschrittsverfolgung über die Level des Plans',
          ],
          [
            'Übungsvideos',
            'Ja, Clips in der App für jede Übung',
            'Ja, über 600\u00A0Übungsvideos',
          ],
          [
            'Wiedereinstieg ins Laufen',
            'Nicht enthalten (passt sich über die Schritte aus Apple Health oder Health Connect an die Laufbelastung an)',
            'Ja, Geh-Lauf-Programm am Ende jedes Reha-Plans',
          ],
          [
            'Sprachen',
            'Englisch, Russisch, Spanisch',
            'Englisch, Französisch, Deutsch, Spanisch',
          ],
          [
            'Medizinprodukt',
            'Nein',
            'Ja, in der EU zertifiziert',
          ],
          [
            'Zugang zu Fachpersonen',
            'Keiner (nur Übungsprogramm)',
            'Keiner in der App (entwickelt von zugelassenen Sportphysiotherapeuten)',
          ],
          [
            'Gesundheitsdaten',
            'Apple Health auf dem iPhone (Schritte, Schlaf, Gangasymmetrie, Gehgeschwindigkeit, Herzfrequenz); Health Connect auf Android (Schritte, Trainingseinheiten, Distanz, Schlaf)',
            'Smartwatch-Anbindung für das Tracking beim Laufen',
          ],
          [
            'Datenschutz',
            'Daten aus Apple Health und Health Connect bleiben auf dem Gerät. Schmerzwerte und Einheiten werden mit dem Konto synchronisiert. Kein Werbetracking.',
            'Kennungen werden zum Tracking genutzt. Finanzdaten werden erhoben. Daten bei der Übertragung verschlüsselt. Löschung möglich.',
          ],
          [
            'Bewertung im App Store',
            'Noch keine Bewertung (erschienen am 2.\u00A0Oktober 2026)',
            '4,8 von 5 (125\u00A0Bewertungen)',
          ],
          [
            'Entwickler',
            'Aigum Kalasov',
            'Exakt Health GmbH (Berlin)',
          ],
        ],
      },
      sourceNote:
        'Quellen zu Exakt: App Store (apps.apple.com/us/app/exakt-running-pt-trainer/id1638338198), Google Play (play.google.com/store/apps/details?id=exakt.mobile.android.release), exakthealth.com/en-US/pricing, exakthealth.com/en-US/about-us. Quellen zu Walkito: App Store (apps.apple.com/app/id6813076846), Google Play (play.google.com/store/apps/details?id=com.walkito.app), walkito.site.',
    },
    {
      h2: 'Für wen ist Exakt Health gemacht?',
      paragraphs: [
        'Exakt Health ist für Läuferinnen und Läufer gemacht. Das ist der Kern der App, und alles darin spiegelt das wider. Wenn du läufst und dich von einer Plantarfasziitis, einer Achillessehnen-Tendinopathie, einem verstauchten Sprunggelenk, einer Zerrung der hinteren Oberschenkelmuskulatur oder einem Meniskusriss erholst, hat Exakt einen eigenen Reha-Plan für deine Verletzung. Die App deckt über 15 verschiedene Beschwerden ab.',
        'Jeder Reha-Plan endet mit einem Geh-Lauf-Programm für den Wiedereinstieg ins Laufen, einem der Teile der Erholung, die man allein am schwersten richtig hinbekommt. Die App hat außerdem Trainingspläne für jede Distanz, vom Einstieg bis 5\u00A0km bis zum Marathon.',
        'Exakt wurde 2021 von Philip Billaudelle, Lucia Payo und Maryke Louw gegründet. Die App wird von zugelassenen Sportphysiotherapeuten und Lauftrainern entwickelt und hat im September 2024 etwa 2,2\u00A0Mio.\u00A0EUR Seed-Finanzierung eingesammelt. Das Team sitzt in Berlin.',
        'Die App ist in der EU als Medizinprodukt zertifiziert, sie hat also die behördliche Prüfung für ihren vorgesehenen Zweck bestanden.',
        '**Wenn du läufst und sowohl Reha nach einer Verletzung als auch einen strukturierten Trainingsplan brauchst, ist Exakt schwer zu schlagen.** Die Bewertung von 4,8 bei 125\u00A0iOS-Bewertungen und über 100.000\u00A0Downloads bei Android zeigen, dass die App für ihre Zielgruppe funktioniert.',
      ],
    },
    {
      h2: 'Für wen ist Walkito gemacht?',
      paragraphs: [
        'Walkito ist für Menschen gemacht, denen die Füße wehtun und die einen kurzen täglichen Übungsplan wollen, der sich daran anpasst, wie sie sich jeden Morgen fühlen. Dazu gehören:',
        {
          list: [
            'Plantarfasziitis.',
            'Flexible Plattfüße.',
            'Schienbeinschmerzen.',
          ],
        },
        'Die App ist auch für Menschen gemacht, die den ganzen Tag auf den Beinen sind: Pflegekräfte, Beschäftigte im Einzelhandel, im Lager.',
        'Die App ist schmaler als Exakt. Sie deckt keine Knieverletzungen, keine Zerrungen der hinteren Oberschenkelmuskulatur und keine Laufpläne ab. Was sie anders macht: **Sie passt die Einheit jedes Tages nach einem Schmerz-Check-in am Morgen an** statt nach dem Feedback am Ende der Einheit.',
        'Ein Morgen mit 7/10 oder mehr stellt den Tag auf etwa drei Minuten Arbeit im Sitzen um. Ein großer Tag auf den Beinen (gemessen über die Schritte in Apple Health oder Health Connect) macht aus der nächsten Krafteinheit eine leichtere Erholungseinheit.',
        'Walkito testet den Fortschritt alle 14\u00A0Tage mit Fersenheben, Gewölbehalten und Einbeinstand und vergleicht deine linke mit deiner rechten Seite. Diesen Vergleich zwischen links und rechts verfolgen die meisten Apps in diesem Bereich nicht.',
        'Walkito ist am 2.\u00A0Oktober 2026 erschienen. Die App ist neu, hat noch keine Bewertungen von Nutzern und läuft auf iOS und Android. Sie hat nicht die Erfolgsgeschichte oder Bandbreite, die Exakt seit 2021 aufgebaut hat.',
      ],
    },
    {
      h2: 'Wie baut jede App deinen Plan?',
      paragraphs: [
        'Exakt fragt nach deiner Verletzung, deiner Erfahrung und deinem Wochenplan und teilt dir dann einen strukturierten Reha-Plan mit Leveln zu. Du steigst durch die Level auf, je nachdem, wie jede Einheit läuft. Wenn die Reha abgeschlossen ist, kannst du direkt zu einem Lauftrainingsplan wechseln, ohne neu anzufangen.',
        'Walkito fragt nach dem Ort des Schmerzes, der Seite, deinem Aktivitätsniveau, deinem Ziel und wie viele Tage und Minuten du hast. Die App baut einen Wochenplan rund um messbare Ziele:',
        {
          list: [
            'Schmerzfreie Morgen.',
            '60\u00A0Sekunden Gewölbehalten.',
            '25-mal einbeiniges Fersenheben.',
            '30\u00A0Sekunden Einbeinstand.',
            'Symmetrie zwischen links und rechts.',
          ],
        },
        'Jede Woche baut sie den Plan neu auf, je nachdem, wie die Vorwoche gelaufen ist. Es steht immer ein Ziel im Mittelpunkt. Wenn ein Ziel erreicht ist, geht es in die Erhaltung über, und das nächste Ziel beginnt.',
        'Der Hauptunterschied: Exakt folgt einem strukturierten Fortschritt über Level. Walkito folgt einem Fortschritt über Ziele, bei dem der Check-in jeden Morgen die Intensität des Tages anpasst.',
      ],
    },
    {
      h2: 'Welche Beschwerden deckt jede App ab?',
      keyFact: 'Die Übungen von Walkito folgen der Leitlinie von 2023 zu Fersenschmerzen, die das Dehnen von Plantarfaszie und Wade mit A und Krafttraining mit B bewertet (Koc und Kollegen, 2023).',
      paragraphs: [
        '**Hier ist Exakt klar stärker.** Die Reha-Pläne decken Plantarfasziitis, Achillessehnen-Tendinopathie, verstauchte Sprunggelenke, Zerrungen der hinteren Oberschenkelmuskulatur, Meniskusrisse, Läuferknie und mehr ab. Wenn dein Schmerz im Knie, in der Hüfte oder im hinteren Oberschenkel sitzt, hat Walkito keinen Plan dafür.',
        'Walkito deckt Plantarfasziitis, (flexible) Plattfüße, Fersenschmerzen vom Stehen und Schienbeinschmerzen ab. Die Übungen folgen der Leitlinie von 2023 zu Fersenschmerzen (Dehnen Bewertung A, Kraft Bewertung B) und der Rathleff-Studie von 2015 (Fersenheben mit Zusatzgewicht bei Plantarfasziitis). Für genau diese Beschwerden gibt es Übungen, eine Logik für die Steigerung und Anpassung an den Schmerz. Für alles außerhalb davon ist Exakt oder eine breitere App wie Prehab die richtige Wahl.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Was kosten Walkito und Exakt Health?',
      paragraphs: [
        'Walkito kostet 44,99\u00A0$ pro Jahr oder 7,99\u00A0$ pro Woche. Der Jahrespreis entspricht etwa 0,87\u00A0$ pro Woche. Im App Store ist keine kostenlose Testphase angegeben, aber die Nutzungsbedingungen erlauben Einführungsangebote.',
        'Exakt kostet 19,99\u00A0$ pro Monat für die Reha-Pläne, mit Optionen für 3\u00A0Monate (39,99\u00A0$) und 6\u00A0Monate (59,99\u00A0$). Lauftrainingspläne kosten bis zu 99,99\u00A0$ pro Jahr. Jedes Abo beginnt mit einer 7-tägigen kostenlosen Testphase.',
        'Über ein ganzes Jahr:',
        {
          list: [
            'Walkito kostet im Jahresabo 44,99\u00A0$.',
            'Die günstigste Reha-Option von Exakt (6-Monats-Plan, zweimal verlängert) kostet etwa 120\u00A0$.',
            'Mit einem Laufplan kann Exakt über 200\u00A0$ im Jahr kosten.',
          ],
        },
        'Wenn du nur Übungen gegen Fersen- oder Fußschmerzen brauchst, **ist Walkito deutlich günstiger.** Wenn du Reha nach einer Laufverletzung plus einen Trainingsplan brauchst, deckt der höhere Preis von Exakt mehr ab.',
      ],
    },
    {
      h2: 'Plattformen und Sprachen',
      paragraphs: [
        'Exakt Health und Walkito gibt es beide für iOS und Android. Bei der Plattform unterscheiden sich die beiden also nicht.',
        'Exakt unterstützt Englisch, Französisch, Deutsch und Spanisch. Walkito unterstützt Englisch, Russisch und Spanisch. Die Überschneidung sind Englisch und Spanisch. Wenn du Französisch oder Deutsch brauchst, ist Exakt die einzige Option. Wenn du Russisch brauchst, ist Walkito die einzige Option.',
      ],
    },
    {
      h2: 'Datenschutz',
      paragraphs: [
        'Auf dem iPhone liest Walkito Daten aus Apple Health (Schritte, Schlaf, Gangasymmetrie, Gehgeschwindigkeit, Ruhepuls), auf Android aus Health Connect (Schritte, Trainingseinheiten, Distanz, Schlaf). Gangasymmetrie und Gehgeschwindigkeit gibt es nur auf dem iPhone. Die Daten bleiben auf dem Gerät. Sie werden nie hochgeladen. Mit dem Walkito-Konto synchronisiert werden Schmerzwerte, Daten zu den Einheiten und Testergebnisse. Es gibt kein Werbetracking.',
        'Das Datenschutz-Label von Exakt Health im App Store führt Kennungen als Daten auf, die zum Tracking genutzt werden, und Käufe, Kennungen, Nutzungsdaten und Diagnosedaten als Daten, die erhoben, aber nicht mit deiner Identität verknüpft werden. Der Eintrag bei Google Play gibt an:',
        {
          list: [
            'Es werden keine Daten an Dritte weitergegeben.',
            'Finanzdaten können erhoben werden.',
            'Daten sind bei der Übertragung verschlüsselt.',
            'Eine Löschung ist möglich.',
          ],
        },
        'Beide Apps erheben übliche Nutzungsdaten. **Keine verkauft Gesundheitsdaten.** Der Ansatz von Walkito, die Gesundheitsdaten auf dem Gerät zu lassen, ist das strengere Datenschutzmodell.',
      ],
    },
    {
      h2: 'Auf welcher Studienlage baut jede App auf?',
      paragraphs: [
        'Exakt Health ist in der EU (Deutschland) als Medizinprodukt zertifiziert, was Nachweise zur Sicherheit und zum vorgesehenen Zweck verlangt. Die App wird von zugelassenen Sportphysiotherapeuten entwickelt. Sie gibt an, dass ihre Methoden evidenzbasiert sind, nennt aber im App-Store-Eintrag und auf der Preisseite keine bestimmten Studien.',
        'Walkito nennt seine Quellen auf der Website. Die Übungen folgen:',
        {
          list: [
            'Der klinischen Leitlinie von 2023 zu Fersenschmerzen (Koc und Kollegen, JOSPT).',
            'Der Rathleff-Studie von 2015 zu schwerem Fersenheben.',
            'Der Brijwasi-Studie von 2023 zu Übungen bei Plattfüßen und weiteren.',
          ],
        },
        'Jede Übung in der App hat ein Evidenzniveau (stark, mittel oder früh) mit einer Erklärung in einer Zeile.',
        '**Keine der beiden Apps hat eine eigene klinische Studie veröffentlicht.** Beide stützen sich auf vorhandene Forschung, umgesetzt in ihren jeweiligen Programmen.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Wann ist Exakt Health die bessere Wahl?',
      paragraphs: [
        'Nimm Exakt Health, wenn einer dieser Punkte zutrifft:',
      ],
      bullets: [
        'Du läufst, erholst dich von einer Laufverletzung und willst einen strukturierten Plan für den Wiedereinstieg ins Laufen.',
        'Deine Verletzung ist keine Plantarfasziitis und kein Plattfuß. Exakt deckt über 15 Beschwerden ab, Walkito drei.',
        'Du willst die App 7\u00A0Tage kostenlos testen, bevor du zahlst.',
        'Die Zertifizierung als Medizinprodukt in der EU ist dir wichtig.',
        'Du brauchst die App auf Französisch oder Deutsch.',
      ],
    },
    {
      h2: 'Wann ist Walkito die bessere Wahl?',
      paragraphs: [
        'Nimm Walkito, wenn einer dieser Punkte zutrifft:',
      ],
      bullets: [
        'Dein Schmerz ist genau Fersenschmerz, Plantarfasziitis oder Plattfuß, und du willst ein Programm, das sich darauf konzentriert.',
        'Du willst Einheiten von 3 bis 10\u00A0Minuten statt 15 bis 30.',
        'Die tägliche Anpassung an den Schmerz über einen Check-in am Morgen ist dir wichtiger als ein Fortschritt über Level.',
        'Du willst alle 14\u00A0Tage Fortschrittstests, die links und rechts vergleichen.',
        'Der Preis zählt: Walkito ist mit 44,99\u00A0$ pro Jahr weniger als halb so teuer wie die günstigsten Jahreskosten von Exakt.',
        'Du brauchst die App auf Russisch.',
        'Du bist für die Arbeit den ganzen Tag auf den Beinen, läufst aber nicht, und willst eine App, die dafür gemacht ist.',
      ],
    },
  ],
  faq: [
    {
      q: 'Ist Exakt Health besser als Walkito?',
      a: 'Das hängt davon ab, was du brauchst. Exakt Health deckt über 15\u00A0Laufverletzungen ab und enthält Pläne für den Wiedereinstieg ins Laufen. Die App gibt es für iOS und Android, und sie ist in der EU als Medizinprodukt zertifiziert. Walkito konzentriert sich auf Fersenschmerzen und Plattfüße, mit täglicher Anpassung an den Schmerz und kürzeren Einheiten. Wer läuft und verschiedene Verletzungen hat, ist mit Exakt besser bedient. Für Fersenschmerzen mit täglicher Anpassung ist Walkito gemacht.',
    },
    {
      q: 'Ist Walkito günstiger als Exakt Health?',
      a: 'Ja, aufs Jahr gerechnet. Walkito kostet 44,99\u00A0$ pro Jahr. Die günstigste Reha-Option von Exakt Health kostet 59,99\u00A0$ für sechs Monate, also etwa 120\u00A0$ pro Jahr. Exakt bietet 7\u00A0Tage kostenlos zum Testen, Walkito gibt im App Store derzeit keine Testphase an.',
    },
    {
      q: 'Hat Exakt Health einen Plan bei Plantarfasziitis?',
      a: 'Ja. Exakt Health hat einen eigenen Reha-Plan bei Plantarfasziitis, dazu Pläne bei Achillessehnen-Tendinopathie, verstauchtem Sprunggelenk, Zerrungen der hinteren Oberschenkelmuskulatur, Meniskusrissen und mehr. Der Plan bei Plantarfasziitis endet mit einem Geh-Lauf-Programm für einen sicheren Wiedereinstieg ins Laufen, und die App passt den Plan an, während du durch die Level aufsteigst.',
    },
    {
      q: 'Gibt es Walkito für Android?',
      a: 'Ja. Seit Oktober 2026 gibt es Walkito bei Google Play, zusätzlich zum App Store. Auf Android liest die App Health Connect (Schritte, Trainingseinheiten, Distanz, Schlaf); Gangasymmetrie und Gehgeschwindigkeit werden nur auf dem iPhone gemessen. Exakt Health gibt es ebenfalls für Android und iOS.',
    },
    {
      q: 'Ist Exakt Health ein Medizinprodukt?',
      a: 'Ja. Exakt Health ist in der EU (Deutschland) als Medizinprodukt zertifiziert. Das heißt, die App hat die behördliche Prüfung zu Sicherheit und vorgesehenem Zweck bestanden. Walkito ist kein Medizinprodukt und beansprucht nicht, Diagnosen zu stellen oder medizinischen Rat zu geben.',
    },
    {
      q: 'Welche App passt sich mehr an den täglichen Schmerz an?',
      a: 'Walkito passt jede Einheit nach einem Schmerz-Check-in am Morgen an, bevor du anfängst. Ein Wert von 7/10 oder mehr macht die Einheit leichter. Ein Tag mit vielen Schritten löst am nächsten Tag eine Erholungseinheit aus. Exakt passt den Plan danach an, wie du jede Einheit nach dem Ende bewertest. Der Ansatz von Walkito reagiert stärker auf tägliche Schwankungen beim Schmerz, der von Exakt konzentriert sich mehr auf den Fortschritt im gesamten Plan.',
    },
  ],
  redFlags: {
    h2: 'Wenn eine App nicht reicht: Geh zu einer medizinischen Fachperson, wenn',
    bullets: [
      'dein Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'Taubheit, Kribbeln, Brennen, Schwellung oder Wärme dazukommen',
      'der Schmerz dich nachts weckt oder auch in Ruhe da ist',
      'es wehtut, wenn du die Seiten der Ferse zusammendrückst, was eher auf einen Ermüdungsbruch als auf eine Plantarfasziitis hindeuten kann',
      'der Schmerz trotz regelmäßiger Übungen von Woche zu Woche schlimmer wird',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Wenn Walkito nach der richtigen Wahl für deine Situation klingt, so funktioniert es. Du beantwortest Fragen dazu, wo es wehtut, welche Seite, wie aktiv du bist und was dein Ziel ist. Walkito baut einen Wochenplan rund um messbare Ziele, angefangen mit schmerzfreien Morgen. Jeden Morgen passt ein Check-in den Tag an.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage misst ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht und zeigt den Unterschied zwischen deiner linken und rechten Seite. Die Übungen folgen der klinischen Leitlinie von 2023 und der Rathleff-Studie von 2015. Walkito ist ein Übungsprogramm, keine Diagnose und kein Ersatz für eine medizinische Fachperson.',
    ],
    cta: 'Probier Walkito auf dem iPhone oder unter Android aus.',
  },
  crumb: 'Walkito vs Exakt Health',
  campaign: 'compare-exakt-de',
};
