import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ReferenceBook,
  referenceBooks,
  ReferenceTable,
  ReferenceTableContainer
} from 'src/app/shared/models';
import { copyJson } from 'src/app/shared/utils';
import { AbstractQueryOnceService } from './abstract-query-once.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceTableService extends AbstractQueryOnceService<
  ReferenceTableContainer
> {
  constructor(http: HttpClient) {
    super(http, '/assets/data/tables.json');
  }

  get books(): ReferenceBook[] {
    return referenceBooks;
  }

  getByReference(reference: string): Observable<ReferenceTable> {
    const splitRef = reference.split('#');
    const bookProperty = splitRef[0];
    const tableId = splitRef[1];
    const transform = (data: ReferenceTableContainer) =>
      copyJson(
        data[bookProperty].filter(
          (table: ReferenceTable) => table.id.toString() === tableId
        )[0]
      );
    if (!this.data) {
      return this.get().pipe(map(transform));
    }
    return of(transform(this.data));
  }

  filterByToken(filter: string): Observable<ReferenceTableContainer> {
    const tokens = filter.toLocaleLowerCase().split(' ');
    return this.get().pipe(
      map(data => {
        this.books.forEach(book => {
          data[book.reference] = data[book.reference].filter(
            (table: ReferenceTable) =>
              tokens.reduce((isSelected: boolean, token: string) => {
                return (
                  isSelected &&
                  (table.id
                    .toString()
                    .toLocaleLowerCase()
                    .includes(token) ||
                    table.title.toLocaleLowerCase().includes(token) ||
                    table.headers.some(header =>
                      header.toLocaleLowerCase().includes(token)
                    ) ||
                    table.rows.some(row =>
                      row.some(cell =>
                        cell
                          .toString()
                          .toLocaleLowerCase()
                          .includes(token)
                      )
                    ))
                );
              }, true)
          );
        });
        return data;
      })
    );
  }
}
