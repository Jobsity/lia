import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AuthService } from './auth.service';

xdescribe('Auth Service', () => {
  beforeEachProviders(() => [AuthService]);

  it('should ...',
      inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
