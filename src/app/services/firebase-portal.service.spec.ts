import { TestBed, inject } from '@angular/core/testing';

import { FirebasePortalService } from './firebase-portal.service';

describe('FirebasePortalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebasePortalService]
    });
  });

  it('should be created', inject([FirebasePortalService], (service: FirebasePortalService) => {
    expect(service).toBeTruthy();
  }));
});
