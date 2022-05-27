import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public clientId = 0;
  public client: Client = new Client;

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientsService) { }

  ngOnInit(): void {
    this.getClientByIdFromUrl()
  }

  private getClient() {
    this.clientService.getItemById(this.clientId).subscribe(
      client => this.client = client
    )
    }
    private getClientByIdFromUrl(){
    this.activatedRoute.url.subscribe(
      url => {
        const id = url[url.length - 1].path;
        this.clientId = Number(id);
        this.getClient();
      }
    )
    }

}
