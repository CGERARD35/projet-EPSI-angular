import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageStatisticComponent} from "./pages/page-statistic/page-statistic.component";

const routes: Routes = [
  { path : '', pathMatch: 'full', component: PageStatisticComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
