import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CheckpointTest, getCheckpointAfterLesson, readCheckpointScores } from '../../data/checkpoint-tests';
import { COURSES, CourseSummary, LESSON_CATALOG, LessonSummary } from '../../data/lesson-catalog';
import { DAILY_CHEST_COINS, getAvatarEmoji, getChestAfterLesson, PathChest } from '../../data/rewards';
import { AuthService } from '../../services/auth.service';
import { AnalyticsService } from '../../services/analytics.service';
import { MistakesService } from '../../services/mistakes.service';
import { ProgressService } from '../../services/progress.service';
import { PwaInstallService } from '../../services/pwa-install.service';
import { SoundService } from '../../services/sound.service';
import { VocabularyService } from '../../services/vocabulary.service';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { DashboardContinueCardComponent } from './components/dashboard-continue-card/dashboard-continue-card.component';
import { DashboardDialogsComponent } from './components/dashboard-dialogs/dashboard-dialogs.component';
import { DashboardProgressRailComponent } from './components/dashboard-progress-rail/dashboard-progress-rail.component';
import { ChestRewardModalData, DashboardRewardsModalComponent } from './components/dashboard-rewards-modal/dashboard-rewards-modal.component';

const ACTIVE_COURSE_KEY = 'polski-active-course';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    LanguageSwitcherComponent,
    DashboardContinueCardComponent,
    DashboardProgressRailComponent,
    DashboardDialogsComponent,
    DashboardRewardsModalComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  readonly auth = inject(AuthService);
  private readonly analytics = inject(AnalyticsService);
  readonly language = inject(LanguageService);
  readonly progressService = inject(ProgressService);
  readonly vocabulary = inject(VocabularyService);
  readonly mistakes = inject(MistakesService);
  readonly pwa = inject(PwaInstallService);
  private readonly sound = inject(SoundService);
  readonly courses = COURSES;
  readonly dailyChestCoins = DAILY_CHEST_COINS;
  private readonly routeCourseId = toSignal(this.route.paramMap.pipe(map((params) => params.get('courseId'))), {
    initialValue: this.route.snapshot.paramMap.get('courseId'),
  });
  readonly selectedCourse = computed(() => COURSES.find((course) => course.id === this.routeCourseId()) ?? null);
  readonly dashboardUrl = computed(() => `/course/${this.selectedCourse()?.id ?? this.readActiveCourseId()}`);
  readonly lessons = computed(() => this.selectedCourse()?.lessons ?? []);
  readonly progress = this.progressService.progress;
  readonly coins = computed(() => this.progress().coins ?? 0);
  readonly userEmail = computed(() => this.auth.user()?.email ?? this.language.t('dashboard.learnerFallback'));
  readonly userInitial = computed(() => this.auth.user()?.email?.slice(0, 1).toUpperCase() ?? 'U');
  readonly userAvatar = computed(() => getAvatarEmoji(this.progress().selectedAvatar) ?? this.userInitial());
  readonly isGuest = computed(() => !this.auth.user());
  readonly signOutConfirmOpen = signal(false);
  readonly signingOut = signal(false);
  readonly shopOpen = signal(false);
  readonly chestReward = signal<ChestRewardModalData | null>(null);
  readonly dailyChestReady = computed(() => this.progress().dailyXp >= 20 && this.progress().lastDailyChestDate !== this.progressService.todayKey());
  readonly dailyChestClaimed = computed(() => this.progress().lastDailyChestDate === this.progressService.todayKey());
  readonly activeNavSection = signal<'home' | 'course' | 'progress'>('home');
  readonly checkpointScores = signal(readCheckpointScores());
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

  constructor() {
    effect(() => {
      const course = this.selectedCourse();
      if (!course) return;
      const snapshot = this.progressService.progress();
      this.analytics.trackOnce(`dashboard_opened:${course.id}`, 'dashboard_opened', {
        courseId: course.id,
        metadata: {
          completed_lessons_count: snapshot.completedLessonIds.length,
          total_xp: snapshot.totalXp,
          streak: snapshot.streak,
          is_new_user: snapshot.completedLessonIds.length === 0,
        },
      });
      try {
        if (typeof localStorage !== 'undefined') localStorage.setItem(ACTIVE_COURSE_KEY, course.id);
      } catch {
        // Storage is optional.
      }
    });
  }

  openCourse(course: CourseSummary): void {
    this.analytics.track('course_switched', {
      courseId: course.id,
      metadata: {
        from_course_id: this.selectedCourse()?.id ?? 'choose',
        to_course_id: course.id,
      },
    });
    void this.router.navigate(['/course', course.id]);
  }

  openLesson(lesson: LessonSummary, source: 'continue_card' | 'path_list' = 'path_list'): void {
    const course = this.selectedCourse();
    if (!course || !this.progressService.isUnlocked(lesson.id, course.firstLessonId)) return;
    this.analytics.track('lesson_card_clicked', {
      courseId: course.id,
      lessonId: lesson.id,
      metadata: {
        lesson_title: lesson.title,
        source,
        is_completed: this.progressService.hasCompleted(lesson.id),
      },
    });
    void this.router.navigate(['/learn', lesson.id]);
  }

  trackGuideClick(guidePath: string): void {
    this.analytics.track('guide_clicked', {
      courseId: this.selectedCourse()?.id,
      metadata: { guide_path: guidePath, source: 'dashboard' },
    });
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
    if (lesson.id >= 50) {
      return `${this.language.t('lesson.part')} 3 · ${this.language.t('lesson.lesson')} ${this.lessonNumber(lesson)}`;
    }
    return lesson.id > 26
      ? `${this.language.t('lesson.part')} 2 · ${this.language.t('lesson.lesson')} ${this.lessonNumber(lesson)}`
      : `${this.language.t('lesson.lesson')} ${this.lessonNumber(lesson)}`;
  }

  lessonNumber(lesson: LessonSummary): string {
    if (lesson.id >= 50) return String(lesson.id - 50).padStart(2, '0');
    return String(lesson.id > 26 ? lesson.id - 26 : lesson.id).padStart(2, '0');
  }

  isUnlocked(lesson: LessonSummary): boolean {
    const course = this.selectedCourse();
    return !!course && this.progressService.isUnlocked(lesson.id, course.firstLessonId);
  }

  checkpointAfter(lessonId: number): CheckpointTest | null {
    const course = this.selectedCourse();
    return course ? getCheckpointAfterLesson(course.id, lessonId) : null;
  }

  checkpointScoreLabel(testId: string): string | null {
    const saved = this.checkpointScores()[testId];
    return saved ? `${saved.score}/${saved.total}` : null;
  }

  chestAfter(lessonId: number): PathChest | null {
    const course = this.selectedCourse();
    return course ? getChestAfterLesson(course.id, lessonId) : null;
  }

  isChestUnlocked(chest: PathChest): boolean {
    return this.progressService.hasCompleted(chest.afterLessonId);
  }

  isChestClaimed(chest: PathChest): boolean {
    return (this.progress().claimedChests ?? []).includes(chest.id);
  }

  openPathChest(chest: PathChest): void {
    if (!this.isChestUnlocked(chest) || this.isChestClaimed(chest)) return;
    if (this.progressService.claimPathChest(chest.id, chest.coins)) {
      this.sound.playChestOpen();
      this.chestReward.set({
        title: chest.title[this.language.locale()],
        coins: chest.coins,
        kind: 'path',
      });
    }
  }

  claimDailyChest(): void {
    const awarded = this.progressService.claimDailyChest();
    if (awarded > 0) {
      this.sound.playChestOpen();
      this.chestReward.set({
        title: this.language.t('chest.dailyTitle'),
        coins: awarded,
        kind: 'daily',
      });
    }
  }

  closeChestReward(): void {
    this.chestReward.set(null);
  }

  openShop(): void {
    this.chestReward.set(null);
    this.shopOpen.set(true);
    this.analytics.track('shop_opened', { metadata: { coins: this.coins() } });
  }

  closeShop(): void {
    this.shopOpen.set(false);
  }

  handleBuyFreeze(): void {
    if (this.progressService.buyStreakFreeze()) this.sound.playPurchase();
  }

  handleBuyAvatar(item: { id: string; price: number }): void {
    if (this.progressService.buyAvatar(item.id, item.price)) this.sound.playPurchase();
  }

  handleEquipAvatar(avatarId: string | null): void {
    this.progressService.equipAvatar(avatarId);
  }

  installApp(): void {
    void this.pwa.install();
  }

  openSignOutConfirm(): void {
    this.signOutConfirmOpen.set(true);
  }

  cancelSignOut(): void {
    if (!this.signingOut()) this.signOutConfirmOpen.set(false);
  }

  async confirmSignOut(): Promise<void> {
    if (this.signingOut()) return;
    this.signingOut.set(true);
    try {
      await this.progressService.flush();
      const snapshot = this.progressService.progress();
      this.analytics.track('user_signed_out', {
        metadata: {
          completed_lessons_count: snapshot.completedLessonIds.length,
          total_xp: snapshot.totalXp,
        },
      });
      await this.auth.signOut();
      this.signOutConfirmOpen.set(false);
      await this.router.navigateByUrl('/auth');
    } catch {
      this.progressService.syncError.set(this.language.t('nav.logoutError'));
    } finally {
      this.signingOut.set(false);
    }
  }

  navigateSection(event: Event, section: 'home' | 'course' | 'progress', elementId?: string): void {
    this.activeNavSection.set(section);
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = reduced ? 'auto' : 'smooth';
    if (elementId && typeof document !== 'undefined') {
      event.preventDefault();
      document.getElementById(elementId)?.scrollIntoView({ behavior, block: 'start' });
      return;
    }
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior });
  }

  readActiveCourseId(): 'part-1' | 'part-2' | 'part-3' {
    try {
      if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem(ACTIVE_COURSE_KEY);
        if (stored === 'part-1' || stored === 'part-2' || stored === 'part-3') return stored;
      }
    } catch {
      // Ignore storage access errors.
    }
    return 'part-1';
  }

  private getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 11) return this.language.t('dashboard.greetingMorning');
    if (hour < 18) return this.language.t('dashboard.greetingDay');
    return this.language.t('dashboard.greetingEvening');
  }
}
