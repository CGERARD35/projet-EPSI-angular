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

  // getClient permet d'aller chercher les clients créés
  private getClient(){
    this.clientService.getCollection().subscribe(
      client => {
        console.log(client)
        this.client = client
      }
    )
  }

// addClient: permet d'ajouter un client
  public addClient(client: Client) {
    // utilise le Service Client et la méthode addItem qui permet le post du Client
    this.clientService.addItem(client).subscribe(
      () => {
        this.getClient();
        // router.navigate renvoi vers la page ../clients
        this.router.navigate(['/clients']);
        // affiche un message toastr si le client est ajouté
        this.toastr.success('', 'Client ajouté');
      }
    );
  }


}
