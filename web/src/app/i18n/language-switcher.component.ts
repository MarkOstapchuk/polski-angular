import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language, LanguageService } from './language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  template: `<label class="language-switcher"><span class="visually-hidden">{{ language.t('language') }}</span><select [value]="language.locale()" (change)="change($event)"><option value="pl">PL</option><option value="ru">RU</option><option value="en">EN</option></select></label>`,
  styles: [`.language-switcher select{min-height:34px;padding:5px 8px;border:1px solid #e3ddd5;border-radius:8px;background:#fff;color:#4b453e;font:inherit;font-size:12px;font-weight:700}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  readonly language = inject(LanguageService);

  change(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'pl' || value === 'ru' || value === 'en') this.language.setLanguage(value as Language);
  }
}
