import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';

import { constant } from '../shared/constant';
import { Advantage, Character, Disadvantage } from '../shared/models';
import { AdvantageService, CharacterService, ReferenceTableService } from '../shared/services';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  advantages: Advantage[];
  character: Character;
  disadvantages: Disadvantage[];
  nbMaximumDisadvantages: number;
  tables: object;

  constructor(
    private characterService: CharacterService,
    private referenceTableService: ReferenceTableService,
    private advantageService: AdvantageService
  ) {}

  ngOnInit(): void {
    this.nbMaximumDisadvantages = constant.maximumDisadvantages;
    this.character = this.characterService.get();
    this.tables = [];
    this.character.refTables.forEach((reference) =>
      this.referenceTableService.getByReference(reference).subscribe({
        next: (table) => (this.tables[reference] = table)
      })
    );
    forkJoin(this.character.advantages.map((advantageRef) => this.advantageService.getById(advantageRef.id))).subscribe(
      {
        next: (advantages: Advantage[]) => {
          this.advantages = advantages;
        }
      }
    );
    forkJoin(
      this.character.disadvantages.map((advantageRef) => this.advantageService.getById(advantageRef.id))
    ).subscribe({
      next: (disadvantages: Disadvantage[]) => {
        this.disadvantages = disadvantages;
      }
    });
  }
}
