import { TestBed } from '@angular/core/testing';

import { CabelloService } from './cabello.service';

describe('CabelloService', () => {
  let service: CabelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
