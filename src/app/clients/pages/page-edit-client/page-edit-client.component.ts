import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs";

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public clientId = 0;
  public client: Client = new Client;

  public item$!: Observable<Client>;

  constructor(private activatedRoute: ActivatedRoute,
              private clientService: ClientsService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.clientId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.item$ = this.clientService.getItemById(this.clientId);
  }

  public updateClient(item: Client) {

    if (this.clientService.updateItemById(this.client).subscribe(
      result =>  {
        this.router.navigate(['clients']);
      }
    )) {this.toastr.success('', 'Client modifié');
    };
  }

}
