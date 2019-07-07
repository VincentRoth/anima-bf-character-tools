import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advantage } from './advantage.model';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService {
  private types: object;

  constructor(private http: HttpClient) {}

  get(): Observable<Advantage[]> {
    return this.http.get<Advantage[]>('/assets/data/advantages.json');
  }

  getTypes(advantages: Advantage[]): object {
    const types = {};
    advantages.forEach(a => {
      a.types.forEach(type =>
        types[type] ? types[type]++ : (types[type] = 1)
      );
    });
    return types;
  }

  filterByType(advantages: Advantage[], typeFilter: string) {
    return advantages.filter(
      advantage =>
        advantage.types.filter((type: string) => type === typeFilter).length > 0
    );
  }

  filterByToken(advantages: Advantage[], search: string) {
    const tokens = search.toLocaleLowerCase().split(' ');
    return advantages.filter(advantage =>
      tokens.reduce((isSelected: boolean, token: string) => {
        return (
          isSelected &&
          (advantage.name.toLocaleLowerCase().includes(token) ||
            advantage.description.toLocaleLowerCase().includes(token) ||
            advantage.effect.toLocaleLowerCase().includes(token) ||
            (advantage.condition &&
              advantage.condition.toLocaleLowerCase().includes(token)) ||
            (advantage.special &&
              advantage.special.toLocaleLowerCase().includes(token)) ||
            (advantage.costs &&
              advantage.costs.filter(cost => cost.toString() === token)
                .length) ||
            (advantage.benefits &&
              advantage.benefits.filter(benefit => benefit.toString() === token)
                .length) ||
            (advantage.note &&
              advantage.note.toLocaleLowerCase().includes(token)) ||
            advantage.source.toLocaleLowerCase().includes(token) ||
            advantage.types.filter((type: string) =>
              type.toLocaleLowerCase().includes(token)
            ).length > 0)
        );
      }, true)
    );
  }

  sort(a1: Advantage, a2: Advantage) {
    if (a1.costs && !a2.costs) {
      return -1;
    }
    if (!a1.costs && a2.costs) {
      return 1;
    }
    // TODO sort costs first
    return a1.name.localeCompare(a2.name);
  }
}
