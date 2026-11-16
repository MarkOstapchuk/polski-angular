import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { COURSES, CourseSummary, LESSON_CATALOG, LessonSummary } from '../../data/lesson-catalog';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { PwaInstallService } from '../../services/pwa-install.service';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, LanguageSwitcherComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  readonly auth = inject(AuthService);
  readonly language = inject(LanguageService);
  readonly progressService = inject(ProgressService);
  readonly pwa = inject(PwaInstallService);
  readonly courses = COURSES;
  private readonly routeCourseId = toSignal(this.route.paramMap.pipe(map((params) => params.get('courseId'))), {
    initialValue: this.route.snapshot.paramMap.get('courseId'),
  });
  readonly selectedCourse = computed(() => COURSES.find((course) => course.id === this.routeCourseId()) ?? null);
  readonly dashboardUrl = computed(() => `/course/${this.selectedCourse()?.id ?? 'part-1'}`);
  readonly lessons = computed(() => this.selectedCourse()?.lessons ?? []);
  readonly progress = this.progressService.progress;
  readonly userEmail = computed(() => this.auth.user()?.email ?? 'Uczeń');
  readonly userInitial = computed(() => this.auth.user()?.email?.slice(0, 1).toUpperCase() ?? 'U');
  readonly currentLesson = computed(() => {
    const lessons = this.lessons();
    return lessons.find((lesson) => !this.progressService.hasCompleted(lesson.id)) ?? lessons.at(-1) ?? LESSON_CATALOG[0];
  });
  readonly completeCount = computed(() => this.lessons().filter((lesson) => this.progressService.hasCompleted(lesson.id)).length);
  readonly courseProgress = computed(() => this.lessons().length ? Math.round((this.completeCount() / this.lessons().length) * 100) : 0);
  readonly goalPercent = computed(() => Math.min(100, Math.round((this.progress().dailyXp / 20) * 100)));
  readonly weekDays = computed(() => Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + index);
    const letters = this.language.locale() === 'en' ? ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      : this.language.locale() === 'ru' ? ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'] : ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'];
    const lastStudyDate = this.progress().lastStudyDate;
    const lastDate = lastStudyDate ? new Date(`${lastStudyDate}T12:00:00`) : null;
    const dayGap = lastDate ? Math.round((lastDate.getTime() - new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12).getTime()) / 86_400_000) : -1;
    return { label: letters[date.getDay()], active: dayGap >= 0 && dayGap < this.progress().streak };
  }));
  readonly greeting = computed(() => this.getGreeting());

  openCourse(course: CourseSummary): void {
    void this.router.navigate(['/course', course.id]);
  }

  openLesson(lesson: LessonSummary): void {
    const course = this.selectedCourse();
    if (!course || !this.progressService.isUnlocked(lesson.id, course.firstLessonId)) return;
    void this.router.navigate(['/learn', lesson.id]);
  }

  courseCompleteCount(course: CourseSummary): number {
    return course.lessons.filter((lesson) => this.progressService.hasCompleted(lesson.id)).length;
  }

  courseCompletion(course: CourseSummary): number {
    return Math.round((this.courseCompleteCount(course) / course.lessons.length) * 100);
  }

  isComplete(lesson: LessonSummary): boolean {
    return this.progressService.hasCompleted(lesson.id);
  }

  lessonLabel(lesson: LessonSummary): string {
    return lesson.id > 26
      ? `${this.language.t('lesson.part')} 2 · ${this.language.t('lesson.lesson')} ${this.lessonNumber(lesson)}`
      : `${this.language.t('lesson.lesson')} ${this.lessonNumber(lesson)}`;
  }

  lessonNumber(lesson: LessonSummary): string {
    return String(lesson.id > 26 ? lesson.id - 26 : lesson.id).padStart(2, '0');
  }

  isUnlocked(lesson: LessonSummary): boolean {
    const course = this.selectedCourse();
    return !!course && this.progressService.isUnlocked(lesson.id, course.firstLessonId);
  }

  installApp(): void {
    void this.pwa.install();
  }

  async signOut(): Promise<void> {
    try {
      await this.progressService.flush();
      await this.auth.signOut();
      await this.router.navigateByUrl('/auth');
    } catch {
      this.progressService.syncError.set('Nie udało się wylogować. Spróbuj ponownie.');
    }
  }

  private getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 11) return this.language.t('dashboard.greetingMorning');
    if (hour < 18) return this.language.t('dashboard.greetingDay');
    return this.language.t('dashboard.greetingEvening');
  }
}
