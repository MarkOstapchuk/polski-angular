import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, input, output, viewChild } from '@angular/core';
import { WorkbookImage } from '../../../../data/workbook-images';
import { LanguageService } from '../../../../i18n/language.service';
import { IconComponent } from '../../../../shared/icon/icon.component';

@Component({
  selector: 'app-lesson-image-lightbox',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './lesson-image-lightbox.component.html',
  styleUrl: './lesson-image-lightbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonImageLightboxComponent {
  readonly language = inject(LanguageService);
  readonly image = input<WorkbookImage | null>(null);
  readonly closed = output<void>();

  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');

  constructor() {
    effect(() => {
      if (this.image()) {
        queueMicrotask(() => this.closeBtn()?.nativeElement.focus({ preventScroll: true }));
      }
    });
  }
}
