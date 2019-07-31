import { Injectable } from '@angular/core';
import {
  Character,
  CharacterUnknownAdvantage,
  CharacterAdvantage,
  CharacterDisadvantage
} from './character.model';
import { constant } from '../constant';
import {
  Advantage,
  UnknownAdvantage
} from 'src/app/advantages/advantage.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: Character;

  constructor() {
    this.loadCharacter();
  }

  private initCharacter(): void {
    this.character = {
      raceName: null,
      className: null,
      creationPoints: constant.startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: constant.startingLevel,
      refTables: []
    };
  }

  private loadCharacter(): void {
    const savedCharacter = JSON.parse(
      localStorage.getItem(constant.localCharacterKey)
    );
    if (!savedCharacter) {
      this.initCharacter();
      this.saveCharacter();
    } else {
      this.character = savedCharacter as Character;
    }
  }

  private saveCharacter(): void {
    localStorage.setItem(
      constant.localCharacterKey,
      JSON.stringify(this.character)
    );
  }

  clearCharacter(): void {
    this.initCharacter();
    this.saveCharacter();
  }

  get(): Character {
    return this.character;
  }

  changeRace(raceName: string): void {
    this.character.raceName = raceName;
    this.saveCharacter();
  }

  changeClass(className: string): void {
    this.character.className = className;
    this.saveCharacter();
  }

  addAdvantage(advantage: UnknownAdvantage, creationPoints: number): void {
    // To avoid any duplicate, remove existing advantage sith same name
    // Name should be unique
    this.removeAdvantage(advantage.name);

    const advantageCopy = JSON.parse(
      JSON.stringify(advantage)
    ) as CharacterUnknownAdvantage;
    advantageCopy.creationPoints = creationPoints;
    if ((advantage as Advantage).costs) {
      // It is an Advantage
      this.character.advantages.push(advantageCopy as CharacterAdvantage);
      this.character.creationPoints -= creationPoints;
    } else {
      // It is a Disadvantage
      this.character.disadvantages.push(advantageCopy as CharacterDisadvantage);
      this.character.creationPoints += creationPoints;
    }
    this.saveCharacter();
  }

  removeAdvantage(advantageName: string): void {
    const advantage = this.character.advantages.find(
      a => a.name === advantageName
    );
    if (advantage) {
      this.character.advantages.splice(
        this.character.advantages.indexOf(advantage),
        1
      );
      this.character.creationPoints += advantage.creationPoints;
    }

    const disadvantage = this.character.disadvantages.find(
      d => d.name === advantageName
    );
    if (disadvantage) {
      this.character.disadvantages.splice(
        this.character.disadvantages.indexOf(disadvantage),
        1
      );
      this.character.creationPoints -= disadvantage.creationPoints;
    }

    this.saveCharacter();
  }

  hasAdvantage(advantageName: string, creationPoints?: number): boolean {
    const advantage = this.character.advantages.find(
      a => a.name === advantageName
    );
    const disadvantage = this.character.disadvantages.find(
      d => d.name === advantageName
    );

    return !!(
      (advantage &&
        (!creationPoints || advantage.creationPoints === creationPoints)) ||
      (disadvantage &&
        (!creationPoints || disadvantage.creationPoints === creationPoints))
    );
  }

  changeLevel(level: number): void {
    this.character.level = level;
    this.saveCharacter();
  }

  addRefTable(tableReference: string): void {
    if (this.character.refTables.indexOf(tableReference) === -1) {
      this.character.refTables.push(tableReference);
      this.saveCharacter();
    }
  }

  removeRefTable(tableReference: string): void {
    this.character.refTables.splice(
      this.character.refTables.indexOf(tableReference),
      1
    );
    this.saveCharacter();
  }
}
