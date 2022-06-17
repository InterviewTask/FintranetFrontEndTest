import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-table',
  templateUrl: './step-table.component.html',
  styleUrls: ['./step-table.component.scss']
})
export class StepTableComponent implements OnInit {
  @Input() form?:FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
