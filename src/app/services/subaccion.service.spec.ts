import { TestBed } from '@angular/core/testing';

import { SubaccionService } from './subaccion.service';

describe('SubaccionService', () => {
  let service: SubaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
