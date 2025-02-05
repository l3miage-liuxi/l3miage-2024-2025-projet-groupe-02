import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mise-en-page',
  imports: [],
  templateUrl: './mise-en-page.component.html',
  styleUrl: './mise-en-page.component.css'
})
export class MiseEnPageComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
