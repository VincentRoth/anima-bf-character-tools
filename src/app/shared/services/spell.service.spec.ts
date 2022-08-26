import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MagicPath, MagicPathStatus } from '../models';
import { SpellService } from './spell.service';

describe('SpellService', () => {
  let service: SpellService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpellService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request only once the spells data', () => {
    // Two consecutive calls should lead to only one HTTP request
    service.get().subscribe({
      next: (magichPaths) => {
        expect(magichPaths.length).toEqual(1);
        expect(magichPaths[0].name).toEqual('Magic Path');
      }
    });

    service.get().subscribe({
      next: (magichPaths) => {
        expect(magichPaths.length).toEqual(1);
        expect(magichPaths[0].name).toEqual('Magic Path');
      }
    });

    const req = httpMock.expectOne('./assets/data/spells.json');
    expect(req.request.method).toEqual('GET');
    req.flush([
      {
        name: 'Magic Path',
        oppositePaths: ['Other Path', 'Another Path'],
        status: MagicPathStatus.MAJOR,
        description: 'description',
        spells: []
      }
    ] as MagicPath[]);

    httpMock.verify();
  });
});
