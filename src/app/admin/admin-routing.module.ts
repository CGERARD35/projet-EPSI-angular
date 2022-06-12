import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageUserManagementListComponent} from "./pages/page-user-management-list/page-user-management-list.component";
import {PageUserManagementAddComponent} from "./pages/page-user-management-add/page-user-management-add.component";
import {PageUserManagementEditComponent} from "./pages/page-user-management-edit/page-user-management-edit.component";

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo : 'list' },
  { path : 'list', component: PageUserManagementListComponent },
  { path : 'add', component: PageUserManagementAddComponent },
  {path :'edit/:id', component: PageUserManagementEditComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
