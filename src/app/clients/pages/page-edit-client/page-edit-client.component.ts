import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientsService} from "../../clients.service";
import {Client} from "../../../core/models/client";
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs";
import {error} from "@angular/compiler/src/util";

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

  // recupere l'ID du client (Number change le string en number)
  ngOnInit(): void {
    this.clientId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    // recupere l'ID du client dans le tableau de Client
    this.item$ = this.clientService.getItemById(this.clientId);
  }

  // mise à jour du client
  public updateClient(client: Client) {
// mise à jour avec l'ID du client
    this.clientService.updateItemById(client).subscribe(
      result =>  {
        // renvoi à la page /clients
        this.router.navigate(['clients']);
        // affiche message toaster si client bien créé
    this.toastr.success('', 'Client modifié');
    // affiche message toaster si problème de champs dans le formulaire client
    });
  }
}
