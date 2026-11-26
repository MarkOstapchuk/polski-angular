import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon/icon.component';

export type AuthMode = 'sign-in' | 'sign-up' | 'forgot' | 'reset';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, LanguageSwitcherComponent, IconComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly analytics = inject(AnalyticsService);
  private readonly auth = inject(AuthService);
  readonly progress = inject(ProgressService);
  readonly language = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly mode = signal<AuthMode>('sign-in');
  readonly busy = signal(false);
  readonly showPassword = signal(false);
  readonly error = signal<string | null>(null);
  readonly message = signal<string | null>(null);
  email = '';
  password = '';
  confirmPassword = '';

  constructor() {
    const initialParams = this.route.snapshot.queryParamMap;
    const isRecoveryHash = typeof window !== 'undefined' && window.location.hash.includes('type=recovery');
    if (initialParams.get('mode') === 'reset' || isRecoveryHash) {
      this.mode.set('reset');
    }

    const unsubscribeRecovery = this.auth.onPasswordRecovery(() => {
      this.mode.set('reset');
      this.error.set(null);
      this.message.set(null);
    });
    this.destroyRef.onDestroy(unsubscribeRecovery);

    this.analytics.track('auth_page_viewed', {
      metadata: {
        initial_mode: this.mode(),
        has_next_param: initialParams.has('next'),
        next_url: this.safeNextUrl(),
        auth_error: initialParams.get('error'),
      },
    });

    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      if (params.get('mode') === 'reset') {
        this.mode.set('reset');
      }
      const err = params.get('error');
      this.error.set(
        err === 'session' ? this.language.t('auth.sessionError')
          : err === 'progress' ? this.language.t('auth.progressError')
          : null,
      );
    });

    if (!initialParams.has('error') && this.mode() !== 'reset') {
      void this.auth.currentUser().then((user) => {
        if (user && this.mode() !== 'reset') void this.router.navigateByUrl(this.safeNextUrl());
      }).catch(() => undefined);
    }
  }

  setMode(next: AuthMode): void {
    const previous = this.mode();
    this.mode.set(next);
    this.error.set(null);
    this.message.set(null);
    this.analytics.track('auth_mode_switched', {
      metadata: { from_mode: previous, to_mode: next },
    });
  }

  toggleMode(): void {
    this.setMode(this.mode() === 'sign-in' ? 'sign-up' : 'sign-in');
  }

  openForgotMode(): void {
    this.setMode('forgot');
  }

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  headingKey(): string {
    const m = this.mode();
    if (m === 'sign-up') return 'auth.create';
    if (m === 'forgot') return 'auth.forgotTitle';
    if (m === 'reset') return 'auth.resetTitle';
    return 'auth.welcome';
  }

  introKey(): string {
    const m = this.mode();
    if (m === 'sign-up') return 'auth.signUpIntro';
    if (m === 'forgot') return 'auth.forgotIntro';
    if (m === 'reset') return 'auth.resetIntro';
    return 'auth.signInIntro';
  }

  submitLabelKey(): string {
    const m = this.mode();
    if (m === 'sign-up') return 'auth.signUp';
    if (m === 'forgot') return 'auth.sendResetLink';
    if (m === 'reset') return 'auth.saveNewPassword';
    return 'auth.signIn';
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    const currentMode = this.mode();
    this.error.set(null);
    this.message.set(null);

    if (currentMode === 'reset' && this.password !== this.confirmPassword) {
      this.error.set(this.language.t('auth.passwordsMismatch'));
      return;
    }

    this.busy.set(true);
    const nextUrl = this.safeNextUrl();

    if (currentMode === 'sign-up') {
      this.analytics.track('signup_submitted', {
        metadata: { has_next_param: this.route.snapshot.queryParamMap.has('next') },
      });
    }

    try {
      if (currentMode === 'forgot') {
        await this.auth.requestPasswordReset(this.email.trim());
        this.analytics.track('password_reset_requested');
        this.message.set(this.language.t('auth.resetEmailSent'));
        return;
      }

      if (currentMode === 'reset') {
        await this.auth.updatePassword(this.password);
        this.analytics.track('password_reset_completed');
        this.message.set(this.language.t('auth.passwordUpdated'));
        await this.router.navigateByUrl(nextUrl);
        return;
      }

      if (currentMode === 'sign-up') {
        const signedIn = await this.auth.signUp(this.email.trim(), this.password);
        this.analytics.track('user_signed_up', {
          metadata: { instant_session: signedIn, next_url: nextUrl },
        });
        if (!signedIn) {
          this.analytics.track('signup_email_confirmation_required');
          this.message.set(this.language.t('auth.confirmEmail'));
          return;
        }
      } else {
        await this.auth.signIn(this.email.trim(), this.password);
        this.analytics.track('user_signed_in', {
          metadata: { next_url: nextUrl },
        });
      }

      await this.router.navigateByUrl(nextUrl);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : this.language.t('auth.genericError');
      this.error.set(errorMessage);
      this.analytics.track(currentMode === 'sign-up' ? 'signup_failed' : 'signin_failed', {
        metadata: { error_message: errorMessage, mode: currentMode },
      });
    } finally {
      this.busy.set(false);
    }
  }

  private safeNextUrl(): string {
    const next = this.route.snapshot.queryParamMap.get('next');
    return next?.startsWith('/') && !next.startsWith('//') ? next : '/course/part-1';
  }
}
