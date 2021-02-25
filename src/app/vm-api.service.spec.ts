import { TestBed } from '@angular/core/testing';

import { VmApiService } from './vm-api.service';

describe('VmApiService', () => {
  let service: VmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
