import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ReferenceTableContainer } from 'src/app/shared/models/';
import { ReferenceTableService } from './reference-table.service';

describe('ReferenceTableService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: ReferenceTableService = TestBed.get(ReferenceTableService);
    expect(service).toBeTruthy();
  });

  it('should request only once the tables data', () => {
    const service: ReferenceTableService = TestBed.get(ReferenceTableService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    service
      .getByReference('core-exxet#1')
      .subscribe({ next: table => expect(table.id).toEqual(1) });

    service
      .getByReference('core-exxet#2')
      .subscribe({ next: table => expect(table.id).toEqual(2) });

    const req = httpMock.expectOne('/assets/data/tables.json');
    expect(req.request.method).toEqual('GET');
    req.flush({
      'core-exxet': [
        {
          id: 1,
          title: 'tab1',
          headers: [],
          rows: []
        },
        {
          id: 2,
          title: 'tab1',
          headers: [],
          rows: []
        }
      ],
      'kit-mj': [],
      'dominus-exxet': [],
      'arcana-exxet': [],
      'prometheum-exxet': [],
      'gaia-1': [],
      'gaia-2': [],
      cqmpn: []
    } as ReferenceTableContainer);
    httpMock.verify();
  });
});
