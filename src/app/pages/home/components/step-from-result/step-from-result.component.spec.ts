import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFromResultComponent } from './step-from-result.component';

describe('StepFromResultComponent', () => {
  let component: StepFromResultComponent;
  let fixture: ComponentFixture<StepFromResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFromResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFromResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
