import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import { PwaInstallService } from './services/pwa-install.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
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
