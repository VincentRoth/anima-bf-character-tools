import { Component, OnInit } from '@angular/core';
import { ContentPanel } from 'src/app/shared/models';
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
    this.raceService.get().subscribe(data => {
      this.races = data;
      this.races.sort((r1, r2) => r1.title.localeCompare(r2.title));
    });
  }
}
