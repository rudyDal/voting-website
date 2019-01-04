import { TestBed } from '@angular/core/testing';

import { VoterDataServiceService } from './voter-data-service.service';

describe('VoterDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoterDataServiceService = TestBed.get(VoterDataServiceService);
    expect(service).toBeTruthy();
  });
});
