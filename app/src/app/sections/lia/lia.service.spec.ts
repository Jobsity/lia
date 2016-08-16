import { addProviders, inject } from '@angular/core/testing';
import { LiaService } from './lia.service';

describe('Lia Service', () => {
  beforeEach(() => {
    addProviders([LiaService]);
  });

  it('should ...',
      inject([LiaService], (service: LiaService) => {
    expect(service).toBeTruthy();
  }));
});
