import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import type { CanActivateFn } from '@angular/router';
import type { User } from '@supabase/supabase-js';
import { AnalyticsService } from './analytics.service';
import { ProgressService } from './progress.service';
import { supabase } from './supabase.client';

const OFFLINE_USER_KEY = 'polski-offline-user';
type AppUser = Pick<User, 'id' | 'email'>;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly analytics = inject(AnalyticsService);
  readonly user = signal<AppUser | null>(null);

  async currentUser(): Promise<AppUser | null> {
    const cachedUser = typeof navigator !== 'undefined' && !navigator.onLine ? this.readOfflineUser() : null;
    if (cachedUser) {
      this.user.set(cachedUser);
      this.identifyUser(cachedUser);
      return cachedUser;
    }

    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      const user = data.session?.user ?? null;
      if (user) {
        this.storeOfflineUser(user);
        this.identifyUser(user);
      } else if (typeof navigator !== 'undefined' && !navigator.onLine) {
        const offlineUser = this.readOfflineUser();
        if (offlineUser) {
          this.user.set(offlineUser);
          this.identifyUser(offlineUser);
          return offlineUser;
        }
      } else {
        this.clearOfflineUser();
      }
      this.user.set(user);
      return user;
    } catch (error) {
      const offlineUser = typeof navigator !== 'undefined' && !navigator.onLine ? this.readOfflineUser() : null;
      if (offlineUser) {
        this.user.set(offlineUser);
        this.identifyUser(offlineUser);
        return offlineUser;
      }
      throw error;
    }
  }

  async signUp(email: string, password: string): Promise<boolean> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin },
    });
    if (error) throw error;
    const createdUser = data.session?.user ?? data.user ?? null;
    this.user.set(data.session?.user ?? null);
    if (data.session?.user) this.storeOfflineUser(data.session.user);
    else this.clearOfflineUser();
    if (createdUser) this.identifyUser(createdUser);
    return !!data.session;
  }

  async signIn(email: string, password: string): Promise<void> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    this.user.set(data.user);
    this.storeOfflineUser(data.user);
    this.identifyUser(data.user);
  }

  async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut({ scope: 'local' });
    if (error) throw error;
    this.user.set(null);
    this.clearOfflineUser();
    this.analytics.reset();
  }

  private identifyUser(user: AppUser): void {
    this.analytics.identify(user.id, {
      email: user.email ?? undefined,
    });
  }

  private storeOfflineUser(user: AppUser): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(OFFLINE_USER_KEY, JSON.stringify({ id: user.id, email: user.email }));
      }
    } catch {
      // Offline access is unavailable when browser storage is disabled.
    }
  }

  private readOfflineUser(): AppUser | null {
    try {
      if (typeof localStorage === 'undefined') return null;
      const user = JSON.parse(localStorage.getItem(OFFLINE_USER_KEY) ?? 'null') as Partial<AppUser> | null;
      return user && typeof user.id === 'string' && (typeof user.email === 'string' || user.email === null)
        ? { id: user.id, email: user.email }
        : null;
    } catch {
      return null;
    }
  }

  private clearOfflineUser(): void {
    try {
      if (typeof localStorage !== 'undefined') localStorage.removeItem(OFFLINE_USER_KEY);
    } catch {
      // Offline identity stays local to this device.
    }
  }
}

export const authGuard: CanActivateFn = async (_route, state) => {
  const auth = inject(AuthService);
  const analytics = inject(AnalyticsService);
  const progress = inject(ProgressService);
  const router = inject(Router);

  let user: AppUser | null;
  try {
    user = await auth.currentUser();
  } catch {
    analytics.track('auth_guard_redirected', { metadata: { reason: 'session_error', target_url: state.url } });
    return router.createUrlTree(['/auth'], { queryParams: { error: 'session' } });
  }

  if (!user) {
    analytics.track('auth_guard_redirected', { metadata: { reason: 'unauthenticated', target_url: state.url } });
    return router.createUrlTree(['/auth'], { queryParams: { next: state.url } });
  }

  try {
    await progress.loadForUser(user.id);
    return true;
  } catch {
    analytics.track('auth_guard_redirected', { metadata: { reason: 'progress_error', target_url: state.url } });
    return router.createUrlTree(['/auth'], { queryParams: { error: 'progress' } });
  }
};

export const optionalAuthGuard: CanActivateFn = async () => {
  const auth = inject(AuthService);
  const progress = inject(ProgressService);

  try {
    const user = await auth.currentUser();
    if (user) {
      await progress.loadForUser(user.id).catch(() => undefined);
    }
  } catch {
    // Guest mode works with localStorage when no session is available.
  }
  return true;
};
