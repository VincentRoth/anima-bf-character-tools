import { Component, Input, OnInit } from '@angular/core';
import { Spell } from 'src/app/shared/models';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {
  @Input() spell: Spell;
  open: boolean;

  get maintenance(): string {
    if (this.spell.castingLevels && this.spell.castingLevels.some((castingLevel) => castingLevel.maintenance > 0)) {
      return this.spell.castingLevels
        .reduce((maintenances, castingLevel) => maintenances.concat(castingLevel.maintenance), [])
        .join(' / ');
    }
    return this.spell.specialMaintenance || 'Non';
  }

  get forbiddenPaths(): string {
    if (this.spell.forbiddenPaths.length) {
      return this.spell.forbiddenPaths.join(', ');
    }
    return 'Aucune';
  }

  constructor() {}

  ngOnInit(): void {
    this.open = false;
  }

  isFreeAccessSpell(): boolean {
    return !!this.spell.forbiddenPaths;
  }

  getTitle(): string {
    if (this.isFreeAccessSpell()) {
      return this.spell.name;
    }
    return `${this.spell.level}. ${this.spell.name || 'Sort d\'Accès Libre'}`;
  }

  getLevel(): string | number {
    if (this.isFreeAccessSpell()) {
      return `${this.spell.level - 9}-${this.spell.level}`;
    }
    return this.spell.level;
  }

  isSecondaryPathLevel(): boolean {
    return this.spell.level % 10 === 4;
  }

  toggleOpen(): void {
    this.open = !this.open;
  }
}
