import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { COURSES } from '../../data/lesson-catalog';
import { AuthService } from '../../services/auth.service';
import { supabase } from '../../services/supabase.client';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent {
  readonly courses = COURSES;
  private readonly auth = inject(AuthService);
  category: 'app' | 'course' = 'app';
  courseId: string = COURSES[0].id;
  message = '';
  sending = false;
  error = '';
  sent = false;

  async submit(): Promise<void> {
    const user = this.auth.user();
    const message = this.message.trim();
    if (!user || !message || message.length > 2000 || this.sending) return;

    this.sending = true;
    this.error = '';
    this.sent = false;
    try {
      const { error } = await supabase.from('app_feedback').insert({
        user_id: user.id,
        category: this.category,
        course_id: this.category === 'course' ? this.courseId : null,
        message,
      });
      if (error) throw error;
      this.message = '';
      this.sent = true;
    } catch {
      this.error = 'Не удалось отправить отзыв. Проверьте подключение и попробуйте ещё раз.';
    } finally {
      this.sending = false;
    }
  }
}
