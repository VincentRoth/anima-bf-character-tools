import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MagicPath } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  constructor(private http: HttpClient) {}

  get(): Observable<MagicPath[]> {
    return this.http.get<MagicPath[]>('/assets/data/spells.json');
  }
}
