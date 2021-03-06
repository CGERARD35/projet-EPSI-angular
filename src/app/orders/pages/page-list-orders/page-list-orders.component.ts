import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {Order} from "../../../core/models/order";
import {OrdersService} from "../../services/orders.service";
import {ToastrService} from "ngx-toastr";
import {PayementOrders} from "../../../core/enums/payement";


@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public orders$!: Observable<Order[]>;
  public orderPayee = PayementOrders.PAYEE;

  constructor(
    private ordersService : OrdersService,
    private toastr : ToastrService
  ) { }

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

  deleteOrder(nom: string, id: number) {
    if(confirm("Voulez-vous supprimer cette commande du client : " + nom + " ?"))
    this.ordersService.deleteItemById(id).subscribe(
      () => {
          this.orders$ = this.ordersService.getAllOrders(),
          this.toastr.error("Commande supprimée")
      }
    )
  }
}
