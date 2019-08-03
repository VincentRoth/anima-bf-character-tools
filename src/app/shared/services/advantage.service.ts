import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Advantage,
  Disadvantage,
  UnknownAdvantage
} from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService {
  constructor(private http: HttpClient) {}

  get(): Observable<UnknownAdvantage[]> {
    return this.http.get<UnknownAdvantage[]>('/assets/data/advantages.json');
  }

  getTypes(advantages: UnknownAdvantage[]): object {
    const types = {};
    advantages.forEach(a => {
      a.types.forEach(type =>
        types[type] ? types[type]++ : (types[type] = 1)
      );
    });
    return types;
  }

  filterByType(advantages: UnknownAdvantage[], typeFilter: string) {
    return advantages.filter(
      advantage =>
        advantage.types.filter((type: string) => type === typeFilter).length > 0
    );
  }

  filterByToken(advantages: UnknownAdvantage[], search: string) {
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
            ((advantage as Advantage).costs &&
              (advantage as Advantage).costs.some(
                cost => cost.toString() === token
              )) ||
            ((advantage as Disadvantage).benefits &&
              (advantage as Disadvantage).benefits.some(
                benefit => benefit.toString() === token
              )) ||
            (advantage.note &&
              advantage.note.toLocaleLowerCase().includes(token)) ||
            advantage.source.toLocaleLowerCase().includes(token) ||
            advantage.types.some((type: string) =>
              type.toLocaleLowerCase().includes(token)
            ))
        );
      }, true)
    );
  }

  sort(a1: UnknownAdvantage, a2: UnknownAdvantage) {
    if ((a1 as Advantage).costs && (a2 as Disadvantage).benefits) {
      return -1;
    }
    if ((a1 as Disadvantage).benefits && (a2 as Advantage).costs) {
      return 1;
    }
    return a1.name.localeCompare(a2.name);
  }
}
