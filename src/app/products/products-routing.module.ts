import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageProductListComponent} from "./pages/page-product-list/page-product-list.component";
import {PageAddProductComponent} from "./pages/page-add-product/page-add-product.component";
import {PageEditProductComponent} from "./pages/page-edit-product/page-edit-product.component";

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo : 'list' },
  { path : 'list',  component : PageProductListComponent  },
  { path : 'add',  component : PageAddProductComponent },
  { path : 'edit/:id', component : PageEditProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
