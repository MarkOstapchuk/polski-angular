import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { PwaInstallService } from '../../services/pwa-install.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-mobile-install-modal',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './mobile-install-modal.component.html',
  styleUrl: './mobile-install-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileInstallModalComponent {
  readonly pwa = inject(PwaInstallService);
  readonly language = inject(LanguageService);

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event): void {
    if (this.pwa.modalVisible() && !this.pwa.installing()) {
      event.preventDefault();
      this.pwa.dismissModal('escape');
    }
  }
}
