import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifierRoutingModule } from './modifier-routing.module';
import { ModifierComponent } from './modifier.component';


@NgModule({
  declarations: [
    ModifierComponent
  ],
  imports: [
    CommonModule,
    ModifierRoutingModule
  ]
})
export class ModifierModule { }
