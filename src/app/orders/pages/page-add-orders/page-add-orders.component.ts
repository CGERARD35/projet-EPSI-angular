import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../../clients/clients.service";
import {Observable} from "rxjs";
import {Client} from "../../../core/models/client";
import {Product} from "../../../core/models/product";
import {ProductsService} from "../../../products/products.service";
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../../core/models/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-add-orders',
  templateUrl: './page-add-orders.component.html',
  styleUrls: ['./page-add-orders.component.scss']
})
export class PageAddOrdersComponent implements OnInit {

  public getClientId: any[] = [] ;
  public client = new Client();
  public productId = 1
  public product = new Product()
  public clients$!: Observable<Client[]>;
  public products$! : Observable<Product[]>;
  public newOrder = new Order();
  private orders$!: Observable<Order[]>;

  constructor(
    private clientsService : ClientsService,
    private productsServices : ProductsService,
    private ordersService : OrdersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.clientInitialisation();
    this.productInitialisation();
    this.getClients();
    this.getProducts();
  }

  public getClients(){
    this.clients$ = this.clientsService.getCollection()
  }

  public getProducts(){
    this.products$ = this.productsServices.getCollection()
  }

  public getOrders(){
    this.orders$ = this.ordersService.getAllOrders();
  }

  clientInitialisation(){
    this.clientsService.getCollection().subscribe(
      value => this.getClientId = value
        .map(value1 => value1.id));
  }


  selectClient(event: any) {
    this.getClientId  = event.target.value;
    this.clientsService.getItemById(this.getClientId[0]).subscribe(
      (client) => this.client = client)
  }

  productInitialisation() {
    this.productsServices.getItemById(this.productId).subscribe(
      (product) => this.product = product)
  }

  selectProduct(event: any) {
    this.productId = event.target.value
    this.productsServices.getItemById(this.productId).subscribe(
      (product) => this.product = product)
  }

  createOrder() {
    this.newOrder.clientId = this.getClientId[0];
    this.newOrder.produitId = this.product.id;
    this.newOrder.produit.prix = this.product.prix;
    this.newOrder.client.nom = this.client.nom;
    this.newOrder.client.prenom = this.client.prenom;
    this.newOrder.client.company = this.client.societe;
    this.newOrder.prix = this.product.prix * this.newOrder.duree;
    this.ordersService.addOrder(this.newOrder).subscribe(
      (order)=> {
        this.newOrder = order
        this.router.navigate(['/orders']);
      })
  }
}
