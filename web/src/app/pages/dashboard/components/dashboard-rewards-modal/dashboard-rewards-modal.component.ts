import { ChangeDetectionStrategy, Component, HostListener, computed, inject, input, output } from '@angular/core';
import {
  MAX_STREAK_FREEZES,
  SHOP_AVATARS,
  STREAK_FREEZE_PRICE,
} from '../../../../data/rewards';
import { LanguageService } from '../../../../i18n/language.service';
import { LearnerProgress } from '../../../../services/progress.service';

export interface ChestRewardModalData {
  title: string;
  coins: number;
  kind: 'path' | 'daily';
}

@Component({
  selector: 'app-dashboard-rewards-modal',
  standalone: true,
  templateUrl: './dashboard-rewards-modal.component.html',
  styleUrl: './dashboard-rewards-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardRewardsModalComponent {
  readonly language = inject(LanguageService);

  readonly chestReward = input<ChestRewardModalData | null>(null);
  readonly shopOpen = input<boolean>(false);
  readonly progress = input.required<LearnerProgress>();
  readonly defaultInitial = input<string>('U');

  readonly closeChest = output<void>();
  readonly openShopFromChest = output<void>();
  readonly closeShop = output<void>();
  readonly buyFreeze = output<void>();
  readonly buyAvatar = output<{ id: string; price: number }>();
  readonly equipAvatar = output<string | null>();

  readonly avatars = SHOP_AVATARS;
  readonly freezePrice = STREAK_FREEZE_PRICE;
  readonly maxFreezes = MAX_STREAK_FREEZES;

  readonly coins = computed(() => this.progress().coins ?? 0);
  readonly freezes = computed(() => this.progress().streakFreezes ?? 0);
  readonly freezeMaxed = computed(() => this.freezes() >= MAX_STREAK_FREEZES);
  readonly canBuyFreeze = computed(() => !this.freezeMaxed() && this.coins() >= STREAK_FREEZE_PRICE);
  readonly ownedAvatars = computed(() => new Set(this.progress().ownedAvatars ?? []));
  readonly selectedAvatar = computed(() => this.progress().selectedAvatar ?? null);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.chestReward()) {
      this.closeChest.emit();
    } else if (this.shopOpen()) {
      this.closeShop.emit();
    }
  }
}
