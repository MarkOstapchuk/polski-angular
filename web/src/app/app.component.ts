import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import { LanguageService } from './i18n/language.service';
import { AnalyticsService } from './services/analytics.service';
import { PwaInstallService } from './services/pwa-install.service';
import { ThemeService } from './services/theme.service';
import { MobileInstallModalComponent } from './shared/mobile-install-modal/mobile-install-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobileInstallModalComponent],
  template: '<router-outlet /><app-mobile-install-modal />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly swUpdate = inject(SwUpdate);
  private readonly destroyRef = inject(DestroyRef);
  private readonly checkForUpdate = (): void => {
    if (document.visibilityState === 'visible') void this.swUpdate.checkForUpdate().catch(() => undefined);
  };

  constructor() {
    const language = inject(LanguageService);
    inject(ThemeService);
    inject(AnalyticsService).init(language.locale());
    const pwa = inject(PwaInstallService);
    pwa.initAutoPrompt(inject(Router));
    if (!this.swUpdate.isEnabled || typeof window === 'undefined') return;

    this.swUpdate.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe(() => window.location.reload());

    const startupCheck = window.setTimeout(this.checkForUpdate, 1_000);
    const periodicCheck = window.setInterval(this.checkForUpdate, 60 * 60 * 1_000);
    document.addEventListener('visibilitychange', this.checkForUpdate);
    this.destroyRef.onDestroy(() => {
      window.clearTimeout(startupCheck);
      window.clearInterval(periodicCheck);
      document.removeEventListener('visibilitychange', this.checkForUpdate);
    });
  }

}
