import { Injectable } from '@angular/core';
import { Hero } from '../heroes/models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = 'http://localhost:3000';

  constructor() {}

  async findAllHeroes(): Promise<Hero[]> {
    const response = await fetch(`${this.baseUrl}/data`).then((data) =>
      data.json()
    );
    return response || [];
  }

  async getTopHeroes(): Promise<Hero[]> {
    const result = await this.findAllHeroes();
    return result.splice(0, 4) || [];
  }
}
