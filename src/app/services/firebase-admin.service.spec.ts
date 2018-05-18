import { TestBed, inject } from '@angular/core/testing';

import { FirebaseAdminService } from './firebase-admin.service';

describe('FirebaseAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseAdminService]
    });
  });

  it('should be created', inject([FirebaseAdminService], (service: FirebaseAdminService) => {
    expect(service).toBeTruthy();
  }));
});
