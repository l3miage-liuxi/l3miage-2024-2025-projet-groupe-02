import { Routes } from '@angular/router';
import {MiseEnPageComponent} from './mise-en-page/mise-en-page.component';
import {LoginComponent} from './loginComponent/login.component';
import {MapComponent} from './map/map.component';

export const routes: Routes = [{ path: 'home', component: MiseEnPageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'map', component: MapComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'}];
