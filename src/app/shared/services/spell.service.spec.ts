import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
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
});
