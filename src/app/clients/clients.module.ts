import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageClientsListComponent } from './pages/page-clients-list/page-clients-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IconsModule} from "../icons/icons.module";
import { FormClientComponent } from './components/form-client/form-client.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    PageAddClientComponent,
    PageEditClientComponent,
    PageClientsListComponent,
    FormClientComponent,
],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        FormsModule,
        IconsModule,
        ReactiveFormsModule,
        SharedModule,
    ],
  exports: [
    PageClientsListComponent,
    PageAddClientComponent,
    PageEditClientComponent,
  ],
})
export class ClientsModule { }
