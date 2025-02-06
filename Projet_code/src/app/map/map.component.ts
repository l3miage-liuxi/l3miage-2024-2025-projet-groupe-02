import { Component,signal } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import {latLng, tileLayer} from 'leaflet';
import {FormsModule} from '@angular/forms';
import {NavComponent} from '../nav/nav.component';
import {EncodingComponent} from '../encoding/encoding.component';


@Component({
  selector: 'app-map',
  imports: [LeafletModule,FormsModule,NavComponent,EncodingComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(46.879966, -121.726909)
  };
  addresses = signal([
    '22 Rue Abbé Grégoire, 38000 Grenoble',
    '20 Rue Henri Barbusse, 38600 Fontaine',
    '17 Rue de la Liberté, 38600 Fontaine'
  ]);
}
