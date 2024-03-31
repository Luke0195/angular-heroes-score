import { Component, inject, Input } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../pages/heroes/models/hero';

type RouteData = {
  hero: Hero;
};
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  hero: Hero;
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router;
  id = -1;

  constructor(router: Router) {
    this.router = router;
    this.id = Number(this.route.snapshot.params['id']);
    const { hero } = router.getCurrentNavigation()?.extras.state as RouteData;
    this.hero = hero;
    console.log(this.hero);
  }
}
