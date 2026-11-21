import { Injectable, NgZone, inject } from '@angular/core';
import posthog from 'posthog-js';
import { POSTHOG_ENV } from './posthog.env.generated';
import { supabase } from './supabase.client';

export interface AnalyticsPayload {
  lessonId?: number;
  activityId?: string;
  courseId?: string;
  metadata?: Record<string, unknown>;
  /** Mirror to Supabase `analytics_events` when authenticated (defaults to true for core learning events). */
  persistToSupabase?: boolean;
}

const SUPABASE_MIRRORED_EVENTS = new Set([
  'dashboard_opened',
  'lesson_opened',
  'first_input',
  'check_clicked',
  'lesson_completed',
  'lesson_abandoned',
]);

/**
 * Product analytics service sending events, session replays, and user identification to PostHog,
 * while keeping authenticated learning funnel events mirrored to Supabase `analytics_events`.
 * Never throws or blocks user interactions if analytics is unavailable or unconfigured.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly ngZone = inject(NgZone);
  private readonly sentOnceKeys = new Set<string>();
  private initialized = false;
  private identifiedUserId: string | null = null;

  init(initialLocale?: string): void {
    if (this.initialized || typeof window === 'undefined') return;
    if (!POSTHOG_ENV.key || !POSTHOG_ENV.host) return;

    this.initialized = true;
    const isStandalonePwa = window.matchMedia?.('(display-mode: standalone)').matches
      || ('standalone' in window.navigator && Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone));

    this.ngZone.runOutsideAngular(() => {
      posthog.init(POSTHOG_ENV.key, {
        api_host: POSTHOG_ENV.host,
        defaults: '2026-08-30',
        capture_pageview: 'history_change',
        capture_pageleave: true,
        autocapture: true,
        capture_dead_clicks: true,
        capture_exceptions: true,
        person_profiles: 'identified_only',
        session_recording: {
          maskAllInputs: false,
          maskInputOptions: {
            password: true,
            email: true,
          },
        },
      });
      posthog.register({
        app_surface: 'angular_app',
        is_standalone_pwa: isStandalonePwa,
        ...(initialLocale ? { ui_locale: initialLocale } : {}),
      });
    });
  }

  setLocale(locale: string): void {
    if (!this.initialized) return;
    this.ngZone.runOutsideAngular(() => {
      posthog.register({ ui_locale: locale });
      if (this.identifiedUserId) {
        posthog.setPersonProperties({ ui_locale: locale });
      }
    });
  }

  identify(userId: string, properties: Record<string, unknown> = {}): void {
    const cleanProps = Object.fromEntries(Object.entries(properties).filter(([, value]) => value !== undefined));
    const isNewIdentity = this.identifiedUserId !== userId;
    this.identifiedUserId = userId;
    if (!this.initialized) return;

    this.ngZone.runOutsideAngular(() => {
      if (isNewIdentity) {
        posthog.identify(userId, cleanProps);
      } else if (Object.keys(cleanProps).length > 0) {
        posthog.setPersonProperties(cleanProps);
      }
    });
  }

  updatePersonProperties(properties: Record<string, unknown>): void {
    if (!this.initialized || !this.identifiedUserId) return;
    const cleanProps = Object.fromEntries(Object.entries(properties).filter(([, value]) => value !== undefined));
    if (Object.keys(cleanProps).length === 0) return;

    this.ngZone.runOutsideAngular(() => {
      posthog.setPersonProperties(cleanProps);
    });
  }

  reset(): void {
    this.identifiedUserId = null;
    this.sentOnceKeys.clear();
    if (!this.initialized) return;

    this.ngZone.runOutsideAngular(() => {
      posthog.reset();
    });
  }

  track(eventName: string, payload: AnalyticsPayload = {}): void {
    const properties: Record<string, unknown> = {
      ...(payload.metadata ?? {}),
    };
    if (payload.lessonId !== undefined) properties['lesson_id'] = payload.lessonId;
    if (payload.activityId !== undefined) properties['activity_id'] = payload.activityId;
    if (payload.courseId !== undefined) properties['course_id'] = payload.courseId;

    if (this.initialized) {
      this.ngZone.runOutsideAngular(() => {
        try {
          posthog.capture(eventName, properties);
        } catch {
          // Never interrupt UI interactions if analytics fails.
        }
      });
    }

    const shouldMirror = payload.persistToSupabase ?? SUPABASE_MIRRORED_EVENTS.has(eventName);
    if (shouldMirror && this.identifiedUserId) {
      void supabase
        .from('analytics_events')
        .insert({
          event_name: eventName,
          lesson_id: payload.lessonId ?? null,
          activity_id: payload.activityId ?? null,
          course_id: payload.courseId ?? null,
          metadata: payload.metadata ?? {},
        })
        .then(undefined, () => undefined);
    }
  }

  trackOnce(dedupeKey: string, eventName: string, payload: AnalyticsPayload = {}): void {
    if (this.sentOnceKeys.has(dedupeKey)) return;
    this.sentOnceKeys.add(dedupeKey);
    this.track(eventName, payload);
  }
}
