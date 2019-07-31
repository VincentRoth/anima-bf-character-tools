import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/character/character.service';
import { Character } from '../shared/character/character.model';
import { ReferenceTableService } from '../shared/reference-table/reference-table.service';
import { ReferenceTable } from '../shared/reference-table/reference-table.model';
import { constant } from '../shared/constant';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  character: Character;
  private tables: object;
  nbMaximumDisadvantages: number;

  constructor(
    private characterService: CharacterService,
    private referenceTableService: ReferenceTableService
  ) {}

  ngOnInit() {
    this.nbMaximumDisadvantages = constant.maximumDisadvantages;
    this.character = this.characterService.get();
    this.tables = [];
    this.character.refTables.forEach(reference =>
      this.referenceTableService.getByReference(reference).subscribe({
        next: table => (this.tables[reference] = table)
      })
    );
  }
}
