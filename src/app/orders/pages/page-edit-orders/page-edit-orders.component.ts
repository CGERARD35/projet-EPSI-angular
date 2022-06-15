import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../../core/models/order";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {PayementOrders} from "../../../core/enums/payement";

@Component({
  selector: 'app-page-edit-orders',
  templateUrl: './page-edit-orders.component.html',
  styleUrls: ['./page-edit-orders.component.scss']
})
export class PageEditOrdersComponent implements OnInit {

  public orderId = 0;
  public order = new Order();
  public payee = PayementOrders.PAYEE;
  public impayee = PayementOrders.IMPAYEE

  constructor(private activatedRoute : ActivatedRoute,
              private router: Router,
              private orderService : OrdersService,
              private toastr : ToastrService
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
    if (this.order.prix > 0){
      this.orderService.updateOrder(this.order).subscribe(
        order => {
          this.order = order;
          this.router.navigate(['/orders']);
        }
      )
      this.toastr.success("La commande n° " + this.order.id + " a été modifiée" , "Commande modifiée");
    } else {
      this.toastr.warning("Champs manquants ou erronés", "Commande non modifiée");
    }
  }
}
