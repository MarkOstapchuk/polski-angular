import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AnalyticsService } from './analytics.service';

interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

declare global {
  interface Window {
    __polskiInstallPrompt?: InstallPromptEvent;
  }
}

export type InstallModalMode = 'native_prompt' | 'ios_safari' | 'ios_other' | 'android_manual';
export type DismissReason = 'close_btn' | 'later_btn' | 'backdrop' | 'escape';

const DISMISS_STORAGE_KEY = 'polski-mobile-install-dismissed-v1';
const INSTALLED_STORAGE_KEY = 'polski-pwa-installed-v1';
const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
const AUTO_SHOW_DELAY_MS = 2500;

@Injectable({ providedIn: 'root' })
export class PwaInstallService {
  private readonly analytics = inject(AnalyticsService);
  private readonly destroyRef = inject(DestroyRef);

  readonly installAvailable = signal(false);
  readonly needsIOSInstructions = signal(false);
  readonly modalVisible = signal(false);
  readonly modalMode = signal<InstallModalMode>('android_manual');
  readonly installing = signal(false);

  private installPrompt: InstallPromptEvent | null = null;
  private isIOS = false;
  private isIOSSafari = false;
  private isStandalone = false;
  private isMobilePhone = false;
  private isBot = false;
  private autoPromptInitialized = false;
  private autoPromptCheckedInSession = false;
  private autoShowTimer: number | null = null;
  private lastTrigger: 'auto' | 'manual' = 'manual';

  constructor() {
    if (typeof window === 'undefined') return;

    const ua = window.navigator.userAgent;
    this.isIOS = /iPad|iPhone|iPod/.test(ua)
      || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
    const isIOSPhone = /iPhone|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    const isAndroidPhone = isAndroid && /Mobile/i.test(ua);
    const isOtherMobilePhone = /Mobile|Windows Phone|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)
      && !/iPad|Tablet/i.test(ua);
    this.isMobilePhone = isIOSPhone
      || isAndroidPhone
      || isOtherMobilePhone
      || (window.matchMedia('(pointer: coarse)').matches && window.innerWidth <= 767);

    const isInAppBrowser = /FBAN|FBAV|Instagram|Telegram|Line\/|MicroMessenger|Snapchat|TikTok|BytedanceWebview|Twitter|LinkedInApp|wv\)/i.test(ua);
    this.isIOSSafari = this.isIOS
      && /Safari/i.test(ua)
      && !/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo|YaBrowser/i.test(ua)
      && !isInAppBrowser;

    this.isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || window.matchMedia('(display-mode: fullscreen)').matches
      || ('standalone' in window.navigator && Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone))
      || document.referrer.startsWith('android-app://');

    this.isBot = Boolean(window.navigator.webdriver)
      || /bot|crawl|spider|slurp|googlebot|bingbot|yandex|duckduckbot|baidu|lighthouse|pagespeed/i.test(ua);

    this.needsIOSInstructions.set(this.isIOS && !this.isStandalone);

    if (window.__polskiInstallPrompt) {
      this.consumeInstallPrompt(window.__polskiInstallPrompt);
      delete window.__polskiInstallPrompt;
    }

    const onBeforeInstallPrompt = (event: Event): void => {
      event.preventDefault();
      this.consumeInstallPrompt(event as InstallPromptEvent);
    };

    const onAppInstalled = (): void => {
      this.installPrompt = null;
      this.installAvailable.set(false);
      this.modalVisible.set(false);
      this.clearAutoTimer();
      this.markInstalled();
      this.analytics.track('pwa_installed', { metadata: { surface: 'angular_app' } });
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);

    this.destroyRef.onDestroy(() => {
      this.clearAutoTimer();
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    });
  }

  initAutoPrompt(router: Router): void {
    if (this.autoPromptInitialized || typeof window === 'undefined') return;
    this.autoPromptInitialized = true;

    this.handleRouteChange(window.location.pathname);

    const sub = router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const path = event.urlAfterRedirects.split('?')[0];
        this.handleRouteChange(path);
      });

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
      this.clearAutoTimer();
    });
  }

  async install(): Promise<void> {
    if (!this.installPrompt) {
      if (this.needsIOSInstructions()) {
        this.openManualModal();
      }
      return;
    }

    if (this.installing()) return;
    const promptEvent = this.installPrompt;
    this.installing.set(true);
    this.analytics.track('pwa_install_clicked', {
      metadata: { surface: 'angular_app', platform: 'prompt' },
    });

    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      this.analytics.track('pwa_install_prompt_result', {
        metadata: { surface: 'angular_app', outcome: choice.outcome, platform: choice.platform },
      });
      this.installPrompt = null;
      this.installAvailable.set(false);
      this.modalVisible.set(false);
      if (choice.outcome === 'accepted') {
        this.markInstalled();
      } else {
        this.recordDismissal();
      }
    } finally {
      this.installing.set(false);
    }
  }

  openManualModal(): void {
    const mode = this.resolveModalMode();
    this.lastTrigger = 'manual';
    this.modalMode.set(mode);
    this.modalVisible.set(true);
    this.analytics.track('pwa_mobile_modal_shown', {
      metadata: { surface: 'angular_app', mode, trigger: 'manual' },
    });
  }

  dismissModal(reason: DismissReason): void {
    if (!this.modalVisible() || this.installing()) return;
    const mode = this.modalMode();
    this.modalVisible.set(false);
    this.recordDismissal();
    this.analytics.track('pwa_mobile_modal_dismissed', {
      metadata: { surface: 'angular_app', mode, reason },
    });
  }

  private consumeInstallPrompt(event: InstallPromptEvent): void {
    this.installPrompt = event;
    this.clearInstalledMarker();
    this.installAvailable.set(true);
    if (this.modalVisible() && this.modalMode() === 'android_manual') {
      this.modalMode.set('native_prompt');
    }
  }

  private handleRouteChange(path: string): void {
    if (path.startsWith('/auth')) {
      this.clearAutoTimer();
      if (this.modalVisible() && this.lastTrigger === 'auto') {
        this.modalVisible.set(false);
      }
      return;
    }

    if (this.autoPromptCheckedInSession || !this.isAutoEligible()) return;

    this.clearAutoTimer();
    this.autoShowTimer = window.setTimeout(() => {
      this.autoShowTimer = null;
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/auth') || this.modalVisible() || !this.isAutoEligible()) {
        return;
      }
      this.autoPromptCheckedInSession = true;
      const mode = this.resolveModalMode();
      this.lastTrigger = 'auto';
      this.modalMode.set(mode);
      this.modalVisible.set(true);
      this.analytics.track('pwa_mobile_modal_shown', {
        metadata: { surface: 'angular_app', mode, trigger: 'auto' },
      });
    }, AUTO_SHOW_DELAY_MS);
  }

  private isAutoEligible(): boolean {
    return this.isMobilePhone
      && !this.isStandalone
      && !this.isBot
      && !this.isMarkedInstalled()
      && !this.isWithinDismissCooldown();
  }

  private resolveModalMode(): InstallModalMode {
    if (this.installPrompt) return 'native_prompt';
    if (this.isIOS) return this.isIOSSafari ? 'ios_safari' : 'ios_other';
    return 'android_manual';
  }

  private clearAutoTimer(): void {
    if (this.autoShowTimer !== null && typeof window !== 'undefined') {
      window.clearTimeout(this.autoShowTimer);
      this.autoShowTimer = null;
    }
  }

  private isWithinDismissCooldown(): boolean {
    try {
      const raw = localStorage.getItem(DISMISS_STORAGE_KEY);
      if (!raw) return false;
      const dismissedAt = Number(raw);
      return Number.isFinite(dismissedAt) && Date.now() - dismissedAt < DISMISS_COOLDOWN_MS;
    } catch {
      return false;
    }
  }

  private recordDismissal(): void {
    try {
      localStorage.setItem(DISMISS_STORAGE_KEY, String(Date.now()));
    } catch {
      // Storage is optional.
    }
  }

  private isMarkedInstalled(): boolean {
    if (this.installPrompt) return false;
    try {
      return localStorage.getItem(INSTALLED_STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  }

  private markInstalled(): void {
    try {
      localStorage.setItem(INSTALLED_STORAGE_KEY, '1');
    } catch {
      // Storage is optional.
    }
  }

  private clearInstalledMarker(): void {
    try {
      localStorage.removeItem(INSTALLED_STORAGE_KEY);
    } catch {
      // Storage is optional.
    }
  }
}
