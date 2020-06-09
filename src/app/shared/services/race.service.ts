import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentPanel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor(private http: HttpClient) {}

  get(): Observable<ContentPanel[]> {
    return this.http.get<ContentPanel[]>('/assets/data/races.json');
  }
}
