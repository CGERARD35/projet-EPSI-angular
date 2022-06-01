import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AdminService} from "../../../admin/admin.service";
import {Admin} from "../../../core/models/admin";

@Component({
  selector: 'app-page-user-management-list',
  templateUrl: './page-user-management-list.component.html',
  styleUrls: ['./page-user-management-list.component.scss']
})
export class PageUserManagementListComponent implements OnInit {

  public admin$!: Observable<Admin[]>;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.admin$ = this.adminService.getCollection();

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
}
