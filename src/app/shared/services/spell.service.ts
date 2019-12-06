import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import {
  MagicPath,
  MagicPathStatus,
  SpellCastingLevel,
  SpellType
} from 'src/app/shared/models';
import { AbstractQueryOnceService } from './abstract-query-once.service';

@Injectable({
  providedIn: 'root'
})
export class SpellService extends AbstractQueryOnceService<MagicPath[]> {
  constructor(http: HttpClient) {
    super(http, '/assets/data/spells.json');
  }

  protected transformData(data: MagicPath[]): MagicPath[] {
    return data.map(magicPath => {
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
    });
  }

  filterByTokenAndType(filter: string, type: SpellType): MagicPath[] {
    let filteredPaths = cloneDeep(this.data);
    if (!filter && !type) {
      return filteredPaths;
    }
    if (type) {
      filteredPaths = filteredPaths
        .map((magicPath: MagicPath) => {
          magicPath.spells = magicPath.spells.filter(
            spell =>
              !spell.isFreeAccess &&
              spell.types.some(spellType => spellType.startsWith(type))
          );
          return magicPath;
        })
        .filter((magicPath: MagicPath) => magicPath.spells.length);
    }
    if (filter) {
      const tokens = filter.toLocaleLowerCase().split(' ');
      filteredPaths = filteredPaths
        .map((magicPath: MagicPath) => {
          magicPath.spells = magicPath.spells.filter(
            spell =>
              !spell.isFreeAccess &&
              tokens.reduce((isSelected: boolean, token: string) => {
                return (
                  isSelected &&
                  (spell.name.toLocaleLowerCase().includes(token) ||
                    spell.level.toString().includes(token) ||
                    spell.action.toLocaleLowerCase().includes(token) ||
                    spell.types.some(spellType =>
                      spellType.toLocaleLowerCase().includes(token)
                    ) ||
                    spell.effect.toLocaleLowerCase().includes(token) ||
                    spell.castingLevels.some(
                      (castingLevel: SpellCastingLevel) =>
                        castingLevel.effect
                          .toLocaleLowerCase()
                          .includes(token) ||
                        castingLevel.maintenance.toString().includes(token) ||
                        castingLevel.requiredIntelligence
                          .toString()
                          .includes(token) ||
                        castingLevel.zeon.toString().includes(token)
                    ) ||
                    (spell.specialMaintenance &&
                      spell.specialMaintenance
                        .toLocaleLowerCase()
                        .includes(token)) ||
                    (spell.isDailyMaintenance &&
                      'Quotidien'.toLocaleLowerCase().includes(token)) ||
                    (spell.note &&
                      spell.note.toLocaleLowerCase().includes(token)))
                );
              }, true)
          );
          return magicPath;
        })
        .filter((magicPath: MagicPath) => magicPath.spells.length);
    }
    return filteredPaths;
  }
}
