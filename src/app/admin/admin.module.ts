import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageUserManagementListComponent } from './pages/page-user-management-list/page-user-management-list.component';
import {IconsModule} from "../icons/icons.module";
import { PageUserManagementAddComponent } from './pages/page-user-management-add/page-user-management-add.component';
import { PageUserManagementEditComponent } from './pages/page-user-management-edit/page-user-management-edit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PageUserManagementListComponent,
    PageUserManagementAddComponent,
    PageUserManagementEditComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        IconsModule,
        FormsModule
    ]
})
export class AdminModule { }
