import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../../../core/models/client";
import {ClientsService} from "../../clients.service";

@Component({
  selector: 'app-page-clients-list',
  templateUrl: './page-clients-list.component.html',
  styleUrls: ['./page-clients-list.component.scss']
})
export class PageClientsListComponent implements OnInit {

  public clients$!: Observable<Client[]>;
  public status!: string;
  public client: Client[] | undefined;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clients$ = this.clientService.getCollection();

    this.loadScript('../../../../assets/searchbar.js');
  }

  public deleteClient(clientId: number){
    this.clientService.deleteItemById(clientId).subscribe(
      () => {
        this.clients$ = this.clientService.getCollection();
      }
    )
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

  deleteConfirm(nom: string, clientId: number) {
    if (confirm("Voulez vous vraiment supprimer "+nom+ ' ?')) {
      this.deleteClient(clientId);
    }

  }

}
