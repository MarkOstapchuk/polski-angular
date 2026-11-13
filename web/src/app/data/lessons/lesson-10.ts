import { choice, Lesson, typed } from '../lesson-types';

const src = (n: number) => ({ sourceExerciseId: `WB-L10-E${String(n).padStart(2, '0')}`, sourceLabel: `Zeszyt ćwiczeń · ćwiczenie ${n}` });
const cats = ['napoje gorące', 'napoje zimne', 'desery', 'ciasta i ciastka', 'koktajle owocowe'];
const wz = ['z nami', 'z nim', 'z wami', 'ze mną', 'z nimi', 'z tobą', 'z nią'];

export const LESSON_10: Lesson = {
  id: 10,
  title: 'Uwielbiam polskie jedzenie!',
  subtitle: 'W restauracji i w kawiarni',
  topic: 'Menu · zamawianie · lubię i nie lubię',
  pages: 'Ćwiczenia 1–13 · strony 38–41',
  color: 'yellow',
  activities: [
    {
      id: 'l10-menu-groups', ...src(2), kind: 'typed', title: 'Grupy dań',
      instruction: 'Uzupełnij nazwę grupy dań lub produktów.',
      items: [
        typed('q1', 'pierogi ruskie, risotto, kapusta z grzybami to dania ___', 'wegetariańskie'),
        typed('q2', 'kawa mrożona, grzane wino, sok porzeczkowy to ___', 'napoje'),
        typed('q3', 'gołąbki, bigos, żeberka to dania ___', 'mięsne'),
        typed('q4', 'kasza, surówka z pora, ziemniaki z wody to ___', 'dodatki'),
        typed('q5', 'mięso z krowy to ___', 'wołowina'),
        typed('q6', 'barszcz biały, krem brokułowy, fasolowa to ___', 'zupy'),
        typed('q7', 'śledź w majonezie, filet z pstrąga, pieczony dorsz to dania ___', 'rybne'),
        typed('q8', 'kura, kaczka, indyk to ___', 'drób'),
      ],
    },
    {
      id: 'l10-drinks-desserts', ...src(10), kind: 'choice', title: 'Napoje i desery',
      instruction: 'Przypisz każdą pozycję z karty do właściwej grupy.',
      items: [
        choice('q1', 'cappuccino', 'napoje gorące', cats),
        choice('q2', 'lody truskawkowe', 'desery', cats),
        choice('q3', 'tort orzechowy', 'ciasta i ciastka', cats),
        choice('q4', 'szarlotka', 'ciasta i ciastka', cats),
        choice('q5', 'kawa mrożona', 'napoje zimne', cats),
        choice('q6', 'galaretka z bitą śmietaną', 'desery', cats),
        choice('q7', 'herbata z rumem', 'napoje gorące', cats),
        choice('q8', '… jagodowy', 'koktajle owocowe', cats),
        choice('q9', 'sernik', 'ciasta i ciastka', cats),
        choice('q10', 'gorąca czekolada', 'napoje gorące', cats),
        choice('q11', 'sok ze świeżych pomarańczy', 'napoje zimne', cats),
      ],
    },
    {
      id: 'l10-negation', ...src(6), kind: 'typed', title: 'Nie lubię…',
      instruction: 'Zapisz zdanie przeczące. Pamiętaj o dopełniaczu.',
      items: [
        typed('q2', 'Chcę duże piwo. → Nie chcę ___ .', 'dużego piwa'),
        typed('q3', 'Lubię gorzką czekoladę. → Nie lubię ___ .', 'gorzkiej czekolady'),
        typed('q4', 'Lubię chłodny kompot. → Nie lubię ___ .', 'chłodnego kompotu'),
        typed('q5', 'Zamawiam ciasto owocowe. → Nie zamawiam ___ .', 'ciasta owocowego'),
        typed('q6', 'Mam dobrą kanapkę. → Nie mam ___ .', 'dobrej kanapki'),
        typed('q7', 'Uwe pije zimny sok. → Uwe nie pije ___ .', 'zimnego soku'),
        typed('q8', 'Ewa robi włoską pizzę. → Ewa nie robi ___ .', 'włoskiej pizzy'),
      ],
    },
    {
      id: 'l10-good-form', ...src(7), kind: 'choice', title: 'Dobra forma',
      instruction: 'Wybierz właściwą formę.',
      items: [
        choice('q1', 'Uwe pije ___.', 'sok pomarańczowy', ['soku pomarańczowego', 'sokiem pomarańczowym', 'sok pomarańczowy']),
        choice('q2', 'Ewa lubi ___.', 'zupę pomidorową', ['zupą pomidorową', 'zupę pomidorową', 'zupy pomidorowej']),
        choice('q3', 'Masz ochotę na ___?', 'zimne piwo', ['zimnego piwa', 'zimne piwo', 'zimnym piwem']),
        choice('q4', 'Nie lubię ___.', 'zimnej herbaty', ['zimnej herbaty', 'zimną herbatą', 'zimną herbatę']),
        choice('q5', 'Sylwia nigdy nie je ___.', 'mięsa', ['mięso', 'mięsa', 'mięsem']),
        choice('q6', 'Dla mnie ___.', 'kurczak', ['kurczak', 'kurczaka', 'kurczakiem']),
        choice('q7', 'Nie piję ___.', 'alkoholu', ['alkohol', 'alkoholu', 'alkoholem']),
        choice('q8', 'Poproszę herbatę z ___.', 'rumem', ['rum', 'rumu', 'rumem']),
      ],
    },
    {
      id: 'l10-restaurant-cloze', ...src(11), kind: 'typed', title: 'W kawiarni',
      instruction: 'Uzupełnij dialog słowami z ramki: raz, razy, wszystko, polecam, czy jest, podać, dla mnie, jeszcze.',
      items: [
        typed('q1', 'Kelner: Dzień dobry, co ___?', 'podać'),
        typed('q2', 'Klientka: ___ biała kawa, a dla koleżanki herbata zielona.', 'Dla mnie'),
        typed('q3', 'Kelner: Czy coś ___?', 'jeszcze'),
        typed('q4', 'Klientka: Tak, ___ szarlotka z lodami?', 'Czy jest'),
        typed('q5', 'Kelner: Niestety, nie mamy lodów. ___ pyszną szarlotkę z bitą śmietaną.', 'Polecam'),
        typed('q6', 'Klientka: Dobrze. Poproszę więc ___ szarlotkę i dwa ___ koktajl truskawkowy. (pierwsza luka)', 'raz'),
        typed('q7', 'Klientka: Dobrze. Poproszę więc raz szarlotkę i dwa ___ koktajl truskawkowy. (druga luka)', 'razy'),
        typed('q8', 'Kelner: Czy to już ___?', 'wszystko'),
      ],
    },
    {
      id: 'l10-pronouns-match', ...src(12), kind: 'choice', title: 'Z kim? Dopasuj formy',
      instruction: 'Dopasuj zaimek do formy z narzędnikiem.',
      items: [
        choice('q1', 'ja', 'ze mną', wz),
        choice('q2', 'ty', 'z tobą', wz),
        choice('q3', 'on', 'z nim', wz),
        choice('q4', 'ona', 'z nią', wz),
        choice('q5', 'ono', 'z nim', wz),
        choice('q6', 'my', 'z nami', wz),
        choice('q7', 'wy', 'z wami', wz),
        choice('q8', 'oni', 'z nimi', wz),
        choice('q9', 'one', 'z nimi', wz),
      ],
    },
    {
      id: 'l10-with-whom', ...src(13), kind: 'typed', title: 'Z kim? Uzupełnij',
      instruction: 'Wpisz właściwą formę zaimka po „z”.',
      items: [
        typed('q1', 'Kasia lubi rozmawiać ze ___ (ja).', 'mną'),
        typed('q2', 'Nie lubię się spotykać z ___ (one).', 'nimi'),
        typed('q3', 'Czy chcesz jechać z ___ (on) do Wrocławia?', 'nim'),
        typed('q4', 'Pani Basia chce z ___ (ty) porozmawiać.', 'tobą'),
        typed('q5', 'Czy Arek pracuje z ___ (wy) trzy lata?', 'wami'),
        typed('q6', 'Kamil idzie z ___ (ona) do teatru.', 'nią'),
        typed('q7', 'Marta chce się z ___ (oni) pożegnać.', 'nimi'),
        typed('q8', 'Oni idą z ___ (my) do kawiarni.', 'nami'),
      ],
    },
  ],
};
