import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Advantage } from './advantage.model';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService {
  constructor(private http: HttpClient) {}

  get(): Observable<Advantage[]> {
    return this.http.get<Advantage[]>('/assets/data/advantages.json').pipe(
      tap(data => {
        console.log(
          data
            .map(a => a.types)
            .reduce(
              (aTypes: string[], types: string[]) =>
                aTypes.concat(
                  types.filter(type => aTypes.indexOf(type) === -1)
                ),
              []
            )
            .sort()
        );
      })
    );
  }

  filter(advantage: Advantage, tokens: string[]) {
    return tokens.reduce((isSelected: boolean, token: string) => {
      return (
        isSelected &&
        (advantage.name
          .toLocaleLowerCase()
          .includes(token.toLocaleLowerCase()) ||
          advantage.description
            .toLocaleLowerCase()
            .includes(token.toLocaleLowerCase()) ||
          advantage.effect
            .toLocaleLowerCase()
            .includes(token.toLocaleLowerCase()) ||
          (advantage.condition &&
            advantage.condition
              .toLocaleLowerCase()
              .includes(token.toLocaleLowerCase())) ||
          (advantage.special &&
            advantage.special
              .toLocaleLowerCase()
              .includes(token.toLocaleLowerCase())) ||
          (advantage.costs &&
            advantage.costs.filter(cost => cost.toString() === token).length) ||
          (advantage.benefits &&
            advantage.benefits.filter(benefit => benefit.toString() === token)
              .length) ||
          (advantage.note &&
            advantage.note
              .toLocaleLowerCase()
              .includes(token.toLocaleLowerCase())) ||
          advantage.source
            .toLocaleLowerCase()
            .includes(token.toLocaleLowerCase()) ||
          advantage.types.filter((type: string) =>
            type.toLocaleLowerCase().includes(token.toLocaleLowerCase())
          ).length > 0)
      );
    }, true);
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
