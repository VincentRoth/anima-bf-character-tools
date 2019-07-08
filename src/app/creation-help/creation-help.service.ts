import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentPanel } from './content.model';

@Injectable({
  providedIn: 'root'
})
export class CreationHelpService {
  constructor(private http: HttpClient) {}

  get(): Observable<ContentPanel[]> {
    return this.http.get<ContentPanel[]>('/assets/data/creation-help.json');
  }
}
