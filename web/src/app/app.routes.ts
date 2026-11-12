import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LessonComponent } from './pages/lesson/lesson.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'Polski · Twoja ścieżka' },
  { path: 'learn/:lessonId', component: LessonComponent, title: 'Lekcja · Polski' },
  { path: '**', redirectTo: '' },
];
