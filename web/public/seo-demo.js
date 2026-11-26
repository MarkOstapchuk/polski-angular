(() => {
  const capture = (event, props) => {
    try {
      if (window.posthog && typeof window.posthog.capture === 'function') {
        window.posthog.capture(event, props);
      }
    } catch {
      // Analytics must never interrupt landing interactions.
    }
  };

  const langMap = { '/': 'pl', '/ru': 'ru', '/en': 'en' };
  document.querySelectorAll('.language-links a, footer a[href="/"], footer a[href="/ru"], footer a[href="/en"]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetLang = langMap[link.getAttribute('href')];
      if (targetLang) {
        try { localStorage.setItem('polski-language', targetLang); } catch {}
      }
    });
  });

  document.querySelectorAll('a[href="/auth"], a[href^="/auth?"]').forEach((link) => {
    link.addEventListener('click', () => {
      const ctaLocation = link.hasAttribute('data-demo-cta')
        ? 'demo_finish'
        : link.closest('header')
          ? 'nav_login'
          : link.closest('.actions')
            ? 'page_cta'
            : 'inline_link';
      capture('landing_cta_clicked', {
        lang: document.documentElement.lang || 'pl',
        source_page: window.location.pathname,
        cta_location: ctaLocation,
      });
    });
  });

  const root = document.querySelector('[data-demo-quiz]');
  if (!root) return;
  const lang = root.getAttribute('data-lang') || 'pl';

  const copy = {
    pl: {
      cta: 'Rozpocznij pełny kurs (49 lekcji)',
      doneTitle: (s, t) => `Wynik: ${s} / ${t}. Gotowy na pierwszą lekcję?`,
      right: '✓ Świetnie!',
      wrong: (ans) => `Poprawna odpowiedź: ${ans}`,
      next: 'Następne pytanie →',
      finish: 'Zobacz wynik',
      questions: [
        { q: '„Dzień ___!” — Jak przywitać się oficjalnie?', opts: ['dobry', 'dobrze', 'dobra'], a: 0, note: '„Dzień dobry” — podstawowe powitanie w ciągu dnia.' },
        { q: '„Uczę się polskiego, ___ studiować w Polsce.”', opts: ['bo', 'żeby', 'ale'], a: 1, note: 'Cel + bezokolicznik → używamy spójnika „żeby”.' },
        { q: '„Mam na ___ Anna.”', opts: ['nazwisko', 'imię', 'nazywam'], a: 1, note: '„Mam na imię…” oznacza imię, a „Nazywam się…” — imię i nazwisko.' },
        { q: '„Gdzie ___ mieszkasz?” — „W Krakowie.”', opts: ['ty', 'wy', 'on'], a: 0, note: 'Końcówka „-sz” (mieszkasz) łączy się z zaimkiem „ty”.' },
      ],
    },
    ru: {
      cta: 'Открыть полный курс (49 уроков)',
      doneTitle: (s, t) => `Результат: ${s} / ${t}. Готовы к первому уроку?`,
      right: '✓ Верно!',
      wrong: (ans) => `Правильный ответ: ${ans}`,
      next: 'Следующий вопрос →',
      finish: 'Показать результат',
      questions: [
        { q: '«Dzień ___!» — Как поздороваться официально?', opts: ['dobry', 'dobrze', 'dobra'], a: 0, note: '«Dzień dobry» — базовое вежливое приветствие днём.' },
        { q: '«Uczę się polskiego, ___ studiować w Polsce.» (чтобы)', opts: ['bo', 'żeby', 'ale'], a: 1, note: 'Цель + инфинитив → союз «żeby» (а «bo» — причина).' },
        { q: '«Mam na ___ Anna.» (Меня зовут Анна)', opts: ['nazwisko', 'imię', 'nazywam'], a: 1, note: '«Mam na imię…» — про имя, а «Nazywam się…» — имя и фамилия.' },
        { q: '«Gdzie ___ mieszkasz?» — «W Krakowie.»', opts: ['ty', 'wy', 'on'], a: 0, note: 'Окончание «-sz» (mieszkasz) относится к местоимению «ty».' },
      ],
    },
    en: {
      cta: 'Start the full course (49 lessons)',
      doneTitle: (s, t) => `Score: ${s} / ${t}. Ready for Lesson 1?`,
      right: '✓ Correct!',
      wrong: (ans) => `Correct answer: ${ans}`,
      next: 'Next question →',
      finish: 'See result',
      questions: [
        { q: '“Dzień ___!” — How do you say “Good morning / Hello”?', opts: ['dobry', 'dobrze', 'dobra'], a: 0, note: '“Dzień dobry” is the standard polite greeting during the day.' },
        { q: '“Uczę się polskiego, ___ studiować w Polsce.” (in order to)', opts: ['bo', 'żeby', 'ale'], a: 1, note: 'Purpose + infinitive takes “żeby” (“bo” expresses reason).' },
        { q: '“Mam na ___ Anna.” (My name is Anna)', opts: ['nazwisko', 'imię', 'nazywam'], a: 1, note: '“Mam na imię…” is for your first name; “Nazywam się…” for full name.' },
        { q: '“Gdzie ___ mieszkasz?” — “W Krakowie.”', opts: ['ty', 'wy', 'on'], a: 0, note: 'The ending “-sz” (mieszkasz) goes with “ty” (you, singular).' },
      ],
    },
  };

  const t = copy[lang] || copy.pl;
  let idx = 0;
  let score = 0;
  let answered = false;

  const stepEl = root.querySelector('[data-demo-step]');
  const qEl = root.querySelector('[data-demo-q]');
  const optsEl = root.querySelector('[data-demo-opts]');
  const fbEl = root.querySelector('[data-demo-fb]');
  const nextBtn = root.querySelector('[data-demo-next]');
  const ctaLink = root.querySelector('[data-demo-cta]');

  function render() {
    answered = false;
    const item = t.questions[idx];
    stepEl.textContent = `${idx + 1} / ${t.questions.length}`;
    qEl.textContent = item.q;
    fbEl.textContent = '';
    nextBtn.hidden = true;
    if (ctaLink) ctaLink.hidden = true;
    optsEl.innerHTML = '';
    item.opts.forEach((label, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'demo-opt';
      btn.textContent = label;
      btn.addEventListener('click', () => choose(i, btn));
      optsEl.appendChild(btn);
    });
  }

  function choose(i, btn) {
    if (answered) return;
    answered = true;
    const item = t.questions[idx];
    const buttons = [...optsEl.querySelectorAll('button')];
    buttons.forEach((b, bi) => {
      b.disabled = true;
      if (bi === item.a) b.classList.add('is-right');
    });
    const isRight = i === item.a;
    if (isRight) {
      score++;
      fbEl.textContent = `${t.right} ${item.note}`;
    } else {
      btn.classList.add('is-wrong');
      fbEl.textContent = `${t.wrong(item.opts[item.a])}. ${item.note}`;
    }
    capture('demo_quiz_answered', {
      lang,
      question_index: idx,
      correct: isRight,
    });
    nextBtn.textContent = idx === t.questions.length - 1 ? t.finish : t.next;
    nextBtn.hidden = false;
  }

  nextBtn.addEventListener('click', () => {
    if (idx < t.questions.length - 1) {
      idx++;
      render();
    } else {
      capture('demo_quiz_completed', {
        lang,
        score,
        total: t.questions.length,
      });
      stepEl.textContent = `${score} / ${t.questions.length}`;
      qEl.textContent = t.doneTitle(score, t.questions.length);
      optsEl.innerHTML = '';
      fbEl.textContent = '';
      nextBtn.hidden = true;
      if (ctaLink) {
        ctaLink.textContent = t.cta;
        ctaLink.hidden = false;
      }
    }
  });

  render();
})();
