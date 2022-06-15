import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "../core/models/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url: string='/api/v1/admin';

  constructor(private httpClient: HttpClient) { }

  getItemById(id: number): Observable<Admin> {
    return this.httpClient.get<Admin>(this.url + '/' + id);
  }

  getCollection(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.url);
  }

  deleteItemById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + '/' + id);
  }

  updateItemById(admin: Admin): Observable<Admin> {
    return this.httpClient.put<Admin>(this.url + '/' + admin.id, admin);
  }

  addItemById(admin: Admin): Observable<void> {
    return this.httpClient.post<void>(this.url, admin);
  }

  deconnect(){
    return this.httpClient.get("/api/v1/logout");
  }
}
