import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Hero } from '../../pages/heroes/models/hero';
import { HeaderComponent } from '../../components/header';
import { DashboardComponent } from '../dashboard';
import { HeroesComponent } from '../heroes';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterOutlet,
    RouterModule,
    DashboardComponent,
    HeroesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Dr Nice',
    },
    {
      id: 2,
      name: 'Bombasto',
    },
    {
      id: 3,
      name: 'Celeritas',
    },
    {
      id: 4,
      name: 'Magneta',
    },
    {
      id: 5,
      name: 'RubberMan',
    },
    {
      id: 6,
      name: 'Dynama',
    },
  ];
}
