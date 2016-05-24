import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LiaService } from './lia.service';

describe('Lia Service', () => {
  beforeEachProviders(() => [LiaService]);

  it('should ...',
      inject([LiaService], (service: LiaService) => {
    expect(service).toBeTruthy();
  }));
});
