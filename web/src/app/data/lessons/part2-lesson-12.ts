import { ActivityKind, choice, Lesson, typed } from '../lesson-types';

const source = (exercise: number) => ({
  sourceExerciseId: `WB2-L12-E${String(exercise).padStart(2, '0')}`,
  sourceLabel: `Zeszyt ćwiczeń · część 2 · lekcja 12 · ćwiczenie ${exercise}`,
});
const activity = (exercise: number, title: string, instruction: string, items: ReturnType<typeof typed>[], kind = ActivityKind.Typed, idSuffix = '') => ({
  id: `p2-l12-e${String(exercise).padStart(2, '0')}${idSuffix}`,
  ...source(exercise), kind, title, instruction,
  items: kind === ActivityKind.Match || (kind === ActivityKind.Choice && items.some((item) => !item.options))
    ? items.map((item) => item.options ? item : choice(item.id, item.prompt, item.accepted, [...new Set(items.flatMap(({ accepted }) => accepted))]))
    : items,
});

export const LESSON_38: Lesson = {
  id: 38,
  title: 'Wjazd czy wyjazd?',
  subtitle: 'Opowiadamy o podróży samochodem i pytamy o drogę',
  topic: 'Transport · czasowniki ruchu · kierunek',
  pages: 'Ćwiczenia 1–15 · podręcznik 78–83',
  color: 'blue',
  activities: [
    activity(1, 'Co pasuje?', 'Wybierz właściwe słowo w tekście.', [
      choice('q1', 'Droga ___!', 'Aniu', ['Aniu', 'Ania']),
      choice('q2', '___ z domu późnym wieczorem.', 'Wyjechaliśmy', ['Wyjechaliśmy', 'Zjechaliśmy']),
      choice('q3', 'Musieliśmy ___ z głównej trasy.', 'zjechać', ['podjechać', 'zjechać']),
      choice('q4', 'I ___ bocznymi drogami.', 'jechać', ['jeździć', 'jechać']),
      choice('q5', 'Na miejsce ___ po północy.', 'dojechaliśmy', ['pojechaliśmy', 'dojechaliśmy']),
      choice('q6', 'Musimy ___ przez przejazd kolejowy.', 'przejechać', ['przejechać', 'przyjechać']),
      choice('q7', 'I ___ do końca asfaltowej drogi.', 'jechać', ['jeździć', 'jechać']),
      choice('q8', 'Nasz samochód ledwie tam ___!', 'wjechał', ['objechał', 'wjechał']),
      choice('q9', '___ całą miejscowość dookoła.', 'Objechaliśmy', ['Objechaliśmy', 'Dojechaliśmy']),
      choice('q10', '___ na pobocze.', 'Zjechaliśmy', ['Przyjechaliśmy', 'Zjechaliśmy']),
      choice('q11', 'Wreszcie ___ pod domek.', 'podjechaliśmy', ['dojechaliśmy', 'podjechaliśmy']),
      choice('q12', 'Musieliśmy ___ nieco dalej.', 'odjechać', ['wyjechać', 'odjechać']),
      choice('q13', 'Tomek bał się, że nie ___ potem z tego błota.', 'wyjedzie', ['wyjedzie', 'zjedzie']),
      choice('q14', '___ stamtąd bez żalu.', 'Wyjechaliśmy', ['Wjechaliśmy', 'Wyjechaliśmy']),
      choice('q15', 'W życiu tam nie ___ drugi raz!', 'pojadę', ['pojadę', 'wjadę']),
    ], ActivityKind.Choice),
    activity(2, 'Synonimy', 'Wyszukaj w tekście synonimy.', [
      ...[
        ['z trudem', 'ledwie'], ['po dwunastej w nocy', 'po północy'], ['górka', 'wzgórze'],
        ['nie ma nikogo', 'nigdzie żywej duszy'], ['pieszo', 'na piechotę'], ['w innym miejscu', 'gdzie indziej'],
        ['pojechać tą samą drogą z powrotem', 'zawrócić'], ['trochę', 'nieco'],
        ['mokra, brudna ziemia', 'błoto'], ['wewnątrz', 'w środku'], ['fatalny', 'koszmarny'],
        ['z tamtego miejsca', 'stamtąd'], ['nigdy więcej', 'w życiu nie'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(3, 'Transformacje', 'Zmień formę czasownika zgodnie z podanym wzorem.', [
      typed('q1', 'Wyjechaliśmy z domu późnym wieczorem. → ___ z domu późnym wieczorem.', 'Wyjedziemy'),
      typed('q2', 'Zjechaliśmy z głównej trasy. → ___ z głównej trasy.', 'Zjedziemy'),
      typed('q3', 'Na miejsce dojechaliście po północy? → Na miejsce ___ po północy?', 'dojedziecie'),
      typed('q4', 'Przejechałam przez przejazd kolejowy. → ___ przez przejazd kolejowy.', 'Przejadę'),
      typed('q5', 'Jak tam wjechałeś? → Jak tam ___?', 'wjedziesz'),
      typed('q6', 'Objechali całą miejscowość dookoła. → ___ całą miejscowość dookoła.', 'Objadą'),
      typed('q7', 'Zjechałem na pobocze. → ___ na pobocze.', 'Zjadę'),
      typed('q8', 'Spokojnie podjechała pod domek. → Spokojnie ___ pod domek.', 'podjedzie'),
      typed('q9', 'Odjechały nieco dalej. → ___ nieco dalej.', 'Odjadą'),
      typed('q10', 'Nie wyjechałaś z tego błota? → Nie ___ potem z tego błota?', 'wyjedziesz'),
    ]),
    activity(4, 'Czas przyszły', 'Uzupełnij zdania czasownikami z ramki.', [
      typed('q1', 'Kiedy ___ pan sprzed sklepu? (odjechać)', 'odjedzie'),
      typed('q2', '___ windą na ostatnie piętro? (my, wjechać)', 'Wjedziemy'),
      typed('q3', 'Szofer ___ pod dom? (podjechać)', 'podjedzie'),
      typed('q4', 'Bez problemu ___ z parkingu? (ty, wyjechać)', 'wyjedziesz'),
      typed('q5', '___ przez Polskę na jednym tankowaniu? (ja, przejechać)', 'Przejadę'),
      typed('q6', '___ z głównej trasy? (ty, zjechać)', 'Zjedziesz'),
      typed('q7', '___ tylko do Ojcowa? (wy, dojechać)', 'Dojedziecie'),
      typed('q8', '___ rondo kilka razy? (oni, objechać)', 'Objadą'),
      typed('q9', '___ każda w swoją stronę? (one, rozjechać się)', 'Rozjadą się'),
      typed('q10', '___ po mnie na dworzec? (ty, przyjechać)', 'Przyjedziesz'),
    ]),
    activity(5, 'Wskazówki dojazdu', 'Posłuchaj nagrania i uzupełnij czasowniki ruchu.', [
      ...[
        ['Proszę ___ ulicą Warszawską.', 'jechać'], ['Proszę ___ do drugiego skrzyżowania ze światłami.', 'dojechać'],
        ['Proszę ___ w lewo.', 'skręcić'], ['Następnie ___ do Placu Wolności.', 'dojechać'],
        ['Proszę ___ plac.', 'objechać'], ['Potem proszę ___ przez most.', 'przejechać'],
        ['I ___ z miasta.', 'wyjechać'], ['Proszę ___ na obwodnicę.', 'wjechać'],
        ['Po 20 km proszę ___ z obwodnicy.', 'zjechać'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(6, 'W drogę!', 'Uzupełnij polecenia czasownikami z ramki.', [
      ...[
        ['___ do samochodu.', 'Wsiądź'], ['___ w lewo w małą wiejską drogę.', 'Skręć'],
        ['___ nią do obwodnicy.', 'Dojedź'], ['___ na obwodnicę.', 'Wjedź'],
        ['I ___ w stronę miasta.', 'jedź'], ['Po 10 kilometrach ___ pod wiaduktem.', 'przejedź'],
        ['Potem ___ z obwodnicy.', 'zjedź'], ['I ___ do miasta.', 'wjedź'],
        ['Potem musisz ___ przez most.', 'przejechać'], ['Następnie ___ Plac Wolności.', 'objedź'],
        ['I ___ w drugą w prawo.', 'skręć'], ['___ przez kolejny most.', 'przejedź'],
        ['Potem ___ i skręć w ostatnią w prawo.', 'objedź'], ['Tak ___ do mojego osiedla.', 'dojedziesz'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(7, 'Co nie pasuje?', 'Wybierz wyraz, który nie pasuje do pozostałych.', [
      ...[
        ['niezadowolenie · oburzenie · ___ · frustracja', 'rekompensata'],
        ['niedopuszczalny · skandaliczny · nie do przyjęcia · ___', 'nieudany'],
        ['usługa · klient · ___ · oferta', 'postępowanie'],
        ['___ · patelnia · czajnik · talerz', 'domek'],
        ['niedokładny · niejasny · ___ · błędny', 'przypalony'],
        ['brudny · ___ · zaniedbany · zepsuty', 'wyposażony'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(8, 'Połącz wyrazy', 'Dopasuj początki wyrażeń do ich zakończeń.', [
      ...[
        ['sytuacja', 'nie do przyjęcia'], ['w ubiegłym', 'tygodniu'], ['niezgodny', 'z rzeczywistością'],
        ['mapa', 'dojazdowa'], ['zawierać', 'błędne informacje'], ['w pełni', 'wyposażona'],
        ['pozostawiać coś', 'bez komentarza'], ['domagam się', 'rekompensaty'],
        ['wyrazić', 'niezadowolenie'], ['być oburzonym', 'czyimś postępowaniem'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ], ActivityKind.Match, '-match'),
    activity(9, 'List reklamacyjny', 'Ułóż zdania z podanych wyrazów.', [
      typed('q1', 'państwa · swoje · chciałem · usług · wyrazić · w związku z · nierzetelnością · niezadowolenie', 'Chciałem wyrazić swoje niezadowolenie w związku z nierzetelnością Państwa usług.'),
      typed('q2', 'państwa · z · tygodniu · w · skorzystałem · oferty · ubiegłym', 'W ubiegłym tygodniu skorzystałem z Państwa oferty.'),
      typed('q3', 'był · niemal żaden punkt oferty · niestety · zgodny · z rzeczywistością', 'Niestety, niemal żaden punkt oferty nie był zgodny z rzeczywistością.'),
      typed('q4', 'traktować · żeby · niedopuszczalne · tak · klienta · to', 'To niedopuszczalne, żeby tak traktować klienta.'),
      typed('q5', 'błędne informacje · którą · mapa dojazdowa · otrzymałem · od Państwa · zawierała', 'Mapa dojazdowa, którą otrzymałem od Państwa, zawierała błędne informacje.'),
      typed('q6', 'pełni · miała · w · kuchnia · wyposażona · być', 'Kuchnia miała być w pełni wyposażona.'),
      typed('q7', 'dwa · przypalona · i · zepsuty · kuchni · w · talerze · patelnia · czajnik · jedynie · były', 'W kuchni były jedynie dwa talerze, przypalona patelnia i zepsuty czajnik.'),
      typed('q8', 'rekompensaty · postępowaniem · mój · oburzony · urlop · Państwa · i · domagam się · nieudany · jestem', 'Jestem oburzony Państwa postępowaniem i domagam się rekompensaty za mój nieudany urlop.'),
    ]),
    activity(10, 'Czasowniki ruchu', 'Uzupełnij zdania odpowiednią formą czasownika.', [
      ...[
        ['Kiedy pierwszy raz ___ za granicę? (ty, pojechać)', 'pojechałeś'], ['Titanic ___ wprost na górę lodową. (wjechać)', 'wjechał'],
        ['Moje dzieci regularnie ___ do dentysty. (chodzić)', 'chodzą'], ['Właśnie do ciebie ___. (ja, jechać)', 'jadę'],
        ['___ od 20 lat. (pilot, latać)', 'lata'], ['Polacy często ___ na urlop do Chorwacji. (jeździć)', 'jeżdżą'],
        ['Nie umiem ___. (pływać)', 'pływać'], ['Kiedy ___ do pracy, znalazła stówkę. (iść)', 'szła'],
        ['Kiedy pierwszy raz ___ samolotem? (lecieć, ty)', 'leciałaś'], ['Bolek po maturze nie ___ na studia. (pójść)', 'poszedł'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(11, 'Czasowniki ruchu w sytuacjach', 'Uzupełnij zdania odpowiednią formą czasownika.', [
      ...[
        ['Babcia mówi: „___!” (wejść)', 'Wejdź'], ['Nauczyciel mówi: „___!” (wyjść)', 'Wyjdź'],
        ['Męża nie ma, już ___ z klasy.', 'wyszedł'], ['Żony nie ma, już ___ z domu.', 'wyszła'],
        ['Jestem na parterze: ___ schodami. (ja, wejść)', 'wejdę'], ['Jestem na ostatnim piętrze: ___ schodami. (ja, zejść)', 'zejdę'],
        ['___ bliżej i zobaczę, co się stało. (ja, podejść)', 'Podejdę'], ['Może czterdziestkę ___ z przyjaciółmi? (ty, obejść)', 'obejdziesz'],
        ['Zastanawiasz się: kiedy ___ wiosna? (nadejść)', 'nadejdzie'], ['Krzyczysz do psa: „Maks, natychmiast ___ z sofy!”', 'zejdź'],
        ['Policjant mówi: „Proszę się ___!” (rozejść się)', 'rozejść'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(12, 'Środki transportu', 'Uzupełnij tekst wyrazami z ramki.', [
      ...[
        ['Najwygodniejszy na co dzień jest ___.', 'samochód'], ['Nie muszę czekać na przystanku na ___.', 'autobus'],
        ['...lub ___.', 'tramwaj'], ['W czasie wakacji wybieram ___.', 'samolot'],
        ['Jako student lubiłem podróżować ___.', 'pociągiem'], ['Znajomi uwielbiali jeździć ___.', 'autostopem'],
        ['Najtańszy środek transportu to ___.', 'rower'], ['Coraz popularniejsze są ___.', 'skutery'],
        ['W dużych miastach szybko dojedziemy ___.', 'metrem'], ['Marzę o jeździe ___.', 'motocyklem'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(13, 'Podróż samochodem', 'Posłuchaj nagrań i wybierz pasującą fotografię.', [
      ...[
        ['Nagranie 1 — opony', '1'], ['Nagranie 2 — dystrybutory paliwa', '2'],
        ['Nagranie 3 — stacja benzynowa', '3'], ['Nagranie 4 — myjnia', '4'],
        ['Nagranie 5 — produkty samochodowe', '5'], ['Nagranie 6 — płyn do samochodu', '6'],
        ['Nagranie 7 — samochód', '7'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ], ActivityKind.Choice, '-choice'),
    activity(14, 'Co pasuje?', 'Dopasuj właściwą reakcję do sytuacji.', [
      ...[
        ['Jedziesz niewłaściwą drogą według GPS.', 'Zawróć, jeśli to możliwe!'],
        ['Jest gigantyczny korek z powodu wypadku.', 'Weź mapę i znajdź jakiś objazd.'],
        ['Starsza osoba stoi w tramwaju.', 'Proszę usiąść!'],
        ['Turysta pyta o dojazd do dworca.', 'Proszę wysiąść na następnym przystanku.'],
        ['Kelner ignoruje wasz stolik.', 'Kiedy pan do nas podejdzie?'],
        ['Policjant zatrzymuje samochód do kontroli.', 'Proszę zjechać na pobocze i przygotować dokumenty.'],
        ['Podziemny parking jest przepełniony.', 'Musimy zjechać na najniższy poziom.'],
        ['Ktoś parkuje przed twoją bramą.', 'Jeżeli natychmiast pan nie odjedzie, zadzwonię po straż miejską.'],
        ['Samochód za tobą chce was wyprzedzić.', 'Zjedź na prawy pas!'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ], ActivityKind.Match, '-match'),
    activity(15, 'Słownictwo drogowe', 'Dopasuj definicje do nazw.', (() => {
      const pairs: Array<[string, string]> = [
        ['Parking poza centrum, skąd można kontynuować podróż transportem publicznym.', 'Parkuj i jedź'],
        ['Dokument uprawniający do prowadzenia pojazdu.', 'Prawo jazdy'],
        ['Fotel ochronny dla dziecka przewożonego samochodem.', 'Fotelik'],
        ['Numery identyfikacyjne umieszczone na samochodzie.', 'Tablice rejestracyjne'],
        ['Służba dbająca o porządek i przestrzeganie przepisów w mieście.', 'Straż miejska'],
        ['Podzespół samochodu chroniący pasażerów podczas zderzenia.', 'Poduszka powietrzna'],
        ['Miejsce drogi, na którym często dochodzi do wypadków.', 'Czarny punkt'],
      ];
      const names = pairs.map(([, name]) => name);
      return pairs.map(([prompt, answer], i) => choice(`q${i + 1}`, prompt, answer, names));
    })(), ActivityKind.Match),
  ],
};
