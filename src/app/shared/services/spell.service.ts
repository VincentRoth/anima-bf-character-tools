import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  MagicPath,
  MagicPathStatus,
  SpellCastingLevel
} from 'src/app/shared/models';
import { copyJson } from 'src/app/shared/utils';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private magicPaths: MagicPath[];

  constructor(private http: HttpClient) {}

  get(): Observable<MagicPath[]> {
    return this.http.get<MagicPath[]>('/assets/data/spells.json').pipe(
      map(data =>
        data.map(magicPath => {
          if (
            magicPath.status === MagicPathStatus.MAJOR ||
            magicPath.status === MagicPathStatus.MINOR
          ) {
            // link non forbidden secondary paths to primary paths
            magicPath.permittedPaths = data
              .filter(
                secondaryPath =>
                  secondaryPath.status === MagicPathStatus.SECONDARY &&
                  secondaryPath.forbiddenPaths.indexOf(magicPath.name) === -1
              )
              .reduce(
                (paths, secondaryPath) => paths.concat(secondaryPath.name),
                []
              );
            magicPath.permittedPaths.sort();
          }
          return magicPath;
        })
      ),
      tap(data => (this.magicPaths = copyJson(data)))
    );
  }

  filterByToken(filter: string): MagicPath[] {
    if (!filter) {
      return copyJson(this.magicPaths);
    }
    const tokens = filter.toLocaleLowerCase().split(' ');
    return copyJson(this.magicPaths).filter((magicPath: MagicPath) => {
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
