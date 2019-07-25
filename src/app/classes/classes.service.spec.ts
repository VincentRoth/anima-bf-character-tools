import { TestBed } from '@angular/core/testing';

import { ClassesService } from './classes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClassesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: ClassesService = TestBed.get(ClassesService);
    expect(service).toBeTruthy();
  });
});
