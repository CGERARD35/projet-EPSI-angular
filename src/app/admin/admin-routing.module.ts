import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageUserManagementListComponent} from "./pages/page-user-management-list/page-user-management-list.component";

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo : 'user-management' },
  { path : 'user-management', component: PageUserManagementListComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
