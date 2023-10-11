import { TestBed } from '@angular/core/testing';

import { SharedControlsService } from './shared-controls.service';

describe('SharedControlsService', () => {
  let service: SharedControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
