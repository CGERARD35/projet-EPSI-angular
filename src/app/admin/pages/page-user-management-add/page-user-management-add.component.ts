import { Component, OnInit } from '@angular/core';
import {Product} from "../../../core/models/product";
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private adminService: AdminService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }



  public addUser() {
    this.adminService.addItemById(this.newUser).subscribe(
      () => {
        this.adminService.getCollection();
        this.router.navigate(['/admin']);
        this.toastr.success('', 'Utilisateur ajouté');

        //Ajouter toaster en cas d'erreur
      }
    )
  }

}
