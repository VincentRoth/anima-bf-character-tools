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

  constructor() {}

  ngOnInit() {
    this.open = false;
  }

  get name() {
    return this.spell.name || 'Sort d\'Accès Libre';
  }

  get maintenance() {
    if (
      this.spell.castingLevels &&
      this.spell.castingLevels.some(
        castingLevel => castingLevel.maintenance > 0
      )
    ) {
      return this.spell.castingLevels
        .reduce(
          (maintenances, castingLevel) =>
            maintenances.concat(castingLevel.maintenance),
          []
        )
        .join(' / ');
    }
    return 'Aucun';
  }

  isSecondaryPathLevel(): boolean {
    return this.spell.level % 10 === 4;
  }

  toggleOpen() {
    this.open = !this.open;
  }
}
