import { TestBed } from '@angular/core/testing';

import { Startservice } from './startservice';

describe('Startservice', () => {
  let service: Startservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Startservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
