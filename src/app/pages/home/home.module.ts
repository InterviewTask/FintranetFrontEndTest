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
import { StepperFormHandlerService, UsersService } from './services';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,

  ],
  providers:[
    StepperFormHandlerService,
    UsersService
  ]
})
export class HomeModule { }
