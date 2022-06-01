import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../../../core/models/order";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public orders$!: Observable<Order[]>;

  constructor(private ordersService : OrdersService) { }

  ngOnInit(): void {
    this.orders$ = this.ordersService.getAllOrders();
    this.loadScript('../../../../assets/searchbar.js');
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
