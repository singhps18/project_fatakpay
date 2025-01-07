import { TestBed } from '@angular/core/testing';

import { TableinfintyService } from './tableinfinty.service';

describe('TableinfintyService', () => {
  let service: TableinfintyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableinfintyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
