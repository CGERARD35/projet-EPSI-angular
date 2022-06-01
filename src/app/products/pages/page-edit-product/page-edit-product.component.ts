import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../products.service";
import {Product} from "../../../core/models/product";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-page-edit-product',
  templateUrl: './page-edit-product.component.html',
  styleUrls: ['./page-edit-product.component.scss']
})
export class PageEditProductComponent implements OnInit {

  public productId = 0;
  public product: Product = new Product();

  constructor(private productService: ProductsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getCurrentProduct();
  }

  private getCurrentProduct() {
    this.productService.getItemById(this.productId).subscribe(
      product => {
        this.product = product
      }
    )
  }

  updateProduct() {
    this.productService.updateItemById(this.product).subscribe(
      result =>  {
        this.product = result
      }
    )
  }

}
