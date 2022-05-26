import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    LayoutComponent,
  ]
})
export class UiModule { }
