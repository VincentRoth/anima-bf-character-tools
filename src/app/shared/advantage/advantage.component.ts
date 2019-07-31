import { Component, OnInit, Input } from '@angular/core';
import { UnknownAdvantage } from 'src/app/advantages/advantage.model';
import { CharacterService } from '../character/character.service';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {
  @Input() advantage: UnknownAdvantage;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {}

  characterHasAdvantage(creationPoints: number): boolean {
    return this.characterService.hasAdvantage(
      this.advantage.name,
      creationPoints
    );
  }

  toggleAdvantage(creationPoints: number) {
    if (this.characterHasAdvantage(creationPoints)) {
      this.characterService.removeAdvantage(this.advantage.name);
    } else {
      this.characterService.addAdvantage(this.advantage, creationPoints);
    }
  }
}
