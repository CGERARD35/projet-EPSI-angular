import {Component, OnInit} from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientsService) {
  }

  ngOnInit(): void {
    this.clientId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getCurrentClient();
  }

  private getCurrentClient() {
    this.clientService.getItemById(this.clientId).subscribe(
      client => this.client = client
    )
  }

  updateClient() {
    console.log(this.client)
    this.clientService.updateItemById(this.client).subscribe(
      result => this.client = result
    )
  }
}
