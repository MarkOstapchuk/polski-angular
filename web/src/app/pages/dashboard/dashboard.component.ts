import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LESSON_CATALOG, LessonSummary } from '../../data/lesson-catalog';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { PwaInstallService } from '../../services/pwa-install.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private readonly router = inject(Router);
  readonly auth = inject(AuthService);
  readonly progressService = inject(ProgressService);
  readonly pwa = inject(PwaInstallService);
  readonly lessons = LESSON_CATALOG;
  readonly progress = this.progressService.progress;
  readonly userEmail = computed(() => this.auth.user()?.email ?? 'Uczeń');
  readonly userInitial = computed(() => this.auth.user()?.email?.slice(0, 1).toUpperCase() ?? 'U');
  readonly currentLesson = computed(() =>
    LESSON_CATALOG.find((lesson) => !this.progressService.hasCompleted(lesson.id)) ?? LESSON_CATALOG[LESSON_CATALOG.length - 1],
  );
  readonly completeCount = computed(() => this.progress().completedLessonIds.length);
  readonly courseProgress = computed(() => Math.round((this.completeCount() / LESSON_CATALOG.length) * 100));
  readonly goalPercent = computed(() => Math.min(100, Math.round((this.progress().dailyXp / 20) * 100)));
  readonly weekDays = computed(() => Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + index);
    const letters = ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'];
    const lastStudyDate = this.progress().lastStudyDate;
    const lastDate = lastStudyDate ? new Date(`${lastStudyDate}T12:00:00`) : null;
    const dayGap = lastDate ? Math.round((lastDate.getTime() - new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12).getTime()) / 86_400_000) : -1;
    return { label: letters[date.getDay()], active: dayGap >= 0 && dayGap < this.progress().streak };
  }));
  readonly greeting = this.getGreeting();

  openLesson(lesson: LessonSummary): void {
    if (!this.progressService.isUnlocked(lesson.id)) return;
    void this.router.navigate(['/learn', lesson.id]);
  }

  isComplete(lesson: LessonSummary): boolean {
    return this.progressService.hasCompleted(lesson.id);
  }

  lessonLabel(lesson: LessonSummary): string {
    return lesson.id > 26
      ? `CZĘŚĆ 2 · LEKCJA ${this.lessonNumber(lesson)}`
      : `LEKCJA ${this.lessonNumber(lesson)}`;
  }

  lessonNumber(lesson: LessonSummary): string {
    return String(lesson.id > 26 ? lesson.id - 26 : lesson.id).padStart(2, '0');
  }

  isUnlocked(lesson: LessonSummary): boolean {
    return this.progressService.isUnlocked(lesson.id);
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
    if (hour < 11) return 'Dzień dobry';
    if (hour < 18) return 'Miłego dnia';
    return 'Dobry wieczór';
  }
}
