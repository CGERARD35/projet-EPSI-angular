import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageModule} from "../landing-page/landing-page.module";
import {HeaderLandingPageComponent} from "./components/header-landing-page/header-landing-page.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    HeaderLandingPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LandingPageModule,
    HeaderLandingPageComponent,
  ]
})
export class CoreModule { }
