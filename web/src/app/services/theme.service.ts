import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { AnalyticsService } from './analytics.service';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'polski-theme-v1';
const THEME_META_COLORS: Record<ThemeMode, string> = {
  light: '#fbfaf7',
  dark: '#151613',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly analytics = inject(AnalyticsService);
  private readonly destroyRef = inject(DestroyRef);

  readonly theme = signal<ThemeMode>(this.initialTheme());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    this.applyTheme(this.theme());

    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const onMediaChange = (event: MediaQueryListEvent): void => {
        if (this.readStoredTheme() !== null) return;
        const next: ThemeMode = event.matches ? 'dark' : 'light';
        this.theme.set(next);
        this.applyTheme(next);
      };
      mq.addEventListener('change', onMediaChange);
      this.destroyRef.onDestroy(() => mq.removeEventListener('change', onMediaChange));
    }
  }

  toggle(): void {
    const next: ThemeMode = this.isDark() ? 'light' : 'dark';
    this.setTheme(next);
  }

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
    this.applyTheme(mode);
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Theme still applies in memory when storage is unavailable.
    }
    this.analytics.track('theme_toggled', { metadata: { theme: mode } });
  }

  private initialTheme(): ThemeMode {
    const stored = this.readStoredTheme();
    if (stored) return stored;
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  private readStoredTheme(): ThemeMode | null {
    if (typeof localStorage === 'undefined') return null;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch {
      return null;
    }
  }

  private applyTheme(mode: ThemeMode): void {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset['theme'] = mode;
    document.documentElement.style.colorScheme = mode;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = THEME_META_COLORS[mode];
  }
}
