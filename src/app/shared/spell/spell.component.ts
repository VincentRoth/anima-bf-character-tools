import { Component, Input, OnInit } from '@angular/core';
import { FreeAccessSpell, MainSpell, Spell } from '../models';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {
  @Input() spell: Spell;

  constructor() {}

  ngOnInit() {}

  get name() {
    return (this.spell as MainSpell).name || 'Sort d\'Accès Libre';
  }

  get maintenance() {
    const spell = this.spell as MainSpell;
    if (
      spell.castingLevels &&
      spell.castingLevels.some(castingLevel => castingLevel.maintenance > 0)
    ) {
      return spell.castingLevels
        .reduce((maintenances, castingLevel) => {
          maintenances.push(castingLevel.maintenance);
          return maintenances;
        }, [])
        .join(' / ');
    }
    return 'Aucun';
  }
}
