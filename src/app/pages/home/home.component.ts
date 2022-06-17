import { Component, OnInit } from '@angular/core';
import { StepperFormHandlerService } from './services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeIndex:number;
  stepsModel = [
    { label: 'Upload Image' },
    { label: 'Form' },
    { label: 'Table' },
    { label: 'Confirmation' }
  ]
  constructor(
    private stepperFormHandler: StepperFormHandlerService
  )
  {
    this.activeIndex=stepperFormHandler.activeIndex
  }

  ngOnInit(): void {
  }

}
