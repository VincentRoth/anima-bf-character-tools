import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RaceService } from './race.service';

describe('RaceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: RaceService = TestBed.inject(RaceService);
    expect(service).toBeTruthy();
  });
});
