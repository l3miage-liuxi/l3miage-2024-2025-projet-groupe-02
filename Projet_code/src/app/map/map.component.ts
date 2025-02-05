import { Component } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import {latLng, tileLayer} from 'leaflet';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-map',
  imports: [LeafletModule,FormsModule],
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
}
