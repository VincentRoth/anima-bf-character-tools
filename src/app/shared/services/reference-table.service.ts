import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import cloneDeep from 'lodash-es/cloneDeep';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ReferenceBook, referenceBooks, ReferenceTable, ReferenceTableContainer } from '../models';
import { SearchParams } from '../search/search.params';
import { AbstractQueryOnceService } from './abstract-query-once.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceTableService extends AbstractQueryOnceService<ReferenceTableContainer, SearchParams> {
  get books(): ReferenceBook[] {
    return referenceBooks;
  }
  constructor(http: HttpClient) {
    super(http, './assets/data/tables.json');
  }

  filter(params: SearchParams): Observable<ReferenceTableContainer> {
    return this.get().pipe(
      map((data) => {
        if (!Object.values(params).some(Boolean)) {
          return data;
        }

        const filteredData = data;
        const tokens = this.splitSearchToken(params);
        this.books.forEach((book) => {
          filteredData[book.reference] = filteredData[book.reference].filter((table: ReferenceTable) =>
            tokens.reduce((isSelected: boolean, token: string) => {
              return (
                isSelected &&
                (table.id.toString().toLocaleLowerCase().includes(token) ||
                  table.title.toLocaleLowerCase().includes(token) ||
                  table.headers.some((header) => header.toLocaleLowerCase().replace('\n', ' ').includes(token)) ||
                  table.rows.some((row) =>
                    row.some((cell) => cell.toString().toLocaleLowerCase().replace('\n', ' ').includes(token))
                  ))
              );
            }, true)
          );
        });
        return filteredData;
      })
    );
  }

  getByReference(reference: string): Observable<ReferenceTable> {
    const splitRef = reference.split('#');
    const bookProperty = splitRef[0];
    const tableId = splitRef[1];
    const transform = (data: ReferenceTableContainer): ReferenceTable =>
      cloneDeep(data[bookProperty].filter((table: ReferenceTable) => table.id.toString() === tableId)[0]);
    if (!this.data) {
      return this.get().pipe(map(transform));
    }
    return of(transform(this.data));
  }
}
