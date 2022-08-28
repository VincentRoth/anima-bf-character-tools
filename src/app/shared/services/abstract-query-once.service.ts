import { HttpClient } from '@angular/common/http';
import cloneDeep from 'lodash-es/cloneDeep';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

class ReplaySubjectWithValue<T> extends ReplaySubject<T> {
  value: T;

  next(value?: T): void {
    this.value = value;
    super.next(value);
  }
}

export abstract class AbstractQueryOnceService<T> {
  protected data$: ReplaySubjectWithValue<T> = new ReplaySubjectWithValue<T>();
  private dataSubscription: Subscription;

  protected get data(): T {
    return this.data$.value;
  }

  constructor(private http: HttpClient, private url: string) {}

  get(): Observable<T> {
    if (this.data === undefined && !this.dataSubscription) {
      this.fetchData();
    }
    return this.data$.asObservable().pipe(map(cloneDeep));
  }

  protected fetchData(): void {
    this.dataSubscription = this.http.get<T>(this.url).subscribe((data) => {
      this.data$.next(this.transformData(data));
      this.data$.complete();
    });
  }

  protected transformData(data: T): T {
    return data;
  }
}
