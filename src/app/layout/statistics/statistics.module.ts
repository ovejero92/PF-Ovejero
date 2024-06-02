import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { SharedModule } from '../../shared/shared.module';
import { FooterModule } from '../dashboard/pages/footer/footer.module';
import { BestSellingComponent } from './pages/best-selling/best-selling.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    BestSellingComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    SharedModule,
    FooterModule
  ]
})
export class StatisticsModule { }
