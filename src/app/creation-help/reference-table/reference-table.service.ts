import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ReferenceTableContainer } from './reference-table';

@Injectable({
  providedIn: 'root'
})
export class ReferenceTableService {
  private refTables: ReferenceTableContainer;

  constructor(private http: HttpClient) {}

  private get(): Observable<ReferenceTableContainer> {
    return this.http
      .get<ReferenceTableContainer>('/assets/data/tables.json')
      .pipe(tap(data => (this.refTables = data)));
  }

  getByReference(reference: string) {
    const splitRef = reference.split('#');
    const bookProperty = splitRef[0];
    const tableId = parseInt(splitRef[1], 10);
    if (!this.refTables) {
      return this.get().pipe(
        map(data => data[bookProperty].filter(table => table.id === tableId)[0])
      );
    }
    return of(
      this.refTables[bookProperty].filter(table => table.id === tableId)[0]
    );
  }
}
