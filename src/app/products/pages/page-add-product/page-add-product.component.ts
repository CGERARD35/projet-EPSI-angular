import { Component, OnInit } from '@angular/core';
import {Product} from "../../../core/models/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../products.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-page-add-product',
  templateUrl: './page-add-product.component.html',
  styleUrls: ['./page-add-product.component.scss']
})
export class PageAddProductComponent implements OnInit {

  public newProduct: Product = new Product;
  public product!:Product[];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  private getProduct(){
    this.productService.getCollection().subscribe(
      product => {
        console.log(product)
        this.product = product
      }
    )
  }

  public addProduct() {
    this.productService.addItemById(this.newProduct).subscribe(
      () => {
        this.getProduct();
        //Ajouter Link routing pour réactualiser la liste
        //Ajouter toaster en cas d'erreur
      }
    )
  }

  showToastr() {
    this.toastr.success('', 'Produit ajouté');

  }
}
