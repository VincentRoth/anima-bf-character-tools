import { HttpClient } from '@angular/common/http';
import cloneDeep from 'lodash-es/cloneDeep';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class AbstractQueryOnceService<T> {
  protected data: T;
  protected request: Subject<T>;

  constructor(private http: HttpClient, protected url: string) {
    this.request = new Subject<T>();

    this.http.get<T>(url).subscribe({
      next: (data) => {
        this.data = this.transformData(data);
        this.request.next(data);
        this.request.complete();
      }
    });
  }

  get(): Observable<T> {
    if (!this.data) {
      return this.getData().pipe(map(cloneDeep));
    }
    return of(cloneDeep(this.data));
  }

  protected transformData(data: T): T {
    return data;
  }

  private getData(): Observable<T> {
    return this.request.asObservable();
  }
}
