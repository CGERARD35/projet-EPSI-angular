import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin/admin.service";
import {Admin} from "../../core/models/admin";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Route, Router} from "@angular/router";
import {AuthService} from "../../connection/services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public show : boolean = false;
  public connectedUser$!: Observable<Admin | null>;

  constructor(
              private router: Router,
              private userService : AdminService,
              private authService : AuthService
  ) {
  }

  ngOnInit(): void {
    this.connectedUser$ = this.authService.getConnectedUser$()
      .pipe(
        tap(value => console.log('Utilisateur connecté: ', value))
      );
  }

  public showAndHideMenu(): void {
    this.show = !this.show;
  }

  logout() {
    this.userService.deconnect().subscribe(() => this.router.navigate(['/connexion']));
  }
}
