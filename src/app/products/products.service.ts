import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../core/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string='/api/v1/products';

  constructor(private httpClient: HttpClient) { }

  getItemById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.url + '/' + id);
  }

  getCollection(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  deleteItemById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + '/' + id);
  }

  updateItemById(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.url + '/' + product.id, product);
  }

  addItemById(client: Product): Observable<void> {
    return this.httpClient.post<void>(this.url, client);
  }

}
