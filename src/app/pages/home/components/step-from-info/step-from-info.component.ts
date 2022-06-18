import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-from-info',
  templateUrl: './step-from-info.component.html',
  styleUrls: ['./step-from-info.component.scss']
})
export class StepFromInfoComponent implements OnInit {
  @Input() form!: FormGroup
  options =[
   {
    name:'optin1',
    value: '1',
  }
  ,{
    name:'optin2',
    value: '2',
  }
  ,{
    name:'optin3',
    value: '3',
  }
  ,{
    name:'optin4',
    value: '4',
  }
]
  minDay = this.fromToday(1);
  maxDay = this.fromToday(5);

  constructor() { }

  ngOnInit(): void {
  }

  fromToday(day: number) {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + day));
  }
}
