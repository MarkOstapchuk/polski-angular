import { ActivityKind, choice, Lesson, typed } from '../lesson-types';

const source = (exercise: number) => ({
  sourceExerciseId: `WB2-L12-E${String(exercise).padStart(2, '0')}`,
  sourceLabel: `Zeszyt ćwiczeń · część 2 · lekcja 12 · ćwiczenie ${exercise}`,
});
const activity = (exercise: number, title: string, instruction: string, items: ReturnType<typeof typed>[], kind = ActivityKind.Typed) => ({
  id: `p2-l12-e${String(exercise).padStart(2, '0')}`,
  ...source(exercise), kind, title, instruction, items,
});

export const LESSON_38: Lesson = {
  id: 38,
  title: 'Wjazd czy wyjazd?',
  subtitle: 'Opowiadamy o podróży samochodem i pytamy o drogę',
  topic: 'Transport · czasowniki ruchu · kierunek',
  pages: 'Ćwiczenia 1–15 · podręcznik 78–83',
  color: 'blue',
  activities: [
    activity(1, 'Czasowniki z „jechać”', 'Uzupełnij zdania właściwym czasownikiem ruchu.', [
      typed('q1', '___ na wakacje w zeszłym tygodniu. (wyjechać)', 'Wyjechaliśmy'),
      typed('q2', 'Musimy ___ z autostrady na najbliższym zjeździe.', 'zjechać'),
      typed('q3', 'Codziennie ___ tędy do pracy.', 'jeżdżę'),
      typed('q4', 'W końcu ___ do celu.', 'dojechaliśmy'),
      typed('q5', 'Nie wolno ___ przez czerwone światło.', 'przejechać'),
      typed('q6', 'On ___ do miasta od strony północnej.', 'wjechał'),
      typed('q7', '___ całe osiedle, bo nie było miejsca do parkowania.', 'Objechaliśmy'),
      typed('q8', '___ z gór na parking.', 'Zjechaliśmy'),
      typed('q9', 'Taksówka ___ pod wejście.', 'podjechała'),
      typed('q10', 'Pociąg zaraz ___ na stację.', 'wyjedzie'),
      typed('q11', '___ tam następnym razem autobusem.', 'Pojadę'),
    ]),
    activity(2, 'Środki transportu', 'Wpisz właściwy środek transportu.', [
      typed('q1', 'Na dwóch kółkach, z pedałami.', 'rower'),
      typed('q2', 'Po mieście jeździ po szynach.', 'tramwaj'),
      typed('q3', 'Duży pojazd, który zabiera pasażerów z przystanku.', 'autobus'),
      typed('q4', 'Lata między miastami i krajami.', 'samolot'),
      typed('q5', 'Jedzie po torach i ma wagony.', 'pociąg'),
      typed('q6', 'Jedziesz nim jako pasażer z nieznajomym kierowcą.', 'autostop'),
      typed('q7', 'Ma dwa koła i silnik.', 'motocykl'),
      typed('q8', 'Porusza się pod ziemią w dużym mieście.', 'metro'),
    ]),
    activity(3, 'Jak podróżujesz?', 'Uzupełnij wypowiedź nazwą środka transportu.', [
      typed('q1', 'Do pracy jadę samochodem, bo nie chcę dźwigać toreb.', 'samochodem'),
      typed('q2', 'W wakacje najszybciej docieram do celu ___.', 'samolotem'),
      typed('q3', 'Kiedy byłem studentem, lubiłem podróżować ___.', 'pociągiem'),
      typed('q4', 'Moi znajomi uwielbiali jeździć ___.', 'autostopem'),
      typed('q5', 'Najtańszy środek transportu, kiedy już go masz.', 'rower'),
      typed('q6', 'W mieście można szybko przemieszczać się ___.', 'metrem'),
    ]),
    activity(4, 'Co oznacza to wyrażenie?', 'Wpisz brakujące słowo lub wyrażenie.', [
      ...[
        ['Ledwo, prawie nie.', 'ledwie'], ['Po godzinie 12 w nocy.', 'po północy'],
        ['Niewielkie wzniesienie.', 'wzgórze'], ['Wszędzie pusto.', 'nigdzie żywej duszy'],
        ['Bez pojazdu, pieszo.', 'na piechotę'], ['W innym miejscu.', 'gdzie indziej'],
        ['Pojechać w przeciwnym kierunku.', 'zawrócić'], ['Trochę.', 'nieco'],
        ['Mokra ziemia po deszczu.', 'błoto'], ['Wewnątrz.', 'w środku'],
        ['Bardzo zły, straszny.', 'koszmarny'], ['Z tego miejsca.', 'stamtąd'],
        ['Nigdy, za nic.', 'nigdy w życiu'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(5, 'Rozmowa w trasie', 'Posłuchaj nagrania i uzupełnij odpowiedzi.', [
      typed('q1', 'Co zrobimy, jeśli źle jedziemy?', 'Zawrócimy.'),
      typed('q2', 'Co robimy, gdy widzimy korek?', 'Szukamy objazdu.'),
      typed('q3', 'Jak dotrzemy do celu?', 'Pojedziemy dalej i skręcimy.'),
      typed('q4', 'Gdzie trzeba wjechać?', 'Na właściwą drogę.'),
    ]),
    activity(6, 'Wybierz właściwą formę', 'Uzupełnij zdanie odpowiednią formą czasownika.', [
      ...[
        ['Jutro ___ w góry.', 'pojedziemy'], ['Na rondzie ___ w lewo.', 'skręcimy'],
        ['Za mostem ___ na autostradę.', 'wjedziemy'], ['Po kilku kilometrach ___ z drogi.', 'zjedziemy'],
        ['Czy ___ do centrum?', 'dojedziecie'], ['Samochody ___ się na skrzyżowaniu.', 'rozjadą'],
        ['Kiedy ___ autobus?', 'przyjedzie'], ['O której ___ pociąg?', 'odjedzie'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(7, 'Reklamacja za nieudany urlop', 'Uzupełnij fragment pisma do firmy turystycznej.', [
      typed('q1', 'Chciałem wyrazić swoje ___ z powodu nierzetelności usług.', 'niezadowolenie'),
      typed('q2', 'W ubiegłym tygodniu ___ z Państwa oferty.', 'skorzystałem'),
      typed('q3', 'Mapa dojazdowa zawierała błędne ___.', 'informacje'),
      typed('q4', 'Kuchnia miała być w pełni ___.', 'wyposażona'),
      typed('q5', 'Patelnia była stara i ___.', 'przypalona'),
      typed('q6', 'Domagam się ___ za nieudany urlop.', 'rekompensaty'),
    ]),
    activity(8, 'Czasowniki ruchu w różnych czasach', 'Wpisz formę pasującą do zdania.', [
      typed('q1', 'Wczoraj ___ do Krakowa. (pojechać, ty)', 'pojechałeś'),
      typed('q2', 'Statek ___ po rzece. (płynąć)', 'płynął'),
      typed('q3', 'Codziennie ___ do pracy pieszo. (chodzić, oni)', 'chodzą'),
      typed('q4', 'Teraz ___ do domu. (jechać, ja)', 'jadę'),
      typed('q5', 'Samolot ___ nad miastem. (latać)', 'lata'),
      typed('q6', 'W weekend ___ na rowerze. (jeździć, oni)', 'jeżdżą'),
      typed('q7', 'Lubię ___ łódką. (pływać)', 'pływać'),
      typed('q8', 'Wczoraj ona ___ do sklepu. (iść)', 'szła'),
      typed('q9', 'Dokąd ___ w zeszłym tygodniu? (lecieć, ty)', 'leciałaś'),
      typed('q10', 'On ___ do pracy pieszo. (pójść)', 'poszedł'),
    ]),
    activity(9, 'Tryb rozkazujący w drodze', 'Utwórz polecenie pasujące do sytuacji.', [
      ...[
        ['wejść', 'Wejdź'], ['wyjść', 'Wyjdź'], ['zjechać', 'Zjedź'], ['podejść', 'Podejdź'],
        ['obejść', 'Obejdź'], ['przejechać', 'Przejedź'], ['skręcić', 'Skręć'],
        ['dojechać', 'Dojedź'], ['wsiąść', 'Wsiądź'], ['zawrócić', 'Zawróć'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(10, 'Znaki drogowe i bezpieczeństwo', 'Wpisz nazwę lub komunikat.', [
      typed('q1', 'W samochodzie chroni pasażerów podczas wypadku.', 'poduszka powietrzna'),
      typed('q2', 'Tablice identyfikujące samochód.', 'tablice rejestracyjne'),
      typed('q3', 'Miejsce, w którym często dochodzi do wypadków.', 'czarny punkt'),
      typed('q4', 'Dokument uprawniający do prowadzenia samochodu.', 'prawo jazdy'),
      typed('q5', 'Służba pilnująca porządku na ulicach miasta.', 'straż miejska'),
      typed('q6', 'System wspomagający parkowanie i jazdę.', 'Parkuj i jedź'),
      typed('q7', 'Fotel bezpieczeństwa dla małego dziecka.', 'fotelik'),
    ]),
    activity(13, 'Sytuacje w podróży', 'Posłuchaj nagrań i uzupełnij czasowniki ruchu.', [
      ...[
        ['Jutro ___ z miasta wcześnie rano.', 'Wyjedziemy'], ['Na zjeździe ___ z autostrady.', 'Zjedziemy'],
        ['Czy ___ do celu przed wieczorem?', 'dojedziecie'], ['___ przez centrum i skręcę w prawo.', 'Przejadę'],
        ['Czy ___ na teren parkingu?', 'wjedziesz'], ['Oni ___ całe miasto, żeby ominąć korek.', 'Objadą'],
        ['___ z tej ulicy przy następnym skrzyżowaniu.', 'Zjadę'], ['Autobus ___ pod dworzec.', 'podjedzie'],
        ['Pociągi ___ za pięć minut.', 'Odjadą'], ['O której ___ z domu?', 'wyjedziesz'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(15, 'Planowanie trasy', 'Posłuchaj nagrań i wpisz właściwą formę czasownika ruchu.', [
      ...[
        ['Pociąg ___ za chwilę.', 'odjedzie'], ['___ na autostradę przy najbliższym węźle.', 'Wjedziemy'],
        ['Taksówka ___ pod hotel.', 'podjedzie'], ['O której ___ z parkingu?', 'wyjedziesz'],
        ['___ przez tunel i potem skręcę w lewo.', 'Przejadę'], ['Na następnym zjeździe ___ z autostrady.', 'Zjedziesz'],
        ['Czy ___ do centrum przed południem?', 'Dojedziecie'], ['Samochody ___ na skrzyżowaniu.', 'Objadą'],
        ['Pojazdy ___ w różnych kierunkach.', 'Rozjadą się'], ['Kiedy ___ po mnie?', 'Przyjedziesz'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
  ],
};
