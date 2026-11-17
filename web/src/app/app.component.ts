import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import { PwaInstallService } from './services/pwa-install.service';
import { LanguageService } from './i18n/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
    @if (updateAvailable()) {
      <aside class="pwa-update" role="status">
        <span>{{ language.t('pwa.updateAvailable') }}</span>
        <button type="button" (click)="reload()">{{ language.t('pwa.updateNow') }}</button>
      </aside>
    }
  `,
  styles: [`.pwa-update{position:fixed;z-index:1000;inset:auto 16px 16px;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px;border:1px solid #e3ddd5;border-radius:12px;background:#fff;color:#302a26;box-shadow:0 8px 32px #0002;font:500 14px/1.4 system-ui,sans-serif}.pwa-update button{flex:none;padding:9px 13px;border:0;border-radius:8px;background:#bd5d3f;color:#fff;font:700 13px system-ui,sans-serif;cursor:pointer}@media(max-width:420px){.pwa-update{align-items:flex-start;flex-direction:column}}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly language = inject(LanguageService);
  readonly updateAvailable = signal(false);
  private readonly swUpdate = inject(SwUpdate);
  private readonly destroyRef = inject(DestroyRef);
  private readonly checkForUpdate = (): void => {
    if (document.visibilityState === 'visible') void this.swUpdate.checkForUpdate().catch(() => undefined);
  };

  constructor() {
    inject(PwaInstallService);
    if (!this.swUpdate.isEnabled || typeof window === 'undefined') return;

    this.swUpdate.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe(() => this.updateAvailable.set(true));

    const startupCheck = window.setTimeout(this.checkForUpdate, 1_000);
    const periodicCheck = window.setInterval(this.checkForUpdate, 60 * 60 * 1_000);
    document.addEventListener('visibilitychange', this.checkForUpdate);
    this.destroyRef.onDestroy(() => {
      window.clearTimeout(startupCheck);
      window.clearInterval(periodicCheck);
      document.removeEventListener('visibilitychange', this.checkForUpdate);
    });
  }

  reload(): void {
    window.location.reload();
  }
}
