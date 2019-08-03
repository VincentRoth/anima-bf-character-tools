import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  FreeAccessSpell,
  MagicPath,
  MainSpell,
  Spell,
  SpellCastingLevel
} from 'src/app/shared/models';
import { copy } from 'src/app/shared/utils';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private magicPaths: MagicPath[];

  constructor(private http: HttpClient) {}

  get(): Observable<MagicPath[]> {
    return this.http
      .get<MagicPath[]>('/assets/data/spells.json')
      .pipe(map(data => (this.magicPaths = copy(data))));
  }

  filterByToken(filter: string): MagicPath[] {
    if (!filter) {
      return copy(this.magicPaths);
    }
    const tokens = filter.toLocaleLowerCase().split(' ');
    return copy(this.magicPaths).filter((magicPath: MagicPath) => {
      magicPath.spells = magicPath.spells.filter(
        spell =>
          !(spell as FreeAccessSpell).isFreeAccess &&
          tokens.reduce((isSelected: boolean, token: string) => {
            const mainSpell = spell as MainSpell;
            return (
              isSelected &&
              (mainSpell.name.toLocaleLowerCase().includes(token) ||
                mainSpell.level.toString().includes(token) ||
                mainSpell.action.toLocaleLowerCase().includes(token) ||
                mainSpell.types.some(type =>
                  type.toLocaleLowerCase().includes(token)
                ) ||
                mainSpell.effect.toLocaleLowerCase().includes(token) ||
                mainSpell.castingLevels.some(
                  (castingLevel: SpellCastingLevel) =>
                    castingLevel.effect.toLocaleLowerCase().includes(token) ||
                    castingLevel.maintenance.toString().includes(token) ||
                    castingLevel.requiredIntelligence
                      .toString()
                      .includes(token) ||
                    castingLevel.zeon.toString().includes(token)
                ))
            );
          }, true)
      );
      return !!magicPath.spells.length;
    });
  }
}
