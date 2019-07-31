import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  ReferenceTableContainer,
  ReferenceTable
} from './reference-table.model';

const copy = data => JSON.parse(JSON.stringify(data));

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
        }
      });
  }

  private get(): Observable<ReferenceTableContainer> {
    return this.request.asObservable();
  }

  get referenceTables() {
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
}
