import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeroesService } from './heroes.service';
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
  heroes: Hero[] = [];
  heroesServices = inject(HeroesService);

  constructor() {
    this.heroesServices.findAllHeroes().then((response) => {
      this.heroes = response;
    });
  }
}
