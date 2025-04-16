import { TestBed } from '@angular/core/testing';

import { AuthItGuard } from './auth-it.guard';

describe('AuthItGuard', () => {
  let guard: AuthItGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthItGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
