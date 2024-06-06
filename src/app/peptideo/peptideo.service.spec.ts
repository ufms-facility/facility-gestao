import { TestBed } from '@angular/core/testing';

import { PeptideoService } from './peptideo.service';

describe('PeptideoService', () => {
  let service: PeptideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeptideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
