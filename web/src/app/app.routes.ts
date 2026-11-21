import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PublicHomeComponent } from './pages/public-home/public-home.component';
import { authGuard } from './services/auth.service';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent, title: 'Konto · Polski' },
  { path: 'test', loadComponent: () => import('./pages/placement-test/placement-test.component').then((m) => m.PlacementTestComponent), title: 'Test poziomujący · Polski' },
  { path: '', component: PublicHomeComponent, title: 'Kurs języka polskiego online A1–A2 · polski.' },
  { path: 'course/:courseId', component: DashboardComponent, canActivate: [authGuard], title: 'Kurs · Polski' },
  { path: 'course-test/:testId', loadComponent: () => import('./pages/checkpoint-test/checkpoint-test.component').then((m) => m.CheckpointTestComponent), canActivate: [authGuard], title: 'Test kontrolny · Polski' },
  { path: 'feedback', loadComponent: () => import('./pages/feedback/feedback.component').then((m) => m.FeedbackComponent), canActivate: [authGuard], title: 'Opinie · Polski' },
  { path: 'learn/:lessonId', loadComponent: () => import('./pages/lesson/lesson.component').then((m) => m.LessonComponent), canActivate: [authGuard], title: 'Lekcja · Polski' },
  { path: '**', redirectTo: '' },
];
