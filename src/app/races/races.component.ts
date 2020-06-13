import { Component, OnInit } from '@angular/core';
import { ContentPanel } from '../shared/models';
import { RaceService } from '../shared/services';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  races: ContentPanel[];

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.raceService.get().subscribe({
      next: (data) => {
        this.races = data;
        this.races.sort((r1, r2) => r1.title.localeCompare(r2.title));
      }
    });
  }
}
