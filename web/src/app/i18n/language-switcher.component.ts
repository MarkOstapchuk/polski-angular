import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SoundService } from '../services/sound.service';
import { ThemeService } from '../services/theme.service';
import { IconComponent } from '../shared/icon/icon.component';
import { Language, LanguageService } from './language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [IconComponent],
  template: `<div class="header-controls"><button type="button" class="icon-toggle" (click)="sound.toggle()" [attr.aria-pressed]="!sound.enabled()" [attr.aria-label]="sound.enabled() ? language.t('sound.mute') : language.t('sound.unmute')" [title]="sound.enabled() ? language.t('sound.mute') : language.t('sound.unmute')"><app-icon [name]="sound.enabled() ? 'volume-2' : 'volume-x'" [size]="18" /></button><button type="button" class="icon-toggle" (click)="theme.toggle()" [attr.aria-label]="theme.isDark() ? language.t('theme.switchToLight') : language.t('theme.switchToDark')" [title]="theme.isDark() ? language.t('theme.switchToLight') : language.t('theme.switchToDark')"><app-icon [name]="theme.isDark() ? 'sun' : 'moon'" [size]="18" /></button><label class="language-switcher"><span class="visually-hidden">{{ language.t('language') }}</span><select [value]="language.locale()" (change)="change($event)"><option value="pl">PL</option><option value="ru">RU</option><option value="en">EN</option></select></label></div>`,
  styles: [`.header-controls{display:inline-flex;align-items:center;gap:6px;flex:none}.icon-toggle{display:inline-grid;place-items:center;min-width:44px;min-height:44px;padding:0;border:1px solid var(--border-strong);border-radius:8px;background:var(--bg-elevated);color:var(--text);font:inherit;line-height:1;cursor:pointer}.icon-toggle:hover{border-color:var(--border-hover);background:var(--accent-bg-hover)}.language-switcher select{min-height:44px;min-width:52px;padding:8px 10px;border:1px solid var(--border-strong);border-radius:8px;background:var(--bg-elevated);color:var(--text);font:inherit;font-size:13px;font-weight:700;cursor:pointer}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  readonly language = inject(LanguageService);
  readonly theme = inject(ThemeService);
  readonly sound = inject(SoundService);

  change(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'pl' || value === 'ru' || value === 'en') this.language.setLanguage(value as Language);
  }
}
