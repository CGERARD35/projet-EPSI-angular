import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(private activatedRoute: ActivatedRoute,
              private clientService: ClientsService,
              private toastr: ToastrService,
              private router: Router) {
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

  public addClient(client: Client) {
    this.clientService.addItem(client).subscribe(
      () => {
        this.getClient();
        this.router.navigate(['/clients']);
        this.successToastr();
      }, error => {
        this.warningToastr();
      }

    )
  }

  successToastr() {
    this.toastr.success('', 'Client ajouté');

  }
  warningToastr() {
    this.toastr.warning('Impossible d\'ajouter le client', 'Problème');
  }


}
