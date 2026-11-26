import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BookMarked,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleDot,
  Clock,
  Coins,
  Download,
  Flame,
  Hash,
  House,
  Layers,
  LibraryBig,
  Lightbulb,
  List,
  Lock,
  LogIn,
  LogOut,
  Maximize2,
  MessageSquare,
  Moon,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Smile,
  Snowflake,
  Sparkles,
  Store,
  Sun,
  TrendingUp,
  Trophy,
  Volume2,
  VolumeX,
  X,
  Zap,
} from 'lucide';

type LucideNode = readonly [string, Record<string, string | number>];

const ICONS = {
  'arrow-down': ArrowDown,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  award: Award,
  'book-marked': BookMarked,
  'book-open': BookOpen,
  cards: Layers,
  chart: BarChart3,
  check: Check,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'circle-dot': CircleDot,
  clock: Clock,
  close: X,
  coins: Coins,
  download: Download,
  flame: Flame,
  hash: Hash,
  home: House,
  library: LibraryBig,
  lightbulb: Lightbulb,
  list: List,
  lock: Lock,
  'log-in': LogIn,
  'log-out': LogOut,
  maximize: Maximize2,
  'message-square': MessageSquare,
  moon: Moon,
  pause: Pause,
  play: Play,
  plus: Plus,
  'refresh-cw': RefreshCw,
  'rotate-ccw': RotateCcw,
  search: Search,
  smile: Smile,
  snowflake: Snowflake,
  sparkles: Sparkles,
  store: Store,
  sun: Sun,
  'trending-up': TrendingUp,
  trophy: Trophy,
  'volume-2': Volume2,
  'volume-x': VolumeX,
  zap: Zap,
} as const satisfies Record<string, readonly LucideNode[]>;

export type IconName = keyof typeof ICONS;

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      vertical-align: middle;
      line-height: 0;
    }
    svg { display: block; }
  `],
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth()"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      @for (node of nodes(); track $index) {
        @switch (node[0]) {
          @case ('path') {
            <svg:path [attr.d]="attr(node, 'd')" />
          }
          @case ('circle') {
            <svg:circle [attr.cx]="attr(node, 'cx')" [attr.cy]="attr(node, 'cy')" [attr.r]="attr(node, 'r')" />
          }
          @case ('rect') {
            <svg:rect
              [attr.x]="attr(node, 'x')"
              [attr.y]="attr(node, 'y')"
              [attr.width]="attr(node, 'width')"
              [attr.height]="attr(node, 'height')"
              [attr.rx]="attr(node, 'rx')"
              [attr.ry]="attr(node, 'ry')"
            />
          }
          @case ('line') {
            <svg:line
              [attr.x1]="attr(node, 'x1')"
              [attr.y1]="attr(node, 'y1')"
              [attr.x2]="attr(node, 'x2')"
              [attr.y2]="attr(node, 'y2')"
            />
          }
          @case ('polyline') {
            <svg:polyline [attr.points]="attr(node, 'points')" />
          }
          @case ('polygon') {
            <svg:polygon [attr.points]="attr(node, 'points')" />
          }
          @case ('ellipse') {
            <svg:ellipse
              [attr.cx]="attr(node, 'cx')"
              [attr.cy]="attr(node, 'cy')"
              [attr.rx]="attr(node, 'rx')"
              [attr.ry]="attr(node, 'ry')"
            />
          }
        }
      }
    </svg>
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input<number>(18);
  readonly strokeWidth = input<number>(2);

  readonly nodes = computed(() => ICONS[this.name()] ?? []);

  attr(node: LucideNode, key: string): string | null {
    const val = node[1][key];
    return val === undefined ? null : String(val);
  }
}
