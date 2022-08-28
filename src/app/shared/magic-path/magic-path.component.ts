import { Component, Input } from '@angular/core';

import { FREE_ACCESS_LEVEL, MagicPath, MagicPathStatus, Spell } from '../models';

@Component({
  selector: 'app-magic-path',
  templateUrl: './magic-path.component.html',
  styleUrls: ['./magic-path.component.scss']
})
export class MagicPathComponent {
  @Input() magicPath: MagicPath;

  constructor() {}

  getFreeAccessSpellLevel(level: number): string {
    return `${level - 9}-${level}`;
  }

  getFreeAccessSpellLevels(): number[] {
    return FREE_ACCESS_LEVEL;
  }

  getSpellsByLevel(level: number): Spell[] {
    return this.magicPath.spells.filter((spell) => spell.level === level);
  }

  isFreeAccess(): boolean {
    return this.magicPath.status === MagicPathStatus.FREE;
  }
}
