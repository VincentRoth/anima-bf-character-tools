import { TestBed } from '@angular/core/testing';

import { CreationHelpService } from './creation-help.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreationHelpService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: CreationHelpService = TestBed.get(CreationHelpService);
    expect(service).toBeTruthy();
  });
});
