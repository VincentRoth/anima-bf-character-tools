import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export interface AnalyticsData {
  kind: 'app-launch';
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private url = 'https://www.vincentroth.fr/analytics';

  constructor(private http: HttpClient) {}

  send(params: AnalyticsData): Observable<void> {
    return this.http.post<void>(this.url, { params });
  }
}
