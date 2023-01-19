import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PsychicDiscipline } from '../models/psychic.model';
import { PsychicDisciplineService } from './psychic-discipline.service';

describe('PsychicDisciplineService', () => {
  let service: PsychicDisciplineService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PsychicDisciplineService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request only once the psychic data', () => {
    // Two consecutive calls should lead to only one HTTP request
    service.get().subscribe({
      next: (disciplines) => {
        expect(disciplines.length).toEqual(1);
        expect(disciplines[0].name).toEqual('Psychic Discipline');
      }
    });

    service.get().subscribe({
      next: (disciplines) => {
        expect(disciplines.length).toEqual(1);
        expect(disciplines[0].name).toEqual('Psychic Discipline');
      }
    });

    const req = httpMock.expectOne('/assets/data/psychic-disciplines.json');
    expect(req.request.method).toEqual('GET');
    req.flush([
      {
        name: 'Psychic Discipline',
        description: 'description',
        powers: []
      }
    ] as PsychicDiscipline[]);

    httpMock.verify();
  });
});
