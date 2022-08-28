import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import cloneDeep from 'lodash-es/cloneDeep';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ReferenceBook, referenceBooks, ReferenceTable, ReferenceTableContainer } from '../models';
import { AbstractQueryOnceService } from './abstract-query-once.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceTableService extends AbstractQueryOnceService<ReferenceTableContainer> {
  get books(): ReferenceBook[] {
    return referenceBooks;
  }
  constructor(http: HttpClient) {
    super(http, './assets/data/tables.json');
  }

  filterByToken(filter: string): Observable<ReferenceTableContainer> {
    const tokens = filter.toLocaleLowerCase().split(' ');
    return this.get().pipe(
      map((data) => {
        this.books.forEach((book) => {
          data[book.reference] = data[book.reference].filter((table: ReferenceTable) =>
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
        return data;
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
