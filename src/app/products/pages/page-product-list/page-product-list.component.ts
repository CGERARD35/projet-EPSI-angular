import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {Product} from "../../../core/models/product";
import {ProductsService} from "../../../products/products.service";

@Component({
  selector: 'app-page-product-list',
  templateUrl: './page-product-list.component.html',
  styleUrls: ['./page-product-list.component.scss']
})
export class PageProductListComponent implements OnInit {

  public produits$!: Observable<Product[]>;
  public status!: string;



  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.produits$ = this.productService.getCollection();

    this.loadScript('../../../../assets/searchbar.js');
  }


  public deleteProduct(productId: number) {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?'))
    this.productService.deleteItemById(productId).subscribe(
      () => {
        this.status = "Supprimé";
        this.produits$ = this.productService.getCollection();
      }
    )
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
