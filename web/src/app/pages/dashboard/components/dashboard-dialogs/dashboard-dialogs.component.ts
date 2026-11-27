import { ChangeDetectionStrategy, Component, HostListener, inject, input, output } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';
import { IconComponent } from '../../../../shared/icon/icon.component';

@Component({
  selector: 'app-dashboard-dialogs',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './dashboard-dialogs.component.html',
  styleUrl: './dashboard-dialogs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDialogsComponent {
  readonly language = inject(LanguageService);
  readonly signOutVisible = input(false);
  readonly userEmail = input('');
  readonly busy = input(false);
  readonly cancelSignOut = output<void>();
  readonly confirmSignOut = output<void>();

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event): void {
    if (this.signOutVisible() && !this.busy()) {
      event.preventDefault();
      this.cancelSignOut.emit();
    }
  }
}
