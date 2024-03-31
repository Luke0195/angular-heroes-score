import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../pages/heroes/models/hero';
import { HeroesService } from '../heroes/heroes.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  hero: Hero = { id: 0, name: '' };
  route: ActivatedRoute = inject(ActivatedRoute);
  heroesService = inject(HeroesService);
  detailsService = inject(DetailsService);
  router: Router;
  id = -1;

  form = new FormGroup({
    name: new FormControl({ value: '', disabled: false }),
  });

  constructor(router: Router) {
    this.router = router;
    this.id = Number(this.route.snapshot.params['id']);
    this.heroesService.getById(this.id).then((response) => {
      this.hero = response;
    });
  }

  async submitForm(id: number) {
    await this.detailsService.updateData(id, this.form.value.name ?? '');
  }
}
