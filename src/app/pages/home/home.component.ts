import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
