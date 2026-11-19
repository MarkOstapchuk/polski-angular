import { ChangeDetectionStrategy, Component, HostListener, inject, input, output } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';

@Component({
  selector: 'app-dashboard-dialogs',
  standalone: true,
  templateUrl: './dashboard-dialogs.component.html',
  styleUrl: './dashboard-dialogs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDialogsComponent {
  readonly language = inject(LanguageService);
  readonly installVisible = input(false);
  readonly signOutVisible = input(false);
  readonly userEmail = input('');
  readonly busy = input(false);
  readonly closeInstall = output<void>();
  readonly cancelSignOut = output<void>();
  readonly confirmSignOut = output<void>();

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event): void {
    if (this.signOutVisible() && !this.busy()) {
      event.preventDefault();
      this.cancelSignOut.emit();
    } else if (this.installVisible()) {
      event.preventDefault();
      this.closeInstall.emit();
    }
  }
}
