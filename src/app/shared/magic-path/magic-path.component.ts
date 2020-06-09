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

  isFreeAccess(): boolean {
    return this.magicPath.status === MagicPathStatus.FREE;
  }

  getFreeAccessSpellLevels(): number[] {
    return FREE_ACCESS_LEVEL;
  }

  getFreeAccessSpellLevel(level: number): string {
    return `${level - 9}-${level}`;
  }

  getSpellsByLevel(level: number): Spell[] {
    return this.magicPath.spells.filter((spell) => spell.level === level);
  }
}
