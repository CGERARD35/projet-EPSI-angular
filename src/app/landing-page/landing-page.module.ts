import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLandingPageComponent } from '../core/components/header-landing-page/header-landing-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {RouterModule} from "@angular/router";
import {ConnectionModule} from "../connection/connection.module";
import {LandingPageRoutingModule} from "./landing-page-routing.module";



@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingPageRoutingModule,
  ],
  exports: [
    LandingPageComponent,
  ]

})
export class LandingPageModule { }
