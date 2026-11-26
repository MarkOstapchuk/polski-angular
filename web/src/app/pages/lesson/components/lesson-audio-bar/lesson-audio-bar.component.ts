import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { LanguageService } from '../../../../i18n/language.service';
import { AnalyticsService } from '../../../../services/analytics.service';
import { IconComponent } from '../../../../shared/icon/icon.component';

export interface AudioPlayerTrack {
  file: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-lesson-audio-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './lesson-audio-bar.component.html',
  styleUrl: './lesson-audio-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonAudioBarComponent {
  private readonly analytics = inject(AnalyticsService);
  readonly language = inject(LanguageService);
  readonly tracks = input.required<AudioPlayerTrack[]>();
  private readonly audioRef = viewChild<ElementRef<HTMLAudioElement>>('audioEl');

  readonly selectedTrackIndex = signal(0);
  readonly playing = signal(false);
  readonly speed = signal<0.75 | 1>(1);
  readonly currentTime = signal(0);
  readonly duration = signal(0);
  readonly audioError = signal(false);

  readonly activeTrack = computed(() => {
    const list = this.tracks();
    return list[this.selectedTrackIndex()] ?? list[0] ?? null;
  });

  constructor() {
    effect(() => {
      this.tracks();
      const el = this.audioRef()?.nativeElement;
      if (el) {
        el.pause();
        el.currentTime = 0;
      }
      this.selectedTrackIndex.set(0);
      this.playing.set(false);
      this.currentTime.set(0);
      this.duration.set(0);
      this.audioError.set(false);
    });
  }

  togglePlayPause(): void {
    const el = this.audioRef()?.nativeElement;
    const track = this.activeTrack();
    if (!el || !track) return;
    this.audioError.set(false);
    el.playbackRate = this.speed();
    if (el.paused) {
      void el.play().then(() => {
        this.analytics.track('audio_played', {
          metadata: { track_file: track.file, speed: this.speed() },
        });
      }).catch(() => {
        this.playing.set(false);
        this.audioError.set(true);
        this.analytics.track('audio_error', {
          metadata: { track_file: track.file },
        });
      });
    } else {
      el.pause();
    }
  }

  rewind5s(): void {
    const el = this.audioRef()?.nativeElement;
    if (!el) return;
    el.currentTime = Math.max(0, el.currentTime - 5);
    this.currentTime.set(el.currentTime);
  }

  toggleSpeed(): void {
    const next: 0.75 | 1 = this.speed() === 1 ? 0.75 : 1;
    this.speed.set(next);
    const el = this.audioRef()?.nativeElement;
    if (el) el.playbackRate = next;
    this.analytics.track('audio_speed_changed', {
      metadata: { speed: next },
    });
  }

  selectTrack(index: number): void {
    if (index === this.selectedTrackIndex()) return;
    const el = this.audioRef()?.nativeElement;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
    this.selectedTrackIndex.set(index);
    this.playing.set(false);
    this.currentTime.set(0);
    this.duration.set(0);
    this.audioError.set(false);
  }

  seek(event: Event): void {
    const el = this.audioRef()?.nativeElement;
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);
    if (!el || Number.isNaN(value)) return;
    el.currentTime = value;
    this.currentTime.set(value);
  }

  onMetadata(): void {
    const el = this.audioRef()?.nativeElement;
    if (!el) return;
    el.playbackRate = this.speed();
    this.duration.set(Number.isFinite(el.duration) ? el.duration : 0);
  }

  onTimeUpdate(): void {
    const el = this.audioRef()?.nativeElement;
    if (!el) return;
    this.currentTime.set(el.currentTime || 0);
  }

  formatTime(seconds: number): string {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const total = Math.floor(seconds);
    const mins = Math.floor(total / 60);
    const secs = String(total % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  }
}
