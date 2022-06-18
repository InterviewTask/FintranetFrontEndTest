import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-from-result',
  templateUrl: './step-from-result.component.html',
  styleUrls: ['./step-from-result.component.scss']
})
export class StepFromResultComponent implements OnInit {
  @Input() form?: FormGroup
  data: any;
  path = ''
  constructor() { }

  ngOnInit(): void {
    this.data = this.form?.value;
    if (this.data.image) {
      this.createImage(this.data.image);
    }
  }

  createImage(imageFile: File) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.path = fileReader.result as string;
    };
    fileReader.readAsDataURL(imageFile);
  }

}
