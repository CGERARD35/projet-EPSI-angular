import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrdersComponent } from './pages/page-add-orders/page-add-orders.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PageAddOrdersComponent,
    PageEditOrdersComponent,
    PageListOrdersComponent
  ],
    imports: [
        CommonModule,
        OrdersRoutingModule,
        FormsModule
    ],
  exports: [
    PageAddOrdersComponent,
    PageEditOrdersComponent,
    PageListOrdersComponent
  ]
})
export class OrdersModule { }
