import { inject, Injectable, signal } from '@angular/core';
import { AnalyticsService } from './analytics.service';

const STORAGE_KEY = 'polski-sound-v1';

@Injectable({ providedIn: 'root' })
export class SoundService {
  private readonly analytics = inject(AnalyticsService);
  readonly enabled = signal<boolean>(this.readInitial());
  private ctx: AudioContext | null = null;

  toggle(): void {
    const next = !this.enabled();
    this.enabled.set(next);
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
    } catch {
      // Sound setting stays in memory when storage is unavailable.
    }
    this.analytics.track('sound_toggled', { metadata: { enabled: next } });
    if (next) this.playTone(587.33, 0, 0.08, 'sine', 0.06);
  }

  playCorrect(): void {
    if (!this.enabled()) return;
    this.playTone(523.25, 0, 0.085, 'sine', 0.09);
    this.playTone(659.25, 0.065, 0.095, 'sine', 0.09);
    this.vibrate(12);
  }

  playWrong(): void {
    if (!this.enabled()) return;
    this.playTone(220, 0, 0.09, 'triangle', 0.08);
    this.playTone(180, 0.08, 0.1, 'triangle', 0.08);
    this.vibrate([20, 35, 20]);
  }

  playComplete(): void {
    if (!this.enabled()) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      this.playTone(freq, idx * 0.075, idx === notes.length - 1 ? 0.16 : 0.09, 'sine', 0.09);
    });
    this.vibrate([15, 30, 30]);
  }

  playChestOpen(): void {
    if (!this.enabled()) return;
    const notes = [587.33, 739.99, 880, 1174.66, 1396.91];
    notes.forEach((freq, idx) => {
      this.playTone(freq, idx * 0.06, idx === notes.length - 1 ? 0.18 : 0.09, 'sine', 0.09);
    });
    this.vibrate([15, 25, 15, 25, 35]);
  }

  playPurchase(): void {
    if (!this.enabled()) return;
    this.playTone(987.77, 0, 0.075, 'sine', 0.08);
    this.playTone(1318.51, 0.065, 0.11, 'sine', 0.08);
    this.vibrate(15);
  }

  private playTone(freq: number, delaySec: number, durationSec: number, type: OscillatorType, peakGain: number): void {
    if (typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.ctx) this.ctx = new AudioCtx();
      const ctx = this.ctx;
      if (ctx.state === 'suspended') {
        void ctx.resume().catch(() => undefined);
      }

      const start = ctx.currentTime + delaySec;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(peakGain, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + durationSec);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + durationSec + 0.01);
    } catch {
      // Web Audio is optional and must never interrupt UI interactions.
    }
  }

  private vibrate(pattern: number | number[]): void {
    try {
      if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
        navigator.vibrate(pattern);
      }
    } catch {
      // Haptics are optional.
    }
  }

  private readInitial(): boolean {
    if (typeof localStorage === 'undefined') return true;
    try {
      return localStorage.getItem(STORAGE_KEY) !== 'off';
    } catch {
      return true;
    }
  }
}
