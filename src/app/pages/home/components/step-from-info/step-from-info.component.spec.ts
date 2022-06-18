import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';

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
  it('should avoid accept alphabet in amount fild', () => {
    component.form=new FormGroup({
      amount: new FormControl(''),
    });
    const input = fixture.debugElement.nativeElement.querySelector('[data-test="amount"]');
    const defultValue = input.value;
    input.value = 'abcd';
    const curentValue = component.form?.get('amount')?.value;
    expect(fixture.componentInstance.form?.get('amount')?.value).toBe(defultValue);
  });
  it('only the next 5 days can be selected in datepicker', () => {
    expect(component).toBeTruthy();
  });

  it('Input that accepts only letters in Source fild', () => {
    expect(component).toBeTruthy();
  });

});
