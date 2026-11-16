import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-public-home',
  standalone: true,
  imports: [LanguageSwitcherComponent],
  templateUrl: './public-home.component.html',
  styleUrl: './public-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHomeComponent {
  readonly language = inject(LanguageService);

  constructor() {
    const meta = inject(Meta);
    meta.updateTag({ name: 'description', content: 'Ucz się języka polskiego krok po kroku. Kurs online A1–A2 z lekcjami, ćwiczeniami i nagraniami.' });
    meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
