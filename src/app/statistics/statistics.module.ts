import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { PageStatisticComponent } from './pages/page-statistic/page-statistic.component';


@NgModule({
  declarations: [
    PageStatisticComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
