import { Component, OnInit } from '@angular/core';
import { constant } from 'src/app/shared/constant';
import { Character } from 'src/app/shared/models';
import { CharacterService, ReferenceTableService } from 'src/app/shared/services';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  character: Character;
  private tables: object;
  nbMaximumDisadvantages: number;

  constructor(private characterService: CharacterService, private referenceTableService: ReferenceTableService) {}

  ngOnInit(): void {
    this.nbMaximumDisadvantages = constant.maximumDisadvantages;
    this.character = this.characterService.get();
    this.tables = [];
    this.character.refTables.forEach((reference) =>
      this.referenceTableService.getByReference(reference).subscribe({
        next: (table) => (this.tables[reference] = table)
      })
    );
  }
}
