import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ConnectionPageComponent} from "./pages/connection-page/connection-page.component";

const routes: Routes = [
  { path : "", pathMatch: "full",component : ConnectionPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
