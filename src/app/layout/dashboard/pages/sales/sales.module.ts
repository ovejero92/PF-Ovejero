import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../../../shared/shared.module';
import { MyModalModule } from '../../../../components/my-modal/my-modal.module';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatProgressSpinnerModule,
    SharedModule,
    MyModalModule
  ],
})
export class SalesModule {}