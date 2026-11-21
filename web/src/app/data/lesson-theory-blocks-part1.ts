import type { TheoryBlock } from './lesson-theory';

/**
 * Detailed textbook theory blocks & grammar tables for Part 1 (Lessons 6–26),
 * mapped in workbook/coursebook order.
 */
export const PART1_THEORY_BLOCKS: Record<number, TheoryBlock[]> = {
  6: [
    {
      id: 'l06-b1',
      includeCoursebook: true,
      wbRange: [1, 5],
      title: 'Свободное время и спорт: grać w vs grać na',
      summary: 'Рассказываем о хобби, спорте и свободном времени. Выбор предлога и падежа после grać зависит от типа занятия.',
      bullets: [
        'Спорт и игры: grać w + винительный падеж (w tenisa, w piłkę nożną, w szachy).',
        'Музыкальные инструменты и компьютер: grać na + предложный падеж (na gitarze, na pianinie, na komputerze).',
        'Полезные глаголы: nudzić się (скучать), szukać (искать + род. п.).',
      ],
      examples: [
        { polish: 'Lubię grać w tenisa i grać na gitarze.', translation: 'Я люблю играть в теннис и играть на гитаре.' },
        { polish: 'Co robisz? — Nudzę się!', translation: 'Что делаешь? — Скучаю!' },
      ],
    },
    {
      id: 'l06-b2',
      includeCoursebook: false,
      wbRange: [6, 12],
      title: 'Три модели спряжения в настоящем времени и przyтяжательные местоимения',
      summary: 'Закрепляем все три основные группы спряжения польских глаголов и согласование mój/moja/moje, twój/twoja/twoje.',
      table: {
        headers: ['Лицо', '-m / -sz (mieć)', '-ę / -esz (pisać / pracować)', '-ę / -isz (lubić)'],
        rows: [
          ['ja', 'mam', 'piszę / pracuję', 'lubię'],
          ['ty', 'masz', 'piszesz / pracujesz', 'lubisz'],
          ['on / ona', 'ma', 'pisze / pracuje', 'lubi'],
          ['my', 'mamy', 'piszemy / pracujemy', 'lubimy'],
          ['wy', 'macie', 'piszecie / pracujecie', 'lubicie'],
          ['oni / one', 'mają', 'piszą / pracują', 'lubią'],
        ],
      },
      examples: [
        { polish: 'To jest moja siostra i mój brat.', translation: 'Это моя сестра и мой брат.' },
      ],
    },
  ],
  7: [
    {
      id: 'l07-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Винительный падеж (Biernik: kogo? co?) в покупках',
      summary: 'Прямое дополнение после глаголов (kupuję, mam, widzę) и после «Proszę…» ставится в винительный падеж.',
      table: {
        headers: ['Род', 'Прилагательное', 'Существительное', 'Пример'],
        rows: [
          ['Мужской одуш.', '-ego', '-a', 'mam młodszego brata'],
          ['Мужской неодуш.', '= И. п. (-y/-i)', '= И. п.', 'kupuję nowy telefon'],
          ['Женский', '-ą', '-ę (или = И. п. на согл.)', 'mam długą listę zakupów'],
          ['Средний', '= И. п. (-e/-ie)', '= И. п.', 'widzę dobre pióro'],
        ],
      },
      examples: [
        { polish: 'Poproszę świeży chleb i czarną kawę.', translation: 'Дайте, пожалуйста, свежий хлеб и чёрный кофе.' },
      ],
    },
    {
      id: 'l07-b2',
      includeCoursebook: false,
      wbRange: [7, 15],
      title: 'Цены, złoty и числительные 100–1000',
      summary: 'Спрашиваем цену (Ile kosztuje / kosztują?) и правильно согласуем слово złoty.',
      table: {
        headers: ['Количество', 'Форма złoty', 'Глагол'],
        rows: [
          ['1', 'złoty', 'kosztuje'],
          ['2, 3, 4 (и 22–24…)', 'złote', 'kosztuje / kosztują'],
          ['5–21, 25–31…', 'złotych', 'kosztuje / kosztują'],
        ],
      },
      bullets: [
        'Сотни: 100 sto, 200 dwieście, 300 trzysta, 400 czterysta, 500 pięćset, 600 sześćset, 700 siedemset, 800 osiemset, 900 dziewięćset, 1000 tysiąc.',
      ],
      examples: [
        { polish: 'Ile kosztuje ten słownik? — Kosztuje czterdzieści pięć złotych.', translation: 'Сколько стоит этот словарь? — Стоит 45 злотых.' },
      ],
    },
  ],
  8: [
    {
      id: 'l08-b1',
      includeCoursebook: true,
      wbRange: [1, 5],
      title: 'Еда, напитки и глаголы jeść, pić, woleć',
      summary: 'Говорим о приёмах пищи и предпочтениях. Для сравнения предпочтений используем woleć + винительный + niż + винительный.',
      table: {
        headers: ['Лицо', 'jeść (есть)', 'pić (пить)', 'woleć (предпочитать)'],
        rows: [
          ['ja', 'jem', 'piję', 'wolę'],
          ['ty', 'jesz', 'pijesz', 'wolisz'],
          ['on / ona', 'je', 'pije', 'woli'],
          ['my', 'jemy', 'pijemy', 'wolimy'],
          ['wy', 'jecie', 'pijecie', 'wolicie'],
          ['oni / one', 'jedzą', 'piją', 'wolą'],
        ],
      },
      examples: [
        { polish: 'Wolę herbatę niż kawę.', translation: 'Я предпочитаю чай кофе.' },
      ],
    },
    {
      id: 'l08-b2',
      includeCoursebook: false,
      wbRange: [6, 12],
      title: '«С чем?»: z + Творительный падеж (ед. и мн. ч.)',
      summary: 'Когда говорим, с чем подаётся блюдо или напиток, после предлога z ставим творительный падеж (Narzędnik).',
      table: {
        headers: ['Число / род', 'Прилагательное', 'Существительное', 'Пример'],
        rows: [
          ['Ед. ч. (м. / ср.)', '-ym / -im', '-em / -iem', 'z żółtym serem, z mlekiem'],
          ['Ед. ч. (ж.)', '-ą', '-ą', 'z cytryną, z zimną wodą'],
          ['Мн. ч. (все)', '-ymi / -imi', '-ami (исключ. -mi)', 'z dobrymi pomidorami'],
        ],
      },
      examples: [
        { polish: 'Jem kanapkę z żółtym serem i pomidorami.', translation: 'Я ем бутерброд с жёлтым сыром и помидорами.' },
      ],
    },
  ],
  9: [
    {
      id: 'l09-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Фрукты, овощи и множественное число (не-мужско-личный род)',
      summary: 'У неодушевлённых существительных мужского рода, а также у женского и среднего рода именительный и винительный падежи множественного числа совпадают.',
      table: {
        headers: ['Основа / род', 'Окончание сущ.', 'Окончание прил.', 'Пример'],
        rows: [
          ['Твёрдая (м./ж.)', '-y', '-e', 'świeże banany, ryby'],
          ['После k, g (м./ж.)', '-i', '-ie', 'słodkie ziemniaki, marchewki'],
          ['Мягкая и c, cz, sz, rz, ż', '-e', '-e / -ie', 'soczyste owoce, pomarańcze'],
          ['Средний род', '-a', '-e / -ie', 'czerwone jabłka, jajka'],
        ],
      },
      examples: [
        { polish: 'Kupuję świeże pomidory i słodkie jabłka.', translation: 'Я покупаю свежие помидоры и сладкие яблоки.' },
      ],
    },
    {
      id: 'l09-b2',
      includeCoursebook: false,
      wbRange: [7, 14],
      title: 'Описания продуктов и согласование во множественном числе',
      summary: 'Прилагательные во множественном числе для всех не-мужско-личных существительных имеют единое окончание -e (или -ie после k, g).',
      bullets: [
        'świeży → świeże, suszony → suszone, miękki → miękkie, twardy → twarde.',
        'В конструкциях «To są…» и «Lubię…» формы совпадают: To są smaczne owoce / Lubię smaczne owoce.',
      ],
      examples: [
        { polish: 'To są świeże pomidory, a tam są tanie banany.', translation: 'Это свежие помидоры, а там дешёвые бананы.' },
      ],
    },
  ],
  10: [
    {
      id: 'l10-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'В ресторане: заказ и родительный падеж при отрицании (Dopełniacz)',
      summary: 'Когда мы что-то заказываем (утверждение), используем винительный падеж, а при отрицании (nie jem, nie lubię, nie zamawiam) дополнение переходит в родительный падеж.',
      table: {
        headers: ['Род', 'Прилагательное (Р. п.)', 'Существительное (Р. п.)', 'Пример'],
        rows: [
          ['Мужской / средний', '-ego', '-a / -u', 'nie zamawiam dobrego deseru'],
          ['Женский', '-ej', '-y / -i', 'nie piję czarnej kawy, zimnej wody'],
        ],
      },
      bullets: [
        'При заказе: „Poproszę + винительный” (Poproszę kawę), но „Dla mnie + именительный” (Dla mnie kawa).',
      ],
      examples: [
        { polish: 'Zamawiam kawę, ale nie zamawiam deseru.', translation: 'Я заказываю кофе, но не заказываю десерт.' },
      ],
    },
    {
      id: 'l10-b2',
      includeCoursebook: false,
      wbRange: [7, 14],
      title: 'Личные местоимения после предлога z (с кем?)',
      summary: 'После предлога z («с кем?») личные местоимения стоят в творительном падеже в особой форме.',
      table: {
        headers: ['И. п.', 'z + Т. п.', 'И. п.', 'z + Т. п.'],
        rows: [
          ['ja', 'ze mną', 'my', 'z nami'],
          ['ty', 'z tobą', 'wy', 'z wami'],
          ['on / ono', 'z nim', 'oni / one', 'z nimi'],
          ['ona', 'z nią', '—', '—'],
        ],
      },
      examples: [
        { polish: 'Idę do restauracji z nimi.', translation: 'Я иду в ресторан с ними.' },
      ],
    },
  ],
  11: [
    {
      id: 'l11-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Семья и притяжательные местоимения (czyj? czyja? czyje?)',
      summary: 'Местоимения mój, twój, nasz, wasz меняются по роду предмета, а формы jego, jej, ich остаются неизменными.',
      table: {
        headers: ['Владелец', 'Муж. (czyj?)', 'Жен. (czyja?)', 'Сред. (czyje?)'],
        rows: [
          ['ja', 'mój', 'moja', 'moje'],
          ['ty', 'twój', 'twoja', 'twoje'],
          ['on / ona / oni', 'jego / jej / ich', 'jego / jej / ich', 'jego / jej / ich'],
          ['my', 'nasz', 'nasza', 'nasze'],
          ['wy', 'wasz', 'wasza', 'wasze'],
        ],
      },
      examples: [
        { polish: 'Czyja to książka? — To jest moja książka.', translation: 'Чья это книга? — Это моя книга.' },
      ],
    },
    {
      id: 'l11-b2',
      includeCoursebook: false,
      wbRange: [7, 14],
      title: 'Наречия частотности и двойное отрицание',
      summary: 'Наречия zawsze, zwykle, często, rzadko, nigdy обычно ставятся перед глаголом. Со словом nigdy всегда нужно nie перед глаголом.',
      bullets: [
        'zawsze (всегда) → zwykle (обычно) → często (часто) → czasem (иногда) → rzadko (редко) → nigdy nie (никогда не).',
        'Правильно: Nigdy nie pracuję w niedzielę (двойное отрицание обязательно).',
      ],
      examples: [
        { polish: 'Ona nigdy nie pije kawy wieczorem.', translation: 'Она никогда не пьёт кофе вечером.' },
      ],
    },
  ],
  12: [
    {
      id: 'l12-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Который час? Время и дни недели',
      summary: 'Точное время называем с помощью предлога o + порядковое числительное женского рода в предложном падеже.',
      table: {
        headers: ['Конструкция', 'Значение', 'Пример'],
        rows: [
          ['o + -ej', 'в ... часов', 'o pierwszej (1:00), o ósmej (8:00)'],
          ['kwadrans po + -ej', '15 минут после...', 'kwadrans po trzeciej (3:15)'],
          ['za + минуты + -a', 'без ... минут ...', 'za dziesięć piąta (4:50)'],
          ['o wpół do + -ej', 'половина ...', 'o wpół do ósmej (7:30)'],
        ],
      },
      bullets: [
        'Дни недели (kiedy?): w poniedziałek, we wtorek, w środę, w czwartek, w piątek, w sobotę, w niedzielę.',
      ],
      examples: [
        { polish: 'Spotkamy się w poniedziałek o ósmej.', translation: 'Мы встретимся в понедельник в восемь.' },
      ],
    },
    {
      id: 'l12-b2',
      includeCoursebook: false,
      wbRange: [8, 16],
      title: 'Приглашения и направление: iść do vs iść na',
      summary: 'После iść предлог зависит от того, идём ли мы в помещение/учреждение или на мероприятие/событие.',
      bullets: [
        'iść do + родительный падеж — помещения, здания: do kina, do teatru, do restauracji, do pracy.',
        'iść na + винительный падеж — события, открытые места: na koncert, na wystawę, na kolację, na spacer.',
        'Приглашения: Masz ochotę pójść…? / Może pójdziemy…?',
      ],
      examples: [
        { polish: 'W piątek idę do kina, a w sobotę na koncert.', translation: 'В пятницу я иду в кино, а в субботу на концерт.' },
      ],
    },
  ],
  13: [
    {
      id: 'l13-b1',
      includeCoursebook: true,
      wbRange: [1, 8],
      title: 'Прошедшее время (Czas przeszły): единственное число',
      summary: 'В прошедшем времени глагол согласуется по роду: мужчины говорят -łem / -łeś, женщины — -łam / -łaś.',
      table: {
        headers: ['Лицо', 'Мужской род', 'Женский род', 'Пример (robić)'],
        rows: [
          ['ja', '-łem', '-łam', 'robiłem / robiłam'],
          ['ty', '-łeś', '-łaś', 'robiłeś / robiłaś'],
          ['on / ona / ono', '-ł / -ła / -ło', 'robił / robiła / robiło', '—'],
        ],
      },
      bullets: [
        'Глаголы на -eć (mieć, rozumieć) в ед. ч. меняют e на a: miałem/miałam, rozumiałem/rozumiałam.',
      ],
      examples: [
        { polish: 'Wczoraj byłam w kinie i jadłam kolację.', translation: 'Вчера я была в кино и ужинала.' },
      ],
    },
    {
      id: 'l13-b2',
      includeCoursebook: false,
      wbRange: [9, 16],
      title: 'Прошедшее время: множественное число и особые основы',
      summary: 'Во множественном числе различаем мужско-личную форму (-li-) и женско-вещную (-ły-).',
      table: {
        headers: ['Лицо', 'Муж.-личн. (oni)', 'Не-муж.-личн. (one)', 'Глаголы на -eć (mieć)'],
        rows: [
          ['my', '-liśmy', '-łyśmy', 'mieliśmy / miałyśmy'],
          ['wy', '-liście', '-łyście', 'mieliście / miałyście'],
          ['oni / one', '-li', '-ły', 'mieli / miały'],
        ],
      },
      bullets: [
        'Особые основы: jeść → jadłem / jadłam / jedli; iść → szedłem / szłam / szli; pójść → poszedłem / poszłam / poszli.',
      ],
      examples: [
        { polish: 'Tom poszedł na spacer, a one oglądały film.', translation: 'Том пошёл на прогулку, а они смотрели фильм.' },
      ],
    },
  ],
  14: [
    {
      id: 'l14-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Глаголы движения: iść / chodzić и jechać / jeździć',
      summary: 'Выбор глагола зависит от того, идёт ли речь о движении пешком или на транспорте, а также разовое ли оно или регулярное.',
      table: {
        headers: ['Способ', 'Сейчас / 1 раз (куда-то)', 'Регулярно / обычно'],
        rows: [
          ['Пешком', 'iść (idę, idziesz, idzie…)', 'chodzić (chodzę, chodzisz, chodzi…)'],
          ['На транспорте', 'jechać (jadę, jedziesz, jedzie…)', 'jeździć (jeżdżę, jeździsz, jeździ…)'],
        ],
      },
      bullets: [
        'Транспорт после jechać / jeździć ставим в творительный падеж: samochodem, autobusem, tramwajem, pociągiem.',
      ],
      examples: [
        { polish: 'Dziś jadę tramwajem, a zwykle jeżdżę autobusem.', translation: 'Сегодня я еду на трамвае, а обычно езжу на автобусе.' },
      ],
    },
    {
      id: 'l14-b2',
      includeCoursebook: false,
      wbRange: [8, 15],
      title: 'Ориентиры в городе и местоимения с предлогами (na niego, na nią)',
      summary: 'Спрашиваем дорогу в городе и ставим личные местоимения после предлогов с начальным n-.',
      bullets: [
        'Ориентиры: prosto (прямо), w lewo (налево), w prawo (направо), skrzyżowanie (перекрёсток), światła (светофор).',
        'Без предлога: widzę go / ją / ich. После предлога: czekam na niego / na nią / na nich.',
      ],
      examples: [
        { polish: 'Czekam na niego przy światłach.', translation: 'Я жду его у светофора.' },
      ],
    },
  ],
  15: [
    {
      id: 'l15-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Упаковки и количество: 2–4 vs 5+ / dużo / mało',
      summary: 'После числительных 2, 3, 4 существительное стоит в именительном падеже мн. ч., а после 5 и более (и слов dużo, mało, kilka) — в родительном мн. ч.',
      table: {
        headers: ['Количество', 'Падеж', 'Пример'],
        rows: [
          ['1', 'И. п. / В. п. ед. ч.', 'jeden karton, jedną paczkę'],
          ['2, 3, 4 (и 22–24…)', 'И. п. мн. ч.', 'dwa kartony, trzy duże jabłka'],
          ['5+, dużo, mało, kilka', 'Р. п. мн. ч.', 'pięć dużych kartonów, dużo jabłek'],
        ],
      },
      examples: [
        { polish: 'Poproszę dwa kartony soku i pięć jabłek.', translation: 'Дайте, пожалуйста, две упаковки сока и пять яблок.' },
      ],
    },
    {
      id: 'l15-b2',
      includeCoursebook: false,
      wbRange: [8, 15],
      title: 'Глаголы с родительным падежом и личные местоимения (do niego, szukam go)',
      summary: 'Глаголы szukać, bać się и отрицание nie ma требуют родительного падежа.',
      table: {
        headers: ['Лицо', 'Без предлога (Р./В.)', 'После предлога (do, dla, od)'],
        rows: [
          ['ja / ty', 'mnie / cię', 'do mnie / do ciebie'],
          ['on / ona', 'go / jej (Р.) / ją (В.)', 'do niego / do niej'],
          ['my / wy / oni', 'nas / was / ich', 'do nas / do was / do nich'],
        ],
      },
      examples: [
        { polish: 'Szukam znaczków i nie mam koperty.', translation: 'Я ищу марки, и у меня нет конверта.' },
      ],
    },
  ],
  16: [
    {
      id: 'l16-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Погода, наречия (jak?) и времена года / месяцы',
      summary: 'Наречия образуются от прилагательных на -o или -e/-ie. Времена года стоят в творительном падеже, а месяцы — с предлогом w.',
      table: {
        headers: ['Вопрос', 'Форма', 'Примеры'],
        rows: [
          ['Jak? (наречие)', '-o / -e / -ie', 'zimno, ciepło, słonecznie, dobrze'],
          ['Kiedy? (сезон)', 'творительный п.', 'wiosną, latem, jesienią, zimą'],
          ['Kiedy? (месяц)', 'w + местный п.', 'w styczniu, w maju, w grudniu'],
        ],
      },
      examples: [
        { polish: 'Latem jest ciepło, a w styczniu jest zimno.', translation: 'Летом тепло, а в январе холодно.' },
      ],
    },
    {
      id: 'l16-b2',
      includeCoursebook: false,
      wbRange: [8, 15],
      title: 'Будущее время (Czas przyszły): będę + инфинитив или -ł/-ła',
      summary: 'Сложное будущее время несовершенных глаголов строится с помощью вспомогательного глагола być.',
      table: {
        headers: ['Лицо', 'być (буд.)', 'Вариант 1 (инфинитив)', 'Вариант 2 (-ł/-ła/-li)'],
        rows: [
          ['ja', 'będę', 'będę pracować', 'będę pracował / pracowała'],
          ['ty', 'będziesz', 'będziesz czytać', 'będziesz czytał / czytała'],
          ['on / ona', 'będzie', 'będzie pisać', 'będzie pisał / pisała'],
          ['my / wy / oni', 'będziemy / będziecie / będą', 'będziemy robić', 'będziemy robili / robiły'],
        ],
      },
      bullets: [
        'После chcieć, móc, musieć в будущем времени часто используют форму на -ł/-ła: będę musiał, będę mogła.',
      ],
      examples: [
        { polish: 'Jutro będzie padać, więc będę pracować w domu.', translation: 'Завтра будет дождь, поэтому я буду работать дома.' },
      ],
    },
  ],
  17: [
    {
      id: 'l17-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Как сказать «мне нравится»: lubić vs podobać się',
      summary: 'При использовании lubić субъект в именительном падеже, а предмет — в винительном. При podobać się предмет — подлежащее, а человек стоит в дательном падеже.',
      table: {
        headers: ['Конструкция', 'Кто нравится (кому?)', 'Предмет', 'Пример'],
        rows: [
          ['lubić', 'И. п. (ja, ty…)', 'В. п.', 'Lubię ten sweter.'],
          ['podobać się (ед. ч.)', 'Д. п. (mi, ci, mu, jej)', 'И. п. (ед. ч.)', 'Podoba mi się ten sweter.'],
          ['podobać się (мн. ч.)', 'Д. п. (mi, ci, nam…)', 'И. п. (мн. ч.)', 'Podobają mi się te buty.'],
        ],
      },
      examples: [
        { polish: 'Podoba mi się jej kolor, ale nie lubię tego fasonu.', translation: 'Мне нравится её цвет, но не нравится этот фасон.' },
      ],
    },
    {
      id: 'l17-b2',
      includeCoursebook: false,
      wbRange: [7, 13],
      title: 'Дательный падеж (Celownik) и предлоги с местоимениями',
      summary: 'Закрепляем формы дательного падежа местоимений и правила добавления n- после предлогов.',
      bullets: [
        'Дательный падеж: mi (мне), ci (тебе), mu (ему), jej (ей), nam (нам), wam (вам), im (им).',
        'После предлогов (o, z, dla) в 3-м лице появляется n-: z nim, o niej, dla niego, o nich.',
      ],
      examples: [
        { polish: 'Kupię mu prezent, bo rozmawiam o nim z nią.', translation: 'Я куплю ему подарок, потому что говорю о нём с ней.' },
      ],
    },
  ],
  18: [
    {
      id: 'l18-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Квартира и местный падеж (Miejscownik: o kim? o czym?)',
      summary: 'Местный падеж всегда употребляется с предлогами (w, na, przy, o, po) и отвечает на вопрос «где?» или «о чём?».',
      table: {
        headers: ['Род / тип основы', 'Окончание', 'Примеры и чередования'],
        rows: [
          ['Твёрдая основа (м./ср./ж.)', '-e (+ чередование)', 'w szafie, na stole (ł→l), w biurze (r→rz)'],
          ['После k, g, ch и мягких (м./ср.)', '-u', 'w pokoju, na biurku, w mieszkaniu'],
          ['Мягкая основа (ж.)', '-i / -y', 'w kuchni, w Polsce (k→c), na ulicy'],
          ['Мн. ч. (все роды)', '-ach', 'w pokojach, o studentach'],
        ],
      },
      examples: [
        { polish: 'Laptop leży na biurku, a książki są w szafie.', translation: 'Ноутбук лежит на письменном столе, а книги в шкафу.' },
      ],
    },
    {
      id: 'l18-b2',
      includeCoursebook: false,
      wbRange: [7, 13],
      title: 'Глаголы с предлогами o и po',
      summary: 'После глаголов myśleć o, rozmawiać o, marzyć o, opowiadać o, а также podróżować po ставим местный падеж.',
      bullets: [
        'o nowym mieszkaniu (ср. р. → -u), o dużym pokoju (м. р. → -u), o małej kuchni (ж. р. → -i).',
      ],
      examples: [
        { polish: 'Rozmawiamy o nowym mieszkaniu i marzymy o wakacjach.', translation: 'Мы говорим о новой квартире и мечтаем об отпуске.' },
      ],
    },
  ],
  19: [
    {
      id: 'l19-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Предлоги места и падежи (где находится предмет?)',
      summary: 'Разные предлоги места в польском языке требуют одного из трёх падежей: местного, родительного или творительного.',
      table: {
        headers: ['Предлоги', 'Падеж', 'Пример'],
        rows: [
          ['w, na, przy', 'Местный (Miejscownik)', 'w pokoju, na stole, przy oknie'],
          ['obok, koło, blisko, naprzeciwko', 'Родительный (Dopełniacz)', 'obok domu, blisko centrum'],
          ['nad, pod, przed, za, między', 'Творительный (Narzędnik)', 'pod stołem, za szafą, nad łóżkiem'],
        ],
      },
      examples: [
        { polish: 'Stół stoi przy oknie, a kot śpi pod stołem.', translation: 'Стол стоит у окна, а кот спит под столом.' },
      ],
    },
    {
      id: 'l19-b2',
      includeCoursebook: false,
      wbRange: [7, 13],
      title: 'Глаголы положения: stać, leżeć, wisieć',
      summary: 'Описываем расположение мебели и вещей в комнате точными глаголами.',
      bullets: [
        'stać (стоять): Stół stoi przy oknie. Szafa stoi pod ścianą.',
        'leżeć (лежать): Książka leży na biurku. Dywan leży na podłodze.',
        'wisieć (висеть): Lampa wisi nad stołem. Obraz wisi na ścianie.',
      ],
      examples: [
        { polish: 'Lampa wisi nad stołem, a krzesła stoją obok stołu.', translation: 'Лампа висит над столом, а стулья стоят рядом со столом.' },
      ],
    },
  ],
  20: [
    {
      id: 'l20-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Где? (gdzie?) vs Куда? (dokąd?) в путешествиях',
      summary: 'Для городов, островов, гор и водоёмов используются разные пары предлогов и падежей для места и направления.',
      table: {
        headers: ['Тип места', 'Gdzie? (место)', 'Dokąd? (направление)'],
        rows: [
          ['Города, страны, здания', 'w + местный (w Krakowie)', 'do + родительный (do Krakowa)'],
          ['Регионы, острова, стороны света', 'na + местный (na Mazurach)', 'na + винительный (na Mazury)'],
          ['Море, озеро, река', 'nad + творительный (nad morzem)', 'nad + винительный (nad morze)'],
        ],
      },
      examples: [
        { polish: 'Jesteśmy w Krakowie, a jutro jedziemy do Warszawy.', translation: 'Мы в Кракове, а завтра едем в Варшаву.' },
      ],
    },
    {
      id: 'l20-b2',
      includeCoursebook: false,
      wbRange: [7, 13],
      title: 'Стороны света и расписание поездов',
      summary: 'Называем расположение на карте и покупаем билеты на поезд.',
      bullets: [
        'Стороны света: na północy (на севере), na południu (на юге), na wschodzie (на востоке), na zachodzie (на западе).',
        'На вокзале: pociąg pospieszny / osobowy, peron, tor, bilet w jedną stronę / tam i z powrotem.',
      ],
      examples: [
        { polish: 'Gdańsk leży na północy Polski, nad morzem.', translation: 'Гданьск расположен на севере Польши, у моря.' },
      ],
    },
  ],
  21: [
    {
      id: 'l21-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Вид глагола (Aspekt): процесс vs результат в прошедшем времени',
      summary: 'Несовершенный вид (Niedokonany) описывает процесс, длительность или повторяемость, а совершенный (Dokonany) — конкретный завершённый результат.',
      table: {
        headers: ['Несовершенный (процесс)', 'Совершенный (результат)', 'Перевод'],
        rows: [
          ['pisać (pisałem)', 'napisać (napisałem)', 'писать / написать'],
          ['robić (robiłem)', 'zrobić (zrobiłem)', 'делать / сделать'],
          ['czytać (czytałem)', 'przeczytać (przeczytałem)', 'читать / прочитать'],
          ['kupować (kupowałem)', 'kupić (kupiłem)', 'покупать / купить'],
        ],
      },
      examples: [
        { polish: 'Wczoraj pisałam list (процесс), i wreszcie go napisałam (результат).', translation: 'Вчера я писала письмо и наконец его написала.' },
      ],
    },
    {
      id: 'l21-b2',
      includeCoursebook: false,
      wbRange: [7, 13],
      title: 'Даты и годы: kiedy? (когда?)',
      summary: 'Число и месяц на вопрос «когда?» стоят в родительном падеже, а год — в местном падеже.',
      table: {
        headers: ['Что называем', 'Падеж', 'Пример'],
        rows: [
          ['День + месяц (kiedy?)', 'Родительный (Dopełniacz)', 'piątego lipca, pierwszego maja'],
          ['Только месяц (kiedy?)', 'w + Местный (Miejscownik)', 'w lipcu, w maju'],
          ['Год (kiedy?)', 'w + Местный (последнее слово)', 'w 1989 (tysiąc dziewięćset osiemdziesiątym dziewiątym) roku'],
        ],
      },
      examples: [
        { polish: 'Urodziłem się dwudziestego marca w tysiąc dziewięćset dziewięćdziesiątym roku.', translation: 'Я родился 20 марта 1990 года.' },
      ],
    },
  ],
  22: [
    {
      id: 'l22-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Будущее время: nie­do­ko­na­ny vs do­ko­na­ny',
      summary: 'У несовершенных глаголов будущее время составное (będę + глагол), а у совершенных — простое (одна форма по схеме настоящего времени).',
      table: {
        headers: ['Несовершенный (процесс)', 'Совершенный (однократный результат)'],
        rows: [
          ['będę czytać / czytał(a)', 'przeczytam'],
          ['będę pisać / pisał(a)', 'napiszę'],
          ['będę dzwonić / dzwonił(a)', 'zadzwonię'],
          ['będę iść / jechać', 'pójdę / pojadę'],
        ],
      },
      examples: [
        { polish: 'W sobotę będę czytać książkę, a w niedzielę przeczytam artykuł.', translation: 'В субботу я буду читать книгу, а в воскресенье прочитаю статью.' },
      ],
    },
    {
      id: 'l22-b2',
      includeCoursebook: false,
      wbRange: [7, 13],
      title: 'Разговор по телефону и глаголы с przy-/wy-/we-',
      summary: 'Глаголы движения в будущем времени совершенного вида образуются с приставками.',
      bullets: [
        'pójść → pójdę, przyjść → przyjdę, wyjść → wyjdę, wejść → wejdę, pojechać → pojadę.',
        'Телефонный этикет: Czy mogę rozmawiać z…?, Proszę poczekać, Pomyłka, Oddzwonię później.',
      ],
      examples: [
        { polish: 'Przepraszam, mam zajęte, oddzwonię za chwilę.', translation: 'Извините, у меня занято, я перезвоню через минуту.' },
      ],
    },
  ],
  23: [
    {
      id: 'l23-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Степени сравнения прилагательных и сравнение',
      summary: 'Прилагательные образуют сравнительную степень с помощью -szy / -ejszy, а превосходную — добавлением przyставки naj-.',
      table: {
        headers: ['Начальная форма', 'Сравнительная', 'Превосходная'],
        rows: [
          ['ładny / drogi', 'ładniejszy / droższy', 'najładniejszy / najdroższy'],
          ['dobry / zły', 'lepszy / gorszy', 'najlepszy / najgorszy'],
          ['duży / mały', 'większy / mniejszy', 'największy / najmniejszy'],
          ['interesujący', 'bardziej interesujący', 'najbardziej interesujący'],
        ],
      },
      bullets: [
        'Конструкции сравнения: niż + И. п. (droższy niż tamten), od + Р. п. (droższy od tamtego), ze + Р. п. (najlepszy ze wszystkich).',
      ],
      examples: [
        { polish: 'Ta sukienka jest ładniejsza niż tamta, ale ta jest najładniejsza.', translation: 'Это платье красивее того, но это самое красивое.' },
      ],
    },
    {
      id: 'l23-b2',
      includeCoursebook: false,
      wbRange: [7, 14],
      title: 'Одежда: nosić, mieć na sobie и znać vs wiedzieć',
      summary: 'Предметы одежды после nosić и mieć na sobie стоят в винительном падеже.',
      bullets: [
        'znać + кого? что? (В. п.): Znam ten sklep, znam tę markę.',
        'wiedzieć + że / gdzie / kiedy (о факте): Wiem, że ten sweter jest drogi.',
      ],
      examples: [
        { polish: 'Mam na sobie czerwoną bluzkę i czarne spodnie.', translation: 'На мне красная блузка и чёрные брюки.' },
      ],
    },
  ],
  24: [
    {
      id: 'l24-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Степени сравнения наречий (jak?)',
      summary: 'Наречия сравниваются с помощью суффиксов -ej / -iej и приставки naj-.',
      table: {
        headers: ['Наречие', 'Сравнительная', 'Превосходная'],
        rows: [
          ['szybko / drogo', 'szybciej / drożej', 'najszybciej / najdrożej'],
          ['dobrze / źle', 'lepiej / gorzej', 'najlepiej / najgorzej'],
          ['dużo / mało', 'więcej / mniej', 'najwięcej / najmniej'],
        ],
      },
      examples: [
        { polish: 'W tej fryzurze wyglądasz znacznie lepiej.', translation: 'С этой причёской ты выглядишь намного лучше.' },
      ],
    },
    {
      id: 'l24-b2',
      includeCoursebook: false,
      wbRange: [7, 12],
      title: 'Части тела: неправильное множественное число',
      summary: 'Некоторые парные части тела имеют особые формы множественного числа.',
      table: {
        headers: ['Ед. ч.', 'Мн. ч.', 'Перевод'],
        rows: [
          ['oko', 'oczy', 'глаз — глаза'],
          ['ucho', 'uszy', 'ухо — уши'],
          ['ręka', 'ręce', 'рука — руки'],
        ],
      },
      examples: [
        { polish: 'Ona ma piękne zielone oczy i długie włosy.', translation: 'У неё красивые зелёные глаза и длинные волосы.' },
      ],
    },
  ],
  25: [
    {
      id: 'l25-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'У врача: «У меня болит…» (boleć)',
      summary: 'Глагол boleć согласуется по числу с частью тела (ед. ч. boli, мн. ч. bolą), а человек стоит в винительном падеже.',
      table: {
        headers: ['Кто (В. п.)', 'Что болит (ед. ч.)', 'Что болит (мн. ч.)'],
        rows: [
          ['mnie / cię', 'Boli mnie głowa.', 'Bolą mnie zęby.'],
          ['go / ją', 'Boli go brzuch.', 'Bolą ją oczy.'],
          ['nas / ich', 'Boli nas gardło.', 'Bolą ich nogi.'],
        ],
      },
      examples: [
        { polish: 'Boli mnie głowa i mam gorączkę.', translation: 'У меня болит голова и температура.' },
      ],
    },
    {
      id: 'l25-b2',
      includeCoursebook: false,
      wbRange: [7, 12],
      title: 'Советы и рекомендации: powinien / powinna + инфинитив',
      summary: 'Слово powinien («должен / следует») спрягается как глагол и согласуется с родом и числом.',
      table: {
        headers: ['Лицо', 'Муж. род', 'Жен. род'],
        rows: [
          ['ja', 'powinienem', 'powinnam'],
          ['ty', 'powinieneś', 'powinnaś'],
          ['on / ona / ono', 'powinien', 'powinna (ср. powinno)'],
          ['my / wy / oni / one', 'powinniśmy / powinniście / powinni', 'powinnyśmy / powinnyście / powinny'],
        ],
      },
      examples: [
        { polish: 'Powinieneś odpocząć, a ty powinnaś iść do lekarza.', translation: 'Тебе (м.) следует отдохнуть, а тебе (ж.) — пойти к врачу.' },
      ],
    },
  ],
  26: [
    {
      id: 'l26-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Вежливые просьбы: условное наклонение (tryb przypuszczający)',
      summary: 'Чтобы вежливо попросить или выразить желание, к основе прошедшего времени добавляем -by + личное окончание.',
      table: {
        headers: ['Лицо', 'móc (мог бы)', 'chcieć (хотел бы)'],
        rows: [
          ['ja', 'mógłbym / mogłabym', 'chciałbym / chciałabym'],
          ['ty', 'mógłbyś / mogłabyś', 'chciałbyś / chciałabyś'],
          ['on / ona / pan / pani', 'mógłby / mogłaby', 'chciałby / chciałaby'],
          ['my', 'moglibyśmy / mogłybyśmy', 'chcielibyśmy / chciałybyśmy'],
        ],
      },
      examples: [
        { polish: 'Czy mógłby pan mi pomóc?', translation: 'Не могли бы вы мне помочь?' },
      ],
    },
    {
      id: 'l26-b2',
      includeCoursebook: false,
      wbRange: [7, 12],
      title: 'Услуги, происшествия и рекламации',
      summary: 'Закрепляем лексику экстренных ситуаций и обращений в службы/магазины.',
      bullets: [
        'wypadek (авария/происшествие), kradzież (кража), pożar (пожар), złożyć reklamację (подать рекламацию).',
        'Для вежливой жалобы: Chciałabym zgłosić awarię / złożyć reklamację.',
      ],
      examples: [
        { polish: 'Chciałabym złożyć reklamację, bo pralka nie działa.', translation: 'Я хотела бы подать рекламацию, потому что стиральная машина не работает.' },
      ],
    },
  ],
};
