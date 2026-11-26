import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { COURSES } from '../../data/lesson-catalog';
import { AnalyticsService } from '../../services/analytics.service';
import { AuthService } from '../../services/auth.service';
import { supabase } from '../../services/supabase.client';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, RouterLink, LanguageSwitcherComponent, IconComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent {
  readonly courses = COURSES;
  private readonly analytics = inject(AnalyticsService);
  private readonly auth = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  readonly language = inject(LanguageService);

  private readonly returnCourseId = signal<'part-1' | 'part-2' | 'part-3'>(this.resolveInitialCourseId());
  readonly backUrl = computed(() => `/course/${this.returnCourseId()}`);
  readonly category = signal<'app' | 'course'>('app');
  readonly courseId = signal<string>(this.returnCourseId());
  readonly message = signal('');
  readonly sending = signal(false);
  readonly error = signal('');
  readonly sent = signal(false);

  async submit(): Promise<void> {
    const user = this.auth.user();
    const message = this.message().trim();
    if (!user || !message || message.length > 2000 || this.sending()) return;

    this.sending.set(true);
    this.error.set('');
    this.sent.set(false);
    try {
      const { error } = await supabase.from('app_feedback').insert({
        user_id: user.id,
        category: this.category(),
        course_id: this.category() === 'course' ? this.courseId() : null,
        message,
      });
      if (error) throw error;
      this.analytics.track('feedback_submitted', {
        courseId: this.category() === 'course' ? this.courseId() : undefined,
        metadata: {
          category: this.category(),
          message_length: message.length,
        },
      });
      this.message.set('');
      this.sent.set(true);
    } catch {
      this.error.set(this.language.t('feedback.error'));
    } finally {
      this.sending.set(false);
    }
  }

  private resolveInitialCourseId(): 'part-1' | 'part-2' | 'part-3' {
    const fromQuery = this.route.snapshot.queryParamMap.get('course');
    if (fromQuery === 'part-1' || fromQuery === 'part-2' || fromQuery === 'part-3') return fromQuery;
    try {
      if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('polski-active-course');
        if (stored === 'part-1' || stored === 'part-2' || stored === 'part-3') return stored;
      }
    } catch {
      // Ignore storage access errors.
    }
    return 'part-1';
  }
}
