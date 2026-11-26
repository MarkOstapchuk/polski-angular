import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { TheoryBlock } from '../../../../data/lesson-theory';
import { LanguageService } from '../../../../i18n/language.service';
import { IconComponent } from '../../../../shared/icon/icon.component';

@Component({
  selector: 'app-lesson-inline-theory',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './lesson-inline-theory.component.html',
  styleUrl: './lesson-inline-theory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonInlineTheoryComponent {
  readonly language = inject(LanguageService);
  readonly block = input.required<TheoryBlock>();
  readonly blockIndex = input.required<number>();
  readonly totalBlocks = input.required<number>();
  readonly expanded = input.required<boolean>();
  readonly toggled = output<void>();
}
