import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin/admin.service";
import {Admin} from "../../core/models/admin";
import {Observable} from "rxjs";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public show : boolean = false;

  constructor(private router: Router,
              private userService : AdminService) {
  }

  ngOnInit(): void {

  }

  public showAndHideMenu(): void {
    this.show = !this.show;
  }

  logout() {
    this.userService.deconnect().subscribe(() => this.router.navigate(['/connexion']));
  }
}
