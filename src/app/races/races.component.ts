import { Component, OnInit } from '@angular/core';
import { ContentPanel } from '../shared/panel/content.model';
import { RaceService } from './race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  races: ContentPanel[];

  constructor(private raceService: RaceService) {}

  ngOnInit() {
    this.raceService.get().subscribe(races => (this.races = races));
  }
}
