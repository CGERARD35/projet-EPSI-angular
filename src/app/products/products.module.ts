import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PageAddProductComponent } from './pages/page-add-product/page-add-product.component';
import { PageProductListComponent } from './pages/page-product-list/page-product-list.component';
import { PageEditProductComponent } from './pages/page-edit-product/page-edit-product.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PageAddProductComponent,
    PageProductListComponent,
    PageEditProductComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule
    ]
})
export class ProductsModule { }
