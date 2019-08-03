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
import { copy } from 'src/app/shared/utils';

@Injectable({
  providedIn: 'root'
})
export class ReferenceTableService {
  private refTables: ReferenceTableContainer;
  private request: Subject<ReferenceTableContainer>;

  constructor(private http: HttpClient) {
    this.request = new Subject<ReferenceTableContainer>();

    this.http
      .get<ReferenceTableContainer>('/assets/data/tables.json')
      .subscribe({
        next: data => {
          this.refTables = data;
          this.request.next(data);
          this.request.complete();
        }
      });
  }

  private get(): Observable<ReferenceTableContainer> {
    return this.request.asObservable();
  }

  get books(): ReferenceBook[] {
    return referenceBooks;
  }

  get referenceTables(): Observable<ReferenceTableContainer> {
    if (!this.refTables) {
      return this.get().pipe(map(copy));
    }
    return of(copy(this.refTables));
  }

  getByReference(reference: string): Observable<ReferenceTable> {
    const splitRef = reference.split('#');
    const bookProperty = splitRef[0];
    const tableId = splitRef[1];
    const transform = (data: ReferenceTableContainer) =>
      data[bookProperty].filter(
        (table: ReferenceTable) => table.id.toString() === tableId
      )[0];
    if (!this.refTables) {
      return this.get().pipe(map(transform));
    }
    return of(transform(this.refTables));
  }

  filterByToken(filter: string): Observable<ReferenceTableContainer> {
    const tokens = filter.toLocaleLowerCase().split(' ');
    return this.referenceTables.pipe(
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
