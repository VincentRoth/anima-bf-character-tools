import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReferenceTableContainer } from '../models/';
import { ReferenceTableService } from './reference-table.service';

describe('ReferenceTableService', () => {
  let service: ReferenceTableService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ReferenceTableService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request only once the tables data', () => {
    service.getByReference('core-exxet#1').subscribe({ next: (table) => expect(table.id).toEqual(1) });

    service.getByReference('core-exxet#2').subscribe({ next: (table) => expect(table.id).toEqual(2) });

    const req = httpMock.expectOne('./assets/data/tables.json');
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
