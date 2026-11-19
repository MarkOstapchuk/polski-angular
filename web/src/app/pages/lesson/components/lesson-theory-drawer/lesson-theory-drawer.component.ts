import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { LessonTheory } from '../../../../data/lesson-theory';
import { LanguageService } from '../../../../i18n/language.service';

@Component({
  selector: 'app-lesson-theory-drawer',
  standalone: true,
  templateUrl: './lesson-theory-drawer.component.html',
  styleUrl: './lesson-theory-drawer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonTheoryDrawerComponent {
  readonly language = inject(LanguageService);
  readonly theory = input.required<LessonTheory>();
  readonly lessonLabel = input.required<string>();
  readonly workbookPages = input.required<string>();
  readonly closed = output<void>();
}
