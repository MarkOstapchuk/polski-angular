import type { Language } from '../i18n/language.service';

export const DAILY_CHEST_COINS = 20;
export const LESSON_FIRST_CLEAR_COINS = 5;
export const STREAK_FREEZE_PRICE = 50;
export const MAX_STREAK_FREEZES = 3;

export interface PathChest {
  id: string;
  courseId: 'part-1' | 'part-2' | 'part-3';
  afterLessonId: number;
  coins: number;
  title: Record<Language, string>;
}

export interface ShopAvatar {
  id: string;
  emoji: string;
  price: number;
  name: Record<Language, string>;
}

export const PATH_CHESTS: PathChest[] = [
  {
    id: 'chest-p1-03', courseId: 'part-1', afterLessonId: 3, coins: 25,
    title: { ru: 'Сундук путешественника', pl: 'Skrzynka podróżnika', en: 'Traveler Chest' },
  },
  {
    id: 'chest-p1-09', courseId: 'part-1', afterLessonId: 9, coins: 30,
    title: { ru: 'Сундук гурмана', pl: 'Skrzynka smakosza', en: 'Foodie Chest' },
  },
  {
    id: 'chest-p1-14', courseId: 'part-1', afterLessonId: 14, coins: 35,
    title: { ru: 'Краковский сундук', pl: 'Skrzynka krakowska', en: 'Kraków Chest' },
  },
  {
    id: 'chest-p1-19', courseId: 'part-1', afterLessonId: 19, coins: 40,
    title: { ru: 'Домашний сундук', pl: 'Skrzynka domowa', en: 'Home Chest' },
  },
  {
    id: 'chest-p1-24', courseId: 'part-1', afterLessonId: 24, coins: 50,
    title: { ru: 'Золотой сундук A1', pl: 'Złota skrzynka A1', en: 'Gold A1 Chest' },
  },
  {
    id: 'chest-p2-29', courseId: 'part-2', afterLessonId: 29, coins: 35,
    title: { ru: 'Кино-сундук', pl: 'Skrzynka kinomana', en: 'Cinema Chest' },
  },
  {
    id: 'chest-p2-34', courseId: 'part-2', afterLessonId: 34, coins: 40,
    title: { ru: 'Сундук корней', pl: 'Skrzynka korzeni', en: 'Roots Chest' },
  },
  {
    id: 'chest-p2-39', courseId: 'part-2', afterLessonId: 39, coins: 45,
    title: { ru: 'Сундук поддержки', pl: 'Skrzynka wsparcia', en: 'Support Chest' },
  },
  {
    id: 'chest-p2-45', courseId: 'part-2', afterLessonId: 45, coins: 60,
    title: { ru: 'Золотой сундук B1', pl: 'Złota skrzynka B1', en: 'Gold B1 Chest' },
  },
  {
    id: 'chest-p3-52', courseId: 'part-3', afterLessonId: 52, coins: 45,
    title: { ru: 'Сундук красноречия', pl: 'Skrzynka krasomówcy', en: 'Eloquence Chest' },
  },
  {
    id: 'chest-p3-58', courseId: 'part-3', afterLessonId: 58, coins: 50,
    title: { ru: 'Финансовый сундук', pl: 'Skrzynka skarbca', en: 'Treasury Chest' },
  },
  {
    id: 'chest-p3-63', courseId: 'part-3', afterLessonId: 63, coins: 55,
    title: { ru: 'Сундук репортёра', pl: 'Skrzynka reportera', en: 'Reporter Chest' },
  },
  {
    id: 'chest-p3-68', courseId: 'part-3', afterLessonId: 68, coins: 70,
    title: { ru: 'Сундук культуры', pl: 'Skrzynka kultury', en: 'Culture Chest' },
  },
];

export const SHOP_AVATARS: ShopAvatar[] = [
  { id: 'pierogi', emoji: '🥟', price: 40, name: { ru: 'Пьероги', pl: 'Pierogi', en: 'Pierogi' } },
  { id: 'eagle', emoji: '🦅', price: 50, name: { ru: 'Белый орёл', pl: 'Orzeł Biały', en: 'White Eagle' } },
  { id: 'owl', emoji: '🦉', price: 50, name: { ru: 'Мудрая сова', pl: 'Mądra sowa', en: 'Wise Owl' } },
  { id: 'tram', emoji: '🚋', price: 60, name: { ru: 'Краковский трамвай', pl: 'Tramwaj', en: 'City Tram' } },
  { id: 'coffee', emoji: '☕', price: 60, name: { ru: 'Утренний кофе', pl: 'Poranna kawa', en: 'Morning Coffee' } },
  { id: 'fox', emoji: '🦊', price: 70, name: { ru: 'Хитрый лис', pl: 'Sprytny lis', en: 'Clever Fox' } },
  { id: 'dragon', emoji: '🐉', price: 80, name: { ru: 'Вавельский дракон', pl: 'Smok Wawelski', en: 'Wawel Dragon' } },
  { id: 'crown', emoji: '👑', price: 100, name: { ru: 'Корона мастера', pl: 'Korona mistrza', en: 'Master Crown' } },
];

export function getChestAfterLesson(courseId: string, lessonId: number): PathChest | null {
  return PATH_CHESTS.find((chest) => chest.courseId === courseId && chest.afterLessonId === lessonId) ?? null;
}

export function getAvatarEmoji(avatarId: string | null | undefined): string | null {
  if (!avatarId) return null;
  return SHOP_AVATARS.find((item) => item.id === avatarId)?.emoji ?? null;
}
