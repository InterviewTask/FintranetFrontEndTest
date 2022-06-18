import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StepperFormHandlerService } from './services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  activeIndex!:number;
  subscription: Subscription[]=[];
  form!:FormGroup;
  stepsModel = [
    { label: 'Upload Image' },
    { label: 'Form' },
    { label: 'Table' },
    { label: 'Confirmation' }
  ]
  constructor(
    private stepperFormHandler: StepperFormHandlerService,
    private fb:FormBuilder
  )
  { }
  createForm(){
    this.form = this.fb.group({
      image:[null,[]],
      amount:[null,[Validators.pattern(/^[0-9]*$/)]],
      date :[null,[Validators.required]],
      status :[null,[Validators.required]],
      SourceOfFund:[null,[Validators.required]],
      user:[null,[]],
    })
  }
  getSteperFormActiveIndex(){
    return this.stepperFormHandler.activeIndex.subscribe((index:number)=>{
      this.activeIndex=index;
    })
  }
  ngOnDestroy(): void {
    this.subscription.forEach(sub=>sub.unsubscribe())
  }
  ngOnInit(): void {
    this.subscription.push(this.getSteperFormActiveIndex())
    this.createForm();
  }
  nextStep(){
    this.stepperFormHandler.next();
  }
  PreveiousStep(){
    this.stepperFormHandler.pevious();
  }

}
