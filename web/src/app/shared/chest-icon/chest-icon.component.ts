import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ChestState = 'locked' | 'ready' | 'open';

@Component({
  selector: 'app-chest-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      line-height: 0;
    }
    svg { display: block; overflow: visible; }
    .is-ready { animation: chestBob 2.4s ease-in-out infinite; transform-origin: 50% 60%; }
    .is-open .burst { animation: burstPop .45s ease-out; transform-origin: 32px 26px; }
    @keyframes chestBob {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-2px) scale(1.03); }
    }
    @keyframes burstPop {
      0% { transform: scale(.7); opacity: .3; }
      70% { transform: scale(1.06); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
    @media (prefers-reduced-motion: reduce) {
      .is-ready, .is-open .burst { animation: none !important; }
    }
  `],
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      [class.is-ready]="state() === 'ready'"
      [class.is-open]="state() === 'open'"
    >
      <defs>
        <radialGradient [attr.id]="uid + '-glow'" cx="50%" cy="48%" r="50%">
          <stop offset="0%" stop-color="#ffd859" stop-opacity=".55" />
          <stop offset="65%" stop-color="#ffb82e" stop-opacity=".18" />
          <stop offset="100%" stop-color="#ffb82e" stop-opacity="0" />
        </radialGradient>

        <linearGradient [attr.id]="uid + '-wood-lid'" x1="12" y1="14" x2="52" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#f3a452" />
          <stop offset="55%" stop-color="#d46b24" />
          <stop offset="100%" stop-color="#9e4210" />
        </linearGradient>

        <linearGradient [attr.id]="uid + '-wood-body'" x1="12" y1="30" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#cf641f" />
          <stop offset="100%" stop-color="#87360a" />
        </linearGradient>

        <linearGradient [attr.id]="uid + '-gold'" x1="10" y1="12" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fff2a6" />
          <stop offset="45%" stop-color="#f7b92c" />
          <stop offset="100%" stop-color="#c4770c" />
        </linearGradient>

        <linearGradient [attr.id]="uid + '-lock-lid'" x1="12" y1="14" x2="52" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#a29b91" />
          <stop offset="100%" stop-color="#6c655c" />
        </linearGradient>

        <linearGradient [attr.id]="uid + '-lock-body'" x1="12" y1="30" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#7c756c" />
          <stop offset="100%" stop-color="#534d46" />
        </linearGradient>

        <linearGradient [attr.id]="uid + '-pewter'" x1="12" y1="14" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#dbd6ce" />
          <stop offset="100%" stop-color="#8f8980" />
        </linearGradient>

        <linearGradient [attr.id]="uid + '-coin'" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff6b8" />
          <stop offset="50%" stop-color="#ffd038" />
          <stop offset="100%" stop-color="#cf860e" />
        </linearGradient>
      </defs>

      <!-- Soft ground shadow -->
      <ellipse cx="32" cy="56.5" rx="22" ry="4.5" fill="#1b1610" opacity=".24" />

      @if (state() === 'locked') {
        <!-- Locked 3D slate/pewter chest -->
        <rect x="10" y="29" width="44" height="25" rx="7" fill="#433e38" />
        <rect x="10" y="27.5" width="44" height="23.5" rx="6.5" [attr.fill]="'url(#' + uid + '-lock-body)'" />
        <path d="M11 38h42" stroke="#45403a" stroke-width="1.6" opacity=".6" />

        <!-- Domed lid -->
        <path d="M9 26.5c0-8.2 5.4-13.5 23-13.5s23 5.3 23 13.5v4.5H9v-4.5z" [attr.fill]="'url(#' + uid + '-lock-lid)'" />
        <path d="M14 21.5c3-4.3 9-6.2 18-6.2s15 1.9 18 6.2" stroke="#c8c2b9" stroke-width="2" stroke-linecap="round" opacity=".55" />

        <!-- Pewter metal bands -->
        <rect x="15.5" y="14.5" width="5.5" height="36" rx="2.5" [attr.fill]="'url(#' + uid + '-pewter)'" />
        <rect x="43" y="14.5" width="5.5" height="36" rx="2.5" [attr.fill]="'url(#' + uid + '-pewter)'" />
        <rect x="9" y="27.5" width="46" height="5" rx="2.5" [attr.fill]="'url(#' + uid + '-pewter)'" />
        <rect x="9" y="31.5" width="46" height="1.5" fill="#5b554e" opacity=".6" />

        <!-- 3D Padlock clasp -->
        <path d="M27.5 26.5v-3.2a4.5 4.5 0 0 1 9 0v3.2" stroke="#d5cfc6" stroke-width="2.8" stroke-linecap="round" />
        <rect x="25.5" y="26.5" width="13" height="12.5" rx="3.5" fill="#6b645c" />
        <rect x="25.5" y="25.5" width="13" height="11.5" rx="3.5" [attr.fill]="'url(#' + uid + '-pewter)'" />
        <circle cx="32" cy="30.5" r="1.8" fill="#4d4740" />
        <path d="M32 31.8v2.7" stroke="#4d4740" stroke-width="1.8" stroke-linecap="round" />
      } @else if (state() === 'ready') {
        <!-- Golden aura -->
        <circle cx="32" cy="32" r="29" [attr.fill]="'url(#' + uid + '-glow)'" />

        <!-- 3D bevel base -->
        <rect x="10" y="30" width="44" height="24.5" rx="7" fill="#672606" />
        <rect x="10" y="28" width="44" height="23.5" rx="6.5" [attr.fill]="'url(#' + uid + '-wood-body)'" />
        <path d="M11 39h42" stroke="#6c2a07" stroke-width="1.6" opacity=".65" />

        <!-- 3D domed lid -->
        <path d="M9 26.5c0-8.6 5.6-14 23-14s23 5.4 23 14v4.5H9v-4.5z" [attr.fill]="'url(#' + uid + '-wood-lid)'" />
        <path d="M14 20.8c3.2-4.2 9-6 18-6s14.8 1.8 18 6" stroke="#ffd199" stroke-width="2.2" stroke-linecap="round" opacity=".65" />

        <!-- Gleaming gold straps & rim -->
        <rect x="15.5" y="13.8" width="5.8" height="37.5" rx="2.8" [attr.fill]="'url(#' + uid + '-gold)'" />
        <rect x="42.7" y="13.8" width="5.8" height="37.5" rx="2.8" [attr.fill]="'url(#' + uid + '-gold)'" />
        <rect x="8.8" y="27.2" width="46.4" height="5.4" rx="2.7" [attr.fill]="'url(#' + uid + '-gold)'" />
        <rect x="9" y="32" width="46" height="1.8" fill="#8b4e05" opacity=".55" />

        <!-- Gold lock plate + ruby gem -->
        <rect x="25" y="26.2" width="14" height="13.2" rx="4" fill="#9a5607" />
        <rect x="25" y="25" width="14" height="12.2" rx="4" [attr.fill]="'url(#' + uid + '-gold)'" />
        <circle cx="32" cy="31.1" r="3" fill="#ff6a47" stroke="#fff2b0" stroke-width="1.2" />

        <!-- Sparkles -->
        <path d="M11 9.5l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#ffe678" />
        <path d="M53.5 8l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" fill="#ffe678" />
      } @else {
        <!-- Open 3D treasure chest bursting with coins -->
        <circle class="burst" cx="32" cy="27" r="29" [attr.fill]="'url(#' + uid + '-glow)'" />
        <g class="burst" opacity=".75">
          <path d="M32 6l3 14h-6zM15 11l10 11-4 3zM49 11l-10 11 4 3z" fill="#ffe47a" />
        </g>

        <!-- Flipped open lid behind -->
        <path d="M11 26c0-8.5 5.2-14.5 21-14.5S53 17.5 53 26v4H11v-4z" fill="#853509" />
        <path d="M11 24c0-7.5 5-12.5 21-12.5S53 16.5 53 24v3H11v-3z" [attr.fill]="'url(#' + uid + '-wood-lid)'" />
        <rect x="16" y="12.5" width="5" height="14" rx="2" [attr.fill]="'url(#' + uid + '-gold)'" />
        <rect x="43" y="12.5" width="5" height="14" rx="2" [attr.fill]="'url(#' + uid + '-gold)'" />
        <rect x="10.5" y="23.5" width="43" height="4.2" rx="2.1" [attr.fill]="'url(#' + uid + '-gold)'" />

        <!-- Dark amber chest interior -->
        <rect x="12" y="26.5" width="40" height="8" rx="2" fill="#4f1f06" />

        <!-- Overflowing 3D gold coins mound -->
        <circle cx="22" cy="27.5" r="5.5" [attr.fill]="'url(#' + uid + '-coin)'" stroke="#b36c06" stroke-width="1.2" />
        <circle cx="42" cy="27.5" r="5.5" [attr.fill]="'url(#' + uid + '-coin)'" stroke="#b36c06" stroke-width="1.2" />
        <circle cx="28" cy="23.5" r="6" [attr.fill]="'url(#' + uid + '-coin)'" stroke="#b36c06" stroke-width="1.2" />
        <circle cx="37" cy="24" r="5.8" [attr.fill]="'url(#' + uid + '-coin)'" stroke="#b36c06" stroke-width="1.2" />
        <circle cx="32.5" cy="28" r="6.2" [attr.fill]="'url(#' + uid + '-coin)'" stroke="#b36c06" stroke-width="1.2" />
        <circle cx="32.5" cy="28" r="3.4" stroke="#fff7c4" stroke-width="1.1" opacity=".7" />

        <!-- Front 3D chest wall -->
        <rect x="10" y="31.5" width="44" height="23" rx="6.5" fill="#672606" />
        <rect x="10" y="29.8" width="44" height="22" rx="6" [attr.fill]="'url(#' + uid + '-wood-body)'" />
        <path d="M11 40.5h42" stroke="#6c2a07" stroke-width="1.6" opacity=".65" />

        <!-- Front gold straps & open rim -->
        <rect x="15.5" y="29.5" width="5.8" height="22.3" rx="2.5" [attr.fill]="'url(#' + uid + '-gold)'" />
        <rect x="42.7" y="29.5" width="5.8" height="22.3" rx="2.5" [attr.fill]="'url(#' + uid + '-gold)'" />
        <rect x="9" y="29.2" width="46" height="4.8" rx="2.4" [attr.fill]="'url(#' + uid + '-gold)'" />
        <rect x="26" y="31" width="12" height="8.5" rx="3" [attr.fill]="'url(#' + uid + '-gold)'" />
        <circle cx="32" cy="35.2" r="2.1" fill="#8b4e05" />

        <!-- Floating sparkles -->
        <path d="M13 13l1.1 2.5 2.5 1.1-2.5 1.1-1.1 2.5-1.1-2.5-2.5-1.1 2.5-1.1z" fill="#ffe678" />
        <path d="M51.5 12l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1z" fill="#ffe678" />
        <circle cx="32.5" cy="11.5" r="1.6" fill="#fff4b8" />
      }
    </svg>
  `,
})
export class ChestIconComponent {
  private static nextId = 0;
  readonly uid = `chest-${++ChestIconComponent.nextId}`;

  readonly state = input<ChestState>('ready');
  readonly size = input<number>(48);
}
