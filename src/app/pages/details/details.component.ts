import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../pages/heroes/models/hero';
import { HeroesService } from '../heroes/heroes.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  hero!: Hero;
  route: ActivatedRoute = inject(ActivatedRoute);
  heroesService = inject(HeroesService);
  router: Router;
  id = -1;

  constructor(router: Router) {
    this.router = router;
    this.id = Number(this.route.snapshot.params['id']);
    this.heroesService.getById(this.id).then((response) => {
      this.hero = response;
    });
  }
}
