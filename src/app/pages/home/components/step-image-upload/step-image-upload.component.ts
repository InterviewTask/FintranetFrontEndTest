import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepperFormHandlerService } from '../../services';

@Component({
  selector: 'app-step-image-upload',
  templateUrl: './step-image-upload.component.html',
  styleUrls: ['./step-image-upload.component.scss']
})
export class StepImageUploadComponent  implements OnInit {
  @Input() form!:FormGroup
  externalFiles:File[]=[];
  constructor() {}

  ngOnInit(): void {
   this.addFileToUploader();
  }
  addFileToUploader(){
    if(this.form.get('image')?.value) {
      this.externalFiles.push(this.form.get('image')?.value);
      }
  }

  myUploader(event:any){
    console.log( event);
    this.form?.get('image')?.setValue(event.files[0])
  }


}
