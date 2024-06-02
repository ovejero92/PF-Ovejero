import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgorundsRoutingModule } from './backgorunds-routing.module';
import { BackgorundsComponent } from './backgorunds.component';


@NgModule({
  declarations: [
    BackgorundsComponent
  ],
  imports: [
    CommonModule,
    BackgorundsRoutingModule
  ]
})
export class BackgorundsModule { }
