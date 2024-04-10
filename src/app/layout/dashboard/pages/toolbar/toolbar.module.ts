import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';
import { MyModalModule } from '../../../../components/my-modal/my-modal.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MyModalModule,
    SharedModule
  ],
  exports:[
    ToolbarComponent
  ],
})
export class ToolbarModule { }
