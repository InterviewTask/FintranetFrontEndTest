import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {FileUploadModule} from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {KeyFilterModule} from 'primeng/keyfilter';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';

const primengModule = [
  StepsModule,
  CardModule,
  DividerModule,
  FileUploadModule,
  CalendarModule,
  ButtonModule,
  KeyFilterModule,
  DropdownModule,
  InputTextModule,
  TableModule,

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primengModule
  ],
  exports:[
    ...primengModule
  ]
})
export class PrimeShareModule { }
