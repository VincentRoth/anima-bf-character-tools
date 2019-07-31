import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { constant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: Character;

  constructor() {
    this.loadCharacter();
  }

  private loadCharacter() {
    this.character = JSON.parse(
      localStorage.getItem(constant.localCharacterKey)
    );
  }

  private saveCharacter() {
    localStorage.setItem(
      constant.localCharacterKey,
      JSON.stringify(this.character)
    );
  }
}
