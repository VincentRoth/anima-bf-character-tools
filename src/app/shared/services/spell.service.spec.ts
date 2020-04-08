import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { MagicPath, MagicPathStatus } from 'src/app/shared/models';
import { SpellService } from './spell.service';

describe('SpellService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: SpellService = TestBed.get(SpellService);
    expect(service).toBeTruthy();
  });

  it('should request only once the spells data', () => {
    const service: SpellService = TestBed.get(SpellService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    // Two consecutive calls should lead to only one HTTP request
    service.get().subscribe({
      next: magichPaths => {
        expect(magichPaths.length).toEqual(1);
        expect(magichPaths[0].name).toEqual('Magic Path');
      }
    });

    service.get().subscribe({
      next: magichPaths => {
        expect(magichPaths.length).toEqual(1);
        expect(magichPaths[0].name).toEqual('Magic Path');
      }
    });

    const req = httpMock.expectOne('/assets/data/spells.json');
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
