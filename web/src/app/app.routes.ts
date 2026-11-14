import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { authGuard } from './services/auth.service';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent, title: 'Konto · Polski' },
  { path: '', component: DashboardComponent, canActivate: [authGuard], title: 'Polski · Twoja ścieżka' },
  { path: 'learn/:lessonId', component: LessonComponent, canActivate: [authGuard], title: 'Lekcja · Polski' },
  { path: '**', redirectTo: '' },
];
