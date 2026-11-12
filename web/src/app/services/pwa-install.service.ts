import { Injectable, signal } from '@angular/core';

interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

@Injectable({ providedIn: 'root' })
export class PwaInstallService {
  readonly installAvailable = signal(false);
  readonly needsIOSInstructions = signal(false);
  readonly instructionsVisible = signal(false);
  private installPrompt: InstallPromptEvent | null = null;

  constructor() {
    if (typeof window === 'undefined') return;
    const isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent)
      || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || ('standalone' in window.navigator && Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone));
    this.needsIOSInstructions.set(isIOS && !isStandalone);
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.installPrompt = event as InstallPromptEvent;
      this.installAvailable.set(true);
    });
    window.addEventListener('appinstalled', () => {
      this.installPrompt = null;
      this.installAvailable.set(false);
    });
  }

  async install(): Promise<void> {
    if (!this.installPrompt) {
      if (this.needsIOSInstructions()) this.instructionsVisible.set(true);
      return;
    }
    await this.installPrompt.prompt();
    await this.installPrompt.userChoice;
    this.installPrompt = null;
    this.installAvailable.set(false);
  }

  closeInstructions(): void {
    this.instructionsVisible.set(false);
  }
}
