import { TestBed } from '@angular/core/testing';

import { CandidateDataServiceService } from './candidate-data-service.service';

describe('CandidateDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateDataServiceService = TestBed.get(CandidateDataServiceService);
    expect(service).toBeTruthy();
  });
});
