import { Component, OnInit, Input } from '@angular/core';
import { Advantage, Disadvantage } from 'src/app/advantages/advantage.model';
import { CharacterService } from '../character/character.service';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {
  @Input() advantage: Advantage | Disadvantage;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {}

  get costs() {
    return (this.advantage as Advantage).costs;
  }

  get benefits() {
    return (this.advantage as Disadvantage).benefits;
  }

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