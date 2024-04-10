import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModalRoutingModule } from './my-modal-routing.module';
import { MyModalComponent } from './my-modal.component';


@NgModule({
  declarations: [MyModalComponent],
  imports: [
    CommonModule,
    MyModalRoutingModule
  ],
  exports:[MyModalComponent],
})
export class MyModalModule { }
