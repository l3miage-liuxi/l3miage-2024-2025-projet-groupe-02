import { Component,inject } from '@angular/core';
import{Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  private router = inject(Router);

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
