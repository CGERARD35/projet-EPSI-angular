import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public newClient: Client = new Client;
  public client!:Client[];

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientsService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  private getClient(){
    this.clientService.getCollection().subscribe(
      client => {
        console.log(client)
        this.client = client
      }
    )
  }

  public addClient() {
    this.clientService.addItemById(this.newClient).subscribe(
      () => {
        this.getClient();
      }
    )
  }

  showToastr() {
    this.toastr.success('', 'Client ajouté');

  }
}
