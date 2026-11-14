import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import type { CanActivateFn } from '@angular/router';
import type { User } from '@supabase/supabase-js';
import { ProgressService } from './progress.service';
import { supabase } from './supabase.client';

const OFFLINE_USER_KEY = 'polski-offline-user';
type AppUser = Pick<User, 'id' | 'email'>;

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly user = signal<AppUser | null>(null);

  async currentUser(): Promise<AppUser | null> {
    const cachedUser = typeof navigator !== 'undefined' && !navigator.onLine ? this.readOfflineUser() : null;
    if (cachedUser) {
      this.user.set(cachedUser);
      return cachedUser;
    }

    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      const user = data.session?.user ?? null;
      if (user) {
        this.storeOfflineUser(user);
      } else if (typeof navigator !== 'undefined' && !navigator.onLine) {
        const offlineUser = this.readOfflineUser();
        if (offlineUser) {
          this.user.set(offlineUser);
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
    this.user.set(data.session?.user ?? null);
    if (data.session?.user) this.storeOfflineUser(data.session.user);
    else this.clearOfflineUser();
    return !!data.session;
  }

  async signIn(email: string, password: string): Promise<void> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    this.user.set(data.user);
    this.storeOfflineUser(data.user);
  }

  async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut({ scope: 'local' });
    if (error) throw error;
    this.user.set(null);
    this.clearOfflineUser();
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
  const progress = inject(ProgressService);
  const router = inject(Router);

  let user: AppUser | null;
  try {
    user = await auth.currentUser();
  } catch {
    return router.createUrlTree(['/auth'], { queryParams: { error: 'session' } });
  }

  if (!user) return router.createUrlTree(['/auth'], { queryParams: { next: state.url } });

  try {
    await progress.loadForUser(user.id);
    return true;
  } catch {
    return router.createUrlTree(['/auth'], { queryParams: { error: 'progress' } });
  }
};
