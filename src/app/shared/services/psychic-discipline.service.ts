import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PsychicDiscipline, PsychicPower } from '../models/psychic.model';
import { SearchParams } from '../search/search.params';
import { AbstractQueryOnceService } from './abstract-query-once.service';

@Injectable({
  providedIn: 'root'
})
export class PsychicDisciplineService extends AbstractQueryOnceService<PsychicDiscipline[], SearchParams> {
  constructor(http: HttpClient) {
    super(http, '/assets/data/psychic-disciplines.json');
  }

  filter(params: SearchParams): Observable<PsychicDiscipline[]> {
    return this.get().pipe(
      map((data) => {
        if (!Object.values(params).some(Boolean)) {
          return data;
        }

        const tokens = this.splitSearchToken(params);
        return data
          .map((discipline: PsychicDiscipline) => {
            discipline.powers = discipline.powers.filter((power: PsychicPower) =>
              tokens.reduce((isSelected: boolean, token: string) => {
                return (
                  isSelected &&
                  // no filter on maintenance and level
                  (power.name.toLocaleLowerCase().includes(token) ||
                    power.action.toLocaleLowerCase().includes(token) ||
                    power.description.toLocaleLowerCase().includes(token) ||
                    power.effects.some((effect: string) => effect.toLocaleLowerCase().includes(token)))
                );
              }, true)
            );
            return discipline;
          })
          .filter((discipline: PsychicDiscipline) => discipline.powers.length);
      })
    );
  }
}
