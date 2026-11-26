import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { SoundService } from '../../services/sound.service';
import { IconComponent } from '../icon/icon.component';

export type ChestOpeningKind = 'lesson' | 'path' | 'daily';
export type ChestOpeningPhase = 'sealed' | 'shaking' | 'opened';

export interface ChestOpeningItem {
  id: string;
  title: string;
  subtitle?: string;
  coins: number;
  kind: ChestOpeningKind;
  autoOpen?: boolean;
}

interface CoinParticle {
  tx: string;
  ty: string;
  rot: string;
  delay: string;
  scale: number;
}

interface SparkleParticle {
  tx: string;
  ty: string;
  delay: string;
  scale: number;
  tone: 'gold' | 'coral' | 'ivory';
}

const COIN_PARTICLES: readonly CoinParticle[] = [
  { tx: '-98px', ty: '-72px', rot: '-260deg', delay: '0ms', scale: 0.92 },
  { tx: '-74px', ty: '-104px', rot: '-190deg', delay: '35ms', scale: 1.05 },
  { tx: '-44px', ty: '-118px', rot: '-140deg', delay: '20ms', scale: 0.88 },
  { tx: '-16px', ty: '-126px', rot: '-90deg', delay: '55ms', scale: 1.1 },
  { tx: '18px', ty: '-124px', rot: '110deg', delay: '15ms', scale: 1.02 },
  { tx: '48px', ty: '-114px', rot: '165deg', delay: '45ms', scale: 0.9 },
  { tx: '78px', ty: '-98px', rot: '215deg', delay: '25ms', scale: 1.08 },
  { tx: '102px', ty: '-68px', rot: '275deg', delay: '60ms', scale: 0.86 },
  { tx: '-86px', ty: '-36px', rot: '-310deg', delay: '70ms', scale: 0.8 },
  { tx: '88px', ty: '-34px', rot: '305deg', delay: '75ms', scale: 0.82 },
  { tx: '-28px', ty: '-88px', rot: '-120deg', delay: '85ms', scale: 0.95 },
  { tx: '32px', ty: '-90px', rot: '135deg', delay: '90ms', scale: 0.96 },
];

const SPARKLE_PARTICLES: readonly SparkleParticle[] = [
  { tx: '-88px', ty: '-88px', delay: '10ms', scale: 1.1, tone: 'gold' },
  { tx: '90px', ty: '-84px', delay: '25ms', scale: 1.15, tone: 'coral' },
  { tx: '-108px', ty: '-18px', delay: '40ms', scale: 0.85, tone: 'ivory' },
  { tx: '110px', ty: '-16px', delay: '30ms', scale: 0.9, tone: 'gold' },
  { tx: '-54px', ty: '-116px', delay: '50ms', scale: 0.95, tone: 'coral' },
  { tx: '56px', ty: '-114px', delay: '45ms', scale: 1.0, tone: 'ivory' },
  { tx: '0px', ty: '-132px', delay: '20ms', scale: 1.2, tone: 'gold' },
  { tx: '-42px', ty: '26px', delay: '65ms', scale: 0.75, tone: 'gold' },
];

@Component({
  selector: 'app-chest-opening-modal',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './chest-opening-modal.component.html',
  styleUrl: './chest-opening-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChestOpeningModalComponent {
  private static nextUid = 0;

  readonly language = inject(LanguageService);
  private readonly sound = inject(SoundService);

  readonly uid = `chest-modal-${++ChestOpeningModalComponent.nextUid}`;
  readonly coinParticles = COIN_PARTICLES;
  readonly sparkleParticles = SPARKLE_PARTICLES;

  readonly chest = input<ChestOpeningItem | null>(null);
  readonly currentBalance = input<number>(0);
  readonly queueIndex = input<number>(0);
  readonly queueTotal = input<number>(1);
  readonly showShopButton = input<boolean>(true);

  readonly opened = output<ChestOpeningItem>();
  readonly closed = output<void>();
  readonly openShop = output<void>();

  readonly phase = signal<ChestOpeningPhase>('sealed');
  readonly displayedCoins = signal<number>(0);
  readonly hasMoreChests = computed(() => this.queueIndex() + 1 < this.queueTotal());
  readonly eyebrowKey = computed(() => {
    if (this.phase() === 'opened') return 'chest.rewardEyebrow' as const;
    const kind = this.chest()?.kind;
    if (kind === 'lesson') return 'chest.lessonEyebrow' as const;
    if (kind === 'daily') return 'chest.dailyEyebrow' as const;
    return 'chest.pathEyebrow' as const;
  });

  private openTimerId: ReturnType<typeof setTimeout> | null = null;
  private countRafId: number | null = null;
  private emittedForChestId: string | null = null;

  constructor() {
    effect((onCleanup) => {
      const item = this.chest();
      this.clearTimers();
      this.emittedForChestId = null;
      this.displayedCoins.set(0);

      if (!item) {
        this.phase.set('sealed');
        return;
      }

      if (item.autoOpen) {
        this.startOpening(item);
      } else {
        this.phase.set('sealed');
      }

      onCleanup(() => this.clearTimers());
    });
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.chest()) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.requestClose();
      return;
    }
    if ((event.key === 'Enter' || event.key === ' ') && this.phase() === 'sealed') {
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (target?.closest('button, a')) return;
      event.preventDefault();
      this.triggerOpen();
    }
  }

  triggerOpen(): void {
    const item = this.chest();
    if (!item || this.phase() !== 'sealed') return;
    this.startOpening(item);
  }

  requestClose(): void {
    if (this.phase() === 'shaking') return;
    this.closed.emit();
  }

  private startOpening(item: ChestOpeningItem): void {
    const reducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      this.finishOpening(item, true);
      return;
    }

    this.phase.set('shaking');
    this.sound.playChestRattle();
    this.openTimerId = setTimeout(() => {
      this.openTimerId = null;
      this.finishOpening(item, false);
    }, 520);
  }

  private finishOpening(item: ChestOpeningItem, instant: boolean): void {
    this.phase.set('opened');
    this.sound.playChestOpen();

    if (this.emittedForChestId !== item.id) {
      this.emittedForChestId = item.id;
      this.opened.emit(item);
    }

    if (instant || typeof requestAnimationFrame === 'undefined') {
      this.displayedCoins.set(item.coins);
      return;
    }

    const targetCoins = item.coins;
    const durationMs = 420;
    const startAt = performance.now();

    const step = (now: number): void => {
      const progress = Math.min(1, (now - startAt) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayedCoins.set(Math.round(targetCoins * eased));
      if (progress < 1) {
        this.countRafId = requestAnimationFrame(step);
      } else {
        this.countRafId = null;
        this.displayedCoins.set(targetCoins);
      }
    };

    this.countRafId = requestAnimationFrame(step);
  }

  private clearTimers(): void {
    if (this.openTimerId !== null) {
      clearTimeout(this.openTimerId);
      this.openTimerId = null;
    }
    if (this.countRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.countRafId);
      this.countRafId = null;
    }
  }
}
