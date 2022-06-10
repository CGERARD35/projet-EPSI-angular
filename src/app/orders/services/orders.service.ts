import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../../core/models/order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService{

  private url: string='/api/commande';

  constructor(private httpClient : HttpClient) { }

  getOrderById(id : number) : Observable<Order> {
    return this.httpClient.get<Order>(this.url + '/'+ id);
  }

  getAllOrders() : Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.url);
  }

  updateOrder(order : Order) : Observable<Order> {
    return this.httpClient.put<Order>(this.url + '/' + order.id, order);
  }

  addOrder(order : Order) : Observable<Order>{
    return this.httpClient.post<Order>(this.url, order);
  }

  deleteItemById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + '/' + id);
  }

}
