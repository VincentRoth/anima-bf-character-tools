import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayImageFullScreen() {
    window.location.pathname = '/assets/images/map/gaia_2.jpg';
  }
}
