import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthGuardService } from './auth.guard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
