import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Language, LanguageService } from './language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  template: `<div class="header-controls"><button type="button" class="theme-toggle" (click)="theme.toggle()" [attr.aria-label]="theme.isDark() ? language.t('theme.switchToLight') : language.t('theme.switchToDark')" [title]="theme.isDark() ? language.t('theme.switchToLight') : language.t('theme.switchToDark')"><span aria-hidden="true">{{ theme.isDark() ? '☀️' : '🌙' }}</span></button><label class="language-switcher"><span class="visually-hidden">{{ language.t('language') }}</span><select [value]="language.locale()" (change)="change($event)"><option value="pl">PL</option><option value="ru">RU</option><option value="en">EN</option></select></label></div>`,
  styles: [`.header-controls{display:inline-flex;align-items:center;gap:8px;flex:none}.theme-toggle{display:inline-grid;place-items:center;min-width:44px;min-height:44px;padding:0;border:1px solid var(--border-strong);border-radius:8px;background:var(--bg-elevated);color:var(--text);font:inherit;font-size:17px;line-height:1;cursor:pointer}.theme-toggle:hover{border-color:var(--border-hover);background:var(--accent-bg-hover)}.language-switcher select{min-height:44px;min-width:52px;padding:8px 10px;border:1px solid var(--border-strong);border-radius:8px;background:var(--bg-elevated);color:var(--text);font:inherit;font-size:13px;font-weight:700;cursor:pointer}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  readonly language = inject(LanguageService);
  readonly theme = inject(ThemeService);

  change(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'pl' || value === 'ru' || value === 'en') this.language.setLanguage(value as Language);
  }
}
