import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageModule} from "../landing-page/landing-page.module";
import {HeaderLandingPageComponent} from "./components/header-landing-page/header-landing-page.component";
import {UiModule} from "../ui/ui.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HeaderLandingPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LandingPageModule,
    HeaderLandingPageComponent,
  ]
})
export class CoreModule { }
