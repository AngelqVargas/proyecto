import { TestBed } from '@angular/core/testing';

import { AcrilicoService } from './acrilico.service';

describe('AcrilicoService', () => {
  let service: AcrilicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcrilicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
