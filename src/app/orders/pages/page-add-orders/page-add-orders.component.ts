import { Component, OnInit } from '@angular/core';
import {ClientsService} from "../../../clients/clients.service";

@Component({
  selector: 'app-page-add-orders',
  templateUrl: './page-add-orders.component.html',
  styleUrls: ['./page-add-orders.component.scss']
})
export class PageAddOrdersComponent implements OnInit {



  constructor(
    private clientsService : ClientsService
  ) { }

  ngOnInit(): void {
  }

  createOrder() {

  }
}
