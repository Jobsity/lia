import { addProviders, inject } from '@angular/core/testing';
import { AuthService } from './auth.service.ts';

describe('Auth Service', () => {
  beforeEach(() => {
    addProviders([AuthService]);
  });

  it('should ...',
      inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
