import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientsService} from "../../../clients/clients.service";
import {AdminService} from "../../admin.service";
import {Admin} from "../../../core/models/admin";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-page-user-management-edit',
  templateUrl: './page-user-management-edit.component.html',
  styleUrls: ['./page-user-management-edit.component.scss']
})
export class PageUserManagementEditComponent implements OnInit {

  public userId = 0;
  public admin: Admin = new Admin();

  constructor(private activatedRoute: ActivatedRoute,
              private adminService: AdminService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getCurrentuser();
  }

  getCurrentuser() {
    this.adminService.getItemById(this.userId).subscribe(
      admin => {
        this.admin = admin
      }
    )
  }

   updateUser() {
    this.adminService.updateItemById(this.admin).subscribe(
      result =>  {
          this.admin = result
      }
    )
  }

  showToastr() {
    this.toastr.success('', 'Utilisateur modifié');

  }

}
