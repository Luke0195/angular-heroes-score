import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private baseUrl: string = 'http://localhost:8080';

  constructor() {}

  async updateData(id: number, name: string): Promise<void> {
    const requestConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name: name }),
    };

    await fetch(`${this.baseUrl}/data/${id}`, requestConfig).then(
      (response) => response
    );
  }
}
