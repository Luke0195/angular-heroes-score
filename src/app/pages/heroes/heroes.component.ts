import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { Hero } from './models/hero';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroesListComponent, CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
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
