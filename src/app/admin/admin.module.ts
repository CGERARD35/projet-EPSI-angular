import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageUserManagementListComponent } from './pages/page-user-management-list/page-user-management-list.component';
import {IconsModule} from "../icons/icons.module";


@NgModule({
  declarations: [
    PageUserManagementListComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        IconsModule
    ]
})
export class AdminModule { }
