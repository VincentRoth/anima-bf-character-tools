import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdvantageService } from './advantage.service';

describe('AdvantageService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: AdvantageService = TestBed.inject(AdvantageService);
    expect(service).toBeTruthy();
  });
});
