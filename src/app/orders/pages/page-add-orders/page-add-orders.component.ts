import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../../clients/clients.service";
import {Observable} from "rxjs";
import {Client} from "../../../core/models/client";
import {Product} from "../../../core/models/product";
import {ProductsService} from "../../../products/products.service";
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../../core/models/order";

@Component({
  selector: 'app-page-add-orders',
  templateUrl: './page-add-orders.component.html',
  styleUrls: ['./page-add-orders.component.scss']
})
export class PageAddOrdersComponent implements OnInit {

  private clientId = 0;
  public client = new Client();
  private productId = 0
  public product = new Product()
  public clients$!: Observable<Client[]>;
  public products$! : Observable<Product[]>;
  public newOrder = new Order();
  private orders$!: Observable<Order[]>;

  constructor(
    private clientsService : ClientsService,
    private productsServices : ProductsService,
    private ordersService : OrdersService
  ) { }

  ngOnInit(): void {
    this.getClients();
    this.getProducts();
    this.getOrders();
  }

  public getClients(){
    this.clients$ = this.clientsService.getCollection()
  }

  public getProducts(){
    this.products$ = this.productsServices.getCollection()
  }

  public getOrders(){
    this.orders$ =   this.ordersService.getAllOrders();
  }


  selectClient(event: any) {
    this.clientId  = event.target.value;
    this.clientsService.getItemById(this.clientId).subscribe(
      (client) => this.client = client)
  }

  selectProduct(event: any) {
    this.productId = event.target.value
    this.productsServices.getItemById(this.productId).subscribe(
      (product) => this.product = product)
  }

  createOrder() {
    this.newOrder.produit.nomProduit = this.product.nom;
    this.newOrder.client.nom = this.client.nom;
    this.newOrder.client.prenom = this.client.prenom;
    this.newOrder.client.company = this.client.societe;
    this.newOrder.prix = this.product.prix * this.newOrder.duree;
    this.ordersService.addOrder(this.newOrder).subscribe(
      (order)=> this.newOrder = order)
    this.getClients()
    this.getOrders()
    this.getProducts()
  }
}
