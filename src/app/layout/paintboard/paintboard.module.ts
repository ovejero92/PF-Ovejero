import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintboardRoutingModule } from './paintboard-routing.module';
import { PaintboardComponent } from './paintboard.component';
import { SharedModule } from '../../shared/shared.module';
import { FooterModule } from '../dashboard/pages/footer/footer.module';


@NgModule({
  declarations: [
    PaintboardComponent
  ],
  imports: [
    CommonModule,
    PaintboardRoutingModule,
    SharedModule,
    FooterModule
  ],
  exports:[PaintboardComponent],
})
export class PaintboardModule { }
