import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-from-info',
  templateUrl: './step-from-info.component.html',
  styleUrls: ['./step-from-info.component.scss']
})
export class StepFromInfoComponent implements OnInit {
  @Input() form?:FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
