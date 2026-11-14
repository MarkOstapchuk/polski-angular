import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import type { CanActivateFn } from '@angular/router';
import type { User } from '@supabase/supabase-js';
import { ProgressService } from './progress.service';
import { supabase } from './supabase.client';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly user = signal<User | null>(null);

  async currentUser(): Promise<User | null> {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    const user = data.session?.user ?? null;
    this.user.set(user);
    return user;
  }

  async signUp(email: string, password: string): Promise<boolean> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin },
    });
    if (error) throw error;
    this.user.set(data.session?.user ?? null);
    return !!data.session;
  }

  async signIn(email: string, password: string): Promise<void> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    this.user.set(data.user);
  }

  async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    this.user.set(null);
  }
}

export const authGuard: CanActivateFn = async (_route, state) => {
  const auth = inject(AuthService);
  const progress = inject(ProgressService);
  const router = inject(Router);

  let user: User | null;
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
