import { TestBed } from '@angular/core/testing';

import { WhmcsService } from './whmcs.service';

describe('WhmcsService', () => {
  let service: WhmcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhmcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
