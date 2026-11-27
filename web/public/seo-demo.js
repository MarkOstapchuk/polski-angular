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

  const THEME_KEY = 'polski-theme-v1';
  const THEME_META_COLORS = { light: '#fbfaf7', dark: '#151613' };
  const themeLabels = {
    pl: { toLight: 'Włącz tryb jasny', toDark: 'Włącz tryb ciemny' },
    ru: { toLight: 'Включить светлую тему', toDark: 'Включить тёмную тему' },
    en: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
  };
  const docLang = document.documentElement.lang || 'pl';
  const labels = themeLabels[docLang] || themeLabels.pl;
  const mediaQuery = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  const readStoredTheme = () => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch {
      return null;
    }
  };

  const getInitialTheme = () => readStoredTheme() || (mediaQuery && mediaQuery.matches ? 'dark' : 'light');

  const applyTheme = (mode) => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = THEME_META_COLORS[mode];
    const isDark = mode === 'dark';
    const label = isDark ? labels.toLight : labels.toDark;
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      const icon = btn.querySelector('span');
      if (icon) icon.textContent = isDark ? '☀️' : '🌙';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
      btn.setAttribute('aria-pressed', String(isDark));
    });
  };

  let currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(THEME_KEY, currentTheme); } catch {}
      applyTheme(currentTheme);
      capture('theme_toggled', { theme: currentTheme });
    });
  });

  if (mediaQuery && typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', (event) => {
      if (readStoredTheme() !== null) return;
      currentTheme = event.matches ? 'dark' : 'light';
      applyTheme(currentTheme);
    });
  }

  (() => {
    const DISMISS_KEY = 'polski-mobile-install-dismissed-v1';
    const INSTALLED_KEY = 'polski-pwa-installed-v1';
    const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
    const SHOW_DELAY_MS = 2500;

    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isIOSPhone = /iPhone|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    const isAndroidPhone = isAndroid && /Mobile/i.test(ua);
    const isOtherMobilePhone = /Mobile|Windows Phone|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)
      && !/iPad|Tablet/i.test(ua);
    const isMobilePhone = isIOSPhone
      || isAndroidPhone
      || isOtherMobilePhone
      || (typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches && window.innerWidth <= 767);

    const isInAppBrowser = /FBAN|FBAV|Instagram|Telegram|Line\/|MicroMessenger|Snapchat|TikTok|BytedanceWebview|Twitter|LinkedInApp|wv\)/i.test(ua);
    const isIOSSafari = isIOS
      && /Safari/i.test(ua)
      && !/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo|YaBrowser/i.test(ua)
      && !isInAppBrowser;

    const isStandalone = (typeof window.matchMedia === 'function'
      && (window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: fullscreen)').matches))
      || ('standalone' in navigator && Boolean(navigator.standalone))
      || document.referrer.startsWith('android-app://');

    const isBot = Boolean(navigator.webdriver)
      || /bot|crawl|spider|slurp|googlebot|bingbot|yandex|duckduckbot|baidu|lighthouse|pagespeed/i.test(ua);

    const i18n = {
      pl: {
        eyebrow: 'APLIKACJA NA TELEFON',
        title: 'Zainstaluj polski.',
        subtitle: 'Szybki dostęp z ekranu głównego, pełny ekran i nauka offline.',
        installCta: 'Zainstaluj aplikację',
        installing: 'Instalowanie…',
        later: 'Później',
        gotIt: 'Rozumiem',
        close: 'Zamknij',
        iosSafariStep1: 'Dotknij przycisku „Udostępnij” na dolnym pasku Safari.',
        iosSafariStep2: 'Wybierz „Dodaj do ekranu początkowego”.',
        iosSafariStep3: 'Potwierdź, klikając „Dodaj”.',
        iosOtherStep1: 'Otwórz tę stronę w przeglądarce Safari.',
        iosOtherStep2: 'Dotknij „Udostępnij” na pasku Safari.',
        iosOtherStep3: 'Wybierz „Dodaj do ekranu początkowego” → „Dodaj”.',
        androidStep1: 'Otwórz menu przeglądarki (⋮) w prawym górnym rogu.',
        androidStep2: 'Wybierz „Zainstaluj aplikację” lub „Dodaj do ekranu głównego”.',
      },
      ru: {
        eyebrow: 'ПРИЛОЖЕНИЕ НА ТЕЛЕФОН',
        title: 'Установите polski.',
        subtitle: 'Быстрый запуск с главного экрана, полный экран и работа офлайн.',
        installCta: 'Установить приложение',
        installing: 'Установка…',
        later: 'Позже',
        gotIt: 'Понятно',
        close: 'Закрыть',
        iosSafariStep1: 'Нажмите «Поделиться» в нижней панели Safari.',
        iosSafariStep2: 'Выберите «На экран Домой».',
        iosSafariStep3: 'Нажмите «Добавить» в правом верхнем углу.',
        iosOtherStep1: 'Откройте эту страницу в браузере Safari.',
        iosOtherStep2: 'Нажмите «Поделиться» в нижней панели.',
        iosOtherStep3: 'Выберите «На экран Домой» → «Добавить».',
        androidStep1: 'Откройте меню браузера (⋮) в правом верхнем углу.',
        androidStep2: 'Выберите «Установить приложение» или «Добавить на главный экран».',
      },
      en: {
        eyebrow: 'MOBILE APP',
        title: 'Install polski.',
        subtitle: 'One-tap launch from your home screen, full screen, and offline access.',
        installCta: 'Install app',
        installing: 'Installing…',
        later: 'Not now',
        gotIt: 'Got it',
        close: 'Close',
        iosSafariStep1: 'Tap the “Share” button in the Safari toolbar.',
        iosSafariStep2: 'Select “Add to Home Screen”.',
        iosSafariStep3: 'Tap “Add” in the top-right corner.',
        iosOtherStep1: 'Open this page in Safari.',
        iosOtherStep2: 'Tap “Share” in the browser toolbar.',
        iosOtherStep3: 'Choose “Add to Home Screen” → “Add”.',
        androidStep1: 'Open the browser menu (⋮) in the top-right corner.',
        androidStep2: 'Choose “Install app” or “Add to Home screen”.',
      },
    };
    const m = i18n[docLang] || i18n.pl;

    let installPrompt = window.__polskiInstallPrompt || null;
    if (installPrompt) {
      delete window.__polskiInstallPrompt;
      try { localStorage.removeItem(INSTALLED_KEY); } catch {}
    }

    let backdropEl = null;
    let bodyHostEl = null;
    let closeBtnEl = null;
    let currentMode = null;
    let installing = false;
    let autoTimer = null;

    const withinCooldown = () => {
      try {
        const raw = localStorage.getItem(DISMISS_KEY);
        if (!raw) return false;
        const ts = Number(raw);
        return Number.isFinite(ts) && Date.now() - ts < COOLDOWN_MS;
      } catch {
        return false;
      }
    };

    const isMarkedInstalled = () => {
      if (installPrompt) return false;
      try { return localStorage.getItem(INSTALLED_KEY) === '1'; } catch { return false; }
    };

    const recordDismissal = () => {
      try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch {}
    };

    const markInstalled = () => {
      try { localStorage.setItem(INSTALLED_KEY, '1'); } catch {}
    };

    const resolveMode = () => {
      if (installPrompt) return 'native_prompt';
      if (isIOS) return isIOSSafari ? 'ios_safari' : 'ios_other';
      return 'android_manual';
    };

    const isEligible = () => isMobilePhone && !isStandalone && !isBot && !isMarkedInstalled() && !withinCooldown();

    const makeShareBadge = () => {
      const span = document.createElement('span');
      span.className = 'pwa-share-badge';
      span.setAttribute('aria-hidden', 'true');
      span.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>';
      return span;
    };

    const closeModal = (reason) => {
      if (!backdropEl || installing) return;
      backdropEl.remove();
      backdropEl = null;
      bodyHostEl = null;
      closeBtnEl = null;
      document.removeEventListener('keydown', onEscape);
      if (reason) {
        recordDismissal();
        capture('pwa_mobile_modal_dismissed', { surface: 'seo_landing', mode: currentMode, reason });
      }
      currentMode = null;
    };

    const onEscape = (event) => {
      if (event.key === 'Escape' && backdropEl && !installing) {
        event.preventDefault();
        closeModal('escape');
      }
    };

    const triggerNativeInstall = async (primaryBtn, secondaryBtn) => {
      if (!installPrompt || installing) return;
      const promptEvent = installPrompt;
      installing = true;
      primaryBtn.disabled = true;
      secondaryBtn.disabled = true;
      if (closeBtnEl) closeBtnEl.disabled = true;
      primaryBtn.lastChild.textContent = m.installing;
      capture('pwa_install_clicked', { surface: 'seo_landing', platform: 'prompt' });
      try {
        await promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        capture('pwa_install_prompt_result', {
          surface: 'seo_landing',
          outcome: choice.outcome,
          platform: choice.platform,
        });
        installPrompt = null;
        if (choice.outcome === 'accepted') {
          markInstalled();
        } else {
          recordDismissal();
        }
      } finally {
        installing = false;
        closeModal(null);
      }
    };

    const renderModeBody = (mode) => {
      if (!bodyHostEl) return;
      currentMode = mode;
      bodyHostEl.innerHTML = '';

      if (mode === 'native_prompt') {
        const actions = document.createElement('div');
        actions.className = 'pwa-actions';

        const installBtn = document.createElement('button');
        installBtn.type = 'button';
        installBtn.className = 'pwa-btn pwa-btn-primary';
        installBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
        const labelSpan = document.createElement('span');
        labelSpan.textContent = m.installCta;
        installBtn.appendChild(labelSpan);

        const laterBtn = document.createElement('button');
        laterBtn.type = 'button';
        laterBtn.className = 'pwa-btn pwa-btn-secondary';
        laterBtn.textContent = m.later;

        installBtn.addEventListener('click', () => { void triggerNativeInstall(installBtn, laterBtn); });
        laterBtn.addEventListener('click', () => closeModal('later_btn'));

        actions.append(installBtn, laterBtn);
        bodyHostEl.appendChild(actions);
        return;
      }

      const list = document.createElement('ol');
      list.className = 'pwa-steps';

      if (mode === 'ios_safari') {
        const li1 = document.createElement('li');
        const s1 = document.createElement('span');
        s1.textContent = m.iosSafariStep1;
        li1.append(s1, makeShareBadge());
        const li2 = document.createElement('li');
        li2.textContent = m.iosSafariStep2;
        const li3 = document.createElement('li');
        li3.textContent = m.iosSafariStep3;
        list.append(li1, li2, li3);
      } else if (mode === 'ios_other') {
        const li1 = document.createElement('li');
        li1.textContent = m.iosOtherStep1;
        const li2 = document.createElement('li');
        const s2 = document.createElement('span');
        s2.textContent = m.iosOtherStep2;
        li2.append(s2, makeShareBadge());
        const li3 = document.createElement('li');
        li3.textContent = m.iosOtherStep3;
        list.append(li1, li2, li3);
      } else {
        const li1 = document.createElement('li');
        li1.textContent = m.androidStep1;
        const li2 = document.createElement('li');
        li2.textContent = m.androidStep2;
        list.append(li1, li2);
      }

      const actions = document.createElement('div');
      actions.className = 'pwa-actions';
      const gotItBtn = document.createElement('button');
      gotItBtn.type = 'button';
      gotItBtn.className = 'pwa-btn pwa-btn-primary';
      gotItBtn.textContent = m.gotIt;
      gotItBtn.addEventListener('click', () => closeModal('later_btn'));
      actions.appendChild(gotItBtn);

      bodyHostEl.append(list, actions);
    };

    const openModal = () => {
      if (backdropEl || !isEligible()) return;
      const mode = resolveMode();

      const backdrop = document.createElement('div');
      backdrop.className = 'pwa-backdrop';
      backdrop.setAttribute('role', 'presentation');
      backdrop.addEventListener('click', () => closeModal('backdrop'));

      const sheet = document.createElement('section');
      sheet.className = 'pwa-sheet';
      sheet.setAttribute('role', 'dialog');
      sheet.setAttribute('aria-modal', 'true');
      sheet.setAttribute('aria-labelledby', 'pwa-install-title');
      sheet.addEventListener('click', (e) => e.stopPropagation());

      const handle = document.createElement('div');
      handle.className = 'pwa-handle';
      handle.setAttribute('aria-hidden', 'true');

      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'pwa-close';
      closeBtn.setAttribute('aria-label', m.close);
      closeBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      closeBtn.addEventListener('click', () => closeModal('close_btn'));

      const head = document.createElement('div');
      head.className = 'pwa-head';
      const icon = document.createElement('img');
      icon.className = 'pwa-icon';
      icon.src = '/icons/icon-192.png';
      icon.width = 48;
      icon.height = 48;
      icon.alt = '';
      icon.setAttribute('aria-hidden', 'true');

      const headCopy = document.createElement('div');
      headCopy.className = 'pwa-head-copy';
      const eyebrow = document.createElement('p');
      eyebrow.className = 'pwa-eyebrow';
      eyebrow.textContent = m.eyebrow;
      const title = document.createElement('h2');
      title.className = 'pwa-title';
      title.id = 'pwa-install-title';
      title.textContent = m.title;
      headCopy.append(eyebrow, title);
      head.append(icon, headCopy);

      const sub = document.createElement('p');
      sub.className = 'pwa-sub';
      sub.textContent = m.subtitle;

      const bodyHost = document.createElement('div');
      sheet.append(handle, closeBtn, head, sub, bodyHost);
      backdrop.appendChild(sheet);
      document.body.appendChild(backdrop);

      backdropEl = backdrop;
      bodyHostEl = bodyHost;
      closeBtnEl = closeBtn;
      renderModeBody(mode);
      document.addEventListener('keydown', onEscape);
      capture('pwa_mobile_modal_shown', { surface: 'seo_landing', mode, trigger: 'auto' });
    };

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      installPrompt = event;
      try { localStorage.removeItem(INSTALLED_KEY); } catch {}
      if (backdropEl && currentMode === 'android_manual') {
        renderModeBody('native_prompt');
      }
    });

    window.addEventListener('appinstalled', () => {
      installPrompt = null;
      if (autoTimer !== null) {
        clearTimeout(autoTimer);
        autoTimer = null;
      }
      markInstalled();
      closeModal(null);
      capture('pwa_installed', { surface: 'seo_landing' });
    });

    if (isEligible()) {
      autoTimer = window.setTimeout(() => {
        autoTimer = null;
        openModal();
      }, SHOW_DELAY_MS);
    }
  })();

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
