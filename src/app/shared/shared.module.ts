import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeShareModule } from '../theme/external-ui-kit';

const Components = [];
const Pipes = [];
const Directive = [];
const Modules= [
  PrimeShareModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports:[
    ...Modules
  ]
})
export class SharedModule { }
