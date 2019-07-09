import { TestBed } from '@angular/core/testing';

import { ReferenceTableService } from './reference-table.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReferenceTableService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: ReferenceTableService = TestBed.get(ReferenceTableService);
    expect(service).toBeTruthy();
  });
});
