import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { copyJson } from 'src/app/shared/utils';

export abstract class AbstractQueryOnceService<T> {
  protected data: T;
  protected request: Subject<T>;

  constructor(private http: HttpClient, protected url: string) {
    this.request = new Subject<T>();

    this.http.get<T>(url).subscribe({
      next: data => {
        this.data = this.transformData(data);
        this.request.next(data);
        this.request.complete();
      }
    });
  }

  protected transformData(data: T): T {
    return data;
  }

  private getData(): Observable<T> {
    return this.request.asObservable();
  }

  get(): Observable<T> {
    if (!this.data) {
      return this.getData().pipe(map(copyJson));
    }
    return of(copyJson(this.data));
  }
}
