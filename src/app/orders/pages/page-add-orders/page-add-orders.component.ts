import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../../clients/clients.service";
import {Observable} from "rxjs";
import {Order} from "../../../core/models/order";
import {Client} from "../../../core/models/client";
import {Product} from "../../../core/models/product";
import {ProductsService} from "../../../products/products.service";

@Component({
  selector: 'app-page-add-orders',
  templateUrl: './page-add-orders.component.html',
  styleUrls: ['./page-add-orders.component.scss']
})
export class PageAddOrdersComponent implements OnInit {

  public clients$!: Observable<Client[]>;
  public products$! : Observable<Product[]>;

  constructor(
    private clientsService : ClientsService,
    private productsServices : ProductsService
  ) { }

  ngOnInit(): void {
    this.getClients();
    this.getProducts();
  }

  public getClients(){
    this.clients$ = this.clientsService.getCollection()
  }

  public getProducts(){
    this.products$ = this.productsServices.getCollection()
  }

  createOrder() {

  }
}
