import { Injectable, signal } from '@angular/core';

export type Language = 'pl' | 'ru' | 'en';

const messages: Record<Language, Record<string, string>> = {
  pl: {
    language: 'Język',
    'auth.brand': 'Strona główna', 'auth.eyebrow': 'TWOJA NAUKA POLSKIEGO', 'auth.welcome': 'Witaj ponownie', 'auth.create': 'Utwórz konto',
    'auth.signInIntro': 'Zaloguj się, aby zapisać postępy na każdym urządzeniu.', 'auth.signUpIntro': 'Utwórz konto, aby zachować swoje postępy.',
    'auth.email': 'E-mail', 'auth.password': 'Hasło', 'auth.wait': 'Chwileczkę…', 'auth.signIn': 'Zaloguj się', 'auth.signUp': 'Zarejestruj się',
    'auth.noAccount': 'Nie masz jeszcze konta?', 'auth.hasAccount': 'Masz już konto?', 'auth.sessionError': 'Nie udało się sprawdzić sesji. Zaloguj się ponownie.',
    'auth.confirmEmail': 'Sprawdź pocztę i potwierdź adres e-mail, aby dokończyć rejestrację.',
    'nav.home': 'Moja ścieżka', 'nav.course': 'Kurs', 'nav.progress': 'Postępy', 'nav.feedback': 'Opinie', 'nav.logout': 'Wyloguj się',
    'nav.logoutAccount': 'Wyloguj konto', 'nav.chooseCourse': 'Wybierz kurs', 'nav.openCourse': 'Otwórz wybrany kurs', 'nav.days': 'dni',
    'dashboard.greetingMorning': 'Dzień dobry', 'dashboard.greetingDay': 'Miłego dnia', 'dashboard.greetingEvening': 'Dobry wieczór',
    'dashboard.chooseCourse': 'Wybierz kurs', 'dashboard.chooseCourseIntro': 'Każda część ma własną ścieżkę i zapisany postęp.',
    'dashboard.welcome': 'Wróć do swojej ścieżki i ucz się we własnym tempie.', 'dashboard.dailyRhythm': 'Twój spokojny rytm',
    'dashboard.startCourse': 'ZACZNIJ KURS', 'dashboard.continueLearning': 'KONTYNUUJ NAUKĘ', 'dashboard.startLesson': 'Zacznij lekcję',
    'dashboard.continue': 'Kontynuuj', 'dashboard.exercise': 'ćwiczeń', 'dashboard.path': 'TWOJA DROGA', 'dashboard.lessons': 'lekcje',
    'dashboard.completed': 'Gotowe', 'dashboard.locked': 'Zablokowane', 'dashboard.partComplete': 'Część ukończona',
    'dashboard.learnAtOwnPace': 'Ucz się we własnym tempie', 'dashboard.partCompleteHint': 'Możesz wrócić do lekcji lub wybrać drugą część kursu.',
    'dashboard.progressSaved': 'Postęp w tej części zapisuje się osobno.', 'dashboard.goodHabit': 'DOBRY NAWYK', 'dashboard.yourStreak': 'Twoja passa',
    'dashboard.daysInRow': 'dni z rzędu', 'dashboard.smallStep': 'Mały krok dziennie. Bez pośpiechu.', 'dashboard.dailyGoal': 'DZISIEJSZY CEL',
    'dashboard.doOneLesson': 'Zrób jedną lekcję, żeby utrzymać rytm.', 'dashboard.goalReached': 'Cel osiągnięty!', 'dashboard.howWeLearn': 'JAK SIĘ UCZYMY',
    'dashboard.moreThanWords': 'Więcej niż układanie słów.', 'dashboard.practiceWholeSentence': 'Wpisuj odpowiedzi, odmieniaj, słuchaj i sprawdzaj, czy rozumiesz całe zdanie.',
    'dashboard.installApp': 'Dodaj na ekran główny', 'dashboard.installAppAction': 'Zainstaluj aplikację', 'dashboard.installHelp': 'Jak zainstalować?',
    'dashboard.offlineApp': 'APLIKACJA OFFLINE', 'dashboard.addPolski': 'Dodaj polski. do ekranu', 'dashboard.openSafari': 'Otwórz tę stronę w Safari.',
    'dashboard.share': 'Dotknij Udostępnij na pasku przeglądarki.', 'dashboard.addHome': 'Wybierz Dodaj do ekranu początkowego.',
    'dashboard.materials': 'BEZPŁATNE MATERIAŁY', 'dashboard.readPractice': 'Czytaj i ćwicz polski', 'dashboard.polishLetters': 'Polskie znaki i wymowa',
    'dashboard.shortLesson': 'Krótka lekcja', 'dashboard.makesDifference': 'robi różnicę.', 'dashboard.experiencePoints': 'Punkty doświadczenia', 'dashboard.open': 'Otwórz',
    'dashboard.weekActivity': 'Aktywność w ostatnim tygodniu', 'dashboard.close': 'Zamknij', 'dashboard.sourceNote': 'Materiał oparty na podręczniku i zeszycie ćwiczeń „Polski krok po kroku”.',
    'dashboard.cases': 'Przypadki', 'dashboard.basicPhrases': 'Podstawowe zwroty', 'dashboard.lettersHint': 'ą, ć, ę, ł i pozostałe litery',
    'dashboard.casesHint': 'Przewodnik dla początkujących', 'dashboard.phrasesHint': 'Powitania i pierwsza rozmowa',
    'feedback.back': 'Wróć do nauki', 'feedback.eyebrow': 'TWOJA OPINIA MA ZNACZENIE', 'feedback.title': 'Prześlij opinię',
    'feedback.intro': 'Powiedz nam, co możemy poprawić w aplikacji lub kursie.', 'feedback.topic': 'Temat opinii', 'feedback.app': 'O aplikacji',
    'feedback.course': 'O kursie', 'feedback.chooseCourse': 'Kurs', 'feedback.yourFeedback': 'Twoja opinia',
    'feedback.placeholder': 'Co Ci się podobało lub co warto poprawić?', 'feedback.sending': 'Wysyłanie…', 'feedback.send': 'Wyślij opinię',
    'feedback.sent': 'Dziękujemy! Opinia została wysłana.', 'feedback.error': 'Nie udało się wysłać opinii. Sprawdź połączenie i spróbuj ponownie.',
    'lesson.back': 'Wróć do ścieżki', 'lesson.progress': 'Postęp lekcji', 'lesson.of': 'z', 'lesson.upTo': 'do', 'lesson.exercisePicker': 'Ćwiczenia · możesz robić je w dowolnej kolejności', 'lesson.part': 'CZĘŚĆ', 'lesson.lesson': 'LEKCJA',
    'lesson.lookup': 'Przytrzymaj polskie słowo, aby zobaczyć tłumaczenie', 'lesson.textbook': 'PODRĘCZNIK', 'lesson.theory': 'Teoria',
    'lesson.communication': 'Komunikacja', 'lesson.words': 'Słowa', 'lesson.grammar': 'Gramatyka', 'lesson.examples': 'Przykłady',
    'lesson.workbookNext': 'Dalej — zeszyt ćwiczeń:', 'lesson.audioHint': 'Możesz odtworzyć nagranie ponownie.',
    'lesson.audioUnsupported': 'Twoja przeglądarka nie obsługuje audio.', 'lesson.matchHint': 'Wybierz początek zdania, a następnie pasujące zakończenie.',
    'lesson.starts': 'Początki', 'lesson.endings': 'Zakończenia', 'lesson.correctAnswer': 'Poprawna odpowiedź:', 'lesson.answerAll': 'Odpowiedz na wszystkie pytania, aby sprawdzić.',
    'lesson.check': 'Sprawdź odpowiedzi', 'lesson.greatWork': 'Świetna praca!', 'lesson.correct': 'Dobrze', 'lesson.score': 'Wynik',
    'lesson.exercise': 'Ćwiczenie', 'lesson.pages': 'STRONY', 'lesson.missingLetter': 'brakująca litera', 'lesson.typeWhatYouHear': 'Wpisz to, co słyszysz', 'lesson.yourAnswer': 'Twoja odpowiedź',
    'lesson.correctly': 'poprawnie', 'lesson.rememberForms': 'Zapamiętaj poprawne formy i idź dalej.', 'lesson.seeResults': 'Zobacz wynik', 'lesson.next': 'Dalej',
    'lesson.offlineNote': 'Treść lekcji działa offline po pierwszym otwarciu aplikacji. Nagrania i obrazy będą dostępne po ich wcześniejszym pobraniu.',
    'lesson.completed': 'UKOŃCZONA', 'lesson.completionCopy': 'masz już za sobą całą lekcję.', 'lesson.correctAnswers': 'poprawnych odpowiedzi',
    'lesson.xpAdded': 'dodano do postępów', 'lesson.bestScoreSaved': 'najlepszy wynik zapisany', 'lesson.perfect': 'Perfekcyjnie. Każdy poprawny zwrot zostaje z Tobą.',
    'lesson.mistakesLearn': 'Błędy są częścią nauki. Poprawne odpowiedzi zobaczysz w podsumowaniu ćwiczeń.', 'lesson.closeTranslation': 'Zamknij tłumaczenie',
    'lesson.translationFromPolish': 'TŁUMACZENIE Z POLSKIEGO', 'lesson.searchingTranslation': 'Szukam tłumaczenia…', 'lesson.translationNotFound': 'Nie znaleziono tłumaczenia.',
    'lesson.dictionaryPoweredBy': 'Słownik PONS ↗',
    'home.nav': 'Nawigacja główna', 'home.materials': 'Materiały', 'home.login': 'Zaloguj się', 'home.eyebrow': 'KURS JĘZYKA POLSKIEGO · A1–A2',
    'home.title': 'Ucz się polskiego krok po kroku', 'home.lead': 'Krótkie lekcje, praktyczne ćwiczenia i nagrania pomagają uczyć się regularnie. Zacznij od bezpłatnych materiałów albo przejdź do kursu.',
    'home.openCourse': 'Przejdź do kursu', 'home.seeMaterials': 'Zobacz materiały ↓', 'home.materialsEyebrow': 'BEZPŁATNE MATERIAŁY',
    'home.materialsTitle': 'Czytaj i ćwicz polski', 'home.openGuide': 'Otwórz przewodnik →', 'home.lettersDescription': 'Poznaj ą, ć, ę, ł i pozostałe litery.',
    'home.casesDescription': 'Zacznij naukę siedmiu przypadków od prostych zdań.', 'home.phrasesDescription': 'Powitania, przedstawianie się i pierwsza rozmowa.',
    'home.ctaEyebrow': 'NAUKA WE WŁASNYM TEMPIE', 'home.ctaTitle': 'Kontynuuj w kursie A1–A2', 'home.ctaButton': 'Zaloguj się lub utwórz konto',
    'home.footer': 'Kurs języka polskiego online',
  },
  ru: {
    language: 'Язык',
    'auth.brand': 'Главная', 'auth.eyebrow': 'ИЗУЧАЙТЕ ПОЛЬСКИЙ', 'auth.welcome': 'С возвращением', 'auth.create': 'Создать аккаунт',
    'auth.signInIntro': 'Войдите, чтобы сохранять прогресс на всех устройствах.', 'auth.signUpIntro': 'Создайте аккаунт, чтобы сохранить прогресс.',
    'auth.email': 'Электронная почта', 'auth.password': 'Пароль', 'auth.wait': 'Подождите…', 'auth.signIn': 'Войти', 'auth.signUp': 'Зарегистрироваться',
    'auth.noAccount': 'Ещё нет аккаунта?', 'auth.hasAccount': 'Уже есть аккаунт?', 'auth.sessionError': 'Не удалось проверить сессию. Войдите ещё раз.',
    'auth.confirmEmail': 'Проверьте почту и подтвердите адрес электронной почты, чтобы завершить регистрацию.',
    'nav.home': 'Мой путь', 'nav.course': 'Курс', 'nav.progress': 'Прогресс', 'nav.feedback': 'Отзывы', 'nav.logout': 'Выйти',
    'nav.logoutAccount': 'Выйти из аккаунта', 'nav.chooseCourse': 'Выбрать курс', 'nav.openCourse': 'Открыть выбранный курс', 'nav.days': 'дн.',
    'dashboard.greetingMorning': 'Доброе утро', 'dashboard.greetingDay': 'Хорошего дня', 'dashboard.greetingEvening': 'Добрый вечер',
    'dashboard.chooseCourse': 'Выберите курс', 'dashboard.chooseCourseIntro': 'У каждой части свой учебный путь и сохранённый прогресс.',
    'dashboard.welcome': 'Продолжайте свой путь и учитесь в удобном темпе.', 'dashboard.dailyRhythm': 'Ваш спокойный ритм',
    'dashboard.startCourse': 'НАЧНИТЕ КУРС', 'dashboard.continueLearning': 'ПРОДОЛЖАЙТЕ УЧЁБУ', 'dashboard.startLesson': 'Начать урок',
    'dashboard.continue': 'Продолжить', 'dashboard.exercise': 'упражнений', 'dashboard.path': 'ВАШ ПУТЬ', 'dashboard.lessons': 'уроков',
    'dashboard.completed': 'Готово', 'dashboard.locked': 'Закрыто', 'dashboard.partComplete': 'Часть завершена',
    'dashboard.learnAtOwnPace': 'Учитесь в своём темпе', 'dashboard.partCompleteHint': 'Можно повторить уроки или выбрать вторую часть курса.',
    'dashboard.progressSaved': 'Прогресс в этой части сохраняется отдельно.', 'dashboard.goodHabit': 'ПОЛЕЗНАЯ ПРИВЫЧКА', 'dashboard.yourStreak': 'Ваша серия',
    'dashboard.daysInRow': 'дней подряд', 'dashboard.smallStep': 'Небольшой шаг каждый день. Без спешки.', 'dashboard.dailyGoal': 'ЦЕЛЬ НА СЕГОДНЯ',
    'dashboard.doOneLesson': 'Пройдите один урок, чтобы сохранить ритм.', 'dashboard.goalReached': 'Цель достигнута!', 'dashboard.howWeLearn': 'КАК МЫ УЧИМСЯ',
    'dashboard.moreThanWords': 'Больше, чем составление слов.', 'dashboard.practiceWholeSentence': 'Пишите ответы, изменяйте формы, слушайте и проверяйте, понимаете ли вы всё предложение.',
    'dashboard.installApp': 'Добавить на главный экран', 'dashboard.installAppAction': 'Установить приложение', 'dashboard.installHelp': 'Как установить?',
    'dashboard.offlineApp': 'ОФЛАЙН-ПРИЛОЖЕНИЕ', 'dashboard.addPolski': 'Добавить polski. на экран', 'dashboard.openSafari': 'Откройте страницу в Safari.',
    'dashboard.share': 'Нажмите «Поделиться» в панели браузера.', 'dashboard.addHome': 'Выберите «На экран Домой».',
    'dashboard.materials': 'БЕСПЛАТНЫЕ МАТЕРИАЛЫ', 'dashboard.readPractice': 'Читайте и практикуйте польский', 'dashboard.polishLetters': 'Польские буквы и произношение',
    'dashboard.shortLesson': 'Короткий урок', 'dashboard.makesDifference': 'имеет значение.', 'dashboard.experiencePoints': 'Очки опыта', 'dashboard.open': 'Открыть',
    'dashboard.weekActivity': 'Активность за последнюю неделю', 'dashboard.close': 'Закрыть', 'dashboard.sourceNote': 'Материалы основаны на учебнике и рабочей тетради «Polski krok po kroku».',
    'dashboard.cases': 'Падежи', 'dashboard.basicPhrases': 'Основные фразы', 'dashboard.lettersHint': 'ą, ć, ę, ł и другие буквы',
    'dashboard.casesHint': 'Руководство для начинающих', 'dashboard.phrasesHint': 'Приветствия и первый разговор',
    'feedback.back': 'Вернуться к учёбе', 'feedback.eyebrow': 'ВАШЕ МНЕНИЕ ВАЖНО', 'feedback.title': 'Оставить отзыв',
    'feedback.intro': 'Расскажите, что можно улучшить в приложении или курсе.', 'feedback.topic': 'О чём отзыв?', 'feedback.app': 'О приложении',
    'feedback.course': 'О курсе', 'feedback.chooseCourse': 'Курс', 'feedback.yourFeedback': 'Ваш отзыв',
    'feedback.placeholder': 'Что вам понравилось или что стоит исправить?', 'feedback.sending': 'Отправка…', 'feedback.send': 'Отправить отзыв',
    'feedback.sent': 'Спасибо! Ваш отзыв отправлен.', 'feedback.error': 'Не удалось отправить отзыв. Проверьте подключение и попробуйте ещё раз.',
    'lesson.back': 'Вернуться к урокам', 'lesson.progress': 'Прогресс урока', 'lesson.of': 'из', 'lesson.upTo': 'до', 'lesson.exercisePicker': 'Упражнения · выполняйте в любом порядке', 'lesson.part': 'ЧАСТЬ', 'lesson.lesson': 'УРОК',
    'lesson.lookup': 'Нажмите и удерживайте польское слово, чтобы увидеть перевод', 'lesson.textbook': 'УЧЕБНИК', 'lesson.theory': 'Теория',
    'lesson.communication': 'Общение', 'lesson.words': 'Слова', 'lesson.grammar': 'Грамматика', 'lesson.examples': 'Примеры',
    'lesson.workbookNext': 'Дальше — рабочая тетрадь:', 'lesson.audioHint': 'Запись можно прослушать ещё раз.',
    'lesson.audioUnsupported': 'Ваш браузер не поддерживает аудио.', 'lesson.matchHint': 'Выберите начало фразы, затем подходящее окончание.',
    'lesson.starts': 'Начала', 'lesson.endings': 'Окончания', 'lesson.correctAnswer': 'Правильный ответ:', 'lesson.answerAll': 'Ответьте на все вопросы, чтобы проверить результат.',
    'lesson.check': 'Проверить ответы', 'lesson.greatWork': 'Отличная работа!', 'lesson.correct': 'Верно', 'lesson.score': 'Результат',
    'lesson.exercise': 'Упражнение', 'lesson.pages': 'СТРАНИЦЫ', 'lesson.missingLetter': 'пропущенная буква', 'lesson.typeWhatYouHear': 'Введите то, что слышите', 'lesson.yourAnswer': 'Ваш ответ',
    'lesson.correctly': 'правильно', 'lesson.rememberForms': 'Запомните правильные формы и продолжайте.', 'lesson.seeResults': 'Посмотреть результат', 'lesson.next': 'Далее',
    'lesson.offlineNote': 'Содержимое урока работает офлайн после первого открытия приложения. Записи и изображения будут доступны, если загрузить их заранее.',
    'lesson.completed': 'ЗАВЕРШЁН', 'lesson.completionCopy': 'урок уже позади.', 'lesson.correctAnswers': 'правильных ответов',
    'lesson.xpAdded': 'добавлено к прогрессу', 'lesson.bestScoreSaved': 'сохранён лучший результат', 'lesson.perfect': 'Прекрасно! Каждая правильная фраза останется с вами.',
    'lesson.mistakesLearn': 'Ошибки — часть обучения. Правильные ответы можно посмотреть в итогах упражнений.', 'lesson.closeTranslation': 'Закрыть перевод',
    'lesson.translationFromPolish': 'ПЕРЕВОД С ПОЛЬСКОГО', 'lesson.searchingTranslation': 'Ищу перевод…', 'lesson.translationNotFound': 'Перевод не найден.',
    'lesson.dictionaryPoweredBy': 'Словарь PONS ↗',
    'home.nav': 'Главная навигация', 'home.materials': 'Материалы', 'home.login': 'Войти', 'home.eyebrow': 'КУРС ПОЛЬСКОГО ЯЗЫКА · A1–A2',
    'home.title': 'Изучайте польский шаг за шагом', 'home.lead': 'Короткие уроки, практические задания и аудио помогают заниматься регулярно. Начните с бесплатных материалов или перейдите к курсу.',
    'home.openCourse': 'Перейти к курсу', 'home.seeMaterials': 'Посмотреть материалы ↓', 'home.materialsEyebrow': 'БЕСПЛАТНЫЕ МАТЕРИАЛЫ',
    'home.materialsTitle': 'Читайте и практикуйте польский', 'home.openGuide': 'Открыть руководство →', 'home.lettersDescription': 'Познакомьтесь с ą, ć, ę, ł и другими буквами.',
    'home.casesDescription': 'Начните изучать семь падежей с простых предложений.', 'home.phrasesDescription': 'Приветствия, знакомство и первый разговор.',
    'home.ctaEyebrow': 'УЧИТЕСЬ В СВОЁМ ТЕМПЕ', 'home.ctaTitle': 'Продолжите курс A1–A2', 'home.ctaButton': 'Войти или создать аккаунт',
    'home.footer': 'Онлайн-курс польского языка',
  },
  en: {
    language: 'Language',
    'auth.brand': 'Home', 'auth.eyebrow': 'LEARN POLISH', 'auth.welcome': 'Welcome back', 'auth.create': 'Create an account',
    'auth.signInIntro': 'Sign in to save your progress across devices.', 'auth.signUpIntro': 'Create an account to keep your progress.',
    'auth.email': 'Email', 'auth.password': 'Password', 'auth.wait': 'Please wait…', 'auth.signIn': 'Sign in', 'auth.signUp': 'Sign up',
    'auth.noAccount': 'New here?', 'auth.hasAccount': 'Already have an account?', 'auth.sessionError': 'Could not check your session. Please sign in again.',
    'auth.confirmEmail': 'Check your email and confirm your address to finish signing up.',
    'nav.home': 'My learning path', 'nav.course': 'Course', 'nav.progress': 'Progress', 'nav.feedback': 'Feedback', 'nav.logout': 'Sign out',
    'nav.logoutAccount': 'Sign out of account', 'nav.chooseCourse': 'Choose a course', 'nav.openCourse': 'Open selected course', 'nav.days': 'days',
    'dashboard.greetingMorning': 'Good morning', 'dashboard.greetingDay': 'Have a good day', 'dashboard.greetingEvening': 'Good evening',
    'dashboard.chooseCourse': 'Choose a course', 'dashboard.chooseCourseIntro': 'Each part has its own learning path and saved progress.',
    'dashboard.welcome': 'Pick up where you left off and learn at your own pace.', 'dashboard.dailyRhythm': 'Your steady rhythm',
    'dashboard.startCourse': 'START COURSE', 'dashboard.continueLearning': 'KEEP LEARNING', 'dashboard.startLesson': 'Start lesson',
    'dashboard.continue': 'Continue', 'dashboard.exercise': 'exercises', 'dashboard.path': 'YOUR PATH', 'dashboard.lessons': 'lessons',
    'dashboard.completed': 'Done', 'dashboard.locked': 'Locked', 'dashboard.partComplete': 'Part complete',
    'dashboard.learnAtOwnPace': 'Learn at your own pace', 'dashboard.partCompleteHint': 'Review lessons or choose the second part of the course.',
    'dashboard.progressSaved': 'Progress is saved separately for each part.', 'dashboard.goodHabit': 'A GOOD HABIT', 'dashboard.yourStreak': 'Your streak',
    'dashboard.daysInRow': 'days in a row', 'dashboard.smallStep': 'One small step a day. No rush.', 'dashboard.dailyGoal': 'TODAY’S GOAL',
    'dashboard.doOneLesson': 'Complete one lesson to keep your rhythm.', 'dashboard.goalReached': 'Goal reached!', 'dashboard.howWeLearn': 'HOW YOU LEARN',
    'dashboard.moreThanWords': 'More than arranging words.', 'dashboard.practiceWholeSentence': 'Write answers, practise forms, listen, and check that you understand the whole sentence.',
    'dashboard.installApp': 'Add to home screen', 'dashboard.installAppAction': 'Install app', 'dashboard.installHelp': 'How to install',
    'dashboard.offlineApp': 'OFFLINE APP', 'dashboard.addPolski': 'Add polski. to your screen', 'dashboard.openSafari': 'Open this page in Safari.',
    'dashboard.share': 'Tap Share in the browser toolbar.', 'dashboard.addHome': 'Choose Add to Home Screen.',
    'dashboard.materials': 'FREE MATERIALS', 'dashboard.readPractice': 'Read and practise Polish', 'dashboard.polishLetters': 'Polish letters and pronunciation',
    'dashboard.shortLesson': 'A short lesson', 'dashboard.makesDifference': 'makes a difference.', 'dashboard.experiencePoints': 'Experience points', 'dashboard.open': 'Open',
    'dashboard.weekActivity': 'Activity over the last week', 'dashboard.close': 'Close', 'dashboard.sourceNote': 'Course material is based on the „Polski krok po kroku” textbook and workbook.',
    'dashboard.cases': 'Polish cases', 'dashboard.basicPhrases': 'Basic phrases', 'dashboard.lettersHint': 'ą, ć, ę, ł and the other letters',
    'dashboard.casesHint': 'A beginner’s guide', 'dashboard.phrasesHint': 'Greetings and your first conversation',
    'feedback.back': 'Back to learning', 'feedback.eyebrow': 'YOUR FEEDBACK MATTERS', 'feedback.title': 'Send feedback',
    'feedback.intro': 'Tell us what we could improve in the app or course.', 'feedback.topic': 'Feedback topic', 'feedback.app': 'About the app',
    'feedback.course': 'About the course', 'feedback.chooseCourse': 'Course', 'feedback.yourFeedback': 'Your feedback',
    'feedback.placeholder': 'What did you like, or what should we improve?', 'feedback.sending': 'Sending…', 'feedback.send': 'Send feedback',
    'feedback.sent': 'Thank you! Your feedback was sent.', 'feedback.error': 'Could not send feedback. Check your connection and try again.',
    'lesson.back': 'Back to learning path', 'lesson.progress': 'Lesson progress', 'lesson.of': 'of', 'lesson.upTo': 'up to', 'lesson.exercisePicker': 'Exercises · complete them in any order', 'lesson.part': 'PART', 'lesson.lesson': 'LESSON',
    'lesson.lookup': 'Press and hold a Polish word to see its translation', 'lesson.textbook': 'TEXTBOOK', 'lesson.theory': 'Theory',
    'lesson.communication': 'Communication', 'lesson.words': 'Vocabulary', 'lesson.grammar': 'Grammar', 'lesson.examples': 'Examples',
    'lesson.workbookNext': 'Next in the workbook:', 'lesson.audioHint': 'You can replay the recording.',
    'lesson.audioUnsupported': 'Your browser does not support audio.', 'lesson.matchHint': 'Choose a sentence beginning, then its matching ending.',
    'lesson.starts': 'Beginnings', 'lesson.endings': 'Endings', 'lesson.correctAnswer': 'Correct answer:', 'lesson.answerAll': 'Answer every question before checking.',
    'lesson.check': 'Check answers', 'lesson.greatWork': 'Great work!', 'lesson.correct': 'Correct', 'lesson.score': 'Score',
    'lesson.exercise': 'Exercise', 'lesson.pages': 'PAGES', 'lesson.missingLetter': 'missing letter', 'lesson.typeWhatYouHear': 'Type what you hear', 'lesson.yourAnswer': 'Your answer',
    'lesson.correctly': 'correct', 'lesson.rememberForms': 'Remember the correct forms and move on.', 'lesson.seeResults': 'See results', 'lesson.next': 'Next',
    'lesson.offlineNote': 'Lesson content works offline after you first open the app. Audio and images are available after they have been downloaded.',
    'lesson.completed': 'COMPLETED', 'lesson.completionCopy': 'you have finished the lesson.', 'lesson.correctAnswers': 'correct answers',
    'lesson.xpAdded': 'added to your progress', 'lesson.bestScoreSaved': 'best score saved', 'lesson.perfect': 'Perfect. You will remember every correct phrase.',
    'lesson.mistakesLearn': 'Mistakes are part of learning. Review the correct answers in the exercise summaries.', 'lesson.closeTranslation': 'Close translation',
    'lesson.translationFromPolish': 'TRANSLATION FROM POLISH', 'lesson.searchingTranslation': 'Looking up translation…', 'lesson.translationNotFound': 'No translation found.',
    'lesson.dictionaryPoweredBy': 'Dictionary by PONS ↗',
    'home.nav': 'Main navigation', 'home.materials': 'Materials', 'home.login': 'Sign in', 'home.eyebrow': 'POLISH COURSE · A1–A2',
    'home.title': 'Learn Polish step by step', 'home.lead': 'Short lessons, practical exercises, and audio help you learn regularly. Start with free materials or go to the course.',
    'home.openCourse': 'Go to the course', 'home.seeMaterials': 'Browse free materials ↓', 'home.materialsEyebrow': 'FREE MATERIALS',
    'home.materialsTitle': 'Read and practise Polish', 'home.openGuide': 'Open guide →', 'home.lettersDescription': 'Meet ą, ć, ę, ł and the other Polish letters.',
    'home.casesDescription': 'Start learning the seven cases with simple sentences.', 'home.phrasesDescription': 'Greetings, introductions, and your first conversation.',
    'home.ctaEyebrow': 'LEARN AT YOUR OWN PACE', 'home.ctaTitle': 'Continue with the A1–A2 course', 'home.ctaButton': 'Sign in or create an account',
    'home.footer': 'Online Polish course',
  },
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly locale = signal<Language>(this.initialLanguage());

  constructor() {
    this.applyDocumentLanguage(this.locale());
  }

  t(key: string): string {
    return messages[this.locale()][key] ?? messages.pl[key] ?? key;
  }

  setLanguage(language: Language): void {
    if (!['pl', 'ru', 'en'].includes(language)) return;
    this.locale.set(language);
    try { localStorage.setItem('polski-language', language); } catch {}
    this.applyDocumentLanguage(language);
  }

  private initialLanguage(): Language {
    if (typeof window !== 'undefined') {
      const fromUrl = new URLSearchParams(window.location.search).get('lang');
      if (this.isLanguage(fromUrl)) {
        try { localStorage.setItem('polski-language', fromUrl); } catch {}
        return fromUrl;
      }
      try {
        const stored = localStorage.getItem('polski-language');
        if (this.isLanguage(stored)) return stored;
      } catch {}
      const browserLanguage = window.navigator.language.slice(0, 2);
      if (this.isLanguage(browserLanguage)) return browserLanguage;
    }
    return 'pl';
  }

  private isLanguage(value: string | null | undefined): value is Language {
    return value === 'pl' || value === 'ru' || value === 'en';
  }

  private applyDocumentLanguage(language: Language): void {
    if (typeof document !== 'undefined') document.documentElement.lang = language;
  }
}
