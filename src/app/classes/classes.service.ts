import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassModel } from './class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  constructor(private http: HttpClient) {}

  get(): Observable<ClassModel[]> {
    return this.http.get<ClassModel[]>('/assets/data/classes.json');
  }
}
