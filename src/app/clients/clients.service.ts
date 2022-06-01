import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../core/models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url: string='http://localhost:3000/clients';

  constructor(private httpClient: HttpClient) { }

  getItemById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(this.url + '/' + id);
  }

  getCollection(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url);
  }

  deleteItemById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + '/' + id);
  }

  updateItemById(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(this.url + '/' + client.id, client);
  }

  addItemById(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.url, client);
  }
}
