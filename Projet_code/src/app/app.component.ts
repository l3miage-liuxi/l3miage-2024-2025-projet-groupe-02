import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{MiseEnPageComponent} from './mise-en-page/mise-en-page.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MiseEnPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projet_code';
}
