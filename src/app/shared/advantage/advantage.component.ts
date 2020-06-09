import { Component, Input } from '@angular/core';
import { Advantage, Disadvantage } from '../models';
import { CharacterService } from '../services';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {
  @Input() advantage: Advantage | Disadvantage;

  get costs(): number[] {
    return (this.advantage as Advantage).costs;
  }

  get benefits(): number[] {
    return (this.advantage as Disadvantage).benefits;
  }

  constructor(private characterService: CharacterService) {}

  characterHasAdvantage(creationPoints: number): boolean {
    return this.characterService.hasAdvantage(this.advantage.id, creationPoints);
  }

  toggleAdvantage(creationPoints: number): void {
    if (this.characterHasAdvantage(creationPoints)) {
      this.characterService.removeAdvantage(this.advantage.id);
    } else {
      this.characterService.addAdvantage(this.advantage, creationPoints);
    }
  }
}
