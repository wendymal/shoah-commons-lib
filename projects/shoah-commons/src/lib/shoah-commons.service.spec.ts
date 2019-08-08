import { TestBed } from '@angular/core/testing';

import { ShoahCommonsService } from './shoah-commons.service';

describe('ShoahCommonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoahCommonsService = TestBed.get(ShoahCommonsService);
    expect(service).toBeTruthy();
  });
});
