import { TestBed } from '@angular/core/testing';

import { RaceService } from './race.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RaceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: RaceService = TestBed.get(RaceService);
    expect(service).toBeTruthy();
  });
});
