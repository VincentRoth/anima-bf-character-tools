import { inject, TestBed } from '@angular/core/testing';

import { RollService } from './roll.service';

describe('RollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RollService = TestBed.get(RollService);
    expect(service).toBeTruthy();
  });

  it('roll10 should roll between 1 and 10', inject(
    [RollService],
    (service: RollService) => {
      for (let i = 0; i < 100; i++) {
        const roll = service.roll10();
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(10);
      }
    }
  ));

  it('roll100 should roll between 1 and 100', inject(
    [RollService],
    (service: RollService) => {
      for (let i = 0; i < 1000; i++) {
        const roll = service.roll100();
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(100);
      }
    }
  ));
});
