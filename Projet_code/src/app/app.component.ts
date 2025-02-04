import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponentComponent} from './loginComponent/loginComponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projet_code';
}
