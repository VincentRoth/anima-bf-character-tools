import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import cloneDeep from 'lodash-es/cloneDeep';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Advantage, Disadvantage, UnknownAdvantage } from '../models';
import { AdvantagesSearchParams } from '../search/advantages-search.params';
import { AbstractQueryOnceService } from './abstract-query-once.service';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService extends AbstractQueryOnceService<UnknownAdvantage[], AdvantagesSearchParams> {
  constructor(http: HttpClient) {
    super(http, './assets/data/advantages.json');
  }

  filter(params: AdvantagesSearchParams): Observable<UnknownAdvantage[]> {
    return this.get().pipe(
      map((data) => {
        if (!Object.values(params).some(Boolean)) {
          return data;
        }

        let filteredAdvantages = data;

        if (params.type) {
          filteredAdvantages = filteredAdvantages.filter((advantage) => advantage.types.includes(params.type));
        }

        if (params.q) {
          const tokens = this.splitSearchToken(params);
          filteredAdvantages = filteredAdvantages.filter((advantage) =>
            tokens.reduce((isSelected: boolean, token: string) => {
              return (
                isSelected &&
                (advantage.name.toLocaleLowerCase().includes(token) ||
                  advantage.description.toLocaleLowerCase().includes(token) ||
                  advantage.effect.toLocaleLowerCase().includes(token) ||
                  (advantage.condition && advantage.condition.toLocaleLowerCase().includes(token)) ||
                  (advantage.special && advantage.special.toLocaleLowerCase().includes(token)) ||
                  ((advantage as Advantage).costs &&
                    (advantage as Advantage).costs.some((cost) => cost.toString() === token)) ||
                  ((advantage as Disadvantage).benefits &&
                    (advantage as Disadvantage).benefits.some((benefit) => benefit.toString() === token)) ||
                  (advantage.note && advantage.note.toLocaleLowerCase().includes(token)) ||
                  advantage.source.toLocaleLowerCase().includes(token) ||
                  advantage.types.some((type: string) => type.toLocaleLowerCase().includes(token)))
              );
            }, true)
          );
        }
        return filteredAdvantages;
      })
    );
  }

  getById(id: number): Observable<UnknownAdvantage> {
    const transform = (data: UnknownAdvantage[]): UnknownAdvantage =>
      cloneDeep(data.find((advantage: UnknownAdvantage) => advantage.id === id));
    if (!this.data) {
      return this.get().pipe(map(transform));
    }
    return of(transform(this.data));
  }

  getTypes(): object {
    const types = {};
    this.data.forEach((a) => {
      a.types.forEach((type) => (types[type] ? types[type]++ : (types[type] = 1)));
    });
    return types;
  }

  sort(a1: UnknownAdvantage, a2: UnknownAdvantage): number {
    if ((a1 as Advantage).costs && (a2 as Disadvantage).benefits) {
      return -1;
    }
    if ((a1 as Disadvantage).benefits && (a2 as Advantage).costs) {
      return 1;
    }
    return a1.name.localeCompare(a2.name);
  }
}
