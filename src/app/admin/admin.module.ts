import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageUserManagementListComponent } from './pages/page-user-management-list/page-user-management-list.component';


@NgModule({
  declarations: [
    PageUserManagementListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
