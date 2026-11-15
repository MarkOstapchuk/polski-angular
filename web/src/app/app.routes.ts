import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './services/auth.service';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent, title: 'Konto · Polski' },
  { path: '', component: DashboardComponent, canActivate: [authGuard], title: 'Polski · Twoja ścieżka' },
  { path: 'learn/:lessonId', loadComponent: () => import('./pages/lesson/lesson.component').then((m) => m.LessonComponent), canActivate: [authGuard], title: 'Lekcja · Polski' },
  { path: '**', redirectTo: '' },
];
