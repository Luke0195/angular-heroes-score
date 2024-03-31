import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './heroes-list-component.html',
  styleUrl: './heroes-list.component.scss',
})
export class HeroesListComponent {
  @Input() hero!: Hero;
}
