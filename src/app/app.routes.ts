import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'heroes',
        component: DashboardComponent,
        title: 'heroes',
      },
    ],
  },
];
