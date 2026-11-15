import { ActivityKind, choice, Lesson, typed } from '../lesson-types';

const source = (exercise: number) => ({
  sourceExerciseId: `WB2-L15-E${String(exercise).padStart(2, '0')}`,
  sourceLabel: `Zeszyt ćwiczeń · część 2 · lekcja 15 · ćwiczenie ${exercise}`,
});
const activity = (exercise: number, title: string, instruction: string, items: ReturnType<typeof typed>[], kind = ActivityKind.Typed) => ({
  id: `p2-l15-e${String(exercise).padStart(2, '0')}`,
  ...source(exercise), kind, title, instruction, items,
});

export const LESSON_41: Lesson = {
  id: 41,
  title: 'Wesołych Świąt!',
  subtitle: 'Opowiadamy o polskich świętach i rodzinnych zwyczajach',
  topic: 'Święta · zwyczaje · Boże Narodzenie i Wielkanoc',
  pages: 'Ćwiczenia 1–11 · podręcznik 100–105',
  color: 'yellow',
  activities: [
    activity(1, 'Święta w Polsce', 'Dopasuj pytanie do odpowiedzi.', [
      typed('q1', 'Jak świętujesz Nowy Rok?', 'Otwieram szampana i bawię się z przyjaciółmi.'),
      typed('q2', 'Co robisz szóstego stycznia?', 'Piszę kredą inicjały Trzech Króli na drzwiach.'),
      typed('q3', 'Od czego zależy termin Wielkanocy?', 'Od pierwszej wiosennej pełni księżyca.'),
      typed('q4', 'Jakie inne święta zależą od daty Wielkanocy?', 'Boże Ciało i Zielone Świątki.'),
      typed('q5', 'Czy początek maja jest wolny z powodu świąt kościelnych?', 'Nie, to święta narodowe.'),
      typed('q6', 'Dlaczego 15 sierpnia ludzie pielgrzymują do Częstochowy?', 'Bo na Jasnej Górze jest sanktuarium Matki Boskiej.'),
      typed('q7', 'Co robisz 1 listopada?', 'Odwiedzam groby bliskich i zapalam znicze.'),
      typed('q8', 'Do kiedy Polska była w niewoli?', 'Do 11 listopada 1918 roku.'),
      typed('q9', 'Który dzień Bożego Narodzenia lubisz najbardziej?', 'Wigilię.'),
    ]),
    activity(2, 'Święta religijne i narodowe', 'Wpisz wyraz, który nie ma charakteru religijnego.', [
      ...[
        ['Betlejem, Wszystkich Świętych, Jezus Chrystus', 'pochód pierwszomajowy'],
        ['zmartwychwstanie, Wielkanoc, Boże Narodzenie', 'urodziny'],
        ['procesja, modlitwa, Duch Święty', 'konstytucja'],
        ['wniebowzięcie, Maryja Panna, Matka Boska', 'pełnia księżyca'],
        ['pielgrzymować, Wigilia, sanktuarium', 'niepodległość'],
        ['cmentarz, ołtarz, modlitwa', 'PRL'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(3, 'Boże Narodzenie', 'Wpisz nazwę zwyczaju lub świątecznego przedmiotu.', [
      ...[
        ['Wieczór 24 grudnia.', 'Wigilia'], ['Nocna msza bożonarodzeniowa.', 'pasterka'],
        ['Osoba pilnująca owiec.', 'pasterz'], ['Tradycyjna ryba na Wigilię.', 'karp'],
        ['Świąteczna pieśń.', 'kolęda'], ['Miejsce narodzin Jezusa.', 'żłóbek'],
        ['Cienki opłatek, którym dzielimy się przy stole.', 'opłatek'], ['Postać z Betlejemskiej stajenki.', 'anioł'],
        ['Świąteczne drzewko.', 'choinka'], ['Ozdoba zawieszana na choince.', 'bombka'],
        ['Rzecz pod choinką dla bliskiej osoby.', 'prezent'], ['Świeci na czubku choinki.', 'gwiazda'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(4, 'Co nie pasuje?', 'Wybierz wyraz z innej grupy.', [
      choice('q1', 'dar / prezent / kolęda', 'kolęda', ['dar', 'prezent', 'kolęda']),
      choice('q2', 'gwiazda / księżyc / słońce', 'gwiazda', ['gwiazda', 'księżyc', 'słońce']),
      choice('q3', 'barszcz / grzybowa / gołąbki', 'gołąbki', ['barszcz', 'grzybowa', 'gołąbki']),
      choice('q4', 'opłatek / post / życzenia', 'post', ['opłatek', 'post', 'życzenia']),
      choice('q5', 'msza / pasterka / drzewko', 'drzewko', ['msza', 'pasterka', 'drzewko']),
      choice('q6', 'kompot / ozdoby / bombki', 'kompot', ['kompot', 'ozdoby', 'bombki']),
      choice('q7', 'potrawa / danie / stół', 'stół', ['potrawa', 'danie', 'stół']),
      choice('q8', 'nakrycie / choinka / obrus', 'choinka', ['nakrycie', 'choinka', 'obrus']),
      choice('q9', 'pasterz / pastuszek / piernik', 'piernik', ['pasterz', 'pastuszek', 'piernik']),
      choice('q10', 'sianko / uszka / pierogi', 'sianko', ['sianko', 'uszka', 'pierogi']),
      choice('q11', 'choinka / stajenka / drzewko', 'stajenka', ['choinka', 'stajenka', 'drzewko']),
      choice('q12', 'głos / groch / gołąbki', 'głos', ['głos', 'groch', 'gołąbki']),
    ], ActivityKind.Choice),
    activity(5, 'Przepis na bigos', 'Uzupełnij przepis formą z listy.', [
      typed('q1', 'Grzyby dokładnie umyć i ___.', 'namoczyć'),
      typed('q2', 'Kapustę ___ i ___.', ['umyć; pokroić', 'umyć, pokroić']),
      typed('q3', 'Dodać ___ laurowe i ziele ___.', ['listki; angielskie', 'listki, angielskie']),
      typed('q4', 'Mięso ___ na patelni.', 'zrumienić'),
      typed('q5', 'Dodać ___ i dusić.', 'kapustę'),
      typed('q6', 'Wlać czerwone ___.', 'wino'),
      typed('q7', 'Na końcu ___ do smaku.', 'doprawić'),
      typed('q8', 'Podawać z ___.', 'chlebem'),
    ]),
    activity(6, 'Jak obchodzimy święta?', 'Uzupełnij zdania o zwyczajach bezosobową formą.', [
      ...[
        ['Boże Narodzenie ___ rodzinnie.', 'obchodzi się'], ['Wigilię ___ z bliskimi.', 'spędza się'],
        ['Do kościoła ___ na pasterkę.', 'chodzi się'], ['Prezenty ___ pod choinką.', 'dostaje się'],
        ['Dom ___ i ozdabia.', 'sprząta się'], ['Kolędy ___ wspólnie.', 'śpiewa się'],
        ['Groby bliskich ___ pierwszego listopada.', 'odwiedza się'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(7, 'Wigilia w Stanach i w Polsce', 'Posłuchaj nagrania i uzupełnij opowieść Steve’a.', [
      typed('q1', 'Od pięciu lat spędzam ___ Bożego Narodzenia w Polsce.', 'święta'),
      typed('q2', 'Największa różnica to ___.', 'Wigilia'),
      typed('q3', 'Na stole powinno być dwanaście ___.', 'potraw'),
      typed('q4', 'Nie przepadam za ___ potrawami.', 'wigilijnymi'),
      typed('q5', 'Najbardziej smakuje mi ___.', 'karp'),
      typed('q6', 'W Stanach Boże Narodzenie jest najważniejsze, a Wigilia to czas z ___.', 'rodziną'),
    ]),
    activity(8, 'Zwyczaje świąteczne', 'Utwórz formę bezosobową z „się”.', [
      ...[
        ['wywodzić się', 'wywodzi się'], ['dekorować dom', 'dekoruje się'], ['przywiązywać życzenia do gałązek', 'przywiązuje się'],
        ['mówić życzenia', 'mówi się'], ['zawieszać ozdoby', 'zawiesza się'], ['puszczać lampiony', 'puszcza się'],
        ['obchodzić święto', 'obchodzi się'], ['przebierać się', 'przebiera się'],
        ['organizować spotkania', 'organizuje się'], ['chodzić na pasterkę', 'chodzi się'], ['odwiedzać rodzinę', 'odwiedza się'],
        ['dostawać prezenty', 'dostaje się'], ['robić tradycyjne potrawy', 'robi się'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(9, 'Halloween', 'Posłuchaj nagrania i uzupełnij opis zwyczaju.', [
      typed('q1', 'Halloween ___ w nocy 31 października.', 'obchodzi się'),
      typed('q2', 'Dzieci ___ za czarownice i potwory.', 'przebierają się'),
      typed('q3', 'Na ulicach ___ pochody.', 'organizuje się'),
      typed('q4', 'Dzieci ___ po okolicy i ___ sąsiadów.', ['chodzą; odwiedzają', 'chodzą, odwiedzają']),
      typed('q5', 'Gdy nie ___ cukierka, robi się psikusa.', 'dostaje się'),
    ]),
    activity(10, 'Wielkanoc', 'Uzupełnij słownictwo związane z Wielkanocą.', [
      typed('q1', 'Wielkanoc jest świętem ___.', 'religijnym'),
      typed('q2', 'Wielkanoc to tradycyjna ___.', 'tradycja'),
      typed('q3', 'Zwyczaje wielkanocne pamiętam z ___.', 'dzieciństwa'),
      typed('q4', 'W ___ Sobotę święci się pokarmy.', 'Wielką'),
      typed('q5', 'W Wielką Sobotę ___ się pokarmy.', 'święci'),
      typed('q6', 'Strażacy trzymają wartę przy ___.', 'grobie'),
      typed('q7', 'Wielkanocny ___ przynosi dzieciom czekoladki.', 'zając'),
      typed('q8', 'Dzieci szukają czekoladowych ___.', 'jajek'),
      typed('q9', 'Na śniadanie wielkanocne podaje się ___.', 'jajka'),
      typed('q10', 'Malowane jajka to ___.', 'pisanki'),
      typed('q11', 'W poniedziałek wielkanocny jest ___.', 'lany poniedziałek'),
      typed('q12', 'Po oblaniu wodą ktoś jest ___.', 'oblany'),
      typed('q13', 'Ostry dodatek do wielkanocnego stołu.', 'chrzan'),
    ]),
  ],
};
