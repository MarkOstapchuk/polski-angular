import type { TheoryBlock } from './lesson-theory';

/**
 * Detailed textbook theory blocks & grammar tables for Part 2 (Lessons 27–49),
 * mapped in workbook/coursebook order.
 */
export const PART2_THEORY_BLOCKS: Record<number, TheoryBlock[]> = {
  27: [
    {
      id: 'l27-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Творительный падеж (Narzędnik): окончания и управление глаголов',
      summary: 'Систематизируем творительный падеж (kim? czym?) после глаголов и предлогов.',
      table: {
        headers: ['Число / род', 'Прилагательное', 'Существительное', 'Пример'],
        rows: [
          ['Ед. ч. (м. / ср.)', '-ym / -im', '-em / -iem', 'polskim kinem, młodym lekarzem'],
          ['Ед. ч. (ж.)', '-ą', '-ą', 'ciekawą książką, dobrą koleżanką'],
          ['Мн. ч. (все)', '-ymi / -imi', '-ami (исключ. -mi)', 'nowymi znajomymi, dziećmi'],
        ],
      },
      bullets: [
        'Творительный падеж требуют: interesować się, zajmować się, kierować, opiekować się (но prowadzić + В. п.).',
      ],
      examples: [
        { polish: 'Interesuję się polskim kinem i opiekuję się młodszym bratem.', translation: 'Я интересуюсь польским кино и забочусь о младшем брате.' },
      ],
    },
    {
      id: 'l27-b2',
      includeCoursebook: false,
      wbRange: [8, 16],
      title: 'Предлоги с творительным падежом и личные местоимения',
      summary: 'После предлогов z/ze, przed, nad, pod, za, między, poza ставим творительный падеж.',
      bullets: [
        'Местоимения: ze mną, z tobą, z nim, z nią, z nami, z wami, z nimi.',
        'Транспорт и инструмент без предлога: jechać autobusem, pisać długopisem.',
      ],
      examples: [
        { polish: 'Jadę do pracy autobusem, a przed pracą piję kawę z nimi.', translation: 'Я еду на работу на автобусе, а перед работой пью кофе с ними.' },
      ],
    },
  ],
  28: [
    {
      id: 'l28-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Родительный падеж (Dopełniacz): ед. и мн. число',
      summary: 'Родительный падеж (kogo? czego?) нужен после отрицания, многих предлогов (do, od, z, bez, dla, obok, podczas) и глаголов (szukać, potrzebować, bać się, używać, słuchać).',
      table: {
        headers: ['Число / род', 'Прилагательное', 'Существительное', 'Пример'],
        rows: [
          ['Ед. ч. (м. / ср.)', '-ego', '-a / -u', 'nie mam czasu, boję się wiatru'],
          ['Ед. ч. (ж.)', '-ej', '-y / -i', 'boję się burzy, bez pracy'],
          ['Мн. ч. (все)', '-ych / -ich', '-ów / -y / -i / -Ø', 'wielu studentów, dużo książek'],
        ],
      },
      examples: [
        { polish: 'Nie mam czasu ani ochoty, bo boję się burzy.', translation: 'У меня нет ни времени, ни желания, потому что я боюсь грозы.' },
      ],
    },
    {
      id: 'l28-b2',
      includeCoursebook: false,
      wbRange: [8, 16],
      title: 'Количественные слова и согласование глагола',
      summary: 'После słów dużo, mało, kilka, wiele (и муж.-личн. kilku, wielu, dwóch, trzech) существительное стоит в Р. п. мн. ч., а глагол — в 3-м лице ед. ч. среднего рода.',
      bullets: [
        'В настоящем времени: jest (W klasie jest pięciu studentów).',
        'В прошедшем времени: было / zginęło (Było dużo ludzi. Zginęło kilku turystów).',
      ],
      examples: [
        { polish: 'Na konferencji było wielu gości z zagranicy.', translation: 'На конференции было много гостей из-за границы.' },
      ],
    },
  ],
  29: [
    {
      id: 'l29-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Предлоги места, направления и времени в кино / городе',
      summary: 'Различаем статику (gdzie?), движение (dokąd? skąd?) и точные предлоги времени.',
      table: {
        headers: ['Вопрос', 'Предлог + падеж', 'Пример'],
        rows: [
          ['Gdzie?', 'w/na + П., przed/pod/nad/za/między + Т.', 'w kinie, przed wejściem'],
          ['Dokąd? / Skąd?', 'do/na + Р./В., z/od + Р.', 'do kina, z teatru'],
          ['Kiedy? (время)', 'o/po + П., przed + Т., na + В.', 'o ósmej, przed ósmą, na ósmą'],
        ],
      },
      examples: [
        { polish: 'Spotkamy się przed kinem o siódmej na seans o ósmej.', translation: 'Встретимся перед кинотеатром в семь на сеанс в восемь.' },
      ],
    },
    {
      id: 'l29-b2',
      includeCoursebook: false,
      wbRange: [8, 16],
      title: 'Передача просьб (żeby) и сообщения (że) + дательный падеж местоимений',
      summary: 'Для передачи информации используем że, а для просьбы или цели — żeby + прошедшая форма глагола (или инфинитив).',
      table: {
        headers: ['Лицо', 'Союз żeby', 'Местоимение (Д. п.)'],
        rows: [
          ['ja / ty', 'żebym / żebyś (+ -ł/-ła)', 'mi / ci'],
          ['on / ona', 'żeby (+ -ł/-ła)', 'mu / jej'],
          ['my / wy / oni', 'żebyśmy / żebyście / żeby (+ -li/-ły)', 'nam / wam / im'],
        ],
      },
      examples: [
        { polish: 'Mami poprosiła Angelę, żeby poszła z nią do kina.', translation: 'Мами попросила Ангелу пойти с ней в кино.' },
      ],
    },
  ],
  30: [
    {
      id: 'l30-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Именительный падеж мн. ч.: мужско-личный род (oni) vs остальные (one)',
      summary: 'Для групп, где есть хотя бы один мужчина (oni), действуют особые окончания и смягчения согласных.',
      table: {
        headers: ['Тип существительного (oni)', 'Окончание / чередование', 'Примеры'],
        rows: [
          ['Твёрдая основа', '-i / -y (t→ci, k→cy, g→dzy, r→rzy)', 'student → studenci, Polak → Polacy'],
          ['Профессии, титулы, родство', '-owie', 'panowie, profesorowie, synowie'],
          ['Мягкая основа и c, cz, rz, ż', '-e', 'nauczyciele, lekarze, pisarze'],
          ['Исключения', 'особые формы', 'ludzie, bracia, księża, dzieci (one)'],
        ],
      },
      examples: [
        { polish: 'Polacy i Włosi często interesują się piłką nożną.', translation: 'Поляки и итальянцы часто интересуются футболом.' },
      ],
    },
    {
      id: 'l30-b2',
      includeCoursebook: false,
      wbRange: [8, 15],
      title: 'Числительные 2–4 с мужско-личным родом: dwaj vs dwóch',
      summary: 'Есть два равноправных способа сочетать 2, 3, 4 с мужско-личными существительными.',
      table: {
        headers: ['Конструкция', 'Существительное', 'Глагол', 'Пример'],
        rows: [
          ['dwaj, trzej, czterej', 'И. п. мн. ч.', 'мн. ч. (są / byli)', 'Dwaj studenci są w sali.'],
          ['dwóch, trzech, czterech', 'Р. п. мн. ч.', 'ед. ч. ср. р. (jest / było)', 'Dwóch studentów jest w sali.'],
        ],
      },
      examples: [
        { polish: 'Dwaj lekarze pracują w szpitalu. / Dwóch lekarzy pracuje w szpitalu.', translation: 'Два врача работают в больнице.' },
      ],
    },
  ],
  31: [
    {
      id: 'l31-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Прилагательные мужско-личного рода во множественном числе',
      summary: 'У прилагательных и местоимений с группой oni появляется окончание -i / -y и смягчение основы.',
      table: {
        headers: ['Чередование', 'Ед. ч. (ten)', 'Мн. ч. (ci — oni)', 'Мн. ч. (te — one)'],
        rows: [
          ['r → rz / ł → l / d → dzi', 'dobry, miły, młody', 'dobrzy, mili, młodzi', 'dobre, miłe, młode'],
          ['k → c / g → dz', 'wysoki, drogi', 'wysocy, drodzy', 'wysokie, drogie'],
          ['sz → ś / ż → ź', 'starszy, duży', 'starsi, duzi', 'starsze, duże'],
        ],
      },
      examples: [
        { polish: 'Moi przyjaciele są bardzo zdolni i cierpliwi.', translation: 'Мои друзья очень способные и терпеливые.' },
      ],
    },
    {
      id: 'l31-b2',
      includeCoursebook: false,
      wbRange: [8, 15],
      title: 'Относительные местоимения: który, kto, co',
      summary: 'Определяем людей и предметы с помощью ktoś, kto / coś, co и który (-a, -e, -zy), склоняя их по падежам.',
      bullets: [
        'który согласуется с определяемым словом в роде и числе, а падеж зависит от роли в придаточном (kogo, z którym, o której).',
        'kto → kogo, komu, z kim, o kim; co → czego, czemu, z czym, o czym.',
      ],
      examples: [
        { polish: 'To jest kolega, z którym studiowałem w Krakowie.', translation: 'Это коллега, с которым я учился в Кракове.' },
      ],
    },
  ],
  32: [
    {
      id: 'l32-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Отглагольные существительные на -nie / -cie',
      summary: 'От любого глагола можно образовать существительное среднего рода, обозначающее действие (rzeczownik odczasownikowy).',
      table: {
        headers: ['Тип глагола', 'Суффикс', 'Примеры'],
        rows: [
          ['Глаголы на -ać / -ować', '-anie', 'czytać → czytanie, studiować → studiowanie'],
          ['Глаголы на -ić / -yć / -eć', '-enie', 'mówić → mówienie, myśleć → myślenie'],
          ['Короткие глаголы (pić, myć, żyć)', '-cie', 'pić → picie, myć → mycie, żyć → życie'],
        ],
      },
      bullets: [
        'Отрицание nie с такими существительными пишется слитно: niepalenie, niemówienie.',
      ],
      examples: [
        { polish: 'Czytanie książek i pisanie notatek pomaga w nauce.', translation: 'Чтение книг и написание заметок помогает в учёбе.' },
      ],
    },
    {
      id: 'l32-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Предлоги и падежи с отглагольными существительными',
      summary: 'После отглагольного существительного дополнение всегда ставится в родительном падеже (даже если сам глагол требовал винительного).',
      bullets: [
        'czytanie (czego?) raportów, wysyłanie (czego?) plików.',
        'Предлоги: do czytania, podczas pisania, przed wysłaniem, po przeczytaniu.',
      ],
      examples: [
        { polish: 'Przed wysłaniem pliku sprawdź tekst.', translation: 'Перед отправкой файла проверь текст.' },
      ],
    },
  ],
  33: [
    {
      id: 'l33-b1',
      includeCoursebook: true,
      wbRange: [1, 6],
      title: 'Поиск работы, резюме (CV) и глагольное управление',
      summary: 'Закрепляем ключевые падежные конструкции для собеседования и деловой переписки.',
      table: {
        headers: ['Выражение', 'Падеж', 'Пример'],
        rows: [
          ['szukać / potrzebować', 'Родительный', 'Szukam nowej pracy.'],
          ['pracować jako / w', 'И. п. / Местный', 'Pracuję jako analityk w firmie IT.'],
          ['zajmować się / interesować się', 'Творительный', 'Zajmuję się obsługą klientów.'],
          ['wysłać / skontaktować się', 'Творительный', 'Wysyłam CV mailem.'],
        ],
      },
      examples: [
        { polish: 'Mam doświadczenie w pracy z klientami.', translation: 'У меня есть опыт работы с клиентами.' },
      ],
    },
    {
      id: 'l33-b2',
      includeCoursebook: false,
      wbRange: [7, 13],
      title: 'Словообразование прилагательных о работе (-owy, -ny, -ący)',
      summary: 'Учимся образовывать прилагательные от существительных и глаголов для описания вакансий и обязанностей.',
      bullets: [
        '-owy: praca biurowa, rozmowa kwalifikacyjna, list motywacyjny.',
        '-ny: odpowiedzialny (ответственный), samodzielny (самостоятельный).',
        '-ący: stresujący (стрессовый), wymagający (требовательный), interesujący.',
      ],
      examples: [
        { polish: 'To jest wymagająca, ale bardzo interesująca praca.', translation: 'Это требовательная, но очень интересная работа.' },
      ],
    },
  ],
  34: [
    {
      id: 'l34-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Винительный падеж мн. ч. и возвратное местоимение swój',
      summary: 'В винительном падеже множественного числа мужско-личный род равен родительному, а остальные роды — именительному.',
      table: {
        headers: ['Категория', 'В. п. мн. ч.', 'Пример'],
        rows: [
          ['Мужско-личный (oni)', '= Р. п. мн. ч.', 'Znam dobrych aktorów.'],
          ['Не-мужско-личный (one)', '= И. п. мн. ч.', 'Znam ciekawe historie.'],
        ],
      },
      bullets: [
        'swój / swoja / swoje / swoi всегда указывает на принадлежность подлежащему: Alicja kocha swojego męża (своего), но jej męża (чужого).',
      ],
      examples: [
        { polish: 'Pamiętam swoich przyjaciół z dzieciństwa.', translation: 'Я помню своих друзей детства.' },
      ],
    },
    {
      id: 'l34-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Страдательные причастия на -ny / -ony / -ty',
      summary: 'Страдательные причастия описывают результат действия и согласуются с существительным как прилагательные.',
      bullets: [
        'napisany (написанный), zrobiony (сделанный), zamknięty (закрытый), otwarty (открытый).',
        'Во мн. ч. муж.-личн.: zaproszeni goście, nagrodzeni reżyserzy.',
      ],
      examples: [
        { polish: 'List został napisany wczoraj i wysłany rano.', translation: 'Письмо было написано вчера и отправлено утром.' },
      ],
    },
  ],
  35: [
    {
      id: 'l35-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Повелительное наклонение (Tryb rozkazujący)',
      summary: 'Образуем просьбы, инструкции и команды от основы настоящего времени.',
      table: {
        headers: ['Спряжение', '2 л. ед. ч. (ty)', '1 л. мн. ч. (my)', '2 л. мн. ч. (wy)'],
        rows: [
          ['I–II (-ę / -esz, -isz)', 'pisz!, mów!, chodź!', 'piszmy!, mówmy!', 'piszcie!, mówcie!'],
          ['Основа на группу согл.', 'zamknij!, weź!, spójrz!', 'zamknijmy!', 'zamknijcie!'],
          ['III (-am, -em) и -ować', 'czytaj!, kupuj!, spakuj!', 'czytajmy!, kupujmy!', 'czytajcie!, kupujcie!'],
        ],
      },
      bullets: [
        'Вежливая форма для 3-го лица: niech pan / pani sprawdzi!',
      ],
      examples: [
        { polish: 'Spakuj paszport i bilet!', translation: 'Упакуй паспорт и билет!' },
      ],
    },
    {
      id: 'l35-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Запреты и безличные конструкции (trzeba, wolno, warto)',
      summary: 'Для правил и советов в путешествии используем безличные слова с инфинитивом.',
      bullets: [
        'trzeba / należy / powinno się — нужно / следует.',
        'można / wolno — можно / разрешено; nie wolno — запрещено.',
        'warto — стоит; не стоит — nie warto.',
      ],
      examples: [
        { polish: 'Nie wolno tu palić, ale można zrobić zdjęcie.', translation: 'Здесь нельзя курить, но можно сделать фото.' },
      ],
    },
  ],
  36: [
    {
      id: 'l36-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Местный падеж (Miejscownik): города, регионы и чередования',
      summary: 'Систематизируем чередования согласных в местном падеже для географических названий и писем.',
      table: {
        headers: ['Чередование основы', 'Именительный', 'Местный (w / o / na)'],
        rows: [
          ['k → c / g → dz', 'Polska, Praga', 'w Polsce, w Pradze'],
          ['r → rz / ł → l', 'Kraków, stół', 'w Krakowie, na stole'],
          ['t → ci / d → dzi', 'uniwersytet, miasto', 'na uniwersytecie, w mieście (a→e)'],
          ['После k, g, ch и мягких (м./ср.)', 'Gdańsk, Toruń', 'w Gdańsku, w Toruniu'],
        ],
      },
      examples: [
        { polish: 'Co warto zobaczyć w Gdańsku i w Krakowie?', translation: 'Что стоит посмотреть в Гданьске и в Кракове?' },
      ],
    },
    {
      id: 'l36-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Звательный падеж (Wołacz) в письмах и обращениях',
      summary: 'Для обращений в начале письма или при разговоре в польском языке используется звательный падеж.',
      table: {
        headers: ['Род / тип', 'Окончание', 'Примеры'],
        rows: [
          ['Мужской род', '= М. п. (или -u после мягких)', 'panie profesorze!, Piotrze!, kolego!'],
          ['Женский род (-a)', '-o (или -u для уменьш.)', 'Droga Anno!, Ewo!, Kasiu!'],
          ['Мн. ч. (все)', '= И. п. мн. ч.', 'Drodzy Państwo!, Szanowni Koledzy!'],
        ],
      },
      examples: [
        { polish: 'Droga Anno, dziękuję za wiadomość!', translation: 'Дорогая Анна, спасибо за сообщение!' },
      ],
    },
  ],
  37: [
    {
      id: 'l37-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Приставочные глаголы движения: вид и направления',
      summary: 'Приставка (przy-, wy-, w-/we-, prze-, od-, do-, pod-, roz-) меняет значение и образует видовые пары от разных основ.',
      table: {
        headers: ['Приставка', 'Значение', 'Несов. вид (от chodzić/jeździć)', 'Сов. вид (от iść/jechać)'],
        rows: [
          ['przy-', 'приближение', 'przychodzić / przyjeżdżać', 'przyjść / przyjechać'],
          ['wy-', 'выход / отъезд', 'wychodzić / wyjeżdżać', 'wyjść / wyjechać'],
          ['w- / we-', 'вход / въезд', 'wchodzić / wjeżdżać', 'wejść / wjechać'],
          ['prze-', 'переход / переезд', 'przechodzić / przejeżdżać', 'przejść / przejechać'],
        ],
      },
      examples: [
        { polish: 'Codziennie wychodzę z domu o ósmej, ale dziś wyszedłem wcześniej.', translation: 'Каждый день я выхожу из дома в восемь, но сегодня вышел раньше.' },
      ],
    },
    {
      id: 'l37-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Прошедшее время глагола iść и приставочных глаголов',
      summary: 'Глагол iść и все производные от него в прошедшем времени имеют чередование основы szed- / szł-.',
      table: {
        headers: ['Лицо', 'Мужской род', 'Женский род', 'Мн. ч. (oni / one)'],
        rows: [
          ['iść', 'szedłem / szedłeś / szedł', 'szłam / szłaś / szła', 'szliśmy / szłyśmy'],
          ['wyjść', 'wyszedłem / wyszedł', 'wyszłam / wyszła', 'wyszli / wyszły'],
          ['wejść', 'wszedłem / wszedł', 'weszłam / weszła', 'weszli / weszły'],
        ],
      },
      examples: [
        { polish: 'Wczoraj wyszliśmy z domu bardzo wcześnie.', translation: 'Вчера мы вышли из дома очень рано.' },
      ],
    },
  ],
  38: [
    {
      id: 'l38-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Три формы движения: регулярное, однонаправленное, совершенное',
      summary: 'Различаем привычное действие, движение в процессе сейчас и завершённое движение с приставкой po-.',
      table: {
        headers: ['Регулярное (несов.)', 'Однонаправленное (несов.)', 'Совершенное (буд. / прош.)'],
        rows: [
          ['chodzić', 'iść', 'pójść (pójdę, poszedłem)'],
          ['jeździć', 'jechać', 'pojechać (pojadę, pojechałem)'],
          ['latać', 'lecieć', 'polecieć (polecę, poleciałem)'],
          ['pływać', 'płynąć', 'popłynąć (popłynę, popłynąłem)'],
        ],
      },
      examples: [
        { polish: 'Latem często latam samolotem, a jutro polecę do Gdańska.', translation: 'Летом я часто летаю самолётом, а завтра полечу в Гданьск.' },
      ],
    },
    {
      id: 'l38-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Транспортные глаголы и предлоги',
      summary: 'Для посадки, высадки и пересадки важно запомнить точное предложное управление.',
      bullets: [
        'wsiąść do + Р. п. (wsiąść do autobusu) — сесть в транспорт.',
        'wysiąść z + Р. п. (wysiąść z pociągu) — выйти из транспорта.',
        'przesiąść się na + В. п. (przesiąść się na tramwaj) — пересесть на.',
        'siadać (садиться) / siedzieć (сидеть) / usiąść (сесть сов.).',
      ],
      examples: [
        { polish: 'Proszę wysiąść na trzecim przystanku i przesiąść się na tramwaj.', translation: 'Выйдите на третьей остановке и пересядьте на трамвай.' },
      ],
    },
  ],
  39: [
    {
      id: 'l39-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Дательный падеж (Celownik: komu? czemu?)',
      summary: 'Дательный падеж обозначает адресата действия, а также используется в безличных выражениях состояния.',
      table: {
        headers: ['Род / число', 'Прилагательное', 'Существительное', 'Примеры'],
        rows: [
          ['Мужской', '-emu', '-owi (кратко: -u)', 'młodemu przyjacielowi, bratu, panu, ojcu'],
          ['Средний', '-emu', '-u', 'małemu dziecku, życiu'],
          ['Женский', '-ej', '-e (+ черед.) / -i / -y', 'dobrej matce, Annie, pani, pracy'],
          ['Мн. ч. (все)', '-ym / -im', '-om', 'wszystkim studentom, dzieciom'],
        ],
      },
      examples: [
        { polish: 'Przyjaciel pomógł mi w trudnej sytuacji.', translation: 'Друг помог мне в трудной ситуации.' },
      ],
    },
    {
      id: 'l39-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Глаголы, предлоги и безличные состояния с дательным падежом',
      summary: 'Запоминаем глаголы и предлоги, управляющие дательным падежом.',
      bullets: [
        'Глаголы: pomagać, ufać, dziękować, szkodzić, kibicować, zazdrościć, wierzyć, życzyć.',
        'Состояния: Jest mi zimno / ciepło / smutno / przykro. Dziecku jest zimno.',
        'Предлоги: dzięki + Д. п. (благодаря), wbrew + Д. п. (вопреки), przeciw(ko) + Д. п. (против).',
      ],
      examples: [
        { polish: 'Dzięki tobie udało mi się zdać egzamin.', translation: 'Благодаря тебе мне удалось сдать экзамен.' },
      ],
    },
  ],
  40: [
    {
      id: 'l40-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Возвратное местоимение siebie / się и предложные формы',
      summary: 'Местоимение siebie/się относится к подлежащему предложения в любом лице и не имеет именительного падежа.',
      table: {
        headers: ['Падеж', 'Возвратное мест.', 'Пример'],
        rows: [
          ['Родительный / Винительный', 'siebie / się', 'Widzę siebie w lustrze.'],
          ['Дательный / Местный', 'sobie', 'Kupuję sobie książkę. Myślę o sobie.'],
          ['Творительный', 'sobą', 'Jestem sobą. Zabrałem to ze sobą.'],
        ],
      },
      bullets: [
        'Важно различать: Adam myśli o sobie (о самом себе) vs Adam myśli o nim (о другом мужчине).',
      ],
      examples: [
        { polish: 'Zadbaj o siebie i weź ciepły szalik ze sobą.', translation: 'Позаботься о себе и возьми тёплый шарф с собой.' },
      ],
    },
    {
      id: 'l40-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Личные местоимения после предлогов и предложные выражения',
      summary: 'Повторяем полные формы местоимений с n- и сложные предлоги в публицистических и исторических текстах.',
      bullets: [
        'o mnie, dla ciebie, do niego, z nią, o nich.',
        'Сложные предлоги: wobec + Р. п. (по отношению к), ze względu na + В. п. (из-за / ввиду), podczas + Р. п. (во время), wbrew + Д. п. (вопреки).',
      ],
      examples: [
        { polish: 'Wspominamy tych, którzy odeszli przed nami.', translation: 'Мы вспоминаем тех, кто ушёл до нас.' },
      ],
    },
  ],
  41: [
    {
      id: 'l41-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Безличные формы: 3-е лицо + się и формы на -no / -to',
      summary: 'Для описания общих обычаев и исторических фактов без указания конкретного лица используем безличные конструкции.',
      table: {
        headers: ['Время', 'Конструкция', 'Примеры'],
        rows: [
          ['Настоящее', '3 л. ед. ч. + się', 'W Polsce święta obchodzi się rodzinnie.'],
          ['Прошедшее (привычка)', '3 л. ед. ч. ср. р. + się', 'Dawniej obchodziło się to inaczej.'],
          ['Прошедшее (факт / событие)', '-no / -to', 'Zorganizowano spotkanie. Wypito szampana.'],
          ['Будущее', 'będzie się + инфинитив', 'Będzie się mówić o tradycji.'],
        ],
      },
      examples: [
        { polish: 'Podczas kolacji zjedzono dwanaście potraw.', translation: 'Во время ужина съели двенадцать блюд.' },
      ],
    },
    {
      id: 'l41-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Праздничные традиции, даты и рецепты',
      summary: 'Сочетаем даты в родительном падеже и повелительное наклонение в кулинарных рецептах.',
      bullets: [
        'Даты: pierwszego stycznia, dwudziestego czwartego grudnia (Wigilia).',
        'Рецепты (tryb rozkazujący): pokrój (нарежь), dodaj (добавь), wymieszaj (перемешай), gotuj (вари).',
      ],
      examples: [
        { polish: 'W Wigilię dzielimy się opłatkiem.', translation: 'В Сочельник мы делимся облаткой.' },
      ],
    },
  ],
  42: [
    {
      id: 'l42-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Последовательность событий во времени: союзы и предлоги',
      summary: 'Выражаем, что произошло раньше, одновременно или позже другого события.',
      table: {
        headers: ['Отношение', 'Союзы (придаточное)', 'Предлоги (с сущ.)'],
        rows: [
          ['Предшествование', 'zanim, przedtem, wcześniej', 'przed + Т. п. (przed wyjazdem)'],
          ['Одновременность', 'kiedy, gdy, w międzyczasie', 'podczas / w czasie + Р. п.'],
          ['Следование', 'po tym jak, potem, następnie, dopóki', 'po + П. п. (po powrocie)'],
        ],
      },
      examples: [
        { polish: 'Zanim wyszliśmy w góry, sprawdziliśmy mapę.', translation: 'Перед тем как выйти в горы, мы проверили карту.' },
      ],
    },
    {
      id: 'l42-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Прошедшее время глаголов на -ść / -źć',
      summary: 'У глаголов на -ść / -źć в прошедшем времени происходят чередования гласных и согласных в основе.',
      table: {
        headers: ['Инфинитив', 'Муж. ед. (on)', 'Жен. ед. (ona)', 'Муж.-личн. (oni)'],
        rows: [
          ['usiąść (сесть)', 'usiadł', 'usiadła', 'usiedli'],
          ['upaść (упасть)', 'upadł', 'upadła', 'upadli'],
          ['trząść się (дрожать)', 'trząsł się', 'trzęsła się', 'trzęśli się'],
          ['znaleźć (найти)', 'znalazł', 'znalazła', 'znaleźli'],
        ],
      },
      examples: [
        { polish: 'Kiedy wróciliśmy ze szlaku, wszyscy byli zmęczeni.', translation: 'Когда мы вернулись с маршрута, все устали.' },
      ],
    },
  ],
  43: [
    {
      id: 'l43-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Вид глагола в прошлом: маркеры и супплетивные пары',
      summary: 'Различаем процесс/привычку и завершённое действие, а также пары от разных корней.',
      table: {
        headers: ['Несовершенный (процесс)', 'Совершенный (результат)', 'Перевод'],
        rows: [
          ['mówić', 'powiedzieć', 'говорить / сказать'],
          ['brać', 'wziąć', 'брать / взять'],
          ['widzieć', 'zobaczyć', 'видеть / увидеть'],
          ['oglądać', 'obejrzeć', 'смотреть / посмотреть'],
        ],
      },
      bullets: [
        'Маркеры несов. вида: często, zazwyczaj, dawniej, cały dzień. Маркеры сов. вида: nagle, wreszcie, raz.',
      ],
      examples: [
        { polish: 'Kiedy mieszkał w Polsce, często odwiedzał muzea.', translation: 'Когда он жил в Польше, часто посещал музеи.' },
      ],
    },
    {
      id: 'l43-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Выбор вида глагола в повелительном наклонении',
      summary: 'В утвердительных командах и запретах обычно используются разные виды глагола.',
      bullets: [
        'Утверждение (конкретное действие): чаще совершенный вид — Przeczytaj!, Powiedz!, Zrób!',
        'Запрет (после nie): почти всегда несовершенный вид — Nie mów!, Nie czytaj!, Nie rób tego!',
      ],
      examples: [
        { polish: 'Przeczytaj artykuł i opowiedz, co się wydarzyło, ale nie przerywaj!', translation: 'Прочитай статью и расскажи, что произошло, но не перебивай!' },
      ],
    },
  ],
  44: [
    {
      id: 'l44-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Существительные среднего рода на -ę (zwierzę, imię)',
      summary: 'Слова на -ę при склонении расширяют основу на -ci- / -ni- в единственном числе и на -t- / -n- во множественном.',
      table: {
        headers: ['Падеж', 'Ед. ч. (zwierzę)', 'Мн. ч. (zwierzęta)', 'Мн. ч. (imiona)'],
        rows: [
          ['Именительный / Винительный', 'zwierzę', 'zwierzęta', 'imiona'],
          ['Родительный', 'zwierzęcia', 'zwierząt', 'imion'],
          ['Дательный', 'zwierzęciu', 'zwierzętom', 'imionom'],
          ['Творительный', 'zwierzęciem', 'zwierzętami', 'imionami'],
          ['Местный', 'o zwierzęciu', 'o zwierzętach', 'o imionach'],
        ],
      },
      examples: [
        { polish: 'Zaopiekuję się zwierzęciem sąsiadów.', translation: 'Я позабочусь о животном соседей.' },
      ],
    },
    {
      id: 'l44-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Обобщающие местоимения: wszyscy, każdy, cały, żaden',
      summary: 'Выбираем правильное местоимение в зависимости от числа и значения.',
      bullets: [
        'wszyscy (люди, мн. ч.) / wszystkie (ост. мн. ч.): Wszyscy przyszli. Wszystkie zwierzęta są ważne.',
        'każdy / każda / każde (+ ед. ч.): Każdy człowiek lubi przyrodę.',
        'cały / cała / całe (весь объект целиком): cały dzień, cała rodzina.',
        'żaden / żadna / żadne (+ nie): Żadne zwierzę nie zostało samo.',
      ],
      examples: [
        { polish: 'Nie każdy ma psa, ale wszyscy lubią zwierzęta.', translation: 'Не у каждого есть собака, но все любят животных.' },
      ],
    },
  ],
  45: [
    {
      id: 'l45-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Реальные и нереальные условия (jeśli vs gdyby)',
      summary: 'Для реальных планов используем jeśli/jeżeli + обычное время, для гипотетических и нереальных — gdyby + условное наклонение.',
      table: {
        headers: ['Тип условия', 'Союз и время', 'Пример'],
        rows: [
          ['Реальное', 'jeżeli / jeśli …, to … (наст./буд.)', 'Jeśli będziemy segregować śmieci, pomożemy planecie.'],
          ['Нереальное / гипотеза', 'gdyby-m/-ś …, to … (-bym/-byś)', 'Gdybym wygrał na loterii, kupiłbym dom na wsi.'],
        ],
      },
      examples: [
        { polish: 'Chętnie mieszkałabym na wsi blisko lasu.', translation: 'Я бы с удовольствием жила в деревне у леса.' },
      ],
    },
    {
      id: 'l45-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Спряжение в условном наклонении (Tryb warunkowy)',
      summary: 'Личные окончания прикрепляются к частице -by (либо к союзу gdyby-).',
      table: {
        headers: ['Лицо', 'Ед. ч. (м. / ж.)', 'Мн. ч. (oni / one)'],
        rows: [
          ['ja', 'kupiłbym / kupiłabym', '—'],
          ['ty', 'kupiłbyś / kupiłabyś', '—'],
          ['on / ona / ono', 'kupiłby / kupiłaby / kupiłoby', '—'],
          ['my / wy', '—', 'kupilibyśmy / kupiłybyśmy · kupilibyście / kupiłybyście'],
          ['oni / one', '—', 'kupiliby / kupiłyby'],
        ],
      },
      examples: [
        { polish: 'Gdybyśmy mieli więcej czasu, pojechalibyśmy w góry.', translation: 'Если бы у нас было больше времени, мы бы поехали в горы.' },
      ],
    },
  ],
  46: [
    {
      id: 'l46-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Сложноподчинённые предложения и управление глаголов',
      summary: 'Соединяем части предложения союзными словами (który, co, gdzie, czy, że, żeby) и следим за падежами при покупках и рекламациях.',
      bullets: [
        'obejść się bez + Р. п. (обойтись без), unikać + Р. п. (избегать), troszczyć się o + В. п. (заботиться о).',
      ],
      examples: [
        { polish: 'Chcę oddać blender, który zepsuł się po tygodniu.', translation: 'Я хочу вернуть блендер, который сломался через неделю.' },
      ],
    },
    {
      id: 'l46-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Конструкции с byle / byleby',
      summary: 'Слово byle меняет оттенок значения в зависимости от контекста.',
      table: {
        headers: ['Конструкция', 'Значение', 'Пример'],
        rows: [
          ['byle / byleby + глагол', 'лишь бы / главное, чтобы', 'Byleby rachunek był czytelny.'],
          ['byle co / byle jaki / byle gdzie', 'что попало / кое-какой', 'Nie kupuj byle czego!'],
          ['nie byle co / nie byle kto', 'не абы что (высокая оценка)', 'To nie byle jaki sprzęt!'],
        ],
      },
      examples: [
        { polish: 'Nie kupuj byle czego — wybierz sprzęt z gwarancją.', translation: 'Не покупай что попало — выбери технику с гарантией.' },
      ],
    },
  ],
  47: [
    {
      id: 'l47-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Страдательный залог (Strona bierna): być vs zostać',
      summary: 'В страдательном залоге być сочетается с обоими видами (процесс или состояние), а zostać — только с совершенным видом (разовый результат).',
      table: {
        headers: ['Вспом. глагол', 'Вид причастия', 'Значение', 'Пример'],
        rows: [
          ['być (jest / był / będzie)', 'несов. или сов.', 'состояние или повторяемость', 'Spektakl jest grany w piątek.'],
          ['zostać (został / zostanie)', 'только сов.', 'результат конкретного события', 'Film został wyreżyserowany przez Wajdę.'],
        ],
      },
      bullets: [
        'Исполнитель действия вводится предлогом przez + винительный падеж.',
      ],
      examples: [
        { polish: 'Ten film został nakręcony przez znanego reżysera.', translation: 'Этот фильм был снят известным режиссёром.' },
      ],
    },
    {
      id: 'l47-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Образование страдательных причастий (-ny, -ony, -ty)',
      summary: 'Причастие согласуется с подлежащим в роде, числе и падеже.',
      bullets: [
        '-ny (от глаголов на -ać): napisać → napisany, zagrać → zagrany.',
        '-ony (от глаголов на -ić/-yć/-eć): zrobić → zrobiony, nagrodzić → nagrodzony.',
        '-ty (особые основы): otworzyć → otwarty, zamknąć → zamknięty, przyjąć → przyjęty.',
      ],
      examples: [
        { polish: 'Najlepsi aktorzy zostali nagrodzeni na festiwalu.', translation: 'Лучшие актёры были награждены на фестивале.' },
      ],
    },
  ],
  48: [
    {
      id: 'l48-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Существительные на -um (muzeum, centrum, akwarium)',
      summary: 'Слова среднего рода на -um не меняются в единственном числе, но во множественном числе теряют -um и склоняются по среднему роду.',
      table: {
        headers: ['Падеж', 'Ед. ч. (не склоняется)', 'Мн. ч. (отбрасывается -um)'],
        rows: [
          ['Именительный / Винительный', 'to nowe muzeum', 'te nowe muzea'],
          ['Родительный', 'tego nowego muzeum', 'tych nowych muzeów'],
          ['Дательный', 'temu nowemu muzeum', 'tym nowym muzeom'],
          ['Творительный', 'tym nowym muzeum', 'tymi nowymi muzeami'],
          ['Местный', 'w tym nowym muzeum', 'w tych nowych muzeach'],
        ],
      },
      examples: [
        { polish: 'W nowym muzeum oglądaliśmy niezwykłe akwarium.', translation: 'В новом музее мы смотрели на необычный аквариум.' },
      ],
    },
    {
      id: 'l48-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Выражение впечатлений об искусстве и выставках',
      summary: 'Закрепляем лексику вернисажей, живописи и оценки произведений искусства.',
      bullets: [
        'zrobić na kimś wrażenie (произвести впечатление), zachwycać (восхищать), być pod wrażeniem (быть под впечатлением).',
      ],
      examples: [
        { polish: 'Ta wystawa zrobiła na mnie ogromne wrażenie.', translation: 'Эта выставка произвела на меня огромное впечатление.' },
      ],
    },
  ],
  49: [
    {
      id: 'l49-b1',
      includeCoursebook: true,
      wbRange: [1, 7],
      title: 'Систематизация 7 падежей и личных местоимений',
      summary: 'Повторяем все 7 польских падежей, вопросы и ключевые предлоги перед сертификационным экзаменом.',
      table: {
        headers: ['Падеж', 'Вопросы', 'Частые предлоги / глаголы'],
        rows: [
          ['Mianownik (И.)', 'kto? co?', 'подлежащее, To jest…'],
          ['Dopełniacz (Р.)', 'kogo? czego?', 'отрицание, do, od, z, bez, dla, szukać'],
          ['Celownik (Д.)', 'komu? czemu?', 'pomagać, dziękować, podobać się, dzięki'],
          ['Biernik (В.)', 'kogo? co?', 'прямое дополнение, przez, na (куда)'],
          ['Narzędnik (Т.)', 'kim? czym?', 'być (проф.), interesować się, z, przed, nad, pod, za'],
          ['Miejscownik (П.)', 'o kim? o czym?', 'w, na, o, po, przy'],
          ['Wołacz (Зв.)', '—', 'обращения (Droga Anno!)'],
        ],
      },
      examples: [
        { polish: 'Proszę przeczytać tekst i odpowiedzieć na pytania.', translation: 'Пожалуйста, прочитайте текст и ответьте на вопросы.' },
      ],
    },
    {
      id: 'l49-b2',
      includeCoursebook: false,
      wbRange: [8, 14],
      title: 'Повторение системы глагола и экзаменационных конструкций',
      summary: 'Сводим воедино времена, вид глагола, наклонения и отглагольные существительные.',
      bullets: [
        'Навыки на экзамене: rozumienie ze słuchu, rozumienie tekstów pisanych, poprawność gramatyczna, pisanie, mówienie.',
        'Вводные фразы: Moim zdaniem…, Uważam, że…, Z jednej strony…, Z drugiej strony…',
      ],
      examples: [
        { polish: 'Moim zdaniem odpowiedź jest poprawna.', translation: 'По-моему, ответ правильный.' },
      ],
    },
  ],
};
