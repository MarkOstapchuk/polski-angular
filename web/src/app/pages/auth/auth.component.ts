import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly auth = inject(AuthService);
  readonly progress = inject(ProgressService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly mode = signal<'sign-in' | 'sign-up'>('sign-in');
  readonly busy = signal(false);
  readonly error = signal<string | null>(null);
  readonly message = signal<string | null>(null);
  email = '';
  password = '';

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.error.set(params.get('error') === 'session' ? 'Nie udało się sprawdzić sesji. Zaloguj się ponownie.' : null);
    });
  }

  toggleMode(): void {
    this.mode.update((mode) => mode === 'sign-in' ? 'sign-up' : 'sign-in');
    this.error.set(null);
    this.message.set(null);
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
          this.message.set('Sprawdź pocztę i potwierdź adres e-mail, aby dokończyć rejestrację.');
          return;
        }
      } else {
        await this.auth.signIn(this.email.trim(), this.password);
      }

      const next = this.route.snapshot.queryParamMap.get('next');
      const destination = next?.startsWith('/') && !next.startsWith('//') ? next : '/course/part-1';
      await this.router.navigateByUrl(destination);
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Nie udało się połączyć z kontem.');
    } finally {
      this.busy.set(false);
    }
  }
}
