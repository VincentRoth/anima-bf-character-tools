import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Advantage, Disadvantage } from '../models';
import { AdvantageService } from './advantage.service';

describe('AdvantageService', () => {
  let service: AdvantageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(AdvantageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request only once the spells data', () => {
    // Two consecutive calls should lead to only one HTTP request
    service.get().subscribe({
      next: (advantages) => {
        expect(advantages.length).toEqual(2);
        expect(advantages[0].id).toEqual(1);
        expect(advantages[0].name).toEqual('Dump advantage');
        expect(advantages[1].id).toEqual(2);
        expect(advantages[1].name).toEqual('Dump disadvantage');
      }
    });

    service.get().subscribe({
      next: (advantages) => {
        expect(advantages.length).toEqual(2);
        expect(advantages[0].id).toEqual(1);
        expect(advantages[0].name).toEqual('Dump advantage');
        expect(advantages[1].id).toEqual(2);
        expect(advantages[1].name).toEqual('Dump disadvantage');
      }
    });

    const req = httpMock.expectOne('./assets/data/advantages.json');
    expect(req.request.method).toEqual('GET');
    req.flush([
      {
        id: 1,
        name: 'Dump advantage',
        description: 'Dump advantage description',
        effect: 'Dump advantage effect',
        condition: 'Dump advantage conditions',
        note: 'Dump advantage note',
        costs: [1, 2, 3],
        source: 'Core p.18',
        types: ['Avantage de passé', 'Richesse']
      },
      {
        id: 2,
        name: 'Dump disadvantage',
        description: 'Dump disadvantage description',
        effect: 'Dump disadvantage effect',
        condition: 'Dump disadvantage conditions',
        note: 'Dump disadvantage note',
        benefits: [1, 2],
        source: 'Core p.19',
        types: ['Désavantage de passé', 'Test']
      }
    ] as (Advantage | Disadvantage)[]);

    httpMock.verify();
  });
});
