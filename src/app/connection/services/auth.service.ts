import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, map, Observable, pipe, tap} from "rxjs";
import {Admin} from "../../core/models/admin";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connectedUser$ = new BehaviorSubject<Admin | null>(null);


  constructor(private http: HttpClient) { }

  public getConnectedUser$(): Observable<Admin | null> {
    return  this.connectedUser$.asObservable();
  }

  public authenticate(mail: string, password: string): Observable<Admin> {
    //auth grace au header
    const headers = new HttpHeaders({
      authorization: 'Basic ' + btoa(mail + ':' + password)
    });

    const params = new HttpParams()
      .set('mail', mail)
      .set('password', password);

    //call http sur connexion avec le header authorization en basic
    return this.http.get<Admin>(('/api/v1/admin/connexion'), {headers, params})
      .pipe(
        tap(user => this.connectedUser$.next(user))
      );

  }
}

// au click sur login verifie si droit
// atribution du role
// cookie de session
//
