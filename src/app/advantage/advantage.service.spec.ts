import { TestBed } from '@angular/core/testing';

import { AdvantageService } from './advantage.service';

describe('AdvantageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvantageService = TestBed.get(AdvantageService);
    expect(service).toBeTruthy();
  });
});
