import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../../core/models/order";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-edit-orders',
  templateUrl: './page-edit-orders.component.html',
  styleUrls: ['./page-edit-orders.component.scss']
})
export class PageEditOrdersComponent implements OnInit {

  public orderId = 0;
  public order = new Order();

  constructor(private activatedRoute : ActivatedRoute,
              private orderService : OrdersService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(
      url => {
        const id = url[url.length - 1].path;
        this.orderId = Number(id);
        this.getOrder();
      }
    );
  }

  private getOrder() {
    this.orderService.getOrderById(this.orderId).subscribe(
      order => {
        this.order = order;
      }
    )
  }


  public updateOrder() {
    this.order.prix = this.order.duree*this.order.produit.prix;
    this.orderService.updateOrder(this.order).subscribe(
      order => {
        this.order = order;
        this.orderService.getAllOrders();
      }
    )
  }
}
