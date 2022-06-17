import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFromInfoComponent } from './step-from-info.component';

describe('StepFromInfoComponent', () => {
  let component: StepFromInfoComponent;
  let fixture: ComponentFixture<StepFromInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFromInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFromInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
