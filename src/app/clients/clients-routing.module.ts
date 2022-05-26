import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageEditClientComponent} from "./pages/page-edit-client/page-edit-client.component";
import {PageClientsListComponent} from "./pages/page-clients-list/page-clients-list.component";
import {PageAddClientComponent} from "./pages/page-add-client/page-add-client.component";

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo : 'list' },
  { path : 'list',  component : PageClientsListComponent  },
  { path : 'add',  component : PageAddClientComponent },
  { path : 'edit/:id', component : PageEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
