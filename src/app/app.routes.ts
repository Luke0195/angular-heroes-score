import { Routes } from '@angular/router';
import {
  HomeComponent,
  DashboardComponent,
  HeroesComponent,
  DetailsComponent,
} from './pages';

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
        component: HeroesComponent,
        title: 'heroes',
      },
    ],
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Atualizar',
  },
];
