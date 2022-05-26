import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageClientsListComponent } from './pages/page-clients-list/page-clients-list.component';
import {SharedModule} from "../shared/shared.module";
import {MenuComponent} from "../shared/menu/menu.component";

@NgModule({
  declarations: [
    PageAddClientComponent,
    PageEditClientComponent,
    PageClientsListComponent,
],
  imports: [
    CommonModule,
    ClientsRoutingModule,
  ],
  exports: [
    PageClientsListComponent,
    PageAddClientComponent,
    PageEditClientComponent,
  ],
})
export class ClientsModule { }
