import { TestBed } from '@angular/core/testing';

import { AdvantageService } from './advantage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdvantageService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: AdvantageService = TestBed.get(AdvantageService);
    expect(service).toBeTruthy();
  });
});
