import { HeroesService } from './../heroes/heroes.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Hero } from '../heroes/models/hero';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  topHeroes: Hero[] = [];
  HeroesService = inject(HeroesService);

  constructor() {
    this.HeroesService.getTopHeroes().then((response) => {
      this.topHeroes = response;
    });
  }
}
