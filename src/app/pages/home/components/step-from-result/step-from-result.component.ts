import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-from-result',
  templateUrl: './step-from-result.component.html',
  styleUrls: ['./step-from-result.component.scss']
})
export class StepFromResultComponent implements OnInit {
  @Input() form?:FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
