import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, RouterLink, LanguageSwitcherComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
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
    this.mode.update((mode) => mode === 'sign-in' ? 'sign-up' : 'sign-in');
    this.error.set(null);
    this.message.set(null);
  }

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  async submit(): Promise<void> {
    if (this.busy()) return;
    this.busy.set(true);
    this.error.set(null);
    this.message.set(null);

    try {
      if (this.mode() === 'sign-up') {
        const signedIn = await this.auth.signUp(this.email.trim(), this.password);
        if (!signedIn) {
          this.message.set(this.language.t('auth.confirmEmail'));
          return;
        }
      } else {
        await this.auth.signIn(this.email.trim(), this.password);
      }

      await this.router.navigateByUrl(this.safeNextUrl());
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : this.language.t('auth.genericError'));
    } finally {
      this.busy.set(false);
    }
  }

  private safeNextUrl(): string {
    const next = this.route.snapshot.queryParamMap.get('next');
    return next?.startsWith('/') && !next.startsWith('//') ? next : '/course/part-1';
  }
}
