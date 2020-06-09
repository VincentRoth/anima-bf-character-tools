import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreationHelpService } from './creation-help.service';

describe('CreationHelpService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: CreationHelpService = TestBed.inject(CreationHelpService);
    expect(service).toBeTruthy();
  });
});
