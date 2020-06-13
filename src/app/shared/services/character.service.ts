import { Injectable } from '@angular/core';
import { constant } from '../constant';
import { Advantage, AdvantageReference, Character, UnknownAdvantage } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: Character;

  constructor() {
    this.loadCharacter();
  }

  addAdvantage(advantage: UnknownAdvantage, creationPoints: number): void {
    // To avoid any duplicate, remove existing advantage sith same name
    this.removeAdvantage(advantage.id);

    const advantageRef: AdvantageReference = { id: advantage.id, creationPoints };

    if ((advantage as Advantage).costs) {
      // It is an Advantage
      this.character.advantages.push(advantageRef);
      this.character.creationPoints -= creationPoints;
    } else {
      // It is a Disadvantage
      this.character.disadvantages.push(advantageRef);
      this.character.creationPoints += creationPoints;
    }
    this.saveCharacter();
  }

  addRefTable(tableReference: string): void {
    if (this.character.refTables.indexOf(tableReference) === -1) {
      this.character.refTables.push(tableReference);
      this.saveCharacter();
    }
  }

  changeClass(className: string): void {
    this.character.className = className;
    this.saveCharacter();
  }

  changeLevel(level: number): void {
    this.character.level = level;
    this.saveCharacter();
  }

  changeRace(raceName: string): void {
    this.character.raceName = raceName;
    this.saveCharacter();
  }

  clearCharacter(): void {
    this.initCharacter();
    this.saveCharacter();
  }

  get(): Character {
    return this.character;
  }

  hasAdvantage(advantageId: number, creationPoints?: number): boolean {
    const advantage = this.character.advantages.find((a) => a.id === advantageId);
    const disadvantage = this.character.disadvantages.find((d) => d.id === advantageId);

    return !!(
      (advantage && (!creationPoints || advantage.creationPoints === creationPoints)) ||
      (disadvantage && (!creationPoints || disadvantage.creationPoints === creationPoints))
    );
  }

  hasRefTable(tableReference: string): boolean {
    return this.character.refTables.indexOf(tableReference) !== -1;
  }

  removeAdvantage(advantageId: number): void {
    const advantage = this.character.advantages.find((a) => a.id === advantageId);
    if (advantage) {
      this.character.advantages.splice(this.character.advantages.indexOf(advantage), 1);
      this.character.creationPoints += advantage.creationPoints;
    }

    const disadvantage = this.character.disadvantages.find((d) => d.id === advantageId);
    if (disadvantage) {
      this.character.disadvantages.splice(this.character.disadvantages.indexOf(disadvantage), 1);
      this.character.creationPoints -= disadvantage.creationPoints;
    }

    this.saveCharacter();
  }

  removeRefTable(tableReference: string): void {
    this.character.refTables.splice(this.character.refTables.indexOf(tableReference), 1);
    this.saveCharacter();
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
    const savedCharacter = JSON.parse(localStorage.getItem(constant.localCharacterKey));
    if (!savedCharacter) {
      this.initCharacter();
      this.saveCharacter();
    } else {
      this.character = savedCharacter as Character;
      if (this.character.advantages.some((a) => !a.id) || this.character.disadvantages.some((a) => !a.id)) {
        this.character.advantages = this.character.advantages.filter((a) => a.id);
        this.character.disadvantages = this.character.disadvantages.filter((a) => a.id);
        this.saveCharacter();
      }
    }
  }

  private saveCharacter(): void {
    localStorage.setItem(constant.localCharacterKey, JSON.stringify(this.character));
  }
}
