import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ClassesService } from './classes.service';

describe('ClassesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: ClassesService = TestBed.inject(ClassesService);
    expect(service).toBeTruthy();
  });
});
