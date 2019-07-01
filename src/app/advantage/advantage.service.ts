import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advantage } from './advantage.model';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService {
  constructor(private http: HttpClient) {}

  get(): Observable<Advantage[]> {
    return this.http.get<Advantage[]>('/assets/data/advantages.json');
  }

  filter(advantage: Advantage, tokens: string[]) {
    return tokens.reduce(
      (isSelected: boolean, token: string) =>
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
          advantage.cost.toString().includes(token.toLocaleLowerCase()) ||
          (advantage.note &&
            advantage.note
              .toLocaleLowerCase()
              .includes(token.toLocaleLowerCase())) ||
          advantage.source
            .toLocaleLowerCase()
            .includes(token.toLocaleLowerCase()) ||
          advantage.types.filter((type: string) =>
            type.toLocaleLowerCase().includes(token.toLocaleLowerCase())
          ).length > 0),
      true
    );
  }
}
