import { TestBed } from '@angular/core/testing';

import { StepperFormHandlerService } from './stepper-form-handler.service';

describe('StepperFormHandlerService', () => {
  let service: StepperFormHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepperFormHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
