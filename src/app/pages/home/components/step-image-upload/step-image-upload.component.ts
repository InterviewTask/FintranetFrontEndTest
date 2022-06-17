import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepperFormHandlerService } from '../../services';

@Component({
  selector: 'app-step-image-upload',
  templateUrl: './step-image-upload.component.html',
  styleUrls: ['./step-image-upload.component.scss']
})
export class StepImageUploadComponent  implements OnInit {
  @Input() form?:FormGroup
  constructor(
    private stepperFormHandler: StepperFormHandlerService
  ) {
  }
  ngOnInit(): void {

  }


}
