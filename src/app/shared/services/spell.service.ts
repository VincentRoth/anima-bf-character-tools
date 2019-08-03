import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MagicPath, SpellCastingLevel } from 'src/app/shared/models';
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
          !spell.isFreeAccess &&
          tokens.reduce((isSelected: boolean, token: string) => {
            return (
              isSelected &&
              (spell.name.toLocaleLowerCase().includes(token) ||
                spell.level.toString().includes(token) ||
                spell.action.toLocaleLowerCase().includes(token) ||
                spell.types.some(type =>
                  type.toLocaleLowerCase().includes(token)
                ) ||
                spell.effect.toLocaleLowerCase().includes(token) ||
                spell.castingLevels.some(
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
