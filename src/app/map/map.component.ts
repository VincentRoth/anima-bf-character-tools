import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  constructor() {}

  displayImageFullScreen(): void {
    window.location.pathname = '/assets/images/map/gaia_2.jpg';
  }
}
