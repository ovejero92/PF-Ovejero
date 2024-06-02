import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotComponent } from './chatbot.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    MatProgressSpinnerModule,
    SharedModule,
    FormsModule
  ]
})
export class ChatbotModule { }
