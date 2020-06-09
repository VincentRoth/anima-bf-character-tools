import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '../models';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {
  get forbiddenPaths(): string {
    if (this.spell.forbiddenPaths.length) {
      return this.spell.forbiddenPaths.join(', ');
    }
    return 'Aucune';
  }

  get maintenance(): string {
    if (this.spell.castingLevels && this.spell.castingLevels.some((castingLevel) => castingLevel.maintenance > 0)) {
      return this.spell.castingLevels
        .reduce((maintenances, castingLevel) => maintenances.concat(castingLevel.maintenance), [])
        .join(' / ');
    }
    return this.spell.specialMaintenance || 'Non';
  }
  open: boolean;
  @Input() spell: Spell;

  constructor() {}

  getLevel(): string | number {
    if (this.isFreeAccessSpell()) {
      return `${this.spell.level - 9}-${this.spell.level}`;
    }
    return this.spell.level;
  }

  getTitle(): string {
    if (this.isFreeAccessSpell()) {
      return this.spell.name;
    }
    const defaultName = "Sort d'Accès Libre";
    return `${this.spell.level}. ${this.spell.name || defaultName}`;
  }

  isFreeAccessSpell(): boolean {
    return !!this.spell.forbiddenPaths;
  }

  isSecondaryPathLevel(): boolean {
    return this.spell.level % 10 === 4;
  }

  ngOnInit(): void {
    this.open = false;
  }

  toggleOpen(): void {
    this.open = !this.open;
  }
}
