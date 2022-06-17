import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {
  StepImageUploadComponent,
  StepTableComponent,
  StepFromInfoComponent,
  StepFromResultComponent,
} from './components'
import { SharedModule } from '@fintranet/share';
import { HomeRoutingModule } from './home-routing.module';
import { StepperFormHandlerService } from './services';

@NgModule({
  declarations: [
    HomeComponent,
    StepImageUploadComponent,
    StepTableComponent,
    StepFromInfoComponent,
    StepFromResultComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[
    StepperFormHandlerService
  ]
})
export class HomeModule { }
