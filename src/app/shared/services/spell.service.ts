import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import { MagicPath, MagicPathStatus, SpellCastingLevel } from '../models';
import { SpellsSearchParams } from '../search-params/spells-search.params';
import { AbstractQueryOnceService } from './abstract-query-once.service';

@Injectable({
  providedIn: 'root'
})
export class SpellService extends AbstractQueryOnceService<MagicPath[]> {
  constructor(http: HttpClient) {
    super(http, './assets/data/spells.json');
  }

  filter(filters: SpellsSearchParams): MagicPath[] {
    let filteredPaths = cloneDeep(this.data);
    if (!Object.values(filters).some(Boolean)) {
      return filteredPaths;
    }
    if (filters.type) {
      filteredPaths = filteredPaths
        .map((magicPath: MagicPath) => {
          magicPath.spells = magicPath.spells.filter(
            (spell) => !spell.isFreeAccess && spell.types.some((spellType) => spellType.startsWith(filters.type))
          );
          return magicPath;
        })
        .filter((magicPath: MagicPath) => magicPath.spells.length);
    }
    if (filters.q) {
      const tokens = filters.q.toLocaleLowerCase().split(' ');
      filteredPaths = filteredPaths
        .map((magicPath: MagicPath) => {
          magicPath.spells = magicPath.spells.filter(
            (spell) =>
              !spell.isFreeAccess &&
              tokens.reduce((isSelected: boolean, token: string) => {
                return (
                  isSelected &&
                  (spell.name.toLocaleLowerCase().includes(token) ||
                    // no filter on level
                    spell.action.toLocaleLowerCase().includes(token) ||
                    // spell types is filter with other input
                    spell.effect.toLocaleLowerCase().includes(token) ||
                    spell.castingLevels.some(
                      (castingLevel: SpellCastingLevel) => castingLevel.effect.toLocaleLowerCase().includes(token)
                      // no filter on zeon, int and maintenance cost
                    ) ||
                    (spell.specialMaintenance && spell.specialMaintenance.toLocaleLowerCase().includes(token)) ||
                    (spell.isDailyMaintenance && 'Quotidien'.toLocaleLowerCase().includes(token)) ||
                    (spell.note && spell.note.toLocaleLowerCase().includes(token)))
                );
              }, true)
          );
          return magicPath;
        })
        .filter((magicPath: MagicPath) => magicPath.spells.length);
    }
    return filteredPaths;
  }

  protected transformData(data: MagicPath[]): MagicPath[] {
    return data.map((magicPath) => {
      if (magicPath.status === MagicPathStatus.MAJOR || magicPath.status === MagicPathStatus.MINOR) {
        // link non forbidden secondary paths to primary paths
        magicPath.permittedPaths = data
          .filter(
            (secondaryPath) =>
              secondaryPath.status === MagicPathStatus.SECONDARY &&
              secondaryPath.forbiddenPaths.indexOf(magicPath.name) === -1
          )
          .reduce((paths, secondaryPath) => paths.concat(secondaryPath.name), []);
        magicPath.permittedPaths.sort();
      }
      return magicPath;
    });
  }
}
