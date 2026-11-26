import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, LanguageSwitcherComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly analytics = inject(AnalyticsService);
  private readonly auth = inject(AuthService);
  readonly progress = inject(ProgressService);
  readonly language = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly mode = signal<'sign-in' | 'sign-up'>('sign-in');
  readonly busy = signal(false);
  readonly showPassword = signal(false);
  readonly error = signal<string | null>(null);
  readonly message = signal<string | null>(null);
  email = '';
  password = '';

  constructor() {
    const initialParams = this.route.snapshot.queryParamMap;
    this.analytics.track('auth_page_viewed', {
      metadata: {
        initial_mode: this.mode(),
        has_next_param: initialParams.has('next'),
        next_url: this.safeNextUrl(),
        auth_error: initialParams.get('error'),
      },
    });

    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const err = params.get('error');
      this.error.set(
        err === 'session' ? this.language.t('auth.sessionError')
          : err === 'progress' ? this.language.t('auth.progressError')
          : null,
      );
    });

    if (!this.route.snapshot.queryParamMap.has('error')) {
      void this.auth.currentUser().then((user) => {
        if (user) void this.router.navigateByUrl(this.safeNextUrl());
      }).catch(() => undefined);
    }
  }

  toggleMode(): void {
    const previous = this.mode();
    const next = previous === 'sign-in' ? 'sign-up' : 'sign-in';
    this.mode.set(next);
    this.error.set(null);
    this.message.set(null);
    this.analytics.track('auth_mode_switched', {
      metadata: { from_mode: previous, to_mode: next },
    });
  }

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    this.busy.set(true);
    this.error.set(null);
    this.message.set(null);
    const currentMode = this.mode();
    const nextUrl = this.safeNextUrl();

    if (currentMode === 'sign-up') {
      this.analytics.track('signup_submitted', {
        metadata: { has_next_param: this.route.snapshot.queryParamMap.has('next') },
      });
    }

    try {
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
        metadata: { error_message: errorMessage },
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
