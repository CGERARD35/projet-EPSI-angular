import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionPageComponent } from './pages/connection-page/connection-page.component';
import {RouterModule} from "@angular/router";
import {ConnectionRoutingModule} from "./connection-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        ConnectionPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ConnectionRoutingModule,
        FormsModule,
    ],
    exports: [
      ConnectionPageComponent,
    ]
})
export class ConnectionModule { }
