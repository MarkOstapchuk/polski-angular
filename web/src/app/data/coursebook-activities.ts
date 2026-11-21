import { Activity, ActivityKind, choice, typed } from './lesson-types';

export const COURSEBOOK_ACTIVITIES: Record<number, Activity[]> = {
  1: [
    {
      id: 'cb01-dialogues',
      sourceExerciseId: 'CB-L01-E02',
      sourceLabel: 'Podręcznik · lekcja 1 · str. 7',
      kind: ActivityKind.Typed,
      title: 'Pierwszy dzień w szkole (Podręcznik)',
      instruction: 'Uzupełnij powitania i przedstawianie się w dialogach.',
      items: [
        typed('q1', 'Studentka: Dzień ___.', 'dobry'),
        typed('q2', 'Studentka: ___ się Mami Takada.', 'Nazywam'),
        typed('q3', 'Sekretarka: Bardzo ___ miło.', 'mi'),
        typed('q4', 'Studentka: ___ mi.', 'Miło'),
        typed('q5', 'Student: Cześć, ___ Tom, a ty?', 'jestem'),
        typed('q6', 'Studentka: ___, jestem Mami.', 'Cześć'),
      ],
    },
  ],
  2: [
    {
      id: 'cb02-byc-dialogue',
      sourceExerciseId: 'CB-L02-E01',
      sourceLabel: 'Podręcznik · lekcja 2 · str. 14',
      kind: ActivityKind.Typed,
      title: 'Gdzie jesteś? Gdzie jesteście? (Podręcznik)',
      instruction: 'Posłuchaj i uzupełnij dialog formami czasownika „być” z ramki.',
      audioUrl: '/assets/coursebook_audio/102c1.mp3',
      audioLabel: 'Podręcznik 102C1 — Gdzie jesteś?',
      items: [
        typed('q1', 'Uwe: Mami, gdzie ty ___?', 'jesteś'),
        typed('q2', 'Mami: ___ tutaj.', 'Jestem'),
        typed('q3', 'Uwe: A gdzie ___ Angela?', 'jest'),
        typed('q4', 'Tom: Gdzie wy ___?', 'jesteście'),
        typed('q5', 'Mami: (My) ___ tutaj,', 'jesteśmy'),
        typed('q6', 'a oni ___ tam.', 'są'),
        typed('q7', 'Uwe: Gdzie ___ Angela i Mami?', 'są'),
        typed('q8', 'Państwo Maj ___ w Krakowie.', 'są'),
      ],
    },
  ],
  3: [
    {
      id: 'cb03-kto-co-dialogue',
      sourceExerciseId: 'CB-L03-E03',
      sourceLabel: 'Podręcznik · lekcja 3 · str. 22',
      kind: ActivityKind.Typed,
      title: 'Kto to jest? Co to jest? (Podręcznik)',
      instruction: 'Posłuchaj i uzupełnij dialog wyrazami z ramki.',
      audioUrl: '/assets/coursebook_audio/103a4.mp3',
      audioLabel: 'Podręcznik 103A4 — Mami i Javier',
      items: [
        typed('q1', 'Mami: ___ to jest?', 'Co'),
        typed('q2', 'Javier: To ___ komórka.', 'jest'),
        typed('q3', 'Mami: A ___ to jest?', 'kto'),
        typed('q4', 'Javier: ___ jestem ja.', 'To'),
        typed('q5', 'Mami: A to, ___ to jest?', 'kto'),
        typed('q6', 'Javier: A to jest koleżanka. Ma ___ imię Maria Elena.', 'na'),
        typed('q7', 'Javier: Angela, ___ długopis? Ja nie mam.', 'masz'),
        typed('q8', 'Angela: ___, mam tylko ołówek.', 'Przepraszam'),
        typed('q9', 'Javier: ___ bardzo.', 'Dziękuję'),
      ],
    },
  ],
  4: [
    {
      id: 'cb04-new-student-order',
      sourceExerciseId: 'CB-L04-E01',
      sourceLabel: 'Podręcznik · lekcja 4 · str. 28',
      kind: ActivityKind.Typed,
      title: 'To nowy student — ułóż dialog (Podręcznik)',
      instruction: 'Posłuchaj nagrania i ułóż wypowiedzi we właściwej kolejności.',
      audioUrl: '/assets/coursebook_audio/104a1.mp3',
      audioLabel: 'Podręcznik 104A1 — To nowy student',
      items: [
        typed('q1', 'Wypowiedź 1 · Javier', 'Cześć Mami.'),
        typed('q2', 'Wypowiedź 2 · Mami', 'Cześć Javier!'),
        typed('q3', 'Wypowiedź 3 · Javier', 'Co słychać?'),
        typed('q4', 'Wypowiedź 4 · Mami', 'Wszystko w porządku. A u ciebie?'),
        typed('q5', 'Wypowiedź 5 · Javier', 'U mnie też dobrze. Dziękuję. Czy wiesz, kto to jest?'),
        typed('q6', 'Wypowiedź 6 · Mami', 'Nie, nie wiem, ale myślę, że to jest nowy student.'),
        typed('q7', 'Wypowiedź 7 · Javier', 'Hmmm… ciekawe, czy jest w naszej grupie...'),
      ],
    },
  ],
  5: [
    {
      id: 'cb05-uwe-intro',
      sourceExerciseId: 'CB-L05-E01',
      sourceLabel: 'Podręcznik · lekcja 5 · str. 34',
      kind: ActivityKind.Typed,
      title: 'To jest Uwe Stein (Podręcznik)',
      instruction: 'Przeczytaj i posłuchaj tekstu o Uwe, a następnie uzupełnij pytania i odpowiedzi.',
      audioUrl: '/assets/coursebook_audio/105a1.mp3',
      audioLabel: 'Podręcznik 105A1 — Uwe Stein',
      readingText:
        'To jest Uwe. Uwe Stein. On jest z Niemiec. Mieszka w Berlinie. Jest wysoki, przystojny i wysportowany. Uwe to biznesmen. Ma 44 lata. Lubi pracować.',
      items: [
        typed('q1', '___ to jest? To jest Uwe.', 'Kto'),
        typed('q2', 'Skąd on jest? On jest z ___.', 'Niemiec'),
        typed('q3', 'Gdzie ___? On mieszka w Berlinie.', 'mieszka'),
        typed('q4', 'Jaki on ___? On jest wysoki, przystojny i wysportowany.', 'jest'),
        typed('q5', 'Kim on jest? To jest ___.', 'biznesmen'),
        typed('q6', 'Ile ma lat? On ma ___ lata.', ['44', 'czterdzieści cztery']),
      ],
    },
  ],
  6: [
    {
      id: 'cb06-reading-pn',
      sourceExerciseId: 'CB-L06-E02',
      sourceLabel: 'Podręcznik · lekcja 6 · str. 43',
      kind: ActivityKind.Choice,
      title: 'Co robisz po lekcji? (Podręcznik)',
      instruction: 'Przeczytaj i posłuchaj dialogu, a następnie zaznacz P (prawda) lub N (nieprawda).',
      audioUrl: '/assets/coursebook_audio/106b2.mp3',
      audioLabel: 'Podręcznik 106B2 — Co robisz? Nudzę się!',
      readingText:
        'Angela: Mami, co robisz po lekcji?\n' +
        'Mami: Ja? Nic specjalnego. Nudzę się.\n' +
        'Angela: Nudzisz się? A dlaczego?\n' +
        'Mami: Bo polska mama Joanna gotuje pierogi, tata Grzegorz też pracuje w domu, a Karol czyta. Nie mają czasu.\n' +
        'Nauczycielka: Po polsku nie mówimy „polska mama” ani „polski tata”, bo to nie jest realnie twoja mama ani tata. „Gospodyni” i „gospodarz”.\n' +
        'Angela: A ty co lubisz robić?\n' +
        'Mami: Bardzo lubię grać na komputerze, malować i słuchać muzyki rockowej.\n' +
        'Angela: Ja też lubię słuchać muzyki. I lubię tańczyć, spotykać się ze znajomymi i robić zakupy.\n' +
        'Javier: A ja lubię chodzić do klubu, tańczyć i podróżować.\n' +
        'Mami: Ja nie umiem tańczyć.\n' +
        'Javier: Nie ma problemu, jestem świetnym nauczycielem tańca.\n' +
        'Angela: To fantastycznie! W weekend idziemy tańczyć!\n' +
        'Mami: No nie wiem…',
      items: [
        choice('q1', 'Mami nudzi się w domu.', 'P', ['P', 'N']),
        choice('q2', 'Pani Joanna nie ma czasu, bo gotuje.', 'P', ['P', 'N']),
        choice('q3', 'Tata Mami ma na imię Grzegorz.', 'N', ['P', 'N']),
        choice('q4', 'Po polsku forma „polska mama” nie jest dobra.', 'P', ['P', 'N']),
        choice('q5', 'Mami i Angela lubią muzykę.', 'P', ['P', 'N']),
        choice('q6', 'Angela i Javier lubią tańczyć.', 'P', ['P', 'N']),
        choice('q7', 'Mami umie tańczyć.', 'N', ['P', 'N']),
        choice('q8', 'Javier jest nauczycielem muzyki.', 'N', ['P', 'N']),
        choice('q9', 'Mami bardzo chce się uczyć tańczyć.', 'N', ['P', 'N']),
      ],
    },
  ],
  7: [
    {
      id: 'cb07-kiosk-dialogue',
      sourceExerciseId: 'CB-L07-E03',
      sourceLabel: 'Podręcznik · lekcja 7 · str. 48',
      kind: ActivityKind.Typed,
      title: 'W kiosku (Podręcznik)',
      instruction: 'Uzupełnij dialog Mami w kiosku.',
      items: [
        typed('q1', 'Mami: Dzień dobry. Czy ___ Magazyn „Viva”?', 'jest'),
        typed('q2', 'Pani: Tak, jest. (Mami: Ile ___?)', 'kosztuje'),
        typed('q3', 'Pani: 9 ___ 99 groszy.', 'złotych'),
        typed('q4', 'Pani: Czy coś ___?', 'jeszcze'),
        typed('q5', 'Mami: ___ jest ołówek?', 'Czy'),
        typed('q6', 'Pani: Nie ___.', 'ma'),
      ],
    },
  ],
  8: [
    {
      id: 'cb08-breakfast-dialogue',
      sourceExerciseId: 'CB-L08-E03',
      sourceLabel: 'Podręcznik · lekcja 8 · str. 53',
      kind: ActivityKind.Typed,
      title: 'Mami je śniadanie (Podręcznik)',
      instruction: 'Posłuchaj dialogu przy śniadaniu i uzupełnij brakujące słowa.',
      audioUrl: '/assets/coursebook_audio/108a4.mp3',
      audioLabel: 'Podręcznik 108A4 — Mami je śniadanie',
      items: [
        typed('q1', 'Karolina: Mami, wolisz jasny czy ciemny ___?', 'chleb'),
        typed('q2', 'Mami: Aha. Wolę ___ (ciemny chleb).', 'ciemny chleb'),
        typed('q3', 'Mami: Ja wolę masło. Czy mogę prosić ___ do masła?', 'widelec'),
        typed('q4', 'Karolina: Mami, to jest ___, a to jest widelec.', 'nóż'),
        typed('q5', 'Karolina: Chcesz wędlinę czy ___?', 'ser'),
        typed('q6', 'Karolina: Mami, masz ochotę na ___?', 'jajko'),
      ],
    },
  ],
  10: [
    {
      id: 'cb10-restaurant-booking',
      sourceExerciseId: 'CB-L10-E02',
      sourceLabel: 'Podręcznik · lekcja 10 · str. 64',
      kind: ActivityKind.Choice,
      title: 'Rezerwacja stolika w restauracji (Podręcznik)',
      instruction: 'Posłuchaj nagrania i wybierz właściwą odpowiedź.',
      audioUrl: '/assets/coursebook_audio/110a1.mp3',
      audioLabel: 'Podręcznik 110A1 — Rezerwacja stolika',
      items: [
        choice('q1', '1. Kto rezerwuje stolik?', 'Angela', ['Mami', 'Javier', 'Angela']),
        choice('q2', '2. Jak nazywa się restauracja?', 'U Doroty', ['Na Kazimierzu', 'U Doroty', 'Miodowa']),
        choice('q3', '3. Dla ilu osób jest rezerwacja?', 'dla 4', ['dla 2', 'dla 4', 'dla 16']),
        choice('q4', '4. O której godzinie jest obiad?', 'o 16:00', ['o 16:00', 'o 6:00', '20:00']),
        choice('q5', '5. Na jakiej ulicy jest ta restauracja?', 'ul. Miodowa 25', ['ul. Kazimierz 25', 'ul. Dietla 103', 'ul. Miodowa 25']),
      ],
    },
  ],
  11: [
    {
      id: 'cb11-family-text',
      sourceExerciseId: 'CB-L11-E06',
      sourceLabel: 'Podręcznik · lekcja 11 · str. 72',
      kind: ActivityKind.Typed,
      title: 'Model polskiej rodziny (Podręcznik)',
      instruction: 'Przeczytaj i posłuchaj tekstu Jacka o rodzinie, a następnie uzupełnij zdania.',
      audioUrl: '/assets/coursebook_audio/111a6.mp3',
      audioLabel: 'Podręcznik 111A6 — Rodzina Jacka',
      readingText:
        'Mam tylko jedną siostrę, ma na imię Basia. Jest już mężatką i ma jedno dziecko – córkę Amelkę (3 lata). Jej mąż Robert jest znanym aktorem. Nasza matka, też Barbara, teraz jest rozwiedziona, ale miała dwóch mężów. Mój ojciec ma na imię Tadeusz, a ojciec mojej siostry Stanisław. Moi dziadkowie to Krystyna i Zygmunt, ale już nie żyją.\n' +
        'Mam żonę Zosię i dwoje dzieci: Janka (21 lat) i Małgosię (13 lat). Janek ma dziewczynę, ma na imię Dorota. Nie mają jeszcze dzieci. A ja jestem Jacek. Bardzo mi miło Państwa poznać.',
      items: [
        typed('q1', 'Siostra Jacka ma na imię ___.', 'Basia'),
        typed('q2', 'Mąż Basi ma na imię Robert i jest znanym ___.', 'aktorem'),
        typed('q3', 'Matka Jacka nazywa się ___.', 'Barbara'),
        typed('q4', 'Ojciec Jacka ma na imię ___.', 'Tadeusz'),
        typed('q5', 'Żona Jacka ma na imię ___.', 'Zosia'),
        typed('q6', 'Dziewczyna Janka ma na imię ___.', 'Dorota'),
      ],
    },
  ],
  12: [
    {
      id: 'cb12-umawiamy-sie',
      sourceExerciseId: 'CB-L12-E02',
      sourceLabel: 'Podręcznik · lekcja 12 · str. 78',
      kind: ActivityKind.Typed,
      title: 'Umawiamy się (Podręcznik)',
      instruction: 'Posłuchaj dialogu i uzupełnij go wyrazami z ramki.',
      audioUrl: '/assets/coursebook_audio/112a2.mp3',
      audioLabel: 'Podręcznik 112A2 — Umawiamy się',
      items: [
        typed('q1', 'Mami: Wiecie, w Centrum Sztuki Japońskiej Manggha jest bardzo ___ spektakl teatru kabuki.', 'ciekawy'),
        typed('q2', 'Mami: To bardzo stary ___ japoński.', 'teatr'),
        typed('q3', 'Karolina: Tak, a ___?', 'kiedy'),
        typed('q4', 'Mami: Dziś wieczorem. Mam trzy ___.', 'zaproszenia'),
        typed('q5', 'Mami: Macie ochotę ___?', 'pójść'),
        typed('q6', 'Karol: Oj, ja dziś nie ___, idę do kina.', 'mogę'),
        typed('q7', 'Karolina: He, he, on ma randkę! Na ___ idzie na komedię romantyczną.', 'pewno'),
      ],
    },
  ],
  13: [
    {
      id: 'cb13-byc-past',
      sourceExerciseId: 'CB-L13-E03',
      sourceLabel: 'Podręcznik · lekcja 13 · str. 85',
      kind: ActivityKind.Typed,
      title: 'Gdzie byli wczoraj? (Podręcznik)',
      instruction: 'Uzupełnij zdania odpowiednią formą czasu przeszłego czasownika „być”.',
      audioUrl: '/assets/coursebook_audio/113a4.mp3',
      audioLabel: 'Podręcznik 113A4',
      items: [
        typed('q1', '___ (my / r. m.) na koncercie.', 'Byliśmy'),
        typed('q2', 'Pani Maj ___ rano na zakupach.', 'była'),
        typed('q3', 'Karolina i Mami ___ w kinie na polskim filmie.', 'były'),
        typed('q4', 'Karol ___ na siłowni.', 'był'),
        typed('q5', 'Karol i Karolina ___ w szkole.', 'byli'),
        typed('q6', 'Angela w sobotę ___ w pubie.', 'była'),
        typed('q7', 'Czy ___ (wy / r. m.) w Krakowie?', 'byliście'),
        typed('q8', 'Wczoraj ___ (my / r. ż.) na wystawie.', 'byłyśmy'),
      ],
    },
  ],
  14: [
    {
      id: 'cb14-quiz-match',
      sourceExerciseId: 'CB-L14-E01',
      sourceLabel: 'Podręcznik · lekcja 14 · str. 92',
      kind: ActivityKind.Match,
      title: 'Po quizie o Krakowie (Podręcznik)',
      instruction: 'Posłuchaj dialogu i połącz pytania z odpowiedziami.',
      audioUrl: '/assets/coursebook_audio/114a1-1.mp3',
      audioLabel: 'Podręcznik 114A1 — Po quizie',
      items: (() => {
        const opts = ['Rowerem.', 'Z Internetu.', 'Przewodnik po Krakowie.', 'Do Nowej Huty.', 'Idą na quiz.', 'Mami.'];
        return [
          choice('q1', '1. Co robią Mami i Angela po południu?', 'Idą na quiz.', opts),
          choice('q2', '2. Skąd Mami tak dużo wie?', 'Z Internetu.', opts),
          choice('q3', '3. Kto wygrał quiz?', 'Mami.', opts),
          choice('q4', '4. Jaka była nagroda?', 'Przewodnik po Krakowie.', opts),
          choice('q5', '5. Dokąd jedzie Mami jutro?', 'Do Nowej Huty.', opts),
          choice('q6', '6. Czym jedzie Javier?', 'Rowerem.', opts),
        ];
      })(),
    },
  ],
  15: [
    {
      id: 'cb15-picnic-dialogue',
      sourceExerciseId: 'CB-L15-E01',
      sourceLabel: 'Podręcznik · lekcja 15 · str. 99',
      kind: ActivityKind.Typed,
      title: 'Zakupy na piknik (Podręcznik)',
      instruction: 'Posłuchaj nagrania i ułóż dialog w poprawnej kolejności.',
      audioUrl: '/assets/coursebook_audio/115b1.mp3',
      audioLabel: 'Podręcznik 115B1 — Piknik',
      items: [
        typed('q1', '1 · Iwona', 'Cześć Sylwia! Jedziesz z nami na piknik? Taka piękna pogoda, wreszcie mamy złotą polską jesień!'),
        typed('q2', '2 · Sylwia', 'Na piknik? Raczej nie. Wiesz, ja boję się koni.'),
        typed('q3', '3 · Iwona', 'Chyba żartujesz!'),
        typed('q4', '4 · Sylwia', 'Niestety, nie żartuję! Czy wybiera się dużo studentów?'),
        typed('q5', '5 · Iwona', 'Prawie wszyscy, tylko kilka studentek zostaje. Słuchaj, czy mogłabyś mi pomóc zrobić zakupy na ten piknik?'),
        typed('q6', '6 · Sylwia', 'Bardzo chętnie. A co musisz kupić?'),
        typed('q7', '7 · Iwona', 'Tylko dodatki, kilka słoików musztardy, trochę warzyw na grilla, trochę pieczarek, kilkanaście piw i soków.'),
        typed('q8', '8 · Sylwia', 'Nie ma sprawy. Idziemy?'),
        typed('q9', '9 · Iwona', 'Wielkie dzięki, idziemy. Aha, moment, muszę sprawdzić, czy nie mam za mało pieniędzy.'),
      ],
    },
  ],
  16: [
    {
      id: 'cb16-weather-dialogue',
      sourceExerciseId: 'CB-L16-E04',
      sourceLabel: 'Podręcznik · lekcja 16 · str. 107',
      kind: ActivityKind.Typed,
      title: 'Prognoza na weekend (Podręcznik)',
      instruction: 'Posłuchaj i uzupełnij dialog o pogodzie.',
      audioUrl: '/assets/coursebook_audio/116a5.mp3',
      audioLabel: 'Podręcznik 116A5 — Pogoda w Zakopanem',
      items: [
        typed('q1', 'Uwe: Zimno: ___ około 10 stopni poniżej zera,', 'mróz'),
        typed('q2', 'ale będzie świecić ___,', 'słońce'),
        typed('q3', 'i specjalnie dla ciebie będzie padać ___!', 'śnieg'),
        typed('q4', 'Javier: W gazecie pisali, że: zero słońca, będzie ___, zero śniegu, będzie padać deszcz.', ['pochmurno', 'mgła']),
      ],
    },
  ],
  18: [
    {
      id: 'cb18-maj-apartment',
      sourceExerciseId: 'CB-L18-E02',
      sourceLabel: 'Podręcznik · lekcja 18 · str. 118',
      kind: ActivityKind.Choice,
      title: 'Mieszkanie państwa Maj (Podręcznik)',
      instruction: 'Posłuchaj tekstu o mieszkaniu państwa Maj i zaznacz P (prawda) lub N (nieprawda).',
      audioUrl: '/assets/coursebook_audio/118a2.mp3',
      audioLabel: 'Podręcznik 118A2 — Państwo Maj',
      items: [
        choice('q1', 'Państwo Maj mieszkają w kamienicy.', 'N', ['P', 'N']),
        choice('q2', 'Mieszkają na czwartym piętrze w nowym bloku.', 'P', ['P', 'N']),
        choice('q3', 'Wcześniej mieszkali z rodzicami pana Grzegorza.', 'P', ['P', 'N']),
        choice('q4', 'Pan Grzegorz pracuje w firmie informatycznej.', 'P', ['P', 'N']),
      ],
    },
  ],
  23: [
    {
      id: 'cb23-stylist-dialogue',
      sourceExerciseId: 'CB-L23-E01',
      sourceLabel: 'Podręcznik · lekcja 23 · str. 153',
      kind: ActivityKind.Typed,
      title: 'W Galerii Krakowskiej ze stylistą (Podręcznik)',
      instruction: 'Posłuchaj dialogu i uzupełnij go zwrotami z ramki.',
      audioUrl: '/assets/coursebook_audio/123b1.mp3',
      audioLabel: 'Podręcznik 123B1 — Stylista Kriss',
      items: [
        typed('q1', 'Kriss: Och, nie ma problemu, to dla mnie ___!', 'czysta przyjemność'),
        typed('q2', 'Angela: Cześć! ___ .', 'Z góry dziękuję za pomoc'),
        typed('q3', 'Kriss: Już nie mogę się doczekać! Tutaj ___!', 'czuję się jak ryba w wodzie'),
      ],
    },
  ],
  24: [
    {
      id: 'cb24-odd-appearance',
      sourceExerciseId: 'CB-L24-E04',
      sourceLabel: 'Podręcznik · lekcja 24 · str. 161',
      kind: ActivityKind.Choice,
      title: 'Wygląd zewnętrzny — co nie pasuje? (Podręcznik)',
      instruction: 'Wybierz słowo, które nie pasuje do pozostałych.',
      items: [
        choice('q1', 'oczy:', 'wysokie', ['ciemne', 'czarne', 'skośne', 'wysokie']),
        choice('q2', 'figura: on jest…', 'średni', ['szczupły', 'chudy', 'średni', 'gruby']),
        choice('q3', 'brwi:', 'zgrabne', ['wąskie', 'czarne', 'szerokie', 'zgrabne']),
        choice('q4', 'czoło:', 'szczupłe', ['szczupłe', 'wysokie', 'niskie']),
        choice('q5', 'usta:', 'kwadratowe', ['pełne', 'wąskie', 'małe', 'kwadratowe']),
        choice('q6', 'oczy:', 'długie', ['piwne', 'niebieskie', 'szare', 'długie']),
        choice('q7', 'nos:', 'otyły', ['zadarty', 'otyły', 'prosty', 'duży']),
        choice('q8', 'twarz:', 'łysa', ['okrągła', 'miła', 'piegowata', 'łysa']),
      ],
    },
  ],
  25: [
    {
      id: 'cb25-clinic-dialogue',
      sourceExerciseId: 'CB-L25-E01',
      sourceLabel: 'Podręcznik · lekcja 25 · str. 169',
      kind: ActivityKind.Typed,
      title: 'Rejestracja w przychodni (Podręcznik)',
      instruction: 'Posłuchaj i uzupełnij dialog w przychodni wyrazami z ramki.',
      audioUrl: '/assets/coursebook_audio/125d1.mp3',
      audioLabel: 'Podręcznik 125D1 — Przychodnia Zdrówko',
      items: [
        typed('q1', 'Pani: Dzień dobry, ___ „Zdrówko”, słucham?', 'przychodnia'),
        typed('q2', 'Javier: Chciałbym umówić się na ___ do lekarza.', 'wizytę'),
        typed('q3', 'Pani: Czy ma pan już u nas ___?', 'kartę'),
        typed('q4', 'Javier: Nie, będę pierwszy raz. Ale jestem ___,', 'obcokrajowcem'),
        typed('q5', 'nie mam polskiego ___.', 'ubezpieczenia'),
        typed('q6', 'Pani: To prywatna ___, wizyta u specjalisty kosztuje 75 zł.', 'przychodnia'),
        typed('q7', 'Javier: Jestem ___,', 'przeziębiony'),
        typed('q8', 'ale boję się, że to ___.', 'grypa'),
        typed('q9', 'Proszę mnie ___ do lekarza ogólnego.', 'zarejestrować'),
        typed('q10', 'Pani: Mam wolny ___ na jutro rano na 7.30.', 'termin'),
      ],
    },
  ],
  26: [
    {
      id: 'cb26-bad-day-order',
      sourceExerciseId: 'CB-L26-E01',
      sourceLabel: 'Podręcznik · lekcja 26 · str. 175',
      kind: ActivityKind.Typed,
      title: 'Co za dzień! — ułóż dialog (Podręcznik)',
      instruction: 'Posłuchaj nagrania i ułóż dialog w poprawnej kolejności.',
      audioUrl: '/assets/coursebook_audio/126b1.mp3',
      audioLabel: 'Podręcznik 126B1 — Co za dzień!',
      items: [
        typed('q1', '1 · Tom', 'Angela, dlaczego jesteś taka zdenerwowana?'),
        typed('q2', '2 · Angela', 'Najpierw urwał mi się pasek w sandale, potem uciekł mi tramwaj, a teraz umieram z głodu, bo sprzedali mi przeterminowany jogurt i muszę go wyrzucić. Co za dzień!'),
        typed('q3', '3 · Tom', 'Nie powinnaś go wyrzucać, tylko reklamować. Gdzie go kupiłaś?'),
        typed('q4', '4 · Angela', 'Masz rację. To niedaleko, zdążę przed lekcją.'),
      ],
    },
  ],
  28: [
    {
      id: 'cb28-unicef-reading',
      sourceExerciseId: 'CB2-L02-E01',
      sourceLabel: 'Podręcznik 2 · lekcja 2 · str. 19',
      kind: ActivityKind.Choice,
      title: 'UNICEF — czytanie i słuchanie (Podręcznik)',
      instruction: 'Przeczytaj i posłuchaj tekstu o UNICEF, a następnie zaznacz P (prawda) lub N (nieprawda).',
      audioUrl: '/assets/coursebook_audio/202g1.mp3',
      audioLabel: 'Podręcznik 202G1 — UNICEF',
      readingText:
        'Organizacja powstała 11 grudnia 1946 roku z inicjatywy Polaka doktora Ludwika Rajchmana w wyniku uchwały Zgromadzenia Ogólnego Narodów Zjednoczonych. Głównym celem UNICEF jest pomoc dzieciom w zakresie wyżywienia, ochrony zdrowia, edukacji, a także ochrony przed przemocą i wykorzystywaniem. Zakres działania organizacji jest globalny.\n' +
        'Za swoją działalność UNICEF dostał w 1965 roku Pokojową Nagrodę Nobla.\n' +
        'Organizacja miała też duży udział w uchwaleniu przez ONZ w 1989 roku Konwencji o Prawach Dziecka.\n' +
        'Od 2006 ich reklama jest na koszulkach siatkarek i piłkarzy klubu FC Barcelona.\n' +
        'Co roku na święta Bożego Narodzenia UNICEF wydaje specjalne kartki pocztowe, z których dochód przeznacza na swoją działalność. Oprócz tego przez cały rok prowadzona jest sprzedaż różnorodnych produktów na cele charytatywne.',
      items: [
        choice('q1', 'UNICEF powstał w czasie wojny.', 'N', ['P', 'N']),
        choice('q2', 'Dr Ludwik Rajchman założył UNICEF.', 'P', ['P', 'N']),
        choice('q3', 'UNICEF działa na całym świecie.', 'P', ['P', 'N']),
        choice('q4', 'UNICEF zajmuje się dziećmi.', 'P', ['P', 'N']),
        choice('q5', 'Sportowcy reklamują tę organizację.', 'P', ['P', 'N']),
        choice('q6', 'Akcje charytatywne są tylko w grudniu.', 'N', ['P', 'N']),
      ],
    },
  ],
  29: [
    {
      id: 'cb29-cinema-quiz',
      sourceExerciseId: 'CB2-L03-E07',
      sourceLabel: 'Podręcznik 2 · lekcja 3 · str. 24',
      kind: ActivityKind.Choice,
      title: 'Jakie kino? Jaki film? (Podręcznik)',
      instruction: 'Wybierz poprawne słowo lub wyrażenie.',
      items: [
        choice('q1', '1. Bardzo ___ mi się ten film.', 'podoba', ['lubię', 'lubi', 'podoba']),
        choice('q2', '2. Chłodzi i wentyluje wnętrze: ___.', 'klimatyzacja', ['kondycja', 'klimat', 'klimatyzacja']),
        choice('q3', '3. Nie ___ żadnego polskiego reżysera.', 'znam', ['wiem', 'znam', 'umiem']),
        choice('q4', '4. W Polsce prawie wszystkie filmy kinowe są ___.', 'z napisami', ['z podtytułami', 'z napisami', 'z napisem']),
        choice('q5', '5. Kto ogląda film? ___.', 'Widz', ['Widmo', 'Widz', 'Widzenie']),
        choice('q6', '6. Film 3D to film ___.', 'trójwymiarowy', ['trzywymiarowy', 'trzechwymiarowy', 'trójwymiarowy']),
        choice('q7', '7. Muzyka do filmu to inaczej ___.', 'ścieżka muzyczna', ['droga muzyczna', 'ścieżka muzyczna', 'trasa muzyczna']),
        choice('q8', '8. „Zapowiedzi” – to, co ___.', 'będzie', ['było', 'jest', 'będzie']),
        choice('q9', '9. Filmy 100 lat temu były ___.', 'czarno-białe', ['czarno-białe', 'czarne-białe', 'czarne i białe']),
        choice('q10', '10. Publiczna prezentacja działań artystycznych to ___.', 'przegląd', ['pogląd', 'przegląd', 'ogląd']),
        choice('q11', '11. Roman Polański to znany ___.', 'reżyser', ['dyrektor', 'reżyseria', 'reżyser']),
      ],
    },
  ],
  31: [
    {
      id: 'cb31-nationalities-traits',
      sourceExerciseId: 'CB2-L05-E04',
      sourceLabel: 'Podręcznik 2 · lekcja 5 · str. 39',
      kind: ActivityKind.Choice,
      title: 'Jacy są ci ludzie? (Podręcznik)',
      instruction: 'Wybierz poprawną formę rodzaju męskoosobowego.',
      items: [
        choice('q1', 'Uważam, że Szwajcarzy to bardzo ___ ludzie.', 'punktualni', ['punktualni', 'punktualne']),
        choice('q2', 'Trzeba przyznać, że ___ to zorganizowany i solidny naród.', 'Niemcy', ['Niemieccy', 'Niemcy']),
        choice('q3', 'Według mnie Japończycy są ___ i bardzo systematyczni.', 'pracowici', ['pracowity', 'pracowici']),
        choice('q4', 'Moim zdaniem to nieprawda, że wszyscy ___ są spontaniczni.', 'Włosi', ['Włosi', 'Włochy']),
        choice('q5', '___ przekonana, że Finowie mają naturę podobną do Polaków.', 'Jestem', ['Jestem', 'Wiem']),
        choice('q6', 'Wydaje mi się, że ___ Hiszpanie są towarzyscy i weseli.', 'wszyscy', ['wszystkie', 'wszyscy']),
        choice('q7', '___ są opanowani i trudno wytrącić ich z równowagi.', 'Anglicy', ['Angielscy', 'Anglicy']),
      ],
    },
  ],
  33: [
    {
      id: 'cb33-ryszard-cv',
      sourceExerciseId: 'CB2-L07-E01',
      sourceLabel: 'Podręcznik 2 · lekcja 7 · str. 49',
      kind: ActivityKind.Typed,
      title: 'Życiorys — CV Ryszarda (Podręcznik)',
      instruction: 'Uzupełnij CV Ryszarda wyrazami z ramki.',
      items: [
        typed('q1', 'Data i miejsce urodzenia: 01 IV 1966, ___', 'Kraków'),
        typed('q2', '___: 0 607 28 18 30', 'telefon'),
        typed('q3', '1986–1992 ___ Krakowska im. Tadeusza Kościuszki', 'Politechnika'),
        typed('q4', '1998–2003 główny projektant w biurze ___ BUD-DOM', 'architektonicznym'),
        typed('q5', '1993–1995 ___ projektanta w firmie projektowej WinBud', 'asystent'),
        typed('q6', 'Praktyki zawodowe: budowlana, projektowa, ___', 'konserwatorska'),
        typed('q7', 'Kurs ___ komputerowej', 'grafiki'),
        typed('q8', 'Pierwsze ___ w konkursie architektonicznym „Szklane Domy”', 'miejsce'),
        typed('q9', '___ znajomość obsługi komputera', 'biegła'),
        typed('q10', 'Zaawansowana znajomość ___ programu AutoCad', 'obsługi'),
        typed('q11', 'angielski: biegle w mowie i ___', 'piśmie'),
        typed('q12', 'Zainteresowania: podróże, narciarstwo, ___, sztuka użytkowa', 'żeglarstwo'),
        typed('q13', 'nauka języków ___', 'obcych'),
        typed('q14', 'Mocne strony: komunikatywność, ___, odpowiedzialność', 'kreatywność'),
        typed('q15', 'umiejętność ___ w zespole', 'pracy'),
      ],
    },
  ],
  40: [
    {
      id: 'cb40-marzec68-pnb',
      sourceExerciseId: 'CB2-L14-E01',
      sourceLabel: 'Podręcznik 2 · lekcja 14 · str. 95',
      kind: ActivityKind.Choice,
      title: 'Trochę historii — Marzec ’68 (Podręcznik)',
      instruction: 'Przeczytaj i posłuchaj dialogu, a następnie zaznacz P (prawda), N (nieprawda) lub B (brak informacji).',
      audioUrl: '/assets/coursebook_audio/214b1.mp3',
      audioLabel: 'Podręcznik 214B1 — Trochę historii',
      readingText:
        'Karol: Do zobaczenia wszystkim! Lecę na próbę.\n' +
        'Mami: Na jaką próbę?\n' +
        'Karol: Nasze kółko teatralne przygotowuje cykl „Wieczory listopadowe”. Teraz mamy na tapecie inscenizację fragmentu „Dziadów” Mickiewicza, to taki romantyczny utwór. Opowiada o pogańskim kulcie zmarłych i rytuałach, które odbywały się nocą na cmentarzu.\n' +
        'Mami: „Dziady”, hm… coś mi to mówi, już gdzieś słyszałam ten tytuł.\n' +
        'Karolina: No pewnie. Pamiętasz „Różyczkę”? Ten film, na który wybrałaś się ze mną. Tam była taka scena w teatrze, spektakl wyreżyserowany przez Kazimierza Dejmka, a potem…\n' +
        'Mami: Tak, pamiętam! Demonstracje! Studenci protestujący na ulicach, milicja z gazem i pałkami. Brutalne sceny! To było straszne.\n' +
        'Karol: Ale prawdziwe! Rok 68, marzec. Ważna data w naszej historii.\n' +
        'Karolina: Tak, wyszli na ulicę, krzyczeli „Niepodległość bez cenzury!”. To była ich niezgoda na życie w systemie komunistycznym, na politykę partii, na wszechobecne zakłamanie.\n' +
        'Karol: A Mickiewicz, nasz Wieszcz, znów zagrzewał do walki o wolność.\n' +
        'Mami: Mickiewicz? Nie rozumiem.\n' +
        'Karol: Kiedyś ci opowiemy o Powstaniu Listopadowym, ale to już inna historia.\n' +
        'Karolina: Wracając do Marca i jego przewodniego hasła „Chcemy kultury bez cenzury!”, zastanawiam się, czy w dzisiejszych czasach wolności słowa, ktoś zrozumie tamtą walkę?',
      items: [
        choice('q1', 'Karol bierze udział w przygotowaniach kółka teatralnego.', 'P', ['P', 'N', 'B']),
        choice('q2', 'Karol gra główną rolę w inscenizacji „Dziadów”.', 'B', ['P', 'N', 'B']),
        choice('q3', 'Mickiewicz jest autorem „Wieczorów Listopadowych”.', 'N', ['P', 'N', 'B']),
        choice('q4', '„Dziady” opowiadają o chrześcijańskich tradycjach.', 'N', ['P', 'N', 'B']),
        choice('q5', '„Różyczka” to tytuł spektaklu teatralnego.', 'N', ['P', 'N', 'B']),
        choice('q6', 'Spektakl wyreżyserowany przez Dejmka był grany w Teatrze Narodowym.', 'B', ['P', 'N', 'B']),
        choice('q7', 'Mami oglądała „Różyczkę” razem z Karoliną.', 'P', ['P', 'N', 'B']),
        choice('q8', 'Studenci protestowali wewnątrz gmachu teatru.', 'N', ['P', 'N', 'B']),
        choice('q9', 'Milicja interweniowała bez użycia siły.', 'N', ['P', 'N', 'B']),
        choice('q10', 'Opisywane wydarzenia miały miejsce jesienią.', 'N', ['P', 'N', 'B']),
        choice('q11', 'W hasłach protestujących studentów powtarzało się słowo „cenzura”.', 'P', ['P', 'N', 'B']),
      ],
    },
  ],
  42: [
    {
      id: 'cb42-collocations-match',
      sourceExerciseId: 'CB2-L16-E05',
      sourceLabel: 'Podręcznik 2 · lekcja 16 · str. 107',
      kind: ActivityKind.Match,
      title: 'Przygody i emocje — kolokacje (Podręcznik)',
      instruction: 'Połącz początek wyrażenia z pasującym zakończeniem.',
      items: (() => {
        const opts = ['ze strachu', 'drogę', 'wysokości', 'skórka', 'w podróż', 'w panikę', 'pogody'];
        return [
          choice('q1', 'lęk', 'wysokości', opts),
          choice('q2', 'gęsia', 'skórka', opts),
          choice('q3', 'wyruszyć', 'w podróż', opts),
          choice('q4', 'trząść się', 'ze strachu', opts),
          choice('q5', 'wpaść', 'w panikę', opts),
          choice('q6', 'załamanie', 'pogody', opts),
          choice('q7', 'przemierzać', 'drogę', opts),
        ];
      })(),
    },
  ],
  43: [
    {
      id: 'cb43-stan-wojenny',
      sourceExerciseId: 'CB2-L17-E03',
      sourceLabel: 'Podręcznik 2 · lekcja 17 · str. 113',
      kind: ActivityKind.Choice,
      title: 'Stan wojenny — 13 grudnia 1981 (Podręcznik)',
      instruction: 'Przeczytaj i posłuchaj tekstu o stanie wojennym, a następnie zaznacz P (prawda) lub N (nieprawda).',
      audioUrl: '/assets/coursebook_audio/217a2.mp3',
      audioLabel: 'Podręcznik 217A2 — Stan wojenny',
      readingText:
        '13 grudnia 1981 roku to pamiętna dla Polaków data. O 6.00 rano generał Jaruzelski, szef rządu, w radiowo-telewizyjnym przemówieniu poinformował obywateli o wprowadzeniu stanu wojennego. Ale już przedtem, o godzinie 0:00 oddziały ZOMO rozpoczęły ogólnokrajową akcję aresztowań działaczy opozycyjnych. Nie potrzebowali już nakazów, nikt nie miał prawa do obrony, drzwi wyważano łomami.\n' +
        'Nieco wcześniej, tuż przed północą, uzbrojone oddziały wojska i milicji wkroczyły do central telefonicznych na terenie całego kraju. Telefony cywilne zamilkły wszędzie, nawet w ambasadach i konsulatach. W tym samym czasie żołnierze obsadzili wszystkie stacje radiowe i telewizyjne. Na ulicach większych miast pojawiły się czołgi i wozy pancerne. Władza działała z zaskoczenia, żeby zdezorientować społeczeństwo, żeby nikt nie zdążył się zbuntować przeciw ograniczeniu wolności.\n' +
        '„Ojczyzna nasza znalazła się nad przepaścią” – mówił w swoim przemówieniu generał, tłumacząc tak drastyczne ograniczenia swobód obywatelskich jak wprowadzenie godziny milicyjnej, zakazu zmiany miejsca pobytu bez zgody władz, zakazu zgromadzeń publicznych, a nawet organizowania imprez artystycznych czy sportowych bez zezwolenia. Do odwołania zamknięto szkoły. Jedyny wyjątek od zakazu zgromadzenia się miały stanowić nabożeństwa w kościołach i obrządki religijne.\n' +
        'Nic dziwnego, że reakcją na wprowadzenie stanu wojennego początkowo były strajki i demonstracje. Do najgłośniejszych należą te w Stoczni Gdańskiej, w Hucie im. Lenina w Krakowie oraz w kopalni „Wujek”, gdzie podczas pacyfikacji zastrzelono dziewięciu górników.',
      items: [
        choice('q1', '13 grudnia 1981 r. to ważna data w historii Polski.', 'P', ['P', 'N']),
        choice('q2', 'O stanie wojennym poinformował Polaków szef rządu.', 'P', ['P', 'N']),
        choice('q3', 'ZOMO zaczęło akcję aresztowań o północy.', 'P', ['P', 'N']),
        choice('q4', 'Telefony cywilne działały tylko w ambasadach i konsulatach.', 'N', ['P', 'N']),
        choice('q5', 'Stacje radiowe i telewizyjne były nadal w rękach cywilnych.', 'N', ['P', 'N']),
        choice('q6', 'Zakaz zgromadzeń publicznych nie dotyczył kościołów.', 'P', ['P', 'N']),
        choice('q7', 'Imprezy sportowe mogły być organizowane tylko za zezwoleniem władz.', 'P', ['P', 'N']),
        choice('q8', 'Wiele organizacji nie mogło kontynuować swej działalności.', 'P', ['P', 'N']),
        choice('q9', 'Po ogłoszeniu stanu wojennego nikt już nie strajkował.', 'N', ['P', 'N']),
      ],
    },
  ],
  46: [
    {
      id: 'cb46-consumer-vocab',
      sourceExerciseId: 'CB2-L20-E05',
      sourceLabel: 'Podręcznik 2 · lekcja 20 · str. 133',
      kind: ActivityKind.Match,
      title: 'Rysopis konsumenta — słownictwo (Podręcznik)',
      instruction: 'Dopasuj wyrażenie do jego znaczenia.',
      items: (() => {
        const opts = [
          'produkty',
          'podstęp, fortel, trik',
          'cecha negatywna, defekt',
          'męka, tortura',
          'ma dużo witamin, minerałów itp.; dobrze zaspokaja głód',
          'niepotrzebny',
          'opiekować się, zajmować się',
          'nie robić czegoś, omijać coś',
          'urządzić',
          'próbować',
        ];
        return [
          choice('q1', 'zbyteczny', 'niepotrzebny', opts),
          choice('q2', 'wada', 'cecha negatywna, defekt', opts),
          choice('q3', 'starać się', 'próbować', opts),
          choice('q4', 'unikać', 'nie robić czegoś, omijać coś', opts),
          choice('q5', 'udręka', 'męka, tortura', opts),
          choice('q6', 'oszustwo', 'podstęp, fortel, trik', opts),
          choice('q7', 'wyposażyć', 'urządzić', opts),
          choice('q8', 'wyroby', 'produkty', opts),
          choice('q9', 'troszczyć się', 'opiekować się, zajmować się', opts),
          choice('q10', 'odżywczy', 'ma dużo witamin, minerałów itp.; dobrze zaspokaja głód', opts),
        ];
      })(),
    },
  ],
  49: [
    {
      id: 'cb49-exam-tips',
      sourceExerciseId: 'CB2-L23-E02',
      sourceLabel: 'Podręcznik 2 · lekcja 23 · str. 152',
      kind: ActivityKind.Typed,
      title: 'Rady przed egzaminem (Podręcznik)',
      instruction: 'Uzupełnij rady nauczycielki w trybie rozkazującym (2. os. lm., „wy”).',
      audioUrl: '/assets/coursebook_audio/223a1.mp3',
      audioLabel: 'Podręcznik 223A1 — Czas na egzamin!',
      items: [
        typed('q1', 'Nie ___ (uczyć się) całą noc!', 'uczcie się'),
        typed('q2', '___ (wyspać się)!', 'Wyśpijcie się'),
        typed('q3', '___ (zjeść) dobre śniadanie!', 'Zjedzcie'),
        typed('q4', 'Nie ___ (stresować się) za bardzo!', 'stresujcie się'),
        typed('q5', 'Nie ___ (spóźnić się)!', 'spóźnijcie się'),
        typed('q6', '___ (przeczytać) uważnie polecenie i przykład!', 'Przeczytajcie'),
        typed('q7', '___ (upewnić się), czy rozumiecie, co macie zrobić!', 'Upewnijcie się'),
        typed('q8', '___ (zaczynać) od tego, czego jesteście pewni!', 'Zaczynajcie'),
        typed('q9', '___ (rozplanować) dobrze czas!', 'Rozplanujcie'),
        typed('q10', '___ (zostawić) sobie czas na korektę błędów!', 'Zostawcie'),
        typed('q11', '___ (myśleć) pozytywnie!', 'Myślcie'),
      ],
    },
  ],
};
