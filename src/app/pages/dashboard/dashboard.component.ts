import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  //eslint-disable-next-line
  @Output() eventData: EventEmitter<any> = new EventEmitter();

  //eslint-disable-next-line
  activeRoute(value: any) {
    console.log('Value', value);
  }
}
