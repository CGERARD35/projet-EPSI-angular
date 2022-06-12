import { Component, OnInit } from '@angular/core';
import {Product} from "../../../core/models/product";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../admin.service";
import {Admin} from "../../../core/models/admin";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-page-user-management-add',
  templateUrl: './page-user-management-add.component.html',
  styleUrls: ['./page-user-management-add.component.scss']
})
export class PageUserManagementAddComponent implements OnInit {

  public newUser: Admin = new Admin;
  public admin!: Admin[];

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }



  public addUser() {
    this.adminService.addItemById(this.newUser).subscribe(
      () => {
        this.adminService.getCollection();
        //Ajouter Link routing pour réactualiser la liste
        //Ajouter toaster en cas d'erreur
      }
    )
  }

  showToastr() {
    this.toastr.success('', 'Utilisateur ajouté');

  }
}
