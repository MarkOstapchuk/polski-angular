export type LessonTheoryId =
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
  | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26
  | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39
  | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49;

export interface LessonTheory {
  coursebookPages: string;
  communication: string;
  vocabulary: string;
  grammar: string;
  examples: Array<{ polish: string; translation: string }>;
}

export const LESSON_THEORY: Record<LessonTheoryId, LessonTheory> = {
  1: {
    coursebookPages: '6–11',
    communication: 'Учимся здороваться, прощаться, представляться и спрашивать имя собеседника. Для официального общения используем вежливые формы, с друзьями — неформальные.',
    vocabulary: 'Dzień dobry — добрый день; cześć — привет/пока; proszę — пожалуйста; dziękuję — спасибо; przepraszam — извините; miło mi — приятно познакомиться. Повторяем польский алфавит и числа 0–10.',
    grammar: 'Для представления запоминаем две устойчивые конструкции: „Nazywam się…” и „Mam na imię…”. На этом этапе важно также различать польские буквосочетания, например sz, cz, rz и ch.',
    examples: [
      { polish: 'Dzień dobry. Nazywam się Mami Takada.', translation: 'Добрый день. Меня зовут Мами Такада.' },
      { polish: 'Cześć! Mam na imię Tom.', translation: 'Привет! Меня зовут Том.' },
    ],
  },
  2: {
    coursebookPages: '12–19',
    communication: 'Представляемся подробнее: спрашиваем, откуда человек, где он живёт и как у него дела.',
    vocabulary: 'Страны и города, личные данные, занятия и увлечения; числа 11–29. pracować — работать, uczyć się — учиться, hobby — хобби, chcieć — хотеть.',
    grammar: 'Личные местоимения: ja, ty, on/ona/ono, my, wy, oni/one. Формы być: jestem, jesteś, jest, jesteśmy, jesteście, są. У многих глаголов настоящего времени формы для ja и ty оканчиваются на -m и -sz.',
    examples: [
      { polish: 'Jestem z Japonii. Mieszkam w Tokio.', translation: 'Я из Японии. Я живу в Токио.' },
      { polish: 'Pracuję. A ty? Pracujesz?', translation: 'Я работаю. А ты? Ты работаешь?' },
    ],
  },
  3: {
    coursebookPages: '20–27',
    communication: 'Учимся называть людей и предметы, спрашивать „кто это?“ и „что это?“, описывать вещи простыми прилагательными.',
    vocabulary: 'Предметы в классе, цвета и прилагательные: nowy — новый, stary — старый, dobry — хороший, zły — плохой, duży — большой, mały — маленький.',
    grammar: 'У существительных есть род. Перед ними используем ten с мужским родом, ta с женским и to со средним. Прилагательное согласуется с существительным по роду: nowy student, nowa książka, nowe mieszkanie.',
    examples: [
      { polish: 'Kto to jest? To jest student.', translation: 'Кто это? Это студент.' },
      { polish: 'Co to jest? To jest nowa książka.', translation: 'Что это? Это новая книга.' },
    ],
  },
  4: {
    coursebookPages: '28–33',
    communication: 'Представляем себя и других, описываем внешность и характер, говорим, что думаем.',
    vocabulary: 'Прилагательные для описания людей и выражения opinii: wysoki — высокий, ciekawy — интересный, tylko — только, trochę — немного, mieć rację — быть правым.',
    grammar: 'Некоторые глаголы в форме ja имеют окончание -ę, а в форме ty — -isz или -ysz: myślę — myślisz, mówię — mówisz. Прилагательные меняются по роду: wysoki student, wysoka studentka.',
    examples: [
      { polish: 'Myślę, że to jest nowy student.', translation: 'Думаю, что это новый студент.' },
      { polish: 'Jaki jesteś? Jestem wysoki.', translation: 'Какой ты? Я высокий.' },
    ],
  },
  5: {
    coursebookPages: '34–39',
    communication: 'Говорим о профессии, возрасте, семье и интересах.',
    vocabulary: 'Названия профессий и членов семьи, увлечения и числа 20–100. Для возраста важны формы rok, lata и lat.',
    grammar: 'После być в значении профессии и после interesować się используется творительный падеж: studentem, nauczycielką, muzyką. Возраст выражается конструкцией „mieć + число + lata/lat”.',
    examples: [
      { polish: 'Jestem nauczycielką. Interesuję się muzyką.', translation: 'Я учительница. Я интересуюсь музыкой.' },
      { polish: 'Mam 24 lata.', translation: 'Мне 24 года.' },
    ],
  },
  6: {
    coursebookPages: '40–45',
    communication: 'Рассказываем о свободном времени, спорте и том, чем занимаются близкие.',
    vocabulary: 'Основные глаголы занятий и спорта, названия членов семьи; выражения nudzić się — скучать и szukać — искать.',
    grammar: 'В настоящем времени встречаются модели: ja -m / ty -sz (mam — masz), ja -ę / ty -esz (piszę — piszesz), ja -ę / ty -isz или -ysz (lubię — lubisz). Притяжательные mój и twój согласуются с существительным: mój brat, moja siostra, moje hobby.',
    examples: [
      { polish: 'Co lubisz robić? Lubię czytać.', translation: 'Что ты любишь делать? Я люблю читать.' },
      { polish: 'To jest moja siostra i mój brat.', translation: 'Это моя сестра и мой брат.' },
    ],
  },
  7: {
    coursebookPages: '46–51',
    communication: 'Покупаем товары, спрашиваем цену, говорим о списке покупок и количестве денег.',
    vocabulary: 'Магазины, товары, деньги, цены и числа 100–1000; krótki — короткий, długi — длинный, drogi — дорогой, tani — дешёвый.',
    grammar: 'Прямое дополнение часто ставится в винительный падеж. У женских слов -a меняется на -ę, а прилагательное получает -ą: długa lista → mam długą listę. Для одушевлённых слов мужского рода форма обычно совпадает с родительным: dobry brat → widzę dobrego brata.',
    examples: [
      { polish: 'Mam długą listę zakupów.', translation: 'У меня длинный список покупок.' },
      { polish: 'Kupuję tani chleb i widzę młodszego brata.', translation: 'Покупаю дешёвый хлеб и вижу младшего брата.' },
    ],
  },
  8: {
    coursebookPages: '52–57',
    communication: 'Говорим о еде, предпочтениях и составе блюд; спрашиваем, с чем едят или пьют.',
    vocabulary: 'Приёмы пищи, продукты, напитки и посуда. Полезные выражения: mieć ochotę na — хотеть чего-либо, chętnie — охотно.',
    grammar: 'После z в значении «с чем?» используем творительный падеж: z serem, z pomidorami. Прилагательное согласуется с существительным: z żółtym serem, z dobrymi pomidorami. От названий продуктов образуются прилагательные, часто с окончанием -owy: pomidor → pomidorowy.',
    examples: [
      { polish: 'Wolę herbatę niż kawę.', translation: 'Я предпочитаю чай кофе.' },
      { polish: 'Jem kanapkę z żółtym serem i pomidorami.', translation: 'Я ем бутерброд с жёлтым сыром и помидорами.' },
    ],
  },
  9: {
    coursebookPages: '58–63',
    communication: 'Покупаем продукты в супермаркете и называем фрукты, овощи и другие продукты.',
    vocabulary: 'Фрукты, овощи, рыба и описания продуктов: świeży — свежий, suszony — сушёный, miękki — мягкий, twardy — твёрдый.',
    grammar: 'У большинства слов не-мужского личного рода формы именительного и винительного падежей множественного числа совпадают. Поэтому говорим одинаково „это помидоры“ и „я покупаю помидоры“.',
    examples: [
      { polish: 'To są świeże pomidory.', translation: 'Это свежие помидоры.' },
      { polish: 'Lubię świeże pomidory i słodkie jabłka.', translation: 'Я люблю свежие помидоры и сладкие яблоки.' },
    ],
  },
  10: {
    coursebookPages: '64–69',
    communication: 'Бронируем столик, заказываем блюда и напитки, говорим, что любим или не любим.',
    vocabulary: 'Кафе и ресторан, блюда и десерты; zamówienie — заказ, zamawiać — заказывать, uwielbiać — обожать.',
    grammar: 'После отрицания прямое дополнение обычно переходит в родительный падеж: jem zupę → nie jem zupy. После z со значением „вместе с кем?“ личное местоимение ставится в творительный: ze mną, z tobą, z nim.',
    examples: [
      { polish: 'Zamawiam kawę, ale nie zamawiam deseru.', translation: 'Я заказываю кофе, но не заказываю десерт.' },
      { polish: 'Idę do restauracji z nimi.', translation: 'Я иду в ресторан с ними.' },
    ],
  },
  11: {
    coursebookPages: '70–77',
    communication: 'Рассказываем о семье, спрашиваем, чей это предмет, и описываем повседневные привычки.',
    vocabulary: 'Родственники, семейное положение и частотность действий: zawsze — всегда, zwykle — обычно, często — часто, rzadko — редко, nigdy — никогда.',
    grammar: 'Притяжательные местоимения согласуются с предметом: mój brat, moja siostra, moje dziecko. Его/её/их — jego, jej, ich — не меняются по роду предмета. Наречия частотности обычно стоят рядом с глаголом.',
    examples: [
      { polish: 'To jest moja rodzina. Mój brat często do mnie dzwoni.', translation: 'Это моя семья. Мой брат часто мне звонит.' },
      { polish: 'Ona nigdy nie pracuje w niedzielę.', translation: 'Она никогда не работает по воскресеньям.' },
    ],
  },
  12: {
    coursebookPages: '78–83',
    communication: 'Приглашаем куда-либо, договариваемся о встрече и говорим о расписании.',
    vocabulary: 'Дни недели и время; порядковые числительные от 1 до 24. godzina — час, kwadrans — четверть часа, umówić się — договориться о встрече.',
    grammar: 'Для точного времени используем порядковые числительные в нужной форме: o pierwszej, o drugiej. Названия дней недели в выражениях с „в“ имеют форму w poniedziałek, we wtorek. Приглашение можно начать с „Masz ochotę…?“ или „Może pójdziemy…?“',
    examples: [
      { polish: 'Masz ochotę pójść do kina?', translation: 'Хочешь пойти в кино?' },
      { polish: 'Spotkajmy się w poniedziałek o ósmej.', translation: 'Давай встретимся в понедельник в восемь.' },
    ],
  },
  13: {
    coursebookPages: '84–91',
    communication: 'Рассказываем, что делали раньше, как провели выходные и что произошло.',
    vocabulary: 'Свободное время, поездки, звонки и впечатления: mieć zasięg — иметь связь, odpisywać — отвечать на сообщение, pomagać — помогать.',
    grammar: 'В прошедшем времени форма зависит от рода и числа: męski -ł, żeński -ła, nijaki -ło, множественное число -li/-ły. Глаголы jeść и iść имеют особые основы: jadłem/jadłam, poszedłem/poszłam.',
    examples: [
      { polish: 'Wczoraj byłam w kinie i jadłam kolację.', translation: 'Вчера я была в кино и ужинала.' },
      { polish: 'Tom poszedł na spacer, a Mami pomagała Karolinie.', translation: 'Том пошёл на прогулку, а Мами помогала Каролине.' },
    ],
  },
  14: {
    coursebookPages: '92–97',
    communication: 'Спрашиваем дорогу, называем транспорт и объясняем, как пройти или проехать к месту.',
    vocabulary: 'Городские места и ориентиры: skrzyżowanie — перекрёсток, schody — лестница, światła — светофор, blisko — близко, daleko — далеко.',
    grammar: 'Пары iść/chodzić и jechać/jeździć различаются направленным единичным действием и привычным или повторяющимся движением: idę teraz, chodzę codziennie; jadę dziś, jeżdżę do pracy. Винительные местоимения: widzę go, widzę ją.',
    examples: [
      { polish: 'Idę do kina, ale zwykle chodzę do teatru.', translation: 'Я иду в кино, но обычно хожу в театр.' },
      { polish: 'Dziś jadę tramwajem, a do pracy jeżdżę autobusem.', translation: 'Сегодня я еду на трамвае, а на работу езжу на автобусе.' },
    ],
  },
  15: {
    coursebookPages: '98–105',
    communication: 'Покупаем продукты на развес и в упаковках, обращаемся с просьбой и отправляем письма или открытки.',
    vocabulary: 'Меры и упаковки: plasterek — ломтик, kawałek — кусок, paczka — пачка, puszka — банка, karton — пакет/картонная упаковка. Глаголы bać się и szukać требуют родительного падежа.',
    grammar: 'Количество влияет на форму существительного: dwa kartony, pięć kartonów, dużo jabłek; прилагательное тоже ставится в родительный множественного числа: pięć dużych kartonów. Родительный падеж также используется после отрицания и глаголов bać się, szukać. Формы местоимений: nie ma mnie, szukam go, boję się jej.',
    examples: [
      { polish: 'Poproszę dwa kartony soku i pięć jabłek.', translation: 'Дайте, пожалуйста, две упаковки сока и пять яблок.' },
      { polish: 'Szukam znaczków i nie mam koperty.', translation: 'Я ищу марки, и у меня нет конверта.' },
    ],
  },
  16: {
    coursebookPages: '106–111',
    communication: 'Говорим о погоде, временах года, планах на будущее и прогнозе.',
    vocabulary: 'Погода и сезоны: słonecznie — солнечно, pochmurno — облачно, wiatr — ветер, prognoza — прогноз, pora roku — время года.',
    grammar: 'Многие наречия образуются от прилагательных: szybki → szybko, ładny → ładnie. Для незавершённого действия в будущем используем będę + инфинитив: będę pracować. Совершенный глагол часто образует простое будущее одной формой: zrobię.',
    examples: [
      { polish: 'Jutro będzie zimno, ale będę pracować.', translation: 'Завтра будет холодно, но я буду работать.' },
      { polish: 'W weekend napiszę list.', translation: 'На выходных я напишу письмо.' },
    ],
  },
  17: {
    coursebookPages: '112–117',
    communication: 'Выражаем симпатию, мнение и эмоции, обсуждаем подарки и других людей.',
    vocabulary: 'Внешность, одежда, настроение и разговоры: podobać się — нравиться, plotkować — сплетничать, marudny — ворчливый.',
    grammar: 'Lubić требует винительного падежа: lubię ten sweter. В конструкции podobać się то, что нравится, — подлежащее, а человек ставится в дательный падеж: podoba mi się sweter; во множественном числе — podobają mi się buty. Местоимения меняются по падежам: ja → mnie/mi, on → go/jemu/mu.',
    examples: [
      { polish: 'Lubię tę bluzkę. Podoba mi się jej kolor.', translation: 'Мне нравится эта блузка. Мне нравится её цвет.' },
      { polish: 'Podobają mi się te spodnie.', translation: 'Мне нравятся эти брюки.' },
    ],
  },
  18: {
    coursebookPages: '118–123',
    communication: 'Описываем квартиру, комнаты, мебель и расположение предметов.',
    vocabulary: 'Комнаты и жильё: kuchnia — кухня, sypialnia — спальня, piętro — этаж, parter — первый этаж, strych — чердак, piwnica — подвал.',
    grammar: 'После w, na, przy, o и po для места или темы используется местный падеж: w domu, na stole, przy oknie, o mieszkaniu. В единственном числе окончания зависят от рода; во множественном часто встречается -ach, например o studentach.',
    examples: [
      { polish: 'Laptop leży na biurku, a książki są w szafie.', translation: 'Ноутбук лежит на письменном столе, а книги находятся в шкафу.' },
      { polish: 'Rozmawiamy o nowym mieszkaniu.', translation: 'Мы разговариваем о новой квартире.' },
    ],
  },
  19: {
    coursebookPages: '124–129',
    communication: 'Ищем квартиру, договариваемся об аренде и описываем, где находятся вещи.',
    vocabulary: 'Переезд и жильё: przeprowadzać się — переезжать, mieszkanie — квартира, zaspać — проспать, zdarzać się — случаться.',
    grammar: 'Предлоги места управляют разными падежами. Для положения внутри или на поверхности часто используются w/na + местный: w pokoju, na stole. Для „рядом с“ — obok + родительный: obok domu. Положение предмета описываем глаголами stać, leżeć, wisieć.',
    examples: [
      { polish: 'Stół stoi przy oknie, a książka leży na stole.', translation: 'Стол стоит у окна, а книга лежит на столе.' },
      { polish: 'Szukam mieszkania obok centrum.', translation: 'Я ищу квартиру рядом с центром.' },
    ],
  },
  20: {
    coursebookPages: '130–135',
    communication: 'Планируем поездки по Польше, описываем направления и спрашиваем, как добраться.',
    vocabulary: 'Географические направления и достопримечательности: północ — север, południe — юг, granica — граница, zabytek — памятник архитектуры, wycieczka — экскурсия/поездка.',
    grammar: 'Падеж после предлога зависит от смысла: место без движения обычно требует местного (w Krakowie), направление — формы движения (do Krakowa, na Mazury). Сравниваем „где?“ и „куда?“ вместе с подходящим предлогом.',
    examples: [
      { polish: 'Jesteśmy w Krakowie, a jutro jedziemy do Warszawy.', translation: 'Мы в Кракове, а завтра едем в Варшаву.' },
      { polish: 'Hotel leży na północy Polski.', translation: 'Отель находится на севере Польши.' },
    ],
  },
  21: {
    coursebookPages: '136–143',
    communication: 'Говорим о датах, днях рождения и биографических событиях.',
    vocabulary: 'Даты и события жизни: urodziny — день рождения, imieniny — именины, obchodzić — отмечать, rok — год.',
    grammar: 'Видовые пары объединяют несовершенный и совершенный глаголы. Несовершенный вид показывает процесс, привычку или повторение; совершенный — завершённое событие или результат. В прошедшем времени вид помогает уточнить, завершилось ли действие.',
    examples: [
      { polish: 'Wczoraj pisałam list.', translation: 'Вчера я писала письмо (важен процесс).' },
      { polish: 'Wczoraj napisałam list.', translation: 'Вчера я написала письмо (есть результат).' },
    ],
  },
  22: {
    coursebookPages: '144–149',
    communication: 'Рассказываем о планах на выходные и договариваемся по телефону.',
    vocabulary: 'Планы и действия: zostawać — оставаться, zająć — занять, zejść — спуститься; учимся обсуждать, что сделать и чем заняться.',
    grammar: 'В будущем вид глагола показывает, как мы видим действие. Для процесса или повторения: będę + инфинитив (będę czytać). Для ожидаемого завершённого результата: совершенная форма (przeczytam).',
    examples: [
      { polish: 'W sobotę będę czytać książkę.', translation: 'В субботу я буду читать книгу.' },
      { polish: 'W niedzielę przeczytam ten artykuł.', translation: 'В воскресенье я прочитаю эту статью.' },
    ],
  },
  23: {
    coursebookPages: '150–157',
    communication: 'Покупаем одежду, описываем вещи, делаем комплименты и сравниваем варианты.',
    vocabulary: 'Одежда, ткани, цвета и узоры; nosić — носить, mieć na sobie — быть одетым во что-либо.',
    grammar: 'Прилагательные сравниваем с помощью сравнительной и превосходной степени: ładny → ładniejszy → najładniejszy. После сравнительной степени часто ставим niż — „чем“. Для одежды используем винительный падеж: noszę sukienkę, mam na sobie spodnie.',
    examples: [
      { polish: 'Ta sukienka jest ładniejsza niż tamta.', translation: 'Это платье красивее того.' },
      { polish: 'Mam na sobie czerwoną bluzkę.', translation: 'На мне красная блузка.' },
    ],
  },
  24: {
    coursebookPages: '158–165',
    communication: 'Общаемся у парикмахера и в фитнес-студии, одобряем или критикуем результат.',
    vocabulary: 'Внешность, части тела, стрижка и уход; pozwolić sobie na — позволить себе, strzyżenie — стрижка.',
    grammar: 'Наречия сравнивают так же, как действия: szybko → szybciej → najszybciej, ładnie → ładniej → najładniej. Неправильная частая форма: dobrze → lepiej → najlepiej.',
    examples: [
      { polish: 'Tutaj jest drożej niż w Londynie.', translation: 'Здесь дороже, чем в Лондоне.' },
      { polish: 'Po tej fryzurze wyglądasz najlepiej.', translation: 'С этой причёской ты выглядишь лучше всего.' },
    ],
  },
  25: {
    coursebookPages: '166–171',
    communication: 'Обращаемся к врачу или стоматологу и даём советы.',
    vocabulary: 'Части тела, симптомы и лечение: boleć — болеть, zażywać — принимать лекарство, lekarz — врач, dentysta — стоматолог.',
    grammar: 'Для совета используем powinien + инфинитив. Форма согласуется с тем, кому советуем: powinien для мужчины, powinna для женщины, powinno для среднего рода, powinni/powinny во множественном числе.',
    examples: [
      { polish: 'Powinieneś odpocząć. Powinnaś iść do lekarza.', translation: 'Тебе следует отдохнуть. Тебе следует пойти к врачу.' },
      { polish: 'Boli mnie głowa.', translation: 'У меня болит голова.' },
    ],
  },
  26: {
    coursebookPages: '172–177',
    communication: 'Просим об услуге, сообщаем о проблеме и подаём жалобу или рекламацию.',
    vocabulary: 'Службы и непредвиденные ситуации: wypadek — происшествие, kradzież — кража, pożar — пожар, naprawić — починить, reklamacja — рекламация.',
    grammar: 'Условное наклонение смягчает просьбы и желания. К форме прошедшего времени добавляется -by: mógłbym/mogłabym — я мог бы/могла бы, chciałbym/chciałabym — я хотел бы/хотела бы.',
    examples: [
      { polish: 'Czy mógłby pan mi pomóc?', translation: 'Не могли бы вы мне помочь?' },
      { polish: 'Chciałabym złożyć reklamację.', translation: 'Я хотела бы подать рекламацию.' },
    ],
  },
  27: {
    coursebookPages: '6–13',
    communication: 'Представляемся подробнее, рассказываем о внешности, характере, интересах, семье и мечтах.',
    vocabulary: 'Внешность, черты характера, семейное положение, увлечения и свободное время.',
    grammar: 'Творительный падеж отвечает на вопросы kim? czym? и употребляется после interesować się, zajmować się, kierować, opiekować się, а также для обозначения инструмента и совместного действия.',
    examples: [
      { polish: 'Interesuję się polskim kinem.', translation: 'Я интересуюсь польским кино.' },
      { polish: 'Jadę do pracy autobusem.', translation: 'Я еду на работу на автобусе.' },
    ],
  },
  28: {
    coursebookPages: '14–19',
    communication: 'Описываем необычные события и природные катаклизмы, рассказываем о семье и биографиях.',
    vocabulary: 'Катаклизмы, стихийные бедствия, семейные события и биографические факты.',
    grammar: 'Повторяем родительный падеж после отрицания, количественных выражений и ряда глаголов; отрабатываем вопросы kogo? czego?',
    examples: [
      { polish: 'Nie mam czasu ani ochoty.', translation: 'У меня нет ни времени, ни желания.' },
      { polish: 'Boję się burzy.', translation: 'Я боюсь грозы.' },
    ],
  },
  29: {
    coursebookPages: '20–25',
    communication: 'Покупаем билеты в кино, уточняем расписание и сравниваем фильмы.',
    vocabulary: 'Кинотеатр, сеансы, билеты, жанры, рецензии и описание фильма.',
    grammar: 'Повторяем статические и динамические предлоги места и направления; говорим о времени начала и окончания.',
    examples: [
      { polish: 'O której zaczyna się seans?', translation: 'Во сколько начинается сеанс?' },
      { polish: 'Spotkajmy się przed kinem.', translation: 'Давай встретимся перед кинотеатром.' },
    ],
  },
  30: {
    coursebookPages: '26–31',
    communication: 'Даем определения, описываем людей и называем национальности и профессии.',
    vocabulary: 'Национальности, профессии, названия людей и предметов.',
    grammar: 'Образуем именительный падеж множественного числа существительных: студенты, nauczyciele, dzieci.',
    examples: [
      { polish: 'Polacy mieszkają w Polsce.', translation: 'Поляки живут в Польше.' },
      { polish: 'Lekarze pracują w szpitalu.', translation: 'Врачи работают в больнице.' },
    ],
  },
  31: {
    coursebookPages: '32–39',
    communication: 'Описываем характер и внешность, формулируем и обосновываем мнение.',
    vocabulary: 'Черты характера, отношения, оценки и выражения собственного мнения.',
    grammar: 'Согласуем прилагательные мужского личного рода во множественном числе с существительными: dobrzy studenci, mili nauczyciele.',
    examples: [
      { polish: 'To są bardzo zdolni studenci.', translation: 'Это очень способные студенты.' },
      { polish: 'Moi przyjaciele są cierpliwi.', translation: 'Мои друзья терпеливые.' },
    ],
  },
  32: {
    coursebookPages: '40–45',
    communication: 'Говорим об образовании, учебе, опыте и планах.',
    vocabulary: 'Школа, университет, компьютер, интернет, предметы и образовательные степени.',
    grammar: 'Образуем существительные от глаголов: czytać → czytanie, studiować → studiowanie. Существительное может обозначать процесс или занятие.',
    examples: [
      { polish: 'Lubię czytanie reportaży.', translation: 'Я люблю читать репортажи.' },
      { polish: 'Studiowanie za granicą dużo kosztuje.', translation: 'Учеба за границей стоит дорого.' },
    ],
  },
  33: {
    coursebookPages: '46–51',
    communication: 'Проходим собеседование, говорим о работе и профессиональных трудностях, пишем письма.',
    vocabulary: 'Трудоустройство, должности, типы компаний и деловая переписка.',
    grammar: 'Повторяем ранее изученные падежи и времена в контексте резюме, вопросов и ответов на собеседовании.',
    examples: [
      { polish: 'Mam doświadczenie w pracy z klientami.', translation: 'У меня есть опыт работы с клиентами.' },
      { polish: 'Czy mogę wysłać CV mailem?', translation: 'Можно отправить резюме по электронной почте?' },
    ],
  },
  34: {
    coursebookPages: '52–57',
    communication: 'Берем интервью, рассказываем о событиях и воспоминаниях.',
    vocabulary: 'Происхождение, семья, путешествия и важные события.',
    grammar: 'Повторяем винительный падеж после глаголов и предлогов: kogo? co?; следим за формами местоимений.',
    examples: [
      { polish: 'Przeprowadziłam wywiad z aktorką.', translation: 'Я взяла интервью у актрисы.' },
      { polish: 'Pamiętam tę historię.', translation: 'Я помню эту историю.' },
    ],
  },
  35: {
    coursebookPages: '58–65',
    communication: 'Даем инструкции, формулируем запреты и готовимся к путешествию.',
    vocabulary: 'Поездки, упаковка багажа, кемпинг, аэропорт и дорожные указатели.',
    grammar: 'Образуем повелительное наклонение и используем безличные глаголы и конструкции для правил и инструкций.',
    examples: [
      { polish: 'Spakuj paszport i bilet.', translation: 'Положи в багаж паспорт и билет.' },
      { polish: 'Nie wolno tu palić.', translation: 'Здесь нельзя курить.' },
    ],
  },
  36: {
    coursebookPages: '66–71',
    communication: 'Спрашиваем информацию, узнаем о достопримечательностях Польши и пишем сообщения.',
    vocabulary: 'Города и туристические места, письма, электронные письма и SMS.',
    grammar: 'Повторяем местный падеж; обращаемся к одному человеку и группе в звательном падеже.',
    examples: [
      { polish: 'Co warto zobaczyć w Gdańsku?', translation: 'Что стоит посмотреть в Гданьске?' },
      { polish: 'Droga Anno, dziękuję za wiadomość.', translation: 'Дорогая Анна, спасибо за сообщение.' },
    ],
  },
  37: {
    coursebookPages: '72–77',
    communication: 'Рассказываем, куда и каким способом передвигаемся, используем устойчивые выражения.',
    vocabulary: 'Туризм, передвижение, направления и идиомы с глаголами движения.',
    grammar: 'Различаем однонаправленные и многократные глаголы движения: iść/chodzić, jechać/jeździć.',
    examples: [
      { polish: 'Codziennie jeżdżę do pracy tramwajem.', translation: 'Каждый день я езжу на работу на трамвае.' },
      { polish: 'Teraz idę do sklepu.', translation: 'Сейчас я иду в магазин.' },
    ],
  },
  38: {
    coursebookPages: '78–83',
    communication: 'Спрашиваем дорогу, обсуждаем правила движения и выражаем недовольство.',
    vocabulary: 'Дорожное движение, транспорт, автозаправка и ориентиры.',
    grammar: 'Повторяем глаголы движения в вопросах о маршруте и в инструкциях; выбираем форму по направлению и повторяемости.',
    examples: [
      { polish: 'Jak dojadę na dworzec?', translation: 'Как мне доехать до вокзала?' },
      { polish: 'Proszę jechać prosto i skręcić w lewo.', translation: 'Езжайте прямо и поверните налево.' },
    ],
  },
  39: {
    coursebookPages: '84–91',
    communication: 'Говорим о сложных жизненных ситуациях, отношениях и о том, кому что нужно.',
    vocabulary: 'Жизненные события, трудности, отношения и реакции людей.',
    grammar: 'Используем дательный падеж единственного числа для адресата и того, кто испытывает состояние: komu? czemu?',
    examples: [
      { polish: 'Przyjaciel pomógł mi w trudnej sytuacji.', translation: 'Друг помог мне в трудной ситуации.' },
      { polish: 'Dziecku jest zimno.', translation: 'Ребенку холодно.' },
    ],
  },
  40: {
    coursebookPages: '92–99',
    communication: 'Рассказываем о традициях Дня поминовения и событиях послевоенной истории Польши.',
    vocabulary: 'Польские традиции, память, исторические события и семейные воспоминания.',
    grammar: 'Повторяем возвратные местоимения się и siebie, а также формы личных местоимений.',
    examples: [
      { polish: 'Wspominamy tych, którzy odeszli.', translation: 'Мы вспоминаем тех, кто ушел.' },
      { polish: 'Zadbaj o siebie.', translation: 'Позаботься о себе.' },
    ],
  },
  41: {
    coursebookPages: '100–105',
    communication: 'Рассказываем о праздничных традициях и истории, описываем, как отмечают праздники.',
    vocabulary: 'Польские праздники, обычаи, даты и сезонные выражения.',
    grammar: 'Повторяем даты и повелительное наклонение; используем безличные формы для описания общих обычаев.',
    examples: [
      { polish: 'W Wigilię dzielimy się opłatkiem.', translation: 'В Сочельник мы делимся облаткой.' },
      { polish: 'W Polsce święta obchodzi się rodzinnie.', translation: 'В Польше праздники отмечают в кругу семьи.' },
    ],
  },
  42: {
    coursebookPages: '106–111',
    communication: 'Описываем приключения и последовательность событий во времени.',
    vocabulary: 'Приключения, воспоминания и выражения времени.',
    grammar: 'Связываем события союзами когда, прежде чем, после того как и пока; следим за последовательностью времен.',
    examples: [
      { polish: 'Zanim wyszliśmy, sprawdziliśmy mapę.', translation: 'Перед тем как выйти, мы проверили карту.' },
      { polish: 'Kiedy wróciłam, wszyscy już spali.', translation: 'Когда я вернулась, все уже спали.' },
    ],
  },
  43: {
    coursebookPages: '112–119',
    communication: 'Рассказываем о польской истории, политике и обществе.',
    vocabulary: 'История, государство, общество и события прошлого.',
    grammar: 'Повторяем вид глагола и выбираем совершенный или несовершенный вид в повелительном наклонении.',
    examples: [
      { polish: 'Przeczytaj artykuł i opowiedz, co się wydarzyło.', translation: 'Прочитай статью и расскажи, что произошло.' },
      { polish: 'Kiedy mieszkał w Polsce, często odwiedzał muzea.', translation: 'Когда он жил в Польше, часто посещал музеи.' },
    ],
  },
  44: {
    coursebookPages: '120–125',
    communication: 'Говорим о планах на будущее, животных и природе.',
    vocabulary: 'Животные, домашние питомцы, природа и устойчивые выражения.',
    grammar: 'Повторяем образование будущего времени, склонение существительных типа zwierzę и формы числительных с датами.',
    examples: [
      { polish: 'Zaopiekuję się zwierzęciem sąsiadów.', translation: 'Я позабочусь о животных соседей.' },
      { polish: 'W przyszłym roku pojedziemy nad morze.', translation: 'В следующем году мы поедем к морю.' },
    ],
  },
  45: {
    coursebookPages: '126–131',
    communication: 'Обсуждаем экологию, привычки и возможные последствия наших решений.',
    vocabulary: 'Агротуризм, защита природы, фермерское хозяйство и экологические привычки.',
    grammar: 'Строим условные предложения с jeżeli…, to… и используем условное наклонение для гипотез и предположений.',
    examples: [
      { polish: 'Jeżeli będziemy segregować śmieci, ograniczymy ich ilość.', translation: 'Если мы будем сортировать мусор, то сократим его количество.' },
      { polish: 'Chętnie mieszkałabym na wsi.', translation: 'Я бы с удовольствием жила в деревне.' },
    ],
  },
  46: {
    coursebookPages: '132–139',
    communication: 'Сравниваем товары, обсуждаем покупки и подаем рекламацию.',
    vocabulary: 'Бытовая техника, магазины, покупки, гарантия и возврат товара.',
    grammar: 'Строим сложноподчиненные предложения и используем частицу byle для выражения минимального условия или требования.',
    examples: [
      { polish: 'Chcę oddać blender, który zepsuł się po tygodniu.', translation: 'Я хочу вернуть блендер, который сломался через неделю.' },
      { polish: 'Byleby rachunek był czytelny.', translation: 'Главное, чтобы чек был разборчивым.' },
    ],
  },
  47: {
    coursebookPages: '140–145',
    communication: 'Обсуждаем кино и театр, выражаем эмоции и участвуем в дискуссии.',
    vocabulary: 'Фильмы, спектакли, актеры, впечатления и эмоции.',
    grammar: 'Образуем страдательные причастия и используем страдательный залог, чтобы сосредоточиться на действии или его результате.',
    examples: [
      { polish: 'Ten film został wyreżyserowany przez znanego reżysera.', translation: 'Этот фильм был снят известным режиссером.' },
      { polish: 'Spektakl jest grany w każdy piątek.', translation: 'Спектакль идет каждую пятницу.' },
    ],
  },
  48: {
    coursebookPages: '146–151',
    communication: 'Говорим об искусстве и выставках, выражаем восхищение и критическое мнение.',
    vocabulary: 'Живопись, фотография, музеи, выставки и вернисажи.',
    grammar: 'Склоняем существительные среднего рода на -um: muzeum, muzeum, w muzeum, z muzeum.',
    examples: [
      { polish: 'W muzeum oglądaliśmy niezwykłe akwarium.', translation: 'В музее мы смотрели на необычный аквариум.' },
      { polish: 'Ta wystawa zrobiła na mnie ogromne wrażenie.', translation: 'Эта выставка произвела на меня огромное впечатление.' },
    ],
  },
  49: {
    coursebookPages: '152–157',
    communication: 'Повторяем курс и знакомимся с форматом сертификационных экзаменов по польскому языку.',
    vocabulary: 'Экзаменационные инструкции, оценивание, правильность, беглость речи и выражение мнения.',
    grammar: 'Повторяем падежи, времена, виды глагола, условные конструкции и согласование; применяем их в устной и письменной речи.',
    examples: [
      { polish: 'Proszę przeczytać tekst i odpowiedzieć na pytania.', translation: 'Пожалуйста, прочитайте текст и ответьте на вопросы.' },
      { polish: 'Moim zdaniem odpowiedź jest poprawna.', translation: 'По-моему, ответ правильный.' },
    ],
  },
};
