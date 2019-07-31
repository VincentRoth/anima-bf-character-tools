import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/character/character.service';
import { Character } from '../shared/character/character.model';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
  private character: Character;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.character = this.characterService.get();
  }
}
