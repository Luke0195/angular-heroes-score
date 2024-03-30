import { Component, Input } from '@angular/core';

import { Hero } from './models/hero';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  @Input() hero!: Hero;
}
